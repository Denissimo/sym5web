/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{initializeProjection as s,projectMany as n}from"../geometry/projection.js";import{j as t}from"./json.js";import{j as e,e as i,i as r}from"../geometry/SpatialReference.js";import{lngLatToXY as o,xyToLngLat as a,canProject as m}from"../geometry/support/webMercatorUtils.js";const h=[0,0];function u(s,n){if(!n)return null;if("x"in n){const t={x:0,y:0};return[t.x,t.y]=s(n.x,n.y,h),null!=n.z&&(t.z=n.z),null!=n.m&&(t.m=n.m),t}if("xmin"in n){const t={xmin:0,ymin:0,xmax:0,ymax:0};return[t.xmin,t.ymin]=s(n.xmin,n.ymin,h),[t.xmax,t.ymax]=s(n.xmax,n.ymax,h),n.hasZ&&(t.zmin=n.zmin,t.zmax=n.zmax,t.hasZ=!0),n.hasM&&(t.mmin=n.mmin,t.mmax=n.mmax,t.hasM=!0),t}return"rings"in n?{rings:c(n.rings,s),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:c(n.paths,s),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:l(n.points,s),hasM:n.hasM,hasZ:n.hasZ}:void 0}function c(s,n){const t=[];for(const e of s)t.push(l(e,n));return t}function l(s,n){const t=[];for(const e of s){const s=n(e[0],e[1],[0,0]);t.push(s),e.length>2&&s.push(e[2]),e.length>3&&s.push(e[3])}return t}async function p(n,t){if(!t)return;const e=Array.isArray(n)?n.map((s=>{var n;return null==(n=s.geometry)?void 0:n.spatialReference})):[n];await s(e.map((s=>({source:s,dest:t}))))}const f=u.bind(null,o),x=u.bind(null,a);function y(s,o,a){return s?(a||(a=o,o=s.spatialReference),e(o)&&e(a)&&!i(o,a)?m(o,a)?r(a)?f(s):x(s):n(t,[s],o,a,null)[0]:s):s}const _=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,n,t){if(!s||!s.length||!n||!t||i(n,t))return s;const e={geometries:s,inSpatialReference:n,outSpatialReference:t,resolve:null};return this._jobs.push(e),new Promise((s=>{e.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:e,inSpatialReference:i,outSpatialReference:o,resolve:a}=s;m(i,o)?r(o)?a(e.map(f)):a(e.map(x)):a(n(t,e,i,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(s,n,t){return _.push(s,n,t)}export{g as a,p as c,y as p};