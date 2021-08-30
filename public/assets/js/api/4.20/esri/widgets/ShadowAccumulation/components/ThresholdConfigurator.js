// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../chunks/label ../../../core/maybe ../../../core/timeUtils ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/trackingUtils ../../../intl/number ../../Slider ../../Widget ../css ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),
function(c,p,e,D,u,l,q,g,E,F,G,H,v,w,x,y,z,r,A,B,I,C,m){c.ThresholdConfigurator=function(t){function h(d){var a=t.call(this,d)||this;a.colorPickerVisible=!0;a._valueSliderId=`value-slider-${q.generateUUID()}`;a._colorPickerId=`color-picker-${q.generateUUID()}`;a._valueSlider=new y({visibleElements:{labels:!1,rangeLabels:!1},steps:l.convertTime(30,"minutes","milliseconds"),labelFormatFunction:(b,f)=>{b=l.convertTime(b,"milliseconds","hours");return"tick"===f?x.formatNumber(b,{maximumFractionDigits:0}):
""}});a._onColorChange=b=>{a.options.color=b};return a}p._inheritsLoose(h,t);var n=h.prototype;n.initialize=function(){const d=({value:a})=>{this.options.value=a};this.own([w.reactionInit(()=>{const {value:a,minValue:b,maxValue:f}=this.options;return{value:a,minValue:b,maxValue:f}},({value:a,minValue:b,maxValue:f})=>{const k=this._valueSlider;k.min=b;k.max=f;k.values=[a];a=Math.floor(l.convertTime(f-b,"milliseconds","hours"));k.tickConfigs=[{mode:"count",values:2*a+1,labelsVisible:!1},{mode:"count",
values:a+1,labelsVisible:!0}]}),this._valueSlider.on("thumb-change",d),this._valueSlider.on("thumb-drag",d)])};n.destroy=function(){this._valueSlider=u.destroyMaybe(this._valueSlider)};n.render=function(){const d=this._messages.threshold,{color:a}=this.options;return m.tsx("div",{class:r.THRESHOLD_CONFIGURATOR_CSS.base},m.tsx(A.Label,{class:r.THRESHOLD_CONFIGURATOR_CSS.valueLabel,for:this._valueSliderId,label:d.valueLabel},this._valueSlider.render()),this.colorPickerVisible&&m.tsx(B.LabeledColorPicker,
{id:this._colorPickerId,label:d.colorLabel,value:a,onChange:this._onColorChange}))};p._createClass(h,[{key:"testData",get:function(){return{valueSlider:this._valueSlider}}}]);return h}(z);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"options",void 0);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"colorPickerVisible",void 0);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"testData",null);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"_valueSlider",
void 0);e.__decorate([g.property(),C.messageBundle("esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation")],c.ThresholdConfigurator.prototype,"_messages",void 0);c.ThresholdConfigurator=e.__decorate([v.subclass("esri.widgets.ShadowAccumulation.components.ThresholdConfigurator")],c.ThresholdConfigurator);Object.defineProperty(c,"__esModule",{value:!0})});