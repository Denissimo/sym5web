// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/contains ../../../geometry/support/near ../../../geometry/support/webMercatorUtils".split(" "),function(c,h,d,q,r,f,w,x,y,t,k,l,u,m){var g;
const v=r.getLogger("esri.views.MapView");c.GeometryConstraint=g=function(n){function e(a){a=n.call(this,a)||this;a.geometry=null;a.spatialReference=null;return a}h._inheritsLoose(e,n);var p=e.prototype;p.constrain=function(a,b){if(!this.normalizedGeometry)return a;b=a.targetGeometry;if("extent"===this.normalizedGeometry.type?l.extentContainsPoint(this.normalizedGeometry,b):l.polygonContainsPoint(this.normalizedGeometry,b))return a;({coordinate:b}=u.nearestCoordinate(this.normalizedGeometry,b));if(!b)return a;
a.targetGeometry=b;return a};p.clone=function(){var a,b;return new g({geometry:null==(a=this.geometry)?void 0:a.clone(),spatialReference:null==(b=this.spatialReference)?void 0:b.clone()})};h._createClass(e,[{key:"normalizedGeometry",get:function(){if(!this.geometry||!this.spatialReference)return null;if(!this.spatialReference.equals(this.geometry.spatialReference)){if(m.canProject(this.geometry,this.spatialReference))return m.project(this.geometry,this.spatialReference);if(k.isLoaded())return k.project(this.geometry,
this.spatialReference);v.error("#constraints.geometry","unsupported coordinate system. The source geometry cannot be projected to the view's coordinate system. The projection engine cannot be loaded.",{geometry:this.geometry});return null}return this.geometry}}]);return e}(q);d.__decorate([f.property({constructOnly:!0})],c.GeometryConstraint.prototype,"geometry",void 0);d.__decorate([f.property({readOnly:!0})],c.GeometryConstraint.prototype,"normalizedGeometry",null);d.__decorate([f.property({constructOnly:!0})],
c.GeometryConstraint.prototype,"spatialReference",void 0);c.GeometryConstraint=g=d.__decorate([t.subclass("esri.views.2d.constraints.GeometryConstraint")],c.GeometryConstraint);Object.defineProperty(c,"__esModule",{value:!0})});