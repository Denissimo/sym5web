/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{a as s}from"../../chunks/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";let e=class extends s{constructor(r){super(r),this.id=null,this.name=null}};r([o({type:Number,json:{read:{source:"terminalId"},write:{target:"terminalId"}}})],e.prototype,"id",void 0),r([o({type:String,json:{read:{source:"terminalName"},write:{target:"terminalName"}}})],e.prototype,"name",void 0),r([o({type:Boolean,json:{write:!0}})],e.prototype,"isUpstreamTerminal",void 0),e=r([t("esri.networks.support.Terminal")],e);var i=e;export default i;
