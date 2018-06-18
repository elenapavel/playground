module.exports=__NEXT_REGISTER_PAGE("/switch",function(){var t=webpackJsonp([120],{677:function(t,e,i){t.exports=i(678)},678:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});var o=i(0);var n=i.n(o);var r=i(679);var s=i.n(r);function a(t){a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return a(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(t,o.key,o)}}function l(t,e,i){e&&u(t.prototype,e);i&&u(t,i);return t}function f(t,e){if(e&&("object"===a(e)||"function"===typeof e))return e;return v(t)}function h(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var g=function(t){h(e,t);function e(){var t;var i,o;c(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return f(o,(i=o=f(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),Object.defineProperty(v(o),"state",{configurable:true,enumerable:true,writable:true,value:{isActive:false,isDragging:false,switchWidth:null,switchPosition:0,circlePosition:0}}),i))}l(e,[{key:"componentDidMount",value:function t(){this.onMouseDragCircle=this.onMouseDragCircle.bind(this);this.onMouseDragStop=this.onMouseDragStop.bind(this);this.setState({switchWidth:this.refs.switch.clientWidth/16,switchPosition:this.refs.switch.offsetLeft/16})}},{key:"toggleActiveState",value:function t(){this.setState({isActive:!this.state.isActive})}},{key:"onDragCircle",value:function t(e){var i=this.state,o=i.switchPosition,n=i.switchWidth;var r=e.touches[0].clientX/16;var s=r<o?0:r>o+n?n:r-o;this.setState({isDragging:true,circlePosition:s})}},{key:"onDragStop",value:function t(e){var i=this.state,o=i.switchWidth,n=i.circlePosition;var r=!(o/2>n);this.setState({isDragging:false,isActive:r})}},{key:"onMouseDragStart",value:function t(e){window.addEventListener("mousemove",this.onMouseDragCircle);window.addEventListener("mouseup",this.onMouseDragStop)}},{key:"onMouseDragCircle",value:function t(e){var i=this.state,o=i.switchPosition,n=i.switchWidth;var r=e.clientX/16;var s=r<o?0:r>o+n?n:r-o;this.setState({isDragging:true,circlePosition:s})}},{key:"onMouseDragStop",value:function t(e){var i=this.state,o=i.switchWidth,n=i.circlePosition;var r=!(o/2>n);window.removeEventListener("mousemove",this.onMouseDragCircle);window.removeEventListener("mouseup",this.onMouseDragStop);this.setState({isDragging:false,isActive:r})}},{key:"render",value:function t(){var e=this;var i=this.state,o=i.isActive,r=i.isDragging,a=i.circlePosition,c=i.switchPosition,u=i.switchWidth;return n.a.createElement("b",{className:s.a.switch,ref:"switch",onClick:function t(){return e.toggleActiveState()}},n.a.createElement("b",{className:s.a.labels},n.a.createElement("b",{className:s.a.to_left},"on"),n.a.createElement("b",{className:s.a.to_right},"off")),n.a.createElement("b",{className:s.a.circle,style:{left:r?a+"rem":o?u+"rem":"0rem"},onTouchMove:function t(i){return e.onDragCircle(i)},onTouchEnd:function t(i){return e.onDragStop(i)},onMouseDown:function t(i){return e.onMouseDragStart(i)}}))}}]);return e}(o["Component"]);e["default"]=g}},[677]);return{page:t.default}});