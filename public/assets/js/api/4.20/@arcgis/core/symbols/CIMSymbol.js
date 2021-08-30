/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{n as t}from"../chunks/string.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{r as i}from"../chunks/reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as m}from"../chunks/writer.js";import{collectArcadeFieldNames as a}from"../layers/support/fieldUtils.js";import n from"./Symbol.js";import"../chunks/object.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/write.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";var c;let l=c=class extends n{constructor(r){super(r),this.data=null,this.type="cim"}readData(r,o){return o}writeData(r,o){if(r)for(const t in r)o[t]=r[t]}async collectRequiredFields(r,o){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const s=t.map((t=>{const s=t.valueExpressionInfo;return a(r,o,s.expression)}));await Promise.all(s)}}}clone(){return new c({data:o(this.data)})}hash(){return t(JSON.stringify(this.data)).toString()}};r([s({json:{write:!1}})],l.prototype,"color",void 0),r([s({json:{write:!0}})],l.prototype,"data",void 0),r([i("data",["symbol"])],l.prototype,"readData",null),r([m("data")],l.prototype,"writeData",null),r([e({CIMSymbolReference:"cim"},{readOnly:!0})],l.prototype,"type",void 0),l=c=r([p("esri.symbols.CIMSymbol")],l);var j=l;export default j;
