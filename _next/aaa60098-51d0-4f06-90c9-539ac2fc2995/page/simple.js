module.exports=__NEXT_REGISTER_PAGE("/simple",function(){var e=webpackJsonp([85],{1:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t.d(a,"b",function(){return l});t.d(a,"c",function(){return u});var n=t(2);var r=t.n(n);var i=r()(),c=i.publicRuntimeConfig;var o=c.base;var s=c.url;var l=c.static.default;var u=c.static.structure},2:function(e,a,t){e.exports=t(24)},431:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(515);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.subheading,n=e.image,i=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("i",{className:c.a.subheading},t),r.a.createElement("b",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),i),r.a.createElement("b",{className:c.a.box})),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(n)}}),r.a.createElement("b",{className:c.a.gradient})))}},432:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(516);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("b",{className:c.a.gradient})))}},433:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(517);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(t)}},r.a.createElement("b",{className:c.a.gradient}))))}},434:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(518);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(t)}}),r.a.createElement("b",{className:c.a.gradient})))}},435:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(519);var c=t.n(i);a["default"]=function(e){var a=e.image;return r.a.createElement("i",{className:c.a.container},r.a.createElement("img",{src:a}))}},436:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(1);var c=t(520);var o=t.n(c);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(a){return typeof a}:function e(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return s(e)}function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function m(e,a,t){a&&u(e.prototype,a);t&&u(e,t);return e}function f(e,a){if(a&&("object"===s(a)||"function"===typeof a))return a;return b(e)}function d(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){d(a,e);function a(){var e;var t,n;l(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return f(n,(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{isLoading:true,items:null,activeIndex:null,hoverIndex:null,isMenuOpened:false}}),t))}m(a,[{key:"componentDidMount",value:function e(){var a=this;fetch("".concat(i["b"],"/data/simple.json")).then(function(e){return e.json()}).then(function(e){return a.setState({items:e.menu,activeIndex:0,isLoading:false})})}},{key:"handleClick",value:function e(a){this.setState({activeIndex:a});var t=this.props.onSelect;"function"===typeof t&&t(this.state.items[a].ref)}},{key:"handleHover",value:function e(a){this.setState({hoverIndex:a})}},{key:"render",value:function e(){var a=this;var t=this.state,n=t.isLoading,i=t.items,c=t.activeIndex,s=t.hoverIndex;return n?null:r.a.createElement("i",{className:o.a.container},i.map(function(e,t){return r.a.createElement("i",{key:t,ref:e.ref,className:c==t?o.a.item_active:s==t?o.a.item_active:o.a.item,onClick:function e(){return a.handleClick(t)},onMouseEnter:function e(){return a.handleHover(t)},onMouseLeave:function e(){return a.handleHover(null)}},e.name)}))}}]);return a}(n["Component"]);a["default"]=v},437:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(521);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.image;return r.a.createElement("b",{className:c.a.container,style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("b",{className:c.a.gradient}),r.a.createElement("b",{className:c.a.heading},a))}},438:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(522);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.items;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.items},t.map(function(e,a){return r.a.createElement("b",{className:c.a.item,key:a},r.a.createElement("b",{className:c.a.blur,style:{backgroundImage:"url(".concat(e.icon.simple,")")}}),r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.item_heading},e.heading),r.a.createElement("b",{className:c.a.item_subheading},e.subheading)))})))}},439:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(523);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.items;return r.a.createElement("b",{className:c.a.container},r.a.createElement("i",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.items},t.map(function(e,a){return r.a.createElement("b",{className:c.a.item,key:a},r.a.createElement("b",{className:c.a.preview,style:{backgroundImage:"url(".concat(e.image.simple,")")}}),r.a.createElement("b",{className:c.a.gradient}),r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.item_heading},e.heading)))})))}},440:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(524);var c=t.n(i);a["default"]=function(e){var a=e.heading,t=e.image,n=e.description;return r.a.createElement("b",{className:c.a.container},r.a.createElement("b",{className:c.a.content},r.a.createElement("b",{className:c.a.heading},a),r.a.createElement("b",{className:c.a.description},r.a.createElement("i",{className:c.a.line}),n)),r.a.createElement("b",{className:c.a.preview},r.a.createElement("b",{className:c.a.image,style:{backgroundImage:"url(".concat(t)}}),r.a.createElement("b",{className:c.a.gradient})))}},710:function(e,a,t){e.exports=t(711)},711:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var r=t.n(n);var i=t(1);var c=t(435);var o=t(436);var s=t(437);var l=t(431);var u=t(432);var m=t(438);var f=t(433);var d=t(439);var b=t(440);var v=t(434);var p=t(712);var g=t.n(p);function h(e){h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(a){return typeof a}:function e(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return h(e)}function E(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function y(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function N(e,a,t){a&&y(e.prototype,a);t&&y(e,t);return e}function _(e,a){if(a&&("object"===h(a)||"function"===typeof a))return a;return w(e)}function S(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var O=function(e){S(a,e);function a(){var e;var t,n;E(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return _(n,(t=n=_(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))),Object.defineProperty(w(n),"state",{configurable:true,enumerable:true,writable:true,value:{data:null,selectedSectionRef:"intro",isMenuOpened:false,isLoading:true}}),t))}N(a,[{key:"componentDidMount",value:function e(){var a=this;window.addEventListener("resize",function(){return a.getWindowWidth()});fetch("".concat(i["b"],"/data/simple.json")).then(function(e){return e.json()}).then(function(e){a.setState({data:e,isLoading:false})})}},{key:"getWindowWidth",value:function e(){window.innerWidth>899&&this.setState({isMenuOpened:false})}},{key:"toggleMenu",value:function e(){this.setState({isMenuOpened:!this.state.isMenuOpened})}},{key:"handleScroll",value:function e(a){var t=this;this.setState({isMenuOpened:false,selectedSectionRef:a});setTimeout(function(){window.scrollTo({top:t.refs[a].offsetTop,behavior:"smooth"})},300)}},{key:"render",value:function e(){var a=this;var t=this.state,n=t.data,i=t.isMenuOpened,p=t.isLoading;var h={transform:"translateX(-15rem)",overflow:"hidden",opacity:.5};var E={transform:"translateX(0)",overflow:"visible",opacity:1};return p?null:r.a.createElement("b",{className:g.a.application},r.a.createElement("b",{className:g.a.header},r.a.createElement("i",{className:g.a.logo,style:{transform:"translateX(".concat(i?-15:0,"rem)")}},r.a.createElement(c["default"],{image:n.logo.simple})),r.a.createElement("i",{className:i?g.a.menu_icon_colored:g.a.menu_icon,onClick:function e(){return a.toggleMenu()}},r.a.createElement("i",{className:g.a.bar_long}),r.a.createElement("i",{className:g.a.bar_short}),r.a.createElement("i",{className:g.a.bar})),r.a.createElement("i",{className:g.a.navigation,style:{transform:"translateX(".concat(i?0:15,"rem)")}},r.a.createElement(o["default"],{onSelect:function e(t){return a.handleScroll(t)}}))),r.a.createElement("b",{className:g.a.container,style:i?h:E},r.a.createElement("b",{className:g.a.intro_section,ref:n.introSection.ref},r.a.createElement(s["default"],{image:n.introSection.simple.image,heading:n.introSection.simple.heading})),r.a.createElement("b",{className:g.a.beginning_section,ref:n.beginningSection.ref},r.a.createElement(u["default"],{heading:n.beginningSection.heading,description:n.beginningSection.description,image:n.beginningSection.image.simple})),r.a.createElement("b",{className:g.a.about_section,ref:n.aboutSection.ref},r.a.createElement(l["default"],{heading:n.aboutSection.heading,subheading:n.aboutSection.subheading,description:n.aboutSection.description,image:n.aboutSection.image.simple})),r.a.createElement("b",{className:g.a.services_section,ref:n.servicesSection.ref},r.a.createElement("b",{className:g.a.gradient}),r.a.createElement(m["default"],{heading:n.servicesSection.heading,items:n.servicesSection.items})),r.a.createElement("b",{className:g.a.clients_section,ref:n.clientsSection.ref},r.a.createElement(f["default"],{heading:n.clientsSection.heading,image:n.clientsSection.image.simple,description:n.clientsSection.description})),r.a.createElement("b",{className:g.a.portfolio_section,ref:n.portfolioSection.ref},r.a.createElement(d["default"],{heading:n.portfolioSection.heading,items:n.portfolioSection.items})),r.a.createElement("b",{className:g.a.web_section,ref:n.webSection.ref},r.a.createElement(b["default"],{heading:n.webSection.heading,image:n.webSection.image.simple,description:n.webSection.description})),r.a.createElement("b",{className:g.a.frontend_section,ref:n.frontendSection.ref},r.a.createElement(v["default"],{heading:n.frontendSection.heading,image:n.frontendSection.image.simple,description:n.frontendSection.description}))))}}]);return a}(n["Component"]);a["default"]=O}},[710]);return{page:e.default}});