/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import e from"../../renderers/PointCloudRGBRenderer.js";import o from"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import s from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import r from"../../core/Error.js";import{i}from"../../core/lang.js";import{fetchMessageBundle as t,substitute as a}from"../../intl.js";import l from"../../renderers/support/AuthoringInfo.js";import n from"../../renderers/support/AuthoringInfoVisualVariable.js";import{c as m,s as p}from"../../chunks/utils9.js";import u from"../../renderers/visualVariables/ColorVariable.js";import{a as c}from"../../chunks/ageUnit.js";import{g as d,a as y,o as h,b,f as j,u as f,c as v,v as g,i as w,d as k,e as T,h as S,j as x,k as V,l as E,m as z,n as M,p as I,q as U}from"../../chunks/utils10.js";import C from"../heuristics/sizeRange.js";import{getAgeExpressions as O,verifyDates as P,supportedAgeUnits as D}from"../statistics/support/ageUtils.js";import{a as F,b as R}from"../../chunks/utils7.js";import{c as q,g as L}from"../../chunks/layerUtils2.js";import{cloneScheme as B,getSchemes as A,getSchemeById as Q}from"../symbology/color.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Message.js";import"../../chunks/LegendOptions.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../chunks/assets.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/commonProperties.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/numberUtils.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/summaryStatistics.js";import"../../chunks/utils6.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../core/watchUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/predominanceUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/heatmapUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/executeForTopCount.js";import"../../chunks/utils5.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/FeatureSet.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../tasks/Task.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils11.js";function G(e){const o={...e},s=o.symbolType.indexOf("3d-volumetric")>-1;delete o.symbolType,delete o.defaultSymbolEnabled,delete o.colorMixMode,delete o.edgesType;const r=o;return r.worldScale=s,r}async function W(e,o){let s=e.colorScheme,r=null,t=null;const a=await I(e.basemap,e.view);if(r=i(a.basemapId)?a.basemapId:null,t=i(a.basemapTheme)?a.basemapTheme:null,s)return{scheme:B(s),basemapId:r,basemapTheme:t};const l=o||e.theme||"high-to-low",n=A({theme:l,basemap:r,basemapTheme:t,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});if(n)if(r=n.basemapId,t=n.basemapTheme,e.schemeId){const o=l+"/"+r+"/"+e.schemeId;s=Q({id:o,geometryType:e.geometryType})}else s=n.primaryScheme;return{scheme:s,basemapId:r,basemapTheme:t}}async function H(e,o,r,i,a,l){const n=await t("esri/smartMapping/t9n/smartMapping"),m=l.layer,p=l.field,u=m.geometryType,c=l.defaultSymbolEnabled,d=B(e.colorScheme),y=o&&o.opacity,h=[e.visualVariable.clone()];o&&o.visualVariables&&o.visualVariables.length&&h.push(...o.visualVariables.map((e=>e.clone()))),r&&r.minSize&&h.push(r.minSize);return{renderer:new s({classBreakInfos:[{minValue:-9007199254740991,maxValue:9007199254740991,symbol:E(u,{type:l.symbolType,color:d.noDataColor,size:z(d,u),outline:M(d,u,y),meshInfo:{colorMixMode:l.colorMixMode,edgesType:l.edgesType}})}],defaultLabel:c?n.other:null,defaultSymbol:c?E(u,{type:l.symbolType,color:d.noDataColor,size:z(d,u),outline:M(d,u,y),meshInfo:{colorMixMode:l.colorMixMode,edgesType:l.edgesType}}):null,field:p,normalizationType:i,normalizationField:a,valueExpression:l.valueExpression,valueExpressionTitle:l.valueExpressionTitle,visualVariables:h,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:B(e.colorScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}async function $(e){const o=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};if("90-10"===o.theme)throw new r("color-visual-variable:not-supported","Only 'high-to-low', 'above-and-below', 'centered-on', 'extremes', 'above', 'below' themes are supported.");const s=[0,2,1,3,5],t=q(o.layer,s);if(o.layer=t,!t)throw new r("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+L(s).join(", "));const a=i(o.signal)?{signal:o.signal}:null;if(await t.load(a),"mesh"!==t.geometryType&&o.worldScale&&(!o.view||"3d"!==o.view.type))return Promise.reject(v("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"));const l=await F({field:o.field,normalizationField:o.normalizationField,valueExpression:o.valueExpression}),n=g(t,l,"color-visual-variable:invalid-parameters");if(n)throw n;return o}(e),{view:s,field:t,valueExpression:a,minValue:m,maxValue:p,layer:c,normalizationField:h,signal:b,statistics:j}=o,f=h?"field":void 0,[w,T]=await Promise.all([j||d({layer:c,field:t,valueExpression:a,sqlExpression:o.sqlExpression,sqlWhere:o.sqlWhere,normalizationType:f,normalizationField:h,minValue:m,maxValue:p,view:s,signal:b}),"90-10"===o.theme?y({layer:c,field:t,normalizationField:h,valueExpression:a,classificationMethod:"quantile",minValue:m,maxValue:p,view:s,numClasses:10,signal:b}):null]);return async function(e,o,s){const r=e.layer,{field:i,theme:t}=e,a=i&&"function"!=typeof i?r.getField(i):null,m=a&&"date"===a.type,p=await W({basemap:e.basemap,theme:e.theme,geometryType:r.geometryType,colorScheme:e.colorScheme,worldScale:e.worldScale,view:e.view}),c=p.scheme;if(!c)throw v("color-visual-variable:insufficient-info","Unable to find color scheme");const d=k(c.colors,5);if(d.length<5)throw v("color-visual-variable:insufficient-info","Color scheme does not have enough colors");const y=c.id.indexOf("seq-")>-1,h=x(o,s,t,m,"90-10"!==t),b=V(h,o,t,y),j=k(d,5),f=new u({field:i,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationField:e.normalizationField,stops:b.map(((e,o)=>({value:e,color:j[o]}))),legendOptions:e.legendOptions}),g=new n({type:"color",minSliderValue:null!=e.minValue?e.minValue:o.min,maxSliderValue:null!=e.maxValue?e.maxValue:o.max,theme:c.theme}),w=new l({visualVariables:[g]});return{basemapId:p.basemapId,basemapTheme:p.basemapTheme,visualVariable:f,statistics:o,defaultValuesUsed:h.defaultValuesUsed,colorScheme:B(c),authoringInfo:w}}(o,w,null==T?void 0:T.result)}async function J(e,o){const i=await t("esri/smartMapping/t9n/smartMapping"),a=e.layer,n=e.defaultSymbolEnabled,m=a.geometryType,u=await W({basemap:e.basemap,geometryType:m,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),c=u.scheme,{result:d,outlineResult:y}=o,h=d.classBreakInfos,b=e.classificationMethod,j="standard-deviation"===b,f=e.normalizationType;if(!c)throw new r("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const v=function(e,o){const s=e.colorsForClassBreaks;let r;if(s&&s.length>0&&(s.some((e=>(e.numClasses===o&&(r=e.colors),!!r))),!r)){const e=s[s.length-1],i=o-e.numClasses;if(i>0){const o=e.colors[e.numClasses-1];r=e.colors.splice(0);for(let e=1;e<=i;e++)r.push(o)}}return r&&(r=k(r,r.length)),r}(c,h.length);if(!v||v.length!==h.length)throw new r("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const g=y&&y.opacity,w=new s({classBreakInfos:h.map(((o,s)=>({minValue:o.minValue,maxValue:o.maxValue,symbol:E(m,{type:e.symbolType,color:v[s],size:z(c,m),outline:M(c,m,g),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:o.label}))),defaultLabel:n?i.other:null,defaultSymbol:n?E(m,{type:e.symbolType,color:c.noDataColor,size:z(c,m),outline:M(c,m,g),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:f,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===f?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new l({type:"class-breaks-color",classificationMethod:b,standardDeviationInterval:e.standardDeviationInterval})});return j||p({classBreakInfos:w.classBreakInfos,classificationMethod:b,normalizationType:f,round:!0}),y&&y.visualVariables&&y.visualVariables.length&&(w.visualVariables=y.visualVariables.map((e=>e.clone()))),{renderer:w,colorScheme:B(c),classBreaksResult:d,defaultValuesUsed:o.defaultValuesUsed,basemapId:u.basemapId,basemapTheme:u.basemapTheme}}async function N(e){const o=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled;const s=[0,2,1,3,5],t=q(o.layer,s);if(o.layer=t,!t)throw new r("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+L(s).join(", "));const a=i(o.signal)?{signal:o.signal}:null;await t.load(a);const l=t.geometryType;if(o.outlineOptimizationEnabled="polygon"===l&&o.outlineOptimizationEnabled,o.sizeOptimizationEnabled=("point"===l||"multipoint"===l||"polyline"===l)&&o.sizeOptimizationEnabled,"mesh"===l)o.symbolType="3d-volumetric",o.colorMixMode=o.colorMixMode||"replace",o.edgesType=o.edgesType||"none";else{if("3d-volumetric-uniform"===o.symbolType&&"point"!==l)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new r("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const n=await F({field:o.field,normalizationField:o.normalizationField,valueExpression:o.valueExpression}),m=g(t,n,"color-continuous-renderer:invalid-parameters");if(m)throw m;return o}(e),{layer:s,view:t,signal:a}=o,[l,n,m]=await Promise.all([$(G(o)),o.outlineOptimizationEnabled?h({layer:s,view:t,signal:a}):null,o.sizeOptimizationEnabled?C({layer:s,view:t,signal:a}):null]),p=o.normalizationField;return H(l,n,m,p?"field":void 0,p,o)}async function Z(e){const o=await async function(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new r("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled,o.classificationMethod=o.classificationMethod||"equal-interval",o.normalizationType=R(o);const s=[0,2,1,3,5],t=q(o.layer,s);if(o.layer=t,!t)throw new r("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+L(s).join(", "));if(!(null!=o.minValue&&null!=o.maxValue||null==o.minValue&&null==o.maxValue))throw new r("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");const a=i(o.signal)?{signal:o.signal}:null;await t.load(a);const l=t.geometryType;if(o.outlineOptimizationEnabled="polygon"===l&&o.outlineOptimizationEnabled,"mesh"===l)o.symbolType="3d-volumetric",o.colorMixMode=o.colorMixMode||"replace",o.edgesType=o.edgesType||"none";else{if("3d-volumetric-uniform"===o.symbolType&&"point"!==l)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new r("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const n=await F({field:o.field,normalizationField:o.normalizationField}),m=g(t,n,"color-class-breaks-renderer:invalid-parameters");if(m)throw m;return o}(e);return J(o,await y(function(e){const o={...e};delete o.basemap,delete o.colorScheme,delete o.legendOptions,delete o.symbolType,delete o.defaultSymbolEnabled,delete o.colorMixMode,delete o.edgesType;const s=o;return s.analyzeData=!(null!=o.minValue&&null!=o.maxValue),s}(o),o.outlineOptimizationEnabled))}function _(o){return function(e){if(!e||!e.layer)return Promise.reject(v("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));const o={...e},s=[4],r=q(o.layer,s);if(o.layer=r,o.density=o.density||25,o.size=o.size||"100%",!w(o.size))return Promise.reject(v("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));if(!r)return Promise.reject(v("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+L(s).join(", ")));const t=i(o.signal)?{signal:o.signal}:null;return r.load(t).then((()=>o))}(o).then((o=>({renderer:new e({field:"RGB",pointsPerInch:o.density,pointSizeAlgorithm:b(o.size)})})))}async function K(e){const s=await function(e){if(!(e&&e.layer&&e.field))return Promise.reject(v("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));const o=e.field.toLowerCase();if("intensity"!==o&&"elevation"!==o)return Promise.reject(v("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));const s={...e},r=[4],t=q(s.layer,r);if(s.layer=t,s.density=s.density||25,s.size=s.size||"100%",!w(s.size))return Promise.reject(v("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));if(!t)return Promise.reject(v("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+L(r).join(", ")));const a=i(s.signal)?{signal:s.signal}:null;return t.load(a).then((()=>s))}(e),r=s.statistics?s.statistics:await d({layer:s.layer,field:s.field,signal:s.signal}),t=await async function(e,o){const s=o.layer,r=await W({basemap:o.basemap,colorScheme:o.colorScheme,geometryType:s.geometryType,schemeId:"elevation"===o.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),i=r.scheme;if(!i)throw v("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");const t=k(i.colors,5);if(t.length<5)throw v("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const a=T(e,!1,!0),l=a?U(a[0],a[1],5):S(e);return{stops:m({values:l,isDate:!1,dateFormatOptions:null,colors:t,labelIndexes:[0,2,4]}),basemapId:r.basemapId,basemapTheme:r.basemapTheme,statistics:e,defaultValuesUsed:!!a,colorScheme:B(i)}}(r,s);return{renderer:new o({field:s.field,pointsPerInch:s.density,pointSizeAlgorithm:b(s.size),stops:t.stops}),basemapId:t.basemapId,basemapTheme:t.basemapTheme,statistics:t.statistics,defaultValuesUsed:t.defaultValuesUsed,colorScheme:t.colorScheme}}async function X(e){const o=await t("esri/smartMapping/t9n/smartMapping"),s=await async function(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new r("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled;const s=[0,2,1,3,5],t=q(o.layer,s);if(o.layer=t,!t)throw new r("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+L(s).join(", "));const a=i(o.signal)?{signal:o.signal}:null;await t.load(a);const l=t.geometryType;if(o.outlineOptimizationEnabled="polygon"===l&&o.outlineOptimizationEnabled,o.sizeOptimizationEnabled=("point"===l||"multipoint"===l||"polyline"===l)&&o.sizeOptimizationEnabled,"mesh"===l)o.symbolType="3d-volumetric",o.colorMixMode=o.colorMixMode||"replace",o.edgesType=o.edgesType||"none";else if("3d-volumetric-uniform"===o.symbolType&&"point"!==l)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new r("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");const n=P(t,o.startTime,o.endTime,"color-age-renderer:invalid-parameters");if(n)throw n;if(o.unit&&-1===D.indexOf(o.unit))throw new r("color-age-renderer:invalid-unit",`Supported units are: ${D.join(", ")}`);return o}(e),{defaultSymbolEnabled:l,view:n,startTime:m,endTime:p,symbolType:u,colorMixMode:d,edgesType:y,minValue:b,maxValue:v,signal:g}=s,w=s.layer,[k,T,S]=await Promise.all([s.unit?{unit:s.unit,statistics:null}:c({view:n,layer:w,startTime:m,endTime:p,minValue:b,maxValue:v,signal:g}),s.outlineOptimizationEnabled?h({layer:w,view:n,signal:g}):null,s.sizeOptimizationEnabled?C({layer:w,view:n,signal:g}):null]),{unit:x,statistics:V}=k,E=O({layer:w,startTime:m,endTime:p,unit:x}).valueExpression,z=a(o[`ageInfo_${x}`],{unit:x,startTime:j(m,x,w),endTime:j(p,x,w)}),M=await $(G({layer:w,basemap:s.basemap,valueExpression:E,symbolType:u,statistics:V,legendOptions:{title:z},colorScheme:s.colorScheme,theme:s.theme,view:n,minValue:s.minValue,maxValue:s.maxValue,signal:g})),I={layer:w,valueExpression:E,defaultSymbolEnabled:l,symbolType:u,colorMixMode:d,edgesType:y},U=await H(M,T,S,null,null,I);return U.renderer.authoringInfo.visualVariables.forEach((e=>f(e,m,p,x))),{...U,unit:x}}export{X as createAgeRenderer,Z as createClassBreaksRenderer,N as createContinuousRenderer,K as createPCContinuousRenderer,_ as createPCTrueColorRenderer,$ as createVisualVariable};