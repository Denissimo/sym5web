// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Logger ../../../core/promiseUtils ../../../layers/FeatureLayer ./featureUtils".split(" "),function(w,v,q,x,y,z,l){function A(b){return`<ul class="esri-widget__list">${b.map(a=>`<li>${"string"===typeof a?l.applyTextFormattingHTML(l.htmlEntities(a)):a}</li>`).join("")}</ul>`}function B(b){return`<table class="esri-widget__table">${b.keys().map(a=>{var d=b.field(a);d="string"===typeof d?l.applyTextFormattingHTML(l.htmlEntities(d)):
d;return`<tr><th>${a}</th><td>${d}</td></tr>`}).join("")}</table>`}function C({aggregatedFeatures:b,arcadeUtils:a,featureSetVars:d,context:e,viewInfo:c,map:k,graphic:h}){d.forEach(g=>{g=g.toLowerCase();var f={map:k,spatialReference:c.sr};"$map"===g&&(e.vars[g]=a.convertMapToFeatureSetCollection(f));"$layer"===g&&(e.vars[g]=a.convertFeatureLayerToFeatureSet(h.sourceLayer,c.sr));"$datastore"===g&&(e.vars[g]=a.convertServiceUrlToWorkspace(h.sourceLayer.url,c.sr));if("$aggregatedfeatures"===g){f=h.layer;
const {fields:n,objectIdField:p,geometryType:m,spatialReference:D,displayField:E}=f;f=new z({fields:n,objectIdField:p,geometryType:m,spatialReference:D,displayField:E,..."feature"===f.type?{templates:f.templates,typeIdField:f.typeIdField,types:f.types}:null,source:b});e.vars[g]=a.convertFeatureLayerToFeatureSet(f,c.sr)}})}function F(){return new Promise(function(b,a){w(["../../../support/arcadeUtils"],b,a)})}function G(b){return r.apply(this,arguments)}function r(){r=q._asyncToGenerator(function*({graphic:b,
view:a}){const {isAggregate:d,layer:e}=b;if(!d||!e||"2d"!==(null==a?void 0:a.type))return[];a=yield a.whenLayerView(e);if(!a.createQuery||!a.queryFeatures)return[];const c=a.createQuery();c.aggregateIds=[b.getObjectId()];({features:b}=yield a.queryFeatures(c));return b});return r.apply(this,arguments)}function H(b){return t.apply(this,arguments)}function t(){t=q._asyncToGenerator(function*({expressionAttributes:b,info:a,arcadeUtils:d,spatialReference:e,map:c,graphic:k,view:h}){const g=`expression/${a.name}`,
f=d.createSyntaxTree(a.expression),n=I.filter(m=>d.hasVariable(f,m));yield d.loadScriptDependencies(f,!0,n);const p=d.getViewInfo({spatialReference:e});e=d.createExecContext(k,p);e.useAsync=!0;h=yield G({graphic:k,view:h});C({aggregatedFeatures:h,arcadeUtils:d,featureSetVars:n,context:e,viewInfo:p,map:c,graphic:k});c=d.createFunction(f,e);c=yield d.executeAsyncFunction(c,e).catch(m=>J.error("arcade-execution-error",{error:m,graphic:k,expressionInfo:a}));b[g]="string"===typeof c?l.applyTextFormattingHTML(l.htmlEntities(c)):
Array.isArray(c)?A(c):c&&"esri.arcade.Dictionary"===c.declaredClass?B(c):c});return t.apply(this,arguments)}function u(){u=q._asyncToGenerator(function*({popupTemplate:b,spatialReference:a,graphic:d,map:e,view:c}){b=b.expressionInfos;const k=[],h={};if(!b||!b.length)return h;const g=yield F();for(const f of b)k.push(H({expressionAttributes:h,info:f,arcadeUtils:g,spatialReference:a,map:e,graphic:d,view:c}));yield y.eachAlways(k);return h});return u.apply(this,arguments)}const I=["$datastore","$map",
"$layer","$aggregatedfeatures"],J=x.getLogger("esri.widgets.Feature.support.arcadeFeatureUtils");v.createCompiledExpressions=function(b){return u.apply(this,arguments)};Object.defineProperty(v,"__esModule",{value:!0})});