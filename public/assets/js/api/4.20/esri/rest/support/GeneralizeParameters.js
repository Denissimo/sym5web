// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(g,e,a,f,m,h,n,p,k,l){a=function(c){function d(b){b=c.call(this,b)||this;b.deviationUnit=null;b.geometries=null;b.maxDeviation=null;return b}g._inheritsLoose(d,c);return d}(a.JSONSupport);
e.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"deviationUnit",void 0);e.__decorate([f.property({json:{read:{reader:c=>c?c.map(d=>l.fromJSON(d)):null},write:{writer:(c,d)=>{d.geometries=c.map(b=>b.toJSON())}}}})],a.prototype,"geometries",void 0);e.__decorate([f.property({type:Number,json:{write:!0}})],a.prototype,"maxDeviation",void 0);a=e.__decorate([k.subclass("esri.rest.support.GeneralizeParameters")],a);a.from=h.ensureType(a);return a});