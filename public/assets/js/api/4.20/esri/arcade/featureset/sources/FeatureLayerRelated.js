// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../Graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../rest/support/RelationshipQuery".split(" "),function(v,z,A,t,w,r,x){return function(y){function u(a){var b=y.call(this,a)||this;b.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";b._findObjectId=-1;b._requestStandardised=!1;b._removeGeometry=!1;b._overrideFields=null;b.featureObjectId=null;b.relatedLayer=null;b.relationship=
null;a.spatialReference&&(b.spatialReference=a.spatialReference);b._transparent=!0;b._maxProcessing=1E3;b._layer=a.layer;b._wset=null;b._findObjectId=a.objectId;b.featureObjectId=a.objectId;b.relationship=a.relationship;b.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(b._overrideFields=a.outFields);void 0!==a.includeGeometry&&(b._removeGeometry=!1===a.includeGeometry);return b}v._inheritsLoose(u,y);var d=u.prototype;d._maxQueryRate=function(){return w.defaultMaxRecords};d.end=function(){return this._layer};
d.optimisePagingFeatureQueries=function(){};d.load=function(){null===this._loadPromise&&(this._loadPromise=r.create((a,b)=>{r.all([this._layer.load(),this.relatedLayer.load()]).then(()=>{this._initialiseFeatureSet();a(this)},b)}));return this._loadPromise};d.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};d._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this.relatedLayer.geometryType;
this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{var a=[];const b=[];for(const c of this.fields)if("oid"===c.type)a.push(c),b.push(c.name);else for(const g of this._overrideFields)if(g.toLowerCase()===c.name.toLowerCase()){a.push(c);b.push(c.name);break}this.fields=a;this._overrideFields=b}if(a=this._layer.nativeCapabilities())this._databaseType=a.databaseType,this._requestStandardised=
a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.globalIdField=this.relatedLayer.globalIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};d.databaseType=function(){return this.relatedLayer.databaseType().then(()=>this._databaseType=this.relatedLayer._databaseType)};d.isTable=function(){return this.relatedLayer.isTable()};d._isInFeatureSet=function(){return w.IdState.InFeatureSet};
d._candidateIdTransform=function(a){return a};d._getSet=function(a){return null===this._wset?this._ensureLoaded().then(()=>this._getFilteredSet("",null,null,null,a)).then(b=>this._wset=b):r.resolve(this._wset)};d._changeFeature=function(a){const b={};for(const c of this.fields)b[c.name]=a.attributes[c.name];return new z({geometry:!0===this._removeGeometry?null:a.geometry,attributes:b})};d._getFilteredSet=function(a,b,c,g,l){return this.databaseType().then(()=>{if(this.isTable()&&b&&null!==a&&""!==
a)return new t([],[],!0,null);const h=this._layer.nativeCapabilities();if(!1===h.canQueryRelated)return new t([],[],!0,null);if(h.capabilities.queryRelated&&h.capabilities.queryRelated.supportsPagination)return this._getFilteredSetUsingPaging(a,b,c,g,l);let e="",m=!1;null!==g&&h.capabilities&&h.capabilities.queryRelated&&!0===h.capabilities.queryRelated.supportsOrderBy&&(e=g.constructClause(),m=!0);const f=new x;f.objectIds=[this._findObjectId];var k=null!==this._overrideFields?this._overrideFields:
this._fieldsIncludingObjectId(this.relatedLayer.fields?this.relatedLayer.fields.map(n=>n.name):["*"]);f.outFields=k;f.relationshipId=this.relationship.id;f.where="1\x3d1";k=!0;!0===this._removeGeometry&&(k=!1);f.returnGeometry=k;this._requestStandardised&&(f.sqlFormat="standard");f.outSpatialReference=this.spatialReference;f.orderByFields=""!==e?e.split(","):null;return h.source.queryRelatedFeatures(f).then(n=>{this._checkCancelled(l);var p=n[this._findObjectId]?n[this._findObjectId].features:[];
n=[];for(var q=0;q<p.length;q++)this._featureCache[p[q].attributes[this._layer.objectIdField]]=p[q],n.push(p[q].attributes[this._layer.objectIdField]);p=b&&null!==a&&""!==a;q=null!==c&&void 0!==c;return new t(p||q?n:[],p||q?[]:n,m,null)})})};d._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;let b=!1;for(const c of a)if(c.toUpperCase()===this.objectIdField.toUpperCase()){b=!0;break}!1===b&&a.push(this.objectIdField);return a};d._getFilteredSetUsingPaging=
function(a,b,c,g,l){try{let h="",e=!1;const m=this._layer.nativeCapabilities();null!==g&&m&&m.capabilities.queryRelated&&!0===m.capabilities.queryRelated.supportsOrderBy&&(h=g.constructClause(),e=!0);return this.databaseType().then(()=>{let f=this._maxQueryRate();var k=m.capabilities.query.maxRecordCount;void 0!==k&&k<f&&(f=k);k=b&&null!==a&&""!==a;const n=null!==c&&void 0!==c;let p=null,q=!0;!0===this._removeGeometry&&(q=!1);const C=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this.relatedLayer.fields?
this.relatedLayer.fields.map(B=>B.name):["*"]);p=new t(k||n?["GETPAGES"]:[],k||n?[]:["GETPAGES"],e,{outFields:C.join(","),resultRecordCount:f,resultOffset:0,objectIds:[this._findObjectId],where:"1\x3d1",orderByFields:h,returnGeometry:q,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});return this._expandPagedSet(p,f,0,0,l).then(()=>p)})}catch(h){return r.reject(h)}};d._expandPagedSet=function(a,b,c,g,l){return this._expandPagedSetFeatureSet(a,b,c,g,l)};d._clonePageDefinition=
function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,
resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}};d._getPhysicalPage=function(a,b,c){try{const g=a.pagesDefinition.internal.lastRetrieved,l=a.pagesDefinition.internal.lastPage,h=this._layer.nativeCapabilities(),e=new x;!0===this._requestStandardised&&(e.sqlFormat="standard");e.relationshipId=this.relationship.id;e.objectIds=
a.pagesDefinition.objectIds;e.resultOffset=a.pagesDefinition.internal.lastPage;e.resultRecordCount=a.pagesDefinition.resultRecordCount;e.outFields=a.pagesDefinition.outFields.split(",");e.where=a.pagesDefinition.where;e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return h.source.queryRelatedFeatures(e).then(m=>{this._checkCancelled(c);if(a.pagesDefinition.internal.lastPage!==
l)return 0;const f=m[this._findObjectId]?m[this._findObjectId].features:[];for(var k=0;k<f.length;k++)a.pagesDefinition.internal.set[g+k]=f[k].attributes[this._layer.objectIdField];for(k=0;k<f.length;k++)this._featureCache[f[k].attributes[this._layer.objectIdField]]=f[k];m=m[this._findObjectId]?!1===m[this._findObjectId].exceededTransferLimit:!0;f.length!==a.pagesDefinition.resultRecordCount&&m&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=g+f.length;a.pagesDefinition.internal.lastPage+=
a.pagesDefinition.resultRecordCount;return f.length})}catch(g){return r.reject(g)}};d._getFeatures=function(a,b,c,g){const l=[];-1!==b&&void 0===this._featureCache[b]&&l.push(b);var h=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,h))return this._expandPagedSet(a,h,0,0,g).then(()=>this._getFeatures(a,b,c,g));h=0;for(let e=a._lastFetchedIndex;e<a._known.length;e++){h++;h<=c&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[e]&&void 0===this._featureCache[a._known[e]]&&(a._known[e]!==
b&&l.push(a._known[e]),l.length>c))break;if(h>=c&&0===l.length)break}return 0===l.length?r.resolve("success"):r.reject(Error("Unaccounted for Features. Not in Feature Collection"))};d._refineSetBlock=function(a,b,c){return r.resolve(a)};d._stat=function(a,b,c,g,l,h,e){return r.resolve({calculated:!1})};d._canDoAggregates=function(a,b,c,g,l){return r.resolve(!1)};d.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};d.serviceUrl=function(){return this.relatedLayer.serviceUrl()};
d.queryAttachments=function(a,b,c,g){return this.relatedLayer.queryAttachments(a,b,c,g)};d.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};d.getOwningSystemUrl=function(){return this.relatedLayer.getOwningSystemUrl()};d.getIdentityUser=function(){return this.relatedLayer.getIdentityUser()};v._createClass(u,[{key:"gdbVersion",get:function(){return this.relatedLayer.gdbVersion}}]);return u}(A)});