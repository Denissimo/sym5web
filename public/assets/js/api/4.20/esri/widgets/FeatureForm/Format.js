// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/date ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,h,a,d,l,m,n,p,k){a=function(e){function f(b){b=e.call(this,b)||this;b.digitSeparator=!1;b.dateFormat=null;b.places=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property()],
a.prototype,"digitSeparator",void 0);c.__decorate([d.property({json:{read:{source:"dateFormat",reader:h.fromJSON}}})],a.prototype,"dateFormat",void 0);c.__decorate([d.property()],a.prototype,"places",void 0);return a=c.__decorate([k.subclass("esri.widgets.FeatureForm.Format")],a)});