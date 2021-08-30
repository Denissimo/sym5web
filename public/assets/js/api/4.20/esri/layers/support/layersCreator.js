// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Collection ../../core/has ../../core/promiseUtils ./lazyLayerLoader ../../portal/PortalItem ../../portal/support/featureCollectionUtils ../../portal/support/portalLayers ../../renderers/support/styleUtils".split(" "),function(r,g,w,N,x,f,y,t,z,A){function u(a,b,c){return h.apply(this,arguments)}function h(){h=g._asyncToGenerator(function*(a,b,c){if(b){var d=[];for(const e of b)b=B(e,c),"GroupLayer"===e.layerType?d.push(C(b,e,c)):d.push(b);
d=yield x.eachAlways(d);for(const e of d)!e.value||c.filter&&!c.filter(e.value)||a.add(e.value)}});return h.apply(this,arguments)}function B(a,b){return k.apply(this,arguments)}function k(){k=g._asyncToGenerator(function*(a,b){const c=yield D(a,b);return E(c,a,b)});return k.apply(this,arguments)}function E(a,b,c){return l.apply(this,arguments)}function l(){l=g._asyncToGenerator(function*(a,b,c){a=new a;a.read(b,c.context);"group"===a.type&&v(b)&&(yield F(a,b,c.context));yield A.loadStyleRenderer(a,
c.context);return a});return l.apply(this,arguments)}function D(a,b){return m.apply(this,arguments)}function m(){m=g._asyncToGenerator(function*(a,b){var c=b.context;switch(c.origin){case "web-scene":switch(c.layerContainerType){case "basemap":var d=G;break;case "ground":d=H;break;default:d=I}break;default:switch(c.layerContainerType){case "basemap":d=J;break;case "tables":d=K;break;default:d=L}}var e=d;d=a.layerType||a.type;!d&&b&&b.defaultLayerType&&(d=b.defaultLayerType);b=(b=e[d])?f.layerLookupMap[b]:
f.layerLookupMap.UnknownLayer;c=c&&c.portal;"Feature Collection"===a.type?a.itemId&&(a=new y({id:a.itemId,portal:c}),yield a.load(),a=(yield z.selectLayerClassPath(a)).className||"UnknownLayer",b=f.layerLookupMap[a]):"ArcGISFeatureLayer"===d?(yield t.isMapNotesLayer(a,c))?b=f.layerLookupMap.MapNotesLayer:(yield t.isRouteLayer(a,c))?b=f.layerLookupMap.RouteLayer:v(a)&&(b=f.layerLookupMap.GroupLayer):a.wmtsInfo&&a.wmtsInfo.url&&a.wmtsInfo.layerIdentifier?b=f.layerLookupMap.WMTSLayer:"WFS"===d&&"2.0.0"!==
a.wfsInfo.version&&(b=f.layerLookupMap.UnsupportedLayer);return b()});return m.apply(this,arguments)}function v(a){if("ArcGISFeatureLayer"!==a.layerType||"Feature Collection"===a.type)return!1;a=a.featureCollection;return!!(a&&a.layers&&1<a.layers.length)}function C(a,b,c){return n.apply(this,arguments)}function n(){n=g._asyncToGenerator(function*(a,b,c){const d=new w;b=u(d,Array.isArray(b.layers)?b.layers:[],c);a=yield a;yield b;if("group"===a.type)return a.layers.addMany(d),a});return n.apply(this,
arguments)}function F(a,b,c){return p.apply(this,arguments)}function p(){p=g._asyncToGenerator(function*(a,b,c){const d=yield(0,f.layerLookupMap.FeatureLayer)();b=b.featureCollection;const e=b.showLegend;b=b.layers.map(M=>{const q=new d;q.read(M,c);null!=e&&q.read({showLegend:e},c);return q});a.layers.addMany(b)});return p.apply(this,arguments)}const I={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",
ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},H={ArcGISTiledElevationServiceLayer:"ElevationLayer",
DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},G={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",
ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},
K={ArcGISFeatureLayer:"FeatureLayer"},J={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};r.populateOperationalLayers=
u;Object.defineProperty(r,"__esModule",{value:!0})});