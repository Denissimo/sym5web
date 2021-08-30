/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{g as e}from"./VertexColor.glsl.js";function v(v,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&v.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(v.vertex.uniforms.add("vvSizeMinSize","vec3"),v.vertex.uniforms.add("vvSizeMaxSize","vec3"),v.vertex.uniforms.add("vvSizeOffset","vec3"),v.vertex.uniforms.add("vvSizeFactor","vec3"),v.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),v.vertex.uniforms.add("vvSymbolAnchor","vec3"),v.vertex.code.add(e`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),v.vertex.code.add(e`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?e`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):v.vertex.code.add(e`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(v.vertex.constants.add("vvColorNumber","int",8),v.vertex.code.add(e`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?e`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):v.vertex.code.add(e`vec4 vvColor() { return vec4(1.0); }`)}function o(e,v){v.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",v.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",v.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",v.vvSizeOffset),e.setUniform3fv("vvSizeFactor",v.vvSizeFactor)),v.vvColorEnabled&&(e.setUniform1fv("vvColorValues",v.vvColorValues),e.setUniform4fv("vvColorColors",v.vvColorColors))}function t(e,v){o(e,v),v.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",v.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",v.vvOpacityOpacities))}function r(e,v){o(e,v),v.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",v.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",v.vvSymbolRotationMatrix))}function i(v){v.vertex.code.add(e`const float PI = 3.141592653589793;`),v.fragment.code.add(e`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}export{i as P,v as V,o as a,r as b,t as c};
