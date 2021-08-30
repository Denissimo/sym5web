// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(b,d){b.Reprojection=function(a){a.fragment.uniforms.add("lastFrameColorMap","sampler2D");a.fragment.uniforms.add("reprojectionMat","mat4");a.fragment.uniforms.add("rpProjectionMat","mat4");a.fragment.code.add(d.glsl`vec2 reprojectionCoordinate(vec3 projectionCoordinate)
{
vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
reprojectedCoord.xy /= reprojectedCoord.w;
return reprojectedCoord.xy * 0.5 + 0.5;
}`)};b.bindReprojectionUniforms=function(a,c){a.bindTexture(c.lastFrameColorTexture,"lastFrameColorMap");a.setUniformMatrix4fv("reprojectionMat",c.reprojectionMat);a.setUniformMatrix4fv("rpProjectionMat",c.camera.projectionMatrix)};Object.defineProperty(b,"__esModule",{value:!0})});