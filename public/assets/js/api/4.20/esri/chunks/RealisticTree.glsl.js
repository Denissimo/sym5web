// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(e,n,p,f,q,r,t,u,v,w,x,y,z,g,A,B,h,C,D,E,F,d,k,c,G){function l(a){const b=new G.ShaderBuilder,H=b.vertex.code,m=b.fragment.code;b.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3");b.include(u.PositionAttribute);b.varyings.add("vpos","vec3");b.include(F.VisualVariables,a);b.include(r.InstancedDoublePrecision,a);b.include(y.VerticalOffset,a);if(0===a.output||7===a.output)b.include(t.NormalAttribute,a),b.include(q.Transform,{linearDepth:!1}),
a.offsetBackfaces&&b.include(p.Offset),a.instancedColor&&b.attributes.add("instanceColor","vec4"),b.varyings.add("vNormalWorld","vec3"),b.varyings.add("localvpos","vec3"),a.multipassTerrainEnabled&&b.varyings.add("depth","float"),b.include(w.TextureCoordinateAttribute,a),b.include(n.ForwardLinearDepth,a),b.include(v.SymbolColor,a),b.include(x.VertexColor,a),b.vertex.uniforms.add("externalColor","vec4"),b.varyings.add("vcolorExt","vec4"),H.add(c.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${a.instancedColor?"vcolorExt *\x3d instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${c.glsl.float(d.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${a.multipassTerrainEnabled?c.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `);7===a.output&&(b.include(f.Slice,a),b.include(d.DiscardOrAdjustAlpha,a),a.multipassTerrainEnabled&&(b.fragment.include(g.ReadLinearDepth),b.include(h.multipassTerrainTest,a)),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),b.fragment.uniforms.add("view","mat4"),a.hasColorTexture&&b.fragment.uniforms.add("tex","sampler2D"),b.fragment.include(k.MixExternalColor),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        ${a.attributeColor?c.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `));0===a.output&&(b.include(f.Slice,a),b.include(B.EvaluateSceneLighting,a),b.include(A.EvaluateAmbientOcclusion,a),b.include(d.DiscardOrAdjustAlpha,a),a.receiveShadows&&b.include(E.ReadShadowMap,a),a.multipassTerrainEnabled&&(b.fragment.include(g.ReadLinearDepth),b.include(h.multipassTerrainTest,a)),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),b.fragment.uniforms.add("view","mat4"),
a.hasColorTexture&&b.fragment.uniforms.add("tex","sampler2D"),b.include(D.PhysicallyBasedRenderingParameters,a),b.include(C.PhysicallyBasedRendering,a),b.fragment.include(k.MixExternalColor),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===a.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":1===a.viewingMode?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${a.attributeColor?c.glsl`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${c.glsl`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===a.pbrMode||2===a.pbrMode?1===a.viewingMode?c.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:c.glsl``}
        ${1===a.pbrMode||2===a.pbrMode?c.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor \x3d evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));b.include(z.DefaultMaterialAuxiliaryPasses,a);return b}var I=Object.freeze({__proto__:null,build:l});e.RealisticTreeShader=I;e.build=l});