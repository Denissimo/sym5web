// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Handles ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/support/clipRay ../../../../geometry/support/frustum ../../../../geometry/support/lineSegment ../../../../geometry/support/ray ./LaserlineVisualElement ./Object3DVisualElement ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(w,x,y,B,d,k,g,n,u,p,C,f,q,D,r,E,F){y=function(v){function t(a){var b=v.call(this,a)||this;b._ray=q.create();b._externalResources=null;b._handles=new B;b._isWorldDown=!1;b._start=g.create();b._end=g.fromValues(1,0,0);b._width=1;b._color=u.fromValues(1,0,1,1);b._polygonOffset=!1;b._writeDepthEnabled=!0;b._innerWidth=0;b._innerColor=u.fromValues(1,1,1,1);b._stippleIntegerRepeats=!0;b._stipplePattern=null;b._stippleOffColor=null;b._falloff=0;b._extensionType=0;b._laserlineStyle=null;b._laserlineEnabled=
!1;b._renderOccluded=4;b._fadedExtensions=z;b.applyProps(a);return b}x._inheritsLoose(t,v);var e=t.prototype;e.createExternalResources=function(){const a=new F.RibbonLineMaterial(this.materialParameters);this._handles.add(this.view.state.watch("camera",()=>{this.updateGeometry()}));const b=new D.LaserlineVisualElement({view:this.view,attached:this._laserlineEnabled});this._externalResources={material:a,laserline:b}};e.destroyExternalResources=function(){d.isSome(this._externalResources)&&this._externalResources.laserline.destroy();
this._externalResources=null;this._handles.removeAll()};e.forEachExternalMaterial=function(a){d.isSome(this._externalResources)&&a(this._externalResources.material)};e.createGeometries=function(a){var b=[g.create(),g.create()],c=3===this.extensionType;c&&b.push(g.create(),g.create());c=c?new Float32Array([1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]):null;b=E.createPolylineGeometry(b,null,c);a.addGeometry(b,d.unwrap(this._externalResources).material);this.updateVertices(b)};e.updateVisibility=function(a){v.prototype.updateVisibility.call(this,
a);d.isSome(this._externalResources)&&(this._externalResources.laserline.visible=a)};e.setStartEndFromWorldDownAtLocation=function(a){this._isWorldDown=!0;k.copy(this._start,a);this.view.renderCoordsHelper.worldUpAtPosition(a,this._end);k.subtract(this._end,a,this._end);q.fromPoints(this._start,this._end,this._ray);this.updateGeometry()};e.updateMaterial=function(){d.isNone(this._externalResources)||this._externalResources.material.setParameterValues(this.materialParameters)};e.updateGeometry=function(){d.isSome(this.object)&&
this.updateVertices(this.object.geometries[0])};e.updateVertices=function(a){const b=3===this._extensionType?this.updateLineSegmentFinite(A):this.updateLineSegmentInfinite(this._extensionType,A);this.updateVertexAttributes(a,b);d.isSome(this._externalResources)&&(this._externalResources.laserline.intersectsLine=b)};e.updateLineSegmentFinite=function(a){return f.fromPoints(this._start,this._end,a)};e.updateLineSegmentInfinite=function(a,b){var c=this.view.state.camera;p.fromRay(this._ray,h);switch(a){case 0:h.c0=
-Number.MAX_VALUE;break;case 1:case 2:var l=this._ray.origin;a=d.unwrapOr(this.view.elevationProvider.getElevation(l[0],l[1],l[2],this.view.renderCoordsHelper.spatialReference,"ground"),0);l=this.view.renderCoordsHelper.getAltitude(l);this._isWorldDown&&l<a&&k.negate(h.ray.direction,h.ray.direction);2===this._extensionType&&null!=a&&(h.c1=Math.abs(l-a))}if(!C.intersectClipRay(c.frustum,h))return f.fromPoints(this._start,this._end,b);c=p.getStart(h,m);a=p.getEnd(h,G);return f.fromPoints(c,a,b)};e.updateVertexAttributes=
function(a,b){a=a.getMutableAttribute("position").data;if(3===this.extensionType){var c=f.pointAt(b,-this.fadedExtensions.start,m);a[0]=c[0];a[1]=c[1];a[2]=c[2];c=f.pointAt(b,0,m);a[3]=c[0];a[4]=c[1];a[5]=c[2];c=f.pointAt(b,1,m);a[6]=c[0];a[7]=c[1];a[8]=c[2];b=f.pointAt(b,1+this.fadedExtensions.end,m);a[9]=b[0];a[10]=b[1];a[11]=b[2]}else c=f.pointAt(b,0,m),a[0]=c[0],a[1]=c[1],a[2]=c[2],b=f.pointAt(b,1,m),a[3]=b[0],a[4]=b[1],a[5]=b[2];d.isSome(this.object)&&this.object.geometryVertexAttrsUpdated(0)};
x._createClass(t,[{key:"start",get:function(){return this._start},set:function(a){this._isWorldDown=!1;k.exactEquals(this._start,a)||(k.copy(this._start,a),q.fromPoints(this._start,this._end,this._ray),this.updateGeometry())}},{key:"end",get:function(){return this._end},set:function(a){this._isWorldDown=!1;k.exactEquals(this._end,a)||(k.copy(this._end,a),q.fromPoints(this._start,this._end,this._ray),this.updateGeometry())}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&
(this._width=a,this.updateMaterial())}},{key:"color",get:function(){return this._color},set:function(a){n.exactEquals(a,this._color)||(n.copy(this._color,a),this.updateMaterial())}},{key:"polygonOffset",get:function(){return this._polygonOffset},set:function(a){a!==this._polygonOffset&&(this._polygonOffset=a,this.updateMaterial())}},{key:"writeDepthEnabled",get:function(){return this._writeDepthEnabled},set:function(a){this._writeDepthEnabled!==a&&(this._writeDepthEnabled=a,this.updateMaterial())}},
{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this.updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){n.exactEquals(a,this._innerColor)||(n.copy(this._innerColor,a),this.updateMaterial())}},{key:"stippleIntegerRepeats",get:function(){return this._stippleIntegerRepeats},set:function(a){a!==this._stippleIntegerRepeats&&(this._stippleIntegerRepeats=a,this.updateMaterial())}},{key:"stipplePattern",
get:function(){return this._stipplePattern},set:function(a){const b=d.isSome(a)!==d.isSome(this._stipplePattern);this._stipplePattern=a;b?this.recreate():this.updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){if(d.isNone(a)||d.isNone(this._stippleOffColor)||!n.exactEquals(a,this._stippleOffColor))this._stippleOffColor=d.isSome(a)?u.clone(a):null,this.updateMaterial()}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==this._falloff&&
(this._falloff=a,this.updateMaterial())}},{key:"extensionType",get:function(){return this._extensionType},set:function(a){a!==this._extensionType&&(this._extensionType=a,this.updateGeometry())}},{key:"_laserlineAttached",get:function(){return this._laserlineEnabled&&d.isSome(this._laserlineStyle)}},{key:"laserlineStyle",get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;d.isSome(this._externalResources)&&(this._externalResources.laserline.attached=this._laserlineAttached,
d.isSome(a)&&(this._externalResources.laserline.style=a))}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,d.isSome(this._externalResources)&&(this._externalResources.laserline.attached=this._laserlineAttached))}},{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this.updateMaterial())}},{key:"fadedExtensions",get:function(){return this._fadedExtensions},
set:function(a){this._fadedExtensions=d.unwrapOr(a,z);this.recreateGeometry()}},{key:"materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stippleIntegerRepeats:this._stippleIntegerRepeats,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}}]);return t}(r.Object3DVisualElement);
const h=p.create(),m=g.create(),G=g.create(),A=f.create();r=1/3;const z={start:r,end:r};w.ExtendedLineVisualElement=y;Object.defineProperty(w,"__esModule",{value:!0})});