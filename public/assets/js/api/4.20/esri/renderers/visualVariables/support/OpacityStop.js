// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ../../../webdoc/support/opacityUtils".split(" "),function(m,c,a,d,u,n,v,w,p,q,r,k){var e;a=e=function(l){function f(b){b=
l.call(this,b)||this;b.label=null;b.opacity=null;b.value=null;return b}m._inheritsLoose(f,l);var g=f.prototype;g.readOpacity=function(b,h){return k.transparencyToOpacity(h.transparency)};g.writeOpacity=function(b,h,t){h[t]=k.opacityToTransparency(b)};g.clone=function(){return new e({label:this.label,opacity:this.opacity,value:this.value})};return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([d.property({type:Number,json:{type:n.Integer,
write:{target:"transparency"}}})],a.prototype,"opacity",void 0);c.__decorate([p.reader("opacity",["transparency"])],a.prototype,"readOpacity",null);c.__decorate([r.writer("opacity")],a.prototype,"writeOpacity",null);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);return a=e=c.__decorate([q.subclass("esri.renderers.visualVariables.support.OpacityStop")],a)});