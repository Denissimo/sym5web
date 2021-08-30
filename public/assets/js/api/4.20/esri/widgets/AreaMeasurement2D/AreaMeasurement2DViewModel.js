// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Handles ../../core/Logger ../../core/unitUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ./AreaMeasurement2DTool ../support/InteractiveToolViewModel".split(" "),function(h,c,p,b,g,q,d,x,y,z,r,t,k,u){const v={handleWidth:8,handleColor:[255,128,0,
.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]},l=b.getLogger("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel");b=function(m){function f(a){a=m.call(this,a)||this;a.supportedViewType="2d";a._handles=new p;a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=null;a.palette=v;a.tool=null;return a}h._inheritsLoose(f,m);var e=f.prototype;e.initialize=function(){this._handles.add([q.init(this,["unit","palette","geodesicDistanceThreshold"],(a,n,w)=>{this.tool&&
(this.tool[w]=a)})])};e.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)};e.start=function(){return this.createTool()};e.clear=function(){this.removeTool()};e.createToolParams=function(){return{toolConstructor:k["default"],constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}};e.logUnsupportedError=function(){l.error("AreaMeasurement2D widget is not implemented for SceneView")};e.logError=function(...a){l.error(...a)};
e._validateUnit=function(a){return-1!==this.unitOptions.indexOf(a)?a:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]};e._validateUnits=function(a=[]){a=a.filter(n=>-1!==g.measurementAreaUnits.indexOf(n));return 0===a.length?g.measurementAreaUnits.slice():a};h._createClass(f,[{key:"state",get:function(){var a;return this.isDisabled||!k.isSupported(null==(a=this.view)?void 0:a.spatialReference)?"disabled":this.tool?this.tool.measurement?this.tool.active?"measuring":
"measured":"ready":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){void 0===a?this._clearOverride("unit"):this._override("unit",this._validateUnit(a))}},{key:"unitOptions",get:function(){return g.measurementAreaUnits},set:function(a){void 0===a?this._clearOverride("unitOptions"):this._override("unitOptions",this._validateUnits(a))}}]);return f}(u.InteractiveToolViewModel);c.__decorate([d.property(t.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",
void 0);c.__decorate([d.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"tool.measurement"})],b.prototype,"measurement",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"tool.measurementLabel"})],b.prototype,"measurementLabel",void 0);c.__decorate([d.property()],b.prototype,"palette",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property({constructOnly:!0,readOnly:!0})],b.prototype,
"tool",void 0);c.__decorate([d.property({type:String})],b.prototype,"unit",null);c.__decorate([d.property({type:[String]})],b.prototype,"unitOptions",null);return b=c.__decorate([r.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],b)});