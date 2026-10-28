/**
 * =========================================================================
 * Google Apps Script สำหรับระบบสมาชิกและระบบอนุมัติเว็บดูหนัง ผ่าน LINE
 * ตาราง 8 คอลัมน์ (A - H):
 * A: UserId | B: Phone | C: Password | D: RegisteredDate | E: Status | F: ExpireDate | G: Watchlist | H: history
 * =========================================================================
 */

// -------------------------------------------------------------
// การตั้งค่า LINE Messaging API & Security
// -------------------------------------------------------------
const LINE_CHANNEL_ACCESS_TOKEN = "ySRHeoP3bVm3bUAOCXut7lzYBos4SqvTI9epuhCA4ANq2wttPBnlbRa8quRXdxc1Kxc++6NFURm7f9pjRrEEX79w1Zanjkkf3EmASHBNRbo/PYP5HkkeeEYCr/IYC4XgOAnvzO8ne89JOkS94pz3zAdB04t89/1O/w1cDnyilFU=";
// รายชื่อ LINE User ID หรือ Group ID ของแอดมินที่มีสิทธิ์รับการแจ้งเตือนและกดอนุมัติ (สามารถใส่ได้หลายคน)
const ADMIN_LINE_USER_IDS = [
  "U82651d72dba0247279a27ab305152104" // Ton Nattapong (แอดมินหลัก)
  // สามารถเพิ่ม ID แอดมินคนที่ 2, 3 ได้ตามต้องการ เช่น: "Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
const ADMIN_LINE_USER_ID = ADMIN_LINE_USER_IDS[0];
const SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyKnLnnu7iJ3uPSV3tdpLO5HL6pZMGy5qzHSLu8Y4RoQq5MIYj1QVFXgZ3miynuNjPX/exec";
const SECRET_KEY = "VIP_AUTH_MOVIE_LINE_APPROVAL_2026";

/**
 * -------------------------------------------------------------
 * 1. ฟังก์ชันรับคำสั่งอนุมัติผ่าน LINE (doGet)
 * เมื่อแอดมินคลิกปุ่มใน LINE ระบบจะวิ่งมาทำงานที่นี่
 * -------------------------------------------------------------
 */
function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action) {
      var action = e.parameter.action;
      var userId = e.parameter.userId;
      var days = parseInt(e.parameter.days || "30", 10);
      var token = e.parameter.token;

      if (token !== SECRET_KEY) {
        return HtmlService.createHtmlOutput("<h2 style='color:#ef4444;text-align:center;padding:40px;font-family:sans-serif;'>❌ รหัสความปลอดภัยไม่ถูกต้อง (Unauthorized)</h2>");
      }

      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getActiveSheet();
      var rows = sheet.getDataRange().getValues();
      var foundIndex = -1;
      var currentPhone = "";

      for (var i = 1; i < rows.length; i++) {
        if (String(rows[i][0]).trim() === String(userId).trim()) {
          foundIndex = i + 1; // 1-based index in Sheet
          currentPhone = String(rows[i][1] || "").replace(/^'+/, "");
          break;
        }
      }

      if (foundIndex === -1) {
        return HtmlService.createHtmlOutput("<h2 style='color:#ef4444;text-align:center;padding:40px;font-family:sans-serif;'>❌ ไม่พบข้อมูลสมาชิกนี้ในระบบ</h2>");
      }

      // 1.1 กรณีอนุมัติ (Approve)
      if (action === "approve") {
        var expDate = new Date();
        expDate.setDate(expDate.getDate() + days);
        var expDateFormatted = Utilities.formatDate(expDate, "Asia/Bangkok", "yyyy-MM-dd");

        sheet.getRange(foundIndex, 5).setValue("อนุมัติ"); // Col E: Status
        sheet.getRange(foundIndex, 6).setValue(expDateFormatted); // Col F: ExpireDate

        var successHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>อนุมัติสมาชิกสำเร็จ</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
              .card { background: #1e293b; border-radius: 16px; padding: 32px 24px; text-align: center; max-width: 400px; width: 100%; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); }
              .icon { font-size: 54px; margin-bottom: 12px; }
              h1 { font-size: 22px; color: #4ade80; margin: 0 0 12px 0; font-weight: 700; }
              .info-box { background: #0f172a; border-radius: 10px; padding: 14px; margin: 16px 0; text-align: left; font-size: 14px; border: 1px solid #334155; }
              .info-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
              .info-row:last-child { margin-bottom: 0; }
              .label { color: #94a3b8; }
              .val { color: #e2e8f0; font-weight: 600; }
              p { color: #94a3b8; font-size: 13px; line-height: 1.5; margin: 16px 0 0 0; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="icon">✅</div>
              <h1>อนุมัติสมาชิกสำเร็จ!</h1>
              <div class="info-box">
                <div class="info-row"><span class="label">รหัสผู้ใช้:</span><span class="val">${userId}</span></div>
                <div class="info-row"><span class="label">เบอร์โทร:</span><span class="val">${currentPhone}</span></div>
                <div class="info-row"><span class="label">สถานะ:</span><span class="val" style="color:#4ade80;">อนุมัติแล้ว</span></div>
                <div class="info-row"><span class="label">ระยะเวลา:</span><span class="val">${days} วัน</span></div>
                <div class="info-row"><span class="label">หมดอายุ:</span><span class="val">${expDateFormatted}</span></div>
              </div>
              <p>สมาชิกสามารถล็อกอินเข้าสู่ระบบดูหนังได้ทันที<br>สามารถปิดหน้าต่างนี้ได้เลยครับ</p>
            </div>
          </body>
          </html>
        `;
        return HtmlService.createHtmlOutput(successHtml).setTitle("อนุมัติสมาชิกสำเร็จ");
      }

      // 1.2 กรณีปฏิเสธ (Reject)
      if (action === "reject") {
        sheet.getRange(foundIndex, 5).setValue("ระงับ"); // Col E: Status
        var rejectHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>ปฏิเสธคำขอสมาชิก</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
              .card { background: #1e293b; border-radius: 16px; padding: 32px 24px; text-align: center; max-width: 400px; width: 100%; border: 1px solid #334155; }
              .icon { font-size: 54px; margin-bottom: 12px; }
              h1 { font-size: 22px; color: #f87171; margin: 0 0 12px 0; font-weight: 700; }
              p { color: #94a3b8; font-size: 14px; margin: 12px 0 0 0; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="icon">🚫</div>
              <h1>ปฏิเสธคำขอเรียบร้อย</h1>
              <p>รหัสผู้ใช้: <strong>${userId}</strong> ถูกปรับสถานะเป็น 'ระงับ' แล้ว<br>สามารถปิดหน้าต่างนี้ได้เลยครับ</p>
            </div>
          </body>
          </html>
        `;
        return HtmlService.createHtmlOutput(rejectHtml).setTitle("ปฏิเสธคำขอเรียบร้อย");
      }
    }
  } catch (err) {
    return HtmlService.createHtmlOutput("<h3 style='color:red;'>Error: " + err.toString() + "</h3>");
  }

  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "Google Apps Script Movie Auth API is active 🚀"
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * -------------------------------------------------------------
 * 2. รับคำขอจากหน้าเว็บ (doPost)
 * สมัครสมาชิก, ล็อกอิน, ซิงค์รายการโปรด, ซิงค์ประวัติ
 * -------------------------------------------------------------
 */
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
    // 2.1 สมัครสมาชิกใหม่ (register) หรือ ขอเปลี่ยนรหัสผ่าน (forgot_password)
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
      var existingUserId = "";

      // ค้นหาเบอร์โทรศัพท์ในคอลัมน์ B (เริ่มเช็คจากแถวที่ 2)
      for (var i = 1; i < rows.length; i++) {
        var rowPhone = String(rows[i][1] || "").replace(/\D/g, "");
        if (rowPhone.length === 9) rowPhone = "0" + rowPhone;
        if (rowPhone === cleanPhone) {
          existingRowIndex = i + 1; // 1-based index ใน Google Sheet
          existingUserId = String(rows[i][0] || "");
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

        // แจ้งเตือนแอดมินทาง LINE ทันที
        try {
          sendLineApprovalCard(existingUserId, cleanPhone, dateFormatted, "reset_password");
        } catch (lineErr) {
          console.error("ส่ง LINE แจ้งเตือนล้มเหลว: " + lineErr);
        }
      } else {
        // -------------------------------------------------------------
        // กรณีเบอร์ใหม่ -> รันเลข UserId อัตโนมัติตามวัน (เช่น วันที่ 24/10/69 -> VIP691024-001, 002, ...)
        // -------------------------------------------------------------
        var thaiYear = String(now.getFullYear() + 543).slice(-2);
        var pad2 = function(n) { return (n < 10 ? "0" : "") + n; };
        var todayPrefix = "VIP" + thaiYear + pad2(now.getMonth() + 1) + pad2(now.getDate()) + "-";

        // ค้นหาลำดับสูงสุดของวันนี้ในคอลัมน์ A เพื่อรันต่อจากเบอร์ล่าสุด
        var maxSeq = 0;
        for (var r = 1; r < rows.length; r++) {
          var cellVal = String(rows[r][0] || "").trim();
          if (cellVal.indexOf(todayPrefix) === 0) {
            var parts = cellVal.split("-");
            if (parts.length > 1) {
              var num = parseInt(parts[1], 10);
              if (!isNaN(num) && num > maxSeq) {
                maxSeq = num;
              }
            }
          }
        }

        // ลำดับถัดไป (001, 002, 003, ...)
        var nextSeq = maxSeq + 1;
        var pad3 = function(n) {
          if (n < 10) return "00" + n;
          if (n < 100) return "0" + n;
          return String(n);
        };
        var genUserId = todayPrefix + pad3(nextSeq);

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

        // แจ้งเตือนแอดมินทาง LINE ทันที
        try {
          sendLineApprovalCard(genUserId, cleanPhone, dateFormatted, "register");
        } catch (lineErr) {
          console.error("ส่ง LINE แจ้งเตือนล้มเหลว: " + lineErr);
        }
      }
    }

    // -------------------------------------------------------------
    // 2.2 เข้าสู่ระบบ (login) - ตรวจสอบความถูกต้องและสถานะการอนุมัติ 100%
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
    // 2.3 ซิงค์รายการโปรด (sync_watchlist)
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
    // 2.4 ซิงค์ประวัติการรับชม (sync_history)
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

/**
 * -------------------------------------------------------------
 * 3. ฟังก์ชันส่งการ์ด Flex Message เข้า LINE แอดมิน
 * -------------------------------------------------------------
 */
function sendLineApprovalCard(userId, phone, dateFormatted, requestType) {
  var targetAdmins = (typeof ADMIN_LINE_USER_IDS !== "undefined" && Array.isArray(ADMIN_LINE_USER_IDS) && ADMIN_LINE_USER_IDS.length > 0)
    ? ADMIN_LINE_USER_IDS 
    : (ADMIN_LINE_USER_ID ? [ADMIN_LINE_USER_ID] : []);
  if (!LINE_CHANNEL_ACCESS_TOKEN || targetAdmins.length === 0) return;

  var isReset = (requestType === "reset_password");
  var title = isReset ? "🔑 ขอเปลี่ยนรหัสผ่านใหม่" : "🎬 มีสมาชิกใหม่รออนุมัติ";
  var headerColor = isReset ? "#0284c7" : "#d97706";

  var approve30Url = SCRIPT_WEBAPP_URL + "?action=approve&userId=" + encodeURIComponent(userId) + "&days=30&token=" + SECRET_KEY;
  var approve365Url = SCRIPT_WEBAPP_URL + "?action=approve&userId=" + encodeURIComponent(userId) + "&days=365&token=" + SECRET_KEY;
  var rejectUrl = SCRIPT_WEBAPP_URL + "?action=reject&userId=" + encodeURIComponent(userId) + "&token=" + SECRET_KEY;

  var bubbleContents = {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "backgroundColor": "#0f172a",
      "contents": [
        {
          "type": "text",
          "text": title,
          "weight": "bold",
          "color": headerColor,
          "size": "md"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "backgroundColor": "#1e293b",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "sm",
          "contents": [
            { "type": "text", "text": "รหัสผู้ใช้", "size": "sm", "color": "#94a3b8", "flex": 3 },
            { "type": "text", "text": userId, "size": "sm", "color": "#f8fafc", "flex": 5, "weight": "bold" }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "sm",
          "contents": [
            { "type": "text", "text": "เบอร์โทร", "size": "sm", "color": "#94a3b8", "flex": 3 },
            { "type": "text", "text": phone, "size": "sm", "color": "#38bdf8", "flex": 5, "weight": "bold" }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "sm",
          "contents": [
            { "type": "text", "text": "เวลาที่ส่ง", "size": "sm", "color": "#94a3b8", "flex": 3 },
            { "type": "text", "text": dateFormatted, "size": "xs", "color": "#cbd5e1", "flex": 5 }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "sm",
          "contents": [
            { "type": "text", "text": "สถานะ", "size": "sm", "color": "#94a3b8", "flex": 3 },
            { "type": "text", "text": "รออนุมัติ ⏳", "size": "sm", "color": "#eab308", "flex": 5, "weight": "bold" }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "backgroundColor": "#0f172a",
      "contents": [
        {
          "type": "button",
          "color": "#16a34a",
          "style": "primary",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "✅ อนุมัติ 30 วัน",
            "uri": approve30Url
          }
        },
        {
          "type": "button",
          "color": "#2563eb",
          "style": "primary",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "⭐ อนุมัติ 1 ปี (VIP)",
            "uri": approve365Url
          }
        },
        {
          "type": "button",
          "color": "#475569",
          "style": "secondary",
          "height": "sm",
          "action": {
            "type": "uri",
            "label": "❌ ปฏิเสธ / ระงับ",
            "uri": rejectUrl
          }
        }
      ]
    }
  };

  targetAdmins.forEach(function(targetId) {
    if (!targetId) return;
    var payload = {
      "to": String(targetId).trim(),
      "messages": [
        {
          "type": "flex",
          "altText": (isReset ? "🔑 ขอเปลี่ยนรหัสผ่าน: " : "🎬 สมาชิกใหม่รออนุมัติ: ") + phone,
          "contents": bubbleContents
        }
      ]
    };

    try {
      UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
        "method": "post",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + LINE_CHANNEL_ACCESS_TOKEN
        },
        "payload": JSON.stringify(payload),
        "muteHttpExceptions": true
      });
    } catch (err) {
      console.error("ส่ง LINE หาแอดมิน " + targetId + " ล้มเหลว: " + err);
    }
  });
}

/**
 * -------------------------------------------------------------
 * 4. ฟังก์ชันทดสอบยิงข้อความเข้า LINE แอดมิน (กดทดสอบใน Apps Script ได้เลย)
 * -------------------------------------------------------------
 */
function testSendLine() {
  sendLineApprovalCard("VIP-TEST-001", "0812345678", "2026-10-24 10:00:00", "register");
  Logger.log("✅ ส่งการ์ดทดสอบเข้า LINE แอดมินเรียบร้อยแล้ว!");
}
