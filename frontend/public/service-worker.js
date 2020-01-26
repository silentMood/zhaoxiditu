importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js')

if (workbox) {
  workbox.setConfig({
    debug: false
  });
  workbox.skipWaiting();
  workbox.clientsClaim(); // add your config
}