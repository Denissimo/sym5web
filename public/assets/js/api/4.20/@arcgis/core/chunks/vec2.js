/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n,t){return n[0]=t[0],n[1]=t[1],n}function t(n,t,r){return n[0]=t,n[1]=r,n}function r(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function u(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function s(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function o(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function a(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function c(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n}function i(n,t){const r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)}function e(n,t){const r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u}function f(n){const t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function h(n){const t=n[0],r=n[1];return t*t+r*r}function M(n,t){return n[0]=-t[0],n[1]=-t[1],n}function m(n,t){const r=t[0],u=t[1];let s=r*r+u*u;return s>0&&(s=1/Math.sqrt(s),n[0]=t[0]*s,n[1]=t[1]*s),n}function q(n,t){return n[0]*t[0]+n[1]*t[1]}function x(n,t,r){const u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n}function l(n,t,r,u){const s=t[0],o=t[1];return n[0]=s+u*(r[0]-s),n[1]=o+u*(r[1]-o),n}function p(n,t,r){const u=t[0],s=t[1];return n[0]=r[0]*u+r[2]*s,n[1]=r[1]*u+r[3]*s,n}function b(n,t,r){const u=t[0],s=t[1];return n[0]=r[0]*u+r[2]*s+r[4],n[1]=r[1]*u+r[3]*s+r[5],n}function d(n,t,r,u){const s=t[0]-r[0],o=t[1]-r[1],a=Math.sin(u),c=Math.cos(u);return n[0]=s*c-o*a+r[0],n[1]=s*a+o*c+r[1],n}function g(n,t){return n[0]===t[0]&&n[1]===t[1]}const j=u;export{u as a,e as b,n as c,i as d,a as e,j as f,r as g,m as h,x as i,q as j,l as k,f as l,p as m,M as n,g as o,c as p,h as q,d as r,t as s,b as t,s as u,o as v};
