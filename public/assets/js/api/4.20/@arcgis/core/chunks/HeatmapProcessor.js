/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{i as t,e as r}from"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{d as o}from"./diffUtils.js";import{b as i}from"./heatmapUtils.js";import{k as p}from"./definitions.js";import{B as a}from"./BaseProcessor.js";import{g as m}from"./tileUtils2.js";import"./metadata.js";import"./handleUtils.js";import"../config.js";import"./object.js";import"./string.js";import"./Message.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../core/Collection.js";import"./Evented.js";import"./mathUtils.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"../core/watchUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../rest/support/Query.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../TimeExtent.js";import"./timeUtils.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"./TileKey.js";class n{constructor(e,t){this.offset=e,this.extent=t}}let l=class extends a{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];if("heatmap"!==r.type)return;o(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,s,o){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(t(s.addOrUpdate)&&s.addOrUpdate.hasFeatures&&a.set(s.addOrUpdate.instance,s),s.end){const t=[],s=function(e){const t=e.key,r=new Map,s=256,o=p,i=e.tileInfoView.tileInfo.isWrappable;return r.set(m(t,-1,-1,i).id,new n([-o,-o],[o-s,o-s,o,o])),r.set(m(t,0,-1,i).id,new n([0,-o],[0,o-s,o,o])),r.set(m(t,1,-1,i).id,new n([o,-o],[0,o-s,s,o])),r.set(m(t,-1,0,i).id,new n([-o,0],[o-s,0,o,o])),r.set(m(t,1,0,i).id,new n([o,0],[0,0,s,o])),r.set(m(t,-1,1,i).id,new n([-o,o],[o-s,0,o,s])),r.set(m(t,0,1,i).id,new n([0,o],[0,0,o,s])),r.set(m(t,1,1,i).id,new n([o,o],[0,0,s,s])),r}(e);this._tileKeyToFeatureSets.forEach(((o,i)=>{if(i===e.key.id)o.forEach((e=>r(e.addOrUpdate,(e=>t.push(e)))));else if(s.has(i)){const e=s.get(i),[p,a]=e.offset;o.forEach((e=>r(e.addOrUpdate,(e=>{const r=e.transform(p,a,1,1);t.push(r)}))))}}));const a=i(t,this._schema.mesh,512,512),l={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",l,{...o,transferList:d})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};l=e([s("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);var d=l;export default d;