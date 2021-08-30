// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./graphics/Graphics3DFrustumVisibility ./graphics/Graphics3DGraphicLikeLayerView ./graphics/graphicUtils ./support/projectExtentUtils ../../layers/LayerView".split(" "),
function(h,e,n,k,f,d,x,y,z,p,q,r,t,u,v,w){d=function(l){function g(){var a=l.apply(this,arguments)||this;a.type="graphics-3d";a.frustumVisibility=new r;a.slicePlaneEnabled=!1;a.drapeSourceType=1;a.suspendResumeExtent=null;a.fullExtentInLocalViewSpatialReference=null;return a}h._inheritsLoose(g,l);var b=g.prototype;b.initialize=function(){this._set("graphics3d",new t({owner:this,layer:this.layer,scaleVisibilityEnabled:!0}));this.graphics3d.setup();this.frustumVisibility.setup(this);this.setupSuspendResumeExtent();
this.updatingHandles.add(this,"fullOpacity",()=>this.graphics3d.graphicsCore.opacityChange());this.handles.add(this.layer.on("graphic-update",a=>this.graphics3d.graphicsCore.graphicUpdateHandler(a)));this.addResolvingPromise(v.toViewIfLocal(this).then(a=>this.fullExtentInLocalViewSpatialReference=a));this.layer.internal?this.notifyChange("updating"):this.handles.add(k.whenTrueOnce(this.view,"basemapTerrain.ready",()=>this.notifyChange("updating")))};b.destroy=function(){this.frustumVisibility&&(this.frustumVisibility.destroy(),
this._set("frustumVisibility",null));this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))};b.fetchPopupFeatures=function(){var a=h._asyncToGenerator(function*(c,m){return n.isSome(m)?m.clientGraphics:null});return function(c,m){return a.apply(this,arguments)}}();b.notifyGraphicGeometryChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(a)};b.notifyGraphicVisibilityChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(a)};b.getGraphicFromGraphicUid=
function(a){return this.graphics3d.getGraphicFromGraphicUid(a)};b.whenGraphicBounds=function(a,c){return this.graphics3d.whenGraphicBounds(a,c)};b.computeAttachmentOrigin=function(a,c){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(a,c):null};b.getSymbolLayerSize=function(a,c){return this.graphics3d.getSymbolLayerSize(a,c)};b.queryGraphics=function(){return Promise.resolve(this.loadedGraphics)};b.maskOccludee=function(a){return this.graphics3d.maskOccludee(a)};b.highlight=
function(a){return this.graphics3d.highlight(a)};b.canResume=function(){var a;return l.prototype.canResume.call(this)&&!(null!=(a=this.graphics3d)&&a.suspended)};b.isUpdating=function(){var a,c;return!(!(this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&(this.layer.internal||null!=(a=this.view)&&null!=(c=a.basemapTerrain)&&c.ready))};b.setupSuspendResumeExtent=function(){const a=()=>{this.suspendResumeExtent=u.enlargeExtent(this.graphics3d.graphicsCore.computedExtent,
this.suspendResumeExtent,1.2,this.graphics3d.graphicsCore.extentPadding);this.frustumVisibility.setExtent(this.suspendResumeExtent)};k.init(this.graphics3d.graphicsCore,"computedExtent",()=>a(),!0);k.watch(this.graphics3d.graphicsCore,"extentPadding",()=>a(),!0)};h._createClass(g,[{key:"legendEnabled",get:function(){return this.canResume()&&!this.frustumVisibility.suspended}},{key:"suspendInfo",get:function(){var a;const c={};n.isSome(this.graphics3d.scaleVisibility)&&this.graphics3d.scaleVisibility.suspended&&
(c.outsideScaleRange=!0);c.outsideOfView=null!=(a=this.frustumVisibility)&&a.suspended?!0:!1;return c}},{key:"graphics3DGraphics",get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}},{key:"symbolUpdateType",get:function(){return this.graphics3d.graphicsCore.symbolUpdateType}},{key:"updatePolicy",get:function(){var a;return(null==(a=this.graphics3d)?
void 0:a.graphicsCore.effectiveUpdatePolicy)||1}},{key:"performanceInfo",get:function(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}}}]);return g}(q.LayerView3D(w));e.__decorate([f.property({aliasOf:"layer.graphics"})],d.prototype,"loadedGraphics",void 0);e.__decorate([f.property({readOnly:!0})],
d.prototype,"suspended",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"legendEnabled",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"updating",void 0);e.__decorate([f.property()],d.prototype,"layer",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"frustumVisibility",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"graphics3d",void 0);e.__decorate([f.property({type:Boolean})],d.prototype,"slicePlaneEnabled",void 0);e.__decorate([f.property({readOnly:!0})],
d.prototype,"suspendInfo",null);return d=e.__decorate([p.subclass("esri.views.3d.layers.GraphicsLayerView3D")],d)});