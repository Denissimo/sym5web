// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/domUtils ../core/events ../core/HandleOwner ../core/watchUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/decorators/cast ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/subclass ./Slider ./Widget ./ScaleRangeSlider/scalePreviewUtils ./ScaleRangeSlider/ScaleRanges ./ScaleRangeSlider/ScaleRangeSliderViewModel ./support/Popover ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils ../intl/number ../intl/substitute".split(" "),
function(q,k,h,H,u,I,x,n,Q,J,R,S,K,L,M,B,y,N,z,C,O,l,A,D,P){const E={preview:!0},F={maximumFractionDigits:0};h=function(G){function v(b,f){var a=G.call(this,b,f)||this;a._activeMenu=null;a._activeMenuNode=null;a._activeMenuToggleNode=null;a._activeThumb=null;a._customMaxScale=-1;a._customMinScale=-1;a._focusedMenuItemIndex=-1;a._previewAutoCloseTimeoutId=null;a._previewPopover=new z({owner:q._assertThisInitialized(a),placement:"top",anchorElement:()=>0===a._activeThumb?a._minThumbNode:a._maxThumbNode,
offset:[0,16],renderContentFunction:a.renderScalePreview});a._maxScaleMenuPopover=new z({owner:q._assertThisInitialized(a),placement:"bottom-end",anchorElement:()=>a._activeMenuToggleNode,renderContentFunction:a.renderMaxScaleMenu});a._minScaleMenuPopover=new z({owner:q._assertThisInitialized(a),placement:"bottom-start",anchorElement:()=>a._activeMenuToggleNode,renderContentFunction:a.renderMinScaleMenu});a._scaleMenuNode=null;a._slider=new L({thumbCreatedFunction:(c,d,e)=>{0===c&&(a._minThumbNode=
e);1===c&&(a._maxThumbNode=e);a.own([u.on(e,"mouseenter",()=>{const {visibleElements:{preview:g}}=q._assertThisInitialized(a);a._activeThumb=c;a._previewPopover.open=g;a.scheduleRender()}),u.on(e,"mouseleave",()=>{a._previewAutoCloseTimeoutId||(a._activeThumb=null,a._previewPopover.open=!1,a.scheduleRender())})])}});a.disabled=!1;a.label=void 0;a.layer=null;a.maxScale=null;a.maxScaleLimit=null;a.messages=null;a.minScale=null;a.minScaleLimit=null;a.region="US";a.view=null;a.viewModel=new N;a.visibleElements=
E;a._handleScaleMenuToggleClick=c=>{c=c.currentTarget;const d=c.getAttribute("data-type");a.handles.remove("menu-closing-click-handle");d===a._activeMenu?(a._setActiveMenu(null),a._activeMenuToggleNode=null):(a._setActiveMenu(d),a._activeMenuToggleNode=c,a.handles.add(u.on(document,"mousedown",e=>{e=e.target;const g=H.closest(e,".esri-scale-range-slider__scale-menu-toggle"),p=g&&g.getAttribute("data-type");g&&p===a._activeMenu||p||!a._scaleMenuNode||a._scaleMenuNode.contains(e)||(a._setActiveMenu(null),
a.handles.remove("menu-closing-click-handle"),a.scheduleRender())}),"menu-closing-click-handle"))};a._afterMenuListCreate=c=>{a._activeMenuNode=c;c.children[0].focus({preventScroll:!0})};a._handleCustomScaleEntry=c=>{a._setScaleFromMenuSelection(c);a._customMaxScale=-1;a._customMinScale=-1};a._handleCustomScaleInputBlur=()=>{"max"===a._activeMenu?a._customMaxScale=-1:a._customMinScale=-1};a.handleCustomScaleInputKeyDown=c=>{var d=c.currentTarget;const {handleCustomScaleSelect:e}=d["data-render-props"],
{key:g,ctrlKey:p,metaKey:r}=c,{viewModel:{scaleRanges:w}}=q._assertThisInitialized(a);"Enter"===g?(d=d.value.replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*:/,"").replace(/[^\d.\s]/g,""),d=parseFloat(d),e(isNaN(d)?-1:w.clampScale(d)),c.preventDefault(),c.stopPropagation()):1<g.length||p||r||/[:,.\d]/.test(g)||(c.preventDefault(),c.stopPropagation())};a._handleScaleMenuKeyDown=c=>{var d=u.eventKey(c);if("Escape"===d||"Tab"===d)a._setActiveMenu(null),a._activeMenuToggleNode.focus();else if("ArrowUp"===
d||"ArrowDown"===d){var e=a._activeMenuNode.children,g=a._focusedMenuItemIndex;d="ArrowUp"===d?(0===g?e.length:g)-1:(g+1)%e.length;c.preventDefault();c.stopPropagation();e[d].focus();a._focusedMenuItemIndex=d}};return a}q._inheritsLoose(v,G);var m=v.prototype;m.initialize=function(){this.own([x.init(this,"viewModel",b=>this._slider.viewModel=b?b.sliderViewModel:null),x.init(this,"_interactive",b=>{this._slider.disabled=!b;b||this._setActiveMenu(null)}),this._slider.on("thumb-drag",({index:b})=>{const {visibleElements:{preview:f}}=
this;this._activeThumb=b;this._previewPopover.open=f;clearTimeout(this._previewAutoCloseTimeoutId);this._previewAutoCloseTimeoutId=setTimeout(()=>{this._activeThumb=this._previewAutoCloseTimeoutId=null;this._previewPopover.open=!1;this.scheduleRender()},250)}),x.whenTrue(this,"view.stationary",()=>this.scheduleRender())])};m.destroy=function(){this._previewPopover.destroy();this._previewPopover=null;this._maxScaleMenuPopover.destroy();this._maxScaleMenuPopover=null;this._minScaleMenuPopover.destroy();
this._minScaleMenuPopover=null;this._slider.destroy();this._slider=null};m.castVisibleElements=function(b){return{...E,...b}};m.render=function(){const {_interactive:b,_slider:f,label:a,messages:c,view:d,viewModel:{scaleRanges:e,state:g}}=this,p=c.scaleRangeLabels[e.findScaleRangeByIndex(f.values[0]).id],r=c.scaleRangeLabels[e.findScaleRangeByIndex(f.values[1]).id];f.layout=A.isRTL()?"horizontal-reversed":"horizontal";return l.tsx("div",{"aria-label":a,class:this.classes("esri-scale-range-slider",
"esri-widget",b?null:"esri-disabled")},"ready"===g&&d?this.renderCurrentScaleIndicator():null,f.render(),l.tsx("div",{class:"esri-scale-range-slider__scale-menu-container",key:"scale-menu-toggles"},this.renderScaleMenuToggle("min",p),this.renderScaleMenuToggle("max",r)))};m.renderMinScaleMenu=function(){const {_effectiveMaxScale:b,minScaleLimit:f,view:a,viewModel:{scaleRanges:c}}=this,d=a?a.scale:void 0;return this.renderScaleMenu({type:"min",min:f,max:c.findScaleRange(b).minScale,map:d})};m.renderMaxScaleMenu=
function(){const {_effectiveMinScale:b,maxScaleLimit:f,view:a,viewModel:{scaleRanges:c}}=this,d=a?a.scale:void 0;return this.renderScaleMenu({type:"max",min:c.findScaleRange(b).maxScale,max:f,map:d})};m.renderScalePreview=function(){const {_activeThumb:b,_slider:f,region:a,viewModel:{scaleRanges:c}}=this;var d=0===b?f.values[0]:f.values[1];d=Object.keys(y.RecommendedScales).indexOf(c.findScaleRangeByIndex(d).id);d={backgroundImage:B.getScalePreviewSource(a),backgroundPosition:B.getScalePreviewSpriteBackgroundPosition(d)};
return l.tsx("div",{class:"esri-scale-range-slider__scale-preview"},l.tsx("div",{class:"esri-scale-range-slider__scale-preview-thumbnail",styles:d}))};m.renderScaleMenu=function({map:b,min:f,max:a,type:c}){const d=y.fromScaleRange({minScale:f,maxScale:a}),e=this.messages.featuredScaleLabels,g=y.RecommendedScales;f=Object.keys(g).filter(t=>d.contains(g[t])).map(t=>this.renderScaleMenuItem({scaleLabel:e[t],scaleValue:g[t],valueVisible:"world"!==t,handleNamedScaleSelect:this._handleRecommendedScaleClick}));
const {_customMaxScale:p,_customMinScale:r,messages:w}=this;return l.tsx("div",{bind:this,class:"esri-scale-range-slider__scale-menu","data-type":c,id:`${this.id}__scale-menu--${c}`,key:`${c}-scale-menu`,afterCreate:A.storeNode,"data-node-ref":"_scaleMenuNode",onkeydown:this._handleScaleMenuKeyDown},l.tsx("div",{class:"esri-scale-range-slider__scale-menu-scroller"},l.tsx("ul",{class:"esri-scale-range-slider__scale-menu-list",afterCreate:this._afterMenuListCreate},this.renderScaleMenuItem({scaleValue:"max"===
c?p:r,scaleLabel:w.featuredScaleLabels.custom,valueVisible:!1,handleNamedScaleSelect:this._handleScaleSelection,handleCustomScaleSelect:this._handleCustomScaleEntry}),null!=b?this.renderScaleMenuItem({scaleValue:b,scaleLabel:w.featuredScaleLabels.current,valueVisible:!0,handleNamedScaleSelect:this._handleRecommendedScaleClick}):null,f)))};m._handleScaleSelection=function(){"max"===this._activeMenu?this._customMaxScale=this._effectiveMaxScale:this._customMinScale=this._effectiveMinScale};m.renderScaleMenuToggle=
function(b,f){const {_activeMenu:a,_interactive:c}=this,d=a===b;return l.tsx("button",{"aria-controls":d?`${this.id}__scale-menu--${b}`:"","aria-pressed":d?"true":"false",class:this.classes("esri-scale-range-slider__scale-menu-toggle",d?"esri-scale-range-slider__scale-menu-toggle--active":null),"data-type":b,key:`${b}-scale-menu-toggle`,onclick:this._handleScaleMenuToggleClick,disabled:!c,type:"button"},f,l.tsx("span",{class:this.classes("esri-scale-range-slider__scale-menu-toggle-icon","esri-icon-down"),
"aria-hidden":"true"}))};m.renderScaleMenuItem=function(b){const {scaleValue:f,scaleLabel:a,valueVisible:c,handleNamedScaleSelect:d,handleCustomScaleSelect:e=null}=b;var {id:g}=this;g=`${g}__custom-scale-input`;return l.tsx("li",{bind:this,class:"esri-scale-range-slider__scale-menu-item","data-scale":f,key:a,onclick:d,onkeydown:d,tabIndex:-1},l.tsx("label",{class:"esri-scale-range-slider__scale-item-label",for:g},a),-1<f?e?l.tsx("input",{afterCreate:this.focusAndSelectInputOnCreate,class:this.classes("esri-scale-range-slider__scale-item-value",
"esri-scale-range-slider__scale-item-value--editable"),"data-render-props":b,id:g,key:"value",value:`1:${D.formatNumber(f,F)}`,onkeydown:this.handleCustomScaleInputKeyDown,onblur:this._handleCustomScaleInputBlur}):c?l.tsx("div",{class:"esri-scale-range-slider__scale-item-value",key:"value"},`1:${D.formatNumber(f,F)}`):null:null)};m.focusAndSelectInputOnCreate=function(b){b.focus();b.select()};m.renderCurrentScaleIndicator=function(){const {_slider:b,messages:f,view:a,viewModel:{scaleRanges:c}}=this;
var d=c.clampScale(a.scale),e=this.viewModel.mapScaleToSlider(d);d=e/b.max;e=f.scaleRangeLabels[c.findScaleRangeByIndex(e).id];e=P.substitute(f.currentScaleTooltip,{scaleLabel:e});return l.tsx("div",{class:"esri-scale-range-slider__scale-indicator-container",key:"scale-indicator"},l.tsx("div",{"aria-label":e,class:"esri-scale-range-slider__scale-indicator",styles:{left:`${(A.isRTL()?-1:1)*d*100}%`},title:e},this.renderCurrentScaleIndicatorIcon()))};m.renderCurrentScaleIndicatorIcon=function(){return l.tsx("svg",
{class:"esri-scale-range-slider__scale-indicator-icon",height:"8",width:"8",viewBox:"0 0 8 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.tsx("polygon",{points:"4 0 8 8 0 8"}))};m._handleRecommendedScaleClick=function(b){this._setScaleFromMenuSelection(Number(b.currentTarget["data-scale"]))};m._setScaleFromMenuSelection=function(b){"max"===this._activeMenu?this.maxScale=Math.min(b,this._effectiveMinScale-1):this.minScale=Math.max(b,this._effectiveMaxScale+1);this._setActiveMenu(null);this._activeMenuToggleNode.focus()};
m._setActiveMenu=function(b){this._activeMenu=b;this._maxScaleMenuPopover.open="max"===b;this._minScaleMenuPopover.open="min"===b;this._focusedMenuItemIndex=b?0:-1};q._createClass(v,[{key:"_effectiveMaxScale",get:function(){return 0===this.maxScale?this.maxScaleLimit:this.maxScale}},{key:"_effectiveMinScale",get:function(){return 0===this.minScale?this.minScaleLimit:this.minScale}},{key:"_interactive",get:function(){return"disabled"!==this.get("viewModel.state")&&!this.disabled}}]);return v}(I.HandleOwnerMixin(M));
k.__decorate([n.property()],h.prototype,"_slider",void 0);k.__decorate([n.property()],h.prototype,"_effectiveMaxScale",null);k.__decorate([n.property()],h.prototype,"_effectiveMinScale",null);k.__decorate([n.property({readOnly:!0})],h.prototype,"_interactive",null);k.__decorate([n.property()],h.prototype,"disabled",void 0);k.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0);k.__decorate([n.property({aliasOf:"viewModel.layer"})],h.prototype,
"layer",void 0);k.__decorate([n.property({aliasOf:"viewModel.maxScale"})],h.prototype,"maxScale",void 0);k.__decorate([n.property({aliasOf:"viewModel.maxScaleLimit"})],h.prototype,"maxScaleLimit",void 0);k.__decorate([n.property(),O.messageBundle("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")],h.prototype,"messages",void 0);k.__decorate([n.property({aliasOf:"viewModel.minScale"})],h.prototype,"minScale",void 0);k.__decorate([n.property({aliasOf:"viewModel.minScaleLimit"})],h.prototype,"minScaleLimit",
void 0);k.__decorate([n.property()],h.prototype,"region",void 0);k.__decorate([n.property({aliasOf:"viewModel.view"})],h.prototype,"view",void 0);k.__decorate([n.property()],h.prototype,"viewModel",void 0);k.__decorate([n.property()],h.prototype,"visibleElements",void 0);k.__decorate([J.cast("visibleElements")],h.prototype,"castVisibleElements",null);k.__decorate([C.accessibleHandler()],h.prototype,"_handleScaleSelection",null);k.__decorate([C.accessibleHandler()],h.prototype,"_handleRecommendedScaleClick",
null);return h=k.__decorate([K.subclass("esri.widgets.ScaleRangeSlider")],h)});