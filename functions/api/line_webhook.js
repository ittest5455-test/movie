export async function onRequest(context) {
  const request = context.request;
  
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ status: "online", service: "MovieStream LINE Webhook Proxy" }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const GAS_URL = "https://script.google.com/macros/s/AKfycbyKnLnnu7iJ3uPSV3tdpLO5HL6pZMGy5qzHSLu8Y4RoQq5MIYj1QVFXgZ3miynuNjPX/exec";
  const LINE_TOKEN = "ySRHeoP3bVm3bUAOCXut7lzYBos4SqvTI9epuhCA4ANq2wttPBnlbRa8quRXdxc1Kxc++6NFURm7f9pjRrEEX79w1Zanjkkf3EmASHBNRbo/PYP5HkkeeEYCr/IYC4XgOAnvzO8ne89JOkS94pz3zAdB04t89/1O/w1cDnyilFU=";
  const ADMIN_IDS = ["U82651d72dba0247279a27ab305152104"];

  try {
    const rawBody = await request.text();
    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (e) {
      return new Response("OK", { status: 200 });
    }

    let isUpdateRequested = false;

    // Process events from LINE
    if (data && data.events && Array.isArray(data.events)) {
      for (const ev of data.events) {
        if (ev.type === "message" && ev.message && ev.message.type === "text") {
          const userText = (ev.message.text || "").trim();
          const senderId = ev.source ? ev.source.userId : "";
          const replyToken = ev.replyToken;

          if (ADMIN_IDS.includes(senderId)) {
            const lowerText = userText.toLowerCase();
            let isUpdateCmd = false;
            if (lowerText.includes("update")) isUpdateCmd = true;
            if ((userText.includes("อัพ") || userText.includes("อัป")) &&
                (userText.includes("หนัง") || userText.includes("เดต") || userText.includes("เดจ") || userText.includes("เดท"))) {
              isUpdateCmd = true;
            }

            if (isUpdateCmd) {
              isUpdateRequested = true;
              if (replyToken) {
                // Reply to LINE immediately
                await fetch("https://api.line.me/v2/bot/message/reply", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + LINE_TOKEN
                  },
                  body: JSON.stringify({
                    replyToken: replyToken,
                    messages: [
                      {
                        type: "text",
                        text: "🎬 [MovieStream] ได้รับคำสั่งอัปเดตหนังจากแอดมินแล้วครับ!\n\n🚀 ระบบในคอมพิวเตอร์กำลังเริ่มสแกนดึงหนังและซีรีส์ใหม่ทันที\nเมื่ออัปเดตและนำขึ้นเว็บเสร็จ ระบบจะส่งสรุปรายงานให้อัตโนมัติครับ ⏳"
                      }
                    ]
                  })
                }).catch(() => {});
              }
            }
          }
        }
      }
    }

    // Forward to Google Apps Script (follows 302 redirect)
    await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: rawBody,
      redirect: "follow"
    }).catch(() => {});

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response("OK", { status: 200 });
  }
}
