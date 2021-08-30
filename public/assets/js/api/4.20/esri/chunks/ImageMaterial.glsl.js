// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(d,g,h,k,l,e,m,c,n){function f(b){const a=new n.ShaderBuilder;a.include(h.Transform,{linearDepth:!1});a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.attributes.add("position","vec3");a.attributes.add("uv0","vec2");a.varyings.add("vpos","vec3");b.multipassTerrainEnabled&&a.varyings.add("depth","float");a.vertex.uniforms.add("textureCoordinateScaleFactor","vec2");a.vertex.code.add(c.glsl`
    void main(void) {
      vpos = position;
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `);a.include(g.Slice,b);b.multipassTerrainEnabled&&(a.fragment.include(k.ReadLinearDepth),a.include(l.multipassTerrainTest,b));a.fragment.uniforms.add("tex","sampler2D");a.fragment.uniforms.add("opacity","float");a.varyings.add("vTexCoord","vec2");7===b.output?a.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.glsl.float(e.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(a.fragment.include(m.ColorConversion),a.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${c.glsl.float(e.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${b.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    }
    `));return a}var p=Object.freeze({__proto__:null,build:f});d.ImageMaterialShader=p;d.build=f});