/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"./Accessor.js";import e from"./Collection.js";import{a as t}from"./lang.js";import{property as o}from"./accessorSupport/decorators/property.js";import{subclass as i}from"./accessorSupport/decorators/subclass.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"./scheduling.js";import"./promiseUtils.js";import"./Error.js";import"../chunks/Message.js";import"../chunks/ensureType.js";import"../chunks/Evented.js";let h=class extends s{constructor(r){super(r),this._groups=new Map}destroy(){this.removeAll()}get size(){let r=0;return this._groups.forEach((s=>{r+=s.length})),r}add(r,s){if(!this._isHandle(r)&&!Array.isArray(r)&&!e.isCollection(r))return this;const t=this._getOrCreateGroup(s);return Array.isArray(r)||e.isCollection(r)?r.forEach((r=>this._isHandle(r)&&t.push(r))):t.push(r),this.notifyChange("size"),this}forEach(r,s){if("function"==typeof r)this._groups.forEach((s=>s.forEach(r)));else{const e=this._getGroup(r);e&&s&&e.forEach(s)}}has(r){return this._groups.has(this._ensureGroupKey(r))}remove(r){if(Array.isArray(r)||e.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;const s=this._getGroup(r);for(let r=0;r<s.length;r++)s[r].remove();return this._deleteGroup(r),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((r=>{for(let s=0;s<r.length;s++)r[s].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(r){return r&&!!r.remove}_getOrCreateGroup(r){if(this.has(r))return this._getGroup(r);const s=[];return this._groups.set(this._ensureGroupKey(r),s),s}_getGroup(r){return t(this._groups.get(this._ensureGroupKey(r)))}_deleteGroup(r){return this._groups.delete(this._ensureGroupKey(r))}_ensureGroupKey(r){return r||"_default_"}};r([o({readOnly:!0})],h.prototype,"size",null),h=r([i("esri.core.Handles")],h);var n=h;export default n;