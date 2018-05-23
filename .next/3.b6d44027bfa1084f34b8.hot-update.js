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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/index.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










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

var currentDate = new Date();

var SpecialDay = function SpecialDay(_ref) {
	var date = _ref.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
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
						lineNumber: 45
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
				lineNumber: 68
			}
		},
		specialDates.map(function (specialDate, key) {
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
							lineNumber: 72
						}
					},
					specialDate.name
				);
			}
		})
	);
};

function onRender(_ref3, cell) {
	var dayNumber = _ref3.dayNumber,
	    date = _ref3.date;

	var content = dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 97
			}
		},
		"dev"
	) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 99
			}
		},
		dayNumber,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
				fileName: _jsxFileName,
				lineNumber: 101
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
			currentDate = date;
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
				lineNumber: 137
			}
		},
		dayNumber,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
				fileName: _jsxFileName,
				lineNumber: 139
			}
		})
	));
	return content;
};

var Application = function (_Component) {
	_inherits(Application, _Component);

	function Application() {
		var _ref5;

		var _temp, _this, _ret;

		_classCallCheck(this, Application);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = Application.__proto__ || Object.getPrototypeOf(Application)).call.apply(_ref5, [this].concat(args))), _this), _this.state = { date: currentDate }, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Application, [{
		key: "render",
		value: function render() {
			var date = this.state.date;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 150
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 151
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Calendar__["a" /* default */], {
					date: "2018-05-21",
					onRender: onRender,
					selected: Selected,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 152
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplaySpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 157
					}
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Application;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Application;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(specialDates, "specialDates", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(currentDate, "currentDate", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(SpecialDay, "SpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(DisplaySpecialDay, "DisplaySpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(onRender, "onRender", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(Selected, "Selected", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(Application, "Application", "/Users/elena/Projects/playground/pages/calendar/index.js");
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
//# sourceMappingURL=3.b6d44027bfa1084f34b8.hot-update.js.map