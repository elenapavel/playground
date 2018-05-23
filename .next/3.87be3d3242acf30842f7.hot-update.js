webpackHotUpdate(3,{

/***/ "./pages/calendar/Switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Switch.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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
						lineNumber: 36
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
							lineNumber: 41
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
						lineNumber: 48
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
							lineNumber: 53
						}
					},
					activeLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: "2708874862",
					css: ".switch_container.__jsx-style-dynamic-selector{position:relative;display:block;}.inactive_label.__jsx-style-dynamic-selector{padding-right:0.5rem;font-size:1rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_inactive.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector{color:" + (inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black") + ";}.active_label.__jsx-style-dynamic-selector{font-size:1rem;padding-left:0.5rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_active.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{color:" + (activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black") + ";}.switch.__jsx-style-dynamic-selector{vertical-align:middle;display:inline-block;width:50px;height:20px;border-radius:12px;position:relative;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;cursor:pointer;background:" + (inactiveBackgroundColor || "lightgrey") + ";border:2px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector{background:" + (activeBackgroundColor || "red") + ";border-color:" + (activeBackgroundColor || "red") + ";}.switch.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;background:#fff;top:0;bottom:0;margin:1px;width:12px;height:12px;border-radius:50%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;left:0;right:calc(100% - 16px);border:1px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:after{right:0;left:calc(100% - 16px);border-color:" + (activeBackgroundColor || "red") + ";}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{cursor:not-allowed;}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;border-radius:12px;top:-2px;bottom:-2px;left:-2px;right:-2px;width:calc(100% + 4px);height:calc(100% + 4px);background-color:rgba(255,255,255,0.3);z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGdCLEFBR3lCLEFBSUcsQUFVYyxBQUdwQixBQVVvQixBQUdiLEFBYWtCLEFBSTdCLEFBZ0JILEFBT1csQUFLUixRQVhZLEdBaEJMLEFBNEJBLElBMURFLEdBakJOLENBc0VmLEVBbEVnQixDQTBCTSxPQWtCTCxBQTRCRyxFQVp1QixDQS9EM0MsR0FhQSxBQUlrQixBQVNsQixDQXRCa0IsSUFzQ3lCLEdBWi9CLEVBa0JMLEdBNEJHLEdBM0JBLENBL0JNLENBYkEsQ0EwQkgsR0E4Q0EsR0EzQkQsTUFsQlEsQ0FiRCxDQWJBLENBd0VSLEVBM0JDLEVBYVosTUFlWSxHQXBDWixBQVNhLEdBaENTLEFBYUgsQ0ExQkcsSUF5RUUsSUEzQkwsU0FuQmMsR0FickIsQ0FiQSxLQThDcUIsQ0EyQlIsSUEzRFEsQ0FiQSxtQkF5RVUsc0NBL0MzQixDQWdETCxRQTVCSCxFQTZCUixHQTdEQSxDQWJBLEFBMEJ5QyxDQW9CaEIsd0JBRUssZUFwQkEsK0JBcUI5QixlQXBCQSIsImZpbGUiOiJwYWdlcy9jYWxlbmRhci9Td2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsZW5hL1Byb2plY3RzL3BsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUgfHwgZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdHRvZ2dsZVN3aXRjaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWN0aXZlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0YWN0aXZlTGFiZWwsXG5cdFx0XHRpbmFjdGl2ZUxhYmVsLFxuXHRcdFx0YWN0aXZlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRhY3RpdmVMYWJlbENvbG9yLFxuXHRcdFx0aW5hY3RpdmVMYWJlbENvbG9yLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cblx0XHRjb25zdCB7IGlzQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0Y29uc3Qgc3dpdGNoQ2xhc3MgPVxuXHRcdFx0XCJzd2l0Y2hfY29udGFpbmVyIFwiICtcblx0XHRcdChpc0FjdGl2ZSA/IFwic3dpdGNoX2FjdGl2ZSBcIiA6IFwic3dpdGNoX2luYWN0aXZlIFwiKSArXG5cdFx0XHQoZGlzYWJsZWQgPyBcInN3aXRjaF9kaXNhYmxlZFwiIDogXCJcIik7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e3N3aXRjaENsYXNzfVxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0PlxuXHRcdFx0XHR7IWluYWN0aXZlTGFiZWwgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImluYWN0aXZlX2xhYmVsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2luYWN0aXZlTGFiZWx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJzd2l0Y2hcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHshYWN0aXZlTGFiZWwgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFjdGl2ZV9sYWJlbFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHthY3RpdmVMYWJlbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5zd2l0Y2hfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaW5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMC41cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JleTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2luYWN0aXZlIC5pbmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtpbmFjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdFx0PyBpbmFjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdFx0OiBpbmFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdD8gaW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ6IFwiYmxhY2tcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfYWN0aXZlIC5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7YWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ/IGFjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdFx0OiBhY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ/IGFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdDogXCJibGFja1wifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaCB7XG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2luYWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwibGlnaHRncmV5XCJ9O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWRcblx0XHRcdFx0XHRcdFx0JHtpbmFjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcImxpZ2h0Z3JleVwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9hY3RpdmUgLnN3aXRjaCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAke2FjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcInJlZFwifTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogJHthY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJyZWRcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2g6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDFweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWRcblx0XHRcdFx0XHRcdFx0JHtpbmFjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcImxpZ2h0Z3JleVwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9hY3RpdmUgLnN3aXRjaDphZnRlciB7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAke2FjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcInJlZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuc3dpdGNoLFxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLmluYWN0aXZlX2xhYmVsLFxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5zd2l0Y2g6YmVmb3JlLFxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLmFjdGl2ZV9sYWJlbDpiZWZvcmUsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuaW5hY3RpdmVfbGFiZWw6YmVmb3JlIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0dG9wOiAtMnB4O1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAtMnB4O1xuXHRcdFx0XHRcdFx0bGVmdDogLTJweDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAtMnB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iXX0= */\n/*@ sourceURL=pages/calendar/Switch.js */",
					dynamic: [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Switch;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Switch;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Switch, "Switch", "/Users/elena/Projects/playground/pages/calendar/Switch.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Switch.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Switch")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.87be3d3242acf30842f7.hot-update.js.map