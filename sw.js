const cacheName = 'verdiary-v1';
const assetsToCache = [
  './',
  './Logica.html', // Nome atualizado aqui
  './manifest.json',
  './Logo192.png',
  './Logo512.png',
  './Fundo.png',
  './logo, clara.png',
  './logo, escura.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});