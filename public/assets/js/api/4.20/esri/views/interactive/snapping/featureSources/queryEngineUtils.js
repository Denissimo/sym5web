// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],function(c,d,e){c.convertSnappingCandidate=function(a,b){switch(a.type){case "edge":return new d.EdgeSnappingCandidate({coordinateHelper:b,edgeStart:b.fromPoint(a.start),edgeEnd:b.fromPoint(a.end),targetPoint:b.fromPoint(a.target),objectId:a.objectId});case "vertex":return new e.VertexSnappingCandidate({coordinateHelper:b,targetPoint:b.fromPoint(a.target),objectId:a.objectId})}};Object.defineProperty(c,
"__esModule",{value:!0})});