/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../config.js";import"../geometry.js";import e from"../request.js";import o from"../core/Error.js";import{E as s}from"../chunks/Evented.js";import{I as i}from"../chunks/Identifiable.js";import{L as a}from"../chunks/Loadable.js";import{L as n}from"../chunks/Logger.js";import{isAbortError as l}from"../core/promiseUtils.js";import{urlToObject as p}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import u from"../geometry/Extent.js";import y from"../geometry/SpatialReference.js";import"../chunks/object.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../chunks/string.js";import"../chunks/Message.js";import"../chunks/write.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../kernel.js";import"../chunks/Promise.js";let h=0;const d=n.getLogger("esri.layers.Layer");let j=class extends(s.EventedMixin(i(a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new u(-180,-90,180,90,y.WGS84),this.id=Date.now().toString(16)+"-layer-"+h++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t,e=await import("../chunks/arcgisLayers.js");try{return await e.fromUrl(r)}catch(t){throw d.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",t),t}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},o=await import("../chunks/portalLayers.js");try{return await o.fromItem(e)}catch(t){const o=e&&e.portalItem,s=o&&o.id||"unset",i=o&&o.portal&&o.portal.url||r.portalUrl;throw d.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+s+"')",t),t}}initialize(){this.when().catch((t=>{var r,e;l(t)||n.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(r=this.title)?r:"no title"}', id: '${null!=(e=this.id)?e:"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?p(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t){return(await e(t,{query:{f:"json"},responseType:"json"})).data}throw new o("layer:no-attribution-data","Layer does not have attribution data")}};t([m({type:String})],j.prototype,"attributionDataUrl",void 0),t([m({type:u})],j.prototype,"fullExtent",void 0),t([m({readOnly:!0})],j.prototype,"hasAttributionData",null),t([m({type:String})],j.prototype,"id",void 0),t([m({type:Boolean,nonNullable:!0})],j.prototype,"legendEnabled",void 0),t([m({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),t([m({type:Number,range:{min:0,max:1},nonNullable:!0})],j.prototype,"opacity",void 0),t([m()],j.prototype,"parent",void 0),t([m({readOnly:!0})],j.prototype,"parsedUrl",null),t([m({type:Boolean})],j.prototype,"popupEnabled",void 0),t([m({type:Boolean})],j.prototype,"attributionVisible",void 0),t([m({type:y})],j.prototype,"spatialReference",void 0),t([m({type:String})],j.prototype,"title",void 0),t([m({type:String,readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),t([m()],j.prototype,"url",void 0),t([m({type:Boolean,nonNullable:!0})],j.prototype,"visible",void 0),j=t([c("esri.layers.Layer")],j);var b=j;export default b;
