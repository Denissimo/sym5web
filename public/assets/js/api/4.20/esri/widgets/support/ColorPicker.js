// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../chunks/button ../../chunks/utils ../../chunks/label ../../Color ../../core/Handles ../../core/handleUtils ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/trackingUtils ../Widget ./jsxFactory ./Popover ./widgetUtils ./decorators/messageBundle".split(" "),
function(e,t,f,C,c,D,n,u,p,g,h,E,F,G,H,v,w,x,k,y,I,z){function A(m,l){const b=setTimeout(m,l);return p.makeHandle(()=>clearTimeout(b))}function B(m,l,b=50){function a(){m()?l():d=setTimeout(a,b)}let d;d=setTimeout(a,b);return p.makeHandle(()=>clearTimeout(d))}c.register({"calcite-color-picker":c.CalciteColorPicker,"calcite-tab-title":c.CalciteTabTitle,"calcite-tab":c.CalciteTab,"calcite-input":c.CalciteInput,"calcite-color-picker-hex-input":c.CalciteColorPickerHexInput,"calcite-tabs":c.CalciteTabs,
"calcite-tab-nav":c.CalciteTabNav,"calcite-button":c.CalciteButton,"calcite-color-picker-swatch":c.CalciteColorPickerSwatch,"calcite-icon":c.CalciteIcon,"calcite-progress":c.CalciteProgress,"calcite-loader":c.CalciteLoader});c.register({"calcite-slider":c.CalciteSlider,"calcite-graph":c.CalciteGraph});e.ColorPicker=function(m){function l(a,d){a=m.call(this,a,d)||this;a.value=new n;a.alphaEnabled=!0;a._handles=new u;a._containerElement=null;a._popover=null;a._popoverElement=null;a._buttonElement=null;
return a}t._inheritsLoose(l,m);var b=l.prototype;b.initialize=function(){this.own(w.autorun(()=>{g.applySome(this._containerElement,a=>{a.style.setProperty("--esri-color-picker-value",this.value.toCss(!0))})}))};b.destroy=function(){this._destroyPopover();this._handles=g.destroyMaybe(this._handles);this._buttonElement=null};b.render=function(){var a=this._messages;a=g.isSome(this._popover)&&this._popover.open?a.close:a.open;return k.tsx("div",{class:this.classes("esri-color-picker",this.class),bind:this,
afterCreate:this._onContainerAfterCreate},k.tsx("div",{class:"esri-color-picker__bg-pattern"}),k.tsx("calcite-button",{appearance:"transparent","aria-label":a,class:"esri-color-picker__toggle-button",color:"neutral",id:this.id,scale:"s",tabIndex:-1,title:a,bind:this,onclick:this._togglePopover,afterCreate:this._onButtonAfterCreate}))};b._onContainerAfterCreate=function(a){this._containerElement=a};b._onButtonAfterCreate=function(a){this._destroyPopover();this._buttonElement=a;this._popover=new y({owner:this,
anchorElement:a,placement:"bottom-start",renderContentFunction:this._renderPopoverContent})};b._destroyPopover=function(){this._handles.remove("hex-input-poll-timeout");this._popover=g.destroyMaybe(this._popover);this._popoverElement=null};b._renderPopoverContent=function(){const a=this.value,d=this._messages;return k.tsx("div",{class:"esri-color-picker__popover",tabIndex:-1,bind:this,afterCreate:this._onPopoverAfterCreate,onfocusout:this._onPopoverFocusOut,onkeydown:this._onPopoverKeyDown},k.tsx("calcite-color-picker",
{appearance:"minimal",hideSaved:!0,hideChannels:!0,scale:"m",value:a.toCss(),bind:this,onCalciteColorPickerChange:this._onColorChange,afterCreate:this._onColorPickerAfterCreate}),this.alphaEnabled&&k.tsx("section",{class:"esri-color-picker__opacity-slider-container"},k.tsx("calcite-label",{scale:"s"},d.opacity,k.tsx("calcite-slider",{class:"esri-color-picker__opacity-slider",labelHandles:!0,min:0,max:1,step:.01,value:a.a,bind:this,onCalciteSliderChange:this._onOpacityChange}))))};b._onColorChange=
function(a){a=a.target.value;a="string"===typeof a?n.fromRgb(a):new n;a.a=this.value.a;this._onChange(a)};b._onOpacityChange=function(a){a=a.target;const d=this.value.clone();d.a=a.value;this._onChange(d)};b._onChange=function(a){this.value=a;if(g.isSome(this.onChange))this.onChange(a)};b._onColorPickerAfterCreate=function(a){this._handles.remove("hex-input-poll-timeout");this._handles.add(B(()=>!!a.hexInputNode,()=>{this._handles.remove("hex-input-poll-timeout");a.setFocus()}),"hex-input-poll-timeout")};
b._togglePopover=function(a){g.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()};b._openPopover=function(){g.applySome(this._popover,a=>a.open=!0)};b._closePopover=function(){this._handles.remove("hex-input-poll-timeout");g.applySome(this._popover,a=>a.open=!1);this._setFocusOnButton()};b._setFocusOnButton=function(){this._handles.remove("button-focus-timeout");this._handles.add(A(()=>{g.applySome(this._buttonElement,a=>a.setFocus())}),"button-focus-timeout")};b._onPopoverAfterCreate=
function(a){this._popoverElement=a};b._onPopoverFocusOut=function(a){const d=this._popoverElement;g.isNone(d)||(a=a.relatedTarget)&&a instanceof Node&&(d.contains(a)||a===this._buttonElement||this._isAssociatedLabel(a))||this._closePopover()};b._isAssociatedLabel=function(a){var d;const q=this.id,r=null==(d=a.tagName)?void 0:d.toLowerCase();return"calcite-label"===r&&a.for===q||"label"===r&&a.htmlFor===q};b._onPopoverKeyDown=function(a){if("Escape"===a.key||"Enter"===a.key)a.stopPropagation(),this._closePopover()};
return l}(x);f.__decorate([h.property()],e.ColorPicker.prototype,"class",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"value",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"alphaEnabled",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"onChange",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"_containerElement",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"_popover",void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"_popoverElement",
void 0);f.__decorate([h.property()],e.ColorPicker.prototype,"_buttonElement",void 0);f.__decorate([h.property(),z.messageBundle("esri/widgets/support/t9n/ColorPicker")],e.ColorPicker.prototype,"_messages",void 0);e.ColorPicker=f.__decorate([v.subclass("esri.widgets.support.ColorPicker")],e.ColorPicker);Object.defineProperty(e,"__esModule",{value:!0})});