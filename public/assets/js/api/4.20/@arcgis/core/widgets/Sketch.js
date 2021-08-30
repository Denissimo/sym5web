/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import s from"../core/Collection.js";import{e as o}from"../core/promiseUtils.js";import{h as i}from"../chunks/handleUtils.js";import{b as r,j as n,r as l}from"../core/lang.js";import{aliasOf as a}from"../core/accessorSupport/decorators/aliasOf.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import"../chunks/Logger.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import u from"../views/interactive/snapping/SnappingOptions.js";import h from"./Widget.js";import d from"./Sketch/SketchViewModel.js";import j from"../core/Accessor.js";import{HandleOwnerMixin as y}from"../core/HandleOwner.js";import"../chunks/ensureType.js";import"../symbols.js";import{E as k}from"../chunks/Evented.js";import v from"../core/Handles.js";import g from"../layers/GraphicsLayer.js";import b from"../symbols/SimpleFillSymbol.js";import f from"../symbols/SimpleLineSymbol.js";import S from"../symbols/SimpleMarkerSymbol.js";import{i as w}from"../chunks/widgetUtils.js";import{m as _}from"../chunks/messageBundle.js";import{v as M}from"../chunks/vmEvent.js";import{t as C}from"../chunks/jsxFactory.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/locale.js";import"../chunks/string.js";import"../core/Error.js";import"../chunks/Message.js";import"../config.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/arrayUtils.js";import"../chunks/metadata.js";import"../chunks/deprecate.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../chunks/Settings.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/watchUtils.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/uid.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/projectionEllipsoid.js";import"../chunks/interactiveToolUtils.js";import"./Popup.js";import"../chunks/throttle.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitUtils.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils5.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../chunks/compilerUtils.js";import"../chunks/featureConversionUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../chunks/commonProperties.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../chunks/devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/shared.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties2.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils2.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils3.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"../chunks/elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"../chunks/geodesicConstants.js";import"../views/draw/Draw.js";import"../views/draw/MultipointDrawAction.js";import"../views/draw/DrawAction.js";import"../chunks/dehydratedFeatures.js";import"../chunks/byteSizeEstimations.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../chunks/quantizationUtils.js";import"../chunks/vec2.js";import"../chunks/vec2f64.js";import"../chunks/AppendVertex.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/plane.js";import"../chunks/sphere.js";import"../chunks/mat4.js";import"../chunks/ray.js";import"../chunks/vectorStacks.js";import"../chunks/quatf64.js";import"../chunks/mat4f64.js";import"../chunks/GraphicsCollection.js";import"../chunks/keybindings.js";import"../chunks/screenUtils2.js";import"../views/draw/PointDrawAction.js";import"../chunks/DrawTool.js";import"../chunks/dehydratedFeatureComparison.js";import"../chunks/InteractiveToolBase.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/Scheduler.js";import"../chunks/PromiseQueue.js";import"../chunks/vec4f32.js";import"../chunks/frustum.js";import"../chunks/lineSegment.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/VisualElement.js";import"../chunks/glUtil.js";import"../chunks/InterleavedLayout.js";import"../chunks/BufferView.js";import"../chunks/types.js";import"../chunks/VertexColor.glsl.js";import"../chunks/Program.js";import"../chunks/Texture.js";import"../chunks/VertexArrayObject.js";import"../chunks/mat4f32.js";import"../chunks/Util.js";import"../chunks/utils4.js";import"../chunks/geometryDataUtils.js";import"../chunks/triangle.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/ColorMaterial.js";import"../chunks/vec3f32.js";import"../chunks/Object3DVisualElement.js";import"../chunks/Object3D.js";import"../chunks/mathUtils2.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/ElevationProvider.js";import"../chunks/PiUtils.glsl.js";import"../chunks/sdfPrimitives.js";import"../chunks/mat3.js";import"../chunks/Texture2.js";import"../chunks/requestImageUtils.js";import"../chunks/FramebufferObject.js";import"../chunks/VerticalOffset.glsl.js";import"../chunks/RightAngleQuadVisualElement.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../chunks/mat2d.js";import"../chunks/mat2df64.js";import"../chunks/quat.js";import"../chunks/MapUtils.js";async function O(){return async function(){return import("../chunks/geometryEngineJSON.js").then((function(e){return e.g}))}().then((({contains:e,intersects:t,overlaps:s,simplify:o})=>({contains:e,intersects:t,overlaps:s,simplify:o})))}async function T(e){const{selector:t,candidates:s,currentSelection:o,options:i,view:r}=e;if(!(s&&s.length&&o&&r))return{added:[],removed:[]};const{overlaps:n,intersects:l,contains:a}=i,{spatialReference:p}=r;if(!t){return{added:[],removed:o.removeAll()}}const c=t,m=await O(),u=[],h=[];return s.forEach((e=>{const t=e.geometry,s=n&&!!m.overlaps(p,c,t),i=l&&!!m.intersects(p,c,t),r=a&&!!m.contains(p,c,t),d=o.includes(e);s||i||r?!d&&u.push(e):d&&h.push(e)})),o.removeMany(h),o.addMany(u),{added:u,removed:h}}let I=class extends k.EventedAccessor{constructor({candidates:e,options:t,view:o}){super(),this._activeOptions=null,this._dashedFillSymbol=new b({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}}),this._dashedLineSymbol=new f({style:"dash",color:[12,207,255],width:2}),this._defaultOptions={tool:"rectangle",createOptions:null,selectionOptions:{overlaps:!0,intersects:!0,contains:!1}},this._completed=!1,this._handles=new v,this._sketchViewModel=new d,this._sketchGraphicsLayer=new g({listMode:"hide",internal:!0}),this._transparentPointSymbol=new S({color:[0,0,0,0],outline:{style:"none",width:0}}),this.candidates=null,this.geometry=null,this.options=null,this.selection=new s,this.view=null,this.candidates=e,this.options=t,this.view=o;const{_dashedFillSymbol:i,_dashedLineSymbol:r,_sketchViewModel:n,_sketchGraphicsLayer:l,_transparentPointSymbol:a}=this;n.set({layer:l,view:this.view,activePointSymbol:a,activeLineSymbol:r,activeVertexSymbol:a,activeFillSymbol:i,pointSymbol:a,polygonSymbol:i,polylineSymbol:r,vertexSymbol:a}),this._handles.add([n.on("create",(e=>this._onSketchEvent(e))),n.on(["undo","redo"],(e=>this._onSketchEvent(e)))])}initialize(){this._load()}destroy(){this._handles.destroy(),this._handles=null}get state(){const{_completed:e,_sketchViewModel:{state:t}}=this;return e?"complete":"active"===t?"active":"disabled"}cancel(){this._sketchViewModel.cancel()}async _load(){await this.view.whenReady();const{options:e}=this,{tool:t,createOptions:s}=this._activeOptions={...this._defaultOptions,...e};this._sketchViewModel.create(t,s)}_onSketchEvent(e){const t="create"===e.type?e.graphic:e.graphics[0],s=(null==t?void 0:t.geometry)||null,o="create"===e.type&&"cancel"===e.state,i="create"===e.type&&"complete"===e.state;this._processSelectionGeometry(s,i,o)}_processSelectionGeometry(e,t,s){if(this._set("geometry",e),(t||s)&&(this._completed=!0),s)return void this._onComplete([],!0);const{_activeOptions:o,candidates:i,selection:r,view:n}=this;T({selector:e,candidates:i,currentSelection:r,options:o.selectionOptions,view:n}).then((({added:e,removed:s})=>{t?this._onComplete(this.selection.toArray(),!1):(e.length||s.length)&&this.emit("selection-change",{added:e,removed:s,type:"selection-change"})}))}_onComplete(e,t){this._handles.removeAll(),this.notifyChange("state"),this.emit("complete",{aborted:t,selection:e,type:"complete"})}};e([c()],I.prototype,"_completed",void 0),e([c()],I.prototype,"candidates",void 0),e([c({readOnly:!0})],I.prototype,"geometry",void 0),e([c()],I.prototype,"options",void 0),e([c({readOnly:!0})],I.prototype,"selection",void 0),e([c({readOnly:!0})],I.prototype,"state",null),e([c({value:null})],I.prototype,"view",void 0),I=e([m("esri.widgets.support.Selector")],I);var U=I;let V=class extends(y(j)){constructor(e){super(e),this._defaultSelectionOptions={intersects:!0,overlaps:!0,contains:!0},this.candidates=null,this.options=null,this.view=null}draw(e){const{_defaultSelectionOptions:t,candidates:s,options:o,view:i}=this,r={...t,...o,...null==e?void 0:e.selectionOptions};return new U({candidates:s,options:{...e,selectionOptions:r},view:i})}async selectionFrom(e,t){const{_defaultSelectionOptions:o,candidates:i,options:r,view:n}=this,l=new s,a={...o,...r,...t};return await T({selector:e,candidates:i,currentSelection:l,options:a,view:n}),l.toArray()}};e([c()],V.prototype,"candidates",void 0),e([c()],V.prototype,"options",void 0),e([c({value:null})],V.prototype,"view",void 0),V=e([m("esri.widgets.support.Selector")],V);var P=V;const R="esri-sketch",D="esri-sketch--vertical",L="esri-sketch__panel",F="esri-sketch__info-panel",B="esri-sketch__section",E="esri-sketch__tool-section",A="esri-sketch__info-section",x="esri-sketch__info-count-section",G="esri-sketch__menu-container",z="esri-sketch__menu-header",q="esri-sketch__menu-title",H="esri-sketch__menu-content",Q="esri-sketch__menu-item",J="esri-sketch__menu-item-wrapper",N="esri-sketch__feature-count-badge",W="esri-sketch__feature-count-number",K="esri-sketch__button",Z="esri-sketch__button--selected",X="esri-icon-map-pin",Y="esri-icon-polygon",$="esri-icon-polyline",ee="esri-icon-radio-unchecked",te="esri-icon-checkbox-unchecked",se="esri-icon-cursor",oe="esri-icon-trash",ie="esri-icon-undo",re="esri-icon-redo",ne="esri-icon-settings",le="esri-sketch__action-toggle",ae="esri-sketch__action-toggle--on",pe="esri-sketch__item-action-title",ce="esri-sketch__item-action-icon",me="esri-icon-cursor-marquee",ue="esri-icon-lasso",he="esri-disabled",de="esri-widget",je="esri-icon-edit",ye={createTools:{point:!0,polyline:!0,polygon:!0,rectangle:!0,circle:!0},selectionTools:{"rectangle-selection":!0,"lasso-selection":!0},undoRedoMenu:!0,settingsMenu:!0};let ke=class extends h{constructor(e,t){super(e,t),this._activeCreateOptions=null,this._activeSelectionInfo=null,this._defaultViewModel=null,this._viewModelHandlesGroup=null,this._menuOpen=!1,this._selector=new P,this.availableCreateTools=["point","polyline","polygon","rectangle","circle"],this.createGraphic=null,this.creationMode="continuous",this.defaultCreateOptions=null,this.defaultUpdateOptions=null,this.iconClass=je,this.label=void 0,this.layer=null,this.layout="horizontal",this.messages=null,this.snappingOptions=new u,this.updateGraphics=new s,this.view=null,this.visibleElements={...ye},this._activateCreateTool=this._activateCreateTool.bind(this),null!=e&&e.viewModel||(this._defaultViewModel=new d,this.viewModel=this._defaultViewModel)}initialize(){this._selector.view=this.view}destroy(){this._cleanupViewModel()}get activeTool(){var e;return(null==(e=this._activeSelectionInfo)?void 0:e.tool)||this.viewModel.activeTool}get state(){return this._activeSelectionInfo?"active":this.viewModel.state}set viewModel(e){e!==this._get("viewModel")&&((r(this._defaultViewModel)||this._defaultViewModel!==e)&&this._cleanupViewModel(),this._set("viewModel",e),this.viewModel&&(this._viewModelHandlesGroup=i([this.viewModel.on("create",(e=>{this.scheduleRender(),this._onCreateOperation(e)})),this.viewModel.on("update",(()=>this.scheduleRender())),this.viewModel.on("delete",(e=>this.emit("delete",e))),this.viewModel.on("undo",(()=>this.scheduleRender())),this.viewModel.on("redo",(()=>this.scheduleRender())),this.viewModel.watch("view",(e=>this._selector.set({view:e}))),this.viewModel.watch("state",(()=>this.notifyChange("state")))])))}castVisibleElements(e){return{...ye,...e,createTools:{...ye.createTools,...null==e?void 0:e.createTools},selectionTools:{...ye.selectionTools,...null==e?void 0:e.selectionTools}}}create(e,t){this._activeCreateOptions=t||null,this.viewModel.create(e,t)}update(e,t){return this.viewModel.update(e,t)}complete(){}cancel(){this._cancelSelectionOperation(),this.viewModel.cancel()}undo(){var e;this.viewModel.undo(),null==(e=this.view)||e.focus()}redo(){var e;this.viewModel.redo(),null==(e=this.view)||e.focus()}delete(){}render(){const{label:e,layout:t,viewModel:{state:s}}=this;return C("div",{"aria-label":e,class:this.classes(R,de,{[he]:"disabled"===s,[D]:"vertical"===t})},C("div",{role:"toolbar",class:L},this.renderTopPanelContents()),C("div",{class:this.classes(L,F)},this.renderInfoPanelContents()))}renderTopPanelContents(){const e=this.classes(B,E),{availableCreateTools:t,visibleElements:s}=this;return[C("div",{role:"menu",key:"selection-button-container",class:e},this.renderSelectionTools()),t&&t.length?C("div",{role:"menu",class:e},this.renderDrawButtons()):null,s.undoRedoMenu?C("div",{role:"menu",key:"undo-redo-menu-button-container",class:e},this.renderUndoRedoMenuButtons()):null,s.settingsMenu?C("div",{key:"settings-menu-button-container",class:B},this.renderSettingsMenuButton()):null]}renderInfoPanelContents(){return this._menuOpen?this.renderSettingsMenu():this.updateGraphics.length?[C("div",{class:this.classes(B,A,x),key:"feature-count-container"},this.renderFeatureCount()),C("div",{class:this.classes(B,A),key:"delete-button-container"},this.renderDeleteButton())]:void 0}renderSettingsMenu(){const{settings:e}=this.messages;return[C("div",{role:"menu",class:G,key:"settings-menu-container"},C("header",{class:z,key:"settings-menu-header"},C("span",{class:q},e)),C("div",{class:H,key:"settings-menu-content","aria-label":e},C("div",{class:J},this.renderSnappingToggleMenuItem())))]}renderSnappingToggleMenuItem(){var e;return C("div",{class:Q,"aria-label":null==(e=this.messages)?void 0:e.snappingEnabled,key:"sketch-snapping-action-toggle",role:"menuitem"},this.renderSnappingToggle())}renderSnappingToggle(){const{messages:{snappingEnabled:e},viewModel:{snappingOptions:{enabled:t}}}=this,s=this.classes(le,{[ae]:t});return C("div",{bind:this,role:"button",onclick:this._onSnappingToggleClick,onkeydown:this._onSnappingToggleKeyDown,class:s,tabindex:"0",title:e,"aria-label":e},this.renderActionIcon(),C("span",{class:pe},e))}_onSnappingToggleKeyDown(e){const t=o(e);"Enter"!==t&&" "!==t||(e.preventDefault(),this._toggleSnapping())}_onSnappingToggleClick(e){e.stopPropagation(),this._toggleSnapping()}renderActionIcon(){return C("span",{key:"action-icon","aria-hidden":"true",class:this.classes(ce)})}renderFeatureCount(){const{layout:e,messages:s,updateGraphics:{length:o}}=this,i=t(1===o?s.featureCount:s.featuresCount,{count:o});return C("div",{class:N,"aria-label":i},C("span",{class:W},"vertical"===e?o:i))}renderDeleteButton(){const e=this.messages.deleteFeature;return C("button",{"aria-label":e,bind:this,class:this.classes(K,oe),onclick:this.delete,title:e,type:"button"})}renderSelectionTools(){return[this.renderDefaultSelectionButton(),this.renderRectangleSelectionButton(),this.renderLassoSelectionButton()]}renderDefaultSelectionButton(){if(!this.viewModel.updateOnGraphicClick)return;const e=this.messages.selectFeature;return C("button",{"aria-label":e,bind:this,class:this.classes(K,se,{[Z]:"ready"===this.state}),onclick:this.cancel,role:"menuitemradio",title:e})}renderRectangleSelectionButton(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["rectangle-selection"])return;const s=this.messages.selectRectangle;return C("button",{"aria-label":s,bind:this,class:this.classes(K,me,{[Z]:"rectangle-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateRectangleSelectTool,role:"menuitemradio",title:s})}renderLassoSelectionButton(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["lasso-selection"])return;const s=this.messages.selectLasso;return C("button",{"aria-label":s,bind:this,class:this.classes(K,ue,{[Z]:"lasso-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateLassoSelectTool,role:"menuitemradio",title:s})}renderDrawButtons(){const e=this.visibleElements.createTools;return this.availableCreateTools.map((t=>"point"===t&&e.point?this.renderPointButton():"polyline"===t&&e.polyline?this.renderPolylineButton():"polygon"===t&&e.polygon?this.renderPolygonButton():"rectangle"===t&&e.rectangle?this.renderRectangleButton():"circle"===t&&e.circle?this.renderCircleButton():void 0))}renderPointButton(){const e="point",t=this.messages.drawPoint,s=[K,X];return this.activeTool===e&&s.push(Z),C("button",{"aria-label":t,bind:this,class:this.classes(s),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})}renderPolygonButton(){const e="polygon",t=this.messages.drawPolygon,s=[K,Y];return this.activeTool===e&&s.push(Z),C("button",{"aria-label":t,bind:this,class:this.classes(s),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})}renderPolylineButton(){const e="polyline",t=this.messages.drawPolyline,s=[K,$];return this.activeTool===e&&s.push(Z),C("button",{"aria-label":t,bind:this,class:this.classes(s),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})}renderCircleButton(){const e="circle",t=this.messages.drawCircle,s=[K,ee];return this.activeTool===e&&s.push(Z),C("button",{"aria-label":t,bind:this,class:this.classes(s),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})}renderRectangleButton(){const e="rectangle",t=this.messages.drawRectangle,s=[K,te];return this.activeTool===e&&s.push(Z),C("button",{"aria-label":t,bind:this,class:this.classes(s),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})}renderUndoRedoMenuButtons(){return[this.renderUndoButton(),this.renderRedoButton()]}renderUndoButton(){const e=this.messages.undo,t=!this.viewModel.canUndo(),s=w()?re:ie;return C("button",{"aria-label":e,bind:this,class:this.classes(K,s),disabled:t,onclick:this.undo,title:e,type:"button"})}renderRedoButton(){const e=this.messages.redo,t=!this.viewModel.canRedo(),s=w()?ie:re;return C("button",{"aria-label":e,bind:this,class:this.classes(K,s),disabled:t,onclick:this.redo,title:e,type:"button"})}renderSettingsMenuButton(){const e=this.messages.settings,t=[K,ne];return this._menuOpen&&t.push(Z),C("button",{"aria-label":e,bind:this,class:this.classes(t),onclick:this._toggleMenu,title:e,type:"button"})}_cancelSelectionOperation(){var e,t;null==(e=this._activeSelectionInfo)||null==(t=e.operation)||t.cancel(),this._activeSelectionInfo=null,this._selector.candidates=null}_activateCreateTool(e){const t=e.target.getAttribute("data-tool-name");this.activeTool!==t?(this._activeSelectionInfo&&this._cancelSelectionOperation(),this.create(t)):this.cancel()}_onCreateOperation(e){if("complete"!==e.state)return;const{creationMode:t}=this,{type:s}=e;if("create"===s){const{tool:s,graphic:o}=e,i=this._activeCreateOptions;this._activeCreateOptions=null,"continuous"===t?this.create(s,i):"update"===t&&this.update([o])}}_toggleMenu(){this._menuOpen=!this._menuOpen,this.scheduleRender()}_toggleSnapping(){const{viewModel:{snappingOptions:e}}=this;this.viewModel.snappingOptions.enabled=!e.enabled,this.scheduleRender()}_onSelectionOperationComplete(e){const{viewModel:{defaultUpdateOptions:t}}=this,{selection:s}=e;if(this._activeSelectionInfo=null,!e.aborted&&s.length){const e=t.tool,o=s.length>1&&"reshape"===e?"transform":e;this.update(s,{...t,tool:o})}this.notifyChange("state")}_activateRectangleSelectTool(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"rectangle-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"rectangle"});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"rectangle-selection",operation:e}}_activateLassoSelectTool(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"lasso-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"polygon",createOptions:{mode:"freehand"}});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"lasso-selection",operation:e}}_getSelectionCandidates(){var e,t;return(null==(e=this.layer)||null==(t=e.graphics)?void 0:t.toArray())||[]}_cleanupViewModel(){this._defaultViewModel=n(this._defaultViewModel),this._viewModelHandlesGroup=l(this._viewModelHandlesGroup)}};e([c()],ke.prototype,"_activeSelectionInfo",void 0),e([c()],ke.prototype,"activeTool",null),e([c({cast:e=>{if(!e||!e.length)return null;const t=new Set(["point","polyline","polygon","rectangle","circle"]);return e.filter((e=>t.has(e)))}})],ke.prototype,"availableCreateTools",void 0),e([a("viewModel.createGraphic")],ke.prototype,"createGraphic",void 0),e([c()],ke.prototype,"creationMode",void 0),e([a("viewModel.defaultCreateOptions")],ke.prototype,"defaultCreateOptions",void 0),e([a("viewModel.defaultUpdateOptions")],ke.prototype,"defaultUpdateOptions",void 0),e([c()],ke.prototype,"iconClass",void 0),e([c({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],ke.prototype,"label",void 0),e([a("viewModel.layer")],ke.prototype,"layer",void 0),e([c({type:["horizontal","vertical"]})],ke.prototype,"layout",void 0),e([c(),_("esri/widgets/Sketch/t9n/Sketch")],ke.prototype,"messages",void 0),e([a("viewModel.snappingOptions")],ke.prototype,"snappingOptions",void 0),e([c()],ke.prototype,"state",null),e([a("viewModel.updateGraphics")],ke.prototype,"updateGraphics",void 0),e([a("viewModel.view")],ke.prototype,"view",void 0),e([c(),M(["create","update","undo","redo"])],ke.prototype,"viewModel",null),e([c()],ke.prototype,"visibleElements",void 0),e([p("visibleElements")],ke.prototype,"castVisibleElements",null),e([a("viewModel.complete")],ke.prototype,"complete",null),e([a("viewModel.delete")],ke.prototype,"delete",null),ke=e([m("esri.widgets.Sketch")],ke);var ve=ke;export default ve;
