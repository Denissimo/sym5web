// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/Handles ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/AreaMeasurementLayer".split(" "),function(h,b,a,k,d,n,p,q,r,l,m){a=function(f){function e(){var c=
f.apply(this,arguments)||this;c._handles=new k;c.analysis=new m({listMode:"hide"});c.state="initial";c.active=!1;return c}h._inheritsLoose(e,f);var g=e.prototype;g.initialize=function(){this.sceneView.map.add(this.analysis);this.state="initial"};g.destroy=function(){this._handles.destroy();this._handles=null;this.sceneView.map.remove(this.analysis)};return e}(a);b.__decorate([d.property()],a.prototype,"analysis",void 0);b.__decorate([d.property({constructOnly:!0})],a.prototype,"sceneView",void 0);
b.__decorate([d.property({value:"initial"})],a.prototype,"state",void 0);b.__decorate([d.property()],a.prototype,"active",void 0);return a=b.__decorate([l.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DModel")],a)});