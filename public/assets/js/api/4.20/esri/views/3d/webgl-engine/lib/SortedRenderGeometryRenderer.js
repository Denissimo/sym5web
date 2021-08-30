// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/MapUtils ../../../../core/maybe ../../../../core/PooledArray ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ./ChangeSet ./Material ./rendererUtils ../materials/renderers/MergedRenderer".split(" "),
function(g,n,l,r,p,t,u,q,D,E,F,G,v,w,x,y,z){g.SortedRenderGeometryRenderer=function(k){function h(){var a=k.apply(this,arguments)||this;a._pending=new A;a._changes=new w.ChangeSet;a._materialRenderers=new Map;a._sortedMaterialRenderers=new u;a._hasHighlights=!1;a._hasWater=!1;return a}n._inheritsLoose(h,k);var d=h.prototype;d.dispose=function(){this._changes.prune();this._materialRenderers.forEach(a=>a.dispose());this._materialRenderers.clear();this._sortedMaterialRenderers.clear()};d.stopAnimationsAtTime=
function(a){this._sortedMaterialRenderers.forAll(c=>t.applySome(c.material.animation,b=>b.stopAtTime(a)))};d.commitChanges=function(){if(!this.updating)return!1;this._processAddsRemoves();let a=!1,c=!1,b=!1;y.splitRenderGeometryChangeSetByMaterial(this._changes).forEach((e,m)=>{let f=this._materialRenderers.get(m);!f&&0<e.adds.length&&(f=new z(this.rctx,this.materialRepository,m),this._materialRenderers.set(m,f),b=c=a=!0);if(f){var B=c||f.hasHighlights,C=b||f.hasWater;f.modify(e);c=c||B!==f.hasHighlights;
b=b||C!==f.hasWater;f.isEmpty&&(this._materialRenderers.delete(m),f.dispose(),a=!0)}});this._changes.clear();a&&this.updateSortedMaterialRenderers();c&&(this._hasHighlights=p.someMap(this._materialRenderers,e=>e.hasHighlights));b&&(this._hasWater=p.someMap(this._materialRenderers,e=>e.hasWater));this.notifyChange("updating");return!0};d.add=function(a){if(0!==a.length){var c=this._pending.empty;for(const b of a)this._pending.adds.add(b);c&&this.notifyChange("updating")}};d.remove=function(a){const c=
this._pending.empty;for(const b of a)this._pending.adds.has(b)?(this._pending.removed.add(b),this._pending.adds.delete(b)):this._pending.removed.has(b)||this._pending.removes.add(b);c&&!this._pending.empty&&this.notifyChange("updating")};d.modify=function(a,c){const b=0===this._changes.updates.length;for(const e of a)a=this._changes.updates.pushNew(),a.renderGeometry=e,a.updateType=c;b&&0<this._changes.updates.length&&this.notifyChange("updating")};d.updateLogic=function(a){let c=!1;this._sortedMaterialRenderers.forAll(({materialRenderer:b})=>
{b.updateLogic&&b.updateLogic(a)&&(c=!0)});return c};d.render=function(a,c){for(let b=0;b<this._sortedMaterialRenderers.length;b++){const e=this._sortedMaterialRenderers.data[b];x.materialPredicate(e.material,a)&&e.materialRenderer.render(null,a.pass,c,null)}};d.updateSortedMaterialRenderers=function(){this._sortedMaterialRenderers.clear();let a=0;this._materialRenderers.forEach((c,b)=>{b.insertOrder=a++;this._sortedMaterialRenderers.push({material:b,materialRenderer:c})});this._sortedMaterialRenderers.sort((c,
b)=>{const e=b.material.renderPriority-c.material.renderPriority;return 0!==e?e:c.material.insertOrder-b.material.insertOrder})};d._processAddsRemoves=function(){this._changes.adds.clear();this._changes.removes.clear();this._changes.adds.pushArray(Array.from(this._pending.adds));this._changes.removes.pushArray(Array.from(this._pending.removes));for(let a=0;a<this._changes.updates.length;)this._pending.has(this._changes.updates.data[a].renderGeometry)?this._changes.updates.removeUnorderedIndex(a):
a++;this._pending.clear()};n._createClass(h,[{key:"updating",get:function(){return!this._pending.empty||0<this._changes.updates.length}},{key:"hasHighlights",get:function(){return this._hasHighlights}},{key:"hasWater",get:function(){return this._hasWater}},{key:"rendersOccluded",get:function(){return p.someMap(this._materialRenderers,a=>a.rendersOccluded)}},{key:"isEmpty",get:function(){return!this.updating&&0===this._materialRenderers.size}},{key:"test",get:function(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}}]);
return h}(r);l.__decorate([q.property()],g.SortedRenderGeometryRenderer.prototype,"rctx",void 0);l.__decorate([q.property()],g.SortedRenderGeometryRenderer.prototype,"materialRepository",void 0);l.__decorate([q.property()],g.SortedRenderGeometryRenderer.prototype,"updating",null);g.SortedRenderGeometryRenderer=l.__decorate([v.subclass("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],g.SortedRenderGeometryRenderer);let A=function(){function k(){this.adds=new Set;this.removes=new Set;
this.removed=new Set}var h=k.prototype;h.has=function(d){return this.adds.has(d)||this.removes.has(d)||this.removed.has(d)};h.clear=function(){this.adds.clear();this.removes.clear();this.removed.clear()};n._createClass(k,[{key:"empty",get:function(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}}]);return k}();Object.defineProperty(g,"__esModule",{value:!0})});