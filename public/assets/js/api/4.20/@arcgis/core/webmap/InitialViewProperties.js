/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../Viewpoint.js";import r from"../core/Accessor.js";import{clone as o}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"../geometry/SpatialReference.js";import{a as p}from"../chunks/JSONSupport.js";import a from"./background/ColorBackground.js";import"../Camera.js";import"../chunks/mathUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/write.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/mathUtils2.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";var c;let m=c=class extends p{constructor(t){super(t),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new c(o({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};t([s({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],m.prototype,"activeRange",void 0),t([s({type:[Number],json:{write:!0}})],m.prototype,"currentRangeExtent",void 0),t([s({type:[Number],json:{write:!0}})],m.prototype,"fullRangeExtent",void 0),m=c=t([i("esri.webdoc.RangeInfo")],m);var u,l=m;let j=u=class extends r{constructor(t){super(t),this.background=null,this.rangeInfo=null,this.spatialReference=null,this.viewpoint=null}clone(){return new u(o({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))}};t([s({type:a})],j.prototype,"background",void 0),t([s({type:l})],j.prototype,"rangeInfo",void 0),t([s({type:n})],j.prototype,"spatialReference",void 0),t([s({type:e})],j.prototype,"viewpoint",void 0),j=u=t([i("esri.webmap.InitialViewProperties")],j);var g=j;export default g;export{l as R};
