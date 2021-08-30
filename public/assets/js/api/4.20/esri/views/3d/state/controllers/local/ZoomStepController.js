// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/time ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../support/featureFlags ../../../camera/constraintUtils ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../../animation/easing".split(" "),
function(g,q,r,t,A,B,C,D,E,u,d,f,v,w,x,m,y,z){g.ZoomStepController=function(n){function k(){var b=n.apply(this,arguments)||this;b.zoomLocation=f.create();b.tmpCamera=new m;b.tmpRayDir=f.create();b.tmpCenter=f.create();b.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new m,interactionDirection:null,tiltMode:0};return b}q._inheritsLoose(k,n);var l=k.prototype;l.zoomStep=function(b,c){if(this.active){var a=this.view.state,{interactionStartCamera:e}=this.constraintOptions;
this.animation.finished?e.copyFrom(a.camera):this.animation.cameraAt(1,e);this.tmpCamera.copyFrom(a.camera);a=new y.Intersector(this.view.state.viewingMode);0<b?(this.intersectionHelper.intersectScreenFreePointFallback(c,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,a,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,a,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:d.copy(this.zoomLocation,this.tmpCamera.center);
b=.6**b;!v.disableContextNavigation()&&(c=this.view._stage.renderView.getMinimalDepthForArea(c[0],c[1],this.view.state.camera,60),a=Math.max(14*Math.abs(this.view.camera.position.z),20),c=c?Math.min(c,a):a)&&(a=f.create(),d.subtract(a,this.zoomLocation,this.tmpCamera.eye),c<d.length(a)&&(d.normalize(a,a),d.add(this.zoomLocation,this.tmpCamera.eye,d.scale(a,a,c))));this.updateCamera(this.tmpCamera,b,this.zoomLocation);this.begin(this.tmpCamera)}};l.animationSettings=function(){return{apex:null,duration:t.Milliseconds(600),
easing:z.outExpo}};l.updateCamera=function(b,c,a){d.subtract(this.tmpRayDir,a,b.eye);const e=d.length(this.tmpRayDir);let h=e*c;1>=c&&4>h&&(h=4,c=h/e);1E-6>Math.abs(e-h)||(d.scale(this.tmpRayDir,this.tmpRayDir,c),b.eye=d.subtract(p,a,this.tmpRayDir),b.center=d.lerp(p,b.center,a,1-c),w.applyAll(this.view,b,this.constraintOptions))};return k}(x.PointToPointAnimationController);g.ZoomStepController=r.__decorate([u.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],g.ZoomStepController);
const p=f.create();Object.defineProperty(g,"__esModule",{value:!0})});