// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Camera ../../../core/Logger ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/Point ../../../geometry/projection ../../../geometry/projectionEllipsoid ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../camera/intersectionUtils ../../../chunks/cameraUtilsPlanar ../../../chunks/cameraUtilsSpherical ./earthUtils ./ElevationProvider ./mathUtils ../../support/spatialReferenceSupport".split(" "),
function(m,N,H,Y,D,p,Z,z,t,v,q,aa,A,ba,ca,O,P,da,Q,R,ea){function w(a){return"global"===a.viewingMode?P.cameraUtilsSpherical:O.cameraUtilsPlanar}function S(a,b,c){const d=a.state.camera,e=d.width/2/d.pixelRatio;1===a.renderCoordsHelper.viewingMode&&null!=c&&(b*=Math.cos(D.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return e/(96*39.37/b)/Math.tan(d.fovX/2)}function T(a,b,c){const d=a.state.camera;b=96*39.37/(d.width/2/d.pixelRatio/(b*Math.tan(d.fovX/2)));1===a.renderCoordsHelper.viewingMode&&
(b/=Math.cos(D.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}function U(a,b,c,d,e,f){if(B(f)){const k=new I(f.signal);E(a,d.heading,d.tilt,b,c,e,k);k.resolver.promise.then(g=>{g=F(a,g,d.fov);if(p.isNone(g))f.resolver.reject();else return f.resolver.resolve(g)},g=>f.resolver.reject(g))}else return b=E(a,d.heading,d.tilt,b,c,e),F(a,b,d.fov,f)}function V(a,b,c,d,e){return w(a).directionToHeadingTilt(b,c,d,e)}function fa(a,b){return!!(a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,
x,a.spatialReference)&&p.unwrapOr(Q.getElevationAtPoint(a.elevationProvider,x),0)>x.z-1)}function ha(a,b,c){return J.apply(this,arguments)}function J(){J=N._asyncToGenerator(function*(a,b,c){if(!a.renderCoordsHelper.fromRenderCoords(b,x,a.spatialReference))return!1;a=yield a.elevationProvider.queryElevation(x.x,x.y,x.z,x.spatialReference,"ground",c);return p.unwrapOr(a,0)>x.z-1});return J.apply(this,arguments)}function ia(a,b,c){return K.apply(this,arguments)}function K(){K=N._asyncToGenerator(function*(a,
b,c){const d=t.create();b?b instanceof v?(q.projectPointToVector(b,d,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=yield a.elevationProvider.queryElevation(b.x,b.y,b.z,b.spatialReference,"ground",c),p.isSome(b)&&a.renderCoordsHelper.setAltitude(d,b))):z.copy(d,b):z.copy(d,a.state.camera.center);return d});return K.apply(this,arguments)}function ja(a,b){const c=t.create();b&&b instanceof v?(q.projectPointToVector(b,c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=
Q.getElevationAtPoint(a.elevationProvider,b),p.isSome(b)&&a.renderCoordsHelper.setAltitude(c,b))):b?z.copy(c,b):z.copy(c,a.state.camera.center);return c}function E(a,b,c,d,e,f,k){const g=d&&d instanceof v?d:null;if(B(k))return ia(a,d,k.signal).then(h=>{L(a,b,c,g,h,e,f,k)},h=>k.resolver.reject(h)),null;d=ja(a,d);return L(a,b,c,g,d,e,f,k)}function L(a,b,c,d,e,f,k,g){if(p.isNone(d)&&(d=q.projectVectorToPoint(e,a.renderSpatialReference,a.spatialReference||A.WGS84),p.isNone(d)))return null;f=Math.max(f,
a.state.constraints.minimumPoiDistance);var h=ka(a,b,c,e,f,k);const y=w(a).eyeForCenterWithHeadingTilt,l=y(e,f,h.heading,h.tilt);if(1===k&&"global"===a.viewingMode&&0<c){const r=()=>{var n=f,u=f;var M=a.state.constraints.tilt(u);u=w(a).eyeTiltToLookAtTilt(c,e,u);u=Math.min(u,.5*Math.PI);M=M.min*(1-.7)+.7*u;n=w(a).lookAtTiltToEyeTilt(M,e,n);k=1>c-n?0:1;return L(a,b,n,d,e,f,k,g)};h=a.map.ground.navigationConstraint;if(!h||"stay-above"===h.type){if(fa(a,l.eye))return r();if(B(g))return ha(a,l.eye,g.signal).then(n=>
{if(n)return r();g.resolver.resolve({eye:l.eye,up:l.up,center:t.clone(e),heading:l.heading,tilt:l.tilt});return null}),null}}h=!g||B(g)?{center:t.create(),eye:t.create(),up:t.create(),tilt:0,heading:0}:g;h.eye=l.eye;h.up=l.up;h.center=t.clone(e);h.heading=l.heading;h.tilt=l.tilt;B(g)&&g.resolver.resolve(h);return h}function ka(a,b,c,d,e,f){var k=0;if(f=1===f)if(k=a.pointsOfInterest.centerOnSurfaceFrequent.distance,8<Math.log(e/k)/Math.LN2)f=!0;else{var g=a.renderSpatialReference,h=a.spatialReference||
A.WGS84;f=q.projectVectorToPoint(d,g,h);g=q.projectVectorToPoint(a.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,g,h);p.isNone(f)||p.isNone(g)?f=!1:(k*=Math.tan(.5*a.state.camera.fov),f=5<g.distance(f)/k)}f?(b=0,f=a.state.constraints.tilt(e),f.max=Math.min(f.max,.5*Math.PI),f=f.min*(1-.7)+.7*f.max,c=w(a).eyeTiltToLookAtTilt(c,d,e),k=Math.min(c,f)):k=w(a).eyeTiltToLookAtTilt(c,d,e);c=k=a.state.constraints.clampTilt(e,k);c=w(a).lookAtTiltToEyeTilt(c,d,e);return{heading:b,tilt:c}}function F(a,
b,c,d){if(p.isNone(b))return null;a=q.projectVectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||A.WGS84);return p.isNone(a)?null:p.isSome(d)?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):new H(a,b.heading,b.tilt,c)}function B(a){return a&&"resolver"in a}const W=Y.getLogger("esri.views.3d.support.cameraUtils"),X=t.create(),G=t.create(),la={heading:0,tilt:0},x=new v,ma=new R.Cyclical(-2.0037508342788905E7,2.0037508342788905E7),na=new R.Cyclical(-180,180),C=t.create();let I=
function(a){this.signal=a;this.resolver=Z.createResolver()};m.AsyncContext=I;m.computeScale=function(a,b,c){const d=a.renderSpatialReference;b||(b=a.state.camera);var e=A.WGS84;b instanceof H?(e=b.position.latitude,q.projectPointToVector(b.position,X,d),q.projectPointToVector(c,G,d),b=z.distance(X,G)):(q.projectVectorToVector(b.center,d,G,e),e=G[1],b=b.distance);return T(a,b,e)};m.directionToHeadingTilt=V;m.distanceToScale=T;m.externalToInternal=function(a,b){if(p.isNone(b))return null;var c=a.renderSpatialReference;
const d=w(a).headingTiltToDirectionUp,e=t.create();if(!q.projectPointToVector(b.position,e,c))return null;c=d(e,b.heading,b.tilt);z.scale(c.direction,c.direction,a.state.camera.distance);z.add(c.direction,c.direction,e);a=ca.cameraOnContentAlongViewDirection(a,e,c.direction,c.up);a.fov=D.deg2rad(b.fov);return a};m.fromCenterDistance=U;m.fromCenterScale=function(a,b,c,d,e,f){c=S(a,c,b.latitude);return U(a,b,c,d,e,f)};m.fromExtent=function(a,b,c,d,e,f=null){let k;var g=0;null!=b.zmax&&null!=b.zmin&&
(k=(b.zmax+b.zmin)/2,g=b.zmax-b.zmin);if("global"===a.viewingMode){if(!ea.isSpatialReferenceSupported(b.spatialReference,"global"))return B(f)&&f.resolver.reject(),null;var h=new v(b.xmin,b.ymin,b.spatialReference);const n=new v(b.xmax,b.ymax,b.spatialReference),u=b.spatialReference.isGeographic?na:ma;var y=new v(u.center(h.x,n.x),(n.y+h.y)/2,b.spatialReference);null!=k&&(y.z=k);b=aa.getReferenceEllipsoid(b.spatialReference);var l=da.getGreatCircleSpanAt(y,h,n);var r=l.lon;l=l.lat;u.diff(h.x,n.x)>
u.range/2&&(r+=b.halfCircumference);r=Math.min(r,b.halfCircumference);l=Math.min(l,b.halfCircumference)}else y=a.spatialReference||A.WGS84,r=b.xmax-b.xmin,l=b.ymax-b.ymin,y=new v({x:b.xmin+.5*r,y:b.ymin+.5*l,z:k,spatialReference:y});h=a.state.camera;g=Math.max(1/Math.tan(h.fovX/2)*r*.5,1/Math.tan(h.fovY/2)*l*.5,1/Math.tan(h.fov/2)*g*.5)/1;if(B(f))r=new I(f.signal),E(a,c,d,y,g,e,r),r.resolver.promise.then(n=>{n=F(a,n,a.camera.fov);if(p.isNone(n))f.resolver.reject();else return f.resolver.resolve(n)},
n=>f.resolver.reject(n));else return c=E(a,c,d,y,g,e),F(a,c,a.camera.fov,f)};m.getObserverForPointAtDistance=E;m.headingTiltToDirectionUp=function(a,b,c,d,e){return w(a).headingTiltToDirectionUp(b,c,d,e)};m.internalToExternal=function(a,b,c){const d=a.renderSpatialReference,e=V(a,b.eye,b.viewForward,b.up,la);a=a.spatialReference||A.WGS84;q.projectVectorToVector(b.eye,d,C,a)||(a=A.WGS84,q.projectVectorToVector(b.eye,d,C,a));if(p.isNone(c))return new H(new v(C,a),e.heading,e.tilt,D.rad2deg(b.fov));
c.position.x=C[0];c.position.y=C[1];c.position.z=C[2];c.position.spatialReference=a;c.heading=e.heading;c.tilt=e.tilt;c.fov=D.rad2deg(b.fov);return c};m.observerToCamera=F;m.scaleToDistance=S;m.scaleToResolution=function(a,b){return a.spatialReference?ba.getResolutionForScale(b,a.spatialReference):void 0};m.scaleToZoom=function(a,b){var c;if(a=null==(c=a.basemapTerrain)?void 0:c.tilingScheme)return a.levelAtScale(b);W.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")};
m.toExtent=function(a,b,c){const d=q.projectVectorToPoint(c,a.renderSpatialReference,a.spatialReference||A.WGS84);if(p.isNone(d))return null;var e=Math.tan(b.fovX/2),f=Math.tan(b.fovY/2);b=z.dist(b.eye,c);e*=2*b;f*=2*b;return"global"===a.viewingMode?P.toExtent(a,d,e,f):O.toExtent(a,d,e,f)};m.zoomToScale=function(a,b){var c;if(a=null==(c=a.basemapTerrain)?void 0:c.tilingScheme)return a.scaleAtLevel(b);W.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};Object.defineProperty(m,
"__esModule",{value:!0})});