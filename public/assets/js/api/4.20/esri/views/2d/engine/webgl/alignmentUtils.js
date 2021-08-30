// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.HAlign=void 0;(function(b){b[b.Left=-1]="Left";b[b.Center=0]="Center";b[b.Right=1]="Right"})(a.HAlign||(a.HAlign={}));a.VAlign=void 0;(function(b){b[b.Top=1]="Top";b[b.Center=0]="Center";b[b.Bottom=-1]="Bottom";b[b.Baseline=2]="Baseline"})(a.VAlign||(a.VAlign={}));a.getAlignmentFromPlacement=function(b){switch(b){case "above-left":case "esriServerPointLabelPlacementAboveLeft":return[a.HAlign.Right,a.VAlign.Bottom];case "above-center":case "above-along":case "esriServerPointLabelPlacementAboveCenter":case "esriServerLinePlacementAboveAlong":return[a.HAlign.Center,
a.VAlign.Bottom];case "above-right":case "esriServerPointLabelPlacementAboveRight":return[a.HAlign.Left,a.VAlign.Bottom];case "center-left":case "esriServerPointLabelPlacementCenterLeft":return[a.HAlign.Right,a.VAlign.Center];case "center-center":case "center-along":case "esriServerPointLabelPlacementCenterCenter":case "esriServerLinePlacementCenterAlong":return[a.HAlign.Center,a.VAlign.Center];case "center-right":case "esriServerPointLabelPlacementCenterRight":return[a.HAlign.Left,a.VAlign.Center];
case "below-left":case "esriServerPointLabelPlacementBelowLeft":return[a.HAlign.Right,a.VAlign.Top];case "below-center":case "below-along":case "esriServerPointLabelPlacementBelowCenter":case "esriServerLinePlacementBelowAlong":return[a.HAlign.Center,a.VAlign.Top];case "below-right":case "esriServerPointLabelPlacementBelowRight":return[a.HAlign.Left,a.VAlign.Top];case "always-horizontal":case "esriServerPolygonPlacementAlwaysHorizontal":return[a.HAlign.Center,a.VAlign.Baseline];default:return console.debug(`Found invalid placement type ${b}`),
[a.HAlign.Center,a.VAlign.Center]}};a.getJustification=function(b){switch(b){case "left":return a.HAlign.Left;case "right":return a.HAlign.Right;case "center":case "justify":return a.HAlign.Center}};a.getXAnchorDirection=function(b){switch(b){case "left":return a.HAlign.Left;case "right":return a.HAlign.Right;case "center":case "justify":return a.HAlign.Center}};a.getXDirection=function(b){switch(b){case a.HAlign.Right:return-1;case a.HAlign.Center:return 0;case a.HAlign.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${b}`),
0}};a.getYAnchorDirection=function(b){switch(b){case "top":return a.VAlign.Top;case "middle":return a.VAlign.Center;case "baseline":return a.VAlign.Baseline;case "bottom":return a.VAlign.Bottom}};a.getYDirection=function(b){switch(b){case a.VAlign.Top:return 1;case a.VAlign.Center:return 0;case a.VAlign.Bottom:case a.VAlign.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${b}`),0}};Object.defineProperty(a,"__esModule",{value:!0})});