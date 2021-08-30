// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/maybe ../core/screenUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/colors ./support/materialUtils ./support/Symbol3DMaterial".split(" "),function(k,c,l,m,n,d,b,v,w,p,q,r,t,g,u){var e;b=e=function(h){function f(a){a=h.call(this,a)||this;a.material=
null;a.type="line";a.join="miter";a.cap="butt";a.size=n.px2pt(1);a.stipplePattern=null;a.stippleOffColor=null;return a}k._inheritsLoose(f,h);f.prototype.clone=function(){return new e({enabled:this.enabled,material:m.isSome(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})};f.fromSimpleLineSymbol=function(a){return new e({size:a.width||
1,cap:a.cap||"butt",join:a.join||"miter",material:{color:(a.color||t.white).clone()}})};return f}(r);c.__decorate([d.property({type:u["default"],json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([p.enumeration({Line:"line"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],b.prototype,"join",void 0);c.__decorate([d.property({type:["butt","square","round"],json:{write:!0,default:"butt"}})],b.prototype,
"cap",void 0);c.__decorate([d.property(g.screenSizeProperty)],b.prototype,"size",void 0);c.__decorate([d.property(g.stipplePatternProperty)],b.prototype,"stipplePattern",void 0);c.__decorate([d.property({type:l})],b.prototype,"stippleOffColor",void 0);return b=e=c.__decorate([q.subclass("esri.symbols.LineSymbol3DLayer")],b)});