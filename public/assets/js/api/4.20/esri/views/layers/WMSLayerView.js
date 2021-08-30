// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/ExportWMSImageParameters".split(" "),function(g,q,d,h,e,k,z,A,B,u,v,w){k=a=>{a=function(r){function f(){return r.apply(this,arguments)||this}q._inheritsLoose(f,r);
var l=f.prototype;l.initialize=function(){this.exportImageParameters=new w.ExportWMSImageParameters({layer:this.layer})};l.destroy=function(){this.exportImageParameters.destroy();this.exportImageParameters=null};l.fetchPopupFeatures=function(b){var {layer:c}=this;if(!b)return Promise.reject(new h("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:c}));const {popupEnabled:t}=c;if(!t)return Promise.reject(new h("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));
b=this.createFetchPopupFeaturesQuery(b);if(!b)return Promise.resolve([]);const {extent:m,width:n,height:p,x,y}=b;if(!(m&&n&&p))throw new h("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:m,width:n,height:p});c=c.fetchFeatureInfo(m,n,p,x,y);return Promise.resolve(c?[c]:[])};q._createClass(f,[{key:"exportImageVersion",get:function(){var b;null==(b=this.exportImageParameters)?void 0:b.commitProperty("version");this.commitProperty("timeExtent");return(this._get("exportImageVersion")||
0)+1}}]);return f}(a);d.__decorate([e.property()],a.prototype,"exportImageParameters",void 0);d.__decorate([e.property({readOnly:!0})],a.prototype,"exportImageVersion",null);d.__decorate([e.property()],a.prototype,"layer",void 0);d.__decorate([e.property(v.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0);return a=d.__decorate([u.subclass("esri.layers.mixins.WMSLayerView")],a)};g.WMSLayerView=k;g.default=k;Object.defineProperty(g,"__esModule",{value:!0})});