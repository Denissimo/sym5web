// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ./DefaultVertexAttributeLocations ./Program ../../../../chunks/SSAO.glsl ../../../webgl/renderState".split(" "),function(p,e,l,m,d,f,h,q,r,t,n){f=function(b){function a(){return b.apply(this,arguments)||this}l._inheritsLoose(a,b);var c=a.prototype;c.initializeProgram=
function(u){var k=a.shader.get();const g=this.configuration;k=k.build({output:g.output,samples:3===g.samples?64:2===g.samples?32:1===g.samples?16:8,radius:4});return new r.Program(u.rctx,k,q.Default3D)};c.initializePipeline=function(){return n.makePipelineState({colorWrite:n.defaultColorWriteParams})};return a}(f.ShaderTechnique);f.shader=new d.ReloadableShaderModule(t.SSAOShader,()=>new Promise(function(b,a){p(["../shaders/SSAO.glsl"],b,a)}));d=function(b){function a(){var c=b.apply(this,arguments)||
this;c.output=0;c.samples=3;return c}l._inheritsLoose(a,b);return a}(h.ShaderTechniqueConfiguration);m.__decorate([h.parameter({count:2})],d.prototype,"output",void 0);m.__decorate([h.parameter()],d.prototype,"samples",void 0);e.FILTER_RADIUS=4;e.SSAOTechnique=f;e.SSAOTechniqueConfiguration=d;Object.defineProperty(e,"__esModule",{value:!0})});