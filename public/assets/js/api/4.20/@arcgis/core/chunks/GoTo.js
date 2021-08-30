/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";const s=s=>{let t=class extends s{constructor(...o){super(...o),this.goToOverride=null,this.view=null}callGoTo(o){const{view:r}=this;return this.goToOverride?this.goToOverride(r,o):r.goTo(o.target,o.options)}};return o([r()],t.prototype,"goToOverride",void 0),o([r()],t.prototype,"view",void 0),t=o([e("esri.widgets.support.GoTo")],t),t};export{s as G};
