/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import r from"./ActionBase.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Identifiable.js";var o;let e=o=class extends r{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};s([t()],e.prototype,"image",void 0),s([t()],e.prototype,"value",void 0),e=o=s([i("esri.support.Action.ActionToggle")],e);var c=e;export default c;
