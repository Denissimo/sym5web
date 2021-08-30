// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ./MomentumController".split(" "),function(b,l,f,m,q,r,t,u,n,d,g,p){b.PanPlanarMomentumController=function(h){function e(a){a=
h.call(this,a)||this;a.interactionType=4;a.tmpPan=g.create();return a}l._inheritsLoose(e,h);e.prototype.momentumStep=function(a,c){a=this.momentum.value(a);d.scale(this.tmpPan,this.momentum.direction,a);c.eye=d.subtract(k,c.eye,this.tmpPan);c.center=d.subtract(k,c.center,this.tmpPan);this.constraintOptions.interactionDirection=this.tmpPan};return e}(p.MomentumController);f.__decorate([m.property({constructOnly:!0})],b.PanPlanarMomentumController.prototype,"momentum",void 0);b.PanPlanarMomentumController=
f.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.PanPlanarMomentumController")],b.PanPlanarMomentumController);const k=g.create();Object.defineProperty(b,"__esModule",{value:!0})});