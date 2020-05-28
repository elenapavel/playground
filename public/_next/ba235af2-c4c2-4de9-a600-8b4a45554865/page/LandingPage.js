module.exports=__NEXT_REGISTER_PAGE("/LandingPage",function(){var e=webpackJsonp([58],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return u});r.d(t,"b",function(){return l});r.d(t,"c",function(){return f});var n=r(2);var a=r.n(n);var o=a()(),i=o.publicRuntimeConfig;var u=i.base;var c=i.url;var l=i.static.default;var f=i.static.structure},13:function(e,t,r){"use strict";var n=r(38);var a=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(44));var i=a(r(14));var u=a(r(32));var c=a(r(28));var l=a(r(29));var f=a(r(33));var s=a(r(34));var p=a(r(46));var v=r(45);var y=n(r(0));var b=a(r(40));var d=a(r(16));var h=n(r(43));var m=r(36);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,l.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!O(a))return;var i=window.location.pathname;a=(0,v.resolve)(i,a);o=o?(0,v.resolve)(i,o):a;t.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var c=this.props.replace;var l=c?"replace":"push";h.default[l](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var a=y.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h._rewriteUrlForNextExport)(o.href));return y.default.cloneElement(a,o)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(9);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(17);var a=l(n);var o=r(23);var i=l(o);var u=r(24);var c=l(u);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,a["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function d(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,y(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var i=r(22);var u=o();n(u,{getPolyfill:o,implementation:a,shim:i});e.exports=u},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)a.call(o,t[u],u,t);else for(var c in t)r.call(t,c)&&a.call(o,t[c],c,t)}},2:function(e,t,r){e.exports=r(10)},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==i)throw new TypeError(n+r);var u=a.call(arguments,1);var c;var l=function(){if(this instanceof c){var e=r.apply(this,u.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(a.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);c=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(l);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==a||true!==i.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},261:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={nav:[{image:n["b"]+"/screenshots/simple.png",title:"Gradient",link:"".concat(n["a"],"/gradient")},{image:n["b"]+"/screenshots/plants.png",title:"Plants",link:"".concat(n["a"],"/plants")},{image:n["b"]+"/screenshots/architecture.png",title:"Architecture",link:"".concat(n["a"],"/architecture")},{image:n["b"]+"/screenshots/calendar.png",title:"Calendar",link:"".concat(n["a"],"/calendar")},{image:n["b"]+"/screenshots/books.png",title:"Books",link:"".concat(n["a"],"/books")},{image:n["b"]+"/screenshots/structure.png",title:"Structure components examples",link:"".concat(n["a"],"/structure")},{image:n["b"]+"/screenshots/universe-facts.png",title:"Universe Facts",link:"".concat(n["a"],"/universe-facts")},{image:n["b"]+"/screenshots/react-wireframe.png",title:"React Wireframe",link:"".concat(n["a"],"/react-wireframe")}]}},3:function(e,t,r){"use strict";var n=r(4);var a=r(19);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var l=Object.defineProperty&&c();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;l?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);o&&(i=i.concat(Object.getOwnPropertySymbols(t)));a(i,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!l;e.exports=s},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var i=r(18);var u=Object.prototype.propertyIsEnumerable;var c=!u.call({toString:null},"toString");var l=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var u=i(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!u)throw new TypeError("Object.keys called on a non-object");var v=l&&o;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(u&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(c){var m=y(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},421:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(8);var i=r.n(o);var u=r(261);var c=r(422);var l=r.n(c);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function v(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return d(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){b(t,e);function t(){var e;var r,n;s(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return y(n,(r=n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(d(n),"state",{configurable:true,enumerable:true,writable:true,value:{hoveredItemIndex:null}}),r))}v(t,[{key:"handleHover",value:function e(t){this.setState({hoveredItemIndex:t})}},{key:"render",value:function e(){var t=this;var r=this.state.hoveredItemIndex;var n="".concat(l.a.arrow," ion-ios-arrow-thin-right");return a.a.createElement("div",{className:l.a.container},a.a.createElement("div",{className:l.a.content},a.a.createElement("div",{className:l.a.separator}),a.a.createElement("div",{className:l.a.title},"Playground"),a.a.createElement("div",{className:l.a.description})),a.a.createElement("div",{className:l.a.items},u["default"].nav.map(function(e,o){var u=r==o?l.a.item_link_hovered:l.a.item_link;return a.a.createElement("div",{key:o,className:l.a.item},a.a.createElement("div",{className:l.a.item_image,style:{backgroundImage:"url(".concat(e.image,")")}}),a.a.createElement("div",{className:u,onMouseEnter:function e(){return t.handleHover(o)},onMouseLeave:function e(){return t.handleHover(null)}},a.a.createElement(i.a,{href:e.link},a.a.createElement("a",null,e.title)),a.a.createElement(i.a,{href:e.link},a.a.createElement("a",null,a.a.createElement("div",{className:n})))))})))}}]);return t}(n["Component"]);t["default"]=h},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var i=r(21)();var u=Object;var c=a.call(Function.call,Array.prototype.push);var l=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=u(t);var s,p,v,y,b,d,h;for(s=1;s<arguments.length;++s){p=u(arguments[s]);y=n(p);var m=i&&(Object.getOwnPropertySymbols||f);if(m){b=m(p);for(v=0;v<b.length;++v){h=b[v];l(p,h)&&c(y,h)}}for(v=0;v<y.length;++v){h=y[v];d=p[h];l(p,h)&&(a[h]=d)}}return a}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},672:function(e,t,r){e.exports=r(421)},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var i in a)o+=i;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},8:function(e,t,r){e.exports=r(13)}},[672]);return{page:e.default}});