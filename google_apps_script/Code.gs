/**
 * =========================================================================
 * Google Apps Script สำหรับระบบสมาชิกและระบบอนุมัติเว็บดูหนัง
 * ตาราง 8 คอลัมน์ (A - H):
 * A: UserId | B: Phone | C: Password | D: RegisteredDate | E: Status | F: ExpireDate | G: Watchlist | H: history
 * =========================================================================
 */

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "Google Apps Script Movie Auth API is active 🚀"
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var action = data.action;

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // ตรวจสอบหัวตาราง หากยังไม่มีให้สร้างหัวตาราง 8 คอลัมน์ A-H
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "UserId", "Phone", "Password", "RegisteredDate", "Status", "ExpireDate", "Watchlist", "history"
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#f3f3f3");
    }

    var result = {};

    // -------------------------------------------------------------
    // 1. สมัครสมาชิกใหม่ (register) หรือ ขอเปลี่ยนรหัสผ่าน (reset_password)
    // -------------------------------------------------------------
    if (action === "register" || action === "forgot_password") {
      var phone = String(data.phone || "").trim();
      var cleanPhone = phone.replace(/\D/g, "");
      if (cleanPhone.length === 9) cleanPhone = "0" + cleanPhone;
      var formattedPhone = "'" + cleanPhone; // ใส่ ' นำหน้าเพื่อให้เป็นข้อความ และเลข 0 ไม่หาย 100%

      var password = String(data.password || "").trim();
      var now = new Date();
      var dateFormatted = Utilities.formatDate(now, "Asia/Bangkok", "yyyy-MM-dd HH:mm:ss");

      var rows = sheet.getDataRange().getValues();
      var existingRowIndex = -1;

      // ค้นหาเบอร์โทรศัพท์ในคอลัมน์ B (เริ่มเช็คจากแถวที่ 2)
      for (var i = 1; i < rows.length; i++) {
        var rowPhone = String(rows[i][1] || "").replace(/\D/g, "");
        if (rowPhone.length === 9) rowPhone = "0" + rowPhone;
        if (rowPhone === cleanPhone) {
          existingRowIndex = i + 1; // 1-based index ใน Google Sheet
          break;
        }
      }

      // กรณีขอเปลี่ยนรหัสผ่าน หรือเบอร์นี้เคยมีอยู่แล้ว -> อัปเดตรหัสผ่านใหม่ แล้วตั้งสถานะเป็น "รออนุมัติ"
      if (existingRowIndex > 0) {
        sheet.getRange(existingRowIndex, 3).setValue(password); // Column C: Password
        sheet.getRange(existingRowIndex, 4).setValue(dateFormatted); // Column D: RegisteredDate
        sheet.getRange(existingRowIndex, 5).setValue("รออนุมัติ"); // Column E: Status

        result = {
          success: true,
          message: "บันทึกรหัสผ่านใหม่เรียบร้อยแล้ว สถานะของคุณคือ 'รออนุมัติ' กรุณารอแอดมินอนุมัติ ⏳"
        };
      } else {
        // กรณีเบอร์ใหม่ -> สร้าง UserId แล้วเพิ่มแถวใหม่ลงในคอลัมน์ A ถึง H
        var thaiYear = String(now.getFullYear() + 543).slice(-2);
        var pad = function(n) { return (n < 10 ? "0" : "") + n; };
        var genUserId = data.userId || ("VIP" + thaiYear + pad(now.getMonth() + 1) + pad(now.getDate()) + "-" + Math.floor(100 + Math.random() * 900));

        var watchlist = data.watchlist || "[]";
        var history = data.history || "[]";

        // เขียนลงแถวใหม่ให้ตรงเป๊ะทั้ง 8 คอลัมน์ (A - H)
        var newRow = [
          genUserId,         // Col A: UserId
          formattedPhone,    // Col B: Phone (มี ' นำหน้า เลข 0 ไม่หาย)
          password,          // Col C: Password
          dateFormatted,     // Col D: RegisteredDate
          "รออนุมัติ",       // Col E: Status
          "-",               // Col F: ExpireDate
          watchlist,         // Col G: Watchlist
          history            // Col H: history
        ];

        sheet.appendRow(newRow);

        // กำหนดรูปแบบคอลัมน์ B ให้เป็น Plain Text เสมอ
        var lastRow = sheet.getLastRow();
        sheet.getRange(lastRow, 2).setNumberFormat("@");

        result = {
          success: true,
          userId: genUserId,
          message: "สมัครสมาชิกสำเร็จ! ข้อมูลถูกส่งเข้า Google Sheet แล้ว กรุณารอแอดมินอนุมัติ ⏳"
        };
      }
    }

    // -------------------------------------------------------------
    // 2. เข้าสู่ระบบ (login) - ตรวจสอบความถูกต้องและสถานะการอนุมัติ 100%
    // -------------------------------------------------------------
    else if (action === "login") {
      var phoneInput = String(data.phone || "").trim().replace(/\D/g, "");
      if (phoneInput.length === 9) phoneInput = "0" + phoneInput;
      var passInput = String(data.password || "").trim();

      var rows = sheet.getDataRange().getValues();
      var userFound = null;

      for (var i = 1; i < rows.length; i++) {
        var rPhone = String(rows[i][1] || "").replace(/\D/g, "");
        if (rPhone.length === 9) rPhone = "0" + rPhone;

        if (rPhone === phoneInput) {
          userFound = {
            rowIndex: i + 1,
            userId: String(rows[i][0] || ""),
            phone: "0" + rPhone.replace(/^0+/, ""),
            password: String(rows[i][2] || ""),
            status: String(rows[i][4] || "").trim(),
            expireDate: String(rows[i][5] || "-"),
            watchlist: rows[i][6] || "[]",
            history: rows[i][7] || "[]"
          };
          break;
        }
      }

      if (!userFound) {
        result = {
          success: false,
          message: "❌ ไม่พบบัญชีผู้ใช้นี้ในระบบ กรุณาสมัครสมาชิกใหม่"
        };
      } else if (userFound.password !== passInput) {
        result = {
          success: false,
          message: "❌ รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง หรือกด 'ลืมรหัสผ่าน'"
        };
      } else {
        var st = userFound.status.toLowerCase();

        // ตรวจสอบสถานะการอนุมัติ
        if (st.indexOf("รออนุมัติ") !== -1 || st.indexOf("pending") !== -1 || st === "") {
          result = {
            success: false,
            message: "⏳ บัญชีของคุณอยู่ระหว่าง 'รออนุมัติ' จากแอดมิน กรุณารอสักครู่"
          };
        } else if (st.indexOf("ระงับ") !== -1 || st.indexOf("แบน") !== -1 || st.indexOf("block") !== -1) {
          result = {
            success: false,
            message: "🚫 บัญชีนี้ถูกระงับการใช้งาน กรุณาติดต่อแอดมิน"
          };
        } else {
          // ผ่านการตรวจสอบและสถานะได้รับอนุมัติแล้ว (เช่น "อนุมัติ", "ใช้งานได้", "VIP", "Active")
          result = {
            success: true,
            user: {
              userId: userFound.userId,
              phone: userFound.phone,
              status: userFound.status,
              expireDate: userFound.expireDate,
              watchlist: userFound.watchlist,
              history: userFound.history
            }
          };
        }
      }
    }

    // -------------------------------------------------------------
    // 3. ซิงค์รายการโปรด (sync_watchlist)
    // -------------------------------------------------------------
    else if (action === "sync_watchlist") {
      var phone = String(data.phone || "").replace(/\D/g, "");
      if (phone.length === 9) phone = "0" + phone;
      var rows = sheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        var rPhone = String(rows[i][1] || "").replace(/\D/g, "");
        if (rPhone === phone) {
          sheet.getRange(i + 1, 7).setValue(data.watchlist || "[]"); // Col G
          break;
        }
      }
      result = { success: true };
    }

    // -------------------------------------------------------------
    // 4. ซิงค์ประวัติการรับชม (sync_history)
    // -------------------------------------------------------------
    else if (action === "sync_history") {
      var phone = String(data.phone || "").replace(/\D/g, "");
      if (phone.length === 9) phone = "0" + phone;
      var rows = sheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        var rPhone = String(rows[i][1] || "").replace(/\D/g, "");
        if (rPhone === phone) {
          sheet.getRange(i + 1, 8).setValue(data.history || "[]"); // Col H
          break;
        }
      }
      result = { success: true };
    }

    else {
      result = { success: false, message: "Unknown action" };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
