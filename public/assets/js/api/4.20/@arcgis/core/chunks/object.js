/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{clone as r}from"../core/lang.js";function n(r,n,t=!1){return i(r,n,t)}function t(r,n){if(null!=n)return n[r]||e(r.split("."),!1,n)}function o(r,n,t){const o=r.split("."),i=o.pop(),a=e(o,!0,t);a&&i&&(a[i]=n)}function e(r,n,t){let o=t;for(const t of r){if(null==o)return;if(!(t in o)){if(!n)return;o[t]={}}o=o[t]}return o}function i(n,t,o){return t?Object.keys(t).reduce((function(n,e){let a=n[e],c=t[e];return a===c?n:void 0===a?(n[e]=r(c),n):(Array.isArray(c)||Array.isArray(n)?(a=a?Array.isArray(a)?n[e]=a.concat():n[e]=[a]:n[e]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{-1===a.indexOf(r)&&a.push(r)})):n[e]=c.concat())):c&&"object"==typeof c?n[e]=i(a,c,o):n.hasOwnProperty(e)&&!t.hasOwnProperty(e)||(n[e]=c),n)}),n||{}):n}export{n as d,t as g,o as s};
