// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,b,m,n,p,d,r,t,u,v,q){b=function(k){function e(a){a=k.call(this,a)||this;a._handles=new m;a.compatibilityFunction=
null;a.error=null;a.state="loading";a.view=null;return a}h._inheritsLoose(e,k);var f=e.prototype;f.initialize=function(){this._handles.add(p.init(this,["basemap.loadStatus","compatibilityFunction","view.basemapTerrain?.tilingScheme","view.ready","view.spatialReference"],()=>this.refresh()))};f.destroy=function(){this._cancelCompatibilityCheck();this._handles.destroy();this.view=this.compatibilityFunction=this.basemap=this._handles=null};f.refresh=function(){this._cancelCompatibilityCheck();this._set("state",
"loading");var a=this.get("basemap.loadStatus");if("loaded"===a||"failed"===a)if(this.compatibilityFunction){a=new AbortController;var {signal:g}=a;this.compatibilityFunction(this,{signal:g}).then(()=>{this._set("state","ready");this._set("error",null)}).catch(l=>{n.isAbortError(l)||(this._set("state","error"),this._set("error",l))});this._lastCompatibilityCheckController=a}else"loaded"===a?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError))};
f._cancelCompatibilityCheck=function(){this._lastCompatibilityCheckController&&(this._lastCompatibilityCheckController.abort(),this._lastCompatibilityCheckController=null)};h._createClass(e,[{key:"basemap",set:function(a){const g=this._get("basemap");g&&g.cancelLoad();a&&a.load().catch(()=>{});this._set("basemap",a)}}]);return e}(b);c.__decorate([d.property()],b.prototype,"basemap",null);c.__decorate([d.property()],b.prototype,"compatibilityFunction",void 0);c.__decorate([d.property({readOnly:!0})],
b.prototype,"error",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",void 0);c.__decorate([d.property()],b.prototype,"view",void 0);return b=c.__decorate([q.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],b)});