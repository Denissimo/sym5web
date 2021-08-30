/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{i as r}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import i from"../geometry/Point.js";import{f as p}from"./commonProperties2.js";import a from"../rest/support/Query.js";import{g as n}from"./popupUtils.js";const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new t("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:p}=s,u=n(s,o);if(!p||!r(u))throw new t("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:u});const m=await u.getRequiredFields(),l=new a;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=m,l.outSpatialReference=e.spatialReference;const c=this.view.resolution,y="2d"===this.view.type?new i(c,c,this.view.spatialReference):new i(.5*c,.5*c,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:d}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:y,showNoDataRecords:d,signal:r(o)?o.signal:null};return s.queryVisibleRasters(l,f).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([o()],m.prototype,"layer",void 0),e([o()],m.prototype,"suspended",void 0),e([o(p)],m.prototype,"timeExtent",void 0),e([o()],m.prototype,"view",void 0),m=e([s("esri.views.layers.ImageryLayerView")],m),m};export{u as I};
