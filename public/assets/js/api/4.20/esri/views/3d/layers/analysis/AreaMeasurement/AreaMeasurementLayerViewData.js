// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ./AreaMeasurementPathHelper ../support/UnitNormalizer".split(" "),function(a,f,b,h,k,c,p,q,r,t,l,m,n){a.AreaMeasurementLayerViewData=
function(g){function e(){var d=g.apply(this,arguments)||this;d.measurementData=null;d.unitNormalizer=new n.UnitNormalizer;d.path=new m.AreaMeasurement3DPathHelper;d.lastDraggedVertex=null;return d}f._inheritsLoose(e,g);e.prototype.destroy=function(){this.measurementData=null;this.path=k.destroyMaybe(this.path)};f._createClass(e,[{key:"validMeasurement",get:function(){return this.path.isValidPolygon}}]);return e}(h);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"measurementData",
void 0);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"validMeasurement",null);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"unitNormalizer",void 0);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"path",void 0);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"lastDraggedVertex",void 0);b.__decorate([c.property()],a.AreaMeasurementLayerViewData.prototype,"cursorPoint",void 0);a.AreaMeasurementLayerViewData=b.__decorate([l.subclass("esri.views.3d.layers.analysis.AreaMeasurement3D.AreaMeasurementLayerViewData")],
a.AreaMeasurementLayerViewData);Object.defineProperty(a,"__esModule",{value:!0})});