/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{a as r}from"./JSONSupport.js";import{clone as t}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{e as i}from"./enumeration.js";import{s as p}from"./utils.js";let l=class extends r{};e([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=e([o("esri.layers.support.BuildingFilterMode")],l);var n,a=l;let d=n=class extends a{constructor(){super(...arguments),this.type="solid"}clone(){return new n}};e([s({type:["solid"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),d=n=e([o("esri.layers.support.BuildingFilterModeSolid")],d);var u,y=d;let c=u=class extends a{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new u({edges:t(this.edges)})}};e([i({wireFrame:"wire-frame"})],c.prototype,"type",void 0),e([s(p)],c.prototype,"edges",void 0),c=u=e([o("esri.layers.support.BuildingFilterModeWireFrame")],c);var m,f=c;let w=m=class extends a{constructor(){super(...arguments),this.type="x-ray"}clone(){return new m}};e([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],w.prototype,"type",void 0),w=m=e([o("esri.layers.support.BuildingFilterModeXRay")],w);var j,g=w;const x={nonNullable:!0,types:{key:"type",base:a,typeMap:{solid:y,"wire-frame":f,"x-ray":g}},json:{read:e=>{switch(e&&e.type){case"solid":return y.fromJSON(e);case"wireFrame":return f.fromJSON(e);case"x-ray":return g.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=j=class extends r{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new y,this.title=""}clone(){return new j({filterExpression:this.filterExpression,filterMode:t(this.filterMode),title:this.title})}};e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),e([s(x)],v.prototype,"filterMode",void 0),e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=j=e([o("esri.layers.support.BuildingFilterBlock")],v);var h=v;export{h as B,g as a,y as b};
