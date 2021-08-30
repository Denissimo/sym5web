// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderModules/interfaces"],function(f,g,c){function e(d,b){const a=d.vertex;a.uniforms.add("uDistanceFalloffFactor","float");a.code.add(c.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(uDistanceFalloffFactor / distance), 0.0, 1.0);
}`);a.uniforms.add("uComponentDataTex","sampler2D");a.uniforms.add("uComponentDataTexInvDim","vec2");d.attributes.add("componentIndex","float");a.constants.add("componentColorFieldOffset","float",0);a.constants.add("componentOtherFieldOffset","float",1);a.constants.add("componentFieldCount","float",2);a.constants.add("lineWidthFractionFactor","float",8);a.constants.add("extensionLengthOffset","float",128);a.constants.add("componentTexWidth","float",4096);a.code.add(c.glsl`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
float rowIndex = floor(fieldIndex / componentTexWidth);
float colIndex = mod(fieldIndex, componentTexWidth);
vec2 linearIndex = vec2(
(colIndex + 0.5) / componentTexWidth,
(rowIndex + 0.5) * uComponentDataTexInvDim.y
);
return linearIndex;
}
struct ComponentData {
vec4 color;
float lineWidth;
float extensionLength;
float type;
};
ComponentData readComponentData() {
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec4 colorValue = texture2D(uComponentDataTex, colorIndex);
vec4 otherValue = texture2D(uComponentDataTex, otherIndex);
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5
);
}`);b.legacy?a.code.add(c.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (uModel * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (uView * uModel * vec4(normal, 0.0)).xyz;
}`):(a.uniforms.add("uTransformNormal_GlobalFromModel ","mat3"),a.code.add(c.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return uTransformNormal_GlobalFromModel * normal;
}`));b.silhouette?(d.attributes.add("normalA","vec3"),d.attributes.add("normalB","vec3"),a.code.add(c.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(d.attributes.add("normal","vec3"),a.code.add(c.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`));b.legacy?a.code.add(c.glsl`vec3 worldFromModelPosition(vec3 position) {
return (uModel * vec4(position, 1.0)).xyz;
}
vec3 viewFromModelPosition(vec3 position) {
return (uView * vec4(worldFromModelPosition(position), 1.0)).xyz;
}
vec4 projFromViewPosition(vec3 position) {
return uProj * vec4(position, 1.0);
}`):(d.vertex.include(g.DoublePrecision,b),a.code.add(c.glsl`vec3 worldFromModelPosition(vec3 position) {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * position;
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 viewFromModelPosition(vec3 position) {
return uTransform_ViewFromCameraRelative_RS * worldFromModelPosition(position);
}
vec4 projFromViewPosition(vec3 position) {
return uTransform_ProjFromView * vec4(position, 1.0);
}`));a.code.add(c.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}(function(d){d.usesSketchLogic=function(b){return 1===b.mode||2===b.mode};d.usesSolidLogic=function(b){return 0===b.mode||2===b.mode}})(e||(e={}));f.EdgeUtil=e;Object.defineProperty(f,"__esModule",{value:!0})});