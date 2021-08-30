/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{canProject as e,project as r}from"../geometry/support/webMercatorUtils.js";import{projectGeometry as o}from"./geometryServiceUtils.js";function t(t){const l=t.view.spatialReference,s=t.layer.fullExtent,i=s&&s.spatialReference;return i?i.equals(l)?Promise.resolve(s.clone()):e(i,l)?Promise.resolve(r(s,l)):t.view.state.isLocal?o(s,l,t.layer.portalItem).then((e=>!t.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null):Promise.resolve(null)}export{t};
