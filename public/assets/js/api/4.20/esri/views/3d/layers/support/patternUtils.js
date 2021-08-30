// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/maybe ../../../../chunks/vec4f64 ../../../../geometry/support/buffer/BufferView ../graphics/ElevationAligners ./uvUtils ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/PatternMaterial".split(" "),function(d,u,p,q,f,r,t,g,h){function k(a,b,c){if(p.isSome(a)){if("none"===a.style||"solid"===a.style)return"none"===a.style&&(b.color=q.fromValues(0,0,0,0),b.transparent=!0),new g.ColorMaterial(b);b.style=l(a.style);b.draped=c.isDraped;
return new h.PatternMaterial(b)}return new g.ColorMaterial(b)}function l(a){switch(a){case "horizontal":return 0;case "vertical":return 1;case "cross":return 2;case "forward-diagonal":return 3;case "backward-diagonal":return 4;case "diagonal-cross":return 5}}function m(a){return a.material instanceof h.PatternMaterial&&!a.material.params.draped}function n(a,b){if(m(a)){var c=a.geometry.vertexAttributes;a=c.get("position").data;const e=c.get("uvMapSpace").data;c=c.get("boundingRect").data;t.createMapSpaceUVCoords(f.BufferViewVec4f.fromTypedArray(e),
f.BufferViewVec3f64.fromTypedArray(a),b,f.BufferViewMat3f64.fromTypedArray(c))}}d.createMaterial=function(a,b,c){return k(a&&a.pattern||null,b,c)};d.createMaterialFromPattern=k;d.parsePatternStyle=l;d.requiresUVUpdates=m;d.updateMapSpaceUVCoords=n;d.uvElevationAligner=function(a,b,c,e){b=r.perVertexElevationAligner(a,b,c,e);a=a.stageObject.geometryRecords;for(c=0;c<a.length;c++)n(a[c],e);return b};Object.defineProperty(d,"__esModule",{value:!0})});