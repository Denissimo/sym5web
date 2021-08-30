// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Attribution/AttributionViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(n,d,r,t,c,z,A,B,f,u,v,p,w,x,
g,C){c=function(q){function h(a,b){a=q.call(this,a,b)||this;a._isOpen=!1;a._attributionTextOverflowed=!1;a._prevSourceNodeHeight=0;a.iconClass="esri-icon-description";a.itemDelimiter=" | ";a.label=void 0;a.messages=null;a.view=null;a.viewModel=new p;return a}n._inheritsLoose(h,q);var e=h.prototype;e.initialize=function(){this.own(r.on(this,"viewModel.items","change",()=>this.scheduleRender()))};e.render=function(){return g.tsx("div",{bind:this,class:this.classes("esri-attribution esri-widget",{["esri-attribution--open"]:this._isOpen}),
onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())};e.renderPoweredBy=function(){return g.tsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",g.tsx("a",{class:this.classes("esri-attribution__link","esri-widget__anchor"),href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))};e.renderSourcesNode=function(){const a=this._isOpen,b=this._isInteractive(),k=b?0:-1,{attributionText:l}=this,m=b?"button":void 0;return g.tsx("div",
{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes("esri-attribution__sources",{["esri-attribution__sources--open"]:a,["esri-interactive"]:b}),innerHTML:l,role:m,tabIndex:k})};e._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth};e._afterSourcesNodeUpdate=function(a){let b=!1;const {clientHeight:k,clientWidth:l,scrollWidth:m}=a;a=m>=l;const y=this._attributionTextOverflowed!==a;this._attributionTextOverflowed=a;
y&&(b=!0);this._isOpen&&(a=k<this._prevSourceNodeHeight,this._prevSourceNodeHeight=k,a&&(this._isOpen=!1,b=!0));b&&this.scheduleRender()};e._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)};e._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed};n._createClass(h,[{key:"attributionText",get:function(){return this.viewModel.items.reduce((a,b)=>{-1===a.indexOf(b.text)&&a.push(b.text);return a},[]).join(this.itemDelimiter)}}]);return h}(v);d.__decorate([f.property({readOnly:!0,
dependsOn:["viewModel.items.length","itemDelimiter"]})],c.prototype,"attributionText",null);d.__decorate([f.property()],c.prototype,"iconClass",void 0);d.__decorate([f.property()],c.prototype,"itemDelimiter",void 0);d.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([f.property(),x.messageBundle("esri/widgets/Attribution/t9n/Attribution")],c.prototype,"messages",void 0);d.__decorate([t.aliasOf("viewModel.view")],c.prototype,
"view",void 0);d.__decorate([f.property({type:p})],c.prototype,"viewModel",void 0);d.__decorate([w.accessibleHandler()],c.prototype,"_toggleState",null);return c=d.__decorate([u.subclass("esri.widgets.Attribution")],c)});