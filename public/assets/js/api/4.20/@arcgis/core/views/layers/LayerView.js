/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{E as r}from"../../chunks/Evented.js";import{HandleOwnerMixin as s}from"../../core/HandleOwner.js";import{I as i}from"../../chunks/Identifiable.js";import{L as o}from"../../chunks/Logger.js";import{a as n}from"../../chunks/Promise.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../core/watchUtils.js";let p=class extends(s(i(n(r.EventedMixin(t))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw o.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};e([l()],p.prototype,"fullOpacity",null),e([l()],p.prototype,"layer",void 0),e([l()],p.prototype,"parent",void 0),e([l({readOnly:!0})],p.prototype,"suspended",null),e([l({readOnly:!0})],p.prototype,"suspendInfo",null),e([l({readOnly:!0})],p.prototype,"legendEnabled",null),e([l({type:Boolean,readOnly:!0})],p.prototype,"updating",null),e([l({readOnly:!0})],p.prototype,"updatingProgress",null),e([l()],p.prototype,"visible",null),p=e([a("esri.views.layers.LayerView")],p);var d=p;export default d;