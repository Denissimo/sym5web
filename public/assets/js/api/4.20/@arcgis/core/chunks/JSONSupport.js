/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import t from"../core/Accessor.js";import{r as s,w as e}from"./write.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";const a=t=>{let a=class extends t{constructor(...r){super(...r)}read(r,t){s(this,r,t)}write(r={},t){return e(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return c.call(this,r,t)}};return a=r([o("esri.core.JSONSupport")],a),a.prototype.toJSON.isDefaultToJSON=!0,a};function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}let i=class extends(a(t)){};i=r([o("esri.core.JSONSupport")],i);export{a as J,i as a};
