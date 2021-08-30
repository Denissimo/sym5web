/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{l as r,m as t}from"./arrayUtils.js";import{b as l,i}from"../core/lang.js";import{a as o}from"./unitUtils.js";function s(t){if(l(t))return null;if(t instanceof n)return e(t);const i=t.tileInfo;if(l(i))return null;const s=r(i.lods);return l(s)?null:s.resolution*o(i.spatialReference)}function e(n){var r;if(l(n))return null;const o=n.layers.items.map(u).filter(i);return null!=(r=t(o))?r:null}function u(n){return"tileInfo"in n?s(n):null}export{s as a,e as g};
