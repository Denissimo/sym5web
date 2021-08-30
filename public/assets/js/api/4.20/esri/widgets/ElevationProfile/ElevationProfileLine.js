// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/arrayUtils ../../core/Evented ../../core/handleUtils ../../core/maybe ../../core/memoize ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/trackingUtils ../../geometry/Point ./support/constants ./support/unitUtils".split(" "),
function(b,l,c,m,v,w,x,f,n,y,d,F,G,H,I,z,p,A,B,q){b.ElevationProfileLine=function(r){function k(a){a=r.call(this,a)||this;a.type=null;a.id=y.generateUUID();a.title=null;a.color=new m("#000000");a.visible=!0;a._getSamplesMemoized=n.memoize((e,g)=>q.convertSamples(e,g));a._getStatisticsMemoized=n.memoize((e,g)=>q.convertStatistics(e,g));a.viewVisualizationEnabled=!0;a.result=null;a.effectiveUnits=null;a.numSamplesForPreview=30;a.numSamplesPerChunk=200;a.chartFillEnabled=!0;a.chartStrokeWidth=1.5;a.chartStrokeOffsetY=
0;return a}l._inheritsLoose(k,r);var h=k.prototype;h.queryElevation=function(){throw Error("not implemented");};h.attach=function(a){this._viewModel=a;return x.handlesGroup([p.reactionInit(()=>a.effectiveUnits,e=>{this.effectiveUnits=e}),p.reaction(()=>[a.input],()=>this._onChange())])};h.toggleVisibility=function(a){this.visible=void 0===a?!this.visible:a};h._onChange=function(){this.emit("change")};h._getPoint=function(a){const {samples:e,result:g}=this;if(f.isNone(e)||f.isNone(g))return null;const t=
e.length;if(0===t)return null;const {x:C,y:D,z:u}=v.binaryFindClosest(e,a*e[t-1].distance,E=>E.distance);return f.isNone(u)?null:new A({x:C,y:D,z:u,spatialReference:g.spatialReference})};l._createClass(k,[{key:"progress",get:function(){return f.isSome(this.result)&&this.visible?this.result.progress:0}},{key:"samples",get:function(){return this._getSamplesMemoized(this.result,this.effectiveUnits)}},{key:"statistics",get:function(){return this._getStatisticsMemoized(this.result,this.effectiveUnits)}},
{key:"hoveredPoint",get:function(){return f.applySome(this._viewModel.hoveredChartPosition,a=>this._getPoint(a))}},{key:"available",get:function(){return!0}},{key:"hasZ",get:function(){const a=this.result;return f.isSome(a)&&a.hasZ}},{key:"minDemResolution",get:function(){return B.DEFAULT_DEM_RESOLUTION}}]);return k}(w.EventedAccessor);c.__decorate([d.property({nonNullable:!0})],b.ElevationProfileLine.prototype,"id",void 0);c.__decorate([d.property({nonNullable:!0})],b.ElevationProfileLine.prototype,
"title",void 0);c.__decorate([d.property({type:m,nonNullable:!0})],b.ElevationProfileLine.prototype,"color",void 0);c.__decorate([d.property({nonNullable:!0})],b.ElevationProfileLine.prototype,"visible",void 0);c.__decorate([d.property({readOnly:!0})],b.ElevationProfileLine.prototype,"progress",null);c.__decorate([d.property({readOnly:!0})],b.ElevationProfileLine.prototype,"samples",null);c.__decorate([d.property({readOnly:!0})],b.ElevationProfileLine.prototype,"statistics",null);c.__decorate([d.property()],
b.ElevationProfileLine.prototype,"hoveredPoint",null);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"viewVisualizationEnabled",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"available",null);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"result",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"effectiveUnits",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"numSamplesForPreview",void 0);c.__decorate([d.property()],
b.ElevationProfileLine.prototype,"numSamplesPerChunk",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"chartFillEnabled",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"chartStrokeWidth",void 0);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"chartStrokeOffsetY",void 0);c.__decorate([d.property({readOnly:!0})],b.ElevationProfileLine.prototype,"hasZ",null);c.__decorate([d.property({readOnly:!0})],b.ElevationProfileLine.prototype,"minDemResolution",
null);c.__decorate([d.property()],b.ElevationProfileLine.prototype,"_viewModel",void 0);b.ElevationProfileLine=c.__decorate([z.subclass("esri.widgets.ElevationProfile.ElevationProfileLine")],b.ElevationProfileLine);b.default=b.ElevationProfileLine;Object.defineProperty(b,"__esModule",{value:!0})});