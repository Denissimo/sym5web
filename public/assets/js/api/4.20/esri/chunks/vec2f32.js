// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function e(){return new Float32Array(2)}function l(c){const b=new Float32Array(2);b[0]=c[0];b[1]=c[1];return b}function d(c,b){const f=new Float32Array(2);f[0]=c;f[1]=b;return f}function m(c,b){return new Float32Array(c,b,2)}function n(){return e()}function g(){return d(1,1)}function h(){return d(1,0)}function k(){return d(0,1)}const p=e(),q=g(),r=h(),t=k();var u=Object.freeze({__proto__:null,create:e,clone:l,fromValues:d,createView:m,zeros:n,ones:g,unitX:h,unitY:k,
ZEROS:p,ONES:q,UNIT_X:r,UNIT_Y:t});a.ONES=q;a.UNIT_X=r;a.UNIT_Y=t;a.ZEROS=p;a.clone=l;a.create=e;a.createView=m;a.fromValues=d;a.ones=g;a.unitX=h;a.unitY=k;a.vec2f32=u;a.zeros=n});