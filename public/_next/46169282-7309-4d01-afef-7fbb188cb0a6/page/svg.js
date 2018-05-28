module.exports =

        __NEXT_REGISTER_PAGE('/svg', function() {
          var comp = 
      webpackJsonp([5],{

/***/ "./node_modules/next/config.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/runtime-config.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/svg/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playground__ = __webpack_require__("./playground.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./pages/svg/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
var _jsxFileName = "/Users/elena/Projects/projects/pages/svg/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.application,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.grid,
    style: {
      background: "url(".concat(__WEBPACK_IMPORTED_MODULE_1__playground__["a" /* STATIC */], "/grid.png)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    width: "750",
    height: "500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "48",
    y2: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "3",
    y1: "19",
    x2: "65",
    y2: "19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "3",
    y1: "35",
    x2: "48",
    y2: "35",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "3",
    y1: "51",
    x2: "65",
    y2: "51",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polyline", {
    points: "3 3, 30 28, 3 53",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
    x: "3",
    y: "3",
    width: "80",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "3",
    y1: "19",
    x2: "83",
    y2: "19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    x1: "20",
    y1: "3",
    x2: "20",
    y2: "17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ellipse", {
    cx: "43",
    cy: "43",
    rx: "40",
    ry: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ellipse", {
    style: {
      fill: "black"
    },
    cx: "43",
    cy: "65",
    rx: "5",
    ry: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", {
    style: {
      strokeWidth: 8
    },
    x1: "43",
    y1: "19",
    x2: "43",
    y2: "48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ellipse", {
    cx: "43",
    cy: "43",
    rx: "40",
    ry: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    points: "35 23, 60 43, 35 63",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M 18 3, L 46 3, L 46 40, L 61 40, L 32 68, L 3 40, L 18 40, Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/elena/Projects/projects/pages/svg/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/svg")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./playground.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATIC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var URL = publicRuntimeConfig.publicURL;
var STATIC = publicRuntimeConfig.staticURL;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/Users/elena/Projects/projects/playground.js");
  reactHotLoader.register(URL, "URL", "/Users/elena/Projects/projects/playground.js");
  reactHotLoader.register(STATIC, "STATIC", "/Users/elena/Projects/projects/playground.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/svg/index.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=svg.js.map