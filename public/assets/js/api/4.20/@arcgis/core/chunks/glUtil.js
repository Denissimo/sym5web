/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,u=function(t){const o=e[t];if(o)return o;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),f=i.offset,l=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:s,type:u,offset:f,normalized:l,divisor:o}}))}const e={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};export{t as g};
