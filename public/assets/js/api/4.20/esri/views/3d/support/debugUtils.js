// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../Graphic ../../../symbols ../../../core/maybe ../../../geometry/Point ../../../symbols/PointSymbol3D ../../../symbols/IconSymbol3DLayer ../../../symbols/TextSymbol3DLayer".split(" "),function(c,d,h,q,e,k,l,m,n){d=function(){function f(a,b,p=""){this.graphics=a;this._symbol=new l({symbolLayers:[new m({material:{color:b},outline:{color:[255,255,255],size:1},resource:{primitive:"circle"}}),new n({text:p,halo:{color:"white",size:1/.75},material:{color:b},size:12})]})}
var g=f.prototype;g.showPoint=function(a,b){e.isNone(b)||(this.remove(),a=new k({x:a[0],y:a[1],z:a[2],spatialReference:b}),this._graphic=new h({geometry:a,symbol:this._symbol}),this.graphics.add(this._graphic))};g.remove=function(){e.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)};return f}();c.GraphicsHandle=d;Object.defineProperty(c,"__esModule",{value:!0})});