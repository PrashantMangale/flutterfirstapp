'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c70fac2c25670165e8d4ae501b07b50b",
".git/config": "82276b598026da3971f5698164a53427",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "087de8524db1fd2f2e3f357898565898",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77903bebf56c497d0745eabb682144fd",
".git/logs/refs/heads/master": "77903bebf56c497d0745eabb682144fd",
".git/logs/refs/remotes/origin/master": "fd0a6677f74818500f34166ccc6c9c78",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/6a95eed5b5e88af468bd59e0eca2c221654ffb": "af809fe238f9e4b712862545e0762e04",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/07bf89cf6de043b8ca48fc4b8e4ae4bad109bf": "e93eb66ea9bc1aa426cbd3820dedb532",
".git/objects/27/c15bf2f0c8d6852ba0d8389de4127ec04b0f04": "2f3d031631055ef9b159c0fc38218b27",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/b89d2078c00e92d9cb4845cf76ddd005cc5ebe": "efd0db206a18e719876c51bdb0dfe5d4",
".git/objects/33/1826e0685a057f53334dfdb3e605a1bc635e5b": "cc5abdb42610c4bd8f2e7f0e49c4cf11",
".git/objects/36/85f6ccb9eebe6ee478d9163e4dff0accfa93c5": "bb35dc085cde71679f7c31b617d6b390",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/3df26bb5b9980f08cf039faaf35cdd1adedf04": "d3fd3382788327c203aaec3ef5ec4905",
".git/objects/4b/bfbcc4122dc4d8a50a4da94e354c8a867dbeef": "0b1f328c13d426a582ff99aa086b8db9",
".git/objects/55/78ca706eab91562ef46bfeec1644b9928ed6b7": "8d3530d26a3e8201753d1df554bce328",
".git/objects/5c/0d0a113c4e0b0efc8ce15c4347ac36515b4c2c": "30738fbf5e13602c17b8e3df8ed348b8",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/5e/f47273abdce95d1c6f47ae943216ebf64e0fec": "1107cdba3983dcf9095c0521c1475a6e",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/65/83ccf7fa5b548dfc75cb4437bf4d680d385855": "a8c0b2388ad864f2f73f93a3d0516878",
".git/objects/69/46d515899dc389b3d24b453ed47c3be707cafa": "e91bf8a33fd17777279f262ae8ae6491",
".git/objects/6a/c19be6446730de6eca14f9f0c6e10cd6fa9598": "90bf97f864ab97a554221daffc46f5cd",
".git/objects/6c/edf3ecfddc95f0c24567d9b93f418a1714dbe9": "a317255ea9c9e2518091d389cc4fdfed",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/55dc8e13aa96d22cb562d790c8737d8a6f88fc": "d37197d3283e012dca946545ff3a63b3",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/86/fb3b70ea58965cc0fae81dfc42945e8b8099f3": "b9218cd7fe280c6935d7afa21de64ce2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/303467c5ebe4540e65eb40fc4faa087cd8ff08": "cb58d7b59e958027af6d94de104eb38c",
".git/objects/95/ef7674b4abf8c10e181595ab0be3318e219d94": "c8452dd8fb9ddb135439f963d352918c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/9c/10639a89f28d78859dec66d27a0e4fa5b5449e": "90f42986cbb85af27f9c89fdec329474",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/ab/2b384e4d4c21bf9ad2ee29ad73e51454f160a7": "e5516259713f8c594e93c4649f76db19",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/eb62a7fc2a41bc821cdfea419ff534e007f4db": "e09f30b5610207c81a2727c3a0544f64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/c7ea6c79fd8ecf9114475482be15a7e419db89": "d8cf3405ee56da5b30a4e958c05d0e8c",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/69c940267735cbad8d2c4af8f4d94c08d120d9": "3d1b1e0a2bfe0c0655c4ca5b00e94602",
".git/objects/d2/2554959753ae42e9b37f00524fb0e935e2fba0": "7054573db04858e47a592d5c4b7ca84d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cd49093aeb65c4d24a3bbf773d0960fa51cbf7": "028ef41be8b70ed278b9fe8de7d09808",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/32ea898d10fc2fab18814e067a07fe6a34065d": "a04ef57e73b44a6a57542b809cb9e895",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/fc/1937398d6bb59765c3087eead87cc973e993a1": "34d5c0497fde30e290e13e9d045d7b13",
".git/refs/heads/master": "66707878a41264aef3e1e5b97cf5f25d",
".git/refs/remotes/origin/master": "66707878a41264aef3e1e5b97cf5f25d",
"assets/AssetManifest.json": "7573a1e7c12ae215b91f99807fb0e9b1",
"assets/assets/images/background.JPEG": "0891cbef46e32154327213e327e3fc0c",
"assets/assets/images/background.png": "4a04238f4bbebc8a35202a850cb3ac45",
"assets/assets/images/google_map.png": "690e1707000ee0addb25f64bdf331b5f",
"assets/assets/images/images_1.jpeg": "a9ef193aad0283d5f74abe64e1c47024",
"assets/assets/images/twitter_logo.png": "0251d8ee95aa6d1f3400faa3b46b4bcf",
"assets/assets/images/youtube_logo.png": "ec1efab49c24be248d8ee984df407508",
"assets/assets/restaurant.png": "dc8b5588ffd6c26e8e54bae9bf79e4df",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5c083cc19d0d7c383740eaf17e54cd5a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "7624b26ce8512028bf5e45d39aab0d00",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2baabcb09be5db5bf2e76a2281f2cd81",
"/": "2baabcb09be5db5bf2e76a2281f2cd81",
"main.dart.js": "e9edc26856eafe3fdb62abab35cb02df",
"manifest.json": "bff859d610e803c34530184121a05bf4",
"version.json": "5038ea43b0e8f38840046e2e541dc517"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
