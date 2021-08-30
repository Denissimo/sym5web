/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{a as r}from"../../chunks/JSONSupport.js";import{e as o,f as e}from"../../chunks/unitUtils.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";let p=class extends r{constructor(s){super(s),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};s([t({type:String,json:{read:{source:"shapeAreaFieldName"}}})],p.prototype,"shapeAreaField",void 0),s([t({type:String,json:{read:{source:"shapeLengthFieldName"}}})],p.prototype,"shapeLengthField",void 0),s([t({type:String,json:{read:s=>o.read(s)||e.read(s)}})],p.prototype,"units",void 0),p=s([i("esri.layers.support.GeometryFieldsInfo")],p);var c=p;export default c;