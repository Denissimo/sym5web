/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{e as t}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudRenderer.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/Message.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/write.js";import"../chunks/PointSizeSplatAlgorithm.js";var p;let n=p=class extends i{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new p({...this.cloneProperties(),field:o(this.field)})}};r([t({pointCloudRGBRenderer:"point-cloud-rgb"})],n.prototype,"type",void 0),r([s({type:String,json:{write:!0}})],n.prototype,"field",void 0),n=p=r([e("esri.renderers.PointCloudRGBRenderer")],n);var c=n;export default c;