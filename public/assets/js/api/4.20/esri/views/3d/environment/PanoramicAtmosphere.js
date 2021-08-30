// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../support/requestImageUtils ./SimpleAtmosphereTechnique ./resources/SimpleAtmosphereTexture ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/core/shaderLibrary/util/View.glsl ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/GeometryUtil ../../webgl/BufferObject ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(t,h,k,l,u,v,w,p,x,y,z,A,B,C,D,E,F,G){const H=h.getLogger("esri.views.3d.environment.PanoramicAtmosphere");h=function(){function m(){this.slot=14;this._atmosphereTechniqueConfig=new p.SimpleAtmosphereTechniqueConfiguration;this._readyResolver=l.createResolver();this._readyController=l.createAbortController()}var e=m.prototype;e.destroy=function(){this._readyResolver.reject();this._texture=k.disposeMaybe(this._texture);this._vao=k.disposeMaybe(this._vao);this._readyController=k.abortMaybe(this._readyController)};
e.when=function(){return this._readyResolver.promise};e.initializeRenderContext=function(d){this._atmosphereTechniqueConfig.geometry=1;this._atmosphereTechnique=d.shaderTechniqueRep.acquire(p.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig);const c=d.renderContext.rctx;this._vao=this._createVertexArrayObject(c);this._vaoCount=F.vertexCount(this._vao,"geometry");w.requestImage(x,{signal:this._readyController.signal}).then(a=>{this._texture=new E(c,{pixelFormat:6408,dataType:5121,wrapMode:33071,
samplingMode:9729,flipped:!0},a);d.requestRender();this._readyController=null;this._readyResolver.resolve()}).catch(a=>{l.isAbortError(a)||H.error("Unable to initialize atmosphere: image request failed",a);this._readyResolver.reject()})};e.uninitializeRenderContext=function(){this.destroy()};e.render=function(d){if(d.slot!==this.slot||0!==d.pass)return!1;const c=d.rctx,a=this._atmosphereTechnique.program;c.useProgram(a);this._atmosphereTechnique.bindPipelineState(c);a.bindTexture(this._texture,"tex");
A.bindProjectionMatrix(a,d.camera.projectionMatrix);var b=q;u.copy(b,d.camera.viewMatrix);b[12]=0;b[13]=0;b[14]=0;b[15]=1;a.setUniformMatrix4fv("view",q);a.setUniform4f("color",1,1,1,1);d.scenelightingData.setLightDirectionUniform(a);c.bindVAO(this._vao);a.assertCompatibleVertexAttributeLocations(this._vao);c.drawArrays(4,0,this._vaoCount);return!0};e._createVertexArrayObject=function(d){var c=C.createPolySphereGeometry(1,2,!1);const a=c.indices.get("position");for(var b=0;b<a.length;b+=3){var g=
a[b];a[b]=a[b+2];a[b+2]=g}c=c.vertexAttributes.get("position").data;b=r.createBuffer(a.length);g=b.position;for(let f=0;f<a.length;++f){const n=3*a[f];g.set(f,0,c[n]);g.set(f,1,c[n+1]);g.set(f,2,c[n+2])}return new G(d,B.Default3D,{geometry:y.glLayout(r)},{geometry:D.createVertex(d,35044,b.buffer)})};t._createClass(m,[{key:"canRender",get:function(){return null!=this._texture}}]);return m}();const q=v.create(),r=z.newLayout().vec3f("position");return h});