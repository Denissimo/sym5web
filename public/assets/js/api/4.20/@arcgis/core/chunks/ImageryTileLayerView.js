/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Error.js";import{i}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{h as s,c as n}from"./rasterProjectionHelper.js";import{g as l}from"./popupUtils.js";const u=u=>{let p=class extends u{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,o){const{layer:a}=this;if(!e)return Promise.reject(new r("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:s}=a,n=l(a,o);if(!s||!i(n))throw new r("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:n});const u=[],{value:p}=await a.identify(e);let f="";if(p&&p.length){var m,c;f="imagery-tile"===a.type&&a.hasStandardTime()&&null!=p[0]?p.map((e=>a.getStandardTimeValue(e))).join(", "):p.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]=this._formatAttributeValue(f,r);const i=null==(m=a.rasterInfo)||null==(c=m.attributeTable)?void 0:c.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}));if(t.length>0){const r=t[0];if(r)for(const t in r.attributes)if(r.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(r.attributes[t],i)}}}const o=new t(this.fullExtent.clone(),null,e);o.layer=a,o.sourceLayer=o.layer,u.push(o)}return u}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new r("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const i=s(this.layer.fullExtent,this.view.spatialReference,!1),o=n(this.layer.fullExtent,this.view.spatialReference,i);return null==o&&(t=new r("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",o),this.datumTransformation||(this.datumTransformation=s(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return e([o()],p.prototype,"layer",void 0),e([o()],p.prototype,"view",void 0),e([o()],p.prototype,"fullExtent",void 0),e([o()],p.prototype,"tileInfo",void 0),e([o({readOnly:!0})],p.prototype,"hasTilingEffects",null),p=e([a("esri.views.layers.ImageryTileLayerView")],p),p};export{u as I};