/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{a as r}from"../../../chunks/JSONSupport.js";import{t as o}from"../../../chunks/screenUtils.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Message.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/write.js";var i;let p=i=class extends r{constructor(s){super(s),this.label=null,this.size=null,this.value=null}clone(){return new i({label:this.label,size:this.size,value:this.value})}};s([e({type:String,json:{write:!0}})],p.prototype,"label",void 0),s([e({type:Number,cast:o,json:{write:!0}})],p.prototype,"size",void 0),s([e({type:Number,json:{write:!0}})],p.prototype,"value",void 0),p=i=s([t("esri.renderers.visualVariables.support.SizeStop")],p);var c=p;export default c;
