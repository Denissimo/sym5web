/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../symbols.js";import{E as i}from"./Evented.js";import r from"../core/Handles.js";import{j as s,clone as o,i as e,b as p}from"../core/lang.js";import{watch as a,whenOnce as m}from"../core/watchUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import c from"../layers/GraphicsLayer.js";import{j as h}from"./InteractiveToolBase.js";import{b as j}from"../widgets/Sketch/SketchViewModel.js";import{V as u}from"./InputManager.js";import{G as d}from"./GraphicManipulator.js";import{b as y}from"./screenUtils2.js";import g from"../symbols/SimpleMarkerSymbol.js";import v from"../symbols/SimpleLineSymbol.js";import f from"../symbols/SimpleFillSymbol.js";import"../symbols/CIMSymbol.js";import"./string.js";import"./object.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"../core/Error.js";import"./Message.js";import"../config.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./metadata.js";import"./handleUtils.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./write.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"./number.js";import"./locale.js";import"../request.js";import"../kernel.js";import"./assets.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../layers/Layer.js";import"./Identifiable.js";import"./BlendLayer.js";import"./ScaleRangeLayer.js";import"./GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./uid.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/projection.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./interactiveToolUtils.js";import"./domUtils.js";import"./projector.js";import"./widgetUtils.js";import"../core/HandleOwner.js";import"../widgets/Popup.js";import"./throttle.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"./compilerUtils.js";import"./featureConversionUtils.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"./devEnvironmentUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"./FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./shared.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"./CustomParametersMixin.js";import"./OperationalLayer.js";import"./commonProperties2.js";import"./PortalLayer.js";import"./asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./utils2.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils3.js";import"./layerViewUtils.js";import"./actions.js";import"./GoTo.js";import"./Queue.js";import"./elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"../views/draw/Draw.js";import"../views/draw/MultipointDrawAction.js";import"../views/draw/DrawAction.js";import"./dehydratedFeatures.js";import"./byteSizeEstimations.js";import"./aaBoundingBox.js";import"./quantizationUtils.js";import"./vec2.js";import"./vec2f64.js";import"./Settings.js";import"./AppendVertex.js";import"./vec4.js";import"./vec4f64.js";import"./plane.js";import"./sphere.js";import"./ray.js";import"./vectorStacks.js";import"./quatf64.js";import"./mat4f64.js";import"./keybindings.js";import"../views/draw/PointDrawAction.js";import"./DrawTool.js";import"./dehydratedFeatureComparison.js";import"./Scheduler.js";import"./PromiseQueue.js";import"./vec4f32.js";import"./frustum.js";import"./lineSegment.js";import"./LaserlineVisualElement.js";import"./VisualElement.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./VertexColor.glsl.js";import"./Program.js";import"./Texture.js";import"./VertexArrayObject.js";import"./mat4f32.js";import"./Util.js";import"./utils4.js";import"./geometryDataUtils.js";import"./triangle.js";import"./CameraSpace.glsl.js";import"./ColorMaterial.js";import"./vec3f32.js";import"./Object3DVisualElement.js";import"./Object3D.js";import"./mathUtils2.js";import"./RibbonLineMaterial.js";import"./ElevationProvider.js";import"./PiUtils.glsl.js";import"./sdfPrimitives.js";import"./mat3.js";import"./Texture2.js";import"./requestImageUtils.js";import"./FramebufferObject.js";import"./VerticalOffset.glsl.js";import"./RightAngleQuadVisualElement.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"./mat2d.js";import"./mat2df64.js";import"./quat.js";import"./MapUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./drapedUtils.js";class b{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-click"}}class w{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-double-click"}}class _{constructor(t,i,r,s,o,e,p,a,m,l){this.graphic=t,this.allGraphics=i,this.index=r,this.x=s,this.y=o,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=m,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class S{constructor(t,i,r,s,o,e,p,a,m,l){this.graphic=t,this.allGraphics=i,this.index=r,this.x=s,this.y=o,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=m,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class G{constructor(t,i,r,s,o,e,p,a,m,l){this.graphic=t,this.allGraphics=i,this.index=r,this.x=s,this.y=o,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=m,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class x{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-pointer-over"}}class U{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-pointer-out"}}class D{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-pointer-down"}}class k{constructor(t,i,r,s,o){this.graphic=t,this.index=i,this.x=r,this.y=s,this.viewEvent=o,this.type="graphic-pointer-up"}}let I=class extends i.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new r,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new r,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new c({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){j(this.view,this.layer),this.refresh(),this._handles.add([a(this,["graphics","graphics.length"],(()=>this.refresh())),m(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),u.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),u.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),u.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),u.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),u.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),u.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),u.TOOL)])}))])}destroy(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=s(this._handles),this._viewHandles=s(this._viewHandles)}get state(){const t=!!this.get("view.ready"),i=!!this.get("graphics.length"),r=this._activeGraphic;return t&&i?r?"moving":"active":t?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,i){const r=this.graphics[t];r&&(r.set("geometry",i),this._setUpIndicators())}_clickHandler(t){const i=this._findTargetGraphic(y(t));if(i){const r=new b(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",r),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(r)}}_doubleClickHandler(t){const i=this._findTargetGraphic(y(t));if(i){const r=new w(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",r),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(r)}}_pointerDownHandler(t){const i=this._findTargetGraphic(y(t));if(i){this._activeGraphic=i;const{x:r,y:s}=t,o=new D(i,this.graphics.indexOf(i),r,s,t);this.emit("graphic-pointer-down",o),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(o)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:r}=t,s=this.graphics.indexOf(this._activeGraphic),o=new k(this._activeGraphic,s,i,r,t);this.emit("graphic-pointer-up",o),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(o)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic(y(t));if(i){const{x:r,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const o=this.graphics.indexOf(this._hoverGraphic),e=new U(this.graphics[o],o,r,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",e),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(e)}const o=this.graphics.indexOf(i),e=new x(i,o,r,s,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",e),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(e))}if(this._hoverGraphic){const{x:i,y:r}=t,s=this.graphics.indexOf(this._hoverGraphic),o=new U(this.graphics[s],s,i,r,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:r,y:s}=t,e=this.graphics.indexOf(this._activeGraphic),p=this._activeGraphic.geometry,a=this._dragEvent?r-this._dragEvent.x:0,m=this._dragEvent?s-this._dragEvent.y:0,l=r-t.origin.x,n=s-t.origin.y,c=h(p,a,m,this.view);if(this._activeGraphic.geometry=c,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=h(t.geometry,a,m,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=o(p);const i=new _(this._activeGraphic,this.graphics,e,r,s,a,m,l,n,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",p)}else if("update"===i){const i=new S(this._activeGraphic,this.graphics,e,r,s,a,m,l,n,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=p)}else{const i=new G(this._activeGraphic,this.graphics,e,r,s,a,m,l,n,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[e].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let i=null,r=Number.MAX_VALUE;return this._manipulators.forEach((s=>{const o=s.intersectionDistance(t);e(o)&&o<r&&(r=o,i=s.graphic)})),i}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new d({graphic:t,view:i}))):[]}_setUpIndicators(){var t;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((t=>{const i=t.clone();return i.symbol=this._getSymbolForIndicator(t),i})))||[],this.layer.addMany(this._indicators))}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if(p(t.symbol))return null;switch(t.symbol.type){case"cim":return new g({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:r,height:s,width:o}=t.symbol,e=s===o?o:Math.max(s,o);return new g({xoffset:i,yoffset:r,size:e,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:r,size:s,style:o}=t.symbol;return new g({xoffset:i,yoffset:r,style:"circle"===o?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new f({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new v({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:r}=t.symbol;return new g({xoffset:i,yoffset:r,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};t([l()],I.prototype,"_activeGraphic",void 0),t([l({readOnly:!0})],I.prototype,"type",void 0),t([l()],I.prototype,"callbacks",void 0),t([l()],I.prototype,"enableMoveAllGraphics",void 0),t([l()],I.prototype,"graphics",void 0),t([l()],I.prototype,"indicatorsEnabled",void 0),t([l()],I.prototype,"layer",void 0),t([l({readOnly:!0})],I.prototype,"state",null),t([l()],I.prototype,"view",void 0),I=t([n("esri.views.draw.support.GraphicMover")],I);var P=I;export default P;
