// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/ray","../../../../chunks/sphere","./ray"],function(b,c,d,e){const f=c.create();b.intersectScreen=function(g,a,h,k){a=e.fromScreenAtEye(a,h,f);return d.intersectRay(g,a,k)};Object.defineProperty(b,"__esModule",{value:!0})});