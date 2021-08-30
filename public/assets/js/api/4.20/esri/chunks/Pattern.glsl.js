// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(f,h,k,l,m,n,p,q,r,t,c,u){function g(b){const a=new u.ShaderBuilder;b.draped||a.extensions.add("GL_OES_standard_derivatives");const d=1===b.output;a.include(k.Transform,{linearDepth:d});a.include(l.VertexColor,b);a.vertex.uniforms.add("proj","mat4");a.vertex.uniforms.add("view","mat4");d&&(a.include(m.OutputDepth,b),a.vertex.uniforms.add("cameraNearFar","vec2"),a.varyings.add("linearDepth","float"));b.draped?a.vertex.uniforms.add("worldToScreenRatio","float"):(a.vertex.uniforms.add("worldToScreenPerDistanceRatio",
"float"),a.vertex.uniforms.add("camPos","vec3"),a.attributes.add("boundingRect","mat3"));a.attributes.add("position","vec3");a.attributes.add("uvMapSpace","vec4");a.varyings.add("vpos","vec3");a.varyings.add("vuv","vec2");b.multipassTerrainEnabled&&a.varyings.add("depth","float");const e=3===b.style||4===b.style||5===b.style;e&&a.vertex.code.add(c.glsl`
      const mat2 rotate45 = mat2(${c.glsl.float(.70710678118)}, ${c.glsl.float(-.70710678118)},
                                 ${c.glsl.float(.70710678118)}, ${c.glsl.float(.70710678118)});
    `);b.draped||(a.vertex.code.add(c.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),a.vertex.code.add(c.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),a.vertex.code.add(c.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${c.glsl.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, camPos, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - camPos);
      }
    `));a.vertex.code.add(c.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${e?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${e?" * rotate45":""};

      ${b.draped?c.glsl`
            float ratio = worldToScreenRatio;
          `:c.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float ratio = worldToScreenPerDistanceRatio / distanceToCamera;

            // Logarithmically discretize ratio to avoid jittering
            float step = 0.1;
            ratio = log(ratio);
            ratio = ceil(ratio / step) * step;
            ratio = exp(ratio);
          `}

      vec2 uvOffset = mod(uvCellOrigin * ratio, ${c.glsl.float(b.patternSpacing)});
      return uvOffset + (uv * ratio);
    }
  `);a.vertex.code.add(c.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${d?c.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);a.include(h.Slice,b);a.fragment.include(t.ColorConversion);a.fragment.uniforms.add("matColor","vec4");b.draped&&a.fragment.uniforms.add("texelSize","float");4===b.output&&a.include(n.OutputHighlight);b.multipassTerrainEnabled&&(a.fragment.include(p.ReadLinearDepth),a.include(q.multipassTerrainTest,b));4!==b.output&&(a.fragment.code.add(c.glsl`
      const float lineWidth = ${c.glsl.float(b.lineWidth)};
      const float spacing = ${c.glsl.float(b.patternSpacing)};
      const float spacingINV = ${c.glsl.float(1/b.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),b.draped||a.fragment.code.add(c.glsl`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`));a.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${b.attributeColor?"vColor * matColor;":"matColor;"}
      color = highlightSlice(color, vpos);

      ${4!==b.output?c.glsl`color.a *= ${v(b)};`:""}

      if (color.a < ${c.glsl.float(r.symbolAlphaCutoff)}) {
        discard;
      }

      ${7===b.output?c.glsl`gl_FragColor = vec4(color.a);`:""}

      ${0===b.output?c.glsl`gl_FragColor = color; ${b.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
      ${4===b.output?c.glsl`outputHighlight();`:""}
      ${1===b.output?c.glsl`outputDepth(linearDepth);`:""};
    }
  `);return a}function v(b){function a(d){return b.draped?c.glsl`coverage(vuv.${d}, texelSize)`:c.glsl`sample(vuv.${d})`}switch(b.style){case 3:case 0:return a("y");case 4:case 1:return a("x");case 5:case 2:return c.glsl`
        1.0 - (1.0 - ${a("x")}) * (1.0 - ${a("y")})
      `;default:return"0.0"}}var w=Object.freeze({__proto__:null,build:g});f.PatternShader=w;f.build=g});