export async function onRequest(context) { return new Response('CF_FUNCTION_OK', { headers: { 'Access-Control-Allow-Origin': '*' } }); }
