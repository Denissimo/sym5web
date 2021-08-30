/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../core/lang.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import a from"./Measurement/MeasurementViewModel.js";import"../chunks/widgetUtils.js";import{m as n}from"../chunks/messageBundle.js";import{t as c}from"../chunks/jsxFactory.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/watchUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../chunks/defaultUnit.js";const l="esri-measurement",d="esri-icon-measure";let u=class extends o{constructor(e,t){super(e,t),this._widgets=new Map,this.activeTool=null,this.activeWidget=null,this.areaUnit=null,this.iconClass=d,this.label=void 0,this.linearUnit=null,this.messages=null,this.view=null,this.viewModel=new a}initialize(){this.activeWidget&&this.viewModel.set("activeViewModel",this.activeWidget.viewModel),this.view&&this.activeTool&&this._getActiveWidget().then((e=>{this._set("activeWidget",e)})),this.own([this.watch(["view","activeTool"],(()=>{this._getActiveWidget().then((e=>{this._set("activeWidget",e)}))})),this.watch("activeWidget",((e,t)=>{this.viewModel.set("activeViewModel",e?e.viewModel:null),t&&(t.visible=!1)})),this.watch(["areaUnit","linearUnit","localeStrings"],(()=>this._updateSubWidgetProperties()))])}destroy(){this._destroyWidgets()}render(){const{activeWidget:e}=this,t=e&&!e.destroyed?e.render():null;return c("div",{class:l},t)}clear(){this.activeTool=null,this._destroyWidgets()}startMeasurement(){const{activeViewModel:e}=this.viewModel;e&&t(e.start())}async _createWidget(e){const{areaUnit:t,linearUnit:i,view:s}=this;switch(e){case"area":{const{type:i}=s;switch(i){case"2d":return new(0,(await import("./AreaMeasurement2D.js")).default)({view:s,unit:t,localeStrings:this._createLocaleStringsForWidget(e)});case"3d":return new(0,(await import("./AreaMeasurement3D.js")).default)({view:s,unit:t,localeStrings:this._createLocaleStringsForWidget(e)});default:return null}}case"distance":return new(0,(await import("./DistanceMeasurement2D.js")).default)({view:s,unit:i,localeStrings:this._createLocaleStringsForWidget(e)});case"direct-line":return new(0,(await import("./DirectLineMeasurement3D.js")).default)({view:s,unit:i,localeStrings:this._createLocaleStringsForWidget(e)});default:return null}}_destroyWidgets(){this._widgets.forEach((e=>e.destroy())),this._widgets.clear()}async _getActiveWidget(){const{activeTool:e,view:t}=this;if(!t||!e)return null;let i=null;if(this._widgets.has(e))i=this._widgets.get(e),i.visible=!0;else{if(i=await this._createWidget(e),!i)return null;await i.viewModel.start(),this._widgets.set(e,i)}return i}_createLocaleStringsForWidget(e){if(!this.localeStrings)return null;const t=e+"-"+this.view.type;return this.localeStrings[t]}_updateSubWidgetProperties(){this._widgets.forEach(((e,t)=>{const{areaUnit:i,linearUnit:s}=this;e.unit=function(e){return e&&("esri.widgets.AreaMeasurement2D"===e.declaredClass||"esri.widgets.AreaMeasurement3D"===e.declaredClass)}(e)?i:s,e.localeStrings=this._createLocaleStringsForWidget(t)}))}};e([i("viewModel.activeTool")],u.prototype,"activeTool",void 0),e([s({readOnly:!0})],u.prototype,"activeWidget",void 0),e([i("viewModel.areaUnit")],u.prototype,"areaUnit",void 0),e([s()],u.prototype,"iconClass",void 0),e([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],u.prototype,"label",void 0),e([i("viewModel.linearUnit")],u.prototype,"linearUnit",void 0),e([s()],u.prototype,"localeStrings",void 0),e([s(),n("esri/widgets/Measurement/t9n/Measurement")],u.prototype,"messages",void 0),e([i("viewModel.view")],u.prototype,"view",void 0),e([s({type:a})],u.prototype,"viewModel",void 0),u=e([r("esri.widgets.Measurement")],u);var p=u;export default p;
