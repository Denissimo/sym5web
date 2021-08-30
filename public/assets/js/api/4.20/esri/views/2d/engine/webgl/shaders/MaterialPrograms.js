// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/programUtils"],function(h,k,m){const l=c=>{const d={};for(const f in c){{let a=void 0;var b=f;a=""+b[0].toUpperCase();for(let e=1;e<b.length;e++){const g=b[e];g===g.toUpperCase()?(a+="_",a+=g):a+=g.toUpperCase()}b=a}d[b]=c[f]}return m.glslifyDefineMap(d)};h.createProgramTemplate=(c,d,b)=>{const f=c+c.substring(c.lastIndexOf("/")),a=d+d.substring(d.lastIndexOf("/"));return{attributes:b,shaders:e=>({vertexShader:l(e)+k.resolveIncludes(`${f}.vert`),
fragmentShader:l(e)+k.resolveIncludes(`${a}.frag`)})}};Object.defineProperty(h,"__esModule",{value:!0})});