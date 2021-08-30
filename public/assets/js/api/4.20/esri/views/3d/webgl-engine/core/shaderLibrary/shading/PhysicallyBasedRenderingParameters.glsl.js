// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],function(e,f,h,c){f=f.fromValues(0,.6,.2);e.PBRSchematicMRRValues=f;e.PhysicallyBasedRenderingParameters=function(d,a){const b=d.fragment,g=a.hasMetalnessAndRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture;1===a.pbrMode&&g&&d.include(h.VertexTextureCoordinates,a);2===a.pbrMode?b.code.add(c.glsl`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`):(0===a.pbrMode&&b.code.add(c.glsl`float getBakedOcclusion() { return 1.0; }`),1===a.pbrMode&&(b.uniforms.add("emissionFactor","vec3"),b.uniforms.add("mrrFactors","vec3"),b.code.add(c.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a.hasMetalnessAndRoughnessTexture&&(b.uniforms.add("texMetallicRoughness","sampler2D"),a.supportsTextureAtlas&&b.uniforms.add("texMetallicRoughnessSize","vec2"),b.code.add(c.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),a.hasEmissionTexture&&(b.uniforms.add("texEmission","sampler2D"),a.supportsTextureAtlas&&b.uniforms.add("texEmissionSize","vec2"),b.code.add(c.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),a.hasOcclusionTexture?(b.uniforms.add("texOcclusion","sampler2D"),a.supportsTextureAtlas&&b.uniforms.add("texOcclusionSize","vec2"),b.code.add(c.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):b.code.add(c.glsl`float getBakedOcclusion() { return 1.0; }`),b.code.add(c.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${g?"vtc.uv \x3d vuv0;":""}
      ${a.hasMetalnessAndRoughnessTexture?a.supportsTextureAtlas?"vtc.size \x3d texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${a.hasEmissionTexture?a.supportsTextureAtlas?"vtc.size \x3d texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${a.hasOcclusionTexture?a.supportsTextureAtlas?"vtc.size \x3d texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)))};e.bindPBRUniforms=function(d,a,b=!1){b||(d.setUniform3fv("mrrFactors",a.mrrFactors),d.setUniform3fv("emissionFactor",a.emissiveFactor))};Object.defineProperty(e,"__esModule",{value:!0})});