// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../LayerList/support/layerListUtils"],function(b,g){const e=a=>c(a)||d(a),c=a=>{if(!("type"in a))return!1;switch(a.type){case "feature":case "geojson":case "csv":case "graphics":case "wfs":return!0;default:return!1}},d=a=>{const f=g.getNormalizedChildLayerProperty(a);if(a.hasOwnProperty(f))for(const h of a[f])if(e(h))return!0;return!1};b.isValidSnappingLayer=e;b.isValidSnappingLayerGroup=d;b.isValidSnappingLayerSource=c;Object.defineProperty(b,"__esModule",{value:!0})});