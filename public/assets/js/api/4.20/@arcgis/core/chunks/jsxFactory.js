/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as e}from"./jsxWidgetSupport.js";var r=function(e,o){for(var t=0,n=e.length;t<n;t++){var i=e[t];Array.isArray(i)?r(i,o):null!=i&&!1!==i&&(i.hasOwnProperty("vnodeSelector")||(i={vnodeSelector:"",properties:void 0,children:void 0,text:i.toString(),domNode:null}),o.push(i))}};function o(o,t,...n){return"function"!=typeof o||e(o)?function(e,o){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:e,properties:o||void 0,children:void 0,text:t[0],domNode:null};var i=[];return r(t,i),{vnodeSelector:e,properties:o||void 0,children:i,text:void 0,domNode:null}}(o,t,...n):o(t,...n)}export{o as t};
