// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],function(h,k,l,m,f){function g(){g=k._asyncToGenerator(function*(a,b,d){const e="string"===typeof a?m.urlToObject(a):a;a=b[0].spatialReference;const c=f.getJsonType(b[0]);b={...d,query:{...e.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a),geometries:JSON.stringify(n(b))}};b=yield l(e.path+"/simplify",b);return p(b.data,c,a)});return g.apply(this,arguments)}function n(a){return{geometryType:f.getJsonType(a[0]),
geometries:a.map(b=>b.toJSON())}}function p(a,b,d){const e=f.getGeometryType(b);return a.map(c=>{c=e.fromJSON(c);c.spatialReference=d;return c})}h.simplify=function(a,b,d){return g.apply(this,arguments)};Object.defineProperty(h,"__esModule",{value:!0})});