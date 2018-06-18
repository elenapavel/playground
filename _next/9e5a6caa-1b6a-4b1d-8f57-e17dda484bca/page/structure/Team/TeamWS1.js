module.exports=__NEXT_REGISTER_PAGE("/structure/Team/TeamWS1",function(){var e=webpackJsonp([44],{116:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(8);var i=r.n(a);var l=r(160);var u=r.n(l);var c=function(e){var t=e.text,r=e.position;if(null!=t){var n=null;switch(r){case"bottom":n="".concat(u.a.tooltip_arrow_bottom);break;case"left":n="".concat(u.a.tooltip_arrow_left);break;case"right":n="".concat(u.a.tooltip_arrow_right);break;default:n="".concat(u.a.tooltip_arrow_top)}return o.a.createElement("b",{className:u.a.tooltip},t,o.a.createElement("b",{className:n}))}return null};var s=r(161);var f=r.n(s);function p(e){p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return p(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function y(e,t,r){t&&v(e.prototype,t);r&&v(e,r);return e}function h(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return d(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){m(t,e);function t(){var e;var r,n;b(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return h(n,(r=n=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(d(n),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}y(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var n=this.state.elementWithVisibleTooltip;var a=Object.keys(r);return o.a.createElement("b",{className:f.a.items},a.map(function(e,l){var u=null;switch(e){case"facebook":u="ion-social-facebook";break;case"twitter":u="ion-social-twitter";break;case"googlePlus":u="ion-social-googleplus";break;case"instagram":u="ion-social-instagram-outline";break;default:u=l}if("number"===typeof u){var s="".concat(f.a.error_icon," ion-help");var p="".concat(f.a.error_tooltip_hidden);null!=n&&(p="".concat(f.a.error_tooltip_visible));return o.a.createElement("b",{className:f.a.error,key:l,onMouseEnter:function e(){return t.isTooltipVisible(l)},onMouseLeave:function e(){return t.isTooltipHidden()}},o.a.createElement("b",{className:s}),o.a.createElement("b",{className:p},o.a.createElement(c,{text:"Icon for ".concat(a[u]," not found")})))}return o.a.createElement("b",{className:f.a.item,key:l},o.a.createElement(i.a,{href:r[e]},o.a.createElement("a",null,o.a.createElement("b",{className:u}))))}))}}]);return t}(n["Component"]);var O=t["a"]=g},13:function(e,t,r){"use strict";var n=r(42);var o=r(29);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(70));var i=o(r(14));var l=o(r(37));var u=o(r(30));var c=o(r(31));var s=o(r(38));var f=o(r(39));var p=o(r(72));var b=r(71);var v=n(r(0));var y=o(r(43));var h=o(r(16));var m=n(r(69));var d=r(41);var g=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,u.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];n=(0,s.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var i=window.location.pathname;o=(0,b.resolve)(i,o);a=a?(0,b.resolve)(i,a):o;t.preventDefault();var l=this.props.scroll;null==l&&(l=a.indexOf("#")<0);var u=this.props.replace;var c=u?"replace":"push";m.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(l){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,b.resolve)(t,this.href);m.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,b.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,b.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var o=v.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,m._rewriteUrlForNextExport)(a.href));return v.default.cloneElement(o,a)}}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:y.default.oneOfType([y.default.string,y.default.object]).isRequired,as:y.default.oneOfType([y.default.string,y.default.object]),prefetch:y.default.bool,replace:y.default.bool,shallow:y.default.bool,passHref:y.default.bool,scroll:y.default.bool,children:y.default.oneOfType([y.default.element,function(e,t){var r=e[t];"string"===typeof r&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,b.parse)(e,false,true);var r=(0,b.parse)((0,d.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var w=(0,d.execOnce)(d.warn)},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(2);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(17);var o=c(n);var a=r(23);var i=c(a);var l=r(24);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var b={};function v(e){return(0,o["default"])(e,s({},p,b))}function y(e){return e&&e[p]===b}function h(e){if(!(0,u["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!y(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,s({},p,v(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var i=r(22);var l=a();n(l,{getPolyfill:a,implementation:o,shim:i});e.exports=l},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var l=0;l<i;l++)o.call(a,t[l],l,t);else for(var u in t)r.call(t,u)&&o.call(a,t[u],u,t)}},191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(116);var i=r(34);var l=r(305);var u=r.n(l);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function b(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){y(t,e);function t(){s(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,[{key:"selectMemberByIndex",value:function e(t){"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.avatar,l=r.name,c=r.position,s=r.description,f=r.socialMedia,p=r.index,b=r.onSelect,v=r.areDetailsVisible;var y="".concat(v?u.a.member_expanded:u.a.member_collapsed);return o.a.createElement("b",{className:y,onClick:function e(){return t.selectMemberByIndex(p)}},o.a.createElement("b",{className:u.a.avatar,style:{backgroundImage:"url(".concat(n,")")}}),o.a.createElement("b",{className:u.a.details},o.a.createElement(i["a"],{title:l}),o.a.createElement("b",{className:u.a.position},c),o.a.createElement("b",{className:u.a.description},s),o.a.createElement("b",{className:u.a.social_media},o.a.createElement(a["a"],{items:f}))))}}]);return t}(n["Component"]);t["default"]=h},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var l=o.call(arguments,1);var u;var c=function(){if(this instanceof u){var e=r.apply(this,l.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,l.concat(o.call(arguments)))};var s=Math.max(0,r.length-l.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);u=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var b=function e(){};b.prototype=r.prototype;u.prototype=new b;b.prototype=null}return u}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},27:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(95);var i=r.n(a);t["a"]=function(e){var t=e.title;return o.a.createElement("b",{className:i.a.title},t)}},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(27);var i=r(191);var l=r(388);var u=r.n(l);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function b(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){v(t,e);function t(){var e;var r,n;s(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return b(n,(r=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(y(n),"state",{configurable:true,enumerable:true,writable:true,value:{visibleMemberDetailsIndex:null}}),r))}p(t,[{key:"selectVisibleMemberDetailsByIndex",value:function e(t){this.state.visibleMemberDetailsIndex==t?this.hideMemberDetails():this.setState({visibleMemberDetailsIndex:t})}},{key:"hideMemberDetails",value:function e(){this.setState({visibleMemberDetailsIndex:null})}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.members,l=r.title;var c=this.state.visibleMemberDetailsIndex;return o.a.createElement("b",{className:u.a.section},o.a.createElement(a["a"],{title:l||"Section Title"}),o.a.createElement("b",{className:u.a.section_content},n.length&&n.map(function(e,r){return o.a.createElement("b",{className:u.a.section_item,key:r},o.a.createElement(i["default"],{areDetailsVisible:r==c,index:r,avatar:e.avatar,name:e.name,position:e.position,description:e.description,socialMedia:e.socialMedia,onSelect:function e(r){return t.selectVisibleMemberDetailsByIndex(r)}}))})))}}]);return t}(n["Component"]);t["default"]=h},3:function(e,t,r){"use strict";var n=r(4);var o=r(19);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var l=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var u=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&u();var s=function(e,t,r,n){if(t in e&&(!l(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!c;e.exports=f},34:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(97);var i=r.n(a);t["a"]=function(e){var t=e.title;return o.a.createElement("b",{className:i.a.title},t)}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(18);var l=Object.prototype.propertyIsEnumerable;var u=!l.call({toString:null},"toString");var c=l.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var b=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!b)return f(e);try{return f(e)}catch(e){return false}};var y=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var l=i(t);var f=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!l)throw new TypeError("Object.keys called on a non-object");var b=c&&a;if(f&&t.length>0&&!n.call(t,0))for(var y=0;y<t.length;++y)p.push(String(y));if(l&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var m in t)b&&"prototype"===m||!n.call(t,m)||p.push(String(m));if(u){var d=v(t);for(var g=0;g<s.length;++g)d&&"constructor"===s[g]||!n.call(t,s[g])||p.push(s[g])}return p};y.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=y;return Object.keys||y};e.exports=y},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(21)();var l=Object;var u=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var s=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=l(t);var f,p,b,v,y,h,m;for(f=1;f<arguments.length;++f){p=l(arguments[f]);v=n(p);var d=i&&(Object.getOwnPropertySymbols||s);if(d){y=d(p);for(b=0;b<y.length;++b){m=y[b];c(p,m)&&u(v,m)}}for(b=0;b<v.length;++b){m=v[b];h=p[m];c(p,m)&&(o[m]=h)}}return o}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},671:function(e,t,r){e.exports=r(271)},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},8:function(e,t,r){e.exports=r(13)}},[671]);return{page:e.default}});