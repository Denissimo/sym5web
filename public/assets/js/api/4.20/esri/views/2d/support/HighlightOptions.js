// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass".split(" "),function(g,b,e,a,c,m,n,p,q,k){let l=0;a=function(h){function f(){var d=h.apply(this,arguments)||this;d.color=new e([0,255,255]);d.haloOpacity=1;d.fillOpacity=.25;return d}g._inheritsLoose(f,
h);g._createClass(f,[{key:"version",get:function(){return l++}}]);return f}(a);b.__decorate([c.property({readOnly:!0})],a.prototype,"version",null);b.__decorate([c.property({type:e})],a.prototype,"color",void 0);b.__decorate([c.property({type:e})],a.prototype,"haloColor",void 0);b.__decorate([c.property()],a.prototype,"haloOpacity",void 0);b.__decorate([c.property()],a.prototype,"fillOpacity",void 0);return a=b.__decorate([k.subclass("esri.views.2d.support.HighlightOptions")],a)});