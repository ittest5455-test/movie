export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');
  
  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  try {
    // Add realistic headers to bypass basic hotlink protection
    const proxyRequest = new Request(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': new URL(targetUrl).origin,
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });

    const response = await fetch(proxyRequest);

    // Create a new response so we can modify the headers
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    
    // Add caching headers so Cloudflare caches the images
    responseHeaders.set('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    
    // Remove headers that might cause issues in a browser context
    responseHeaders.delete('X-Frame-Options');
    responseHeaders.delete('Content-Security-Policy');

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders
    });
  } catch (e) {
    return new Response('Error fetching image', { status: 500 });
  }
}
