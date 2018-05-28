module.exports=__NEXT_REGISTER_PAGE("/architecture/application",function(){var e=webpackJsonp([50],{321:function(e,t,r){e.exports=r(62)},55:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(21);t["default"]={logo:n["b"]+"/images/architecture_logo.png",quote:"Your daily dose of art, design and architecture curation.",categories:[{label:"Argentina"},{label:"China"},{label:"Slovenia"}],articles:[{title:"Equestrian House",date:"29.04.2018",category:"Argentina",image:n["b"]+"/images/equestrian_house.jpg",content:["Equestrian House is a holiday residence located in Costa Esmeralda, a picturesque stretch of coastline 250 miles (400 kilometres) south of Buenos Aires.","The concrete – which is textured by the imprints of wooden boards and is a popular aesthetic in Argentina – forms the roof, floor and interior walls of the single-storey house. Meanwhile, the exterior walls are made of wood, glass and a metal structure.","Vertical concrete fins between the roof and the floor bolster the wall structure, and extend out in front of large windows placed to make the most of forested views. Blackened pine wood clads the rear to provide privacy from neighbours."],more:"https://www.dezeen.com/2018/04/29/equestrian-house-luciano-kruk-board-marked-concrete-holiday-home-argentina-blackened-wood/",extras:{title:"Luciano Kruk combines blackened wood with concrete",content:"Kruk designed the latest house for a couple with two children, who asked him to use less concrete than previous designs in order to build it cheaply and quickly."}},{title:"Garden chapel",date:"09.10.2014",category:"China",image:n["b"]+"/images/garden_chapel.jpg",content:["Dark shingles cover this roof, which folds back on itself to give the square-planned building two corners that pitch sharply upwards and two that dip down.","A cross tops the 12-metre peak on the west facade, while a second low-level pitched roof nestled in the dip gives height to the church hall beneath.","Below the roof, a double-layered facade consists of solid white walls, screened behind a semi-transparent wooden skin.","'The exterior wood strips and asphalt shingles are left in their natural colour, emphasising the importance of nature,' said the architects."],more:"https://www.dezeen.com/2014/10/09/nanjing-wanjing-garden-chapel-azl-architects/",extras:{title:"This chapel features semi-transparent walls and a butterfly roof",content:"The building's most noticeable feature is its profile – a variation on the typical butterfly roof, an inverted structure that rises at its edges rather that at its centre."}},{title:"Open-air chapel",date:"29.04.2018",category:"Slovenia",image:n["b"]+"/images/open_air_chapel.jpg",content:["Over recent years the village has gradually transformed from a small rural settlement into a suburb for commuters working in the nearby town.","Skorba's organic expansion altered the historic clustered street plan, and left the village without a defined centre or space for public meeting and events.","A decision to create a new chapel in the village prompted Skorba's inhabitants to consider creating a multipurpose space that could also fulfil the functions of a traditional public square."],more:"https://www.dezeen.com/2018/04/29/sloping-concrete-volumes-enclose-social-hub-chapel-in-slovenian-village-architecture/",extras:{title:"Sloping concrete volumes in Slovenian village",content:"The concrete structure is positioned centrally on the vacant plot and is partially embedded in a grassy bank. A narrow path extends across the grass to connect the main functional area with the adjacent road."}}]}},6:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function o(r,o,a){e=o?r:n(n({},e),r);for(var i=t,c=0;c<i.length;c++)i[c](e,a)}return e=e||{},{action:function(t){function r(e){o(e,!1,t)}return function(){for(var n=arguments,o=[e],a=0;a<arguments.length;a++)o.push(n[a]);var i=t.apply(this,o);null!=i&&(i.then?i.then(r):r(i))}},setState:o,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{selectArticleIndex:function e(t,r){var o=n({},t.portfolio);o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=r;o.selectedCategoryLabel=o.articles[r].category;return{portfolio:o}},selectArticleByCategoryIndex:function e(t,r){var o=n({},t.portfolio);o.articles.forEach(function(e,t){if(e.category==o.categories[r].label){o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=t;o.selectedCategoryLabel=o.categories[r].label}});return{portfolio:o}}}}},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var o=r.n(n);var a=r(7);var i=r.n(a);var c=r(63);var s=r(61);var e=function e(t,r){var n=Object(a["connect"])(t,s["default"]);var i=n(r);return o.a.createElement(i,null)};t["default"]=function(e){return o.a.createElement(a["Provider"],{store:c["default"]},e.children)}},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(6);var o=r(55);t["default"]=Object(n["a"])({portfolio:{logo:o["default"].logo,quote:o["default"].quote,categories:o["default"].categories,articles:o["default"].articles,selectedArticleIndex:0,selectedCategoryLabel:"Argentina",lastSelectedArticleIndex:null}})},7:function(e,t,r){var n=r(0);function o(e,t){for(var r in t)e[r]=t[r];return e}var a={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);i.childContextTypes=a,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function i(a,i){var c=this;n.Component.call(this,a,i);var s=i.store,l=e(s?s.getState():{},a),u=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,s):{store:s},d=function(){var t=e(s?s.getState():{},c.props);for(var r in t)if(t[r]!==l[r])return l=t,c.forceUpdate();for(var n in l)if(!(n in t))return l=t,c.forceUpdate()};this.componentDidMount=function(){d(),s.subscribe(d)},this.componentWillUnmount=function(){s.unsubscribe(d)},this.render=function(){return n.createElement(r,o(o(o({},u),c.props),l))}}return i.contextTypes=a,(i.prototype=Object.create(n.Component.prototype)).constructor=i}},t.Provider=i}},[321]);return{page:e.default}});