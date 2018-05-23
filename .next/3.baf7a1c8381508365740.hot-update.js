webpackHotUpdate(3,{

/***/ "./pages/calendar/Calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format__ = __webpack_require__("./node_modules/date-fns/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__ = __webpack_require__("./node_modules/date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__ = __webpack_require__("./node_modules/date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__ = __webpack_require__("./node_modules/date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__ = __webpack_require__("./node_modules/date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__ = __webpack_require__("./node_modules/date-fns/get_days_in_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Actions__ = __webpack_require__("./pages/calendar/Calendar/Actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Label__ = __webpack_require__("./pages/calendar/Calendar/Label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WeekDays__ = __webpack_require__("./pages/calendar/Calendar/WeekDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DaysList__ = __webpack_require__("./pages/calendar/Calendar/DaysList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css__ = __webpack_require__("./pages/calendar/Calendar/design_tokens.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__design_tokens_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__design_tokens_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css__ = __webpack_require__("./pages/calendar/Calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__style_css__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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
			inViewYear: year,
			daysInYear: []
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var view = this.props.view;
			var _state = this.state,
			    inViewMonth = _state.inViewMonth,
			    inViewYear = _state.inViewYear;


			this.setView(view, inViewMonth, inViewYear);
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate() {
			if (this.state.inViewMonth != parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1) {
				this.setMonth(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1);
			}
			if (this.state.inViewYear != parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "YYYY"))) this.setYear(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "YYYY")));
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (this.state.inViewMonth != parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1) this.setDaysInMonthView(parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "M")) - 1, parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(this.state.selectedDate, "YYYY")));
		}
	}, {
		key: "setDay",
		value: function setDay(date) {
			this.setState({ selectedDate: date });
			this.props.onChangeDate(date);
		}
	}, {
		key: "setMonth",
		value: function setMonth(month) {
			var inViewDate = null;
			if (month < 0) {
				this.setState({ inViewMonth: 11 });
				this.setYear(this.state.inViewYear - 1);
				inViewDate = new Date(this.state.inViewYear - 1, 11);
			} else if (month > 11) {
				this.setState({ inViewMonth: 0 });
				this.setYear(this.state.inViewYear + 1);
				inViewDate = new Date(this.state.inViewYear + 1, 0);
			} else {
				this.setState({ inViewMonth: month });
				inViewDate = new Date(this.state.inViewYear, month);
			}

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
		key: "setView",
		value: function setView() {
			var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "month";
			var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var daysInYear = [];

			var currentMonth = month != null ? month : this.state.inViewMonth;
			var currentYear = year != null ? year : this.state.inViewYear;

			if (view == "year") {
				this.setYear(currentYear);
				this.setDaysInYearView(currentYear);
			} else if (view == "month") {
				this.setMonth(currentMonth);
				this.setDaysInMonthView(currentMonth);
			}
		}
	}, {
		key: "setDaysInMonthView",
		value: function setDaysInMonthView(month) {
			var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var daysInYear = [];

			var currentMonth = month != null ? month : this.state.inViewMonth;
			var currentYear = year != null ? year : this.state.inViewYear;

			daysInYear.push(this.setDays(currentMonth, currentYear));
			this.setState({ daysInYear: daysInYear });
		}
	}, {
		key: "setDaysInYearView",
		value: function setDaysInYearView(year) {
			var _this2 = this;

			var daysInYear = [];

			var currentYear = year != null ? year : this.state.inViewYear;

			new Array(12).fill(1).forEach(function (month, key) {
				return daysInYear.push(_this2.setDays(key, currentYear));
			});
			this.setState({ daysInYear: daysInYear });
		}
	}, {
		key: "setDays",
		value: function setDays() {
			var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var _state2 = this.state,
			    currentDate = _state2.currentDate,
			    selectedDate = _state2.selectedDate,
			    inViewMonth = _state2.inViewMonth,
			    inViewYear = _state2.inViewYear;


			var inViewDate = new Date(year != null ? year : inViewYear, month != null ? month : inViewMonth);

			var currentDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "D"));
			var currentMonth = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "M")) - 1;
			var currentYear = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(currentDate, "YYYY"));

			var selectedDay = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "D"));
			var selectedMonth = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "M")) - 1;
			var selectedYear = parseInt(__WEBPACK_IMPORTED_MODULE_1_date_fns_format___default()(selectedDate, "YYYY"));

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
					selected: selectedDay == i + 1 && inViewMonth == selectedMonth && inViewYear == selectedYear
				});
				console.log(selectedDay == i + 1 && inViewMonth == selectedMonth && inViewYear == selectedYear);
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
			var _this3 = this;

			var _state3 = this.state,
			    inViewMonth = _state3.inViewMonth,
			    inViewMonthName = _state3.inViewMonthName,
			    inViewYear = _state3.inViewYear,
			    daysInYear = _state3.daysInYear,
			    selectedDate = _state3.selectedDate;
			var _props = this.props,
			    onRender = _props.onRender,
			    onSelect = _props.onSelect,
			    view = _props.view;


			var days = daysInYear;

			// const isCurrentDate = isSameDay(date, currentDate);
			// const isCurrentMonth = isSameMonth(date, currentDate);
			// const isCurrentYear = isSameYear(date, currentDate);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 218
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.header, __source: {
							fileName: _jsxFileName,
							lineNumber: 219
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.actions, __source: {
								fileName: _jsxFileName,
								lineNumber: 220
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], {
							next: function next() {
								return _this3.setView("month", inViewMonth + 1, inViewYear);
							},
							prev: function prev() {
								return _this3.setView("month", inViewMonth - 1, inViewYear);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 221
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.label, __source: {
								fileName: _jsxFileName,
								lineNumber: 238
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { month: inViewMonthName, year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 239
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.body, __source: {
							fileName: _jsxFileName,
							lineNumber: 242
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.week_days, __source: {
								fileName: _jsxFileName,
								lineNumber: 243
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WeekDays__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 244
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.grid, __source: {
								fileName: _jsxFileName,
								lineNumber: 246
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__DaysList__["a" /* default */], {
							view: view,
							days: days,
							date: new Date(inViewYear, inViewMonth),
							setDay: function setDay(date) {
								return _this3.setDay(date);
							},
							onRender: onRender,
							onSelect: onSelect,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 247
							}
						})
					)
				)
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Calendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Calendar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Calendar, "Calendar", "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Calendar/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Calendar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.baf7a1c8381508365740.hot-update.js.map