/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{aliasOf as o}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{SmartMappingSliderBase as i}from"./SmartMappingSliderBase.js";import e from"./ColorSlider/ColorSliderViewModel.js";import"../../chunks/widgetUtils.js";import{m as p}from"../../chunks/messageBundle.js";import{t as l}from"../../chunks/jsxFactory.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/Message.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../core/watchUtils.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/cast.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/deprecate.js";import"../../chunks/domUtils.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../../chunks/ResizeObserver.js";import"../../chunks/_commonjsHelpers.js";import"../Slider/SliderViewModel.js";import"./support/utils.js";import"../../chunks/utils9.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/JSONSupport.js";import"../../chunks/write.js";import"../../chunks/writer.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/screenUtils.js";import"../../chunks/reader.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../chunks/Loadable.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/uid.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"./SmartMappingPrimaryHandleSliderViewModel.js";import"./SmartMappingSliderViewModel.js";var m;const n="esri-color-slider",a="esri-color-slider__ramp",j="esri-color-slider__slider-container",u="esri-color-slider__histogram-container",c="esri-color-slider--primary-handle",d="esri-color-slider--interactive-track",y="esri-widget",h="esri-widget--panel",b="esri-disabled";let g=m=class extends i{constructor(s,o){super(s,o),this._bgFillId=null,this._rampFillId=null,this.handlesSyncedToPrimary=null,this.label=void 0,this.messages=null,this.primaryHandleEnabled=null,this.stops=null,this.viewModel=new e,this.zoomOptions=null,this._bgFillId=`${this.id}-bg-fill`,this._rampFillId=`${this.id}-linear-gradient`}static fromRendererResult(s,o){const{visualVariable:{stops:r},statistics:t}=s,{avg:i,stddev:e}=t,p=s.renderer.authoringInfo.visualVariables.filter((s=>"color"===s.type))[0],l=p.minSliderValue,n=p.maxSliderValue;return new m({max:n,min:l,stops:r,histogramConfig:{average:i,standardDeviation:e,bins:o?o.bins:[]},primaryHandleEnabled:"high-to-low"!==p.theme})}updateFromRendererResult(s,o){const{visualVariable:{stops:r},statistics:t}=s,{avg:i,stddev:e}=t,p=s.renderer.authoringInfo.visualVariables.filter((s=>"color"===s.type))[0],l=p.minSliderValue,m=p.maxSliderValue;this.set({max:m,min:l,stops:r,histogramConfig:{average:i,standardDeviation:e,bins:o?o.bins:[]},primaryHandleEnabled:"high-to-low"!==p.theme})}render(){const{label:s,primaryHandleEnabled:o,state:r,visibleElements:t}=this,i="disabled"===r,e=this.classes(n,y,h,{[b]:i,[c]:o,[d]:t.interactiveTrack});return l("div",{"aria-label":s,class:e},i?null:this.renderContent(this.renderRamp(),j,u))}renderRamp(){const{_bgFillId:s,_rampFillId:o,viewModel:r,zoomOptions:t}=this,i=r.getStopInfo();return l("div",{class:a},l("svg",{xmlns:"http://www.w3.org/2000/svg"},l("defs",null,this.renderRampFillDefinition(o,i),this.renderBackgroundFillDefinition(s)),l("rect",{x:"0",y:"0",fill:`url(#${s})`,height:"100%",width:"100%"}),l("rect",{x:"0",y:"0",fill:`url(#${o})`,height:"100%",width:"100%"})),t?this.renderZoomCaps():null)}};s([o("viewModel.handlesSyncedToPrimary")],g.prototype,"handlesSyncedToPrimary",void 0),s([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0),s([r(),p("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],g.prototype,"messages",void 0),s([o("viewModel.primaryHandleEnabled")],g.prototype,"primaryHandleEnabled",void 0),s([o("viewModel.stops")],g.prototype,"stops",void 0),s([r()],g.prototype,"viewModel",void 0),s([o("viewModel.zoomOptions")],g.prototype,"zoomOptions",void 0),g=m=s([t("esri.widgets.smartMapping.ColorSlider")],g);var k=g;export default k;