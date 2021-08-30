// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/CheckerBoard.glsl ../../../webgl/renderState".split(" "),function(t,
n,q,k,u,r,d,l,f,v,p,w,x,m){l=function(g){function e(){return g.apply(this,arguments)||this}q._inheritsLoose(e,g);var a=e.prototype;a.initializeProgram=function(b){var c=e.shader.get();const h=this.configuration;c=c.build({OITEnabled:0===h.transparencyPassType,multipassTerrainEnabled:h.multipassTerrainEnabled,cullAboveGround:h.cullAboveGround});return new w.Program(b.rctx,c,v.Default3D)};a.bindPass=function(b,c){r.bindProjectionMatrix(this.program,c.camera.projectionMatrix);this.program.setUniform2fv("size",
b.size);this.program.setUniform4fv("color1",b.color1);this.program.setUniform4fv("color2",b.color2);c.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",c.camera.nearFar),this.program.setUniform2fv("inverseViewport",c.inverseViewport),u.bindMultipassTerrainTexture(this.program,c))};a.bindDraw=function(b){r.bindView(this.program,b)};a.setPipelineState=function(b){const c=this.configuration,h=3===b,y=2===b;return m.makePipelineState({blending:c.transparent?h?z:p.OITBlending(b):null,
depthTest:{func:p.OITDepthTest(b)},depthWrite:h?c.writeDepth&&m.defaultDepthWriteParams:p.OITDepthWrite(b),colorWrite:m.defaultColorWriteParams,polygonOffset:h||y?c.polygonOffset&&A:{factor:-1,units:-25}})};a.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)};return e}(l.ShaderTechnique);l.shader=new d.ReloadableShaderModule(x.CheckerBoardShader,()=>new Promise(function(g,e){t(["./CheckerBoard.glsl"],g,e)}));const A={factor:0,units:-25},z=m.separateBlendingParams(770,
1,771,771);d=function(g){function e(){var a=g.apply(this,arguments)||this;a.transparent=!1;a.writeDepth=!0;a.polygonOffset=!1;a.transparencyPassType=3;a.multipassTerrainEnabled=!1;a.cullAboveGround=!1;return a}q._inheritsLoose(e,g);return e}(f.ShaderTechniqueConfiguration);k.__decorate([f.parameter()],d.prototype,"transparent",void 0);k.__decorate([f.parameter()],d.prototype,"writeDepth",void 0);k.__decorate([f.parameter()],d.prototype,"polygonOffset",void 0);k.__decorate([f.parameter({count:4})],
d.prototype,"transparencyPassType",void 0);k.__decorate([f.parameter()],d.prototype,"multipassTerrainEnabled",void 0);k.__decorate([f.parameter()],d.prototype,"cullAboveGround",void 0);n.CheckerBoardTechnique=l;n.CheckerBoardTechniqueConfiguration=d;Object.defineProperty(n,"__esModule",{value:!0})});