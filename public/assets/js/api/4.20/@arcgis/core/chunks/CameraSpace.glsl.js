/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{g as o}from"./VertexColor.glsl.js";function r(r){r.fragment.uniforms.add("projInfo","vec4"),r.fragment.uniforms.add("zScale","vec2"),r.fragment.code.add(o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}export{r as C};
