/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-ce62b1cc'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_astro/_slug_.BwqpPIKv.css",
    "revision": null
  }, {
    "url": "_astro/astro_scripts/before-hydration.js.CgzOFs_O.js",
    "revision": null
  }, {
    "url": "_astro/client.CwWKiGVO.js",
    "revision": null
  }, {
    "url": "_astro/client.DEGHhFmz.js",
    "revision": null
  }, {
    "url": "_astro/dev.DPyAJ8Ri.svg",
    "revision": null
  }, {
    "url": "_astro/github-inverse.5c5sSg3g.svg",
    "revision": null
  }, {
    "url": "_astro/github.Bg3pkxl-.svg",
    "revision": null
  }, {
    "url": "_astro/hoisted.D4nGArM6.js",
    "revision": null
  }, {
    "url": "_astro/linkedin.C92OM-O6.svg",
    "revision": null
  }, {
    "url": "_astro/Mastodon.QaBq5b1c.svg",
    "revision": null
  }, {
    "url": "_astro/workbox-window.prod.es5.DFjpnwFp.js",
    "revision": null
  }, {
    "url": "about/index.html",
    "revision": "e94ad783960d58d4946dc7f8ab6bf09f"
  }, {
    "url": "apple-splash-landscape-dark-2048x1536.png",
    "revision": "dd0c98ab136b2010a89df32d956c8ff7"
  }, {
    "url": "apple-splash-landscape-light-2048x1536.png",
    "revision": "42dd5cca9f51c351a501e9fa142d857c"
  }, {
    "url": "apple-splash-portrait-dark-1536x2048.png",
    "revision": "c62ca770045a22e0d43e3dcc5f30a299"
  }, {
    "url": "apple-splash-portrait-light-1536x2048.png",
    "revision": "8a97156ce1c1c0817ba26a11f2ca9162"
  }, {
    "url": "apple-touch-icon-180x180.png",
    "revision": "4c4cba04f68564b5242d504c13f64c62"
  }, {
    "url": "blahg-assets/fullsize/astro-multiframework-storybook.png",
    "revision": "864b541f578fc0da86185d3e9bfbf8f8"
  }, {
    "url": "blahg-assets/fullsize/bug-screenshot-vite-storybook.png",
    "revision": "90931426d26c24e80d39426070fc366e"
  }, {
    "url": "blahg-assets/fullsize/js-framework-share-tests.png",
    "revision": "6a3d6576f038c3314d8d17f78f4438de"
  }, {
    "url": "blahg-assets/fullsize/sharing-tests-with-a-handshake.png",
    "revision": "34b91b96ca8c44b043ee12375040581a"
  }, {
    "url": "blahg-assets/fullsize/simple-setup-guidepup-virtual-screen-reader-with-storybook.png",
    "revision": "e8dd1387e7d374f4b6a6c70c8f2da29a"
  }, {
    "url": "blahg-assets/fullsize/storybook-composition-with-github-pages.png",
    "revision": "cc09f4d04bd87bb90ff3c63e1c1d7a76"
  }, {
    "url": "blahg-assets/fullsize/storybook-interaction-tests-showing-virtual-screen-reader.png",
    "revision": "80dd3d7ef3591fb850d96773b22609c5"
  }, {
    "url": "blahg-assets/fullsize/storybook-setup-virtual-screen-reader-with-web-components.png",
    "revision": "ad2b2801e1e7468174a8d8cd14663072"
  }, {
    "url": "blahg-assets/fullsize/vitest-shared-tests-basic.png",
    "revision": "5e225b63a550c03e5aafc65410c5f430"
  }, {
    "url": "blahg/bug-multiple-vite-storybooks/index.html",
    "revision": "2e0f03a159216e9c0683ba98f79dae7d"
  }, {
    "url": "blahg/chatgpt-who-me/index.html",
    "revision": "d1b61fc3b5057a82cdd54aeaa07e6b1d"
  }, {
    "url": "blahg/index.html",
    "revision": "d6874487090cfd1d42a00897cdd0e132"
  }, {
    "url": "blahg/introducing-storydocker/index.html",
    "revision": "be3aefd38f811571cd80a1fdf4562af8"
  }, {
    "url": "blahg/multi-framework-composition-storybook-ghpages/index.html",
    "revision": "7822fdad895ca006bc0040ecafef2027"
  }, {
    "url": "blahg/multi-framework-composition-storybook-local/index.html",
    "revision": "f2d402932052a027b845db36f4d9d2c7"
  }, {
    "url": "blahg/profile-components--devto/index.html",
    "revision": "dd00ed494e42d1f6fc68fb4ca7236024"
  }, {
    "url": "blahg/profile-components--dsd/index.html",
    "revision": "996c217290145bc72b3a84cceff465c1"
  }, {
    "url": "blahg/profile-components--github/index.html",
    "revision": "a0e5f8415b826e76f388ab32c154b193"
  }, {
    "url": "blahg/profile-components/index.html",
    "revision": "8b0705bc4051145b007e1891fc8cf02b"
  }, {
    "url": "blahg/shared-storybook-tests/index.html",
    "revision": "1dbf58bda708df6b73813fea652c3ad9"
  }, {
    "url": "blahg/sharing-tests-between-components/index.html",
    "revision": "af8759af66ec6d5fc61b600dce4244f4"
  }, {
    "url": "blahg/sharing-tests-between-javascript-frameworks/index.html",
    "revision": "ddf979eb6166d748c0998e8fbf21557a"
  }, {
    "url": "blahg/sharing-tests-between-vitest-and-storybook/index.html",
    "revision": "9059eb409164692321e7994aff19d206"
  }, {
    "url": "blahg/virtual-screen-reader-with-storybook/index.html",
    "revision": "b8d9bd8428e7307faf061887f16f3160"
  }, {
    "url": "blahg/virtual-screen-reader-with-web-components/index.html",
    "revision": "9981ddf927d8d28c301d2ff9ea789531"
  }, {
    "url": "favicon-clown.ico",
    "revision": "9e834c5b521d6433fcc5cb8e818625ba"
  }, {
    "url": "favicon-mind-blown.ico",
    "revision": "ed7e5b16128bb5424288df303d79f196"
  }, {
    "url": "favicon.ico",
    "revision": "b0fd72a010e645c782468072b1e926be"
  }, {
    "url": "favicon.svg",
    "revision": "52d135c9ba1b12751f747cfab9352db5"
  }, {
    "url": "github/index.html",
    "revision": "2e05ee0ca70d9902a9354d6f93e596ea"
  }, {
    "url": "index.html",
    "revision": "199d39edfecc9894fff7db6b050dab58"
  }, {
    "url": "maskable-icon-512x512.png",
    "revision": "a8b3ac4534260dd52d64a82ea11d42ca"
  }, {
    "url": "profile-components-blahg/devto-post-300px.png",
    "revision": "49121a57ad00e968d50a367d0a198f5c"
  }, {
    "url": "profile-components-blahg/devto-post-400px.png",
    "revision": "42b7a2f916d905f5f3ad3bd2c854747b"
  }, {
    "url": "profile-components-blahg/devto-user-300px-light.png",
    "revision": "7360c0a7f2606900669d0978e0ffe3f0"
  }, {
    "url": "profile-components-blahg/devto-user-400px-dark.png",
    "revision": "5ece9e73d3a626bcc6e3064fa12e375a"
  }, {
    "url": "profile-components-blahg/full/devto-200px-wide.png",
    "revision": "e51cb7f5373d9d974b3e36efb0f89064"
  }, {
    "url": "profile-components-blahg/full/devto-400px-wide.png",
    "revision": "9362c52b1b491627f6cda4d3c2703edb"
  }, {
    "url": "profile-components-blahg/full/profile-components-dsd-header.png",
    "revision": "296d91b629f26cdd156c0994986869e4"
  }, {
    "url": "profile-components-blahg/github-component-header-scottnath.png",
    "revision": "4e90777568e683fa96dbd31d681818cd"
  }, {
    "url": "profile-components-blahg/github-dark-meowy-400px.png",
    "revision": "4f9ed9f6e7b46e21e6288de0b260dae2"
  }, {
    "url": "profile-components-blahg/github-dark-repo-freecode-400px.png",
    "revision": "4fb70af6a9132f90f7495b41e158314e"
  }, {
    "url": "profile-components-blahg/github-dark-repo-local-data-400px.png",
    "revision": "d04775f237c1cf2b3df436e96c63dd6a"
  }, {
    "url": "profile-components-blahg/github-dark-scottnath-400px.png",
    "revision": "088f1a23bf203be25dedb7f3f3bd9944"
  }, {
    "url": "profile-components-blahg/github-dark-scottnath-with-repos-400px.png",
    "revision": "23ca7df1ba800b8b57e1e030e1988fbc"
  }, {
    "url": "profile-components-blahg/github-dark-sorhus-300px.png",
    "revision": "9a7be3e7d8da35aee58cb98540545ea2"
  }, {
    "url": "profile-components-blahg/github-light-fetch-overrides-400px.png",
    "revision": "7506dd0746818a3980083f6ff7b426e0"
  }, {
    "url": "profile-components-blahg/github-light-repo-freecode-400px.png",
    "revision": "2f13bc88e7f35b2dc79244e88bef9697"
  }, {
    "url": "profile-components-blahg/github-light-repo-pc-300px.png",
    "revision": "1c62b80dc8679ac8f167822f8ac104b5"
  }, {
    "url": "profile-components-blahg/github-light-scottnath-400px.png",
    "revision": "515a2de5ae88dce1dd44b6dce11e1114"
  }, {
    "url": "profile-components-blahg/github-light-scottnath-repos-400px.png",
    "revision": "c37afde8e3b7c0eb61a5ef5899e9b84f"
  }, {
    "url": "profile-components-blahg/profile-components-header.png",
    "revision": "cd4ae21de2deca6ed5d2148f078e05ee"
  }, {
    "url": "pwa-192x192.png",
    "revision": "9bdfe41bb380dd3b9ad4edf1026c6879"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5eb288aaeb6049f20c8cee98fb1c9197"
  }, {
    "url": "pwa-64x64.png",
    "revision": "10cc406abcfefd20693aa64f4adaec50"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "resume/index.html",
    "revision": "62d992f8440e1836988cc88d7455820d"
  }, {
    "url": "robots.txt",
    "revision": "06b4ac3e9b82136d9205f00f9ed9ed71"
  }, {
    "url": "who-me-chat-gpt.png",
    "revision": "64c812e939ca78195d235d0110c389ad"
  }, {
    "url": "who-me/train-fail.png",
    "revision": "e90a8762267b4fb4e1632e1416739e90"
  }, {
    "url": "whoami/index.html",
    "revision": "7e5c4abd0b79f4e4d6df9921f76917ed"
  }, {
    "revision": "e94ad783960d58d4946dc7f8ab6bf09f",
    "url": "about"
  }, {
    "revision": "2e0f03a159216e9c0683ba98f79dae7d",
    "url": "blahg/bug-multiple-vite-storybooks"
  }, {
    "revision": "d1b61fc3b5057a82cdd54aeaa07e6b1d",
    "url": "blahg/chatgpt-who-me"
  }, {
    "revision": "d6874487090cfd1d42a00897cdd0e132",
    "url": "blahg"
  }, {
    "revision": "be3aefd38f811571cd80a1fdf4562af8",
    "url": "blahg/introducing-storydocker"
  }, {
    "revision": "7822fdad895ca006bc0040ecafef2027",
    "url": "blahg/multi-framework-composition-storybook-ghpages"
  }, {
    "revision": "f2d402932052a027b845db36f4d9d2c7",
    "url": "blahg/multi-framework-composition-storybook-local"
  }, {
    "revision": "dd00ed494e42d1f6fc68fb4ca7236024",
    "url": "blahg/profile-components--devto"
  }, {
    "revision": "996c217290145bc72b3a84cceff465c1",
    "url": "blahg/profile-components--dsd"
  }, {
    "revision": "a0e5f8415b826e76f388ab32c154b193",
    "url": "blahg/profile-components--github"
  }, {
    "revision": "8b0705bc4051145b007e1891fc8cf02b",
    "url": "blahg/profile-components"
  }, {
    "revision": "1dbf58bda708df6b73813fea652c3ad9",
    "url": "blahg/shared-storybook-tests"
  }, {
    "revision": "af8759af66ec6d5fc61b600dce4244f4",
    "url": "blahg/sharing-tests-between-components"
  }, {
    "revision": "ddf979eb6166d748c0998e8fbf21557a",
    "url": "blahg/sharing-tests-between-javascript-frameworks"
  }, {
    "revision": "9059eb409164692321e7994aff19d206",
    "url": "blahg/sharing-tests-between-vitest-and-storybook"
  }, {
    "revision": "b8d9bd8428e7307faf061887f16f3160",
    "url": "blahg/virtual-screen-reader-with-storybook"
  }, {
    "revision": "9981ddf927d8d28c301d2ff9ea789531",
    "url": "blahg/virtual-screen-reader-with-web-components"
  }, {
    "revision": "2e05ee0ca70d9902a9354d6f93e596ea",
    "url": "github"
  }, {
    "revision": "199d39edfecc9894fff7db6b050dab58",
    "url": "/"
  }, {
    "revision": "62d992f8440e1836988cc88d7455820d",
    "url": "resume"
  }, {
    "revision": "7e5c4abd0b79f4e4d6df9921f76917ed",
    "url": "whoami"
  }, {
    "url": "favicon.svg",
    "revision": "52d135c9ba1b12751f747cfab9352db5"
  }, {
    "url": "manifest.webmanifest",
    "revision": "5734fe28fcb9388cbc54128f529d85c1"
  }], {
    "directoryIndex": "index.html"
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));

}));
