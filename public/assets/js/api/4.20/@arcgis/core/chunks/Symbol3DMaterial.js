/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{a as r}from"./JSONSupport.js";import{i as s}from"../core/lang.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{c as p}from"./materialUtils.js";var c;let l=c=class extends r{constructor(){super(...arguments),this.color=null}clone(){return new c({color:s(this.color)?this.color.clone():null})}};o([t(p)],l.prototype,"color",void 0),l=c=o([e("esri.symbols.support.Symbol3DMaterial")],l);var a=l;export{a as S};
