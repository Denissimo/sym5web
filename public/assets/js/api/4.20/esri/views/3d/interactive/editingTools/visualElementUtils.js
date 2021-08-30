// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","./lineGraphicVisualElementUtils","./originGraphicVisualElementUtils"],function(b,c,d,e){b.createVisualElements=function(a){switch(c.unwrap(a.graphic.geometry).type){case "point":case "mesh":return e.createVisualElements(a);case "polygon":case "polyline":return d.createVisualElements(a);default:return null}};Object.defineProperty(b,"__esModule",{value:!0})});