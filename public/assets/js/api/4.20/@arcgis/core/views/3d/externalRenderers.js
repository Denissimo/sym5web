/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{c as e}from"../../chunks/mat4f64.js";import{projectBuffer as t,computeLinearTransformation as r}from"../../geometry/projection.js";import s from"../../core/Collection.js";import{L as n}from"../../chunks/Logger.js";import{init as i}from"../../core/watchUtils.js";import{b as o,j as c}from"../../chunks/mathUtils.js";import{C as a}from"../../chunks/Camera.js";import"../../core/Error.js";import"../../core/lang.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../chunks/tslib.es6.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../chunks/write.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";import"../../chunks/mat4.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/Evented.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/frustum.js";import"../../chunks/vectorStacks.js";import"../../chunks/quatf64.js";import"../../chunks/ray.js";import"../../chunks/plane.js";import"../../chunks/sphere.js";import"../../chunks/Util.js";class d{constructor(e){this.view=e,this._renderTargetHelper=null,this.camera=new a,this.sunLight={direction:o(),ambient:{color:o(),intensity:1},diffuse:{color:o(),intensity:1}}}resetWebGLState(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())}bindRenderTarget(){if(this._renderTargetHelper){this._renderTargetHelper.framebuffer.initializeAndBind()}}}const h=n.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore");class p{constructor(e){this.view=e,this.canRender=!0,this.renderers=new s,this._readyWatchHandle=i(e,"ready",(e=>{e?(this.context=new d(this.view),this.view._stage.addRenderPlugin([4,6],this)):(this.renderers.forEach((e=>m(e,"dispose",this.context))),this.context=null)}))}destroy(){this.renderers.drain((e=>{this.context&&m(e,"dispose",this.context)})),this.view._stage&&this.view._stage.removeRenderPlugin(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null}add(e){-1===this.renderers.indexOf(e)?(this.renderers.add(e),this.context&&(this._webglStateReset(),m(e,"setup",this.context),this.view._stage.renderView.setNeedsRender())):h.warn("add(): Cannot add external renderer: renderer has already been added")}remove(e){const t=this.renderers.indexOf(e);-1!==t&&(this.renderers.removeAt(t),this.context&&(m(e,"dispose",this.context),this.view._stage.renderView.setNeedsRender()))}initializeRenderContext(e){this.context.gl=e.renderContext.rctx.gl,this.context.rctx=e.renderContext.rctx,this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach((e=>m(e,"setup",this.context)))}uninitializeRenderContext(){}render(e){return 0!==e.pass||(this._updateContext(e),this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach((t=>{switch(e.slot){case 4:m(t,"render",this.context);break;case 6:m(t,"renderTransparent",this.context)}}))),!0}_updateContext(e){this.context.camera.copyFrom(e.camera),c(this.context.sunLight.direction,e.scenelightingData.old.direction),c(this.context.sunLight.diffuse.color,e.scenelightingData.old.diffuse.color),c(this.context.sunLight.ambient.color,e.scenelightingData.old.ambient.color),this.context._renderTargetHelper=e.offscreenRenderingHelper}_webglStateReset(){this.context.rctx.resetState(),this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()}}function m(e,t,r){"function"==typeof e[t]&&e[t](r)}const u=new class{constructor(){this._renderers=new s}add(e,t){this._findOrCreateStageRenderer(e).add(t)}remove(e,t){const r=this._findStageRenderer(e);r&&r.remove(t),0===r.renderers.length&&(r.destroy(),this._renderers.remove(r))}_findStageRenderer(e){return this._renderers.find((t=>t.view===e))}_findOrCreateStageRenderer(e){let t=this._findStageRenderer(e);return t||(t=new p(e),this._renderers.add(t)),t}};function l(e,t){u.add(e,t)}function j(e,t){u.remove(e,t)}function g(e){e._stage.renderView.setNeedsRender()}function f(e,r,s,n,i,o,c){return n=n||e.spatialReference,t(r,n,s,i,e.renderCoordsHelper.spatialReference,o,c)?i:null}function k(e,r,s,n,i,o,c){return o=o||e.spatialReference,t(r,e.renderCoordsHelper.spatialReference,s,n,o,i,c)?n:null}function x(t,s,n,i){return i||(i=e()),n=n||t.spatialReference,r(n,s,i,t.renderCoordsHelper.spatialReference)?i:null}function _(e){return e.state.camera.clone()}function R(e){return{add:l.bind(this,e),remove:j.bind(this,e),requestRender:g.bind(this,e),toRenderCoordinates:f.bind(this,e),fromRenderCoordinates:k.bind(this,e),renderCoordinateTransformAt:x.bind(this,e)}}export{l as add,R as bind,k as fromRenderCoordinates,_ as getRenderCamera,j as remove,x as renderCoordinateTransformAt,g as requestRender,f as toRenderCoordinates};
