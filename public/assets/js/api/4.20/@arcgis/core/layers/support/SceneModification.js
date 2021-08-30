/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{a as t}from"../../chunks/JSONSupport.js";import{clone as r}from"../../core/lang.js";import{W as s,subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{w as p}from"../../chunks/writer.js";import{p as m}from"../../chunks/persistable.js";import{canProjectWithoutEngine as n,projectPolygon as c}from"../../geometry/projection.js";import a from"../../geometry/Polygon.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/write.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../core/urlUtils.js";import"../../chunks/uuid.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";var l;let u=l=class extends t{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!n(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new s("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const i=new a;c(e,i,o.layer.spatialReference),t[r]=i.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new l({geometry:r(this.geometry),type:this.type})}};e([i({type:a}),m()],u.prototype,"geometry",void 0),e([p(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),e([i({type:["clip","mask","replace"],nonNullable:!0}),m()],u.prototype,"type",void 0),u=l=e([o("esri.layers.support.SceneModification")],u);var j=u;export default j;
