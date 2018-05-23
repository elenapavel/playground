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
					css: ".switch_container.__jsx-style-dynamic-selector{position:relative;display:block;}.inactive_label.__jsx-style-dynamic-selector{padding-right:0.5rem;font-size:1rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_inactive.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector{color:" + (inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black") + ";}.active_label.__jsx-style-dynamic-selector{font-size:1rem;padding-left:0.5rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_active.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{color:" + (activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black") + ";}.switch.__jsx-style-dynamic-selector{vertical-align:middle;display:inline-block;width:50px;height:20px;border-radius:12px;position:relative;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;cursor:pointer;background:" + (inactiveBackgroundColor || "lightgrey") + ";border:2px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector{background:" + (activeBackgroundColor || "red") + ";border-color:" + (activeBackgroundColor || "red") + ";}.switch.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;background:#fff;top:0;bottom:0;margin:1px;width:12px;height:12px;border-radius:50%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;left:0;right:calc(100% - 16px);border:1px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:after{right:0;left:calc(100% - 16px);border-color:" + (activeBackgroundColor || "red") + ";}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{cursor:not-allowed;}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;border-radius:12px;top:-2px;bottom:-2px;left:-2px;right:-2px;width:calc(100% + 4px);height:calc(100% + 4px);background-color:rgba(255,255,255,0.3);z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCLEFBR3lCLEFBSUcsQUFVYyxBQUdwQixBQVVvQixBQUdiLEFBYWtCLEFBSTdCLEFBZ0JILEFBT1csQUFLUixRQVhZLEdBaEJMLEFBNEJBLElBMURFLEdBakJOLENBc0VmLEVBbEVnQixDQTBCTSxPQWtCTCxBQTRCRyxFQVp1QixDQS9EM0MsR0FhQSxBQUlrQixBQVNsQixDQXRCa0IsSUFzQ3lCLEdBWi9CLEVBa0JMLEdBNEJHLEdBM0JBLENBL0JNLENBYkEsQ0EwQkgsR0E4Q0EsR0EzQkQsTUFsQlEsQ0FiRCxDQWJBLENBd0VSLEVBM0JDLEVBYVosTUFlWSxHQXBDWixBQVNhLEdBaENTLEFBYUgsQ0ExQkcsSUF5RUUsSUEzQkwsU0FuQmMsR0FickIsQ0FiQSxLQThDcUIsQ0EyQlIsSUEzRFEsQ0FiQSxtQkF5RVUsc0NBL0MzQixDQWdETCxRQTVCSCxFQTZCUixHQTdEQSxDQWJBLEFBMEJ5QyxDQW9CaEIsd0JBRUssZUFwQkEsK0JBcUI5QixlQXBCQSIsImZpbGUiOiJwYWdlcy9jYWxlbmRhci9Td2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsZW5hL1Byb2plY3RzL3BsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUgfHwgZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdHRvZ2dsZVN3aXRjaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWN0aXZlIH0pO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2VWaWV3KHRoaXMuc3RhdGUuaXNBY3RpdmUgPyBcIm1vbnRoXCIgOiBcInllYXJcIik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRhY3RpdmVMYWJlbCxcblx0XHRcdGluYWN0aXZlTGFiZWwsXG5cdFx0XHRhY3RpdmVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRpbmFjdGl2ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGFjdGl2ZUxhYmVsQ29sb3IsXG5cdFx0XHRpbmFjdGl2ZUxhYmVsQ29sb3IsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblxuXHRcdGNvbnN0IHsgaXNBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRjb25zdCBzd2l0Y2hDbGFzcyA9XG5cdFx0XHRcInN3aXRjaF9jb250YWluZXIgXCIgK1xuXHRcdFx0KGlzQWN0aXZlID8gXCJzd2l0Y2hfYWN0aXZlIFwiIDogXCJzd2l0Y2hfaW5hY3RpdmUgXCIpICtcblx0XHRcdChkaXNhYmxlZCA/IFwic3dpdGNoX2Rpc2FibGVkXCIgOiBcIlwiKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17c3dpdGNoQ2xhc3N9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHQ+XG5cdFx0XHRcdHshaW5hY3RpdmVMYWJlbCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5hY3RpdmVfbGFiZWxcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aW5hY3RpdmVMYWJlbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInN3aXRjaFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyFhY3RpdmVMYWJlbCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWN0aXZlX2xhYmVsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2FjdGl2ZUxhYmVsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LnN3aXRjaF9jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pbmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfaW5hY3RpdmUgLmluYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2luYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ/IGluYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ6IGluYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0PyBpbmFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdDogXCJibGFja1wifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9hY3RpdmUgLmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHthY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdD8gYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ6IGFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdD8gYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0OiBcImJsYWNrXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoIHtcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZFxuXHRcdFx0XHRcdFx0XHQke2luYWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwibGlnaHRncmV5XCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuc3dpdGNoIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAke2FjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcInJlZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaDphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEycHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogY2FsYygxMDAlIC0gMTZweCk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZFxuXHRcdFx0XHRcdFx0XHQke2luYWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwibGlnaHRncmV5XCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuc3dpdGNoOmFmdGVyIHtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogY2FsYygxMDAlIC0gMTZweCk7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5zd2l0Y2gsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuaW5hY3RpdmVfbGFiZWwsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLnN3aXRjaDpiZWZvcmUsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuYWN0aXZlX2xhYmVsOmJlZm9yZSxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5pbmFjdGl2ZV9sYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHR0b3A6IC0ycHg7XG5cdFx0XHRcdFx0XHRib3R0b206IC0ycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAtMnB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IC0ycHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcblx0XHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiJdfQ== */\n/*@ sourceURL=pages/calendar/Switch.js */",
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
//# sourceMappingURL=3.eafdf08ec0342b23e099.hot-update.js.map