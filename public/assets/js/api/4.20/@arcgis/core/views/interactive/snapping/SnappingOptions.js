/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import r from"../../../core/Collection.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import i from"./FeatureSnappingLayerSource.js";import{d as n}from"../../../chunks/Settings.js";import"../../../chunks/deprecate.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Message.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/Evented.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/write.js";let p=class extends t{constructor(e){super(e),this.enabled=!1,this.enabledToggled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.featureSources=new r,this.distance=n.distance,this.touchSensitivityMultiplier=n.touchSensitivityMultiplier}get effectiveEnabled(){return this.enabledToggled?!this.enabled:this.enabled}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}};e([o()],p.prototype,"enabled",void 0),e([o()],p.prototype,"enabledToggled",void 0),e([o()],p.prototype,"selfEnabled",void 0),e([o()],p.prototype,"featureEnabled",void 0),e([o({type:r.ofType(i)})],p.prototype,"featureSources",void 0),e([o()],p.prototype,"distance",void 0),e([o()],p.prototype,"touchSensitivityMultiplier",void 0),e([o({readOnly:!0})],p.prototype,"effectiveEnabled",null),e([o({readOnly:!0})],p.prototype,"effectiveSelfEnabled",null),e([o({readOnly:!0})],p.prototype,"effectiveFeatureEnabled",null),p=e([s("esri.views.interactive.snapping.SnappingOptions")],p);var l=p;export default l;