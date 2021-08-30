// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],function(d,f,b,g){function e(c){const a=new g.ShaderBuilder;2===c.geometry?(a.attributes.add("position","vec2"),a.varyings.add("color","vec4"),a.vertex.uniforms.add("lightingMainDirection","vec3").add("cameraPosition","vec3").add("undergroundFadeAlpha","float"),a.vertex.code.add(b.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),a.fragment.code.add(b.glsl`void main() {
gl_FragColor = color;
}`)):(a.include(f.Transform,{linearDepth:!1}),a.attributes.add("position","vec3"),a.varyings.add("vtc","vec2"),a.varyings.add("falloff","float"),c=1===c.geometry,a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("lightingMainDirection","vec3"),c||(a.varyings.add("innerFactor","float"),a.vertex.uniforms.add("silCircleCenter","vec3").add("silCircleV1","vec3").add("silCircleV2","vec3").add("texV","vec2").add("innerScale","float")),a.vertex.code.add(b.glsl`
		void main(void) {
      ${c?b.glsl`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:b.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${b.glsl.float(.04908738515625)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${b.glsl.float(.0078125)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),a.fragment.uniforms.add("tex","sampler2D"),c||a.fragment.uniforms.add("altitudeFade","float"),a.fragment.code.add(b.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${c?b.glsl`gl_FragColor = atmosphereColor;`:b.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`));return a}var h=Object.freeze({__proto__:null,build:e});d.SimpleAtmosphereShader=h;d.build=e});