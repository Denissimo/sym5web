/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{J as s}from"../chunks/jsonMap.js";import{clone as o}from"../core/lang.js";import{t}from"../chunks/screenUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import l from"./LineSymbol.js";import p from"./LineSymbolMarker.js";import"../chunks/object.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/string.js";import"../chunks/Message.js";import"./Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/write.js";import"../chunks/reader.js";import"../chunks/writer.js";var a;const h=new s({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let m=a=class extends l{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(r,s,o,i,e,n){if(r&&"string"!=typeof r)return r;const l={};return null!=r&&(l.style=r),null!=s&&(l.color=s),null!=o&&(l.width=t(o)),null!=i&&(l.cap=i),null!=e&&(l.join=e),null!=n&&(l.miterLimit=t(n)),l}clone(){var r;return new a({color:o(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(r=this.marker)?void 0:r.clone()})}hash(){var r,s;return`${super.hash()}.${null==(r=this.color)?void 0:r.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(s=this.marker)?void 0:s.hash()}`}};r([e({esriSLS:"simple-line"},{readOnly:!0})],m.prototype,"type",void 0),r([i({type:h.apiValues,json:{read:h.read,write:h.write}})],m.prototype,"style",void 0),r([i({type:["butt","round","square"],json:{write:{overridePolicy:(r,s,o)=>({enabled:"round"!==r&&(null==o||null==o.origin)})}}})],m.prototype,"cap",void 0),r([i({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,s,o)=>({enabled:"round"!==r&&(null==o||null==o.origin)})}}})],m.prototype,"join",void 0),r([i({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":p}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],m.prototype,"marker",void 0),r([i({type:Number,json:{read:!1,write:!1}})],m.prototype,"miterLimit",void 0),m=a=r([n("esri.symbols.SimpleLineSymbol")],m);var u=m;export default u;
