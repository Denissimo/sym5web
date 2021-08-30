// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Promise ../../../../core/promiseUtils ../../../../core/workers/workers ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass".split(" "),function(d,k,g,f,r,m,u,v,w,x,t){g=function(p){function l(b){b=p.call(this,b)||this;b._startupResolver=
f.createResolver();b.isReady=!1;return b}d._inheritsLoose(l,p);var e=l.prototype;e.initialize=function(){this._controller=f.createAbortController();this.addResolvingPromise(this._startWorker(this._controller.signal))};e.destroy=function(){this._controller.abort();this._connection&&this._connection.close()};e.startup=function(){var b=d._asyncToGenerator(function*(a,c,h,q){yield this.when();var n=this._controller.signal;n=Array.isArray(h.source)?{transferList:h.source,signal:n}:void 0;a=a.tileInfo.toJSON();
yield this._connection.invoke("startup",{service:h,config:c,tileInfo:a,tiles:q},n);this._startupResolver.resolve();this._set("isReady",!0)});return function(a,c,h,q){return b.apply(this,arguments)}}();e.updateTiles=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return f.ignoreAbortErrors(this._connection.invoke("updateTiles",a))});return function(a){return b.apply(this,arguments)}}();e.update=function(){var b=d._asyncToGenerator(function*(a){a={config:a};yield this._startupResolver.promise;
return this._connection.invoke("update",a)});return function(a){return b.apply(this,arguments)}}();e.applyUpdate=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("applyUpdate",a)});return function(a){return b.apply(this,arguments)}}();e.setHighlight=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return f.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",a))});return function(a){return b.apply(this,
arguments)}}();e.refresh=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;return f.ignoreAbortErrors(this._connection.invoke("controller.refresh"))});return function(){return b.apply(this,arguments)}}();e.querySummaryStatistics=function(){var b=d._asyncToGenerator(function*(a,c,h){yield this._startupResolver.promise;return this._connection.invoke("controller.querySummaryStatistics",{query:a.toJSON(),params:c},h)});return function(a,c,h){return b.apply(this,arguments)}}();
e.queryFeatures=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryFeatures",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryObjectIds=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryObjectIds",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryFeatureCount=function(){var b=
d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return this._connection.invoke("controller.queryFeatureCount",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryExtent=function(){var b=d._asyncToGenerator(function*(a,c){return this._connection.invoke("controller.queryExtent",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryLatestObservations=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;
return this._connection.invoke("controller.queryLatestObservations",a.toJSON(),c)});return function(a,c){return b.apply(this,arguments)}}();e.queryStatistics=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.queryStatistics",a)});return function(a){return b.apply(this,arguments)}}();e.getObjectId=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getObjectId",
a)});return function(a){return b.apply(this,arguments)}}();e.getDisplayId=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getDisplayId",a)});return function(a){return b.apply(this,arguments)}}();e.getFeature=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getFeature",a)});return function(a){return b.apply(this,arguments)}}();e.getAggregate=
function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return this._connection.invoke("controller.getAggregate",a)});return function(a){return b.apply(this,arguments)}}();e.getAggregateValueRanges=function(){var b=d._asyncToGenerator(function*(){yield this._startupResolver.promise;return this._connection.invoke("controller.getAggregateValueRanges")});return function(){return b.apply(this,arguments)}}();e.mapValidDisplayIds=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;
return this._connection.invoke("controller.mapValidDisplayIds",a)});return function(a){return b.apply(this,arguments)}}();e.onEdits=function(){var b=d._asyncToGenerator(function*(a){yield this._startupResolver.promise;return f.ignoreAbortErrors(this._connection.invoke("controller.onEdits",a))});return function(a){return b.apply(this,arguments)}}();e.enableEvent=function(){var b=d._asyncToGenerator(function*(a,c){yield this._startupResolver.promise;return f.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",
{name:a,value:c}))});return function(a,c){return b.apply(this,arguments)}}();e._startWorker=function(){var b=d._asyncToGenerator(function*(a){try{this._connection=yield r.open("Pipeline",{client:this.client,strategy:"dedicated",signal:a})}catch(c){f.throwIfNotAbortError(c)}});return function(a){return b.apply(this,arguments)}}();d._createClass(l,[{key:"tileRenderer",set:function(b){this.client.tileRenderer=b}},{key:"closed",get:function(){return this._connection.closed}}]);return l}(g.EsriPromise);
k.__decorate([m.property()],g.prototype,"isReady",void 0);k.__decorate([m.property()],g.prototype,"client",void 0);k.__decorate([m.property()],g.prototype,"tileRenderer",null);return g=k.__decorate([t.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],g)});