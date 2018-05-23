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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__ = __webpack_require__("./node_modules/date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_add_months__ = __webpack_require__("./node_modules/date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_add_months__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__ = __webpack_require__("./node_modules/date-fns/get_days_in_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Actions__ = __webpack_require__("./pages/calendar/Calendar/Actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Label__ = __webpack_require__("./pages/calendar/Calendar/Label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WeekDays__ = __webpack_require__("./pages/calendar/Calendar/WeekDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Grid__ = __webpack_require__("./pages/calendar/Calendar/Grid/index.js");
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
			inViewYear: year
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: "setDay",
		value: function setDay(date) {
			// this.setState({ inViewMonth: this.state.inViewMonth + month });
			// const selectedDate = new Date(
			// 	this.state.inViewYear,
			// 	this.state.inViewMonth,
			// 	day
			// );
			// console.log(selectedDate);
			// const result =
			// 	month == -1
			// 		? subMonths(selectedDate, 1)
			// 		: month == 1 ? addMonths(selectedDate, 1) : selectedDate;
			// console.log(result);

			this.setState({ selectedDate: date });
		}
	}, {
		key: "setMonth",
		value: function setMonth(month) {
			console.log(month);
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
			var currentDate = this.state.currentDate;
			var selectedDate = this.state.selectedDate;
			var _state = this.state,
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
			    selected = _props.selected;

			// const isCurrentDate = isSameDay(date, currentDate);
			// const isCurrentMonth = isSameMonth(date, currentDate);
			// const isCurrentYear = isSameYear(date, currentDate);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 144
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.header, __source: {
							fileName: _jsxFileName,
							lineNumber: 145
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.actions, __source: {
								fileName: _jsxFileName,
								lineNumber: 146
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
								lineNumber: 147
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.label, __source: {
								fileName: _jsxFileName,
								lineNumber: 152
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { month: inViewMonthName, year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 153
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.body, __source: {
							fileName: _jsxFileName,
							lineNumber: 156
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.week_days, __source: {
								fileName: _jsxFileName,
								lineNumber: 157
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WeekDays__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 158
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.grid, __source: {
								fileName: _jsxFileName,
								lineNumber: 160
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["a" /* default */], {
							daysInMonth: this.setDaysInMonth(),
							date: new Date(inViewYear, inViewMonth),
							setDay: function setDay(day) {
								return _this2.setDay(day);
							},
							onRender: onRender,
							selected: selected,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 161
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
//# sourceMappingURL=3.33c53476c6f8a22295e9.hot-update.js.map