/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{n as e}from"./compilerUtils.js";import{d as t,i,u as r}from"../core/lang.js";import{d as a}from"./mat4.js";import{c as n}from"./mat4f64.js";import{b as o,c as s,e as l,s as p,d as c,f as d,g as u,j as f,l as v,w as h,t as m}from"./mathUtils.js";import{projectBuffer as g,computeLinearTransformation as b}from"../geometry/projection.js";import{i as x,a as y,g as C}from"./ElevationProvider.js";import{u as E}from"./ColorMaterial.js";import{L as D}from"./Logger.js";import{d as S}from"./screenUtils.js";import{c as O}from"./vec2.js";import{c as A,d as P,f as z,a as R}from"./lineSegment.js";import{c as T,f as j,s as L,n as _}from"./plane.js";import{n as F}from"./InterleavedLayout.js";import{c as w}from"./geometryDataUtils.js";import{g as U,S as q,O as N,z as W,B as V,m as I,C as M,y as B,p as G,a as J,b as $,P as H,c as X,E as k,X as Z,a1 as K,a3 as Q,F as Y,G as ee,H as te,a4 as ie,I as re,ag as ae,K as ne,L as oe,ao as se,ap as le,aq as pe,ar as ce,as as de,R as ue,a9 as fe,a8 as ve,a6 as he}from"./VertexColor.glsl.js";import{h as me}from"./Util.js";import{c as ge}from"./quatf64.js";import{f as be}from"./vec3f32.js";import{i as xe}from"./utils4.js";import{_ as ye}from"./tslib.es6.js";import{P as Ce,c as Ee}from"./PiUtils.glsl.js";import{m as De,c as Se,d as Oe}from"./VertexArrayObject.js";function Ae(e,t,i,r,a,n,o,s,l,p,c){const d=_e[c.mode];let u,f,v=0;if(g(e,t,i,r,l.spatialReference,a,s))return d.requiresAlignment(c)?(v=d.applyElevationAlignmentBuffer(r,a,n,o,s,l,p,c),u=n,f=o):(u=r,f=a),g(u,l.spatialReference,f,n,p.spatialReference,o,s)?v:void 0}function Pe(i,r,a,n,o){const s=(x(i)?i.z:y(i)?i.array[i.offset+2]:i[2])||0;switch(a.mode){case"on-the-ground":{const e=t(C(r,i,"ground"),0);return o&&(o.verticalDistanceToGround=0,o.sampledElevation=e),e}case"relative-to-ground":{const e=t(C(r,i,"ground"),0),l=a.geometryZWithOffset(s,n);return o&&(o.verticalDistanceToGround=l,o.sampledElevation=e),l+e}case"relative-to-scene":{const e=t(C(r,i,"scene"),0),l=a.geometryZWithOffset(s,n);return o&&(o.verticalDistanceToGround=l,o.sampledElevation=e),l+e}case"absolute-height":{const e=a.geometryZWithOffset(s,n);if(o){const a=t(C(r,i,"ground"),0);o.verticalDistanceToGround=e-a,o.sampledElevation=a}return e}default:return e(a.mode),0}}function ze(e,t,i){return null==t||null==i?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?Le.UPDATE:e.onTheGroundChanged}function Re(e){return"relative-to-ground"===e||"relative-to-scene"===e}function Te(e){return"absolute-height"!==e}function je(e,t,i,r,n){const o=Pe(t,i,n,r,we);E(e,we.verticalDistanceToGround);const s=we.sampledElevation,l=a(Fe,e.transformation);Ue[0]=t.x,Ue[1]=t.y,Ue[2]=o;return b(t.spatialReference,Ue,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}var Le;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(Le||(Le={}));const _e={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,a,n,o,s){const l=s.calculateOffsetRenderUnits(o),p=s.featureExpressionInfoContext;t*=3,r*=3;for(let n=0;n<a;++n){const a=e[t+0],n=e[t+1],o=e[t+2];i[r+0]=a,i[r+1]=n,i[r+2]=null==p?o+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,i,r,a,n,o){let s=0;const l=o.spatialReference;i*=3,a*=3;for(let p=0;p<n;++p){const n=e[i+0],p=e[i+1],c=e[i+2],d=t(o.getElevation(n,p,c,l,"ground"),0);s+=d,r[a+0]=n,r[a+1]=p,r[a+2]=d,i+=3,a+=3}return s/n},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,i,r,a,n,o,s,l){let p=0;const c=l.calculateOffsetRenderUnits(s),d=l.featureExpressionInfoContext,u=o.spatialReference;i*=3,a*=3;for(let s=0;s<n;++s){const n=e[i+0],s=e[i+1],l=e[i+2],f=t(o.getElevation(n,s,l,u,"ground"),0);p+=f,r[a+0]=n,r[a+1]=s,r[a+2]=null==d?l+f+c:f+c,i+=3,a+=3}return p/n},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,i,r,a,n,o,s,l){let p=0;const c=l.calculateOffsetRenderUnits(s),d=l.featureExpressionInfoContext,u=o.spatialReference;i*=3,a*=3;for(let s=0;s<n;++s){const n=e[i+0],s=e[i+1],l=e[i+2],f=t(o.getElevation(n,s,l,u,"scene"),0);p+=f,r[a+0]=n,r[a+1]=s,r[a+2]=null==d?l+f+c:f+c,i+=3,a+=3}return p/n},requiresAlignment:()=>!0}},Fe=n(),we={verticalDistanceToGround:0,sampledElevation:0},Ue=o();var qe;!function(e){e.Default={vvSizeEnabled:!1,vvSizeMinSize:be(1,1,1),vvSizeMaxSize:be(100,100,100),vvSizeOffset:be(0,0,0),vvSizeFactor:be(1,1,1),vvSizeValue:be(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:ge()}}(qe||(qe={}));var Ne=qe;function We(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(U`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add("size","float"),e.vertex.code.add(U`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(U`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):e.vertex.code.add(U`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(U`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add("color","vec4"),e.vertex.code.add(U`vec4 getColor(){
return applyOpacity(color);
}`))}function Ve(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float");e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4");e.fragment.code.add(U`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(U`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):e.fragment.code.add(U`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(U`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}var Ie=Object.freeze({__proto__:null,build:function(e){const t=new q;t.extensions.add("GL_OES_standard_derivatives"),t.include(Ce),t.include(We,e),t.include(Ve,e),1===e.output&&t.include(N,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float");const i=e.falloffEnabled,r=e.innerColorEnabled;return r&&t.varyings.add("vLineDistance","float"),i&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(U`#define PERPENDICULAR(v) vec2(v.y, -v.x);
#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),t.vertex.code.add(U`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),t.vertex.code.add(U`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(U`void main(void) {
float coverage = 1.0;
vpos = position;
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
bool isJoin = abs(uv0.y)-3.0 < 0.0;
float lineWidth = getSize() * pixelRatio;
if (lineWidth < 1.0) {
coverage = lineWidth;
lineWidth = 1.0;
}else{
lineWidth = floor(lineWidth + 0.5);
}
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
vec4 next = view * vec4(auxpos2.xyz, 1.0);
clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),e.stippleEnabled&&t.vertex.code.add(U`vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;
vec2 stippleSegmentDirection = stippleSegmentInfo.zw;`),t.vertex.code.add(U`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = ISOUTSIDE;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?t.vertex.code.add(U`vec2 startDir;
vec2 endDir;
if (leftLen < 0.001) {
startDir = right;
}
else{
startDir = left;
}
startDir = normalize(startDir);
startDir = PERPENDICULAR(startDir);
if (rightLen < 0.001) {
endDir = left;
}
else{
endDir = right;
}
endDir = normalize(endDir);
endDir = PERPENDICULAR(endDir);
float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);`):t.vertex.code.add(U`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),t.vertex.code.add(U`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;`),e.roundCaps?t.vertex.code.add(U`float angle = subdivisionFactor*PI*0.5;
joinDisplacementDir *= cos(angle);
capDisplacementDir *= sin(angle);`):t.vertex.code.add(U`capDisplacementDir *= subdivisionFactor;`),t.vertex.code.add(U`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||r?U`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${r?U`vLineDistance = lineDist;`:""}
  ${i?U`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(U`{
vec2 posVec = pos.xy - stippleSegmentOrigin;
float stippleSegmentDirectionLength = length(stippleSegmentDirection);`),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(U`float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
stipplePatternUvMax = roundedNumberOfPatternRepeats;`),t.vertex.code.add(U`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(U`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),e.multipassTerrainEnabled&&(t.fragment.include(W),t.include(V,e)),t.include(I,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(M),t.fragment.code.add(U`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(U`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),t.fragment.code.add(U`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&t.fragment.code.add(U`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),t.fragment.code.add(U`
    if (finalColor.a < ${U.float(B)}) {
      discard;
    }

    ${7===e.output?U`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?U`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?U`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?U`outputDepth(linearDepth);`:""}
  }
  `),t}});const Me=new Map([["position",0],["subdivisionFactor",1],["uv0",2],["auxpos1",3],["auxpos2",4],["size",6],["sizeFeatureAttribute",6],["color",5],["colorFeatureAttribute",5],["opacityFeatureAttribute",7]]);class Be extends ${constructor(e,t,i){super(e,t,i),this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=Be.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleUVMaxEnabled:i.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled,roundCaps:i.roundCaps,roundJoins:i.roundJoins,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,falloffEnabled:i.falloffEnabled,innerColorEnabled:i.innerColorEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new H(e.rctx,r,Me)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,a){if(X(this.program,a.camera.projectionMatrix),4===this.configuration.output&&k(this.program,a),a.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",a.inverseViewport),Z(this.program,a)),this.program.setUniform1f("intrinsicWidth",e.width),this.program.setUniform4fv("intrinsicColor",e.color),this.program.setUniform1f("miterLimit","miter"!==e.join?0:e.miterLimit),this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform1f("pixelRatio",a.camera.pixelRatio),this.program.setUniform2f("screenSize",a.camera.fullViewport[2],a.camera.fullViewport[3]),Ee(this.program,e),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.configuration.stippleEnabled){const t=i(this.stippleTextureBind)?this.stippleTextureBind(this.program)*a.camera.pixelRatio:1;if(this.program.setUniform1f("stipplePatternPixelSizeInv",1/t),this.configuration.stippleOffColorEnabled){const t=r(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",e.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",t(e.innerColor,e.color)),this.program.setUniform1f("innerWidth",e.innerWidth*a.camera.pixelRatio))}bindDraw(e){K(this.program,e),Q(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,t){const i=this.configuration,r=3===e,a=2===e;return De({blending:0===i.output||7===i.output?r?Y:ee(e):null,depthTest:{func:te(e)},depthWrite:r?!i.transparent&&i.writeDepth&&Se:ie(e),colorWrite:Oe,stencilWrite:i.sceneHasOcludees?re:null,stencilTest:i.sceneHasOcludees?t?ae:ne:null,polygonOffset:r||a?i.polygonOffset&&Ge:oe})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&Ge;return e.occluder&&(this._occluderPipelineTransparent=De({blending:Y,polygonOffset:t,depthTest:se,depthWrite:null,colorWrite:Oe,stencilWrite:null,stencilTest:le}),this._occluderPipelineOpaque=De({blending:Y,polygonOffset:t,depthTest:se,depthWrite:null,colorWrite:Oe,stencilWrite:pe,stencilTest:ce}),this._occluderPipelineMaskWrite=De({blending:null,polygonOffset:t,depthTest:de,depthWrite:null,colorWrite:null,stencilWrite:re,stencilTest:ae})),this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?11===e?this._occluderPipelineTransparent:10===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:this.pipeline}}Be.shader=new ue(Ie,(()=>Promise.resolve().then((function(){return Ie}))));const Ge={factor:0,units:-4};class Je extends J{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.roundCaps=!1,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}ye([G({count:8})],Je.prototype,"output",void 0),ye([G()],Je.prototype,"occluder",void 0),ye([G()],Je.prototype,"slicePlaneEnabled",void 0),ye([G()],Je.prototype,"transparent",void 0),ye([G()],Je.prototype,"polygonOffset",void 0),ye([G()],Je.prototype,"writeDepth",void 0),ye([G()],Je.prototype,"stippleEnabled",void 0),ye([G()],Je.prototype,"stippleOffColorEnabled",void 0),ye([G()],Je.prototype,"stippleIntegerRepeatsEnabled",void 0),ye([G()],Je.prototype,"roundCaps",void 0),ye([G()],Je.prototype,"roundJoins",void 0),ye([G()],Je.prototype,"vvSize",void 0),ye([G()],Je.prototype,"vvColor",void 0),ye([G()],Je.prototype,"vvOpacity",void 0),ye([G()],Je.prototype,"falloffEnabled",void 0),ye([G()],Je.prototype,"innerColorEnabled",void 0),ye([G()],Je.prototype,"sceneHasOcludees",void 0),ye([G({count:4})],Je.prototype,"transparencyPassType",void 0),ye([G()],Je.prototype,"multipassTerrainEnabled",void 0),ye([G()],Je.prototype,"cullAboveGround",void 0);const $e=D.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class He extends ve{constructor(e){super(e,ke),this._vertexAttributeLocations=Me,this.techniqueConfig=new Je,this.layout=this.createLayout()}isClosed(e,t){return Ye(this.params,e,t)}dispose(){}getPassParameters(){return this.params}getTechniqueConfig(e,t){this.techniqueConfig.output=e;const r=i(this.params.stipplePattern);return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleIntegerRepeatsEnabled=r&&this.params.stippleIntegerRepeats,this.techniqueConfig.stippleOffColorEnabled=r&&i(this.params.stippleOffColor),this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.params.join,this.techniqueConfig.roundCaps="round"===this.params.cap,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.vvOpacity=this.params.vvOpacityEnabled,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.params.innerWidth>0&&i(this.params.innerColor),this.techniqueConfig.falloffEnabled=this.params.falloff>0,this.techniqueConfig.occluder=8===this.params.renderOccluded,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,this.techniqueConfig}intersect(e,t,i,r,a,n,o,s,l){l?this.intersectDrapedLineGeometry(e,r,n,o):this.intersectLineGeometry(e,t,i,r,this.params.width,o)}intersectDrapedLineGeometry(e,t,i,r){if(!t.options.selectionMode)return;const a=e.vertexAttributes.get("position").data,n=e.vertexAttributes.get("size");let o=this.params.width;if(this.params.vvSizeEnabled){const t=e.vertexAttributes.get("sizeFeatureAttribute").data[0];o*=s(this.params.vvSizeOffset[0]+t*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else n&&(o*=n.data[0]);const l=i[0],p=i[1],c=(o/2+4)*e.screenToWorldRatio;let d=Number.MAX_VALUE;for(let e=0;e<a.length-5;e+=3){const t=a[e],i=a[e+1],r=l-t,n=p-i,o=a[e+3]-t,c=a[e+4]-i,u=s((o*r+c*n)/(o*o+c*c),0,1),f=o*u-r,v=c*u-n,h=f*f+v*v;h<d&&(d=h)}d<c*c&&r()}intersectLineGeometry(e,t,i,r,a,n){if(!r.options.selectionMode||xe(t))return;if(!me(i))return void $e.error("intersection assumes a translation-only matrix");const o=e.vertexAttributes,m=o.get("position").data;let g=a;if(this.params.vvSizeEnabled){const e=o.get("sizeFeatureAttribute").data[0];g*=s(this.params.vvSizeOffset[0]+e*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else o.has("size")&&(g*=o.get("size").data[0]);const b=r.camera,x=ot;O(x,r.point);const y=g*b.pixelRatio/2+4*b.pixelRatio;l(mt[0],x[0]-y,x[1]+y,0),l(mt[1],x[0]+y,x[1]+y,0),l(mt[2],x[0]+y,x[1]-y,0),l(mt[3],x[0]-y,x[1]-y,0);for(let e=0;e<4;e++)if(!b.unprojectFromRenderScreen(mt[e],gt[e]))return;j(b.eye,gt[0],gt[1],bt),j(b.eye,gt[1],gt[2],xt),j(b.eye,gt[2],gt[3],yt),j(b.eye,gt[3],gt[0],Ct);let C=Number.MAX_VALUE;const E=Qe(this.params,o,e.indices)?m.length-2:m.length-5;for(let e=0;e<E;e+=3){it[0]=m[e]+i[12],it[1]=m[e+1]+i[13],it[2]=m[e+2]+i[14];const t=(e+3)%m.length;if(rt[0]=m[t]+i[12],rt[1]=m[t+1]+i[13],rt[2]=m[t+2]+i[14],L(bt,it)<0&&L(bt,rt)<0||L(xt,it)<0&&L(xt,rt)<0||L(yt,it)<0&&L(yt,rt)<0||L(Ct,it)<0&&L(Ct,rt)<0)continue;if(b.projectToRenderScreen(it,st),b.projectToRenderScreen(rt,lt),st[2]<0&&lt[2]>0){p(at,it,rt);const e=b.frustum,t=-L(e[4],it)/c(at,_(e[4]));d(at,at,t),u(it,it,at),b.projectToRenderScreen(it,st)}else if(st[2]>0&&lt[2]<0){p(at,rt,it);const e=b.frustum,t=-L(e[4],rt)/c(at,_(e[4]));d(at,at,t),u(rt,rt,at),b.projectToRenderScreen(rt,lt)}else if(st[2]<0&&lt[2]<0)continue;st[2]=0,lt[2]=0;const r=P(z(st,lt,dt),x);r<C&&(C=r,f(pt,it),f(ct,rt))}const D=r.rayBeginPoint,S=r.rayEndPoint;if(C<y*y){let e=Number.MAX_VALUE;if(R(z(pt,ct,dt),z(D,S,ut),nt)){p(nt,nt,D);const t=v(nt);d(nt,nt,1/t),e=t/h(D,S)}n(e,nt)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return null;const r=e.indices,a=i.get("position");return w(a,r?r.get("position"):null,r&&Qe(this.params,i,r),t)}createLayout(){const e=F().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.params.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.params.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.params.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new Ze(this.layout,this.params)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new Xe(e):void 0}validateParameterValues(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0)}requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return i(e)&&e[3]<1&&e[3]>0}}class Xe extends he{constructor(e){super(e),this.updateParameters()}updateParameters(e){this._technique=this._techniqueRep.releaseAndAcquire(Be,this._material.getTechniqueConfig(this._output,e),this._technique)}beginSlot(e){return this._technique.configuration.occluder?3===e||10===e||11===e:0===this._output||7===this._output?(this.targetSlot=this._technique.configuration.writeDepth?5:8,e===this.targetSlot):3===e}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.getPassParameters(),e)}getPipelineState(e,t){return this._technique.getPipelineState(e,t)}}const ke={width:0,color:[1,1,1,1],join:"miter",cap:"butt",miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,...fe,...Ne.Default};class Ze{constructor(e,t){switch(this.params=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e,this.params.join){case"miter":case"bevel":this.numJoinSubdivisions=t.stipplePattern?1:0;break;case"round":this.numJoinSubdivisions=tt}}isClosed(e){return Qe(this.params,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.params.cap){case"butt":return 0;case"square":return 1;case"round":return et}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,i=e.indices.get("position").length/2+1,r=this.isClosed(e);let a=r?2:2*t;const n=r?0:1,o=r?i:i-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=n;e<o;++e){a+=4+2*t[e]}}else{a+=(o-n)*(2*this.numJoinSubdivisions+4)}return a+=2,a}write(e,t,i,r){const a=ft,n=vt,o=ht,s=t.vertexAttributes.get("position").data,p=t.indices&&t.indices.get("position"),c=this.numCapSubdivisions(t);p&&p.length!==2*(s.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let d=null;t.vertexAttributes.has("subdivisions")&&(d=t.vertexAttributes.get("subdivisions").data);let u=1,v=0;this.params.vvSizeEnabled?v=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(u=t.vertexAttributes.get("size").data[0]);let h=[1,1,1,1],g=0;this.params.vvColorEnabled?g=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(h=t.vertexAttributes.get("color").data);let b=0;this.params.vvOpacityEnabled&&(b=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const x=s.length/3,y=e.transformation,C=new Float32Array(i.buffer),E=this.vertexBufferLayout.stride/4;let D=r*E;const S=D,O=(e,t,i,r,a,n,o)=>{if(C[D++]=t[0],C[D++]=t[1],C[D++]=t[2],C[D++]=r,C[D++]=a,C[D++]=n,C[D++]=e[0],C[D++]=e[1],C[D++]=e[2],C[D++]=i[0],C[D++]=i[1],C[D++]=i[2],this.params.vvSizeEnabled?C[D++]=v:C[D++]=u,this.params.vvColorEnabled)C[D++]=g;else{const e=Math.min(4*o,h.length-4);C[D++]=h[e+0],C[D++]=h[e+1],C[D++]=h[e+2],C[D++]=h[e+3]}this.params.vvOpacityEnabled&&(C[D++]=b)};D+=E,l(n,s[0],s[1],s[2]),y&&m(n,n,y);const A=this.isClosed(t);if(A){const e=s.length-3;l(a,s[e],s[e+1],s[e+2]),y&&m(a,a,y)}else{f(a,n),l(o,s[3],s[4],s[5]),y&&m(o,o,y);for(let e=0;e<c;++e){const t=1-e/c;O(a,n,o,t,1,-4,0),O(a,n,o,t,1,4,0)}O(a,n,o,0,0,-4,0),O(a,n,o,0,0,4,0),f(a,n),f(n,o)}const P=A?x:x-1;for(let e=A?0:1;e<P;e++){const t=(e+1)%x*3;l(o,s[t+0],s[t+1],s[t+2]),y&&m(o,o,y),O(a,n,o,0,1,-1,e),O(a,n,o,0,1,1,e);const i=d?d[e]:this.numJoinSubdivisions;for(let t=0;t<i;++t){const r=(t+1)/(i+1);O(a,n,o,r,1,-2,e),O(a,n,o,r,1,2,e)}O(a,n,o,1,0,-2,e),O(a,n,o,1,0,2,e),f(a,n),f(n,o)}if(A){D=Ke(C,S+E,C,D,2*E)}else{O(a,n,o,0,1,-5,P),O(a,n,o,0,1,5,P);for(let e=0;e<c;++e){const t=(e+1)/c;O(a,n,o,t,1,-5,P),O(a,n,o,t,1,5,P)}}Ke(C,S+E,C,S,E);D=Ke(C,D-E,C,D,E)}}function Ke(e,t,i,r,a){for(let n=0;n<a;n++)i[r++]=e[t++];return r}function Qe(e,t,i){return Ye(e,t.get("position").data,i?i.get("position"):null)}function Ye(e,t,i){return!!e.isClosed&&(i?i.length>2:t.length>6)}const et=3,tt=1,it=o(),rt=o(),at=o(),nt=o(),ot=o(),st=S(),lt=S(),pt=o(),ct=o(),dt=A(),ut=A(),ft=o(),vt=o(),ht=o(),mt=[S(),S(),S(),S()],gt=[o(),o(),o(),o()],bt=T(),xt=T(),yt=T(),Ct=T();export{Ve as L,He as R,Le as S,Ne as V,Ae as a,ze as b,Te as c,je as d,Pe as e,Re as n};
