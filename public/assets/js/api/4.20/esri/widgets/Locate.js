// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Locate/LocateViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils".split(" "),function(q,c,d,b,w,x,y,f,r,t,l,u,m,v,
h,z){b=function(n){function k(a,e){a=n.call(this,a,e)||this;a.geolocationOptions=null;a.goToLocationEnabled=null;a.goToOverride=null;a.graphic=null;a.iconClass="esri-icon-north-navigation";a.label=void 0;a.messages=null;a.messagesCommon=null;a.popupEnabled=null;a.scale=null;a.useHeadingEnabled=null;a.view=null;a.viewModel=new l;return a}q._inheritsLoose(k,n);var g=k.prototype;g.cancelLocate=function(){};g.locate=function(){};g.render=function(){const a=this.get("viewModel.state");var e="locating"===
a;e={["esri-icon-loading-indicator"]:e,["esri-rotating"]:e,["esri-icon-locate"]:!e};const p="locating"===a?this.messagesCommon.cancel:this.messages.title;return h.tsx("div",{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",{["esri-disabled"]:"disabled"===a,["esri-hidden"]:"feature-unsupported"===a}),hidden:"feature-unsupported"===a,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":p,title:p},h.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon",
e)}),h.tsx("span",{class:"esri-icon-font-fallback-text"},this.messages.title))};g._locate=function(){const {viewModel:a}=this;"locating"===a.state?a.cancelLocate():a.locate()};return k}(t);c.__decorate([d.aliasOf("viewModel.geolocationOptions")],b.prototype,"geolocationOptions",void 0);c.__decorate([d.aliasOf("viewModel.goToLocationEnabled")],b.prototype,"goToLocationEnabled",void 0);c.__decorate([d.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);c.__decorate([d.aliasOf("viewModel.graphic")],
b.prototype,"graphic",void 0);c.__decorate([f.property()],b.prototype,"iconClass",void 0);c.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([f.property(),m.messageBundle("esri/widgets/Locate/t9n/Locate")],b.prototype,"messages",void 0);c.__decorate([f.property(),m.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([d.aliasOf("viewModel.popupEnabled")],b.prototype,"popupEnabled",void 0);c.__decorate([d.aliasOf("viewModel.scale")],
b.prototype,"scale",void 0);c.__decorate([d.aliasOf("viewModel.useHeadingEnabled")],b.prototype,"useHeadingEnabled",void 0);c.__decorate([d.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([f.property({type:l}),v.vmEvent(["locate","locate-error"])],b.prototype,"viewModel",void 0);c.__decorate([d.aliasOf("viewModel.cancelLocate")],b.prototype,"cancelLocate",null);c.__decorate([d.aliasOf("viewModel.locate")],b.prototype,"locate",null);c.__decorate([u.accessibleHandler()],b.prototype,
"_locate",null);return b=c.__decorate([r.subclass("esri.widgets.Locate")],b)});