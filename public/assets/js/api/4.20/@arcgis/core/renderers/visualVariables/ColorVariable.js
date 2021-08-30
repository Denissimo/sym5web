/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import r from"./VisualVariable.js";import e from"./support/ColorStop.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../chunks/jsonMap.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/LegendOptions.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/writer.js";var i;let p=i=class extends r{constructor(s){super(s),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(s){s&&Array.isArray(s)&&(s=s.filter((s=>!!s))).sort(((s,t)=>s.value-t.value)),this._set("stops",s)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((s=>s.clone())),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((s=>s.value||0))}};s([t({readOnly:!0})],p.prototype,"cache",null),s([t({type:["color"],json:{type:["colorInfo"]}})],p.prototype,"type",void 0),s([t({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),s([t({type:[e],json:{write:!0}})],p.prototype,"stops",null),p=i=s([o("esri.renderers.visualVariables.ColorVariable")],p);var n=p;export default n;