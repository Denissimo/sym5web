// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/lang","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/jsonUtils"],function(l,k,q,r,e){let m=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(f,a,b){return new t(f,a,b)};return c}();m.instance=null;let t=function(){function c(a,b,d){this._inputGeometries=a;this._rotateAngle=void 0!==b.angle?-b.angle*Math.PI/180:0}var f=c.prototype;
f.next=function(){for(var a=this._inputGeometries.next();a;){if(0===this._rotateAngle)return a;var b=q.create();r.getBoundsXY(b,a);const d=(b[2]+b[0])/2;b=(b[3]+b[1])/2;if(e.isExtent(a))return a={rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]},this._rotateMultipath(a.rings,d,b),a;if(e.isPolygon(a))return a=k.clone(a),this._rotateMultipath(a.rings,d,b),a;if(e.isPolyline(a))return a=k.clone(a),this._rotateMultipath(a.paths,d,b),a;if(e.isMultipoint(a))return a=
k.clone(a),this._rotatePath(a.points,d,b),a;if(e.isPoint(a))return a;a=this._inputGeometries.next()}return null};f._rotateMultipath=function(a,b,d){if(a)for(const g of a)this._rotatePath(g,b,d)};f._rotatePath=function(a,b,d){if(a){const g=Math.cos(this._rotateAngle),n=Math.sin(this._rotateAngle);for(const h of a){a=h[0]-b;const p=h[1]-d;h[0]=b+a*g-p*n;h[1]=d+a*n+p*g}}};return c}();l.EffectRotate=m;Object.defineProperty(l,"__esModule",{value:!0})});