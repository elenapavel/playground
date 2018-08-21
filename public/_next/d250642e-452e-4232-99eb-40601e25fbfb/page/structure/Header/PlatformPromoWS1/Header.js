module.exports=__NEXT_REGISTER_PAGE("/structure/Header/PlatformPromoWS1/Header",function(){var e=webpackJsonp([41],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return u});r.d(t,"b",function(){return l});r.d(t,"c",function(){return s});var n=r(2);var o=r.n(n);var a=o()(),i=a.publicRuntimeConfig;var u=i.base;var c=i.url;var l=i.static.default;var s=i.static.structure},12:function(e,t,r){"use strict";var n=r(38);var o=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(44));var i=o(r(13));var u=o(r(32));var c=o(r(28));var l=o(r(29));var s=o(r(33));var f=o(r(34));var p=o(r(46));var v=r(45);var y=n(r(0));var b=o(r(40));var h=o(r(15));var d=n(r(43));var m=r(36);var g=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];n=(0,s.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,l.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var i=window.location.pathname;o=(0,v.resolve)(i,o);a=a?(0,v.resolve)(i,a):o;t.preventDefault();var u=this.props.scroll;null==u&&(u=a.indexOf("#")<0);var c=this.props.replace;var l=c?"replace":"push";d.default[l](o,a,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);d.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,d._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},13:function(e,t,r){e.exports=r(14)},14:function(e,t,r){var n=r(9);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},149:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(322);var i=r.n(a);t["default"]=function(e){var t=e.image;return o.a.createElement("b",{className:i.a.logo},o.a.createElement("img",{src:t}))}},15:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(16);var o=l(n);var a=r(22);var i=l(a);var u=r(23);var c=l(u);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var v={};function y(e){return(0,o["default"])(e,s({},p,v))}function b(e){return e&&e[p]===v}function h(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,s({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(8);var i=r.n(a);var u=r(323);var c=r.n(u);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function v(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return b(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){y(t,e);function t(){var e;var r,n;s(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false}}),r))}p(t,[{key:"toggleMenu",value:function e(){this.setState({isMenuOpened:!this.state.isMenuOpened});"function"===typeof this.props.onChange&&this.props.onChange(!this.state.isMenuOpened)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.items,a=r.toggleMenu;var u=this.state.isMenuOpened;var l="".concat(c.a.menu_icon," ion-navicon");var s="".concat(u?c.a.menu_expanded:c.a.menu_collapsed);return o.a.createElement("b",{className:c.a.menu},o.a.createElement("b",{className:l,onClick:function e(){return t.toggleMenu()}}),o.a.createElement("b",{className:s},n.map(function(e,t){return o.a.createElement("b",{className:c.a.item,key:t},o.a.createElement(i.a,{href:e.link},o.a.createElement("a",null,e.name)))})))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isMenuOpened=t.isMenuOpened;return r}}]);return t}(n["Component"]);t["default"]=h},151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(324);var i=r.n(a);t["default"]=function(e){var t=e.label,r=e.onSelect;return o.a.createElement("b",{className:i.a.register,onClick:function e(){return r()}},t||"Register")}},152:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(325);var i=r.n(a);function u(e){u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function s(e,t,r){t&&l(e.prototype,t);r&&l(e,r);return e}function f(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;return v(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){p(t,e);function t(){var e;var r,n;c(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return f(n,(r=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(v(n),"state",{configurable:true,enumerable:true,writable:true,value:{isSearchVisible:false}}),r))}s(t,[{key:"toggleSearchVisibility",value:function e(){this.setState({isSearchVisible:!this.state.isSearchVisible});"function"===typeof this.props.onChange&&this.props.onChange(!this.state.isSearchVisible)}},{key:"componentDidUpdate",value:function e(){var t=this;this.state.isSearchVisible&&setTimeout(function(){t.refs.search.focus()},300)}},{key:"render",value:function e(){var t=this;var r=this.state.isSearchVisible;var n="".concat(i.a.search_icon," ").concat(r?"ion-android-close":"ion-android-search");var a="".concat(r?i.a.search_input_visible:i.a.search_input_hidden);return o.a.createElement("b",{className:i.a.search},o.a.createElement("b",{className:n,onClick:function e(){return t.toggleSearchVisibility()}}),o.a.createElement("b",{className:a},o.a.createElement("input",{type:"text",value:"",ref:"search",placeholder:"Search..."})))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isSearchVisible=t.isSearchVisible;return r}}]);return t}(n["Component"]);t["default"]=y},153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={logo:"".concat(n["b"],"/images/dropbox_logo.png"),items:[{link:n["a"]+"#",name:"About"},{link:n["a"]+"#",name:"Team"},{link:n["a"]+"#",name:"Blog"},{link:n["a"]+"#",name:"Contact"}]}},16:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var i=r(21);var u=a();n(u,{getPolyfill:a,implementation:o,shim:i});e.exports=u},17:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},18:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)o.call(a,t[u],u,t);else for(var c in t)r.call(t,c)&&o.call(a,t[c],c,t)}},19:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var u=o.call(arguments,1);var c;var l=function(){if(this instanceof c){var e=r.apply(this,u.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(o.call(arguments)))};var s=Math.max(0,r.length-u.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(l);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},2:function(e,t,r){e.exports=r(24)},20:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},21:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},22:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(149);var i=r(150);var u=r(151);var c=r(152);var l=r(153);var s=r(380);var f=r.n(s);function p(e){p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return p(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&y(e.prototype,t);r&&y(e,r);return e}function h(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return m(e)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){d(t,e);function t(){var e;var r,n;v(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return h(n,(r=n=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(m(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false,isSearchVisible:false}}),r))}b(t,[{key:"toggleMenu",value:function e(t){this.setState({isMenuOpened:!this.state.isMenuOpened,isSearchVisible:false})}},{key:"toggleSearch",value:function e(t){this.setState({isMenuOpened:false,isSearchVisible:t})}},{key:"render",value:function e(){var t=this;var r=this.state,n=r.isMenuOpened,s=r.isSearchVisible;var p="".concat(s?f.a.search_expanded:f.a.search_collapsed);return o.a.createElement("b",{className:f.a.platform_promo},o.a.createElement("b",{className:f.a.header},o.a.createElement("b",{className:f.a.logo},o.a.createElement(a["default"],{image:l["default"].logo})),o.a.createElement("b",{className:f.a.to_right},o.a.createElement("b",{className:p},o.a.createElement(c["default"],{isSearchVisible:s,onChange:function e(r){return t.toggleSearch(r)}})),o.a.createElement("b",{className:f.a.register},o.a.createElement(u["default"],null))),o.a.createElement("b",{className:f.a.menu},o.a.createElement(i["default"],{isMenuOpened:n,items:l["default"].items,onChange:function e(r){return t.toggleMenu(r)}}))))}}]);return t}(n["Component"]);t["default"]=g},23:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var o=r(18);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var l=Object.defineProperty&&c();var s=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;l?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!l;e.exports=f},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(17);var u=Object.prototype.propertyIsEnumerable;var c=!u.call({toString:null},"toString");var l=u.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return f(e);try{return f(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var u=i(t);var f=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!u)throw new TypeError("Object.keys called on a non-object");var v=l&&a;if(f&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(u&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var d in t)v&&"prototype"===d||!n.call(t,d)||p.push(String(d));if(c){var m=y(t);for(var g=0;g<s.length;++g)m&&"constructor"===s[g]||!n.call(t,s[g])||p.push(s[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(20)();var u=Object;var c=o.call(Function.call,Array.prototype.push);var l=o.call(Function.call,Object.prototype.propertyIsEnumerable);var s=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=u(t);var f,p,v,y,b,h,d;for(f=1;f<arguments.length;++f){p=u(arguments[f]);y=n(p);var m=i&&(Object.getOwnPropertySymbols||s);if(m){b=m(p);for(v=0;v<b.length;++v){d=b[v];l(p,d)&&c(y,d)}}for(v=0;v<y.length;++v){d=y[v];h=p[d];l(p,d)&&(o[d]=h)}}return o}},6:function(e,t,r){"use strict";var n=r(19);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},774:function(e,t,r){e.exports=r(222)},8:function(e,t,r){e.exports=r(12)}},[774]);return{page:e.default}});