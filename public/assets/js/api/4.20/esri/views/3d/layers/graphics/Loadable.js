// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils"],function(e,h,f){let k=function(){function c(a){this.schedule=a;this._abortController=null;this._loadStatus=0;this.logger=this._loader=this._loadError=null}var g=c.prototype;g.load=function(a,d){if(1===this._loadStatus)return a&&a(),this._loader;if(2===this._loadStatus)return d&&d(this._loadError),this._loader;this._loader||(this._abortController=f.createAbortController(),this._loader=this.doLoad(this._abortController.signal).then(()=>
{this._abortController=null;this._loadStatus=1},b=>{this._loadError=b;this._abortController=null;this._loadStatus=2;!f.isAbortError(b)&&this.logger&&b.message&&this.logger.warn(b.message);throw b;}));this._loader.then(a,d).catch(()=>{});return this._loader};g.abortLoad=function(){this._abortController?(this._abortController.abort(),this._abortController=null):0===this._loadStatus&&(this._loadStatus=2);this._loader=null};h._createClass(c,[{key:"loadStatus",get:function(){return this._loadStatus}}]);
return c}();e.Loadable=k;Object.defineProperty(e,"__esModule",{value:!0})});