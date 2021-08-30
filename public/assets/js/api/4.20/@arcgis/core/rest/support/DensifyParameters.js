/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as e}from"../../geometry.js";import{J as s}from"../../chunks/jsonMap.js";import{a as o}from"../../chunks/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{getJsonType as m}from"../../geometry/support/jsonUtils.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/write.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";const n=new s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let p=class extends o{constructor(t){super(t),this.geometries=null,this.geodesic=null,this.lengthUnit=null,this.maxSegmentLength=null}toJSON(){const t={};if(this.geometries&&this.geometries.length>0){const e=this.geometries.map((function(t){return t.toJSON()}));t.geometries=JSON.stringify({geometryType:m(this.geometries[0]),geometries:e}),t.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}return this.geodesic&&(t.geodesic=this.geodesic),this.lengthUnit&&(t.lengthUnit=n.toJSON(this.lengthUnit)),this.maxSegmentLength&&(t.maxSegmentLength=this.maxSegmentLength),t}};t([r({types:[e],json:{write:!0}})],p.prototype,"geometries",void 0),t([r({type:Boolean,json:{write:!0}})],p.prototype,"geodesic",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"lengthUnit",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxSegmentLength",void 0),p=t([i("esri.rest.support.DensifyParameters")],p);var c=p;export default c;