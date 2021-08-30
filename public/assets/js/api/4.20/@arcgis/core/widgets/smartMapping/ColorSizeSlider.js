/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import e from"../../core/Error.js";import{i as o}from"../../core/lang.js";import{aliasOf as i}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import l from"../../renderers/visualVariables/support/ColorSizeStop.js";import a from"../../renderers/visualVariables/support/ColorStop.js";import p from"../../renderers/visualVariables/support/SizeStop.js";import{SmartMappingSliderBase as n}from"./SmartMappingSliderBase.js";import m from"./ColorSizeSlider/ColorSizeSliderViewModel.js";import{getDynamicPathForSizeStops as u,getPathForSizeStops as d}from"./support/utils.js";import{s as c}from"../../chunks/widgetUtils.js";import{m as j}from"../../chunks/messageBundle.js";import{t as h}from"../../chunks/jsxFactory.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../chunks/screenUtils.js";import"../../chunks/writer.js";import"../../core/watchUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../chunks/Evented.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../../chunks/ResizeObserver.js";import"../../chunks/_commonjsHelpers.js";import"../Slider/SliderViewModel.js";import"../../chunks/utils9.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/reader.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../chunks/Loadable.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"./SizeSlider/SizeSliderViewModel.js";import"./SmartMappingPrimaryHandleSliderViewModel.js";import"./SmartMappingSliderViewModel.js";var b;const y="esri-color-size-slider",S="esri-color-size-slider__ramp",g="esri-color-size-slider__slider-container",v="esri-color-size-slider__histogram-container",f="esri-color-size-slider--primary-handle",k="esri-color-size-slider--interactive-track",z="esri-widget",w="esri-widget--panel",M="esri-disabled";let V=b=class extends n{constructor(s,e){super(s,e),this._bgFillId=null,this._backgroundFillColor="#e0e0e0",this._minRampFillWidth=.2,this._rampFillId=null,this._rampNode=null,this._maxRampFillWidth=1,this.handlesSyncedToPrimary=null,this.label=void 0,this.messages=null,this.persistSizeRangeEnabled=null,this.primaryHandleEnabled=null,this.stops=null,this.viewModel=new m,this.zoomOptions=null,this._bgFillId=`${this.id}-bg-fill`,this._rampFillId=`${this.id}-linear-gradient`}static fromRendererResult(s,o){const{renderer:{authoringInfo:{univariateTheme:i}},color:{visualVariable:{stops:r}},size:{visualVariables:t},statistics:a}=s,{avg:p,stddev:n}=a;if(!r)throw new e("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const m="above-and-below"===i,u=s.renderer.authoringInfo.visualVariables[0],d=u.minSliderValue,c=u.maxSliderValue,j=t.find((s=>"outline"!==(null==s?void 0:s.target)&&!(null!=s&&s.axis&&(null==s||!s.field)&&(null==s||!s.valueExpression))&&((null==s?void 0:s.field)||(null==s?void 0:s.valueExpression)))),h=j.stops,y=r.map(((s,e)=>{const{color:o,label:i,value:t}=s;let a;return a=h&&h.length>0?h[e].size:0===e?j.minSize:e===r.length-1?j.maxSize:null,new l({color:o,label:i,value:t,size:a})}));return new b({max:c,min:d,stops:y,primaryHandleEnabled:m,handlesSyncedToPrimary:m,persistSizeRangeEnabled:m,histogramConfig:{average:p,standardDeviation:n,bins:o?o.bins:[]}})}updateFromRendererResult(s,o){const{renderer:{authoringInfo:{univariateTheme:i}},color:{visualVariable:{stops:r}},size:{visualVariables:t},statistics:a}=s,{avg:p,stddev:n}=a;if(!r)throw new e("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const m="above-and-below"===i,u=s.renderer.authoringInfo.visualVariables[0],d=u.minSliderValue,c=u.maxSliderValue,j=t.find((s=>"outline"!==(null==s?void 0:s.target)&&!(null!=s&&s.axis&&(null==s||!s.field)&&(null==s||!s.valueExpression))&&((null==s?void 0:s.field)||(null==s?void 0:s.valueExpression)))),h=j.stops,b=r.map(((s,e)=>{const{color:o,label:i,value:t}=s;let a;return a=h&&h.length>0?h[e].size:0===e?j.minSize:e===r.length-1?j.maxSize:null,new l({color:o,label:i,value:t,size:a})}));this.set({max:c,min:d,stops:b,primaryHandleEnabled:m,handlesSyncedToPrimary:m,persistSizeRangeEnabled:m,histogramConfig:{average:p,standardDeviation:n,bins:o?o.bins:[]}})}updateRenderer(s){const{stops:e}=this,i=e[0],r=e[e.length-1],t=e[Math.floor(e.length/2)],l=s.clone(),n=l.visualVariables.map((s=>{if("size"===s.type){if("outline"===(null==s?void 0:s.target)||null!=s&&s.axis&&(null==s||!s.field)&&(null==s||!s.valueExpression))return s;o(s.minSize)&&o(s.maxSize)?s.set({maxDataValue:r.value,minDataValue:i.value,maxSize:r.size,minSize:i.size}):s.stops&&s.set({stops:e.map((s=>{const{label:e,size:o,value:i}=s;return new p({label:e,size:o,value:i})}))})}else"color"===s.type&&s.set({stops:this.stops.map((s=>{const{color:e,label:o,value:i}=s;return new a({color:e,label:o,value:i})}))});return s}));if(l.visualVariables=n,l.classBreakInfos.length>1){const s=t.value;l.classBreakInfos[0].maxValue=s,l.classBreakInfos[1].minValue=s}return l}updateVisualVariables(s){return s.map((s=>{const e=s.clone();if("size"===s.type){if("outline"===(null==s?void 0:s.target)||null!=s&&s.axis&&(null==s||!s.field)&&(null==s||!s.valueExpression))return e;if(o(s.minSize)&&o(s.maxSize)){const{stops:s}=this,o=s[0],i=s[s.length-1];e.set({maxDataValue:i.value,minDataValue:o.value,maxSize:i.size,minSize:o.size})}else s.stops&&e.set({stops:this.stops.map((s=>{const{label:e,size:o,value:i}=s;return new p({label:e,size:o,value:i})}))})}else"color"===s.type&&e.set({stops:this.stops.map((s=>{const{color:e,label:o,value:i}=s;return new a({color:e,label:o,value:i})}))});return e}))}render(){const{label:s,primaryHandleEnabled:e,state:o,visibleElements:i}=this,r="disabled"===o,t=this.classes(y,z,w,{[M]:r,[f]:e,[k]:i.interactiveTrack});return h("div",{"aria-label":s,class:t},r?null:this.renderContent(this.renderRamp(),g,v))}renderRamp(){const{_bgFillId:s,_rampFillId:e,viewModel:o,zoomOptions:i}=this,r=o.getStopInfo();return h("div",{afterCreate:c,bind:this,class:S,"data-node-ref":"_rampNode"},h("svg",{xmlns:"http://www.w3.org/2000/svg"},h("defs",null,this.renderRampFillDefinition(e,r),this.renderBackgroundFillDefinition(s)),h("rect",{x:"0",y:"0",fill:this._backgroundFillColor,height:"100%",width:"100%"}),this.renderPaths()),i?this.renderZoomCaps():null)}renderPaths(){if(!this._rampNode)return;const{offsetHeight:s=0,offsetWidth:e=0}=this._rampNode;if(!o(s)||!o(e))return;const{primaryHandleEnabled:i,stops:r,values:t,viewModel:{max:l,min:a},_bgFillId:p,_maxRampFillWidth:n,_minRampFillWidth:m,_rampFillId:c}=this,j=[n,m];r[0].size<r[r.length-1].size&&j.reverse();const b=t.slice().sort(((s,e)=>s>e?1:-1)),[y,S]=j,[g,v]=b,f=i?u({max:l,min:a,pathHeight:s,pathWidth:e,stops:r,padding:m}):d({bottomValue:g,bottomWidth:y,max:l,min:a,pathHeight:s,pathWidth:e,topValue:v,topWidth:S});return[h("path",{key:"background",d:f,fill:`url(#${p})`}),h("path",{key:"fill",d:f,fill:`url(#${c})`})]}};s([i("viewModel.handlesSyncedToPrimary")],V.prototype,"handlesSyncedToPrimary",void 0),s([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],V.prototype,"label",void 0),s([r(),j("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")],V.prototype,"messages",void 0),s([i("viewModel.persistSizeRangeEnabled")],V.prototype,"persistSizeRangeEnabled",void 0),s([i("viewModel.primaryHandleEnabled")],V.prototype,"primaryHandleEnabled",void 0),s([i("viewModel.stops")],V.prototype,"stops",void 0),s([r()],V.prototype,"viewModel",void 0),s([i("viewModel.zoomOptions")],V.prototype,"zoomOptions",void 0),V=b=s([t("esri.widgets.smartMapping.ColorSizeSlider")],V);var x=V;export default x;
