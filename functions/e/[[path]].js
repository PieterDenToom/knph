// Cloudflare Pages Function: first-party reverse proxy for PostHog.
// Serves PostHog under /e/* on our own domain so ad blockers don't drop events.
// See https://posthog.com/docs/advanced/proxy/cloudflare
const API_HOST = 'us.i.posthog.com';
const ASSET_HOST = 'us-assets.i.posthog.com';
const PREFIX = '/e';

export async function onRequest({ request, waitUntil }) {
  const url = new URL(request.url);
  const path = url.pathname.slice(PREFIX.length) || '/';

  if (path.startsWith('/static/')) {
    const cache = caches.default;
    let response = await cache.match(request);
    if (!response) {
      response = await fetch(`https://${ASSET_HOST}${path}${url.search}`);
      waitUntil(cache.put(request, response.clone()));
    }
    return response;
  }

  const upstream = new Request(`https://${API_HOST}${path}${url.search}`, request);
  upstream.headers.delete('cookie');
  // Keep the visitor's IP so PostHog geo-locates them, not Cloudflare.
  upstream.headers.set('X-Forwarded-For', request.headers.get('CF-Connecting-IP') ?? '');
  return fetch(upstream);
}
