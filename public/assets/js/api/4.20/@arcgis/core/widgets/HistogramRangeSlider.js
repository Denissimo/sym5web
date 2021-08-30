/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../Color.js";import{watch as e}from"../core/watchUtils.js";import{aliasOf as o}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import{I as r}from"../chunks/ensureType.js";import"../chunks/Logger.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import n from"./Histogram.js";import l from"./Slider.js";import p from"./Widget.js";import m from"./HistogramRangeSlider/HistogramRangeSliderViewModel.js";import{getDeviationValues as u}from"./smartMapping/support/utils.js";import"../chunks/widgetUtils.js";import{m as d}from"../chunks/messageBundle.js";import{t as c}from"../chunks/jsxFactory.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"./Histogram/HistogramViewModel.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/ResizeObserver.js";import"../chunks/_commonjsHelpers.js";import"./Slider/SliderViewModel.js";import"../chunks/utils9.js";import"../chunks/numberUtils.js";import"../renderers/visualVariables/support/ColorStop.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/writer.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"../chunks/reader.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/uid.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";const h="esri-histogram-range-slider",j="esri-histogram-range-slider__slider-container",b="esri-histogram-range-slider__histogram-container",y="esri-histogram-range-slider__range-type--",g="esri-widget",v="esri-disabled";let k=class extends p{constructor(t,e){super(t,e),this._barElements=[],this._histogram=null,this._slider=null,this.average=null,this.barCreatedFunction=null,this.bins=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.excludedBarColor=new s("#d7e5f0"),this.hasTimeData=null,this.includedBarColor=new s("#599dd4"),this.label=void 0,this.labelFormatFunction=null,this.max=null,this.messages=null,this.min=null,this.precision=4,this.rangeType=null,this.standardDeviation=null,this.standardDeviationCount=1,this.values=null,this.viewModel=new m}initialize(){const{average:t,bins:s,hasTimeData:o,max:r,min:i,viewModel:a}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new n({average:t,bins:s,barCreatedFunction:(t,s)=>{0===t&&(this._barElements=[]),this._barElements.push(s),this._updateBarFill(t,s),this.barCreatedFunction&&this.barCreatedFunction(t,s)},dataLines:this._getDataLines(),dataLineCreatedFunction:(t,s)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(t,s)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:r,min:i}),this._slider=new l({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!o,viewModel:a}),this.own(this._slider.on(["max-change","min-change"],(t=>this.emit(t.type,t))),this._slider.on(["segment-drag","thumb-change","thumb-drag"],(t=>{this._updateBarFills(),this.emit(t.type,t)})),e(this,"bins",(()=>{const{_histogram:t,bins:s}=this;if(s&&t.bins){const e=t.bins.length-s.length;this._barElements.splice(-e,e)}else this._barElements=[];t.set({bins:s}),this._updateBarFills(),this.scheduleRender()})),e(this,["max","min","rangeType","values"],(()=>{const{_histogram:t,max:s,min:e}=this;t.set({max:s,min:e}),this._updateBarFills(),this.scheduleRender()})),e(this,["average","dataLines","standardDeviation","standardDeviationCount"],(()=>{const{_histogram:t,average:s}=this;t.set({average:s,dataLines:this._getDataLines()})})),e(this,"labelFormatFunction",(()=>{const{_histogram:t,labelFormatFunction:s}=this;t.set({labelFormatFunction:s})})),e(this,"hasTimeData",(()=>{this._slider.set({rangeLabelInputsEnabled:!this.hasTimeData})})))}generateWhereClause(t){return this.viewModel.generateWhereClause(t)}render(){const{rangeType:t,viewModel:s,label:e}=this,o=this.classes(h,g,`${y}${t}`,"disabled"===s.state?v:null);return c("div",{"aria-label":e,class:o},"disabled"===s.state?null:this.renderContent())}renderContent(){return[this.renderHistogram(),this.renderSlider()]}renderSlider(){return c("div",{key:`${this.id}-slider-container`,class:j},this._slider.render())}renderHistogram(){return c("div",{class:b},this._histogram.render())}_getDataLines(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]}_getStandardDeviationDataLines(){const{average:t,standardDeviation:s,standardDeviationCount:e}=this;return u(s,t,e).map((t=>({value:t})))}_updateBarFills(){this._barElements.forEach(((t,s)=>this._updateBarFill(s,t)))}_updateBarFill(t,s){s.setAttribute("fill",this._getFillForBar(t).toHex())}_getFillForBar(t){const{bins:s,rangeType:e,values:o}=this;if(!(s&&s.length&&e&&o.length))return null;const r=s[t];if(!r)return null;const{maxValue:i,minValue:a}=r,n=i-a,l=o[0]>a&&o[0]<i;switch(e){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return l?this._getBlendedColor((o[0]-a)/n):i<=o[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return l?this._getBlendedColor(1-(o[0]-a)/n):a>=o[0]?this.includedBarColor:this.excludedBarColor;case"between":if(2===o.length)return o[0]>a&&o[0]<i?this._getBlendedColor(1-(o[0]-a)/n):o[1]>a&&o[1]<i?this._getBlendedColor((o[1]-a)/n):a>=o[0]&&i<=o[1]?this.includedBarColor:this.excludedBarColor;case"not-between":if(2===o.length)return o[0]>a&&o[0]<i?this._getBlendedColor((o[0]-a)/n):o[1]>a&&o[1]<i?this._getBlendedColor(1-(o[1]-a)/n):a>o[0]&&i<o[1]?this.excludedBarColor:this.includedBarColor;default:return this.includedBarColor}}_getBlendedColor(t){return s.blendColors(this.excludedBarColor,this.includedBarColor,t)}};t([o("viewModel.average")],k.prototype,"average",void 0),t([i()],k.prototype,"barCreatedFunction",void 0),t([o("viewModel.bins")],k.prototype,"bins",void 0),t([i()],k.prototype,"dataLines",void 0),t([i()],k.prototype,"dataLineCreatedFunction",void 0),t([i({type:s,json:{type:[r],write:!0}})],k.prototype,"excludedBarColor",void 0),t([o("viewModel.hasTimeData")],k.prototype,"hasTimeData",void 0),t([i({type:s,json:{type:[r],write:!0}})],k.prototype,"includedBarColor",void 0),t([i({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],k.prototype,"label",void 0),t([o("viewModel.labelFormatFunction")],k.prototype,"labelFormatFunction",void 0),t([o("viewModel.max")],k.prototype,"max",void 0),t([i(),d("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],k.prototype,"messages",void 0),t([o("viewModel.min")],k.prototype,"min",void 0),t([o("viewModel.precision")],k.prototype,"precision",void 0),t([o("viewModel.rangeType")],k.prototype,"rangeType",void 0),t([o("viewModel.standardDeviation")],k.prototype,"standardDeviation",void 0),t([i()],k.prototype,"standardDeviationCount",void 0),t([o("viewModel.values")],k.prototype,"values",void 0),t([i()],k.prototype,"viewModel",void 0),k=t([a("esri.widgets.HistogramRangeSlider")],k);var C=k;export default C;