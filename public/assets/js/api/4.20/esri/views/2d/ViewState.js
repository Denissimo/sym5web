// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../chunks/common ../../chunks/mat2d ../../chunks/mat2df32 ../../chunks/mat2df64 ../../chunks/mat3 ../../chunks/mat3f32 ../../chunks/vec2 ../../chunks/vec2f32 ../../chunks/vec2f64 ../../core/libs/gl-matrix-2/types/vec2 ./viewpointUtils ../../geometry/Point ../../geometry/Extent".split(" "),
function(A,n,h,B,H,t,O,P,Q,R,I,J,p,K,w,m,x,g,C,L,y,k,M,N){var z;const f=[0,0];h=z=function(D){function u(a){a=D.call(this,a)||this;a._viewpoint2D={center:L.create(),rotation:0,scale:0,spatialReference:null};a.center=[0,0];a.extent=new N;a.id=0;a.inverseTransform=w.create();a.resolution=0;a.rotation=0;a.scale=0;a.transform=w.create();a.transformNoRotation=w.create();a.displayMat3=x.create();a.displayViewMat3=x.create();a.viewMat3=x.create();a.viewMat2d=K.create();a.worldScreenWidth=0;a.size=[0,0];
return a}A._inheritsLoose(u,D);var l=u.prototype;l.copy=function(a){const b=this.size,c=this.viewpoint;c&&b?(this.viewpoint=k.copy(c,a.viewpoint),this._set("size",g.copy(b,a.size))):(this.viewpoint=a.viewpoint.clone(),this._set("size",[a.size[0],a.size[1]]));this._set("pixelRatio",a.pixelRatio);return this};l.clone=function(){return new z({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})};l.toMap=function(a,b,c){if(y.isVec2(b))return g.transformMat2d(a,b,this.inverseTransform);
f[0]=b;f[1]=c;return g.transformMat2d(a,f,this.inverseTransform)};l.toScreen=function(a,b,c){if(y.isVec2(b))return g.transformMat2d(a,b,this.transform);f[0]=b;f[1]=c;return g.transformMat2d(a,f,this.transform)};l.toScreenNoRotation=function(a,b,c){if(y.isVec2(b))return g.transformMat2d(a,b,this.transformNoRotation);f[0]=b;f[1]=c;return g.transformMat2d(a,f,this.transformNoRotation)};l.getScreenTransform=function(a,b){const {center:c}=this._viewpoint2D,q=this._get("pixelRatio")||1,v=this._get("size");
k.getMatrix(a,c,v,b,0,q);return a};l._update=function(){const {center:a,spatialReference:b,scale:c,rotation:q}=this._viewpoint2D,v=this._get("pixelRatio")||1,e=this._get("size"),r=new B({targetGeometry:new M(a[0],a[1],b),scale:c,rotation:q});this._set("viewpoint",r);if(e&&b&&c){this.resolution=k.getResolution(r);this.rotation=q;this.scale=c;this.spatialReference=b;g.copy(this.center,a);m.set(this.displayMat3,0!==e[0]?2/e[0]:0,0,0,0,0!==e[1]?-2/e[1]:0,0,-1,1,1);var d=m.identity(this.viewMat3),E=C.fromValues(e[0]/
2,e[1]/2),F=C.fromValues(-e[0]/2,-e[1]/2),G=J.toRadian(q);m.translate(d,d,E);m.rotate(d,d,G);m.translate(d,d,F);m.multiply(this.displayViewMat3,this.displayMat3,d);d=p.identity(this.viewMat2d);p.translate(d,d,E);p.rotate(d,d,G);p.translate(d,d,F);k.getExtent(this.extent,r,e);k.getTransform(this.transform,r,e,v);p.invert(this.inverseTransform,this.transform);k.getTransformNoRotation(this.transformNoRotation,r,e,v);this.worldScreenWidth=k.getWorldScreenWidth(this.spatialReference,this.resolution);this._set("id",
this.id+1);return this}};A._createClass(u,[{key:"pixelRatio",set:function(a){this._set("pixelRatio",a);this._update()}},{key:"size",set:function(a){this._set("size",a);this._update()}},{key:"viewpoint",set:function(a){if(a){const b=this._viewpoint2D,c=a.targetGeometry;b.center[0]=c.x;b.center[1]=c.y;b.rotation=a.rotation;b.scale=a.scale;b.spatialReference=c.spatialReference}this._update()}}]);return u}(H.JSONSupport);n.__decorate([t.property({readOnly:!0})],h.prototype,"id",void 0);n.__decorate([t.property({value:1,
json:{write:!0}})],h.prototype,"pixelRatio",null);n.__decorate([t.property({json:{write:!0}})],h.prototype,"size",null);n.__decorate([t.property({type:B,json:{write:!0}})],h.prototype,"viewpoint",null);return h=z=n.__decorate([I.subclass("esri.views.2d.ViewState")],h)});