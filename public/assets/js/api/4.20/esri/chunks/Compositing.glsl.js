// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],function(d,f,c,g){function e(b){const a=new g.ShaderBuilder;a.include(f.ScreenSpacePass);a.fragment.uniforms.add("tex","sampler2D");0===b.function&&(b.hasOpacityFactor?(a.fragment.uniforms.add("opacity","float"),a.fragment.code.add(c.glsl`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):a.fragment.code.add(c.glsl`void main() {
gl_FragColor = texture2D(tex, uv);
}`));3===b.function&&(a.fragment.uniforms.add("overlayIdx","int"),b.hasOpacityFactor&&a.fragment.uniforms.add("opacity","float"),a.fragment.code.add(c.glsl`
      void main() {
        vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5+ 0.5, uv.y);
        gl_FragColor = texture2D(tex, overlayUV) ${b.hasOpacityFactor?"* opacity":""};
      }`));1===b.function&&a.fragment.code.add(c.glsl`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`);2===b.function&&(a.fragment.uniforms.add("colorTexture","sampler2D"),a.fragment.uniforms.add("alphaTexture","sampler2D"),a.fragment.uniforms.add("frontFaceTexture","sampler2D"),a.fragment.code.add(c.glsl`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`));return a}var h=Object.freeze({__proto__:null,build:e});d.CompositingShader=h;d.build=e});