// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(f,l,d,e,m,n,p,q,r,t,u,v,g,h,w,c,x){function k(b){const a=new x.ShaderBuilder;a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3");a.varyings.add("vpos","vec3");a.include(m.PathVertexPosition,b);if(0===b.output||7===b.output)a.include(e.Transform,{linearDepth:!1}),b.receiveShadows&&a.include(h.ReadShadowMap,b),a.include(l.ForwardLinearDepth,b),a.varyings.add("vnormal","vec3"),a.varyings.add("vcolor","vec4"),b.multipassTerrainEnabled&&a.varyings.add("depth",
"float"),a.vertex.code.add(c.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${0===b.output?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `);b.multipassTerrainEnabled&&(a.fragment.include(q.ReadLinearDepth),a.include(u.multipassTerrainTest,b));7===b.output&&(a.include(d.Slice,b),a.fragment.uniforms.add("camPos","vec3"),a.fragment.uniforms.add("localOrigin","vec3"),a.fragment.uniforms.add("opacity","float"),a.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `));0===b.output&&(a.include(d.Slice,b),a.include(t.EvaluateSceneLighting,b),a.include(r.EvaluateAmbientOcclusion,b),b.receiveShadows&&a.include(h.ReadShadowMap,b),a.include(v.Normals,b),a.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),a.fragment.include(w.ColorConversion),a.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - camPos);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${b.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":1===b.viewingMode?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${b.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));if(1===b.output||3===b.output)a.include(e.Transform,{linearDepth:!0}),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth","float"),a.vertex.code.add(c.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),a.include(d.Slice,b),a.include(n.OutputDepth,b),a.fragment.uniforms.add("timeElapsed","float"),a.fragment.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);2===b.output&&(a.include(e.Transform,{linearDepth:!1}),a.include(g.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal","vec3"),a.vertex.code.add(c.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(d.Slice,b),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(c.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`));4===b.output&&(a.include(e.Transform,{linearDepth:!1}),a.include(g.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal","vec3"),a.vertex.code.add(c.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(d.Slice,b),a.include(p.OutputHighlight),a.fragment.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`));return a}var y=Object.freeze({__proto__:null,build:k});f.PathShader=y;f.build=k});