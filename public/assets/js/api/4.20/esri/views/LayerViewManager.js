// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/CollectionFlattener ../core/Error ../core/HandleOwner ../core/Logger ../core/MapUtils ../core/maybe ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/jsonMap ../core/accessorSupport/decorators/subclass ./support/WatchUpdatingTracking".split(" "),function(t,m,y,u,l,z,A,v,p,B,x,n,G,H,I,C,D){const E=z.getLogger("esri.views.LayerViewManager");
let F=function(){function r(h,b,a){this.layer=h;this.view=b;this.layerViewImporter=a;this._controller=p.createAbortController();this._deferred=p.createDeferred();this.done=this._started=!1;p.onAbort(this._controller.signal,()=>{const c=new u("cancelled:layerview-create","layerview creation cancelled",{layer:h});this._deferred.reject(c)})}var q=r.prototype;q.destroy=function(){this._controller.abort();const {layerView:h}=this;if(h){var {layer:b,view:a}=this;b.emit("layerview-destroy",{view:a,layerView:h});
a.emit("layerview-destroy",{layer:b,layerView:h});this.done=!0;this.layerViewImporter=this.view=this.layerView=this.layer=null}};q.start=function(){var h=t._asyncToGenerator(function*(){if(!this._started){this._started=!0;var {_controller:{signal:b},layer:a,view:c}=this;this._map=c.map;try{var g,k;yield a.load({signal:b});"prefetchResources"in a&&(yield a.prefetchResources({signal:b}));let d;if(a.createLayerView)d=yield a.createLayerView(c,{signal:b});else{if(!this.layerViewImporter.hasLayerViewModule(a))throw new u("layer:view-not-supported",
"No layerview implementation was found");var f=yield this.layerViewImporter.importLayerView(a);p.throwIfAborted(b);d="default"in f?new f.default({layer:a,view:c}):new f({layer:a,view:c})}let e;f=()=>{e=v.removeMaybe(e);d.destroyed||d.destroy();d.layer=null;d.parent=null;d.view=null;this.done=!0};e=p.onAbort(b,f);p.throwIfAborted(b);try{yield d.when()}catch(w){throw f(),w;}(null==(g=this._map)?0:null==(k=g.allLayers)?0:k.includes(a))?(this.layerView=d,a.emit("layerview-create",{view:c,layerView:d}),
c.emit("layerview-create",{layer:a,layerView:d}),this.done=!0,this._deferred.resolve(d)):(f(),this._deferred.reject(new u("view:no-layerview-for-layer","The layer has been removed from the map",{layer:a})))}catch(d){a.emit("layerview-create-error",{view:c,error:d}),c.emit("layerview-create-error",{layer:a,error:d}),this.done=!0,this._deferred.reject(new u("layerview:create-error","layerview creation failed",{layer:a,error:d}))}}});return function(){return h.apply(this,arguments)}}();t._createClass(r,
[{key:"promise",get:function(){return this._deferred.promise}}]);return r}();l=function(r){function q(b){var a=r.call(this,b)||this;a._layerLayerViewInfoMap=new Map;a._watchUpdatingTracking=new D.WatchUpdatingTracking;a.supportsGround=!0;a._preloadLayerViewModules=()=>{var c;const g=null==(c=a.view.map)?void 0:c.allLayers;if(g)for(const k of g)a.layerViewImporter.hasLayerViewModule(k)&&a.layerViewImporter.importLayerView(k)};a._reschedule=()=>{v.isNone(a._workPromise)&&(a._workPromise=p.createDeferred());
a.handles.remove("reschedule");a.handles.add(B.schedule(a._doWork),"reschedule");return a._workPromise.promise};a._doWork=()=>{var c,g,k,f=a.view.map;a._map!==f&&(a.clear(),a._map=f);if(v.isNone(a._workPromise))a.notifyChange("updating");else{a.handles.remove("reschedule");a.handles.remove("collection-change");var d=new y({getCollections:()=>a._rootCollectionNames.map(e=>a.get(e)),getChildrenFunction:e=>e&&"layers"in e?e.layers:null});for(const e of d)a._createLayerView(e);a._refreshCollections();
for(const [e,w]of a._layerLayerViewInfoMap)d.includes(e)||(a._layerLayerViewInfoMap.delete(w.layer),w.destroy());d=d.filter(e=>"group"===e.type).map(e=>e.layers);f=[null==f?void 0:null==(c=f.ground)?void 0:c.layers,null==f?void 0:null==(g=f.basemap)?void 0:g.baseLayers,null==f?void 0:null==(k=f.basemap)?void 0:k.referenceLayers,null==f?void 0:f.layers,...d].filter(e=>!!e);a.handles.add(f.map(e=>a._watchUpdatingTracking.addOnCollectionChange(e,a._reschedule)),"collection-change");a._workPromise.resolve();
a._workPromise=null}};return a}t._inheritsLoose(q,r);var h=q.prototype;h.initialize=function(){this.handles.add([x.on(this,"view.map.allLayers","change",this._preloadLayerViewModules,this._preloadLayerViewModules),x.init(this.view,["map.basemap","map.ground","map.layers","ready"],this._reschedule,!0)]);this._preloadLayerViewModules();this._reschedule()};h.destroy=function(){this.clear();this._watchUpdatingTracking.destroy();this._map=null};h.clear=function(){if(!this.destroyed){for(const b of this._layerLayerViewInfoMap.values())b.destroy();
this._layerLayerViewInfoMap.clear();this._refreshCollections()}};h.whenLayerView=function(){var b=t._asyncToGenerator(function*(a){yield this._reschedule();if(!this._layerLayerViewInfoMap.has(a))throw new u("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:a});return this._layerLayerViewInfoMap.get(a).promise});return function(a){return b.apply(this,arguments)}}();h._refreshCollections=function(){for(const [b,a]of this._layersToLayerViews)this._populateLayerViewsOwners(this.get(b),
this.get(a),this.view);this.notifyChange("updating");this.notifyChange("updatingRemaining")};h._populateLayerViewsOwners=function(b,a,c){if(b&&a){var g=0;for(const k of b)(b=this._layerLayerViewInfoMap.get(k))&&b.layerView&&(b=b.layerView,b.layer=k,b.parent=c,a.getItemAt(g)!==b&&a.splice(g,0,b),k.layers&&this._populateLayerViewsOwners(k.layers,b.layerViews,b),g+=1);g<a.length&&a.splice(g,a.length)}else a&&a.removeAll()};h._createLayerView=function(b){if(this._layerLayerViewInfoMap.has(b))this.view.ready&&
this._layerLayerViewInfoMap.get(b).start();else{b.load().catch(()=>{});this.layerViewImporter.hasLayerViewModule(b)&&this.layerViewImporter.importLayerView(b);var a=new F(b,this.view,this.layerViewImporter);a.promise.then(()=>this._refreshCollections(),c=>{if(!c||!p.isAbortError(c)&&"cancelled:layerview-create"!==c.name){var g,k;E.error(`Failed to create layerview for layer title:'${null!=(g=b.title)?g:"no title"}', id:'${null!=(k=b.id)?k:"no id"}' of type '${b.type}'.`,{layer:b,error:c})}this._refreshCollections()});
this._layerLayerViewInfoMap.set(b,a);this.view.ready&&a.start()}this.notifyChange("updating");this.notifyChange("updatingRemaining")};t._createClass(q,[{key:"_layersToLayerViews",get:function(){const b=[["view.map.basemap.baseLayers","view.basemapView.baseLayerViews"],["view.map.layers","view.layerViews"],["view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"]];this.supportsGround&&b.push(["view.map.ground.layers","view.groundView.layerViews"]);return new Map(b)}},{key:"_rootCollectionNames",
get:function(){return Array.from(this._layersToLayerViews.keys())}},{key:"updating",get:function(){return v.isSome(this._workPromise)||this._watchUpdatingTracking.updating||A.someMap(this._layerLayerViewInfoMap,b=>!b.done)}},{key:"updatingRemaining",get:function(){let b=0;for(const a of this._layerLayerViewInfoMap.values())a.done||++b;return b}}]);return q}(l.HandleOwner);m.__decorate([n.property()],l.prototype,"_workPromise",void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"_watchUpdatingTracking",
void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"_layersToLayerViews",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"_rootCollectionNames",null);m.__decorate([n.property()],l.prototype,"layerViewImporter",void 0);m.__decorate([n.property()],l.prototype,"supportsGround",void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"updating",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"updatingRemaining",null);m.__decorate([n.property({constructOnly:!0})],l.prototype,
"view",void 0);return l=m.__decorate([C.subclass("esri.views.LayerViewManager")],l)});