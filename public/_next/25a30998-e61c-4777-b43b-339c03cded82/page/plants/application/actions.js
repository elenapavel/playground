module.exports=__NEXT_REGISTER_PAGE("/plants/application/actions",function(){var e=webpackJsonp([81],{400:function(e,n,t){e.exports=t(76)},76:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});var l=Object.assign;n["default"]=function(e){return{selectPlantByIndex:function e(n,t){var a=l({},n.plantoid);var s=l({},n.menu);a.lastSelectedPlant=a.selectedPlant;t==a.plants.length?a.selectedPlantIndex=0:a.selectedPlantIndex=-1==t?a.plants.length-1:t;a.selectedPlant=a.plants[a.selectedPlantIndex];s.isOpen=false;s.selectedIndex=a.selectedPlantIndex;return{plantoid:a,menu:s}},toggleMenu:function e(n){var t=l({},n.menu);t.isOpen=!t.isOpen;return{menu:t}}}}}},[400]);return{page:e.default}});