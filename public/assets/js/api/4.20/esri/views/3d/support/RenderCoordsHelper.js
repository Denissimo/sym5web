// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/unitUtils ../../../chunks/mat4 ../../../chunks/vec3 ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/coordinateSystem ../../../geometry/support/plane ../../../geometry/support/vectorStacks ../../../layers/graphics/dehydratedFeatureUtils".split(" "),function(l,p,q,r,t,m,h,u,d,v,k,n){let w=function(){function g(b,a,c,f){this.viewingMode=b;this.spatialReference=a;this.unitInMeters=
c;this.coordinateSystem=f;this._coordinateSystem=d.create(f)}var e=g.prototype;e.getAltitude=function(b){return d.altitudeAt(this.coordinateSystem,b)};e.setAltitude=function(b,a,c=b){return d.setAltitudeAt(this.coordinateSystem,c,a,b)};e.setAltitudeOfTransformation=function(b,a){d.setAltitudeOfTransformation(this.coordinateSystem,a,b,a)};e.worldUpAtPosition=function(b,a){return d.normalAt(this.coordinateSystem,b,a)};e.worldBasisAtPosition=function(b,a,c){return d.axisAt(this.coordinateSystem,b,a,
c)};e.basisMatrixAtPosition=function(b,a){const c=this.worldBasisAtPosition(b,0,k.sv3d.get()),f=this.worldBasisAtPosition(b,1,k.sv3d.get());b=this.worldBasisAtPosition(b,2,k.sv3d.get());t.set(a,c[0],c[1],c[2],0,f[0],f[1],f[2],0,b[0],b[1],b[2],0,0,0,0,1);return a};e.intersectManifoldClosestSilhouette=function(b,a,c){d.elevate(this.coordinateSystem,a,this._coordinateSystem);d.intersectRayClosestSilhouette(this._coordinateSystem,b,c);return c};e.intersectManifold=function(b,a,c){d.elevate(this.coordinateSystem,
a,this._coordinateSystem);a=k.sv3d.get();return d.intersectRay(this._coordinateSystem,b,a)?m.copy(c,a):null};e.intersectInfiniteManifold=function(b,a,c){if(1===this.viewingMode)return this.intersectManifold(b,a,c);d.elevate(this.coordinateSystem,a,this._coordinateSystem);a=this._coordinateSystem.value;const f=k.sv3d.get();return v.intersectRay(a.plane,b,f)?m.copy(c,f):null};e.toRenderCoords=function(b,a,c){return n.isDehydratedPoint(b)?h.projectPointToVector(b,a,this.spatialReference):h.projectVectorToVector(b,
a,c,this.spatialReference)};e.fromRenderCoords=function(b,a,c=null){return n.isDehydratedPoint(a)?(q.isSome(c)&&(a.spatialReference=c),h.projectVectorToDehydratedPoint(b,this.spatialReference,a)):a instanceof u?h.projectVectorToPoint(b,this.spatialReference,a):h.projectVectorToVector(b,this.spatialReference,a,c)?a:null};g.create=function(b,a){switch(b){case 2:return new g(2,a,r.getMetersPerUnitForSR(a),d.createLocal());case 1:return new g(1,a,1,d.createGlobal(a))}};p._createClass(g,[{key:"extent",
set:function(b){b&&d.setExtent(this.coordinateSystem,b,this.coordinateSystem)}}]);return g}();l.RenderCoordsHelper=w;Object.defineProperty(l,"__esModule",{value:!0})});