/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as n}from"./aaBoundingRect.js";import{d as t}from"./extentUtils.js";import{a as e}from"../geometry/Extent.js";import{isPoint as s,isMultipoint as m,isExtent as i,isPolygon as x,isPolyline as a}from"../geometry/support/jsonUtils.js";import{c as r,g as o,o as f}from"./normalizeUtilsCommon.js";import{g as c}from"../geometry/SpatialReference.js";function u(n){if(!n)return null;if("mesh"===n.type)return n.toJSON();let u=null;const h=n.spatialReference,I=c(h);if(!I)return n.toJSON();const j=h.isWebMercator?102100:4326,M=r[j].maxX,S=r[j].minX,v=r[j].plus180Line,J=r[j].minus180Line;let N;const O=n.toJSON();if(s(O))N=l(O,M,S);else if(m(O))O.points=O.points.map((n=>l(n,M,S))),N=O;else if(i(O))N=function(n,t){if(!t)return n;const e=function(n,t){const e=[],{ymin:s,ymax:m}=n,i=n.xmax-n.xmin,x=n.xmin,a=n.xmax;let r;const[o,f]=t.valid;r=y(n.xmin,t);const c=r.x,u=r.frameId;r=y(n.xmax,t);const l=r.x,h=r.frameId,d=c===l&&i>0;if(i>2*f){const n={xmin:x<a?c:l,ymin:s,xmax:f,ymax:m},t={xmin:o,ymin:s,xmax:x<a?l:c,ymax:m},i={xmin:0,ymin:s,xmax:f,ymax:m},r={xmin:o,ymin:s,xmax:0,ymax:m},y=[],d=[];p(n,i)&&y.push(u),p(n,r)&&d.push(u),p(t,i)&&y.push(h),p(t,r)&&d.push(h);for(let n=u+1;n<h;n++)y.push(n),d.push(n);e.push({extent:n,frameIds:[u]},{extent:t,frameIds:[h]},{extent:i,frameIds:y},{extent:r,frameIds:d})}else c>l||d?e.push({extent:{xmin:c,ymin:s,xmax:f,ymax:m},frameIds:[u]},{extent:{xmin:o,ymin:s,xmax:l,ymax:m},frameIds:[h]}):e.push({extent:{xmin:c,ymin:s,xmax:l,ymax:m},frameIds:[u]});return e}(n,t).map((n=>n.extent));if(e.length<2)return e[0]||n;if(e.length>2)return n.xmin=t.valid[0],n.xmax=t.valid[1],n;return{rings:e.map((n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]))}}(O,I);else if(x(O)||a(O)){const n=g;t(n,O);const s={xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3]},m=f(s.xmin,S)*(2*M),i=0===m?O:function(n,t){const e=o(n);for(const n of e)for(const e of n)e[0]+=t;return n}(O,m);s.xmin+=m,s.xmax+=m,e(s,v)&&s.xmax!==M||e(s,J)&&s.xmin!==S?u=i:N=i}else N=n.toJSON();if(null!==u){return(new d).cut(u,M)}return N}function l(n,t,e){if(Array.isArray(n)){const s=n[0];if(s>t){const e=f(s,t);n[0]=s+e*(-2*t)}else if(s<e){const t=f(s,e);n[0]=s+t*(-2*e)}}else{const s=n.x;if(s>t){const e=f(s,t);n.x+=e*(-2*t)}else if(s<e){const t=f(s,e);n.x+=t*(-2*e)}}return n}function y(n,t){const[e,s]=t.valid,m=2*s;let i,x=0;return n>s?(i=Math.ceil(Math.abs(n-s)/m),n-=i*m,x=i):n<e&&(i=Math.ceil(Math.abs(n-e)/m),n+=i*m,x=-i),{x:n,frameId:x}}function p(n,t){const{xmin:e,ymin:s,xmax:m,ymax:i}=t;return h(n,e,s)&&h(n,e,i)&&h(n,m,i)&&h(n,m,s)}function h(n,t,e){return t>=n.xmin&&t<=n.xmax&&e>=n.ymin&&e<=n.ymax}class d{cut(n,t){let e;if(n.rings)this.closed=!0,e=n.rings,this.minPts=4;else{if(!n.paths)return null;this.closed=!1,e=n.paths,this.minPts=2}const s=e.length,m=-2*t;for(let n=0;n<s;n++){const t=e[n];if(t&&t.length>=this.minPts){const n=[];for(const e of t)n.push([e[0]+m,e[1]]);e.push(n)}}return this.closed?n.rings=e:n.paths=e,n}}const g=n();export{u as n};
