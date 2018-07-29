module.exports=__NEXT_REGISTER_PAGE("/structure/Footer",function(){var e=webpackJsonp([21],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r.d(t,"b",function(){return u});var a=r(2);var n=r.n(a);var o=n()(),l=o.publicRuntimeConfig;var i=l.base;var c=l.url;var u=l.static},12:function(e,t,r){"use strict";var a=r(38);var n=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=n(r(44));var l=n(r(13));var i=n(r(32));var c=n(r(28));var u=n(r(29));var s=n(r(33));var f=n(r(34));var p=n(r(46));var m=r(45);var v=a(r(0));var b=n(r(40));var y=n(r(15));var d=a(r(43));var h=r(36);var g=function(e){(0,f.default)(t,e);function t(e){var r;var a;(0,c.default)(this,t);for(var n=arguments.length,o=new Array(n>1?n-1:0),l=1;l<n;l++)o[l-1]=arguments[l];a=(0,s.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(o)));a.linkClicked=a.linkClicked.bind((0,p.default)(a));a.formatUrls(e);return a}(0,u.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var a=this.props.shallow;var n=this.href,o=this.as;if(!E(n))return;var l=window.location.pathname;n=(0,m.resolve)(l,n);o=o?(0,m.resolve)(l,o):n;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace;var u=c?"replace":"push";d.default[u](n,o,{shallow:a}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,m.resolve)(t,this.href);d.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,m.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,m.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,a=this.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var n=v.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=a||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,d._rewriteUrlForNextExport)(o.href));return v.default.cloneElement(n,o)}}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,y.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function E(e){var t=(0,m.parse)(e,false,true);var r=(0,m.parse)((0,h.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var w=(0,h.execOnce)(h.warn)},13:function(e,t,r){e.exports=r(14)},14:function(e,t,r){var a=r(9);var n=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function e(t){return n.stringify.apply(n,arguments)}},146:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(310);var l=r.n(o);t["default"]=function(e){var t=e.text,r=e.position;if(null!=t){var a=null;switch(r){case"bottom":a="".concat(l.a.tooltip_arrow_bottom);break;case"left":a="".concat(l.a.tooltip_arrow_left);break;case"right":a="".concat(l.a.tooltip_arrow_right);break;default:a="".concat(l.a.tooltip_arrow_top)}return n.a.createElement("b",{className:l.a.tooltip},t,n.a.createElement("b",{className:a}))}return null}},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(312);var l=r.n(o);t["default"]=function(e){var t=e.text,r=e.position;if(null!=t){var a=null;switch(r){case"bottom":a="".concat(l.a.tooltip_arrow_bottom);break;case"left":a="".concat(l.a.tooltip_arrow_left);break;case"right":a="".concat(l.a.tooltip_arrow_right);break;default:a="".concat(l.a.tooltip_arrow_top)}return n.a.createElement("b",{className:l.a.tooltip},t,n.a.createElement("b",{className:a}))}return null}},15:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=y;var a=r(16);var n=u(a);var o=r(22);var l=u(o);var i=r(23);var c=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var m={};function v(e){return(0,n["default"])(e,s({},p,m))}function b(e){return e&&e[p]===m}function y(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,n["default"])({},e,s({},p,v(function(){function t(t,r,a){var n=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(n.length>0)return new TypeError(String(a)+": unknown props found: "+String(n.join(", ")));return null}return t}())))}e.exports=t["default"]},16:function(e,t,r){"use strict";var a=r(3);var n=r(5);var o=r(7);var l=r(21);var i=o();a(i,{getPolyfill:o,implementation:n,shim:l});e.exports=i},17:function(e,t,r){"use strict";var a=Object.prototype.toString;e.exports=function e(t){var r=a.call(t);var n="[object Arguments]"===r;n||(n="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===a.call(t.callee));return n}},18:function(e,t){var r=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;e.exports=function e(t,n,o){if("[object Function]"!==a.call(n))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var i=0;i<l;i++)n.call(o,t[i],i,t);else for(var c in t)r.call(t,c)&&n.call(o,t[c],c,t)}},19:function(e,t,r){"use strict";var a="Function.prototype.bind called on incompatible ";var n=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(a+r);var i=n.call(arguments,1);var c;var u=function(){if(this instanceof c){var e=r.apply(this,i.concat(n.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(n.call(arguments)))};var s=Math.max(0,r.length-i.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(u);if(r.prototype){var m=function e(){};m.prototype=r.prototype;c.prototype=new m;m.prototype=null}return c}},2:function(e,t,r){e.exports=r(24)},20:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var a=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(a))return false;var n=42;t[r]=n;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==n||true!==l.enumerable)return false}return true}},207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={menu:[{link:"#",name:"Item 1"},{link:"#",name:"Item 2"},{link:"#",name:"Item 3"},{link:"#",name:"Item 4"}],copyright:"© GreatSimple.co 2019. All right reserved.",columns:[{type:"menu",heading:"First Column",items:[{name:"Category 1",link:"#"},{name:"Category 2",link:"#"},{name:"Category 3",link:"#"},{name:"Category 4",link:"#"},{name:"Category 5",link:"#"}]},{type:"menu",heading:"Second Column",items:[{name:"Category 1",link:"#"},{name:"Category 2",link:"#"},{name:"Category 3",link:"#"},{name:"Category 4",link:"#"}]},{type:"address",heading:"Third column",items:{email:"great@simple.co",address:"Flat 10, Great Street, Simple, 89334DF",phone:"+0987654321"}},{type:"social",heading:"Follow us",items:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com"}}]}},208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(8);var l=r.n(o);var i=r(146);var c=r(370);var u=r.n(c);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function m(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function v(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return y(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){b(t,e);function t(){var e;var r,a;f(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return v(a,(r=a=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(y(a),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}m(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var a=this.state.elementWithVisibleTooltip;var o=Object.keys(r);return n.a.createElement("b",{className:u.a.items},o.map(function(e,c){var s=null;switch(e){case"facebook":s="ion-social-facebook";break;case"twitter":s="ion-social-twitter";break;case"googlePlus":s="ion-social-googleplus";break;case"instagram":s="ion-social-instagram-outline";break;default:s=c}if("number"===typeof s){var f="".concat(u.a.error_icon," ion-help");var p="".concat(u.a.error_tooltip_hidden);null!=a&&(p="".concat(u.a.error_tooltip_visible));return n.a.createElement("b",{className:u.a.error,key:c,onMouseEnter:function e(){return t.isTooltipVisible(c)},onMouseLeave:function e(){return t.isTooltipHidden()}},n.a.createElement("b",{className:f}),n.a.createElement("b",{className:p},n.a.createElement(i["default"],{text:"Icon for ".concat(o[s]," not found")})))}return n.a.createElement("b",{className:u.a.item,key:c},n.a.createElement(l.a,{href:r[e]},n.a.createElement("a",null,n.a.createElement("b",{className:s}))))}))}}]);return t}(a["Component"]);t["default"]=d},209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);t["default"]={logo:"".concat(a["b"],"/images/dropbox_logo.png"),copyright:"© GreatSimple.co 2019. All right reserved.",contact:{address:"Flat 10, Great Street, Simple, 89334DF",phone:"+0987654321"},social:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com"}}},21:function(e,t,r){"use strict";var a=r(3);var n=r(7);e.exports=function e(){var t=n();a(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(371);var l=r.n(o);t["default"]=function(e){var t=e.image;return n.a.createElement("b",{className:l.a.logo},n.a.createElement("img",{src:t}))}},211:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(8);var l=r.n(o);var i=r(147);var c=r(372);var u=r.n(c);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function m(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function v(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return y(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){b(t,e);function t(){var e;var r,a;f(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return v(a,(r=a=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(y(a),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}m(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var a=this.state.elementWithVisibleTooltip;var o=Object.keys(r);return n.a.createElement("b",{className:u.a.items},o.map(function(e,c){var s=null;switch(e){case"facebook":s="ion-social-facebook";break;case"twitter":s="ion-social-twitter";break;case"googlePlus":s="ion-social-googleplus";break;case"instagram":s="ion-social-instagram-outline";break;default:s=c}if("number"===typeof s){var f="".concat(u.a.error_icon," ion-help");var p="".concat(u.a.error_tooltip_hidden);null!=a&&(p="".concat(u.a.error_tooltip_visible));return n.a.createElement("b",{className:u.a.error,key:c,onMouseEnter:function e(){return t.isTooltipVisible(c)},onMouseLeave:function e(){return t.isTooltipHidden()}},n.a.createElement("b",{className:f}),n.a.createElement("b",{className:p},n.a.createElement(i["default"],{text:"Icon for ".concat(o[s]," not found")})))}return n.a.createElement("b",{className:u.a.item,key:c},n.a.createElement(l.a,{href:r[e]},n.a.createElement("a",null,n.a.createElement("b",{className:s}))))}))}}]);return t}(a["Component"]);t["default"]=d},212:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={menu:[{link:"#",name:"Item 1"},{link:"#",name:"Item 2"},{link:"#",name:"Item 3"},{link:"#",name:"Item 4"}],copyright:"© GreatSimple.co 2019. All right reserved.",getPlatform:{text:"Download our app",link:"#"}}},22:function(e,t,r){var a=r(6);e.exports=a.call(Function.call,Object.prototype.hasOwnProperty)},23:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=a;function a(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var a=r(4);var n=r(18);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var u=Object.defineProperty&&c();var s=function(e,t,r,a){if(t in e&&(!i(a)||!a()))return;u?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=a(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));n(l,function(a){s(e,a,t[a],r[a])})};f.supportsDescriptors=!!u;e.exports=f},309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(8);var l=r.n(o);var i=r(208);var c=r(207);var u=r(451);var s=r.n(u);t["default"]=function(){return n.a.createElement("b",{className:s.a.section},n.a.createElement("b",{className:s.a.content},c["default"].columns.map(function(e,t){return n.a.createElement("b",{className:s.a.column,key:t},n.a.createElement("b",{className:s.a.heading},e.heading),n.a.createElement("b",{className:s.a.column_content},"menu"==e.type?n.a.createElement("b",{className:s.a.menu_items},e.items.map(function(e,t){return n.a.createElement("b",{className:s.a.menu_item,key:t},n.a.createElement(l.a,{href:e.link},n.a.createElement("a",null,e.name)))})):"address"==e.type?n.a.createElement("b",{className:s.a.contact},null!=e.items.email?n.a.createElement("b",{className:s.a.email},n.a.createElement(l.a,{href:"mailto:".concat(e.items.email)},n.a.createElement("a",null,e.items.email))):null,null!=e.items.address?n.a.createElement("b",{className:s.a.address},e.items.address):null,null!=e.items.phone?n.a.createElement("b",{className:s.a.phone},n.a.createElement(l.a,{href:"tel:".concat(e.items.phone)},n.a.createElement("a",null,e.items.phone))):null):"social"==e.type?n.a.createElement("b",{className:s.a.social_media},n.a.createElement(i["default"],{items:e.items})):null))})),n.a.createElement("b",{className:s.a.separator}),n.a.createElement("b",{className:s.a.to_bottom},n.a.createElement("b",{className:s.a.to_left},c["default"].menu.length?n.a.createElement("b",{className:s.a.menu},c["default"].menu.map(function(e,t){return n.a.createElement("b",{className:s.a.item,key:t},n.a.createElement(l.a,{href:e.link},n.a.createElement("a",null,e.name)))})):null),n.a.createElement("b",{className:s.a.to_right},n.a.createElement("b",{className:s.a.copyright},c["default"].copyright))))}},311:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(8);var l=r.n(o);var i=r(210);var c=r(211);var u=r(209);var s=r(452);var f=r.n(s);t["default"]=function(){return n.a.createElement("b",{className:f.a.section},n.a.createElement("b",{className:f.a.content},n.a.createElement("b",{className:f.a.logo},n.a.createElement(i["default"],{image:u["default"].logo})),n.a.createElement("b",{className:f.a.copyright},u["default"].copyright),n.a.createElement("b",{className:f.a.contact},null!=u["default"].contact.phone?n.a.createElement("i",{className:f.a.phone},n.a.createElement(l.a,{href:"tel:".concat(u["default"].contact.phone)},n.a.createElement("a",null,u["default"].contact.phone))):null,null!=u["default"].contact.address?n.a.createElement("i",{className:f.a.address},u["default"].contact.address):null),null!=u["default"].social?n.a.createElement("b",{className:f.a.social_media},n.a.createElement(c["default"],{items:u["default"].social})):null))}},313:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(8);var l=r.n(o);var i=r(212);var c=r(453);var u=r.n(c);t["default"]=function(){return n.a.createElement("b",{className:u.a.section},n.a.createElement("b",{className:u.a.content},n.a.createElement("b",{className:u.a.to_left},i["default"].menu.length?n.a.createElement("b",{className:u.a.menu},i["default"].menu.map(function(e,t){return n.a.createElement("b",{className:u.a.item,key:t},n.a.createElement(l.a,{href:e.link},n.a.createElement("a",null,e.name)))})):null),n.a.createElement("b",{className:u.a.to_right},n.a.createElement("b",{className:u.a.get_platform},n.a.createElement(l.a,{href:i["default"].getPlatform.link},n.a.createElement("a",null,n.a.createElement("b",{className:u.a.get_platform_text},i["default"].getPlatform.text,n.a.createElement("i",{className:u.a.platform_preview})))))),n.a.createElement("b",{className:u.a.separator}),n.a.createElement("b",{className:u.a.to_bottom},n.a.createElement("b",{className:u.a.copyright},i["default"].copyright))))}},4:function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;var o=Array.prototype.slice;var l=r(17);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var u=i.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var m=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&a.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!m)return f(e);try{return f(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===n.call(t);var i=l(t);var f=r&&"[object String]"===n.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var m=u&&o;if(f&&t.length>0&&!a.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(i&&t.length>0)for(var y=0;y<t.length;++y)p.push(String(y));else for(var d in t)m&&"prototype"===d||!a.call(t,d)||p.push(String(d));if(c){var h=v(t);for(var g=0;g<s.length;++g)h&&"constructor"===s[g]||!a.call(t,s[g])||p.push(s[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=r.n(a);var o=r(309);var l=r(311);var i=r(313);var c=r(509);var u=r.n(c);t["default"]=function(){return n.a.createElement("b",{className:u.a.section},n.a.createElement(o["default"],null),n.a.createElement(l["default"],null),n.a.createElement(i["default"],null))}},5:function(e,t,r){"use strict";var a=r(4);var n=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(20)();var i=Object;var c=n.call(Function.call,Array.prototype.push);var u=n.call(Function.call,Object.prototype.propertyIsEnumerable);var s=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var n=i(t);var f,p,m,v,b,y,d;for(f=1;f<arguments.length;++f){p=i(arguments[f]);v=a(p);var h=l&&(Object.getOwnPropertySymbols||s);if(h){b=h(p);for(m=0;m<b.length;++m){d=b[m];u(p,d)&&c(v,d)}}for(m=0;m<v.length;++m){d=v[m];y=p[d];u(p,d)&&(n[d]=y)}}return n}},6:function(e,t,r){"use strict";var a=r(19);e.exports=Function.prototype.bind||a},7:function(e,t,r){"use strict";var a=r(5);var n=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var a=0;a<t.length;++a)r[t[a]]=t[a];var n=Object.assign({},r);var o="";for(var l in n)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return a;if(n())return a;if(o())return a;return Object.assign}},748:function(e,t,r){e.exports=r(454)},8:function(e,t,r){e.exports=r(12)}},[748]);return{page:e.default}});