/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../Graphic.js";import{i as o,b as s}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{f as p,a as m}from"./vec4f64.js";import{x as a,w as l,h as j}from"./aaBoundingRect.js";import{I as n}from"./I3SMeshView3D.js";import{L as u}from"./LayerView3D.js";import{u as y}from"../views/SceneView.js";import d from"../views/layers/LayerView.js";import"../geometry.js";import"../geometry/Extent.js";import"./string.js";import"./object.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./metadata.js";import"./handleUtils.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"./Message.js";import"../config.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./Evented.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"../request.js";import"../kernel.js";import"./assets.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./uid.js";import"./MapUtils.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../core/watchUtils.js";import"./mat3.js";import"./mat3f32.js";import"./mat4.js";import"./mat4f64.js";import"./vec4.js";import"../geometry/projection.js";import"./pe.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./aaBoundingBox.js";import"./I3SAttributeOverrides.js";import"../core/Handles.js";import"./dehydratedFeatures.js";import"./byteSizeEstimations.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./fieldType.js";import"./PromiseQueue.js";import"./Scheduler.js";import"./I3SUtil.js";import"./quat.js";import"./quatf32.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"./I3SBinaryReader.js";import"./ElevationQuery.js";import"./RibbonLineMaterial.js";import"./compilerUtils.js";import"./ElevationProvider.js";import"./ColorMaterial.js";import"./vec3f32.js";import"./plane.js";import"./sphere.js";import"./ray.js";import"./vectorStacks.js";import"./quatf64.js";import"./vec2f64.js";import"./VertexColor.glsl.js";import"./Program.js";import"./Texture.js";import"./VertexArrayObject.js";import"./mat4f32.js";import"./Util.js";import"./vec2.js";import"./utils4.js";import"./geometryDataUtils.js";import"./triangle.js";import"./lineSegment.js";import"./BufferView.js";import"./frustum.js";import"./InterleavedLayout.js";import"./types.js";import"./PiUtils.glsl.js";import"./sdfPrimitives.js";import"./Texture2.js";import"./requestImageUtils.js";import"./FramebufferObject.js";import"./VerticalOffset.glsl.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./pointUtils.js";import"./Object3D.js";import"./mathUtils2.js";import"./vec2f32.js";import"./asyncUtils.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./earcut.js";import"./vec3.js";import"./visualVariableUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./lineUtils.js";import"./Camera.js";import"./Intersector.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./glUtil.js";import"./PhysicallyBasedRendering.glsl.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./testSVGPremultipliedAlpha.js";import"./utils2.js";import"./ItemCache.js";import"./MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils3.js";import"./callExpressionWithFeature.js";import"./RenderGeometry.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./symbolLayerUtils3D.js";import"./layerViewUtils.js";import"./layerUtils.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./multiOriginJSONSupportUtils.js";import"./uuid.js";import"./diffUtils.js";import"./Graphics3DScaleVisibility.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"../layers/Layer.js";import"./rendererConversion.js";import"./defaults.js";import"./defaultsJSON.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./WorkerHandle.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./SceneLayerWorker.js";import"./attributeUtils.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"../Camera.js";import"../Ground.js";import"./loadAll.js";import"../Viewpoint.js";import"./domUtils.js";import"./scaleUtils.js";import"./WebGLRequirements.js";import"./InputManager.js";import"./Queue.js";import"../views/input/gamepad/GamepadInputDevice.js";import"./screenUtils2.js";import"./capabilities2.js";import"./interactiveToolUtils.js";import"./projector.js";import"./widgetUtils.js";import"../core/HandleOwner.js";import"../widgets/Popup.js";import"./throttle.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./jsxWidgetSupport.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"./MultiOriginJSONSupport.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"./FeatureIndex.js";import"./shared.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./OperationalLayer.js";import"./commonProperties2.js";import"./ElevationInfo.js";import"./PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./actions.js";import"./GoTo.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./writeUtils.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"./TablesMixin.js";import"./GraphicsCollection.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./RefreshableLayerView.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/ViewAnimation.js";import"../webscene/Lighting.js";import"../webscene/Environment.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./earthUtils.js";import"./sunUtils.js";import"./viewpointUtils.js";import"./spatialReferenceSupport.js";import"./ray2.js";import"./resources.js";import"./labelFormatUtils.js";import"./vec4f32.js";import"./geometryServiceUtils.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./VectorTile.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey.js";import"./rasterUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./tileUtils.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"./viewpointUtils2.js";import"./CameraSpace.glsl.js";import"./EdgeProcessingWorker.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";let c=class extends(n(u(d))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this.lodFactor=1,this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=1,this._overlayTexOffset=p(-1,-1,-1,-1),this._overlayTexScale=m(),this._overlayColor=null,this._overlayHighlight=null,this._overlayNormal=null}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}setDrapingTextures(t){const r=t.index,s=t.extent,e=t.needsColorWithoutRasterImage?t.getValidTarget(1):t.hasDrapedFeatureSource?t.getValidTarget(0):null;if(o(e)&&a(s)>0){this._overlayTexOffset[2*r]=-s[0]/l(s),this._overlayTexOffset[2*r+1]=-s[1]/j(s),this._overlayTexScale[2*r]=1/l(s),this._overlayTexScale[2*r+1]=1/j(s);const o=t.getValidTarget(2),i=t.getValidTarget(3);this._overlayColor=e.getTexture(),this._overlayHighlight=o?o.getTexture():null,this._overlayNormal=i?i.getTexture():null}else this._overlayTexOffset[2*r]=-1,this._overlayTexOffset[2*r+1]=-1,this._overlayTexScale[2*r]=0,this._overlayTexScale[2*r+1]=0,0===r&&(this._overlayColor=null,this._overlayHighlight=null,this._overlayNormal=null);this._forAllNodes((t=>o(t)&&this._collection.updateMaterial(t.objectHandle,(t=>this._updateMaterialOverlay(t)))))}_updateMaterialOverlay(t){t.overlayColor=this._overlayColor,t.overlayHighlight=this._overlayHighlight,t.overlayNormal=this._overlayNormal,t.overlayTexOffset=this._overlayTexOffset,t.overlayTexScale=this._overlayTexScale}initialize(){this.updatingHandles.add(this.layer,"modifications",(()=>this._loadModifications()),2)}_createLayerGraphic(){const t=new r;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),s(this.layer.modifications))return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(t,(()=>this._modifications=t.toArray()),2),"modifications")}};t([e()],c.prototype,"layer",void 0),t([e({aliasOf:"layer"})],c.prototype,"i3slayer",void 0),t([e()],c.prototype,"suspended",void 0),t([e(y)],c.prototype,"updatingProgress",void 0),t([e({readOnly:!0,aliasOf:"_controller.updatingProgress"})],c.prototype,"updatingProgressValue",void 0),t([e({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],c.prototype,"lodFactor",void 0),t([e({readOnly:!0})],c.prototype,"progressiveLoadFactor",null),c=t([i("esri.views.3d.layers.SceneLayerView3D")],c);var g=c;export default g;
