// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(b,c){b.Colormap=function(a){a.fragment.uniforms.add("u_colormap","sampler2D");a.fragment.uniforms.add("u_colormapOffset","float");a.fragment.uniforms.add("u_colormapMaxIndex","float");a.fragment.code.add(c.glsl`vec4 colormap(vec4 currentPixel, bool isFloat) {
float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
result = vec4(color.rgb, 1.0) * color.a * u_opacity;
}
return result;
}`)};Object.defineProperty(b,"__esModule",{value:!0})});