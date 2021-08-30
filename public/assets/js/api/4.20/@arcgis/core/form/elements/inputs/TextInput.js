/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./Input.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/Message.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/write.js";let e=class extends t{constructor(r){super(r),this.maxLength=null,this.minLength=0}};r([s({type:Number,json:{write:!0}})],e.prototype,"maxLength",void 0),r([s({type:Number,json:{write:!0}})],e.prototype,"minLength",void 0),e=r([o("esri.form.elements.inputs.TextInput")],e);var p=e;export default p;
