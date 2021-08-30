// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../Utils"],function(h,k){let g=function(){function b(a,c){this.data=a;this.stride=c}b.decode=function(a){const c=k.allocateTypedArrayBufferwithData(a.data,a.stride);return new b(c,a.stride)};b.fromVertexVector=function(a){const c=k.allocateTypedArrayBufferwithData(a.data.buffer(),a.stride);return new b(c,a.stride)};return b}(),l=function(){function b(a,c,d){this.geometryType=a;this.indexBuffer=new Uint32Array(c);this.namedBuffers=d}b.decode=function(a){const c=a.geometryType,d=
a.indexBuffer,e={};for(const f in a.namedBuffers)e[f]=g.decode(a.namedBuffers[f]);return new b(c,d,e)};b.fromVertexData=function(a,c){const d=a.indices,e=k.allocateTypedArrayBufferwithData(a.vertices,a.stride);a={geometry:new g(e,a.stride)};return new b(c,d,a)};b.fromVertexVectors=function(a){const c=a.geometryType,d=a.indexVector.buffer(),e={};for(const f in a.namedVectors)e[f]=g.fromVertexVector(a.namedVectors[f]);return new b(c,d,e)};return b}();h.VertexBuffers=l;h.default=g;Object.defineProperty(h,
"__esModule",{value:!0})});