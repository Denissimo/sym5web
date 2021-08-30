// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/jsonUtils","../CurveHelper"],function(f,g,h){let k=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(a,b,d){return new l(a,b,d)};return c}();k.instance=null;let l=function(){function c(a,b,d){this._inputGeometries=a;this._curveHelper=new h.CurveHelper;this._width=(void 0!==b.width?b.width:2)*d;switch(b.method){default:this._method="Mitered";break;case "Bevelled":this._method=
"Bevelled";break;case "Rounded":case "TrueBuffer":this._method="Rounded";break;case "Square":this._method="Square"}this._option=b.option;this._offsetFlattenError=h.PIXEL_TOLERANCE*d}c.prototype.next=function(){for(var a=this._inputGeometries.next();a;){if(g.isExtent(a)&&0<this._width){if(0>Math.min(a.xmax-a.xmin,a.ymax-a.ymin)-2*this._width)return a;var b=[];b.push([[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]);b.push([[a.xmin+this._width,a.ymin+this._width],[a.xmax-
this._width,a.ymin+this._width],[a.xmax-this._width,a.ymax-this._width],[a.xmin+this._width,a.ymax-this._width],[a.xmin+this._width,a.ymin+this._width]]);return{rings:b}}if(g.isPolygon(a)&&0<this._width){b=[];for(const d of a.rings){a=this._curveHelper.calculatePathLength(d);const e=this._curveHelper.offset(d,this._width,this._method,4,this._offsetFlattenError);e&&(0>a&&e.reverse(),b.push(e))}if(b.length)return{rings:b}}a=this._inputGeometries.next()}return null};return c}();f.EffectDonut=k;Object.defineProperty(f,
"__esModule",{value:!0})});