// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./accessorSupport/read ./accessorSupport/write ./accessorSupport/decorators/subclass".split(" "),function(c,h,k,p,q,r,l){const n=a=>{a=function(d){function f(...b){return d.call(this,...b)||this}h._inheritsLoose(f,d);var g=f.prototype;g.read=function(b,e){q.read(this,b,e)};g.write=function(b={},e){return r.write(this,b,e)};g.toJSON=function(b){return this.write({},b)};f.fromJSON=function(b,e){if(b){if(b.declaredClass)throw Error("JSON object is already hydrated");
var m=new this;m.read(b,e);b=m}else b=null;return b};return f}(a);a=k.__decorate([l.subclass("esri.core.JSONSupport")],a);a.prototype.toJSON.isDefaultToJSON=!0;return a};c.JSONSupport=function(a){function d(){return a.apply(this,arguments)||this}h._inheritsLoose(d,a);return d}(n(p));c.JSONSupport=k.__decorate([l.subclass("esri.core.JSONSupport")],c.JSONSupport);c.JSONSupportMixin=n;c.isJSONSupport=function(a){return a&&"read"in a&&"write"in a&&"toJSON"in a};Object.defineProperty(c,"__esModule",{value:!0})});