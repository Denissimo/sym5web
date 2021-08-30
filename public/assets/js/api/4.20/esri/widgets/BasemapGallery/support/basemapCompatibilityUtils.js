// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/promiseUtils ../../../layers/support/layerUtils ../../../views/3d/terrain/terrainUtils ../../../views/3d/terrain/TilingScheme ../../../views/support/spatialReferenceSupport".split(" "),function(g,h,e,k,r,p,t,u){function l(){l=h._asyncToGenerator(function*(a,b={}){yield v(a,b);k.throwIfAborted(b)});return l.apply(this,arguments)}function m(){m=h._asyncToGenerator(function*(a,b={}){const {basemap:c,view:f}=a;
yield c.load(b);k.throwIfAborted(b);if(0!==c.baseLayers.length&&(a=c.baseLayers.getItemAt(0),r.isTiledLayer(a))){if(c.spatialReference){if(f.spatialReference.equals(c.spatialReference))return;q()}yield a.load(b);k.throwIfAborted(b);b=(a.get("supportedSpatialReferences")||[a.get("tileInfo.spatialReference")]).filter(Boolean);0!==b.length&&b.every(d=>!f.spatialReference.equals(d))&&q()}});return m.apply(this,arguments)}function q(){throw new e("basemap-compatibility:incompatible-spatial-reference",
"Basemap spatial reference is not compatible with the view");}function v(a,b){return n.apply(this,arguments)}function n(){n=h._asyncToGenerator(function*(a,b){const {basemap:c,view:f}=a;yield c.load(b);if(0!==c.baseLayers.length){a=c.baseLayers.concat(c.referenceLayers);a=w(a);if(a.length)throw a[0];a=c.baseLayers.getItemAt(0);try{yield a.load(b)}catch(x){const {name:y="basemap-compatibility:unknown-error",message:z="Unknown basemap compatibility error",details:A}=x;throw new e(y,z,A);}if(b=a.tileInfo){var d=
f.viewingMode;if(d){if(!u.isSpatialReferenceSupported(b.spatialReference,d))throw new e(`basemapgalleryitem:spatial-reference-unsupported-${d}`,`Basemap spatial reference is unsupported in ${d} mode`);if("global"===d){if((d=p.checkIfTileInfoSupportedForView(b,a.fullExtent,null,1))&&a.compatibleTileInfo256&&!p.checkIfTileInfoSupportedForView(a.compatibleTileInfo256,a.fullExtent,null,1)&&(d=null),d)throw new e(`basemapgalleryitem:tiling-scheme-unsupported-${b.spatialReference.isWebMercator?"web-mercator":
"wgs84"}-global`,"Basemap tiling scheme is unsupported in global mode",{error:d});}else if(t.checkUnsupported(b))throw new e("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");d=f.get("basemapTerrain.tilingScheme");if(!(!d||d.compatibleWith(b)||a.compatibleTileInfo256&&d.compatibleWith(a.compatibleTileInfo256)))throw new e("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");}}}});return n.apply(this,
arguments)}function w(a){const b=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return a.toArray().filter(c=>-1===b.indexOf(c.operationalLayerType)).map(c=>new e("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:c,operationalLayerType:c.operationalLayerType||"unknown"}))}g.default2DCompatibility=function(a){return m.apply(this,arguments)};g.default3DCompatibility=function(a){return l.apply(this,
arguments)};Object.defineProperty(g,"__esModule",{value:!0})});