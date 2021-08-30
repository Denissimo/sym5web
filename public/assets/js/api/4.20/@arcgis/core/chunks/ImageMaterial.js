/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{G as e}from"./Texture2.js";import{S as t,T as a,g as s,m as i,z as r,B as n,M as o,C as l,p as u,a as c,b as p,P as d,D as h,c as m,X as g,a1 as f,a3 as v,G as b,H as T,a4 as y,I as P,ag as _,K as x,a5 as C,R as q,a8 as E,ah as O,ai as F,a9 as w}from"./VertexColor.glsl.js";import{D as S,P as D}from"./ColorMaterial.js";import{_ as H}from"./tslib.es6.js";import{a as j,m as A,e as G,c as I,d as V}from"./VertexArrayObject.js";var $=Object.freeze({__proto__:null,build:function(e){const u=new t;return u.include(a,{linearDepth:!1}),u.vertex.uniforms.add("proj","mat4").add("view","mat4"),u.attributes.add("position","vec3"),u.attributes.add("uv0","vec2"),u.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&u.varyings.add("depth","float"),u.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),u.vertex.code.add(s`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),u.include(i,e),e.multipassTerrainEnabled&&(u.fragment.include(r),u.include(n,e)),u.fragment.uniforms.add("tex","sampler2D"),u.fragment.uniforms.add("opacity","float"),u.varyings.add("vTexCoord","vec2"),7===e.output?u.fragment.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${s.float(o)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(u.fragment.include(l),u.fragment.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${s.float(o)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),u}});class z extends p{initializeProgram(e){const t=z.shader.get(),a=this.configuration,s=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new d(e.rctx,s,h)}bindPass(e,t){m(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),g(this.program,t))}bindDraw(e){f(this.program,e),v(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,t){const a=this.configuration,s=3===e,i=2===e;return A({blending:0!==a.output&&7!==a.output||!a.transparent?null:s?B:b(e),culling:G(a.cullFace),depthTest:{func:T(e)},depthWrite:s?a.writeDepth&&I:y(e),colorWrite:V,stencilWrite:a.sceneHasOcludees?P:null,stencilTest:a.sceneHasOcludees?t?_:x:null,polygonOffset:s||i?null:C(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}z.shader=new q($,(()=>Promise.resolve().then((function(){return $}))));const B=j(1,771);class M extends c{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}H([u({count:8})],M.prototype,"output",void 0),H([u({count:3})],M.prototype,"cullFace",void 0),H([u()],M.prototype,"slicePlaneEnabled",void 0),H([u()],M.prototype,"transparent",void 0),H([u()],M.prototype,"enableOffset",void 0),H([u()],M.prototype,"writeDepth",void 0),H([u()],M.prototype,"sceneHasOcludees",void 0),H([u({count:4})],M.prototype,"transparencyPassType",void 0),H([u()],M.prototype,"multipassTerrainEnabled",void 0),H([u()],M.prototype,"cullAboveGround",void 0);class W extends E{constructor(e){super(e,R),this.supportsEdges=!0,this.techniqueConfig=new M}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<O,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,s,i,r,n){F(e,t,s,i,r,void 0,n)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new U(e):void 0}createBufferWriter(){return new S(D)}}class U extends e{constructor(e){super({...e,...e.material.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(z,this._material.getTechniqueConfig(this._output,e),this._technique)}beginSlot(e){if(4===this._output)return 3===e;return e===(this._technique.configuration.transparent?this._technique.configuration.writeDepth?5:8:3)}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&(this._material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}ensureParameters(e){0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e){this.bindTextures(this._technique.program),this.bindTextureScale(this._technique.program),this._technique.bindPass(this._material.params,e)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const R={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...w};export{W as I};
