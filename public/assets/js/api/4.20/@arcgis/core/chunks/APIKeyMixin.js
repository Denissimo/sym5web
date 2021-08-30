/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";const t=t=>{let i=class extends t{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return e([r({type:String})],i.prototype,"apiKey",null),i=e([s("esri.layers.mixins.APIKeyMixin")],i),i};export{t as A};
