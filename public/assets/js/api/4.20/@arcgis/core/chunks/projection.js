/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{L as r}from"./Logger.js";import{b as e}from"../core/lang.js";import{f as o,t,a,i as n}from"./mat3.js";import{c as f}from"./quatf64.js";import{c as s}from"./mat4f64.js";import{x as m,n as y,b as i}from"./mathUtils.js";import{projectBuffer as c,computeLinearTransformation as p}from"../geometry/projection.js";import{c as u}from"./projectionEllipsoid.js";import{k as T,f as l,h as A}from"../geometry/SpatialReference.js";import{y2lat as d}from"../geometry/support/webMercatorUtils.js";import{a as g,B as E}from"./BufferView.js";import{t as j,a as P,n as h}from"./vec3.js";const C=r.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,a){return N(t)?(R(0,g.fromTypedArray(r),E.fromTypedArray(e),E.fromTypedArray(o),t,g.fromTypedArray(a)),a):(C.error("Cannot convert spatial reference to PCPF"),a)}function _(r,e,o,t,a){return N(t)?(R(1,g.fromTypedArray(r),E.fromTypedArray(e),E.fromTypedArray(o),t,g.fromTypedArray(a)),a):(C.error("Cannot convert to spatial reference from PCPF"),a)}function L(r,e,o){return c(r,e,0,o,u(e),0,r.length/3),o}function M(r,e,o){return c(r,u(o),0,e,o,0,r.length/3),e}function V(r,o,t){if(e(r))return o;const a=E.fromTypedArray(r),n=E.fromTypedArray(o);return j(n,a,t),o}function B(r,o,t){if(e(r))return o;a(W,t);const f=g.fromTypedArray(r),s=g.fromTypedArray(o);return P(s,f,W),n(W)||h(s,s),o}function S(r,o,t){if(e(r))return o;a(W,t);const f=g.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),s=g.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);if(P(s,f,W),n(W)||h(s,s),r!==o)for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}function b(r,e,o,t,a){if(!N(t))return C.error("Cannot convert spatial reference to PCPF"),a;R(0,g.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),E.fromTypedArray(e),E.fromTypedArray(o),t,g.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function v(r,e,o,t,a){if(!N(t))return C.error("Cannot convert to spatial reference from PCPF"),a;R(1,g.fromTypedArray(r,16),E.fromTypedArray(e),E.fromTypedArray(o),t,g.fromTypedArray(a,16));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function R(r,e,a,n,f,s){if(!e)return;const i=a.count,c=u(f);if(Y(f))for(let a=0;a<i;a++)n.getVec(a,U),e.getVec(a,w),p(c,U,x,c),o(W,x),1===r&&t(W,W),m(w,w,W),s.setVec(a,w);else for(let f=0;f<i;f++){n.getVec(f,U),e.getVec(f,w),p(c,U,x,c),o(W,x);const i=d(a.get(f,1));let u=Math.cos(i);0===r&&(u=1/u),W[0]*=u,W[1]*=u,W[2]*=u,W[3]*=u,W[4]*=u,W[5]*=u,1===r&&t(W,W),m(w,w,W),y(w,w),s.setVec(f,w)}return s}function N(r){return Y(r)||function(r){return r.isWebMercator}(r)}function Y(r){return r.isWGS84||T(r)||l(r)||A(r)}const U=i(),w=i(),x=s(),W=f();export{F as a,b,M as c,_ as d,v as e,B as f,S as g,L as p,V as t};