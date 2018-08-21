module.exports=__NEXT_REGISTER_PAGE("/architecture/Content/Actions",function(){var e=webpackJsonp([93],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n.d(t,"b",function(){return s});n.d(t,"c",function(){return u});var r=n(2);var o=n.n(r);var a=o()(),i=a.publicRuntimeConfig;var c=i.base;var l=i.url;var s=i.static.default;var u=i.static.structure},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);t["default"]={logo:r["b"]+"/images/architecture_logo.png",quote:"Your daily dose of art, design and architecture curation.",categories:[{label:"Argentina"},{label:"China"},{label:"Slovenia"}],articles:[{title:"Equestrian House",date:"29.04.2018",category:"Argentina",image:r["b"]+"/images/equestrian_house.jpg",content:["Equestrian House is a holiday residence located in Costa Esmeralda, a picturesque stretch of coastline 250 miles (400 kilometres) south of Buenos Aires.","The concrete – which is textured by the imprints of wooden boards and is a popular aesthetic in Argentina – forms the roof, floor and interior walls of the single-storey house. Meanwhile, the exterior walls are made of wood, glass and a metal structure.","Vertical concrete fins between the roof and the floor bolster the wall structure, and extend out in front of large windows placed to make the most of forested views. Blackened pine wood clads the rear to provide privacy from neighbours."],more:"https://www.dezeen.com/2018/04/29/equestrian-house-luciano-kruk-board-marked-concrete-holiday-home-argentina-blackened-wood/",extras:{title:"Luciano Kruk combines blackened wood with concrete",content:"Kruk designed the latest house for a couple with two children, who asked him to use less concrete than previous designs in order to build it cheaply and quickly."}},{title:"Garden chapel",date:"09.10.2014",category:"China",image:r["b"]+"/images/garden_chapel.jpg",content:["Dark shingles cover this roof, which folds back on itself to give the square-planned building two corners that pitch sharply upwards and two that dip down.","A cross tops the 12-metre peak on the west facade, while a second low-level pitched roof nestled in the dip gives height to the church hall beneath.","Below the roof, a double-layered facade consists of solid white walls, screened behind a semi-transparent wooden skin.","'The exterior wood strips and asphalt shingles are left in their natural colour, emphasising the importance of nature,' said the architects."],more:"https://www.dezeen.com/2014/10/09/nanjing-wanjing-garden-chapel-azl-architects/",extras:{title:"This chapel features semi-transparent walls and a butterfly roof",content:"The building's most noticeable feature is its profile – a variation on the typical butterfly roof, an inverted structure that rises at its edges rather that at its centre."}},{title:"Open-air chapel",date:"29.04.2018",category:"Slovenia",image:r["b"]+"/images/open_air_chapel.jpg",content:["Over recent years the village has gradually transformed from a small rural settlement into a suburb for commuters working in the nearby town.","Skorba's organic expansion altered the historic clustered street plan, and left the village without a defined centre or space for public meeting and events.","A decision to create a new chapel in the village prompted Skorba's inhabitants to consider creating a multipurpose space that could also fulfil the functions of a traditional public square."],more:"https://www.dezeen.com/2018/04/29/sloping-concrete-volumes-enclose-social-hub-chapel-in-slovenian-village-architecture/",extras:{title:"Sloping concrete volumes in Slovenian village",content:"The concrete structure is positioned centrally on the vacant plot and is partially embedded in a grassy bank. A narrow path extends across the grass to connect the main functional area with the adjacent road."}}]}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign;t["default"]=function(e){return{selectArticleIndex:function e(t,n){var o=r({},t.portfolio);o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=n;o.selectedCategoryLabel=o.articles[n].category;return{portfolio:o}},selectArticleByCategoryIndex:function e(t,n){var o=r({},t.portfolio);o.articles.forEach(function(e,t){if(e.category==o.categories[n].label){o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=t;o.selectedCategoryLabel=o.categories[n].label}});return{portfolio:o}}}}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"module",function(){return e});var r=n(0);var o=n.n(r);var a=n(37);var i=n.n(a);var c=n(112);var l=n(110);var e=function e(t,n){var r=Object(a["connect"])(t,l["default"]);var i=r(n);return o.a.createElement(i,null)};t["default"]=function(e){return o.a.createElement(a["Provider"],{store:c["default"]},e.children)}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(31);var o=n(105);t["default"]=Object(r["a"])({portfolio:{logo:o["default"].logo,quote:o["default"].quote,categories:o["default"].categories,articles:o["default"].articles,selectedArticleIndex:0,selectedCategoryLabel:"Argentina",lastSelectedArticleIndex:null}})},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(0);var o=n.n(r);var a=n(111);var i=n(113);var c=n.n(i);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function f(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e}function d(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){h(t,e);function t(){s(this,t);return d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){return Object(a["module"])("portfolio",function(e){var t=e.portfolio,n=e.selectArticleIndex;var r=t.selectedArticleIndex,a=t.articles;return o.a.createElement("div",{className:c.a.actions_container},0==r?null:o.a.createElement("div",{className:c.a.action,onClick:function e(){return n(r-1)}},"Previous"),r==a.length-1?null:o.a.createElement("div",{className:c.a.action,onClick:function e(){return n(r+1)}},"Next"))})}}]);return t}(r["Component"]);t["default"]=v},2:function(e,t,n){e.exports=n(24)},31:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}t["a"]=function(e){var t=[];function n(e){for(var n=[],r=0;r<t.length;r++)t[r]===e?e=null:n.push(t[r]);t=n}function o(n,o,a){e=o?n:r(r({},e),n);for(var i=t,c=0;c<i.length;c++)i[c](e,a)}return e=e||{},{action:function(t){function n(e){o(e,!1,t)}return function(){for(var r=arguments,o=[e],a=0;a<arguments.length;a++)o.push(r[a]);var i=t.apply(this,o);null!=i&&(i.then?i.then(n):n(i))}},setState:o,subscribe:function(e){return t.push(e),function(){n(e)}},unsubscribe:n,getState:function(){return e}}}},37:function(e,t,n){var r=n(0);function o(e,t){for(var n in t)e[n]=t[n];return e}var a={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);i.childContextTypes=a,t.connect=function(e,t){var n;return"function"!=typeof e&&("string"==typeof(n=e||[])&&(n=n.split(/\s*,\s*/)),e=function(e){for(var t={},r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}),function(n){function i(a,i){var c=this;r.Component.call(this,a,i);var l=i.store,s=e(l?l.getState():{},a),u=t?function(e,t){"function"==typeof e&&(e=e(t));var n={};for(var r in e)n[r]=t.action(e[r]);return n}(t,l):{store:l},f=function(){var t=e(l?l.getState():{},c.props);for(var n in t)if(t[n]!==s[n])return s=t,c.forceUpdate();for(var r in s)if(!(r in t))return s=t,c.forceUpdate()};this.componentDidMount=function(){f(),l.subscribe(f)},this.componentWillUnmount=function(){l.unsubscribe(f)},this.render=function(){return r.createElement(n,o(o(o({},u),c.props),s))}}return i.contextTypes=a,(i.prototype=Object.create(r.Component.prototype)).constructor=i}},t.Provider=i},597:function(e,t,n){e.exports=n(171)}},[597]);return{page:e.default}});