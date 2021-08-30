/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{e as t,f as n,g as r,v as e,b as s}from"./mathUtils.js";import{b as i}from"./triangle.js";let a=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const o=new Uint16Array([0]),f=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return o;if(t<f.length)return new Uint16Array(f.buffer,0,t);if(t>a.length){const n=Math.max(2*a.length,t);a=new Uint32Array(n);for(let t=0;t<a.length;t++)a[t]=t}return new Uint32Array(a.buffer,0,t)}function c(t){if(1===t)return new Uint16Array(o);if(t<f.length)return new Uint16Array(f.slice(0,t));if(t>a.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(a.slice(0,t))}function u(e,s,a){if(!e)return!1;const{size:o,data:f}=e;t(a,0,0,0),t(A,0,0,0);let l=0,c=0;for(let e=0;e<s.length-2;e+=3){const u=s[e+0]*o,g=s[e+1]*o,h=s[e+2]*o;t(U,f[u+0],f[u+1],f[u+2]),t(w,f[g+0],f[g+1],f[g+2]),t(y,f[h+0],f[h+1],f[h+2]);const m=i(U,w,y);m?(r(U,U,w),r(U,U,y),n(U,U,1/3*m),r(a,a,U),l+=m):(r(A,A,U),r(A,A,w),r(A,A,y),c+=3)}return(0!==c||0!==l)&&(0!==l?(n(a,a,1/l),!0):0!==c&&(n(a,A,1/c),!0))}function g(r,e,s){if(!r||!e)return!1;const{size:i,data:a}=r;t(s,0,0,0);let o=-1,f=0;for(let t=0;t<e.length;t++){const n=e[t]*i;o!==n&&(s[0]+=a[n+0],s[1]+=a[n+1],s[2]+=a[n+2],f++),o=n}return f>1&&n(s,s,1/f),f>0}function h(s,i,a,o){if(!s)return!1;const{size:f,data:l}=s;t(o,0,0,0),t(A,0,0,0);let c=0,u=0;const g=i?i.length-1:l.length/f-1,h=g+(a?2:0);for(let t=0;t<h;t+=2){const s=t<g?t:g,a=t<g?t+1:0,h=(i?i[s]:s)*f,y=(i?i[a]:a)*f;U[0]=l[h+0],U[1]=l[h+1],U[2]=l[h+2],w[0]=l[y+0],w[1]=l[y+1],w[2]=l[y+2],n(U,r(U,U,w),.5);const m=e(U,w);m>0?(r(o,o,n(U,U,m)),c+=m):(r(A,A,U),u++)}return 0!==c?(n(o,o,1/c),!0):0!==u&&(n(o,A,1/u),!0)}const U=s(),w=s(),y=s(),A=s();export{u as a,g as b,h as c,c as d,l as g};