// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/promiseUtils ../../../../../chunks/mat4f64 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec4f64 ../../../support/debugFlags ../../../support/buffer/glUtil ../../core/shaderLibrary/output/OutputHighlight.glsl ../Camera ../DefaultVertexAttributeLocations ../Util ./InstanceData ./InstanceOctree ./LevelSelector ./LodLevel ./RenderInstanceData ../../materials/DefaultMaterial ../../materials/internal/MaterialUtil ../../materials/renderers/utils ../../../../webgl/Util".split(" "),
function(w,x,L,M,N,t,v,O,y,P,Q,R,z,u,n,S,T,U,A,V,W,X,B){function C(k,h,a){const b=k.allocateHead();k=k.view;X.encodeDoubleVec3(h.modelOrigin,a,k.modelOriginHi,k.modelOriginLo,b);k.model.copyFrom(b,h.model,a);k.modelNormal.copyFrom(b,h.modelNormal,a);h.color&&k.color&&k.color.copyFrom(b,h.color,a);h.featureAttribute&&k.featureAttribute&&k.featureAttribute.copyFrom(b,h.featureAttribute,a)}let D=function(k){const h=k.baseBoundingSphere.radius;k=k.levels.map(a=>a.minScreenSpaceRadius);return new T.LevelSelector(h,
k)},Z=function(){function k(a,b,c,e){this.type="Lod";this.isGround=!1;this._inverseViewport=N.create();this._levels=[];this._defaultRenderInstanceData=[];this._highlightRenderInstanceData=[];this._instanceIndex=0;this._slicePlane=!1;this._enableLevelSelection=!0;this._lastCamera=new R;this._updateCyclesWithStaticCamera=-1;this._needFullCycle=!1;this.canRender=!0;this._symbol=a;this._optionalFields=b;this._metadata=c;this._instanceBufferLayout=V.DefaultMaterial.getInstanceBufferLayout({instancedDoublePrecision:!0,
instanced:b});this._glInstanceBufferLayout=P.glLayout(this._instanceBufferLayout,1);this._instanceData=new n.InstanceData(this._optionalFields,e);this._instanceData.on("instance-added",()=>{this.requestUpdateCycle()});this._instanceData.on("instance-removed",()=>{this.requestUpdateCycle()});this._instanceData.on("instance-transform-changed",f=>{this.requestUpdateCycle();this._metadata.notifyGraphicGeometryChanged(f.index)});this._instanceData.on("instance-visibility-changed",f=>{this.requestUpdateCycle(!0);
this._metadata.notifyGraphicVisibilityChanged(f.index)});this._instanceData.on("instance-highlight-changed",()=>{this.requestUpdateCycle(!0)});this._enableLevelSelection=1<this._symbol.levels.length}var h=k.prototype;h.initializeRenderContext=function(){var a=x._asyncToGenerator(function*(b,c){this._context=b;const e=b.renderContext.rctx;this._levels=yield L.all(this._symbol.levels.map(f=>{this._defaultRenderInstanceData.push(new A.RenderInstanceData(e,this._instanceBufferLayout));this._highlightRenderInstanceData.push(new A.RenderInstanceData(e,
this._instanceBufferLayout));return U.LodLevel.create(b,f,c)}));this._levelSelector=D(this)});return function(b,c){return a.apply(this,arguments)}}();h.uninitializeRenderContext=function(){this.invalidateOctree();this._levels.forEach(a=>a.destroy());this._defaultRenderInstanceData.forEach(a=>a.destroy());this._highlightRenderInstanceData.forEach(a=>a.destroy())};h.prepareRender=function(a,b){y.LOD_INSTANCE_RENDERER_DISABLE_UPDATES||(this._enableLevelSelection&&(a=b.equals(this._lastCamera),this._lastCamera.copyFrom(b),
a||this.requestUpdateCycle()),a=this._needFullCycle?this._instanceData.size:2E3,this._needFullCycle=!1,this.updateInstances(b,a),this.needsUpdates&&this._context.requestRender())};h.render=function(a){var b=a.rctx;const c=4===a.slot?3:6===a.slot?5:null;if(c){if(!this.baseMaterial.isVisible()||!this.baseMaterial.isVisibleInPass(a.pass))return!1;var e=a.camera;this._inverseViewport[0]=1/e.fullViewport[2];this._inverseViewport[1]=1/e.fullViewport[3];e={slot:c,origin:[0,0,0],camera:e,inverseViewport:this._inverseViewport,
shadowMap:a.shadowMap,shadowMappingEnabled:a.shadowMap.enabled,ssaoHelper:a.ssaoHelper,ssaoEnabled:a.ssaoHelper.enabled,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,slicePlane:a.sliceHelper&&a.sliceHelper.plane,hudVisibilityTexture:a.offscreenRenderingHelper?a.offscreenRenderingHelper.hudVisibilityTexture:null,highlightDepthTexture:a.offscreenRenderingHelper?a.offscreenRenderingHelper.depthTexture:null,hasOccludees:!1,linearDepthTexture:null,lastFrameColorTexture:null,reprojectionMat:null,
ssrEnabled:!1,lighting:a.scenelightingData,transparencyPassType:a.transparencyPassType,terrainLinearDepthTexture:a.multipassTerrainParams.terrainLinearDepthTexture,geometryLinearDepthTexture:a.multipassGeometryParams.geometryLinearDepthTexture,multipassTerrainEnabled:a.multipassTerrainParams.multipassTerrainEnabled,cullAboveGround:a.multipassTerrainParams.cullAboveGround,multipassGeometryEnabled:a.multipassGeometryParams.multipassGeometryEnabled,highlightColorTexture:null};b.bindVAO();b=6!==a.pass;
5!==a.pass&&7!==a.pass&&this._renderComponents(a,c,e,this._defaultRenderInstanceData);b&&this._renderComponents(a,c,e,this._highlightRenderInstanceData);return!0}};h.intersect=function(a,b,c,e){if(this.baseMaterial.isVisible()){var f=v.create();t.subtract(f,e,c);var l=d=>{this._instanceData.getCombinedModelTransform(d,E);a.transform.set(E);t.transformMat4(F,c,a.transform.inverse);t.transformMat4(G,e,a.transform.inverse);const m=this._instanceData.getState(d),p=this._instanceData.getLodLevel(d);u.assert(m&
n.StateFlags.ACTIVE,"invalid instance state");u.assert(0<=p&&p<this._levels.length,"invaid lod level");this._levels[p].intersect(a,b,F,G,d,this._metadata)};this.baseMaterial.params.verticalOffset?this.octree.forEach(l):this.octree.forEachAlongRay(c,f,l)}};h.queryDepthRange=function(a){return this.queryDepthRangeOctree(a)};h.notifyShaderTransformationChanged=function(){this.invalidateOctree()};h.requestUpdateCycle=function(a=!1){this._updateCyclesWithStaticCamera=-1;a&&(this._needFullCycle=!0);this.needsUpdates&&
this._context.requestRender()};h.invalidateOctree=function(){this._octree&&(this._octree.destroy(),this._octree=null)};h.buildOctree=function(){const a=new S.InstanceOctree(this._instanceData,this.baseBoundingSphere);var b=this._instanceData;b=b.view?b.view.state:null;for(let c=0;c<this._instanceData.capacity;++c)b.get(c)&n.StateFlags.ACTIVE&&a.addInstance(c);return a};h.queryDepthRangeOctree=function(a){var b=a.eye;const c=a.viewForward;var e=this.octree.findClosest(c,1,a.frustum);const f=this.octree.findClosest(c,
-1,a.frustum);return null!=e&&null!=f?(this._instanceData.view.boundingSphere.getVec(e,r),t.subtract(r,r,b),e=t.dot(r,c)-r[3],this._instanceData.view.boundingSphere.getVec(f,r),t.subtract(r,r,b),b=t.dot(r,c)+r[3],{near:Math.max(a.near,e),far:Math.min(a.far,b)}):{near:Infinity,far:-Infinity}};h.startUpdateCycle=function(){this._updateCyclesWithStaticCamera++;this._defaultRenderInstanceData.forEach(a=>{a.startUpdateCylce()});this._highlightRenderInstanceData.forEach(a=>{a.startUpdateCylce()});this.needsUpdates&&
this._context.requestRender()};h.updateInstances=function(a,b){const c=this._enableLevelSelection,e=this._levelSelector;e.updateCamera(a);this._defaultRenderInstanceData.forEach(q=>{q.beginUpdate()});this._highlightRenderInstanceData.forEach(q=>{q.beginUpdate()});a=this._instanceData;const f=this._instanceData.view,l=a.capacity;let d=this._instanceIndex;b=Math.min(a.size,b);for(let q=0;q<b;++q){0===d&&this.startUpdateCycle();const g=f.state.get(d);var m=0;if(g&n.StateFlags.ALLOCATED){var p=f.lodLevel.get(d);
g&n.StateFlags.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[p].freeTail();g&n.StateFlags.HIGHLIGHT_ACTIVE&&this._highlightRenderInstanceData[p].freeTail();g&n.StateFlags.REMOVE?a.freeInstance(d):g&n.StateFlags.VISIBLE?(p=0,c&&(f.modelOrigin.getVec(d,H),p=e.selectLevel(H,a.getCombinedMedianScaleFactor(d))),m=g&~(n.StateFlags.ACTIVE|n.StateFlags.TRANSFORM_CHANGED),0<=p&&(g&n.StateFlags.HIGHLIGHT?(C(this._highlightRenderInstanceData[p],f,d),m|=n.StateFlags.HIGHLIGHT_ACTIVE):(C(this._defaultRenderInstanceData[p],
f,d),m|=n.StateFlags.DEFAULT_ACTIVE)),f.state.set(d,m),f.lodLevel.set(d,p)):(m=g&~(n.StateFlags.ACTIVE|n.StateFlags.TRANSFORM_CHANGED),f.state.set(d,m));this._octree&&(p=!!(g&n.StateFlags.ACTIVE),m=!!(m&n.StateFlags.ACTIVE),!p&&m?this._octree.addInstance(d):p&&!m?this._octree.removeInstance(d):p&&m&&g&n.StateFlags.TRANSFORM_CHANGED&&(this._octree.removeInstance(d),this._octree.addInstance(d)));d=(d+1)%l}else d=(d+1)%l,b++}this._instanceIndex=d;this._defaultRenderInstanceData.forEach(q=>{q.endUpdate()});
this._highlightRenderInstanceData.forEach(q=>{q.endUpdate()})};h._renderComponents=function(a,b,c,e){this.levels.forEach((f,l)=>{f.components.forEach(d=>{this._renderComponent(a,b,c,e[l],d,l)})})};h._renderComponent=function(a,b,c,e,f,l){var d=f.glMaterials.get(a.pass);if(d&&d.beginSlot(b)&&0!==e.size){var m=a.rctx,p=m.capabilities.instancing;d.ensureParameters(c);var q=d.technique,g=q.program;b=d.getPipelineState(b);m.setPipelineState(b);m.useProgram(g);d.bind(c);m.bindVAO(f.vao);q.ensureAttributeLocations(f.vao);
a.isHighlightPass&&Q.bindOutputHighlight(g,c);q.bindDraw(c,{},{});y.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&0===a.pass&&(g.setUniform4fv("externalColor",I[Math.min(l,I.length-1)]),g.setUniform1i("colorMixMode",W.colorMixModes.replace));a=e.capacity;c=e.headIndex;l=e.tailIndex;d=e.firstIndex;var J=this._glInstanceBufferLayout;g=(K,Y)=>{B.bindVertexBufferLayout(m,z.Default3D,e.buffer,J,K);p.drawArraysInstanced(q.primitiveType,0,f.vertexCount,Y-K);B.unbindVertexBufferLayout(m,z.Default3D,e.buffer,J)};
f.material.params.transparent&&null!=d?c>l?(u.assert(d>=l&&d<=c,"invalid firstIndex"),g(d,c),g(l,d)):c<l&&(d<=c?(u.assert(0<=d&&d<=c,"invalid firstIndex"),g(d,c),g(l,a),g(0,d)):(u.assert(d>=l&&d<=a,"invalid firstIndex"),g(d,a),g(0,c),g(l,d))):c>l?g(l,c):c<l&&(g(0,c),g(l,a));m.bindVAO(null)}};x._createClass(k,[{key:"levels",get:function(){return this._levels}},{key:"baseBoundingBox",get:function(){return this._levels[this._levels.length-1].boundingBox}},{key:"baseBoundingSphere",get:function(){return this._levels[this._levels.length-
1].boundingSphere}},{key:"baseMaterial",get:function(){return this._levels[this._levels.length-1].components[0].material}},{key:"slicePlane",get:function(){return this._slicePlane},set:function(a){this._slicePlane=a}},{key:"intersectionHandlerId",get:function(){return this._metadata.layerUid}},{key:"instanceData",get:function(){return this._instanceData}},{key:"memoryUsage",get:function(){const a={cpu:0,gpu:0};this._defaultRenderInstanceData.forEach(b=>{b=b.memoryUsage;a.cpu+=b.cpu;a.gpu+=b.gpu});
this._highlightRenderInstanceData.forEach(b=>{b=b.memoryUsage;a.cpu+=b.cpu;a.gpu+=b.gpu});return a}},{key:"renderStats",get:function(){const a=this._instanceData.size,b=[];this._levels.forEach((c,e)=>{e=this._defaultRenderInstanceData[e].size+this._highlightRenderInstanceData[e].size;c=c.triangleCount;b.push({renderedInstances:e,renderedTriangles:e*c,trianglesPerInstance:c})});return{totalInstances:a,renderedInstances:b.reduce((c,e)=>c+e.renderedInstances,0),renderedTriangles:b.reduce((c,e)=>c+e.renderedTriangles,
0),levels:b}}},{key:"slots",get:function(){return[4,6]}},{key:"needsHighlight",get:function(){return 0<this._highlightRenderInstanceData.reduce((a,b)=>a+b.size,0)}},{key:"needsUpdates",get:function(){return 0<this._instanceData.size&&1>this._updateCyclesWithStaticCamera}},{key:"octree",get:function(){this._octree||(this._octree=this.buildOctree());return this._octree}}]);return k}();const H=v.create(),r=O.create(),E=M.create(),F=v.create(),G=v.create(),I=[[1,0,1,1],[0,0,1,1],[0,1,0,1],[1,1,0,1],[1,
0,0,1]];w.LodRenderer=Z;w.setLevelSelectorFactory=function(k){D=k};Object.defineProperty(w,"__esModule",{value:!0})});