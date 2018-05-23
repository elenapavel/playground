webpackHotUpdate(3,{

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./pages/calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__ = __webpack_require__("./node_modules/date-fns/is_weekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Head__ = __webpack_require__("./pages/calendar/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Calendar__ = __webpack_require__("./pages/calendar/Calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__("./pages/calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/index.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();










var specialDates = [{
	type: "holiday",
	date: "2018-05-21",
	name: "elena"
}, {
	type: "holiday",
	date: "2018-06-21",
	name: "test"
}, {
	type: "event",
	date: "2018-05-29",
	name: "event"
}, {
	type: "event",
	date: "2018-05-21",
	name: "event"
}];

function onRender(_ref, cell) {
	var dayNumber = _ref.dayNumber,
	    date = _ref.date;

	var content = __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(2018, 4, 21)) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 35
			}
		},
		"eu :D"
	) : dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 37
			}
		},
		"dev"
	) : dayNumber;

	var specialDay = specialDates.map(function (specialDate, key) {
		__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date)) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
			style: {
				width: "100%",
				border: "2px solid " + (specialDate.type == "holiday" ? "red" : "green")
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 44
			}
		}) : null;
	});

	var isWeekendDay = __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default()(date);

	var styles = {
		backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : ""
		// color: "green",
	};

	if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
		style: styles
	}, content);
	return content;
}

var Selected = function Selected(_ref2, cell) {
	var date = _ref2.date,
	    dayNumber = _ref2.dayNumber;

	var styles = {
		borderColor: "yellow"
	};
	if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
		style: styles
	}, dayNumber);
	return content;
};

var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 90
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 91
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Calendar__["a" /* default */], {
			date: "2018-05-21",
			onRender: onRender,
			selected: Selected,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 92
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(specialDates, "specialDates", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(onRender, "onRender", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(Selected, "Selected", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.df600289acdb27f3b0d8.hot-update.js.map