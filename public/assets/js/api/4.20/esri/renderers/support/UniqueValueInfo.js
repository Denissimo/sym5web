// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../symbols/support/jsonUtils".split(" "),function(m,c,h,b,f,p,q,r,t,n,k){var g;b=g=function(d){function e(a){a=d.call(this,a)||this;a.description=null;a.label=null;a.symbol=null;a.value=null;return a}m._inheritsLoose(e,
d);var l=e.prototype;l.clone=function(){return new g({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})};l.getMeshHash=function(){const a=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${a}`};return e}(b.JSONSupport);c.__decorate([f.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);c.__decorate([f.property({types:h.symbolTypesRenderer,
json:{origins:{"web-scene":{types:h.symbolTypesRenderer3D,write:k.write}},write:k.write}})],b.prototype,"symbol",void 0);c.__decorate([f.property({type:[String,Number],json:{type:String,write:{writer:(d,e)=>{e.value=null==d?void 0:d.toString()}}}})],b.prototype,"value",void 0);return b=g=c.__decorate([n.subclass("esri.renderers.support.UniqueValueInfo")],b)});