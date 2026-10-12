export async function onRequest(context) {
  const url = new URL(context.request.url);
  let id = url.searchParams.get("id");
  const targetUrl = url.searchParams.get("url");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Extract ID if full URL passed
  if (!id && targetUrl) {
    const m = targetUrl.match(/\/embed\/([a-f0-9]{20,})/i) || targetUrl.match(/[?&]v=([a-f0-9]{20,})/i);
    if (m && m[1]) id = m[1];
  }

  if (!id) {
    return new Response("Missing id parameter", { status: 400, headers: corsHeaders });
  }

  const userAgent = context.request.headers.get("User-Agent") || "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15";
  const API_BASE = "https://getplay-cdn.com";

  try {
    // 1. Request Playback Token from getplay-cdn with parent=wow-drama.com
    const tokenRes = await fetch(`${API_BASE}/api/tokenplay`, {
      method: "POST",
      headers: {
        "User-Agent": userAgent,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": `${API_BASE}/embed/${id}`
      },
      body: JSON.stringify({ md5: id, parent: "wow-drama.com" })
    });

    if (!tokenRes.ok) {
      return new Response(`Token request failed: ${tokenRes.status}`, { status: 502, headers: corsHeaders });
    }

    const tokenData = await tokenRes.json();
    if (!tokenData || tokenData.error || !tokenData.stream_id) {
      return new Response(JSON.stringify({ error: tokenData?.error || "Invalid token data" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // 2. Fetch Master m3u8 playlist
    const masterM3u8Url = `${API_BASE}/api/stream/${tokenData.stream_id}/index.m3u8?token=${encodeURIComponent(tokenData.token)}&expires=${tokenData.expires}&parent=wow-drama.com&sid=${tokenData.session_id}`;
    
    const masterRes = await fetch(masterM3u8Url, {
      headers: {
        "User-Agent": userAgent,
        "Referer": `${API_BASE}/embed/${id}`
      }
    });

    if (!masterRes.ok) {
      return new Response("Master playlist fetch failed", { status: masterRes.status, headers: corsHeaders });
    }

    const masterText = await masterRes.text();
    let finalPlaylist = masterText;

    // 3. If master playlist contains multiple streams, resolve the highest resolution variant (1080p)
    if (masterText.includes("#EXT-X-STREAM-INF:")) {
      const lines = masterText.trim().split("\n");
      const streams = [];
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("#EXT-X-STREAM-INF:")) {
          const inf = lines[i];
          const nextUrl = (lines[i + 1] || "").trim();
          if (nextUrl.startsWith("http://") || nextUrl.startsWith("https://")) {
            streams.push({ inf, url: nextUrl });
          }
        }
      }

      let chosenUrl = "";
      const requestedQuality = url.searchParams.get("quality");
      if (requestedQuality) {
        const match = streams.find(s => s.inf.includes(requestedQuality) || s.url.includes(requestedQuality));
        if (match) chosenUrl = match.url;
      }
      if (!chosenUrl && streams.length > 0) {
        // Pick top stream (1080p in getplay-cdn)
        chosenUrl = streams[0].url;
      }

      if (chosenUrl) {
        const variantRes = await fetch(chosenUrl, {
          headers: {
            "User-Agent": userAgent,
            "Referer": `${API_BASE}/embed/${id}`
          }
        });

        if (variantRes.ok) {
          finalPlaylist = await variantRes.text();
        }
      }
    }

    const responseHeaders = new Headers(corsHeaders);
    responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
    responseHeaders.set("Cache-Control", "public, max-age=1800");

    return new Response(finalPlaylist, {
      status: 200,
      headers: responseHeaders
    });
  } catch (err) {
    return new Response("Internal Proxy Error: " + err.message, { status: 500, headers: corsHeaders });
  }
}
