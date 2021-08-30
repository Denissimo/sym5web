// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ./DefaultVertexAttributeLocations ./Program ../../../../chunks/SMAA.glsl ../../../webgl/renderState".split(" "),function(l,f,g,m,d,e,h,n,p,q,k){e=function(b){function a(){return b.apply(this,arguments)||this}g._inheritsLoose(a,b);var c=a.prototype;c.initializeProgram=
function(r){const t=a.shader.get().build({output:this.configuration.output,threshold:.05,localConstrastAdaption:2,maxSearchSteps:8,maxDistanceAreaTex:16});return new p.Program(r.rctx,t,n.Default3D)};c.initializePipeline=function(){return k.makePipelineState({colorWrite:k.defaultColorWriteParams})};return a}(e.ShaderTechnique);e.shader=new d.ReloadableShaderModule(q.SMAAShader,()=>new Promise(function(b,a){l(["../shaders/SMAA.glsl"],b,a)}));d=function(b){function a(){var c=b.apply(this,arguments)||
this;c.output=0;return c}g._inheritsLoose(a,b);return a}(h.ShaderTechniqueConfiguration);m.__decorate([h.parameter({count:3})],d.prototype,"output",void 0);f.SMAATechnique=e;f.SMAATechniqueConfiguration=d;Object.defineProperty(f,"__esModule",{value:!0})});