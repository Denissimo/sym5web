/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import e from"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import s from"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import o from"../../core/Error.js";import{clone as r,i as t}from"../../core/lang.js";import{fetchMessageBundle as i}from"../../intl.js";import{a as p}from"../../chunks/LegendOptions.js";import{a as l,b as n}from"../../chunks/utils9.js";import{o as a,b as m,v as u,i as c,d as j,m as y,n as d,l as h,p as b}from"../../chunks/utils10.js";import f from"../heuristics/sizeRange.js";import k from"../statistics/uniqueValues.js";import{a as g}from"../../chunks/utils7.js";import{c as S,g as v}from"../../chunks/layerUtils2.js";import{cloneScheme as w,getSchemes as U}from"../symbology/type.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Message.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../chunks/assets.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/commonProperties.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/numberUtils.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/utils6.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/generateRendererUtils.js";import"../../core/watchUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/predominanceUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/heatmapUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/executeForTopCount.js";import"../../chunks/utils5.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/FeatureSet.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../tasks/Task.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils11.js";async function T(e){let s=e.typeScheme,o=null,r=null;const i=await b(e.basemap,e.view);if(o=t(i.basemapId)?i.basemapId:null,r=t(i.basemapTheme)?i.basemapTheme:null,s)return{scheme:w(s),basemapId:o,basemapTheme:r};const p=U({basemap:o,basemapTheme:r,geometryType:e.geometryType,theme:e.theme,worldScale:e.worldScale,view:e.view});return p&&(s=p.primaryScheme,o=p.basemapId,r=p.basemapTheme),{scheme:s,basemapId:o,basemapTheme:r}}function I(e,s){let o;return o=e.label<s.label?-1:e.label>s.label?1:0,o}function V(e,s){let o;return o=e.value<s.value?-1:e.value>s.value?1:0,o}function C(e,s){let o=s.count-e.count;return 0===o&&(o=I(e,s)),o}function M(e,s){let o=s.count-e.count;return 0===o&&(o=V(e,s)),o}function E(e,s,o){let r;"count"===s?(r=M,o&&o.codedValues&&(r=C)):"value"===s&&(r=V,o&&o.codedValues&&(r=I)),r&&e.sort(r)}async function x(e,s){const o=e.uniqueValueInfos,r=await T({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:s}),t=r&&r.scheme,i="point-cloud-class"===t.theme,p=i?t.colors:j(t.colors,o.length);return E(o,"value"),o.map(((e,s)=>{const o=e.value;let r=null;return i?(r=p[o],r||(r=p[p.length-1])):r=p[s],{values:[o],color:r,label:e.label}}))}async function D(e){const m=await async function(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new o("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new o("type-renderer:missing-parameters","View is required when 'valueExpression' is specified");const s={...e};s.symbolType=s.symbolType||"2d",s.numTypes=null==s.numTypes?10:s.numTypes,s.defaultSymbolEnabled=null==s.defaultSymbolEnabled||s.defaultSymbolEnabled,s.sortBy=null==s.sortBy?"count":s.sortBy,s.sortEnabled=null==s.sortEnabled||s.sortEnabled,s.statistics=r(s.statistics);const i=[0,2,1,3,5],p=S(s.layer,i);if(s.layer=p,!p)throw new o("type-renderer:invalid-parameters","'layer' must be one of these types: "+v(i).join(", "));const l=t(s.signal)?{signal:s.signal}:null;await p.load(l);const n=p.geometryType;if(s.outlineOptimizationEnabled="polygon"===n&&s.outlineOptimizationEnabled,s.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&s.sizeOptimizationEnabled,"mesh"===n)s.symbolType="3d-volumetric",s.colorMixMode=s.colorMixMode||"replace",s.edgesType=s.edgesType||"none";else{if("3d-volumetric-uniform"===s.symbolType&&"point"!==n)throw new o("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(s.symbolType.indexOf("3d-volumetric")>-1&&(!s.view||"3d"!==s.view.type))throw new o("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const a=await g({field:s.field,valueExpression:s.valueExpression}),m=u(p,a,"type-renderer:invalid-parameters");if(m)throw m;return s}(e),{layer:c,view:b,signal:U}=m,I={layer:c,field:m.field,valueExpression:m.valueExpression,returnAllCodedValues:m.returnAllCodedValues,view:b,signal:U},[V,C,M]=await Promise.all([null!=m.statistics?m.statistics:k(I),m.outlineOptimizationEnabled?a({layer:c,view:b,signal:U}):null,m.sizeOptimizationEnabled?f({layer:c,view:b,signal:U}):null]);return async function(e,o,r,t){const a=await i("esri/smartMapping/t9n/smartMapping"),m=e.uniqueValueInfos,u=o.layer,c=o.field,b=c?u.getField(c):null,f=b?u.getFieldDomain(b.name):null,k=-1===o.numTypes?m.length:o.numTypes,g=u.geometryType,S=await T({basemap:o.basemap,geometryType:g,typeScheme:o.typeScheme,worldScale:o.symbolType.indexOf("3d-volumetric")>-1,view:o.view}),v=S.scheme,U=new s({field:c});let I,V=-1;const C={value:null,domain:f,fieldInfo:b};if(m.forEach(((e,s)=>{C.value=e.value,e.label=l(C),null===e.value&&(V=s)})),V>-1&&(I=m.splice(V,1)[0]),!1!==o.sortEnabled&&E(m,o.sortBy,f),b&&"date"===b.type){const e=m.filter(((e,s)=>s<k)).map((e=>e.value));C.dateFormatInterval=n(e)}const M=r&&r.opacity;let x=j(v.colors,m.length);const D=y(v,g),z=d(v,g,M);m.forEach(((e,s)=>{C.value=e.value,e.label=l(C),e.symbol=h(g,{type:o.symbolType,color:x[s],size:D,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})),o.valueExpression&&(U.valueExpression=o.valueExpression,U.valueExpressionTitle=o.valueExpressionTitle),o.legendOptions&&(U.legendOptions=new p(o.legendOptions)),x=j(v.colors,k);for(let e=0;e<k;e++){const s=m[e];s&&U.addUniqueValueInfo({value:s.value,label:s.label,symbol:h(g,{type:o.symbolType,color:x[e],size:D,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})}o.defaultSymbolEnabled&&(U.defaultSymbol=h(g,{type:o.symbolType,color:v.noDataColor,size:D,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),U.defaultLabel=a.other),I&&(I.symbol=h(g,{type:o.symbolType,color:v.noDataColor,size:D,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),m.push(I));const R=[],P=U.uniqueValueInfos.length===m.length?-1:U.uniqueValueInfos.length;if(P>-1)for(let e=P;e<m.length;e++)R.push({...m[e]});return r&&r.visualVariables&&r.visualVariables.length&&(U.visualVariables=r.visualVariables.map((e=>e.clone()))),t&&t.minSize&&(U.visualVariables?U.visualVariables.push(t.minSize):U.visualVariables=[t.minSize]),{renderer:U,uniqueValueInfos:m,excludedUniqueValueInfos:R,typeScheme:w(v),basemapId:S.basemapId,basemapTheme:S.basemapTheme}}(V,m,C,M)}async function z(s){const i=await async function(e){if(!(e&&e.layer&&e.field))throw new o("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");const s={...e};s.statistics=r(s.statistics);const i=[4],p=S(s.layer,i);if(s.layer=p,s.density=s.density||25,s.size=s.size||"100%",!c(s.size))throw new o("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");if(!p)throw new o("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+v(i).join(", "));const l=t(s.signal)?{signal:s.signal}:null;await p.load(l);const n=await g({field:s.field}),a=u(p,n,"type-point-cloud-class-renderer:invalid-parameters");if(a)throw a;return s}(s),p=null!=i.statistics?i.statistics:await k({layer:i.layer,field:i.field,signal:i.signal});return{renderer:new e({field:i.field,pointsPerInch:i.density,pointSizeAlgorithm:m(i.size),colorUniqueValueInfos:await x(p,i.typeScheme)})}}export{z as createPCClassRenderer,D as createRenderer};
