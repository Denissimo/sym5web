// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/decorators/cast ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./BasemapToggle/BasemapToggleViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils".split(" "),function(u,c,f,b,
v,B,C,g,w,x,k,y,z,A,d,D){function p(e){return(e=k.getThumbnailUrl(e))?{backgroundImage:"url("+e+")"}:{backgroundImage:""}}const q={title:!1};b=function(e){function l(a,m){a=e.call(this,a,m)||this;a.activeBasemap=null;a.label=void 0;a.messages=null;a.nextBasemap=null;a.view=null;a.viewModel=new k;a.visibleElements={...q};return a}u._inheritsLoose(l,e);var h=l.prototype;h.castVisibleElements=function(a){return{...q,...a}};h.toggle=function(){};h.render=function(){var a=this.viewModel;const m="disabled"===
a.state?null:a.activeBasemap,n=(a="disabled"===a.state?null:a.nextBasemap)?a.title:"",r=a&&"loaded"!==a.loadStatus;let t;this.visibleElements.title&&n&&(t=d.tsx("div",{class:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",key:"esri-basemap-toggle__overlay"},d.tsx("span",{class:"esri-basemap-thumbnail__title esri-basemap-toggle__title",title:n},n)));return d.tsx("div",{class:"esri-basemap-toggle esri-widget",role:"button","data-basemap-id":a?a.id:"",bind:this,onclick:this._toggle,
onkeydown:this._toggle,tabIndex:0,title:this.label},d.tsx("div",{class:this.classes("esri-basemap-thumbnail esri-basemap-toggle__container","esri-basemap-toggle__image--secondary")},d.tsx("div",{class:"esri-basemap-thumbnail__image esri-basemap-toggle__image",styles:p(m)})),d.tsx("div",{class:"esri-basemap-thumbnail esri-basemap-toggle__container"},d.tsx("div",{class:this.classes("esri-basemap-thumbnail__image esri-basemap-toggle__image",r?"esri-basemap-toggle__image--loading":null),styles:p(a)},
r?d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-widget__loader-animation"}):null),t))};h._toggle=function(){this.toggle()};return l}(x);c.__decorate([f.aliasOf("viewModel.activeBasemap")],b.prototype,"activeBasemap",void 0);c.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([g.property(),z.messageBundle("esri/widgets/BasemapToggle/t9n/BasemapToggle")],b.prototype,"messages",void 0);c.__decorate([f.aliasOf("viewModel.nextBasemap")],
b.prototype,"nextBasemap",void 0);c.__decorate([f.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([A.vmEvent("toggle"),g.property({type:k})],b.prototype,"viewModel",void 0);c.__decorate([g.property()],b.prototype,"visibleElements",void 0);c.__decorate([v.cast("visibleElements")],b.prototype,"castVisibleElements",null);c.__decorate([f.aliasOf("viewModel.toggle")],b.prototype,"toggle",null);c.__decorate([y.accessibleHandler()],b.prototype,"_toggle",null);return b=c.__decorate([w.subclass("esri.widgets.BasemapToggle")],
b)});