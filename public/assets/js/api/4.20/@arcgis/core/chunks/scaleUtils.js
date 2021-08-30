/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as t,a as n}from"./unitUtils.js";function e(e,i){const a=i||e.extent,r=e.width,s=n(a&&a.spatialReference);return a&&r?a.width/r*s*t*96:0}function i(e,i){return e/(n(i)*t*96)}function a(e,i){return e*(n(i)*t*96)}function r(t,n){const e=t.extent,a=t.width,r=i(n,e.spatialReference);return e.clone().expand(r*a/e.width)}export{e as a,a as b,r as c,i as g};
