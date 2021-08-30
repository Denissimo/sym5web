// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../../../../chunks/boundedPlane ../../../../geometry/support/ray ./Object3D".split(" "),function(h,r,n,t,c,e,u,v,w,k,x){let y=function(){function d(){this.min=new f;this.max=new f;this.hud=new f;this.ground=new f}d.prototype.init=function(b){this.min.init(b);this.max.init(b);this.hud.init(b);
this.ground.init(b);this.all=[]};return d}(),f=function(){function d(a){this.normal=e.create();this.transformation=t.create();this._ray=k.create();this.init(a)}var b=d.prototype;b.getIntersectionPoint=function(a){if(!this.hasIntersectionPoint)return!1;c.scale(l,this.ray.direction,this.dist);c.add(a,this.ray.origin,l);return!0};b.getTransformedNormal=function(a){c.copy(g,this.normal);g[3]=0;u.transformMat4(g,g,this.transformation);c.copy(a,g);c.normalize(a,a);return a};b.init=function(a){this.drapedLayerGraphicOrder=
this.drapedLayerOrder=this.name=this.target=this.dist=void 0;this.triangleNr=this.geometryId=this.center=null;this.intersector="Stage";a?k.copy(a,this._ray):this._ray=k.create()};b.set=function(a,m,z,A,B,C,p,D,E,F){a instanceof x.Object3D&&(a={type:"stage",obj:a});this.dist=z;c.copy(this.normal,A);n.copy(this.transformation,B);this.target=a;this.name=m;this.drapedLayerOrder=C;this.center=p?e.clone(p):null;this.geometryId=D;this.triangleNr=E;this.drapedLayerGraphicOrder=F};b.copyFrom=function(a){k.copy(a.ray,
this._ray);this.dist=a.dist;this.target=a.target;this.name=a.name;this.drapedLayerOrder=a.drapedLayerOrder;this.center=a.center?e.clone(a.center):null;this.geometryId=a.geometryId;this.triangleNr=a.triangleNr;this.intersector=a.intersector;this.drapedLayerGraphicOrder=a.drapedLayerGraphicOrder;c.copy(this.normal,a.normal);n.copy(this.transformation,a.transformation)};r._createClass(d,[{key:"ray",get:function(){return this._ray}},{key:"hasIntersectionPoint",get:function(){return null!=this.dist}},
{key:"distanceInRenderSpace",get:function(){if(null!=this.dist)return c.scale(l,this.ray.direction,this.dist),c.length(l)}}]);return d}();const q=e.create(),l=e.create(),g=v.create();h.IntersectorResult=f;h.IntersectorResults=y;h.sliceFilterPredicate=function(d){return(b,a,m)=>{c.lerp(q,b,a,m);return!w.extrusionContainsPoint(d,q)}};Object.defineProperty(h,"__esModule",{value:!0})});