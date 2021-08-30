/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import o from"../core/Error.js";import e from"../core/Handles.js";import{c as r,i as s,b as i}from"../core/lang.js";import{M as n}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as p}from"../core/promiseUtils.js";import{on as a}from"../core/watchUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as c}from"../chunks/reader.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{p as u}from"../chunks/persistable.js";import h from"./Layer.js";import{A as d}from"../chunks/APIKeyMixin.js";import{A as y}from"../chunks/ArcGISService.js";import{O as j}from"../chunks/OperationalLayer.js";import{P as f}from"../chunks/PortalLayer.js";import{S as g}from"../chunks/ScaleRangeLayer.js";import{S as k}from"../chunks/SceneService.js";import{e as v}from"../chunks/commonProperties2.js";import{I as S,a as U,b as w,c as I}from"../chunks/I3SLayerDefinitions.js";import P from"./support/SceneModifications.js";import{f as T}from"../chunks/persistableUrlUtils.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../chunks/write.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../core/urlUtils.js";import"../chunks/uuid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../chunks/Identifiable.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../chunks/assets.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/originUtils.js";import"../geometry/HeightModelInfo.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/I3SIndexInfo.js";import"../chunks/saveUtils.js";import"../chunks/resourceUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"../chunks/enumeration.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"./support/SceneModification.js";import"../geometry/projection.js";import"../chunks/mathUtils.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";let O=class extends(k(y(j(f(g(n(d(h)))))))){constructor(...t){super(...t),this.handles=new e,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(a(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(t,o){return"string"==typeof t?{url:t,...o}:t}readModifications(t,o,e){this._modificationsSource={url:T(t,e),context:e}}async load(t){return this.addResolvingPromise(this._doLoad(t)),this}async _doLoad(t){const o=r(t,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},t)}catch(t){p(t)}if(await this._fetchService(o),s(this._modificationsSource)){const o=await P.fromUrl(this._modificationsSource.url,this.spatialReference,t);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,o)}beforeSave(){if(!i(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(t,o){return this._debouncedSaveOperations(1,{...o,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},t)}async save(){const t={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,t)}validateLayer(t){if(t.layerType&&"IntegratedMesh"!==t.layerType)throw new o("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new o("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new o("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([m({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),t([m({type:["show","hide"]})],O.prototype,"listMode",void 0),t([m({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),t([m({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),t([m({type:S,readOnly:!0})],O.prototype,"nodePages",void 0),t([m({type:[U],readOnly:!0})],O.prototype,"materialDefinitions",void 0),t([m({type:[w],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),t([m({type:[I],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),t([m({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),t([m({type:P}),u({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),t([c(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),t([m(v)],O.prototype,"elevationInfo",void 0),t([m({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=t([l("esri.layers.IntegratedMeshLayer")],O);var L=O;export default L;