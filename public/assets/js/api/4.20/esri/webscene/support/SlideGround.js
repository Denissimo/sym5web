// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Ground ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../webdoc/support/opacityUtils".split(" "),function(k,f,l,c,m,q,n,r,t,p,g){var d;c=d=function(e){function b(){var a=e.apply(this,arguments)||this;a.opacity=null;return a}k._inheritsLoose(b,e);var h=b.prototype;
h.clone=function(){return new d({opacity:this.opacity})};h.cloneAndApplyTo=function(a){if(null==this.opacity)return a;a=null!=a?a.clone():new l;a.opacity=this.opacity;return a};b.fromGround=function(a){return new d({opacity:a.opacity})};return b}(c.JSONSupport);f.__decorate([m.property({type:Number,json:{type:n.Integer,read:{reader:g.transparencyToOpacity,source:"transparency"},write:{writer:(e,b)=>{b.transparency=g.opacityToTransparency(e)},target:"transparency"}}})],c.prototype,"opacity",void 0);
return c=d=f.__decorate([p.subclass("esri.webscene.support.SlideGround")],c)});