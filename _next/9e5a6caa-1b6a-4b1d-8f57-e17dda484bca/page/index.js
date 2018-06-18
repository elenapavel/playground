module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([18],{122:function(e,t,r){"use strict";var n=r(29);Object.defineProperty(t,"__esModule",{value:true});t.defaultHead=y;t.default=void 0;var a=n(r(108));var o=n(r(96));var u=n(r(37));var i=n(r(30));var c=n(r(31));var l=n(r(38));var f=n(r(39));var s=n(r(0));var p=n(r(43));var v=n(r(131));var d=function(e){(0,f.default)(t,e);function t(){(0,i.default)(this,t);return(0,l.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,c.default)(t,[{key:"render",value:function e(){return null}}]);return t}(s.default.Component);Object.defineProperty(d,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{headManager:p.default.object}});function y(){return[s.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}function h(e){var t;return(t=e.map(function(e){return e.props.children}).map(function(e){return s.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){if(s.default.Fragment&&t.type===s.default.Fragment)return e.concat(s.default.Children.toArray(t.props.children));return e.concat(t)},[]).reverse()).concat.apply(t,(0,o.default)(y())).filter(function(e){return!!e}).filter(w()).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return s.default.cloneElement(e,{className:t})})}function b(e){return e}function m(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)}var g=["name","httpEquiv","charSet","itemProp","property"];function w(){var e=new a.default;var t=new a.default;var r=new a.default;var n={};return function(o){if(o.key&&0===o.key.indexOf(".$")){if(e.has(o.key))return false;e.add(o.key)}switch(o.type){case"title":case"base":if(t.has(o.type))return false;t.add(o.type);break;case"meta":for(var u=0,i=g.length;u<i;u++){var c=g[u];if(!o.props.hasOwnProperty(c))continue;if("charSet"===c){if(r.has(c))return false;r.add(c)}else{var l=o.props[c];var f=n[c]||new a.default;if(f.has(l))return false;f.add(l);n[c]=f}}break}return true}}var O=(0,v.default)(h,m,b)(d);t.default=O},123:function(e,t){function r(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}e.exports=r},124:function(e,t,r){var n=r(125);var a=r(129);function o(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}e.exports=o},125:function(e,t,r){e.exports=r(126)},126:function(e,t,r){r(28);r(127);e.exports=r(2).Array.from},127:function(e,t,r){"use strict";var n=r(114);var a=r(67);var o=r(133);var u=r(146);var i=r(147);var c=r(139);var l=r(128);var f=r(144);a(a.S+a.F*!r(148)(function(e){Array.from(e)}),"Array",{from:function e(t){var r=o(t);var a="function"==typeof this?this:Array;var s=arguments.length;var p=s>1?arguments[1]:void 0;var v=void 0!==p;var d=0;var y=f(r);var h,b,m,g;v&&(p=n(p,s>2?arguments[2]:void 0,2));if(void 0==y||a==Array&&i(y)){h=c(r.length);for(b=new a(h);h>d;d++)l(b,d,v?p(r[d],d):r[d])}else for(g=y.call(r),b=new a;!(m=g.next()).done;d++)l(b,d,v?u(g,p,[m.value,d],true):m.value);b.length=d;return b}})},128:function(e,t,r){"use strict";var n=r(107);var a=r(136);e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}},129:function(e,t,r){e.exports=r(33)},13:function(e,t,r){"use strict";var n=r(42);var a=r(29);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(70));var u=a(r(14));var i=a(r(37));var c=a(r(30));var l=a(r(31));var f=a(r(38));var s=a(r(39));var p=a(r(72));var v=r(71);var d=n(r(0));var y=a(r(43));var h=a(r(16));var b=n(r(69));var m=r(41);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),u=1;u<a;u++)o[u-1]=arguments[u];n=(0,f.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,l.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!w(a))return;var u=window.location.pathname;a=(0,v.resolve)(u,a);o=o?(0,v.resolve)(u,o):a;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace;var l=c?"replace":"push";b.default[l](a,o,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);b.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,b._rewriteUrlForNextExport)(o.href));return d.default.cloneElement(a,o)}}]);return t}(d.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:y.default.oneOfType([y.default.string,y.default.object]).isRequired,as:y.default.oneOfType([y.default.string,y.default.object]),prefetch:y.default.bool,replace:y.default.bool,shallow:y.default.bool,passHref:y.default.bool,scroll:y.default.bool,children:y.default.oneOfType([y.default.element,function(e,t){var r=e[t];"string"===typeof r&&O("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function w(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var O=(0,m.execOnce)(m.warn)},130:function(e,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}e.exports=r},131:function(e,t,r){"use strict";var n=r(42);var a=r(29);Object.defineProperty(t,"__esModule",{value:true});t.default=d;var o=a(r(37));var u=a(r(30));var i=a(r(31));var c=a(r(38));var l=a(r(39));var f=a(r(96));var s=a(r(108));var p=n(r(0));var v=r(41);function d(e,t,r){if("function"!==typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function n(a){if("function"!==typeof a)throw new Error("Expected WrappedComponent to be a React component.");var d=new s.default;var y;function h(n){y=e((0,f.default)(d));b.canUseDOM?t.call(n,y):r&&(y=r(y))}var b=function(e){(0,l.default)(t,e);function t(){(0,u.default)(this,t);return(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}(0,i.default)(t,[{key:"componentWillMount",value:function e(){d.add(this);h(this)}},{key:"componentDidUpdate",value:function e(){h(this)}},{key:"componentWillUnmount",value:function e(){d.delete(this);h(this)}},{key:"render",value:function e(){return p.default.createElement(a,null,this.props.children)}}],[{key:"peek",value:function e(){return y}},{key:"rewind",value:function e(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var r=y;y=void 0;d.clear();return r}}]);return t}(p.Component);Object.defineProperty(b,"displayName",{configurable:true,enumerable:true,writable:true,value:"SideEffect(".concat((0,v.getDisplayName)(a),")")});Object.defineProperty(b,"contextTypes",{configurable:true,enumerable:true,writable:true,value:a.contextTypes});Object.defineProperty(b,"canUseDOM",{configurable:true,enumerable:true,writable:true,value:"undefined"!==typeof window});return b}}},134:function(e,t,r){e.exports=r(122)},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(2);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(17);var a=l(n);var o=r(23);var u=l(o);var i=r(24);var c=l(i);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function d(e){return(0,a["default"])(e,f({},p,v))}function y(e){return e&&e[p]===v}function h(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,u["default"])(e,p)&&!y(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,d(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,u["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var u=r(22);var i=o();n(i,{getPolyfill:o,implementation:a,shim:u});e.exports=i},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var u=t.length;if(u===+u)for(var i=0;i<u;i++)a.call(o,t[i],i,t);else for(var c in t)r.call(t,c)&&a.call(o,t[c],c,t)}},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var u="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==u)throw new TypeError(n+r);var i=a.call(arguments,1);var c;var l=function(){if(this instanceof c){var e=r.apply(this,i.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(a.call(arguments)))};var f=Math.max(0,r.length-i.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);c=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(l);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var u=Object.getOwnPropertyDescriptor(t,r);if(u.value!==a||true!==u.enumerable)return false}return true}},214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={nav:[{image:n["b"]+"/screenshots/architecture.png",title:"Architecture",link:"".concat(n["a"],"/architecture")},{image:n["b"]+"/screenshots/plants.png",title:"Plants",link:"".concat(n["a"],"/plants")},{image:n["b"]+"/screenshots/books.png",title:"Books",link:"".concat(n["a"],"/books")},{image:n["b"]+"/screenshots/universe-facts.png",title:"Universe Facts",link:"".concat(n["a"],"/universe-facts")},{image:n["b"]+"/screenshots/calendar.png",title:"Calendar",link:"".concat(n["a"],"/calendar")},{image:n["b"]+"/screenshots/react-wireframe.png",title:"React Wireframe",link:"".concat(n["a"],"/react-wireframe")},{image:n["b"]+"/screenshots/structure.png",title:"Structure components examples",link:"".concat(n["a"],"/structure")}]}},22:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var a=r(19);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var u=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var l=Object.defineProperty&&c();var f=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;l?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var u=n(t);o&&(u=u.concat(Object.getOwnPropertySymbols(t)));a(u,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!l;e.exports=s},33:function(e,t,r){r(35);r(28);e.exports=r(36)},339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(8);var u=r.n(o);var i=r(214);var c=r(340);var l=r.n(c);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function v(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function d(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return h(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){y(t,e);function t(){var e;var r,n;s(this,t);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return d(n,(r=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(h(n),"state",{configurable:true,enumerable:true,writable:true,value:{hoveredItemIndex:null}}),r))}v(t,[{key:"handleHover",value:function e(t){this.setState({hoveredItemIndex:t})}},{key:"render",value:function e(){var t=this;var r=this.state.hoveredItemIndex;var n="".concat(l.a.arrow," ion-ios-arrow-thin-right");return a.a.createElement("div",{className:l.a.container},a.a.createElement("div",{className:l.a.content},a.a.createElement("div",{className:l.a.separator}),a.a.createElement("div",{className:l.a.title},"Playground"),a.a.createElement("div",{className:l.a.description})),a.a.createElement("div",{className:l.a.items},i["default"].nav.map(function(e,o){var i=r==o?l.a.item_link_hovered:l.a.item_link;return a.a.createElement("div",{key:o,className:l.a.item},a.a.createElement("div",{className:l.a.item_image,style:{backgroundImage:"url(".concat(e.image,")")}}),a.a.createElement("div",{className:i,onMouseEnter:function e(){return t.handleHover(o)},onMouseLeave:function e(){return t.handleHover(null)}},a.a.createElement(u.a,{href:e.link},a.a.createElement("a",null,e.title)),a.a.createElement(u.a,{href:e.link},a.a.createElement("a",null,a.a.createElement("div",{className:n})))))})))}}]);return t}(n["Component"]);t["default"]=b},36:function(e,t,r){var n=r(75);var a=r(68)("iterator");var o=r(74);e.exports=r(2).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(n(t))}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var u=r(18);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var l=i.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var d=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var y=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var i=u(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var v=l&&o;if(s&&t.length>0&&!n.call(t,0))for(var y=0;y<t.length;++y)p.push(String(y));if(i&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var b in t)v&&"prototype"===b||!n.call(t,b)||p.push(String(b));if(c){var m=d(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};y.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return u(t)?r(o.call(t)):r(t)}}}else Object.keys=y;return Object.keys||y};e.exports=y},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var u=r(21)();var i=Object;var c=a.call(Function.call,Array.prototype.push);var l=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=u?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=i(t);var s,p,v,d,y,h,b;for(s=1;s<arguments.length;++s){p=i(arguments[s]);d=n(p);var m=u&&(Object.getOwnPropertySymbols||f);if(m){y=m(p);for(v=0;v<y.length;++v){b=y[v];l(p,b)&&c(d,b)}}for(v=0;v<d.length;++v){b=d[v];h=p[b];l(p,b)&&(a[b]=h)}}return a}},569:function(e,t,r){e.exports=r(570)},570:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(134);var u=r.n(o);var i=r(339);var c=r(340);var l=r.n(c);t["default"]=function(){return a.a.createElement("div",{className:l.a.application},a.a.createElement(u.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cormorant:300,400|Montserrat:700",rel:"stylesheet"}),a.a.createElement("link",{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"})),a.a.createElement(i["default"],null))}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var u in a)o+=u;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},8:function(e,t,r){e.exports=r(13)},96:function(e,t,r){var n=r(123);var a=r(124);var o=r(130);function u(e){return n(e)||a(e)||o()}e.exports=u}},[569]);return{page:e.default}});