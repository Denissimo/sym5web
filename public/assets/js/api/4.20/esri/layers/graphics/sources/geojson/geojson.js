// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry"],function(r,x,F,G){function*z(a){switch(a.type){case "Feature":yield a;break;case "FeatureCollection":for(const b of a.features)b&&(yield b)}}function*H(a){if(!a)return null;switch(a.type){case "Point":yield a.coordinates;break;case "LineString":case "MultiPoint":yield*a.coordinates;break;case "MultiLineString":case "Polygon":for(const b of a.coordinates)yield*b;break;case "MultiPolygon":for(const b of a.coordinates)for(const c of b)yield*c}}
function*I(a,b={}){const {geometryType:c,objectIdField:d}=b;for(const k of a){var e;const {geometry:l,properties:f,id:q}=k;if(l&&u[l.type]!==c)continue;a=f||{};let m=null!=(e=a[d])?e:null;d&&null!=q&&!a[d]&&(a[d]=m=q);yield new F(l?J(new G,l,b):null,a,null,m)}}function K(a){for(const b of a)if(2<b.length)return!0;return!1}function A(a){let b=0;for(let c=0;c<a.length;c++){const d=a[c],e=a[(c+1)%a.length];b+=d[0]*e[1]-e[0]*d[1]}return 0>=b}function B(a){const b=a[0],c=a[a.length-1];b[0]===c[0]&&b[1]===
c[1]&&b[2]===c[2]||a.push(b);return a}function J(a,b,c){switch(b.type){case "LineString":return t(a,b.coordinates,c),a;case "MultiLineString":for(const e of b.coordinates)t(a,e,c);return a;case "MultiPoint":return t(a,b.coordinates,c),a;case "MultiPolygon":for(var d of b.coordinates)for(C(a,d[0],c),b=1;b<d.length;b++)D(a,d[b],c);return a;case "Point":return y(a,b.coordinates,c),a;case "Polygon":d=b.coordinates;C(a,d[0],c);for(b=1;b<d.length;b++)D(a,d[b],c);return a}}function C(a,b,c){b=B(b);A(b)?
t(a,b,c):E(a,b,c)}function D(a,b,c){b=B(b);A(b)?E(a,b,c):t(a,b,c)}function t(a,b,c){for(const d of b)y(a,d,c);a.lengths.push(b.length)}function E(a,b,c){for(let d=b.length-1;0<=d;d--)y(a,b[d],c);a.lengths.push(b.length)}function y(a,b,c){const [d,e,k]=b;a.coords.push(d,e);c.hasZ&&a.coords.push(k||0)}const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};
r.createOptimizedFeatures=function(a,b){return Array.from(I(z(a),b))};r.getGeometryType=function(a){return u[a]};r.inferLayerProperties=function(a,b={}){const c=[];var d=new Set;const e=new Set;var k=!1;let l=Number.NEGATIVE_INFINITY,f=null,q=!1,m=void 0;({geometryType:b=null}=b);var h=!1;for(const v of z(a)){const {geometry:w,properties:n,id:p}=v;if(w&&(b||(b=u[w.type]),u[w.type]!==b))continue;k||(k=H(w),k=K(k));!q&&(q=null!=p)&&(m=typeof p,"number"===m&&(f=Object.keys(n).filter(g=>n[g]===p)));q&&
"number"===m&&null!=p&&(l=Math.max(l,p),1<f.length?f=f.filter(g=>n[g]===p):1===f.length&&(f=n[f[0]]===p?f:[]));if(!h&&n){a=!0;for(const g in n)if(!d.has(g))if(h=n[g],null==h)a=!1,e.add(g);else{a:switch(typeof h){case "string":h="esriFieldTypeString";break a;case "number":h="esriFieldTypeDouble";break a;default:h="unknown"}"unknown"===h?e.add(g):(e.delete(g),d.add(g),c.push({name:g,alias:g,type:h}))}h=a}}if(d=f&&1===f.length&&f[0]||null)for(const v of c)v.name===d&&(v.type="esriFieldTypeOID");return{fields:c,
geometryType:b,hasZ:k,maxObjectId:Math.max(0,l),objectIdFieldName:d,objectIdFieldType:m,unknownFields:Array.from(e)}};r.validateGeoJSON=function(a){if(!a)throw new x("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==a.type)throw new x("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:a});({crs:a}=a);if(a){var b="string"===typeof a?a:"name"===a.type?a.properties.name:"EPSG"===a.type?a.properties.code:null,c=/.*(CRS84H?|4326)$/i;
if(!b||!c.test(b))throw new x("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};Object.defineProperty(r,"__esModule",{value:!0})});