// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,f){function e(a){return Object.freeze({__proto__:null,"default":a})}f.registry={statsWorker:()=>new Promise(function(a,b){c(["../../smartMapping/statistics/support/statsWorker"],a,b)}),geometryEngineWorker:()=>new Promise(function(a,b){c(["../../geometry/geometryEngineWorker"],a,b)}),CSVSourceWorker:()=>new Promise(function(a,b){c(["../../layers/graphics/sources/support/CSVSourceWorker"],a,b)}),EdgeProcessingWorker:()=>new Promise(function(a,b){c(["../../views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker"],
a,b)}),ElevationSamplerWorker:()=>new Promise(function(a,b){c(["../../geometry/support/meshUtils/ElevationSamplerWorker"],a,b)}),FeatureServiceSnappingSourceWorker:()=>new Promise(function(a,b){c(["../../views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker"],a,b)}),GeoJSONSourceWorker:()=>new Promise(function(a,b){c(["../../layers/graphics/sources/geojson/GeoJSONSourceWorker"],function(d){a(e(d))},b)}),LercWorker:()=>new Promise(function(a,b){c(["../../layers/support/LercWorker"],
function(d){a(e(d))},b)}),MemorySourceWorker:()=>new Promise(function(a,b){c(["../../layers/graphics/sources/support/MemorySourceWorker"],function(d){a(e(d))},b)}),PBFDecoderWorker:()=>new Promise(function(a,b){c(["../../views/3d/support/PBFDecoderWorker"],function(d){a(e(d))},b)}),Pipeline:()=>new Promise(function(a,b){c(["../../views/2d/layers/features/Pipeline"],a,b)}),PointCloudWorker:()=>new Promise(function(a,b){c(["../../views/3d/layers/PointCloudWorker"],function(d){a(e(d))},b)}),RasterWorker:()=>
new Promise(function(a,b){c(["../../layers/support/RasterWorker"],function(d){a(e(d))},b)}),SceneLayerWorker:()=>new Promise(function(a,b){c(["../../views/3d/layers/SceneLayerWorker"],a,b)}),WFSSourceWorker:()=>new Promise(function(a,b){c(["../../layers/graphics/sources/WFSSourceWorker"],function(d){a(e(d))},b)}),WorkerTileHandler:()=>new Promise(function(a,b){c(["../../views/2d/engine/vectorTiles/WorkerTileHandler"],function(d){a(e(d))},b)})};Object.defineProperty(f,"__esModule",{value:!0})});