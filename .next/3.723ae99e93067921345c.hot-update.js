webpackHotUpdate(3,{

/***/ "./node_modules/date-fns/start_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("./node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

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

			var inViewDate = new Date(this.state.inViewYear, month);

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

			var _this2 = this;

			var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var daysInYear = [];

			var currentMonth = month != null ? month : this.state.inViewMonth;
			var currentYear = year != null ? year : this.state.inViewYear;

			if (view == "year") new Array(12).fill(1).forEach(function (month, key) {
				return daysInYear.push(_this2.daysInMonth(key, currentYear));
			});else if (view == "month") daysInYear.push(this.daysInMonth(currentMonth, currentYear));

			this.setState({ daysInYear: daysInYear });

			this.setMonth(currentMonth);
			this.setYear(currentYear);
		}
		// setDaysInMonth(monthNumber = null, yearNumber = null) {
		// 	const {
		// 		currentDate,
		// 		selectedDate,
		// 		inViewMonth,
		// 		inViewYear,
		// 	} = this.state;

		// 	const inViewDate = new Date(
		// 		yearNumber != null ? yearNumber : inViewYear,
		// 		monthNumber != null ? monthNumber : inViewMonth
		// 	);

		// 	const currentDay = parseInt(format(currentDate, "D"));
		// 	const currentMonth = parseInt(format(currentDate, "M")) - 1;
		// 	const currentMonthName = format(currentDate, "MMM");
		// 	const currentYear = parseInt(format(currentDate, "YYYY"));

		// 	const day = parseInt(format(selectedDate, "D"));
		// 	const month = parseInt(format(selectedDate, "M")) - 1;
		// 	const monthName = format(selectedDate, "MMM");
		// 	const year = parseInt(format(selectedDate, "YYYY"));

		// 	const daysUntilSunday = parseInt(format(startOfMonth(inViewDate), "d"));
		// 	const monthLength = getDaysInMonth(inViewDate);
		// 	const firstDayOfWeek = parseInt(
		// 		format(subDays(startOfMonth(inViewDate), daysUntilSunday), "D")
		// 	);

		// 	var completeDaysInMonth = [];
		// 	var daysInMonth = [];

		// 	for (var i = 0; i < daysUntilSunday; i++) {
		// 		completeDaysInMonth.push({
		// 			lastMonth: true,
		// 			day: firstDayOfWeek + i,
		// 		});
		// 	}
		// 	for (var i = 0; i < monthLength; i++) {
		// 		completeDaysInMonth.push({
		// 			day: i + 1,
		// 			current:
		// 				currentDay == i + 1 &&
		// 				currentMonth == inViewMonth &&
		// 				currentYear == inViewYear,
		// 			selected:
		// 				day == i + 1 && inViewMonth == month && inViewYear == year,
		// 		});
		// 	}
		// 	daysInMonth = completeDaysInMonth.concat(daysInMonth);

		// 	completeDaysInMonth = [];

		// 	for (var i = 0; i < 42 - daysInMonth.length; i++) {
		// 		completeDaysInMonth.push({
		// 			nextMonth: true,
		// 			day: i + 1,
		// 		});
		// 	}

		// 	daysInMonth = daysInMonth.concat(completeDaysInMonth);

		// 	return daysInMonth;
		// }
		// setMonths() {
		// 	var daysInYear = [];
		// 	new Array(12).fill(1).forEach((month, key) => {
		// 		daysInYear.push(this.setDaysInMonth(key, this.state.inViewYear));
		// 	});
		// 	return daysInYear;
		// }

	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    inViewMonth = _state.inViewMonth,
			    inViewMonthName = _state.inViewMonthName,
			    inViewYear = _state.inViewYear;
			var _props = this.props,
			    onRender = _props.onRender,
			    selected = _props.selected,
			    view = _props.view;


			var daysInYear = this.setMonths();

			// const isCurrentDate = isSameDay(date, currentDate);
			// const isCurrentMonth = isSameMonth(date, currentDate);
			// const isCurrentYear = isSameYear(date, currentDate);

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 168
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.header, __source: {
							fileName: _jsxFileName,
							lineNumber: 169
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.actions, __source: {
								fileName: _jsxFileName,
								lineNumber: 170
							}
						},
						view == "month" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], {
							next: function next() {
								return _this3.setMonth(inViewMonth + 1);
							},
							prev: function prev() {
								return _this3.setMonth(inViewMonth - 1);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 172
							}
						}) : view == "year" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], {
							next: function next() {
								return _this3.setYear(inViewYear + 1);
							},
							prev: function prev() {
								return _this3.setYear(inViewYear - 1);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 177
							}
						}) : null
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.label, __source: {
								fileName: _jsxFileName,
								lineNumber: 183
							}
						},
						view == "year" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 185
							}
						}) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Label__["a" /* default */], { month: inViewMonthName, year: inViewYear, __source: {
								fileName: _jsxFileName,
								lineNumber: 187
							}
						}) /*<div>
         {new Array(12).fill(1).map((month, key) => {
         	const currentMonthName = format(
         		new Date(inViewYear, key),
         		"MMM"
         	);
         	return (
         		<Label
         			month={currentMonthName}
         			year={inViewYear}
         		/>
         	);
         })}
         </div>*/
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.body, __source: {
							fileName: _jsxFileName,
							lineNumber: 204
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.week_days, __source: {
								fileName: _jsxFileName,
								lineNumber: 205
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WeekDays__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 206
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ className: __WEBPACK_IMPORTED_MODULE_12__style_css___default.a.grid, __source: {
								fileName: _jsxFileName,
								lineNumber: 208
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__DaysList__["a" /* default */], {
							view: view,
							daysInMonth: daysInYear,
							date: new Date(inViewYear, inViewMonth),
							setDay: function setDay(day) {
								return _this3.setDay(day);
							},
							onRender: onRender,
							selected: selected,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 209
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
//# sourceMappingURL=3.723ae99e93067921345c.hot-update.js.map