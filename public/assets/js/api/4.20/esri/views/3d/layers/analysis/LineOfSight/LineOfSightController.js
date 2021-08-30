// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../geometry ../../../../../core/Accessor ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/accessorSupport/trackingUtils ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/ray ./LineOfSightAnalysis ./LineOfSightResult ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/intersectorUtilsConversions ../../../../support/Scheduler ../../../../../geometry/Point".split(" "),
function(h,C,n,T,L,G,u,k,H,p,U,V,W,X,M,r,d,w,I,N,O,P,Q,x,R){h.LineOfSightController=function(J){function z(a){a=J.call(this,a)||this;a._tasks=x.ImmediateTask;a._handles=new G;a._analysisHandles=new G;return a}C._inheritsLoose(z,J);var e=z.prototype;e.initialize=function(){var a;const b=null==(a=this.view.resourceController)?void 0:a.scheduler;b&&(this._tasks=b.registerTask(x.TaskPriority.LINE_OF_SIGHT_TOOL));this._handles.add([r.reactionInit(()=>this.layer.observer,c=>this._onObserverChange(c)),this._connectAnalyses(),
this._connectTargets()]);this._intersector=new P.Intersector(this.view.state.viewingMode);this._intersector.options.hud=!1;this._intersector.options.store=0};e.destroy=function(){this._handles.destroy();this._analysisHandles.destroy();this._analyses.removeAll()};e.getLineOfSightComputationDependencies=function(a){({inputPoints:a}=a);return{inputPoints:a}};e.computeAnalysis=function(a,b=!1){const {analysis:c}=a,{inputPoints:f,computationResult:m}=c,{observerAdjusted:l,targetAdjusted:g}=f,{start:t,
end:q}=m;d.copy(t,l);d.copy(q,g);b||this._canComputeAnalysis(c)?this._computeAnalysisIntersection(a):this._interpolateAnalysisIntersection(a);c.updateComputationResults()};e._adjustStartEndPositions=function(a){var b=this._screenPixelSize;const c=this.view;({inputPoints:a}=a);const {observer:f,target:m,observerAdjusted:l,targetAdjusted:g}=a;a=D;d.subtract(a,m,f);d.normalize(a,a);d.scale(a,a,Math.min(b,1));d.add(l,f,a);d.subtract(a,f,m);b=c.state.camera.computeScreenPixelSizeAt(m);d.normalize(a,a);
d.scale(a,a,Math.min(b,1));d.add(g,m,a)};e._computeAnalysisIntersection=function({analysis:a,interpolationInfo:b}){const {view:c}=this,{sceneIntersectionHelper:f,renderCoordsHelper:m}=c;if(!k.isNone(f)){var l=this._intersector,{computationResult:g,inputPoints:t}=a,{observer:q,target:v}=t,{start:E,end:F}=g,A=I.fromPoints(E,F,S);f.intersectToolIntersectorRay(A,l);var B=g.intersection,K=D;A=l.results.min?l.results.min.getIntersectionPoint(B):!1;var y=!0;A&&(d.copy(b.originalIntersection,B),d.copy(b.originalObserver,
E),d.copy(b.originalTarget,F),m.fromRenderCoords(B,K,c.spatialReference),b=1-d.dist(F,v)/d.dist(E,v),y=d.dist(q,B)>=b*d.dist(q,v));b=new R(K,c.spatialReference);a.result=new O.LineOfSightResult({target:a.target,intersectedGraphic:y?null:Q.toGraphic(l.results.min,c),intersectedLocation:y?null:b,visible:A?y:!1});g.isValid=t.isValid=!0;g.isTargetVisible=y}};e._interpolateAnalysisIntersection=function({analysis:a,interpolationInfo:b}){const {computationResult:c,inputPoints:f}=a,{start:m,end:l,intersection:g}=
c,{originalIntersection:t,originalObserver:q,originalTarget:v}=b;d.copy(g,t);f.isValid?(a=D,b=d.dist(q,t)/d.dist(q,v),d.sub(a,m,q),d.scale(a,a,1-b),d.add(g,g,a),d.sub(a,l,v),d.scale(a,a,b),d.add(g,g,a),c.isValid=!0):(a.result=null,c.isValid=!1,c.isTargetVisible=!1)};e._canComputeAnalysis=function(a){var b=this.view.frustum;if(k.isNone(this.layer.observer)||k.isNone(a.target)||k.isNone(b))return!1;const {observerAdjusted:c,targetAdjusted:f}=a.inputPoints;a=b.intersectsPoint(c);b=b.intersectsPoint(f);
return a&&b};e._onObserverChange=function(a){if(k.isNone(a))this.layer.targets.removeAll();else{var b=w.create();this.view.renderCoordsHelper.toRenderCoords(a,b);this._observerEngineLocation=b;this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE}};e._onObserverChangeForAnalysis=function(a){a.inputPoints.isValid=!1};e._onObserverEngineForAnalysis=function(a,b){const {inputPoints:c}=a;d.copy(c.observer,b);this._adjustStartEndPositions(a);a.updateInputPoints();this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE};
e._onTargetLocationChange=function(a,b){const {inputPoints:c}=a;c.isValid=!1;this.view.renderCoordsHelper.toRenderCoords(b,c.target);this._adjustStartEndPositions(a);a.updateInputPoints();this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE};e._connectAnalysisToTarget=function(a){return r.reactionInit(()=>({analysis:a,target:a.target}),({analysis:b,target:c})=>{k.isSome(c)&&this._onTargetLocationChange(b,c)})};e._connectAnalysisToObserver=function(a){return r.reactionInit(()=>({analysis:a,
observer:this.layer.observer}),({analysis:b})=>{this._onObserverChangeForAnalysis(b)})};e._connectAnalysisToObserverEngine=function(a){return r.reactionInit(()=>({analysis:a,observer:this._observerEngineLocation}),({analysis:b,observer:c})=>{this._onObserverEngineForAnalysis(b,c)})};e._connectAnalysisForCompute=function(a){var b=this;let c=k.none;const f={analysis:a,interpolationInfo:{originalIntersection:w.create(),originalObserver:w.create(),originalTarget:w.create()}};return u.handlesGroup([r.reactionInit(()=>
this.getLineOfSightComputationDependencies(a),()=>{c=k.abortMaybe(c);c=H.createTask(function(){var m=C._asyncToGenerator(function*(l){yield H.ignoreAbortErrors(b._tasks.schedule(()=>b.computeAnalysis(f),l))});return function(l){return m.apply(this,arguments)}}())}),u.makeHandle(()=>c=k.abortMaybe(c))])};e._connectAnalysis=function(a){const b=this._analysisHandles;b.has(a)||b.add([this._connectAnalysisToTarget(a),this._connectAnalysisToObserver(a),this._connectAnalysisToObserverEngine(a),this._connectAnalysisForCompute(a)])};
e._disconnectAnalysis=function(a){this._analysisHandles.remove(a)};e._onAnalysesCollectionChange=function(a){a.added.forEach(b=>this._connectAnalysis(b));a.removed.forEach(b=>this._disconnectAnalysis(b))};e._onTargetsChange=function(a){this._analyses.removeAll();0<a.items.length&&a.forEach(b=>this._addTarget(b));return a.on("change",b=>this._onTargetCollectionChange(b))};e._onTargetCollectionChange=function(a){a.added.forEach(b=>this._addTarget(b));a.removed.forEach(b=>this._removeTarget(b))};e._addTarget=
function(a){const b=this._analyses;b.some(c=>c.target===a)||b.add(new N.LineOfSightAnalysis({target:a}))};e._removeTarget=function(a){const b=this._analyses,c=b.find(f=>f.target===a);b.remove(c)};e._connectAnalyses=function(){let a=null;return u.handlesGroup([r.reactionInit(()=>this._analyses,b=>{a=k.removeMaybe(a);a=b.on("change",c=>this._onAnalysesCollectionChange(c));b.forEach(c=>this._connectAnalysis(c))}),u.makeHandle(()=>a=k.removeMaybe(a))])};e._connectTargets=function(){let a=null;return u.handlesGroup([r.reactionInit(()=>
this.layer.targets,b=>{a=k.removeMaybe(a);a=this._onTargetsChange(b)}),u.makeHandle(()=>a=k.removeMaybe(a))])};C._createClass(z,[{key:"updating",get:function(){return this._tasks.updating}},{key:"priority",get:function(){return this._tasks.priority},set:function(a){this._tasks.priority=a}},{key:"_analyses",get:function(){return this.layerViewData.analyses}},{key:"_observerEngineLocation",get:function(){return this.layerViewData.observerEngineLocation},set:function(a){this.layerViewData.observerEngineLocation=
a}},{key:"_screenPixelSize",get:function(){return this.view.state.camera.computeScreenPixelSizeAt(this._observerEngineLocation)}}]);return z}(L);n.__decorate([p.property({constructOnly:!0})],h.LineOfSightController.prototype,"layer",void 0);n.__decorate([p.property({constructOnly:!0})],h.LineOfSightController.prototype,"layerViewData",void 0);n.__decorate([p.property({constructOnly:!0})],h.LineOfSightController.prototype,"view",void 0);n.__decorate([p.property()],h.LineOfSightController.prototype,
"updating",null);n.__decorate([p.property()],h.LineOfSightController.prototype,"priority",null);n.__decorate([p.property()],h.LineOfSightController.prototype,"_analyses",null);n.__decorate([p.property()],h.LineOfSightController.prototype,"_observerEngineLocation",null);n.__decorate([p.property()],h.LineOfSightController.prototype,"_screenPixelSize",null);n.__decorate([p.property()],h.LineOfSightController.prototype,"_tasks",void 0);h.LineOfSightController=n.__decorate([M.subclass("esri.views.3d.layers.analysis.LineOfSight.LineOfSightController")],
h.LineOfSightController);const D=w.create(),S=I.create();Object.defineProperty(h,"__esModule",{value:!0})});