// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec4f64","../../../../../chunks/boundedPlane"],function(b,e,f,a){const c=a.create(),g=f.create();b.distanceToTile=function(d,h){a.fromAABoundingRect(h.extent,c);return a.distance(c,e.set(g,d.x,d.y,0))};Object.defineProperty(b,"__esModule",{value:!0})});