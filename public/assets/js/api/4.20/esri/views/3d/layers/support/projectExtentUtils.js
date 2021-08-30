// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(e,f,h){e.toViewIfLocal=function(a){const c=a.view.spatialReference,b=a.layer.fullExtent,d=b&&b.spatialReference;return d?d.equals(c)?Promise.resolve(b.clone()):f.canProject(d,c)?Promise.resolve(f.project(b,c)):a.view.state.isLocal?h.projectGeometry(b,c,a.layer.portalItem).then(g=>!a.destroyed&&g?g:void 0).catch(()=>null):Promise.resolve(null):Promise.resolve(null)};Object.defineProperty(e,
"__esModule",{value:!0})});