/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{clone as o}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import p from"./AlgorithmicColorRamp.js";import i from"./ColorRamp.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";var e;let m=e=class extends i{constructor(r){super(r),this.colorRamps=null,this.type="multipart"}clone(){return new e({colorRamps:o(this.colorRamps)})}};r([s({type:[p],json:{write:!0}})],m.prototype,"colorRamps",void 0),r([s({type:["multipart"]})],m.prototype,"type",void 0),m=e=r([t("esri.rest.support.MultipartColorRamp")],m);var c=m;export default c;
