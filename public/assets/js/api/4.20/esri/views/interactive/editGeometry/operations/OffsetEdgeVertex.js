// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/plane ../../../../geometry/support/vector ./UpdateVertices ../../../support/geometry2dUtils".split(" "),function(w,x,A,l,r,p,c,g,h,u,v,B){v=function(y){function q(a,b,d,f=0,k=0){a=y.call(this,a)||this;a.planeType=b;a.edge=d;a.distance=f;a._plane=h.create();a._offsetPlane=
h.create();a._minDistance=-Infinity;a._maxDistance=Infinity;0===k&&a._initialize();return a}x._inheritsLoose(q,y);var e=q.prototype;e._initialize=function(){this._initializeNeighbors();this._initializePlane();this._initializeDistanceConstraints()};e._initializeNeighbors=function(){var a,b,d,f;const k=this._toXYZ(this.edge.left.pos),m=this._toXYZ(null==(a=this.edge.left.left)?void 0:null==(b=a.left)?void 0:b.pos);a=this._toXYZ(this.edge.right.pos);b=this._toXYZ(null==(d=this.edge.right.right)?void 0:
null==(f=d.right)?void 0:f.pos);this._edgeDirection=c.direction(g.create(),k,a);this._left=this._computeNeighbor(k,m,this._edgeDirection);this._right=this._computeNeighbor(a,b,this._edgeDirection)};e._toXYZ=function(a){return l.isSome(a)?this.helper.toXYZ(a):null};e._computeNeighbor=function(a,b,d){if(l.isNone(b))return{start:a,end:b,direction:g.fromValues(-d[1],d[0],0),isOriginalDirection:!0};const f=c.direction(g.create(),a,b),k=!this._passesBisectingAngleThreshold(f,d);return{start:a,end:b,direction:k?
this._bisectVectorsPerpendicular(d,f):f,isOriginalDirection:!k}};e._passesBisectingAngleThreshold=function(a,b){a=Math.abs(u.angle(b,a));return a>=z&&a<=Math.PI-z};e._bisectVectorsPerpendicular=function(a,b){a=0>c.dot(a,b)?a:c.negate(g.create(),a);const d=Math.abs(c.dot(a,b));if(!(.001>d||.999<d))return this._bisectDirection(a,b);b=c.cross(g.create(),a,[0,0,1]);return c.normalize(b,b)};e._bisectDirection=function(a,b){a=c.add(g.create(),a,b);return c.normalize(a,a)};e._initializePlane=function(){const a=
this._computeNormalDirection(this._left),b=this._computeNormalDirection(this._right);0>c.dot(a,b)&&c.negate(b,b);h.fromPositionAndNormal(this._left.start,this._bisectDirection(a,b),this._plane)};e._computeNormalDirection=function(a){a=c.cross(g.create(),a.direction,this._edgeDirection);c.normalize(a,a);a=c.cross(g.create(),this._edgeDirection,a);1===this.planeType&&(a[2]=0);return c.normalize(a,a)};e._initializeDistanceConstraints=function(){l.isSome(this._left.end)&&!this.requiresSplitEdgeLeft&&
this._updateDistanceConstraint(h.signedDistance(this._plane,this._left.end));l.isSome(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(h.signedDistance(this._plane,this._right.end));this._updateIntersectDistanceConstraint(this._plane)};e._updateDistanceConstraint=function(a){0>=a&&(this._minDistance=Math.max(this._minDistance,a));0<=a&&(this._maxDistance=Math.min(this._maxDistance,a))};e._updateIntersectDistanceConstraint=function(a){var b=h.normal(a);const d=this._edgeDirection;
var f=c.add(g.create(),this._left.start,this._left.direction);const k=c.add(g.create(),this._right.start,this._right.direction);var m=this._pointInBasis2D(p.create(),b,d,this._left.start),n=this._pointInBasis2D(p.create(),b,d,f),t=this._pointInBasis2D(p.create(),b,d,this._right.start);b=this._pointInBasis2D(p.create(),b,d,k);[t]=B.intersectLineAndRay({start:n,end:m,type:1},{start:b,end:t,type:1});t&&(m=r.subtract(p.create(),m,n),r.normalize(m,m),n=r.subtract(p.create(),t,n),n=r.dot(m,n),f=c.add(g.create(),
f,c.scale(g.create(),this._left.direction,-n)),a=h.signedDistance(a,f),this._updateDistanceConstraint(a))};e._pointInBasis2D=function(a,b,d,f){a[0]=u.projectPointSignedLength(b,f);a[1]=u.projectPointSignedLength(d,f);return a};e._offset=function(a,b){Number.isFinite(this._minDistance)&&(b=Math.max(this._minDistance,b));Number.isFinite(this._maxDistance)&&(b=Math.min(this._maxDistance,b));h.copy(this._plane,this._offsetPlane);this._offsetPlane[3]-=b;b=(f,k,m)=>l.isSome(k)&&h.intersectLine(this._offsetPlane,
f,c.add(g.create(),f,k),m);const d=g.create();(a===this.edge.left?b(this._left.start,this._left.direction,d):b(this._right.start,this._right.direction,d))&&this.helper.copy(this.helper.fromXYZ(d,void 0,this.helper.getM(a.pos)),a.pos)};e.signedDistanceToPoint=function(a){return h.signedDistance(this.plane,this.helper.toXYZ(this.helper.fromPoint(a)))};e.apply=function(a){this._offset(a,this.distance)};e.undo=function(a){this._offset(a,0)};e.canAccumulate=function(a){return a instanceof q&&this.edge.left.index===
a.edge.left.index&&this.edge.right.index===a.edge.right.index&&this.edge.component===a.edge.component&&this._maybeEqualsVec3(this._left.direction,a._left.direction)&&this._maybeEqualsVec3(this._right.direction,a._right.direction)&&c.equals(h.normal(this._plane),h.normal(a._plane))};e.accumulate=function(a,b){this._offset(a,this._plane[3]-b._plane[3]+b.distance)};e.accumulateParams=function(a){this.distance=a.distance-a._plane[3]+this._plane[3]};e.clone=function(){const a=new q(this.helper,this.planeType,
this.edge,this.distance,1);h.copy(this._plane,a._plane);h.copy(this._offsetPlane,a._offsetPlane);a._maxDistance=this._maxDistance;a._minDistance=this._minDistance;a._left=this._cloneNeighbor(this._left);a._right=this._cloneNeighbor(this._right);a._edgeDirection=c.copy(g.create(),this._edgeDirection);return a};e._maybeEqualsVec3=function(a,b){return l.isNone(a)&&l.isNone(b)||l.isSome(a)&&l.isSome(b)&&c.equals(a,b)};e._cloneNeighbor=function({start:a,end:b,direction:d,isOriginalDirection:f}){return{start:c.copy(g.create(),
a),end:l.isSome(b)?c.copy(g.create(),b):null,direction:c.copy(g.create(),d),isOriginalDirection:f}};x._createClass(q,[{key:"plane",get:function(){return this._plane}},{key:"requiresSplitEdgeLeft",get:function(){return!this._left.isOriginalDirection}},{key:"requiresSplitEdgeRight",get:function(){return!this._right.isOriginalDirection}},{key:"edgeDirection",get:function(){return this._edgeDirection}}]);return q}(v.PerVertexOperation);const z=A.deg2rad(15);w.OffsetEdgeVertex=v;Object.defineProperty(w,
"__esModule",{value:!0})});