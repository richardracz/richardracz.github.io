'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6d96192c5a584d53e9610dbaef1b62a0",
"index.html": "645c15ce3c1a0589525d3228b566b373",
"/": "645c15ce3c1a0589525d3228b566b373",
"main.dart.js": "92bea93db19931c05e6c3b984f8c9333",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "0957a55407012f43581de87ae29f73f9",
"icons/Icon-192.png": "a74af331be54a576e537403ec8bd88af",
"icons/Icon-maskable-192.png": "a74af331be54a576e537403ec8bd88af",
"icons/Icon-maskable-512.png": "7a60d372ddd8f0b85ad227eebd137f6c",
"icons/Icon-512.png": "7a60d372ddd8f0b85ad227eebd137f6c",
"manifest.json": "c3da26dd0b1acb25cac873905a7f2c15",
"assets/AssetManifest.json": "15329c1752ce804755b6314260ac6011",
"assets/NOTICES": "2cd45bc5f93105700336b62adbd4a1bf",
"assets/FontManifest.json": "7d34e9c26cbdb8e17ae75193249bc5c7",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "85f00fb1305d30ef06f8f23d797252a9",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "169090230d8f17acd9886d7d1e9ea746",
"assets/fonts/din.ttf": "904d4d9d096af176560ee153d2a4bd42",
"assets/fonts/former.ttf": "a77a8047f558492950c6a7af1a1d91f3",
"assets/fonts/Helvetica/helvetica-75-bold-outline.ttf": "84dfe3e7041571013b416c584198158b",
"assets/fonts/MaterialIcons-Regular.otf": "481e23ba90e087d3c9e414c1f36b36fc",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/packdata/saku.txt": "dd71ecf88372aa986d38cf5eb4309d5c",
"assets/assets/packdata/alapozas.txt": "16d4ad1d743e19f1f9571c0c9aa7fb94",
"assets/assets/packdata/ismerkedosEN.txt": "f6f2e90a43d410409cee99a051ad2f7d",
"assets/assets/packdata/alapozasOLD.txt": "7e3fd3109f2538262497f5533a639293",
"assets/assets/packdata/sakuEN.txt": "dd71ecf88372aa986d38cf5eb4309d5c",
"assets/assets/packdata/ismerkedos.txt": "e8d5cf48ae4c2b96589a8bd9f40103f9",
"assets/assets/packdata/test.txt": "bf19045f9e4eb51cb72954ff2b2d5ef7",
"assets/assets/packdata/alapozasEN.txt": "acb058110100651bb910ad111668c78d",
"assets/assets/images/Thumbs.db": "8fe0243fe5a660a4e69e4947545fd4b2",
"assets/assets/images/kingscup/transparent_placeholder.png": "feaca926a4f44d344526dd3b95434de6",
"assets/assets/images/kingscup/6D.png": "ff1c62992cf49b6164401d1d9f77a20c",
"assets/assets/images/kingscup/5H.png": "5457f189cabc0476511c7ed1421b419d",
"assets/assets/images/kingscup/6S.png": "c99b0f04000841e5f3db53d64b3f7034",
"assets/assets/images/kingscup/7C.png": "4808cc416c976dbd5c3cb629a0f102a5",
"assets/assets/images/kingscup/AS.png": "e6a6d2f8a350079dcad97e814d3559e7",
"assets/assets/images/kingscup/AD.png": "f37d608fb18056bc4f83737d633c5cf5",
"assets/assets/images/kingscup/9H.png": "33ab7891b4259ea8d8823a352ef38cdf",
"assets/assets/images/kingscup/8H.png": "1e9e59b0d6f684908f3ad7d2fe942a42",
"assets/assets/images/kingscup/6C.png": "5c96f40f637a6b2ed34d5e837d81ef7b",
"assets/assets/images/kingscup/7D.png": "58d872f063752027e59e15af4d090123",
"assets/assets/images/kingscup/7S.png": "82d62864ff67ff7b5e20150316d26872",
"assets/assets/images/kingscup/4H.png": "6695f1d514765572dfe7e5dd0863dfce",
"assets/assets/images/kingscup/AC.png": "17ca9f77b395a41c6d45cbff350573bb",
"assets/assets/images/kingscup/QH.png": "63afa62b47efa84b8b87d3e39ef42bc1",
"assets/assets/images/kingscup/ringfire.png": "c0122d6ae160b832c420740098005628",
"assets/assets/images/kingscup/JC.png": "1595a3ea21f452c290cf26af7ae53ede",
"assets/assets/images/kingscup/10D.png": "39ef422e15761450c33f8cb3ee369ebe",
"assets/assets/images/kingscup/10S.png": "b208cd7f21ce87cf950936ab6fb3e717",
"assets/assets/images/kingscup/3H.png": "7278d51dda50bd4b8c8cadb7fe349953",
"assets/assets/images/kingscup/KS.png": "e8d1a4cfe9d8dca64733c050e65e9dfd",
"assets/assets/images/kingscup/KD.png": "6b5b30c00309e3cfae486f543bc1809a",
"assets/assets/images/kingscup/JS.png": "89d2c97e62fcaec36c80dbdd725f216f",
"assets/assets/images/kingscup/JD.png": "d5682eb454510b9cdf54beb9c5a0e5f5",
"assets/assets/images/kingscup/2H.png": "ebe434953cb5c82ec5c8e38b8e735489",
"assets/assets/images/kingscup/KC.png": "aa73cfd0e548d87f4af4a18a8d2c3c8f",
"assets/assets/images/kingscup/10C.png": "1963502749c024e1590789bab3632bc9",
"assets/assets/images/kingscup/3C.png": "6ed5bf64f008d72e83c67f81468ab7c5",
"assets/assets/images/kingscup/JH.png": "fdf4ffc434ac567c6b77905cb1b11c8a",
"assets/assets/images/kingscup/2S.png": "33c964ae685ff65233d2ac2c35b96072",
"assets/assets/images/kingscup/2D.png": "1451de5d494406e395215276a2489a7c",
"assets/assets/images/kingscup/QC.png": "d6296277472d7e9594d0ebee0cb82cdc",
"assets/assets/images/kingscup/10H.png": "60ab387c8c1c50dd3a75255500218b94",
"assets/assets/images/kingscup/3S.png": "9638bf9f29919b027765992a81f6d39b",
"assets/assets/images/kingscup/3D.png": "690d5a477dfe9ed93261bd814c0a40d6",
"assets/assets/images/kingscup/KH.png": "3b48ae8207b07a1f9477d7e6135ca211",
"assets/assets/images/kingscup/QS.png": "9026849bcbad6fd92f7c3cb8f70e3cd4",
"assets/assets/images/kingscup/QD.png": "6940967da8669e3410fefd3a8a33aad9",
"assets/assets/images/kingscup/2C.png": "136dab439961d61f4b9c1f939e07828d",
"assets/assets/images/kingscup/9C.png": "4f8d0d8f2ebaeacf99e7134221d6da49",
"assets/assets/images/kingscup/4S.png": "5156259e1f30dece1376dc5695a9a1d4",
"assets/assets/images/kingscup/7H.png": "c8475b530ea9f0970ff829c97f3e7abf",
"assets/assets/images/kingscup/4D.png": "89eaac32133444fe40876cb51f697f13",
"assets/assets/images/kingscup/8S.png": "497eed1efa7e554de5b62bc9eb2b5ae6",
"assets/assets/images/kingscup/8D.png": "fcafeaf2d610109aa1916208080ab711",
"assets/assets/images/kingscup/5C.png": "3ac88eddd1ac03bfc901de76424b5aba",
"assets/assets/images/kingscup/4C.png": "23c51e0b449e342f8b7f6c8fd57e2137",
"assets/assets/images/kingscup/AH.png": "a762540d55018bcf43ffba8b6343c9c9",
"assets/assets/images/kingscup/9S.png": "50caac183ef66afe6cdda1d2e3daafda",
"assets/assets/images/kingscup/9D.png": "1d495bb1ebf632dca66a538b61bae19a",
"assets/assets/images/kingscup/6H.png": "84564e31bf0a0e8bcd5fdd3d4aa12cc3",
"assets/assets/images/kingscup/5S.png": "5ab3d8627d0c4d17c86c73d90817900b",
"assets/assets/images/kingscup/5D.png": "24fd440cbb52affc5242a507c9dec4d1",
"assets/assets/images/kingscup/8C.png": "a46a54d93ff6e543497d205db97fd460",
"assets/assets/images/bottles-transparent.png": "ec3ed7ea45e4fda46a0f4407dce24c31",
"assets/assets/images/bekuIcon.png": "65f06c5deb932343c638550caaec9e90",
"assets/assets/images/packs/saku_pack.png": "3a1649d46dc2163ed84313a74dbac441",
"assets/assets/images/packs/ISMERKEDOS2x.png": "417c372c89850f3d384db5ddcf97f586",
"assets/assets/images/packs/OSSZES2x.png": "e999f74d2f678487594e3e702c8f126f",
"assets/assets/images/packs/LELKIZOS2x.png": "b82e9f4448b9d2d429a16d356deb1d8c",
"assets/assets/images/packs/FORRO2x.png": "259c8af6aec04dadb9fb24184bf4ce51",
"assets/assets/images/packs/ALAPOZAS2x.png": "4084fa1567f682f4dd749eeb38ad07f3",
"assets/assets/images/packs/bottles_transparent.png": "21cac02edb46b4def5fe248eaa77845d",
"assets/assets/images/packs/KARTYA2x.png": "80a97c97c3a115c0069db9754eb0bd0f",
"assets/assets/images/packs/MEGBORULOS2x.png": "8fef78f23682d237302a262739d3a4ae",
"assets/assets/images/bottlesWhite.png": "d5b286447197975b1b634050ccdaa9d8",
"assets/assets/images/bottles-transparent-small.png": "6f66c030115fc498f1a127eea93318cf",
"assets/assets/images/stars_transparent.png": "66845c6927d510f3aa60a3bce83257ff",
"assets/assets/translations/langs.csv": "93b31928db44a0df2b3fa45526eb9adb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
