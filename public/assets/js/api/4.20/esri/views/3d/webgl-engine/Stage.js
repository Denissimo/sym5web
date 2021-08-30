// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/PooledArray ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../state/helpers/SceneIntersectionHelper ./lib/AutoDisposable ./lib/ChangeSet ./lib/GeometryRecord ./lib/WebGLLayer ./parts/Model ./parts/RenderView ../../support/Scheduler".split(" "),
function(d,m,e,t,u,h,v,w,f,E,F,G,H,x,n,p,y,z,q,A,B,C){var k;d.Stage=k=function(r){function l(a){a=r.call(this,a)||this;a._handles=new u;a._model=new A.Model;a._layers=new v;a._changeSet=new y.ChangeSet;a._layerSyncSet=new Set;return a}m._inheritsLoose(l,r);var c=l.prototype;c.initialize=function(){this._set("renderView",new B.RenderView(this));this._frameTask=this.resourceController.scheduler.registerTask(C.TaskPriority.STAGE,this);this._handles.add(this._frameTask)};c.destroy=function(){z.GeometryRecord.pool.prune(0);
this._handles.destroy();this.dispose()};c.add=function(a){this._model.add(a);q.isWebGLLayer(a)&&(a.attachStage(this),this._addLayer(a));this.renderView.setNeedsRender()};c.remove=function(a){h.isNone(a)||(this.renderView.setNeedsRender(),this._model.remove(a),q.isWebGLLayer(a)&&(this._removeLayer(a),a.detachStage()))};c.addMany=function(a){h.isSome(a)&&(this._model.addMany(a),this.renderView.setNeedsRender())};c.removeMany=function(a){h.isSome(a)&&(this._model.removeMany(a),this.renderView.setNeedsRender())};
c.forEachOfType=function(a,b){this._model.forEachOfType(a,b)};c.handleEvent=function(a,b){this.destroyed||(this._model.dirtySet[a](b),this.renderView.setNeedsRender())};c.runTask=function(a){this._frameTask.processQueue(a);a.done||this._commit()};c._commit=function(){const a=this._model.dirtySet;k.DebugSettings.logDirtySet&&console.log("Dirty set: "+a.formatDebugInfo());a.commit(this._changeSet);k.DebugSettings.logDirtySet&&(console.log("RGs add: "+this._changeSet.adds.map(b=>b.id)),console.log("RGs remove: "+
this._changeSet.removes.map(b=>b.id)));this._layerSyncSet.clear();this.renderView.modify(this._changeSet);this.renderView.setNeedsRender()};c.schedule=function(a,b){return this._frameTask.schedule(a,b)};c.syncLayer=function(a){this._layerSyncSet.add(a);this.renderView.setNeedsRender()};c.processSyncLayers=function(){const a=this._model.dirtySet;this._layers.forAll(b=>{if(this._layerSyncSet.has(b.id)||1===b.updatePolicy)a.commitLayer(b.id,this._changeSet),this._layerSyncSet.delete(b.id)});for(const b of this._layerSyncSet)a.commitLayer(b,
this._changeSet);this._layerSyncSet.clear();this.renderView.modify(this._changeSet)};c.getObject=function(a){return this._model.getObject(a)};c._addLayer=function(a){this._layers.some(b=>b===a)||this._layers.push(a)};c._removeLayer=function(a){this._commit();null!=this._layers.removeUnordered(a)&&(this._model.dirtySet.getResidentRenderGeometries(a.id,this._changeSet.removes),this.renderView.modify(this._changeSet))};c.addRenderPlugin=function(a,b,g){a=this.renderView.renderPlugins.add(a,b,g);g=()=>
{n.isIntersectionHandler(b)&&this.sceneIntersectionHelper.addIntersectionHandler(b)};if(w.isPromise(a))return a.then(g);g()};c.removeRenderPlugin=function(a){n.isIntersectionHandler(a)&&this.sceneIntersectionHelper.removeIntersectionHandler(a);this.renderView.renderPlugins.remove(a)};m._createClass(l,[{key:"viewingMode",get:function(){return this.state.viewingMode}},{key:"updating",get:function(){return this._model.dirtySet.dirty||this.renderView.updating}},{key:"running",get:function(){return this._model.dirtySet.dirty}},
{key:"layers",get:function(){return this._layers}},{key:"performanceInfo",get:function(){return{renderView:this.renderView.performanceInfo,model:this._model.getStats()}}},{key:"test",get:function(){const a=this;return{getCount(b){return a._model.test.content.filter(g=>g.type===b).length},stopAnimations(b){return a._model.test.content.filter(g=>3===g.type).forEach(g=>h.applySome(g.animation,D=>D.stopAtTime(b)))},model:a._model}}}]);return l}(p.AutoDisposableMixin(t));d.Stage.DebugSettings={endFrameContentValidation:!1,
logDirtySet:!1};e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"resourceController",void 0);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"options",void 0);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"state",void 0);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"sceneIntersectionHelper",void 0);e.__decorate([f.property({readOnly:!0})],d.Stage.prototype,"viewingMode",null);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,
"container",void 0);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"renderSR",void 0);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"_handles",void 0);e.__decorate([f.property({readOnly:!0})],d.Stage.prototype,"updating",null);e.__decorate([f.property({constructOnly:!0})],d.Stage.prototype,"_model",void 0);e.__decorate([p.autoDispose(),f.property()],d.Stage.prototype,"renderView",void 0);d.Stage=k=e.__decorate([x.subclass("esri.views.3d.webgl-engine.Stage")],d.Stage);
Object.defineProperty(d,"__esModule",{value:!0})});