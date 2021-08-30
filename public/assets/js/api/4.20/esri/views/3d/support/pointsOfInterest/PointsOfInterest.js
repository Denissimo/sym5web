// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/ray ../debugFlags ../debugUtils ../PropertiesPool ../geometryUtils/ray ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/verticalOffsetUtils ../../../support/Scheduler".split(" "),
function(c,u,d,F,G,q,v,e,U,V,W,X,H,r,y,z,I,m,J,K,A,w,L,M,N,O,B,P,n){c.PointsOfInterest=function(C){function t(a){a=C.call(this,a)||this;a._handles=new G;a._tmpRay=z.create();a._centerRayDirty=!0;a._surfaceAltitudeAtCenter=0;a._surfaceAltitudeAtCenterDirty=!0;a._contentAltitudeAtCenter=0;a._contentAltitudeAtCenterDirty=!0;a._propertiesPool=new J.PropertiesPool({renderPointOfView:Q},u._assertThisInitialized(a));a.renderPointOfView=y.create();a._pois=[];a._debugCenters=new Map;return a}u._inheritsLoose(t,
C);var g=t.prototype;g.initialize=function(){var a;const {state:b,basemapTerrain:f,renderCoordsHelper:p,map:D}=this.view;this._surfaceIntersector=new B.Intersector(b.viewingMode);this._surfaceIntersector.options.backfacesTerrain=b.isGlobal?!1:!0;this._surfaceIntersector.options.invisibleTerrain=!1;this._surfaceIntersector.options.store=0;this._contentIntersector=new B.Intersector(b.viewingMode);var h=()=>this._estimateSurfaceAltitudeAtCenter();const E=this.view.resourceController.scheduler,x=q.unwrap(null==
(a=this.view.basemapTerrain)?void 0:a.elevationQueryCache);a={state:b,scheduler:E,surface:f,renderCoordsHelper:p};this._set("centerOnSurfaceInfrequent",new w["default"]({...a,task:n.TaskPriority.POINT_OF_INTEREST_INFREQUENT,estimateSurfaceAltitudeAtCenter:h}));this._set("centerOnSurfaceFrequent",new w["default"]({...a,task:n.TaskPriority.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:h}));this._set("centerOnContent",new w["default"]({...a,task:n.TaskPriority.POINT_OF_INTEREST_FREQUENT,
estimateSurfaceAltitudeAtCenter:()=>this._estimateContentAltitudeAtCenter()}));this._set("cameraOnSurface",new A["default"]({...a,cache:x,task:n.TaskPriority.POINT_OF_INTEREST_INFREQUENT,map:D}));this._set("contentCameraOnSurface",new A["default"]({...a,cache:x,task:n.TaskPriority.POINT_OF_INTEREST_INFREQUENT,map:D,cameraName:"contentCamera"}));this._set("surfaceGeometryUpdates",new O["default"]({...a,centerOnSurfaces:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]}));
this._set("contentGeometryUpdates",new L.ContentGeometryUpdates({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:p}));this._set("surfaceOrigin",new N.StableSurfaceCenter({cache:x,view:this.view}));this._set("focus",new M["default"]({state:b,scheduler:E,surface:f,renderCoordsHelper:p,centerOnSurface:this.centerOnSurfaceFrequent,estimateSurfaceIntersectionAtRenderPoint:(k,R)=>this._estimateSurfaceIntersectionAtRenderPoint(k,R)}));this._pois.push(this.centerOnContent,this.centerOnSurfaceFrequent,
this.centerOnSurfaceInfrequent,this.cameraOnSurface,this.contentCameraOnSurface,this.focus);h=this.view.graphics;this._debugCenters.set(this.centerOnContent,new m.GraphicsHandle(h,"red","CenterOnContent"));this._debugCenters.set(this.centerOnSurfaceFrequent,new m.GraphicsHandle(h,"red","CenterOnSurface"));this._debugCenters.set(this.cameraOnSurface,new m.GraphicsHandle(h,"blue","CameraOnSurface"));this._debugCenters.set(this.contentCameraOnSurface,new m.GraphicsHandle(h,"blue","CameraOfInterestOnSurface"));
this._debugCenters.set(this.focus,new m.GraphicsHandle(h,"green","Focus"));this._handles.add([b.watch("camera",k=>this._cameraChanged(k),!0),f.watch("extent",()=>this._updateCenterPointsOfInterest()),v.whenFalse(f,"updating",()=>this._updateCenterPointsOfInterest(),!0),this.surfaceGeometryUpdates.events.on("request-update",()=>this._updateCenterPointsOfInterest()),this.contentGeometryUpdates.events.on("request-update",()=>this._updateCenterOnContent()),v.init(I,"SHOW_POI",k=>this._setDebug(k))]);
this._cameraChanged(this.view.state.camera);for(const k of this._pois)k.runTask()};g.destroy=function(){this._setDebug(!1);this._handles.destroy();this._propertiesPool.destroy();for(const a of this._pois)a.destroy();this.surfaceOrigin.destroy()};g._estimateContentAltitudeAtCenter=function(){if(!this._contentAltitudeAtCenterDirty)return this._contentAltitudeAtCenter;this._contentAltitudeAtCenterDirty=!1;const a=this.centerRay;if(q.isNone(a))return this._contentAltitudeAtCenter;this.view.sceneIntersectionHelper.intersectRay(a,
this._contentIntersector,l,S)?this._contentAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(l):this._contentAltitudeAtCenter=this._estimateSurfaceAltitudeAtCenter();return this._contentAltitudeAtCenter};g._estimateSurfaceAltitudeAtCenter=function(){if(!this.view.basemapTerrain)return 0;if(!this._surfaceAltitudeAtCenterDirty)return this._surfaceAltitudeAtCenter;this._surfaceAltitudeAtCenterDirty=!1;const a=this.centerRay;if(q.isNone(a))return this._surfaceAltitudeAtCenter;const b=a.origin,
f=r.add(l,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a);this._surfaceIntersector.camera=this.view.state.camera;this.view.basemapTerrain.intersect(this._surfaceIntersector,null,b,f);this._surfaceIntersector.results.min.getIntersectionPoint(l)&&(this._surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(l));return this._surfaceAltitudeAtCenter};g._estimateSurfaceIntersectionAtRenderPoint=function(a,b){a=K.fromRenderAtEye(this.view.state.camera,a,T);if(q.isNone(a))return null;
const f=a.origin,p=r.add(l,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a);this._surfaceIntersector.camera=this.view.state.camera;this.view.basemapTerrain.intersect(this._surfaceIntersector,null,f,p);return this._surfaceIntersector.results.min.getIntersectionPoint(b)?b:null};g._cameraChanged=function(a){this._updateCenterPointsOfInterest();a=a.eye;r.exactEquals(this.renderPointOfView,a)||this._set("renderPointOfView",r.copy(this._propertiesPool.get("renderPointOfView"),a))};g._updateCenterPointsOfInterest=
function(){this._contentAltitudeAtCenterDirty=this._surfaceAltitudeAtCenterDirty=this._centerRayDirty=!0;for(const a of this._pois)a.updateRenderLocation()};g._updateCenterOnContent=function(){this._contentAltitudeAtCenterDirty=!0;this.centerOnContent.updateRenderLocation()};g._setDebug=function(a){if(a)for(const b of this._pois)this._handles.add(v.init(b,"renderLocation",f=>this._debugCenters.get(b).showPoint(f,b.renderCoordsHelper.spatialReference)),"debug");else this._debugCenters.forEach(b=>b.remove()),
this._handles.remove("debug")};u._createClass(t,[{key:"updating",get:function(){var a;return!!(null!=(a=this.surfaceGeometryUpdates)&&a.updating||this._pois.some(b=>b.updating))}},{key:"centerRay",get:function(){this._centerRayDirty&&(this._centerRay=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(this.view.state.camera,this._tmpRay),this._centerRayDirty=!1);return this._centerRay}},{key:"test",get:function(){return{update:()=>{this.surfaceGeometryUpdates.runTask();for(const a of this._pois)a.runTask()},
surfaceGeometryUpdates:this.surfaceGeometryUpdates}}}]);return t}(F);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"centerOnContent",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"centerOnSurfaceFrequent",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"centerOnSurfaceInfrequent",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"cameraOnSurface",void 0);d.__decorate([e.property({readOnly:!0})],
c.PointsOfInterest.prototype,"contentCameraOnSurface",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"focus",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"renderPointOfView",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"surfaceOrigin",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"contentGeometryUpdates",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,
"surfaceGeometryUpdates",void 0);d.__decorate([e.property({constructOnly:!0})],c.PointsOfInterest.prototype,"view",void 0);d.__decorate([e.property({readOnly:!0})],c.PointsOfInterest.prototype,"updating",null);c.PointsOfInterest=d.__decorate([H.subclass("esri.views.3d.support.PointsOfInterest")],c.PointsOfInterest);const Q=Array,l=y.create(),T=z.create(),S={exclude:new Set([P.TERRAIN_ID])};c.default=c.PointsOfInterest;Object.defineProperty(c,"__esModule",{value:!0})});