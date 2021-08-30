/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{m as o,r as a}from"./asyncUtils.js";import r from"../core/Collection.js";import{L as l}from"./Loadable.js";import{b as s}from"../core/lang.js";async function t(o,a){return await o.load(),n(o,a)}async function n(t,n){const i=[],c=(...o)=>{for(const a of o)s(a)||(Array.isArray(a)?c(...a):r.isCollection(a)?a.forEach((o=>c(o))):l.isLoadable(a)&&i.push(a))};n(c);let f=null;if(await o(i,(async o=>{var r;!1!==(await a((r=o,"loadAll"in r&&"function"==typeof r.loadAll?o.loadAll():o.load()))).ok||f||(f=o)})),f)throw f.loadError;return t}export{n as a,t as l};
