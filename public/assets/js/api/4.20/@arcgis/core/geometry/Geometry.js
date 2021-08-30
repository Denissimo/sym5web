/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{a as r}from"../chunks/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as o}from"../chunks/reader.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import i from"./SpatialReference.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/write.js";import"../chunks/writer.js";let c=class extends r{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=i.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,r){if(e instanceof i)return e;if(null!=e){const t=new i;return t.read(e,r),t}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,r){this.cache[e]=r}};e([t()],c.prototype,"type",void 0),e([t({readOnly:!0})],c.prototype,"cache",null),e([t({readOnly:!0})],c.prototype,"extent",null),e([t({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],c.prototype,"hasZ",void 0),e([t({type:i,json:{write:!0}})],c.prototype,"spatialReference",void 0),e([o("spatialReference")],c.prototype,"readSpatialReference",null),c=e([s("esri.geometry.Geometry")],c);var n=c;export default n;