// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),function(e,k,l,m,n,
p,b,q){function f(g){const a=new q.ShaderBuilder;a.fragment.include(p.RgbaFloatEncoding);a.fragment.include(l.ReadLinearDepth);a.include(n.CameraSpace);a.include(k.ScreenSpacePass);const {pass:c}=g;if(1===c){const {visualization:d,bandsEnabled:h}=g;a.fragment.constants.add("inverseSampleValue","float",255);a.fragment.uniforms.add("shadowAccumulationMap","sampler2D");a.fragment.uniforms.add("sampleScale","float");a.fragment.uniforms.add("opacityFromElevation","float");0===d?(a.fragment.uniforms.add("colorRamp",
"sampler2D"),a.fragment.uniforms.add("rampSize","float"),a.fragment.code.add(b.glsl`vec4 sampleColorRamp(sampler2D ramp, float rampSize, float u) {
float rampU = (u * (rampSize - 1.0) + 0.5) / rampSize;
return texture2D(ramp, vec2(rampU, 0.5));
}`),h&&a.fragment.uniforms.add("bandSize","float")):1===d&&(a.fragment.uniforms.add("threshold","float"),a.fragment.uniforms.add("colors","vec4",2));a.fragment.code.add(b.glsl`
      void main(void) {
        vec4 record = texture2D(shadowAccumulationMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${0===d&&h?b.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = ${0===d?b.glsl`sampleColorRamp(colorRamp, rampSize, strength)`:b.glsl`strength <= threshold ? colors[0] : colors[1]`};

        gl_FragColor.a *= opacityFromElevation;
      }
    `)}else if(0===c||2===c)a.include(m.ReadShadowMap),a.fragment.uniforms.add("depthMap","sampler2D"),a.fragment.uniforms.add("inverseView","mat4"),a.fragment.uniforms.add("nearFar","vec2"),0===c?a.fragment.constants.add("sampleValue","float",r):a.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),a.fragment.code.add(b.glsl`
      void main(void) {

        float depth = rgba2float(texture2D(depthMap, uv));
        // 0.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
        if (depth == 0.0) {
          discard;
        }

        float currentPixelDepth = linearDepthFromFloat(depth, nearFar);

        if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
          discard;
        }

        vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
        vec4 worldSpacePos = inverseView * currentPixelPos;

        mat4 shadowMatrix;
        float linearDepth = -currentPixelDepth;
        int i = chooseCascade(linearDepth, shadowMatrix);

        if (i >= uShadowMapNum) {
          discard;
        }

        vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

        // vertex completely outside? -> no shadow
        if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
          discard;
        }

        vec2 uvShadow = cascadeCoordinates(i, lvpos);

        float depthShadow = readShadowMapDepth(uvShadow, uShadowMapTex);
        bool shadow = depthShadow < lvpos.z;

        if (!shadow) {
          discard;
        }

        gl_FragColor = ${0===c?b.glsl`vec4(sampleValue)`:b.glsl`shadowColor`};
      }
    `);return a}const r=1/255;var t=Object.freeze({__proto__:null,shadowAccumulationMaxSamples:255,build:f});e.ShadowAccumulationShader=t;e.build=f;e.shadowAccumulationMaxSamples=255});