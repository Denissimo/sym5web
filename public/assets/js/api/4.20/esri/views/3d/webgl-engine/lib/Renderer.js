// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/MapUtils ../../../../core/maybe ../../../../core/TimeProfiler ../../../../core/watchUtils ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2f64 ../../support/debugFlags ../core/renderPasses/RenderPassManager ./BoundingInfo ./depthRange ./depthRangeUtils ./glUtil3D ./HighlightHelper ./Material ./OffscreenRendering ./RenderContext ./rendererUtils ./RenderPluginManager ./ShadowAccumulator ./ShadowHighlightHelper ./ShadowMap ./SliceHelper ./SmaaRenderPass ./SSAOHelper ./edgeRendering/EdgeView ../lighting/SceneLighting ../materials/renderers/MergedRenderer ../statistics/RendererPerformanceInfo ../../../webgl/Measurement".split(" "),
function(I,J,w,k,B,C,m,r,K,x,L,M,D,N,O,P,E,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea){let ha=function(){function y(a,b,c,e,d,g,h,l,p){this._materialRep=a;this._shaderTechniqueRepository=c;this._rctx=e;this._compositingHelper=d;this._magnifierHelper=g;this.requestRender=h;this._stage=p;this._materialRenderers=new Map;this._hasOverlayWater=this._hasWater=this._hasOccludees=this._hasHighlights=!1;this._content=new Map;this._isRendering=!1;this._fallbackDepthStencilTexture=null;this.performanceInfo=new da.RendererPerformanceInfo;
this._antialiasing=1;this._oitEnabled=!1;this._opaqueTerrain=this._multipassTerrain=!0;this._lighting=new ba.SceneLighting;this._handles=new J;this.renderHiddenTransparentEdges=()=>{};this._smaaPass=new Y.SmaaRenderPass(this._rctx,c);this._oitEnabled=this._hasOITSupport;this.requestRender();this._offscreenRendering=new Q.OffscreenRendering(this._rctx,this._compositingHelper);this._sliceHelper=new X;this._shadowMap=new W(this._rctx,p.viewingMode,2);this._ssaoHelper=new Z(c,this._rctx,()=>this.requestRender());
this._highlightHelper=new P(c,this._rctx);this._shadowHighlightHelper=new V.ShadowHighlightHelper(this._rctx,p.viewingMode);this._shadowAccumulator=new U.ShadowAccumulator(this._rctx,c,p,(n,z)=>{this.renderPassManager.shadowCastingEnabled=!0;this._renderPlugins.prepareRender(n,z);this.renderPassManager.shadowCastingEnabled=this._shadowMap.enabled},(n,z,A,fa)=>{n.start(A,z,fa);this.renderShadowCascades(4,n);A.setGLViewport(this._rctx);this.ensureCameraBindParameters(A)},()=>this.requestRender());this._bindParameters=
{slot:null,camera:null,inverseViewport:K.create(),shadowMap:this._shadowMap,shadowMappingEnabled:this._shadowMap.enabled,ssaoHelper:this._ssaoHelper,ssaoEnabled:this._ssaoHelper.enabled,origin:null,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,slicePlane:this._sliceHelper.plane,highlightDepthTexture:null,hasOccludees:!1,linearDepthTexture:null,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,multipassGeometryEnabled:!1,cullAboveGround:!1,lastFrameColorTexture:null,
reprojectionMat:null,ssrEnabled:!1,lighting:this._lighting,highlightColorTexture:null};this._renderContext=new R.RenderContext(this._rctx,this._offscreenRendering,this._lighting,this._shadowMap,this._ssaoHelper,this._sliceHelper);this._renderContext.multipassTerrainParams={camera:null,multipassTerrainEnabled:!1,cullAboveGround:!1,terrainLinearDepthTexture:null};this._renderContext.multipassGeometryParams={multipassGeometryEnabled:!1,geometryLinearDepthTexture:null};this._renderContext.ssrParams={camera:null,
linearDepthTexture:null,lastFrameColorTexture:null,reprojectionMat:null,ssrEnabled:!1};this._renderPlugins=new T.RenderPluginManager({renderContext:this._renderContext,shaderTechniqueRep:c,textureRep:b,materialRep:this._materialRep,requestRender:this.requestRender,schedule:l});this.renderPassManager=new L.RenderPassManager(this._rctx,this._shaderTechniqueRepository);this._renderPlugins.add(this.renderPassManager.slots(),this.renderPassManager);this._handles.add([C.init(x,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",
n=>{this.renderHiddenTransparentEdges=n?()=>this.renderEdges(1):()=>{};this.requestRender()}),C.init(this._stage,"camera",()=>this.requestRender(),!0)])}var f=y.prototype;f.dispose=function(){this._handles.destroy();this._smaaPass.disable();this._materialRenderers.forEach(a=>a.dispose());this._materialRenderers.clear();this._edgeView=k.destroyMaybe(this._edgeView);this._offscreenRendering.dispose();this._fallbackDepthStencilTexture=k.disposeMaybe(this._fallbackDepthStencilTexture);this._shadowMap.enabled=
!1;this._shadowMap.dispose();this._ssaoHelper.enabled=!1;this._ssaoHelper.dispose();this._highlightHelper.dispose();this._shadowHighlightHelper.dispose();this._shadowAccumulator.dispose();M.BoundingInfo.prune();this._content.clear()};f.ensureEdgeView=function(){k.isNone(this._edgeView)&&(this._edgeView=new aa.EdgeView({rctx:this._rctx,renderSR:this._stage.renderSR,techniqueRepository:this._shaderTechniqueRepository,setNeedsRender:()=>this.requestRender(),schedule:a=>this._stage.resourceController.schedule(a)}),
this._handles.add(this._edgeView.watch("updating",()=>this.requestRender(),!0)),this.requestRender());return this._edgeView};f.setRenderParameters=function(a){const {renderPassManager:b,_shadowMap:c,_ssaoHelper:e}=this;void 0!==a.screenSpaceReflectionsEnabled&&b.screenSpaceReflectionsEnabled!==a.screenSpaceReflectionsEnabled&&(b.screenSpaceReflectionsEnabled=a.screenSpaceReflectionsEnabled,this.requestRender());void 0===a.shadowMap||c.enabled===a.shadowMap&&b.shadowCastingEnabled===a.shadowMap||(c.enabled=
a.shadowMap,b.shadowCastingEnabled=a.shadowMap,this.requestRender());void 0!==a.shadowMapMaxCascades&&c.maxCascades!==a.shadowMapMaxCascades&&(c.maxCascades=a.shadowMapMaxCascades,this.requestRender());void 0!==a.ssao&&e.enabled!==a.ssao&&(e.enabled=a.ssao,this.requestRender());void 0!==a.ssaoAttenuation&&e.attenuation!==a.ssaoAttenuation&&(e.attenuation=a.ssaoAttenuation,this.requestRender());void 0!==a.ssaoRadius&&e.radius!==a.ssaoRadius&&(e.radius=a.ssaoRadius,this.requestRender());void 0!==a.ssaoSamples&&
e.samples!==a.ssaoSamples&&(e.samples=a.ssaoSamples,this.requestRender());a.background&&this._offscreenRendering.background!==a.background&&(this._offscreenRendering.background=a.background,this.requestRender());var d=a.antialiasingEnabled?1:0;void 0!==a.antialiasingEnabled&&this._antialiasing!==d&&(this._antialiasing=d,this.requestRender());void 0!==a.highQualityTransparency&&this._multipassTerrain!==a.highQualityTransparency&&(this._oitEnabled=(this._multipassTerrain=a.highQualityTransparency)&&
this._hasOITSupport,this.requestRender());void 0!==a.defaultHighlightOptions&&(this._highlightHelper.setDefaultOptions(a.defaultHighlightOptions),this._shadowHighlightHelper.setDefaultOptions(a.defaultHighlightOptions),this.requestRender());void 0!==a.slicePlane&&this._sliceHelper.plane!==a.slicePlane&&(this._sliceHelper.plane=k.unwrap(a.slicePlane),this.requestRender());d=10<=this._rctx.parameters.maxTextureImageUnits&&a.waterReflectionEnabled;void 0!==a.waterReflectionEnabled&&this._waterReflectionEnabled!==
d&&(this._waterReflectionEnabled=d,this.requestRender());void 0!==a.opaqueTerrain&&this._opaqueTerrain!==a.opaqueTerrain&&(this._opaqueTerrain=a.opaqueTerrain,this.requestRender());void 0!==a.hasOverlayWater&&this._hasOverlayWater!==a.hasOverlayWater&&(this._hasOverlayWater=a.hasOverlayWater,this.requestRender());void 0!==a.shadowAccumulationOptions&&this._shadowAccumulator.setOptions(a.shadowAccumulationOptions)};f.modify=function(a){this._isRendering&&console.warn("Renderer.modify called while rendering");
const {adds:b,removes:c,updates:e}=a;if(0!==b.length||0!==c.length||0!==e.length){c.forAll(({id:g})=>this._content.delete(g));b.forAll(g=>this._content.set(g.id,g));var d=!1;S.splitRenderGeometryChangeSetByMaterial(a).forEach((g,h)=>{let l=this._materialRenderers.get(h);if(!l)if(0<g.adds.length)l=new ca(this._rctx,this._materialRep,h),this._materialRenderers.set(h,l);else return;l.modify(g);l.isEmpty&&(d=!0)});d&&this._materialRenderers.forEach((g,h)=>{g.isEmpty&&(this._materialRenderers.delete(h),
g.dispose())});this._hasHighlights=w.someMap(this._materialRenderers,g=>g.hasHighlights);this._hasOccludees=w.someMap(this._materialRenderers,g=>g.hasOccludees);this._hasWater=w.someMap(this._materialRenderers,g=>g.hasWater);this.requestRender()}};f.updateLogic=function(a){let b=!1;this._materialRenderers.forEach(c=>{c.updateLogic&&(b=c.updateLogic(a)||b)});return b};f.updateLightSources=function(a,b,c){this._lighting.groundLightingFactor=b;this._lighting.globalFactor=c;this._lighting.set(a)};f.render=
function(a,b,c,e){this._isRendering=!0;this.performanceInfo.prerender(this._rctx);this._bindParameters.lighting=this._lighting;this._renderContext.hasOccludees=this._hasOccludees;this._renderContext.transparencyPassType=3;this._bindParameters.transparencyPassType=3;var d=this._offscreenRendering;d.needLastFrameColorTexture=this.hasWaterReflection;d.advanceCurrentRenderTarget();const g=this._sliceHelper.plane;e&&(this._sliceHelper.plane=null);this._rctx.bindFramebuffer(a);b.setGLViewport(this._rctx);
this.needsShadowAccumulation&&(this.renderPassManager.shadowCastingEnabled=!0);this._renderPlugins.prepareRender(b,c);this.performanceInfo.advance(0);var h=this.computeDepthRange(b);this.renderShadowMap(a,b,this._lighting.lightingMainDirection,h);this.performanceInfo.advance(1);d.initializeFrame(b);this.ensureBindParameters(b);this.renderLinearDepth();this.performanceInfo.advance(2);this.accumulateShadows(h,b,c);this.renderNormal();this.performanceInfo.advance(3);this.ensureBindParametersSSR();this._ssaoHelper.computeSSAO(b,
d.linearDepthTexture,d.normalTexture);this.performanceInfo.advance(4);this.performanceInfo.stats.reset();this._renderContext.pass=0;d.bindFramebuffer();this.renderSlot(0);this.renderOpaqueGeometry();this.performanceInfo.advance(5);b=this._multipassTerrain&&!this._opaqueTerrain;this.renderTerrainLinearDepth(b);this.setMultipassFlags(b);this.setTerrainCulling(b);this.renderEdges(2);this.performanceInfo.advance(6);this.renderHiddenTransparentEdges();this._oitEnabled?this.renderOrderIndependentTransparency(()=>
this.renderTransparentGeometry(),!1):this.renderTransparentGeometry();this.performanceInfo.advance(7);this.renderGeometryLinearDepth(b);h=c=!1;c=this.renderHUDVisibility();b||this.renderInternalSlot(20);this.performanceInfo.advance(9);this.renderEdges(1,b);this.performanceInfo.advance(8);(h=this.renderTransparentTerrain())&&c&&(b?this.renderLineCallouts(0):d.compositeTransparentTerrainOntoHUDVisibility(),this.renderHUD(0,d.framebuffer),this.performanceInfo.advance(16));this.performanceInfo.advance(10);
this.setTerrainCulling(!1);h&&(d.compositeTransparentTerrainOntoMain(),b&&(this.renderEdges(2),this.performanceInfo.advance(6),this._oitEnabled?this.renderOrderIndependentTransparency(()=>this.renderTransparentGeometry(),!1):this.renderTransparentGeometry(),this.performanceInfo.advance(7),this.renderEdges(1),this.performanceInfo.advance(8)));b&&this.renderLineCallouts(1);this.setMultipassFlags(!1);this._shadowAccumulator.render();d.renderToTargets(()=>{this.renderInternalSlot(8);this.renderSlot(15);
this.renderSlot(16)},d.currentColorTarget,d.mainDepth);this.performanceInfo.advance(11);this._renderPlugins.needsLaserlineWithContrastControl&&d.renderTmpAndCompositeToMain(()=>{this.renderSlot(17)},2);this.performanceInfo.advance(12);this.renderOccluded();this.performanceInfo.advance(13);d=(e=!e&&this._magnifierHelper.enabled)&&k.isNone(a)?this._offscreenRendering.getFramebuffer(this._offscreenRendering.tmpColor,this._offscreenRendering.tmpDepth):a;this._rctx.bindFramebuffer(d);this.renderAntiAliasing(this._antialiasing,
this._offscreenRendering.colorTexture)||this._compositingHelper.composite(this._offscreenRendering.colorTexture,0);this.performanceInfo.advance(14);this.renderHUD(1,d);this.performanceInfo.advance(17);this.renderHighlights(d,this._bindParameters);this.performanceInfo.advance(15);e&&this._magnifierHelper.render(this._rctx,this._bindParameters);d!==a&&(this._rctx.bindFramebuffer(a),this._compositingHelper.composite(this._offscreenRendering.tmpColorTexture,0));this._renderContext.lastFrameCamera.copyFrom(this._renderContext.camera);
this._sliceHelper.plane=g;this._isRendering=!1;if(this.onPostRender)this.onPostRender();this.performanceInfo.postrender()};f.readDepthPixels=function(a,b,c,e,d,g){const h=this._offscreenRendering.bindTarget(this._offscreenRendering.linearDepth,this._offscreenRendering.tmpDepth);this._needsLinearDepth||(this.ensureBindParameters(a),this._renderContext.camera.setGLViewport(this._rctx),this._rctx.setClearColor(0,0,0,0),this._rctx.clearSafe(17664),this.renderGeometryAndTransparentTerrainPass(2));h.readPixels(b,
c,e,d,6408,5121,g)};f.readAccumulatedShadow=function(a,b){return this._shadowAccumulator.readAccumulatedShadow(a,b)};f.setMultipassFlags=function(a){this._renderContext.multipassTerrainParams.multipassTerrainEnabled=this._bindParameters.multipassTerrainEnabled=a;this._renderContext.multipassGeometryParams.multipassGeometryEnabled=this._bindParameters.multipassGeometryEnabled=a};f.setTerrainCulling=function(a){this._renderContext.multipassTerrainParams.cullAboveGround=this._bindParameters.cullAboveGround=
a};f.renderSlot=function(a){this._renderContext.slot=a;return this._renderPlugins.render()};f.renderEdges=function(a,b=!1){const c=this._edgeView;k.isSome(c)&&c.shouldRender()&&this._offscreenRendering.renderTmpAndCompositeToMain(()=>c.render(this._bindParameters,a),1,b)};f.renderShadowMap=function(a,b,c,e){const d=this._shadowMap;if(d.enabled){x.ENABLE_PROFILE_DEPTH_RANGE&&B.begin("depthRange");x.ENABLE_PROFILE_DEPTH_RANGE&&B.end("depthRange");d.start(b,c,e);if(this.needsShadowHighlight){const g=
this._shadowHighlightHelper;this.renderShadowCascades(7,this._shadowMap,h=>d.takeCascadeSnapshotTo(h,g.highlightShadowMapSlot));d.clear();this.renderShadowCascades(6,this._shadowMap,h=>{d.takeCascadeSnapshotTo(h,g.defaultSnapshotSlot);this.renderGeometryAndTransparentTerrainPass(7)})}else this.renderShadowCascades(4);d.finish(a);b.setGLViewport(this._rctx)}};f.renderShadowCascades=function(a,b=this._shadowMap,c=e=>{}){for(const e of b.getCascades())e.camera.setGLViewport(this._rctx),this.ensureCameraBindParameters(e.camera),
this.renderGeometryAndTransparentTerrainPass(a),c(e)};f.renderLinearDepth=function(){this._needsLinearDepth?this._offscreenRendering.renderToTargets(()=>this.renderGeometryAndTransparentTerrainPass(2),this._offscreenRendering.linearDepth,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.linearDepth);this._renderContext.ssrParams.linearDepthTexture=this._bindParameters.linearDepthTexture=this._offscreenRendering.linearDepthTexture};f.renderTerrainLinearDepth=
function(a){a?(a=this._renderContext.pass,this._renderContext.pass=2,this._offscreenRendering.renderToTargets(()=>this.renderTransparentTerrain(),this._offscreenRendering.terrainLinearDepth,this._offscreenRendering.tmpDepth,[-1E10,-1E10,-1E10,1],!0,!0),this._renderContext.pass=a):this._offscreenRendering.disposeTarget(this._offscreenRendering.terrainLinearDepth);this._renderContext.multipassTerrainParams.terrainLinearDepthTexture=this._bindParameters.terrainLinearDepthTexture=this._offscreenRendering.terrainLinearDepthTexture};
f.renderGeometryLinearDepth=function(a){a?(a=this._renderContext.pass,this._offscreenRendering.renderToTargets(()=>this.renderGeometryPass(2),this._offscreenRendering.geometryLinearDepth,this._offscreenRendering.tmpDepth,[1,1,1,1],!0,!0),this._renderContext.pass=a):this._offscreenRendering.disposeTarget(this._offscreenRendering.geometryLinearDepth);this._renderContext.multipassGeometryParams.geometryLinearDepthTexture=this._bindParameters.geometryLinearDepthTexture=this._offscreenRendering.geometryLinearDepthTexture};
f.renderNormal=function(){this.needsNormal?this._offscreenRendering.renderToTargets(()=>{this.renderGeometryAndTransparentTerrainPass(3)},this._offscreenRendering.normal,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.normal)};f.computeDepthRange=function(a){if(!this.needsDepthRange)return D.ZERO;const b=N.depthRangeFromScene(a,this._content,this._stage.layers);D.union(b,this.renderPlugins.queryDepthRange(a));b.near=Math.max(a.near,
b.near);b.far=Math.min(a.far,b.far);return b};f.renderGeometryAndTransparentTerrainPass=function(a){this._renderContext.pass=a;this.renderGeometryPass(a);this.renderTransparentTerrain()};f.renderGeometryPass=function(a){this._renderContext.pass=a;this.renderOpaqueGeometry();this.renderTransparentGeometry()};f.renderOpaqueGeometry=function(){this.renderSlot(1);this.renderSlot(2);this.renderInternalSlot(3);this.renderSlot(4);this.renderSlot(14)};f.renderTransparentGeometry=function(){this.renderInternalSlot(5);
this.renderSlot(6)};f.renderTransparentTerrain=function(){return this.renderSlot(7)};f.renderHUDVisibility=function(){let a=!1;this._renderContext.offscreenRenderingHelper&&this._renderContext.offscreenRenderingHelper.renderHUDVisibility(()=>{this._bindParameters.hudVisibilityTexture=this._renderContext.offscreenRenderingHelper?this._renderContext.offscreenRenderingHelper.hudVisibilityTexture:null;a=this.renderInternalSlot(12)},this._multipassTerrain&&!this._opaqueTerrain);return a};f.renderLineCallouts=
function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;0===a?this._offscreenRendering.renderToTargets(()=>this.renderInternalSlot(20),this._offscreenRendering.currentColorTarget,this._offscreenRendering.tmpDepth,void 0,!0,!0):this.renderInternalSlot(20)};f.renderHUD=function(a,b){this._oitEnabled?(this.renderOrderIndependentTransparency(()=>this.renderHUDElements(a),!0),this._rctx.bindFramebuffer(b),this._compositingHelper.composite(this._offscreenRendering.hudColorTexture,2)):0===a?this._offscreenRendering.renderToTargets(()=>
this.renderHUDElements(0),this._offscreenRendering.currentColorTarget,this._offscreenRendering.tmpDepth,void 0,!0,!0):this.renderHUDElements(a)};f.renderHUDElements=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;this.renderInternalSlot(21);this.renderInternalSlot(18);this.renderInternalSlot(19)};f.renderHighlights=function(a,b){if(this.needsHighlight){var c=this._highlightHelper,e=c.profilingCallback&&ea.startMeasurement(this._renderContext.rctx);this._renderContext.highlightDepthTexture=
b.highlightDepthTexture;var d=this._offscreenRendering.renderToTargets(()=>{this.renderGeometryAndTransparentTerrainPass(5);this._rctx.clearSafe(256);this.renderHUDElements(2)},this._offscreenRendering.highlight,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0);this._bindParameters.highlightColorTexture=d.colorTexture;this.needsShadowHighlight&&this._shadowHighlightHelper.render(b,a);c.render(this._renderContext.camera,d,a);k.isSome(e)&&c.profilingCallback&&e.stop(g=>{c.profilingCallback&&c.profilingCallback(g)})}else this._offscreenRendering.disposeTarget(this._offscreenRendering.highlight)};
f.accumulateShadows=function(a,b,c){this.needsShadowAccumulation&&(this._shadowAccumulator.setAccumulationDependencies(this._offscreenRendering.linearDepthTexture,a,b,c),this._shadowAccumulator.accumulateFixedSamples(),this.renderPassManager.shadowCastingEnabled=this._shadowMap.enabled)};f.renderOrderIndependentTransparency=function(a,b){const c=d=>{this._renderContext.transparencyPassType=d;this._bindParameters.transparencyPassType=this._renderContext.transparencyPassType;this._offscreenRendering.renderOITPass(()=>
a(),d,b)},e=this._renderContext.pass;this._renderContext.pass=1;c(1);this._renderContext.pass=0;c(0);c(2);this._offscreenRendering.compositeTransparentOntoOpaque(b);this._renderContext.transparencyPassType=3;this._bindParameters.transparencyPassType=this._renderContext.transparencyPassType;this._renderContext.pass=e};f.renderOccluded=function(){let a=0;this._materialRenderers.forEach((g,h)=>{h&&h.isVisible()&&8===h.renderOccluded&&(a|=h.renderOccluded,t.push(h))});const b=this._offscreenRendering,
c=(g,h,l,p,n)=>{0!==(a&h)&&(b.renderToTargets(l,b.tmpColor,b.mainDepth,[0,0,0,0],p,n),b.compositeOccludedOntoMain(g))};0!==t.length&&(this.renderInternalSlot(10,t),c(.5,8,()=>this.renderInternalSlot(11,t),!1,!1),t.length=0);this._materialRenderers.forEach((g,h)=>{h&&h.isVisible()&&(4===h.renderOccluded||2===h.renderOccluded||16===h.renderOccluded)&&(a|=h.renderOccluded,u.push(h))});const e=this._renderPlugins.renderOccludedFlags;if(a|=e){var d=g=>{this._renderContext.renderOccludedMask=g;1<e&&this.renderSlot(9);
this.renderInternalSlot(3,u);this.renderInternalSlot(5,u);this.renderInternalSlot(8,u);this._renderContext.resetRenderOccludedMask()};this._renderContext.pass=0;c(.5,4,()=>d(4),!0,2);c(.5,2,()=>d(2),!0,2);c(1,16,()=>d(16),!0,2);u.length=0}};f.renderAntiAliasing=function(a,b){if(1===a){if(this._smaaPass.loadResources(()=>this.requestRender()),this._smaaPass.enable())return this._smaaPass.render({colorTexture:b}),!0}else this._smaaPass.disable();return!1};f.ensureCameraBindParameters=function(a){this._renderContext.camera=
a;this._bindParameters.camera=this._renderContext.camera;this._bindParameters.inverseViewport[0]=1/this._renderContext.camera.fullViewport[2];this._bindParameters.inverseViewport[1]=1/this._renderContext.camera.fullViewport[3]};f.ensureBindParameters=function(a){var b;this.ensureCameraBindParameters(a);a=this._renderContext.offscreenRenderingHelper;this._bindParameters.shadowMap=this._renderContext.shadowMap;this._bindParameters.shadowMappingEnabled=this._renderContext.shadowMap.enabled;this._bindParameters.ssaoHelper=
this._renderContext.ssaoHelper;this._bindParameters.ssaoEnabled=this._renderContext.ssaoHelper.enabled;this._bindParameters.slicePlane=this._renderContext.sliceHelper.plane;this._bindParameters.hasOccludees=this._renderContext.hasOccludees;this._renderContext.multipassTerrainParams.camera=this._renderContext.camera;this._bindParameters.hudVisibilityTexture=a.hudVisibilityTexture;this._bindParameters.highlightDepthTexture=null!=(b=a.depthTexture)?b:this.getFallbackDepthTexture()};f.ensureBindParametersSSR=
function(){this.hasWaterReflection?(this._renderContext.lastFrameCamera.equals(this._renderContext.camera)?this._renderContext.ssrParams.reprojectionMat=this._bindParameters.reprojectionMat=F:(m.translate(G,this._renderContext.lastFrameCamera.viewMatrix,this._bindParameters.origin?this._bindParameters.origin:[0,0,0]),m.translate(v,this._renderContext.camera.viewMatrix,this._bindParameters.origin?this._bindParameters.origin:[0,0,0]),m.invert(v,v),m.invert(H,this._renderContext.camera.projectionMatrix),
m.multiply(q,v,H),m.multiply(q,G,q),m.multiply(q,this._renderContext.lastFrameCamera.projectionMatrix,q),this._renderContext.ssrParams.reprojectionMat=this._bindParameters.reprojectionMat=q),this._renderContext.ssrParams.camera=this._renderContext.camera,this._renderContext.ssrParams.lastFrameColorTexture=this._bindParameters.lastFrameColorTexture=this._offscreenRendering.lastFrameColorTexture):this._renderContext.ssrParams.lastFrameColorTexture=this._bindParameters.lastFrameColorTexture=null;this._renderContext.ssrParams.ssrEnabled=
this._bindParameters.ssrEnabled=this.hasWaterReflection};f.renderInternalSlot=function(a,b){const c=0===this._renderContext.pass?this.performanceInfo.stats:null;let e=!1;this._bindParameters.slot=a;k.isSome(b)?b.forEach(d=>{E.materialPredicate(d,this._renderContext)&&(d=this._materialRenderers.get(d),k.isSome(d)&&(e=d.render(a,this._renderContext.pass,this._bindParameters)||e))}):this._materialRenderers.forEach((d,g)=>{E.materialPredicate(g,this._renderContext)&&(e=d.render(a,this._renderContext.pass,
this._bindParameters,c)||e)});return e};f.getFallbackDepthTexture=function(){this._fallbackDepthStencilTexture||(this._fallbackDepthStencilTexture=O.createEmptyDepthTexture(this._rctx));return this._fallbackDepthStencilTexture};f.getGpuMemoryUsage=function(){return{offscreen:this._offscreenRendering?this._offscreenRendering.getGpuMemoryUsage():0,highlights:(this._highlightHelper?this._highlightHelper.getGpuMemoryUsage():0)+(this._shadowHighlightHelper?this._shadowHighlightHelper.getGpuMemoryUsage():
0),shadows:this._shadowMap?this._shadowMap.getGpuMemoryUsage():0,ssao:this._ssaoHelper?this._ssaoHelper.gpuMemoryUsage:0}};I._createClass(y,[{key:"hasWater",get:function(){return this._hasWater||this._hasOverlayWater}},{key:"hasWaterReflection",get:function(){return this.hasWater&&this._waterReflectionEnabled}},{key:"updating",get:function(){return 1===this._antialiasing&&this._smaaPass.isLoadingResources||k.isSome(this._edgeView)&&this._edgeView.updating||this._shadowAccumulator.running||!this.isCameraFinal}},
{key:"edgeView",get:function(){return this._edgeView}},{key:"isCameraFinal",get:function(){return null===this._bindParameters.reprojectionMat||m.equals(this._bindParameters.reprojectionMat,F)}},{key:"hasShadowsEnabled",get:function(){var a;return!(null==(a=this._shadowMap)||!a.enabled)}},{key:"hasSlicePlane",get:function(){return!!this._sliceHelper.plane}},{key:"renderPlugins",get:function(){return this._renderPlugins}},{key:"_hasOITSupport",get:function(){return this._rctx.capabilities.textureFloat&&
this._rctx.capabilities.textureFloat.textureFloat&&this._rctx.capabilities.colorBufferFloat&&this._rctx.capabilities.colorBufferFloat.textureFloat}},{key:"_needsLinearDepth",get:function(){return this._ssaoHelper.enabled||this._renderPlugins.needsLinearDepth||this._hasWater&&this._waterReflectionEnabled||this.needsShadowHighlight||this.needsShadowAccumulation}},{key:"needsNormal",get:function(){return this._ssaoHelper.enabled}},{key:"needsDepthRange",get:function(){return this._shadowMap.enabled||
this.needsShadowAccumulation}},{key:"needsHighlight",get:function(){return this._hasHighlights||this._renderPlugins.needsHighlight}},{key:"needsShadowHighlight",get:function(){return this._shadowMap.enabled&&this._shadowHighlightHelper.isVisible&&this.needsHighlight}},{key:"needsShadowAccumulation",get:function(){return this._shadowAccumulator.isAccumulating}},{key:"test",get:function(){const a=this;return{antialiasing:this._antialiasing,offscreen:this._offscreenRendering,shadowMap:this._shadowMap,
ssao:this._ssaoHelper,highlight:this._highlightHelper,lighting:this._lighting,materialRenderers:this._materialRenderers,oitEnabled:this._oitEnabled,shadowHighlights:this._shadowHighlightHelper,getFramebufferTexture:b=>{var c;switch(b){case 0:return a._offscreenRendering.colorTexture;case 1:return a._offscreenRendering.linearDepthTexture;case 2:return a._offscreenRendering.normalTexture;case 3:return null==(c=a._shadowMap)?void 0:c.test.depthTexture;case 4:return a._offscreenRendering.hudVisibilityTexture;
case 5:return a._offscreenRendering.highlightTexture}}}}}]);return y}();const u=[],t=[],G=r.create(),H=r.create(),v=r.create(),q=r.create(),F=r.create();return ha});