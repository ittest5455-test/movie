export async function onRequest(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get("id");
  const sub = url.searchParams.get("sub");
  const ts = url.searchParams.get("ts");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const userAgent = context.request.headers.get("User-Agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

  try {
    if (ts) {
      const fetchHeaders = {
        "User-Agent": userAgent,
        "Referer": "https://main.24playerhd.com/",
      };
      const range = context.request.headers.get("Range");
      if (range) fetchHeaders["Range"] = range;

      const chunkRes = await fetch(ts, { headers: fetchHeaders });

      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", chunkRes.headers.get("Content-Type") || "video/mp2t");
      const len = chunkRes.headers.get("Content-Length");
      if (len) responseHeaders.set("Content-Length", len);
      if (chunkRes.headers.get("Content-Range")) {
        responseHeaders.set("Content-Range", chunkRes.headers.get("Content-Range"));
      }
      if (chunkRes.headers.get("Accept-Ranges")) {
        responseHeaders.set("Accept-Ranges", chunkRes.headers.get("Accept-Ranges"));
      }

      return new Response(chunkRes.body, {
        status: chunkRes.status,
        headers: responseHeaders,
      });
    }

    if (sub) {
      const subUrl = sub.startsWith("http") ? sub : ("https://main.24playerhd.com" + sub);
      const subRes = await fetch(subUrl, {
        headers: {
          "User-Agent": userAgent,
          "Referer": "https://main.24playerhd.com/",
        },
      });

      let text = await subRes.text();
      const origin = url.origin;
      text = text.replace(/(https?:\/\/[^\s\r\n]+\.(?:aaa|ts)[^\s\r\n]*)/g, (match) => {
        return `${origin}/api/hls?ts=${encodeURIComponent(match)}`;
      });

      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");

      return new Response(text, {
        status: subRes.status,
        headers: responseHeaders,
      });
    }

    if (id) {
      const masterUrl = "https://main.24playerhd.com/newplaylist/" + id + "/" + id + ".m3u8";
      const masterRes = await fetch(masterUrl, {
        headers: {
          "User-Agent": userAgent,
          "Referer": "https://main.24playerhd.com/",
        },
      });

      let text = await masterRes.text();
      const origin = url.origin;
      text = text.replace(/(\/m3u8\/[^\s\r\n]+)/g, (match) => {
        return `${origin}/api/hls?sub=${encodeURIComponent(match)}`;
      });

      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");

      return new Response(text, {
        status: masterRes.status,
        headers: responseHeaders,
      });
    }

    return new Response("Missing id, sub, or ts parameter", { status: 400, headers: corsHeaders });
  } catch (err) {
    return new Response("Proxy Error: " + err.message, { status: 500, headers: corsHeaders });
  }
}
