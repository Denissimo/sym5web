// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","../cim/utils"],function(g,h,f){function n(a){a=f.toCIMSymbolJSON(a);if("CIMTextSymbol"===a.type)return a.height;let b=0;if(a.symbolLayers)for(const d of a.symbolLayers)f.isCIMMarker(d)&&d.size>b?b=d.size:f.isCIMStroke(d)&&d.width>b?b=d.width:f.isCIMFill(d);return b}function k(a,b,d,c){if("CIMTextSymbol"===a.type)a.height*=b;else{if(d&&a.effects)for(const e of a.effects)q(e,b);if(a.symbolLayers)for(const e of a.symbolLayers)switch(e.type){case "CIMPictureMarker":case "CIMVectorMarker":p(e,
b,c);break;case "CIMPictureStroke":case "CIMSolidStroke":null!=c&&c.preserveOutlineWidth||(e.width*=b);break;case "CIMPictureFill":e.height*=b;e.offsetX*=b;e.offsetY*=b;break;case "CIMHatchFill":k(e.lineSymbol,b,!0,{...c,preserveOutlineWidth:!1}),e.offsetX*=b,e.offsetY*=b,e.separation*=b}}}function p(a,b,d){a.markerPlacement&&r(a.markerPlacement,b);a.offsetX*=b;a.offsetY*=b;a.anchorPoint&&"Absolute"===a.anchorPointUnits&&(a.anchorPoint={x:a.anchorPoint.x*b,y:a.anchorPoint.y*b});a.size*=b;if("CIMVectorMarker"===
a.type&&a.markerGraphics)for(const c of a.markerGraphics)a.scaleSymbolsProportionally||k(c.symbol,b,!0,d)}function r(a,b){f.isCIMMarkerStrokePlacement(a)&&(a.offset*=b);switch(a.type){case "CIMMarkerPlacementAlongLineRandomSize":case "CIMMarkerPlacementAlongLineSameSize":a.customEndingOffset*=b;a.offsetAlongLine*=b;if(a.placementTemplate&&a.placementTemplate.length){var d=a.placementTemplate.map(c=>c*b);a.placementTemplate=d}break;case "CIMMarkerPlacementAlongLineVariableSize":a.maxRandomOffset*=
b;a.placementTemplate&&a.placementTemplate.length&&(d=a.placementTemplate.map(c=>c*b),a.placementTemplate=d);break;case "CIMMarkerPlacementOnLine":a.startPointOffset*=b;break;case "CIMMarkerPlacementAtExtremities":a.offsetAlongLine*=b;break;case "CIMMarkerPlacementAtRatioPositions":a.beginPosition*=b;a.endPosition*=b;break;case "CIMMarkerPlacementPolygonCenter":a.offsetX*=b;a.offsetY*=b;break;case "CIMMarkerPlacementInsidePolygon":a.offsetX*=b,a.offsetY*=b,a.stepX*=b,a.stepY*=b}}function q(a,b){switch(a.type){case "CIMGeometricEffectArrow":case "CIMGeometricEffectDonut":a.width*=
b;break;case "CIMGeometricEffectBuffer":a.size*=b;break;case "CIMGeometricEffectCut":a.beginCut*=b;a.endCut*=b;a.middleCut*=b;break;case "CIMGeometricEffectDashes":a.customEndingOffset*=b;a.offsetAlongLine*=b;if(a.dashTemplate&&a.dashTemplate.length){const d=a.dashTemplate.map(c=>c*b);a.dashTemplate=d}break;case "CIMGeometricEffectExtension":case "CIMGeometricEffectJog":case "CIMGeometricEffectRadial":a.length*=b;break;case "CIMGeometricEffectMove":a.offsetX*=b;a.offsetY*=b;break;case "CIMGeometricEffectOffset":case "CIMGeometricEffectOffsetTangent":a.offset*=
b;break;case "CIMGeometricEffectRegularPolygon":a.radius*=b;break;case "CIMGeometricEffectTaperedPolygon":a.fromWidth*=b;a.length*=b;a.toWidth*=b;break;case "CIMGeometricEffectWave":a.amplitude*=b,a.period*=b}}function l(a,b){let d;d="CIMTextSymbol"===a.type?a.symbol:a;a="CIMPolygonSymbol"===a.type;if(d.symbolLayers)for(const c of d.symbolLayers)if(!(c.colorLocked||a&&(f.isCIMStroke(c)||f.isCIMMarker(c)&&c.markerPlacement&&f.isCIMMarkerStrokePlacement(c.markerPlacement))))switch(c.type){case "CIMVectorMarker":c.markerGraphics.forEach(e=>
{l(e.symbol,b)});break;case "CIMSolidStroke":case "CIMSolidFill":t(b,c.color);break;case "CIMHatchFill":l(c.lineSymbol,b)}}function t(a,b){for(const d of a)if(d.join(".")===b.join("."))return;a.push(b)}function m(a,b){var d="CIMTextSymbol"===a.type?a.symbol:a;a="CIMPolygonSymbol"===a.type?!0:!1;if(d.symbolLayers)for(const c of d.symbolLayers)if(!(c.colorLocked||a&&(f.isCIMStroke(c)||f.isCIMMarker(c)&&c.markerPlacement&&f.isCIMMarkerStrokePlacement(c.markerPlacement))))switch(d=b.toArray(0),c.type){case "CIMVectorMarker":c.markerGraphics.forEach(e=>
{m(e.symbol,b)});break;case "CIMSolidStroke":case "CIMSolidFill":c.color=d;break;case "CIMHatchFill":m(c.lineSymbol,b)}}g.applyCIMSymbolColor=function(a,b){b instanceof h||(b=new h(b));a=f.toCIMSymbolJSON(a);m(a,b)};g.applyCIMSymbolRotation=function(a,b,d=!1){a=f.toCIMSymbolJSON(a);d&&0!==b&&(b=360-b);if("CIMTextSymbol"===a.type)a.angle=b;else if("CIMPointSymbol"===a.type&&a.symbolLayers){d=b-(a.angle||0);for(const c of a.symbolLayers)if(f.isCIMMarker(c)){let e=c.rotation||0;e=c.rotateClockwise?e-
d:e+d;c.rotation=e}a.angle=b}};g.getCIMSymbolColor=function(a){a=f.toCIMSymbolJSON(a);const b=[];l(a,b);return b.length?new h(f.fromCIMColor(b[0])):null};g.getCIMSymbolRotation=function(a,b=!1){a=f.toCIMSymbolJSON(a);return"CIMTextSymbol"===a.type||"CIMPointSymbol"===a.type?b&&0!==a.angle?360-a.angle:a.angle||0:0};g.getCIMSymbolSize=n;g.scaleCIMMarker=p;g.scaleCIMSymbolTo=function(a,b,d){const c=f.toCIMSymbolJSON(a);a=n(a);if(0===a)if("CIMTextSymbol"===c.type)c.height=b;else{if(c.symbolLayers)for(const e of c.symbolLayers)switch(e.type){case "CIMPictureMarker":case "CIMVectorMarker":e.size=
b;break;case "CIMPictureStroke":case "CIMSolidStroke":e.width=b}}else k(c,b/a,!1,d)};Object.defineProperty(g,"__esModule",{value:!0})});