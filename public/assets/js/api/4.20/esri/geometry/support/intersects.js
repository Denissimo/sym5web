// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./intersectsBase"],function(a,b){a.extentIntersectsExtent=b.extentIntersectsExtent;a.extentIntersectsMultipoint=b.extentIntersectsMultipoint;a.extentIntersectsPoint=b.extentIntersectsPoint;a.extentIntersectsPolygon=b.extentIntersectsPolygon;a.extentIntersectsPolyline=b.extentIntersectsPolyline;a.getFeatureExtentIntersector=b.getFeatureExtentIntersector;a.isSelfIntersecting=b.isSelfIntersecting;a.segmentIntersects=b.segmentIntersects;a.getExtentIntersector=function(c){return"mesh"===
c?b.extentIntersectsExtent:b.getFeatureExtentIntersector(c)};Object.defineProperty(a,"__esModule",{value:!0})});