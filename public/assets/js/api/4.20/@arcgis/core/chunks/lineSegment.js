/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{u as t,b as r,d as n,j as o,s as i,f as e,o as c,g as s,c as a,A as g}from"./mathUtils.js";import{O as u,b as f}from"./vectorStacks.js";function v(n){return n?{origin:t(n.origin),vector:t(n.vector)}:{origin:r(),vector:r()}}function b(t,r=v()){return p(t.origin,t.vector,r)}function p(t,r,n=v()){return o(n.origin,t),o(n.vector,r),n}function h(t,r,n=v()){return o(n.origin,t),i(n.vector,r,t),n}function l(t,r){const o=i(f.get(),r,t.origin),c=n(t.vector,o),s=n(t.vector,t.vector),g=a(c/s,0,1),u=i(f.get(),e(f.get(),t.vector,g),o);return n(u,u)}function A(t,r,n){return s(n,t.origin,e(n,t.vector,r))}function M(t,r,o,c,u){const{vector:v,origin:b}=t,p=i(f.get(),r,b),h=n(v,p)/g(v);return e(u,v,a(h,o,c)),s(u,u,t.origin)}function d(t,r){if(B(t,function(t,r){const n=k.get();return n.origin=t,n.vector=r,n}(r.origin,r.direction),!1,j)){const{tA:r,pB:n,distance2:o}=j;if(r>=0&&r<=1)return o;if(r<0)return c(t.origin,n);if(r>1)return c(s(f.get(),t.origin,t.vector),n)}return null}function m(t,r,n){return!!B(t,r,!0,j)&&(o(n,j.pA),!0)}function B(t,r,n,o){const i=1e-6,e=t.origin,g=s(f.get(),e,t.vector),u=r.origin,v=s(f.get(),u,r.vector),b=f.get(),p=f.get();if(b[0]=e[0]-u[0],b[1]=e[1]-u[1],b[2]=e[2]-u[2],p[0]=v[0]-u[0],p[1]=v[1]-u[1],p[2]=v[2]-u[2],Math.abs(p[0])<i&&Math.abs(p[1])<i&&Math.abs(p[2])<i)return!1;const h=f.get();if(h[0]=g[0]-e[0],h[1]=g[1]-e[1],h[2]=g[2]-e[2],Math.abs(h[0])<i&&Math.abs(h[1])<i&&Math.abs(h[2])<i)return!1;const l=b[0]*p[0]+b[1]*p[1]+b[2]*p[2],A=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],M=b[0]*h[0]+b[1]*h[1]+b[2]*h[2],d=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],m=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*d-A*A;if(Math.abs(m)<i)return!1;let B=(l*A-M*d)/m,j=(l+A*B)/d;n&&(B=a(B,0,1),j=a(j,0,1));const k=f.get(),w=f.get();return k[0]=e[0]+B*h[0],k[1]=e[1]+B*h[1],k[2]=e[2]+B*h[2],w[0]=u[0]+j*p[0],w[1]=u[1]+j*p[1],w[2]=u[2]+j*p[2],o.tA=B,o.tB=j,o.pA=k,o.pB=w,o.distance2=c(k,w),!0}const j={tA:0,tB:0,pA:r(),pB:r(),distance2:0},k=new u((()=>({origin:null,vector:null})));export{m as a,A as b,v as c,l as d,b as e,h as f,p as g,d as h,M as p};
