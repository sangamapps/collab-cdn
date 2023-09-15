const staticCacheName = 'site-static-v3';
const assets = [
  /** JS files */
  '/assets/js/main.js',
  /** Collabhere icon */
  '/assets/images/favicon.png',
  /** Chat media files */
  "/assets/images/chat-bg.jpeg",
  '/assests/media/message_recieved.mp3',
  '/assests/media/message_sent.mp3',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});