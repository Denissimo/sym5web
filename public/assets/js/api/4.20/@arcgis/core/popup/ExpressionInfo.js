/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{a as s}from"../chunks/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/write.js";var o;let i=o=class extends s{constructor(r){super(r),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new o({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};r([t({type:String,json:{write:!0}})],i.prototype,"name",void 0),r([t({type:String,json:{write:!0}})],i.prototype,"title",void 0),r([t({type:String,json:{write:!0}})],i.prototype,"expression",void 0),r([t({type:["string","number"],json:{write:!0}})],i.prototype,"returnType",void 0),i=o=r([e("esri.popup.ExpressionInfo")],i);var p=i;export default p;