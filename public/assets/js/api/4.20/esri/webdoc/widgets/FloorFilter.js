// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,k,d,m,n,p,q,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.enabled=!1;b.longNames=!1;b.minimized=!1;b.pinnedLevels=!1;b.site=null;b.facility=null;b.level=null;return b}
h._inheritsLoose(f,g);f.prototype.clone=function(){return new e(k.clone({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))};return f}(a.JSONSupport);c.__decorate([d.property({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],a.prototype,"enabled",void 0);c.__decorate([d.property({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],a.prototype,
"longNames",void 0);c.__decorate([d.property({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],a.prototype,"minimized",void 0);c.__decorate([d.property({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],a.prototype,"pinnedLevels",void 0);c.__decorate([d.property({type:String,json:{read:{source:"site"},write:{target:"site"}}})],a.prototype,"site",void 0);c.__decorate([d.property({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],
a.prototype,"facility",void 0);c.__decorate([d.property({type:String,json:{read:{source:"level"},write:{target:"level"}}})],a.prototype,"level",void 0);return a=e=c.__decorate([l.subclass("esri.webdoc.widgets.FloorFilter")],a)});