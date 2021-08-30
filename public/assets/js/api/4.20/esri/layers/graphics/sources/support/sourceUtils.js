// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/spatialReferenceUtils","../../../support/fieldUtils"],function(z,e,t,u,g){function m(a){return new A(a)}function v(){return n.apply(this,arguments)}function n(){n=t._asyncToGenerator(function*(){return h?h:h=yield new Promise(function(a,b){z(["../../../../geometry/geometryEngineJSON"],a,b)})});return n.apply(this,arguments)}function p(){p=t._asyncToGenerator(function*(a,b){!u.isValid(a)||"esriGeometryPolygon"!==
b&&"esriGeometryPolyline"!==b||(yield v())});return p.apply(this,arguments)}let B=function(){this.description=this.code=null},A=function(a){this.error=new B;this.objectId=this.globalId=null;this.success=!1;this.uniqueId=null;this.error.description=a},C=function(a){this.globalId=null;this.success=!0;this.objectId=this.uniqueId=a};const q=new Set;let h;e.createFeatureEditErrorResult=m;e.createFeatureEditSuccessResult=function(a){return new C(a)};e.loadGeometryEngine=v;e.loadGeometryEngineForSimplify=
function(a,b){return p.apply(this,arguments)};e.mixAttributes=function(a,b,w,x,D=!1,y){q.clear();for(const k in w){const c=a.get(k);if(c){var l=w[k];{var d=c;var f=l;let r=f;"string"===typeof f&&g.isNumericField(d)?r=parseFloat(f):null!=f&&g.isStringField(d)&&"string"!==typeof f&&(r=String(f));d=g.sanitizeNullFieldValue(r)}d!==l&&y&&y.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:c,originalValue:l,sanitizedValue:d}});q.add(c.name);if(c&&
(D||c.editable)){if(l=g.validateFieldValue(c,d))return m(g.validationErrorToString(l,c,d));b[c.name]=d}}}if(x)for(const k of x)if(!q.has(k.name))return m(`missing required field "${k.name}"`);return null};e.simplify=function(a,b){if(!a||!u.isValid(b))return a;if("rings"in a||"paths"in a){if(!h)throw new TypeError("geometry engine not loaded");return h.simplify(b,a)}return a};Object.defineProperty(e,"__esModule",{value:!0})});