/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{clone as s,i as t}from"../../core/lang.js";import{p as e}from"../../chunks/screenUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{e as c}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import l from"./Callout3D.js";import{a as n}from"../../chunks/JSONSupport.js";import{c as m,s as a}from"../../chunks/materialUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Message.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../chunks/opacityUtils.js";var u;let h=u=class extends n{constructor(){super(...arguments),this.color=new r("white")}clone(){return new u({color:s(this.color)})}};o([i(m)],h.prototype,"color",void 0),h=u=o([p("esri.symbols.callouts.LineCallout3DBorder")],h);var j,d=h,k=Object.freeze({__proto__:null,get LineCallout3DBorder(){return h},default:d});let y=j=class extends l{constructor(o){super(o),this.type="line",this.color=new r([0,0,0,1]),this.size=e(1),this.border=null}get visible(){return this.size>0&&t(this.color)&&this.color.a>0}clone(){return new j({color:s(this.color),size:this.size,border:s(this.border)})}};o([c({line:"line"},{readOnly:!0})],y.prototype,"type",void 0),o([i(m)],y.prototype,"color",void 0),o([i(a)],y.prototype,"size",void 0),o([i({type:d,json:{write:!0}})],y.prototype,"border",void 0),o([i({readOnly:!0})],y.prototype,"visible",null),y=j=o([p("esri.symbols.callouts.LineCallout3D")],y);var f=y;export default f;export{k as L};