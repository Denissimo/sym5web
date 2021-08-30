// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./PositionAttribute.glsl","../../shaderModules/interfaces"],function(d,e,c){d.PathVertexPosition=function(a,b){a.attributes.add("featureValue","vec4");a.vertex.code.add(c.glsl`bool isCapVertex() {
return featureValue.w == 1.0;
}`);a.vertex.uniforms.add("size","vec3");b.vvSize?(a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.code.add(c.glsl`vec2 getSize() {
return size.xy*clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):a.vertex.code.add(c.glsl`vec2 getSize(){
return size.xy;
}`);b.vvOpacity?(a.vertex.constants.add("vvOpacityNumber","int",8),a.vertex.code.add(c.glsl`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
vec4 applyOpacity(vec4 color) {
float value = featureValue.z;
if (value <= vvOpacityValues[0]) {
return vec4( color.xyz, vvOpacityOpacities[0]);
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
}
}
return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
}`)):a.vertex.code.add(c.glsl`vec4 applyOpacity(vec4 color){
return color;
}`);b.vvColor?(a.vertex.constants.add("vvColorNumber","int",8),a.vertex.code.add(c.glsl`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 getColor() {
float value = featureValue.y;
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):a.vertex.code.add(c.glsl`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`);a.include(e.PositionAttribute);a.attributes.add("profileRight","vec4");a.attributes.add("profileUp","vec4");a.attributes.add("profileVertexAndNormal","vec4");a.vertex.code.add(c.glsl`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`);a.vertex.code.add(c.glsl`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`);a.vertex.code.add(c.glsl`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`);a.vertex.code.add(c.glsl`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)};d.setVVUniforms=function(a,b){b.vvSizeEnabled&&(a.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),a.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),a.setUniform3fv("vvSizeOffset",b.vvSizeOffset),a.setUniform3fv("vvSizeFactor",b.vvSizeFactor));b.vvColorEnabled&&(a.setUniform1fv("vvColorValues",b.vvColorValues),a.setUniform4fv("vvColorColors",b.vvColorColors));b.vvOpacityEnabled&&(a.setUniform1fv("vvOpacityValues",b.vvOpacityValues),a.setUniform1fv("vvOpacityOpacities",b.vvOpacityOpacities))};Object.defineProperty(d,
"__esModule",{value:!0})});