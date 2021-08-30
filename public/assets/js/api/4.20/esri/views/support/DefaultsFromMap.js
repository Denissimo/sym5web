// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/arrayUtils ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../geometry/support/heightModelInfoUtils ../../geometry/support/webMercatorUtils".split(" "),function(w,n,g,f,x,y,z,A,r,k,E,F,G,B,
t,u){function p(l){return l?JSON.stringify(l.toJSON()):"undefined"}function v(l){switch(l){case 0:return"Waiting";case 1:return"Found";case 2:return"Exhausted"}}var q;const C=z.getLogger("esri.views.support.DefaultsFromMap");f=q=function(l){function m(){var a=l.apply(this,arguments)||this;a._handles=new y;a._waitTask=null;a._extentProjectController=null;a._spatialReferenceCandidates=null;a._extentCandidates=null;a.logDebugInformation=!1;a.isSpatialReferenceDone=!1;a.isTileInfoDone=!1;a.isHeightModelInfoSearching=
!1;a.spatialReference=null;a.extent=null;a.heightModelInfo=null;a.vcsWkid=null;a.latestVcsWkid=null;a.mapCollectionPaths=q.DefaultMapCollectionPaths.slice();a.tileInfo=null;return a}n._inheritsLoose(m,l);var e=m.prototype;e.initialize=function(){this.watch("mapCollectionPaths",()=>{this._running&&(this.reset(),this.start())})};e.destroy=function(){this._set("view",null);this._handles&&(this._handles.destroy(),this._handles=null);this._cancelLoading()};e.reset=function(){this._handles.removeAll();
this._set("isSpatialReferenceDone",!1);this._set("isTileInfoDone",!1);this._set("isHeightModelInfoSearching",!1);this._set("spatialReference",null);this._set("extent",null);this._set("heightModelInfo",null);this._set("vcsWkid",null);this._set("latestVcsWkid",null);this._set("tileInfo",null);this._extentCandidates=this._spatialReferenceCandidates=null};e.start=function(){this._handles.removeAll();const a=this._updateLayerChange.bind(this);for(const b of this.mapCollectionPaths)this._handles.add(r.on(this.view,
`map.${b}`,"change",a,a,a,!0));this._handles.add(r.when(this,"isSpatialReferenceDone",()=>this._updateTileInfo(),!0))};e._ownerNameFromCollectionName=function(a){const b=a.lastIndexOf(".");return-1===b?"view":"view."+a.slice(0,b)};e._ensureLoadedOwnersFromCollectionName=function(a){const b=this._ownerNameFromCollectionName(a).split(".");let c;for(let d=0;d<b.length;d++){c=this.get(b.slice(0,d+1).join("."));if(!c)break;if(c.load&&!c.isFulfilled())return{collectionName:a,owner:null,loading:c.load().catch(()=>
{})}}return{collectionName:a,owner:c}};e._cancelLoading=function(){this._waitTask=null;this._extentProjectController&&(this._extentProjectController.abort(),this._extentProjectController=null)};e._updateWhen=function(a){let b=!0,c=!1;const d=a.catch(()=>{}).then(()=>{b?c=!0:d===this._waitTask&&this._update()});b=!1;c||(this._waitTask=d);return c};e._updateLayerChange=function(){this.isSpatialReferenceDone&&!this.spatialReference&&this._set("isSpatialReferenceDone",!1);this._update()};e._update=function(){this._cancelLoading();
if(this.view){if(!this.isSpatialReferenceDone){this._debugLog("Starting search for spatial reference...");var a=this._processMapCollections(b=>this._processSpatialReferenceSource(b));this._debugLog(`Search ended with status '${v(a)}'`);if(0!==a){let b=null;a=this._spatialReferenceCandidates;!a||1>a.length?(b=this.defaultSpatialReference,this._debugLog(`No spatial reference found, locking to default (${p(b)})`)):(this.defaultSpatialReference&&1<a.length&&-1<a.findIndex(c=>c.equals(this.defaultSpatialReference))&&
(a=[this.defaultSpatialReference]),b=a[0],this._debugLog(`Locking to ${p(b)}`));this._set("spatialReference",b);b?this.extent?this._set("isSpatialReferenceDone",!0):(a=this.logDebugInformation,this.logDebugInformation=!1,this._processMapCollections(c=>this._findExtent(c,b)),this.logDebugInformation=a,this._projectExtentCandidate().catch(()=>{}).then(()=>this._set("isSpatialReferenceDone",!0))):this._set("isSpatialReferenceDone",!0)}}null==this.heightModelInfo&&this.view.isHeightModelInfoRequired&&
(this._debugLog("Starting search for height model info..."),a=this._processMapCollections(b=>this._processHeightModelInfoSource(b),b=>t.mayHaveHeightModelInfo(b)),this._debugLog(`Search ended with status ${v(a)}`),this._set("isHeightModelInfoSearching",0===a));this._updateTileInfo()}};e._processMapCollections=function(a,b){this._preloadMapCollections(b);let c=2;this._forAllMapCollectionSources(d=>{if(2!==c)return!1;const {collectionName:h}=d;this._debugLog(`Processing collection ${h}...`);return d.loading&&
!this._updateWhen(d.loading)?(this._debugLog(`Collection ${d.collectionName} owner is loading -> wait`),c=0,!1):!0},d=>2!==c?!1:null==b||b(d)?!d.load||d.isFulfilled()||this._updateWhen(d.load())?d.load&&!d.isResolved()||!a(d)?!0:(c=1,!1):(this._debugLog(`Source ${d.id} is loading -> wait`),c=0,!1):(this._debugLog(`Source ${d.id} is skipped due to predicate`),!1));return c};e._preloadMapCollections=function(a){let b=10;const c=this.logDebugInformation;this.logDebugInformation=!1;this._forAllMapCollectionSources(()=>
!0,d=>{if(0===b||null!=a&&!a(d))return!1;d.load&&!d.isFulfilled()&&(this.logDebugInformation=c,this._debugLog(`Pre-loading source ${d.id}`),this.logDebugInformation=!1,d.load().catch(()=>{}),b--);return!0});this.logDebugInformation=c};e._forAllMapCollectionSources=function(a,b){for(const d of this.mapCollectionPaths){const h=`map.${d}`;var c=this._ensureLoadedOwnersFromCollectionName(h);!1!==a(c)&&(c=c.owner,!c||c.isRejected&&c.isRejected()?this._debugLog(`Collection ${h} owner is invalid or rejected -> skip`):
(c=this.view.get(h))?this._forEachSource(c,b):this._debugLog(`Collection ${h} does not exist -> skip`))}};e._forEachSource=function(a,b){for(const c of a.items)!1!==b(c)&&"layers"in c&&c.layers&&this._forEachSource(c.layers,b)};e._processSpatialReferenceSource=function(a){let b=this._getSupportedSpatialReferences(a);if(0===b.length)return!1;this._spatialReferenceCandidates?(b=x.intersect(b,this._spatialReferenceCandidates,(c,d)=>c.equals(d)),0<b.length?this._spatialReferenceCandidates=b:this._debugLog(`Layer ${a.id} is ignored because its supported spatial
          references are not compatible with the previous candidates`)):this._spatialReferenceCandidates=b;return 1===this._spatialReferenceCandidates.length};e._findExtent=function(a,b){var c="fullExtents"in a&&a.fullExtents||(a.fullExtent?[a.fullExtent]:[]);const d=c.find(h=>h.spatialReference.equals(b));if(d)return this._set("extent",d),!0;0<this._getSupportedSpatialReferences(a).length&&(c=c.map(h=>({extent:h,layer:a})),this._extentCandidates=(this._extentCandidates||[]).concat(c));return!1};
e._projectExtentCandidate=function(){var a=n._asyncToGenerator(function*(){if(this._extentCandidates&&this._extentCandidates.length){var b=this.spatialReference,c=this._extentCandidates.find(d=>u.canProject(d.extent.spatialReference,b));if(c)this._set("extent",u.project(c.extent,b));else{c=this._extentCandidates[0];this._extentProjectController=A.createAbortController();const d=yield new Promise(function(h,D){w(["../../portal/support/geometryServiceUtils"],h,D)});try{const h=yield d.projectGeometry(c.extent,
b,c.layer.portalItem,this._extentProjectController.signal);this._set("extent",h)}catch{}this._extentProjectController=null}}});return function(){return a.apply(this,arguments)}}();e._getSupportedSpatialReferences=function(a){var b="supportedSpatialReferences"in a&&a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===b.length)return this._debugLog(`Layer ${a.id} is ignored because it does not have any spatial references`),[];b=b.filter(c=>this.view.isSpatialReferenceSupported(c,
a,d=>this._debugLog(d)));0===b.length?this._debugLog(`Layer ${a.id} has spatial references but none of them are supported (or layer doesn't require locking)`):this._debugLog(`Layer ${a.id} has spatial references. Resulting candidate set: ${b.map(p).join(", ")}`);return b};e._processHeightModelInfoSource=function(a){const b=t.deriveHeightModelInfoFromLayer(a);return b?(this._set("heightModelInfo",b),this._set("isHeightModelInfoSearching",!1),a.spatialReference&&(this._set("vcsWkid",a.spatialReference.vcsWkid),
this._set("latestVcsWkid",a.spatialReference.latestVcsWkid)),!0):!1};e._updateTileInfo=function(){if(null==this.tileInfo)if(!this.view.isTileInfoRequired())this._set("isTileInfoDone",!0);else if(this.isSpatialReferenceDone){var a=this.get("view.map");if(a){var b=a.basemap;a=a.get("layers.0");var c=null;if(b&&"failed"!==b.loadStatus){if(!b.loaded){this._updateWhen(b.load());this._debugLog("updateTileInfo: basemap still loading");return}if((b=b&&b.get("baseLayers.0"))&&"failed"!==b.loadStatus)if(b.loaded)c=
"tileInfo"in b&&b.tileInfo;else{this._updateWhen(b.load());this._debugLog("updateTileInfo: first basemap layer still loading");return}else if(a&&"failed"!==a.loadStatus)if(a.loaded)c="tileInfo"in a&&a.tileInfo;else{this._updateWhen(a.load());this._debugLog("updateTileInfo: first operational layer still loading");return}else{this._debugLog("updateTileInfo: no tileInfo");this._set("isTileInfoDone",!0);return}}else if(a&&"failed"!==a.loadStatus)if(a.loaded)c="tileInfo"in a&&a.tileInfo;else{this._updateWhen(a.load());
this._debugLog("updateTileInfo: first operational layer still loading");return}c&&!c.spatialReference.equals(this.spatialReference)&&(c=null);this._debugLog(`updateTileInfo: setting ${c}`);this._set("tileInfo",c);this._set("isTileInfoDone",!0)}else this._debugLog("updateTileInfo: no map")}};e._debugLog=function(a){this.logDebugInformation&&C.info(a)};n._createClass(m,[{key:"_running",get:function(){return!!(this._handles&&0<this._handles.size)}}]);return m}(f);f.DefaultMapCollectionPaths=["basemap.baseLayers",
"layers","ground.layers","basemap.referenceLayers"];g.__decorate([k.property()],f.prototype,"logDebugInformation",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"isSpatialReferenceDone",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"isTileInfoDone",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"isHeightModelInfoSearching",void 0);g.__decorate([k.property({constructOnly:!0})],f.prototype,"view",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,
"spatialReference",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"extent",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"heightModelInfo",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"vcsWkid",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"latestVcsWkid",void 0);g.__decorate([k.property()],f.prototype,"mapCollectionPaths",void 0);g.__decorate([k.property()],f.prototype,"defaultSpatialReference",void 0);g.__decorate([k.property({readOnly:!0})],
f.prototype,"tileInfo",void 0);return f=q=g.__decorate([B.subclass("esri.views.support.DefaultsFromMap")],f)});