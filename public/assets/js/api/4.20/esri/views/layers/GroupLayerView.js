// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ./LayerView".split(" "),function(k,e,n,l,h,d,t,u,v,p,q){d=function(m){function f(a){a=m.call(this,a)||this;a.type="group";a.layerViews=new n;return a}k._inheritsLoose(f,m);var c=f.prototype;c.initialize=
function(){this.handles.add([this.layerViews.on("change",a=>this._layerViewsChangeHandler(a)),this.layerViews.on("after-changes",()=>this._layerViewsAfterChangesHandler()),this.layer.watch("visibilityMode",()=>this._visibilityModeHandler(),!0),this.watch("visible",()=>this._visibleHandler(),!0)],"grouplayerview");this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});this._layerViewsAfterChangesHandler()};c.isUpdating=function(){return this.layerViews.some(a=>
a.updating)};c._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(a=>a._isOverridden("visible"))};c._findLayerViewForLayer=function(a){return a&&this.layerViews.find(b=>b.layer===a)};c._firstVisibleOnLayerOrder=function(){const a=this.layer.layers.find(b=>(b=this._findLayerViewForLayer(b))&&b.visible);return a&&this._findLayerViewForLayer(a)};c._enforceExclusiveVisibility=function(a){this._hasLayerViewVisibleOverrides()&&(a||(a=this._firstVisibleOnLayerOrder(),!a&&0<this.layerViews.length&&
(a=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(b=>{b.visible=b===a}))};c._layerViewsChangeHandler=function(a){this.handles.remove("grouplayerview:visible");this.handles.add(this.layerViews.map(g=>g.watch("visible",r=>this._layerViewVisibleHandler(r,g),!0)).toArray(),"grouplayerview:visible");a=a.added[a.added.length-1];let b=null;a&&a.visible&&(b=a);this._enforceVisibility(b)};c._layerViewsAfterChangesHandler=function(){this.handles.remove("grouplayerview:updating");
this.handles.add(this.layerViews.map(a=>a.watch("updating",()=>this._updateUpdating(),!0)).toArray(),"grouplayerview:updating");this._updateUpdating()};c._enforceVisibility=function(a){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":{const b=this.visible;this.layerViews.forEach(g=>{g.visible=b});break}case "exclusive":this._enforceExclusiveVisibility(a)}};c._visibilityModeHandler=function(){this._enforceVisibility()};c._layerViewVisibleHandler=function(a,
b){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":a!==this.visible&&(b.visible=this.visible);break;case "exclusive":this._enforceExclusiveVisibility(a&&b)}};c._visibleHandler=function(){var a;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(a=this.layer)?void 0:a.visibilityMode)&&this._enforceVisibility()};c._updateUpdating=function(){this.notifyChange("updating")};k._createClass(f,[{key:"layerViews",set:function(a){this._set("layerViews",l.referenceSetter(a,
this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((a,b)=>a+b.updatingProgress,0)/this.layerViews.length}}]);return f}(q);e.__decorate([h.property({cast:l.castForReferenceSetter})],d.prototype,"layerViews",null);e.__decorate([h.property()],d.prototype,"view",void 0);e.__decorate([h.property({readOnly:!0})],d.prototype,"updatingProgress",null);return d=e.__decorate([p.subclass("esri.views.layers.GroupLayerView")],d)});