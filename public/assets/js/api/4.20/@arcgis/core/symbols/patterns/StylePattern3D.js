/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{a as o}from"../../chunks/JSONSupport.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";let e=class extends o{constructor(s){super(s)}clone(){}};s([r({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],e.prototype,"type",void 0),e=s([t("esri.symbols.patterns.Pattern3D")],e);var i,p=e;let c=i=class extends p{constructor(s){super(s),this.type="style",this.style="solid"}clone(){return new i({style:this.style})}};s([r({type:["style"]})],c.prototype,"type",void 0),s([r({type:["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"],json:{read:!0,write:!0}})],c.prototype,"style",void 0),c=i=s([t("esri.symbols.patterns.StylePattern3D")],c);var a=c;export default a;export{p as P};
