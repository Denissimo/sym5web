// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../chunks/vec4 ../../../geometry/support/aaBoundingRect ../webgl-engine/lib/localOrigin".split(" "),function(f,k,l,m,d,n){let q=function(){function e(a,b){this.index=a;this.renderTargets=b;this.extent=d.create();this.resolution=0;this.viewport=d.create();this.renderLocalOrigin=n.fromValues(0,0,0,"O");this.pixelRatio=1;this.canvasGeometries={extents:[d.create(),d.create(),d.create()],numViews:0};this.validTargets=
null;this.hasTargetWithoutRasterImage=this.hasDrapedRasterSource=this.hasDrapedFeatureSource=!1;this.index=a;this.validTargets=Array(b.renderTargets.length).fill(!1)}var c=e.prototype;c.getValidTarget=function(a){return this.validTargets[a]?this.renderTargets.getTarget(a):null};c.getColorTexture=function(a){return(a=1===a?this.renderTargets.getTarget(0):2===a?this.renderTargets.getTarget(2):this.renderTargets.getTarget(4))?a.getTexture():null};c.getNormalTexture=function(a){return(a=1===a?this.renderTargets.getTarget(3):
null)?a.getTexture():null};c.draw=function(a,b){const g=this.computeRenderTargetValidityBitfield(),p=this.needsColorWithoutRasterImage;for(const h of this.renderTargets.renderTargets)this.validTargets[h.type]=1===h.type&&!1===p?!1:a.drawTarget(this,h,b);a=this.computeRenderTargetValidityBitfield();return g^a?0:1};c.computeRenderTargetValidityBitfield=function(){const a=this.validTargets;return+a[0]|+a[1]<<1|+a[2]<<2|+a[3]<<3|+a[4]<<4};c.setupGeometryViewsCyclical=function(a){this.setupGeometryViewsDirect();
var b=.001*a.range;if(this.extent[0]-b<=a.min){const g=this.canvasGeometries.extents[this.canvasGeometries.numViews++];d.offset(this.extent,a.range,0,g)}this.extent[2]+b>=a.max&&(b=this.canvasGeometries.extents[this.canvasGeometries.numViews++],d.offset(this.extent,-a.range,0,b))};c.setupGeometryViewsDirect=function(){this.canvasGeometries.numViews=1;d.set(this.canvasGeometries.extents[0],this.extent);m.set(this.viewport,0,0,this.resolution,this.resolution)};c.hasSomeSizedView=function(){for(let a=
0;a<this.canvasGeometries.numViews;a++){const b=this.canvasGeometries.extents[a];if(b[0]!==b[2]&&b[1]!==b[3])return!0}return!1};c.applyViewport=function(a){const b=this.viewport;0===this.index?a.setViewport(b[0],b[1],b[2],b[3]):a.setViewport(b[0]+this.resolution,b[1],b[2],b[3])};k._createClass(e,[{key:"needsColorWithoutRasterImage",get:function(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}}]);return e}();f.Overlay=q;f.computeOverlayResolution=
function(e,c,a){return Math.min(l.nextHighestPowerOfTwo(Math.max(e,c)+256),a)};Object.defineProperty(f,"__esModule",{value:!0})});