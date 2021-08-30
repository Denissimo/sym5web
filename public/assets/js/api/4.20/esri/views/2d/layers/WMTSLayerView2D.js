// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/webMercatorUtils ./BitmapTileLayerView2D ./LayerView2D ../tiling/TileInfoView ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(h,l,q,n,p,f,C,D,E,r,t,u,v,w,x,y,z,A){const B=[102113,102100,3857,3785,900913];f=function(g){function k(){var a=g.apply(this,arguments)||this;a._handles=new q;a._tileStrategy=null;a._fetchQueue=null;a._tileRequests=new Map;a.layer=null;return a}h._inheritsLoose(k,g);var d=k.prototype;d.hitTest=function(){return null};d.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};d.attach=function(){var a=
this.layer.activeLayer;const b=this.tileMatrixSet;if(b){var c=b.tileInfo.spatialReference;a=a.fullExtent&&a.fullExtent.clone();c.isWebMercator?a=t.geographicToWebMercator(a):c.isWGS84||(a=b.fullExtent);this._tileInfoView=new w(b.tileInfo,a);this._fetchQueue=new x({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)});this._tileStrategy=new y({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView});this._handles.add(this.watch(["layer.activeLayer.styleId",
"tileMatrixSet"],()=>this._refresh()));g.prototype.attach.call(this)}};d.detach=function(){g.prototype.detach.call(this);this._handles.removeAll();this._tileStrategy.destroy();this._fetchQueue.clear();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};d.moveStart=function(){this.requestUpdate()};d.viewChange=function(){this.requestUpdate()};d.moveEnd=function(){this.requestUpdate()};d.doRefresh=function(){var a=h._asyncToGenerator(function*(){this.updateRequested||this.suspended||this._refresh()});
return function(){return a.apply(this,arguments)}}();d.isUpdating=function(){return 0<this._fetchQueue.length};d.acquireTile=function(a){const b=this._bitmapView.createTile(a),c=b.bitmap;[c.x,c.y]=this._tileInfoView.getTileCoords([0,0],b.key);c.resolution=this._tileInfoView.getTileResolution(b.key);[c.width,c.height]=this._tileInfoView.tileInfo.size;this._tileInfoView.getTileCoords(c,b.key);const e={id:a.id,fulfilled:!1,promise:this._fetchQueue.push(b.key).then(m=>{b.bitmap.source=m;b.once("attach",
()=>this.requestUpdate());this._bitmapView.addChild(b)}).catch(m=>{n.isAbortError(m)||(b.bitmap.source=null,b.once("attach",()=>this.requestUpdate()),this._bitmapView.addChild(b))})};e.promise.finally(()=>e.fulfilled=!0);this._tileRequests.set(b,e);this.requestUpdate();return b};d.releaseTile=function(a){const b=this._tileRequests.get(a);b.fulfilled||this._fetchQueue.abort(b.id);this._tileRequests.delete(a);this._bitmapView.removeChild(a);a.once("detach",()=>a.destroy());this.requestUpdate()};d.fetchTile=
function(){var a=h._asyncToGenerator(function*(b){return this.layer.fetchTile(b.level,b.row,b.col)});return function(b){return a.apply(this,arguments)}}();d.canResume=function(){const a=g.prototype.canResume.call(this);return a?null!==this.tileMatrixSet:a};d._refresh=function(){this._fetchQueue.reset();this._tileStrategy.tiles.forEach(a=>{if(a.bitmap.source){var b={id:a.key.id,fulfilled:!1,promise:this._fetchQueue.push(a.key).then(c=>{a.bitmap.source=c}).catch(c=>{n.isAbortError(c)||(a.bitmap.source=
null)}).finally(()=>{a.requestRender();this.notifyChange("updating");b.fulfilled=!0})};this._tileRequests.set(a,b)}});this.notifyChange("updating")};d._getTileMatrixSetBySpatialReference=function(a){const b=this.view.spatialReference;if(!a.tileMatrixSets)return null;let c=a.tileMatrixSets.find(e=>e.tileInfo.spatialReference.wkid===b.wkid);!c&&b.isWebMercator&&(c=a.tileMatrixSets.find(e=>-1<B.indexOf(e.tileInfo.spatialReference.wkid)));return c};h._createClass(k,[{key:"tileMatrixSet",get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;
const a=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);if(!a)return null;this.layer.activeLayer.tileMatrixSetId=a.id;return a}}]);return k}(A.RefreshableLayerView(u.BitmapTileLayerView2D(v.LayerView2DMixin(z))));l.__decorate([p.property()],f.prototype,"suspended",void 0);l.__decorate([p.property({readOnly:!0})],f.prototype,"tileMatrixSet",null);return f=l.__decorate([r.subclass("esri.views.2d.layers.WMTSLayerView2D")],f)});