// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../chunks/vec3f64 ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/DoublePrecision.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../materials/internal/MaterialUtil ../../../../chunks/DefaultMaterial.glsl ../../../webgl/renderState".split(" "),
function(x,r,w,f,y,z,A,B,C,D,E,F,G,H,t,c,n,e,I,p,J,u,v,K,q){n=function(k){function h(){return k.apply(this,arguments)||this}w._inheritsLoose(h,k);var b=h.prototype;b.initializeProgram=function(d){var g=h.shader.get();const a=this.configuration;g=g.build({OITEnabled:0===a.transparencyPassType,output:a.output,viewingMode:d.viewingMode,receiveShadows:a.receiveShadows,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:a.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:a.symbolColors,
vvSize:a.vvSize,vvColor:a.vvColor,vvInstancingEnabled:!0,instanced:a.instanced,instancedColor:a.instancedColor,instancedDoublePrecision:a.instancedDoublePrecision,pbrMode:a.usePBR?a.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:a.hasMetalnessAndRoughnessTexture,hasEmissionTexture:a.hasEmissionTexture,hasOcclusionTexture:a.hasOcclusionTexture,hasNormalTexture:a.hasNormalTexture,hasColorTexture:a.hasColorTexture,receiveAmbientOcclusion:a.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:a.normalsTypeDerivate?
3:0,doubleSidedMode:a.doubleSidedMode,vertexTangents:a.vertexTangents,attributeTextureCoordinates:a.hasMetalnessAndRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture||a.hasNormalTexture||a.hasColorTexture?1:0,textureAlphaPremultiplied:a.textureAlphaPremultiplied,attributeColor:a.vertexColors,screenSizePerspectiveEnabled:a.screenSizePerspective,verticalOffsetEnabled:a.verticalOffset,offsetBackfaces:a.offsetBackfaces,doublePrecisionRequiresObfuscation:H.doublePrecisionRequiresObfuscation(d.rctx),
alphaDiscardMode:a.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new J.Program(d.rctx,g,I.Default3D)};b.bindPass=function(d,g){var a,m;t.bindProjectionMatrix(this.program,g.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||g.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",g.camera.nearFar);g.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",
g.inverseViewport),D.bindMultipassTerrainTexture(this.program,g));7===l&&(this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.program.setUniform4fv("externalColor",d.externalColor),this.program.setUniform1i("colorMixMode",v.colorMixModes[d.colorMixMode]));0===l?(g.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",d.ambient),this.program.setUniform3fv("diffuse",d.diffuse),this.program.setUniform4fv("externalColor",d.externalColor),
this.program.setUniform1i("colorMixMode",v.colorMixModes[d.colorMixMode]),this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.configuration.usePBR&&E.bindPBRUniforms(this.program,d,this.configuration.isSchematic)):4===l&&C.bindOutputHighlight(this.program,g);G.bindVisualVariablesUniformsForSymbols(this.program,d);B.bindVerticalOffsetUniforms(this.program,d,g);v.bindScreenSizePerspective(d.screenSizePerspective,this.program,"screenSizePerspectiveAlignment");
2!==d.textureAlphaMode&&3!==d.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff);null==(a=g.shadowMap)?void 0:a.bind(this.program);null==(m=g.ssaoHelper)?void 0:m.bind(this.program)};b.bindDraw=function(d){const g=this.configuration.instancedDoublePrecision?y.fromValues(d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]):d.origin;t.bindViewCustomOrigin(this.program,g,d.camera.viewMatrix);this.program.rebindTextures();
(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&t.bindCameraPosition(this.program,g,d.camera.viewInverseTransposeMatrix);2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",d.camera.viewInverseTransposeMatrix);this.configuration.instancedDoublePrecision&&
A.InstancedDoublePrecision.bindCustomOrigin(this.program,g);z.bindSliceUniforms(this.program,this.configuration,d.slicePlane,g);0===this.configuration.output&&F.bindReadShadowMapViewCustomOrigin(this.program,d,g)};b.setPipeline=function(d,g){const a=this.configuration,m=3===d,l=2===d;return q.makePipelineState({blending:0!==a.output&&7!==a.output||!a.transparent?null:m?p.blendingDefault:p.OITBlending(d),culling:(a.cullFace?0!==a.cullFace:a.slicePlaneEnabled?!1:!a.transparent&&!a.doubleSidedMode)&&
q.cullingParams(a.cullFace),depthTest:{func:p.OITDepthTest(d)},depthWrite:m||l?a.writeDepth&&q.defaultDepthWriteParams:null,colorWrite:q.defaultColorWriteParams,stencilWrite:a.sceneHasOcludees?u.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?g?u.stencilToolMaskBaseParams:u.stencilBaseAllZerosParams:null,polygonOffset:m||l?null:p.getOITPolygonOffset(a.enableOffset)})};b.initializePipeline=function(){this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0);return this.setPipeline(this.configuration.transparencyPassType,
!1)};b.getPipelineState=function(d){return d?this._occludeePipelineState:this.pipeline};return h}(n.ShaderTechnique);n.shader=new c.ReloadableShaderModule(K.DefaultMaterialShader,()=>new Promise(function(k,h){x(["./DefaultMaterial.glsl"],k,h)}));c=function(k){function h(){var b=k.apply(this,arguments)||this;b.output=0;b.alphaDiscardMode=1;b.doubleSidedMode=0;b.isSchematic=!1;b.vertexColors=!1;b.offsetBackfaces=!1;b.symbolColors=!1;b.vvSize=!1;b.vvColor=!1;b.verticalOffset=!1;b.receiveShadows=!1;b.slicePlaneEnabled=
!1;b.sliceHighlightDisabled=!1;b.receiveAmbientOcclusion=!1;b.screenSizePerspective=!1;b.textureAlphaPremultiplied=!1;b.hasColorTexture=!1;b.usePBR=!1;b.hasMetalnessAndRoughnessTexture=!1;b.hasEmissionTexture=!1;b.hasOcclusionTexture=!1;b.hasNormalTexture=!1;b.instanced=!1;b.instancedColor=!1;b.instancedDoublePrecision=!1;b.vertexTangents=!1;b.normalsTypeDerivate=!1;b.writeDepth=!0;b.sceneHasOcludees=!1;b.transparent=!1;b.enableOffset=!0;b.cullFace=0;b.transparencyPassType=3;b.multipassTerrainEnabled=
!1;b.cullAboveGround=!1;return b}w._inheritsLoose(h,k);return h}(e.ShaderTechniqueConfiguration);f.__decorate([e.parameter({count:8})],c.prototype,"output",void 0);f.__decorate([e.parameter({count:4})],c.prototype,"alphaDiscardMode",void 0);f.__decorate([e.parameter({count:3})],c.prototype,"doubleSidedMode",void 0);f.__decorate([e.parameter()],c.prototype,"isSchematic",void 0);f.__decorate([e.parameter()],c.prototype,"vertexColors",void 0);f.__decorate([e.parameter()],c.prototype,"offsetBackfaces",
void 0);f.__decorate([e.parameter()],c.prototype,"symbolColors",void 0);f.__decorate([e.parameter()],c.prototype,"vvSize",void 0);f.__decorate([e.parameter()],c.prototype,"vvColor",void 0);f.__decorate([e.parameter()],c.prototype,"verticalOffset",void 0);f.__decorate([e.parameter()],c.prototype,"receiveShadows",void 0);f.__decorate([e.parameter()],c.prototype,"slicePlaneEnabled",void 0);f.__decorate([e.parameter()],c.prototype,"sliceHighlightDisabled",void 0);f.__decorate([e.parameter()],c.prototype,
"receiveAmbientOcclusion",void 0);f.__decorate([e.parameter()],c.prototype,"screenSizePerspective",void 0);f.__decorate([e.parameter()],c.prototype,"textureAlphaPremultiplied",void 0);f.__decorate([e.parameter()],c.prototype,"hasColorTexture",void 0);f.__decorate([e.parameter()],c.prototype,"usePBR",void 0);f.__decorate([e.parameter()],c.prototype,"hasMetalnessAndRoughnessTexture",void 0);f.__decorate([e.parameter()],c.prototype,"hasEmissionTexture",void 0);f.__decorate([e.parameter()],c.prototype,
"hasOcclusionTexture",void 0);f.__decorate([e.parameter()],c.prototype,"hasNormalTexture",void 0);f.__decorate([e.parameter()],c.prototype,"instanced",void 0);f.__decorate([e.parameter()],c.prototype,"instancedColor",void 0);f.__decorate([e.parameter()],c.prototype,"instancedDoublePrecision",void 0);f.__decorate([e.parameter()],c.prototype,"vertexTangents",void 0);f.__decorate([e.parameter()],c.prototype,"normalsTypeDerivate",void 0);f.__decorate([e.parameter()],c.prototype,"writeDepth",void 0);f.__decorate([e.parameter()],
c.prototype,"sceneHasOcludees",void 0);f.__decorate([e.parameter()],c.prototype,"transparent",void 0);f.__decorate([e.parameter()],c.prototype,"enableOffset",void 0);f.__decorate([e.parameter({count:3})],c.prototype,"cullFace",void 0);f.__decorate([e.parameter({count:4})],c.prototype,"transparencyPassType",void 0);f.__decorate([e.parameter()],c.prototype,"multipassTerrainEnabled",void 0);f.__decorate([e.parameter()],c.prototype,"cullAboveGround",void 0);r.DefaultMaterialTechnique=n;r.DefaultMaterialTechniqueConfiguration=
c;Object.defineProperty(r,"__esModule",{value:!0})});