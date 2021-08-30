// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./TiledLayerView3D ../terrain/RasterTile ../../layers/ImageryTileLayerView ../../layers/LayerView ../../layers/RefreshableLayerView ../../support/drapedUtils ../../webgl/capabilities".split(" "),
function(k,h,t,u,l,g,E,F,G,v,w,x,y,z,A,B,C,D){g=function(r){function m(){var a=r.apply(this,arguments)||this;a.type="imagery-tile-3d";a.isAlignedMapTile=!0;return a}k._inheritsLoose(m,r);var e=m.prototype;e.initialize=function(){this.layer.increaseRasterJobHandlerUsage();var a=this.updateFullExtent();this.addResolvingPromise(a);a=u.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(()=>{var c=this.view.basemapTerrain.tilingScheme;const {tileInfo:b}=this.layer,f=-1<["png","png24","png32",
"jpg","mixed"].indexOf(b.format)&&c.compatibleWith(b);c=(this.isAlignedMapTile=f)?b:c.toTileInfo();this._set("tileInfo",c);this.updatingHandles.add(this,"layer.renderer",()=>this.refresh());this.updatingHandles.add(this,"layer.interpolation",()=>this.refresh());this.updatingHandles.add(this,"layer.bandIds",()=>this.refresh());this.updatingHandles.add(this,"layer.multidimensionalDefinition",()=>this.refresh())});this.addResolvingPromise(a)};e.destroy=function(){this.layer.decreaseRasterJobHandlerUsage();
this.view=null};e.fetchTile=function(){var a=k._asyncToGenerator(function*(c,b,f,d){const p=this.tileInfo,q=this._canSymbolizeInWebGL();d={tileInfo:p,requestRawData:q,signal:t.unwrap(d.signal),requestAsImageElement:this.isAlignedMapTile};d=yield this.layer.fetchTile(c,b,f,d);if(d instanceof HTMLImageElement)return d;let n=d&&d.pixelBlock;if(!n||!q&&(n=yield this.layer.applyRenderer(d),null==n))return this._blankTile;b=new y([c,b,f],n,p.size[0],p.size[1]);q?(b.symbolizerRenderer=this.layer.symbolizer.rendererJSON,
b.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(c)),b.transformGrid=d.transformGrid):b.isRendereredSource=!0;b.interpolation=this.layer.interpolation;b.bandIds=this.layer.bandIds;return b});return function(c,b,f,d){return a.apply(this,arguments)}}();e._getSymbolizerOptions=function(a){a=this.tileInfo.lodAt(a).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:a,y:a},bandIds:this.layer.bandIds}};e.ensureSymbolizerParameters=
function(a){this._canSymbolizeInWebGL()&&JSON.stringify(a.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a.lij[0])))};e.createFetchPopupFeaturesQueryGeometry=function(a,c){return C.createQueryGeometry(a,c,this.view)};e.refresh=function(){this.emit("data-changed")};e.doRefresh=function(){var a=k._asyncToGenerator(function*(c){this.suspended||this.emit("data-changed")});return function(c){return a.apply(this,
arguments)}}();e._canSymbolizeInWebGL=function(){return D().supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL};k._createClass(m,[{key:"_blankTile",get:function(){const a=document.createElement("canvas"),c=a.getContext("2d"),[b,f]=this.tileInfo.size;a.width=b;a.height=f;c.clearRect(0,0,b,f);return c.getImageData(0,0,b,f)}},{key:"imageFormatIsOpaque",get:function(){return"jpg"===this.layer.tileInfo.format}},{key:"hasMixedImageFormats",get:function(){return"mixed"===this.layer.tileInfo.format}},
{key:"dataLevelRange",get:function(){const a=this.layer.tileInfo.lods;return this.levelRangeFromScaleRange(this.tileInfo.lods[0].scale,a[a.length-1].scale)}}]);return m}(z.ImageryTileLayerView(B.RefreshableLayerView(x.TiledLayerView3D(w.LayerView3D(A)))));h.__decorate([l.property({readOnly:!0})],g.prototype,"_blankTile",null);h.__decorate([l.property({readOnly:!0})],g.prototype,"imageFormatIsOpaque",null);h.__decorate([l.property({readOnly:!0})],g.prototype,"hasMixedImageFormats",null);h.__decorate([l.property({readOnly:!0})],
g.prototype,"dataLevelRange",null);return g=h.__decorate([v.subclass("esri.views.3d.layers.ImageryTileLayerView3D")],g)});