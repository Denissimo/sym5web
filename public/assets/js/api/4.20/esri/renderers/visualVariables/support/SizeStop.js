// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,k,d,m,n,p,q,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.label=null;b.size=null;b.value=null;return b}h._inheritsLoose(f,g);f.prototype.clone=
function(){return new e({label:this.label,size:this.size,value:this.value})};return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([d.property({type:Number,cast:k.toPt,json:{write:!0}})],a.prototype,"size",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);return a=e=c.__decorate([l.subclass("esri.renderers.visualVariables.support.SizeStop")],a)});