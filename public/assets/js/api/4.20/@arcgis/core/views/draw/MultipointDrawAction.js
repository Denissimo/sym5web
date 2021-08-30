/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import s from"../../core/Handles.js";import{o,i as e,b as i}from"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import n from"./DrawAction.js";import{S as p,V as a,a as m,C as l,D as h}from"../../chunks/keybindings.js";import{V as c}from"../../chunks/InputManager.js";import{b as u}from"../../chunks/screenUtils2.js";import d from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/screenUtils.js";import"../../layers/GraphicsLayer.js";import"../../layers/Layer.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/Identifiable.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/BlendLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../chunks/assets.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/uid.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/fieldType.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/Settings.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/AppendVertex.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/sphere.js";import"../../chunks/mat4.js";import"../../chunks/ray.js";import"../../chunks/vectorStacks.js";import"../../chunks/quatf64.js";import"../../chunks/mat4f64.js";import"../../chunks/Queue.js";let j=class extends n{constructor(t){super(t),this._popVertexOnPointerMove=!1,this._addVertexOnPointerUp=!1,this._activePointerId=null,this._viewHandles=new s,this._undoRedoHandles=new s}initialize(){this._addViewHandles(),this._addUndoRedoHandles()}destroy(){this._removeViewHandles(),this._viewHandles.destroy(),this._removeUndoRedoHandles(),this._undoRedoHandles.destroy(),this.emit("destroy")}undo(){super.undo(),this.notifyChange("vertices")}redo(){super.redo(),this.notifyChange("vertices")}complete(){this._completeDrawing()}_addViewHandles(){this._removeViewHandles(),this._viewHandles.add([this.view.on("click",(t=>{t.stopPropagation()}),c.TOOL),this.view.on("pointer-down",(t=>{this._shouldHandlePointerEvent(t)&&(this._snappingTask=o(this._snappingTask),this._activePointerId=t.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=u(t),"touch"===t.pointerType&&this._updateCursor(t.native))}),c.TOOL),this.view.on("pointer-move",(t=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._snappingTask=o(this._snappingTask),this._cursorScreenPoint=u(t),"touch"!==t.pointerType&&this._updateCursor(t.native)}),c.TOOL),this.view.on("pointer-drag",(t=>{this._shouldHandlePointerEvent(t)&&(this._snappingTask=o(this._snappingTask),this._addVertexOnPointerUp=!1)}),c.TOOL),this.view.on("pointer-up",(t=>{if(this._shouldHandlePointerEvent(t))if(this._snappingTask=o(this._snappingTask),this._activePointerId=null,this._addVertexOnPointerUp)this._vertexAddHandler(t);else{const s="touch"===t.pointerType;this._updateCursor(t.native,s)}}),c.TOOL),this.view.on("drag",["Shift"],(t=>{t.stopPropagation()}),c.TOOL),this.view.on("double-click",(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),c.TOOL),this.view.on("double-click",["Control"],(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),c.TOOL),this.view.on("key-down",(t=>{const{key:s,repeat:e}=t;s===p.vertexAdd&&!e&&this._cursorScreenPoint?(t.stopPropagation(),this._snappingTask=o(this._snappingTask),this._vertexAddHandler(t)):s===p.complete&&!e&&this._cursorScreenPoint&&this.vertices.length>2?(t.stopPropagation(),this._snappingTask=o(this._snappingTask),this._vertexAddHandler(t),this._drawCompleteHandler(t)):s!==p.undo||this.interactiveUndoDisabled||e?s!==p.redo||this.interactiveUndoDisabled||e?s!==p.pan||e||t.stopPropagation():(t.stopPropagation(),this.redo()):(t.stopPropagation(),this.undo())}),c.TOOL),this.view.on("key-up",(t=>{t.key===p.pan&&t.stopPropagation()}),c.TOOL)])}_addUndoRedoHandles(){this._removeUndoRedoHandles(),this._undoRedoHandles.add([this._editGeometry.on("vertex-remove",(t=>{if(this.notifyChange("vertices"),"undo"===t.operation){const s=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(s);const o=[...this._committedVertices];e(this._stagedVertex)&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new a(this.view,s,t.vertices[0].index,o))}})),this._editGeometry.on("vertex-add",(t=>{if(this.notifyChange("vertices"),"apply"===t.operation){const t=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],s=this._committedVertices.length-1,o=new m(this.view,t,s,this.vertices);this.emit("vertex-add",o),o.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===t.operation){const s=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(s);const o=[...this._committedVertices];e(this._stagedVertex)&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new m(this.view,s,t.vertices[0].index,o))}}))])}_removeViewHandles(){this._viewHandles.removeAll()}_removeUndoRedoHandles(){this._undoRedoHandles.removeAll()}_addVertex(t,s){const o=this._coordinateHelper.fromArray(t);if(this._isDuplicateOfLastVertex(o))return;this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometry.appendVertex(o);const e=s||new Event("placeholder");this._nativeEventHistory.undoStack.push(e)}_updateCursor(t,s=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const o=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);if(e(o)&&!s){this._pushCursorVertex(o.vertex);const s=()=>new l(this.view,t,this._activeComponent.vertices.length,this.vertices,e(this._stagedVertex)?new d(this._stagedVertex):null);this.emit("cursor-update",s()),e(this._snappingTask)&&this._snappingTask.promise.then((t=>{t.valid&&this.emit("cursor-update",s())}),(()=>{}))}}_completeDrawing(t){if(this._activePointerId=null,this._popCursorVertex(),this._snappingTask=o(this._snappingTask),e(this._snappingManager)&&this._snappingManager.doneSnapping(),this.vertices.length<2)return;const s=new h(t,this.vertices);this.emit("draw-complete",s),s.defaultPrevented||this._removeViewHandles()}_shouldHandlePointerEvent(t){return function(t){return"mouse"!==t.pointerType||0===t.button}(t)&&(i(this._activePointerId)||this._activePointerId===t.pointerId)}};j=t([r("esri.views.draw.MultipointDrawAction")],j);export{j as MultipointDrawAction};