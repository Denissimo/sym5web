// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/handleUtils ../../core/maybe ../../core/memoize ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ./ElevationProfileLine ./support/elevationQuerySourceUtils".split(" "),function(l,e,q,w,g,x,r,f,d,D,E,F,y,z,A){d=function(m){function k(a){a=m.call(this,a)||
this;a.type="ground";a.color=new q("#ff7f00");a.viewVisualizationEnabled=!0;a.numSamplesForPreview=50;a.numSamplesPerChunk=1E3;a._getQueryElevationDependencies=x.memoize((b,c)=>({ground:b,groundLayers:c}));return a}l._inheritsLoose(k,m);var t=k.prototype;t.queryElevation=function(){var a=l._asyncToGenerator(function*(b,c){var h=this.queryElevationDependencies;if(g.isNone(h))throw Error("ElevationProfileLineGround: no dependencies");const {ground:n}=h;if(g.isNone(n))throw Error("No ground configured in the view");
h=yield n.queryElevation(b,c);const u=r.getMetersPerVerticalUnitForSR(b.spatialReference),v=r.getMetersPerVerticalUnitForSR(n.layers.getItemAt(0).spatialReference);u!==v&&(b=h.geometry,b.points=b.points.map(([B,C,p])=>[B,C,p===c.noDataValue?p:p*v/u]));return h});return function(b,c){return a.apply(this,arguments)}}();t.attach=function(a){return w.handlesGroup([m.prototype.attach.call(this,a),this.watch("queryElevationDependencies",()=>this._onChange())])};l._createClass(k,[{key:"available",get:function(){const a=
this._ground;return!g.isNone(a)&&a.layers.some(b=>b.visible)}},{key:"minDemResolution",get:function(){return A.getGroundMinDemResolution(this._ground)}},{key:"queryElevationDependencies",get:function(){return this._getQueryElevationDependencies(this._ground,this._groundLayers)}},{key:"_ground",get:function(){var a;return g.applySome(null==(a=this._viewModel)?void 0:a.view,b=>{var c;return null==(c=b.map)?void 0:c.ground})}},{key:"_groundLayers",get:function(){const a=g.applySome(this._ground,b=>{var c;
return null==(c=b.layers)?void 0:c.toArray()});return g.unwrapOr(a,[])}}]);return k}(z.ElevationProfileLine);e.__decorate([f.property({type:q,nonNullable:!0})],d.prototype,"color",void 0);e.__decorate([f.property()],d.prototype,"viewVisualizationEnabled",void 0);e.__decorate([f.property()],d.prototype,"available",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"minDemResolution",null);e.__decorate([f.property()],d.prototype,"queryElevationDependencies",null);e.__decorate([f.property()],
d.prototype,"_ground",null);e.__decorate([f.property()],d.prototype,"_groundLayers",null);return d=e.__decorate([y.subclass("esri.widgets.ElevationProfile.ElevationProfileLineGround")],d)});