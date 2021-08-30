/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{i as e,l as r,j as s}from"../core/lang.js";import{throwIfAborted as o,createAbortController as i,isAborted as p}from"../core/promiseUtils.js";import{whenTrueOnce as m}from"../core/watchUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{S as n}from"./SchemaHelper.js";import{b as j}from"./MemCache.js";import{f as u}from"./mat3f32.js";import{a as c}from"./aaBoundingRect.js";import{w as d,a as y,V as h}from"./VectorTile.js";import{S as g,a as b,C as f,T as S}from"./SymbolRepository.js";import{T as w}from"./TileKey.js";import{v}from"./brushes.js";import{V as C}from"./VTLMaterialManager.js";import{S as U}from"./StyleRepository.js";import{L as T}from"./LayerView3D.js";import{T as M}from"../views/SceneView.js";import"./VertexArrayObject.js";import"./FramebufferObject.js";import"./Texture.js";import"./DisplayObject.js";import"./terrainUtils.js";import"../core/Error.js";import"../geometry/Extent.js";import"./TerrainConst.js";import"./mathUtils.js";import"./unitUtils.js";import"../geometry/Multipoint.js";import"./pe.js";import"../geometry/Point.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import I from"../views/layers/LayerView.js";import"./Message.js";import"./object.js";import"../config.js";import"./string.js";import"./metadata.js";import"./handleUtils.js";import"../layers/support/LOD.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"./write.js";import"../layers/support/TileInfo.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Geometry.js";import"./mat3.js";import"./config.js";import"./TiledDisplayObject.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./ItemCache.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../intl.js";import"./number.js";import"./locale.js";import"./Rect.js";import"./pbf.js";import"./CIMSymbolHelper.js";import"../Color.js";import"./colorUtils.js";import"./extentUtils.js";import"../geometry/support/jsonUtils.js";import"./zmUtils.js";import"./TileIndex.js";import"./TilemapCache.js";import"../core/Handles.js";import"../core/Collection.js";import"./Evented.js";import"./LRUCache.js";import"./definitions.js";import"./vec4f32.js";import"./Utils12.js";import"./enums.js";import"./ShaderCompiler.js";import"./Program.js";import"./number2.js";import"./vec2f32.js";import"./GeometryUtils.js";import"./MaterialKey.js";import"./rasterUtils.js";import"./colorUtils2.js";import"./unitBezier.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../Camera.js";import"./mathUtils2.js";import"../geometry.js";import"./typeUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./uid.js";import"../Ground.js";import"./compilerUtils.js";import"./loadAll.js";import"./asyncUtils.js";import"../Viewpoint.js";import"./domUtils.js";import"../geometry/projection.js";import"./mat4.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./boundedPlane.js";import"./vectorStacks.js";import"./quatf64.js";import"./mat4f64.js";import"./vec2f64.js";import"./vec4f64.js";import"./lineSegment.js";import"./plane.js";import"./sphere.js";import"./vec4.js";import"./ray.js";import"./scaleUtils.js";import"./layerUtils.js";import"./WebGLRequirements.js";import"./InputManager.js";import"./Queue.js";import"../views/input/gamepad/GamepadInputDevice.js";import"./screenUtils2.js";import"./MapUtils.js";import"./capabilities2.js";import"./interactiveToolUtils.js";import"./projector.js";import"./widgetUtils.js";import"../core/HandleOwner.js";import"../widgets/Popup.js";import"./throttle.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"./featureConversionUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"./devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../layers/Layer.js";import"./FeatureIndex.js";import"./shared.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./OperationalLayer.js";import"./commonProperties2.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./utils2.js";import"../symbols/support/cimSymbolUtils.js";import"./utils3.js";import"./layerViewUtils.js";import"./actions.js";import"./GoTo.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./ElevationProvider.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./writeUtils.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"./TablesMixin.js";import"./GraphicsCollection.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./RefreshableLayerView.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/ViewAnimation.js";import"../webscene/Lighting.js";import"../webscene/Environment.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./requestImageUtils.js";import"./VertexColor.glsl.js";import"./mat4f32.js";import"./Util.js";import"./vec2.js";import"./utils4.js";import"./geometryDataUtils.js";import"./triangle.js";import"./aaBoundingBox.js";import"./BufferView.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./types.js";import"./ColorMaterial.js";import"./vec3f32.js";import"./dehydratedFeatures.js";import"./byteSizeEstimations.js";import"./quantizationUtils.js";import"./frustum.js";import"./sdfPrimitives.js";import"./Texture2.js";import"./VerticalOffset.glsl.js";import"./PiUtils.glsl.js";import"./earthUtils.js";import"./sunUtils.js";import"./lineUtils.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./RibbonLineMaterial.js";import"./Camera.js";import"./Object3D.js";import"./Intersector.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./PhysicallyBasedRendering.glsl.js";import"./Scheduler.js";import"./PromiseQueue.js";import"./ElevationQuery.js";import"./pointUtils.js";import"./vec3.js";import"./objectResourceUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./testSVGPremultipliedAlpha.js";import"./callExpressionWithFeature.js";import"./RenderGeometry.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./symbolLayerUtils3D.js";import"./viewpointUtils.js";import"./spatialReferenceSupport.js";import"./ray2.js";import"./resources.js";import"./labelFormatUtils.js";import"./geometryServiceUtils.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./tileUtils.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"./viewpointUtils2.js";import"./quatf32.js";import"./CameraSpace.glsl.js";import"./EdgeProcessingWorker.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";class _ extends S{constructor(t,e,r,s,o){super(t,e,r),this._memCache=s,this._loader=o,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map}destroy(){this._ongoingRequestToController.forEach((t=>t.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(t,r,s,i){const p=new w(t,r,s,0);let m=this._memCache.get(p.id);if(e(m))return m.retain(),m;const l=await this._getVectorTileData(p);if(o(i),!this._vectorTileLayer)return null;if(m=this._memCache.get(p.id),e(m))return m.retain(),m;const a=this._vectorTileLayer.tileInfo.getTileBounds(c(),p);return m=new h(p,this._styleRepository,a,[512,512],this._memCache),e(l)&&l.tileData?(m.setData(l.tileData),m.retain(),this._memCache.put(p.id,m,m.memoryUsage*m.referenced,j)):m.setData(null),m.neededForCoverage=!0,m.transforms.tileUnitsToPixels=u(1/8,0,0,0,1/8,0,0,0,1),function(t,e){const r=[],s=new g(4096,r,(()=>{const t=new y;return t.show=!1,t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t})),o=new b(r,s,((e,r,s)=>new f(e,r,s,t.styleRepository,t.key.level,0)),((t,e)=>{d(t,e,!1)}),(()=>0),(t=>{const r=e.getStyleLayerByUID(t).getLayoutProperty("visibility");return!r||1!==r.getValue()}));r.push(t),s.add(t),o.setScreenSize(512,512),o.continue(1/0)}(m,this._styleRepository),m}_getVectorTileData(t){const e=t.id;if(this._ongoingTileRequests.has(e))return this._ongoingTileRequests.get(e);const r=new AbortController,s={signal:r.signal},o=this._getParsedVectorTileData(t,s).then((t=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),t))).catch((()=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),null)));return this._ongoingTileRequests.set(e,o),this._ongoingRequestToController.set(e,r),o}_getParsedVectorTileData(t,e){return this.fetchTileData(t,e).then((r=>this.parseTileData({key:t,data:r},e)))}request(t,e){return this._loader.request(t,"binary",e)}}class R{constructor(t,e){this.spriteMosaic=t,this.glyphMosaic=e,this._brushCache=new Map,this._vtlMaterialManager=new C}dispose(){this._brushCache&&(this._brushCache.forEach((t=>t.dispose())),this._brushCache=null),this._vtlMaterialManager=r(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(t,e,r){const{context:s}=t,o=r.layers;r.backgroundBucketIds.length>0&&(t.renderPass="background",r.backgroundBucketIds.forEach((s=>this._renderStyleLayer(r.getLayerById(s),t,e,!0)))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(515),t.renderPass="opaque";for(let r=o.length-1;r>=0;r--)this._renderStyleLayer(o[r],t,e,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(1,771,1,771),t.renderPass="translucent";for(let r=0;r<o.length;r++)this._renderStyleLayer(o[r],t,e,!1);s.setDepthTestEnabled(!1),t.renderPass="symbol";for(let r=0;r<o.length;r++)this._renderStyleLayer(o[r],t,e,!1);s.bindVAO()}_renderStyleLayer(t,e,r,s=!1){if(!(s||t&&r.layerData.has(t.uid)))return;const o=t.getLayoutProperty("visibility");if(o&&1===o.getValue())return;const{renderPass:i}=e;let p;switch(t.type){case 0:if("background"!==i)return;p="vtlBackground";break;case 1:if("opaque"!==i&&"translucent"!==e.renderPass)return;p="vtlFill";break;case 2:if("translucent"!==i)return;p="vtlLine";break;case 4:if("symbol"!==i)return;p="vtlCircle";break;case 3:if("symbol"!==i)return;p="vtlSymbol"}const m=e.displayLevel;void 0!==t.minzoom&&t.minzoom>m+1e-6||void 0!==t.maxzoom&&t.maxzoom<=m-1e-6||(e.styleLayerUID=t.uid,e.styleLayer=t,this.drawWithBrush(e,r,p))}drawWithBrush(t,e,r){if(!this._brushCache.has(r)){const t=v[r];this._brushCache.set(r,new t)}this._brushCache.get(r).drawMany(t,[e])}}let L=class extends(M(T(I))){constructor(t){super(t),this.type="vector-tile-3d"}initialize(){const t=this.layer.compatibleTileInfo256,e=this._getTileInfoSupportError(t,this.layer.fullExtent);if(e)return void this.addResolvingPromise(Promise.reject(e));const{basemapTerrain:r,spatialReference:s,pixelRatio:o}=this.view,l=m(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const t=r.tilingScheme,e=t.pixelSize;let o;this.schemaHelper=new n(e,s.isGeographic),o=256===e?this.layer.compatibleTileInfo256:this.view.spatialReference.isGeographic?this.layer.compatibleTileInfo512:this.layer.tileInfo;const i=this._getTileInfoCompatibilityError(o,t);if(i)throw i;this._set("tileInfo",o)}));this._tileHandlerController=i();const a=this.view.resourceController;this._memCache=a.memoryController.getMemCache(this.layer.uid,(t=>t.release()));const{style:j,spriteUrl:u,glyphsUrl:c}=this.layer.currentStyleInfo,d=new U(j,{spriteUrl:u,glyphsUrl:c}),y=r.mapTileRequester;this._tileHandler=new _(this.layer,d,o,this._memCache,y);const h=this._tileHandlerController.signal,g=t=>a.schedule(t),b=this._tileHandler.start({signal:h,schedule:g}),f=this._tileHandler.spriteMosaic;f.then((t=>{!p(h)&&this._tileHandler&&(this.painter=new R(t,this._tileHandler.glyphMosaic))})),b.then((()=>this._tileHandlerController=null));const S=()=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=i(),this._memCache.clear();const{style:t,spriteUrl:e,glyphsUrl:r}=this.layer.currentStyleInfo,s=new U(t,{spriteUrl:e,glyphsUrl:r}),p=new _(this.layer,s,o,this._memCache,y),m=p.start({signal:this._tileHandlerController.signal,schedule:g}),l=p.spriteMosaic;m.then((()=>this._tileHandlerController=null)),this.updatingHandles.addPromise(Promise.all([m,l]).then((([,t])=>{const e=this._tileHandler,r=this.painter;this.painter=new R(t,p.glyphMosaic),this._tileHandler=p,this.emit("data-changed"),e.destroy(),r&&r.dispose()})))};this.updatingHandles.add(this,"layer.currentStyleInfo",S),this.updatingHandles.add(this,"view.pixelRatio",S);const w=Promise.all([l,b,f]);this.addResolvingPromise(w)}destroy(){this.painter=r(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),s(this._tileHandler),this._memCache=s(this._memCache),this._tileHandler=null}get dataLevelRange(){const t=this.tileInfo.lods,e=t[0].scale,r=t[t.length-1].scale,s=this.levelRangeFromScaleRange(e,r);return 1===s.minLevel&&256===this.tileInfo.size[0]&&(s.minLevel=0),s}async fetchTile(t,e,r,s){return this._tileHandler.getVectorTile(t,e,r,s)}};t([l({aliasOf:"layer.fullExtent"})],L.prototype,"fullExtent",void 0),t([l()],L.prototype,"layer",void 0),t([l()],L.prototype,"tileInfo",void 0),t([l()],L.prototype,"dataLevelRange",null),t([l()],L.prototype,"updatingProgressValue",void 0),L=t([a("esri.views.3d.layers.VectorTileLayerView3D")],L);var V=L;export default V;