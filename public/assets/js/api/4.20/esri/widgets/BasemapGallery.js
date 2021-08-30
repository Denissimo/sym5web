// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../assets ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./BasemapGallery/BasemapGalleryViewModel ./support/Heading ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),
function(r,c,t,u,p,m,b,C,D,E,k,v,w,x,y,z,A,e,F){b=function(q){function n(a,d){a=q.call(this,a,d)||this;a._handles=new u;a.activeBasemap=null;a.disabled=!1;a.headingLevel=2;a.iconClass="esri-icon-basemap";a.label=void 0;a.messages=null;a.source=null;a.view=null;a.viewModel=new x;return a}r._inheritsLoose(n,q);var l=n.prototype;l.initialize=function(){const a=this._handles;this.own([p.on(this,"viewModel.items","change",d=>{const {added:f,moved:g}=d;a.remove("basemap-gallery-item-changes");a.add([...f,
...g].map(h=>h.watch("state",()=>this.scheduleRender())),"basemap-gallery-item-changes");this.scheduleRender()}),a,p.whenOnce(this,"source",()=>this.viewModel.load())])};l.render=function(){var a="loading"===this.get("source.state"),d=this.disabled||"disabled"===this.get("viewModel.state");const f=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this);d={["esri-basemap-gallery--source-loading"]:a,["esri-disabled"]:d};const g=a?e.tsx("div",{class:"esri-basemap-gallery__loader",
key:"esri-basemap-gallery__loader"}):null;a=a?null:0<f.length?e.tsx("ul",{class:"esri-basemap-gallery__item-container",key:"esri-basemap-gallery__item-container",role:"menu"},f):e.tsx("div",{class:"esri-widget__content--empty",key:"esri-basemap-gallery__empty-message"},e.tsx(y.Heading,{level:this.headingLevel},this.messages.noBasemaps));return e.tsx("div",{class:this.classes("esri-basemap-gallery esri-widget esri-widget--panel-height-only",d)},g,a)};l._handleClick=function(a){a=a.currentTarget["data-item"];
"ready"===a.state&&(this.activeBasemap=a.basemap)};l._renderBasemapGalleryItem=function(a){const d=a.get("basemap.thumbnailUrl")||t.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),f=a.get("basemap.title");var g=a.get("basemap.portalItem.snippet");g=a.get("error.message")||g||f;var {viewModel:h}=this;const B=this.disabled||"ready"!==h.state||"ready"!==a.state?-1:0;h=h.basemapEquals(a.basemap,this.activeBasemap);return e.tsx("li",{"aria-selected":h.toString(),bind:this,class:this.classes("esri-basemap-gallery__item",
{["esri-basemap-gallery__item--selected"]:h,["esri-basemap-gallery__item--loading"]:"loading"===a.state,["esri-basemap-gallery__item--error"]:"error"===a.state}),"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:B,title:g},e.tsx("img",{alt:"",class:"esri-basemap-gallery__item-thumbnail",src:d}),e.tsx("div",{class:"esri-basemap-gallery__item-title"},f))};return n}(w);c.__decorate([m.aliasOf("viewModel.activeBasemap")],b.prototype,"activeBasemap",void 0);c.__decorate([k.property()],
b.prototype,"disabled",void 0);c.__decorate([k.property()],b.prototype,"headingLevel",void 0);c.__decorate([k.property()],b.prototype,"iconClass",void 0);c.__decorate([k.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([k.property(),A.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],b.prototype,"messages",void 0);c.__decorate([m.aliasOf("viewModel.source")],b.prototype,"source",void 0);c.__decorate([m.aliasOf("viewModel.view")],
b.prototype,"view",void 0);c.__decorate([k.property()],b.prototype,"viewModel",void 0);c.__decorate([z.accessibleHandler()],b.prototype,"_handleClick",null);return b=c.__decorate([v.subclass("esri.widgets.BasemapGallery")],b)});