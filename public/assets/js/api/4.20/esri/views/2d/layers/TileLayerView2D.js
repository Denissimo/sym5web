// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/BitmapTileLayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../engine/BitmapTileContainer".split(" "),function(l,m,e,h,c,d,k,r,f,t){l.BitmapTileLayerView2D=g=>{g=function(n){function v(){return n.apply(this,
arguments)||this}m._inheritsLoose(v,n);var y=v.prototype;y.attach=function(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);this._bitmapView=new t.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)};y.detach=function(){this.container.removeChild(this._bitmapView);this._bitmapView.removeAllChildren()};return v}(g);return g=e.__decorate([f.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],g)};Object.defineProperty(l,"__esModule",{value:!0})})},
"esri/views/2d/layers/LayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(l,m,e,h,c,d,k,r,f,t,g,n,v,y,A,H,I){const B=h.ofType({key:"type",base:y,typeMap:{rect:A,path:I,geometry:H}});l.LayerView2DMixin=z=>{z=function(F){function C(){var q=F.apply(this,arguments)||this;q.clips=new B;q.moving=!1;q.attached=!1;q.lastUpdateId=-1;q.updateRequested=!1;return q}m._inheritsLoose(C,F);var D=C.prototype;D.initialize=function(){var q;this.container||(this.container=new v.Container);this.container.fadeTransitionEnabled=!0;this.container.opacity=0;this.container.clips=this.clips;
this.handles.add([d.init(this,"suspended",p=>{this.container&&(this.container.visible=!p);this.view&&!p&&this.updateRequested&&this.view.requestUpdate()},!0),d.init(this,["layer.opacity","container"],()=>{if(this.container){var p,x;this.container.opacity=null!=(p=null==(x=this.layer)?void 0:x.opacity)?p:1}},!0),d.init(this,["layer.blendMode"],p=>{this.container&&(this.container.blendMode=p)},!0),d.init(this,["layer.effect"],p=>{this.container&&(this.container.effect=p)},!0),this.clips.on("change",
()=>{this.container.clips=this.clips;this.notifyChange("clips")})]);null!=(q=this.view)&&q.whenLayerView?this.view.whenLayerView(this.layer).then(p=>{p!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})};D.destroy=function(){this.attached&&(this.detach(),this.attached=!1);this.handles.remove("initialize");this.updateRequested=!1};D.isVisibleAtScale=
function(q){var p=!0,x=this.layer;const u=x.minScale;x=x.maxScale;if(null!=u&&null!=x){p=!u;let b=!x;!p&&q<=u&&(p=!0);!b&&q>=x&&(b=!0);p=p&&b}return p};D.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};D.processUpdate=function(q){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",q),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(q)))};D.isUpdating=
function(){return!1};D.isRendering=function(){return!1};D.canResume=function(){return F.prototype.canResume.call(this)?this.isVisibleAtScale(this.view.scale):!1};m._createClass(C,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]);return C}(z);e.__decorate([k.property({type:B,set(F){F=c.referenceSetter(F,this._get("clips"),B);this._set("clips",F)}})],z.prototype,"clips",void 0);e.__decorate([k.property()],z.prototype,"moving",void 0);
e.__decorate([k.property()],z.prototype,"attached",void 0);e.__decorate([k.property()],z.prototype,"container",void 0);e.__decorate([k.property()],z.prototype,"suspended",void 0);e.__decorate([k.property({readOnly:!0})],z.prototype,"updateParameters",void 0);e.__decorate([k.property()],z.prototype,"updateRequested",void 0);e.__decorate([k.property()],z.prototype,"updating",null);e.__decorate([k.property()],z.prototype,"view",void 0);return z=e.__decorate([n.subclass("esri.views.2d.layers.LayerView2D")],
z)};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/layers/support/ClipArea":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass".split(" "),function(l,m,e,h,c,d,k,r,f){e=function(t){function g(){return t.apply(this,arguments)||
this}l._inheritsLoose(g,t);return g}(e.JSONSupport);return e=m.__decorate([f.subclass("esri.views.layers.support.ClipArea")],e)})},"esri/views/layers/support/ClipRect":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(l,m,e,h,c,d,
k,r,f){var t;h=t=function(g){function n(){var v=g.apply(this,arguments)||this;v.type="rect";v.left=null;v.right=null;v.top=null;v.bottom=null;return v}l._inheritsLoose(n,g);n.prototype.clone=function(){return new t({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};l._createClass(n,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return n}(f);m.__decorate([e.property({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0);m.__decorate([e.property({type:[Number,
String],json:{write:!0}})],h.prototype,"right",void 0);m.__decorate([e.property({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0);m.__decorate([e.property({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0);m.__decorate([e.property({readOnly:!0})],h.prototype,"version",null);return h=t=m.__decorate([r.subclass("esri.views.layers.support.ClipRect")],h)})},"esri/views/layers/support/Geometry":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),
function(l,m,e,h,c,d,k,r,f,t,g,n,v,y){var A;e={base:t,key:"type",typeMap:{extent:v,polygon:y}};n=A=function(H){function I(){var B=H.apply(this,arguments)||this;B.type="geometry";B.geometry=null;return B}l._inheritsLoose(I,H);I.prototype.clone=function(){return new A({geometry:this.geometry.clone()})};l._createClass(I,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return I}(n);m.__decorate([h.property({types:e,json:{read:g.fromJSON,write:!0}})],n.prototype,"geometry",void 0);
m.__decorate([h.property({readOnly:!0})],n.prototype,"version",null);return n=A=m.__decorate([f.subclass("esri.views.layers.support.Geometry")],n)})},"esri/views/layers/support/Path":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(l,
m,e,h,c,d,k,r,f){h=function(t){function g(){var n=t.apply(this,arguments)||this;n.type="path";n.path=[];return n}l._inheritsLoose(g,t);l._createClass(g,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return g}(f);m.__decorate([e.property({type:[[[Number]]],json:{write:!0}})],h.prototype,"path",void 0);m.__decorate([e.property({readOnly:!0})],h.prototype,"version",null);return h=m.__decorate([r.subclass("esri.views.layers.support.Path")],h)})},"esri/views/layers/TileLayerView":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../renderers/support/clickToleranceUtils".split(" "),
function(l,m,e,h,c,d,k,r,f,t,g,n,v){r=y=>{y=function(A){function H(){return A.apply(this,arguments)||this}m._inheritsLoose(H,A);H.prototype.fetchPopupFeatures=function(){var I=m._asyncToGenerator(function*(B,z){var F=this,{layer:C}=this;if(!B)return Promise.reject(new h("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:C}));if("tile"!==C.type)return Promise.reject(new h("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:C.type}));const D=this.get("view.scale");
C=C.allSublayers.toArray().filter(q=>{const p=0===q.minScale||D<=q.minScale,x=0===q.maxScale||D>=q.maxScale;return q.popupTemplate&&q.popupEnabled&&q.visible&&p&&x});return d.eachAlways(C.map(function(){var q=m._asyncToGenerator(function*(p){const x=p.createQuery();var u=c.isSome(z)?z.event:null;u=v.calculateTolerance({renderer:p.renderer,event:u});x.geometry=F.createFetchPopupFeaturesQueryGeometry(B,u);x.outFields=yield p.popupTemplate.getRequiredFields();return(yield p.queryFeatures(x)).features});
return function(p){return q.apply(this,arguments)}}())).then(q=>[].concat(...q.map(p=>p.value).filter(Boolean)))});return function(B,z){return I.apply(this,arguments)}}();return H}(y);e.__decorate([k.property()],y.prototype,"layer",void 0);return y=e.__decorate([n.subclass("esri.layers.mixins.TileLayerView")],y)};l.TileLayerView=r;l.default=r;Object.defineProperty(l,"__esModule",{value:!0})})},"esri/renderers/support/clickToleranceUtils":function(){define(["exports"],function(l){function m(c,d){return d?
"xoffset"in d&&d.xoffset?Math.max(c,Math.abs(d.xoffset)):"yoffset"in d&&d.yoffset?Math.max(c,Math.abs(d.yoffset||0)):c:c}function e(c,d){if("number"===typeof c)return c;if(c&&c.stops&&c.stops.length){{c=c.stops;let k=d=0;for(let r=0;r<c.length;r++){const f=c[r].size;"number"===typeof f&&(d+=f,k++)}c=d/k}return c}return d}function h(c,d){if(!d)return c;d=d.filter(f=>"size"===f.type).map(f=>{const {maxSize:t,minSize:g}=f;return(e(t,c)+e(g,c))/2});let k=0;const r=d.length;if(0===r)return c;for(let f=
0;f<r;f++)k+=d[f];return Math.max(Math.floor(k/r),c)}l.calculateTolerance=function(c){const d=c&&c.renderer;c="touch"===(c&&c.event&&c.event.pointerType)?9:6;if(!d)return c;c="visualVariables"in d?h(c,d.visualVariables):c;if("simple"===d.type)return m(c,d.symbol);if("unique-value"===d.type){let k=c;d.uniqueValueInfos.forEach(r=>{k=m(k,r.symbol)});return k}if("class-breaks"===d.type){let k=c;d.classBreakInfos.forEach(r=>{k=m(k,r.symbol)});return k}return c};Object.defineProperty(l,"__esModule",{value:!0})})},
"esri/views/support/drapedUtils":function(){define("exports ../../geometry ../../core/maybe ../../core/unitUtils ../../renderers/support/clickToleranceUtils ../../geometry/Extent".split(" "),function(l,m,e,h,c,d){function k(f,t,g,n=new d){let v;if("2d"===g.type)v=t*g.resolution;else if("3d"===g.type){var y=g.overlayPixelSizeInMapUnits(f),A=g.basemapSpatialReference;v=e.isSome(A)&&!A.equals(g.spatialReference)?h.getMetersPerUnitForSR(A)/h.getMetersPerUnitForSR(g.spatialReference):t*y}t=f.x-v;y=f.y-
v;A=f.x+v;f=f.y+v;({spatialReference:g}=g);n.xmin=Math.min(t,A);n.ymin=Math.min(y,f);n.xmax=Math.max(t,A);n.ymax=Math.max(y,f);n.spatialReference=g;return n}const r=new d;l.createQueryGeometry=k;l.intersectsDrapedGeometry=function(f,t,g){f=g.toMap(f);if(e.isNone(f))return!1;const n=c.calculateTolerance();return k(f,n,g,r).intersects(t)};Object.defineProperty(l,"__esModule",{value:!0})})},"*noref":1}});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./BitmapTileLayerView2D ./LayerView2D ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/TileLayerView ../../support/drapedUtils".split(" "),function(l,
m,e,h,c,d,k,r,f,t,g,n,v,y,A,H,I,B,z,F,C){const D=h.getLogger("esri.views.2d.layers.TileLayerView2D"),q=[0,0];h=function(p){function x(){var b=p.apply(this,arguments)||this;b._tileStrategy=null;b._fetchQueue=null;b.layer=null;return b}l._inheritsLoose(x,p);var u=x.prototype;u.initialize=function(){var b=this.layer.tileInfo;b=b&&b.spatialReference;let a;b||(a=new e("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));b.equals(this.view.spatialReference)||
(a=new e("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}));this.watch("resampling",()=>{this.refresh()});a&&this.addResolvingPromise(Promise.reject(a))};u.hitTest=function(){return null};u.update=function(b){this._fetchQueue.pause();this._fetchQueue.state=b.state;this._tileStrategy.update(b);this._fetchQueue.resume();this.notifyChange("updating")};u.attach=function(){const b="tileServers"in this.layer?this.layer.tileServers:
null;this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent);this._fetchQueue=new H({tileInfoView:this._tileInfoView,concurrency:b&&10*b.length||10,process:(a,w)=>this.fetchTile(a,w)});this._tileStrategy=new I({cachePolicy:"keep",resampling:this.resampling,acquireTile:a=>this.acquireTile(a),releaseTile:a=>this.releaseTile(a),tileInfoView:this._tileInfoView});this.requestUpdate();this.container.requestRender();p.prototype.attach.call(this)};u.detach=function(){p.prototype.detach.call(this);
this._tileStrategy.destroy();this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};u.moveStart=function(){this.requestUpdate()};u.viewChange=function(){this.requestUpdate()};u.moveEnd=function(){this.requestUpdate()};u.createFetchPopupFeaturesQueryGeometry=function(b,a){return C.createQueryGeometry(b,a,this.view)};u.doRefresh=function(){var b=l._asyncToGenerator(function*(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),
this._tileStrategy.tiles.forEach(a=>this._enqueueTileFetch(a)),this.notifyChange("updating"))});return function(){return b.apply(this,arguments)}}();u.isUpdating=function(){var b;return 0<(null==(b=this._fetchQueue)?void 0:b.length)};u.acquireTile=function(b){b=this._bitmapView.createTile(b);const a=b.bitmap;[a.x,a.y]=this._tileInfoView.getTileCoords(q,b.key);a.resolution=this._tileInfoView.getTileResolution(b.key);[a.width,a.height]=this._tileInfoView.tileInfo.size;this._enqueueTileFetch(b);this._bitmapView.addChild(b);
this.requestUpdate();return b};u.releaseTile=function(b){this._fetchQueue.abort(b.key.id);this._bitmapView.removeChild(b);b.once("detach",()=>b.destroy());this.requestUpdate()};u.fetchTile=function(){var b=l._asyncToGenerator(function*(a,w){const J="tilemapCache"in this.layer?this.layer.tilemapCache:null;w=!c.isNone(w)&&w.signal;if(!J)try{return yield this._fetchImage(a,w)}catch(G){if(!d.isAbortError(G)&&!this.resampling)return this._createBlankImage();throw G;}const E=new A(0,0,0,0);let K;try{yield J.fetchAvailabilityUpsample(a.level,
a.row,a.col,E,{signal:w});if(E.level!==a.level&&!this.resampling)return this._createBlankImage();K=yield this._fetchImage(E,w)}catch(G){if(d.isAbortError(G))throw G;K=yield this._fetchImage(a,w)}const {level:M,row:N,col:L}=E;return this.resampling&&M!==a.level?this._resampleImage(K,M,N,L,a.level,a.row,a.col):K});return function(a,w){return b.apply(this,arguments)}}();u._enqueueTileFetch=function(){var b=l._asyncToGenerator(function*(a){if(!this._fetchQueue.has(a.key.id)){try{const w=yield this._fetchQueue.push(a.key);
a.bitmap.source=w;a.bitmap.width=this._tileInfoView.tileInfo.size[0];a.bitmap.height=this._tileInfoView.tileInfo.size[1];a.once("attach",()=>this.requestUpdate())}catch(w){d.isAbortError(w)||D.error(w)}this.requestUpdate()}});return function(a){return b.apply(this,arguments)}}();u._fetchImage=function(){var b=l._asyncToGenerator(function*(a,w){return this.layer.fetchTile(a.level,a.row,a.col,{timestamp:this.refreshTimestamp,signal:w})});return function(a,w){return b.apply(this,arguments)}}();u._resampleImage=
function(b,a,w,J,E,K,M){const N=this._tileInfoView.tileInfo.size;var L=this._tileInfoView.getTileResolution(a),G=this._tileInfoView.getTileResolution(E);E=this._tileInfoView.getLODInfoAt(E);M=E.getXForColumn(M);K=E.getYForRow(K);E=this._tileInfoView.getLODInfoAt(a);a=E.getXForColumn(J);J=E.getYForRow(w);w=Math.round((M-a)/L);a=Math.round(-(K-J)/L);J=Math.round(G/L*N[0]);L=Math.round(G/L*N[1]);G=this._createBlankImage();G.getContext("2d").drawImage(b,w,a,J,L,0,0,N[0],N[1]);return G};u._createBlankImage=
function(){const b=this._tileInfoView.tileInfo.size,a=document.createElement("canvas");[a.width,a.height]=b;return a};l._createClass(x,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]);return x}(F.TileLayerView(z.RefreshableLayerView(n.BitmapTileLayerView2D(v.LayerView2DMixin(B)))));m.__decorate([k.property()],h.prototype,"resampling",null);return h=m.__decorate([g.subclass("esri.views.2d.layers.TileLayerView2D")],h)});