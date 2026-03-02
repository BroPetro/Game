const CACHE_NAME = "relic-v0.0.4";
const OFFLINE_URL = "offline.html";

const urlsToCache = [
  "index.html",
  "offline.html",
  "manifest.json",
  "settings.html",
  "sw.js",

  "JS/main.js",
  "JS/countryperson.js",
  "JS/nameparson.js",

  "Style/main.css",
  "Style/Cutscenes.css",
  "Style/offline.css",
  "Style/Text.css",

  "assets/apple.png",
  "assets/BroCLIP.gif",
  "assets/HMMM.gif",
  "assets/icon-192.png",
  "assets/icon-512.png.png",
  "assets/kinife.png",
  "assets/Player.png",
  "assets/SedBro.gif",
  "assets/Shut.png",
  "assets/Cutscenes/BedKing.gif",
  "assets/Cutscenes/King.gif",
  "assets/Cutscenes/New Piskel (2).gif",
  "assets/Cutscenes/Shop.gif",
  "assets/Cutscenes/Shop.png",

  "Game and History/1.html",
  "Game and History/2.html",
  "Game and History/2.1.html",
  "Game and History/2.2.html",
  "Game and History/3.html",
  "Game and History/4.html",
  "Game and History/5.html",
  "Game and History/6H.html",
  "Game and History/7H.html",
  "Game and History/8.html",
  "Game and History/8.1.html",
  "Game and History/8.2.html",
  "Game and History/9H.html",
  "Game and History/9.1.html",
  "Game and History/10.html",
  "Game and History/11.html",
  "Game and History/12.html",
  "Game and History/12.1H.html",
  "Game and History/12.2.html",
  "Game and History/13.1.html",
  "Game and History/14.html",
  "Game and History/15.html",
  "Game and History/16.html",
  "Game and History/17.html",
  "Game and History/18.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
          return null;
        })
      );
    })
  );
  self.clients.claim();
});

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
        return caches.match(event.request).then(response => {
          return response || caches.match(OFFLINE_URL);
        });
      })
  );
});
