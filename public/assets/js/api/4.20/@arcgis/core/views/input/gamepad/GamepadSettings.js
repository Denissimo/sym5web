/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import s from"../../../core/Accessor.js";import r from"../../../core/Collection.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import p from"./GamepadInputDevice.js";import"../../../chunks/deprecate.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Message.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/Evented.js";let c=class extends s{constructor(...o){super(...o),this.devices=new r,this.enabledFocusMode="document"}};o([e({type:r.ofType(p),readOnly:!0})],c.prototype,"devices",void 0),o([e({type:["document","view","none"]})],c.prototype,"enabledFocusMode",void 0),c=o([t("esri.views.input.gamepad.GamepadSettings")],c);var i=c;export default i;