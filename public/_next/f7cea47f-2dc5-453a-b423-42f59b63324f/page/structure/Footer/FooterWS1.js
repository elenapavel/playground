module.exports=__NEXT_REGISTER_PAGE("/structure/Footer/FooterWS1",function(){var e=webpackJsonp([57],{124:function(e,t,r){"use strict";var n=r(0);var a=r.n(n);var o=r(194);var l=r.n(o);t["a"]=function(e){var t=e.text,r=e.position;if(null!=t){var n=null;switch(r){case"bottom":n="".concat(l.a.tooltip_arrow_bottom);break;case"left":n="".concat(l.a.tooltip_arrow_left);break;case"right":n="".concat(l.a.tooltip_arrow_right);break;default:n="".concat(l.a.tooltip_arrow_top)}return a.a.createElement("b",{className:l.a.tooltip},t,a.a.createElement("b",{className:n}))}return null}},13:function(e,t,r){"use strict";var n=r(39);var a=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(44));var l=a(r(14));var i=a(r(33));var c=a(r(29));var u=a(r(30));var s=a(r(34));var f=a(r(35));var p=a(r(46));var m=r(45);var v=n(r(0));var y=a(r(41));var b=a(r(16));var h=n(r(43));var d=r(38);var g=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];n=(0,s.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,u.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!O(a))return;var l=window.location.pathname;a=(0,m.resolve)(l,a);o=o?(0,m.resolve)(l,o):a;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace;var u=c?"replace":"push";h.default[u](a,o,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,m.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,m.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,m.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h._rewriteUrlForNextExport)(o.href));return v.default.cloneElement(a,o)}}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,b.default)({href:y.default.oneOfType([y.default.string,y.default.object]).isRequired,as:y.default.oneOfType([y.default.string,y.default.object]),prefetch:y.default.bool,replace:y.default.bool,shallow:y.default.bool,passHref:y.default.bool,scroll:y.default.bool,children:y.default.oneOfType([y.default.element,function(e,t){var r=e[t];"string"===typeof r&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,m.parse)(e,false,true);var r=(0,m.parse)((0,d.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var w=(0,d.execOnce)(d.warn)},14:function(e,t,r){e.exports=r(15)},148:function(e,t,r){"use strict";var n=r(0);var a=r.n(n);var o=r(9);var l=r.n(o);var i=r(124);var c=r(362);var u=r.n(c);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function m(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function v(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return b(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){y(t,e);function t(){var e;var r,n;f(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}m(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var n=this.state.elementWithVisibleTooltip;var o=Object.keys(r);return a.a.createElement("b",{className:u.a.items},o.map(function(e,c){var s=null;switch(e){case"facebook":s="ion-social-facebook";break;case"twitter":s="ion-social-twitter";break;case"googlePlus":s="ion-social-googleplus";break;case"instagram":s="ion-social-instagram-outline";break;default:s=c}if("number"===typeof s){var f="".concat(u.a.error_icon," ion-help");var p="".concat(u.a.error_tooltip_hidden);null!=n&&(p="".concat(u.a.error_tooltip_visible));return a.a.createElement("b",{className:u.a.error,key:c,onMouseEnter:function e(){return t.isTooltipVisible(c)},onMouseLeave:function e(){return t.isTooltipHidden()}},a.a.createElement("b",{className:f}),a.a.createElement("b",{className:p},a.a.createElement(i["a"],{text:"Icon for ".concat(o[s]," not found")})))}return a.a.createElement("b",{className:u.a.item,key:c},a.a.createElement(l.a,{href:r[e]},a.a.createElement("a",null,a.a.createElement("b",{className:s}))))}))}}]);return t}(n["Component"]);t["a"]=h},15:function(e,t,r){var n=r(8);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=b;var n=r(17);var a=u(n);var o=r(23);var l=u(o);var i=r(24);var c=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var m={};function v(e){return(0,a["default"])(e,s({},p,m))}function y(e){return e&&e[p]===m}function b(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!y(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,s({},p,v(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var l=r(22);var i=o();n(i,{getPolyfill:o,implementation:a,shim:l});e.exports=i},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var i=0;i<l;i++)a.call(o,t[i],i,t);else for(var c in t)r.call(t,c)&&a.call(o,t[c],c,t)}},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(n+r);var i=a.call(arguments,1);var c;var u=function(){if(this instanceof c){var e=r.apply(this,i.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(a.call(arguments)))};var s=Math.max(0,r.length-i.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(u);if(r.prototype){var m=function e(){};m.prototype=r.prototype;c.prototype=new m;m.prototype=null}return c}},208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={menu:[{link:"#",name:"Item 1"},{link:"#",name:"Item 2"},{link:"#",name:"Item 3"},{link:"#",name:"Item 4"}],copyright:"© GreatSimple.co 2019. All right reserved.",columns:[{type:"menu",heading:"First Column",items:[{name:"Category 1",link:"#"},{name:"Category 2",link:"#"},{name:"Category 3",link:"#"},{name:"Category 4",link:"#"},{name:"Category 5",link:"#"}]},{type:"menu",heading:"Second Column",items:[{name:"Category 1",link:"#"},{name:"Category 2",link:"#"},{name:"Category 3",link:"#"},{name:"Category 4",link:"#"}]},{type:"address",heading:"Third column",items:{email:"great@simple.co",address:"Flat 10, Great Street, Simple, 89334DF",phone:"+0987654321"}},{type:"social",heading:"Follow us",items:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com"}}]}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==a||true!==l.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var a=r(19);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var u=Object.defineProperty&&c();var s=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;u?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=n(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));a(l,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!u;e.exports=f},304:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(9);var l=r.n(o);var i=r(148);var c=r(208);var u=r(439);var s=r.n(u);t["default"]=function(){return a.a.createElement("b",{className:s.a.section},a.a.createElement("b",{className:s.a.content},c["default"].columns.map(function(e,t){return a.a.createElement("b",{className:s.a.column,key:t},a.a.createElement("b",{className:s.a.heading},e.heading),a.a.createElement("b",{className:s.a.column_content},"menu"==e.type?a.a.createElement("b",{className:s.a.menu_items},e.items.map(function(e,t){return a.a.createElement("b",{className:s.a.menu_item,key:t},a.a.createElement(l.a,{href:e.link},a.a.createElement("a",null,e.name)))})):"address"==e.type?a.a.createElement("b",{className:s.a.contact},null!=e.items.email?a.a.createElement("b",{className:s.a.email},a.a.createElement(l.a,{href:"mailto:".concat(e.items.email)},a.a.createElement("a",null,e.items.email))):null,null!=e.items.address?a.a.createElement("b",{className:s.a.address},e.items.address):null,null!=e.items.phone?a.a.createElement("b",{className:s.a.phone},a.a.createElement(l.a,{href:"tel:".concat(e.items.phone)},a.a.createElement("a",null,e.items.phone))):null):"social"==e.type?a.a.createElement("b",{className:s.a.social_media},a.a.createElement(i["a"],{items:e.items})):null))})),a.a.createElement("b",{className:s.a.separator}),a.a.createElement("b",{className:s.a.to_bottom},a.a.createElement("b",{className:s.a.to_left},c["default"].menu.length?a.a.createElement("b",{className:s.a.menu},c["default"].menu.map(function(e,t){return a.a.createElement("b",{className:s.a.item,key:t},a.a.createElement(l.a,{href:e.link},a.a.createElement("a",null,e.name)))})):null),a.a.createElement("b",{className:s.a.to_right},a.a.createElement("b",{className:s.a.copyright},c["default"].copyright))))}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var l=r(18);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var u=i.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var m=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!m)return f(e);try{return f(e)}catch(e){return false}};var y=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var i=l(t);var f=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var m=u&&o;if(f&&t.length>0&&!n.call(t,0))for(var y=0;y<t.length;++y)p.push(String(y));if(i&&t.length>0)for(var b=0;b<t.length;++b)p.push(String(b));else for(var h in t)m&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(c){var d=v(t);for(var g=0;g<s.length;++g)d&&"constructor"===s[g]||!n.call(t,s[g])||p.push(s[g])}return p};y.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=y;return Object.keys||y};e.exports=y},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(21)();var i=Object;var c=a.call(Function.call,Array.prototype.push);var u=a.call(Function.call,Object.prototype.propertyIsEnumerable);var s=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=i(t);var f,p,m,v,y,b,h;for(f=1;f<arguments.length;++f){p=i(arguments[f]);v=n(p);var d=l&&(Object.getOwnPropertySymbols||s);if(d){y=d(p);for(m=0;m<y.length;++m){h=y[m];u(p,h)&&c(v,h)}}for(m=0;m<v.length;++m){h=v[m];b=p[h];u(p,h)&&(a[h]=b)}}return a}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var l in a)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},725:function(e,t,r){e.exports=r(304)},9:function(e,t,r){e.exports=r(13)}},[725]);return{page:e.default}});