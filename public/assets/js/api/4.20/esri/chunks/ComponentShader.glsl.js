// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../geometry/support/Ellipsoid ../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl ../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(e,f,q,r,t,u,v,w,x,y,z,A,g,h,B,k,C,l,D,E,F,G,m,c,H){function n(a){const b=new H.ShaderBuilder;b.include(y.VertexPosition,a);b.include(x.VertexNormal,a);b.include(w.VertexColor,a);b.include(v.TextureCoordinateAttribute,a);b.include(t.ForwardLinearDepth,a);b.include(q.ComponentData,a);b.include(m.DiscardOrAdjustAlpha,a);b.include(u.Slice,a);b.include(E.ReadBaseColorTexture,a);b.include(r.VertexDiscardByOpacity,a);b.fragment.uniforms.add("view","mat4");if(1===a.pbrMode||2===a.pbrMode)b.include(D.PhysicallyBasedRenderingParameters,
a),a.hasNormalTexture&&b.include(B.ComputeNormalTexture,a);3===a.output&&1===a.componentData?b.vertex.code.add(c.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):b.vertex.code.add(c.glsl`#define discardShadows(castShadows) {}`);const d=a.overlayEnabled&&0===a.output&&4===a.pbrMode;a.overlayEnabled&&(b.include(G.Overlay,a),1===a.viewingMode?b.vertex.code.add(c.glsl`
      const float invEllipsoidRadius = ${c.glsl.float(1/(1===a.ellipsoidMode?f.earth.radius:2===a.ellipsoidMode?f.mars.radius:f.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):b.vertex.code.add(c.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`));d&&(b.varyings.add("tbnTangent","vec3"),b.varyings.add("tbnBiTangent","vec3"),b.varyings.add("groundNormal","vec3"),b.varyings.add("positionView","vec3"));b.vertex.code.add(c.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${c.glsl.float(m.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${d?c.glsl`
        positionView = position_view();
        ${1===a.viewingMode?c.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:c.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${a.overlayEnabled?c.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `);7===a.output&&(b.fragment.include(g.ReadLinearDepth),a.multipassTerrainEnabled&&b.include(l.multipassTerrainTest,a),b.include(h.ComputeMaterialColor,a),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${a.overlayEnabled?c.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `));0===a.output&&(b.fragment.include(g.ReadLinearDepth),a.multipassTerrainEnabled&&b.include(l.multipassTerrainTest,a),b.include(h.ComputeMaterialColor,a),b.include(k.ComputeShadingNormal,a),b.include(C.EvaluateSceneLighting,a),d&&b.fragment.uniforms.add("ovNormalTex","sampler2D"),a.receiveShadows?(b.include(F.ReadShadowMap,a),b.fragment.code.add(c.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):b.fragment.code.add(c.glsl`float evaluateShadow() { return 0.0; }`),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${a.overlayEnabled?c.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),1===a.pbrMode||2===a.pbrMode?(b.fragment.code.add(c.glsl`
        ${1===a.pbrMode?c.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),a.hasNormalTexture?b.fragment.code.add(c.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):b.fragment.code.add(c.glsl`vec3 shadingNormal = normalVertex;`),b.fragment.code.add(c.glsl`${1===a.viewingMode?c.glsl`vec3 normalGround = normalize(positionWorld());`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),b.fragment.code.add(c.glsl`vec3 viewDir = normalize(vPositionWorldCameraRelative);
float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);`)):(a.receiveShadows?b.fragment.code.add(c.glsl`float shadow = evaluateShadow();`):1===a.viewingMode?b.fragment.code.add(c.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`):b.fragment.code.add(c.glsl`float shadow = 0.0;`),b.fragment.code.add(c.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${d?c.glsl`
          vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
          float waterNormalLength = length(overlayWaterMask);
          if (waterNormalLength > 0.95) {
            mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
            vec4 waterOverlayColor = vec4(overlayColorOpaque.xyz, overlayColor.w);
            vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, positionView);
            vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
            // un-gamma the ground color to mix in linear space
            shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
          }`:""}
      `)),b.fragment.code.add(c.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${a.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));if(1===a.output||3===a.output)b.include(z.OutputDepth,a),b.fragment.code.add(c.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`);2===a.output&&(b.include(k.ComputeShadingNormal,a),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${2===a.normalType?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `));4===a.output&&(b.include(A.OutputHighlight),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${a.overlayEnabled?c.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `));return b}const p=new Map([["position",0],["normal",1],["normalCompressed",1],["color",2],["uv0",3],["uvRegion",4],["componentIndex",5]]);var I=Object.freeze({__proto__:null,attributeLocations:p,build:n});e.ComponentShader=I;e.attributeLocations=p;e.build=n});