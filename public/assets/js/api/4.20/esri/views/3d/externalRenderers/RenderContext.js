// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../chunks/vec3f64","../webgl-engine/lib/Camera"],function(a,d){return function(){function b(e){this.view=e;this._renderTargetHelper=null;this.camera=new d;this.sunLight={direction:a.create(),ambient:{color:a.create(),intensity:1},diffuse:{color:a.create(),intensity:1}}}var c=b.prototype;c.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())};c.bindRenderTarget=function(){this._renderTargetHelper&&
this._renderTargetHelper.framebuffer.initializeAndBind()};return b}()});