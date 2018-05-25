module.exports=__NEXT_REGISTER_PAGE("/books/head",function(){var e=webpackJsonp([52],{201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(69);var u=r.n(o);t["default"]=a.a.createElement(u.a,null,a.a.createElement("link",{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cabin:400,600&subset=latin-ext",rel:"stylesheet"}))},378:function(e,t,r){e.exports=r(201)},46:function(e,t,r){"use strict";t.__esModule=true;var n=r(57);var a=o(n);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,a.default)(e)}},56:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(51);var a=g(n);var o=r(46);var u=g(o);var f=r(23);var i=g(f);var c=r(1);var l=g(c);var d=r(2);var s=g(d);var v=r(24);var p=g(v);var h=r(25);var y=g(h);t.defaultHead=M;var m=r(0);var _=g(m);var w=r(73);var x=g(w);var E=r(61);var k=g(E);function g(e){return e&&e.__esModule?e:{default:e}}var b=function(e){(0,y.default)(t,e);function t(){(0,l.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function e(){return null}}]);return t}(_.default.Component);b.contextTypes={headManager:x.default.object};function M(){return[_.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}function A(e){var t;return(t=e.map(function(e){return e.props.children}).map(function(e){return _.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){if(_.default.Fragment&&t.type===_.default.Fragment)return e.concat(_.default.Children.toArray(t.props.children));return e.concat(t)},[]).reverse()).concat.apply(t,(0,u.default)(M())).filter(function(e){return!!e}).filter(N()).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return _.default.cloneElement(e,{className:t})})}function C(e){return e}function O(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)}var S=["name","httpEquiv","charSet","itemProp","property"];function N(){var e=new a.default;var t=new a.default;var r=new a.default;var n={};return function(o){if(o.key&&0===o.key.indexOf(".$")){if(e.has(o.key))return false;e.add(o.key)}switch(o.type){case"title":case"base":if(t.has(o.type))return false;t.add(o.type);break;case"meta":for(var u=0,f=S.length;u<f;u++){var i=S[u];if(!o.props.hasOwnProperty(i))continue;if("charSet"===i){if(r.has(i))return false;r.add(i)}else{var c=o.props[i];var l=n[i]||new a.default;if(l.has(c))return false;l.add(c);n[i]=l}}break}return true}}t.default=(0,k.default)(A,O,C)(b)},57:function(e,t,r){e.exports={default:r(58),__esModule:true}},58:function(e,t,r){r(27);r(59);e.exports=r(5).Array.from},59:function(e,t,r){"use strict";var n=r(65);var a=r(26);var o=r(29);var u=r(86);var f=r(87);var i=r(82);var c=r(60);var l=r(83);a(a.S+a.F*!r(88)(function(e){Array.from(e)}),"Array",{from:function e(t){var r=o(t);var a="function"==typeof this?this:Array;var d=arguments.length;var s=d>1?arguments[1]:void 0;var v=void 0!==s;var p=0;var h=l(r);var y,m,_,w;v&&(s=n(s,d>2?arguments[2]:void 0,2));if(void 0==h||a==Array&&f(h)){y=i(r.length);for(m=new a(y);y>p;p++)c(m,p,v?s(r[p],p):r[p])}else for(w=h.call(r),m=new a;!(_=w.next()).done;p++)c(m,p,v?u(w,s,[_.value,p],true):_.value);m.length=p;return m}})},60:function(e,t,r){"use strict";var n=r(55);var a=r(80);e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(23);var a=x(n);var o=r(1);var u=x(o);var f=r(2);var i=x(f);var c=r(24);var l=x(c);var d=r(25);var s=x(d);var v=r(46);var p=x(v);var h=r(51);var y=x(h);t.default=E;var m=r(0);var _=x(m);var w=r(67);function x(e){return e&&e.__esModule?e:{default:e}}function E(e,t,r){if("function"!==typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function n(o){if("function"!==typeof o)throw new Error("Expected WrappedComponent to be a React component.");var f=new y.default;var c=void 0;function d(n){c=e([].concat((0,p.default)(f)));v.canUseDOM?t.call(n,c):r&&(c=r(c))}var v=function(e){(0,s.default)(t,e);function t(){(0,u.default)(this,t);return(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}(0,i.default)(t,[{key:"componentWillMount",value:function e(){f.add(this);d(this)}},{key:"componentDidUpdate",value:function e(){d(this)}},{key:"componentWillUnmount",value:function e(){f.delete(this);d(this)}},{key:"render",value:function e(){return _.default.createElement(o,null,this.props.children)}}],[{key:"peek",value:function e(){return c}},{key:"rewind",value:function e(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var r=c;c=void 0;f.clear();return r}}]);return t}(m.Component);v.displayName="SideEffect("+(0,w.getDisplayName)(o)+")";v.contextTypes=o.contextTypes;v.canUseDOM="undefined"!==typeof window;return v}}},69:function(e,t,r){e.exports=r(56)}},[378]);return{page:e.default}});