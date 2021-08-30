/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{e,t,n as i,s as r,f as o,j as s,l as a,w as n,x as l,d as c,c as u,g as d,M as f,b as p,p as v}from"./mathUtils.js";import{i as h,d as m,b as g}from"../core/lang.js";import{d as x}from"./screenUtils.js";import{f as b}from"./mat3.js";import{c as y}from"./quatf64.js";import{c as P}from"./mat4.js";import{c as C}from"./mat4f64.js";import{c as O}from"./vec2.js";import{a as S,f as w}from"./vec2f64.js";import{a as z}from"./aaBoundingRect.js";import{n as D}from"./InterleavedLayout.js";import{b as E}from"./geometryDataUtils.js";import{G as A}from"./Texture2.js";import{g as T,z as j,Q as U,S as _,m as F,C as V,y as R,M as q,n as M,p as H,a as G,b as I,P as $,D as B,c as N,a7 as k,X as L,E as W,a1 as Q,a2 as Y,a3 as Z,G as X,R as J,a8 as K,am as ee,e as te,an as ie,al as re,a9 as oe,aa as se,ab as ae,aj as ne,ac as le}from"./VertexColor.glsl.js";import{a as ce,b as ue}from"./Util.js";import{i as de}from"./utils4.js";import{Z as fe}from"./vec4f64.js";import{S as pe,b as ve,a as he}from"./VerticalOffset.glsl.js";import{V as me,a as ge}from"./PiUtils.glsl.js";import{_ as xe}from"./tslib.es6.js";import{a as be,c as ye,m as Pe,d as Ce}from"./VertexArrayObject.js";import{g as Oe,a as Se}from"./unitConversionUtils.js";import{L as we}from"./Logger.js";import{f as ze}from"./ColorMaterial.js";import{l as De}from"./arcadeOnDemand.js";function Ee(e){const t=T`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,i=T`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}function Ae(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}function Te(e,t){const i=e;i.include(pe),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),t.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(T`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.vertex.code.add(T`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped||i.vertex.code.add(T`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),i.vertex.code.add(T`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.screenSizePerspectiveEnabled&&(t.verticalOffsetEnabled||1===t.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.verticalOffsetEnabled?t.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.verticalOffsetEnabled?T`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==t.screenCenterOffsetUnitsEnabled?T`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===t.screenCenterOffsetUnitsEnabled?t.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(T`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (uRenderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function je(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75)}function Ue(e){e.include(j),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("cameraNearFar","vec2"),e.code.add(T`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}function _e(e,t){t.multipassGeometryEnabled&&t.geometryLinearDepthTexture&&e.bindTexture(t.geometryLinearDepthTexture,"geometryDepthTexture")}function Fe(e,t){t.multipassGeometryEnabled&&e.vertex.include(Ue),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.vertex.code.add(T`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.multipassGeometryEnabled?T`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.multipassTerrainEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.multipassTerrainEnabled&&e.fragment.include(j),e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.include(U),e.fragment.code.add(T`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.multipassTerrainEnabled?T`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), cameraNearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function Ve(e,t,i){e.setUniform4fv("materialColor",t.color),t.textureIsSignedDistanceField&&(t.outlineColor[3]<=0||t.outlineSize<=0?(e.setUniform4fv("outlineColor",fe),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",t.outlineColor),e.setUniform1f("outlineSize",t.outlineSize))),e.setUniform2f("screenOffset",2*t.screenOffset[0]*i,2*t.screenOffset[1]*i),e.setUniform2fv("anchorPos",Re(t))}function Re(e,t=qe){var i,r,o;return e.textureIsSignedDistanceField?(i=e.anchorPos,r=e.distanceFieldBoundingBox,(o=t)[0]=i[0]*(r[2]-r[0])+r[0],o[1]=i[1]*(r[3]-r[1])+r[1]):O(t,e.anchorPos),t}const qe=S();var Me=Object.freeze({__proto__:null,build:function(e){const t=new _,i=e.signedDistanceFieldEnabled;if(t.include(Ee),t.include(Te,e),t.include(F,e),6===e.output)return t.include(Fe,e),t;t.include(pe),t.fragment.include(U),t.fragment.include(V),t.include(me,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),t.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&t.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&t.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),t.attributes.add("color","vec4"),t.attributes.add("size","vec2"),t.attributes.add("auxpos2","vec4"),t.vertex.code.add(T`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?T`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:T`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const r=T`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,o=e.pixelSnappingEnabled?i?T`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:T`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:T`posProj += quadOffset;`;t.vertex.code.add(T`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${r}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${T.float(R)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${T.float(R)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${o}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?T`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),t.fragment.uniforms.add("tex","sampler2D"),i&&(t.fragment.uniforms.add("outlineColor","vec4"),t.fragment.uniforms.add("outlineSize","float"));const s=e.debugDrawBorder?T`(isBorder > 0.0 ? 0.0 : ${T.float(q)})`:T.float(q),a=T`
    ${e.debugDrawBorder?T`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?T`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${s} ||
          fillPixelColor.a + outlinePixelColor.a < ${T.float(R)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${s}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:T`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${s}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?T`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&t.fragment.code.add(T`
      void main() {
        ${a}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&t.fragment.code.add(T`
    void main() {
      ${a}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(t.include(M),t.fragment.code.add(T`
    void main() {
      ${a}
      ${e.binaryHighlightOcclusionEnabled?T`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t},bindHUDMaterialUniforms:Ve,calculateAnchorPosForRendering:Re});class He extends I{initializeProgram(e){const t=He.shader.get(),i=this.configuration,r=t.build({output:i.output,FrontFacePass:2===i.transparencyPassType,viewingMode:e.viewingMode,occlusionTestEnabled:i.occlusionTestEnabled,signedDistanceFieldEnabled:i.sdf,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawBorder:i.debugDrawBorder,binaryHighlightOcclusionEnabled:i.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:i.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,pixelSnappingEnabled:i.pixelSnappingEnabled,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!1,isDraped:i.isDraped,multipassGeometryEnabled:i.multipassGeometryEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new $(e.rctx,r,B)}bindPass(e,t){N(this.program,t.camera.projectionMatrix),this.program.setUniform1f("cameraGroundRelative",t.camera.aboveGround?1:-1),this.program.setUniform1f("perDistancePixelRatio",Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",t.camera.viewInverseTransposeMatrix),this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset),ve(this.program,e,t),he(this.program,e),this.program.setUniform1f("pixelRatio",t.camera.pixelRatio||1),k(this.program,t),6===this.configuration.output?(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),_e(this.program,t),L(this.program,t)):(je(this.program,t),Ve(this.program,e,t.camera.pixelRatio||1),ge(this.program,e),this.configuration.occlusionTestEnabled&&this.program.bindTexture(t.hudVisibilityTexture,"hudVisibilityTexture")),4===this.configuration.output&&W(this.program,t)}bindDraw(e){Q(this.program,e),Y(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Z(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e){const t=this.configuration,i=3===e,r=2===e,o=this.configuration.polygonOffsetEnabled&&Ge,s=(i||r)&&4!==t.output?(t.depthEnabled||6===t.output)&&ye:null;return Pe({blending:0===t.output||7===t.output||4===t.output?i?Ie:X(e):null,depthTest:{func:515},depthWrite:s,colorWrite:Ce,polygonOffset:o})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return 6===this.configuration.output?0:4}}He.shader=new J(Me,(()=>Promise.resolve().then((function(){return Me}))));const Ge={factor:0,units:-4},Ie=be(1,771);class $e extends G{constructor(){super(...arguments),this.output=0,this.occlusionTestEnabled=!0,this.sdf=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.screenSizePerspective=!1,this.screenCenterOffsetUnitsEnabled=0,this.debugDrawBorder=!0,this.binaryHighlightOcclusion=!0,this.slicePlaneEnabled=!1,this.polygonOffsetEnabled=!1,this.depthEnabled=!0,this.transparencyPassType=3,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.multipassGeometryEnabled=!1,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}xe([H({count:8})],$e.prototype,"output",void 0),xe([H()],$e.prototype,"occlusionTestEnabled",void 0),xe([H()],$e.prototype,"sdf",void 0),xe([H()],$e.prototype,"vvSize",void 0),xe([H()],$e.prototype,"vvColor",void 0),xe([H()],$e.prototype,"verticalOffset",void 0),xe([H()],$e.prototype,"screenSizePerspective",void 0),xe([H({count:2})],$e.prototype,"screenCenterOffsetUnitsEnabled",void 0),xe([H()],$e.prototype,"debugDrawBorder",void 0),xe([H()],$e.prototype,"binaryHighlightOcclusion",void 0),xe([H()],$e.prototype,"slicePlaneEnabled",void 0),xe([H()],$e.prototype,"polygonOffsetEnabled",void 0),xe([H()],$e.prototype,"depthEnabled",void 0),xe([H({count:4})],$e.prototype,"transparencyPassType",void 0),xe([H()],$e.prototype,"pixelSnappingEnabled",void 0),xe([H()],$e.prototype,"isDraped",void 0),xe([H()],$e.prototype,"multipassGeometryEnabled",void 0),xe([H()],$e.prototype,"multipassTerrainEnabled",void 0),xe([H()],$e.prototype,"cullAboveGround",void 0);class Be extends K{constructor(e){super(e,dt),this.techniqueConfig=new $e}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.verticalOffset=!!this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=!!this.params.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.params.centerOffsetUnits?1:0,this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig.isDraped=this.params.isDraped,this.techniqueConfig.occlusionTestEnabled=this.params.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.params.pixelSnappingEnabled,this.techniqueConfig.sdf=this.params.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.params.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.params.vvColorEnabled,0===e&&(this.techniqueConfig.debugDrawBorder=!!this.params.debugDrawBorder),4===e&&(this.techniqueConfig.binaryHighlightOcclusion=this.params.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.params.depthEnabled,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassGeometryEnabled=!!t&&t.multipassGeometryEnabled,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,this.techniqueConfig}intersect(e,t,i,r,o,s,a,n,l){l?this.intersectDrapedHudGeometry(e,s,a,n):this.intersectHudGeometry(e,t,i,r,a,n)}intersectDrapedHudGeometry(e,t,i,r){const o=e.vertexAttributes.get("position"),s=e.vertexAttributes.get("size"),a=this.params,n=Re(a);let l=1,c=1;if(h(r)){const e=r(at);l=e[0],c=e[5]}l*=e.screenToWorldRatio,c*=e.screenToWorldRatio;const u=lt*e.screenToWorldRatio;for(let r=0;r<o.data.length/o.size;r++){const d=r*o.size,f=o.data[d],p=o.data[d+1],v=r*s.size;let h;ct[0]=s.data[v]*l,ct[1]=s.data[v+1]*c,a.textureIsSignedDistanceField&&(h=a.outlineSize*e.screenToWorldRatio/2),We(t,f,p,ct,u,h,a,n)&&i()}}intersectHudGeometry(l,c,u,d,f,v){if(!d.options.selectionMode||!d.options.hud)return;if(de(c))return;const m=this.params;let g=1,x=1;if(b(tt,u),h(v)){const e=v(at);g=e[0],x=e[5],function(e){const t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],n=e[6],l=e[7],c=e[8],u=1/Math.sqrt(t*t+i*i+r*r),d=1/Math.sqrt(o*o+s*s+a*a),f=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*u,e[1]=i*u,e[2]=r*u,e[3]=o*d,e[4]=s*d,e[5]=a*d,e[6]=n*f,e[7]=l*f,e[8]=c*f}(tt)}const y=l.vertexAttributes.get("position"),C=l.vertexAttributes.get("size"),O=l.vertexAttributes.get("normal"),S=l.vertexAttributes.get("auxpos1");ce(y.size>=3);const w=d.point,z=d.camera,D=Re(m);g*=z.pixelRatio,x*=z.pixelRatio;const E="screen"===this.params.centerOffsetUnits;for(let l=0;l<y.data.length/y.size;l++){const c=l*y.size;e(Ze,y.data[c],y.data[c+1],y.data[c+2]),t(Ze,Ze,u);const v=l*C.size;ct[0]=C.data[v]*g,ct[1]=C.data[v+1]*x,t(Ze,Ze,z.viewMatrix);const h=l*S.size;if(e(ot,S.data[h+0],S.data[h+1],S.data[h+2]),!E&&(Ze[0]+=ot[0],Ze[1]+=ot[1],0!==ot[2])){const e=ot[2];i(ot,Ze),r(Ze,Ze,o(ot,ot,e))}const b=l*O.size;if(e(Xe,O.data[b],O.data[b+1],O.data[b+2]),this.normalAndViewAngle(Xe,tt,z,st),this.applyVerticalOffsetTransformationView(Ze,st,z,Qe),z.applyProjection(Ze,Je),Je[0]>-1){let e=Math.floor(Je[0])+this.params.screenOffset[0],i=Math.floor(Je[1])+this.params.screenOffset[1];E&&(e+=ot[0],0!==ot[1]&&(i+=ee(ot[1],Qe.factorAlignment))),te(ct,Qe.factor,ct);const r=nt*z.pixelRatio;let l;if(m.textureIsSignedDistanceField&&(l=m.outlineSize*z.pixelRatio/2),We(w,e,i,ct,r,l,m,D)){const e=d.ray;if(t(et,Ze,P(rt,z.viewMatrix)),Je[0]=w[0],Je[1]=w[1],z.unprojectFromRenderScreen(Je,Ze)){const t=p();s(t,e.direction);const i=1/a(t);o(t,t,i);f(n(e.origin,Ze)*i,t,-1,1,!0,et)}}}}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const r=i.get("position"),o=e.indices.get("position");return E(r,o,t)}createBufferWriter(){return new pt(this)}normalAndViewAngle(e,i,r,o){return Ae(i)&&(i=b(it,i)),l(o.normal,e,i),t(o.normal,o.normal,r.viewInverseTransposeMatrix),o.cosAngle=c(Ke,ut),o}updateScaleInfo(e,t,i){const r=this.params;r.screenSizePerspective?ie(i,t,r.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),r.screenSizePerspectiveAlignment?ie(i,t,r.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,i,r,o,s,a){const n=this.normalAndViewAngle(t,i,o,st);return this.applyVerticalGroundOffsetView(e,n,o,a),this.applyVerticalOffsetTransformationView(a,n,o,s),this.applyPolygonOffsetView(a,n,r[3],o,a),this.applyCenterOffsetView(a,r,a),a}applyShaderOffsetsNDC(e,t,i,r,o){return this.applyCenterOffsetNDC(e,t,i,r),h(o)&&s(o,r),this.applyPolygonOffsetNDC(r,t,i,r),r}applyPolygonOffsetView(e,t,i,r,a){const n=r.aboveGround?1:-1;let l=f(i);0===l&&(l=n);const c=n*l;if(this.params.shaderPolygonOffset<=0)return s(a,e);const d=u(Math.abs(t.cosAngle),.01,1),p=1-Math.sqrt(1-d*d)/d/r.viewport[2];return o(a,e,c>0?p:1/p),a}applyVerticalGroundOffsetView(e,t,i,r){const s=a(e),n=i.aboveGround?1:-1,l=.5*i.computeRenderPixelSizeAtDist(s),c=o(Ze,t.normal,n*l);return d(r,e,c),r}applyVerticalOffsetTransformationView(e,t,i,r){const s=this.params;if(!s.verticalOffset||!s.verticalOffset.screenLength){if(s.screenSizePerspective||s.screenSizePerspectiveAlignment){const i=a(e);this.updateScaleInfo(r,i,t.cosAngle)}else r.factor.scale=1,r.factorAlignment.scale=1;return e}const n=a(e),l=s.screenSizePerspectiveAlignment||s.screenSizePerspective,c=re(i,n,s.verticalOffset,t.cosAngle,l);return this.updateScaleInfo(r,n,t.cosAngle),o(t.normal,t.normal,c),d(e,e,t.normal)}applyCenterOffsetView(e,t,r){const a="screen"!==this.params.centerOffsetUnits;return r!==e&&s(r,e),a&&(r[0]+=t[0],r[1]+=t[1],t[2]&&(i(Xe,r),d(r,r,o(Xe,Xe,t[2])))),r}applyCenterOffsetNDC(e,t,i,r){const o="screen"!==this.params.centerOffsetUnits;return r!==e&&s(r,e),o||(r[0]+=t[0]/i.fullWidth*2,r[1]+=t[1]/i.fullHeight*2),r}applyPolygonOffsetNDC(e,t,i,r){const o=this.params.shaderPolygonOffset;if(e!==r&&s(r,e),o){const e=i.aboveGround?1:-1,s=e*f(t[3]);r[2]-=(s||e)*o}return r}getGLMaterial(e){return 0===e.output||7===e.output?new ke(e):4===e.output?new Le(e):void 0}calculateRelativeScreenBounds(e,t,i=z()){return function(e,t,i,r=Ye){O(r,e.anchorPos),r[0]*=-t[0],r[1]*=-t[1],r[0]+=e.screenOffset[0]*i,r[1]+=e.screenOffset[1]*i}(this.params,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class Ne extends A{constructor(e){super({...e,...e.material.params}),this.updateParameters()}beginSlot(e){return e===(this._material.params.drawInSecondSlot?19:18)}updateParameters(e){this.updateTexture(this._material.params.textureId),this.selectProgram(e)}selectProgram(e){this._technique=this._techniqueRep.releaseAndAcquire(He,this._material.getTechniqueConfig(this._output,e),this._technique)}ensureParameters(e){this.updateParameters(e)}bind(e){this.bindTextures(this._technique.program),this.bindTextureScale(this._technique.program),this._technique.bindPass(this._material.params,e)}}class ke extends Ne{constructor(e){super(e),this._isOcclusionSlot=!1}beginSlot(e){const t=this._material.params.drawInSecondSlot?19:18;return this._material.params.occlusionTest?(this._isOcclusionSlot=12===e,12===e||e===t):(this._isOcclusionSlot=!1,e===t)}get technique(){return this._isOcclusionSlot?this._occlusionTechnique:this._technique}selectProgram(e){this._technique=this._techniqueRep.releaseAndAcquire(He,this._material.getTechniqueConfig(this._output,e),this._technique),this._occlusionTechnique=this._techniqueRep.releaseAndAcquire(He,this._material.getTechniqueConfig(6,e),this._occlusionTechnique)}bind(e){const t=this.technique;this._isOcclusionSlot||(this.bindTextures(t.program),this.bindTextureScale(t.program)),t.bindPass(this._material.params,e)}}class Le extends Ne{constructor(e){super({...e,output:4})}}function We(e,t,i,r,o,s,a,n){let l=t-o-(n[0]>0?r[0]*n[0]:0),c=l+r[0]+2*o,u=i-o-(n[1]>0?r[1]*n[1]:0),d=u+r[1]+2*o;if(a.textureIsSignedDistanceField){const e=a.distanceFieldBoundingBox;l+=r[0]*e[0],u+=r[1]*e[1],c-=r[0]*(1-e[2]),d-=r[1]*(1-e[3]),l-=s,c+=s,u-=s,d+=s}return e[0]>l&&e[0]<c&&e[1]>u&&e[1]<d}const Qe={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Ye=S(),Ze=p(),Xe=p(),Je=x(),Ke=p(),et=p(),tt=y(),it=y(),rt=C(),ot=p(),st={normal:Ke,cosAngle:0},at=C(),nt=1,lt=2,ct=[0,0],ut=v(0,0,1),dt={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:w(.5,.5),shaderPolygonOffset:1e-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",depthEnabled:!0,pixelSnappingEnabled:!0,debugDrawBorder:!1,isDraped:!1,...oe},ft=D().vec3f("position").vec3f("normal").vec2f("uv0").vec4u8("color").vec2f("size").vec4f("auxpos1").vec4f("auxpos2");class pt{constructor(e){this.material=e,this.vertexBufferLayout=ft}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get("position").length}write(e,t,i,r){se(t.indices.get("position"),t.vertexAttributes.get("position").data,e.transformation,i.position,r,6),ae(t.indices.get("normal"),t.vertexAttributes.get("normal").data,e.invTranspTransformation,i.normal,r,6);{const e=t.vertexAttributes.get("uv0").data;let o,s,a,n;if(null==e||e.length<4){const e=this.material.params;o=0,s=0,a=e.texCoordScale[0],n=e.texCoordScale[1]}else o=e[0],s=e[1],a=e[2],n=e[3];a=Math.min(1.99999,a+1),n=Math.min(1.99999,n+1);const l=t.indices.get("position").length,c=i.uv0;let u=r;for(let e=0;e<l;++e)c.set(u,0,o),c.set(u,1,s),u+=1,c.set(u,0,a),c.set(u,1,s),u+=1,c.set(u,0,a),c.set(u,1,n),u+=1,c.set(u,0,a),c.set(u,1,n),u+=1,c.set(u,0,o),c.set(u,1,n),u+=1,c.set(u,0,o),c.set(u,1,s),u+=1}ne(t.indices.get("color"),t.vertexAttributes.get("color").data,4,i.color,r,6);{const e=t.indices.get("size"),o=t.vertexAttributes.get("size").data,s=e.length,a=i.size;let n=r;for(let t=0;t<s;++t){const i=o[2*e[t]],r=o[2*e[t]+1];for(let e=0;e<6;++e)a.set(n,0,i),a.set(n,1,r),n+=1}}t.indices.get("auxpos1")&&t.vertexAttributes.get("auxpos1")&&le(t.indices.get("auxpos1"),t.vertexAttributes.get("auxpos1").data,i.auxpos1,r,6),t.indices.get("auxpos2")&&t.vertexAttributes.get("auxpos2")&&le(t.indices.get("auxpos2"),t.vertexAttributes.get("auxpos2").data,i.auxpos2,r,6)}}const vt=we.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function ht(e){const t=e&&e.expression;if("string"==typeof t){const e=Ct(t);if(null!=e)return{cachedResult:e}}return null}async function mt(e,t,i){const r=e&&e.expression;if("string"!=typeof r)return null;const o=Ct(r);if(null!=o)return{cachedResult:o};const s=await De(),a=s.arcadeUtils,n=a.createSyntaxTree(r);return a.dependsOnView(n)?(null!=i&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:a.createFunction(n),context:a.createExecContext(null,{sr:t}),modules:s}}}function gt(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function xt(e,t){if(null!=e&&!Pt(e)){if(!t||!e.arcade)return void vt.errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=ze(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function bt(e,t=!1){let i=e&&e.featureExpressionInfo;const r=i&&i.expression;return t||"0"===r||(i=null),i}const yt={cachedResult:0};function Pt(e){return null!=e.cachedResult}function Ct(e){return"0"===e?0:null}class Ot{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Oe(e)}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=function(e){if(null!=e){if(Pt(e))return e.cachedResult;const t=e.arcade;let i=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Se(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=m(e.offset,0)}updateFeatureExpressionInfoContext(e,t,i){if(g(e))return void(this._featureExpressionInfoContext=null);const r=e&&e.arcade;var o;r&&h(t)&&h(i)?(this._featureExpressionInfoContext={cachedResult:(o=e).cachedResult,arcade:o.arcade?{func:o.arcade.func,context:o.arcade.modules.arcadeUtils.createExecContext(null,{sr:o.arcade.context.spatialReference}),modules:o.arcade.modules}:null},xt(this._featureExpressionInfoContext,gt(r.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new Ot;return h(e)&&t.setFromElevationInfo(e),t}}function St(e,t,i){switch(e){case"circle":return wt(t,i);case"square":return zt(t,i);case"cross":return Et(t,i);case"x":return At(t,i);case"kite":return Dt(t,i);case"triangle":return Tt(t,i);default:return wt(t,i)}}function wt(e,t){const i=e,r=new Uint8Array(4*i*i),o=i/2-.5,s=t/2;for(let t=0;t<i;t++)for(let a=0;a<i;a++){const n=a+i*t,l=a-o,c=t-o;let u=Math.sqrt(l*l+c*c)-s;u=u/e+.5,ue(u,r,4*n)}return r}function zt(e,t){return jt(e,t,!1)}function Dt(e,t){return jt(e,t,!0)}function Et(e,t){return Ut(e,t,!1)}function At(e,t){return Ut(e,t,!0)}function Tt(e,t){const i=new Uint8Array(4*e*e),r=-.5,o=Math.sqrt(1.25),s=(e-t)/2;for(let a=0;a<e;a++)for(let n=0;n<e;n++){const l=a*e+n,c=(n-s)/t,u=(a-s+.75)/t,d=-(1*c+r*u)/o,f=(1*(c-1)+r*-u)/o,p=-u,v=Math.max(d,f,p);ue(v*t/e+.5,i,4*l)}return i}function jt(e,t,i){i&&(t/=Math.SQRT2);const r=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let s=0;s<e;s++){let a=s-.5*e+.25,n=.5*e-o-.75;const l=o*e+s;if(i){const e=(a+n)/Math.SQRT2;n=(n-a)/Math.SQRT2,a=e}let c=Math.max(Math.abs(a),Math.abs(n))-.5*t;c=c/e+.5,ue(c,r,4*l)}return r}function Ut(e,t,i){i&&(t*=Math.SQRT2);const r=.5*t,o=new Uint8Array(4*e*e);for(let t=0;t<e;t++)for(let s=0;s<e;s++){let a=s-.5*e,n=.5*e-t-1;const l=t*e+s;if(i){const e=(a+n)/Math.SQRT2;n=(n-a)/Math.SQRT2,a=e}let c;a=Math.abs(a),n=Math.abs(n),c=a>n?a>r?Math.sqrt((a-r)*(a-r)+n*n):n:n>r?Math.sqrt(a*a+(n-r)*(n-r)):a,c=c/e+.5,ue(c,o,4*l)}return o}export{Ee as A,Ot as E,Be as H,Te as a,je as b,_e as c,gt as d,Tt as e,At as f,Et as g,Dt as h,zt as i,wt as j,St as k,bt as l,Ue as m,mt as n,ht as o,xt as s,yt as z};
