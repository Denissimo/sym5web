/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{O as r,s as t,a as n}from"./vectorStacks.js";import{m as a,c as s}from"./mat4.js";import{g as o,f as c,l as e,e as f,b as u}from"./mathUtils.js";import{t as i}from"./vec4.js";import{f as m}from"./vec4f64.js";import{c as l,a as p,f as g}from"./ray.js";import{c as y,a as j,f as b,i as v,b as A,d,s as h,e as U}from"./plane.js";function k(r){return r?{ray:l(r.ray),c0:r.c0,c1:r.c1}:{ray:l(),c0:0,c1:Number.MAX_VALUE}}function w(r,t=k()){return p(r,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function E(r,t){return M(r,r.c0,t)}function L(r,t){return M(r,r.c1,t)}function M(r,t,n){return o(n,r.ray.origin,c(n,r.ray.direction,t))}function N(r){return r?[y(r[0]),y(r[1]),y(r[2]),y(r[3]),y(r[4]),y(r[5])]:[y(),y(),y(),y(),y(),y()]}function V(){return[u(),u(),u(),u(),u(),u(),u(),u()]}function X(r,t=N()){for(let n=0;n<6;n++)j(r[n],t[n])}function _(r,o,c,e=I){const u=a(t.get(),o,r);s(u,u);for(let r=0;r<8;++r){const t=i(n.get(),G[r],u);f(e[r],t[0]/t[3],t[1]/t[3],t[2]/t[3])}x(c,e)}function x(r,t){b(t[4],t[0],t[3],r[0]),b(t[1],t[5],t[6],r[1]),b(t[4],t[5],t[1],r[2]),b(t[3],t[2],t[6],r[3]),b(t[0],t[1],t[2],r[4]),b(t[5],t[4],t[7],r[5])}function O(r,t){for(let n=0;n<6;n++)if(v(r[n],t))return!1;return!0}function S(r,t){return D(r,w(t,H.get()))}function q(r,t){for(let n=0;n<6;n++){const a=r[n];if(!d(a,t))return!1}return!0}function z(r,t,n){return D(r,function(r,t,n=k()){const a=e(r.vector);return g(r.origin,t,n.ray),n.c0=0,n.c1=a,n}(t,n,H.get()))}function B(r,t){for(let n=0;n<6;n++){if(h(r[n],t)>0)return!1}return!0}function C(r,t){for(let n=0;n<6;n++)if(A(r[n],t))return!1;return!0}function D(r,t){for(let n=0;n<6;n++)if(!U(r[n],t))return!1;return!0}new r((()=>({c0:0,c1:0,ray:null})));const F={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},G=[m(-1,-1,-1,1),m(1,-1,-1,1),m(1,1,-1,1),m(-1,1,-1,1),m(-1,-1,1,1),m(1,-1,1,1),m(1,1,1,1),m(-1,1,1,1)],H=new r(k),I=V();export{V as a,x as b,N as c,O as d,S as e,_ as f,z as g,C as h,B as i,X as j,k,w as l,q as m,E as n,L as o,F as p};
