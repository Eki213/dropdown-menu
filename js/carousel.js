(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Components"] = factory();
	else
		root["Components"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carousel)
/* harmony export */ });
function Carousel(carousel) {
  const slider = carousel.querySelector(".slider");
  const navBar = carousel.querySelector(".navigation-bar");
  const isSlideshow = carousel.dataset.slides === "true";
  const NUM_SLIDES = slider.childElementCount;

  const getSlideNumber = () =>
    Number(getComputedStyle(slider).getPropertyValue("--slide-num"));

  function showSlide(slideNum) {
    slider.style.setProperty("--slide-num", slideNum);
  }

  function showNext() {
    const slideNum = getSlideNumber();
    handleSelection((slideNum % NUM_SLIDES) + 1);
  }

  function showPrevious() {
    let slideNum = getSlideNumber();
    if (slideNum === 1) slideNum += NUM_SLIDES;
    handleSelection(slideNum - 1);
  }

  function updateActiveIndicator(pos) {
    if (!navBar) return;
    const activeIndicator = navBar.querySelector(".indicator.active");
    if (activeIndicator) activeIndicator.classList.remove("active");
    const indicator = navBar.querySelector(`.indicator[data-pos="${pos}"]`);
    indicator.classList.add("active");
  }

  function handleSelection(pos) {
    updateActiveIndicator(pos);
    showSlide(pos);
  }

  function initNavBar() {
    for (let i = 1; i <= NUM_SLIDES; i++) {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.dataset.pos = i;
      indicator.addEventListener("click", () => handleSelection(i));
      navBar.appendChild(indicator);
    }
    updateActiveIndicator(1);
  }

  function restartSlideshow() {
    if (!isSlideshow) return;
    clearInterval(nextInterval);
    nextInterval = setInterval(showNext, 5000);
  }

  function carouselHandler(carouselEl) {
    if (!carouselEl.closest(".controls")) return;

    if (isSlideshow) restartSlideshow();
    if (carouselEl.classList.contains("prev-button")) showPrevious();
    if (carouselEl.classList.contains("next-button")) showNext();
  }

  let nextInterval;
  if (isSlideshow) nextInterval = setInterval(showNext, 5000);
  if (navBar) initNavBar();
  carousel.addEventListener("click", (e) => carouselHandler(e.target));
}

document
  .querySelectorAll(".carousel")
  .forEach((carousel) => Carousel(carousel));

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=carousel.js.map