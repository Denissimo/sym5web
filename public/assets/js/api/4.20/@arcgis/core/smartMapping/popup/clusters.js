/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import s from"../../core/Error.js";import{i as t}from"../../core/lang.js";import{fetchMessageBundle as o,substitute as r}from"../../intl.js";import e from"../../PopupTemplate.js";import{numericTypes as i}from"../../layers/support/fieldUtils.js";import p from"../../popup/ExpressionInfo.js";import m from"../../popup/FieldInfo.js";import l from"../../popup/support/FieldInfoFormat.js";import{g as n,c as a,a as u,b as c}from"../../chunks/clusterUtils.js";import{i as j}from"../../chunks/clusterUtils2.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../core/promiseUtils.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/tslib.es6.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../chunks/JSONSupport.js";import"../../chunks/write.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../chunks/enumeration.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/MD5.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/utils8.js";import"../../chunks/utils9.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/utils7.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";function y(s){const{fieldName:t,label:o,type:r}=s,e=i.indexOf(r)>-1,p=new m({fieldName:t,label:o,visible:!0,format:e?{places:"integer"===r||"small-integer"===r?0:2,digitSeparator:!0}:null});return"date"===r&&(p.format=new l({dateFormat:"short-date-short-time"})),p}function b(s,t){const o=t.getField(s);return o&&(o.alias||o.name)}function d(s,t,o){const{attributeInfo:e,statisticType:i}=t,{field:p,normalizationField:m}=e;let l,n="";if("avg"===i?l=m?o.clusters.avgNormFieldLabel:o.clusters.avgFieldLabel:"type"===i&&(l=o.clusters.predominantFieldLabel),l){const t=e.valueExpression?e.valueExpressionTitle:b(p,s),o=m&&b(m,s);n=r(l,{fieldLabel:t||"",normFieldLabel:o||""})}return n}function h(s,t,o,e){const{attributeInfo:i,statisticType:p}=t,{field:m,normalizationField:l}=i;let n,a="";if("avg"===p?n=l?e.clusters.avgNormFieldSummary:e.clusters.avgFieldSummary:"type"===p&&(n=e.clusters.predominantFieldSummary),n){const t=i.valueExpression?i.valueExpressionTitle:b(m,s),e=l&&b(l,s);a=r(n,{fieldLabel:t||"",normFieldLabel:e||"",fieldValue:"{"+o+"}"})}return a}async function k(t){const{layer:o,renderer:r}=t;await o.load();const e=r||o.renderer;if(!j(e))throw new s("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:o,renderer:e}}async function f(s){const[{renderer:i,layer:m},l]=await Promise.all([k(s),o("esri/smartMapping/t9n/smartMapping")]),b=await async function(s,t){if(!j(t))return null;const i=n(s,t),m=await o("esri/smartMapping/t9n/smartMapping"),l=m.clusters.predominantNoneValue,b="unique-value"===t.type?t.uniqueValueInfos:[],k=[],f=[],S=[];k.push(r(m.clusters.countSummary,{count:`{${a}}`})),f.push(y({fieldName:a,label:m.clusters.numFeatures,type:"integer"}));for(const t of i){const{statisticType:o,attributeInfo:r}=t,e=u(r,o),i=d(s,t,m);if("avg"===o)k.push(h(s,t,e,m)),f.push(y({fieldName:e,label:i,type:"double"}));else if("type"===o){const o=`expression/${e}`;k.push(h(s,t,o,m)),S.push(new p({name:e,title:i,returnType:"string",expression:c(b,e,l)})),f.push(y({fieldName:o}))}}return new e({fieldInfos:f,expressionInfos:S,content:k.join("<br/><br/>"),title:m.clusters.clusterPopupTitle})}(m,i);let f=null;return t(b)?(f={name:"clusters",title:l.clusters.templateTitle,value:b},{primaryTemplate:f,secondaryTemplates:[]}):null}export{f as getTemplates};
