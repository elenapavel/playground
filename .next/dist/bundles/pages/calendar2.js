module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/calendar2/Calendar/Actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar2/Calendar/Actions/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/Actions/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Actions = function (_Component) {
	_inherits(Actions, _Component);

	function Actions() {
		_classCallCheck(this, Actions);

		return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
	}

	_createClass(Actions, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    nextMonth = _props.nextMonth,
			    prevMonth = _props.prevMonth;


			var prevArrowClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.arrow + " ion-chevron-left";
			var nextArrowClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.arrow + " ion-chevron-right";
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: prevArrowClasses, onClick: function onClick() {
						return prevMonth();
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: nextArrowClasses, onClick: function onClick() {
						return nextMonth();
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 13
					}
				})
			);
		}
	}]);

	return Actions;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "./pages/calendar2/Calendar/Actions/style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___1eSy8",
	"arrow": "arrow___3O0v7"
};

/***/ }),

/***/ "./pages/calendar2/Calendar/Grid/Day.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar2/Calendar/Grid/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/Grid/Day.js";





var Day = function Day(props) {
	var isSameMonth = props.isSameMonth,
	    isCurrent = props.isCurrent,
	    isSelected = props.isSelected,
	    dayNumber = props.dayNumber,
	    date = props.date,
	    setDay = props.setDay,
	    onRender = props.onRender,
	    selected = props.selected;


	var dayClasses = __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day + " " + (isSameMonth ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_disabled : "") + " " + (isCurrent ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_current : "") + " " + (isSelected ? __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_selected : "");

	var content = null;

	if (typeof onRender === "function") {
		content = onRender(props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			},
			dayNumber
		));
	}

	if (selected != null && isSelected) {
		content = selected(props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			},
			dayNumber
		));
	}
	if (content == null) {
		content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: dayClasses, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			},
			dayNumber
		);
	}

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.day_container,
			onClick: function onClick() {
				setDay(date);
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		},
		content
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Day);

/***/ }),

/***/ "./pages/calendar2/Calendar/Grid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__ = __webpack_require__("date-fns/set_date");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__ = __webpack_require__("date-fns/is_same_day");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("date-fns/add_months");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__ = __webpack_require__("date-fns/sub_months");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Day__ = __webpack_require__("./pages/calendar2/Calendar/Grid/Day.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar2/Calendar/Grid/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/Grid/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Grid = function (_Component) {
	_inherits(Grid, _Component);

	function Grid() {
		_classCallCheck(this, Grid);

		return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
	}

	_createClass(Grid, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    daysInMonth = _props.daysInMonth,
			    setDay = _props.setDay,
			    onRender = _props.onRender,
			    date = _props.date,
			    selected = _props.selected,
			    view = _props.view;

			if (view == "month") return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_6__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				},
				daysInMonth.map(function (day, key) {
					var currentDate;
					currentDate = day.lastMonth ? __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default()(date, 1), day.day) : day.nextMonth ? __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default()(date, 1), day.day) : __WEBPACK_IMPORTED_MODULE_1_date_fns_set_date___default()(date, day.day);

					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Day__["a" /* default */], {
						key: key,
						isSameMonth: day.lastMonth || day.nextMonth,
						isCurrent: day.current,
						isSelected: day.selected,
						dayNumber: day.day,
						date: currentDate,
						setDay: setDay,
						selected: selected,
						onRender: onRender,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 34
						}
					});
				})
			);
			return null;
		}
	}]);

	return Grid;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "./pages/calendar2/Calendar/Grid/style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___2Vk74",
	"day_container": "day_container___btlTo",
	"day": "day___2yZyC",
	"day_disabled": "day_disabled___2tRgb",
	"day_selected": "day_selected___2strC",
	"day_current": "day_current___y8Ql1"
};

/***/ }),

/***/ "./pages/calendar2/Calendar/Label/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar2/Calendar/Label/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/Label/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Label = function (_Component) {
	_inherits(Label, _Component);

	function Label() {
		_classCallCheck(this, Label);

		return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
	}

	_createClass(Label, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    month = _props.month,
			    year = _props.year;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 8
					}
				},
				month,
				" ",
				year
			);
		}
	}]);

	return Label;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),

/***/ "./pages/calendar2/Calendar/Label/style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___Cegap"
};

/***/ }),

/***/ "./pages/calendar2/Calendar/WeekDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./pages/calendar2/Calendar/WeekDays/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/WeekDays/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDaysNamesSmall = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekDaysNamesXSmall = ["S", "M", "T", "W", "T", "F", "S"];

var WeekDays = function (_Component) {
	_inherits(WeekDays, _Component);

	function WeekDays() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, WeekDays);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeekDays.__proto__ || Object.getPrototypeOf(WeekDays)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			weekDays: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(WeekDays, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.setState({
				weekDays: window.innerWidth > 640 ? weekDaysNames : window.innerWidth > 480 ? weekDaysNamesSmall : weekDaysNamesXSmall
			});
			document.defaultView.addEventListener("resize", function () {
				return _this2.setWeekDaysName();
			});
		}
	}, {
		key: "setWeekDaysName",
		value: function setWeekDaysName() {
			this.setState({
				weekDays: window.innerWidth > 640 ? weekDaysNames : window.innerWidth > 480 ? weekDaysNamesSmall : weekDaysNamesXSmall
			});
		}
	}, {
		key: "render",
		value: function render() {
			var weekDays = this.state.weekDays;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 47
					}
				},
				weekDays == null ? null : weekDays.map(function (weekDay, key) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ key: key, className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.week_day, __source: {
								fileName: _jsxFileName,
								lineNumber: 52
							}
						},
						weekDay
					);
				})
			);
		}
	}]);

	return WeekDays;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (WeekDays);

/***/ }),

/***/ "./pages/calendar2/Calendar/WeekDays/style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___3665F",
	"week_day": "week_day___1S2da"
};

/***/ }),

/***/ "./pages/calendar2/Calendar/design_tokens.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/calendar2/Calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format__ = __webpack_require__("date-fns/format");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__ = __webpack_require__("date-fns/start_of_month");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__ = __webpack_require__("date-fns/sub_days");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__ = __webpack_require__("date-fns/get_month");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__ = __webpack_require__("date-fns/get_year");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__ = __webpack_require__("date-fns/get_days_in_month");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Actions__ = __webpack_require__("./pages/calendar2/Calendar/Actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Label__ = __webpack_require__("./pages/calendar2/Calendar/Label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WeekDays__ = __webpack_require__("./pages/calendar2/Calendar/WeekDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Grid__ = __webpack_require__("./pages/calendar2/Calendar/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css__ = __webpack_require__("./pages/calendar2/Calendar/design_tokens.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__design_tokens_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css__ = __webpack_require__("./pages/calendar2/Calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Calendar/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var Calendar = function (_Component) {
	_inherits(Calendar, _Component);

	function Calendar(props) {
		_classCallCheck(this, Calendar);

		var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

		var date = new Date(props.date);
		var currentDate = new Date();
		var selectedDate = props.date != null ? date : currentDate;

		var month = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "M")) - 1;
		var monthName = __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "MMM");
		var year = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "YYYY"));

		_this.state = {
			currentDate: currentDate,
			selectedDate: selectedDate,
			inViewMonth: month,
			inViewMonthName: monthName,
			inViewYear: year
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: "setDay",
		value: function setDay(date) {
			this.setState({ selectedDate: date });
			this.setMonth(__WEBPACK_IMPORTED_MODULE_4_date_fns_get_month___default()(date));
			this.setYear(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_year___default()(date));
			this.props.onChangeDate(date);
		}
	}, {
		key: "setMonth",
		value: function setMonth(month) {
			if (month < 0) {
				this.setState({ inViewMonth: 11 });
				this.setYear(this.state.inViewYear - 1);
			} else if (month > 11) {
				this.setState({ inViewMonth: 0 });
				this.setYear(this.state.inViewYear + 1);
			} else this.setState({ inViewMonth: month });

			var selectedDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "D"));

			var inViewDate = new Date(this.state.inViewYear, month, selectedDay);
			this.setState({
				inViewMonthName: __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(inViewDate, "MMM")
			});
		}
	}, {
		key: "setYear",
		value: function setYear(year) {
			this.setState({
				inViewYear: year
			});
		}
	}, {
		key: "setDaysInMonth",
		value: function setDaysInMonth() {
			var _state = this.state,
			    currentDate = _state.currentDate,
			    selectedDate = _state.selectedDate,
			    inViewMonth = _state.inViewMonth,
			    inViewYear = _state.inViewYear;


			var inViewDate = new Date(inViewYear, inViewMonth);

			var currentDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "D"));
			var currentMonth = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "M")) - 1;
			var currentMonthName = __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "MMM");
			var currentYear = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "YYYY"));

			var day = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "D"));
			var month = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "M")) - 1;
			var monthName = __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "MMM");
			var year = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "YYYY"));

			var daysUntilSunday = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default()(inViewDate), "d"));
			var monthLength = __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default()(inViewDate);
			var firstDayOfWeek = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days___default()(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default()(inViewDate), daysUntilSunday), "D"));

			var completeDaysInMonth = [];
			var daysInMonth = [];

			for (var i = 0; i < daysUntilSunday; i++) {
				completeDaysInMonth.push({
					lastMonth: true,
					day: firstDayOfWeek + i
				});
			}
			for (var i = 0; i < monthLength; i++) {
				completeDaysInMonth.push({
					day: i + 1,
					current: currentDay == i + 1 && currentMonth == inViewMonth && currentYear == inViewYear,
					selected: day == i + 1 && inViewMonth == month && inViewYear == year
				});
			}
			daysInMonth = completeDaysInMonth.concat(daysInMonth);

			completeDaysInMonth = [];

			for (var i = 0; i < 42 - daysInMonth.length; i++) {
				completeDaysInMonth.push({
					nextMonth: true,
					day: i + 1
				});
			}

			daysInMonth = daysInMonth.concat(completeDaysInMonth);

			return daysInMonth;
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state2 = this.state,
			    inViewMonth = _state2.inViewMonth,
			    inViewMonthName = _state2.inViewMonthName,
			    inViewYear = _state2.inViewYear;
			var _props = this.props,
			    onRender = _props.onRender,
			    selected = _props.selected,
			    view = _props.view;

			// const isCurrentDate = isSameDay(date, currentDate);
			// const isCurrentMonth = isSameMonth(date, currentDate);
			// const isCurrentYear = isSameYear(date, currentDate);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 136
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.header, __source: {
							fileName: _jsxFileName,
							lineNumber: 137
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.actions, __source: {
								fileName: _jsxFileName,
								lineNumber: 138
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], {
							nextMonth: function nextMonth() {
								return _this2.setMonth(inViewMonth + 1);
							},
							prevMonth: function prevMonth() {
								return _this2.setMonth(inViewMonth - 1);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 139
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.label, __source: {
								fileName: _jsxFileName,
								lineNumber: 144
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { month: inViewMonthName, year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 145
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.body, __source: {
							fileName: _jsxFileName,
							lineNumber: 148
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.week_days, __source: {
								fileName: _jsxFileName,
								lineNumber: 149
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WeekDays__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 150
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.grid, __source: {
								fileName: _jsxFileName,
								lineNumber: 152
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], {
							view: view,
							daysInMonth: this.setDaysInMonth(),
							date: new Date(inViewYear, inViewMonth),
							setDay: function setDay(day) {
								return _this2.setDay(day);
							},
							onRender: onRender,
							selected: selected,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 153
							}
						})
					)
				)
			);
		}
	}]);

	return Calendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),

/***/ "./pages/calendar2/Calendar/style.css":
/***/ (function(module, exports) {

module.exports = {
	"container": "container___3zfQR",
	"header": "header___285Rq",
	"actions": "actions___j98yV",
	"label": "label___1ON87",
	"body": "body___2W7PY",
	"week_days": "week_days___1SVvw",
	"grid": "grid___2bviL"
};

/***/ }),

/***/ "./pages/calendar2/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Head.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			rel: "stylesheet",
			href: "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
			href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
			rel: "stylesheet",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "/_next/static/style.css", __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		})
	);
});

/***/ }),

/***/ "./pages/calendar2/Switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/Switch.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Switch = function (_Component) {
	_inherits(Switch, _Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

		_this.state = {
			isActive: props.isActive || false
		};
		return _this;
	}

	_createClass(Switch, [{
		key: "toggleSwitch",
		value: function toggleSwitch() {
			this.setState({ isActive: !this.state.isActive });
			this.props.onChangeView(this.state.isActive ? "month" : "year");
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    disabled = _props.disabled,
			    activeLabel = _props.activeLabel,
			    inactiveLabel = _props.inactiveLabel,
			    activeBackgroundColor = _props.activeBackgroundColor,
			    inactiveBackgroundColor = _props.inactiveBackgroundColor,
			    activeLabelColor = _props.activeLabelColor,
			    inactiveLabelColor = _props.inactiveLabelColor;


			console.log(this.props);

			var isActive = this.state.isActive;


			var switchClass = "switch_container " + (isActive ? "switch_active " : "switch_inactive ") + (disabled ? "switch_disabled" : "");

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"div",
				{
					onClick: function onClick() {
						return !disabled ? _this2.toggleSwitch() : null;
					},
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2708874862", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + (switchClass || ""),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 37
					}
				},
				!inactiveLabel ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{
						onClick: function onClick() {
							return !disabled ? _this2.toggleSwitch() : null;
						},
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2708874862", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "inactive_label",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 42
						}
					},
					inactiveLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
					onClick: function onClick() {
						return !disabled ? _this2.toggleSwitch() : null;
					},
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2708874862", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "switch",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 49
					}
				}),
				!activeLabel ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{
						onClick: function onClick() {
							return !disabled ? _this2.toggleSwitch() : null;
						},
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2708874862", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "active_label",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 54
						}
					},
					activeLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: "2708874862",
					css: ".switch_container.__jsx-style-dynamic-selector{position:relative;display:block;}.inactive_label.__jsx-style-dynamic-selector{padding-right:0.5rem;font-size:1rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_inactive.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector{color:" + (inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black") + ";}.active_label.__jsx-style-dynamic-selector{font-size:1rem;padding-left:0.5rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_active.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{color:" + (activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black") + ";}.switch.__jsx-style-dynamic-selector{vertical-align:middle;display:inline-block;width:50px;height:20px;border-radius:12px;position:relative;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;cursor:pointer;background:" + (inactiveBackgroundColor || "lightgrey") + ";border:2px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector{background:" + (activeBackgroundColor || "red") + ";border-color:" + (activeBackgroundColor || "red") + ";}.switch.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;background:#fff;top:0;bottom:0;margin:1px;width:12px;height:12px;border-radius:50%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;left:0;right:calc(100% - 16px);border:1px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:after{right:0;left:calc(100% - 16px);border-color:" + (activeBackgroundColor || "red") + ";}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{cursor:not-allowed;}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;border-radius:12px;top:-2px;bottom:-2px;left:-2px;right:-2px;width:calc(100% + 4px);height:calc(100% + 4px);background-color:rgba(255,255,255,0.3);z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyMi9Td2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERnQixBQUd5QixBQUlHLEFBVWMsQUFHcEIsQUFVb0IsQUFHYixBQWFrQixBQUk3QixBQWdCSCxBQU9XLEFBS1IsUUFYWSxHQWhCTCxBQTRCQSxJQTFERSxHQWpCTixDQXNFZixFQWxFZ0IsQ0EwQk0sT0FrQkwsQUE0QkcsRUFadUIsQ0EvRDNDLEdBYUEsQUFJa0IsQUFTbEIsQ0F0QmtCLElBc0N5QixHQVovQixFQWtCTCxHQTRCRyxHQTNCQSxDQS9CTSxDQWJBLENBMEJILEdBOENBLEdBM0JELE1BbEJRLENBYkQsQ0FiQSxDQXdFUixFQTNCQyxFQWFaLE1BZVksR0FwQ1osQUFTYSxHQWhDUyxBQWFILENBMUJHLElBeUVFLElBM0JMLFNBbkJjLEdBYnJCLENBYkEsS0E4Q3FCLENBMkJSLElBM0RRLENBYkEsbUJBeUVVLHNDQS9DM0IsQ0FnREwsUUE1QkgsRUE2QlIsR0E3REEsQ0FiQSxBQTBCeUMsQ0FvQmhCLHdCQUVLLGVBcEJBLCtCQXFCOUIsZUFwQkEiLCJmaWxlIjoicGFnZXMvY2FsZW5kYXIyL1N3aXRjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWxlbmEvUHJvamVjdHMvcGxheWdyb3VuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZSB8fCBmYWxzZSxcblx0XHR9O1xuXHR9XG5cblx0dG9nZ2xlU3dpdGNoKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmUgfSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZVZpZXcodGhpcy5zdGF0ZS5pc0FjdGl2ZSA/IFwibW9udGhcIiA6IFwieWVhclwiKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkaXNhYmxlZCxcblx0XHRcdGFjdGl2ZUxhYmVsLFxuXHRcdFx0aW5hY3RpdmVMYWJlbCxcblx0XHRcdGFjdGl2ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGluYWN0aXZlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0YWN0aXZlTGFiZWxDb2xvcixcblx0XHRcdGluYWN0aXZlTGFiZWxDb2xvcixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXG5cdFx0Y29uc3QgeyBpc0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IHN3aXRjaENsYXNzID1cblx0XHRcdFwic3dpdGNoX2NvbnRhaW5lciBcIiArXG5cdFx0XHQoaXNBY3RpdmUgPyBcInN3aXRjaF9hY3RpdmUgXCIgOiBcInN3aXRjaF9pbmFjdGl2ZSBcIikgK1xuXHRcdFx0KGRpc2FibGVkID8gXCJzd2l0Y2hfZGlzYWJsZWRcIiA6IFwiXCIpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtzd2l0Y2hDbGFzc31cblx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdD5cblx0XHRcdFx0eyFpbmFjdGl2ZUxhYmVsID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbmFjdGl2ZV9sYWJlbFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtpbmFjdGl2ZUxhYmVsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3dpdGNoXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IWFjdGl2ZUxhYmVsID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhY3RpdmVfbGFiZWxcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7YWN0aXZlTGFiZWx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuc3dpdGNoX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmluYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9pbmFjdGl2ZSAuaW5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7aW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdD8gaW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdDogaW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ/IGluYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0OiBcImJsYWNrXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMC41cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JleTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2FjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdFx0PyBhY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdDogYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0PyBhY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ6IFwiYmxhY2tcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2gge1xuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHtpbmFjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcImxpZ2h0Z3JleVwifTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkXG5cdFx0XHRcdFx0XHRcdCR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfYWN0aXZlIC5zd2l0Y2gge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJyZWRcIn07XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoOmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTJweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTJweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHJpZ2h0OiBjYWxjKDEwMCUgLSAxNnB4KTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkXG5cdFx0XHRcdFx0XHRcdCR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfYWN0aXZlIC5zd2l0Y2g6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiBjYWxjKDEwMCUgLSAxNnB4KTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogJHthY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJyZWRcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLnN3aXRjaCxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5pbmFjdGl2ZV9sYWJlbCxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuc3dpdGNoOmJlZm9yZSxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5hY3RpdmVfbGFiZWw6YmVmb3JlLFxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLmluYWN0aXZlX2xhYmVsOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRcdHRvcDogLTJweDtcblx0XHRcdFx0XHRcdGJvdHRvbTogLTJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IC0ycHg7XG5cdFx0XHRcdFx0XHRyaWdodDogLTJweDtcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xuIl19 */\n/*@ sourceURL=pages/calendar2/Switch.js */",
					dynamic: [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]
				})
			);
		}
	}]);

	return Switch;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ "./pages/calendar2/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("date-fns/is_same_day");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__ = __webpack_require__("date-fns/is_weekend");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Head__ = __webpack_require__("./pages/calendar2/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Switch__ = __webpack_require__("./pages/calendar2/Switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Calendar__ = __webpack_require__("./pages/calendar2/Calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar2/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar2/index.js";


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

var SpecialDay = function SpecialDay(_ref) {
	var date = _ref.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 40
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
						lineNumber: 44
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
				lineNumber: 67
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
							lineNumber: 71
						}
					},
					specialDate.name
				);
			}
		})
	);
};

var Application = function (_Component) {
	_inherits(Application, _Component);

	function Application(props) {
		_classCallCheck(this, Application);

		var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));

		_this.state = {
			date: "2018-05-21",
			view: "month"
		};
		return _this;
	}

	_createClass(Application, [{
		key: "onRender",
		value: function onRender(_ref3, cell) {
			var dayNumber = _ref3.dayNumber,
			    date = _ref3.date;

			var content = dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 105
					}
				},
				"dev"
			) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 107
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 109
					}
				})
			);

			var isWeekendDay = __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default()(date);

			var styles = {
				backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : "",
				padding: "0.75rem 0"
			};

			if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
				style: styles
			}, content);
			return content;
		}
	}, {
		key: "onSelect",
		value: function onSelect(_ref4, cell) {
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
						lineNumber: 142
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 144
					}
				})
			));
			return content;
		}
	}, {
		key: "onChangeDate",
		value: function onChangeDate(date) {
			this.setState({ date: date });
		}
	}, {
		key: "onChangeView",
		value: function onChangeView(view) {
			this.setState({ view: view });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    date = _state.date,
			    view = _state.view;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 161
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 162
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Switch__["a" /* default */], {
					activeLabel: "Year View",
					inactiveLabel: "Month view",
					onChangeView: function onChangeView(view) {
						return _this2.onChangeView(view);
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 163
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Calendar__["a" /* default */], {
					date: date,
					onChangeDate: function onChangeDate(date) {
						return _this2.onChangeDate(date);
					},
					onRender: this.onRender,
					selected: this.onSelect,
					view: view,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 168
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplaySpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 175
					}
				})
			);
		}
	}]);

	return Application;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Application, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 181
		}
	});
});

/***/ }),

/***/ "./pages/calendar2/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/calendar2/index.js");


/***/ }),

/***/ "date-fns/add_months":
/***/ (function(module, exports) {

module.exports = require("date-fns/add_months");

/***/ }),

/***/ "date-fns/format":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "date-fns/get_days_in_month":
/***/ (function(module, exports) {

module.exports = require("date-fns/get_days_in_month");

/***/ }),

/***/ "date-fns/get_month":
/***/ (function(module, exports) {

module.exports = require("date-fns/get_month");

/***/ }),

/***/ "date-fns/get_year":
/***/ (function(module, exports) {

module.exports = require("date-fns/get_year");

/***/ }),

/***/ "date-fns/is_same_day":
/***/ (function(module, exports) {

module.exports = require("date-fns/is_same_day");

/***/ }),

/***/ "date-fns/is_weekend":
/***/ (function(module, exports) {

module.exports = require("date-fns/is_weekend");

/***/ }),

/***/ "date-fns/set_date":
/***/ (function(module, exports) {

module.exports = require("date-fns/set_date");

/***/ }),

/***/ "date-fns/start_of_month":
/***/ (function(module, exports) {

module.exports = require("date-fns/start_of_month");

/***/ }),

/***/ "date-fns/sub_days":
/***/ (function(module, exports) {

module.exports = require("date-fns/sub_days");

/***/ }),

/***/ "date-fns/sub_months":
/***/ (function(module, exports) {

module.exports = require("date-fns/sub_months");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=calendar2.js.map