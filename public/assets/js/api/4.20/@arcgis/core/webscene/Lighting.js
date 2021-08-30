/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{a as e}from"../chunks/JSONSupport.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as s}from"../chunks/reader.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/write.js";var a;let d=a=class extends e{constructor(t){super(t),this.date=null,this.directShadowsEnabled=!1,this.displayUTCOffset=null}readDate(t,e){return null!=e.datetime&&new Date(e.datetime)||null}writeDate(t,e,r){e[r]=t.getTime()}readDirectShadowsEnabled(t,e){return!!e.directShadows}writedirectShadowsEnabled(t,e,r){t&&(e[r]=t)}writeDisplayUTCOffset(t,e){null!=t&&(e.displayUTCOffset=t)}clone(){return new a(this.cloneConstructProperties())}cloneConstructProperties(){const t={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};return null!=this.date&&(t.date=new Date(this.date.getTime())),t}};t([r({type:Date,json:{type:Number,write:{target:"datetime"}}})],d.prototype,"date",void 0),t([s("date",["datetime"])],d.prototype,"readDate",null),t([i("date")],d.prototype,"writeDate",null),t([r({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],d.prototype,"directShadowsEnabled",void 0),t([s("directShadowsEnabled",["directShadows"])],d.prototype,"readDirectShadowsEnabled",null),t([i("directShadowsEnabled")],d.prototype,"writedirectShadowsEnabled",null),t([r({type:Number,json:{write:!0}})],d.prototype,"displayUTCOffset",void 0),t([i("displayUTCOffset")],d.prototype,"writeDisplayUTCOffset",null),d=a=t([o("esri.webscene.Lighting")],d);var p=d;export default p;
