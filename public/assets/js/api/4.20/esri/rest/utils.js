// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/urlUtils"],function(f,l){function h(b,d,k){const e={};for(const c in b)if("declaredClass"!==c){var a=b[c];if(null!=a&&"function"!==typeof a)if(Array.isArray(a)){e[c]=[];for(let g=0;g<a.length;g++)e[c][g]=h(a[g])}else"object"===typeof a?a.toJSON?(a=a.toJSON(k&&k[c]),e[c]=d?a:JSON.stringify(a)):e[c]=d?a:JSON.stringify(a):e[c]=a}return e}f.asValidOptions=function(b,d){return d?{...d,query:{...b,...d.query}}:{query:b}};f.encode=h;f.parseUrl=function(b){return"string"===typeof b?
l.urlToObject(b):b};Object.defineProperty(f,"__esModule",{value:!0})});