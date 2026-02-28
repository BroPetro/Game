const CACHE_NAME = "relic-v0.0.3";
const OFFLINE_URL = "offline.html";

const urlsToCache = [
  "index.html",
  "offline.html",
  "manifest.json",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/BroCLIP.gif",
  "assets/HMMM.gif",
  "assets/Cutscenes/New Piskel (2).gif",
  "JS/main.js",
  "JS/countryperson.js",
  "JS/nameparson.js",
  "Style/main.css",
  "Style/Cutscenes.css",
  "Style/offline.css",
  "Style/Text.css",
  "settings.html",
  "Game and History/1.html",
  "Game and History/2.html",
  "Game and History/2.1.html",
  "Game and History/2.2.html",
  "Game and History/3.html",
  "Game and History/4.html",
  "Game and History/5.html",
  "Game and History/6H.html"
];


// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});


// ACTIVATE (очищає старі кеші)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});


// FETCH
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            return response || caches.match(OFFLINE_URL);
          });
      })
  );
});