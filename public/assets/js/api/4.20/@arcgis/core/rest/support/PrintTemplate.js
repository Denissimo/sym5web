/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../core/Accessor.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";let e=class extends o{constructor(t){super(t),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};t([r()],e.prototype,"attributionVisible",void 0),t([r()],e.prototype,"exportOptions",void 0),t([r()],e.prototype,"forceFeatureAttributes",void 0),t([r()],e.prototype,"format",void 0),t([r()],e.prototype,"label",void 0),t([r()],e.prototype,"layout",void 0),t([r()],e.prototype,"layoutOptions",void 0),t([r()],e.prototype,"outScale",void 0),t([r()],e.prototype,"scalePreserved",void 0),t([r()],e.prototype,"showLabels",void 0),e=t([s("esri.rest.support.PrintTemplate")],e);var i=e;export default i;