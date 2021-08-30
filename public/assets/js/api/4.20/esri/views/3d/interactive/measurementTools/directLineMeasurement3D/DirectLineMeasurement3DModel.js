// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/DirectLineMeasurementLayer".split(" "),function(b,k,c,m,n,h,d,
r,t,u,v,p,q){b.DirectLineMeasurement3DModel=function(l){function g(){var a=l.apply(this,arguments)||this;a._handles=new n;a.layer=new q({visible:!1,listMode:"hide"});a.cursorPoint=null;a.state="initial";a.active=!1;return a}k._inheritsLoose(g,l);var e=g.prototype;e.initialize=function(){this.sceneView.map.add(this.layer);this.reset()};e.destroy=function(){this._handles=h.destroyMaybe(this._handles);this.sceneView.map.remove(this.layer);this.layer.destroy()};e.reset=function(){this.clearMeasurement()};
e.clearMeasurement=function(){this.state="initial";this.cursorPoint=this.endPoint=this.startPoint=null;this._clearOverride("measurementSurfaceLocation")};e.finishMeasurement=function(){if(!this._isOverridden("measurementSurfaceLocation")){const a=this.measurementSurfaceLocation;this._override("measurementSurfaceLocation","camera-dependent"===a?this.sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":a)}this.state="measured"};k._createClass(g,[{key:"startPoint",get:function(){return this.layer.startPoint},
set:function(a){this.layer.startPoint=a}},{key:"startPointSurfaceLocation",set:function(a){this._set("startPointSurfaceLocation",a)}},{key:"endPoint",get:function(){return this.layer.endPoint},set:function(a){this.layer.endPoint=a}},{key:"endPointSurfaceLocation",set:function(a){this._set("endPointSurfaceLocation",a)}},{key:"measurementSurfaceLocation",get:function(){const a=this.startPointSurfaceLocation,f=this.endPointSurfaceLocation;return null==a||null==f||"above-the-surface"===a&&"below-the-surface"===
f||"below-the-surface"===a&&"above-the-surface"===f||"on-the-surface"===a&&"on-the-surface"===f?"camera-dependent":"above-the-surface"===a||"above-the-surface"===f?"above-the-surface":"below-the-surface"}},{key:"validMeasurement",get:function(){return h.isSome(this.layer.startPoint)&&h.isSome(this.layer.endPoint)}},{key:"isMeasuring",get:function(){return!!this.startPoint}}]);return g}(m);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"messages",void 0);c.__decorate([d.property({constructOnly:!0})],
b.DirectLineMeasurement3DModel.prototype,"sceneView",void 0);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"layer",void 0);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"startPoint",null);c.__decorate([d.property({value:null})],b.DirectLineMeasurement3DModel.prototype,"startPointSurfaceLocation",null);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"endPoint",null);c.__decorate([d.property({value:null})],b.DirectLineMeasurement3DModel.prototype,
"endPointSurfaceLocation",null);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"measurementSurfaceLocation",null);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"cursorPoint",void 0);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"state",void 0);c.__decorate([d.property()],b.DirectLineMeasurement3DModel.prototype,"active",void 0);c.__decorate([d.property({readOnly:!0})],b.DirectLineMeasurement3DModel.prototype,"validMeasurement",null);
c.__decorate([d.property({readOnly:!0})],b.DirectLineMeasurement3DModel.prototype,"isMeasuring",null);b.DirectLineMeasurement3DModel=c.__decorate([p.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DModel")],b.DirectLineMeasurement3DModel);Object.defineProperty(b,"__esModule",{value:!0})});