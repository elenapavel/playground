module.exports=__NEXT_REGISTER_PAGE("/calendar/Calendar/DaysList/Day",function(){var e=webpackJsonp([83],{122:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var c=t.n(n);var r=t(107);var l=t.n(r);var d=function e(a){var t=a.isDisabled,n=a.isCurrent,r=a.isSelected,d=a.dayNumber,o=a.date,s=a.setDay,i=a.onRender,u=a.onSelect;var v="".concat(l.a.day," ").concat(t?l.a.day_disabled:""," ").concat(n?l.a.day_current:""," ").concat(r?l.a.day_selected:"");var f=null;"function"===typeof i&&(f=i(a,c.a.createElement("div",{className:v},d)));"function"===typeof u&&r&&(f=u(a,c.a.createElement("div",{className:v},d)));null==f&&(f=c.a.createElement("div",{className:v},d));return c.a.createElement("div",{className:l.a.day_container,onClick:function e(){s(o)}},f)};a["default"]=d},410:function(e,a,t){e.exports=t(122)}},[410]);return{page:e.default}});