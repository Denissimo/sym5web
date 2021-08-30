/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{a as r}from"../../chunks/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{e as s}from"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as i}from"../../geometry/support/jsonUtils.js";import p from"../../geometry/Polyline.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/write.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";let m=class extends r{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};o([t({type:String,json:{write:!0}})],m.prototype,"calculationType",void 0),o([t({type:Boolean,json:{write:!0}})],m.prototype,"geodesic",void 0),o([t({json:{write:!0}})],m.prototype,"lengthUnit",void 0),o([t({type:[p],json:{read:{reader:o=>o?o.map((o=>i(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()))}}}})],m.prototype,"polylines",void 0),m=o([e("esri.rest.support.LengthsParameters")],m),m.from=s(m);var n=m;export default n;