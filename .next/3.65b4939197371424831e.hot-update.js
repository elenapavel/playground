webpackHotUpdate(3,{

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
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/index.js",
    _this2 = this;



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
}, {
	type: "reminder",
	date: "2018-05-21",
	name: "next"
}];

state = {
	date: new Date()
};

var SpecialDay = function SpecialDay(_ref) {
	var date = _ref.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 43
			}
		},
		specialDates.map(function (specialDate, key) {
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
					key: key,
					style: {
						width: "100%",
						marginTop: "0.25rem",
						border: "2px solid " + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 47
					}
				});
			}
		})
	);
};

var DisplaySpecialDay = function DisplaySpecialDay(_ref2) {
	var date = _ref2.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 70
			}
		},
		specialDates.map(function (specialDate, key) {
			console.log(date);
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{
						key: key,
						style: {
							color: "" + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 75
						}
					},
					specialDate.name
				);
			}
		})
	);
};

function onRender(_ref3, cell) {
	var _this = this;

	var dayNumber = _ref3.dayNumber,
	    date = _ref3.date;

	var content = dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 100
			}
		},
		"dev"
	) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 102
			}
		},
		dayNumber,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
				fileName: _jsxFileName,
				lineNumber: 104
			}
		})
	);

	var isWeekendDay = __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default()(date);

	var styles = {
		backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : "",
		padding: "0.75rem 0"
	};

	if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
		style: styles,
		onClick: function onClick() {
			_this.setState({ date: date });
		}
	}, content);
	return content;
}

var Selected = function Selected(_ref4, cell) {
	var date = _ref4.date,
	    dayNumber = _ref4.dayNumber;

	var styles = {
		borderColor: "yellow",
		padding: "0.75rem 0"
	};
	if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
		style: styles
	}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 140
			}
		},
		dayNumber,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
				fileName: _jsxFileName,
				lineNumber: 142
			}
		})
	));
	return content;
};

var _default = function _default() {
	var date = _this2.state.date;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 151
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 152
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Calendar__["a" /* default */], {
			date: "2018-05-21",
			onRender: onRender,
			selected: Selected,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 153
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplaySpecialDay, { date: date, __source: {
				fileName: _jsxFileName,
				lineNumber: 158
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
	reactHotLoader.register(SpecialDay, "SpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(DisplaySpecialDay, "DisplaySpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
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
//# sourceMappingURL=3.65b4939197371424831e.hot-update.js.map