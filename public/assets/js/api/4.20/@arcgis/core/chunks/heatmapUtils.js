/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{g as t}from"../core/lang.js";import{c as e}from"./mathUtils.js";const n=(()=>{if(!("document"in t))return()=>null;const e=document.createElement("canvas"),n=e.getContext("2d");return e.height=512,e.width=1,t=>{n.clearRect(0,0,1,e.height);const r=n.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:n}of t.colorStops)r.addColorStop(Math.max(e,.001),`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`);return n.fillStyle=r,n.fillRect(0,0,1,e.height),n.getImageData(0,0,1,e.height).data}})();function r(t,e,n,r){const{blurRadius:a,fieldOffset:i,field:c}=e,f=new Float64Array(n*r),u=o(a),s=Math.round(3*a);let h,l=Number.NEGATIVE_INFINITY;const d=function(t,e){if(null!=t)return"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e;return t=>1}(c,i),g=new Set;for(const e of t){const t=e.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const a=t.readLegacyPointGeometry(),o=128;if(a.x<-o||a.x>=n+o||a.y<-o||a.y>r+o)continue;const i=+d(t),c=Math.round(a.x)-s,m=Math.round(a.y)-s,y=Math.max(0,c),M=Math.max(0,m),b=Math.min(r,Math.round(a.y)+s),x=Math.min(n,Math.round(a.x)+s);for(let t=M;t<b;t++){const e=u[t-m];for(let r=y;r<x;r++){const a=u[r-c];h=f[t*n+r]+=e*a*i,h>l&&(l=h)}}}}return{matrix:f.buffer,max:l}}function a(t,n,r,a,o,i){t.canvas.width=t.canvas.height=n,t.clearRect(0,0,n,n);const c=t.getImageData(0,0,n,n);r&&a&&c.data.set(new Uint8ClampedArray(function(t,n,r,a,o){const i=new Uint32Array(t*t),c="buffer"in n?n:new Float64Array(n),f="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=f.length/(o-a);for(let t=0;t<c.length;t++){const n=c[t],r=Math.floor((n-a)*u);i[t]=f[e(r,0,f.length-1)]}return i.buffer}(n,r,a,o,i))),t.putImageData(c,0,0)}function o(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let a=0;a<=r.length;a++)r[a]=Math.exp(-((a-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function i(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}export{i as a,r as b,o as c,a as d,n as g};
