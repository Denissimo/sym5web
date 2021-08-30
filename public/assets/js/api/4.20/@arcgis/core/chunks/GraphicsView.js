/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{I as o}from"./Identifiable.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";const t=t=>{let p=class extends(o(t)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return r([e()],p.prototype,"graphics",void 0),r([e()],p.prototype,"renderer",void 0),r([e()],p.prototype,"updating",void 0),r([e()],p.prototype,"view",void 0),p=r([s("esri.views.layers.GraphicsView")],p),p};export{t as G};
