/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{version as i}from"../kernel.js";import s from"../request.js";import e from"../core/Collection.js";import o from"../core/Handles.js";import{i as r,b as p}from"../core/lang.js";import{queryToObject as a,objectToQuery as l}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import j from"../geometry/Extent.js";import{load as y,project as u}from"../geometry/projection.js";import h from"../geometry/SpatialReference.js";import{canProject as c,project as d}from"../geometry/support/webMercatorUtils.js";import{g as b,f as g,p as f}from"./kmlUtils.js";import{p as V}from"./utils5.js";import{a as S}from"./GraphicsCollection.js";import{B as w}from"./Bitmap.js";import{B as _}from"./BitmapContainer.js";import{L as v}from"./LayerView2D.js";import{G as C}from"./GraphicContainer.js";import{G as I}from"./BaseGraphicContainer.js";import U from"../views/layers/LayerView.js";import"../config.js";import"./object.js";import"../core/Error.js";import"./Message.js";import"./string.js";import"../core/promiseUtils.js";import"./ArrayPool.js";import"./Evented.js";import"../core/Accessor.js";import"./deprecate.js";import"./metadata.js";import"./handleUtils.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"./write.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./Ellipsoid.js";import"./mathUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./aaBoundingBox.js";import"../renderers/support/jsonUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"./uid.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"./devEnvironmentUtils.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./fieldType.js";import"./mat3.js";import"./mat3f32.js";import"./vec2f32.js";import"./VertexArrayObject.js";import"./Texture.js";import"./FramebufferObject.js";import"./DisplayObject.js";import"./brushes.js";import"./definitions.js";import"./vec4f32.js";import"./Utils12.js";import"./enums.js";import"./ShaderCompiler.js";import"./Program.js";import"./number2.js";import"./config.js";import"./GeometryUtils.js";import"./MaterialKey.js";import"./rasterUtils.js";import"./WGLContainer.js";import"./Container.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/watchUtils.js";import"./ClipRect.js";import"../core/HandleOwner.js";import"./normalizeUtilsSync.js";import"./normalizeUtilsCommon.js";import"./projectionSupport.js";import"./json.js";import"./Matcher.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"./Queue.js";import"./TileInfoView.js";import"./TileKey.js";import"./TileStore.js";import"./FeatureSetReader.js";import"./centroid.js";import"../layers/support/FieldsIndex.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./quickselect.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"./tileUtils2.js";import"./BidiText.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BidiEngine.js";import"./CIMSymbolHelper.js";import"./defaults.js";import"./defaultsJSON.js";import"./TileClipper.js";import"./cimAnalyzer.js";import"./utils3.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./TurboLine.js";import"./schemaUtils.js";import"../geometry/support/normalizeUtils.js";import"./clusterUtils2.js";import"./MD5.js";import"./util2.js";import"./FeatureContainer.js";import"./TiledDisplayObject.js";import"./TileContainer.js";import"./capabilities2.js";import"./GraphicsView.js";class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let D=class extends(v(U)){constructor(){super(...arguments),this._handles=new o,this._bitmapIndex=new Map,this._mapImageContainer=new _,this._kmlVisualData=new P,this.allVisiblePoints=new S,this.allVisiblePolylines=new S,this.allVisiblePolygons=new S,this.allVisibleMapImages=new e}hitTest(t,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const s=[this._pointsView.hitTest(t,i),this._polylinesView.hitTest(t,i),this._polygonsView.hitTest(t,i)];return Promise.all(s).then((t=>t.filter((t=>(t&&(t.layer=this.layer,t.sourceLayer=this.layer),!!t)))[0]||null))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(t=>{t.added.forEach((t=>this._addMapImage(t))),t.removed.forEach((t=>this._removeMapImage(t)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new I({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new I({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new I({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(t=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const i of t){const t=this._kmlVisualData.allSublayers.get(i.id);t&&(t.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&s(t.href,{responseType:"image"}).then((({data:i})=>{let s=j.fromJSON(t.extent);c(s,this.view.spatialReference)&&(s=d(s,this.view.spatialReference));const e=new w(i,"standard");e.x=s.xmin,e.y=s.ymax,e.resolution=s.width/i.naturalWidth,e.rotation=t.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(t,e)}))}async _getViewDependentUrl(t,s){const{viewFormat:e,viewBoundScale:o,httpQuery:m}=t;if(r(e)){if(p(s))throw new Error("Loading this network link requires a view state.");let n;if(await y(),r(o)&&1!==o){const t=new j(s.extent);t.expand(o),n=t}else n=s.extent;n=u(n,h.WGS84);const c=u(n,h.WebMercator),d=n.xmin,b=n.xmax,g=n.ymin,f=n.ymax,S=s.size[0]*s.pixelRatio,w=s.size[1]*s.pixelRatio,_=Math.max(c.width,c.height),v={"[bboxWest]":d.toString(),"[bboxEast]":b.toString(),"[bboxSouth]":g.toString(),"[bboxNorth]":f.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":_.toString(),"[lookatTilt]":"0","[lookatHeading]":s.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":_.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":S.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":i,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=t=>{for(const i in t)for(const s in v)t[i]=t[i].replace(s,v[s])},I=a(e);C(I);let U={};r(m)&&(U=a(m),C(U));const P=V(t.href);P.query={...P.query,...I,...U};return`${P.path}?${l(I)}`}return t.href}async _fetchService(){const t=new P;await this._loadVisualData(this.layer.url,t),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t)))}_isSublayerVisible(t){const i=this._kmlVisualData.allSublayers.get(t);return!!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(t,i){return this._fetchParsedKML(t).then((async t=>{for(const s of t.sublayers){i.allSublayers.set(s.id,s);const t=s.points?await b(s.points):[],e=s.polylines?await b(s.polylines):[],o=s.polygons?await b(s.polygons):[],r=s.mapImages||[];if(i.allPoints.push(...t.map((t=>({item:t,sublayerId:s.id})))),i.allPolylines.push(...e.map((t=>({item:t,sublayerId:s.id})))),i.allPolygons.push(...o.map((t=>({item:t,sublayerId:s.id})))),i.allMapImages.push(...r.map((t=>({item:t,sublayerId:s.id})))),s.networkLink){const t=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(t,i)}}}))}_fetchParsedKML(t){return g(t,this.view.spatialReference,this.layer.refreshInterval).then((t=>f(t.data)))}_removeMapImage(t){const i=this._bitmapIndex.get(t);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(t))}};t([m()],D.prototype,"_pointsView",void 0),t([m()],D.prototype,"_polylinesView",void 0),t([m()],D.prototype,"_polygonsView",void 0),t([m()],D.prototype,"_fetchingPromise",void 0),t([m()],D.prototype,"updating",void 0),D=t([n("esri.views.2d.layers.KMLLayerView2D")],D);var M=D;export default M;
