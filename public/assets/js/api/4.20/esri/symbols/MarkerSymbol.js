// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/screenUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/subclass ./Symbol".split(" "),function(h,d,g,e,b,m,n,p,k,l){b=function(a){function f(c){c=a.call(this,c)||this;c.angle=0;c.type=null;c.xoffset=0;c.yoffset=0;c.size=9;return c}h._inheritsLoose(f,a);f.prototype.hash=function(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`};
return f}(l);d.__decorate([e.property({type:Number,json:{read:a=>a&&-1*a,write:(a,f)=>f.angle=a&&-1*a}})],b.prototype,"angle",void 0);d.__decorate([e.property({type:["simple-marker","picture-marker"],readOnly:!0})],b.prototype,"type",void 0);d.__decorate([e.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);d.__decorate([e.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);d.__decorate([e.property({type:Number,cast:a=>"auto"===a?a:g.toPt(a),
json:{write:!0}})],b.prototype,"size",void 0);return b=d.__decorate([k.subclass("esri.symbols.MarkerSymbol")],b)});