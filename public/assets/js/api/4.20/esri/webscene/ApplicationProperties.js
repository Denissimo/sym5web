// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/subclass ../webdoc/applicationProperties/Viewing".split(" "),function(g,e,a,h,m,n,p,q,k,l){var c;a=c=function(f){function d(b){b=f.call(this,b)||this;b.viewing=null;return b}g._inheritsLoose(d,f);d.prototype.clone=function(){return new c({viewing:this.viewing?
this.viewing.clone():null})};return d}(a.JSONSupport);e.__decorate([h.property({type:l,json:{write:!0}})],a.prototype,"viewing",void 0);return a=c=e.__decorate([k.subclass("esri.webscene.ApplicationProperties")],a)});