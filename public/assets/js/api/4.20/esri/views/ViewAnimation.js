// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/Promise ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/subclass".split(" "),function(h,d,l,a,m,g,p,q,r,t,n){a=function(k){function e(b){b=k.call(this,b)||this;b.state="running";b.target=null;return b}h._inheritsLoose(e,k);var f=e.prototype;f.initialize=function(){this.addResolvingPromise(new Promise((b,
c)=>this._dfd={resolve:b,reject:c}))};f.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd.reject(new l("ViewAnimation stopped")))};f.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd.resolve())};f.update=function(b,c){c||(c=m.isPromiseLike(b)?"waiting-for-target":"running");this._set("target",b);this._set("state",c)};h._createClass(e,[{key:"done",get:function(){return"finished"===this.state||
"stopped"===this.state}}]);return e}(a.EsriPromise);d.__decorate([g.property({readOnly:!0})],a.prototype,"done",null);d.__decorate([g.property({readOnly:!0,type:String})],a.prototype,"state",void 0);d.__decorate([g.property()],a.prototype,"target",void 0);a=d.__decorate([n.subclass("esri.views.ViewAnimation")],a);(a||(a={})).State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"};return a});