/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Error.js";import{a as o}from"../chunks/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/write.js";let i=class extends o{constructor(t){super(t),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new r("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};t([s({type:Date})],i.prototype,"created",void 0),t([s()],i.prototype,"id",void 0),t([s()],i.prototype,"portal",void 0),t([s()],i.prototype,"title",void 0),t([s({readOnly:!0})],i.prototype,"url",null),t([s()],i.prototype,"username",void 0),i=t([e("esri.portal.PortalFolder")],i);var p=i;export default p;
