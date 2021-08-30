/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{r}from"../renderers/support/jsonUtils.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{s}from"../chunks/object.js";import{urlToObject as i}from"../core/urlUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{i as p,u as a,h as l}from"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as m}from"../chunks/reader.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{w as c}from"../chunks/writer.js";import{f as d}from"../chunks/typeUtils.js";import y from"./Layer.js";import j from"../core/Error.js";import{HandleOwnerMixin as h}from"../core/HandleOwner.js";import{L as f}from"../chunks/Loadable.js";import{debounce as g,eachAlways as b}from"../core/promiseUtils.js";import{init as k}from"../core/watchUtils.js";import{open as w}from"../core/workers/workers.js";import{c as S,a as v}from"../chunks/clientSideDefaults.js";import{getCapabilities as I,getWFSLayerInfo as F,prepareWFSLayerFields as R,findFeatureType as O,WFS_OID_FIELD_NAME as P}from"./ogc/wfsUtils.js";import U from"../rest/support/FeatureSet.js";import C from"../geometry/Extent.js";import{B as D}from"../chunks/BlendLayer.js";import{C as x}from"../chunks/CustomParametersMixin.js";import{O as T}from"../chunks/OperationalLayer.js";import{P as L}from"../chunks/PortalLayer.js";import{R as q}from"../chunks/RefreshableLayer.js";import{S as E}from"../chunks/ScaleRangeLayer.js";import{T as V}from"../chunks/TemporalLayer.js";import{l as M,b as N,p as _}from"../chunks/commonProperties2.js";import J,{F as W}from"./support/FeatureReductionSelection.js";import X from"./support/FeatureReductionCluster.js";import{r as Y,w as Q,a as A}from"../chunks/featureReductionUtils.js";import B from"./support/Field.js";import{d as G}from"../chunks/fieldProperties.js";import{fixRendererFields as z,fixTimeInfoFields as H}from"./support/fieldUtils.js";import K from"./support/LabelClass.js";import{r as Z}from"../chunks/labelingInfo.js";import $ from"../rest/support/Query.js";import{createPopupTemplate as ee}from"../support/popupUtils.js";import{E as te}from"../chunks/ElevationInfo.js";import re from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../config.js";import"../chunks/string.js";import"../chunks/Message.js";import"../chunks/write.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"../request.js";import"../kernel.js";import"../chunks/assets.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/uid.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../chunks/commonProperties.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../core/Handles.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/QueryEngineCapabilities.js";import"../chunks/defaultsJSON.js";import"../chunks/_rollupPluginBabelHelpers.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/geojson.js";import"../chunks/OptimizedFeature.js";import"../chunks/fieldType.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"./support/FieldsIndex.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";let oe=class extends(h(f)){constructor(){super(...arguments),this.capabilities=S(!1,!1),this.type="wfs",this._updateCustomParameters=g((()=>{var e;const t=this.layer.customParameters;return null==(e=this._connection)?void 0:e.invoke("setCustomParameters",t)}))}load(e){var t;const r=null!=(t=p(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return U.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:C.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async refresh(e={}){await this.load(e);const{extent:t}=await this._connection.invoke("refresh",void 0,e);return this.sourceJSON.extent=t,{extent:t}}async _createLoadOptions(e){const{url:t,customParameters:r,name:o,namespaceUri:s,spatialReference:i,fields:n,geometryType:p,swapXY:l}=this.layer;if(!t)throw new j("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||await I(t,{customParameters:r,...e});const m=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e]))?await F(this.wfsCapabilities,o,s,{spatialReference:i,customParameters:r,signal:null==e?void 0:e.signal}):{...R(n),geometryType:p,name:o,namespaceUri:s,spatialReference:i,swapXY:l},u=a(O(this.wfsCapabilities.readFeatureTypes(),m.name,m.namespaceUri)),c=d.toJSON(m.geometryType);return{customParameters:r,featureType:u,fields:m.fields.map((e=>e.toJSON())),geometryField:m.geometryField,geometryType:c,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:m.objectIdField,spatialReference:m.spatialReference.toJSON(),swapXY:m.swapXY}}async _startWorker(e){const[t,r]=await b([this._createLoadOptions(e),w("WFSSourceWorker",{...e,strategy:l("feature-layers-workers")?"dedicated":"local"})]),o=t.error||r.error||null,s=r.value||null;if(o)throw s&&s.close(),o;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:v(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}},this.handles.add(k(this.layer,"customParameters",(()=>this._updateCustomParameters().catch((()=>{})))))}};e([n()],oe.prototype,"capabilities",void 0),e([n({constructOnly:!0})],oe.prototype,"layer",void 0),e([n()],oe.prototype,"sourceJSON",void 0),e([n()],oe.prototype,"type",void 0),e([n()],oe.prototype,"wfsCapabilities",void 0),oe=e([u("esri.layers.graphics.sources.WFSSource")],oe);var se,ie=oe;const ne=G();let pe=se=class extends(x(D(V(q(E(T(L(o(y))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new ie({layer:this}),this.spatialReference=re.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:o,geometryType:s,name:i,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:m,wfsCapabilities:u}=e;return new se({customParameters:t,fields:r,geometryField:o,geometryType:s,name:i,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:m,wfsCapabilities:u})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),z(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return Y(e,t)}writeWebSceneFeatureReduction(e,t,r,o){Q(e,t,"layerDefinition.featureReduction",o)}writeFields(e,t,r){const o=e.filter((e=>e.name!==P));this.geometryField&&o.unshift(new B({name:this.geometryField,alias:this.geometryField,type:"geometry"})),s(r,o.map((e=>e.toJSON())),t)}get parsedUrl(){return this.url?i(this.url):null}set renderer(e){z(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return ee(this,e)}createQuery(){const e=new $;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures($.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds($.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount($.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent($.from(e)||this.createQuery(),t)))}refresh(){this.source.refresh().then((e=>{this.read(e,{origin:"service"}),super.refresh()}))}};e([n({readOnly:!0,aliasOf:"source.capabilities"})],pe.prototype,"capabilities",void 0),e([n({type:String})],pe.prototype,"copyright",void 0),e([n({readOnly:!0})],pe.prototype,"createQueryVersion",null),e([n({json:{read:{source:"wfsInfo.customParameters"},write:{target:"wfsInfo.customParameters",ignoreOrigin:!0}}})],pe.prototype,"customParameters",void 0),e([n({readOnly:!0})],pe.prototype,"defaultPopupTemplate",null),e([n({type:String})],pe.prototype,"definitionExpression",void 0),e([n({type:String})],pe.prototype,"displayField",void 0),e([n({type:te})],pe.prototype,"elevationInfo",void 0),e([n({types:{key:"type",base:W,typeMap:{selection:J,cluster:X}},json:{write:{target:"layerDefinition.featureReduction"}}})],pe.prototype,"featureReduction",void 0),e([m("featureReduction",["layerDefinition.featureReduction"])],pe.prototype,"readFeatureReduction",null),e([c("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:A}})],pe.prototype,"writeWebSceneFeatureReduction",null),e([n({readOnly:!0,json:{read:{source:"wfsInfo.featureUrl"},write:{target:"wfsInfo.featureUrl",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"featureUrl",void 0),e([n({type:[B],json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],pe.prototype,"fields",void 0),e([c("fields")],pe.prototype,"writeFields",null),e([n(ne.fieldsIndex)],pe.prototype,"fieldsIndex",void 0),e([n({type:C,json:{origins:{service:{read:{source:"extent"}}}}})],pe.prototype,"fullExtent",void 0),e([n()],pe.prototype,"geometryField",void 0),e([n({type:d.apiValues,json:{read:{source:"layerDefinition.geometryType",reader:d.read},write:{target:"layerDefinition.geometryType",writer:d.write,ignoreOrigin:!0},origins:{service:{read:d.read}}}})],pe.prototype,"geometryType",void 0),e([n({type:String})],pe.prototype,"id",void 0),e([n(M)],pe.prototype,"labelsVisible",void 0),e([n({type:[K],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Z},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],pe.prototype,"labelingInfo",void 0),e([n(N)],pe.prototype,"legendEnabled",void 0),e([n({type:["show","hide"]})],pe.prototype,"listMode",void 0),e([n({type:String})],pe.prototype,"objectIdField",void 0),e([n({type:["WFS"]})],pe.prototype,"operationalLayerType",void 0),e([n({json:{read:{source:"wfsInfo.maxFeatures"},write:{target:"wfsInfo.maxFeatures",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"maxFeatures",void 0),e([n({readOnly:!0,json:{read:{source:"mode"},write:{target:"mode",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"mode",void 0),e([n({json:{read:{source:"wfsInfo.name"},write:{target:"wfsInfo.name",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"name",void 0),e([n({json:{read:{source:"wfsInfo.wfsNamespace"},write:{target:"wfsInfo.wfsNamespace",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"namespaceUri",void 0),e([n(ne.outFields)],pe.prototype,"outFields",void 0),e([n({readOnly:!0})],pe.prototype,"parsedUrl",null),e([n(_)],pe.prototype,"popupEnabled",void 0),e([n({type:t,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],pe.prototype,"popupTemplate",void 0),e([n({types:r,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],pe.prototype,"renderer",null),e([n({type:Boolean})],pe.prototype,"screenSizePerspectiveEnabled",void 0),e([n({readOnly:!0})],pe.prototype,"source",void 0),e([n({type:re,json:{read:{source:"layerDefinition.spatialReference"},write:{target:"layerDefinition.spatialReference",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"extent.spatialReference"}}}}})],pe.prototype,"spatialReference",void 0),e([n({readOnly:!0,json:{read:{source:"wfsInfo.supportedSpatialReferences"},write:{target:"wfsInfo.supportedSpatialReferences",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"spatialReferences",void 0),e([n({json:{read:{source:"wfsInfo.swapXY"},write:{target:"wfsInfo.swapXY",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"swapXY",void 0),e([n({json:{read:{source:"title"},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"name"}}}}})],pe.prototype,"title",void 0),e([n({json:{read:!1},readOnly:!0})],pe.prototype,"type",void 0),e([n({type:String,json:{write:!0}})],pe.prototype,"url",void 0),e([n({readOnly:!0,json:{read:{source:"wfsInfo.version"},write:{target:"wfsInfo.version",ignoreOrigin:!0,isRequired:!0}}})],pe.prototype,"version",void 0),e([n({aliasOf:"source.wfsCapabilities"})],pe.prototype,"wfsCapabilities",void 0),pe=se=e([u("esri.layers.WFSLayer")],pe);var ae=pe;export default ae;
