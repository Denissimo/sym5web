// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/PointSnappingHint"],function(d,e,g,a,h){a=function(f){function b(c){return f.call(this,{...c,constraint:new g.PointConstraint(c.coordinateHelper,c.targetPoint)})||this}e._inheritsLoose(b,f);e._createClass(b,[{key:"hints",get:function(){return[new h.PointSnappingHint(this.targetPoint)]}}]);return b}(a.FeatureSnappingCandidate);d.VertexSnappingCandidate=a;Object.defineProperty(d,
"__esModule",{value:!0})});