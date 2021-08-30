// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../request ../core/Logger ../core/mathUtils ../core/promiseUtils ../core/watchUtils ../chunks/vec3 ../chunks/vec3f64 ../libs/vxl/VxlModule ../views/3d/webgl-engine/lib/intersectorUtils".split(" "),function(z,A,B,u,v,w,l,p,C,x){const y=B.getLogger(" esri.layers.VoxelWasmPerScene");return function(){function r(a){this._havePreparedWithAllLayers=this._useDepthPass=!1;this._vxl=this._renderPluginContext=null;this._moreToLoad=this._pluginIsActive=!1;this._viewportHeight=
this._viewportWidth=-1;this._newLayers=[];this._layers=new Map;this._renderPass=0;this._renderSlot=4;this._renderTargetToRestore=this._rctx=null;this._dbgFlags=new Set;this._dbgFlags.add(4);this._view=a;this.initialize()}var g=r.prototype;g.dbg=function(a,b){this._dbgFlags.has(a)&&(4===a?y.error(b):y.warn(b))};g.removeRenderPlugin=function(){this._pluginIsActive&&this._view._stage&&(this.dbg(1,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this));this._pluginIsActive=!1};g.initialize=
function(){this.dbg(1,"--initialize--");this._readyWatchHandle=w.init(this._view,"ready",a=>{a&&"local"===this._view.viewingMode?(this.dbg(1,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this.dbg(1,"view ready status changed, not ready or not a local view!"),this.removeRenderPlugin())});this._qualityWatchHandle=w.init(this._view,"qualityProfile",a=>{this.dbg(3,"qualityProfile changed to "+
a);this._vxl&&this._vxl.set_quality(this.toWasmQuality(a))})};g.initializeRenderContext=function(a){this.dbg(1,"--initializeRenderContext--");const b=a.renderContext.rctx;"webgl2"===b.webglVersion?(this._renderPluginContext=a,this._rctx=a.renderContext.rctx,this.initializeWasm(b.gl)):this.dbg(4,"WebGL 1 context only!")};g.uninitializeRenderContext=function(){this._rctx=this._renderPluginContext=null;this.dbg(1,"--uninitializeRenderContext--")};g.restoreFramebuffer=function(){if(this._renderTargetToRestore){var a=
this._renderTargetToRestore.fbo;this._rctx?(this._rctx.bindFramebuffer(a,!0),a=this._renderTargetToRestore.viewport,this._rctx.setViewport(a.x,a.y,a.width,a.height)):this.dbg(4,"no context in restoreFramebuffer!")}};g.bindPreviousDepthToSlot=function(a,b){var d=!!this._renderTargetToRestore;if(!this._rctx||!d)return 0;d=this._renderTargetToRestore.fbo.depthStencilTexture;if(!d)return this.dbg(4,"no depth/stencil texture exists!"),0;0===b?this._rctx.bindTexture(null,a,!0):this._rctx.bindTexture(d,
a,!0);return 1};g.setBlendState=function(a,b,d,e){this._rctx?(this._rctx.setBlendingEnabled(1===a),this._rctx.setBlendFunction(b,d),this._rctx.setBlendEquation(e)):this.dbg(4,"setBlendState callback has no rendering context!")};g.setFrontFace=function(a){this._rctx?this._rctx.setFrontFace(a):this.dbg(4,"setFrontFace callback has no rendering context!")};g.setDepthStencilStateFunction=function(a,b,d){this._rctx?(this._rctx.setDepthFunction(d),this._rctx.setDepthTestEnabled(1===a),this._rctx.setDepthWriteEnabled(1===
b),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(519,0,255),this._rctx.setStencilOpSeparate(1028,7680,7682,7680),this._rctx.setStencilOpSeparate(1029,7680,7683,7680)):this.dbg(4,"setDepthStencilStateFunction callback has no rendering context!")};g.setRasterizerState=function(a){if(this._rctx)switch(a){case 1:this._rctx.setFaceCullingEnabled(!1);break;case 3:this._rctx.setCullFace(1029);this._rctx.setFaceCullingEnabled(!0);break;case 2:this._rctx.setCullFace(1028),this._rctx.setFaceCullingEnabled(!0)}else this.dbg(4,
"setRasterizerState callback has no rendering context!")};g.setViewport=function(a,b,d,e){this._rctx?this._rctx.setViewport(a,b,d,e):this.dbg(4,"setViewport callback has no rendering context!")};g.syncRequestsResponses=function(){this._layers.forEach((a,b)=>{const d=[];a.responses.forEach((c,k)=>{d.push(k);this.dbg(2,"responding for requestID:"+k+" size:"+c.size);this._vxl.respond(b,k,c)});const e=a.responses;for(var f of d)e.delete(f);f=this._vxl.get_new_requests(b);const h=a.abortController.signal;
for(const c in f){a.outstandingRequestCount+=1;1===a.outstandingRequestCount&&a.layerView.updatingFlagChanged();const k=f[c],n={responseType:"array-buffer",signal:h};this.dbg(2,"making requestID:"+c+" url:"+k.url);A(k.url,n).then(m=>{--a.outstandingRequestCount;0===a.outstandingRequestCount&&a.layerView.updatingFlagChanged();this.dbg(2,"have response for requestID:"+c);let t=0;if(0<m.data.byteLength){t=this._vxl._malloc(m.data.byteLength);const D=new Uint8Array(this._vxl.HEAPU8.buffer,t,m.data.byteLength),
E=new Uint8Array(m.data);for(let q=0;q<m.data.byteLength;++q)D[q]=E[q]}e.set(+c,{type:k.type,ptr:t,size:m.data.byteLength,success:!0})}).catch(m=>{--a.outstandingRequestCount;0===a.outstandingRequestCount&&a.layerView.updatingFlagChanged();v.isAbortError(m)||(this.dbg(4,"requestID:"+c+" failed"),e.set(+c,{type:k.type,ptr:0,size:0,success:!1}))})}})};g.updateWasmCamera=function(a){this._vxl.set_projection_matrix.apply(this._vxl,a.projectionMatrix);this._vxl.set_view_matrix.apply(this._vxl,a.viewMatrix);
this._vxl.set_near_far(a.near,a.far)};g.isUpdating=function(a){return!this._vxl&&this._vxlPromise?!0:this._layers.has(a)?0<this._layers.get(a).outstandingRequestCount:!1};g.setEnabled=function(a,b){this._layers.forEach((d,e)=>{d.layerView===a&&(this._vxl.set_enabled(e,b?1:0),this._renderPluginContext.requestRender())})};g.addVoxelLayer=function(a){if(!this._vxl){const b={layerView:a,resolveCallback:"",rejectCallback:""};a=new Promise((d,e)=>{b.resolveCallback=d;b.rejectCallback=e});this._newLayers.push(b);
return a}a=this._addVoxelLayer(a);return 0>a?Promise.reject(-1):Promise.resolve(a)};g.removeVoxelLayer=function(a){if(!this._vxl){var b=this._newLayers.findIndex(e=>a===e.layerView);0<=b&&(this._newLayers[b].resolveCallback(-1),this._newLayers.splice(b,1));b=this._newLayers.length;0===b&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy());return b}let d=-1;this._layers.forEach((e,f)=>{e.layerView===a&&(d=f,e.abortController.abort(),this._vxl.remove_layer(d))});
0<=d&&this._layers.delete(d);b=this._layers.size;0===b&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy());return b};g._addVoxelLayer=function(a){var b=a.layer,d=-1;const e=b.layerData;if(e&&0<e.data.byteLength){const f=this._vxl._malloc(e.data.byteLength);d=new Uint8Array(this._vxl.HEAPU8.buffer,f,e.data.byteLength);const h=new Uint8Array(e.data);for(let c=0;c<e.data.byteLength;++c)d[c]=h[c];d=32662===this._view.spatialReference.wkid&&
b.spatialReference.isWGS84?111319.49079327357:1;d=this._vxl.add_layer(b.serviceRoot,f,e.data.byteLength,d,d);this._vxl._free(f)}return 0<=d?(b=v.createAbortController(),this._layers.set(d,{layerView:a,responses:new Map,outstandingRequestCount:0,abortController:b}),d):-1};g.prepareRender=function(a){if(this._vxl){var b=a.viewForward;a=a.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],b[0],b[1],b[2]);b=this._vxl.cull();this.dbg(2,"missingResourceCount\x3d"+b);this._moreToLoad=0<b;this._havePreparedWithAllLayers=
0===this._newLayers.length}};g.render=function(a){if(!this._vxl)return!1;for(var b of this._newLayers){const d=this._addVoxelLayer(b.layerView);-1===d?b.rejectCallback(-1):b.resolveCallback(d)}this._newLayers=[];if(a.pass!==this._renderPass||a.slot!==this._renderSlot)return!1;if(0===this._layers.size)return this.dbg(4,"No voxel layers but RenderPlugin instance is being asked to render!"),!0;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};
this.syncRequestsResponses();this._vxl.begin_frame();b=this._renderTargetToRestore.viewport;if(b.width!==this._viewportWidth||b.height!==this._viewportHeight)this._viewportWidth=b.width,this._viewportHeight=b.height,this._vxl.set_viewport(b.width,b.height);0===b.x&&0===b.y||this.dbg(4,"Unsupported viewport parameters detected!");this.updateWasmCamera(a.camera);this._vxl.draw();this._renderTargetToRestore.fbo=null;a.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit());
a.rctx.externalVertexArrayObjectUpdate();a.rctx.externalVertexBufferUpdate();(this._moreToLoad||!this._havePreparedWithAllLayers&&0<this._layers.size)&&this._renderPluginContext.requestRender();return!0};g.queryDepthRange=function(a){this.dbg(1,"--queryDepthRange--");var b=a.viewForward;a=a.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],b[0],b[1],b[2]);this._vxl.cull();b={near:5,far:1E4};b.near=this._vxl.get_near();b.far=this._vxl.get_far();return b};g.destroy=function(){this.dbg(1,
"--destroy--");this.removeRenderPlugin();this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null);this._qualityWatchHandle&&(this._qualityWatchHandle.remove(),this._qualityWatchHandle=null);this._vxl&&(this._vxl.uninitialize_voxel_wasm(),this._vxl=null)};g.initializeWasm=function(a){if(this._vxl)return Promise.resolve();this._vxlPromise||(this._vxlPromise=C.loadVoxelWASM(a).then(b=>{this._vxl=b;this._vxlPromise=null;if(0>=this._newLayers.length)this.dbg(1," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),
this.destroy();else{b=this._vxl.addFunction(this.restoreFramebuffer.bind(this),"v");var d=this._vxl.addFunction(this.setBlendState.bind(this),"viiii"),e=this._vxl.addFunction(this.setFrontFace.bind(this),"vi"),f=this._vxl.addFunction(this.setRasterizerState.bind(this),"vi"),h=this._vxl.addFunction(this.setDepthStencilStateFunction.bind(this),"viii"),c=this._vxl.addFunction(this.setViewport.bind(this),"viiii"),k=this._vxl.addFunction(this.bindPreviousDepthToSlot.bind(this),"iii");this._vxl.initialize_voxel_wasm(b,
d,e,f,h,c,k);this._vxl.set_quality(this.toWasmQuality(this._view.qualityProfile));this._renderPluginContext&&this._renderPluginContext.requestRender()}}).catch(()=>{for(const b of this._newLayers)b.rejectCallback(-2);this.dbg(4," WASM failed to download, removing RenderPlugin and destroying");this.destroy()}));return this._vxlPromise};g.intersect=function(a,b,d,e,f){if(this._vxl&&this._rctx&&0!==this._layers.size&&!(0>f[0]||f[0]>a.camera.viewport[2]||0>f[1]||f[1]>a.camera.viewport[3])){this._renderTargetToRestore=
{fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};var h=a.camera.viewForward,c=a.camera.eye;this._vxl.update_camera_pos_and_direction(c[0],c[1],c[2],h[0],h[1],h[2]);this.updateWasmCamera(a.camera);this._vxl.begin_frame();this._useDepthPass?this.intersectDepth(a,b,d,e,f):this.intersectObject(a,b,d,e,f);this._renderTargetToRestore.fbo=null;this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit());this._rctx.externalVertexArrayObjectUpdate();
this._rctx.externalVertexBufferUpdate()}};g.intersectObject=function(a,b,d,e,f){var h=this._vxl.pick_object(f[0],f[1]);if(h.success){var c=p.create();l.sub(c,e,d);l.normalize(c,c);f=l.distance(d,e);var k=p.create();l.set(k,h.worldX,h.worldY,h.worldZ);h=p.create();l.sub(h,k,d);k=p.create();l.scale(k,c,l.dot(h,c));c=p.create();l.add(c,d,k);c=l.distance(d,c);const n=u.clamp(c/f,0,1);f=m=>{m.intersector="Voxel";m.dist=n;m.target={type:"external",metadata:{layerUid:this.intersectionHandlerId}}};c=a.results.min;
(null==c.dist||n<c.dist)&&(null==b||b(d,e,n))&&f(c);c=a.results.max;0!==a.options.store&&(null==c.dist||n>c.dist)&&(null==b||b(d,e,n))&&f(c);2===a.options.store&&(b=new x.IntersectorResult(a.ray),f(b),a.results.all.push(b))}};g.intersectDepth=function(a,b,d,e,f){var h=this._vxl.pick_depth(f[0],f[1]);if(h.success){var c=p.create();l.sub(c,e,d);l.normalize(c,c);f=l.distance(d,e);var k=p.create();l.set(k,h.worldX,h.worldY,h.worldZ);h=p.create();l.sub(h,k,d);k=p.create();l.scale(k,c,l.dot(h,c));c=p.create();
l.add(c,d,k);c=l.distance(d,c);const n=u.clamp(c/f,0,1);f=m=>{m.intersector="Voxel";m.dist=n;m.target={type:"external",metadata:{layerUid:this.intersectionHandlerId}}};c=a.results.min;(null==c.dist||n<c.dist)&&(null==b||b(d,e,n))&&f(c);c=a.results.max;0!==a.options.store&&(null==c.dist||n>c.dist)&&(null==b||b(d,e,n))&&f(c);2===a.options.store&&(b=new x.IntersectorResult(a.ray),f(b),a.results.all.push(b))}};g.toWasmQuality=function(a){switch(a){case "low":return 0;case "medium":return 1;case "high":return 2}};
z._createClass(r,[{key:"canRender",get:function(){return!!this._vxl&&"local"===this._view.viewingMode}},{key:"type",get:function(){return"external"}},{key:"isGround",get:function(){return!1}},{key:"slicePlane",get:function(){return!1}},{key:"intersectionHandlerId",get:function(){return"unj"}}]);return r}()});