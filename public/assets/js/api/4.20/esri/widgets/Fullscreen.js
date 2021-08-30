// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Fullscreen/FullscreenViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(k,d,l,c,u,v,w,e,p,q,m,r,t,h,x){c=function(n){function f(a,
b){a=n.call(this,a,b)||this;a.element=null;a.label=void 0;a.messages=null;a.view=null;a.viewModel=new m;return a}k._inheritsLoose(f,n);var g=f.prototype;g.render=function(){var a;const b=null==(a=this.viewModel)?void 0:a.state;({fullscreenTitle:a}=this);return h.tsx("div",{bind:this,class:this.classes("esri-fullscreen esri-widget--button esri-widget",{["esri-disabled"]:"disabled"===b||"feature-unsupported"===b}),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":a,title:a},
this.renderIcon(),this.renderTitle())};g.renderIcon=function(){var a;const b=null==(a=this.viewModel)?void 0:a.state;return h.tsx("span",{class:this.classes("esri-icon",{["esri-icon-zoom-out-fixed"]:"ready"===b||"disabled"===b||"feature-unsupported"===b,["esri-icon-zoom-in-fixed"]:"active"===b}),"aria-hidden":"true"})};g.renderTitle=function(){return h.tsx("span",{class:"esri-icon-font-fallback-text"},this.fullscreenTitle)};g._toggle=function(){this.viewModel.toggle()};k._createClass(f,[{key:"fullscreenTitle",
get:function(){var a;const b=null==(a=this.viewModel)?void 0:a.state;return"active"===b?this.messages.exit:"ready"===b?this.messages.enter:""}}]);return f}(q);d.__decorate([l.aliasOf("viewModel.element")],c.prototype,"element",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"fullscreenTitle",null);d.__decorate([e.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([e.property(),t.messageBundle("esri/widgets/Fullscreen/t9n/Fullscreen")],
c.prototype,"messages",void 0);d.__decorate([l.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([e.property({type:m})],c.prototype,"viewModel",void 0);d.__decorate([r.accessibleHandler()],c.prototype,"_toggle",null);return c=d.__decorate([p.subclass("esri.widgets.Fullscreen")],c)});