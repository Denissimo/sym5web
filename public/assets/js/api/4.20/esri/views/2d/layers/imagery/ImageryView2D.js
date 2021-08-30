// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/enumeration ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/pixelUtils ../../engine/BitmapContainer ../../engine/Container ../../engine/ImageryBitmapSource ../support/ExportStrategy".split(" "),
function(n,f,q,d,r,t,u,g,E,F,v,w,x,y,z,A,B){const C=r.getLogger("esri.views.2d.layers.imagery.ImageryView2D");d=function(p){function l(){var a=p.apply(this,arguments)||this;a.attached=!1;a.container=new z.Container;a.updateRequested=!1;a.type="Imagery";a._bitmapView=null;return a}n._inheritsLoose(l,p);var b=l.prototype;b.destroy=function(){this.attached&&(this.detach(),this.attached=!1);this.updateRequested=!1};b.update=function(a){this.strategy.update(a).catch(e=>{t.isAbortError(e)||C.error(e)})};
b.detach=function(){this.strategy.destroy();this._bitmapView.removeAllChildren();this.container.removeAllChildren()};b.hitTest=function(a,e){a=this.view.toMap(u.createScreenPoint(a,e));return Promise.resolve(new q({attributes:{},geometry:a,layer:this.layer}))};b.attach=function(){const a=10<=this.layer.version,e=10.1<=this.layer.version?this.layer.imageMaxHeight:2048,c=10.1<=this.layer.version?this.layer.imageMaxWidth:2048;this._bitmapView=new y.BitmapContainer;this.strategy=new B({container:this._bitmapView,
imageNormalizationSupported:a,imageMaxHeight:e,imageMaxWidth:c,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});this.attached=!0};b.moveStart=function(){};b.viewChange=function(){};b.moveEnd=function(){};b.install=function(a){this.container.addChild(this._bitmapView);a.addChild(this.container)};b.uninstall=function(a){this.container.removeChild(this._bitmapView);a.removeChild(this.container)};b.redraw=function(){this.strategy.updateExports(a=>{a.source instanceof HTMLImageElement?
a.requestRender():this.layer.applyRenderer({pixelBlock:a.source.pixelBlock}).then(e=>{const c=a.source;c.pixelBlock=e.pixelBlock;c.filter=h=>this.layer.applyFilter(h);this.container.requestRender()})})};b.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())};b.isUpdating=function(){return this.strategy.updating||this.updateRequested};b.getPixelData=function(){if(this.updating)return null;var a=this.strategy.bitmaps;if(1===a.length&&a[0].source)return{extent:a[0].source.extent,
pixelBlock:a[0].source.originalPixelBlock};if(1<a.length){const e=this.view.extent;a=a.map(c=>c.source).filter(c=>c.extent&&c.extent.intersects(e)).map(c=>({extent:c.extent,pixelBlock:c.originalPixelBlock}));return(a=x.mosaicPixelData(a,e))?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null};b._fetchImage=function(a,e,c,h){h=h||{};h.timeExtent=this.timeExtent;h.requestAsImageElement=!0;return this.layer.fetchImage(a,e,c,h).then(m=>m.imageElement?m.imageElement:this.layer.applyRenderer(m.pixelData,
{signal:h.signal}).then(k=>{k=new A(k.pixelBlock,k.extent.clone(),m.pixelData.pixelBlock);k.filter=D=>this.layer.applyFilter(D);return k}))};n._createClass(l,[{key:"updating",get:function(){return!this.attached||this.isUpdating()}}]);return l}(d);f.__decorate([g.property()],d.prototype,"attached",void 0);f.__decorate([g.property()],d.prototype,"container",void 0);f.__decorate([g.property()],d.prototype,"layer",void 0);f.__decorate([g.property()],d.prototype,"strategy",void 0);f.__decorate([g.property()],
d.prototype,"timeExtent",void 0);f.__decorate([g.property()],d.prototype,"view",void 0);f.__decorate([g.property()],d.prototype,"updateRequested",void 0);f.__decorate([g.property()],d.prototype,"updating",null);f.__decorate([v.enumeration({imagery:"Imagery"})],d.prototype,"type",void 0);return d=f.__decorate([w.subclass("esri.views.2d.layers.imagery.ImageryView2D")],d)});