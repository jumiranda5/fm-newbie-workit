/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/logo-dark.svg
const logo_dark_namespaceObject = __webpack_require__.p + "images/logo-dark-ad6b9d98f0dac266885d.svg";
;// CONCATENATED MODULE: ./src/assets/images/logo-light.svg
const logo_light_namespaceObject = __webpack_require__.p + "images/logo-light-97dd94888735b443cf81.svg";
;// CONCATENATED MODULE: ./src/assets/images/image-hero.webp
const image_hero_namespaceObject = __webpack_require__.p + "images/image-hero-5ad64bb93292070c139a.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-founder.webp
const image_founder_namespaceObject = __webpack_require__.p + "images/image-founder-a2baca7184fca993ea34.webp";
;// CONCATENATED MODULE: ./src/assets/images/bg-pattern-1.svg
const bg_pattern_1_namespaceObject = __webpack_require__.p + "images/bg-pattern-1-bfa7d51bac5e5ebf6188.svg";
;// CONCATENATED MODULE: ./src/assets/images/bg-pattern-2.svg
const bg_pattern_2_namespaceObject = __webpack_require__.p + "images/bg-pattern-2-4c1e835bb8483df3ccf9.svg";
;// CONCATENATED MODULE: ./src/assets/images/bg-pattern-3.svg
const bg_pattern_3_namespaceObject = __webpack_require__.p + "images/bg-pattern-3-60897e39e078db73af9e.svg";
;// CONCATENATED MODULE: ./src/scripts/images.js
'use-strict';








document.getElementById('header-logo').src = logo_light_namespaceObject;
document.getElementById('footer-logo').src = logo_dark_namespaceObject;
document.getElementById('hero-img').src = image_hero_namespaceObject;
document.getElementById('founder-img').src = image_founder_namespaceObject;
document.getElementById('pattern-1').src = bg_pattern_1_namespaceObject;
document.getElementById('pattern-2').src = bg_pattern_2_namespaceObject;
document.getElementById('pattern-3').src = bg_pattern_3_namespaceObject;
;// CONCATENATED MODULE: ./src/main.js
'use-strict';



/******/ })()
;
//# sourceMappingURL=index.bundle-81ac459f140a54dc0be7.js.map