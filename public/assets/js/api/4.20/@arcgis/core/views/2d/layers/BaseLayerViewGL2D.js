/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{e as r}from"../../../chunks/earcut.js";import{a as o}from"../../../chunks/aaBoundingRect.js";import{d as i}from"../../../geometry/Polygon.js";import{n}from"../../../chunks/normalizeUtilsSync.js";import{c,p as a}from"../../../chunks/projectionSupport.js";import"../../../chunks/TileStrategy.js";import{T as p}from"../../../chunks/TileInfoView.js";import"../../../chunks/TileKey.js";import{T as h}from"../../../chunks/definitions.js";import{L as l}from"../../../chunks/TurboLine.js";import{L as m}from"../../../chunks/LayerView2D.js";import u from"../ViewState.js";import{C as d}from"../../../chunks/Container.js";import{W as f}from"../../../chunks/enums.js";import{a as j}from"../../../chunks/util2.js";import y from"../../layers/LayerView.js";import{R as g}from"../../../chunks/RefreshableLayerView.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/Message.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/write.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/extentUtils.js";import"../../../chunks/zmUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Polyline.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../geometry/projection.js";import"../../../chunks/mathUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/projectionEllipsoid.js";import"../../../chunks/mat4.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/json.js";import"../../../chunks/vec2.js";import"../../../chunks/QueueProcessor.js";import"../../../chunks/Queue.js";import"../../../core/Collection.js";import"../../../chunks/Evented.js";import"../../../chunks/collectionUtils.js";import"../../../core/watchUtils.js";import"../../../chunks/ClipRect.js";import"../../../geometry.js";import"../../../chunks/typeUtils.js";import"../../../Viewpoint.js";import"../../../Camera.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/mat2d.js";import"../../../chunks/mat2df32.js";import"../../../chunks/mat2df64.js";import"../../../chunks/mat3.js";import"../../../chunks/mat3f32.js";import"../../../chunks/vec2f32.js";import"../../../chunks/vec2f64.js";import"../../../chunks/viewpointUtils2.js";import"../../../chunks/DisplayObject.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mat4f32.js";import"../../../chunks/_commonjsHelpers.js";import"../../../core/HandleOwner.js";import"../../../core/Handles.js";import"../../../chunks/Identifiable.js";import"../../../chunks/Promise.js";import"../../../core/accessorSupport/decorators/aliasOf.js";class x extends d{constructor(e){super(),this.layerView=e,this._childrenRenderParameters={context:null,pixelRatio:1,state:new u,stationary:!0,painter:null},this._name=this.constructor.name,this.requestRender=this.requestRender.bind(this)}doRender(e){if(e.drawPhase!==f.MAP)return;const t=window.devicePixelRatio,{state:s,stationary:r,context:o,painter:i,profiler:n}=e,c=this._childrenRenderParameters;c.context=o.gl,c.state.copy(s),c.state.pixelRatio=t,c.stationary=r,c.painter=i;const a=this.createRenderParams(e);i.beforeRenderLayer(a,this.clips?255:0,a.globalOpacity),n.recordContainerStart(this._name);const p=o.getBoundFramebufferObject(),h=o.getViewport();o.resetState(),o.bindFramebuffer(p),o.setViewport(h.x,h.y,h.width,h.height),this.layerView._renderTarget.framebuffer=p.glName,this.layerView._renderTarget.viewport[0]=h.x,this.layerView._renderTarget.viewport[1]=h.y,this.layerView._renderTarget.viewport[2]=h.width,this.layerView._renderTarget.viewport[3]=h.height,this.layerView.render(c),o.enforceState(),i.compositeLayer(a,a.globalOpacity),n.recordContainerEnd()}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.opacity,inFadeTransition:this.inFadeTransition}}}const k=new Set,w=[],v=[];class T{constructor(e,t,s,r,i,n,c,a=[0,0],p=o()){this.id=e,this.level=t,this.row=s,this.col=r,this.world=i,this.resolution=n,this.scale=c,this.coords=a,this.bounds=p}}let _=class extends(g(m(y))){constructor(e){super(e),this._tileMap=new Map,this.container=new x(this),this.layer=null,this.tiles=[],this._renderTarget={framebuffer:null,viewport:[0,0,0,0]}}get _tileInfoView(){const e=this.layer&&this.layer.tileInfo;return e?new p(e):null}get context(){return this.view._stage.context.gl}attach(){}detach(){}requestRender(){this.container.requestRender()}tilesChanged(e,t){}async doRefresh(){}isUpdating(){return!1}update(e){const t=this._tileInfoView,s=this.tiles;if(t){const r=t.getTileCoverage(e.state,0),{spans:o,lodInfo:i}=r,{level:n}=i;if(o.length)for(const{row:e,colFrom:t,colTo:r}of o)for(let o=t;o<=r;o++){const t=i.normalizeCol(o),r=i.getWorldForColumn(o),c=`${n}/${e}/${t}/${r}`;if(!this._tileMap.has(c)){const o=new T(c,n,e,t,r,i.resolution,i.scale);i.getTileCoords(o.coords,o,!1),i.getTileBounds(o.bounds,o,!0),this._tileMap.set(c,o),s.push(o),w.push(o)}k.add(c)}}for(let e=s.length-1;e>=0;e--){const t=s[e];k.has(t.id)||(s.splice(e,1),v.push(t),this._tileMap.delete(t.id))}(w.length||v.length)&&(this.tilesChanged(w,v),w.length=v.length=0),k.clear(),this.requestRender()}moveStart(){}viewChange(){this.requestUpdate()}moveEnd(){}bindRenderTarget(){this.context.bindFramebuffer(this.context.FRAMEBUFFER,this._renderTarget.framebuffer),this.context.viewport(this._renderTarget.viewport[0],this._renderTarget.viewport[1],this._renderTarget.viewport[2],this._renderTarget.viewport[3])}getRenderTarget(){return this._renderTarget}async tessellateExtent(e){const t={vertices:[],indices:[]},s=await this._projectAndNormalizeGeometry(e),r=t.vertices.length;return t.vertices.push({x:s.xmin,y:s.ymin,xOffset:0,yOffset:0,uTexcoord:0,vTexcoord:0,distance:0}),t.vertices.push({x:s.xmax,y:s.ymin,xOffset:0,yOffset:0,uTexcoord:1,vTexcoord:0,distance:0}),t.vertices.push({x:s.xmin,y:s.ymax,xOffset:0,yOffset:0,uTexcoord:0,vTexcoord:1,distance:0}),t.vertices.push({x:s.xmax,y:s.ymax,xOffset:0,yOffset:0,uTexcoord:1,vTexcoord:1,distance:0}),t.indices.push(r+0,r+1,r+2,r+1,r+3,r+2),t}async tessellatePoint(e,t){const s=await this._projectAndNormalizeGeometry(e);return this._tessellatePoints([s],t)}async tessellateMultipoint(e,t){const s=await this._projectAndNormalizeGeometry(e),r=s.points.map((e=>({x:e[0],y:e[1],spatialReference:s.spatialReference})));return this._tessellatePoints(r,t)}async _tessellatePoints(e,t){const s={vertices:[],indices:[]};for(const r of e){const e=s.vertices.length;s.vertices.push({x:r.x,y:r.y,xOffset:t.x,yOffset:t.y+t.height,uTexcoord:0,vTexcoord:0,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x+t.width,yOffset:t.y+t.height,uTexcoord:1,vTexcoord:0,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x,yOffset:t.y,uTexcoord:0,vTexcoord:1,distance:0}),s.vertices.push({x:r.x,y:r.y,xOffset:t.x+t.width,yOffset:t.y,uTexcoord:1,vTexcoord:1,distance:0}),s.indices.push(e+0,e+1,e+2,e+1,e+3,e+2)}return s}async tessellatePolyline(e,t){const s={vertices:[],indices:[]},r=(await this._projectAndNormalizeGeometry(e)).paths;if(!r||!r.length)return s;let o;const i=new l(((e,r,i,n,c,a,p,h,l,m,u)=>{const d=s.vertices.length;return s.vertices.push({x:e,y:-r,xOffset:p*t/2,yOffset:h*t/2,uTexcoord:u/o,vTexcoord:(m+1)/2,distance:u}),d}),((e,t,r)=>{s.indices.push(e,t,r)}),!0);for(const e of r){o=0;for(let t=1;t<e.length;++t){const s=e[t][0]-e[t-1][0],r=e[t][1]-e[t-1][1];o+=Math.sqrt(s*s+r*r)}const t=e.map((e=>({x:e[0],y:-e[1]})));i.tessellate(t,R)}return s}async tessellatePolygon(e){const t={vertices:[],indices:[]},s=await this._projectAndNormalizeGeometry(e),r=s.rings;if(!r||!r.length)return t;i(s);for(const e of s.rings)for(const t of e)t[1]=-t[1];let o=1/0,n=1/0,c=-1/0,a=-1/0;return j(s.rings,(()=>{}),((e,t,s)=>{for(let r=e;r<t;r+=2)o=Math.min(o,s[r]),n=Math.min(n,s[r+1]),c=Math.max(c,s[r]),a=Math.max(a,s[r+1])})),j(s.rings,(()=>{}),((e,s,r,i)=>{this._invokeEarcut(t,e,s,r,i,[o,n,c,a])})),t}_invokeEarcut(e,t,s,o,i,n){const c=o.slice(t,s),a=r(c,i,2),p=e.vertices.length;for(let t=0;t<c.length;t+=2){const s=c[t],r=c[t+1];e.vertices.push({x:s,y:-r,xOffset:0,yOffset:0,uTexcoord:(s-n[0])/(n[2]-n[0]),vTexcoord:1-(r-n[1])/(n[3]-n[1]),distance:0})}for(let t=0;t<a.length;++t)e.indices.push(p+a[t])}async _projectAndNormalizeGeometry(e){await c(e.spatialReference,this.view.spatialReference);const t=n(e);return a(t,e.spatialReference,this.view.spatialReference)}};e([t()],_.prototype,"_tileInfoView",null),e([t()],_.prototype,"layer",void 0),e([t()],_.prototype,"context",null),_=e([s("esri.views.2d.layers.BaseLayerViewGL2D")],_);const R={pixelCoordRatio:1,wrapDistance:1e11,halfWidth:h+1,initialDistance:0,textured:!0,offset:0};var O=_;export default O;