/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b175363a10fd374c664e98f47ee83d7"
  },
  {
    "url": "assets/css/0.styles.3af1e61d.css",
    "revision": "7b46aff8bb3f898ee3babc1a8c7134f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c6e7375e.js",
    "revision": "3ec61217cc4df06fa8cd7f4c30c1fada"
  },
  {
    "url": "assets/js/11.77ffe049.js",
    "revision": "d3b6c64200133207bd4ada14b290b91e"
  },
  {
    "url": "assets/js/12.1bed0d43.js",
    "revision": "84d03d74c8749c77170ec3c649a32ddd"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.769c156a.js",
    "revision": "23f6d2ec11fe65aa2fe7d982175b5daa"
  },
  {
    "url": "assets/js/15.b32af12d.js",
    "revision": "00464b437d78610fe7599729b701e1fc"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.84d13c90.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.762de7ed.js",
    "revision": "efce58aaf72028620a6c956a1e228fb5"
  },
  {
    "url": "assets/js/19.15cc71e1.js",
    "revision": "c8ca94308bb8b15c82457a604d35a2bf"
  },
  {
    "url": "assets/js/2.4534aae0.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.be330620.js",
    "revision": "f756e11b439476dd59928cb9db1e785c"
  },
  {
    "url": "assets/js/21.1e139cda.js",
    "revision": "4ba229073d54f95f35939944267e5382"
  },
  {
    "url": "assets/js/22.1fcdbfe3.js",
    "revision": "1cf1c4d63e9ad6a15313b9a80c265d69"
  },
  {
    "url": "assets/js/23.88169ae7.js",
    "revision": "59a8dea3e0472566e632869cd3d96908"
  },
  {
    "url": "assets/js/24.69d0b619.js",
    "revision": "a0990137d72a4e83132722c33acd9041"
  },
  {
    "url": "assets/js/25.f71873d3.js",
    "revision": "be69788e7f55ce3bcc60743dee6f42d1"
  },
  {
    "url": "assets/js/26.fd1d4d15.js",
    "revision": "2ba09858ddb2f1412fdaef4eba39784f"
  },
  {
    "url": "assets/js/27.78c6cc59.js",
    "revision": "0caa83f185b2e90861a9ff31d5c4fe29"
  },
  {
    "url": "assets/js/28.63513037.js",
    "revision": "5b72bfabbdfcd635997658f0362181c3"
  },
  {
    "url": "assets/js/29.6a32712f.js",
    "revision": "63979ee1f34106b22a434239e36815c2"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/30.02ae5e91.js",
    "revision": "8e21de576c12f7e1ef18f79bc9d6a731"
  },
  {
    "url": "assets/js/32.313292fe.js",
    "revision": "e15b2198407e497581cc759a7eb0a873"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.257f9e59.js",
    "revision": "f815d0bbbe9326106fa3def1196f7055"
  },
  {
    "url": "assets/js/6.612a98a1.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.b06b704d.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.df4857e8.js",
    "revision": "17edca95e2338bd105c582f37439fbae"
  },
  {
    "url": "assets/js/app.89fcf87b.js",
    "revision": "969d983ee70aee5f5eeacb0338b70504"
  },
  {
    "url": "conclusion/index.html",
    "revision": "eb55530b6de4106d0a33cedbb1d3a62e"
  },
  {
    "url": "design/index.html",
    "revision": "a50e56deb6f2c18f023dc563226f991c"
  },
  {
    "url": "index.html",
    "revision": "482d78f7e58b9337fb7a7f182d5696cf"
  },
  {
    "url": "intro/index.html",
    "revision": "dd383bb35fe966cd31451a0391e80a08"
  },
  {
    "url": "labs/lab01.html",
    "revision": "4335d7b253cd1a0cd8b1d6fe8bb55c22"
  },
  {
    "url": "labs/lab2.html",
    "revision": "0882dd6c770af3ccb6a823b6ab04a458"
  },
  {
    "url": "labs/lab3.html",
    "revision": "5d7550bc67cabb99026e5becffb1a566"
  },
  {
    "url": "labs/lab4.html",
    "revision": "bb21d863cf0b02bb39a1df3c5397f101"
  },
  {
    "url": "labs/lab5.html",
    "revision": "5768cdc8e861ded866f2141972b6edff"
  },
  {
    "url": "labs/lab6.html",
    "revision": "450298430d30ef9e2e094581a7e9a833"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1f90f2bc65d7fad1eba254eefe8953dc"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6072ba33f78c27780493382ea031d8c7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eb78b8b5ceb8c3975536dd556e8198a3"
  },
  {
    "url": "software/index.html",
    "revision": "707706eb7486f5a9756063247bb8ab5d"
  },
  {
    "url": "test/index.html",
    "revision": "6ad161eb9e278c7587af398dbe99307d"
  },
  {
    "url": "use cases/index.html",
    "revision": "09e03a90a2c29f98a51e1dc2a9f78fdd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
