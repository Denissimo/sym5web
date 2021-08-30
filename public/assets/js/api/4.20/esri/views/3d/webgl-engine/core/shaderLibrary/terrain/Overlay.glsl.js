// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../shading/EvaluateMainLighting.glsl","../shading/Water.glsl","../../shaderModules/interfaces"],function(d,e,f,c){d.Overlay=function(a,b){a.extensions.add("GL_OES_standard_derivatives");3!==b.pbrMode&&4!==b.pbrMode||a.include(f.Water,b);a.vertex.uniforms.add("overlayTexOffset","vec4");a.vertex.uniforms.add("overlayTexScale","vec4");a.varyings.add("vtcOverlay","vec4");a.vertex.code.add(c.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`);a.fragment.uniforms.add("ovColorTex","sampler2D");a.fragment.uniforms.add("overlayOpacity","float");a.fragment.code.add(c.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);a.fragment.code.add(c.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`);if(3===b.pbrMode||4===b.pbrMode)a.include(e.EvaluateMainLighting),a.fragment.code.add(c.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, lightingMainDirection, colorInput.rgb, lightingMainIntensity, localUp, 1.0 - shadow, maskInput.w, position);
return vec4(final, colorInput.w);
}`)};Object.defineProperty(d,"__esModule",{value:!0})});