// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/unitUtils ../../../chunks/vec2 ../../../chunks/vec3 ../../../geometry/Polyline ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/geodesicUtils ./ProfileGenerationError".split(" "),function(P,r,Q,R,l,x,E,F,S,y,u,G,t,H){function z(){z=Q._asyncToGenerator(function*(a,b,c,e,f,d,g){var h=a.spatialReference;const k=
h.isGeographic||h.isWebMercator;var m=yield new Promise(function(n,p){P(["../../../geometry/geometryEngineAsync"],n,p)});x.throwIfAborted(g);let q=0;k||(q=yield m.planarLength(a,"meters"),x.throwIfAborted(g));m=1/E.getMetersPerUnitForSR(e);if(k||q>=f.geodesicDistanceThreshold){yield u.initializeProjection([{source:h,dest:e},{source:h,dest:G.WGS84}],g);g=T(a);h=t.geodesicLengths([g],"meters")[0];f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(I(a,h,f)>d)throw new H.ProfileGenerationError("too-complex");
g=A(g,b,c);({densifiedPath:a,distances:b}=U(g,f,m))}else{yield u.initializeProjection([{source:h,dest:e}],g);h=q;f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(I(a,h,f)>d)throw new H.ProfileGenerationError("too-complex");a=A(a,b,c);({densifiedPath:a,distances:b}=V(a,f,m));x.throwIfAborted(g)}a=u.project(a,e);return{densifiedPath:a,pathLength:h*m,distances:b}});return z.apply(this,arguments)}function A(a,b,c){if(l.isNone(b))return J(a);const e=a.spatialReference,f=b.mode;b=l.unwrapOr(b.offset,
0);let d=null;switch(c.type){case "2d":d=W(a,f,b);break;case "3d":d=X(a,f,b,c)}return l.isNone(d)?J(a):new y({hasZ:!0,hasM:!1,spatialReference:e,paths:K(a.paths,d)})}function W({hasZ:a},b,c){switch(b){case "absolute-height":return a?([e,f,d])=>[e,f,d+c]:([e,f])=>[e,f,c];default:return null}}function X({spatialReference:a,hasZ:b},c,e,{elevationProvider:f}){switch(c){case "on-the-ground":return([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)];case "absolute-height":return b?([d,g,h])=>[d,
g,h+e]:([d,g])=>[d,g,e];case "relative-to-ground":return b?([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"ground"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)+e];case "relative-to-scene":return b?([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"scene"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"scene"),0)+e];default:return null}}function J(a){return a.hasZ?new y({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:K(a.paths,([b,c])=>[b,c])}):a}function K(a,
b){const c=a.length,e=Array(c);for(let f=0;f<c;++f){const d=a[f],g=d.length,h=Array(d.length);e[f]=h;for(let k=0;k<g;++k)h[k]=b(d[k])}return e}function L(a){return l.isSome(a)&&"polyline"===a.type}function M(a,b,c,e,f){const {spatialReference:d,hasZ:g}=a,h={from:null,to:null,distance:0,azimuth:0,reverseAzimuth:0,spatialReference:d,metersPerSR:E.getMetersPerUnitForSR(d)},k=Array(a.paths.length),m=Array(a.paths.length);let q=0;for(let p=0;p<a.paths.length;++p){const B=a.paths[p],C=[],D=[];var n=0;for(let v=
1;v<B.length;++v){const N=B[v],w=e(h,B[v-1],N);for(;n<w.distance;n+=b)C.push(f(w,n)),D.push((q+n)*c);n-=w.distance;q+=w.distance;C.push(N);D.push(q*c)}k[p]=C;m[p]=D}return{densifiedPath:new y({spatialReference:d,hasZ:g,paths:k}),distances:m}}function V(a,b,c){const {hasZ:e}=a;return M(a,b,c,Y,e?Z:aa)}function U(a,b,c){const {hasZ:e}=a;return M(a,b,c,ba,e?ca:da)}function ba(a,b,c){a.distance=0;t.inverseGeodeticSolver(a,b,c,a.spatialReference);a.from=b;a.to=c;return a}function Y(a,b,c){a.from=b;a.to=
c;a.distance=F.distance(c,b)*a.metersPerSR;return a}function da({from:a,azimuth:b,spatialReference:c},e){return t.directGeodeticSolver([0,0],a,b,e,c)}function ca({from:a,to:b,azimuth:c,distance:e,spatialReference:f},d){b=[0,0,R.lerp(a[2],b[2],d/e)];t.directGeodeticSolver(b,a,c,d,f);return b}function aa({from:a,to:b,distance:c},e){return F.lerp([0,0],a,b,e/c)}function Z({from:a,to:b,distance:c},e){return S.lerp([0,0,0],a,b,e/c)}function T(a){return t.isSupported(a.spatialReference)?a:u.project(a,G.WGS84)}
function O(a){return a.paths.reduce((b,c)=>b+c.length,0)}function I(a,b,c){return O(a)+Math.floor(b/c)+Math.max(0,a.paths.reduce(e=>1+e,0)-1)}r.countPoints=O;r.densifyPath=function(a,b,c,e,f,d,g){return z.apply(this,arguments)};r.isPolyline=L;r.isValidInputPath=function(a){return L(a)&&0<a.paths.length&&a.paths.every(b=>2<=b.length)};r.toAbsoluteHeightElevation=A;Object.defineProperty(r,"__esModule",{value:!0})});