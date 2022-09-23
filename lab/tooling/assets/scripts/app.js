/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n// import { Tooltip } from './Tooltip.js';\n\nconsole.log('Project Item created!');\n\nclass ProjectItem {\n  // hasActiveTooltip = false;\n\n  constructor(id, updateProjectListsFunction, type) {\n    this.id = id;\n    this.hasActiveTooltip = false;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler() {\n    if (this.hasActiveTooltip) {\n      return;\n    }\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tooltip */ \"./src/App/Tooltip.js\")).then(module => {\n      const tooltip = new module.Tooltip(\n        () => {\n          this.hasActiveTooltip = false;\n        },\n        tooltipText,\n        this.id\n      );\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    });\n   \n  }\n\n  connectDrag() {\n    const item = document.getElementById(this.id);\n    item.addEventListener('dragstart', event => {\n      event.dataTransfer.setData('text/plain', this.id);\n      event.dataTransfer.effectAllowed = 'move';\n    });\n\n    item.addEventListener('dragend', event => {\n      console.log(event);\n    });\n  }\n\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn = projectItemElement.querySelector(\n      'button:first-of-type'\n    );\n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type) {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\n    switchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n    switchBtn.addEventListener(\n      'click',\n      this.updateProjectListsHandler.bind(null, this.id)\n    );\n  }\n\n  update(updateProjectListsFn, type) {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVyJztcbi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAuanMnO1xuXG5jb25zb2xlLmxvZygnUHJvamVjdCBJdGVtIGNyZWF0ZWQhJyk7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbSB7XG4gIC8vIGhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihpZCwgdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb24sIHR5cGUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb247XG4gICAgdGhpcy5jb25uZWN0TW9yZUluZm9CdXR0b24oKTtcbiAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XG4gICAgdGhpcy5jb25uZWN0RHJhZygpO1xuICB9XG5cbiAgc2hvd01vcmVJbmZvSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5oYXNBY3RpdmVUb29sdGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcbiAgICBpbXBvcnQoJy4vVG9vbHRpcCcpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgbW9kdWxlLlRvb2x0aXAoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcFRleHQsXG4gICAgICAgIHRoaXMuaWRcbiAgICAgICk7XG4gICAgICB0b29sdGlwLmF0dGFjaCgpO1xuICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gdHJ1ZTtcbiAgICB9KTtcbiAgIFxuICB9XG5cbiAgY29ubmVjdERyYWcoKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmlkKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdE1vcmVJbmZvQnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IG1vcmVJbmZvQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uOmZpcnN0LW9mLXR5cGUnXG4gICAgKTtcbiAgICBtb3JlSW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGxldCBzd2l0Y2hCdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpO1xuICAgIHN3aXRjaEJ0biA9IERPTUhlbHBlci5jbGVhckV2ZW50TGlzdGVuZXJzKHN3aXRjaEJ0bik7XG4gICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ2FjdGl2ZScgPyAnRmluaXNoJyA6ICdBY3RpdmF0ZSc7XG4gICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKHVwZGF0ZVByb2plY3RMaXN0c0ZuLCB0eXBlKSB7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n\n\n// const ProjectItem = 'abc';\n\n// console.log(DEFAULT_VALUE);\n\nclass ProjectList {\n  // projects = [];\n\n  constructor(type) {\n    this.type = type;\n    this.projects = [];\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(\n        new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\n      );\n    }\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n\n  connectDroppable() {\n    // console.log(globalThis);\n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener('dragenter', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragover', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave', event => {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop', event => {\n      const prjId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === prjId)) {\n        return;\n      }\n      document\n        .getElementById(prjId)\n        .querySelector('button:last-of-type')\n        .click();\n      list.parentElement.classList.remove('droppable');\n      // event.preventDefault(); // not required\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"moveElement\"](project.id, `#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RJdGVtIGFzIFByakl0ZW0gfSBmcm9tICcuL1Byb2plY3RJdGVtJztcbmltcG9ydCAqIGFzIERPTUggZnJvbSAnLi4vVXRpbGl0eS9ET01IZWxwZXInO1xuXG4vLyBjb25zdCBQcm9qZWN0SXRlbSA9ICdhYmMnO1xuXG4vLyBjb25zb2xlLmxvZyhERUZBVUxUX1ZBTFVFKTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgLy8gcHJvamVjdHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgY29uc3QgcHJqSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0eXBlfS1wcm9qZWN0cyBsaWApO1xuICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiBwcmpJdGVtcykge1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFxuICAgICAgICBuZXcgUHJqSXRlbShwcmpJdGVtLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XG4gICAgdGhpcy5jb25uZWN0RHJvcHBhYmxlKCk7XG4gIH1cblxuICBjb25uZWN0RHJvcHBhYmxlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJqSWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChwcmpJZClcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuICAgICAgICAuY2xpY2soKTtcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIG5vdCByZXF1aXJlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKHN3aXRjaEhhbmRsZXJGdW5jdGlvbikge1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXJGdW5jdGlvbjtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBET01ILm1vdmVFbGVtZW50KHByb2plY3QuaWQsIGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG4gICAgcHJvamVjdC51cGRhdGUodGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XG4gIH1cblxuICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIC8vIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAvLyB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\nconsole.log('DOM Helper executing!');\n\nclass DOMHelper {\n  static clearEventListeners(element) {\n    const clonedElement = element.cloneNode(true);\n\n    element.replaceWith(clonedElement);\n\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationSelector) {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n\n    destinationElement.append(element);\n    element.scrollIntoView({ behavior: 'smooth' });\n  }\n}\n\nfunction clearEventListeners(element) {\n  const clonedElement = element.cloneNode(true);\n\n  element.replaceWith(clonedElement);\n\n  return clonedElement;\n}\n\nfunction moveElement(elementId, newDestinationSelector) {\n  const element = document.getElementById(elementId);\n  const destinationElement = document.querySelector(newDestinationSelector);\n\n  destinationElement.append(element);\n  element.scrollIntoView({ behavior: 'smooth' });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRE9NIEhlbHBlciBleGVjdXRpbmchJyk7XG5cbmV4cG9ydCBjbGFzcyBET01IZWxwZXIge1xuICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcblxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XG5cbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcblxuICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgY29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuZXdEZXN0aW5hdGlvblNlbGVjdG9yKTtcblxuICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n\n\n// eslint-disable-next-line no-undef\nglobalThis.DEFAULT_VALUE = 'MAX';\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\n    const finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\n\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement('script');\n\n    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9BcHAvUHJvamVjdExpc3QnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmdsb2JhbFRoaXMuREVGQVVMVF9WQUxVRSA9ICdNQVgnO1xuXG5jbGFzcyBBcHAge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xuICAgIGNvbnN0IGZpbmlzaGVkUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KCdmaW5pc2hlZCcpO1xuXG4gICAgYWN0aXZlUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChmaW5pc2hlZFByb2plY3RzTGlzdClcbiAgICApO1xuICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxuICAgICk7XG5cbiAgICAvLyBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5hbHl0aWNzLCAzMDAwKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLWFuYWx5dGljcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcbiAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIGFuYWx5dGljc1NjcmlwdC5zcmMgPSAnYXNzZXRzL3NjcmlwdHMvVXRpbGl0eS9BbmFseXRpY3MuanMnO1xuICAgIGFuYWx5dGljc1NjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoYW5hbHl0aWNzU2NyaXB0KTtcbiAgfVxufVxuXG5BcHAuaW5pdCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });