'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6ef85df87d1f6617c2ba4fecb6f2c993",
".git/config": "ce23e7682a6826418e769a83b820ff64",
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
".git/index": "2972f847a4c65e269863b824b6ea03cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "339632cd1e0407a668a7c0c608600e04",
".git/logs/refs/heads/main": "339632cd1e0407a668a7c0c608600e04",
".git/logs/refs/remotes/origin/main": "e370341f0209039834a87f57a0511837",
".git/objects/07/eeefbb491894944d9c2d162dc48118fb5a7a5d": "f8e7738e53c6f5eb84b9d5230cceac95",
".git/objects/0c/b5d806bc57695246c2a89d918e5d216d98b8b7": "0fdbf90527d04e8e46892a95f4ab7ad5",
".git/objects/16/3b15285d6e7d1644ed8d454db5eefb8cbb2670": "09ea7a66af040fa46f63c472bba81456",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/30aa912cf0ac21018a8579bd89a2a87c8aa8a9": "ff39daf6266f2f2d178c770b52f5dc87",
".git/objects/1b/dce715e9eb7c360736dcfb9c6b0ad61be5330c": "367e77ff9d8a3c8629e638f96b1e5dca",
".git/objects/1c/4ade68f584306219d2f9cb52c58914b74a984f": "e9408d138a0df8e4c92f9df7983f4b31",
".git/objects/22/3e6155b714cc55a2cb150a11f16d0ee52198b0": "dcd615457a1904fa2f23e1a56c593c49",
".git/objects/25/aebe25d30798fbac4f40025875dab586d709a5": "60426c34531fc800a7c56516d18f5d62",
".git/objects/2a/41d33a94745a0a5efc2ba66d6c091127a332fd": "7bb522624d87cc112a3cbaab53a3843f",
".git/objects/2b/a685a5c2ab379c55fdfa1a4e69f73009d70819": "b753b41afe88e35f1aa8898e80e0aa75",
".git/objects/30/43fb0a23fdc4be29e45a721dba94a4f8d4c91b": "56e5129f28be11e400a5bf2a6a9706b8",
".git/objects/33/355fe8bbd44105d0bcf50bf8287473810221c5": "7c71fdb330b8056a40cbb08cc5a02fe3",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/37/a08b537d8e071fdbf2458b9e94e48e9992f3e7": "f70a8ada1e19b272e7ea205e734e6437",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "475ff51a832dac51d969b1617aeaa289",
".git/objects/3f/c218800176bfc9f586a6655bf942a60bec0c03": "6e3f93f533339a418c769413b218680a",
".git/objects/41/ee9085d7836463dea501e16aa6da361f207ef6": "8e5370b03a5f1124eb944089850efabe",
".git/objects/44/2a370c88d9a3e85dbf55b661c14bb1365d4ada": "61f11c4c1d95edbcd2a01864e58f2c1d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c9a5de3c07741031ae3511b8dea8b3fc46304e": "23136572466a1f230b7f050e11cbf994",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/ad952427b27138b963b07ba5703ee2d00c3506": "2af80910e65f2c26f7753e3b03e189b9",
".git/objects/4f/f207f7f98a5b5b57bbf42331dc55eb93773645": "928dd6b82149b44765faff5eb0a7dc8f",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/4012f25cde401526ba3c1f2012c2e75e0c71de": "d94509c9aae1930d306d178d704f5667",
".git/objects/5a/13e8ab9b96d8c0407253f21c9587ad0e29bf3d": "be0b07bbcb16d4dc675bef7a0cd49c75",
".git/objects/5d/e3b3985ef714cb481c6774654ff3bda7004ca3": "17013f9c296de4f2e47cbc3793ea6642",
".git/objects/64/f15e7969a7440717ce21fadca37dfd5dd81552": "c3ad476b634f0da8334c373839565251",
".git/objects/66/234e41b6ec5367b8b2a2c418b8ca49671ce47a": "cf23cce8886dffb7891fd67eac0f932c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/096a56287dc2712d2b5fbae14c0fafcb715791": "ff5d6d1c648fa86e83ca71986da033cd",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "e561c5cd64c79e50085bedcb8cd31377",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0c96fcd1594b412cdc9887145b70ce1f113151": "b29c6515bb9d88cb5dee6e677147190c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/4e9d2a133f14c04658bde2bf515ad256dce290": "9154eedc791ef91eb42133415921db3f",
".git/objects/9a/55b30798ee87f5bfac72daf2bf514f11e1e21f": "72e2f914eb292256c99eb1c39e0b8ee5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/0e35e55ff61f19e4a4db7278b9c530661140aa": "b17df9bd83642233d415bb4b595a5b68",
".git/objects/a4/f2c8fc37fb388d6d1fc918f7ff17bc4e1a1a5e": "6f16014621ba0fff9fb5f6bb0e52abc5",
".git/objects/a5/9d56ae087808b795bcfdce27ee5c25d12eb490": "0aa75be43d654596dfcb864e7d102e2b",
".git/objects/ad/20b1a7ed5f45d595a19a19b28f17016c803c1a": "8dd0e661391cfbe386e50e4c3d5d3635",
".git/objects/ae/790ea57e6b62011d5b8f254c2c255817c7abe9": "490cfbbcd8b294136f75df1d8430eeae",
".git/objects/ae/bc8fda9e2b92965d14e513a3896ccdbf01f168": "12acaa65935a425e9df75f60da47573b",
".git/objects/b3/da3bf5ccfd2e7f846daeb3b0a84ab7b50d7d22": "a7f69b806c3097a4a493e326ebf0f61c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/b8fda028d7ba048a396694c3a1c9c388ff3f31": "7264716441e13cacb27c704d7cebd93d",
".git/objects/bd/de4f5b2cf611f38aad7f0da4625e29704e4f05": "9a70dada398367e4771e53f201c3220a",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/43d5c4c4484c21fc0de6bdfc500c04c7167d6b": "9a1920e6d5b14aa81714ea5167c3c1a9",
".git/objects/c9/7a80352ca97daf615941d891d14c4702d97995": "88cc24a01cff413a1465338cfe36517f",
".git/objects/d2/a0b815cee1c0aa7e73dfdbbb50d55b07ba1e20": "8e15f08280f7cc7151375417063ae7d8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b8315d80352d5140683f19a36c40b4392d3586": "0ee1d908c6fc3437bbb3cb5982766165",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/3ccd93512e98f8648f3b22aaceabfd92857e1b": "e21ddb0bb4783ad16410bdb9757a8bab",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/9d5aaec4640eb9c399694c27e276abbac8cf6f": "aa0a88e117d1b4ab6f3bed26b6c76743",
".git/objects/e4/57bb2a0df596691c69db7baea2f07d4099a95c": "0044e458ab17e3046d5669af6316d193",
".git/objects/e5/3eb143ac2bb8efc983cb497a5f6f0aef927f98": "64d5357cc5ea96ff1ef7abb13eb31e5d",
".git/objects/e6/82a33456140a472d8857d64ceb60adecb1b735": "d2cc2d081fa7341f75ec5bf100648681",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/79216a8dee1832576def207e97bd4563102f48": "f0b3bb4e827123c36475a99e845708e3",
".git/objects/fc/2d35f2063276a8d5fa3567a146b55299b28851": "bdcaffe6ea1aa14145d0653b6dc03207",
".git/refs/heads/main": "2418db12ccb55061ac1d5101a1953aa3",
".git/refs/remotes/origin/main": "2418db12ccb55061ac1d5101a1953aa3",
"assets/AssetManifest.bin": "fa647b94866dd7f3ba582ca7c5f36313",
"assets/AssetManifest.bin.json": "74f9182ca929f3623c5f478306d89b40",
"assets/AssetManifest.json": "2f8fbd6bbc66437bd0cd1691195c814a",
"assets/assets/earth.glb": "b27003e00020ba8c20c0f57542df9d9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "447f9c9b89298823f19072836248f700",
"assets/NOTICES": "a71bfa4046ab1eab2e9582377b4e2e8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "0ebf2e228b99d87d778dd8bc12b636e9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "47304bb780a3a3b39f91a27336209d65",
"icons/Icon-192.png": "c2711f97a8ac3e958196b6e20bfc2d9d",
"icons/Icon-512.png": "07cf3afc405bcf574c22ac028f472f63",
"icons/Icon-maskable-192.png": "c2711f97a8ac3e958196b6e20bfc2d9d",
"icons/Icon-maskable-512.png": "07cf3afc405bcf574c22ac028f472f63",
"index.html": "ab000d698a785ad5a125332fa86f3117",
"/": "ab000d698a785ad5a125332fa86f3117",
"main.dart.js": "f74168f7c055b99c8d16f2ba1cf4803d",
"manifest.json": "25232e6793e1e72f2da72ae0c8bfd28a",
"version.json": "2bbfbef8c0cc6b83db0c333b8ea25a56"};
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
