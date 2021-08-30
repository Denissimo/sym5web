// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators/aliasOf ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../layers/SliceLayer ../../views/3d/interactive/analysisTools/slice/SliceTool ../support/InteractiveToolViewModel".split(" "),
function(h,e,m,n,q,b,f,r,t,u,A,B,C,g,v,w,x,y){const z=b.getLogger("esri.widgets.Slice.SliceViewModel"),l=new Set;b=function(p){function k(a){a=p.call(this,a)||this;a.layerView=null;a.supportedViewType="3d";a.handles=new q;a.model=new w({listMode:"hide"});a.shape=null;a.tiltEnabled=!1;a.ready=!1;l.add(h._assertThisInitialized(a));return a}h._inheritsLoose(k,p);var c=k.prototype;c.initialize=function(){this.handles.add(this.watch("shape",(a,d)=>{f.isNone(d)&&f.isSome(a)?this.tool||this.creatingTool||
this.createTool():f.isSome(d)&&f.isNone(a)&&this.tool&&this.removeTool()},!0));this.handles.add(this.watch("tiltEnabled",a=>this._updateToolOrRecreate(d=>d.tiltEnabled=a),!0));this.handles.add(this.watch("view",a=>{this._disconnectFromView();this._connectToView(a)},!0));this._connectToView(this.view)};c.destroy=function(){this._disconnectFromView();l.delete(this);this.handles.destroy()};c.start=function(){var a=h._asyncToGenerator(function*(){this.removeTool();this.ready||(yield t.whenTrueOnce(this,
"ready"));l.forEach(d=>{d.view===this.view&&d!==this&&d.clear()});yield this.createTool()});return function(){return a.apply(this,arguments)}}();c.clear=function(){this.removeTool();this.excludeGroundSurface=!1;this.excludedLayers=new m};c.removeSliceAndStart=function(){this.removeTool();this.shape=null;return this.start()};c.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()};c.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()};c._updateToolOrRecreate=
function(a){this.tool?a(this.tool):this.creatingTool&&r.ignoreAbortErrors(this.createTool())};c.createToolParams=function(){return{toolConstructor:x,constructorArguments:()=>({tiltEnabled:this.tiltEnabled,analysis:this.model})}};c.logUnsupportedError=function(){this.logError("Slice widget is not implemented for MapView")};c.logError=function(...a){z.error(...a)};c._connectToView=function(a){f.isNone(a)||(a.map.layers.includes(this.model)||a.map.layers.add(this.model),"3d"===a.type&&a.whenLayerView(this.model).then(d=>
{this.destroyed||a!==this.view||(d.layerViewData.excludeGroundSurface=this.excludeGroundSurface,d.layerViewData.excludedLayers=this.excludedLayers,this.layerView=d,this.ready=!0)}))};c._disconnectFromView=function(){null!=this.view&&(this.view.map.remove(this.model),this.layerView=null)};h._createClass(k,[{key:"state",get:function(){return this.isDisabled||!this.ready?"disabled":this.tool&&"pending"!==this.tool.toolState?this.tool.state:"ready"}},{key:"excludedLayers",get:function(){return f.isSome(this.layerView)?
this.layerView.layerViewData.excludedLayers:this._get("excludedLayers")||new m},set:function(a){this._set("excludedLayers",n.referenceSetter(a,this.excludedLayers));f.isSome(this.layerView)&&(this.layerView.layerViewData.excludedLayers=a)}},{key:"excludeGroundSurface",get:function(){return f.isSome(this.layerView)?this.layerView.layerViewData.excludeGroundSurface:this._get("excludeGroundSurface")||!1},set:function(a){this._set("excludeGroundSurface",a);f.isSome(this.layerView)&&(this.layerView.layerViewData.excludeGroundSurface=
a)}}]);return k}(y.InteractiveToolViewModel);e.__decorate([g.property()],b.prototype,"layerView",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"state",null);e.__decorate([g.property()],b.prototype,"tool",void 0);e.__decorate([g.property()],b.prototype,"model",void 0);e.__decorate([g.property({aliasOf:"model.plane"})],b.prototype,"shape",void 0);e.__decorate([g.property({aliasOf:"model.tiltEnabled"})],b.prototype,"tiltEnabled",void 0);e.__decorate([u.aliasOf("tool.layersMode")],b.prototype,
"layersMode",void 0);e.__decorate([g.property({cast:n.castForReferenceSetter})],b.prototype,"excludedLayers",null);e.__decorate([g.property({nonNullable:!0})],b.prototype,"excludeGroundSurface",null);e.__decorate([g.property()],b.prototype,"ready",void 0);return b=e.__decorate([v.subclass("esri.widgets.slice.SliceViewModel")],b)});