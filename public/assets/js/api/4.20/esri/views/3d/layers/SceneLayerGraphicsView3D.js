// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Logger ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/I3SOnDemandController ../../../renderers/support/renderingInfoUtils ../../../rest/query/operations/zscale ../../../rest/support/Query ./I3SPointsWorkerHandle ./LayerView3D ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./i3s/attributeEditing ./i3s/I3SAttributeOverrides ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/PopupSceneLayerView ./support/SceneLayerViewRequiredFields ../support/debugFlags ../support/GraphicsMap ../support/orientedBoundingBox ../support/updatingProperties ../../layers/SceneLayerView ../../layers/support/FeatureFilter ../../support/Scheduler".split(" "),
function(W,v,k,H,I,g,X,m,ua,va,wa,Y,Z,O,F,aa,ba,L,ca,da,P,ea,Q,R,h,fa,ha,S,ia,J,ja,ka,la,ma,M,na,oa,pa,qa,ra,sa){function T(D){const x=D.attributeInfo;for(let d=0;d<D.graphics.length;d++){const a=D.graphics[d];a.attributes||(a.attributes={});if(g.isSome(x)&&g.isSome(x.loadedAttributes))for(const {name:b}of x.loadedAttributes)x.attributeData[b]&&(a.attributes[b]=J.getCachedAttributeValue(x.attributeData[b],d))}}const G=I.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D");I=ka.defineFieldProperties();
h=function(D){function x(){var a=D.apply(this,arguments)||this;a.type="scene-layer-graphics-3d";a._nodesAddedToStage=new Map;a.drapeSourceType=1;a._queryEngine=null;a._memCache=null;a._interactiveEditingSessions=new Map;a.loadedGraphics=new na.GraphicsMap;a.holeFilling="always";a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}v._inheritsLoose(x,D);var d=x.prototype;d.initialize=function(){var a;const b=
this.layer;this.addResolvingPromise(b.indexInfo);this._attributeOverrides=new ia.I3SAttributeOverrides(this.layer,null==(a=this.view.resourceController)?void 0:a.memoryController);J.checkSpatialReferences(b,this.view.spatialReference,this.view.viewingMode);this.fieldsHelper=new ma.SceneLayerViewRequiredFields({layerView:this});this.updatingHandles.add(b,"rangeInfos",c=>this._rangeInfosChanged(c),2);this.updatingHandles.add(b,"renderer",(c,f)=>this._rendererChange(c,f));this.updatingHandles.add(this,
"parsedDefinitionExpression",()=>this._filterChange());this.updatingHandles.add(this,"view.floors",()=>this.graphics3d.filterVisibility.filterChanged());this.handles.add(X.init(M,"I3S_TREE_SHOW_TILES",c=>{if(c&&!this._treeDebugger){const f=this._controller.crsIndex;(new Promise(function(e,n){W(["./support/I3STreeDebugger"],e,n)})).then(({I3STreeDebugger:e})=>{!this._treeDebugger&&M.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new e({lv:this,view:this.view,nodeSR:f}))})}else c||!this._treeDebugger||M.I3S_TREE_SHOW_TILES||
(this._treeDebugger.destroy(),this._treeDebugger=null)}));this._set("graphics3d",new fa({owner:this,layer:b,preferredUpdatePolicy:0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:b.fullExtent,updateClippingExtent:c=>this._updateClippingExtent(c)}));if(this.graphics3d.elevationAlignment)this.graphics3d.elevationAlignment.events.on("invalidate-elevation",
c=>this._invalidateElevation(c));this.supportsHeightUnitConversion&&(this._verticalScale=ea.getGeometryZScaler("point",b.spatialReference,this.view.spatialReference));this.addResolvingPromise(this.graphics3d.setup());this._memCache=this.view.resourceController.memoryController.getMemCache(b.uid);this._controller=new da({layerView:this,scaleVisibilityEnabled:!1});J.containsDraco(this.layer.geometryDefinitions)&&(this._worker=new R.I3SPointsWorkerHandle(c=>this.view.resourceController.schedule(c)));
this.handles.add(this.layer.on("apply-edits",c=>this.updatingHandles.addPromise(c.result)));this.handles.add(this.layer.on("edits",c=>this._handleEdits(c)));this.when(()=>{this._queryEngine=new ha["default"]({layerView:this,priority:sa.TaskPriority.FEATURE_QUERY_ENGINE});this.updatingHandles.add(this,"maximumNumberOfFeatures",c=>this._controller.featureTarget=c,2);this.updatingHandles.add(this,"suspended",c=>{c&&this._removeAllNodeData()})})};d.destroy=function(){this._treeDebugger=g.destroyMaybe(this._treeDebugger);
this._attributeOverrides=g.destroyMaybe(this._attributeOverrides);this._set("graphics3d",g.destroyMaybe(this.graphics3d));this._controller=g.destroyMaybe(this._controller);this._queryEngine=g.destroyMaybe(this._queryEngine);this._worker=g.destroyMaybe(this._worker);this._memCache=g.destroyMaybe(this._memCache);this._nodesAddedToStage.clear();this.fieldsHelper=g.destroyMaybe(this.fieldsHelper)};d.notifyGraphicGeometryChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(a)};
d.notifyGraphicVisibilityChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(a)};d.whenGraphicAttributes=function(){var a=v._asyncToGenerator(function*(b,c){return J.whenGraphicAttributes(this.layer,b,this._getObjectIdField(),c,()=>[...this._nodesAddedToStage.values()])});return function(b,c){return a.apply(this,arguments)}}();d.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;const b=ca.hydrateGraphic(this.loadedGraphics.find(f=>f.uid===a),this.layer),
c=this._getObjectIdField();if(!b||!b.attributes||!b.attributes[c])return null;b.layer=this.layer;b.sourceLayer=this.layer;return b};d.whenGraphicBounds=function(a,b){return this.graphics3d.graphicsCore.whenGraphicBounds(a,b)};d.computeAttachmentOrigin=function(a,b){return this.graphics3d.graphicsCore.computeAttachmentOrigin(a,b)};d.canResume=function(){return D.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};d.isUpdating=function(){return!!(this._controller&&
this._controller.updating||this.graphics3d&&this.graphics3d.updating)};d.getRenderingInfo=function(a,b,c){a=P.getRenderingInfo(a,{renderer:b,arcade:c});g.isSome(a)&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};d.getRenderingInfoAsync=function(){var a=v._asyncToGenerator(function*(b,c,f,e){return P.getRenderingInfoAsync(b,{renderer:c,arcade:f,...e})});return function(b,c,f,e){return a.apply(this,arguments)}}();d.highlight=function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};
d.createInteractiveEditSession=function(a){return S.createInteractiveEditSession(this.attributeEditingContext,a)};d.extractBinaryPointData=function(){var a=v._asyncToGenerator(function*(b,c){b={geometryBuffer:b.geometryBuffer};g.isNone(this._worker)&&(this._worker=new R.I3SPointsWorkerHandle(f=>this.view.resourceController.schedule(f)));return this._worker.invoke(b,c).then(f=>{if(g.isSome(f))return{positionData:f.positions,featureIds:f.featureIds};throw Error("Failed to decompress Draco point data");
})});return function(b,c){return a.apply(this,arguments)}}();d.checkExtent=function(a,b){a&&!ba.extentContainsCoords3D(a,b)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&G.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&G.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)};d.addNode=function(){var a=v._asyncToGenerator(function*(b,
c,f){if(!("geometryBuffer"in c&&null!==c.geometryBuffer||"pointData"in c))return Promise.reject();if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+b.id+" already added");else{var e=this.layer.fullExtent,n;if(n=e)e=e.clone(),e.xmin-=.5,e.ymin-=.5,e.xmax+=.5,e.ymax+=.5,e.hasZ&&(e.zmin-=.5,e.zmax+=.5),e.hasM&&(e.mmin-=.5,e.mmax+=.5),n=e;e=n;n=this._controller.crsVertex;var q=[],l={graphics:null,featureIds:null,attributeInfo:c.attributeDataInfo,node:b};"geometryBuffer"in c&&null!==c.geometryBuffer?
yield this._addNodeBinaryPointData(b,l,c,e,q,f):"pointData"in c&&this._addNodeLegacyPointData(b,l,c,e,q);yield this._attributeOverrides.apply(l.featureIds,c.attributeDataInfo,f);b.numFeatures=l.graphics.length;this._updateNodeMemory(b);T(l);0<q.length&&(this.computeObb(b,q,n),this._controller.updateVisibility(b.index));if(!this._controller.isGeometryVisible(b))return this._cacheNodeData(l),Promise.resolve();if(this._verticalScale)for(const u of l.graphics)this._verticalScale(u.geometry);this._nodesAddedToStage.set(b.index,
l);this.loadedGraphics.addMany(l.graphics);this._filterNode(l);this._treeDebugger&&this._treeDebugger.update();return Promise.resolve()}});return function(b,c,f){return a.apply(this,arguments)}}();d.computeObb=function(a,b,c){const f=this._controller.crsIndex,e=f.isGeographic?this.view.renderSpatialReference:f;F.projectBuffer(b,c,0,b,e,0,b.length/3);a.serviceObb=oa.compute({data:b,size:3});f.isGeographic&&F.projectVectorToVector(a.serviceObb.center,e,a.serviceObb.center,f)};d.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};
d.isNodeReloading=function(){return!1};d.updateNodeState=function(){};d._addNodeBinaryPointData=function(){var a=v._asyncToGenerator(function*(b,c,f,e,n,q){var l=yield this.extractBinaryPointData(f,q);if(null==l)return Promise.reject();f=this._getObjectIdField();q=this._controller.crsVertex;const u=this.view.spatialReference,K=this.graphics3d.graphicsCore,{positionData:B,featureIds:y}=l;l=B.length/3;const t=[];for(let E=0;E<l;E++){var A=g.isSome(b.serviceObb)?b.serviceObb.center:[0,0,0],r=3*E,p=O.fromValues(B[r+
0],B[r+1],B[r+2]);Z.add(p,p,A);b.serviceObb||n.push(p[0],p[1],p[2]);e&&this.checkExtent(e,p);r=y[E];A={};null!=r&&(A[f]=r);r=null==r?H.generateUID():r;F.projectBuffer(p,q,0,C,u,0,1);p=L.makeDehydratedPoint(C[0],C[1],C[2],u);var w=this.loadedGraphics.get(r);g.isSome(w)?(w.level<b.level&&(z.property="geometry",z.graphic=w,z.oldValue=g.unwrap(w.geometry),z.newValue=p,w.geometry=p,K.graphicUpdateHandler(z)),t.push(w)):(w=H.generateUID(),t.push({objectId:r,uid:w,geometry:p,attributes:A,visible:!0,level:b.level}))}c.graphics=
t;c.featureIds=y});return function(b,c,f,e,n,q){return a.apply(this,arguments)}}();d._addNodeLegacyPointData=function(a,b,c,f,e){const n=this._getObjectIdField(),q=this._controller.crsVertex,l=this.view.spatialReference,u=[0,0,0],K=[],B=[];for(const A of c.pointData){c=A.featureDataPosition;const r=c.length;var y=A.geometries&&A.geometries[0]||ta[r];const p=A.featureIds[0];if("points"!==y.params.type)continue;f&&this.checkExtent(f,c);const w={};null!=p&&(w[n]=p);const E=null==p?H.generateUID():p;
let N;"Embedded"===y.type&&(N=y.params.vertexAttributes.position);for(y=0;y<N.length;y+=r){for(var t=0;t<r;t++)u[t]=c[t]+N[y+t];t=3===r;a.serviceObb||e.push(u[0],u[1],t?u[2]:0);F.projectBuffer(u,q,0,C,l,0,1);t=L.makeDehydratedPoint(C[0],C[1],t?C[2]:void 0,l);const U=this.loadedGraphics.get(E);g.isSome(U)?B.push(U):B.push({objectId:E,uid:H.generateUID(),geometry:t,attributes:w,visible:!0})}K.push(p)}b.graphics=B;b.featureIds=K};d._updateNodeMemory=function(a){a.memory=4096+(g.isSome(a.numFeatures)?
a.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic:0)};d._cacheNodeData=function(a){const b=a.graphics.reduce((c,f)=>L.estimateSize(f)+c,8*a.featureIds.length+1536);this._memCache.put(this._getMemCacheKey(a.node),a,b)};d._getMemCacheKey=function(a){return`${a.index}`};d._removeAllNodeData=function(){this._nodesAddedToStage.forEach(a=>{a&&(this._updateNodeMemory(a.node),this._cacheNodeData(a))});this._nodesAddedToStage.clear();this._treeDebugger&&this._treeDebugger.update();this.loadedGraphics.clear()};
d.removeNode=function(a){if(a=this._removeNodeStageData(a))this._updateNodeMemory(a.node),this._cacheNodeData(a)};d._removeNodeStageData=function(a){const b=this._nodesAddedToStage.get(a);if(!b)return null;this.loadedGraphics.removeMany(b.graphics);this._nodesAddedToStage.delete(a);this._treeDebugger&&this._treeDebugger.update();return b};d.loadCachedNodeData=function(){var a=v._asyncToGenerator(function*(b){return this._memCache.pop(this._getMemCacheKey(b))});return function(b){return a.apply(this,
arguments)}}();d.addCachedNodeData=function(){var a=v._asyncToGenerator(function*(b,c,f,e){if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+b.id+" already added");else return this.loadedGraphics.addMany(c.graphics),this._nodesAddedToStage.set(b.index,c),this._updateNodeMemory(b),yield this.updateAttributes(b.index,f,e),this._filterNode(c),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve()});return function(b,c,f,e){return a.apply(this,arguments)}}();d.getLoadedNodeIds=function(){const a=
[];this._nodesAddedToStage.forEach(b=>a.push(b.node.id));return a.sort()};d.getVisibleNodes=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node));return a};d.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach((b,c)=>a.push(c))};d.getLoadedAttributes=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.loadedAttributes};d.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.attributeData};
d.setAttributeData=function(a,b){(a=this._nodesAddedToStage.get(a))&&!g.isNone(a.attributeInfo)&&(a.attributeInfo.attributeData=b,this._attributeValuesChanged(a))};d.updateAttributes=function(){var a=v._asyncToGenerator(function*(b,c,f){if(b=this._nodesAddedToStage.get(b))yield this._attributeOverrides.apply(b.featureIds,c,f),b.attributeInfo=c,this._attributeValuesChanged(b)});return function(b,c,f){return a.apply(this,arguments)}}();d._attributeValuesChanged=function(a){T(a);this._filterNode(a);
this.graphics3d.graphicsCore.labelsEnabled&&(a=a.graphics.map(b=>b.uid),this.graphics3d.graphicsCore.updateLabelingInfo(a))};d._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};d._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};d._rendererChange=function(){var a=v._asyncToGenerator(function*(b,c){const {layer:{fieldsIndex:f}}=this,e=new Set;let n;b?(yield b.collectRequiredFields(e,f),n=Array.from(e).sort()):n=[];e.clear();
let q;c?(yield c.collectRequiredFields(e,f),q=Array.from(e).sort()):q=[];n.length===q.length&&n.every((l,u)=>n[u]===q[u])||this._reloadAllNodes()});return function(b,c){return a.apply(this,arguments)}}();d._rangeInfosChanged=function(a){null!=a&&0<a.length&&G.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};d._filterChange=function(){this._nodesAddedToStage.forEach(a=>this._filterNode(a))};d._reloadAllNodes=function(){this._removeAllNodeData();
this._controller&&this._controller.restartNodeLoading()};d._filterNode=function(a){const b=this.parsedDefinitionExpression;for(const c of a.graphics)a=c.visible,c.visible=b?this._evaluateClause(b,c):!0,a!==c.visible&&(z.graphic=c,z.property="visible",z.oldValue=a,z.newValue=c.visible,this.graphics3d.graphicsCore.graphicUpdateHandler(z))};d._invalidateElevation=function(a){const b=this._controller.crsIndex;F.projectBoundingRect(a.extent,a.spatialReference,V,b);this._controller.updateElevationChanged(V,
b)};d.createQuery=function(){const a={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return g.isSome(this.filter)?this.filter.createQuery(a):new Q(a)};d.queryFeatures=function(a,b){return this._queryEngine.executeQuery(this._ensureQuery(a),null==b?void 0:b.signal)};d.queryObjectIds=function(a,b){return this._queryEngine.executeQueryForIds(this._ensureQuery(a),null==b?void 0:b.signal)};d.queryFeatureCount=function(a,b){return this._queryEngine.executeQueryForCount(this._ensureQuery(a),
null==b?void 0:b.signal)};d.queryExtent=function(a,b){return this._queryEngine.executeQueryForExtent(this._ensureQuery(a),null==b?void 0:b.signal)};d._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(g.isNone(a)?this.createQuery():Q.from(a))};d.getUsedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return a?a.usedMemory:0};d.getUnloadedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?this._controller.unloadedMemoryEstimate:
0)+(a?a.unprocessedMemoryEstimate:0))};d.ignoresMemoryFactor=function(){return this._controller&&this._controller.fixedFeatureTarget};d._handleEdits=function(a){S.processAttributeEdits(this.attributeEditingContext,a)};v._createClass(x,[{key:"requiredFields",get:function(){var a,b;return null!=(a=null==(b=this.fieldsHelper)?void 0:b.requiredFields)?a:[]}},{key:"maximumNumberOfFeatures",get:function(){const a=this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;
return a?a.maximumNumberOfFeatures:0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return this.suspended?!1:!!this._controller&&!this._controller.leavesReached}},{key:"hasM",get:function(){return!1}},{key:"hasZ",get:function(){return!0}},{key:"symbolUpdateType",get:function(){return this.graphics3d.graphicsCore.symbolUpdateType}},
{key:"updatePolicy",get:function(){return this.graphics3d.graphicsCore.effectiveUpdatePolicy}},{key:"attributeEditingContext",get:function(){const a=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:a,forEachNode:b=>this._nodesAddedToStage.forEach(c=>b(c.node,c.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:b=>this.getAttributeData(b),setAttributeData:(b,
c,f)=>{this.setAttributeData(b,c);b=this._nodesAddedToStage.get(b);g.isSome(f)?(f=this.loadedGraphics.get(f.attributes[a]),g.isSome(f)&&this.graphics3d.graphicsCore.recreateGraphics([f])):g.isSome(b)&&this.graphics3d.graphicsCore.recreateGraphics(b.graphics)},clearMemCache:()=>{}}}},{key:"performanceInfo",get:function(){const a={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.graphics3d.graphicsCore.performanceInfo};
this._controller&&this._controller.updateStats(a);return a}},{key:"test",get:function(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}}]);return x}(ja.DefinitionExpressionSceneLayerView(la.PopupSceneLayerView(h.LayerView3D(qa))));k.__decorate([m.property()],h.prototype,"graphics3d",void 0);k.__decorate([m.property({type:ra})],h.prototype,"filter",void 0);k.__decorate([m.property()],h.prototype,"loadedGraphics",void 0);k.__decorate([m.property({aliasOf:"layer"})],
h.prototype,"i3slayer",void 0);k.__decorate([m.property()],h.prototype,"_controller",void 0);k.__decorate([m.property()],h.prototype,"updating",void 0);k.__decorate([m.property()],h.prototype,"suspended",void 0);k.__decorate([m.property()],h.prototype,"holeFilling",void 0);k.__decorate([m.property(pa.updatingProgress)],h.prototype,"updatingProgress",void 0);k.__decorate([m.property({aliasOf:"_controller.updatingProgress"})],h.prototype,"updatingProgressValue",void 0);k.__decorate([m.property(I.requiredFields)],
h.prototype,"requiredFields",null);k.__decorate([m.property(I.availableFields)],h.prototype,"availableFields",void 0);k.__decorate([m.property()],h.prototype,"fieldsHelper",void 0);k.__decorate([m.property({type:Number})],h.prototype,"maximumNumberOfFeatures",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null);k.__decorate([m.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],h.prototype,"lodFactor",void 0);k.__decorate([m.property({readOnly:!0})],
h.prototype,"hasM",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"hasZ",null);k=h=k.__decorate([Y.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],h);const ta={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},C=O.create(),z={graphic:null,property:null,oldValue:null,newValue:null},V=aa.create();return k});