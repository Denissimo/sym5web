// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","./TerrainConst","./TileAgent"],function(b,e,f){return function(c){function a(){var d=c.apply(this,arguments)||this;d._scaleRangeEnabled=!1;return d}b._inheritsLoose(a,c);b._createClass(a,[{key:"_desiredMinLevelDelta",get:function(){return e.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.level)}},{key:"_progressiveLevelModulo",get:function(){return 0}}]);return a}(f.TileAgent)});