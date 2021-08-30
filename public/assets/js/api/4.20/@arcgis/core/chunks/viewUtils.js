/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{b as r,d as n}from"./screenUtils.js";import{e as o,g as t,f as s,b as a}from"./mathUtils.js";import{d as c,a as f,h as i}from"./vec2.js";function p(r,n){return{...r,...e(n)}}function l(e,r,n,o){for(;e.length<r;)e.push(n());if(o)for(;e.length>r;){o(e.pop())}else e.length=r}function m(e,r){if(o(r,0,0,0),e.length>0){for(let n=0;n<e.length;++n)t(r,r,e[n]);s(r,r,1/e.length)}}function d(e,r,n,o){o.projectToRenderScreen(e,R),o.projectToRenderScreen(r,T),f(n,b,S),i(n,n)}function h(e,r,n){const o=n.state.camera;n.renderCoordsHelper.toRenderCoords(e,g),o.projectToRenderScreen(g,j),n.state.camera.renderToScreen(j,r)}function u(e,r,n){return h(e,C,n),h(r,U,n),c(C,U)}const g=a(),j=n(),R=n(),S=R,T=n(),b=T,C=r(),U=r();export{p as c,m,u as p,l as r,d as s};
