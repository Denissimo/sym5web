/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as r}from"../core/lang.js";import{e}from"./screenUtils.js";import{c as n}from"./vec2.js";import{s as o,j as t,e as s}from"./mathUtils.js";import{c}from"./ray.js";import{b as i}from"./vectorStacks.js";function a(r,n,o=c()){return m(r,r.screenToRender(n,e(i.get())),o)}function m(t,s,a=c()){const m=e(n(i.get(),s));if(m[2]=0,!t.unprojectFromRenderScreen(m,a.origin))return null;const u=e(n(i.get(),s));u[2]=1;const f=t.unprojectFromRenderScreen(u,i.get());return r(f)?null:(o(a.direction,f,a.origin),a)}function u(r,n,o=c()){return f(r,r.screenToRender(n,e(i.get())),o)}function f(e,n,a=c()){t(a.origin,e.eye);const m=s(i.get(),n[0],n[1],1),u=e.unprojectFromRenderScreen(m,i.get());return r(u)?null:(o(a.direction,u,a.origin),a)}export{a,f as b,m as c,u as f};
