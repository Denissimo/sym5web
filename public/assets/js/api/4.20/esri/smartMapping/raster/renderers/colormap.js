// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../../../renderers/support/rasterRendererHelper ../support/utils".split(" "),function(c,d,e,f,g,h){function b(){b=d._asyncToGenerator(function*(a){a=yield h.processRasterRendererParameters(a);a=g.createColormapRenderer(a.layer.rasterInfo);if(!f.isSome(a))throw new e("raster-colormap-renderer:not-supported","Only single band data with colormap is supported");return{renderer:a}});return b.apply(this,arguments)}
c.createRenderer=function(a){return b.apply(this,arguments)};Object.defineProperty(c,"__esModule",{value:!0})});