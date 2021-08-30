// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Point ./queryEngineUtils".split(" "),function(b,d,e,n,p,g,v,w,x,y,q,r,t){b.FeatureCollectionSnappingSource=function(h){function c(f){return h.call(this,
f)||this}d._inheritsLoose(c,h);var k=c.prototype;k.refresh=function(){};k.fetchCandidates=function(){var f=d._asyncToGenerator(function*(a,l){const m=this.layerSource.layer.source;return m.querySnapping?(yield m.querySnapping({distance:a.distance,point:a.coordinateHelper.toPoint(a.point,new r).toJSON(),types:a.types,query:p.isSome(a.filter)?a.filter.createQuery().toJSON():{where:"1\x3d1"}},{signal:l})).candidates.map(u=>t.convertSnappingCandidate(u,a.coordinateHelper)):[]});return function(a,l){return f.apply(this,
arguments)}}();d._createClass(c,[{key:"availability",get:function(){return 1}}]);return c}(n);e.__decorate([g.property({constructOnly:!0})],b.FeatureCollectionSnappingSource.prototype,"layerSource",void 0);e.__decorate([g.property({readOnly:!0})],b.FeatureCollectionSnappingSource.prototype,"availability",null);b.FeatureCollectionSnappingSource=e.__decorate([q.subclass("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],b.FeatureCollectionSnappingSource);Object.defineProperty(b,
"__esModule",{value:!0})});