// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/maybe"],function(h,r,k){function l(a,b){if(a===b)return!0;if(null==a||null==b||a.length!==b.length)return!1;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d.length!==e.length)return!1;for(let g=0;g<d.length;g++)if(d[g]!==e[g])return!1}return!0}function m(a,b){if(a===b)return!0;if(null==a||null==b||a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(!l(a[c],b[c]))return!1;return!0}function n(a,b){return f(a.spatialReference,b.spatialReference)?
a.x===b.x&&a.y===b.y&&a.z===b.z&&a.m===b.m:!1}function f(a,b){return a===b||a&&b&&a.equals(b)}function p(a,b){if(a===b)return!0;if(k.isNone(a)||k.isNone(b)||a.type!==b.type)return!1;switch(a.type){case "point":return n(a,b);case "extent":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:f(a.spatialReference,b.spatialReference)?a.xmin===b.xmin&&a.ymin===b.ymin&&a.zmin===b.zmin&&a.xmax===b.xmax&&a.ymax===b.ymax&&a.zmax===b.zmax:!1,a;case "polyline":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:f(a.spatialReference,
b.spatialReference)?m(a.paths,b.paths):!1,a;case "polygon":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:f(a.spatialReference,b.spatialReference)?m(a.rings,b.rings):!1,a;case "multipoint":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:f(a.spatialReference,b.spatialReference)?l(a.points,b.points):!1,a;case "mesh":return!1}}function q(a,b){if(a===b)return!0;if(!a||!b)return!1;const c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(const e of c)if(a[e]!==b[e])return!1;return!0}h.equals=
function(a,b){return a===b?!0:null!=a&&null!=b&&a.objectId===b.objectId&&p(a.geometry,b.geometry)&&q(a.attributes,b.attributes)?!0:!1};h.pointEquals=n;Object.defineProperty(h,"__esModule",{value:!0})});