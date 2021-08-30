/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{L as i}from"./Logger.js";import{b as r}from"../core/lang.js";import{isAbortError as s}from"../core/promiseUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{B as l}from"./BitmapTileLayerView2D.js";import{L as m}from"./LayerView2D.js";import{T as p}from"./TileInfoView.js";import{T as n}from"./TileKey.js";import{T as h,a as c}from"./TileStrategy.js";import u from"../views/layers/LayerView.js";import{R as j}from"./RefreshableLayerView.js";import{T as f}from"./TileLayerView.js";import{a as y}from"./drapedUtils.js";import"./Message.js";import"./object.js";import"../config.js";import"./string.js";import"./metadata.js";import"./handleUtils.js";import"./BitmapTileContainer.js";import"./aaBoundingRect.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./Bitmap.js";import"./mat3.js";import"./mathUtils.js";import"./mat3f32.js";import"./vec2f32.js";import"./VertexArrayObject.js";import"./Texture.js";import"./FramebufferObject.js";import"./DisplayObject.js";import"./Evented.js";import"./TiledDisplayObject.js";import"./brushes.js";import"./definitions.js";import"./vec4f32.js";import"./Utils12.js";import"./enums.js";import"./ShaderCompiler.js";import"./Program.js";import"./number2.js";import"./config.js";import"./GeometryUtils.js";import"./MaterialKey.js";import"./rasterUtils.js";import"./TileContainer.js";import"./WGLContainer.js";import"./Container.js";import"./colorUtils.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/Collection.js";import"./collectionUtils.js";import"../core/watchUtils.js";import"./ClipRect.js";import"../geometry.js";import"./typeUtils.js";import"./jsonMap.js";import"./QueueProcessor.js";import"./Queue.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"./Identifiable.js";import"./Promise.js";import"../core/accessorSupport/decorators/aliasOf.js";import"./unitUtils.js";import"./projectionEllipsoid.js";const g=i.getLogger("esri.views.2d.layers.TileLayerView2D"),d=[0,0];let w=class extends(f(j(l(m(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,i=e&&e.spatialReference;let r;i||(r=new t("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(r=new t("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),r&&this.addResolvingPromise(Promise.reject(r))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new p(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new h({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new c({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return y(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(d,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,o=!r(t)&&t.signal;if(!i)try{return await this._fetchImage(e,o)}catch(e){if(!s(e)&&!this.resampling)return this._createBlankImage();throw e}const a=new n(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:o}),a.level!==e.level&&!this.resampling)return this._createBlankImage();l=await this._fetchImage(a,o)}catch(t){if(s(t))throw t;l=await this._fetchImage(e,o)}const{level:m,row:p,col:h}=a;return this.resampling&&m!==e.level?this._resampleImage(l,m,p,h,e.level,e.row,e.col):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){s(e)||g.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,r,s,o,a){const l=this._tileInfoView.tileInfo.size,m=this._tileInfoView.getTileResolution(t),p=this._tileInfoView.getTileResolution(s);let n=this._tileInfoView.getLODInfoAt(s);const h=n.getXForColumn(a),c=n.getYForRow(o);n=this._tileInfoView.getLODInfoAt(t);const u=n.getXForColumn(r),j=n.getYForRow(i),f=Math.round((h-u)/m),y=Math.round(-(c-j)/m),g=Math.round(l[0]*(p/m)),d=Math.round(l[1]*(p/m)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,f,y,g,d,0,0,l[0],l[1]),w}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};e([o()],w.prototype,"resampling",null),w=e([a("esri.views.2d.layers.TileLayerView2D")],w);var _=w;export default _;
