// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/mathUtils ../../../../geometry/support/ray ../../../../chunks/sphere ../../../../geometry/support/vectorStacks ../../camera/constraintUtils/surfaceCollision ../../../../geometry/projectionEllipsoid ../../camera/intersectionUtils ./CameraController".split(" "),
function(b,g,e,l,h,q,r,t,u,m,v,w,x,y,n,z,p,f){b.SurfaceCollisionCorrectionController=function(k){function d(a){a=k.call(this,a)||this;a.handles=new l;return a}g._inheritsLoose(d,k);var c=d.prototype;c.onControllerStart=function(){this.state=f.State.Running;this.handles.add(this.view.basemapTerrain.on("elevation-change",a=>this.handleElevationChangeEvent(a)));this.applyCorrection()};c.onControllerEnd=function(){this.handles.removeAll()};c.stepController=function(){};c.handleElevationChangeEvent=function(a){p.eyeWithinExtent(this.view,
this.desiredCamera,a.extent,a.spatialReference)&&this.applyCorrection()};c.applyCorrection=function(){this.view.state.updateCamera(a=>{a.copyViewFrom(this.desiredCamera);n.applySurfaceCollisionConstraint(this.view,a,1)||this.constraintEnabled||(this.state=f.State.Stopped)})};g._createClass(d,[{key:"desiredCamera",set:function(a){this._set("desiredCamera",a.clone())}},{key:"canStop",get:function(){return!0}},{key:"constraintEnabled",get:function(){return this.view.state.constraints.collision.enabled}}]);
return d}(f.CameraController);e.__decorate([h.property({constructOnly:!0})],b.SurfaceCollisionCorrectionController.prototype,"view",void 0);e.__decorate([h.property({constructOnly:!0})],b.SurfaceCollisionCorrectionController.prototype,"desiredCamera",null);b.SurfaceCollisionCorrectionController=e.__decorate([m.subclass("esri.views.3d.state.controllers.SurfaceCollisionCorrectionController")],b.SurfaceCollisionCorrectionController);Object.defineProperty(b,"__esModule",{value:!0})});