module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([19],{104:function(e,t,r){e.exports=r(88)},11:function(e,t,r){var n=r(40);var a=r(37)("iterator");var o=r(39);e.exports=r(4).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(n(t))}},149:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(35);t["default"]={nav:[{image:n["a"]+"/screenshots/architecture.png",title:"Architecture",link:n["b"]+"/architecture"},{image:n["a"]+"/screenshots/plants.png",title:"Plants",link:n["b"]+"/plants"},{image:n["a"]+"/screenshots/books.png",title:"Books",link:n["b"]+"/books"},{image:n["a"]+"/screenshots/universe-facts.png",title:"Universe Facts",link:n["b"]+"/universe-facts"},{image:n["a"]+"/screenshots/calendar.png",title:"Calendar",link:n["b"]+"/calendar"},{image:n["a"]+"/screenshots/react-wireframe.png",title:"React Wireframe",link:n["b"]+"/react-wireframe"}]}},150:function(e,t,r){"use strict";var n=r(151);var a=r(226);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);o&&(i=i.concat(Object.getOwnPropertySymbols(t)));a(i,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},151:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var i=r(225);var u=Object.prototype.propertyIsEnumerable;var l=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var d=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var y=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var u=i(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!u)throw new TypeError("Object.keys called on a non-object");var v=c&&o;if(s&&t.length>0&&!n.call(t,0))for(var y=0;y<t.length;++y)p.push(String(y));if(u&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var b in t)v&&"prototype"===b||!n.call(t,b)||p.push(String(b));if(l){var m=d(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};y.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(o.call(t)):r(t)}}}else Object.keys=y;return Object.keys||y};e.exports=y},152:function(e,t,r){"use strict";var n=r(151);var a=r(153);var o=function(e){return"undefined"!==typeof e&&null!==e};var i=r(228)();var u=Object;var l=a.call(Function.call,Array.prototype.push);var c=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=u(t);var s,p,v,d,y,h,b;for(s=1;s<arguments.length;++s){p=u(arguments[s]);d=n(p);var m=i&&(Object.getOwnPropertySymbols||f);if(m){y=m(p);for(v=0;v<y.length;++v){b=y[v];c(p,b)&&l(d,b)}}for(v=0;v<d.length;++v){b=d[v];h=p[b];c(p,b)&&(a[b]=h)}}return a}},153:function(e,t,r){"use strict";var n=r(227);e.exports=Function.prototype.bind||n},154:function(e,t,r){"use strict";var n=r(152);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var i in a)o+=i;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(219);var i=r.n(o);var u=r(149);var l=r(232);var c=r.n(l);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function v(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function d(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return h(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){y(t,e);function t(){var e;var r,n;s(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return d(n,(r=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(h(n),"state",{configurable:true,enumerable:true,writable:true,value:{hoveredItemIndex:null}}),r))}v(t,[{key:"handleHover",value:function e(t){this.setState({hoveredItemIndex:t})}},{key:"render",value:function e(){var t=this;var r=this.state.hoveredItemIndex;var n="".concat(c.a.arrow," ion-ios-arrow-thin-right");return a.a.createElement("div",{className:c.a.container},a.a.createElement("div",{className:c.a.content},a.a.createElement("div",{className:c.a.separator}),a.a.createElement("div",{className:c.a.title},"Playground"),a.a.createElement("div",{className:c.a.description})),a.a.createElement("div",{className:c.a.items},u["default"].nav.map(function(e,o){var u=r==o?c.a.item_link_hovered:c.a.item_link;return a.a.createElement("div",{key:o,className:c.a.item},a.a.createElement("div",{className:c.a.item_image,style:{backgroundImage:"url(".concat(e.image,")")}}),a.a.createElement("div",{className:u,onMouseEnter:function e(){return t.handleHover(o)},onMouseLeave:function e(){return t.handleHover(null)}},a.a.createElement(i.a,{href:e.link},a.a.createElement("a",null,e.title)),a.a.createElement(i.a,{href:e.link},a.a.createElement("a",null,a.a.createElement("div",{className:n})))))})))}}]);return t}(n["Component"]);t["default"]=b},219:function(e,t,r){e.exports=r(220)},220:function(e,t,r){"use strict";var n=r(87);var a=r(59);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(184));var i=a(r(221));var u=a(r(70));var l=a(r(62));var c=a(r(63));var f=a(r(71));var s=a(r(72));var p=a(r(209));var v=r(206);var d=n(r(0));var y=a(r(100));var h=a(r(223));var b=n(r(140));var m=r(86);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!w(a))return;var i=window.location.pathname;a=(0,v.resolve)(i,a);o=o?(0,v.resolve)(i,o):a;t.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";b.default[c](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);b.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,b._rewriteUrlForNextExport)(o.href));return d.default.cloneElement(a,o)}}]);return t}(d.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:y.default.oneOfType([y.default.string,y.default.object]).isRequired,as:y.default.oneOfType([y.default.string,y.default.object]),prefetch:y.default.bool,replace:y.default.bool,shallow:y.default.bool,passHref:y.default.bool,scroll:y.default.bool,children:y.default.oneOfType([y.default.element,function(e,t){var r=e[t];"string"===typeof r&&O("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function w(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var O=(0,m.execOnce)(m.warn)},221:function(e,t,r){e.exports=r(222)},222:function(e,t,r){var n=r(4);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},223:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(224);var a=c(n);var o=r(230);var i=c(o);var u=r(231);var l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function d(e){return(0,a["default"])(e,f({},p,v))}function y(e){return e&&e[p]===v}function h(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!y(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,d(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},224:function(e,t,r){"use strict";var n=r(150);var a=r(152);var o=r(154);var i=r(229);var u=o();n(u,{getPolyfill:o,implementation:a,shim:i});e.exports=u},225:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},226:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)a.call(o,t[u],u,t);else for(var l in t)r.call(t,l)&&a.call(o,t[l],l,t)}},227:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==i)throw new TypeError(n+r);var u=a.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,u.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(a.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;l.prototype=new v;v.prototype=null}return l}},228:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==a||true!==i.enumerable)return false}return true}},229:function(e,t,r){"use strict";var n=r(150);var a=r(154);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},230:function(e,t,r){var n=r(153);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},231:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},405:function(e,t,r){e.exports=r(406)},406:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(104);var i=r.n(o);var u=r(218);var l=r(232);var c=r.n(l);t["default"]=function(){return a.a.createElement("div",{className:c.a.application},a.a.createElement(i.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cormorant:300,400|Montserrat:700",rel:"stylesheet"}),a.a.createElement("link",{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"})),a.a.createElement(u["default"],null))}},69:function(e,t,r){var n=r(89);var a=r(90);var o=r(96);function i(e){return n(e)||a(e)||o()}e.exports=i},8:function(e,t,r){r(9);r(7);e.exports=r(11)},88:function(e,t,r){"use strict";var n=r(59);Object.defineProperty(t,"__esModule",{value:true});t.defaultHead=y;t.default=void 0;var a=n(r(78));var o=n(r(69));var i=n(r(70));var u=n(r(62));var l=n(r(63));var c=n(r(71));var f=n(r(72));var s=n(r(0));var p=n(r(100));var v=n(r(97));var d=function(e){(0,f.default)(t,e);function t(){(0,u.default)(this,t);return(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}(0,l.default)(t,[{key:"render",value:function e(){return null}}]);return t}(s.default.Component);Object.defineProperty(d,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{headManager:p.default.object}});function y(){return[s.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}function h(e){var t;return(t=e.map(function(e){return e.props.children}).map(function(e){return s.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){if(s.default.Fragment&&t.type===s.default.Fragment)return e.concat(s.default.Children.toArray(t.props.children));return e.concat(t)},[]).reverse()).concat.apply(t,(0,o.default)(y())).filter(function(e){return!!e}).filter(w()).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return s.default.cloneElement(e,{className:t})})}function b(e){return e}function m(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)}var g=["name","httpEquiv","charSet","itemProp","property"];function w(){var e=new a.default;var t=new a.default;var r=new a.default;var n={};return function(o){if(o.key&&0===o.key.indexOf(".$")){if(e.has(o.key))return false;e.add(o.key)}switch(o.type){case"title":case"base":if(t.has(o.type))return false;t.add(o.type);break;case"meta":for(var i=0,u=g.length;i<u;i++){var l=g[i];if(!o.props.hasOwnProperty(l))continue;if("charSet"===l){if(r.has(l))return false;r.add(l)}else{var c=o.props[l];var f=n[l]||new a.default;if(f.has(c))return false;f.add(c);n[l]=f}}break}return true}}var O=(0,v.default)(h,m,b)(d);t.default=O},89:function(e,t){function r(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}e.exports=r},90:function(e,t,r){var n=r(91);var a=r(95);function o(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}e.exports=o},91:function(e,t,r){e.exports=r(92)},92:function(e,t,r){r(7);r(93);e.exports=r(4).Array.from},93:function(e,t,r){"use strict";var n=r(81);var a=r(36);var o=r(99);var i=r(115);var u=r(116);var l=r(109);var c=r(94);var f=r(111);a(a.S+a.F*!r(117)(function(e){Array.from(e)}),"Array",{from:function e(t){var r=o(t);var a="function"==typeof this?this:Array;var s=arguments.length;var p=s>1?arguments[1]:void 0;var v=void 0!==p;var d=0;var y=f(r);var h,b,m,g;v&&(p=n(p,s>2?arguments[2]:void 0,2));if(void 0==y||a==Array&&u(y)){h=l(r.length);for(b=new a(h);h>d;d++)c(b,d,v?p(r[d],d):r[d])}else for(g=y.call(r),b=new a;!(m=g.next()).done;d++)c(b,d,v?i(g,p,[m.value,d],true):m.value);b.length=d;return b}})},94:function(e,t,r){"use strict";var n=r(76);var a=r(102);e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}},95:function(e,t,r){e.exports=r(8)},96:function(e,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}e.exports=r},97:function(e,t,r){"use strict";var n=r(87);var a=r(59);Object.defineProperty(t,"__esModule",{value:true});t.default=d;var o=a(r(70));var i=a(r(62));var u=a(r(63));var l=a(r(71));var c=a(r(72));var f=a(r(69));var s=a(r(78));var p=n(r(0));var v=r(86);function d(e,t,r){if("function"!==typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function n(a){if("function"!==typeof a)throw new Error("Expected WrappedComponent to be a React component.");var d=new s.default;var y;function h(n){y=e((0,f.default)(d));b.canUseDOM?t.call(n,y):r&&(y=r(y))}var b=function(e){(0,c.default)(t,e);function t(){(0,i.default)(this,t);return(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}(0,u.default)(t,[{key:"componentWillMount",value:function e(){d.add(this);h(this)}},{key:"componentDidUpdate",value:function e(){h(this)}},{key:"componentWillUnmount",value:function e(){d.delete(this);h(this)}},{key:"render",value:function e(){return p.default.createElement(a,null,this.props.children)}}],[{key:"peek",value:function e(){return y}},{key:"rewind",value:function e(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var r=y;y=void 0;d.clear();return r}}]);return t}(p.Component);Object.defineProperty(b,"displayName",{configurable:true,enumerable:true,writable:true,value:"SideEffect(".concat((0,v.getDisplayName)(a),")")});Object.defineProperty(b,"contextTypes",{configurable:true,enumerable:true,writable:true,value:a.contextTypes});Object.defineProperty(b,"canUseDOM",{configurable:true,enumerable:true,writable:true,value:"undefined"!==typeof window});return b}}}},[405]);return{page:e.default}});