/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as r}from"../core/lang.js";import{resolve as o,eachAlways as t,throwIfAbortError as a}from"../core/promiseUtils.js";function e(r,o,a){return t(r.map(((r,t)=>o.apply(a,[r,t]))))}function n(r,o,a){return t(r.map(((r,t)=>o.apply(a,[r,t])))).then((r=>r.map((r=>r.value))))}function u(t){return r(t)?o():t.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function c(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>(a(r),{ok:!1,error:r})))}function p(r){if(!0===r.ok)return r.value;throw r.error}export{c as a,p as b,e as f,n as m,u as r};
