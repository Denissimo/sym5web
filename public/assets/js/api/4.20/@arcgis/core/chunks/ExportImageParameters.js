/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Accessor.js";import{HandleOwnerMixin as s}from"../core/HandleOwner.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{f as i}from"./commonProperties2.js";import{a as l}from"./sublayerUtils.js";const o={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let n=class extends(s(r)){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&l(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,r)=>(e[r.id]=r.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,a=0===t,i=0===r.minScale||t<=r.minScale,l=0===r.maxScale||t>=r.maxScale;r.visible&&(a||i&&l)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([t({readOnly:!0})],n.prototype,"dynamicLayers",null),e([t({readOnly:!0})],n.prototype,"hasDynamicLayers",null),e([t()],n.prototype,"layer",null),e([t({readOnly:!0})],n.prototype,"layers",null),e([t({readOnly:!0})],n.prototype,"layerDefs",null),e([t({type:Number})],n.prototype,"scale",void 0),e([t(i)],n.prototype,"timeExtent",void 0),e([t({readOnly:!0})],n.prototype,"version",null),e([t({readOnly:!0})],n.prototype,"visibleSublayers",null),n=e([a("esri.layers.mixins.ExportImageParameters")],n);export{n as E};
