// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Collection ../core/Error ../core/Handles ../core/has ../core/jsonMap ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/extensions/serializableProperty/reader ../form/FormTemplate ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./Layer ./graphics/sources/MemorySource ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/FeatureIndex ./support/FeatureReduction ./support/FeatureReductionCluster ./support/FeatureReductionSelection ./support/featureReductionUtils ./support/FeatureTemplate ./support/FeatureType ./support/fieldProperties ./support/fieldUtils ./support/GeometryFieldsInfo ./support/LabelClass ./support/labelingInfo ./support/LayerFloorInfo ./support/Relationship ./support/TimeInfo ./support/source/DataLayerSource ../renderers/support/styleUtils ../rest/support/AttachmentQuery ../rest/support/FeatureSet ../rest/support/Query ../rest/support/RelationshipQuery ../rest/support/TopFeaturesQuery ../support/popupUtils".split(" "),
function(N,w,e,aa,B,Ra,Sa,Ta,Ua,ba,ca,E,O,da,P,x,n,ea,fa,ha,ia,F,d,G,Q,H,g,ja,m,ka,y,la,ma,na,oa,R,pa,S,qa,ra,sa,ta,ua,va,wa,xa,ya,z,t,T,za,Aa,Ba,I,U,V,Ca,J,Da,Ea,W,Fa,Ga,Ha,Ia,Ja,Ka,La,A,X,C,Ma){function k(p,r,f){return!(p&&p.hasOwnProperty(r)?!p[r]:!f)}function D(p,r,f){return p&&p.hasOwnProperty(r)?p[r]:f}function K(p,r,f){p=!(null==f||!f.writeLayerSchema);return{enabled:p,ignoreOrigin:p}}const L=new ha.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",
esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),Na={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},Y=ia.getLogger("esri.layers.FeatureLayer");B=Ca.defineFieldProperties();d=function(p){function r(...a){a=p.call(this,...a)||this;a._handles=new ea;a.capabilities=null;a.charts=null;a.copyright=null;a.displayField=null;a.definitionExpression=null;a.dynamicDataSource=null;a.editFieldsInfo=null;a.editingInfo=
null;a.elevationInfo=null;a.featureReduction=null;a.fields=null;a.fieldsIndex=null;a.floorInfo=null;a.formTemplate=null;a.fullExtent=null;a.gdbVersion=null;a.geometryFieldsInfo=null;a.geometryType=null;a.hasM=void 0;a.hasZ=void 0;a.heightModelInfo=null;a.historicMoment=null;a.infoFor3D=null;a.isTable=!1;a.labelsVisible=!0;a.labelingInfo=null;a.layerId=void 0;a.legendEnabled=!0;a.minScale=0;a.maxScale=0;a.globalIdField=null;a.objectIdField=null;a.outFields=null;a.path=null;a.popupEnabled=!0;a.popupTemplate=
null;a.relationships=null;a.sourceJSON=null;a.returnM=void 0;a.returnZ=void 0;a.screenSizePerspectiveEnabled=!0;a.serviceDefinitionExpression=null;a.spatialReference=R.WGS84;a.subtypeCode=null;a.templates=null;a.timeInfo=null;a.title=null;a.sublayerTitleMode="item-title";a.trackIdField=null;a.type="feature";a.typeIdField=null;a.types=null;a.indexes=new (x.ofType(T.FeatureIndex));a.userIsAdmin=!1;a.version=void 0;a.visible=!0;return a}w._inheritsLoose(r,p);var f=r.prototype;f.destroy=function(){var a;
null==(a=this.source)?void 0:a.destroy();this._handles=F.destroyMaybe(this._handles)};f.normalizeCtorArgs=function(a,b){return"string"===typeof a?{url:a,...b}:a};f.load=function(a){var b=this;const c=F.isSome(a)?a.signal:null;if(this.portalItem&&this.portalItem.loaded&&this.source)this.addResolvingPromise(this.createGraphicsSource(c).then(l=>this._initLayerProperties(l)));else{var h=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},a).catch(Q.throwIfAbortError).then(w._asyncToGenerator(function*(){if(b.url&&
null==b.layerId&&/FeatureServer|MapServer\/*$/i.test(b.url)){const l=yield b._fetchFirstLayerId(c);null!=l&&(b.layerId=l)}if(!b.url&&!b._hasMemorySource())throw new n("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return b._initLayerProperties(yield b.createGraphicsSource(c))})).then(()=>this.finishLoadEditablePortalLayer(a));this.addResolvingPromise(h);return Promise.resolve(this)}};f.readCapabilities=function(a,b){b=b.layerDefinition||b;return{attachment:this._readAttachmentCapabilities(b.attachmentProperties),
data:this._readDataCapabilities(b),metadata:this._readMetadataCapabilities(b),operations:this._readOperationsCapabilities(b.capabilities||a,b),query:this._readQueryCapabilities(b),queryRelated:this._readQueryRelatedCapabilities(b),editing:this._readEditingCapabilities(b)}};f.readEditingEnabled=function(a,b){return this._readEditingEnabled(b,!1)};f.readEditingEnabledFromWebMap=function(a,b,c){return this._readEditingEnabled(b,!0,c)};f.writeEditingEnabled=function(a,b){this._writeEditingEnabled(a,b,
!1)};f.writeEditingEnabledToWebMap=function(a,b,c,h){this._writeEditingEnabled(a,b,!0,h)};f.readEditingInfo=function(a,b){({editingInfo:a}=b);return a?{lastEditDate:null!=a.lastEditDate?new Date(a.lastEditDate):null}:null};f.readFeatureReduction=function(a,b){return I.read(a,b)};f.writeWebSceneFeatureReduction=function(a,b,c,h){I.writeTarget(a,b,"layerDefinition.featureReduction",h)};f.readIsTable=function(a,b){b=b&&b.layerDefinition||b;return"Table"===b.type||!b.geometryType};f.writeIsTable=function(a,
b,c,h){null!=h&&h.writeLayerSchema&&G.setDeepValue(c,a?"Table":"Feature Layer",b)};f.readMinScale=function(a,b){return b.effectiveMinScale||a||0};f.readMaxScale=function(a,b){return b.effectiveMaxScale||a||0};f.readGlobalIdFieldFromService=function(a,b){b=b.layerDefinition||b;if(b.globalIdField)return b.globalIdField;if(b.fields)for(const c of b.fields)if("esriFieldTypeGlobalID"===c.type)return c.name};f.readObjectIdFieldFromService=function(a,b){b=b.layerDefinition||b;if(b.objectIdField)return b.objectIdField;
if(b.fields)for(const c of b.fields)if("esriFieldTypeOID"===c.type)return c.name};f.readRenderer=function(a,b,c){b=b.layerDefinition||b;if(a=b.drawingInfo&&b.drawingInfo.renderer||void 0)return(a=E.read(a,b,c)||void 0)||Y.error("Failed to create renderer",{rendererDefinition:b.drawingInfo.renderer,layer:this,context:c}),a;if(b.defaultSymbol)return b.types&&b.types.length?new ca({defaultSymbol:M(b.defaultSymbol,b,c),field:b.typeIdField,uniqueValueInfos:b.types.map(h=>({id:h.id,symbol:M(h.symbol,h,
c)}))}):new ba({symbol:M(b.defaultSymbol,b,c)})};f.castSource=function(a){return a?Array.isArray(a)||a instanceof x?new S["default"]({layer:this,items:a}):a:null};f.readSource=function(a,b){a=La.fromJSON(b.featureSet);return new S["default"]({layer:this,items:a&&a.features||[]})};f.readServiceDefinitionExpression=function(a,b){return b.definitionQuery||b.definitionExpression};f.readTemplates=function(a,b){var c=b.editFieldsInfo;b=c&&c.creatorField;c=c&&c.editorField;a=a&&a.map(h=>U.fromJSON(h));this._fixTemplates(a,
b);this._fixTemplates(a,c);return a};f.readTitle=function(a,b){a=b.layerDefinition&&b.layerDefinition.name||b.name;b=b.title||b.layerDefinition&&b.layerDefinition.title;if(a){b=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?z.titleFromUrlAndName(this.url,a):a;if(!a&&this.url){const c=z.parse(this.url);F.isSome(c)&&(a=c.title)}if(!a)return;"item-title-and-service-name"===this.sublayerTitleMode&&b&&b!==a&&(a=b+" - "+a);return z.cleanTitle(a)}if("item-title"===
this.sublayerTitleMode&&b)return b};f.readTitleFromWebMap=function(a,b){return b.title||b.layerDefinition&&b.layerDefinition.name};f.readTypeIdField=function(a,b){b=b.layerDefinition||b;let c=b.typeIdField;c&&b.fields&&(c=c.toLowerCase(),a=b.fields.find(h=>h.name.toLowerCase()===c))&&(c=a.name);return c};f.readTypes=function(a,b){b=b.layerDefinition||b;a=b.types;const c=(b=b.editFieldsInfo)&&b.creatorField,h=b&&b.editorField;return a&&a.map(l=>{l=V.fromJSON(l);this._fixTemplates(l.templates,c);this._fixTemplates(l.templates,
h);return l})};f.writeUrl=function(a,b,c,h){z.writeUrlWithLayerId(this,a,null,b,h)};f.readVersion=function(a,b){return b.currentVersion?b.currentVersion:b.hasOwnProperty("capabilities")||b.hasOwnProperty("drawingInfo")||b.hasOwnProperty("hasAttachments")||b.hasOwnProperty("htmlPopupType")||b.hasOwnProperty("relationships")||b.hasOwnProperty("timeInfo")||b.hasOwnProperty("typeIdField")||b.hasOwnProperty("types")?10:9.3};f.readVisible=function(a,b){if(b.layerDefinition&&null!=b.layerDefinition.defaultVisibility)return!!b.layerDefinition.defaultVisibility;
if(null!=b.visibility)return!!b.visibility};f.addAttachment=function(a,b){return this.load().then(()=>this._checkAttachmentSupport(a)).then(()=>{if(!("addAttachment"in this.source))throw new n("FeatureLayer","Layer source does not support addAttachment capability");return this.source.addAttachment(a,b)})};f.updateAttachment=function(a,b,c){return this.load().then(()=>this._checkAttachmentSupport(a)).then(()=>{if(!("updateAttachment"in this.source))throw new n("FeatureLayer","Layer source does not support updateAttachment capability");
return this.source.updateAttachment(a,b,c)})};f.applyEdits=function(){var a=w._asyncToGenerator(function*(b,c){const h=yield new Promise(function(l,q){N(["./graphics/editingSupport"],l,q)});yield this.load();return h.applyEdits(this,this.source,b,c)});return function(b,c){return a.apply(this,arguments)}}();f.on=function(a,b){return p.prototype.on.call(this,a,b)};f.createPopupTemplate=function(a){return Ma.createPopupTemplate(this,a)};f.createGraphicsSource=function(){var a=w._asyncToGenerator(function*(b){if(this._hasMemorySource())return this.source.load({signal:b});
const {default:c}=yield Q.whenOrAbort(new Promise(function(h,l){N(["./graphics/sources/FeatureLayerSource"],function(q){h(Object.freeze({__proto__:null,"default":q}))},l)}),b);return(new c({layer:this})).load({signal:b})});return function(b){return a.apply(this,arguments)}}();f.createQuery=function(){const a=new A,b=this.get("capabilities.data");a.dynamicDataSource=this.dynamicDataSource;a.gdbVersion=this.gdbVersion;a.historicMoment=this.historicMoment;a.returnGeometry=!0;b&&(b.supportsZ&&null!=this.returnZ&&
(a.returnZ=this.returnZ),b.supportsM&&null!=this.returnM&&(a.returnM=this.returnM));a.outFields=["*"];a.where=this.definitionExpression||"1\x3d1";const {timeOffset:c,timeExtent:h}=this;a.timeExtent=null!=c&&null!=h?h.offset(-c.value,c.unit):h||null;a.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null;return a};f.deleteAttachments=function(a,b){return this.load().then(()=>this._checkAttachmentSupport(a)).then(()=>{if(!("deleteAttachments"in this.source))throw new n("FeatureLayer",
"Layer source does not support deleteAttachments capability");return this.source.deleteAttachments(a,b)})};f.fetchRecomputedExtents=function(a){return this.load({signal:null==a?void 0:a.signal}).then(()=>{if(this.source.fetchRecomputedExtents)return this.source.fetchRecomputedExtents(a);throw new n("FeatureLayer","Layer source does not support fetchUpdates capability");})};f.getFeatureType=function(a){const {typeIdField:b,types:c}=this;if(!b||!a)return null;const h=a.attributes?a.attributes[b]:void 0;
if(null==h)return null;let l=null;c.some(q=>{const {id:u}=q;if(null==u)return!1;u.toString()===h.toString()&&(l=q);return!!l});return l};f.getFieldDomain=function(a,b){return(b=this.getFeatureType(b&&b.feature))&&(b=b.domains&&b.domains[a])&&"inherited"!==b.type?b:this._getLayerDomain(a)};f.getField=function(a){return this.fieldsIndex.get(a)};f.queryAttachments=function(a,b){a=Ka.from(a);return this.load().then(()=>{if(!this.get("capabilities.data.supportsAttachment"))throw new n("FeatureLayer","this layer doesn't support attachments");
const {attachmentTypes:c,objectIds:h,globalIds:l,num:q,size:u,start:v,where:Z}=a;if(!this.get("capabilities.operations.supportsQueryAttachments")){const Oa=c&&c.length,Pa=l&&l.length,Qa=u&&u.length;if(h&&1<h.length||Oa||Pa||Qa||q||v||Z)throw new n("FeatureLayer","when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",a);}if(!(h&&h.length||Z))throw new n("FeatureLayer","'objectIds' or 'where' are required to perform attachment query",a);if(!("queryAttachments"in this.source))throw new n("FeatureLayer",
"Layer source does not support queryAttachments capability",a);return this.source.queryAttachments(a)})};f.queryFeatures=function(a,b){return this.load().then(()=>this.source.queryFeatures(A.from(a)||this.createQuery(),b)).then(c=>{if(null!=c&&c.features)for(const h of c.features)h.layer=h.sourceLayer=this;return c})};f.queryObjectIds=function(a,b){return this.load().then(()=>{if(this.source.queryObjectIds)return this.source.queryObjectIds(A.from(a)||this.createQuery(),b);throw new n("FeatureLayer",
"Layer source does not support queryObjectIds capability");})};f.queryFeatureCount=function(a,b){return this.load().then(()=>{if(this.source.queryFeatureCount)return this.source.queryFeatureCount(A.from(a)||this.createQuery(),b);throw new n("FeatureLayer","Layer source does not support queryFeatureCount capability");})};f.queryExtent=function(a,b){return this.load().then(()=>{if(this.source.queryExtent)return this.source.queryExtent(A.from(a)||this.createQuery(),b);throw new n("FeatureLayer","Layer source does not support queryExtent capability");
})};f.queryRelatedFeatures=function(a,b){return this.load().then(()=>{if("queryRelatedFeatures"in this.source)return this.source.queryRelatedFeatures(X.from(a),b);throw new n("FeatureLayer","Layer source does not support queryRelatedFeatures capability");})};f.queryRelatedFeaturesCount=function(a,b){return this.load().then(()=>{if("queryRelatedFeaturesCount"in this.source)return this.source.queryRelatedFeaturesCount(X.from(a),b);throw new n("FeatureLayer","Layer source does not support queryRelatedFeaturesCount capability");
})};f.queryTopFeatures=function(a,b){return this.load().then(()=>{if("queryTopFeatures"in this.source&&this.get("capabilities.query.supportsTopFeaturesQuery"))return this.source.queryTopFeatures(C.from(a),b).then(c=>{if(null!=c&&c.features)for(const h of c.features)h.layer=h.sourceLayer=this;return c});throw new n("FeatureLayer","Layer source does not support queryTopFeatures capability");})};f.queryTopObjectIds=function(a,b){return this.load().then(()=>{if("queryTopObjectIds"in this.source&&this.get("capabilities.query.supportsTopFeaturesQuery"))return this.source.queryTopObjectIds(C.from(a),
b);throw new n("FeatureLayer","Layer source does not support queryTopObjectIds capability");})};f.queryTopFeaturesExtent=function(a,b){return this.load().then(()=>{if("queryTopExtents"in this.source&&this.get("capabilities.query.supportsTopFeaturesQuery"))return this.source.queryTopExtents(C.from(a),b);throw new n("FeatureLayer","Layer source does not support queryTopExtents capability");})};f.queryTopFeatureCount=function(a,b){return this.load().then(()=>{if("queryTopCount"in this.source&&this.get("capabilities.query.supportsTopFeaturesQuery"))return this.source.queryTopCount(C.from(a),
b);throw new n("FeatureLayer","Layer source does not support queryFeatureCount capability");})};f.read=function(a,b){const c=a.featureCollection;if(c){const h=c.layers;h&&1===h.length&&(p.prototype.read.call(this,h[0],b),null!=c.showLegend&&p.prototype.read.call(this,{showLegend:c.showLegend},b))}p.prototype.read.call(this,a,b);b&&"service"===b.origin&&this.revert(["objectIdField","fields","timeInfo","spatialReference"],"service")};f.write=function(a,b){var c,h;b={...b,writeLayerSchema:null!=(c=null==
(h=b)?void 0:h.writeLayerSchema)?c:this._hasMemorySource()};c=b.origin;h=b.layerContainerType;const l=b.messages;if(this.isTable){if("web-scene"===c||"web-map"===c&&"tables"!==h)return l&&l.push(new n("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,{layer:this})),null;if(this._hasMemorySource())return l&&l.push(new n("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,
{layer:this})),null}else if(this.loaded&&"web-map"===c&&"tables"===h)return l&&l.push(new n("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,{layer:this})),null;return p.prototype.write.call(this,a,b)};f._readEditingEnabled=function(a,b,c){var h;let l=null==(h=a.layerDefinition)?void 0:h.capabilities;if(l)return this._hasEditingCapability(l);l=a.capabilities;if(b&&"web-map"===(null==c?void 0:c.origin)&&
!this._hasMemorySource()&&l)return this._hasEditingCapability(l)};f._hasEditingCapability=function(a){return a.toLowerCase().split(",").map(b=>b.trim()).includes("editing")};f._writeEditingEnabled=function(a,b,c,h){if(!a){var l,q;a=null!=(l=this.capabilities)&&null!=(q=l.operations)&&q.supportsSync?"Query,Sync":"Query";G.setDeepValue("layerDefinition.capabilities",a,b);!c||null!=h&&h.writeLayerSchema||(b.capabilities=a)}};f._checkAttachmentSupport=function(a){const {attributes:b}=a,{objectIdField:c}=
this;if(!this.get("capabilities.data.supportsAttachment"))return Promise.reject(new n("FeatureLayer","this layer doesn't support attachments"));if(!a)return Promise.reject(new n("FeatureLayer","A feature is required to add/delete/update attachments"));if(!b)return Promise.reject(new n("FeatureLayer","'attributes' are required on a feature to query attachments"));if(!b[c])return Promise.reject(new n("FeatureLayer",`feature is missing the identifying attribute ${c}`))};f._getLayerDomain=function(a){return(a=
this.fieldsIndex.get(a))?a.domain:null};f._fetchFirstLayerId=function(a){return da(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:a}).then(b=>{if(b=b.data){if(Array.isArray(b.layers)&&0<b.layers.length)return b.layers[0].id;if(Array.isArray(b.tables)&&0<b.tables.length)return b.tables[0].id}})};f._initLayerProperties=function(){var a=w._asyncToGenerator(function*(b){this._set("source",b);b.sourceJSON&&(this.sourceJSON=b.sourceJSON,this.read(b.sourceJSON,
{origin:"service",url:this.parsedUrl}));this._verifySource();this._verifyFields();J.fixRendererFields(this.renderer,this.fieldsIndex);J.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);return Ja.loadStyleRenderer(this,{origin:"service"})});return function(b){return a.apply(this,arguments)}}();f._verifyFields=function(){const a=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+a+")");this.isTable||this._hasMemorySource()||
-1!==a.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(b){return"geometry"===b.type})||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+a+")")};f._fixTemplates=function(a,b){a&&a.forEach(c=>{(c=c.prototype&&c.prototype.attributes)&&b&&delete c[b]})};f._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new n("feature-layer:mixed-source-and-url",
"FeatureLayer cannot be created with both an in-memory source and a url");}else if(!this.url)throw new n("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");};f._initMemorySource=function(a){a.forEach(b=>{b.layer=this;b.sourceLayer=this});this._handles.add([a.on("after-add",b=>{b.item.layer=this;b.item.sourceLayer=this}),a.on("after-remove",b=>{b.item.layer=null;b.item.sourceLayer=null})],"fl-source")};f._resetMemorySource=function(a){a.forEach(b=>
{b.layer=null;b.sourceLayer=null});this._handles.remove("fl-source")};f._hasMemorySource=function(){return!(this.url||!this.source)};f._readAttachmentCapabilities=function(a){const b={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1};a&&Array.isArray(a)&&a.forEach(c=>{const h=Na[c.name];h&&(b[h]=!!c.isEnabled)});return b};f._readDataCapabilities=function(a){return{isVersioned:k(a,"isDataVersioned",!1),supportsAttachment:k(a,"hasAttachments",!1),supportsM:k(a,
"hasM",!1),supportsZ:k(a,"hasZ",!1)}};f._readMetadataCapabilities=function(a){return{supportsAdvancedFieldProperties:k(a,"supportsFieldDescriptionProperty",!1)}};f._readOperationsCapabilities=function(a,b){a=a?a.toLowerCase().split(",").map(v=>v.trim()):[];const c=-1!==a.indexOf("editing");let h=c&&-1!==a.indexOf("create"),l=c&&-1!==a.indexOf("delete"),q=c&&-1!==a.indexOf("update");const u=-1!==a.indexOf("changetracking");!c||h||l||q||(h=l=q=!0);return{supportsCalculate:k(b,"supportsCalculate",!1),
supportsTruncate:k(b,"supportsTruncate",!1),supportsValidateSql:k(b,"supportsValidateSql",!1),supportsAdd:h,supportsDelete:l,supportsEditing:c,supportsChangeTracking:u,supportsQuery:-1!==a.indexOf("query"),supportsQueryAttachments:k(b.advancedQueryCapabilities,"supportsQueryAttachments",!1),supportsResizeAttachments:k(b,"supportsAttachmentsResizing",!1),supportsSync:-1!==a.indexOf("sync"),supportsUpdate:q,supportsExceedsLimitStatistics:k(b,"supportsExceedsLimitStatistics",!1)}};f._readQueryCapabilities=
function(a){var b;const c=a.advancedQueryCapabilities,h=a.ownershipBasedAccessControlForFeatures,l=a.archivingInfo;var q=null==(b=this.url)?void 0:b.includes("MapServer");b=!fa("mapserver-pbf-enabled")&&q&&10.81>this.version;q=(a.supportedQueryFormats||"").split(",").reduce((u,v)=>{(v=v.toLowerCase().trim())&&u.add(v);return u},new Set);return{supportsStatistics:k(c,"supportsStatistics",a.supportsStatistics),supportsPercentileStatistics:k(c,"supportsPercentileStatistics",!1),supportsCentroid:k(c,
"supportsReturningGeometryCentroid",!1),supportsDistance:k(c,"supportsQueryWithDistance",!1),supportsDistinct:k(c,"supportsDistinct",a.supportsAdvancedQueries),supportsExtent:k(c,"supportsReturningQueryExtent",!1),supportsGeometryProperties:k(c,"supportsReturningGeometryProperties",!1),supportsHavingClause:k(c,"supportsHavingClause",!1),supportsOrderBy:k(c,"supportsOrderBy",a.supportsAdvancedQueries),supportsPagination:k(c,"supportsPagination",!1),supportsQuantization:k(a,"supportsCoordinatesQuantization",
!1),supportsQuantizationEditMode:k(a,"supportsQuantizationEditMode",!1),supportsQueryGeometry:k(a,"supportsReturningQueryGeometry",!1),supportsResultType:k(c,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:k(c,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:k(c,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:k(a,"useStandardizedQueries",!1),supportsTopFeaturesQuery:k(c,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:k(h,"allowOthersToQuery",!0),supportsHistoricMoment:k(l,
"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:!b&&q.has("pbf"),supportsDisjointSpatialRelationship:k(c,"supportsDisjointSpatialRel",!1),supportsCacheHint:k(c,"supportsQueryWithCacheHint",!1),maxRecordCountFactor:D(a,"maxRecordCountFactor",void 0),maxRecordCount:D(a,"maxRecordCount",void 0),standardMaxRecordCount:D(a,"standardMaxRecordCount",void 0),tileMaxRecordCount:D(a,"tileMaxRecordCount",void 0)}};f._readQueryRelatedCapabilities=function(a){a=a.advancedQueryCapabilities;const b=k(a,
"supportsAdvancedQueryRelated",!1);return{supportsPagination:k(a,"supportsQueryRelatedPagination",!1),supportsCount:b,supportsOrderBy:b}};f._readEditingCapabilities=function(a){const b=a.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:k(a,"allowGeometryUpdates",!0),supportsGlobalId:k(a,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:k(a,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:k(a,"supportsRollbackOnFailureParameter",
!1),supportsUpdateWithoutM:k(a,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:k(a,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:k(b,"allowAnonymousToDelete",!0),supportsDeleteByOthers:k(b,"allowOthersToDelete",!0),supportsUpdateByAnonymous:k(b,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:k(b,"allowOthersToUpdate",!0)}};w._createClass(r,[{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("dynamicDataSource");this.commitProperty("timeExtent");
this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("gdbVersion");this.commitProperty("historicMoment");this.commitProperty("returnZ");this.commitProperty("capabilities");this.commitProperty("returnM");return(this._get("createQueryVersion")||0)+1}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges},set:function(a){null!=a?this._override("editingEnabled",
a):this._clearOverride("editingEnabled")}},{key:"parsedUrl",get:function(){const a=this.url?H.urlToObject(this.url):null;null!=a&&(null!=this.dynamicDataSource?a.path=H.join(a.path,"dynamicLayer"):null!=this.layerId&&(a.path=H.join(a.path,this.layerId.toString())));return a}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(a){J.fixRendererFields(a,this.fieldsIndex);this._set("renderer",a)}},{key:"source",set:function(a){const b=this._get("source");
b!==a&&(b&&b instanceof x&&this._resetMemorySource(b),a&&a instanceof x&&this._initMemorySource(a),this._set("source",a))}},{key:"url",set:function(a){a=z.sanitizeUrlWithLayerId({layer:this,url:a,nonStandardUrlAllowed:!0,logger:Y});this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)}}]);return r}(sa.BlendLayer(ya.TemporalLayer(xa.ScaleRangeLayer(wa.RefreshableLayer(ra.ArcGISService(ua.OperationalLayer(va.PortalLayer(d.MultiOriginJSONMixin(ta.CustomParametersMixin(qa.APIKeyMixin(pa)))))))))));
e.__decorate([g.property({readOnly:!0,json:{read:!1}})],d.prototype,"capabilities",void 0);e.__decorate([m.reader("service","capabilities","advancedQueryCapabilities allowGeometryUpdates allowUpdateWithoutMValues archivingInfo capabilities hasAttachments hasM hasZ maxRecordCount maxRecordCountFactor ownershipBasedAccessControlForFeatures standardMaxRecordCount supportedQueryFormats supportsAdvancedQueries supportsApplyEditsWithGlobalIds supportsAttachmentsByUploadId supportsAttachmentsResizing supportsCalculate supportsCoordinatesQuantization supportsExceedsLimitStatistics supportsFieldDescriptionProperty supportsQuantizationEditMode supportsRollbackOnFailureParameter supportsStatistics supportsTruncate supportsValidateSql tileMaxRecordCount useStandardizedQueries".split(" "))],
d.prototype,"readCapabilities",null);e.__decorate([g.property({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],d.prototype,"charts",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"createQueryVersion",null);e.__decorate([g.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],d.prototype,"copyright",void 0);e.__decorate([g.property({type:String,json:{read:{source:"layerDefinition.displayField"},
origins:{service:{read:{source:"displayField"}}}}})],d.prototype,"displayField",void 0);e.__decorate([g.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],d.prototype,"definitionExpression",void 0);e.__decorate([g.property({types:P.symbolTypes,readOnly:!0})],d.prototype,"defaultSymbol",void 0);e.__decorate([g.property({type:Ia.DataLayerSource})],d.prototype,"dynamicDataSource",void 0);e.__decorate([g.property({readOnly:!0})],
d.prototype,"editFieldsInfo",void 0);e.__decorate([g.property({type:Boolean})],d.prototype,"editingEnabled",null);e.__decorate([m.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],d.prototype,"readEditingEnabled",null);e.__decorate([m.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],d.prototype,"readEditingEnabledFromWebMap",null);e.__decorate([y.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],
d.prototype,"writeEditingEnabled",null);e.__decorate([y.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],d.prototype,"writeEditingEnabledToWebMap",null);e.__decorate([g.property({readOnly:!0})],d.prototype,"editingInfo",void 0);e.__decorate([m.reader("editingInfo")],d.prototype,"readEditingInfo",null);e.__decorate([g.property(t.elevationInfo)],d.prototype,"elevationInfo",void 0);e.__decorate([g.property({types:{key:"type",base:za["default"],
typeMap:{selection:Ba,cluster:Aa}},json:{write:{target:"layerDefinition.featureReduction"}}})],d.prototype,"featureReduction",void 0);e.__decorate([m.reader("featureReduction",["layerDefinition.featureReduction"])],d.prototype,"readFeatureReduction",null);e.__decorate([y.writer("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:I.webSceneFeatureReductionTypes}})],d.prototype,"writeWebSceneFeatureReduction",null);e.__decorate([g.property({...B.fields,json:{read:{source:"layerDefinition.fields"},
origins:{service:{read:!0},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:K}}}}})],d.prototype,"fields",void 0);e.__decorate([g.property(B.fieldsIndex)],d.prototype,"fieldsIndex",void 0);e.__decorate([g.property({type:Fa,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],d.prototype,"floorInfo",void 0);e.__decorate([g.property({type:ma,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"formTemplate",
void 0);e.__decorate([g.property({type:na,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],d.prototype,"fullExtent",void 0);e.__decorate([g.property()],d.prototype,"gdbVersion",void 0);e.__decorate([g.property({readOnly:!0,type:Da,json:{read:{source:"geometryProperties"}}})],d.prototype,"geometryFieldsInfo",void 0);e.__decorate([g.property({type:"point polygon polyline multipoint multipatch mesh".split(" "),json:{origins:{service:{read:L.read},"web-map":{write:{target:"layerDefinition.geometryType",
overridePolicy:K,writer(p,r,f){(p=p?L.toJSON(p):null)&&G.setDeepValue(f,p,r)}}}},read:{source:"layerDefinition.geometryType",reader:L.read}}})],d.prototype,"geometryType",void 0);e.__decorate([g.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],d.prototype,"hasM",void 0);e.__decorate([g.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],d.prototype,"hasZ",void 0);e.__decorate([g.property({readOnly:!0,type:oa})],
d.prototype,"heightModelInfo",void 0);e.__decorate([g.property({type:Date})],d.prototype,"historicMoment",void 0);e.__decorate([g.property(t.id)],d.prototype,"id",void 0);e.__decorate([g.property({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],d.prototype,"infoFor3D",void 0);e.__decorate([g.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],d.prototype,"isTable",void 0);e.__decorate([m.reader("service","isTable",["type","geometryType"]),m.reader("isTable",
["layerDefinition.type","layerDefinition.geometryType"])],d.prototype,"readIsTable",null);e.__decorate([y.writer("web-map","isTable")],d.prototype,"writeIsTable",null);e.__decorate([g.property(t.labelsVisible)],d.prototype,"labelsVisible",void 0);e.__decorate([g.property({type:[Ea],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:W.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:W.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],
d.prototype,"labelingInfo",void 0);e.__decorate([g.property(t.opacityDrawingInfo)],d.prototype,"opacity",void 0);e.__decorate([g.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],d.prototype,"layerId",void 0);e.__decorate([g.property(t.legendEnabled)],d.prototype,"legendEnabled",void 0);e.__decorate([g.property({type:["show","hide"]})],d.prototype,"listMode",void 0);e.__decorate([g.property(t.minScale)],d.prototype,"minScale",void 0);e.__decorate([m.reader("service","minScale",
["minScale","effectiveMinScale"])],d.prototype,"readMinScale",null);e.__decorate([g.property(t.maxScale)],d.prototype,"maxScale",void 0);e.__decorate([m.reader("service","maxScale",["maxScale","effectiveMaxScale"])],d.prototype,"readMaxScale",null);e.__decorate([g.property({type:String})],d.prototype,"globalIdField",void 0);e.__decorate([m.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),m.reader("service","globalIdField",["globalIdField","fields"])],d.prototype,
"readGlobalIdFieldFromService",null);e.__decorate([g.property({type:String,json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:K}}}}})],d.prototype,"objectIdField",void 0);e.__decorate([m.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),m.reader("service","objectIdField",["objectIdField","fields"])],d.prototype,"readObjectIdFieldFromService",null);e.__decorate([g.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],
d.prototype,"operationalLayerType",void 0);e.__decorate([g.property(B.outFields)],d.prototype,"outFields",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"parsedUrl",null);e.__decorate([g.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0);e.__decorate([g.property(t.popupEnabled)],d.prototype,"popupEnabled",void 0);e.__decorate([g.property({type:aa,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",
void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);e.__decorate([g.property({type:[Ga],readOnly:!0})],d.prototype,"relationships",void 0);e.__decorate([g.property({types:O.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:O.webSceneRendererTypes,write:{target:"layerDefinition.drawingInfo.renderer",writer:E.write}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(p,r,f){return{ignoreOrigin:null==
f?void 0:f.writeLayerSchema}},writer:E.write}}})],d.prototype,"renderer",null);e.__decorate([m.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),m.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],d.prototype,"readRenderer",null);e.__decorate([g.property()],d.prototype,"sourceJSON",void 0);e.__decorate([g.property({type:Boolean})],d.prototype,"returnM",void 0);e.__decorate([g.property({type:Boolean})],d.prototype,"returnZ",void 0);e.__decorate([g.property(t.screenSizePerspectiveEnabled)],
d.prototype,"screenSizePerspectiveEnabled",void 0);e.__decorate([g.property()],d.prototype,"source",null);e.__decorate([ja.cast("source")],d.prototype,"castSource",null);e.__decorate([m.reader("portal-item","source",["featureSet"]),m.reader("web-map","source",["featureSet"])],d.prototype,"readSource",null);e.__decorate([g.property({readOnly:!0})],d.prototype,"serviceDefinitionExpression",void 0);e.__decorate([m.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],
d.prototype,"readServiceDefinitionExpression",null);e.__decorate([g.property({type:R,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],d.prototype,"spatialReference",void 0);e.__decorate([g.property({type:Number})],d.prototype,"subtypeCode",void 0);e.__decorate([g.property({type:[U]})],d.prototype,"templates",void 0);e.__decorate([m.reader("templates",["editFieldsInfo","creatorField","editorField","templates"])],d.prototype,
"readTemplates",null);e.__decorate([g.property({type:Ha})],d.prototype,"timeInfo",void 0);e.__decorate([g.property()],d.prototype,"title",void 0);e.__decorate([m.reader("service","title",["name"]),m.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],d.prototype,"readTitle",null);e.__decorate([m.reader("web-map","title",["layerDefinition.name","title"])],d.prototype,"readTitleFromWebMap",null);e.__decorate([g.property({type:String})],d.prototype,"sublayerTitleMode",
void 0);e.__decorate([g.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],d.prototype,"trackIdField",void 0);e.__decorate([g.property({json:{read:!1}})],d.prototype,"type",void 0);e.__decorate([g.property({type:String})],d.prototype,"typeIdField",void 0);e.__decorate([m.reader("service","typeIdField"),m.reader("typeIdField",["layerDefinition.typeIdField"])],d.prototype,"readTypeIdField",null);e.__decorate([g.property({type:[V]})],d.prototype,"types",void 0);e.__decorate([m.reader("service",
"types",["types"]),m.reader("types",["layerDefinition.types"])],d.prototype,"readTypes",null);e.__decorate([g.property({readOnly:!0,json:{write:!1}})],d.prototype,"serverGens",void 0);e.__decorate([g.property({type:x.ofType(T.FeatureIndex),readOnly:!0})],d.prototype,"indexes",void 0);e.__decorate([g.property(t.url)],d.prototype,"url",null);e.__decorate([y.writer("url")],d.prototype,"writeUrl",null);e.__decorate([g.property({readOnly:!0})],d.prototype,"userIsAdmin",void 0);e.__decorate([g.property({json:{origins:{service:{read:!0}},
read:!1}})],d.prototype,"version",void 0);e.__decorate([m.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "))],d.prototype,"readVersion",null);e.__decorate([g.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],d.prototype,"visible",void 0);e.__decorate([m.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],d.prototype,
"readVisible",null);d=e.__decorate([ka.subclass("esri.layers.FeatureLayer")],d);const M=la.createTypeReader({types:P.symbolTypesRenderer});return d});