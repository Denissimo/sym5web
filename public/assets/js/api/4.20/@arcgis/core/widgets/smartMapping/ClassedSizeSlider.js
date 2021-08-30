/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{i as r}from"../../core/lang.js";import{aliasOf as t}from"../../core/accessorSupport/decorators/aliasOf.js";import{cast as e}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Logger.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import m from"../../renderers/support/ClassBreakInfo.js";import{SmartMappingSliderBase as l}from"./SmartMappingSliderBase.js";import n from"./ClassedSizeSlider/ClassedSizeSliderViewModel.js";import{getFillFromColor as a}from"./support/utils.js";import{s as c}from"../../chunks/widgetUtils.js";import{m as u}from"../../chunks/messageBundle.js";import{t as j}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/Message.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../core/Error.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../chunks/assets.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../core/watchUtils.js";import"../Histogram.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../core/Handles.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../../chunks/ResizeObserver.js";import"../../chunks/_commonjsHelpers.js";import"../Slider/SliderViewModel.js";import"../../chunks/utils9.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"./SmartMappingSliderViewModel.js";var d;const h="esri-classed-size-slider",y="esri-classed-size-slider__ramp",b="esri-classed-size-slider__slider-container",k="esri-classed-size-slider__histogram-container",g="esri-classed-size-slider--interactive-track",S="esri-widget",f="esri-widget--panel",C="esri-disabled",w={trackFillColor:new o([149,149,149]),trackBackgroundColor:new o([224,224,224])};let M=d=class extends l{constructor(s,o){super(s,o),this._rampNode=null,this.breaks=null,this.label=void 0,this.messages=null,this.style={...w},this.viewModel=new n}castStyle(s){return{...w,...s}}static fromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol;let r;switch(o.type){case"simple-line":r=o.width;break;case"simple-marker":r=o.size;break;case"picture-marker":r=o.height}return{min:s.minValue,max:s.maxValue,size:r}}));return new d({breaks:t,histogramConfig:{bins:o?o.bins:[]}})}updateClassBreakInfos(s){const o=this.breaks;if(o.length===s.length)return s.map(((s,r)=>{const t=s.symbol;switch(t.type){case"simple-line":t.width=o[r].size;break;case"simple-marker":t.size=o[r].size;break;case"picture-marker":{const s=o[r].size,e=t.width,i=t.height;t.height=s,t.width=s/i*e;break}}return new m({minValue:o[r].min,maxValue:o[r].max,symbol:t})}));console.error(`Number of input breakInfos must match number of slider breaks: ${o.length}`)}updateFromRendererResult(s,o){const{renderer:{classBreakInfos:r}}=s,t=r.map((s=>{const o=s.symbol;let r;switch(o.type){case"simple-line":r=o.width;break;case"simple-marker":r=o.size;break;case"picture-marker":r=o.height}return{min:s.minValue,max:s.maxValue,size:r}}));this.set({breaks:t}),null!=o&&o.bins&&(this.histogramConfig.bins=o.bins)}render(){const{state:s,label:o,visibleElements:r}=this,t="disabled"===s,e=this.classes(h,S,f,{[C]:t,[g]:r.interactiveTrack});return j("div",{"aria-label":o,class:e},t?null:this.renderContent(this.renderRamp(),b,k))}renderRamp(){const{style:{trackBackgroundColor:s}}=this;return j("div",{afterCreate:c,bind:this,class:y,"data-node-ref":"_rampNode"},j("svg",{xmlns:"http://www.w3.org/2000/svg"},j("rect",{x:"0",y:"0",fill:a(s),height:"100%",width:"100%"}),this.renderPath()))}renderPath(){if(!this._rampNode)return;const{offsetHeight:s=0,offsetWidth:o=0}=this._rampNode;if(!r(s)||!r(o))return;const{breaks:t,viewModel:{max:e,min:i},style:{trackFillColor:p}}=this,m=e-i,l=o/t.length,n=t.map((o=>s-Math.round((o.min-i)/m*s)+1)).reverse(),c=t[0].size>t[t.length-1].size||!1;let u=c?l:o,d=`M${u} 0 `;return n.forEach(((s,r)=>{const t=l*(r+1);d+=`L${u} ${s} `,u=c?l+t:o-t,d+=`L${u} ${s} `})),d+=`L0 ${s} L0 ${s} L0 0 Z`,j("path",{d,fill:a(p)})}};s([t("viewModel.breaks")],M.prototype,"breaks",void 0),s([i({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],M.prototype,"label",void 0),s([i(),u("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")],M.prototype,"messages",void 0),s([i()],M.prototype,"style",void 0),s([e("style")],M.prototype,"castStyle",null),s([i()],M.prototype,"viewModel",void 0),M=d=s([p("esri.widgets.smartMapping.ClassedSizeSlider")],M);var U=M;export default U;
