(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = _interopRequireDefault(require("./components/slider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    //burgerMenu.init();
    (0, _slider["default"])();
  });
})(jQuery);

},{"./components/slider":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function initSwiper() {
  var progressCircle = document.querySelector('.autoplay-progress svg');
  var progressContent = document.querySelector('.autoplay-progress span');
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    speed: 4000,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false
    },
    on: {
      autoplayTimeLeft: function autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty('--progress', 1 - progress);
        progressContent.textContent = "".concat(Math.ceil(time / 1000), "s");
      }
    }
  });
}
var _default = initSwiper;
exports["default"] = _default;

},{}]},{},[1]);
