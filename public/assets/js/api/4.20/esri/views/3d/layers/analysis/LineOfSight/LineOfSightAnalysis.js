// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64".split(" "),function(a,k,d,l,e,n,p,q,r,m,b){a.LineOfSightAnalysis=function(g){function f(c){c=g.call(this,c)||
this;c.inputPoints={isValid:!1,observer:b.create(),target:b.create(),observerAdjusted:b.create(),targetAdjusted:b.create()};c.computationResult={start:b.create(),end:b.create(),intersection:b.create(),isValid:!1,isTargetVisible:!1};c.result=null;return c}k._inheritsLoose(f,g);var h=f.prototype;h.updateComputationResults=function(){this.notifyChange("computationResult")};h.updateInputPoints=function(){this.notifyChange("inputPoints")};return f}(l);d.__decorate([e.property()],a.LineOfSightAnalysis.prototype,
"target",void 0);d.__decorate([e.property()],a.LineOfSightAnalysis.prototype,"inputPoints",void 0);d.__decorate([e.property()],a.LineOfSightAnalysis.prototype,"computationResult",void 0);d.__decorate([e.property()],a.LineOfSightAnalysis.prototype,"result",void 0);a.LineOfSightAnalysis=d.__decorate([m.subclass("esri.views.3d.layers.analysis.LineOfSight.LineOfSightAnalysis")],a.LineOfSightAnalysis);Object.defineProperty(a,"__esModule",{value:!0})});