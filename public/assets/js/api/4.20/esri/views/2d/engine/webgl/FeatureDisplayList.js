// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(g,h){let k=function(){function c(a,b,d,f,l){this.target=a;this.geometryType=b;this.materialKey=d;this.indexFrom=f;this.indexCount=l}var e=c.prototype;e.extend=function(a){this.indexCount+=a};e.draw=function(a,b,d){this.target.draw(a,b,d,this.indexFrom,this.indexCount)};h._createClass(c,[{key:"indexEnd",get:function(){return this.indexFrom+this.indexCount}}]);return c}(),m=function(){function c(a){this._infos=[];this._target=
a}c.from=function(a,b){for(a=new c(a);b.next();)a.add(b);return a};var e=c.prototype;e.add=function(a){const {materialKey:b,indexFrom:d,indexCount:f}=a;this._infos.length&&a.materialKey===this._last.materialKey&&a.indexFrom===this._last.indexEnd?this._last.extend(f):(a=new k(this._target,this.geometryType,b,d,f),this._infos.push(a))};e.forEach=function(a){for(const b of this._infos)a(b)};h._createClass(c,[{key:"_last",get:function(){return this._infos[this._infos.length-1]}}]);return c}();g.FeatureDisplayList=
m;g.FeatureDisplayListInfo=k;Object.defineProperty(g,"__esModule",{value:!0})});