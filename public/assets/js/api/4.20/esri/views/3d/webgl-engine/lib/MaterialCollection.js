// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let f=function(){function d(a){this._stage=a;this._materials=new Map}var b=d.prototype;b.get=function(a){return this._materials.get(a)};b.add=function(a,e){this._materials.set(a,e);this._stage.add(e)};b.dispose=function(){this._stage.removeMany(Array.from(this._materials.values()));this._materials.clear()};return d}();c.MaterialCollection=f;Object.defineProperty(c,"__esModule",{value:!0})});