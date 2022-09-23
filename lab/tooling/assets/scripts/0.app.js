(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: doSomething, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doSomething\", function() { return doSomething; });\nfunction doSomething() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      // this.element.parentElement.removeChild(this.element);\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? 'afterbegin' : 'beforeend',\n      this.element\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50LmpzP2VmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRvU29tZXRoaW5nKCkge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdEVsZW1lbnRJZCwgaW5zZXJ0QmVmb3JlID0gZmFsc2UpIHtcbiAgICBpZiAoaG9zdEVsZW1lbnRJZCkge1xuICAgICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhvc3RFbGVtZW50SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmU7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgLy8gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICB0aGlzLmluc2VydEJlZm9yZSA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLFxuICAgICAgdGhpcy5lbGVtZW50XG4gICAgKTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/Component.js\n");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nconsole.log('Tooltip running');\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement('div');\n    tooltipElement.className = 'card';\n    const tooltipTemplate = document.getElementById('tooltip');\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector('p').textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    tooltipElement.style.position = 'absolute';\n    tooltipElement.style.left = x + 'px'; // 500px\n    tooltipElement.style.top = y + 'px';\n\n    tooltipElement.addEventListener('click', this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Rvb2x0aXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Rvb2x0aXAuanM/ZDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ21wLCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5jb25zb2xlLmxvZygnVG9vbHRpcCBydW5uaW5nJyk7XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ21wIHtcbiAgY29uc3RydWN0b3IoY2xvc2VOb3RpZmllckZ1bmN0aW9uLCB0ZXh0LCBob3N0RWxlbWVudElkKSB7XG4gICAgc3VwZXIoaG9zdEVsZW1lbnRJZCk7XG4gICAgdGhpcy5jbG9zZU5vdGlmaWVyID0gY2xvc2VOb3RpZmllckZ1bmN0aW9uO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5jbG9zZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgdGhpcy5jbG9zZU5vdGlmaWVyKCk7XG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHRvb2x0aXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIGNvbnN0IHRvb2x0aXBUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwJyk7XG4gICAgY29uc3QgdG9vbHRpcEJvZHkgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvb2x0aXBUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICB0b29sdGlwQm9keS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSB0aGlzLnRleHQ7XG4gICAgdG9vbHRpcEVsZW1lbnQuYXBwZW5kKHRvb2x0aXBCb2R5KTtcblxuICAgIGNvbnN0IGhvc3RFbFBvc0xlZnQgPSB0aGlzLmhvc3RFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgY29uc3QgaG9zdEVsUG9zVG9wID0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRUb3A7XG4gICAgY29uc3QgaG9zdEVsSGVpZ2h0ID0gdGhpcy5ob3N0RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudFNjcm9sbGluZyA9IHRoaXMuaG9zdEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICBjb25zdCB4ID0gaG9zdEVsUG9zTGVmdCArIDIwO1xuICAgIGNvbnN0IHkgPSBob3N0RWxQb3NUb3AgKyBob3N0RWxIZWlnaHQgLSBwYXJlbnRFbGVtZW50U2Nyb2xsaW5nIC0gMTA7XG5cbiAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnOyAvLyA1MDBweFxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgdG9vbHRpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlVG9vbHRpcCk7XG4gICAgdGhpcy5lbGVtZW50ID0gdG9vbHRpcEVsZW1lbnQ7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/Tooltip.js\n");

/***/ })

}]);