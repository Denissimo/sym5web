/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{ignoreAbortErrors as e}from"../../core/promiseUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";let r=class extends t{get canZoomIn(){if(!this.get("view.ready"))return!1;const o=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMaxScale");return 0===t||o>t}get canZoomOut(){if(!this.get("view.ready"))return!1;const o=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMinScale");return 0===t||o<t}};o([i({readOnly:!0})],r.prototype,"canZoomIn",null),o([i({readOnly:!0})],r.prototype,"canZoomOut",null),o([i()],r.prototype,"view",void 0),r=o([s("esri.widgets.Zoom.ZoomConditions2D")],r);var n=r;let a=class extends t{get canZoomIn(){return!!this.get("view.ready")}get canZoomOut(){return!!this.get("view.ready")}};o([i({readOnly:!0})],a.prototype,"canZoomIn",null),o([i({readOnly:!0})],a.prototype,"canZoomOut",null),o([i()],a.prototype,"view",void 0),a=o([s("esri.widgets.Zoom.ZoomConditions3D")],a);var c=a;let m=class extends t{constructor(o){super(o),this.canZoomIn=!1,this.canZoomOut=!1}destroy(){this.view=null}get state(){return this.get("view.ready")?"ready":"disabled"}set view(o){o?"2d"===o.type?this._zoomConditions=new n({view:o}):"3d"===o.type&&(this._zoomConditions=new c({view:o})):this._zoomConditions=null,this._set("view",o)}zoomIn(){if(!this.canZoomIn)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomIn():e(o.goTo({zoomFactor:2}))}zoomOut(){if(!this.canZoomOut)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomOut():e(o.goTo({zoomFactor:.5}))}};o([i()],m.prototype,"_zoomConditions",void 0),o([i({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],m.prototype,"canZoomIn",void 0),o([i({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],m.prototype,"canZoomOut",void 0),o([i({readOnly:!0})],m.prototype,"state",null),o([i()],m.prototype,"view",null),m=o([s("esri.widgets.Zoom.ZoomViewModel")],m);var p=m;export default p;