/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../request.js";import{p as t,a as s}from"./utils5.js";import"../geometry.js";import{e as r,c as n,g as o,l as a,o as i,r as f,d as c,t as p}from"./trimExtend.js";import y from"../geometry/Polygon.js";import{fromJSON as m,getJsonType as g}from"../geometry/support/jsonUtils.js";import u from"../rest/support/GeneralizeParameters.js";import l from"../rest/support/LengthsParameters.js";import d from"../rest/support/OffsetParameters.js";import S from"../rest/support/RelationParameters.js";import{urlToObject as O}from"../core/urlUtils.js";import h from"../rest/support/TrimExtendParameters.js";import J from"../geometry/Polyline.js";async function N(r,n,o){const a=t(r),i={...a.query,f:"json",...n.toJSON()},f=s(i,o);return e(a.path+"/areasAndLengths",f).then((e=>e.data))}async function j(n,o,a,i){const f=o[0].spatialReference,c=t(n),p={...c.query,f:"json",sr:JSON.stringify(f.toJSON()),polygons:JSON.stringify(r(o).geometries),polylines:JSON.stringify(r(a).geometries)},m=s(p,i);return e(c.path+"/autoComplete",m).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new y({spatialReference:f,rings:e})))))}async function R(r,n,o){const a=t(r),i={...a.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,c=s(i,o);return e(a.path+"/buffer",c).then((e=>(e.data.geometries||[]).map((({rings:e})=>new y({spatialReference:f,rings:e})))))}async function q(n,o,a){const i=o[0].spatialReference,f=t(n),c={...f.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(r(o))},p=s(c,a);return e(f.path+"/convexHull",p).then((({data:e})=>m(e.geometry).set({spatialReference:i})))}async function w(s,r,n,o){const a=t(s),i=r[0].spatialReference,f={...o,query:{...a.query,f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:g(r[0]),geometries:r}),cutter:JSON.stringify(n)}},c=await e(a.path+"/cut",f),{cutIndexes:p,geometries:y=[]}=c.data;return{cutIndexes:p,geometries:y.map((e=>{const t=m(e);return t.spatialReference=i,t}))}}async function v(r,n,o){const a=n.geometries[0].spatialReference,i=t(r),f={...i.query,f:"json",...n.toJSON()},c=s(f,o);return e(i.path+"/densify",c).then((({data:e})=>(e.geometries||[]).map((e=>m(e).set({spatialReference:a})))))}async function P(s,n,o,a){const i=n[0].spatialReference,f=t(s);let c={query:{...f.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(r(n)),geometry:JSON.stringify({geometryType:g(o),geometry:o.toJSON()})}};return a&&(c={...a,...c}),e(f.path+"/difference",c).then((({data:e})=>(e.geometries||[]).map((e=>m(e).set({spatialReference:i})))))}async function T(r,n,o){const a=t(r),i={...a.query,f:"json",...n.toJSON()},f=s(i,o);return e(a.path+"/distance",f).then((({data:e})=>e&&e.distance))}async function k(r,o,a){const i={};null!=o.sr&&"object"==typeof o.sr?i.sr=o.sr.wkid||JSON.stringify(o.sr):i.sr=o.sr,i.strings=JSON.stringify(o.strings);const f=o.conversionType||"mgrs";i.conversionType=n.toJSON(f),i.conversionMode=o.conversionMode;const c=t(r),p={...c.query,f:"json",...i},y=s(p,a);return e(c.path+"/fromGeoCoordinateString",y).then((({data:e})=>e.coordinates))}async function x(r,n,a){const i=(n=u.from(n)).toJSON(),f=o(n),c=t(r),p={...c.query,f:"json",...f},y=i.geometries[0].spatialReference,g=s(p,a);return e(c.path+"/generalize",g).then((({data:e})=>(e.geometries||[]).map((e=>m(e).set({spatialReference:y})))))}async function b(n,o,a,i){const f=o[0].spatialReference,c=t(n),p={...c.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r(o)),geometry:JSON.stringify({geometryType:g(a),geometry:a.toJSON()})},y=s(p,i);return e(c.path+"/intersect",y).then((({data:e})=>(e.geometries||[]).map((e=>m(e).set({spatialReference:f})))))}function M(r,n,o){const a=n.map((e=>e.toJSON())),i=n[0].spatialReference,f=t(r),c={...f.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(a)},p=s(c,o);return e(f.path+"/labelPoints",p).then((({data:e})=>(e.labelPoints||[]).map((e=>m(e).set({spatialReference:i})))))}async function C(r,n,o){n=l.from(n);const i=a(n),f=t(r),c={...f.query,f:"json",...i},p=s(c,o);return e(f.path+"/lengths",p).then((({data:e})=>e))}async function E(r,n,o){n=d.from(n);const a=i(n),f=t(r),c={...f.query,f:"json",...a},p=n.geometries[0].spatialReference,y=s(c,o);return e(f.path+"/offset",y).then((({data:e})=>(e.geometries||[]).map((e=>m(e).set({spatialReference:p})))))}async function G(r,n,o){n=S.from(n);const a=f(n),i=t(r),c={...i.query,f:"json",...a},p=s(c,o);return e(i.path+"/relation",p).then((({data:e})=>e.relations))}async function z(r,n,o,a){const i=n.spatialReference,f=t(r),c={...f.query,f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:g(n),geometry:n.toJSON()}),reshaper:JSON.stringify(o.toJSON())},p=s(c,a);return e(f.path+"/reshape",p).then((({data:e})=>m(e.geometry).set({spatialReference:i})))}async function D(t,s,n){const o="string"==typeof t?O(t):t,a=s[0].spatialReference,i=g(s[0]),f={...n,query:{...o.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a),geometries:JSON.stringify(r(s))}},{data:p}=await e(o.path+"/simplify",f);return c(p.geometries,i,a)}async function I(r,o,a){const i={};null!=o.sr&&"object"==typeof o.sr?i.sr=o.sr.wkid||JSON.stringify(o.sr):i.sr=o.sr,i.coordinates=JSON.stringify(o.coordinates);const f=o.conversionType||"mgrs";i.conversionType=n.toJSON(f),i.conversionMode=o.conversionMode,i.numOfDigits=o.numOfDigits,i.rounding=o.rounding,i.addSpaces=o.addSpaces;const c=t(r),p={...c.query,f:"json",...i},y=s(p,a);return e(c.path+"/toGeoCoordinateString",y).then((({data:e})=>e.strings))}async function L(r,n,o){n=h.from(n);const a=p(n),i=t(r),f={...i.query,f:"json",...a},c=n.sr,y=s(f,o);return e(i.path+"/trimExtend",y).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new J({spatialReference:c,paths:e})))))}async function U(n,o,a){const i=o[0].spatialReference,f=t(n),c={...f.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(r(o))},p=s(c,a);return e(f.path+"/union",p).then((({data:e})=>m(e.geometry).set({spatialReference:i})))}export{N as a,j as b,R as c,q as d,w as e,v as f,P as g,T as h,k as i,x as j,b as k,M as l,C as m,z as n,E as o,L as p,G as r,D as s,I as t,U as u};
