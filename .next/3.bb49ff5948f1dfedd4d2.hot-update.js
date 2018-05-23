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
						lineNumber: 34
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
							lineNumber: 39
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
						lineNumber: 46
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
							lineNumber: 51
						}
					},
					activeLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: "2708874862",
					css: ".switch_container.__jsx-style-dynamic-selector{position:relative;display:block;}.inactive_label.__jsx-style-dynamic-selector{padding-right:0.5rem;font-size:1rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_inactive.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector{color:" + (inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black") + ";}.active_label.__jsx-style-dynamic-selector{font-size:1rem;padding-left:0.5rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_active.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{color:" + (activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black") + ";}.switch.__jsx-style-dynamic-selector{vertical-align:middle;display:inline-block;width:50px;height:20px;border-radius:12px;position:relative;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;cursor:pointer;background:" + (inactiveBackgroundColor || "lightgrey") + ";border:2px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector{background:" + (activeBackgroundColor || "red") + ";border-color:" + (activeBackgroundColor || "red") + ";}.switch.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;background:#fff;top:0;bottom:0;margin:1px;width:12px;height:12px;border-radius:50%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;left:0;right:calc(100% - 16px);border:1px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:after{right:0;left:calc(100% - 16px);border-color:" + (activeBackgroundColor || "red") + ";}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{cursor:not-allowed;}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;border-radius:12px;top:-2px;bottom:-2px;left:-2px;right:-2px;width:calc(100% + 4px);height:calc(100% + 4px);background-color:rgba(255,255,255,0.3);z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGdCLEFBR3lCLEFBSUcsQUFVYyxBQUdwQixBQVVvQixBQUdiLEFBYWtCLEFBSTdCLEFBZ0JILEFBT1csQUFLUixRQVhZLEdBaEJMLEFBNEJBLElBMURFLEdBakJOLENBc0VmLEVBbEVnQixDQTBCTSxPQWtCTCxBQTRCRyxFQVp1QixDQS9EM0MsR0FhQSxBQUlrQixBQVNsQixDQXRCa0IsSUFzQ3lCLEdBWi9CLEVBa0JMLEdBNEJHLEdBM0JBLENBL0JNLENBYkEsQ0EwQkgsR0E4Q0EsR0EzQkQsTUFsQlEsQ0FiRCxDQWJBLENBd0VSLEVBM0JDLEVBYVosTUFlWSxHQXBDWixBQVNhLEdBaENTLEFBYUgsQ0ExQkcsSUF5RUUsSUEzQkwsU0FuQmMsR0FickIsQ0FiQSxLQThDcUIsQ0EyQlIsSUEzRFEsQ0FiQSxtQkF5RVUsc0NBL0MzQixDQWdETCxRQTVCSCxFQTZCUixHQTdEQSxDQWJBLEFBMEJ5QyxDQW9CaEIsd0JBRUssZUFwQkEsK0JBcUI5QixlQXBCQSIsImZpbGUiOiJwYWdlcy9jYWxlbmRhci9Td2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsZW5hL1Byb2plY3RzL3BsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUgfHwgZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdHRvZ2dsZVN3aXRjaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWN0aXZlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0YWN0aXZlTGFiZWwsXG5cdFx0XHRpbmFjdGl2ZUxhYmVsLFxuXHRcdFx0YWN0aXZlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRhY3RpdmVMYWJlbENvbG9yLFxuXHRcdFx0aW5hY3RpdmVMYWJlbENvbG9yLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgeyBpc0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IHN3aXRjaENsYXNzID1cblx0XHRcdFwic3dpdGNoX2NvbnRhaW5lciBcIiArXG5cdFx0XHQoaXNBY3RpdmUgPyBcInN3aXRjaF9hY3RpdmUgXCIgOiBcInN3aXRjaF9pbmFjdGl2ZSBcIikgK1xuXHRcdFx0KGRpc2FibGVkID8gXCJzd2l0Y2hfZGlzYWJsZWRcIiA6IFwiXCIpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtzd2l0Y2hDbGFzc31cblx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdD5cblx0XHRcdFx0eyFpbmFjdGl2ZUxhYmVsID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbmFjdGl2ZV9sYWJlbFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtpbmFjdGl2ZUxhYmVsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3dpdGNoXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAoIWRpc2FibGVkID8gdGhpcy50b2dnbGVTd2l0Y2goKSA6IG51bGwpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IWFjdGl2ZUxhYmVsID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhY3RpdmVfbGFiZWxcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7YWN0aXZlTGFiZWx9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuc3dpdGNoX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmluYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9pbmFjdGl2ZSAuaW5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7aW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdD8gaW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdDogaW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ/IGluYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0OiBcImJsYWNrXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMC41cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JleTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2FjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdFx0PyBhY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdDogYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0PyBhY3RpdmVCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHQ6IFwiYmxhY2tcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2gge1xuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHtpbmFjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcImxpZ2h0Z3JleVwifTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkXG5cdFx0XHRcdFx0XHRcdCR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfYWN0aXZlIC5zd2l0Y2gge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJHthY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJyZWRcIn07XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoOmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTJweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTJweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHJpZ2h0OiBjYWxjKDEwMCUgLSAxNnB4KTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkXG5cdFx0XHRcdFx0XHRcdCR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfYWN0aXZlIC5zd2l0Y2g6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiBjYWxjKDEwMCUgLSAxNnB4KTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogJHthY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJyZWRcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLnN3aXRjaCxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5pbmFjdGl2ZV9sYWJlbCxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5hY3RpdmVfbGFiZWwge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuc3dpdGNoOmJlZm9yZSxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5hY3RpdmVfbGFiZWw6YmVmb3JlLFxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLmluYWN0aXZlX2xhYmVsOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRcdHRvcDogLTJweDtcblx0XHRcdFx0XHRcdGJvdHRvbTogLTJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IC0ycHg7XG5cdFx0XHRcdFx0XHRyaWdodDogLTJweDtcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxTd2l0Y2hcblx0XHRcdC8vIGRpc2FibGVkXG5cdFx0XHRpc0FjdGl2ZT1cInRydWVcIlxuXHRcdFx0YWN0aXZlTGFiZWw9XCJBY3RpdmVcIlxuXHRcdFx0aW5hY3RpdmVMYWJlbD1cIkluYWN0aXZlXCJcblx0XHRcdGFjdGl2ZUJhY2tncm91bmRDb2xvcj1cInBpbmtcIlxuXHRcdFx0aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3I9XCJsaW1lXCJcblx0XHQvPlxuXHQ8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=pages/calendar/Switch.js */",
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

var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 162
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Switch
		// disabled
		, { isActive: "true",
			activeLabel: "Active",
			inactiveLabel: "Inactive",
			activeBackgroundColor: "pink",
			inactiveBackgroundColor: "lime",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 163
			}
		})
	);
};

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
//# sourceMappingURL=3.bb49ff5948f1dfedd4d2.hot-update.js.map