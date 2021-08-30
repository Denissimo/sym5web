/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../Color.js";import{clone as o}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{collectField as p}from"../layers/support/fieldUtils.js";import m from"./Renderer.js";import n from"./support/HeatmapColorStop.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/jsonMap.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/write.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";var l;let a=l=class extends m{constructor(t){super(t),this.blurRadius=10,this.colorStops=[new n({ratio:0,color:new r("rgba(255, 140, 0, 0)")}),new n({ratio:.75,color:new r("rgba(255, 140, 0, 1)")}),new n({ratio:.9,color:new r("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(t,r){const o=this.field;o&&"string"==typeof o&&p(t,r,o)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new l({blurRadius:this.blurRadius,colorStops:o(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};t([s({type:Number,json:{write:!0}})],a.prototype,"blurRadius",void 0),t([s({type:[n],json:{write:!0}})],a.prototype,"colorStops",void 0),t([s({type:String,json:{write:!0}})],a.prototype,"field",void 0),t([s({type:Number,json:{write:{overridePolicy:(t,r,o)=>({enabled:null==o})}}})],a.prototype,"fieldOffset",void 0),t([s({type:Number,json:{write:!0}})],a.prototype,"maxPixelIntensity",void 0),t([s({type:Number,json:{write:!0}})],a.prototype,"minPixelIntensity",void 0),t([e({heatmap:"heatmap"})],a.prototype,"type",void 0),a=l=t([i("esri.renderers.HeatmapRenderer")],a);var u=a;export default u;
