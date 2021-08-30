// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(e,n,p,f,q,r,t,u,v,w,x,y,z,A,g,B,C,D,h,E,F,G,H,I,d,J,k,c,K){function l(a){const b=new K.ShaderBuilder,L=b.vertex.code,m=b.fragment.code;b.include(J.HeaderComment,{name:"Default Material Shader",output:a.output});b.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3");b.include(u.PositionAttribute);b.varyings.add("vpos","vec3");b.include(I.VisualVariables,a);b.include(r.InstancedDoublePrecision,a);b.include(z.VerticalOffset,a);if(0===a.output||
7===a.output)b.include(t.NormalAttribute,a),b.include(q.Transform,{linearDepth:!1}),0===a.normalType&&a.offsetBackfaces&&b.include(p.Offset),b.include(B.ComputeNormalTexture,a),b.include(y.VertexNormal,a),a.instancedColor&&b.attributes.add("instanceColor","vec4"),b.varyings.add("localvpos","vec3"),b.include(w.TextureCoordinateAttribute,a),b.include(n.ForwardLinearDepth,a),b.include(v.SymbolColor,a),b.include(x.VertexColor,a),b.vertex.uniforms.add("externalColor","vec4"),b.varyings.add("vcolorExt",
"vec4"),a.multipassTerrainEnabled&&b.varyings.add("depth","float"),L.add(c.glsl`
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
          ${0===a.normalType?c.glsl`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.vertexTangents?"vTangent \x3d dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===a.normalType&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${a.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `);7===a.output&&(b.include(f.Slice,a),b.include(d.DiscardOrAdjustAlpha,a),a.multipassTerrainEnabled&&(b.fragment.include(g.ReadLinearDepth),b.include(h.multipassTerrainTest,a)),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),a.hasColorTexture&&b.fragment.uniforms.add("tex","sampler2D"),b.fragment.include(k.MixExternalColor),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
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
    `));0===a.output&&(b.include(f.Slice,a),b.include(D.EvaluateSceneLighting,a),b.include(C.EvaluateAmbientOcclusion,a),b.include(d.DiscardOrAdjustAlpha,a),a.receiveShadows&&b.include(H.ReadShadowMap,a),a.multipassTerrainEnabled&&(b.fragment.include(g.ReadLinearDepth),b.include(h.multipassTerrainTest,a)),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),a.hasColorTexture&&b.fragment.uniforms.add("tex",
"sampler2D"),b.include(G.PhysicallyBasedRenderingParameters,a),b.include(F.PhysicallyBasedRendering,a),b.fragment.include(k.MixExternalColor),b.include(E.Normals,a),m.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===a.normalType?c.glsl`
        vec3 normal = screenDerivativeNormal(localvpos);`:c.glsl`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
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
        ${a.hasNormalTexture?c.glsl`
              mat3 tangentSpace = ${a.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal \x3d normal;"}
        ${1===a.pbrMode||2===a.pbrMode?1===a.viewingMode?c.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:c.glsl``}
        ${1===a.pbrMode||2===a.pbrMode?c.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor \x3d evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));b.include(A.DefaultMaterialAuxiliaryPasses,a);return b}var M=Object.freeze({__proto__:null,build:l});e.DefaultMaterialShader=M;e.build=l});