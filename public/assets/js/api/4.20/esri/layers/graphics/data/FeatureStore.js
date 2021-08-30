// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/Evented ../../../core/Logger ../../../core/maybe ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../featureConversionUtils ./BoundsStore ./optimizedFeatureQueryEngineAdapter".split(" "),function(k,l,m,n,h,p,f,q,r,t){return function(){function g(a){this.geometryInfo=a;this._boundsStore=new r.BoundsStore;this._featuresById=new Map;this._markedIds=new Set;this.events=new m;this.featureAdapter=
t.optimizedFeatureQueryEngineAdapter}var c=g.prototype;c.add=function(a){this._add(a);this._emitChanged()};c.addMany=function(a){for(const b of a)this._add(b);this._emitChanged()};c.clear=function(){this._featuresById.clear();this._boundsStore.clear();this._emitChanged()};c.removeById=function(a){a=this._featuresById.get(a);if(!a)return null;this._remove(a);this._emitChanged();return a};c.removeManyById=function(a){this._boundsStore.invalidateIndex();for(const b of a)(a=this._featuresById.get(b))&&
this._remove(a);this._emitChanged()};c.forEachBounds=function(a,b,d){for(const e of a)(a=this._boundsStore.get(e.objectId))&&b(p.fromRect(d,a))};c.getFeature=function(a){return this._featuresById.get(a)};c.has=function(a){return this._featuresById.has(a)};c.forEach=function(a){this._featuresById.forEach(b=>a(b))};c.forEachInBounds=function(a,b){this._boundsStore.forEachInBounds(a,d=>{b(this._featuresById.get(d))})};c.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex();this._markedIds.clear()};
c.sweep=function(){let a=!1;this._featuresById.forEach((b,d)=>{this._markedIds.has(d)||(a=!0,this._remove(b))});this._markedIds.clear();a&&this._emitChanged()};c._emitChanged=function(){this.events.emit("changed",void 0)};c._add=function(a){if(a){var b=a.objectId;if(null==b)n.getLogger("esri.layers.graphics.data.FeatureStore").error(new l("featurestore:invalid-feature","feature id is missing",{feature:a}));else{var d=this._featuresById.get(b);this._markedIds.add(b);if(d){a.displayId=d.displayId;var e=
this._boundsStore.get(b);this._boundsStore.delete(b)}else if(h.isSome(this.onFeatureAdd))this.onFeatureAdd(a);a.geometry&&a.geometry.coords&&a.geometry.coords.length?(e=q.getBoundsOptimizedGeometry(e||f.create(),a.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(b,e)):this._boundsStore.set(b,null);this._featuresById.set(b,a)}}};c._remove=function(a){if(h.isSome(this.onFeatureRemove))this.onFeatureRemove(a);this._markedIds.delete(a.objectId);this._boundsStore.delete(a.objectId);
this._featuresById.delete(a.objectId);return a};k._createClass(g,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){if(!this.numFeatures)return null;const a=f.create(f.NEGATIVE_INFINITY);this._featuresById.forEach(b=>{if(b=this._boundsStore.get(b.objectId))a[0]=
Math.min(b[0],a[0]),a[1]=Math.min(b[1],a[1]),a[2]=Math.max(b[2],a[2]),a[3]=Math.max(b[3],a[3])});return a}},{key:"storeStatistics",get:function(){let a=0;this._featuresById.forEach(b=>{b.geometry&&b.geometry.coords&&(a+=b.geometry.coords.length)});return{featureCount:this._featuresById.size,vertexCount:a/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}}]);return g}()});