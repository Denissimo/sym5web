/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../request.js";import{f as t,s as r,h as a}from"./arrayUtils.js";import n from"../core/Error.js";import{h as o,i as s,b as i,H as l,I as c}from"../core/lang.js";import{eachAlways as u}from"../core/promiseUtils.js";import{c as f}from"./mat4.js";import{c as h}from"./mat4f64.js";import{a as p,m,c as d}from"./quat.js";import{b as y}from"./quatf32.js";import{b as g,e as b,j as w,X as M,C as v,f as x,g as S,t as j}from"./mathUtils.js";import{a as R}from"./vec4f64.js";import{computeLinearTransformation as q,projectBoundingSphere as T,projectBuffer as k,projectVectorToVector as z}from"../geometry/projection.js";import{g as I,c as F}from"./projectionEllipsoid.js";import A from"../geometry/SpatialReference.js";import{c as C}from"./aaBoundingBox.js";import{a as G,e as L,j as K,d as W}from"./aaBoundingRect.js";import{canProject as E}from"../geometry/support/webMercatorUtils.js";import B from"../rest/support/Query.js";import{r as O}from"./I3SBinaryReader.js";import{j as P,p as U,i as $}from"./ElevationQuery.js";import{a as Q,b as H,d as V}from"../views/SceneView.js";function X(e,t,r,a){const n=Z(e,t,r),o=h();return q(r,n,o,a),o}function Z(e,t,r){const a=g(),n=e[3],o=2**(4*Math.ceil(Math.log(n)*Math.LOG2E/4)+1);if(r.isGeographic){const t=o/I(r).radius*180/Math.PI,n=Math.round(e[1]/t),s=Math.max(-90,Math.min(90,n*t)),i=t/Math.cos((Math.abs(s)-t/2)/180*Math.PI),l=Math.round(e[0]/i)*i;a[0]=l,a[1]=s}else{const t=Math.round(e[0]/o),r=Math.round(e[1]/o);a[0]=t*o,a[1]=r*o}const s=e[2]+t,i=Math.round(s/o);return a[2]=i*o,a}function D(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function J(e){if(o("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes.encoding)return!0;return!1}function N(e,t,r,a,n,o){n.traverse(r,(r=>{let n=r.mbs;t!==a&&(n=re,T(r.mbs,a,n,t));const s=function(e,t){const r=t[0],a=t[1],n=t[3],o=e[0]-r,s=r-e[2],i=e[1]-a,l=a-e[3],c=Math.max(o,s,0),u=Math.max(i,l,0),f=c*c+u*u;if(f>n*n)return 0;if(f>0)return 1;if(-Math.max(o,s,i,l)>n)return 3;return 2}(e,n);return 0!==s&&(o(r,s),!0)}))}function Y(e,t,r){let a=0,n=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(r(o)&&(e[n]=e[a],n++),a++);e.length=n}function _(e,t,r){let n=0,o=0;for(;n<r.length;){a(e,r[n])>=0===t&&(r[o]=r[n],o++),n++}r.length=o}const ee=C();function te(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return ee[0]=(e[0]-t.position[0])/t.rotationScale[0],ee[1]=(e[1]-t.position[1])/t.rotationScale[4],ee[2]=(e[2]-t.position[2])/t.rotationScale[8],ee[3]=(e[3]-t.position[0])/t.rotationScale[0],ee[4]=(e[4]-t.position[1])/t.rotationScale[4],ee[5]=(e[5]-t.position[2])/t.rotationScale[8],ee}const re=R();function ae(e,t){const r=t[0],a=t[1],n=t[2],o=t[3],s=e[0]-r,i=r-e[3],l=e[1]-a,c=a-e[4],u=e[2]-n,f=n-e[5],h=Math.max(s,i,0),p=Math.max(l,c,0),m=Math.max(u,f,0),d=h*h+p*p+m*m;if(d>o*o)return 0;if(d>0)return 1;return-Math.max(s,i,l,c,u,f)>o?3:2}function ne(e,t,r){const a=[],n=r&&r.missingFields,o=r&&r.originalFields;for(const r of e){const e=r.toLowerCase();let s=!1;for(const n of t)if(e===n.name.toLowerCase()){a.push(n.name),s=!0,o&&o.push(r);break}!s&&n&&n.push(r)}return a}async function oe(r,a,o,l,c){if(0===a.length)return[];const f=r.attributeStorageInfo;if(s(r.associatedLayer))try{return await async function(e,t,r,a){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const n=t.map((e=>e.attributes[r])),o=[],s=ne(a,e.fields,{originalFields:o}),i=await se(e,n,s);for(let e=0;e<t.length;e++){const r=t[e],a=i[e],n={};if(r.attributes)for(const e in r.attributes)n[e]=r.attributes[e];for(let e=0;e<o.length;e++)n[o[e]]=a[s[e]];r.attributes=n}return t}(r.associatedLayer,a,o,l)}catch(e){if(r.associatedLayer.loaded)throw e}if(f){const s=function(e,t,r){const a=new Map,n=[],o=r();for(const r of e){const e=r.attributes[t];for(let t=0;t<o.length;t++){const s=o[t],i=s.featureIds.indexOf(e);if(i>=0){let e=a.get(s.node);e||(e={node:s.node,indices:[],graphics:[]},n.push(e),a.set(s.node,e)),e.indices.push(i),e.graphics.push(r);for(let e=t;e>0;e--)o[e]=o[e-1];o[0]=s;break}}}return n}(a,o,c);if(i(s))throw new n("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const h=r.parsedUrl.path,p=await Promise.all(s.map((t=>function(t,r,a,n,o){const s=[];for(const e of r)if(e&&-1!==o.indexOf(e.name)){const r=`${t}/nodes/${a.resources.attributes}/attributes/${e.key}/0`;s.push({url:r,storageInfo:e})}return u(s.map((t=>e(t.url,{responseType:"array-buffer"}).then((e=>O(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of n){const a={};for(let t=0;t<e.length;t++)null!=e[t].value&&(a[s[t].storageInfo.name]=ie(e[t].value,r));t.push(a)}return t}))}(h,f,t.node,t.indices,l).then((e=>{for(let r=0;r<t.graphics.length;r++){const a=t.graphics[r],n=e[r];if(a.attributes)for(const e in a.attributes)e in n||(n[e]=a.attributes[e]);a.attributes=n}return t.graphics})))));return t(p)}throw new n("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function se(e,a,o){const s=e.capabilities.query.maxRecordCount;if(null!=s&&a.length>s){const n=r(a,s);return Promise.all(n.map((t=>se(e,t,o)))).then(t)}const i=new B({objectIds:a,outFields:o,orderByFields:[e.objectIdField]});return e.queryFeatures(i).then((e=>{if(e&&e.features&&e.features.length===a.length)return e.features.map((e=>e.attributes));throw new n("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function ie(e,t){if(!e)return null;const r=e[t];if(l(e))return-32768===r?null:r;if(c(e))return-2147483648===r?null:r;return r!=r?null:r}function le(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new n("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new n("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=t?new A(D(t)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function ce(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new n("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new n("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=t?new A(D(t)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function ue(e,t){return i(t)?"@null":t===F(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function fe(e,t,r){if(!E(e,t))throw new n("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&e.isGeographic)throw new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{})}function he(e,t,r){const a=le(e),n=ce(e);fe(a,t,r),fe(n,t,r)}function pe(e){if(null==e.store||null==e.store.defaultGeometrySchema||(null!=(t=e.store.defaultGeometrySchema).geometryType&&"triangles"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null==t.vertexAttributes||null==t.vertexAttributes.position))throw new n("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path});var t}function me(e,t){he(e,t.spatialReference,t.viewingMode)}function de(e){if(null==e.store||null==e.store.defaultGeometrySchema||(null==(t=e.store.defaultGeometrySchema).geometryType||"points"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null!=t.encoding&&""!==t.encoding&&"lepcc-xyz"!==t.encoding||null==t.vertexAttributes||null==t.vertexAttributes.position))throw new n("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});var t}function ye(e,t){fe(e.spatialReference,t.spatialReference,t.viewingMode)}function ge(e){return"mesh-3d"===e.type}function be(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const e of t){if(!ge(e)||0===e.symbolLayers.length)return!0;for(const t of e.symbolLayers.items)if("fill"!==t.type||i(t.material)||i(t.material.color)||"replace"!==t.material.colorMixMode)return!0}return!1}const we=P({color:[0,0,0,0],opacity:0});class Me{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function ve(e){const t=new Me;let r=!1,a=!1;for(const n of e.symbolLayers.items)if("fill"===n.type&&n.enabled){const e=n.material,o=n.edges;if(s(e)&&!r){const a=e.color,o=U(e.colorMixMode);s(a)?t.material={color:[a.r/255,a.g/255,a.b/255],alpha:a.a,colorMixMode:o}:t.material={color:[1,1,1],alpha:1,colorMixMode:1},t.castShadows=n.castShadows,r=!0}s(o)&&!a&&(t.edgeMaterial=$(o,{}),a=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:1}),t}function xe(e,t){return(0|e)+(0|t)|0}function Se(e,t,r,a,n=0){a===F(a)?t.isGeographic?function(e,t,r,a){const n=I(r),o=1+Math.max(0,a)/(n.radius+e.center[2]);b(t.center,e.center[0],e.center[1],e.center[2]+a),k(t.center,r,0,t.center,F(r),0,1),p(t.quaternion,e.quaternion),d(qe,e.quaternion),b(Fe,0,0,1),v(Fe,Fe,qe),b(Fe,e.halfSize[0]*Math.abs(Fe[0]),e.halfSize[1]*Math.abs(Fe[1]),e.halfSize[2]*Math.abs(Fe[2])),x(Fe,Fe,n.inverseFlattening),S(t.halfSize,e.halfSize,Fe),x(t.halfSize,t.halfSize,o)}(e,r,t,n):function(e,t,r,a){H(e,Te),b(t.center,e.center[0],e.center[1],e.center[2]+a),q(r,t.center,Re,F(r)),b(t.center,Re[12],Re[13],Re[14]);const n=2*Math.sqrt(1+Re[0]+Re[5]+Re[10]);qe[0]=(Re[6]-Re[9])/n,qe[1]=(Re[8]-Re[2])/n,qe[2]=(Re[1]-Re[4])/n,qe[3]=.25*n,m(t.quaternion,qe,e.quaternion),d(qe,t.quaternion);let o=0,s=0,i=0;for(const e of Te)e[2]+=a,k(e,r,0,e,F(r),0,1),M(Fe,e,t.center),v(Fe,Fe,qe),o=Math.max(o,Math.abs(Fe[0])),s=Math.max(s,Math.abs(Fe[1])),i=Math.max(i,Math.abs(Fe[2]));b(t.halfSize,o,s,i)}(e,r,t,n):e===r?(r.center[2]+=n,k(r.center,t,0,r.center,a,0,1)):(b(r.center,e.center[0],e.center[1],e.center[2]+n),k(r.center,t,0,r.center,a,0,1),p(r.quaternion,e.quaternion),w(r.halfSize,e.halfSize))}function je(e,t,r,a,n,o){if(!o||0===o.length||i(t))return null;const l=X(e.mbs,n,r,t);let c;f(Ce,l);let u=1/0,h=-1/0;const p=o=>{if("replace"!==o.type)return;const i=o.geometry;if(!i.hasZ)return;L(ke);const l=i.spatialReference||a,f=i.rings.reduce(((e,r)=>r.reduce(((e,r)=>(z(r,l,Fe,t),j(Fe,Fe,Ce),K(ke,Fe),Math.min(Fe[2],e))),e)),1/0);(()=>{if(!c)if(c=Te,L(ze),s(e.serviceObb)){Se(e.serviceObb,r,Ie,t,n),H(Ie,c);for(const e of c)j(e,e,Ce),K(ze,e)}else{const a=e.mbs,o=a[3];z(a,r,Fe,t),j(Fe,Fe,Ce),Fe[2]+=n;for(let e=0;e<8;++e){const t=1&e?o:-o,r=2&e?o:-o,a=4&e?o:-o,n=c[e];w(n,[Fe[0]+t,Fe[1]+r,Fe[2]+a]),K(ze,n)}}})(),W(ze,ke)&&(u=Math.min(u,f),h=Math.max(h,f))};if(o.forEach((e=>p(e))),u===1/0)return null;for(let e=0;e<8;++e)m=Ae.data,d=3*e,y=c[e],j(Fe,y,l),m[d+0]=Fe[0],m[d+1]=Fe[1],m[d+2]=Fe[2],d+=24,y[2]=u,j(Fe,y,l),m[d+0]=Fe[0],m[d+1]=Fe[1],m[d+2]=Fe[2],d+=24,y[2]=h,j(Fe,y,l),m[d+0]=Fe[0],m[d+1]=Fe[1],m[d+2]=Fe[2];var m,d,y;return V(Ae)}const Re=h(),qe=y(),Te=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],ke=G(),ze=G(),Ie=Q(),Fe=[0,0,0],Ae={data:new Array(72),size:3},Ce=h();export{pe as a,me as b,fe as c,ue as d,X as e,ne as f,le as g,je as h,Z as i,Y as j,ae as k,xe as l,ve as m,ie as n,te as o,_ as p,Se as q,be as r,ce as s,we as t,N as u,de as v,oe as w,ye as x,he as y,J as z};