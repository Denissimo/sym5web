// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/SpatialReference ./TraceLocation".split(" "),function(g,c,a,d,m,n,p,q,h,k,l){a=function(e){function f(b){b=e.call(this,b)||this;b.namedTraceConfigurationGlobalId=null;b.gdbVersion=
null;b.traceLocations=[];b.moment=null;b.outSpatialReference=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],a.prototype,"namedTraceConfigurationGlobalId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);c.__decorate([d.property({type:[l],json:{write:!0}})],a.prototype,"traceLocations",void 0);c.__decorate([d.property({type:Date,
json:{type:Number,write:{writer:(e,f)=>{f.moment=e?e.getTime():null}}}})],a.prototype,"moment",void 0);c.__decorate([d.property({type:k,json:{read:!1}})],a.prototype,"outSpatialReference",void 0);return a=c.__decorate([h.subclass("esri.rest.networks.support.TraceParameters")],a)});