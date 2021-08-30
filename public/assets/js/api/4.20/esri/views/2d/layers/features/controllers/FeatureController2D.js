// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/HandleOwner ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/QueryEngine ../../../../../layers/support/FieldsIndex ../FeatureStore2D ../sources/createSource ../support/AttributeStore ../support/ClusterStore ../support/ComputedAttributeStorage ../support/FeatureSetReaderJSON ../support/UpdateToken ../../../../support/QueueProcessor".split(" "),
function(h,l,g,x,r,k,v,n,L,M,N,z,A,B,C,D,E,F,G,H,I,J,K){function p(m){if(!k.isAbortError(m)&&"worker:port-closed"!==m.name)throw m;}function y(m){return"feature"===m.type&&"snapshot"===m.mode}g=function(m){function w(){var a=m.apply(this,arguments)||this;a._storage=new H.ComputedAttributeStorage;a._markedIdsBufId=a._storage.createBitset();a._lastCleanup=performance.now();a._cleanupNeeded=!1;a._invalidated=!1;a._tileToResolver=new Map;a._didEdit=!1;a.tileStore=null;a.config=null;a.processor=null;a.remoteClient=
null;a.service=null;return a}h._inheritsLoose(w,m);var c=w.prototype;c.initialize=function(){this._initAttributeStore();this._initStores();this._initQueryEngine();this._initSource();this._updateQueue=new K.QueueProcessor({concurrency:"geoevent"===this._source.type?1:4,process:(a,b)=>this._onTileMessage(a,{signal:b})});this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this)),this.watch("updating",a=>!a&&this.onIdle())]);this._checkUpdating=setInterval(()=>this.notifyChange("updating"),
300)};c.startup=function(){var a=h._asyncToGenerator(function*(){this._initAttributeStore();this.tileStore.tiles.forEach(b=>this._source.subscribe(b))});return function(){return a.apply(this,arguments)}}();c._initSource=function(){this._source=E.createSource(this.service,this.spatialReference,this.tileStore.tileScheme,(a,b)=>{this._invalidated=!0;return this._patchTile(a,b)},()=>50>this._updateQueue.length,this.featureStore);this._proxyEvents()};c._proxyEvents=function(){if("geoevent"===this._source.type){const a=
this._source.events;this.handles.add([a.on("connectionStatus",b=>this.remoteClient.invoke("setProperty",{propertyName:"connectionStatus",value:b}).catch(p)),a.on("errorString",b=>this.remoteClient.invoke("setProperty",{propertyName:"errorString",value:b}).catch(p)),a.on("feature",b=>this.remoteClient.invoke("emitEvent",{name:"data-received",event:{attributes:b.attributes,centroid:b.centroid,geometry:b.geometry}}).catch(p)),a.on("updateRate",b=>this.remoteClient.invoke("emitEvent",{name:"update-rate",
event:{...b}}).catch(p))])}};c._initAttributeStore=function(){this.attributeStore?this.attributeStore.invalidateResources():this.attributeStore=new F["default"]({type:"remote",initialize:(a,b)=>k.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize",a,{signal:b}).catch(p)),update:(a,b)=>k.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate",a,{signal:b}).catch(p)),render:a=>k.ignoreAbortErrors(this.remoteClient.invoke("tileRenderer.featuresView.requestRender",
void 0,{signal:a}).catch(p))},this.config)};c._initStores=function(){const a={geometryInfo:{geometryType:this.service.geometryType,hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields};this.featureStore=new D.FeatureStore2D(a,this._storage,"snapshot"===this.service.type?"snapshot":"on-demand");this.aggregateStore=new G.ClusterStore(a,this.spatialReference,this._storage);this.handles.add(this.aggregateStore.events.on("valueRangesChanged",b=>
{this.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:b.valueRanges}}).catch(p)}))};c._initQueryEngine=function(){var a;const b=this;null==(a=this.queryEngine)?void 0:a.destroy();this.queryEngine=new B["default"]({definitionExpression:this.config.definitionExpression,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,featureStore:this.featureStore,
aggregateAdapter:{getFeatureObjectIds(d){return b.aggregateStore.getFeatureDisplayIdsForAggregate(d).map(e=>b.getObjectId(e))}},timeInfo:this.service.timeInfo})};c.destroy=function(){this._updateQueue.destroy();this._source.destroy();this.queryEngine.destroy();this.attributeStore&&this.attributeStore.destroy();clearInterval(this._checkUpdating)};c.isUpdating=function(){return this._source.updating||!!this._updateQueue.length};c.enableEvent=function(a){this._source.enableEvent(a.name,a.value)};c.pause=
function(){this._updateQueue.pause();this._updateQueue.clear()};c.update=function(){var a=h._asyncToGenerator(function*(b,d){this._set("config",d);this._schema=d.schema;this._initQueryEngine();yield Promise.all([this._source.update(b,d.schema.source),this.featureStore.updateSchema(b,d.schema.targets.feature),this.attributeStore.update(b,d),this.attributeStore.updateFilters(b,this)]);yield this.aggregateStore.updateSchema(b,d.schema.targets.aggregate);x("esri-2d-update-debug")&&b.describe()});return function(b,
d){return a.apply(this,arguments)}}();c.applyUpdate=function(){var a=h._asyncToGenerator(function*(b){b.mesh&&this.clearTiles();this._updateQueue.resume();yield this._source.applyUpdate(b);this.notifyChange("updating");yield v.whenFalseOnce(this,"updating",!0);this.hasAggregates&&(yield k.after(10),yield v.whenFalseOnce(this,"updating",!0))});return function(b){return a.apply(this,arguments)}}();c.onEdits=function(){var a=h._asyncToGenerator(function*({edits:b}){x("esri-2d-update-debug")&&console.debug("Applying Edit:",
b);this._didEdit=!0;try{const d=b.removed.map(f=>f.objectId&&-1!==f.objectId?f.objectId:this._lookupObjectIdByGlobalId(f.globalId)),e=b.addOrModified.map(({objectId:f})=>f);this.featureStore.invalidate();yield this._source.edit(e,d);this.clearTiles();this.notifyChange("updating");yield this._source.resend();yield v.whenFalseOnce(this,"updating",!0)}catch(d){}});return function(b){return a.apply(this,arguments)}}();c.refresh=function(){var a=h._asyncToGenerator(function*(){this.featureStore.invalidate();
this.clearTiles();this._source.refresh();this._cleanupNeeded=!0;this.notifyChange("updating");yield v.whenFalseOnce(this,"updating",!0)});return function(){return a.apply(this,arguments)}}();c.clearTiles=function(){for(const a of this.tileStore.tiles)this.processor.onTileClear(a)};c.onTileUpdate=function(a){this.aggregateStore.onTileUpdate(a);for(const b of a.added)this._source.subscribe(b),this._level=b.level;for(const b of a.removed)this._source.unsubscribe(b),this._cleanupNeeded=!0,this._tileToResolver.has(b.id)&&
(this._tileToResolver.get(b.id).resolve(),this._tileToResolver.delete(b.id));this.notifyChange("updating")};c.onIdle=function(){this._invalidated&&((this.hasAggregates||"heatmap"===this.processor.type)&&this._repushCurrentLevelTiles(),this._invalidated=!1);this._markAndSweep()};c.querySummaryStatistics=function(){var a=h._asyncToGenerator(function*({query:b,params:d}){return this.queryEngine.executeQueryForSummaryStatistics(b,d)});return function(b){return a.apply(this,arguments)}}();c.queryExtent=
function(a){return this.queryEngine.executeQueryForExtent(a)};c.queryFeatures=function(a){return this.queryEngine.executeQuery(a)};c.queryFeatureCount=function(a){return this.queryEngine.executeQueryForCount(a)};c.queryLatestObservations=function(a){return this.queryEngine.executeQueryForLatestObservations(a)};c.queryObjectIds=function(a){return this.queryEngine.executeQueryForIds(a)};c.queryStatistics=function(){var a=h._asyncToGenerator(function*(){return{...this.featureStore.storeStatistics,displayedFeatureCount:0,
displayedVertexCount:0,displayPreProcessTime:0}});return function(){return a.apply(this,arguments)}}();c.getObjectId=function(a){return this.featureStore.lookupObjectId(a,this._storage)};c.getDisplayId=function(a){if(this._schema.targets.aggregate){const b=this.aggregateStore.getDisplayId(a);return r.isNone(b)?(a=this.featureStore.lookupDisplayId(a),this.aggregateStore.getDisplayIdForReferenceId(a)):b}return this.featureStore.lookupDisplayId(a)};c.getFeature=function(a){a=this.featureStore.lookupFeatureByDisplayId(a,
this._storage);if(r.isNone(a))return null;var b=a.readHydratedGeometry();b=A.convertToGeometry(b,a.geometryType,a.hasZ,a.hasM);return{attributes:a.readAttributes(),geometry:b}};c.getAggregate=function(a){return this.aggregateStore.getAggregate(a)};c.setHighlight=function(){var a=h._asyncToGenerator(function*(b){const d=b.map(e=>this.getDisplayId(e));return this.attributeStore.setHighlight(b,d)});return function(b){return a.apply(this,arguments)}}();c._lookupObjectIdByGlobalId=function(a){const b=
this.service.globalIdField;if(r.isNone(b))throw Error("Expected globalIdField to be defined");let d=null;this.featureStore.forEach(e=>{a===e.readAttribute(b)&&(d=e.getObjectId())});if(r.isNone(d))throw Error(`Expected to find a feature with globalId ${a}`);return d};c._repushCurrentLevelTiles=function(){const a=this.tileStore.tiles.filter(b=>b.level===this._level);for(const b of a)this._patchTile({type:"append",id:b.key.id,addOrUpdate:I.FeatureSetReaderJSON.fromOptimizedFeatures([],this.service.geometryType),
remove:[],end:!0,status:J.UpdateToken.empty()})};c._maybeForceCleanup=function(){5E3<performance.now()-this._lastCleanup&&this._markAndSweep()};c._patchTile=function(a,b){a=this._updateQueue.push(a,b).then(()=>{this.notifyChange("updating")}).catch(d=>{this.notifyChange("updating")});this.notifyChange("updating");return a};c._onTileMessage=function(){var a=h._asyncToGenerator(function*(b,d){k.throwIfAborted(d);const e=this.tileStore.get(b.id);if(e){if(b.clear)return this.processor.onTileClear(e);
var f=b.status;this._cleanupNeeded=!0;var q=[];for(const t of b.remove){const u=this.featureStore.lookupDisplayId(t);u&&q.push(u)}b.remove=q;try{if(r.isNone(b.addOrUpdate))this.processor.onTileMessage(e,{...b,addOrUpdate:null},this.hasAggregates,d).catch(k.throwIfNotAbortError);else{b.addOrUpdate.setArcadeSpatialReference(this.spatialReference);this.featureStore.hasInstance(b.addOrUpdate.instance)&&f.targets.feature||(f.targets.feature=!0,this.featureStore.onTileData(e,b));f.storage.data&&f.storage.filters||
(f.storage.data=!0,f.storage.filters=!0,this.attributeStore.onTileData(e,b),"geoevent"===this._source.type||this._didEdit?(yield this.attributeStore.sendUpdates(),k.throwIfAborted(d)):this.attributeStore.sendUpdates());if(this.hasAggregates&&!f.targets.aggregate){f.targets.aggregate=!0;const t=y(this._source)&&this._source.loading,u=!y(this._source)||t||b.end;this.aggregateStore.onTileData(e,b,this._storage,this.attributeStore,u);if(!u)return;f.mesh||(this.attributeStore.onTileData(e,b),yield this.attributeStore.sendUpdates(),
this.processor.onTileClear(e))}f.mesh||(f.mesh=!0,yield this.processor.onTileMessage(e,b,this.hasAggregates,d),k.throwIfAborted(d));this._maybeForceCleanup()}}catch(t){k.throwIfNotAbortError(t)}}});return function(b,d){return a.apply(this,arguments)}}();c._mark=function(a,b,d){const e=this._storage.getInstanceId(a);a&&(b.add((4294901760&e)>>>16),d.set(a))};c._markAndSweep=function(){this._lastCleanup=performance.now();if(!("feature"===this._source.type&&"snapshot"===this._source.mode||"geoevent"!==
this._source.type&&!this._cleanupNeeded)){this._cleanupNeeded=!1;var a=this._storage.getBitset(this._markedIdsBufId),b=new Set;a.clear();for(const e of this.tileStore.tiles)for(const f of this._source.readers(e.id)){const q=f.getCursor();for(;q.next();){var d=q.getDisplayId();d||(d=q.getObjectId(),d=this.featureStore.lookupDisplayId(d));this._mark(d,b,a)}}this._updateQueue.forEach(e=>{for(const f of e.remove)e=this.featureStore.lookupDisplayId(f),this._mark(e,b,a)});this.config.schema.targets.aggregate&&
(this.aggregateStore.sweepFeatures(a,this.featureStore),this.aggregateStore.sweepClusters(this._storage,this.attributeStore,this._level));this.featureStore.sweepFeatures(a,this._storage,this.attributeStore);this.featureStore.sweepFeatureSets(b)}};h._createClass(w,[{key:"fieldsIndex",get:function(){return new C(this.service.fields)}},{key:"hasAggregates",get:function(){return!!this.config.schema.targets.aggregate}},{key:"spatialReference",get:function(){return this.tileStore.tileScheme.spatialReference}},
{key:"updating",get:function(){return this.isUpdating()}}]);return w}(g.HandleOwner);l.__decorate([n.property({constructOnly:!0})],g.prototype,"tileStore",void 0);l.__decorate([n.property()],g.prototype,"config",void 0);l.__decorate([n.property({readOnly:!0})],g.prototype,"fieldsIndex",null);l.__decorate([n.property()],g.prototype,"processor",void 0);l.__decorate([n.property({constructOnly:!0})],g.prototype,"remoteClient",void 0);l.__decorate([n.property({constructOnly:!0})],g.prototype,"service",
void 0);l.__decorate([n.property()],g.prototype,"spatialReference",null);l.__decorate([n.property()],g.prototype,"updating",null);return g=l.__decorate([z.subclass("esri.views.2d.layers.features.controllers.FeatureController2D")],g)});