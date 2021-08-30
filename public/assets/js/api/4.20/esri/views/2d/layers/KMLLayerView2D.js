// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../kernel ../../../request ../../../core/Collection ../../../core/Handles ../../../core/maybe ../../../core/urlUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/webMercatorUtils ../../../layers/support/kmlUtils ../../../rest/utils ../../../support/GraphicsCollection ../engine/Bitmap ../engine/BitmapContainer ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(r,n,I,J,K,L,t,v,p,m,S,T,U,M,B,w,C,D,q,N,x,O,P,Q,y,z,R){let E=function(){this.allSublayers=new Map;this.allPoints=[];this.allPolylines=[];this.allPolygons=[];this.allMapImages=[]};m=function(F){function A(){var a=F.apply(this,arguments)||this;a._handles=new L;a._bitmapIndex=new Map;a._mapImageContainer=new P.BitmapContainer;a._kmlVisualData=new E;a.allVisiblePoints=new x.GraphicsCollection;a.allVisiblePolylines=new x.GraphicsCollection;a.allVisiblePolygons=new x.GraphicsCollection;a.allVisibleMapImages=
new K;return a}r._inheritsLoose(A,F);var f=A.prototype;f.hitTest=function(a,b){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);a=[this._pointsView.hitTest(a,b),this._polylinesView.hitTest(a,b),this._polygonsView.hitTest(a,b)];return Promise.all(a).then(c=>c.filter(g=>{g&&(g.layer=this.layer,g.sourceLayer=this.layer);return!!g})[0]||null)};f.update=function(a){this._polygonsView&&this._polygonsView.processUpdate(a);this._polylinesView&&this._polylinesView.processUpdate(a);
this._pointsView&&this._pointsView.processUpdate(a)};f.attach=function(){this._handles.add([this.allVisibleMapImages.on("change",a=>{a.added.forEach(b=>this._addMapImage(b));a.removed.forEach(b=>this._removeMapImage(b))})]);this.container.addChild(this._mapImageContainer);this._polygonsView=new z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)});this.container.addChild(this._polygonsView.container);this._polylinesView=
new z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)});this.container.addChild(this._polylinesView.container);this._pointsView=new z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)});this.container.addChild(this._pointsView.container);this.watch("layer.visibleSublayers",a=>{for(const [,b]of this._kmlVisualData.allSublayers)b.visibility=
0;for(const b of a)if(a=this._kmlVisualData.allSublayers.get(b.id))a.visibility=1;this._refreshCollections()});this._fetchingPromise=this._fetchService().then(()=>{this._fetchingPromise=null;this.notifyChange("updating")})};f.detach=function(){this._handles.removeAll();this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null);this._polylinesView&&(this._polylinesView.destroy(),
this._polylinesView=null);this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)};f.moveStart=function(){};f.viewChange=function(){this._polygonsView.viewChange();this._polylinesView.viewChange();this._pointsView.viewChange()};f.moveEnd=function(){};f.isUpdating=function(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating};f._addMapImage=function(a){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&
J(a.href,{responseType:"image"}).then(({data:b})=>{let c=B.fromJSON(a.extent);D.canProject(c,this.view.spatialReference)&&(c=D.project(c,this.view.spatialReference));const g=new O.Bitmap(b,"standard");g.x=c.xmin;g.y=c.ymax;g.resolution=c.width/b.naturalWidth;g.rotation=a.rotation;this._mapImageContainer.addChild(g);this._bitmapIndex.set(a,g)})};f._getViewDependentUrl=function(){var a=r._asyncToGenerator(function*(b,c){const {viewFormat:g,viewBoundScale:k,httpQuery:e}=b;if(t.isSome(g)){if(t.isNone(c))throw Error("Loading this network link requires a view state.");
yield w.load();if(t.isSome(k)&&1!==k){var d=new B(c.extent);d.expand(k)}else d=c.extent;d=w.project(d,C.WGS84);var l=w.project(d,C.WebMercator);l=Math.max(l.width,l.height);const u={"[bboxWest]":d.xmin.toString(),"[bboxEast]":d.xmax.toString(),"[bboxSouth]":d.ymin.toString(),"[bboxNorth]":d.ymax.toString(),"[lookatLon]":d.center.x.toString(),"[lookatLat]":d.center.y.toString(),"[lookatRange]":l.toString(),"[lookatTilt]":"0","[lookatHeading]":c.rotation.toString(),"[lookatTerrainLon]":d.center.x.toString(),
"[lookatTerrainLat]":d.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":d.center.x.toString(),"[cameraLat]":d.center.y.toString(),"[cameraAlt]":l.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":(c.size[0]*c.pixelRatio).toString(),"[vertPixels]":(c.size[1]*c.pixelRatio).toString(),"[terrainEnabled]":"0","[clientVersion]":I.version,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"};l=h=>{for(const G in h)for(const H in u)h[G]=h[G].replace(H,
u[H])};c=v.queryToObject(g);l(c);d={};t.isSome(e)&&(d=v.queryToObject(e),l(d));b=N.parseUrl(b.href);b.query={...b.query,...c,...d};return`${b.path}?${v.objectToQuery(c)}`}return b.href});return function(b,c){return a.apply(this,arguments)}}();f._fetchService=function(){var a=r._asyncToGenerator(function*(){const b=new E;yield this._loadVisualData(this.layer.url,b);this._kmlVisualData=b;this._refreshCollections()});return function(){return a.apply(this,arguments)}}();f._refreshCollections=function(){this.allVisiblePoints.removeAll();
this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>
a));this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a))};f._isSublayerVisible=function(a){a=this._kmlVisualData.allSublayers.get(a);return a.visibility?-1===a.parentFolderId?!0:this._isSublayerVisible(a.parentFolderId):!1};f._loadVisualData=function(a,b){var c=this;return this._fetchParsedKML(a).then(function(){var g=r._asyncToGenerator(function*(k){for(const e of k.sublayers){b.allSublayers.set(e.id,e);k=e.points?
yield q.getGraphics(e.points):[];const d=e.polylines?yield q.getGraphics(e.polylines):[],l=e.polygons?yield q.getGraphics(e.polygons):[],u=e.mapImages||[];b.allPoints.push(...k.map(h=>({item:h,sublayerId:e.id})));b.allPolylines.push(...d.map(h=>({item:h,sublayerId:e.id})));b.allPolygons.push(...l.map(h=>({item:h,sublayerId:e.id})));b.allMapImages.push(...u.map(h=>({item:h,sublayerId:e.id})));e.networkLink&&(k=yield c._getViewDependentUrl(e.networkLink,c.view.state),yield c._loadVisualData(k,b))}});
return function(k){return g.apply(this,arguments)}}())};f._fetchParsedKML=function(a){return q.fetchService(a,this.view.spatialReference,this.layer.refreshInterval).then(b=>q.parseKML(b.data))};f._removeMapImage=function(a){const b=this._bitmapIndex.get(a);b&&(this._mapImageContainer.removeChild(b),this._bitmapIndex.delete(a))};return A}(Q.LayerView2DMixin(R));n.__decorate([p.property()],m.prototype,"_pointsView",void 0);n.__decorate([p.property()],m.prototype,"_polylinesView",void 0);n.__decorate([p.property()],
m.prototype,"_polygonsView",void 0);n.__decorate([p.property()],m.prototype,"_fetchingPromise",void 0);n.__decorate([p.property()],m.prototype,"updating",void 0);return m=n.__decorate([M.subclass("esri.views.2d.layers.KMLLayerView2D")],m)});