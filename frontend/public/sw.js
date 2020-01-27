importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js')

const version = '3.0'

if (workbox) {
  workbox.setConfig({
    debug: false
  });
  workbox.skipWaiting();
  workbox.clientsClaim(); 
  
  // add your config
  workbox.routing.registerRoute(
    /\/static\//,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'zhaoxiditu:static',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://webapi\.amap\.com'),
    workbox.strategies.cacheFirst({
      cacheName: 'zhaoxiditu:amapcdn',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 5
        })
      ]
    })
  );
}