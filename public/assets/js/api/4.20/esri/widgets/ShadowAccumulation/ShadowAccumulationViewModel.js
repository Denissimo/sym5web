// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/has ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/trackingUtils ../../chunks/vec3f64 ../../views/3d/support/earthUtils ../../views/3d/support/sunUtils ./DiscreteOptions ./DurationOptions ./ShadowTooltipViewModel ./ThresholdOptions ../support/traversalUtils".split(" "),
function(t,e,u,d,N,E,g,v,x,n,f,O,P,Q,F,p,y,G,H,z,A,I,B,J){function w(q){if(q.suspended)return!1;switch(q.type){case "building-scene-3d":case "csv-3d":case "elevation-3d":case "feature-3d":case "geojson-3d":case "graphics-3d":case "integrated-mesh-3d":case "ogc-feature-3d":case "scene-layer-3d":case "scene-layer-graphics-3d":case "slice-3d":case "stream-3d":case "wms-3d":return!0;case "area-measurement-3d":case "base-dynamic-3d":case "direct-line-measurement-3d":case "imagery-3d":case "imagery-tile-3d":case "line-of-sight-3d":case "map-image-3d":case "point-cloud-3d":case "tile-3d":case "vector-tile-3d":case "voxel-3d":case "wfs-3d":case "wmts-3d":case "voxel-3d":return!1;
case "group":return q.layerViews.toArray().some(r=>w(r));default:return!1}}const C=[],K=y.create(),D=[],L=n.convertTime(1,"hours","milliseconds");d=function(q){function r(a){var b=q.call(this,a)||this;b.view=null;b.tooltip=new I.ShadowTooltipViewModel({getDuration:(c,h)=>b.getDuration(c,h)});b.startTimeOfDay=n.convertTime(10,"hours","milliseconds");b.endTimeOfDay=n.convertTime(16,"hours","milliseconds");b.visualizationType="threshold";b.thresholdOptions=new B;b.durationOptions=new A;b.discreteOptions=
new z;b._running=!0;b._handles=new E;b._stopPreviewingTask=null;b._forcePreview=null;b._autoRestoreForcePreviewEnabled=!0;b._utcOffset=null;b.date=new Date;return b}t._inheritsLoose(r,q);var l=r.prototype;l.initialize=function(){var a=this;this._handles.add([p.reactionInit(()=>({view:this.view,tooltipEnabled:this._tooltipEnabled}),({view:b,tooltipEnabled:c})=>{this.tooltip.view=b;this.tooltip.enabled=c}),p.reactionInit(()=>this._getForcePreviewDependencies(),()=>{g.abortMaybe(this._stopPreviewingTask);
this._forcePreview=!0;this._autoRestoreForcePreviewEnabled&&(this._stopPreviewingTask=v.createTask(function(){var b=t._asyncToGenerator(function*(c){yield v.after(300,c);v.throwIfAborted(c);a._forcePreview=!1});return function(c){return b.apply(this,arguments)}}()))}),p.autorun(()=>this._updateVisualizationParameters()),p.autorun(()=>this._setShadowAccumulationParameters({lightDirections:this._lightDirections})),p.autorun(()=>this._setShadowAccumulationParameters({enabled:this._running})),p.autorun(()=>
this._setShadowAccumulationParameters({previewing:this._previewing}))])};l.destroy=function(){this.stop();this._handles=g.destroyMaybe(this._handles);g.destroyMaybe(this.tooltip)};l.start=function(){this._running=!0};l.stop=function(){this._running=!1};l.setRunning=function(a){this._running=a};l.getDuration=function(){var a=t._asyncToGenerator(function*(b,c){const {view:h,_renderView:m}=this;if(g.isNone(h)||g.isNone(m))return 0;b=h.state.camera.screenToRender(x.createScreenPointArray(b.x,b.y),x.createRenderScreenPointArray());
b=m.readAccumulatedShadow(b);c=this._sampleCount;return 0===c?0:this._duration/c*c*b});return function(b,c){return a.apply(this,arguments)}}();l._setShadowAccumulationParameters=function(a){const b=this._renderView;g.isNone(b)||b.setRenderParameters({shadowAccumulationOptions:a})};l._updateVisualizationParameters=function(){if(this._running)switch(this.visualizationType){case "threshold":this._updateThresholdVisualizationParameters();break;case "duration":this._updateDurationVisualizationParameters();
break;case "discrete":this._updateDiscreteVisualizationParameters()}};l._updateThresholdVisualizationParameters=function(){const {value:a,color:b}=this.thresholdOptions,c=this._duration,h=b.clone();h.a=0;this._setShadowAccumulationParameters({visualization:1,thresholdColors:[u.toUnitRGBA(h),u.toUnitRGBA(b)],threshold:0<c?a/this._duration:0})};l._updateDurationVisualizationParameters=function(){const {color:a,mode:b}=this.durationOptions;this._updateGradientColorRamp(a);var c=this._duration;c=0<c&&
"hourly"===b?L/c:0;this._setShadowAccumulationParameters({visualization:0,bandsEnabled:0<c,bandSize:c})};l._updateDiscreteVisualizationParameters=function(){this._updateGradientColorRamp(this.discreteOptions.color);this._setShadowAccumulationParameters({visualization:0,bandsEnabled:!1,bandSize:0})};l._updateGradientColorRamp=function(a){const b=a.clone();b.a=0;a=[u.toUnitRGBA(b),u.toUnitRGBA(a)];this._setShadowAccumulationParameters({gradientColorRamp:a})};l._getForcePreviewDependencies=function(){var {view:a}=
this;if(g.isNone(a))return null;const b=a.slicePlane;var c=a.allLayerViews.toArray().filter(w),h=c.map(k=>k.layer).filter(g.isSome);a=c.map(k=>k.visible);const m=h.map(k=>k.visible),M=h.map(k=>k.opacity);h=h.filter(function(k){return"definitionExpression"in k}).map(k=>k.definitionExpression);c=c.filter(function(k){return"filter"in k}).map(k=>k.filter);return{slicePlane:b,startDateUTC:this._startDateTimeUTC,endDateUTC:this._endDateTimeUTC,layerViewVisibilities:a,layerVisibilities:m,layerOpacities:M,
filters:c,definitionExpressions:h}};t._createClass(r,[{key:"state",get:function(){return g.isSome(this.view)&&this.view.ready&&g.isSome(this._referencePosition)?"ready":"disabled"}},{key:"date",set:function(a){a=new Date(a);a.setHours(0,0,0,0);this._set("date",a)}},{key:"utcOffset",get:function(){return g.unwrapOr(this._utcOffset,this._utcOffsetAuto)},set:function(a){this._utcOffset=a}},{key:"testData",get:function(){return{setAutoRestoreForcedPreviewEnabled:a=>{this._autoRestoreForcePreviewEnabled=
a},setForcedPreview:a=>{this._forcePreview=a},isPreviewing:()=>this._previewing}}},{key:"_previewing",get:function(){const {view:a}=this;return g.isNone(a)||g.isNone(a.allLayerViews)?!0:this._forcePreview||!a.stationary||a.allLayerViews.some(b=>w(b)&&b.updating)}},{key:"_utcOffsetAuto",get:function(){return g.mapOr(this._referencePosition,0,a=>G.longitudeToTimezone(a[0],!1))}},{key:"_dateUTCOffset",get:function(){let a=this.date;a=n.offsetDateUTC(a,-a.getTimezoneOffset(),"minutes");return a=n.offsetDateUTC(a,
-this.utcOffset,"hours")}},{key:"_startDateTimeUTC",get:function(){return n.offsetDateUTC(this._dateUTCOffset,this.startTimeOfDay)}},{key:"_endDateTimeUTC",get:function(){return n.offsetDateUTC(this._dateUTCOffset,this.endTimeOfDay)}},{key:"_referencePosition",get:function(){return g.applySome(this.view,a=>g.applySome(a.environmentManager,b=>b.referencePositionWGS84Comparable))}},{key:"_sampleCount",get:function(){switch(this.visualizationType){case "threshold":case "duration":return 255;case "discrete":{const a=
this.discreteOptions.interval;return 0<a?Math.floor(this._duration/a):255}}}},{key:"_duration",get:function(){return this.endTimeOfDay-this.startTimeOfDay}},{key:"_lightDirections",get:function(){var {view:a}=this;if(g.isNone(a))return C;var b="global"===a.viewingMode?K:this._referencePosition;if(g.isNone(b))return C;const c=this._sampleCount,h=Array(c);for(var m=0;m<c;++m)h[m]=y.create();H.computeDirectionsOverTime(this._startDateTimeUTC,this._endDateTimeUTC,b,a.viewingMode,h);D.length=0;a=J.breadthFirstBinaryPartitioning(0,
c,D);b=Array(c);for(m=0;m<c;++m)b[m]=h[a[m]];return b}},{key:"_tooltipEnabled",get:function(){return"ready"===this.state&&"discrete"!==this.visualizationType&&this._running&&!this._previewing}},{key:"_renderView",get:function(){var {view:a}=this;if(g.isNone(a))return null;a=a._stage;return g.isNone(a)?null:a.renderView}}]);return r}(d);e.__decorate([f.property()],d.prototype,"state",null);e.__decorate([f.property()],d.prototype,"view",void 0);e.__decorate([f.property()],d.prototype,"tooltip",void 0);
e.__decorate([f.property({nonNullable:!0})],d.prototype,"date",null);e.__decorate([f.property({nonNullable:!0})],d.prototype,"utcOffset",null);e.__decorate([f.property({nonNullable:!0})],d.prototype,"startTimeOfDay",void 0);e.__decorate([f.property({nonNullable:!0})],d.prototype,"endTimeOfDay",void 0);e.__decorate([f.property({nonNullable:!0})],d.prototype,"visualizationType",void 0);e.__decorate([f.property({type:B,nonNullable:!0})],d.prototype,"thresholdOptions",void 0);e.__decorate([f.property({type:A,
nonNullable:!0})],d.prototype,"durationOptions",void 0);e.__decorate([f.property({type:z,nonNullable:!0})],d.prototype,"discreteOptions",void 0);e.__decorate([f.property()],d.prototype,"_running",void 0);e.__decorate([f.property()],d.prototype,"_handles",void 0);e.__decorate([f.property()],d.prototype,"_stopPreviewingTask",void 0);e.__decorate([f.property()],d.prototype,"_forcePreview",void 0);e.__decorate([f.property()],d.prototype,"_autoRestoreForcePreviewEnabled",void 0);e.__decorate([f.property()],
d.prototype,"_previewing",null);e.__decorate([f.property()],d.prototype,"_utcOffset",void 0);e.__decorate([f.property()],d.prototype,"_utcOffsetAuto",null);e.__decorate([f.property()],d.prototype,"_dateUTCOffset",null);e.__decorate([f.property()],d.prototype,"_startDateTimeUTC",null);e.__decorate([f.property()],d.prototype,"_endDateTimeUTC",null);e.__decorate([f.property()],d.prototype,"_referencePosition",null);e.__decorate([f.property()],d.prototype,"_sampleCount",null);e.__decorate([f.property()],
d.prototype,"_duration",null);e.__decorate([f.property()],d.prototype,"_lightDirections",null);e.__decorate([f.property()],d.prototype,"_tooltipEnabled",null);return d=e.__decorate([F.subclass("esri.widgets.ShadowAccumulation.ShadowAccumulationViewModel")],d)});