// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/mat4 ../../chunks/vec3 ../../chunks/vec3f64 ../projectionEllipsoid ../../chunks/boundedPlane ../../chunks/sphere".split(" "),function(d,v,f,n,w,p,q){function r(a){return{operations:a,value:a.create()}}function l(a,b,c=r(a)){c.operations=a;a.copy(b,c.value);return c}function t(a,b,c,e){return a.operations.setAltitudeAt(a.value,b,c,e)}const u=2**50,g=n.create(),m={operations:null,value:null},k=n.create();d.altitudeAt=function(a,b){return a.operations.altitudeAt(a.value,
b)};d.axisAt=function(a,b,c,e){return a.operations.axisAt(a.value,b,c,e)};d.closestPoint=function(a,b,c){return a.operations.closestPoint(a.value,b,c)};d.closestPointOnSilhouette=function(a,b,c){return a.operations.closestPointOnSilhouette(a.value,b,c)};d.coordinateSystemFromOneAxisAndNormalVector=function(a,b,c,e,h){f.copy(c,a);f.copy(k,b);f.normalize(k,k);f.cross(e,k,c);f.cross(h,e,c)};d.create=function(a){const {value:b,operations:c}=a;return{operations:c,value:c.create(b)}};d.createFromOperations=
r;d.createGlobal=function(a){return l(q.sphere,q.fromValues(0,0,0,w.getReferenceEllipsoid(a).radius))};d.createLocal=function(){return l(p.boundedPlane,p.fromValues([0,0,0],[u,0,0],[0,u,0]))};d.distanceToSilhouette=function(a,b){return a.operations.distanceToSilhouette(a.value,b)};d.elevate=function(a,b,c){return a.operations.elevate(a.value,b,c.value)};d.fromValues=l;d.intersectRay=function(a,b,c){return a.operations.intersectRay(a.value,b,c)};d.intersectRayClosestSilhouette=function(a,b,c){return a.operations.intersectRayClosestSilhouette(a.value,
b,c)};d.intersectsRay=function(a,b){return a.operations.intersectRay(a.value,b,null)};d.normalAt=function(a,b,c){return a.operations.axisAt(a.value,b,2,c)};d.setAltitudeAt=t;d.setAltitudeOfTransformation=function(a,b,c,e){b!==e&&v.copy(e,b);f.set(g,e[12],e[13],e[14]);t(a,g,c,g);e[12]=g[0];e[13]=g[1];e[14]=g[2];return e};d.setExtent=function(a,b,c){a.operations.setExtent(a.value,b,c.value);return c};d.vectorCoordinates=function(a,b,c,e,h){h[0]=f.dot(a,b);h[1]=f.dot(a,c);h[2]=f.dot(a,e);return h};d.wrap=
function(a,b){m.operations=a;m.value=b;return m};Object.defineProperty(d,"__esModule",{value:!0})});