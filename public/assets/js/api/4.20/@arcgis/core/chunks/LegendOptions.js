/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{a as t}from"./JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends t{constructor(){super(...arguments),this.title=null}clone(){return new e({title:this.title})}};r([o({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=e=r([s("esri.renderers.support.LegendOptions")],p);var i=p;export{i as L,p as a};
