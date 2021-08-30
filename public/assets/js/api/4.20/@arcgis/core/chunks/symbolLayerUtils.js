/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import r from"../request.js";import e from"../core/Error.js";import{I as o}from"./ItemCache.js";import{i as t}from"../core/lang.js";import{y as s,c as i}from"./aaBoundingBox.js";import{a as n,o as m}from"./symbolLayerUtils3D.js";import"../config.js";import"./object.js";import"../kernel.js";import"../core/urlUtils.js";import"./Logger.js";import"./string.js";import"./Message.js";import"../core/promiseUtils.js";import"./MemCache.js";import"../core/scheduling.js";import"./arrayUtils.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./aaBoundingRect.js";import"./mathUtils.js";let p=c();function c(){return new o(50)}function a(){p=c()}function u(r,o){if("icon"===r.type)return j(r,o);if("object"===r.type)return y(r,o);throw new e("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(r,o){if("icon"===r.type)return function(r,e){return j(r,e).then((e=>{if(null==r.size)return e;const o=e[0]/e[1];return o>1?[r.size,r.size/o]:[r.size*o,r.size]}))}(r,o);if("object"===r.type)return async function(r,e){const o=await y(r,e);return n(o,r)}(r,o);throw new e("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function j(o,s){if(o.resource.href)return(i=o.resource.href,r(i,{responseType:"image"}).then((r=>r.data))).then((r=>[r.width,r.height]));var i;if(o.resource.primitive)return t(s)?[s,s]:[256,256];throw new e("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function y(r,o){return async function(r,o){if(!r.isPrimitive){const e=r.resource.href,o=p.get(e);if(void 0!==o)return Promise.resolve(o);const t=await import("./objectResourceUtils.js").then((function(r){return r.o})),s=await t.fetch(e,{disableTextures:!0});return p.put(e,s.referenceBoundingBox),s.referenceBoundingBox}let s=null;if(r.resource&&r.resource.primitive&&(s=i(m(r.resource.primitive)),t(o)))for(let r=0;r<s.length;r++)s[r]*=o;return s?Promise.resolve(s):Promise.reject(new e("symbol:invalid-resource","The symbol does not have a valid resource"))}(r,o).then((r=>s(r)))}export{a as clearBoundingBoxCache,j as computeIconLayerResourceSize,u as computeLayerResourceSize,l as computeLayerSize,y as computeObjectLayerResourceSize};
