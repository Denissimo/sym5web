// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/maybe ../../core/urlUtils ./arcgisLayerUrl ./lazyLayerLoader".split(" "),function(G,y,k,H,I,m,z,A,J){function p(){p=k._asyncToGenerator(function*(a){var b,c=null==(b=a.properties)?void 0:b.customParameters;b=yield K(a.url,c);a={...a.properties,url:a.url};if(!b.sublayerIds)return null!=b.layerOrTableId&&(a.layerId=b.layerOrTableId,a.sourceJSON=b.sourceJSON),new b.Constructor(a);c=new (yield new Promise(function(e,
d){G(["../GroupLayer"],function(f){e(Object.freeze({__proto__:null,"default":f}))},d)})).default({title:b.parsedUrl.title});L(c,b,a);return c});return p.apply(this,arguments)}function B(a,b){return a?a.find(c=>c.id===b):null}function L(a,b,c){function e(d,f){d={...c,layerId:d,sublayerTitleMode:"service-name"};m.isSome(f)&&(d.sourceJSON=f);return new b.Constructor(d)}b.sublayerIds.forEach(d=>{d=e(d,B(b.sublayerInfos,d));a.add(d)});b.tableIds.forEach(d=>{d=e(d,B(b.tableInfos,d));a.tables.add(d)})}function K(a,
b){return q.apply(this,arguments)}function q(){q=k._asyncToGenerator(function*(a,b){var c=A.parse(a);m.isNone(c)&&(c=yield M(a,b));if(m.isNone(c))throw new I("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const {serverType:e,sublayer:d}=c;var f={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(e){case "MapServer":var h=null!=d?"FeatureLayer":N(a,b).then(g=>g?"TileLayer":"MapImageLayer");break;case "ImageServer":h=
l(a,b).then(g=>{const n=g.tileInfo&&g.tileInfo.format;return g.tileInfo?!n||"LERC"!==n.toUpperCase()||g.cacheType&&"elevation"!==g.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case "SceneServer":h=l(c.url.path,b).then(g=>{const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return g&&Array.isArray(g.layers)&&0<g.layers.length&&(g=g.layers[0].layerType,null!=n[g])?n[g]:
"SceneLayer"});break;default:h=f[e]}f="FeatureServer"===e;c={parsedUrl:c,Constructor:null,layerOrTableId:f?d:null,sublayerIds:null,tableIds:null};h=yield h;if({FeatureLayer:!0,SceneLayer:!0}[h]&&null==d)if(a=yield O(a,e,b),f&&(c.sublayerInfos=a.layerInfos,c.tableInfos=a.tableInfos),1!==a.layerIds.length+a.tableIds.length)c.sublayerIds=a.layerIds,c.tableIds=a.tableIds;else if(f){var C,D;c.layerOrTableId=null!=(C=a.layerIds[0])?C:a.tableIds[0];c.sourceJSON=null!=(D=a.layerInfos[0])?D:a.tableInfos[0]}c.Constructor=
yield P(h);return c});return q.apply(this,arguments)}function M(a,b){return r.apply(this,arguments)}function r(){r=k._asyncToGenerator(function*(a,b){var c;b=yield l(a,b);let e=null,d=null;const f=b.type;"Feature Layer"===f||"Table"===f?(e="FeatureServer",d=b.id):"indexedVector"===f?e="VectorTileServer":b.hasOwnProperty("mapName")?e="MapServer":b.hasOwnProperty("bandCount")&&b.hasOwnProperty("pixelSizeX")?e="ImageServer":b.hasOwnProperty("maxRecordCount")&&b.hasOwnProperty("allowGeometryUpdates")?
e="FeatureServer":b.hasOwnProperty("streamUrls")?e="StreamServer":E(b)?(e="SceneServer",d=b.id):b.hasOwnProperty("layers")&&E(null==(c=b.layers)?void 0:c[0])&&(e="SceneServer");if(!e)return null;c=null!=d?A.parseNonStandardSublayerUrl(a):null;return{title:m.isSome(c)&&b.name||z.getFilename(a),serverType:e,sublayer:d,url:{path:m.isSome(c)?c.serviceUrl:z.urlToObject(a).path}}});return r.apply(this,arguments)}function E(a){return(null==a?void 0:a.hasOwnProperty("store"))&&a.hasOwnProperty("id")&&"number"===
typeof a.id}function O(a,b,c){return t.apply(this,arguments)}function t(){t=k._asyncToGenerator(function*(a,b,c){var e,d;let f=!1;"FeatureServer"===b?(a=yield Q(a,c),f=!!a.layersJSON,b=a.layersJSON||a.serviceJSON):b=yield l(a,c);a=null==(e=b)?void 0:e.layers;e=null==(d=b)?void 0:d.tables;return{layerIds:(null==a?void 0:a.map(h=>h.id).reverse())||[],tableIds:(null==e?void 0:e.map(h=>h.id).reverse())||[],layerInfos:f?a:[],tableInfos:f?e:[]}});return t.apply(this,arguments)}function F(a){return!a.type||
"Feature Layer"===a.type}function Q(a,b){return u.apply(this,arguments)}function u(){u=k._asyncToGenerator(function*(a,b){var c,e;let d=yield l(a,b);d=d||{};d.layers=(null==(c=d.layers)?void 0:c.filter(F))||[];c={serviceJSON:d};if(10.5>d.currentVersion)return c;a=yield l(a+"/layers",b);c.layersJSON={layers:(null==a?void 0:null==(e=a.layers)?void 0:e.filter(F))||[],tables:(null==a?void 0:a.tables)||[]};return c});return u.apply(this,arguments)}function P(a){return v.apply(this,arguments)}function v(){v=
k._asyncToGenerator(function*(a){return(0,J.layerLookupMap[a])()});return v.apply(this,arguments)}function N(a,b){return w.apply(this,arguments)}function w(){w=k._asyncToGenerator(function*(a,b){return(yield l(a,b)).tileInfo});return w.apply(this,arguments)}function l(a,b){return x.apply(this,arguments)}function x(){x=k._asyncToGenerator(function*(a,b){return(yield H(a,{responseType:"json",query:{f:"json",...b}})).data});return x.apply(this,arguments)}y.fromUrl=function(a){return p.apply(this,arguments)};
Object.defineProperty(y,"__esModule",{value:!0})});