// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./LayerView3D ./analysis/LineOfSight/LineOfSightController ./analysis/LineOfSight/LineOfSightLayerViewData ./analysis/LineOfSight/LineOfSightView ../../layers/LayerView".split(" "),function(b,l,c,
g,d,v,w,x,y,n,p,q,r,t,u){b.LineOfSightLayerView3D=function(m){function h(){var a=m.apply(this,arguments)||this;a.type="line-of-sight-3d";a._layerViewData=new r.LineOfSightLayerViewData;return a}l._inheritsLoose(h,m);var k=h.prototype;k.initialize=function(){const a=this.view,e=this.layer,f=this._layerViewData;this._analysisController=new q.LineOfSightController({layer:e,layerViewData:f,view:a});this._analysisView=new t.LineOfSightView({layer:e,layerViewData:f,view:a})};k.destroy=function(){this._analysisController=
g.destroyMaybe(this._analysisController);this._analysisView=g.destroyMaybe(this._analysisView)};k.getResultForTarget=function(a){var e=this._layerViewData.analyses.find(f=>f.target===a);e=g.applySome(e,f=>f.result);return g.unwrapOr(e,null)};k.isUpdating=function(){return g.mapOr(this._analysisController,!1,a=>a.updating)};l._createClass(h,[{key:"results",get:function(){return this._layerViewData.analyses.map(a=>a.result)}},{key:"priority",get:function(){return this._analysisController.priority},
set:function(a){this._analysisController.priority=a}}]);return h}(p.LayerView3D(u));c.__decorate([d.property({readOnly:!0})],b.LineOfSightLayerView3D.prototype,"type",void 0);c.__decorate([d.property()],b.LineOfSightLayerView3D.prototype,"layer",void 0);c.__decorate([d.property({readOnly:!0})],b.LineOfSightLayerView3D.prototype,"results",null);c.__decorate([d.property()],b.LineOfSightLayerView3D.prototype,"priority",null);c.__decorate([d.property()],b.LineOfSightLayerView3D.prototype,"_layerViewData",
void 0);c.__decorate([d.property()],b.LineOfSightLayerView3D.prototype,"_analysisController",void 0);c.__decorate([d.property()],b.LineOfSightLayerView3D.prototype,"_analysisView",void 0);b.LineOfSightLayerView3D=c.__decorate([n.subclass("esri.views.3d.layers.LineOfSightLayerView3D")],b.LineOfSightLayerView3D);b.default=b.LineOfSightLayerView3D;Object.defineProperty(b,"__esModule",{value:!0})});