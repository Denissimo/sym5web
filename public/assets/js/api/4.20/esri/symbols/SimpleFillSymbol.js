// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/jsonMap ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./FillSymbol ./SimpleLineSymbol".split(" "),function(p,c,q,d,r,f,w,x,y,t,u,b,v){var g;d=new d.JSONMap({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",
esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});b=g=function(h){function k(...a){a=h.call(this,...a)||this;a.color=new q([0,0,0,.25]);a.outline=new v;a.type="simple-fill";a.style="solid";return a}p._inheritsLoose(k,h);var l=k.prototype;l.normalizeCtorArgs=function(a,m,n){if(a&&"string"!==typeof a)return a;const e={};a&&(e.style=a);m&&(e.outline=m);n&&(e.color=n);return e};l.clone=function(){return new g({color:r.clone(this.color),outline:this.outline&&
this.outline.clone(),style:this.style})};l.hash=function(){return`${h.prototype.hash.call(this)}${this.style}.${this.color&&this.color.hash()}`};return k}(b);c.__decorate([f.property()],b.prototype,"color",void 0);c.__decorate([f.property()],b.prototype,"outline",void 0);c.__decorate([t.enumeration({esriSFS:"simple-fill"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([f.property({type:d.apiValues,json:{read:d.read,write:d.write}})],b.prototype,"style",void 0);return b=g=c.__decorate([u.subclass("esri.symbols.SimpleFillSymbol")],
b)});