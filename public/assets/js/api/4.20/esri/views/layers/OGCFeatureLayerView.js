// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(d,g,e,l,h,f,p,q,r,m){f=a=>{a=function(k){function b(){return k.apply(this,arguments)||this}g._inheritsLoose(b,k);b.prototype.initialize=function(){const {layer:c,view:n}=this;c.source.supportsSpatialReference(n.spatialReference)||
this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:c})))};g._createClass(b,[{key:"availableFields",get:function(){return this.layer.fieldsIndex.fields.map(c=>c.name)}}]);return b}(a);e.__decorate([h.property()],a.prototype,"layer",void 0);e.__decorate([h.property({readOnly:!0})],a.prototype,"availableFields",null);return a=e.__decorate([m.subclass("esri.views.layers.OGCFeatureLayerView")],
a)};d.OGCFeatureLayerView=f;d.default=f;Object.defineProperty(d,"__esModule",{value:!0})});