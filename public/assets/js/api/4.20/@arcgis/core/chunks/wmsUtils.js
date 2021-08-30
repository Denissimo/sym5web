/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{b as t}from"../core/lang.js";import{urlToObject as n}from"../core/urlUtils.js";import r from"../geometry/Extent.js";import i from"../geometry/SpatialReference.js";const s=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],a={84:4326,83:4269,27:4267};function l(t){if(!t)return null;const n={idCounter:-1};if("string"==typeof t){t=(new DOMParser).parseFromString(t,"text/xml")}const i=t.documentElement;if("ServiceExceptionReport"===i.nodeName){const t=Array.prototype.slice.call(i.childNodes).map((e=>e.textContent)).join("\r\n");throw new e("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",t)}const s=f("Capability",i),a=f("Service",i),l=f("Request",s);if(!s||!a||!l)return null;const o=f("Layer",s);if(!o)return null;const u="WMS_Capabilities"===i.nodeName||"WMT_MS_Capabilities"===i.nodeName?i.getAttribute("version"):"1.3.0",m=p("Title",a,"")||p("Name",a,""),d=p("AccessConstraints",a,""),h=p("Abstract",a,""),g=parseInt(p("MaxWidth",a,"5000"),10),y=parseInt(p("MaxHeight",a,"5000"),10),E=N(l,"GetMap"),S=x(l,"GetMap"),I=b(o,u,n);let w,L=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===L?w=e:1===L?(I.name&&(I.name="",I.sublayers.push(b(w,u,n))),I.sublayers.push(b(e,u,n))):I.sublayers.push(b(e,u,n)),L++)})),!I)return null;let F,M,O;const C=I.fullExtents;if(F=I.sublayers,F||(F=[]),0===F.length&&F.push(I),M=I.extent,!M){const e=new r(F[0].extent);I.extent=e.toJSON(),M=I.extent}if(O=I.spatialReferences,!O.length&&F.length>0){const e=t=>{let n=[];return t.sublayers.forEach((t=>{!n.length&&t.spatialReferences.length&&(n=t.spatialReferences||e(t))})),n};F.forEach((t=>{O.length||(O=t.spatialReferences||e(t))}))}const T=x(l,"GetFeatureInfo");let R;if(T){const e=N(l,"GetFeatureInfo");e.indexOf("text/html")>-1?R="text/html":e.indexOf("text/plain")>-1&&(R="text/plain")}if(!R){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(I)}const V=c(F),v=I.minScale||0,_=I.maxScale||0,U=I.dimensions,q=V.reduce(((e,t)=>e.concat(t.dimensions)),[]),B=U.concat(q).filter(A);let D=null;if(B.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;B.forEach((n=>{const{extent:r}=n;var i;i=r,Array.isArray(i)&&i.length>0&&i[0]instanceof Date?r.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):r.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),D={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:h,dimensions:U,extent:M,fullExtents:C,featureInfoFormat:R,featureInfoUrl:T,mapUrl:S,maxWidth:g,maxHeight:y,maxScale:_,minScale:v,layers:V,spatialReferences:O,supportedImageFormatTypes:E,timeInfo:D,title:m,version:u}}function o(e){return s.some((([t,n])=>e>=t&&e<=n))}function u(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function c(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(c(e.sublayers)),delete e.sublayers)})),t}function m(e,t,n){var r;return null!=(r=t.getAttribute(e))?r:n}function f(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(y(r)&&r.nodeName===e)return r}return null}function d(e,t){const n=[];for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];y(i)&&i.nodeName===e&&n.push(i)}return n}function p(e,t,n){const r=f(e,t);return r?r.textContent:n}function h(e,t,n){if(!e)return null;const s=parseFloat(e.getAttribute("minx")),a=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let u,c,m,f;n?(u=isNaN(a)?-Number.MAX_VALUE:a,c=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(o)?Number.MAX_VALUE:o,f=isNaN(l)?Number.MAX_VALUE:l):(u=isNaN(s)?-Number.MAX_VALUE:s,c=isNaN(a)?-Number.MAX_VALUE:a,m=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(o)?Number.MAX_VALUE:o);const d=new i({wkid:t});return new r({xmin:u,ymin:c,xmax:m,ymax:f,spatialReference:d})}function x(e,t){const r=f(t,e);if(r){const e=f("DCPType",r);if(e){const t=f("HTTP",e);if(t){const e=f("Get",t);if(e){let t=function(e,t,n,r){const i=f(e,n);return i?m(t,i,r):r}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],i=n(e);for(const e in i.query)i.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&r.push(e+"="+i.query[e]);return i.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function N(e,t){const n=d("Operation",e);if(0===n.length){return d("Format",f(t,e)).map((e=>e.textContent))}const r=[];return n.forEach((e=>{if(e.getAttribute("name")===t){d("Format",e).forEach((e=>{r.push(e.textContent)}))}})),r}function g(e,t,n){const r=f(t,e);if(!r)return n;const{textContent:i}=r;if(null==i||""===i)return n;const s=Number(i);return isNaN(s)?n:s}function b(e,t,n){var s;if(!e)return null;const l={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},u=f("LatLonBoundingBox",e),c=f("EX_GeographicBoundingBox",e);let x=null;u&&(x=h(u,4326)),c&&(x=new r(0,0,0,0,new i({wkid:4326})),x.xmin=parseFloat(p("westBoundLongitude",c,"0")),x.ymin=parseFloat(p("southBoundLatitude",c,"0")),x.xmax=parseFloat(p("eastBoundLongitude",c,"0")),x.ymax=parseFloat(p("northBoundLatitude",c,"0"))),u||c||(x=new r(-180,-90,180,90,new i({wkid:4326}))),l.minScale=g(e,"MaxScaleDenominator",0),l.maxScale=g(e,"MinScaleDenominator",0);const N=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)l.name=e.textContent||"";else if("Title"===e.nodeName)l.title=e.textContent||"";else if("Abstract"===e.nodeName)l.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(N);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||x||(x="1.3.0"===t?h(e,r,o(r)):h(e,r))}const r=n&&n.indexOf(":");if(r&&r>-1){let i=parseInt(n.substring(r+1,n.length),10);0===i||isNaN(i)||(i=a[i]?a[i]:i);const s="1.3.0"===t?h(e,i,o(i)):h(e,i);l.fullExtents.push(s)}}else if(e.nodeName===N){e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(a[e]&&(e=a[e]),-1===l.spatialReferences.indexOf(e)&&l.spatialReferences.push(e))}))}else if("Style"!==e.nodeName||l.legendURL){if("Layer"===e.nodeName){const r=b(e,t,n);r&&(r.parentLayerId=l.id,l.sublayers||(l.sublayers=[]),l.sublayers.push(r))}}else{const t=f("LegendURL",e);if(t){const e=f("OnlineResource",t);e&&(l.legendURL=e.getAttribute("xlink:href"))}}})),l.extent=null==(s=x)?void 0:s.toJSON(),l.dimensions=d("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,i=e.getAttribute("unitSymbol"),s=e.getAttribute("default"),a="0"!==m("default",e,"0"),l="0"!==m("nearestValue",e,"0"),o="0"!==m("current",e,"0");if(/^time$/i.test(t)&&/^ISO8601$/i.test(n)){return{name:"time",units:"ISO8601",extent:I(r),default:I(s),multipleValues:a,nearestValue:l,current:o}}if(/^elevation$/i.test(t)){return{name:"elevation",units:n,extent:E(r),unitSymbol:i,default:E(s),multipleValues:a,nearestValue:l}}return{name:t,units:n,extent:S(r),unitSymbol:i,default:S(s),multipleValues:a,nearestValue:l}})),l}function y(e){return e.nodeType===Node.ELEMENT_NODE}function A(e){return"time"===e.name}function E(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function I(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?function(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);if(!n)return null;const r=w(n[1]),i=w(n[2]),s=w(n[3]),a=w(n[4]),l=w(n[5]),o=w(n[6]);return{years:r,months:i,days:s,hours:a,minutes:l,seconds:o}}(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function w(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const n=t[0].replace(",",".");return Number(n)}function L(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const F=new Set([102100,3857,102113,900913]),M=new Set([3395,54004]);function O(e,n){let r=e.wkid;return t(n)?r:(!n.includes(r)&&e.latestWkid&&(r=e.latestWkid),F.has(r)?n.find((e=>F.has(e)))||n.find((e=>M.has(e)))||102100:r)}export{o as c,u as g,O as n,l as p,L as t};
