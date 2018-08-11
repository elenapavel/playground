module.exports=__NEXT_REGISTER_PAGE("/plants/application",function(){var e=webpackJsonp([95],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n.d(t,"b",function(){return c});n.d(t,"c",function(){return u});var a=n(2);var i=n.n(a);var r=i()(),o=r.publicRuntimeConfig;var s=o.base;var l=o.url;var c=o.static.default;var u=o.static.structure},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(1);t["default"]={logo:a["b"]+"/images/logo_plants.png",sections:[{label:"Nature's edition",plants:[{scientificName:"Ravenea Rivularis",commonName:"Majesty Palm",content:'While often marketed as a "plant" in a pot, in its natural state, it grows to 98 feet tall. Despite its fragility as a species in the wild, it has become a very popular houseplant due to its beautiful leaves and slow-growing nature.',category:"Palms",species:"20 species",image:a["b"]+"/images/plants/ravenea-rivularis.jpg"},{scientificName:"Chamaedorea elegans",commonName:"Parlour Palm",content:"It is one of several species with leaves that are harvested as xate. It is a versatile and almost no-maintenance plant that is able to grow in every indoor and outdoor condition possible with little help and care.",category:"Palms",species:"107 species",image:a["b"]+"/images/plants/chamaedorea-elegans.jpg"},{scientificName:"Howea forsteriana",commonName:"Kentia Palm",content:'The palm is an elegant plant, and is popular for growing indoors, requiring little light. The palm received the name "forsteriana" after the naturalist father and son duo who first encountered it during Captain Cook\'s second voyage to the Pacific, Johann Reinhold Forster and Georg Forster.',category:"Palms",species:"2 species",image:a["b"]+"/images/plants/howea-forsteriana.jpg"},{scientificName:"Ficus Elastica",commonName:"Rubber Plant",content:"Ficus elastica is grown around the world as an ornamental plant, outside in frost-free climates from the tropical to the Mediterranean and inside in colder climates as a houseplant.",category:"Ficus",species:"850 species",image:a["b"]+"/images/plants/ficus-elastica.jpg"},{scientificName:"Myriophyllum simulans",commonName:"Amphibious Water-milfoil",content:"In its submerged form it has light green, densely leaved stems with very finely pinnate leaves. This fast-growing stem plant needs good lighting and thrives well at temperatures between 20 and 28 °C.",category:"Aquatic Plants",species:"69 species",image:a["b"]+"/images/plants/myriophyllum-simulans.jpg"},{scientificName:"Tillandsia Caput Medusae",commonName:"Octopus Plant",content:"The thick, channeled, tapering and twisting leaves are up to 25 cm (9.8 in) long and are covered in fine gray hairs. The rosette of leaves arise from an inflated pseudobulb. In a greenhouse, the plants can bloom from spring to early summer. The red inflorescences are usually unbranched or digitate.",category:"Tillandsia",species:"650 species",image:a["b"]+"/images/plants/tillandsiacaputmedusae.jpg"}]}],socialMedia:[{instagram:"https://instagram.com"},{facebook:"https://facebook.com"},{twitter:"https://twitter.com"}]}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"module",function(){return e});var a=n(0);var i=n.n(a);var r=n(37);var o=n.n(r);var s=n(132);var l=n(131);var e=function e(t,n){var a=Object(r["connect"])(t,l["default"]);var o=a(n);return i.a.createElement(o,null)};t["default"]=function(e){return i.a.createElement(r["Provider"],{store:s["default"]},e.children)}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign;t["default"]=function(e){return{selectPlantByIndex:function e(t,n){var i=a({},t.plantoid);i.lastSelectedPlant=i.selectedPlant;n==i.plants.length?i.selectedPlantIndex=0:i.selectedPlantIndex=-1==n?i.plants.length-1:n;i.selectedPlant=i.plants[i.selectedPlantIndex];i.isMenuOpened=false;return{plantoid:i}},toggleMenu:function e(t){var n=a({},t.plantoid);n.isMenuOpened=!n.isMenuOpened;return{plantoid:n}}}}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(31);var i=n(126);t["default"]=Object(a["a"])({plantoid:{logo:i["default"].logo,sections:i["default"].sections,section:i["default"].sections[0],plants:i["default"].sections[0].plants,selectedPlantIndex:0,lastSelectedPlantIndex:null,socialMedia:i["default"].socialMedia,isMenuOpened:false}})},2:function(e,t,n){e.exports=n(24)},31:function(e,t,n){"use strict";function a(e,t){for(var n in t)e[n]=t[n];return e}t["a"]=function(e){var t=[];function n(e){for(var n=[],a=0;a<t.length;a++)t[a]===e?e=null:n.push(t[a]);t=n}function i(n,i,r){e=i?n:a(a({},e),n);for(var o=t,s=0;s<o.length;s++)o[s](e,r)}return e=e||{},{action:function(t){function n(e){i(e,!1,t)}return function(){for(var a=arguments,i=[e],r=0;r<arguments.length;r++)i.push(a[r]);var o=t.apply(this,i);null!=o&&(o.then?o.then(n):n(o))}},setState:i,subscribe:function(e){return t.push(e),function(){n(e)}},unsubscribe:n,getState:function(){return e}}}},37:function(e,t,n){var a=n(0);function i(e,t){for(var n in t)e[n]=t[n];return e}var r={store:function(){}};var o=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return a.Children.only(this.props.children)},t}(a.Component);o.childContextTypes=r,t.connect=function(e,t){var n;return"function"!=typeof e&&("string"==typeof(n=e||[])&&(n=n.split(/\s*,\s*/)),e=function(e){for(var t={},a=0;a<n.length;a++)t[n[a]]=e[n[a]];return t}),function(n){function o(r,o){var s=this;a.Component.call(this,r,o);var l=o.store,c=e(l?l.getState():{},r),u=t?function(e,t){"function"==typeof e&&(e=e(t));var n={};for(var a in e)n[a]=t.action(e[a]);return n}(t,l):{store:l},p=function(){var t=e(l?l.getState():{},s.props);for(var n in t)if(t[n]!==c[n])return c=t,s.forceUpdate();for(var a in c)if(!(a in t))return c=t,s.forceUpdate()};this.componentDidMount=function(){p(),l.subscribe(p)},this.componentWillUnmount=function(){l.unsubscribe(p)},this.render=function(){return a.createElement(n,i(i(i({},u),s.props),c))}}return o.contextTypes=r,(o.prototype=Object.create(a.Component.prototype)).constructor=o}},t.Provider=o},651:function(e,t,n){e.exports=n(128)}},[651]);return{page:e.default}});