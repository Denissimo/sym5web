/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{p as e,U as t,t as r,O as s,D as o,z as i,Z as n,u as a,w as l,C as p,x as m,y as u,ah as c,ai as f,a2 as d,aj as y}from"./arcadeUtils.js";import{g as j,l as g,F as b,c as h,a as I,b as F,O as D,d as S,T as E,e as w,f as x,h as A,i as L,S as T,j as N,k as C,A as R,m as v}from"./featureSetUtils.js";import{E as O,i as U}from"./SpatialFilter.js";import{all as M,resolve as P}from"../core/promiseUtils.js";import{WhereClause as $}from"../core/sql/WhereClause.js";import V from"../layers/FeatureLayer.js";import k from"../layers/support/Field.js";import"../geometry/Point.js";import"./tslib.es6.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"./object.js";import"./string.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"../core/accessorSupport/decorators/subclass.js";import"./Message.js";import"./writer.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/Error.js";import"./write.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./number3.js";import"./locale.js";import"../geometry/support/jsonUtils.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../kernel.js";import"../core/urlUtils.js";import"./FeatureSetReader.js";import"../geometry.js";import"./typeUtils.js";import"./jsonMap.js";import"./centroid.js";import"./moment.js";import"./sizeVariableUtils.js";import"../request.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./Evented.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"./assets.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./uid.js";import"./MD5.js";import"../layers/support/FieldsIndex.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../rest/support/FeatureSet.js";import"./fieldType.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"../rest/query/support/AttachmentInfo.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/AttachmentQuery.js";import"./compilerUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/support/FeatureType.js";import"../layers/support/FeatureTemplate.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../geometry/geometryEngineAsync.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./_commonjsHelpers.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./visualVariableUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"./devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"../core/Handles.js";import"./MultiOriginJSONSupport.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"./FeatureIndex.js";import"./shared.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./OperationalLayer.js";import"./commonProperties2.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./PortalLayer.js";import"./asyncUtils.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./featureReductionUtils.js";import"./fieldProperties.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./styleUtils2.js";import"../support/popupUtils.js";function B(e,t,r){const s=e.getVariables();if(s.length>0){const o=[];for(let e=0;e<s.length;e++){const i={name:s[e]};o.push(t.evaluateIdentifier(r,i))}return M(o).then((t=>{const r={};for(let e=0;e<s.length;e++)r[s[e]]=t[e];return e.parameters=r,e}))}return P(e)}function G(e,t,r=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return r}function z(e){if(null===e)return null;const t={type:G(e,"type",""),name:G(e,"name","")};if("range"===t.type)t.range=G(e,"range",[]);else{t.codedValues=[];for(const r of G(e,"codedValues",[]))t.codedValues.push({name:G(r,"name",""),code:G(r,"code",null)})}return t}function H(e){if(null===e)return null;const t={},r=G(e,"wkt",null);null!==r&&(t.wkt=r);const s=G(e,"wkid",null);return null!==s&&(t.wkid=s),t}function W(e){if(null===e)return null;const t={hasZ:G(e,"hasz",!1),hasM:G(e,"hasm",!1)},r=G(e,"spatialreference",null);r&&(t.spatialReference=H(r));const s=G(e,"x",null);if(null!==s)return t.x=s,t.y=G(e,"y",null),t;const o=G(e,"rings",null);if(null!==o)return t.rings=o,t;const i=G(e,"paths",null);if(null!==i)return t.paths=i,t;const n=G(e,"points",null);if(null!==n)return t.points=n,t;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const s=G(e,r,null);null!==s&&(t[r]=s)}return t}function q(q){"async"===q.mode&&(q.functions.getuser=function(n,a){return q.standardFunctionAsync(n,a,((a,l,p)=>{e(p,1,2);let m=t(p[1],""),u=!0===m;if(m=!0===m||!1===m?"":r(m),p[0]instanceof s){let e=null;return n.services&&n.services.portal&&(e=n.services.portal),e=j(p[0],e),g(e,m,u).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return o.convertObjectToArcadeDictionary(t)}return null}))}let c=null;if(i(p[0])&&(c=p[0]),c)return u=!1,m?null:c.load().then((()=>c.getOwningSystemUrl())).then((e=>{if(!e)return m?null:c.getIdentityUser().then((e=>e?o.convertObjectToArcadeDictionary({username:e}):null));let t=null;return n.services&&n.services.portal&&(t=n.services.portal),t=j(new s(e),t),g(t,m,u).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return o.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},q.signatures.push({name:"getuser",min:"1",max:"2"}),q.functions.featuresetbyid=function(s,o){return q.standardFunctionAsync(s,o,((s,o,i)=>{if(e(i,2,4),i[0]instanceof b){const e=r(i[1]);let s=t(i[2],null);const o=n(t(i[3],!0));if(null===s&&(s=["*"]),!1===a(s))throw new Error("Invalid Parameter");return i[0].featureSetById(e,o,s)}throw new Error("Invalid Parameter")}))},q.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),q.functions.featuresetbyportalitem=function(o,i){return q.standardFunctionAsync(o,i,((i,p,m)=>{if(e(m,2,5),null===m[0])throw new Error("Portal is required");if(m[0]instanceof s){const e=r(m[1]),s=r(m[2]);let i=t(m[3],null);const l=n(t(m[4],!0));if(null===i&&(i=["*"]),!1===a(i))throw new Error("Invalid Parameter");let p=null;return o.services&&o.services.portal&&(p=o.services.portal),p=j(m[0],p),h(e,s,o.spatialReference,i,l,p,o.lrucache,o.interceptor)}if(!1===l(m[0]))throw new Error("Portal is required");const u=r(m[0]),c=r(m[1]);let f=t(m[2],null);const d=n(t(m[3],!0));if(null===f&&(f=["*"]),!1===a(f))throw new Error("Invalid Parameter");if(o.services&&o.services.portal)return h(u,c,o.spatialReference,f,d,o.services.portal,o.lrucache,o.interceptor);throw new Error("Portal is required")}))},q.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),q.functions.featuresetbyname=function(s,o){return q.standardFunctionAsync(s,o,((s,o,i)=>{if(e(i,2,4),i[0]instanceof b){const e=r(i[1]);let s=t(i[2],null);const o=n(t(i[3],!0));if(null===s&&(s=["*"]),!1===a(s))throw new Error("Invalid Parameter");return i[0].featureSetByName(e,o,s)}throw new Error("Invalid Parameter")}))},q.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),q.functions.featureset=function(t,r){return q.standardFunction(t,r,((r,s,i)=>{e(i,1,1);let n=i[0];const p={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(l(n))n=JSON.parse(n),void 0!==n.layerDefinition?(p.layerDefinition=n.layerDefinition,p.featureSet=n.featureSet,n.layerDefinition.spatialReference&&(p.layerDefinition.spatialReference=n.layerDefinition.spatialReference)):(p.featureSet.features=n.features,p.featureSet.geometryType=n.geometryType,p.layerDefinition.geometryType=p.featureSet.geometryType,p.layerDefinition.objectIdField=n.objectIdFieldName,p.layerDefinition.typeIdField=n.typeIdFieldName,p.layerDefinition.globalIdField=n.globalIdFieldName,p.layerDefinition.fields=n.fields,n.spatialReference&&(p.layerDefinition.spatialReference=n.spatialReference));else{if(!(i[0]instanceof o))throw new Error("Invalid Parameter");{n=JSON.parse(i[0].castToText());const e=G(n,"layerdefinition");if(null!==e){p.layerDefinition.geometryType=G(e,"geometrytype",""),p.featureSet.geometryType=p.layerDefinition.geometryType,p.layerDefinition.globalIdField=G(e,"globalidfield",""),p.layerDefinition.objectIdField=G(e,"objectidfield",""),p.layerDefinition.typeIdField=G(e,"typeidfield","");const t=G(e,"spatialreference",null);t&&(p.layerDefinition.spatialReference=H(t));for(const t of G(e,"fields",[])){const e={name:G(t,"name",""),alias:G(t,"alias",""),type:G(t,"type",""),nullable:G(t,"nullable",!0),editable:G(t,"editable",!0),length:G(t,"length",null),domain:z(G(t,"domain"))};p.layerDefinition.fields.push(e)}const r=G(n,"featureset",null);if(r){const e={};for(const t of p.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of G(r,"features",[])){const r={},s=G(t,"attributes",{});for(const t in s)r[e[t.toLowerCase()]]=s[t];p.featureSet.features.push({attributes:r,geometry:W(G(t,"geometry",null))})}}}else{p.layerDefinition.geometryType=G(n,"geometrytype",""),p.featureSet.geometryType=p.layerDefinition.geometryType,p.layerDefinition.objectIdField=G(n,"objectidfieldname",""),p.layerDefinition.typeIdField=G(n,"typeidfieldname","");const e=G(n,"spatialreference",null);e&&(p.layerDefinition.spatialReference=H(e));for(const e of G(n,"fields",[])){const t={name:G(e,"name",""),alias:G(e,"alias",""),type:G(e,"type",""),nullable:G(e,"nullable",!0),editable:G(e,"editable",!0),length:G(e,"length",null),domain:z(G(e,"domain"))};p.layerDefinition.fields.push(t)}const t={};for(const e of p.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;for(const e of G(n,"features",[])){const r={},s=G(e,"attributes",{});for(const e in s)r[t[e.toLowerCase()]]=s[e];p.featureSet.features.push({attributes:r,geometry:W(G(e,"geometry",null))})}}}}if(!1==(!!(m=p).layerDefinition&&!!m.featureSet&&!1!==function(e,t){for(const r of t)if(r===e)return!0;return!1}(m.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==m.layerDefinition.objectIdField&&""!==m.layerDefinition.objectIdField&&!1!==a(m.layerDefinition.fields)&&!1!==a(m.featureSet.features)))throw new Error("Invalid Parameter");var m;return I.create(p,t.spatialReference)}))},q.signatures.push({name:"featureset",min:"1",max:"1"}),q.functions.filter=function(t,r){return q.standardFunctionAsync(t,r,((r,s,o)=>(e(o,2,2),i(o[0])?o[0].load().then((e=>{const r=$.create(o[1],e.getFieldsIndex()),s=r.getVariables();if(s.length>0){const e=[];for(let r=0;r<s.length;r++){const o={name:s[r]};e.push(q.evaluateIdentifier(t,o))}return M(e).then((e=>{const t={};for(let r=0;r<s.length;r++)t[s[r]]=e[r];return r.parameters=t,new F({parentfeatureset:o[0],whereclause:r})}))}return P(new F({parentfeatureset:o[0],whereclause:r}))})):q.failDefferred("Filter cannot accept this parameter type"))))},q.signatures.push({name:"filter",min:"2",max:"2"}),q.functions.orderby=function(t,r){return q.standardFunctionAsync(t,r,((t,r,s)=>{if(e(s,2,2),i(s[0])){const e=new D(s[1]);return P(new S({parentfeatureset:s[0],orderbyclause:e}))}return q.failDefferred("Order cannot accept this parameter type")}))},q.signatures.push({name:"orderby",min:"2",max:"2"}),q.functions.top=function(t,r){return q.standardFunctionAsync(t,r,((t,r,s)=>(e(s,2,2),i(s[0])?P(new E({parentfeatureset:s[0],topnum:s[1]})):a(s[0])?p(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,p(s[1])):m(s[0])?p(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,p(s[1])):q.failDefferred("Top cannot accept this parameter type"))))},q.signatures.push({name:"top",min:"2",max:"2"}),q.functions.first=function(t,r){return q.standardFunctionAsync(t,r,((t,r,s)=>(e(s,1,1),i(s[0])?s[0].first(t.abortSignal).then((e=>{if(null!==e){const t=u.createFromGraphicLikeObject(e.geometry,e.attributes,s[0]);t._underlyingGraphic=e,e=t}return e})):a(s[0])?0===s[0].length?P(null):P(s[0][0]):m(s[0])?0===s[0].length()?P(null):P(s[0].get(0)):null)))},q.signatures.push({name:"first",min:"1",max:"1"}),q.functions.attachments=function(t,r){return q.standardFunctionAsync(t,r,((r,s,n)=>{e(n,1,2);const a={minsize:-1,maxsize:-1,types:null};if(n.length>1)if(n[1]instanceof o){if(n[1].hasField("minsize")&&(a.minsize=p(n[1].field("minsize"))),n[1].hasField("maxsize")&&(a.maxsize=p(n[1].field("maxsize"))),n[1].hasField("types")){const e=c(n[1].field("types"),!1);e.length>0&&(a.types=e)}}else if(null!==n[1])throw new Error("Invalid Parameter");if(n[0]instanceof u){let e=n[0]._layer;return e instanceof V&&(e=w(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===i(e)?[]:e.load().then((()=>e.queryAttachments(n[0].field(e.objectIdField),a.minsize,a.maxsize,a.types)))}if(null===n[0])return[];throw new Error("Invalid Parameter")}))},q.signatures.push({name:"attachments",min:"1",max:"2"}),q.functions.featuresetbyrelationshipname=function(s,o){return q.standardFunctionAsync(s,o,((o,l,p)=>{e(p,2,4);const m=p[0],c=r(p[1]);let f=t(p[2],null);const d=n(t(p[3],!0));if(null===f&&(f=["*"]),!1===a(f))throw new Error("Invalid Parameter");if(null===p[0])return null;if(!(p[0]instanceof u))throw new Error("Invalid Parameter");let y=m._layer;return y instanceof V&&(y=w(y,s.spatialReference,["*"],!0,s.lrucache,s.interceptor)),null===y||!1===i(y)?null:y.load().then((e=>{const t=e.relationshipMetaData().filter((e=>e.name===c));if(0===t.length)return null;if(void 0!==t[0].relationshipTableId&&null!==t[0].relationshipTableId&&t[0].relationshipTableId>-1)return x(e,t[0],m.field(e.objectIdField),e.spatialReference,f,d,s.lrucache,s.interceptor);let r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+t[0].relatedTableId.toString():r+"/"+t[0].relatedTableId.toString(),A(r,e.spatialReference,f,d,s.lrucache,s.interceptor).then((r=>r.load().then((()=>r.relationshipMetaData())).then((s=>{if(s=s.filter((e=>e.id===t[0].id)),!1===m.hasField(t[0].keyField)||null===m.field(t[0].keyField))return e.getFeatureByObjectId(m.field(e.objectIdField),[t[0].keyField]).then((e=>{if(e){const o=$.create(s[0].keyField+"= @id",r.getFieldsIndex());return o.parameters={id:e.attributes[t[0].keyField]},r.filter(o)}return new O({parentfeatureset:r})}));const o=$.create(s[0].keyField+"= @id",r.getFieldsIndex());return o.parameters={id:m.field(t[0].keyField)},r.filter(o)}))))):null}))}))},q.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),q.functions.featuresetbyassociation=function(s,o){return q.standardFunctionAsync(s,o,((o,n,a)=>{e(a,2,3);const p=a[0],m=r(t(a[1],"")).toLowerCase(),c=l(a[2])?r(a[2]):null;if(null===a[0])return null;if(!(a[0]instanceof u))throw new Error("Invalid Parameter");let y=p._layer;return y instanceof V&&(y=w(y,s.spatialReference,["*"],!0,s.lrucache,s.interceptor)),null===y||!1===i(y)?null:y.load().then((()=>{const e=y.serviceUrl();return L(e,s.spatialReference)})).then((e=>{let t=null,r=null,s=!1;if(null!==c&&""!==c&&void 0!==c){for(const t of e.terminals)t.terminalName===c&&(r=t.terminalId);null===r&&(s=!0)}const o=e.associations.getFieldsIndex(),i=o.get("TOGLOBALID").name,n=o.get("FROMGLOBALID").name,a=o.get("TOTERMINALID").name,l=o.get("FROMTERMINALID").name,u=o.get("FROMNETWORKSOURCEID").name,j=o.get("TONETWORKSOURCEID").name,g=o.get("ASSOCIATIONTYPE").name,b=o.get("ISCONTENTVISIBLE").name,h=o.get("OBJECTID").name;for(const e of y.fields)if("global-id"===e.type){t=p.field(e.name);break}let I=null,F=new T(new k({name:"percentalong",alias:"percentalong",type:"double"}),$.create("0",e.associations.getFieldsIndex())),D=new T(new k({name:"side",alias:"side",type:"string"}),$.create("''",e.associations.getFieldsIndex()));const S="globalid",E="globalId",w={};for(const t in e.lkp)w[t]=e.lkp[t].sourceId;const x=new N(new k({name:"classname",alias:"classname",type:"string"}),null,w);let A="";switch(m){case"midspan":{A=`((${i}='${t}') OR ( ${n}='${t}')) AND (${g} IN (5))`,x.codefield=$.create(`CASE WHEN (${i}='${t}') THEN ${u} ELSE ${j} END`,e.associations.getFieldsIndex());const r=d(R.findField(e.associations.fields,n));r.name=S,r.alias=S,I=new T(r,$.create(`CASE WHEN (${n}='${t}') THEN ${i} ELSE ${n} END`,e.associations.getFieldsIndex())),F=e.unVersion>=4?new v(R.findField(e.associations.fields,o.get("PERCENTALONG").name)):new T(new k({name:"percentalong",alias:"percentalong",type:"double"}),$.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{A=`((${i}='${t}') OR ( ${n}='${t}')) AND (${g} IN (4,6))`,x.codefield=$.create(`CASE WHEN (${i}='${t}') THEN ${u} ELSE ${j} END`,e.associations.getFieldsIndex());const r=d(R.findField(e.associations.fields,n));r.name=S,r.alias=S,I=new T(r,$.create(`CASE WHEN (${n}='${t}') THEN ${i} ELSE ${n} END`,e.associations.getFieldsIndex())),D=new T(new k({name:"side",alias:"side",type:"string"}),$.create(`CASE WHEN (${g}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let s=`${i}='@T'`,o=`${n}='@T'`;null!==r&&(s+=` AND ${a}=@A`,o+=` AND ${l}=@A`),A="(("+s+") OR ("+o+"))",A=f(A,"@T",t),s=f(s,"@T",t),null!==r&&(s=f(s,"@A",r.toString()),A=f(A,"@A",r.toString())),x.codefield=$.create("CASE WHEN "+s+` THEN ${u} ELSE ${j} END`,e.associations.getFieldsIndex());const p=d(R.findField(e.associations.fields,n));p.name=S,p.alias=S,I=new T(p,$.create("CASE WHEN "+s+` THEN ${n} ELSE ${i} END`,e.associations.getFieldsIndex()));break}case"container":A=`${i}='${t}' AND ${g} = 2`,null!==r&&(A+=` AND ${a} = `+r.toString()),x.codefield=u,A="( "+A+" )",I=new C(R.findField(e.associations.fields,n),S,S);case"content":A=`(${n}='${t}' AND ${g} = 2)`,null!==r&&(A+=` AND ${l} = `+r.toString()),x.codefield=j,A="( "+A+" )",I=new C(R.findField(e.associations.fields,i),S,S);break;case"structure":A=`(${i}='${t}' AND ${g} = 3)`,null!==r&&(A+=` AND ${a} = `+r.toString()),x.codefield=u,A="( "+A+" )",I=new C(R.findField(e.associations.fields,n),S,E);break;case"attached":A=`(${n}='${t}' AND ${g} = 3)`,null!==r&&(A+=` AND ${l} = `+r.toString()),x.codefield=j,A="( "+A+" )",I=new C(R.findField(e.associations.fields,i),S,E);break;default:throw new Error("Invalid Parameter")}s&&(A="1 <> 1");return new R({parentfeatureset:e.associations,adaptedFields:[new v(R.findField(e.associations.fields,h)),new v(R.findField(e.associations.fields,b)),I,D,x,F],extraFilter:A?$.create(A,e.associations.getFieldsIndex()):null})}))}))},q.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),q.functions.groupby=function(t,s){return q.standardFunctionAsync(t,s,((s,n,p)=>(e(p,3,3),i(p[0])?p[0].load().then((e=>{const s=[],i=[];let n=!1,u=[];if(l(p[1]))u.push(p[1]);else if(p[1]instanceof o)u.push(p[1]);else if(a(p[1]))u=p[1];else{if(!m(p[1]))return q.failDefferred("Illegal Value: GroupBy");u=p[1].toArray()}for(const t of u)if(l(t)){const o=$.create(r(t),e.getFieldsIndex()),i=!0===U(o)?r(t):"%%%%FIELDNAME";s.push({name:i,expression:o}),"%%%%FIELDNAME"===i&&(n=!0)}else{if(!(t instanceof o))return q.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",o=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===r&&(n=!0),!r)return q.failDefferred("Illegal Value: GroupBy");s.push({name:r,expression:$.create(o||r,e.getFieldsIndex())})}}if(u=[],l(p[2]))u.push(p[2]);else if(a(p[2]))u=p[2];else if(m(p[2]))u=p[2].toArray();else{if(!(p[2]instanceof o))return q.failDefferred("Illegal Value: GroupBy");u.push(p[2])}for(const t of u){if(!(t instanceof o))return q.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"",s=t.hasField("statistic")?t.field("statistic"):"",o=t.hasField("expression")?t.field("expression"):"";if(!r||!s||!o)return q.failDefferred("Illegal Value: GroupBy");i.push({name:r,statistic:s.toLowerCase(),expression:$.create(o,e.getFieldsIndex())})}}if(n){const t={};for(const r of e.fields)t[r.name.toLowerCase()]=1;for(const e of s)"%%%%FIELDNAME"!==e.name&&(t[e.name.toLowerCase()]=1);for(const e of i)"%%%%FIELDNAME"!==e.name&&(t[e.name.toLowerCase()]=1);let r=0;for(const e of s)if("%%%%FIELDNAME"===e.name){for(;1===t["field_"+r.toString()];)r++;t["field_"+r.toString()]=1,e.name="FIELD_"+r.toString()}}const c=[];for(const e of s)c.push(B(e.expression,q,t));for(const e of i)c.push(B(e.expression,q,t));return c.length>0?M(c).then((()=>P(p[0].groupby(s,i)))):P(p[0].groupby(s,i))})):q.failDefferred("Illegal Value: GroupBy"))))},q.signatures.push({name:"groupby",min:"3",max:"3"}),q.functions.distinct=function(t,s){return q.standardFunctionAsync(t,s,((s,n,p)=>i(p[0])?(e(p,2,2),p[0].load().then((e=>{const s=[];let i=[];if(l(p[1]))i.push(p[1]);else if(p[1]instanceof o)i.push(p[1]);else if(a(p[1]))i=p[1];else{if(!m(p[1]))return q.failDefferred("Illegal Value: GroupBy");i=p[1].toArray()}let n=!1;for(const t of i)if(l(t)){const o=$.create(r(t),e.getFieldsIndex()),i=!0===U(o)?r(t):"%%%%FIELDNAME";s.push({name:i,expression:o}),"%%%%FIELDNAME"===i&&(n=!0)}else{if(!(t instanceof o))return q.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",o=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===r&&(n=!0),!r)return q.failDefferred("Illegal Value: GroupBy");s.push({name:r,expression:$.create(o||r,e.getFieldsIndex())})}}if(n){const t={};for(const r of e.fields)t[r.name.toLowerCase()]=1;for(const e of s)"%%%%FIELDNAME"!==e.name&&(t[e.name.toLowerCase()]=1);let r=0;for(const e of s)if("%%%%FIELDNAME"===e.name){for(;1===t["field_"+r.toString()];)r++;t["field_"+r.toString()]=1,e.name="FIELD_"+r.toString()}}const u=[];for(const e of s)u.push(B(e.expression,q,t));return u.length>0?M(u).then((()=>P(p[0].groupby(s,[])))):P(p[0].groupby(s,[]))}))):function(e,t,r,s){if(1===s.length){if(a(s[0]))return y(e,s[0],-1);if(m(s[0]))return y(e,s[0].toArray(),-1)}return y(e,s,-1)}("distinct",0,0,p)))})}export{q as registerFunctions};