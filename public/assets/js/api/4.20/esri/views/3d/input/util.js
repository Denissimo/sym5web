// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],function(c,e){let f=function(){function b(a){this._gain=a}var d=b.prototype;d.reset=function(a){this._value=a};d.update=function(a){this._value=void 0===this._value?a:this._gain*a+(1-this._gain)*this._value};e._createClass(b,[{key:"gain",set:function(a){this._gain=a}},{key:"value",get:function(){return void 0===this._value?0:this._value}}]);return b}();c.ExponentialFalloff=f;Object.defineProperty(c,"__esModule",{value:!0})});