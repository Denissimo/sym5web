// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../geometry/support/aaBoundingRect ../../geometry/support/contains ../../geometry/support/webMercatorUtils ../../layers/support/ElevationSampler ../3d/support/ElevationProvider ../3d/terrain/TerrainConst".split(" "),function(h,
d,b,n,e,x,y,z,p,q,r,t,u,v,w){const k=n.getLogger("esri.views.support.GroundViewElevationSampler");b=function(l){function f(a){a=l.call(this,a)||this;a.demResolution={min:-1,max:-1};a.noDataValue=w.ELEVATION_NODATA_VALUE;return a}h._inheritsLoose(f,l);var g=f.prototype;g.initialize=function(){this.view.basemapTerrain.on("elevation-change",()=>this.emit("changed",{}))};g.elevationAt=function(a){var c=a.spatialReference;const m=this.spatialReference;if(!t.canProject(c,m))return k.error(`Cannot sample elevation at a location with spatial reference (${c?
c.wkid:"unknown"}) different from the view (${m.wkid})`),null;r.extentContainsPoint(this.extent,a)||(c=this.extent,k.warn("#elevationAt()",`Point used to sample elevation (${a.x}, ${a.y}) is outside of the sampler extent (${`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`})`));return v.getElevationAtPoint(this.view.elevationProvider,a)};g.queryElevation=function(a){return u.updateGeometryElevation(a.clone(),this)};h._createClass(f,[{key:"extent",get:function(){const a=this.view.basemapTerrain;return a.extent&&
a.spatialReference?q.toExtent(a.extent,a.spatialReference):null}}]);return f}(b.EventedAccessor);d.__decorate([e.property({readOnly:!0})],b.prototype,"demResolution",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"extent",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"noDataValue",void 0);d.__decorate([e.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],b.prototype,"spatialReference",void 0);d.__decorate([e.property({constructOnly:!0})],b.prototype,
"view",void 0);return b=d.__decorate([p.subclass("esri.views.support.GroundViewElevationSampler")],b)});