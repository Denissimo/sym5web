/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import s from"../../core/Error.js";import{i as r}from"../../core/lang.js";import{v as o,b as t}from"../../chunks/utils6.js";import{b as e,a as i}from"../../chunks/utils7.js";import{c as p,g as a}from"../../chunks/layerUtils2.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/collectionUtils.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../chunks/assets.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../symbols/Symbol.js";import"../../core/watchUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/persistableUrlUtils.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/predominanceUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/heatmapUtils.js";import"../../renderers/support/jsonUtils.js";import"../../renderers/ClassBreaksRenderer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/commonProperties.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/executeForTopCount.js";import"../../chunks/utils5.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/FeatureSet.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../tasks/Task.js";async function m(m){const{layerAdapter:n,...l}=await async function(m){if(!m||!m.layer||!m.field&&!m.valueExpression)throw new s("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(m.valueExpression&&!m.view)throw new s("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");const n=[0,2,1,3,5],{layer:l,...u}=m,j=p(l,n),c={layerAdapter:j,...u};if(c.normalizationType=e(c),c.numClasses=c.numClasses||5,!j)throw new s("class-breaks:invalid-parameters","'layer' must be one of these types: "+a(n).join(", "));const y=r(c.signal)?{signal:c.signal}:null;await j.load(y);const h=c.field,d=c.minValue,k=c.maxValue,b=null!=d||null!=k,f=c.classificationMethod,S="percent-of-total"===c.normalizationType,g=!1!==c.analyzeData,U=h?j.getField(h):null,w=await i({field:c.field,normalizationField:c.normalizationField,valueExpression:c.valueExpression}),C=o(j,w,"class-breaks:invalid-parameters");if(C)throw C;if(U){const s=t(j,U,"class-breaks:invalid-parameters");if(s)throw s}if(c.valueExpression&&c.normalizationType)throw new s("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(b)if(g){if(S&&null==c.normalizationTotal)throw new s("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==d||null==k)throw new s("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(d>=k)throw new s("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(f&&"equal-interval"!==f)throw new s("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(S&&null==c.normalizationTotal)throw new s("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!g)throw new s("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return c}(m);return n.classBreaks(l)}export default m;