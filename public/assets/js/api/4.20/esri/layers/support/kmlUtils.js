// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../config ../../kernel ../../PopupTemplate ../../request ../../core/lang ../../core/urlUtils ../../geometry/SpatialReference ../../geometry/support/aaBoundingBox ../../geometry/support/boundsUtils ../../renderers/support/jsonUtils ../../rest/support/FeatureSet".split(" "),function(n,z,A,y,B,C,q,D,E,m,r,F,G){function v(c,d,b){b.forEach(a=>{c.set(a.attributes[d],a)})}function H(c,d){let b;d.some(a=>a.id===c?(b=a,!0):!1);return b}function w(){w=
z._asyncToGenerator(function*(c){var d=G.fromJSON(c.featureSet).features;const b=F.fromJSON(c.layerDefinition.drawingInfo.renderer);c=B.fromJSON(c.popupInfo);const a=[];for(const f of d)d=yield b.getSymbolAsync(f),f.symbol=d,f.popupTemplate=c,f.visible=!0,a.push(f);return a});return w.apply(this,arguments)}function x(c){const d=m.create(),b=m.create(m.NEGATIVE_INFINITY);for(const a of c){if(a.polygons&&a.polygons.featureSet&&a.polygons.featureSet.features)for(const f of a.polygons.featureSet.features)r.getBoundsXYZ(d,
f.geometry),m.expandWithAABB(b,d);if(a.polylines&&a.polylines.featureSet&&a.polylines.featureSet.features)for(const f of a.polylines.featureSet.features)r.getBoundsXYZ(d,f.geometry),m.expandWithAABB(b,d);if(a.points&&a.points.featureSet&&a.points.featureSet.features)for(const f of a.points.featureSet.features)r.getBoundsXYZ(d,f.geometry),m.expandWithAABB(b,d);if(a.mapImages)for(const f of a.mapImages)r.getBoundsXYZ(d,f.extent),m.expandWithAABB(b,d)}return m.equals(b,m.NEGATIVE_INFINITY)?null:{xmin:b[0],
ymin:b[1],zmin:b[2],xmax:b[3],ymax:b[4],zmax:b[5],spatialReference:E.WGS84}}const I={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};n.computeExtent=x;n.fetchService=function(c,d,b,a){const f=y.id&&y.id.findCredential(c);c=D.addQueryParameters(c,{token:f&&f.token});return C(A.kmlServiceUrl,{query:{url:c,model:"simple",folders:"",refresh:0!==b?!0:void 0,outSR:JSON.stringify(d)},responseType:"json",signal:a})};n.getGraphics=function(c){return w.apply(this,
arguments)};n.parseKML=function(c){const d=c.folders||[],b=d.slice(),a=new Map,f=new Map,p=new Map,t=new Map,u=new Map,h={esriGeometryPoint:f,esriGeometryPolyline:p,esriGeometryPolygon:t};(c.featureCollection&&c.featureCollection.layers||[]).forEach(e=>{var g=q.clone(e);g.featureSet.features=[];const k=e.featureSet.geometryType;a.set(k,g);g=e.layerDefinition.objectIdField;"esriGeometryPoint"===k?v(f,g,e.featureSet.features):"esriGeometryPolyline"===k?v(p,g,e.featureSet.features):"esriGeometryPolygon"===
k&&v(t,g,e.featureSet.features)});c.groundOverlays&&c.groundOverlays.forEach(e=>{u.set(e.id,e)});d.forEach(e=>{e.networkLinkIds.forEach(g=>{var k=e.id;if(g=H(g,c.networkLinks))g.parentFolderId=k,g.networkLink=g;(k=g)&&b.push(k)})});b.forEach(e=>{e.featureInfos&&(e.points=q.clone(a.get("esriGeometryPoint")),e.polylines=q.clone(a.get("esriGeometryPolyline")),e.polygons=q.clone(a.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(g=>{switch(g.type){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryPolygon":{const k=
h[g.type].get(g.id);k&&e[I[g.type]].featureSet.features.push(k);break}case "GroundOverlay":(g=u.get(g.id))&&e.mapImages.push(g)}}),e.fullExtent=x([e]))});const l=x(b);return{folders:d,sublayers:b,extent:l}};n.sublayersFromJSON=function(c,d,b=null,a=[]){const f=[],p={},t=d.sublayers,u=d.folders.map(h=>h.id);t.forEach(h=>{const l=new c;b?l.read(h,b):l.read(h);a.length&&-1<u.indexOf(l.id)&&(l.visible=-1!==a.indexOf(l.id));p[h.id]=l;null!=h.parentFolderId&&-1!==h.parentFolderId?(h=p[h.parentFolderId],
h.sublayers||(h.sublayers=[]),h.sublayers.unshift(l)):f.unshift(l)});return f};Object.defineProperty(n,"__esModule",{value:!0})});