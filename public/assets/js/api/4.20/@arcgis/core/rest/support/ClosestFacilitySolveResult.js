/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../geometry.js";import s from"../../Graphic.js";import{a as r}from"../../chunks/JSONSupport.js";import{i as t}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{r as p}from"../../chunks/reader.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import m from"../../geometry/SpatialReference.js";import l from"./DirectionsFeatureSet.js";import n from"./FeatureSet.js";import a from"./NAMessage.js";import u from"../../geometry/Point.js";import j from"../../geometry/Polyline.js";import c from"../../geometry/Polygon.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/write.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/extentUtils.js";import"../../PopupTemplate.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../request.js";import"../../kernel.js";import"../../chunks/assets.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/uid.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"./GPMessage.js";function y(o){return n.fromJSON(o).features.map((o=>o.geometry))}let d=class extends r{constructor(o){super(o),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(o){return y(o)}readIncidents(o){return y(o)}readPointBarriers(o,s){return y(s.barriers)}readPolylineBarriers(o){return y(o)}readPolygonBarriers(o){return y(o)}readRoutes(o){return function(o){return o.features.map((r=>{const e=m.fromJSON(o.spatialReference),p=s.fromJSON(r);return t(p.geometry)&&(p.geometry.spatialReference=e),p}))}(o)}};o([e({type:[l]})],d.prototype,"directions",void 0),o([e({type:[u]})],d.prototype,"facilities",void 0),o([p("facilities")],d.prototype,"readFacilities",null),o([e({type:[u]})],d.prototype,"incidents",void 0),o([p("incidents")],d.prototype,"readIncidents",null),o([e({type:[a]})],d.prototype,"messages",void 0),o([e({type:[u]})],d.prototype,"pointBarriers",void 0),o([p("pointBarriers",["barriers"])],d.prototype,"readPointBarriers",null),o([e({type:[j]})],d.prototype,"polylineBarriers",void 0),o([p("polylineBarriers")],d.prototype,"readPolylineBarriers",null),o([e({type:[c]})],d.prototype,"polygonBarriers",void 0),o([p("polygonBarriers")],d.prototype,"readPolygonBarriers",null),o([e({type:[s]})],d.prototype,"routes",void 0),o([p("routes")],d.prototype,"readRoutes",null),d=o([i("esri.rest.support.ClosestFacilitySolveResult")],d);var b=d;export default b;