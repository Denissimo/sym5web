/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r,{b as s,c as e,n as i}from"../core/Accessor.js";import{clone as o,a as n}from"../core/lang.js";import{r as a}from"./write.js";import{g as h}from"./metadata.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";class g{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s),this._values=new Map}clone(t){const r=new g,e=this._originStores[0];e&&e.forEach(((t,s)=>{r.set(s,o(t),0)}));for(let e=2;e<s;e++){const s=this._originStores[e];s&&s.forEach(((s,i)=>{t&&t.has(i)||r.set(i,o(s),e)}))}return r}get(t,r){const s=void 0===r?this._values:this._originStores[r];return s?s.get(t):void 0}keys(t){const r=null==t?this._values:this._originStores[t];return r?[...r.keys()]:[]}set(t,r,s=6){let e=this._originStores[s];if(e||(e=new Map,this._originStores[s]=e),e.set(t,r),!this._values.has(t)||n(this._propertyOriginMap.get(t))<=s){const e=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),e!==r}return!1}delete(t,r=6){const s=this._originStores[r];if(!s)return;const e=s.get(t);if(s.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===r){this._values.delete(t);for(let s=r-1;s>=0;s--){const r=this._originStores[s];if(r&&r.has(t)){this._values.set(t,r.get(t)),this._propertyOriginMap.set(t,s);break}}}return e}has(t,r){const s=void 0===r?this._values:this._originStores[r];return!!s&&s.has(t)}revert(t,r){for(;r>0&&!this.has(t,r);)--r;const s=this._originStores[r],e=s&&s.get(t),i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}const p=r=>{let s=class extends r{constructor(...t){super(...t);const r=n(h(this)),s=r.metadatas,e=r.store,i=new g;r.store=i,e.keys().forEach((t=>{i.set(t,e.get(t),0)})),Object.keys(s).forEach((t=>{r.internalGet(t)&&i.set(t,r.internalGet(t),0)}))}read(t,r){a(this,t,r)}getAtOrigin(t,r){const s=u(this),e=i(r);if("string"==typeof t)return s.get(t,e);const o={};return t.forEach((t=>{o[t]=s.get(t,e)})),o}originOf(t){return e(this.originIdOf(t))}originIdOf(t){return u(this).originOf(t)}revert(t,r){const s=u(this),e=i(r),o=h(this);let n;n="string"==typeof t?"*"===t?s.keys(e):[t]:t,n.forEach((t=>{o.invalidate(t),s.revert(t,e),o.commit(t)}))}};return s=t([c("esri.core.ReadOnlyMultiOriginJSONSupport")],s),s};function u(t){return h(t).store}let l=class extends(p(r)){};l=t([c("esri.core.ReadOnlyMultiOriginJSONSupport")],l);export{p as R};