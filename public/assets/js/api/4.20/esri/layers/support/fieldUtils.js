// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../core/object ./domains ../../support/arcadeOnDemand".split(" "),function(aa,d,g,ba,h,v,m,ca){function O(a,b,c){if(a)for(const e of a)(a=(a=v.getDeepValue(e,b))&&"function"!==typeof a&&c.get(a))&&v.setDeepValue(e,a.name,b)}function k(a,b){if(!a||!b)return[];w.clear();l(w,a,b);return Array.from(w).sort()}function l(a,b,c){var e;if(c)if(null!=b&&null!=(e=b.fields)&&e.length)if(c.includes("*"))for(const {name:f}of b.fields)a.add(f);
else for(const f of c)n(a,b,f);else if(c.includes("*"))a.clear(),a.add("*");else for(const f of c)a.add(f)}function n(a,b,c){"string"===typeof c&&(b?(b=b.get(c))&&a.add(b.name):a.add(c))}function p(a,b,c){return x.apply(this,arguments)}function x(){x=g._asyncToGenerator(function*(a,b,c){if(c){var {arcadeUtils:e}=yield ca.loadArcade();c=e.extractFieldNames(c);for(const f of c)n(a,b,f)}});return x.apply(this,arguments)}function P(a,b,c){return y.apply(this,arguments)}function y(){y=g._asyncToGenerator(function*(a,
b,c){if(c&&"1\x3d1"!==c){c=(yield new Promise(function(e,f){aa(["../../core/sql/WhereClause"],e,f)})).WhereClause.create(c,b);if(!c.isStandardized)throw new ba("fieldUtils:collectFilterFields","Where clause is not standardized");l(a,b,c.fieldNames)}});return y.apply(this,arguments)}function z(a,b){for(const c of a)if(c&&c.valueType&&c.valueType===b)return c.name;return null}function A(){A=g._asyncToGenerator(function*(a){if(!a)return[];const b=new Set;yield Q(b,a);return Array.from(b).sort()});return A.apply(this,
arguments)}function Q(a,b){return B.apply(this,arguments)}function B(){B=g._asyncToGenerator(function*(a,b){if(b){var c=v.getDeepValue("elevationInfo.featureExpressionInfo",b);if(c)return c.collectRequiredFields(a,b.fieldsIndex)}});return B.apply(this,arguments)}function da(a,b,c){return C.apply(this,arguments)}function C(){C=g._asyncToGenerator(function*(a,b,c){c.outStatistic.onStatisticValueExpression?p(a,b,c.outStatistic.onStatisticValueExpression):a.add(c.outStatistic.onStatisticField)});return C.apply(this,
arguments)}function D(){D=g._asyncToGenerator(function*(a,b,c){b&&c&&"cluster"===c.type&&c.fields&&(yield Promise.all(c.fields.map(e=>da(a,b.fieldsIndex,e))))});return D.apply(this,arguments)}function E(){E=g._asyncToGenerator(function*(a,b,c){b&&(b.timeInfo&&h.isSome(c)&&c.timeExtent&&l(a,b.fieldsIndex,[b.timeInfo.startField,b.timeInfo.endField]),b.floorInfo&&l(a,b.fieldsIndex,[b.floorInfo.floorField]),h.isSome(c)&&h.isSome(c.where)&&(yield P(a,b.fieldsIndex,c.where)))});return E.apply(this,arguments)}
function F(){F=g._asyncToGenerator(function*(a){if(!a)return[];const b="timeInfo"in a&&a.timeInfo;return b?k(a.fieldsIndex,[a.trackIdField,b.startField,b.endField]):[]});return F.apply(this,arguments)}function G(){G=g._asyncToGenerator(function*(a){if(!a)return[];const b=new Set;yield R(b,a);return Array.from(b).sort()});return G.apply(this,arguments)}function R(a,b){return H.apply(this,arguments)}function H(){H=g._asyncToGenerator(function*(a,b){const {labelingInfo:c,fieldsIndex:e}=b;c&&c.length&&
(yield Promise.all(c.map(f=>ea(a,e,f))))});return H.apply(this,arguments)}function ea(a,b,c){return I.apply(this,arguments)}function I(){I=g._asyncToGenerator(function*(a,b,c){if(c){var e=c.getLabelExpression();c=c.where;"arcade"===e.type?yield p(a,b,e.expression):(e=e.expression.match(/{[^}]*}/g))&&e.forEach(f=>{n(a,b,f.slice(1,-1))});yield P(a,b,c)}});return I.apply(this,arguments)}function J(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function fa(a){return null===a||J(a)}function ha(a){return null===
a||q(a)}function S(a){return null!=a&&"string"===typeof a}function ia(a){return null===a||S(a)}function ja(){return!0}function K(a,b){let c;switch(a.type){case "date":case "integer":case "long":case "small-integer":case "esriFieldTypeDate":case "esriFieldTypeInteger":case "esriFieldTypeLong":case "esriFieldTypeSmallInteger":c=a.nullable?ha:q;break;case "double":case "single":case "esriFieldTypeSingle":case "esriFieldTypeDouble":c=a.nullable?fa:J;break;case "string":case "esriFieldTypeString":c=a.nullable?
ia:S;break;default:c=ja}return 1===arguments.length?c:c(b)}function L(a){return null!=a&&ka.has(a.type)}function T(a,b){return a.nullable&&null===b?null:L(a)&&!U(a.type,Number(b))?d.NumericRangeValidationError.OUT_OF_RANGE:K(a,b)?a.domain?m.validateDomainValue(a.domain,b):null:d.TypeValidationError.INVALID_TYPE}function U(a,b){return(a="string"===typeof a?M(a):a)?a.isInteger?q(b)&&b>=a.min&&b<=a.max:b>=a.min&&b<=a.max:!1}function M(a){switch(a){case "esriFieldTypeSmallInteger":case "small-integer":return r;
case "esriFieldTypeInteger":case "integer":return t;case "esriFieldTypeSingle":case "single":return u;case "esriFieldTypeDouble":case "double":return V}}function W(a,b,c){if(!b||!b.attributes||!a){if(h.isSome(c))for(var e of a)c.add(e);return!0}b=b.attributes;e=!1;for(const f of a)if(!(f in b))if(e=!0,h.isSome(c))c.add(f);else break;return e}function N(){N=g._asyncToGenerator(function*(a,b){const c=new Set;for(const e of b)yield p(c,a.fieldsIndex,e);return Array.from(c).sort()});return N.apply(this,
arguments)}const X="field field2 field3 normalizationField rotationInfo.field proportionalSymbolInfo.field proportionalSymbolInfo.normalizationField colorInfo.field colorInfo.normalizationField".split(" "),Y=["field","normalizationField"],w=new Set,q=(()=>"isInteger"in Number?Number.isInteger:a=>"number"===typeof a&&isFinite(a)&&Math.floor(a)===a)(),Z=["integer","small-integer","single","double"],ka=new Set([...Z,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);
d.NumericRangeValidationError=void 0;(d.NumericRangeValidationError||(d.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range";d.TypeValidationError=void 0;(d.TypeValidationError||(d.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";const r={min:-32768,max:32767,isInteger:!0},t={min:-2147483648,max:2147483647,isInteger:!0},u={min:-3.4E38,max:1.2E38,isInteger:!1},V={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};d.collectArcadeFieldNames=
p;d.collectElevationFields=Q;d.collectFeatureReductionFields=function(a,b,c){return D.apply(this,arguments)};d.collectField=n;d.collectFields=l;d.collectFilterFields=function(a,b,c){return E.apply(this,arguments)};d.collectLabelingFields=R;d.doubleRange=V;d.featureHasFields=function(a,b){return!W(a,b,null)};d.fixFields=k;d.fixRendererFields=function(a,b){if(null!=a&&null!=b)for(const c of Array.isArray(a)?a:[a])if(O(X,c,b),"visualVariables"in c&&c.visualVariables)for(const e of c.visualVariables)O(Y,
e,b)};d.fixTimeInfoFields=function(a,b){if(null!=a&&null!=b&&b.fields.length)if("startField"in a){var c=b.get(a.startField);b=b.get(a.endField);a.startField=c&&c.name||null;a.endField=b&&b.name||null}else c=b.get(a.startTimeField),b=b.get(a.endTimeField),a.startTimeField=c&&c.name||null,a.endTimeField=b&&b.name||null};d.getDisplayFieldName=function({displayField:a,fields:b}){if(a)return a;if(!b||!b.length)return null;if(!(a=z(b,"name-or-title")||z(b,"unique-identifier")||z(b,"type-or-category")))a:{for(const c of b)if(c&&
c.name&&(b=c.name.toLowerCase(),-1<b.indexOf("name")||-1<b.indexOf("title"))){a=c.name;break a}a=null}return a};d.getElevationFields=function(a){return A.apply(this,arguments)};d.getExpressionFields=function(a,b){return N.apply(this,arguments)};d.getFeatureEditFields=function(a){if(!a)return[];const b="editFieldsInfo"in a&&a.editFieldsInfo;return b?k(a.fieldsIndex,[b&&b.creatorField,b&&b.creationDateField,b&&b.editorField,b&&b.editDateField]):[]};d.getFeatureGeometryFields=function(a){if(!a)return[];
const b=a.geometryFieldsInfo;return b?k(a.fieldsIndex,[b.shapeAreaField,b.shapeLengthField]):[]};d.getFieldDefaultValue=function(a){const b=a.defaultValue;if(void 0!==b&&K(a,b))return b;if(a.nullable)return null};d.getFieldRange=function(a){const b=m.getDomainRange(a.domain);if(b)return b;if(L(a))return M(a.type)};d.getLabelingFields=function(a){return G.apply(this,arguments)};d.getNumericTypeForValue=function(a){if(!J(a))return null;if(q(a)){if(a>=r.min&&a<=r.max)return"esriFieldTypeSmallInteger";
if(a>=t.min&&a<=t.max)return"esriFieldTypeInteger"}return a>=u.min&&a<=u.max?"esriFieldTypeSingle":"esriFieldTypeDouble"};d.getTimeFields=function(a){return F.apply(this,arguments)};d.integerRange=t;d.isDateField=function(a){return null!=a&&("date"===a.type||"esriFieldTypeDate"===a.type)};d.isNumberInRange=U;d.isNumericField=L;d.isStringField=function(a){return null!=a&&("string"===a.type||"esriFieldTypeString"===a.type)};d.isValidFieldValue=function(a,b){return null===T(a,b)};d.isValueMatchingFieldType=
K;d.numericTypes=Z;d.packFields=function(a,b,c=1){if(!b||!a)return[];if(b.includes("*"))return["*"];b=k(a,b);return b.length/a.fields.length>=c?["*"]:b};d.populateMissingFields=W;d.rendererFields=X;d.sanitizeNullFieldValue=function(a){return null==a||"number"===typeof a&&isNaN(a)?null:a};d.singleRange=u;d.smallIntegerRange=r;d.unpackFieldNames=function(a,b){return h.isNone(b)||h.isNone(a)?[]:b.includes("*")?a.fields.map(c=>c.name):b};d.validateFieldValue=T;d.validationErrorToString=function(a,b,c){switch(a){case m.DomainValidationError.INVALID_CODED_VALUE:return`Value ${c} is not in the coded domain - field: ${b.name}, domain: ${JSON.stringify(b.domain)}`;
case m.DomainValidationError.VALUE_OUT_OF_RANGE:return`Value ${c} is out of the range of valid values - field: ${b.name}, domain: ${JSON.stringify(b.domain)}`;case d.TypeValidationError.INVALID_TYPE:return`Value ${c} is not a valid value for the field type - field: ${b.name}, type: ${b.type}, nullable: ${b.nullable}`;case d.NumericRangeValidationError.OUT_OF_RANGE:{const {min:e,max:f}=M(b.type);return`Value ${c} is out of range for the number type - field: ${b.name}, type: ${b.type}, value range is ${e} to ${f}`}}};
d.visualVariableFields=Y;Object.defineProperty(d,"__esModule",{value:!0})});