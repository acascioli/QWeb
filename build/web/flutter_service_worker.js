'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a82972ddc9c770d9b266cc192add1fdb",
".git/config": "c91fad095e9cb671c7f493c8383aa187",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a9a3590a8edd7be58c237f59dbd6a3b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "52118142cf8a8de28f5bdf4d81909062",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4623172d6e75ee94501d6d9386a3d0aa",
".git/logs/refs/heads/main": "49f276f407927609163222b467efe099",
".git/logs/refs/heads/master": "ff3a38f2df202c4dc955c625c136e6d9",
".git/logs/refs/heads/testWeb": "dfd6032b505b07d42d9de21c91130118",
".git/logs/refs/heads/testWeb1": "6939b9030d3044e971989c4e958ad389",
".git/logs/refs/remotes/origin/main": "7d26950f29c9fefc4bc03a7b61ed97a6",
".git/objects/02/1b6f58caa8134b71e65f8bd7484e423adf358a": "6ed87b8f7ecdf3a42e44612f197a0aec",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/9be924085fed404d36aae21c5075c395fbe911": "88113ce8f2d654fdb3544be188885ec3",
".git/objects/10/e46a3b84071858bc909860bb4bda4aa21c434f": "8fffe10061a20859e71eaefbf33730a9",
".git/objects/19/5135c92bbcb9e87699018399e5403dab2bacf8": "d0713e380af4c4f0e5a8b537e3ee1ef3",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/2f10ed5f659177a38e92997412ca5a6e9dd54b": "c5073f531c4975cc3611dc53c2a1dd74",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/cfc469696ed44108a2796738a19ffa9b63d3dd": "75f212f2f926ae3fad235a5c8a462492",
".git/objects/28/70f15e53ae209eb0d9d4f52355462a9dab2d1d": "b661e9a1a2bf786e7f1456f610e15e84",
".git/objects/2e/54caccaea7b99683648bc6edf710b136344a94": "299aab2110374e1250fb7aacbb1d8f99",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/36e9e28c83dbe8475057d77f28cdf5f4ba6f40": "651ef1a76c9ac13a88d085aef0c923b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/e6f4187e203e41dab0e3cfe577abfa8739c33b": "181b04eb6a6afb063871f5dc1df784f6",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5f/81edb8a492a54fe987a64526a89a2bb8179d22": "82306b4ae6d8be6022c0c95dab249d5f",
".git/objects/61/a6922061d7322efb876b52cc99098b1571d94a": "e5edfbaba7d090a0af28178454c3ed3a",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ba20cef25b58569aa4deb53a1db931b1dbd448": "71b98644a0215de3c24fa9f8d9a1a4cf",
".git/objects/7e/e149b328837b23c09daaf6db6992bc54d9f094": "a863b7a8f7d42ff58cd2be445422386a",
".git/objects/83/b020dda87769b5adbc7da2bccb64bf1657b3c8": "57c5175fd587c8870790354a033c3cfc",
".git/objects/87/a75f4401e311b5684b1a0b44406a9ae8005a64": "38b35aee284d62b48020c6c737da9be1",
".git/objects/88/18b23546a59c72a6c47b2a86a63283630b5c5f": "a54aedf9bd289c54fd74c817efc28365",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5c1ac504a0896523e59157ae91d1ad3d0c566d": "7b9aee1b0da781f3703f05f747419fc5",
".git/objects/90/cc74fd60c187048041f63c668de1099b7b4c2f": "1588a8113b8883b1cf6390aae428ea7a",
".git/objects/9e/f73987574de8f5b4157f3eb50bf7d286d27c0d": "d3b3581a404f99dbffb6c8f7df300f10",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/1c9d8d84496fa6cf12edcd7a773a69a5e7ef23": "a477de3c166e59a2fa62b24687ce1e7c",
".git/objects/c6/5910389581a3201d6dfa43562ecce4cfa8f634": "fa9585898ee68d424bf77d7343cd5c0d",
".git/objects/c8/f502b373b7848dc2fb92e5e247aa2de39c92ca": "223564e3e89e6a5fe2aed5d98a0562f4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/77e9befb4e45dcfb1ed4a18368568b4f31ea93": "1ca997386a77cb9380e063ec2d68a99f",
".git/ORIG_HEAD": "35f79fed77bc93754b25533113c57fae",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "7034d76b2f116058720438a00a851126",
".git/refs/heads/master": "232eae6e3ba40729429ba1eddf49b71d",
".git/refs/heads/testWeb": "232eae6e3ba40729429ba1eddf49b71d",
".git/refs/heads/testWeb1": "f906057bc11f7c9dcc4fd77e34ad5ae8",
".git/refs/remotes/origin/main": "7034d76b2f116058720438a00a851126",
"assets/AssetManifest.json": "93fc337073125905a4aafd8d91624256",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "735d9390da322f5ed12e239c051e0737",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a0edb8182ef5587b28cf3dadc4ee40b6",
"/": "a0edb8182ef5587b28cf3dadc4ee40b6",
"main.dart.js": "87959c80676ac791d0f64892f03cf040",
"manifest.json": "9ec484e0bcc537495e91384ee7e4004f",
"README.md": "8b7e6e54a31c7307558d31936ec2d723",
"version.json": "af3178228a7b55c7d8c926f2fa70a857"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
