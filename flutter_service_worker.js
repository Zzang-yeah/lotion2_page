'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c426b035a01a6f3537acb91244be4421",
"assets/AssetManifest.json": "21089efc43e2d5b17f366fd00b1682f2",
"assets/assets/images/aralm.svg": "e91f9bd240790c7751e73e338f5632bb",
"assets/assets/images/arrow.svg": "d5a7d8fd560e8a0d4a01e757b2ad7a9c",
"assets/assets/images/Backbutton.svg": "e5d7b9c08c95f8b55d72eeefc6288e9a",
"assets/assets/images/BACKGROUND.svg": "4e53669820c8864eeff1573ece06cab4",
"assets/assets/images/chat.svg": "3b35db11caf2e3d07325a7c7f80d2142",
"assets/assets/images/clicked_region.svg": "f26f653741f2263bcb61d550cb836716",
"assets/assets/images/clock_outline.svg": "b98b92dce31b009160c17ffdfcd3e45e",
"assets/assets/images/feed_photo.png": "a1fcbf43b9e66ecce9486b0cbd313f2c",
"assets/assets/images/logo/for_sports.svg": "443511c1f542c17be8c0d9fb83c4d1e6",
"assets/assets/images/logo/lotion_blue.png": "e7ae30e66c5cbdafa07eddbaff1ffc48",
"assets/assets/images/logo/lotion_blue.svg": "b92f85c5a12fe86a25158ecf9bc1b774",
"assets/assets/images/logo/lotion_mini.svg": "066fe1f004b065abe87002aa5c647c07",
"assets/assets/images/logo/new_lotion.svg": "527385ee70a0c1f79feb74e4af678a64",
"assets/assets/images/logo/real_lotion.png": "f31483eaf97a29cf4689727801a8e70b",
"assets/assets/images/logo/real_lotion.svg": "6db4a0ba385b47a73f23131c664c185d",
"assets/assets/images/logo/splashbg.svg": "1b35fe82a14242a135d90906e6683b14",
"assets/assets/images/map.svg": "a1395afe836b1974e5b8a3515ebefba0",
"assets/assets/images/mascot.png": "5a7b4317c4d3f6e6e18805c96572cc2f",
"assets/assets/images/mypage/aralm.svg": "58c5befc1170a27076bb6b3ac6d7b2b0",
"assets/assets/images/mypage/comment.svg": "61e69d54fddf73d828b05d5c97296973",
"assets/assets/images/mypage/lock.svg": "0657aa32609d440f71f2856f5aa2b092",
"assets/assets/images/mypage/megaphone.svg": "712e8fd19cbdbd86696b8648b3c3f779",
"assets/assets/images/mypage/myprofile.png": "fdb61a8b14b5a145fc208d2fbe89486b",
"assets/assets/images/mypage/notebook.svg": "9e17184ecd41fb7b1a7654aa479a8f8b",
"assets/assets/images/mypage/toggle-on.svg": "2129730ae9fad256f765ddc392e30e79",
"assets/assets/images/mypage/user-headset.svg": "8f38172775b22c5e27c71c5c0c24d394",
"assets/assets/images/navigation/community_off.svg": "39cc03bf8bdb793fc4ff2cacc6fe9970",
"assets/assets/images/navigation/community_on.svg": "0c2ad5efd3dd5ce0b02aa7927ae9c445",
"assets/assets/images/navigation/map_off.svg": "d0862fd01d068d704ca173f54de7c31b",
"assets/assets/images/navigation/map_on.svg": "59e909e988c45af5a949bc6c2d962bdd",
"assets/assets/images/navigation/my_off.svg": "287aeb463448832786608afe7473bb84",
"assets/assets/images/navigation/my_on.svg": "9b0a3f77fb8908c9ae715d113f7ba6c8",
"assets/assets/images/navigation/photo_off.svg": "b0cd4f0bcf1446305b99c917164a4ebf",
"assets/assets/images/navigation/photo_on.svg": "478cdf24c1dd2f9b59f771044a15a908",
"assets/assets/images/news_screenshot.jpg": "6ffb0a106ccced740f6423db6f4b2e2f",
"assets/assets/images/posting/icon_bottom_nav.svg": "5bb8dfac4babe7f63009739c8b7a87d8",
"assets/assets/images/posting/icon_heart.svg": "6237d08617680254ee1bf7fbcb5926c9",
"assets/assets/images/posting/lucide_eye.svg": "9dea5259140540a736b2c14728faedbf",
"assets/assets/images/posting/near_profile.svg": "677a2d2761df494d47e5fed455c60f3d",
"assets/assets/images/posting/near_profile1.png": "e58fad8ef43d22267aea0a6c0f73fe41",
"assets/assets/images/posting/near_profile2.png": "293644b49f1164654883a8c9c5bc707b",
"assets/assets/images/posting/near_profile3.png": "e33a029a1845ba0c9f5c9af0ebeb87df",
"assets/assets/images/posting/new_posting.svg": "2f9812f69f84b38f1cd7e32c606e9969",
"assets/assets/images/posting/pencil_outline.svg": "2f9812f69f84b38f1cd7e32c606e9969",
"assets/assets/images/region_refreshbg.png": "e9274cad402a55638b93226fb176fe57",
"assets/assets/images/Release1.png": "f7a6079a4e6c4d030ffad18a77bfa4cd",
"assets/assets/images/Release2.png": "ccb447ab67e47b42666ecf7e1150ef49",
"assets/assets/images/screenshot.png": "a1fcbf43b9e66ecce9486b0cbd313f2c",
"assets/assets/images/teenyicons_search-outline.svg": "0c1cfbc54c9d67119bebad4dfa743058",
"assets/assets/images/zondicons_close-outline.svg": "e99641a9eaabf1326225fa1f951bb993",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d89ddd69b6668c333f45ae71d2ebcc72",
"assets/NOTICES": "3e781b1901628c5280a22235e0adc3e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "270b5ea37813513c73b9c18ff1eebd47",
"/": "270b5ea37813513c73b9c18ff1eebd47",
"main.dart.js": "3f389857fe2ff996053bc4463d3c8848",
"manifest.json": "818b72789296986765478eb32fd122b3",
"version.json": "d3c8491c4f2cf9ce82d1ad3e82c661ca"};
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
