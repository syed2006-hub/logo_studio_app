'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "6cad95c34f3f4c61915322eb7f46fcec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "39f5ed3351b590bc0d097d422c4e90b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2756b9d1ac413ca6ae9863dc1498ec9b",
".git/logs/refs/heads/main": "19935c111dc0a399fb23da270a5992c7",
".git/logs/refs/remotes/origin/main": "2d393d05203e73167697e1a409e5a202",
".git/objects/00/ef98e091f90e33ae9c38a75ef89654725def0b": "4266cf83816d5899bf0ff999bd796d88",
".git/objects/4c/52a6adb8debbdb4be4cb59a05667e1bc73821b": "81cc0802cf6a390a29dc722d00bd8b4f",
".git/objects/61/889d1803154bcfb7822b85a3eb6a6ed64fbb85": "74ede5aa3bbd237fe2d6dc990cfa048f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b0/31dd8e612996da85812aef51135138bba307b8": "f60f15dc450738392db1801123dc9859",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/7b537287aefa58e595f00870a9ea2fdc2c5eb2": "129be3a2eb17b7b141a39470dd859d81",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "87f63733e8762b449287c39ae19eb8b6",
".git/refs/remotes/origin/main": "87f63733e8762b449287c39ae19eb8b6",
"assets/AssetManifest.bin": "45c008651702c2354e645a029e8a8347",
"assets/AssetManifest.bin.json": "af2edbe1c33c22ff89373b643e4769ce",
"assets/AssetManifest.json": "cbb45cdf412c84376f39ba9d0ff8b74b",
"assets/assets/logos/adidas.jpg": "ed4712796fb4cd938a3504dadf425bde",
"assets/assets/logos/amazon.jpg": "30fa86fa0350f216684628d90b61f988",
"assets/assets/logos/apple.jpg": "149b1c07451195104f137b265b594a05",
"assets/assets/logos/audi.jpg": "b9a995d0ee4fa1df08033b647f23cfbb",
"assets/assets/logos/bently.jpg": "a2192e86d17aad3d87ab21c6f95930cc",
"assets/assets/logos/benz.jpg": "11bf945a7b241edebb543a5371e1c1ba",
"assets/assets/logos/bmw.jpg": "c94061d4c72a7bbde843fbeef09e1d57",
"assets/assets/logos/chanel.jpg": "7e51c6917121e00aab7cccb9c038c204",
"assets/assets/logos/cisco.jpg": "4b4246a80747ab0c96dc1668dbdb4c01",
"assets/assets/logos/cocacola.jpg": "06c91e4e91e52c7d0f40e8bcae115d3c",
"assets/assets/logos/dell.jpg": "c4be9b6b3faf593f435248c2125aa432",
"assets/assets/logos/disney.jpg": "4e9762db0360f2ccbdbbf9e3e9b9a860",
"assets/assets/logos/dominos.jpg": "8c2335b60d503f8df4691efb8d6a8188",
"assets/assets/logos/facebook.jpg": "55ca6d5e3e6c04ced629a1cafd6fee3e",
"assets/assets/logos/ferrari.jpg": "9319490ad6743051917e3e7064e45594",
"assets/assets/logos/google.jpg": "f03c4b867516b9a4f6b746703c9a0611",
"assets/assets/logos/gucci.jpg": "6cbf80ea64031ea7b8492ec9470dece7",
"assets/assets/logos/h&m.jpg": "89d721c46769876f617e150f37d2effd",
"assets/assets/logos/hp.jpg": "286817c971ae085bb523dfdfb18c64dc",
"assets/assets/logos/huawei.jpg": "e3de72c589ac644b1b2f24ac9fa072c5",
"assets/assets/logos/hyundai.jpg": "13e68b183fee35d58e057c0bcc966354",
"assets/assets/logos/ibm.jpg": "fa4016b260d321f8b41c2ec89d8dbec3",
"assets/assets/logos/instagram.jpg": "e4c6e6496c85b5c1396f28ed52a74b0c",
"assets/assets/logos/intel.jpg": "24973b29ed0e888b68e00f92c104cc70",
"assets/assets/logos/kfc.jpg": "d4169b9e0d38c63af49447682db0e671",
"assets/assets/logos/lacoste.jpg": "42d25d0106d419e85514f5e5e54ff428",
"assets/assets/logos/levis.jpg": "a3295cb6cf4bf0381eca5c17dbc391de",
"assets/assets/logos/lg.jpg": "d4f89083df6d578fd5fd171c163ba04f",
"assets/assets/logos/linkedin.jpg": "12fc6eb2fe7ecaed593dd963322738fb",
"assets/assets/logos/louisvuition.jpg": "af1b8904bdf41252afaf8707c3e0ff42",
"assets/assets/logos/mastercard.jpg": "a61ccc7a1812ee249fff89dfce90c3b8",
"assets/assets/logos/meesho.jpg": "eea52156cc2320bfbe67eefff3d2ef66",
"assets/assets/logos/microsoft.jpg": "7cbe4eb03d50a4a1b578d2d9cf3251f0",
"assets/assets/logos/myntra.jpg": "06932cc1b83b928216b90622572650b7",
"assets/assets/logos/nasa.jpg": "f4567bd88c7c2f5baef7281f2627396d",
"assets/assets/logos/netflix.jpg": "462ad2e5e1672891849849b386da89a5",
"assets/assets/logos/nike.jpg": "2f039888a343fd4c0809d0326bca055a",
"assets/assets/logos/nivea.jpg": "6b3d65ccd0064bc231b7f5232724b958",
"assets/assets/logos/oppo.jpg": "3255762f9cf94905d2bacd9bb1db3c15",
"assets/assets/logos/oracle.jpg": "bed79901fe149f9b8be7a3043f1ac617",
"assets/assets/logos/paypal.jpg": "4ee6e2260c1c8ff202951aaacad9cd62",
"assets/assets/logos/pepsi.jpg": "940383bb37874fb117c7222270d77e82",
"assets/assets/logos/puma.jpg": "7ca7cbdc80dad910432f88a1ee87c9ac",
"assets/assets/logos/rolex.jpg": "63966eabf5b133c19cd6e04808a37888",
"assets/assets/logos/salesforce.jpg": "0c266eb2fa22204c0420ecb6100236b3",
"assets/assets/logos/samsung.jpg": "d524f36d81d3d04f6f7e0fc0796ac05a",
"assets/assets/logos/sony.jpg": "f9aaa19437486bd85ffc026419125a32",
"assets/assets/logos/spotify.jpg": "4971feed02dd6dc3fcbf93524fcb843a",
"assets/assets/logos/starbucks.jpg": "6d7f3e4a10dce2f10e0d2bc18db9fbe8",
"assets/assets/logos/subway.jpg": "cff7abb9a0bd0b7e70727c3a84e3d1c7",
"assets/assets/logos/tesla.jpg": "cb95638c8f58adc02071ea1d58b325f2",
"assets/assets/logos/toyota.jpg": "ef53e91c2231edf57cd1132d25b9dd93",
"assets/assets/logos/uber.jpg": "644ec4f604ed597d074b99a3627a2c01",
"assets/assets/logos/uniqlo.jpg": "92f2020176db40d51337760269b109e7",
"assets/assets/logos/visa.jpg": "fb41a78ee1c9cff9ad605638faccf0e9",
"assets/assets/logos/vivo.jpg": "1dcc22fdcda5f5ef5c1a53f0141cb452",
"assets/assets/logos/warnerbros.jpg": "fcfb6b97f470f9669567c385ddf6d300",
"assets/assets/logos/whatsapp.jpg": "3f50ff81c606d56877d7c9d8175be1c8",
"assets/assets/logos/youtube.jpg": "23c798801b59ea6edea834a423498f39",
"assets/assets/logos/zara.jpg": "3c191de9bcf4fa7886de8861cea31aa2",
"assets/assets/logos/zoom.jpg": "86967febcfdbf6b5973c5fc6bb3d1ca0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "767fb983fd5e46cc78d7934884401680",
"assets/NOTICES": "1ec592aa1a5aa25c4a090f026c71403e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "66d633fbb41eaf21b63a156335abe8be",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "409a4847da5e89fa881f7fd33e4458b7",
"/": "409a4847da5e89fa881f7fd33e4458b7",
"main.dart.js": "b01db41852ac234e6b3cc2b58f209ce3",
"manifest.json": "fd53aa9bcd392361c18aa41d7dd7ed90",
"version.json": "770b179ddcce5075d02cc632b6ad7e6c",
"vision_helper.js": "75cc13bc6b0489c67f756a004ebe164d"};
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
