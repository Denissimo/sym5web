/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import t from"../core/Collection.js";import{M as o}from"./MultiOriginJSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{r as s}from"./reader.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"../layers/FeatureLayer.js";import m from"../layers/Layer.js";import{O as l}from"./OperationalLayer.js";import{P as a}from"./PortalLayer.js";import"./ArrayPool.js";import"./Evented.js";import"../core/Accessor.js";import"./deprecate.js";import"./metadata.js";import"./handleUtils.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"./Message.js";import"./object.js";import"../config.js";import"./string.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"./write.js";import"../PopupTemplate.js";import"./JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"./jsonMap.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"../request.js";import"../kernel.js";import"./assets.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"./uid.js";import"./compilerUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"./devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"../core/Handles.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"./FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./shared.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./fieldType.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./TemporalLayer.js";import"../TimeExtent.js";import"./timeUtils.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./commonProperties2.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./DataLayerSource.js";import"./styleUtils2.js";import"./asyncUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/Query.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";let n=class extends(l(a(o(m)))){constructor(...r){super(...r),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(r,t,o){return this.revert("featureCollections","portal-item"),t.layers.map((r=>{const t=new p;return t.read(r,o),t}))}readFeatureCollectionsFromWebMap(r,t,o){return t.featureCollection.layers.map((r=>{const t=new p;return t.read(r,o),t}))}get fullExtent(){return this.featureCollections?this.featureCollections.reduce(((r,t)=>r?r.union(t.fullExtent):t.fullExtent),null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce(((r,t)=>null==r?t.maxScale:Math.min(r,t.maxScale)),null):0}set maxScale(r){this.featureCollections.forEach((t=>{t.maxScale=r})),this._set("maxScale",r)}get minScale(){return this.featureCollections?this.featureCollections.reduce(((r,t)=>null==r?t.minScale:Math.min(r,t.minScale)),null):0}set minScale(r){this.featureCollections.forEach((t=>{t.minScale=r})),this._set("minScale",r)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(r){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},r)),Promise.resolve(this)}_getNamedFeatureLayer(r){if(this.featureCollections)return this.featureCollections.find((t=>t.title===r))}};r([e()],n.prototype,"barrierLines",null),r([e()],n.prototype,"barrierPoints",null),r([e()],n.prototype,"barrierPolygons",null),r([e()],n.prototype,"directionLines",null),r([e()],n.prototype,"directionPoints",null),r([e({type:t.ofType(p)})],n.prototype,"featureCollections",void 0),r([s("portal-item","featureCollections",["layers"])],n.prototype,"readFeatureCollectionsFromItem",null),r([s("web-map","featureCollections",["featureCollection.layers"])],n.prototype,"readFeatureCollectionsFromWebMap",null),r([e({readOnly:!0})],n.prototype,"fullExtent",null),r([e({type:["show","hide"]})],n.prototype,"listMode",void 0),r([e()],n.prototype,"maxScale",null),r([e()],n.prototype,"minScale",null),r([e()],n.prototype,"routeInfo",null),r([e()],n.prototype,"stops",null),r([e({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=r([i("esri.layers.RouteLayer")],n);var j=n;export default j;