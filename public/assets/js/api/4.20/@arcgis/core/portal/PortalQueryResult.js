/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../core/Accessor.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";let e=class extends s{constructor(r){super(r),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}};r([o()],e.prototype,"nextQueryParams",void 0),r([o()],e.prototype,"queryParams",void 0),r([o()],e.prototype,"results",void 0),r([o()],e.prototype,"total",void 0),e=r([t("esri.portal.PortalQueryResult")],e);var p=e;export default p;