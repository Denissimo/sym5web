// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../webgl/capabilities"],function(d,a,e){const f={checkMajorWebPerformanceCaveat:!0};d.check=function(c){c={...f,...c};const b=e();return b.available?c.checkMajorWebPerformanceCaveat&&b.majorPerformanceCaveat?new a("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist."):b.supportsHighPrecisionFragment?b.supportsVertexShaderSamplers?
b.supportsElementIndexUint?b.supportsStandardDerivatives?b.supportsInstancedArrays?null:new a("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported."):new a("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported."):new a("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported."):new a("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):
new a("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new a("webgl:required","WebGL is required but not supported.")};Object.defineProperty(d,"__esModule",{value:!0})});