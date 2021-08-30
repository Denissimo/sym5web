// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/Logger ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/dehydratedFeatures ../../../../rest/query/operations/query ../../support/PBFDecoder".split(" "),
function(x,l,f,q,r,y,g,D,E,F,G,t,z,A,B){let k=function(b){function c(a){return b.call(this,a)||this}l._inheritsLoose(c,b);var d=c.prototype;d.queryFeatureCount=function(a,e){return this.layer.queryFeatureCount(a,e)};d.destroy=function(){this._decoder=r.destroyMaybe(this._decoder)};d._createRequestOptions=function(a){return{...a,query:{...this.layer.customParameters,token:this.layer.apiKey,...null==a?void 0:a.query}}};l._createClass(c,[{key:"queryFeaturesDehydrated",get:function(){var a=this.layer.capabilities;
if((a=a&&a.query)&&a.supportsFormatPBF){var e,h;r.isNone(this._decoder)&&(this._decoder=new B.PBFDecoder(this.schedule));const v={sourceSpatialReference:null!=(e=null==(h=this.layer.spatialReference)?void 0:h.toJSON())?e:null,applyTransform:!0,maxStringAttributeLength:1024};return(w,m)=>A.runQuery(this.layer.parsedUrl,w,"pbf",this._createRequestOptions(m)).then(C=>{y.throwIfAborted(m);return r.isSome(this._decoder)?this._decoder.invoke({buffer:C.data,options:v},m.signal):Promise.reject(y.createAbortError())})}return(v,
w)=>A.executeQuery(this.layer.parsedUrl,v,this.layer.spatialReference,this._createRequestOptions(w)).then(m=>z.fromFeatureSetJSON(m.data))}}]);return c}(q);f.__decorate([g.property({constructOnly:!0})],k.prototype,"layer",void 0);f.__decorate([g.property({constructOnly:!0})],k.prototype,"schedule",void 0);f.__decorate([g.property({readOnly:!0})],k.prototype,"queryFeaturesDehydrated",null);k=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],k);let n=
function(b){function c(a){return b.call(this,a)||this}l._inheritsLoose(c,b);var d=c.prototype;d.queryFeaturesDehydrated=function(a,e){return this.layer.queryFeatures(a,e)};d.queryFeatureCount=function(a,e){return this.layer.queryFeatureCount(a,e)};return c}(q);f.__decorate([g.property({constructOnly:!0})],n.prototype,"layer",void 0);f.__decorate([g.property({readOnly:!0})],n.prototype,"queryFeaturesDehydrated",null);n=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],
n);let u=function(b){function c(d){return b.call(this,d)||this}l._inheritsLoose(c,b);c.prototype.queryFeaturesDehydrated=function(d,a){return this.layer.queryFeatures(d,a)};return c}(q);f.__decorate([g.property({constructOnly:!0})],u.prototype,"layer",void 0);u=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],u);let p=function(b){function c(a){return b.call(this,a)||this}l._inheritsLoose(c,b);var d=c.prototype;d.queryFeaturesDehydrated=function(a,
e){return this.source.queryFeaturesJSON(a,e).then(z.fromFeatureSetJSON,h=>{if(h&&"query-features-json:unsupported"===h.name)return this.layer.queryFeatures(a,e);throw h;})};d.queryFeatureCount=function(a,e){return this.layer.queryFeatureCount(a,e)};return c}(q);f.__decorate([g.property({constructOnly:!0})],p.prototype,"layer",void 0);f.__decorate([g.property({constructOnly:!0})],p.prototype,"source",void 0);p=f.__decorate([t.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],
p);x.createFeatureTileQuery3D=function(b,c){return"feature"===b.type&&"feature-layer"===b.source.type?r.isSome(b.infoFor3D)?new n({layer:b}):new k({layer:b,schedule:c}):"feature"===b.type&&"memory"===b.source.type||"csv"===b.type||"geojson"===b.type||"wfs"===b.type?new p({layer:b,source:b.source}):"ogc-feature"===b.type?new u({layer:b}):null};Object.defineProperty(x,"__esModule",{value:!0})});