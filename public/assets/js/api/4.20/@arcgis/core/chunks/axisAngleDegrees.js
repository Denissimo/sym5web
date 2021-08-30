/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{r,j as t,k as n}from"./mathUtils.js";import{g as s,s as a,m as o}from"./quat.js";import{d as u}from"./quatf64.js";function f(r=p){return[r[0],r[1],r[2],r[3]]}function i(r,n,s=f()){return t(s,r),s[3]=n,s}function c(t,n,u=f()){return a(d,t,j(t)),a(q,n,j(n)),o(d,q,d),i=u,c=r(s(u,d)),i[3]=c,i;var i,c}function e(r){return r}function m(r){return r[3]}function j(r){return n(r[3])}const p=[0,0,1,0],d=u(),q=u();f();export{c as a,e as b,f as c,j as d,m as e,i as f};
