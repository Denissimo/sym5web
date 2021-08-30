/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as e}from"../../geometry.js";import s from"../../core/Accessor.js";import{J as o}from"../../chunks/jsonMap.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{getJsonType as p}from"../../geometry/support/jsonUtils.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../chunks/write.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/arrayUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";const m=new o({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let n=class extends s{constructor(t){super(t),this.geometry1=null,this.geometry2=null,this.distanceUnit=null,this.geodesic=null}toJSON(){const t={},e=this.geometry1;e&&(t.geometry1=JSON.stringify({geometryType:p(e),geometry:e}),t.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));const s=this.geometry2;return s&&(t.geometry2=JSON.stringify({geometryType:p(s),geometry:s})),this.distanceUnit&&(t.distanceUnit=m.toJSON(this.distanceUnit)),this.geodesic&&(t.geodesic=this.geodesic),t}};t([r({types:e,json:{write:!0}})],n.prototype,"geometry1",void 0),t([r({types:e,json:{write:!0}})],n.prototype,"geometry2",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"distanceUnit",void 0),t([r({type:Boolean,json:{write:!0}})],n.prototype,"geodesic",void 0),n=t([i("esri.rest.support.DistanceParameters")],n);var c=n;export default c;