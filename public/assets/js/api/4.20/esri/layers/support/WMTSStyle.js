// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,b,d,l,m,n,p,k){var e;b=e=function(g){function f(a){a=g.call(this,a)||this;a.id=null;a.title=null;a.description=null;a.legendUrl=null;return a}h._inheritsLoose(f,g);f.prototype.clone=function(){const a=
new e;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("id")&&(a.id=this.id);this.hasOwnProperty("isDefault")&&(a.isDefault=this.isDefault);this.hasOwnProperty("keywords")&&(a.keywords=this.keywords&&this.keywords.slice());this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("title")&&(a.title=this.title);return a};return f}(b.JSONSupport);c.__decorate([d.property({json:{read:{source:"id"}}})],b.prototype,"id",void 0);c.__decorate([d.property({json:{read:{source:"title"}}})],
b.prototype,"title",void 0);c.__decorate([d.property({json:{read:{source:"abstract"}}})],b.prototype,"description",void 0);c.__decorate([d.property({json:{read:{source:"legendUrl"}}})],b.prototype,"legendUrl",void 0);c.__decorate([d.property({json:{read:{source:"isDefault"}}})],b.prototype,"isDefault",void 0);c.__decorate([d.property({json:{read:{source:"keywords"}}})],b.prototype,"keywords",void 0);return b=e=c.__decorate([k.subclass("esri.layer.support.WMTSStyle")],b)});