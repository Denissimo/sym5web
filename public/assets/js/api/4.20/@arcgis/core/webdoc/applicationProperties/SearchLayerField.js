/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{a as s}from"../../chunks/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{e as o}from"../../chunks/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{k as p}from"../../chunks/fieldType.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";import"../../chunks/jsonMap.js";var i;let c=i=class extends s{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new i({exactMatch:this.exactMatch,type:this.type,name:this.name})}};r([t({type:Boolean,json:{write:!0}})],c.prototype,"exactMatch",void 0),r([t({type:String,json:{write:!0}})],c.prototype,"name",void 0),r([o(p)],c.prototype,"type",void 0),c=i=r([e("esri.webdoc.applicationProperties.SearchLayerField")],c);var a=c;export default a;