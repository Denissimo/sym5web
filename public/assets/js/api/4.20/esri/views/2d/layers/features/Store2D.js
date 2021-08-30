// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/maybe ../../../../core/accessorSupport/diffUtils ../../../../support/arcadeOnDemand ../../arcade/callExpressionWithCursor".split(" "),function(n,l,k,p,q,m,r,t){const u=new Promise(function(h,g){n(["../../../../layers/support/labelFormatUtils"],h,g)});let v=function(){function h(c,a){this._canCacheExpressionValue=!1;this._sourceInfo=c;this._bitsets={computed:a.getBitset(a.createBitset())}}var g=
h.prototype;g.invalidate=function(){this._bitsets.computed.clear()};g.updateSchema=function(){var c=k._asyncToGenerator(function*(a,b){var e=m.diff(this._schema,b);if((this._schema=b)&&!q.isNone(e)&&m.hasDiff(e,"attributes")){p("esri-2d-update-debug")&&console.debug("Applying Update - Store:",e);this._bitsets.computed.clear();a.targets[b.name]=!0;a=b.attributes;b=[];e=[];for(const d in a){const f=a[d];switch(f.type){case "expression":b.push(this._createArcadeComputedField(f));break;case "label-expression":b.push(this._createLabelArcadeComputedField(f));
break;case "statistic":e.push(f)}}this._computedFields=yield Promise.all(b);this._canCacheExpressionValue=!this._computedFields.some(d=>"expression"===d.type&&d.expression.referencesScale());this._statisticFields=e}});return function(a,b){return c.apply(this,arguments)}}();g.setComputedAttributes=function(c,a,b,e){var d=this._bitsets.computed;if(!this._canCacheExpressionValue||!d.has(b)){d.set(b);for(const f of this._computedFields)switch(d=this._evaluateField(a,f,e),f.resultType){case "numeric":c.setComputedNumericAtIndex(b,
f.fieldIndex,d);break;case "string":c.setComputedStringAtIndex(b,f.fieldIndex,d)}}};g._createArcadeComputedField=function(){var c=k._asyncToGenerator(function*(a){return{...a,expression:yield r.createRendererExpression(a.valueExpression,this._sourceInfo.spatialReference,this._sourceInfo.fieldsIndex)}});return function(a){return c.apply(this,arguments)}}();g._createLabelArcadeComputedField=function(){var c=k._asyncToGenerator(function*(a){var b=this._sourceInfo.spatialReference;const e=this._sourceInfo.fieldsIndex,
{createLabelFunction:d}=yield u;b=yield d(a.label,e,b);return{...a,builder:b}});return function(a){return c.apply(this,arguments)}}();g._evaluateField=function(c,a,b){switch(a.type){case "label-expression":return c=c.readArcadeFeature(),a.builder.evaluate(c)||"";case "expression":return{expression:a}=a,t(a,c,{$view:{scale:b}})}};return h}();l.Store2D=v;Object.defineProperty(l,"__esModule",{value:!0})});