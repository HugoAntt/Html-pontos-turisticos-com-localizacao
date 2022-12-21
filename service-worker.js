var cacheName = 'PernambucoTurismo';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './generic.html',

        './elements.html',

        './assets/css/main.css',

        './assets/css/noscript.css',

        './assets/css/fontawesome-all.min.css',

        './assets/js/breakpoints.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',

        './assets/js/jquery.scrollex.min.js',

        './assets/js/jquery.scrolly.min.js',

        './assets/js/main.js',

        './assets/js/util.js',

        './assets/img/icon/29.png',
        './assets/img/icon/40.png',
        './assets/img/icon/48x84.png',
        './assets/img/icon/57.png',
        './assets/img/icon/58.png',
        './assets/img/icon/60.png',
        './assets/img/icon/72x72.png',
        './assets/img/icon/80.png',
        './assets/img/icon/87.png',
        './assets/img/icon/96x96.png',
        './assets/img/icon/114.png',
        './assets/img/icon/120.png',
        './assets/img/icon/144x144.png',
        './assets/img/icon/180.png',
        './assets/img/icon/192x192.png',
        './assets/img/icon/1024.png',

        './assets/img/10.jpg',
        './assets/img/14.jpg',
        './assets/img/15.jpg',
        './assets/img/16.jpg',
        './assets/img/17.jpg',
        './assets/img/Recife.jpg',
        './assets/img/gravata-cachoeira.jpg'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});