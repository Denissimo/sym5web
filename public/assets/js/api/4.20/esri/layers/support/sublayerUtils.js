// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){function g(b,c){if(!b||!b.length)return!0;c=c.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(b.length>c.length)return!1;let d=0;const a=c.length;for(const {id:e}of b){for(;d<a&&c[d]!==e;)d++;if(d>=a)return!1}return!0}f.isExportDynamic=function(b,c,d){return b.some(a=>{const e=a.source;return!(!e||"map-layer"===e.type&&e.mapLayerId===a.id&&(!e.gdbVersion||e.gdbVersion===d.gdbVersion))||2<a.originIdOf("renderer")||2<a.originIdOf("labelingInfo")||
2<a.originIdOf("opacity")||2<a.originIdOf("labelsVisible")})?!0:!g(b,c)};f.isSublayerOverhaul=function(b){return!!b&&b.some(c=>null!=c.minScale||c.layerDefinition&&null!=c.layerDefinition.minScale)};f.shouldWriteSublayerStructure=function(b,c,d){return c.flatten(({sublayers:a})=>a).length!==b.length||b.some(a=>a.originIdOf("minScale")>d||a.originIdOf("maxScale")>d||a.originIdOf("renderer")>d||a.originIdOf("labelingInfo")>d||a.originIdOf("opacity")>d||a.originIdOf("labelsVisible")>d||a.originIdOf("source")>
d)?!0:!g(b,c)};Object.defineProperty(f,"__esModule",{value:!0})});