// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../shaderModules/interfaces"],function(b,c){b.ScreenSizeScaling=function(a){a.vertex.uniforms.add("camPos","vec3").add("perScreenPixelRatio","float").add("screenSize","float");a.vertex.code.add(c.glsl`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - camPos));
return viewDirectionDistance*perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
}`)};b.bindScreenSizeScalingUniforms=function(a,d,e){a.setUniform1f("perScreenPixelRatio",e.camera.perScreenPixelRatio);a.setUniform1f("screenSize",d.screenSize)};Object.defineProperty(b,"__esModule",{value:!0})});