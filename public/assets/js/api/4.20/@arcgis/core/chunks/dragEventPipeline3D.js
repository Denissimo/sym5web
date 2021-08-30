/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as e,j as r,l as n,s as t,M as s,d as o,f as a,g as l,a as c}from"./mathUtils.js";import{i,b as u,d}from"../core/lang.js";import{s as p,g as m,b as f}from"./screenUtils.js";import{projectPoint as S}from"../geometry/projection.js";import{k as E,r as g,c as j}from"./plane.js";import{c as y}from"./ray.js";import{n as x}from"./sphere.js";import{c as b}from"./vectorStacks.js";import{d as I,b as v}from"./elevationInfoUtils.js";import{a as w}from"./ray2.js";import{I as C}from"./Intersector.js";import{T as H}from"./verticalOffsetUtils.js";import{E as T}from"./InteractiveToolBase.js";function U(e,r){return M(e,(()=>r))}function h(e){return M(e,(e=>e.plane))}function M(r,n){const t=e(),s=e();let o=!1;return e=>{const a=n(e);if("start"===e.action){const n=p(e.screenStart,m(b.get())),s=w(r.state.camera,n,O);i(s)&&(o=E(a,s,t))}if(!o)return null;const l=p(e.screenEnd,m(b.get())),c=w(r.state.camera,l,O);return u(c)?null:E(a,c,s)?{...e,renderStart:t,renderEnd:s,plane:a,ray:c}:null}}function R(e,r,n,t=null,s=null){return function(e,r,n,t=null,s=null){let o=null;return a=>{if("start"===a.action&&(o=e.sceneIntersectionHelper.intersectElevationFromScreen(f(a.screenStart.x,a.screenStart.y),r,n,s),i(o)&&i(t)&&!S(o,o,t)))return null;if(u(o))return null;const l=e.sceneIntersectionHelper.intersectElevationFromScreen(f(a.screenEnd.x,a.screenEnd.y),r,n,s);return i(l)?i(t)&&!S(l,l,t)?null:{...a,mapStart:o,mapEnd:l}:null}}(e,n,v(r,e,n),t,s)}function k(e,r,n,t=null,s=null){return R(e,n,I(r),t,s)}function P(e,r,n,t){const s=r.toMap(e.screenStart,{include:[n]});return i(s)?k(r,n,s,t):null}function F(i,u,d){let p=null;const m=new T;return m.next(U(i,function(e,r){const n=B,s=G,o=j();e.renderCoordsHelper.worldUpAtPosition(r,n);const a=c(o,n,t(s,r,e.state.camera.eye));return c(a,a,n),g(r,a,o)}(i,u))).next(function(c,i){const u=e(),d=n(i);c.renderCoordsHelper.worldUpAtPosition(i,u);const p=e(),m=e(),f=e=>{if(t(e,e,i),x(u,e,e),"global"===c.viewingMode){n(e)*s(o(u,e))<.001-d&&t(e,a(e,u,.001),i)}return l(e,e,i),e};return e=>(e.renderStart=f(r(p,e.renderStart)),e.renderEnd=f(r(m,e.renderEnd)),e)}(i,u)).next(A(i,d)).next((e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,p=e})),e=>(p=null,m.execute(e),p)}function A(e,r){const n=e.renderCoordsHelper;return e=>{const t=n.fromRenderCoords(e.renderStart,r),s=n.fromRenderCoords(e.renderEnd,r);return i(t)&&i(s)?{...e,mapStart:t,mapEnd:s}:null}}function D(e){let r=null;return n=>{switch(n.action){case"start":r=e.disableDisplay();break;case"end":case"cancel":i(r)&&(r.remove(),r=null)}return n}}function q(r,n=null){const t=new C(r.state.viewingMode);t.options.selectionMode=!0,t.options.store=0,t.options.hud=!1;const s=f(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},a=e(),l=d(n,r.spatialReference),c=e=>{r.map.ground&&r.map.ground.opacity<1?o.exclude.add(H):o.exclude.delete(H),r.sceneIntersectionHelper.intersectIntersectorScreen(p(e,s),t,o);const n=t.results.min;let c;if(n.getIntersectionPoint(a))c="TerrainRenderer"===n.intersector?0:1;else{if(!t.results.ground.getIntersectionPoint(a))return null;c=0}return{location:r.renderCoordsHelper.fromRenderCoords(a,l),surfaceType:c}};let m;return e=>{if("start"===e.action){const r=c(e.screenStart);m=i(r)?r.location:null}if(u(m))return null;const r=c(e.screenEnd);return i(r)&&i(r.location)?{...e,mapStart:m,mapEnd:r.location,surfaceType:r.surfaceType}:null}}const B=e(),G=e(),O=y();export{U as a,R as b,F as c,P as d,h as e,A as f,k as g,D as h,q as s};