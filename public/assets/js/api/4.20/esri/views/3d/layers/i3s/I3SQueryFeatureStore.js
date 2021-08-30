// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect".split(" "),
function(b,q,e,r,t,g,A,B,C,D,u,v,w,m,n){b.I3SQueryFeatureStore=function(p){function l(a){a=p.call(this,a)||this;a.events=new t;return a}q._inheritsLoose(l,p);var k=l.prototype;k.destroy=function(){};k.forEach=function(a){this.forAllFeatures(h=>{a(h);return 1})};k.forEachBounds=function(a,h,d){const f=this.getFeatureExtent;for(const x of a)h(f(x,d))};k.forEachInBounds=function(a,h){this.forAllFeatures(d=>{const f=this.getFeatureExtent(d,y);n.intersects(a,m.toRect(f,z))&&h(d);return 1},d=>{w.projectBoundingSphere(d.node.mbs,
this.sourceSpatialReference,c,this.viewSpatialReference);if(c[0]>=a[0]&&c[2]<=a[2]&&c[1]>=a[1]&&c[3]<=a[3])return 1;d=c[0]-Math.max(a[0],Math.min(c[0],a[2]));const f=c[1]-Math.max(a[1],Math.min(c[1],a[3]));return d*d+f*f<=c[3]*c[3]?1:2})};return l}(r);e.__decorate([g.property({constructOnly:!0})],b.I3SQueryFeatureStore.prototype,"featureAdapter",void 0);e.__decorate([g.property({constructOnly:!0})],b.I3SQueryFeatureStore.prototype,"forAllFeatures",void 0);e.__decorate([g.property({constructOnly:!0})],
b.I3SQueryFeatureStore.prototype,"getFeatureExtent",void 0);e.__decorate([g.property({constructOnly:!0})],b.I3SQueryFeatureStore.prototype,"sourceSpatialReference",void 0);e.__decorate([g.property({constructOnly:!0})],b.I3SQueryFeatureStore.prototype,"viewSpatialReference",void 0);b.I3SQueryFeatureStore=e.__decorate([u.subclass("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],b.I3SQueryFeatureStore);const c=v.create(),y=m.create(),z=n.create();b.default=b.I3SQueryFeatureStore;Object.defineProperty(b,
"__esModule",{value:!0})});