/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import{a as r}from"../../../chunks/aaBoundingRect.js";import"../../../chunks/TileStrategy.js";import{T as o}from"../../../chunks/TileInfoView.js";import"../../../chunks/TileKey.js";import{L as i}from"../../../chunks/LayerView2D.js";import{B as n}from"../../../chunks/Bitmap.js";import{B as c}from"../../../chunks/BitmapContainer.js";import p from"../../layers/LayerView.js";import{R as a}from"../../../chunks/RefreshableLayerView.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/Message.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/write.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/vec2.js";import"../../../chunks/QueueProcessor.js";import"../../../chunks/Queue.js";import"../../../core/Collection.js";import"../../../chunks/Evented.js";import"../../../chunks/collectionUtils.js";import"../../../core/watchUtils.js";import"../../../chunks/Container.js";import"../../../chunks/DisplayObject.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mat4f32.js";import"../../../chunks/mat4.js";import"../../../chunks/mathUtils.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/ClipRect.js";import"../../../geometry.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/mat3.js";import"../../../chunks/mat3f32.js";import"../../../chunks/vec2f32.js";import"../../../chunks/VertexArrayObject.js";import"../../../chunks/Texture.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/brushes.js";import"../../../chunks/definitions.js";import"../../../chunks/vec4f32.js";import"../../../chunks/Utils12.js";import"../../../chunks/enums.js";import"../../../chunks/ShaderCompiler.js";import"../../../chunks/Program.js";import"../../../chunks/number2.js";import"../../../chunks/config.js";import"../../../chunks/GeometryUtils.js";import"../../../chunks/MaterialKey.js";import"../../../chunks/rasterUtils.js";import"../../../chunks/WGLContainer.js";import"../../../chunks/earcut.js";import"../../../chunks/vec2f64.js";import"../../../chunks/featureConversionUtils.js";import"../../../chunks/OptimizedFeature.js";import"../../../chunks/OptimizedFeatureSet.js";import"../../../core/HandleOwner.js";import"../../../core/Handles.js";import"../../../chunks/Identifiable.js";import"../../../chunks/Promise.js";import"../../../core/accessorSupport/decorators/aliasOf.js";class m extends c{constructor(t){super(),this.requestRender=this.requestRender.bind(this),this._layerView=t,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new n(null,"standard",!1),this.addChild(this._bitmap)}doRender(t){const s=t.state,e=this._createCustomRenderParams(t),r=this._canvas,o=this._bitmap,i=window.devicePixelRatio;r.width=s.size[0]*i,r.height=s.size[1]*i,o.resolution=s.resolution;const n=s.clone();n.pixelRatio=i,o.pixelRatio=i,e.state=n,o.x=s.viewpoint.targetGeometry.x-s.extent.width/2,o.y=s.viewpoint.targetGeometry.y+s.extent.height/2,this._layerView.render(e),o.source=r,o.rotation=s.rotation,super.doRender({...t,state:n})}_createCustomRenderParams(t){return{globalOpacity:t.globalOpacity,state:t.state,stationary:t.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}const h=new Set,u=[],l=[];class j{constructor(t,s,e,o,i,n,c,p=[0,0],a=r()){this.id=t,this.level=s,this.row=e,this.col=o,this.world=i,this.resolution=n,this.scale=c,this.coords=p,this.bounds=a}}let d=class extends(a(i(p))){constructor(t){super(t),this._tileMap=new Map,this.container=new m(this),this.layer=null,this.tiles=[]}get _tileInfoView(){const t=this.layer&&this.layer.tileInfo;return t?new o(t):null}attach(){}detach(){}requestRender(){this.container.requestRender()}tilesChanged(t,s){}async doRefresh(){}isUpdating(){return!1}update(t){const s=this._tileInfoView,e=this.tiles;if(s){const r=s.getTileCoverage(t.state,0),{spans:o,lodInfo:i}=r,{level:n}=i;if(o.length)for(const{row:t,colFrom:s,colTo:r}of o)for(let o=s;o<=r;o++){const s=i.normalizeCol(o),r=i.getWorldForColumn(o),c=`${n}/${t}/${s}/${r}`;if(!this._tileMap.has(c)){const o=new j(c,n,t,s,r,i.resolution,i.scale);i.getTileCoords(o.coords,o,!1),i.getTileBounds(o.bounds,o,!0),this._tileMap.set(c,o),e.push(o),u.push(o)}h.add(c)}}for(let t=e.length-1;t>=0;t--){const s=e[t];h.has(s.id)||(e.splice(t,1),l.push(s),this._tileMap.delete(s.id))}(u.length||l.length)&&(this.tilesChanged(u,l),u.length=l.length=0),h.clear(),this.requestRender()}moveStart(){}viewChange(){this.requestUpdate()}moveEnd(){}};t([s()],d.prototype,"_tileInfoView",null),t([s()],d.prototype,"layer",void 0),d=t([e("esri.views.2d.layers.BaseLayerView2D")],d);var k=d;export default k;