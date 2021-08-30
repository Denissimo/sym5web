// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],function(c,f,d,g){let h=function(){function b(a=!0){this.enabled=a;this._time=0}var e=b.prototype;e.advance=function(a){this.enabled&&(this._time+=a);return d.isNone(this._forcedTime)&&this.enabled&&0!==a};e.stopAtTime=function(a){this._forcedTime=a};f._createClass(b,[{key:"time",get:function(){return d.isSome(this._forcedTime)?this._forcedTime:g.Milliseconds(this._time)}}]);return b}();
c.AnimationTimer=h;Object.defineProperty(c,"__esModule",{value:!0})});