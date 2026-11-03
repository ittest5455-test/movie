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
  const origin = url.origin;

  try {
    // 1. Proxy TS / JPEG video segment if requested
    if (ts) {
      const fetchHeaders = {
        "User-Agent": userAgent,
        "Referer": "https://player77hdfree.xyz/",
      };
      const range = context.request.headers.get("Range");
      if (range) fetchHeaders["Range"] = range;

      const chunkRes = await fetch(ts, { headers: fetchHeaders });
      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", "video/mp2t");
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

    // 2. Proxy Sub-playlist (video.m3u8 or audio.m3u8)
    if (sub) {
      let subUrl = sub;
      if (subUrl.startsWith("//")) subUrl = "https:" + subUrl;
      else if (!subUrl.startsWith("http")) subUrl = "https://vdohls.com" + (subUrl.startsWith("/") ? "" : "/") + subUrl;

      const subRes = await fetch(subUrl, {
        headers: {
          "User-Agent": userAgent,
          "Referer": "https://player77hdfree.xyz/",
        },
      });

      if (!subRes.ok) {
        return new Response("Failed to fetch sub-playlist: " + subRes.status, { status: subRes.status, headers: corsHeaders });
      }

      let text = await subRes.text();
      const baseUrl = subUrl.substring(0, subUrl.lastIndexOf("/") + 1);
      const lines = text.split("\n");
      const rewrittenLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return line;
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
          return trimmed;
        }
        if (trimmed.startsWith("//")) {
          return "https:" + trimmed;
        }
        return baseUrl + trimmed;
      });
      text = rewrittenLines.join("\n");

      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.set("Cache-Control", "public, max-age=3600");

      return new Response(text, {
        status: 200,
        headers: responseHeaders,
      });
    }

    // 3. Proxy Master Playlist (id parameter)
    if (id) {
      let vdoId = id;
      const m = id.match(/\/embed\/([a-zA-Z0-9_\-]+)/i) || id.match(/([a-zA-Z0-9_\-]{6,})/);
      if (m && m[1]) vdoId = m[1];

      const masterUrl = `https://vdohls.com/${vdoId}/playlist.m3u8`;
      const masterRes = await fetch(masterUrl, {
        headers: {
          "User-Agent": userAgent,
          "Referer": "https://player77hdfree.xyz/",
        },
      });

      if (!masterRes.ok) {
        return new Response("Failed to fetch master playlist: " + masterRes.status, { status: masterRes.status, headers: corsHeaders });
      }

      let text = await masterRes.text();

      // Rewrite sub-playlists (URI="..." and stream URLs) to route through /api/vdohls?sub=...
      text = text.replace(/URI="(?:https:)?\/\/vdohls\.com\/([^"]+)"/g, (match, path) => {
        const fullSub = `https://vdohls.com/${path}`;
        return `URI="${origin}/api/vdohls?sub=${encodeURIComponent(fullSub)}"`;
      });

      text = text.replace(/^(?:https:)?\/\/vdohls\.com\/([^\s\r\n]+)/gm, (match, path) => {
        const fullSub = `https://vdohls.com/${path}`;
        return `${origin}/api/vdohls?sub=${encodeURIComponent(fullSub)}`;
      });

      const responseHeaders = new Headers(corsHeaders);
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.set("Cache-Control", "public, max-age=3600");

      return new Response(text, {
        status: 200,
        headers: responseHeaders,
      });
    }

    return new Response("Missing id or sub parameter", { status: 400, headers: corsHeaders });
  } catch (err) {
    return new Response("Proxy Error: " + err.message, { status: 500, headers: corsHeaders });
  }
}
