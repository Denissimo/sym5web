// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./CodedValue ./Domain".split(" "),function(l,c,m,n,b,v,w,p,q,r,t){var d;b=d=function(g){function e(a){a=g.call(this,a)||this;a.codedValues=null;a.type="coded-value";return a}l._inheritsLoose(e,g);var h=
e.prototype;h.getName=function(a){let f=null;if(this.codedValues){const u=String(a);this.codedValues.some(k=>{String(k.code)===u&&(f=k.name);return!!f})}return f};h.clone=function(){return new d({codedValues:m.clone(this.codedValues),name:this.name})};return e}(t);c.__decorate([n.property({type:[r["default"]],json:{write:!0}})],b.prototype,"codedValues",void 0);c.__decorate([p.enumeration({codedValue:"coded-value"})],b.prototype,"type",void 0);return b=d=c.__decorate([q.subclass("esri.layers.support.CodedValueDomain")],
b)});