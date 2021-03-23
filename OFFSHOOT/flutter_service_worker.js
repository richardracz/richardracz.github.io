'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d52f2ab7bdf2da95ba37bde6cb185772",
"index.html": "774981cf36b31c2470528951e9f2b9f7",
"/": "774981cf36b31c2470528951e9f2b9f7",
"main.dart.js": "943cfd8b6980eb5321a960c69b855c33",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b5f8ae0abbc323a98940c3c103a46c9c",
"assets/AssetManifest.json": "9ed6f5725d913c1e076e8ecff8dbebda",
"assets/NOTICES": "1c68de8a647a43219dd2d279e3ed7009",
"assets/FontManifest.json": "6032453837c11d3a9ecd1269ad732ca9",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/din.ttf": "904d4d9d096af176560ee153d2a4bd42",
"assets/fonts/former.ttf": "a77a8047f558492950c6a7af1a1d91f3",
"assets/fonts/Helvetica/helvetica-75-bold-outline.ttf": "84dfe3e7041571013b416c584198158b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Benzin/BenzinRegular.ttf": "b2fcc8cdcc02c287f61451eca779d449",
"assets/fonts/Benzin/BenzinBold.ttf": "3e5e749515202e1cdb50c7ff5f11c65b",
"assets/fonts/Benzin/BenzinMedium.ttf": "786f18712a007104b3e7762ada33698f",
"assets/fonts/Benzin/BenzinSemiBold.ttf": "382a73e521a557e1bef409b17348c05f",
"assets/fonts/Benzin/BenzinExtraBold.ttf": "76c56f603cd73b03febe36e2c00584da",
"assets/assets/images/off_white.png": "4c81e0e596fe1bfba53ed01945b6a00d",
"assets/assets/images/bo.png": "a2eda65e18df113b1c4e50de1adb1a61",
"assets/assets/images/08m.jpg": "11c96612084fb52afd16e56db8569585",
"assets/assets/images/07w.jpg": "4b9f628ba82cf5adb04b6de6fa25cf0c",
"assets/assets/images/06w.jpg": "8eb9634710f77ea077d16a6e4c5f1824",
"assets/assets/images/path.png": "3b14e37fe04f1d9bbed3e5942c6d4b83",
"assets/assets/images/user3.jpg": "aaa2b57ed1435da5c9d1693e3ab35ced",
"assets/assets/images/09w.jpg": "6c16c68f0b8eabc6346b3a12e2a6a97e",
"assets/assets/images/user2.jpg": "d32e15a76558574c609e66ad72bce5d3",
"assets/assets/images/10m.jpg": "0b1ad8344c5201f4b8e0f1ae638c529e",
"assets/assets/images/interview.png": "167dae4d0dd66904afc01604e592818c",
"assets/assets/images/beku.png": "09262b105b83c01a9c3b3fd99f60a799",
"assets/assets/images/user1.jpg": "75751fb494972b2efda7943a80259a94",
"assets/assets/images/user4.jpg": "46073bb341dc9679ee7351508734155d",
"assets/assets/images/off_red.png": "f8290a569d0014d0e5063d63434db2f9",
"assets/assets/images/jo.png": "556b9ffc11044ee845fdac0fd57b292b",
"assets/assets/images/user2.jpeg": "0c14575b69c5000e43fd8bbcf38b5619",
"assets/assets/images/coverimage2.jpg": "d80ff23b2c72713d9cc94bc5ebfcbd74",
"assets/assets/images/coverimage3.jpg": "8fa190d8797c462fc8dd4a4c171076aa",
"assets/assets/images/v.png": "7d25ad5f788b5ed0bfe287924eb12a18",
"assets/assets/images/35w.jpg": "9ef4963818b91fcd92a114a87a2b4a3f",
"assets/assets/images/cv.png": "d54c5e445db8ecf1e755a222057e8a7b",
"assets/assets/images/coverimage4.jpg": "edf3a9b84ffc0e07f544bb1e4a6a9446",
"assets/assets/images/burnout.png": "7fba626fa24b6e679643e00a604417fd",
"assets/assets/images/juice.png": "39a8570ee801ee4d7fa6c530c76dd9a3",
"assets/assets/images/red.png": "7b5a2ff21014f52c36269b307d48ab01"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
