/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{b as t,i as o,h as a,u as r,c as i}from"../core/lang.js";import{a as n}from"./mat3.js";import{c as s}from"./quatf64.js";import{c as l}from"./mat4.js";import{c}from"./mat4f64.js";import{p as d,b as u,e as m,j as v,n as p,s as f,l as h,f as g,d as x,x as b,T as y,t as C,a4 as T,h as M}from"./mathUtils.js";import{e as w,b as A}from"./aaBoundingBox.js";import{a as _,g as P,e as S,b as O,l as R,m as F,n as E}from"./BufferView.js";import{t as L,a as D,s as B,c as z}from"./vec3.js";import{l as I,D as V,C as N,c as G,t as U,n as $,s as H,a as j,f as q,b as W,d as k,e as X}from"./DefaultMaterial_COLOR_GAMMA.js";import Q from"../request.js";import{r as K}from"./asyncUtils.js";import J from"../core/Error.js";import{L as Y}from"./Logger.js";import{throwIfAbortError as Z}from"../core/promiseUtils.js";import{V as ee}from"./Version.js";import{r as te}from"./requestImageUtils.js";import{g as oe,T as ae,O as re,m as ie,x as ne,n as se,C as le,S as ce,V as de,y as ue,z as me,B as ve,p as pe,a as fe,b as he,P as ge,D as xe,c as be,X as ye,ad as Ce,E as Te,s as Me,ak as we,a2 as Ae,t as _e,F as Pe,G as Se,H as Oe,I as Re,ag as Fe,K as Ee,a5 as Le,R as De,a8 as Be,ah as ze,al as Ie,ai as Ve,M as Ne,a9 as Ge,af as Ue,a0 as $e}from"./VertexColor.glsl.js";import{G as He,T as je}from"./Texture2.js";import{n as qe}from"./InterleavedLayout.js";import{g as We}from"./verticalOffsetUtils.js";import{_ as ke}from"./tslib.es6.js";import{B as Xe,V as Qe,w as Ke,m as Je,e as Ye,c as Ze,d as et}from"./VertexArrayObject.js";import{F as tt}from"./FramebufferObject.js";import{P as ot}from"./Program.js";import"./Texture.js";import{f as at,g as rt}from"./utils4.js";import{u as it}from"./Util.js";import{t as nt}from"./testSVGPremultipliedAlpha.js";import{V as st,b as lt}from"./VerticalOffset.glsl.js";import{f as ct}from"./vec3f32.js";import{P as dt,R as ut,F as mt,c as vt}from"./PhysicallyBasedRendering.glsl.js";import{V as pt,P as ft,b as ht}from"./PiUtils.glsl.js";class gt{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,nt(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(t(this._doublePrecisionRequiresObfuscation)){const e=Ct(this.context,!1),t=Ct(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let xt=null;function bt(e){return(t(xt)||xt.context!==e)&&(xt=new gt(e)),xt}function yt(e){o(xt)&&xt.context===e&&(xt=null)}function Ct(e,t){const o=new tt(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const a=Xe.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),r=new Qe(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:a}),i=d(5633261.287538229,2626832.878767164,1434988.0495278358),n=d(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(o,a){const r=new ot(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),i=new Float32Array(6);at(o,i,3);const n=new Float32Array(6);return at(a,n,3),e.useProgram(r),r.setUniform3f("u_highA",i[0],i[2],i[4]),r.setUniform3f("u_lowA",i[1],i[3],i[5]),r.setUniform3f("u_highB",n[0],n[2],n[4]),r.setUniform3f("u_lowB",n[1],n[3],n[5]),r}(i,n),l=e.getBoundFramebufferObject(),{x:c,y:u,width:m,height:v}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(r),e.drawArrays(5,0,4);const p=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,p),s.dispose(),r.dispose(!1),a.dispose(),o.dispose(),e.setViewport(c,u,m,v),e.bindFramebuffer(l);const f=(i[2]-n[2])/25,h=it(p);return Math.abs(f-h)}function Tt({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(oe`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(oe`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function Mt(e){return!!a("force-double-precision-obfuscation")||bt(e).doublePrecisionRequiresObfuscation}function wt(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(Tt,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[oe`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,oe`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?oe`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,oe`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,oe`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?oe`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:oe``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){rt(t,At,_t,3),e.setUniform3fv("viewOriginHi",At),e.setUniform3fv("viewOriginLo",_t)}}(wt||(wt={}));const At=u(),_t=u();function Pt(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(oe`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(oe`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(oe`void forwardTextureCoordinates() {}`)}function St(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(oe`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Ot(e,t){e.include(Pt,t),e.fragment.code.add(oe`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(oe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(St),e.fragment.code.add(oe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}const Rt=ct(0,.6,.2);function Ft(e,t){const o=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(Ot,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(oe`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(oe`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(oe`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(oe`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(oe`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(oe`float getBakedOcclusion() { return 1.0; }`),o.code.add(oe`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(oe`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Et(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}function Lt(e){e.vertex.code.add(oe`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Dt(e){const t=oe`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function Bt(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(oe`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(Dt),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(oe`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(oe`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function zt(e){e.attributes.add("position","vec3"),e.vertex.code.add(oe`vec3 positionModel() { return position; }`)}function It(e){e.vertex.code.add(oe`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${oe.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${oe.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${oe.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${oe.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Vt(e,t){t.symbolColor?(e.include(It),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(oe`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(oe`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Nt(e,t){e.include(zt),e.vertex.include(Tt,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(oe`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(oe`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function Gt(e,t){0===t.normalType||1===t.normalType?(e.include(Bt,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(oe`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(Nt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(oe`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?oe`normalize(vPositionWorldCameraRelative);`:oe`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(oe`void forwardNormal() {}`)}function Ut(e,t){const o=e.vertex.code,a=e.fragment.code;1!==t.output&&3!==t.output||(e.include(ae,{linearDepth:!0}),e.include(Pt,t),e.include(pt,t),e.include(re,t),e.include(ie,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(oe`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(ne,t),a.add(oe`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(ae,{linearDepth:!1}),e.include(Bt,t),e.include(Gt,t),e.include(Pt,t),e.include(pt,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(oe`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?oe`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ie,t),e.include(ne,t),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?oe`
            vec3 normal = screenDerivativeNormal(vPositionView);`:oe`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(ae,{linearDepth:!1}),e.include(Pt,t),e.include(pt,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(oe`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(ie,t),e.include(ne,t),e.include(se),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function $t(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(oe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(oe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(oe`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(Ot,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(oe`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Ht(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(oe`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(oe`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function jt(e,t){const o=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(oe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(oe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(oe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(oe`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function qt(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(oe`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Wt(e,t){const o=e.fragment;e.include(qt),e.include(Ht,t),0!==t.pbrMode&&e.include(dt,t),e.include(jt,t),t.receiveShadows&&e.include(ut,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(ft),o.code.add(oe`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(oe`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?oe`normalize(vPosWorld)`:oe`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(oe`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?o.code.add(oe`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(oe`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(oe`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(oe`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(oe`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(oe`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?oe`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:oe`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function kt(e,t){const o=e.fragment;o.code.add(oe`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?o.code.add(oe`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?o.code.add(oe`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):o.code.add(oe`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function Xt(e,t){const o=oe`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Ke()&&(e.fragment.code.add(o),e.vertex.code.add(o))}function Qt(e){e.include(le),e.code.add(oe`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${oe.int(1)}) {
        return allMixed;
      }
      else if (mode == ${oe.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${oe.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${oe.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${oe.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=s(),this.worldFromModel_TH=u(),this.worldFromModel_TL=u()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=u(),this.worldFromView_TL=u(),this.viewFromCameraRelative_RS=s(),this.projFromView=c()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Nt||(Nt={})),function(e){e.bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}}(Gt||(Gt={}));var Kt=Object.freeze({__proto__:null,build:function(e){const t=new ce,o=t.vertex.code,a=t.fragment.code;return t.include(Xt,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(zt),t.varyings.add("vpos","vec3"),t.include(pt,e),t.include(wt,e),t.include(st,e),0!==e.output&&7!==e.output||(t.include(Bt,e),t.include(ae,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(Lt),t.include($t,e),t.include(Gt,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(Pt,e),t.include(mt,e),t.include(Vt,e),t.include(de,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(oe`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${oe.float(ue)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?oe`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(ie,e),t.include(ne,e),e.multipassTerrainEnabled&&(t.fragment.include(me),t.include(ve,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Qt),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:oe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?oe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:oe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(ie,e),t.include(Wt,e),t.include(Ht,e),t.include(ne,e),e.receiveShadows&&t.include(ut,e),e.multipassTerrainEnabled&&(t.fragment.include(me),t.include(ve,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Ft,e),t.include(dt,e),t.fragment.include(Qt),t.include(kt,e),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:oe`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?oe`
        vec3 normal = screenDerivativeNormal(localvpos);`:oe`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?oe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:oe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?oe`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?oe`vec3 normalGround = normalize(vpos + localOrigin);`:oe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:oe``}
        ${1===e.pbrMode||2===e.pbrMode?oe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ut,e),t}});class Jt extends he{initializeProgram(e){const t=Jt.shader.get(),o=this.configuration,a=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Mt(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new ge(e.rctx,a,xe)}bindPass(e,t){var o,a;be(this.program,t.camera.projectionMatrix);const r=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===r)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),ye(this.program,t)),7===r&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ce[e.colorMixMode])),0===r?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ce[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Et(this.program,e,this.configuration.isSchematic)):4===r&&Te(this.program,t),ht(this.program,e),lt(this.program,e,t),Me(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(a=t.ssaoHelper)||a.bind(this.program)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?d(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;we(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Ae(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&wt.bindCustomOrigin(this.program,t),_e(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&vt(this.program,e,t)}setPipeline(e,t){const o=this.configuration,a=3===e,r=2===e;return Je({blending:0!==o.output&&7!==o.output||!o.transparent?null:a?Pe:Se(e),culling:Yt(o)&&Ye(o.cullFace),depthTest:{func:Oe(e)},depthWrite:a||r?o.writeDepth&&Ze:null,colorWrite:et,stencilWrite:o.sceneHasOcludees?Re:null,stencilTest:o.sceneHasOcludees?t?Fe:Ee:null,polygonOffset:a||r?null:Le(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function Yt(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}Jt.shader=new De(Kt,(()=>Promise.resolve().then((function(){return Kt}))));class Zt extends fe{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}ke([pe({count:8})],Zt.prototype,"output",void 0),ke([pe({count:4})],Zt.prototype,"alphaDiscardMode",void 0),ke([pe({count:3})],Zt.prototype,"doubleSidedMode",void 0),ke([pe()],Zt.prototype,"isSchematic",void 0),ke([pe()],Zt.prototype,"vertexColors",void 0),ke([pe()],Zt.prototype,"offsetBackfaces",void 0),ke([pe()],Zt.prototype,"symbolColors",void 0),ke([pe()],Zt.prototype,"vvSize",void 0),ke([pe()],Zt.prototype,"vvColor",void 0),ke([pe()],Zt.prototype,"verticalOffset",void 0),ke([pe()],Zt.prototype,"receiveShadows",void 0),ke([pe()],Zt.prototype,"slicePlaneEnabled",void 0),ke([pe()],Zt.prototype,"sliceHighlightDisabled",void 0),ke([pe()],Zt.prototype,"receiveAmbientOcclusion",void 0),ke([pe()],Zt.prototype,"screenSizePerspective",void 0),ke([pe()],Zt.prototype,"textureAlphaPremultiplied",void 0),ke([pe()],Zt.prototype,"hasColorTexture",void 0),ke([pe()],Zt.prototype,"usePBR",void 0),ke([pe()],Zt.prototype,"hasMetalnessAndRoughnessTexture",void 0),ke([pe()],Zt.prototype,"hasEmissionTexture",void 0),ke([pe()],Zt.prototype,"hasOcclusionTexture",void 0),ke([pe()],Zt.prototype,"hasNormalTexture",void 0),ke([pe()],Zt.prototype,"instanced",void 0),ke([pe()],Zt.prototype,"instancedColor",void 0),ke([pe()],Zt.prototype,"instancedDoublePrecision",void 0),ke([pe()],Zt.prototype,"vertexTangents",void 0),ke([pe()],Zt.prototype,"normalsTypeDerivate",void 0),ke([pe()],Zt.prototype,"writeDepth",void 0),ke([pe()],Zt.prototype,"sceneHasOcludees",void 0),ke([pe()],Zt.prototype,"transparent",void 0),ke([pe()],Zt.prototype,"enableOffset",void 0),ke([pe({count:3})],Zt.prototype,"cullFace",void 0),ke([pe({count:4})],Zt.prototype,"transparencyPassType",void 0),ke([pe()],Zt.prototype,"multipassTerrainEnabled",void 0),ke([pe()],Zt.prototype,"cullAboveGround",void 0);var eo=Object.freeze({__proto__:null,build:function(e){const t=new ce,o=t.vertex.code,a=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(zt),t.varyings.add("vpos","vec3"),t.include(pt,e),t.include(wt,e),t.include(st,e),0!==e.output&&7!==e.output||(t.include(Bt,e),t.include(ae,{linearDepth:!1}),e.offsetBackfaces&&t.include(Lt),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(Pt,e),t.include(mt,e),t.include(Vt,e),t.include(de,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(oe`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${oe.float(ue)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?oe`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(ie,e),t.include(ne,e),e.multipassTerrainEnabled&&(t.fragment.include(me),t.include(ve,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Qt),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?oe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:oe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?oe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:oe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(ie,e),t.include(Wt,e),t.include(Ht,e),t.include(ne,e),e.receiveShadows&&t.include(ut,e),e.multipassTerrainEnabled&&(t.fragment.include(me),t.include(ve,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Ft,e),t.include(dt,e),t.fragment.include(Qt),a.add(oe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?oe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?oe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:oe`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?oe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:oe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${oe`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?oe`vec3 normalGround = normalize(vpos + localOrigin);`:oe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:oe``}
        ${1===e.pbrMode||2===e.pbrMode?oe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ut,e),t}});class to extends Jt{initializeProgram(e){const t=to.shader.get(),o=this.configuration,a=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Mt(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new ge(e.rctx,a,xe)}}to.shader=new De(eo,(()=>Promise.resolve().then((function(){return eo}))));class oo extends Be{constructor(e){super(e,ro),this.supportsEdges=!0,this.techniqueConfig=new Zt,this.vertexBufferLayout=oo.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?oo.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,a=e.symbolColors,r=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(r||i||a)?!!n||s:o?n?l:s:r||i||a?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<ze),this.techniqueConfig}intersect(e,t,o,a,r,i,n){if(null!==this.params.verticalOffset){const e=a.camera;m(mo,o[12],o[13],o[14]);let t=null;switch(a.viewingMode){case 1:t=p(co,mo);break;case 2:t=v(co,lo)}let n=0;if(null!==this.params.verticalOffset){const o=f(vo,mo,e.eye),a=h(o),r=g(o,o,1/a);let i=null;this.params.screenSizePerspective&&(i=x(t,r)),n+=Ie(e,a,this.params.verticalOffset,i,this.params.screenSizePerspective)}g(t,t,n),b(uo,t,a.transform.inverseRotation),r=f(no,r,uo),i=f(so,i,uo)}Ve(e,t,a,r,i,We(a.verticalOffset),n)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new ao(e)}createBufferWriter(){return new io(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=qe().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}static getInstanceBufferLayout(e){let t=qe();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class ao extends He{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?to:Jt,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const ro={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:s(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Ne,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Ge};class io{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,o,a){Ue(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,a)}}const no=u(),so=u(),lo=d(0,0,1),co=u(),uo=u(),mo=u(),vo=u(),po=Y.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function fo(e,t){const a=await async function(e,t){const a=o(t)&&t.streamDataRequester;if(a)return async function(e,t,o){const a=await K(t.request(e,"json",o));if(!0===a.ok)return a.value;return Z(a.error),void ho(a.error.details.url)}(e,a,t);const i=await K(Q(e,r(t)));if(!0===i.ok)return i.value.data;return Z(i.error),void ho(i.error)}(e,t);return{resource:a,textures:await async function(e,t){const a=[];for(const r in e){const i=e[r],n=i.images[0].data;if(!n){po.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+r,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=o(t)&&t.disableTextures?Promise.resolve(null):te(s,t);a.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===i.channels?i.alphaChannelUsage||"transparency":"none"}))))}const r=await Promise.all(a),i={};for(const e of r)i[e.refId]=e;return i}(a.textureDefinitions,t)}}function ho(e){throw new J("",`Request for object resource failed: ${e}`)}function go(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(po.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(po.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(po.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(po.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else po.warn("Indexed geometries must specify faces"),a=!1;break}default:po.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(po.warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const e in r){r[e].values||(po.warn("Geometries with externally defined attributes are not yet supported"),a=!1)}return a}function xo(e){const t=w();return e.forEach((e=>{const a=e.boundingInfo;o(a)&&(A(t,a.getBBMin()),A(t,a.getBBMax()))})),t}function bo(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function yo(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Co=new ee(1,2,"wosr");async function To(a,r){const n=Mo(e(a));if("wosr"===n.fileType){const e=await(r.cache?r.cache.loadWOSR(n.url,r):fo(n.url,r)),t=function(e,t){const a=[],r=[],i=[],n=[],s=e.resource,l=ee.parse(s.version||"1.0","wosr");Co.validate(l);const c=s.model.name,d=s.model.geometries,u=s.materialDefinitions,m=e.textures;let v=0;const p=new Map;for(let e=0;e<d.length;e++){const s=d[e];if(!go(s))continue;const l=yo(s),c=s.params.vertexAttributes,f=[];for(const e in c){const t=c[e],o=t.values;f.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const h=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)h.push([t,new Uint32Array(e[t].values)])}const g=m&&m[l.texture];if(g&&!p.has(l.texture)){const{image:e,params:t}=g,o=new je(e,t);n.push(o),p.set(l.texture,o)}const x=p.get(l.texture),b=x?x.id:void 0;let C=i[l.material]?i[l.material][l.texture]:null;if(!C){const e=u[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const a=g&&g.alphaChannelUsage,r=e.transparency>0||"transparency"===a||"maskAndTransparency"===a,n={ambient:y(e.diffuse),diffuse:y(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:g?bo(g.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};o(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),C=new oo(n),i[l.material]||(i[l.material]={}),i[l.material][l.texture]=C}r.push(C);const T=new $e(f,h);v+=h.position?h.position.length:0,a.push(T)}return{name:c,stageResources:{textures:n,materials:r,geometries:a},pivotOffset:s.model.pivotOffset,boundingBox:xo(a),numberOfVertices:v,lodThreshold:null}}(e,r);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const s=await(r.cache?r.cache.loadGLTF(n.url,r,r.usePBR):I(new V(r.streamDataRequester),n.url,r,r.usePBR)),d=i(s.model.meta,"ESRI_proxyEllipsoid");s.meta.isEsriSymbolResource&&o(d)&&-1!==s.meta.uri.indexOf("/RealisticTrees/")&&function(e,o){for(let a=0;a<e.model.lods.length;++a){const r=e.model.lods[a];e.customMeta.esriTreeRendering=!0;for(const i of r.parts){const r=i.attributes.normal;if(t(r))return;const n=i.attributes.position,s=n.count,d=u(),m=u(),v=u(),g=G(O,s),x=G(_,s),b=l(c(),i.transform);for(let t=0;t<s;t++){n.getVec(t,m),r.getVec(t,d),C(m,m,i.transform),f(v,m,o.center),T(v,v,o.radius);const s=v[2],l=h(v),c=Math.min(.45+.55*l*l,1);T(v,v,o.radius),C(v,v,b),p(v,v),a+1!==e.model.lods.length&&e.model.lods.length>1&&M(v,v,d,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(t,v),g.set(t,0,255*c),g.set(t,1,255*c),g.set(t,2,255*c),g.set(t,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(s,d);const m=s.meta.isEsriSymbolResource?{usePBR:r.usePBR,isSchematic:!1,treeRendering:s.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:r.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},v={...r.materialParamsMixin,treeRendering:s.customMeta.esriTreeRendering};if(null!=n.specifiedLodIndex){const e=wo(s,m,v,n.specifiedLodIndex);let t=e[0].boundingBox;if(0!==n.specifiedLodIndex){t=wo(s,m,v,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1,remove:s.remove}}const g=wo(s,m,v);return{lods:g,referenceBoundingBox:g[0].boundingBox,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1,remove:s.remove}}function Mo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function wo(e,t,a,r){const i=e.model,l=s(),c=new Array,d=new Map,u=new Map;return i.lods.forEach(((e,s)=>{if(void 0!==r&&s!==r)return;const m={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:o(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:w()};c.push(m),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=i.materials.get(e.material),c=o(e.attributes.texCoord0),v=o(e.attributes.normal);if(!d.has(r)){if(c){if(o(s.textureColor)&&!u.has(s.textureColor)){const e=i.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureColor,new je(e.data,t))}if(o(s.textureNormal)&&!u.has(s.textureNormal)){const e=i.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureNormal,new je(e.data,t))}if(o(s.textureOcclusion)&&!u.has(s.textureOcclusion)){const e=i.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureOcclusion,new je(e.data,t))}if(o(s.textureEmissive)&&!u.has(s.textureEmissive)){const e=i.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureEmissive,new je(e.data,t))}if(o(s.textureMetallicRoughness)&&!u.has(s.textureMetallicRoughness)){const e=i.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};u.set(s.textureMetallicRoughness,new je(e.data,t))}}const n=s.color[0]**(1/N),l=s.color[1]**(1/N),m=s.color[2]**(1/N),p=s.emissiveFactor[0]**(1/N),f=s.emissiveFactor[1]**(1/N),h=s.emissiveFactor[2]**(1/N);d.set(r,new oo({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:Ao(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[n,l,m],ambient:[n,l,m],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:v?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:o(s.textureColor)&&c?u.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:o(s.textureNormal)&&c?u.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:o(s.textureOcclusion)&&c?u.get(s.textureOcclusion).id:void 0,emissiveTextureId:o(s.textureEmissive)&&c?u.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:o(s.textureMetallicRoughness)&&c?u.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[p,f,h],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...a}))}const p=function(e,t){switch(t){case 4:return X(e);case 5:return k(e);case 6:return W(e)}}(e.indices||e.attributes.position.count,e.primitiveType),f=e.attributes.position.count,h=G(_,f);L(h,e.attributes.position,e.transform);const g=[["position",{data:h.typedBuffer,size:h.elementCount,exclusive:!0}]],x=[["position",p]];if(o(e.attributes.normal)){const t=G(_,f);n(l,e.transform),D(t,e.attributes.normal,l),g.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["normal",p])}if(o(e.attributes.tangent)){const t=G(P,f);n(l,e.transform),U(t,e.attributes.tangent,l),g.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["tangent",p])}if(o(e.attributes.texCoord0)){const t=G(S,f);$(t,e.attributes.texCoord0),g.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["uv0",p])}if(o(e.attributes.color)){const t=G(O,f);if(4===e.attributes.color.elementCount)e.attributes.color instanceof P?H(t,e.attributes.color,255):e.attributes.color instanceof O?j(t,e.attributes.color):e.attributes.color instanceof R&&H(t,e.attributes.color,1/256);else{q(t,255,255,255,255);const o=new F(t.buffer,0,4);e.attributes.color instanceof _?B(o,e.attributes.color,255):e.attributes.color instanceof F?z(o,e.attributes.color):e.attributes.color instanceof E&&B(o,e.attributes.color,1/256)}g.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),x.push(["color",p])}const b=new $e(g,x);m.stageResources.geometries.push(b),m.stageResources.materials.push(d.get(r)),c&&(o(s.textureColor)&&m.stageResources.textures.push(u.get(s.textureColor)),o(s.textureNormal)&&m.stageResources.textures.push(u.get(s.textureNormal)),o(s.textureOcclusion)&&m.stageResources.textures.push(u.get(s.textureOcclusion)),o(s.textureEmissive)&&m.stageResources.textures.push(u.get(s.textureEmissive)),o(s.textureMetallicRoughness)&&m.stageResources.textures.push(u.get(s.textureMetallicRoughness))),m.numberOfVertices+=f;const y=b.boundingInfo;o(y)&&(A(m.boundingBox,y.getBBMin()),A(m.boundingBox,y.getBBMax()))}))})),c}function Ao(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}var _o=Object.freeze({__proto__:null,fetch:To,parseUrl:Mo,gltfToEngineResources:wo});export{$t as C,It as D,qt as E,Xt as H,Qt as M,kt as N,Ft as P,St as T,Nt as V,Wt as a,Gt as b,Ot as c,Pt as d,Et as e,Mt as f,Tt as g,yt as h,oo as i,To as j,zt as k,fo as l,Ht as m,Rt as n,_o as o,bt as t};
