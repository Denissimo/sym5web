// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(d,f,g,h,k,l,m,n,c,p){function e(b){const a=new p.ShaderBuilder;a.include(h.Transform,{linearDepth:!1});a.include(f.ScreenSizeScaling,{});a.include(g.Slice,b);a.fragment.include(n.ColorConversion);a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.fragment.uniforms.add("color","vec4");a.attributes.add("position","vec3");a.varyings.add("vWorldPosition","vec3");b.multipassTerrainEnabled&&a.varyings.add("depth","float");b.screenSizeEnabled&&a.attributes.add("offset","vec3");b.shadingEnabled&&
(a.vertex.uniforms.add("viewNormal","mat4"),a.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),a.attributes.add("normal","vec3"),a.varyings.add("vViewNormal","vec3"));a.vertex.code.add(c.glsl`
    void main(void) {
      vWorldPosition = ${b.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `);b.shadingEnabled&&a.vertex.code.add(c.glsl`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`);a.vertex.code.add(c.glsl`
    ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `);b.multipassTerrainEnabled&&(a.fragment.include(k.ReadLinearDepth),a.include(l.multipassTerrainTest,b));a.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vWorldPosition);
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `);b.shadingEnabled?a.fragment.code.add(c.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(color, shadedColor, shadingFactor);`):a.fragment.code.add(c.glsl`vec4 finalColor = color;`);a.fragment.code.add(c.glsl`
      if (finalColor.a < ${c.glsl.float(m.symbolAlphaCutoff)}) {
        discard;
      }
      ${7===b.output?c.glsl`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===b.output?c.glsl`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${b.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `);return a}var q=Object.freeze({__proto__:null,build:e});d.ShadedColorMaterialShader=q;d.build=e});