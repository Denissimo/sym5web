// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../core/shaderLibrary/hud/HUD.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/MultipassGeometryTest.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/ScreenSizePerspective.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/HUDMaterial.glsl ../../../webgl/renderState".split(" "),
function(t,p,q,f,u,v,w,x,y,z,A,B,l,c,m,d,C,D,E,r,n){m=function(k){function h(){return k.apply(this,arguments)||this}q._inheritsLoose(h,k);var b=h.prototype;b.initializeProgram=function(g){var a=h.shader.get();const e=this.configuration;a=a.build({output:e.output,FrontFacePass:2===e.transparencyPassType,viewingMode:g.viewingMode,occlusionTestEnabled:e.occlusionTestEnabled,signedDistanceFieldEnabled:e.sdf,slicePlaneEnabled:e.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,
debugDrawBorder:e.debugDrawBorder,binaryHighlightOcclusionEnabled:e.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:e.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:e.screenSizePerspective,verticalOffsetEnabled:e.verticalOffset,pixelSnappingEnabled:e.pixelSnappingEnabled,vvSize:e.vvSize,vvColor:e.vvColor,vvInstancingEnabled:!1,isDraped:e.isDraped,multipassGeometryEnabled:e.multipassGeometryEnabled,multipassTerrainEnabled:e.multipassTerrainEnabled,cullAboveGround:e.cullAboveGround});
return new E.Program(g.rctx,a,C.Default3D)};b.bindPass=function(g,a){l.bindProjectionMatrix(this.program,a.camera.projectionMatrix);this.program.setUniform1f("cameraGroundRelative",a.camera.aboveGround?1:-1);this.program.setUniform1f("perDistancePixelRatio",Math.tan(a.camera.fovY/2)/(a.camera.fullViewport[2]/2));this.program.setUniformMatrix4fv("viewNormal",a.camera.viewInverseTransposeMatrix);this.program.setUniform1f("polygonOffset",g.shaderPolygonOffset);v.bindVerticalOffsetUniforms(this.program,
g,a);B.bindScreenSizePerspectiveUniforms(this.program,g);this.program.setUniform1f("pixelRatio",a.camera.pixelRatio||1);l.bindViewport(this.program,a);6===this.configuration.output?(this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),y.bindMultipassGeometryTexture(this.program,a),z.bindMultipassTerrainTexture(this.program,a)):(w.bindHUDUniforms(this.program,a),r.bindHUDMaterialUniforms(this.program,g,a.camera.pixelRatio||1),
A.bindVisualVariablesUniforms(this.program,g),this.configuration.occlusionTestEnabled&&this.program.bindTexture(a.hudVisibilityTexture,"hudVisibilityTexture"));4===this.configuration.output&&x.bindOutputHighlight(this.program,a)};b.bindDraw=function(g){l.bindView(this.program,g);l.bindCameraPosition(this.program,g.origin,g.camera.viewInverseTransposeMatrix);u.bindSliceUniformsWithOrigin(this.program,this.configuration,g);this.program.rebindTextures()};b.setPipelineState=function(g){const a=this.configuration,
e=3===g,G=this.configuration.polygonOffsetEnabled&&F,H=!e&&2!==g||4===a.output?null:(a.depthEnabled||6===a.output)&&n.defaultDepthWriteParams;return n.makePipelineState({blending:0===a.output||7===a.output||4===a.output?e?I:D.OITBlending(g):null,depthTest:{func:515},depthWrite:H,colorWrite:n.defaultColorWriteParams,polygonOffset:G})};b.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)};q._createClass(h,[{key:"primitiveType",get:function(){return 6===
this.configuration.output?0:4}}]);return h}(m.ShaderTechnique);m.shader=new c.ReloadableShaderModule(r.HUDMaterialShader,()=>new Promise(function(k,h){t(["./HUDMaterial.glsl"],k,h)}));const F={factor:0,units:-4},I=n.simpleBlendingParams(1,771);c=function(k){function h(){var b=k.apply(this,arguments)||this;b.output=0;b.occlusionTestEnabled=!0;b.sdf=!1;b.vvSize=!1;b.vvColor=!1;b.verticalOffset=!1;b.screenSizePerspective=!1;b.screenCenterOffsetUnitsEnabled=0;b.debugDrawBorder=!0;b.binaryHighlightOcclusion=
!0;b.slicePlaneEnabled=!1;b.polygonOffsetEnabled=!1;b.depthEnabled=!0;b.transparencyPassType=3;b.pixelSnappingEnabled=!0;b.isDraped=!1;b.multipassGeometryEnabled=!1;b.multipassTerrainEnabled=!1;b.cullAboveGround=!1;return b}q._inheritsLoose(h,k);return h}(d.ShaderTechniqueConfiguration);f.__decorate([d.parameter({count:8})],c.prototype,"output",void 0);f.__decorate([d.parameter()],c.prototype,"occlusionTestEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"sdf",void 0);f.__decorate([d.parameter()],
c.prototype,"vvSize",void 0);f.__decorate([d.parameter()],c.prototype,"vvColor",void 0);f.__decorate([d.parameter()],c.prototype,"verticalOffset",void 0);f.__decorate([d.parameter()],c.prototype,"screenSizePerspective",void 0);f.__decorate([d.parameter({count:2})],c.prototype,"screenCenterOffsetUnitsEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"debugDrawBorder",void 0);f.__decorate([d.parameter()],c.prototype,"binaryHighlightOcclusion",void 0);f.__decorate([d.parameter()],c.prototype,
"slicePlaneEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"polygonOffsetEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"depthEnabled",void 0);f.__decorate([d.parameter({count:4})],c.prototype,"transparencyPassType",void 0);f.__decorate([d.parameter()],c.prototype,"pixelSnappingEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"isDraped",void 0);f.__decorate([d.parameter()],c.prototype,"multipassGeometryEnabled",void 0);f.__decorate([d.parameter()],c.prototype,"multipassTerrainEnabled",
void 0);f.__decorate([d.parameter()],c.prototype,"cullAboveGround",void 0);p.HUDMaterialTechnique=m;p.HUDMaterialTechniqueConfiguration=c;Object.defineProperty(p,"__esModule",{value:!0})});