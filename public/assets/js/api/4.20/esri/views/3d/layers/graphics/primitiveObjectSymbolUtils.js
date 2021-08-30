// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","../../webgl-engine/lib/GeometryUtil"],function(d,n,b){const e=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}];d.isValidPrimitive=function(f){switch(f){case "sphere":case "cube":case "diamond":case "cylinder":case "cone":case "inverted-cone":case "tetrahedron":return!0}return!1};d.primitiveLodResources=function(f,k){const c=(a,l,m=!1)=>({levels:a.map(h=>{const g=l(h.tesselation);m&&b.cgToGIS(g);
return{components:[{geometry:g,material:k}],faceCount:g.indexCount/3,minScreenSpaceRadius:h.minScreenSpaceRadius}})});switch(f){case "sphere":return c([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],a=>b.createPolySphereGeometry(.5,a,!0));case "cube":return c([{tesselation:0,minScreenSpaceRadius:0}],()=>b.createBoxGeometry(1));case "cone":return c(e,
a=>b.createConeGeometry(1,.5,a,!1),!0);case "inverted-cone":return c(e,a=>b.createConeGeometry(1,.5,a,!0),!0);case "cylinder":return c(e,a=>b.createCylinderGeometry(1,.5,a,[0,0,1],[0,0,.5]));case "tetrahedron":return c([{tesselation:0,minScreenSpaceRadius:0}],()=>b.createTetrahedronGeometry(1),!0);case "diamond":return c([{tesselation:0,minScreenSpaceRadius:0}],()=>b.createDiamondGeometry(1),!0)}};Object.defineProperty(d,"__esModule",{value:!0})});