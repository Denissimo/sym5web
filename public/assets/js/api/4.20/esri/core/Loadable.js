// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Error ./Promise ./promiseUtils ./Warning ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(f,e,q,d,m,w,g,r){const v=b=>{b=function(c){function h(...k){var a=c.call(this,...k)||this;a._loadController=null;a.loadError=null;a.loadStatus="not-loaded";a._set("loadWarnings",[]);a.addResolvingPromise(new Promise(n=>{const x=a.load.bind(f._assertThisInitialized(a));a.load=y=>{const z=new Promise((l,
p)=>{const t=m.onAbortOrThrow(y,p);a.destroyed&&p(new q("load:instance-destroyed",`Instance of '${a.declaredClass||a.constructor.name}' is already destroyed`,{instance:f._assertThisInitialized(a)}));a._promiseProps.when(l,p).finally(()=>{t&&t.remove()})});if("not-loaded"===a.loadStatus){a._set("loadStatus","loading");const l=a._loadController=m.createAbortController();x({signal:l.signal});m.onAbort(l.signal,()=>{a._promiseProps.abort()})}n();return z}}));a.when(()=>{a._set("loadStatus","loaded");
a._loadController=null},n=>{a._set("loadStatus","failed");a._set("loadError",n);a._loadController=null});return a}f._inheritsLoose(h,c);var u=h.prototype;u.load=function(){return null};u.cancelLoad=function(){var k;if(this.isFulfilled())return this;this._set("loadError",new q("load:cancelled","Cancelled"));null==(k=this._loadController)?void 0:k.abort();return this};f._createClass(h,[{key:"loaded",get:function(){return"loaded"===this.loadStatus}},{key:"loadWarnings",get:function(){return this._get("loadWarnings")}}]);
return h}(b);e.__decorate([g.property({readOnly:!0})],b.prototype,"loaded",null);e.__decorate([g.property({readOnly:!0})],b.prototype,"loadError",void 0);e.__decorate([g.property()],b.prototype,"loadStatus",void 0);e.__decorate([g.property({type:[w],readOnly:!0})],b.prototype,"loadWarnings",null);return b=e.__decorate([r.subclass("esri.core.Loadable")],b)};d=function(b){function c(){return b.apply(this,arguments)||this}f._inheritsLoose(c,b);return c}(v(d.EsriPromise));d=e.__decorate([r.subclass("esri.core.Loadable")],
d);(function(b){b.LoadableMixin=v;b.isLoadable=function(c){return!(!c||!c.load)}})(d||(d={}));return d});