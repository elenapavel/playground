module.exports=__NEXT_REGISTER_PAGE("/plants/application/actions",function(){var e=webpackJsonp([110],{132:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});var l=Object.assign;n["default"]=function(e){return{selectPlantByIndex:function e(n,t){var a=l({},n.plantoid);a.lastSelectedPlant=a.selectedPlant;t==a.plants.length?a.selectedPlantIndex=0:a.selectedPlantIndex=-1==t?a.plants.length-1:t;a.selectedPlant=a.plants[a.selectedPlantIndex];a.isMenuOpened=false;return{plantoid:a}},toggleMenu:function e(n){var t=l({},n.plantoid);t.isMenuOpened=!t.isMenuOpened;return{plantoid:t}}}}},490:function(e,n,t){e.exports=t(132)}},[490]);return{page:e.default}});