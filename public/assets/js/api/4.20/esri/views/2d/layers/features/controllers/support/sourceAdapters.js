// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/maybe ../../../../../../core/workers/workers ../../../../../../geometry/support/quantizationUtils ../../../../../../layers/graphics/featureConversionUtils ../../../../../../layers/ogc/ogcFeatureUtils ../../../../../../rest/query/operations/query ../../support/FeatureSetReaderJSON ../../support/FeatureSetReaderPBF".split(" "),function(m,g,v,n,w,t,p,u,q,h,x){let k=function(){function c(d){this.service=
d}c.prototype.destroy=function(){};return c}(),y=function(c){function d(b){var a=c.call(this,b)||this;a._portsOpen=w.openWithPorts(b.source).then(f=>a.client=f);return a}g._inheritsLoose(d,c);var e=d.prototype;e.destroy=function(){this.client.close();this.client=null};e.executeQuery=function(){var b=g._asyncToGenerator(function*(a,f){yield this._portsOpen;a=yield this.client.invoke("queryFeatures",a.toJSON(),f);return h.FeatureSetReaderJSON.fromFeatureSet(a,this.service.objectIdField)});return function(a,
f){return b.apply(this,arguments)}}();return d}(k),z=function(c){function d(){return c.apply(this,arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){({data:a}=yield q.executeQueryPBFBuffer(this.service.source,b,{signal:null==a?void 0:a.signal,query:{...null==a?void 0:a.query,...this.service.customParameters}}));return x.FeatureSetReaderPBF.fromBuffer(a,this.service.geometryType,!b.quantizationParameters)});return function(b,a){return e.apply(this,
arguments)}}();return d}(k),C=function(c){function d(){return c.apply(this,arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){const {source:f,capabilities:l,spatialReference:A,objectIdField:B}=this.service;if(n.isSome(b.quantizationParameters)&&!l.query.supportsQuantization){const r=b.clone();b=t.toQuantizationTransform(n.unwrap(r.quantizationParameters));r.quantizationParameters=null;({data:a}=yield q.executeQuery(f,r,A,{signal:null==
a?void 0:a.signal,query:{...null==a?void 0:a.query,...this.service.customParameters}}));a=p.convertFromFeatureSet(a,B);p.quantizeOptimizedFeatureSet(b,a);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(a)}({data:b}=yield q.executeQuery(f,b,this.service.spatialReference,{...a,query:{...null==a?void 0:a.query,...this.service.customParameters}}));return h.FeatureSetReaderJSON.fromFeatureSet(b,this.service.objectIdField)});return function(b,a){return e.apply(this,arguments)}}();return d}(k),D=function(c){function d(){return c.apply(this,
arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){var {capabilities:f}=this.service;if(b.quantizationParameters&&!f.query.supportsQuantization){const l=b.clone();f=t.toQuantizationTransform(n.unwrap(l.quantizationParameters));l.quantizationParameters=null;b=yield u.queryOptimizedFeatureSet(this.service.source,b,a);p.quantizeOptimizedFeatureSet(f,b);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(b)}b=yield u.queryOptimizedFeatureSet(this.service.source,
b,a);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(b)});return function(b,a){return e.apply(this,arguments)}}();return d}(k);m.SourceAdapter=k;m.createSourceAdapter=function(c){const {capabilities:d}=c;var e=c.source;return e&&e.capabilities&&e.collection&&e.layerDefinition?new D(c):Array.isArray(c.source)?new y(c):d.query.supportsFormatPBF&&v("featurelayer-pbf")?new z(c):new C(c)};Object.defineProperty(m,"__esModule",{value:!0})});