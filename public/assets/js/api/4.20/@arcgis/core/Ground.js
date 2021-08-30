/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"./chunks/tslib.es6.js";import e from"./Color.js";import t from"./core/Collection.js";import{r as o}from"./chunks/collectionUtils.js";import{t as s}from"./chunks/compilerUtils.js";import a from"./core/Error.js";import{a as n,J as i}from"./chunks/JSONSupport.js";import{clone as l}from"./core/lang.js";import{L as c}from"./chunks/Loadable.js";import{l as p}from"./chunks/loadAll.js";import{L as u}from"./chunks/Logger.js";import{throwIfAborted as y,eachAlways as m}from"./core/promiseUtils.js";import{property as h}from"./core/accessorSupport/decorators/property.js";import{I as d}from"./chunks/ensureType.js";import{subclass as f}from"./core/accessorSupport/decorators/subclass.js";import{w as j}from"./chunks/writer.js";import{e as v}from"./chunks/enumeration.js";import{t as g,o as k}from"./chunks/opacityUtils.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./config.js";import"./chunks/object.js";import"./chunks/string.js";import"./chunks/ArrayPool.js";import"./chunks/Evented.js";import"./core/Accessor.js";import"./chunks/deprecate.js";import"./chunks/metadata.js";import"./chunks/handleUtils.js";import"./chunks/arrayUtils.js";import"./core/scheduling.js";import"./chunks/Message.js";import"./chunks/write.js";import"./chunks/Promise.js";import"./chunks/asyncUtils.js";import"./chunks/jsonMap.js";var w;let C=w=class extends n{constructor(r){super(r),this.type="none"}clone(){return new w({type:this.type})}};var I;r([v({none:"none",stayAbove:"stay-above"})],C.prototype,"type",void 0),C=w=r([f("esri.ground.NavigationConstraint")],C);const S=u.getLogger("esri.Ground");let A=I=class extends(i(c)){constructor(r){super(r),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new t;const e=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,"elevation"!==r.type&&"base-elevation"!==r.type&&S.error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)};this.layers.on("after-add",(r=>e(r.item))),this.layers.on("after-remove",(r=>{r.item.parent=null}))}initialize(){this.when().catch((r=>{S.error("#load()","Failed to load ground",r)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const r=this.layers.removeAll();for(const e of r)e.destroy();this.layers.destroy()}normalizeCtorArgs(r){return r&&"resourceInfo"in r&&(this._set("resourceInfo",r.resourceInfo),delete(r={...r}).resourceInfo),r}set layers(r){this._set("layers",o(r,this._get("layers")))}writeLayers(r,e,t,o){const n=[];r?(o={...o,layerContainerType:"ground"},r.forEach((r=>{if("write"in r){const e={};s(r)().write(e,o)&&n.push(e)}else o&&o.messages&&o.messages.push(new a("layer:unsupported",`Layers (${r.title}, ${r.id}) of type '${r.declaredClass}' cannot be persisted in the ground`,{layer:r}))})),e.layers=n):e.layers=n}load(r){return this.addResolvingPromise(this._loadFromSource(r)),Promise.resolve(this)}loadAll(){return p(this,(r=>{r(this.layers)}))}async queryElevation(r,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:t}=await import("./chunks/ElevationQuery2.js");y(e);const o=new t,s=this.layers.filter(L).toArray();return o.queryAll(s,r,e)}async createElevationSampler(r,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:t}=await import("./chunks/ElevationQuery2.js");y(e);const o=new t,s=this.layers.filter(L).toArray();return o.createSamplerAll(s,r,e)}clone(){const r={opacity:this.opacity,surfaceColor:l(this.surfaceColor),navigationConstraint:l(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(r.loadStatus="loaded"),new I({resourceInfo:this.resourceInfo}).set(r)}read(r,e){this.resourceInfo||this._set("resourceInfo",{data:r,context:e}),super.read(r,e)}_loadFromSource(r){const e=this.resourceInfo;return e?this._loadLayersFromJSON(e.data,e.context,r):Promise.resolve(null)}_loadLayersFromJSON(r,e,t){const o=e&&e.origin||"web-scene",s=e&&e.portal||null,a=e&&e.url||null;return import("./chunks/layersCreator.js").then((({populateOperationalLayers:e})=>{y(t);const n=[];if(r.layers&&Array.isArray(r.layers)){const t={context:{origin:o,url:a,portal:s,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};n.push(e(this.layers,r.layers,t))}return m(n)})).then((()=>{}))}};function L(r){return"elevation"===r.type||function(r){return r&&"createElevationSampler"in r}(r)}r([h({json:{read:!1}})],A.prototype,"layers",null),r([j("layers")],A.prototype,"writeLayers",null),r([h({readOnly:!0})],A.prototype,"resourceInfo",void 0),r([h({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:d,read:{reader:g,source:"transparency"},write:{writer:(r,e)=>{e.transparency=k(r)},target:"transparency"}}})],A.prototype,"opacity",void 0),r([h({type:e,json:{type:[d],write:(r,e)=>{e.surfaceColor=r.toJSON().slice(0,3)}}})],A.prototype,"surfaceColor",void 0),r([h({type:C,json:{write:!0}})],A.prototype,"navigationConstraint",void 0),A=I=r([f("esri.Ground")],A);var b=A;export default b;
