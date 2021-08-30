// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3f64 ../../../webgl/BufferObject ../../../webgl/FramebufferObject ../../../webgl/Program ../../../webgl/ProgramCache ../../../webgl/Renderbuffer ../../../webgl/RenderingContext ../../../webgl/ShaderCompiler ../../../webgl/Texture ../../../webgl/VertexArrayObject ./doublePrecisionUtils ./Util ../../../webgl/testSVGPremultipliedAlpha".split(" "),function(g,t,h,k,u,v,w,F,G,H,I,J,x,l,y,z){function m(a,
b){var c=new v(a,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const n=u.createVertex(a,35044,new Uint16Array([0,0,1,0,0,1,1,1])),p=new x(a,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:n}),q=k.fromValues(5633261.287538229,2626832.878767164,1434988.0495278358),r=k.fromValues(5633271.46742708,2626873.6381334523,1434963.231608387);b=new w.Program(a,
`

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${b?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor \x3d v_color;\n  }\n  ",new Map([["position",0]]));var d=new Float32Array(6);l.encodeDoubleArray(q,d,3);var e=new Float32Array(6);l.encodeDoubleArray(r,e,3);a.useProgram(b);b.setUniform3f("u_highA",d[0],d[2],d[4]);b.setUniform3f("u_lowA",d[1],d[3],d[5]);b.setUniform3f("u_highB",e[0],e[2],e[4]);b.setUniform3f("u_lowB",e[1],e[3],e[5]);d=b;e=a.getBoundFramebufferObject();const {x:A,y:B,width:C,height:D}=a.getViewport();
a.bindFramebuffer(c);a.setViewport(0,0,1,1);a.bindVAO(p);a.drawArrays(5,0,4);b=new Uint8Array(4);c.readPixels(0,0,1,1,6408,5121,b);d.dispose();p.dispose(!1);n.dispose();c.dispose();a.setViewport(A,B,C,D);a.bindFramebuffer(e);a=(q[2]-r[2])/25;c=y.unpackFloatRGBA(b);return Math.abs(a-c)}let E=function(){function a(b){this.context=b;this.svgAlwaysPremultipliesAlpha=!1;this._doublePrecisionRequiresObfuscation=null;z.testSVGPremultipliedAlpha(b).then(c=>this.svgAlwaysPremultipliesAlpha=!c)}t._createClass(a,
[{key:"doublePrecisionRequiresObfuscation",get:function(){if(h.isNone(this._doublePrecisionRequiresObfuscation)){const b=m(this.context,!1),c=m(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==b&&(0===c||5<b/c)}return this._doublePrecisionRequiresObfuscation}}]);return a}(),f=null;g.clearTestWebGLDriver=function(a){h.isSome(f)&&f.context===a&&(f=null)};g.testWebGLDriver=function(a){if(h.isNone(f)||f.context!==a)f=new E(a);return f};Object.defineProperty(g,"__esModule",{value:!0})});