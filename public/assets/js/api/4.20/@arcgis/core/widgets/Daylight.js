/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{L as t}from"../chunks/Logger.js";import{i as e,f as i}from"../core/lang.js";import{init as o}from"../core/watchUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import m from"./Widget.js";import a,{S as c,O as u}from"./Daylight/DaylightViewModel.js";import{e as h}from"../core/promiseUtils.js";import"../chunks/ensureType.js";import d from"./Slider.js";import"../chunks/widgetUtils.js";import{t as j}from"../chunks/jsxFactory.js";import k from"./support/DatePicker.js";import{H as y}from"../chunks/Heading.js";import{f as b,g as w}from"../chunks/timeWidgetUtils.js";import{m as g}from"../chunks/messageBundle.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/timeUtils.js";import"../views/SceneView.js";import"../Camera.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/mathUtils.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/mathUtils2.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/uid.js";import"../Ground.js";import"../chunks/compilerUtils.js";import"../chunks/loadAll.js";import"../chunks/asyncUtils.js";import"../Viewpoint.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../geometry/HeightModelInfo.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/boundedPlane.js";import"../chunks/vectorStacks.js";import"../chunks/quatf64.js";import"../chunks/mat4f64.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/lineSegment.js";import"../chunks/plane.js";import"../chunks/sphere.js";import"../chunks/vec4.js";import"../chunks/ray.js";import"../chunks/scaleUtils.js";import"../chunks/layerUtils.js";import"../chunks/WebGLRequirements.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../chunks/screenUtils2.js";import"../chunks/MapUtils.js";import"../chunks/capabilities2.js";import"../chunks/interactiveToolUtils.js";import"./Popup.js";import"../chunks/throttle.js";import"./Feature.js";import"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils5.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../chunks/featureConversionUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../chunks/commonProperties.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../chunks/devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../chunks/shared.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties2.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/vmEvent.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils2.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils3.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"../chunks/ElevationProvider.js";import"../chunks/TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"../chunks/writeUtils.js";import"../chunks/CollectionFlattener.js";import"../chunks/basemapUtils.js";import"../chunks/TablesMixin.js";import"../chunks/GraphicsCollection.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../chunks/RefreshableLayerView.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../chunks/heightModelInfoUtils.js";import"../views/ViewAnimation.js";import"../webscene/Lighting.js";import"../webscene/Environment.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"../chunks/requestImageUtils.js";import"../chunks/VertexColor.glsl.js";import"../chunks/Program.js";import"../chunks/Texture.js";import"../chunks/VertexArrayObject.js";import"../chunks/mat4f32.js";import"../chunks/Util.js";import"../chunks/vec2.js";import"../chunks/utils4.js";import"../chunks/geometryDataUtils.js";import"../chunks/triangle.js";import"../chunks/aaBoundingBox.js";import"../chunks/BufferView.js";import"../chunks/glUtil.js";import"../chunks/InterleavedLayout.js";import"../chunks/types.js";import"../chunks/ColorMaterial.js";import"../chunks/vec3f32.js";import"../chunks/dehydratedFeatures.js";import"../chunks/byteSizeEstimations.js";import"../chunks/quantizationUtils.js";import"../chunks/frustum.js";import"../chunks/sdfPrimitives.js";import"../chunks/mat3.js";import"../chunks/Texture2.js";import"../chunks/FramebufferObject.js";import"../chunks/VerticalOffset.glsl.js";import"../chunks/PiUtils.glsl.js";import"../chunks/earthUtils.js";import"../chunks/sunUtils.js";import"../chunks/lineUtils.js";import"../chunks/triangulationUtils.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/vec2f32.js";import"../chunks/Camera.js";import"../chunks/Object3D.js";import"../chunks/Intersector.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/quat.js";import"../chunks/PhysicallyBasedRendering.glsl.js";import"../chunks/Scheduler.js";import"../chunks/PromiseQueue.js";import"../chunks/ElevationQuery.js";import"../chunks/pointUtils.js";import"../chunks/vec3.js";import"../chunks/objectResourceUtils.js";import"../chunks/DefaultMaterial_COLOR_GAMMA.js";import"../chunks/Version.js";import"../chunks/testSVGPremultipliedAlpha.js";import"../chunks/callExpressionWithFeature.js";import"../chunks/RenderGeometry.js";import"../chunks/lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"../chunks/screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../chunks/projection.js";import"../chunks/NativeLineMaterial.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/viewpointUtils.js";import"../chunks/spatialReferenceSupport.js";import"../chunks/ray2.js";import"../chunks/resources.js";import"../chunks/labelFormatUtils.js";import"../chunks/vec4f32.js";import"../chunks/geometryServiceUtils.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"../chunks/terrainUtils.js";import"../chunks/VectorTile.js";import"../chunks/mat3f32.js";import"../chunks/config.js";import"../chunks/TiledDisplayObject.js";import"../chunks/DisplayObject.js";import"../chunks/TileKey.js";import"../chunks/rasterUtils.js";import"../chunks/ElevationQueryTileCache.js";import"../chunks/LercDecoder.js";import"../chunks/WorkerHandle.js";import"../chunks/LayerView3D.js";import"../views/layers/LayerView.js";import"../chunks/tileUtils.js";import"../views/2d/ViewState.js";import"../chunks/mat2d.js";import"../chunks/mat2df32.js";import"../chunks/mat2df64.js";import"../chunks/viewpointUtils2.js";import"../chunks/quatf32.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/EdgeProcessingWorker.js";import"../chunks/intersectorUtilsConversions.js";import"../chunks/hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./Attribution.js";import"./Attribution/AttributionViewModel.js";import"./Compass.js";import"./Compass/CompassViewModel.js";import"./NavigationToggle.js";import"./NavigationToggle/NavigationToggleViewModel.js";import"./Zoom.js";import"./Zoom/ZoomViewModel.js";import"./Slider/SliderViewModel.js";import"./support/DatePickerViewModel.js";import"../chunks/MomentElementViewModel.js";import"../chunks/ResizeObserver.js";import"../chunks/_commonjsHelpers.js";import"../chunks/moment.js";import"../chunks/Popover.js";const v="esri-interactive",f="esri-slider__label",S="esri-slider-with-dropdown__box",M="esri-slider-with-dropdown__dropdown-root",_=" esri-widget__anchor esri-slider-with-dropdown__anchor",D="esri-slider-with-dropdown__anchor--open",U="esri-slider-with-dropdown__anchor--closed",C="esri-slider-with-dropdown__list",I="esri-slider-with-dropdown__list-item",O="esri-slider-with-dropdown__list-item--selected",P="esri-slider-with-dropdown__box--drop-down-on",T="esri-slider-with-dropdown__box--drop-down-off",V="Enter",x="Escape",E="ArrowUp",L="ArrowDown";let R=class extends d{constructor(s,t){super(s,t),this.viewModel=new c,this.buttonTooltip="",this.showDropDown=!0,this.currentIndex=0,this._rootNode=null}renderThumbLabel(s){const t={[P]:this.showDropDown,[T]:!this.showDropDown};return j("div",{class:this.classes(S,f,t)},super.renderThumbLabel(s),this.showDropDown?j("div",{bind:this,afterCreate:this._onRootNodeCreate,class:M},j("button",{class:this.classes(v,_,this.isDropdownOpen?D:U),bind:this,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen.toString(),"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":""),this.isDropdownOpen?j("ol",{class:this.classes(C),onpointerdown:this._killEvent,onblur:this._onDropdownBlur,bind:this,tabindex:"-1","aria-label":this.buttonTooltip,role:"listbox",onkeydown:this._onOlKeyDown,afterCreate:this._focusOnSelectedItem},this.items.map(((s,t)=>j("li",{class:t===this.currentIndex?this.classes(v,I,O):this.classes(v,I),bind:this,onclick:this._onDropdownItemClick,"data-result":t,"aria-label":s.label.join(" "),role:"option","aria-selected":(t===this.currentIndex).toString(),onkeydown:this._onLiKeyDown,onblur:this._onDropdownBlur,tabindex:"0"},s.label.map((s=>j("span",{bind:this},s))))))):null):null)}_onRootNodeCreate(s){this._rootNode=s}_focusOnSelectedItem(s){var t;const i=null!=(t=s.querySelector(`.${O}`))?t:s.firstChild;e(i)&&i instanceof HTMLElement&&(i.scrollIntoView(),i.focus())}_onAnchorClick(){return this.viewModel.toggle(),!0}_onDropdownItemClick(s){const t=s.currentTarget;this.viewModel.selectItem(t["data-result"])}_onDropdownBlur(s){let t=s.relatedTarget;null===t&&(t=document.activeElement),e(this._rootNode)&&!this._rootNode.contains(t)&&t!==this._rootNode.parentElement&&t!==this._rootNode.parentElement.parentElement&&(this.viewModel.isDropdownOpen=!1)}_killEvent(s){return s.stopPropagation(),!0}_onOlKeyDown(s){event.stopPropagation(),h(s)===x&&(this.viewModel.isDropdownOpen=!1)}_onLiKeyDown(s){const t=event.target;switch(h(s)){case E:if(t.previousElementSibling){t.previousElementSibling.focus()}break;case L:if(t.nextElementSibling){t.nextElementSibling.focus()}break;case V:t.click()}}};s([n()],R.prototype,"viewModel",void 0),s([n()],R.prototype,"buttonTooltip",void 0),s([n()],R.prototype,"showDropDown",void 0),s([n({aliasOf:"viewModel.items"})],R.prototype,"items",void 0),s([n({aliasOf:"viewModel.currentIndex"})],R.prototype,"currentIndex",void 0),s([n({aliasOf:"viewModel.currentItem"})],R.prototype,"currentItem",void 0),s([n({aliasOf:"viewModel.isDropdownOpen"})],R.prototype,"isDropdownOpen",void 0),R=s([l("esri.widgets.Daylight.SliderWithDropdown")],R);var F=R;const A="esri-daylight",B="esri-icon-environment-settings",z="esri-button",N="esri-daylight__checkbox",G="esri-icon-checkbox-checked",q="esri-daylight__container esri-daylight__day-container",H="esri-daylight__container esri-daylight__date-container",Q="esri-interactive",W=" esri-widget__anchor",K="esri-daylight__container__labelled-tick",$="esri-icon-pause",J="esri-icon-play",Z="esri-daylight__play-pause-button",Y="esri-select",X="esri-daylight__season-picker",ss="esri-daylight__shadow-container",ts="esri-slider--shadow-off",es="esri-slider--shadow-on",is="esri-daylight__container__tick",os="esri-icon-checkbox-unchecked",rs="esri-widget",ps="esri-slider--date-on",ns="esri-slider--date-off",ls="esri-daylight__panel--error",ms={playButtons:!0,shadowsToggle:!0,datePicker:!0,timezone:!0},as=t.getLogger("esri.widgets.Daylight");let cs=class extends m{constructor(s,t){var e;super(s,t),this.headingLevel=3,this.iconClass=B,this.label=void 0,this.playSpeedMultiplier=1,this.timeSliderSteps=5,this.view=null,this.viewModel=new a,this.visibleElements={...ms},this.dateOrSeason="date",this._timeSlider=new F({viewModel:this.viewModel.timeSliderViewModel,labelFormatFunction:b,inputFormatFunction:b,min:0,max:1439,steps:null!=(e=this.timeSliderSteps)?e:5,values:[0],labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:this._onPrimaryTickCreated.bind(this)},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:this._onSecondaryTickCreated.bind(this)}],items:[]}),this._datePicker=new k({viewModel:this.viewModel.datePickerViewModel,commitOnMonthChange:!0})}get gmtOffsets(){return i(this.timezoneMessages,w)}castVisibleElements(s){return{...ms,...s}}postInitialize(){this.viewModel.isSupported&&this.own(o(this.viewModel,"datePickerViewModel",(s=>{this._datePicker.viewModel=s})),o(this.viewModel,"timeSliderViewModel",(s=>{this._timeSlider.viewModel=s})),o(this,"messages",(()=>{this._timeSlider.buttonTooltip=this.timezoneMessages.chooseTimezone})),o(this,"visibleElements",(()=>{this._timeSlider.showDropDown=this.visibleElements.timezone})),o(this,"gmtOffsets",(s=>{e(s)&&(this._timeSlider.items=s.map((s=>({utcOffset:s.utcOffset,name:s.short,label:[s.shortWithUTC,s.long]}))))})),o(this,["viewModel.utcOffset","gmtOffsets"],(()=>this._onUTCOffsetChange())))}destroy(){this._datePicker.destroy(),this._timeSlider.destroy()}render(){return this.viewModel.isSupported?j("div",{class:this.classes(A,rs)},j(y,{level:this.headingLevel},this.messages.title),this.renderTimeOptions(),this.visibleElements.datePicker?"date"===this.dateOrSeason?this.renderDateOptions():this.renderSeasonOptions():null,this.visibleElements.shadowsToggle?this.renderShadowOptions():null):j("div",{class:this.classes(A,rs)},j("div",{key:"daylight__unsupported",class:ls},j("p",null,this.messages.unsupported)))}renderTimeOptions(){const s={[J]:!this.viewModel.dayPlaying,[$]:this.viewModel.dayPlaying},t={[es]:this.viewModel.directShadowsEnabled,[ts]:!this.viewModel.directShadowsEnabled},e={[ps]:this.visibleElements.datePicker,[ns]:!this.visibleElements.datePicker};return j("div",{class:this.classes(q,t,e),key:"daylight-time-options"},this._timeSlider.render(),this.visibleElements.playButtons?j("button",{bind:this.viewModel,onclick:this.viewModel.toggleDayPlaying,"aria-label":this.messages.playDay,title:this.messages.playDay,type:"button",class:this.classes(z,Z,s)},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},j("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)}renderDateOptions(){const s={[J]:!this.viewModel.yearPlaying,[$]:this.viewModel.yearPlaying};return j("div",{class:H,key:"daylight-date-options"},this._datePicker.render(),this.visibleElements.playButtons?j("button",{bind:this.viewModel,onclick:this.viewModel.toggleYearPlaying,"aria-label":this.messages.playYear,title:this.messages.playYear,type:"button",class:this.classes(z,Z,s)},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},j("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)}renderShadowOptions(){const s=`${this.id}__shadowButton`,t={[G]:this.viewModel.directShadowsEnabled,[os]:!this.viewModel.directShadowsEnabled};return j("div",{class:ss,key:"daylight-shadow-options"},j("button",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,name:s,class:this.classes(z,N,t),"aria-label":this.messages.directShadow,title:this.messages.directShadow,type:"button"}),j("label",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,for:s,class:this.classes(W,Q),"aria-label":this.messages.directShadow,title:this.messages.directShadow},this.messages.directShadow))}renderSeasonOptions(){return j("select",{bind:this,onchange:this._onSeasonChange,class:this.classes(Y,X),value:this.viewModel.currentSeason,"aria-label":this.messages.season},u.map((s=>j("option",{value:s},this.messages[s]))))}_onSeasonChange(s){const t=s.target;this.viewModel.currentSeason=t.value}_onUTCOffsetChange(){var s;const t=this.viewModel.utcOffset,i=null==(s=this._timeSlider.currentItem)?void 0:s.utcOffset,o=this.gmtOffsets;if(!e(o)||i===t)return;const r=o.findIndex((({utcOffset:s})=>s===t));r>-1&&(this._timeSlider.currentIndex=r)}_onPrimaryTickCreated(s,t,e){t.className+=" esri-interactive esri-widget__anchor "+is+" "+K,e.className+=" esri-interactive esri-widget__anchor";const i=()=>{this.viewModel.timeSliderPosition=s};t.onclick=i,e.onclick=i;const o=e.innerText;-1!==o.indexOf(" ")&&(e.innerHTML=o.replace(/(.*) (.*)/,'$1<br><div class="esri-label__ampm">$2</div>'))}_onSecondaryTickCreated(s,t){t.className+=" esri-interactive esri-widget__anchor "+is,t.onclick=()=>{this.viewModel.timeSliderPosition=s}}};s([n({readOnly:!0})],cs.prototype,"gmtOffsets",null),s([n(),g("esri/widgets/Daylight/t9n/Daylight")],cs.prototype,"messages",void 0),s([n(),g("esri/widgets/support/t9n/timezone")],cs.prototype,"timezoneMessages",void 0),s([n()],cs.prototype,"headingLevel",void 0),s([n()],cs.prototype,"iconClass",void 0),s([n({aliasOf:{source:"messages.title",overridable:!0}})],cs.prototype,"label",void 0),s([r("viewModel.playSpeedMultiplier")],cs.prototype,"playSpeedMultiplier",void 0),s([r("_timeSlider.steps")],cs.prototype,"timeSliderSteps",void 0),s([r("viewModel.view")],cs.prototype,"view",void 0),s([n({type:a})],cs.prototype,"viewModel",void 0),s([n()],cs.prototype,"visibleElements",void 0),s([p("visibleElements")],cs.prototype,"castVisibleElements",null),s([n({cast:s=>"season"===s||"date"===s?s:(as.warn(`"${s}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "date".`),"date")})],cs.prototype,"dateOrSeason",void 0),s([n()],cs.prototype,"_timeSlider",void 0),s([n()],cs.prototype,"_datePicker",void 0),cs=s([l("esri.widgets.Daylight")],cs);var us=cs;export default us;
