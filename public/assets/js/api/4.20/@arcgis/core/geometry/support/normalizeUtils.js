/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import t from"../../config.js";import e from"../../core/Error.js";import{L as s}from"../../chunks/Logger.js";import{b as n,i as r}from"../../core/lang.js";import o from"../Polygon.js";import i from"../Polyline.js";import{g as c,c as p,o as l,u}from"../../chunks/normalizeUtilsCommon.js";import{g as f}from"../SpatialReference.js";import{geographicToWebMercator as a,webMercatorToGeographic as m}from"./webMercatorUtils.js";import"../../geometry.js";import h from"../../request.js";import{urlToObject as g}from"../../core/urlUtils.js";import{fromJSON as y,getJsonType as j,getGeometryType as x}from"./jsonUtils.js";import"../../chunks/object.js";import"../../chunks/Message.js";import"../../chunks/string.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/writer.js";import"../Extent.js";import"../Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Ellipsoid.js";import"../../chunks/extentUtils.js";import"../../chunks/zmUtils.js";import"../Multipoint.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../kernel.js";async function d(t,e,s){const n="string"==typeof t?g(t):t,r=e[0].spatialReference,o=j(e[0]),i={...s,query:{...n.query,f:"json",sr:r.wkid?r.wkid:JSON.stringify(r),geometries:JSON.stringify(k(e))}};return function(t,e,s){const n=x(e);return t.map((t=>{const e=n.fromJSON(t);return e.spatialReference=s,e}))}((await h(n.path+"/simplify",i)).data,o,r)}function k(t){return{geometryType:j(t[0]),geometries:t.map((t=>t.toJSON()))}}const w=s.getLogger("esri.geometry.support.normalizeUtils");function S(t){return"polyline"===t[0].type}function R(t){const e=[];let s=0,n=0;for(let r=0;r<t.length;r++){const o=t[r];let i=null;for(let t=0;t<o.length;t++)i=o[t],e.push(i),0===t?(s=i[0],n=s):(s=Math.min(s,i[0]),n=Math.max(n,i[0]));i&&e.push([(s+n)/2,0])}return e}function U(t,s){if(!(t instanceof i||t instanceof o)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw w.error(t),new e(t)}const n=c(t),r=[];for(const t of n){const e=[];r.push(e),e.push([t[0][0],t[0][1]]);for(let n=0;n<t.length-1;n++){const r=t[n][0],o=t[n][1],i=t[n+1][0],c=t[n+1][1],p=Math.sqrt((i-r)*(i-r)+(c-o)*(c-o)),l=(c-o)/p,u=(i-r)/p,f=p/s;if(f>1){for(let t=1;t<=f-1;t++){const n=t*s,i=u*n+r,c=l*n+o;e.push([i,c])}const t=(p+Math.floor(f-1)*s)/2,n=u*t+r,i=l*t+o;e.push([n,i])}e.push([i,c])}}return function(t){return"polygon"===t.type}(t)?new o({rings:r,spatialReference:t.spatialReference}):new i({paths:r,spatialReference:t.spatialReference})}function M(t,e,s){if(e){const e=U(t,1e6);t=m(e,!0)}return s&&(t=u(t,s)),t}function b(t,e,s){if(Array.isArray(t)){const n=t[0];if(n>e){const s=l(n,e);t[0]=n+s*(-2*e)}else if(n<s){const e=l(n,s);t[0]=n+e*(-2*s)}}else{const n=t.x;if(n>e){const s=l(n,e);t=t.clone().offset(s*(-2*e),0)}else if(n<s){const e=l(n,s);t=t.clone().offset(e*(-2*s),0)}}return t}async function N(e,s,m){if(!Array.isArray(e))return N([e],s);const x=s?s.url:t.geometryServiceUrl;let k,w,R,U,P,J,O,q,A=0;const L=[],v=[];for(const t of e)if(n(t))v.push(t);else if(k||(k=t.spatialReference,w=f(k),R=k.isWebMercator,J=R?102100:4326,U=p[J].maxX,P=p[J].minX,O=p[J].plus180Line,q=p[J].minus180Line),w)if("mesh"===t.type)v.push(t);else if("point"===t.type)v.push(b(t.clone(),U,P));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,U,P))),v.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,w);v.push(e.rings?new o(e):e)}else if(t.extent){const e=t.extent,s=l(e.xmin,P)*(2*U);let n=0===s?t.clone():u(t.clone(),s);e.offset(s,0),e.intersects(O)&&e.xmax!==U?(A=e.xmax>A?e.xmax:A,n=M(n,R),L.push(n),v.push("cut")):e.intersects(q)&&e.xmin!==P?(A=e.xmax*(2*U)>A?e.xmax*(2*U):A,n=M(n,R,360),L.push(n),v.push("cut")):v.push(n)}else v.push(t.clone());else v.push(t);let z=l(A,U),I=-90;const E=z,T=new i;for(;z>0;){const t=360*z-180;T.addPath([[t,I],[t,-1*I]]),I*=-1,z--}if(L.length>0&&E>0){const t=function(t,e){let s=-1;for(let n=0;n<e.cutIndexes.length;n++){const r=e.cutIndexes[n],o=e.geometries[n],i=c(o);for(let t=0;t<i.length;t++){const e=i[t];e.some((s=>{if(s[0]<180)return!0;{let s=0;for(let t=0;t<e.length;t++){const n=e[t][0];s=n>s?n:s}s=Number(s.toFixed(9));const n=-360*l(s,180);for(let s=0;s<e.length;s++){const e=o.getPoint(t,s);o.setPoint(t,s,e.clone().offset(n,0))}return!0}}))}if(r===s){if("polygon"===t[0].type)for(const e of c(o))t[r]=t[r].addRing(e);else if(S(t))for(const e of c(o))t[r]=t[r].addPath(e)}else s=r,t[r]=o}return t}(L,await async function(t,e,s,n){const r="string"==typeof t?g(t):t,o=e[0].spatialReference,i={...n,query:{...r.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:j(e[0]),geometries:e}),cutter:JSON.stringify(s)}},c=await h(r.path+"/cut",i),{cutIndexes:p,geometries:l=[]}=c.data;return{cutIndexes:p,geometries:l.map((t=>{const e=y(t);return e.spatialReference=o,e}))}}(x,L,T,m)),s=[],n=[];for(let o=0;o<v.length;o++){const i=v[o];if("cut"!==i)n.push(i);else{const i=t.shift(),c=e[o];r(c)&&"polygon"===c.type&&c.rings&&c.rings.length>1&&i.rings.length>=c.rings.length?(s.push(i),n.push("simplify")):n.push(R?a(i):i)}}if(!s.length)return n;const o=await d(x,s,m),i=[];for(let t=0;t<n.length;t++){const e=n[t];"simplify"!==e?i.push(e):i.push(R?a(o.shift()):o.shift())}return i}const X=[];for(let t=0;t<v.length;t++){const e=v[t];if("cut"!==e)X.push(e);else{const t=L.shift();X.push(!0===R?a(t):t)}}return Promise.resolve(X)}function P(t){if(!t)return null;const e=t.extent;if(!e)return null;const s=t.spatialReference&&f(t.spatialReference);if(!s)return e;const[n,r]=s.valid,o=2*r,{width:i}=e;let c,{xmin:p,xmax:l}=e;if([p,l]=[l,p],"extent"===t.type||0===i||i<=r||i>o||p<n||l>r)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;c=R(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;c=R(t.paths);break;case"multipoint":c=t.points}const u=e.clone();for(let t=0;t<c.length;t++){let e=c[t][0];e<0?(e+=r,l=Math.max(e,l)):(e-=r,p=Math.min(e,p))}return u.xmin=p,u.xmax=l,u.width<i?(u.xmin-=r,u.xmax-=r,u):e}function J(t,e){const s=f(e);if(s){const[e,n]=s.valid,r=n-e;if(t<e)for(;t<e;)t+=r;if(t>n)for(;t>n;)t-=r}return t}export{P as getDenormalizedExtent,N as normalizeCentralMeridian,J as normalizeMapX,U as straightLineDensify};
