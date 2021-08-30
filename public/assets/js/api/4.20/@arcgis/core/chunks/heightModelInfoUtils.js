/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as e}from"../core/lang.js";import t from"../core/Error.js";import n from"../geometry/HeightModelInfo.js";import{p as i}from"./arcgisLayerUrl.js";function a(e,i){if(!e)return null;if(!s(e))return new t("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});const a=e.heightUnit,r=n.deriveUnitFromSR(e,i).heightUnit;return a!==r?new t("webscene:incompatible-height-unit",`The vertical units of the scene (${a}) must match the horizontal units of the scene (${r})`,{verticalUnit:a,horizontalUnit:r}):null}function r(e,i,a){const r=c(e),o=i,l=function(e,t,n){if(!s(e)||!s(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}(r,o,a);{let i=null;if(r){const s=n.deriveUnitFromSR(r,e.spatialReference).heightUnit;a||s===r.heightUnit||(i=new t("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${s})`,{horizontalUnit:s}))}if(!function(e){return"heightModelInfo"in e&&null!=e.heightModelInfo||null!=e.spatialReference||!h(e)}(e)||4===l||i)return new t("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:r,error:i})}{let e=null;switch(l){case 1:{const n=r.heightUnit||"unknown",i=o.heightUnit||"unknown";e=new t("layerview:incompatible-height-unit",`The vertical units of the layer (${n}) must match the vertical units of the scene (${i})`,{layerUnit:n,sceneUnit:i});break}case 2:{const n=r.heightModel||"unknown",i=o.heightModel||"unknown";e=new t("layerview:incompatible-height-model",`The height model of the layer (${n}) must match the height model of the scene (${i})`,{layerHeightModel:n,sceneHeightModel:i});break}case 3:{const n=r.vertCRS||"unknown",i=o.vertCRS||"unknown";e=new t("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${n}) must match the vertical datum of the scene (${i})`,{layerDatum:n,sceneDatum:i});break}}if(e)return new t("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:r,sceneHeightModelInfo:o,error:e})}return null}function s(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function c(t){const a=t.url&&i(t.url);return!(null==(t.spatialReference&&t.spatialReference.vcsWkid)&&e(a)&&"ImageServer"===a.serverType)&&o(t)&&t.heightModelInfo?t.heightModelInfo:h(t)?n.deriveUnitFromSR(f,t.spatialReference):null}function o(e){return"heightModelInfo"in e}function l(e){if("unknown"===e.type||!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"wfs":return!0;case"imagery":case"map-image":case"map-notes":case"tile":case"vector-tile":case"scene":case null:default:return!1}}function h(e){return l(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):m(e)}function u(e){return null!=e.layers||m(e)||l(e)||o(e)}function m(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":case"voxel":case"slice":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"direct-line-measurement":case"area-measurement":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"line-of-sight":case"map-image":case"map-notes":case"ogc-feature":case"open-street-map":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}const f=new n({heightModel:"gravity-related-height"});export{c as d,u as m,r,a as v};