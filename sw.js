const CACHE_NAME = "Relic-v1";
const urlsToCache = [
  "index.html",
  "manifest.json",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "JS/main.js",
  "Style/main.css",
  "settings.html",
  "Game and History/1.html"

];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});