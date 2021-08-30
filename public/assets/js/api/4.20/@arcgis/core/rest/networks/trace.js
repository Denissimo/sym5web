/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import r from"../../request.js";import{p as t,e,a as o}from"../../chunks/utils5.js";import s from"./support/TraceResult.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/object.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../core/promiseUtils.js";import"../../chunks/tslib.es6.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../chunks/write.js";import"./support/AggregatedGeometry.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"./support/FunctionResult.js";import"./support/NetworkElement.js";async function i(i,p,m){const c=t(i),n=p.toJSON();n.traceLocations=JSON.stringify(p.traceLocations);const a={...n,f:"json"},u=e({...c.query,...a}),j=o(u,m),g=`${c.path}/trace`;return r(g,j).then((r=>function(r,t){const{data:e}=r;if(!e)return null;const o=s.fromJSON(e.traceResults);o.aggregatedGeometry&&t&&(o.aggregatedGeometry.line&&(o.aggregatedGeometry.line.spatialReference=t.clone()),o.aggregatedGeometry.multipoint&&(o.aggregatedGeometry.multipoint.spatialReference=t.clone()),o.aggregatedGeometry.polygon&&(o.aggregatedGeometry.polygon.spatialReference=t.clone()));return o}(r,p.outSpatialReference)))}export{i as trace};
