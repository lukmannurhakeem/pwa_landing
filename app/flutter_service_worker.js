'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "74a43e8114acc2340be2ccc41ca796dc",
"index.html": "75ecff2bb2aac782d1b6cbac18bf394a",
"/": "75ecff2bb2aac782d1b6cbac18bf394a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "9b003d5d7591f5d84f947dc215421751",
"assets/assets/images/bg.png": "0c3d3bfba69e273b5bb8f4d9443b817b",
"assets/assets/images/logo.jpg": "33001c601454b533147d037a6935a23b",
"assets/assets/images/oil-rig-base-bg.png": "dd746aa9ef51794be4c37a2e67beba18",
"assets/assets/images/aircraft.svg": "51d279f713f01e605c704fb9bca2e48e",
"assets/assets/images/maintainence.svg": "c0d7d151e1158192a44f2870ed7ec0c8",
"assets/assets/images/work_in_progress.svg": "e9999b08a7224e77ee5dbd825686b8bf",
"assets/assets/images/blob-background.svg": "ca39d00b169a2f71d326b2af0e6c9fb5",
"assets/assets/images/logo-uthm.png": "7f49db5c9271969c41b3050939f4d844",
"assets/assets/images/oil-rig-bg.png": "f58d287032e40b7d74e4825a62c8a226",
"assets/assets/images/no-file.svg": "beeb9086a56068700ee43b06958913e0",
"assets/assets/images/circle-background.svg": "12997696fcdc1b58c240700fba0c4190",
"assets/assets/images/todo.svg": "4c1659c5f948929d81d5d42a58e18f6a",
"assets/assets/images/circle-background-secondary.svg": "9884685af8861deb3b9bbf4036ddba60",
"assets/fonts/MaterialIcons-Regular.otf": "011d348c258952b488e8b2bb7174fc63",
"assets/NOTICES": "f5d53e2f3a84da96d7893bad3398a585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "31aa3a03e7e49b7552a8268fa603ae7b",
"assets/AssetManifest.json": "702695dd22c5d614f4c888970bbdddd9",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "05a2c7f0e65fa93288e80f6b5829f719",
"version.json": "ceac33676338664534854283f96f197e",
"main.dart.js": "fdf6b399d9fdd757acb923f69bb02447"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
