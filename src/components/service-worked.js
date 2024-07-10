// src/service-worker.js

const CACHE_NAME = 'Ftask-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo192.png',
  '/logo512.png',
  '/merchandising.js',
  '/app.js',
  '/utils/sun1.jpg',
  '/utils/go8.jpeg',
  '/utils/speed.pdf',
  '/utils/sun3.jpg'
  // Añade aquí otros recursos que quieras cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
