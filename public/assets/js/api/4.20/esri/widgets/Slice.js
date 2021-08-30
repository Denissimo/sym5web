// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../chunks/button ../chunks/icon ../core/promiseUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ../views/3d/layers/SliceLayerView3D ./Widget ./Slice/SliceViewModel ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(x,d,c,E,y,h,F,G,H,I,k,z,J,A,v,B,K,C,b){c=function(w){function r(a,f){a=w.call(this,a,f)||this;a.messages=null;a.headingLevel=3;a.iconClass="esri-icon-slice";a.label=void 0;a.view=null;a.viewModel=new v;return a}x._inheritsLoose(r,w);var t=r.prototype;t.render=function(){var a=this.viewModel.isSupported,f=this.viewModel.active,g="disabled"===this.viewModel.state,l="ready"===this.viewModel.state,m="slicing"===this.viewModel.state||"sliced"===this.viewModel.state;const n="exclude"===this.viewModel.layersMode;
var {messages:e}=this,p=g&&"esri-button--disabled";g=f&&!m||n?null:b.tsx("button",{disabled:g,class:this.classes("esri-slice__clear-button esri-button esri-button--primary",p),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear",type:"button"},e.newSlice);const D=m&&!n?b.tsx("button",{class:this.classes("esri-slice__exclude-button esri-button esri-button--secondary",p),bind:this,onclick:()=>{this.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude",type:"button"},e.excludeLayer):
null;p=f&&n?b.tsx("button",{class:this.classes("esri-slice__cancel-button esri-button esri-button--secondary",p),bind:this,onclick:()=>{this.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude",type:"button"},e.cancel):null;let q=null;f&&(n?q=e.excludeHint:l&&(q=e.hint));f=q?b.tsx("div",{class:"esri-slice__hint",key:"esri-slice__hint"},b.tsx("p",{class:"esri-slice__hint-text"},q)):null;l=this.excludedLayers?this.excludedLayers.toArray().map(u=>this._renderLayerItem({uid:u.uid,title:u.title,
onClick:()=>{this.excludedLayers.remove(u);return!1}})):[];this.excludeGroundSurface&&l.push(this._renderLayerItem({uid:"ground",title:e.ground,onClick:()=>this.excludeGroundSurface=!1}));m=!n&&m&&0<l.length?b.tsx("div",{class:"esri-slice__settings",key:"esri-slice__settings"},b.tsx(B.Heading,{class:"esri-slice__settings-title",level:this.headingLevel},e.excludedLayers),b.tsx("ul",null,l)):null;e=b.tsx("div",{class:"esri-slice__panel--error",key:"esri-slice__unsupported"},b.tsx("p",null,e.unsupported));
g=b.tsx("div",{class:"esri-slice__actions"},D,p,g);a=this.visible?b.tsx("div",{class:"esri-slice__container"},a?[f,m,g]:e):null;return b.tsx("div",{class:"esri-slice esri-widget esri-widget--panel",role:"presentation"},a)};t._renderLayerItem=function(a){return b.tsx("li",{class:"esri-slice__layer-item",key:a.uid},b.tsx("calcite-button",{appearance:"transparent",class:"esri-slice__cross","icon-start":"x",scale:"s",title:this.messages.includeLayer,bind:this,onclick:a.onClick}),b.tsx("div",{class:"esri-slice__layer-item__title"},
a.title))};t._onNewSliceClick=function(){y.ignoreAbortErrors(this.viewModel.removeSliceAndStart())};return r}(A);d.__decorate([k.property(),C.messageBundle("esri/widgets/Slice/t9n/Slice")],c.prototype,"messages",void 0);d.__decorate([k.property()],c.prototype,"headingLevel",void 0);d.__decorate([k.property()],c.prototype,"iconClass",void 0);d.__decorate([k.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([h.aliasOf("viewModel.view")],c.prototype,
"view",void 0);d.__decorate([h.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([h.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([k.property({type:v})],c.prototype,"viewModel",void 0);d.__decorate([h.aliasOf("viewModel.excludedLayers")],c.prototype,"excludedLayers",void 0);d.__decorate([h.aliasOf("viewModel.excludeGroundSurface")],c.prototype,"excludeGroundSurface",void 0);return c=d.__decorate([z.subclass("esri.widgets.Slice")],c)});