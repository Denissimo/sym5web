// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/accessorSupport/decorators/subclass ./GPMessage".split(" "),function(g,d,b,h,l,m,n,k,a){b=new b.JSONMap({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});a=function(e){function f(c){c=e.call(this,c)||this;c.type=
null;return c}g._inheritsLoose(f,e);return f}(a);d.__decorate([h.property({type:String,json:{read:b.read,write:b.write}})],a.prototype,"type",void 0);return a=d.__decorate([k.subclass("esri.rest.support.NAMessage")],a)});