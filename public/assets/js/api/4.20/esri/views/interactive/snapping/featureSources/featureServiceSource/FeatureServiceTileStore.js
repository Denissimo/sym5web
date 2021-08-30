// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/byteSizeEstimations ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/support/aaBoundingRect ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/BoundsStore ../../../../../rest/query/operations/query ./FeatureServiceTileCache".split(" "),
function(p,r,t,A,w,k,u,I,J,K,L,B,q,C,D,E,F){p.FeatureServiceTileStore=function(m){function g(a){a=m.call(this,a)||this;a.tileInfo=null;a.extent=null;a.maximumByteSize=10485760;a.tileBounds=new D.BoundsStore;a.tiles=new F.FeatureServiceTileCache;a.refCounts=new Map;a.tileFeatureCounts=new Map;a.tmpBoundingRect=q.create();return a}r._inheritsLoose(g,m);var d=g.prototype;d.add=function(a,b){const c=[];for(const e of b)0===this.referenceFeature(e.objectId)&&c.push(e);this.addTileStorage(a,new Set(b.map(({objectId:e})=>
e)),this.byteSizeOfFeatures(b));this.featureStore.addMany(c);this.tiles.applyByteSizeLimit(this.maximumByteSize,e=>this.removeTileStorage(e))};d.destroy=function(){this.clear();this.tileFeatureCounts.clear()};d.clear=function(){this.featureStore.clear();this.tileBounds.clear();this.tiles.clear();this.refCounts.clear()};d.refresh=function(){this.clear();this.tileFeatureCounts.clear()};d.processEdits=function(a,b,c){this.processEditsDelete(a.deletedFeatures.concat(a.updatedFeatures));return this.processEditsRefetch(a.addedFeatures.concat(a.updatedFeatures),
b,c)};d.addTileStorage=function(a,b,c){this.tiles.set(a.id,new G(a,b,c));this.tileBounds.set(a.id,a.extent);this.tileFeatureCounts.set(a.id,b.size)};d.remove=function({id:a}){(a=this.tiles.get(a))&&this.removeTileStorage(a)};d.removeTileStorage=function(a){const b=[];for(const c of a.objectIds)1===this.unreferenceFeature(c)&&b.push(c);this.featureStore.removeManyById(b);a=a.data.id;this.tiles.delete(a);this.tileBounds.delete(a)};d.processEditsDelete=function(a){this.featureStore.removeManyById(a);
for(const [,b]of this.tiles){for(const c of a)b.objectIds.delete(c);this.tileFeatureCounts.set(b.data.id,b.objectIds.size)}for(const b of a)this.refCounts.delete(b)};d.processEditsRefetch=function(){var a=r._asyncToGenerator(function*(b,c,e){b=(yield c(b,e)).features;const {hasZ:f,hasM:h}=this.featureStore;for(const n of b)b=C.getBoundsOptimizedGeometry(this.tmpBoundingRect,n.geometry,f,h),this.tileBounds.forEachInBounds(b,l=>{l=this.tiles.get(l);this.featureStore.add(n);l.objectIds.has(n.objectId)||
(l.objectIds.add(n.objectId),this.referenceFeature(n.objectId),this.tileFeatureCounts.set(l.data.id,l.objectIds.size))})});return function(b,c,e){return a.apply(this,arguments)}}();d.process=function(a,b=()=>!0){if(k.isNone(this.tileInfo)||!a.extent||k.isSome(this.extent)&&!q.intersects(q.fromExtent(this.extent,this.tmpBoundingRect),a.extent)||this.tiles.has(a.id))return new x(a);const c=this.createTileTree(a,this.tileInfo);this.simplify(c,b,null,0,1);return this.collectMissingTiles(a,c,this.tileInfo)};
d.getFeatureCount=function(a){a=this.tileFeatureCounts.get(a.id);return null!=a?a:0};d.fetchCount=function(){var a=r._asyncToGenerator(function*(b,c,e,f){const h=this.tileFeatureCounts.get(b.id);if(null!=h)return h;c=yield E.executeQueryForCount(c,e,f);this.tileFeatureCounts.set(b.id,c.data.count);return c.data.count});return function(b,c,e,f){return a.apply(this,arguments)}}();d.createTileTree=function(a,b){const c=new y(a.level,a.row,a.col);b.updateTileInfo(c,1);this.tileBounds.forEachInBounds(a.extent,
e=>{e=this.tiles.get(e).data;this.tilesAreRelated(a,e)&&this.populateChildren(c,e,b,this.tileFeatureCounts.get(e.id)||0)});return c};d.tilesAreRelated=function(a,b){if(!a||!b)return!1;if(a.level===b.level)return a.row===b.row&&a.col===b.col;const c=a.level<b.level,e=c?a:b;a=c?b:a;b=1<<a.level-e.level;return Math.floor(a.row/b)===e.row&&Math.floor(a.col/b)===e.col};d.populateChildren=function(a,b,c,e){var f=b.level-a.level-1;if(0>f)a.isLeaf=!0;else{var h=b.row>>f,n=b.col>>f;f=(h-(a.row<<1)<<1)+(n-
(a.col<<1));var l=a.children[f];k.isSome(l)?this.populateChildren(l,b,c,e):(h=new y(a.level+1,h,n),c.updateTileInfo(h,1),a.children[f]=h,this.populateChildren(h,b,c,e))}};d.simplify=function(a,b,c,e,f){const h=f*f;if(a.isLeaf)return b(this.getFeatureCount(a),f)?0:(this.remove(a),k.isSome(c)&&(c.children[e]=null),h);f/=2;const n=f*f;let l=0;for(let v=0;v<a.children.length;v++){const z=a.children[v];l+=k.isSome(z)?this.simplify(z,b,a,v,f):n}0===l?this.mergeChildren(a):.18751>1-l/h&&(this.purge(a),k.isSome(c)&&
(c.children[e]=null),l=h);return l};d.mergeChildren=function(a){const b=new Set;let c=0;this.forEachLeaf(a,e=>{const f=this.tiles.get(e.id);if(f){c+=f.byteSize;for(const h of f.objectIds)b.has(h)||(b.add(h),this.referenceFeature(h));this.remove(e)}});this.addTileStorage(a,b,c);a.isLeaf=!0;a.children[0]=a.children[1]=a.children[2]=a.children[3]=null;this.tileFeatureCounts.set(a.id,b.size)};d.forEachLeaf=function(a,b){for(const c of a.children)k.isNone(c)||(c.isLeaf?b(c):this.forEachLeaf(c,b))};d.purge=
function(a){if(!k.isNone(a))if(a.isLeaf)this.remove(a);else for(let b=0;b<a.children.length;b++)this.purge(a.children[b]),a.children[b]=null};d.collectMissingTiles=function(a,b,c){a=new H(c,a,this.extent);this.collectMissingTilesRecurse(b,a,1);return a.info};d.collectMissingTilesRecurse=function(a,b,c){if(!a.isLeaf)if(a.hasChildren){c/=2;for(let e=0;e<a.children.length;e++){const f=a.children[e];k.isNone(f)?b.addMissing(a.level+1,(a.row<<1)+((e&2)>>1),(a.col<<1)+(e&1),c):this.collectMissingTilesRecurse(f,
b,c)}}else b.addMissing(a.level,a.row,a.col,c)};d.referenceFeature=function(a){const b=(this.refCounts.get(a)||0)+1;this.refCounts.set(a,b);return 1===b?0:2};d.unreferenceFeature=function(a){const b=(this.refCounts.get(a)||0)-1;if(0===b)return this.refCounts.delete(a),1;0<b&&this.refCounts.set(a,b);return 2};d.byteSizeOfFeatures=function(a){let b=0;for(const c of a)b+=this.byteSizeOfFeature(c);return b};d.byteSizeOfFeature=function(a){return 32+this.byteSizeOfGeometry(a.geometry)+w.estimateAttributesObjectSize(a.attributes)};
d.byteSizeOfGeometry=function(a){if(!a)return 0;const b=w.estimateFixedArraySize(a.lengths,4);return 32+w.estimateFixedArraySize(a.coords,8)+b};r._createClass(g,[{key:"debugInfo",get:function(){return Array.from(this.tiles.values()).map(({data:a})=>({data:a,featureCount:this.tileFeatureCounts.get(a.id)||0}))}},{key:"test",get:function(){return{tiles:Array.from(this.tiles.values()).map(a=>`${a.data.id}:[${Array.from(a.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(a=>`${a}:${this.refCounts.get(a)}`)}}}]);
return g}(A);t.__decorate([u.property({constructOnly:!0})],p.FeatureServiceTileStore.prototype,"featureStore",void 0);t.__decorate([u.property()],p.FeatureServiceTileStore.prototype,"tileInfo",void 0);t.__decorate([u.property()],p.FeatureServiceTileStore.prototype,"extent",void 0);t.__decorate([u.property()],p.FeatureServiceTileStore.prototype,"maximumByteSize",void 0);p.FeatureServiceTileStore=t.__decorate([B.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],
p.FeatureServiceTileStore);let G=function(m,g,d){this.data=m;this.objectIds=g;this.byteSize=d},y=function(){function m(g,d,a){this.level=g;this.row=d;this.col=a;this.isLeaf=!1;this.extent=null;this.children=[null,null,null,null]}r._createClass(m,[{key:"hasChildren",get:function(){return!this.isLeaf&&(k.isSome(this.children[0])||k.isSome(this.children[1])||k.isSome(this.children[2])||k.isSome(this.children[3]))}}]);return m}(),x=function(){function m(g,d=[]){this.missingTiles=d;this.coveredArea=this.fullArea=
0;this.coveredArea=this.fullArea=q.area(g.extent)}m.prototype.prepend=function(g){this.missingTiles=g.missingTiles.concat(this.missingTiles);this.coveredArea+=g.coveredArea;this.fullArea+=g.fullArea};return m}(),H=function(){function m(g,d,a){this.tileInfo=g;this.extent=null;this.info=new x(d);k.isSome(a)&&(this.extent=q.fromExtent(a))}m.prototype.addMissing=function(g,d,a,b){g={id:null,level:g,row:d,col:a};this.tileInfo.updateTileInfo(g,1);!k.isSome(g.extent)||k.isSome(this.extent)&&!q.intersects(this.extent,
g.extent)||(this.info.missingTiles.push({data:g,resolution:b}),this.info.coveredArea-=q.area(g.extent))};return m}();p.ProcessResult=x;Object.defineProperty(p,"__esModule",{value:!0})});