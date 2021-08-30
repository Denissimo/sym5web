/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{L as e}from"./Logger.js";import"./mathUtils.js";import{a as r,V as s}from"./enums.js";import{O as n}from"./ArrayPool.js";import"./Texture.js";class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,r,s,n,o,i,a,c){this.color=t,this.haloColor=e,this.haloSize=r,this.size=s,this.angle=n,this.offsetX=o,this.offsetY=i,this.hAnchor=a,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new n(o);const i=e.getLogger("esri.views.2d.engine.webgl.Utils"),a=[{name:"geometry",strideInBytes:36,divisor:0}],c=[{name:"geometry",strideInBytes:12,divisor:0}],u=[{name:"geometry",strideInBytes:40,divisor:0}],h=[{name:"geometry",strideInBytes:36,divisor:0}],l=[{name:"geometry",strideInBytes:36,divisor:0}];function f(t){const e={};for(const r of t)e[r.name]=r.strideInBytes;return e}const d=f([{name:"geometry",strideInBytes:36,divisor:0}]),m=f(a),y=f(c),g=f(u),w=f(h),p=f(l);function v(t,e){switch(t){case r.MARKER:return d;case r.FILL:return e?y:m;case r.LINE:return g;case r.TEXT:return w;case r.LABEL:return p}}const A=["geometry"],L=["geometry"],I=["geometry"],E=["geometry"],C=["geometry"];function b(t){switch(t){case r.MARKER:return A;case r.FILL:return L;case r.LINE:return I;case r.TEXT:return E;case r.LABEL:return C}}function B(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function T(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function U(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function z(t){return null!=t}function R(t){return"number"==typeof t}function j(e){switch(e){case"butt":return 0;case"round":return 1;case"square":return 2;default:return i.error(new t("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),1}}function x(e){switch(e){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return i.error(new t("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),1}}function F(t){switch(t){case"opacity":return s.OPACITY;case"color":return s.COLOR;case"rotation":return s.ROTATION;case"size":return s.SIZE;default:return i.error(`Cannot interpret unknown vv: ${t}`),null}}function M(t,e,r,s,n,o,i){for(const e in o){const s=o[e].stride,i=B(s),a=o[e].data,c=r[e].data,u=s*n.vertexCount/i,h=s*t/i,l=s*n.vertexFrom/i;for(let t=0;t<u;++t)c[t+h]=a[t+l]}const a=n.indexCount;for(let r=0;r<a;++r)s[r+e]=i[r+n.indexFrom]-n.vertexFrom+t}const O={geometry:35044};function X(t,e){const r=[];for(let s=0;s<5;++s){const n=b(s),o={};for(const t of n)o[t]={data:e(s,t)};r.push({data:t(s),buffers:o})}return r}function $(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function N(e){switch(e){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void i.error(new t("webgl-utils",`Unable to handle type ${e}`))}}function S(e){switch(e){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void i.error(new t("webgl-utils",`Unable to handle type ${e}`))}}const Y=new Map,K=(t,e)=>{if(!Y.has(t)){const r=function(t){const e={};for(const r in t){const s=t[r];let n=0;e[r]=s.map((t=>{const e={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:n,stride:0};return n+=t.count*$(t.type),e})),e[r].forEach((t=>t.stride=n))}return e}(e),s={strides:(t=>{const e={};for(const r in t){const s=t[r];e[r]=s.length?s[0].stride:0}return e})(r),bufferLayouts:r,attributes:(t=>{const e=new Map;for(const r in t)for(const s of t[r])e.set(s.name,s.location);return e})(e)};Y.set(t,s)}return Y.get(t)};function k(t){t(r.FILL),t(r.LINE),t(r.MARKER),t(r.TEXT),t(r.LABEL)}export{O as C,X as a,T as b,K as c,M as d,U as e,v as f,S as g,k as h,R as i,j,x as k,F as l,N as m,z as n,B as s};