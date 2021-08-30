// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../geometry/support/quantizationUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./AttributesBuilder ./attributeSupport ./projectionSupport ./timeSupport ./utils ../../support/fieldUtils ../../../smartMapping/statistics/support/utils ../../../support/arcadeOnDemand".split(" "),function(G,M,P,H,U,I,V,N,W,C,Q,D,X){function R(k){return k.substr(24,12)+k.substr(19,4)+k.substr(16,2)+k.substr(14,2)+
k.substr(11,2)+k.substr(9,2)+k.substr(6,2)+k.substr(4,2)+k.substr(2,2)+k.substr(0,2)}function S(k,g,a,b){if(a&&"esriFieldTypeDate"===a.type){const c=(new Date(k)).getTime(),d=(new Date(g)).getTime();if(!isNaN(c)&&!isNaN(d))return b?d-c:c-d}return"number"===typeof k&&"number"===typeof g?b?g-k:k-g:"string"===typeof k&&"string"===typeof g?(k=k.toUpperCase(),g=g.toUpperCase(),!a||"esriFieldTypeGUID"!==a.type&&"esriFieldTypeGlobalID"!==a.type?b=(b?k>g:k<g)?-1:(b?k<g:k>g)?1:0:(a=R(k),g=R(g),b=(b?a>g:a<
g)?-1:(b?a<g:a>g)?1:0),b):b?1:-1}function Y(k,g,a,b,c,d){c-=a;d-=b;k=Math.min(1,Math.max(0,((k-a)*c+(g-b)*d)/(c*c+d*d)));return{x:a+c*k,y:b+d*k}}function Z(k,g){return k?g?4:3:g?3:2}return function(){function k(a,b,c){this.items=a;this.queryGeometry=b;this.definitionExpression=c.definitionExpression;this.geometryType=c.geometryType;this.hasM=c.hasM;this.hasZ=c.hasZ;this.objectIdField=c.objectIdField;this.spatialReference=c.spatialReference;this.fieldsIndex=c.fieldsIndex;this.timeInfo=c.timeInfo;this.featureAdapter=
c.featureAdapter;this.aggregateAdapter=c.aggregateAdapter}var g=k.prototype;g.createQueryResponseForCount=function(a){const b=new I(a,this.featureAdapter,this.fieldsIndex);if(!a.outStatistics)return b.countDistinctValues(this.items);const {groupByFieldsForStatistics:c,having:d}=a;if(null==c||!c.length)return 1;const e=new Map,f=new Map,m=new Set;a=a.outStatistics;for(const h of a){({statisticType:a}=h);a="exceedslimit"!==a?h.onStatisticField:void 0;if(!f.has(a)){var l=[];for(const n of c){const p=
this._getAttributeValues(b,n,e);l.push(p)}f.set(a,this._calculateUniqueValues(l))}a=f.get(a);for(const n in a){const {data:p,items:u}=a[n];l=p.join(",");d&&!b.validateItems(u,d)||m.add(l)}}return m.size};g.createQueryResponse=function(a){let b;b=a.outStatistics?a.outStatistics.some(c=>"exceedslimit"===c.statisticType)?this._createExceedsLimitQueryResponse(a):this._createStatisticsQueryResponse(a):this._createFeatureQueryResponse(a);a.returnQueryGeometry&&(H.isValid(a.outSR)&&!H.equals(this.queryGeometry.spatialReference,
a.outSR)?b.queryGeometry=C.cleanFromGeometryEngine({spatialReference:a.outSR,...N.project(this.queryGeometry,this.queryGeometry.spatialReference,a.outSR)}):b.queryGeometry=C.cleanFromGeometryEngine({spatialReference:a.outSR,...this.queryGeometry}));return b};g.createSnappingResponse=function(a,b){const c=this.featureAdapter,d=Z(this.hasZ,this.hasM),{x:e,y:f}=a.point,m="number"===typeof a.distance?a.distance:a.distance.x,l="number"===typeof a.distance?a.distance:a.distance.y,h={candidates:[]},n="esriGeometryPolygon"===
this.geometryType;b=this.getPointCreator(a.point,this.spatialReference,b);for(const v of this.items){var p=c.getGeometry(v);if(!p)continue;const {coords:q,lengths:w}=p;if(a.types&1){p=0;for(var u=0;u<w.length;u++){var x=w[u];for(var z=0;z<x;z++,p+=d){var y=q[p],t=q[p+1];if(z!==x-1){const A=q[p+d],B=q[p+d+1],{x:F,y:J}=Y(e,f,y,t,A,B);var r=(e-F)/m;const E=(f-J)/l;r=r*r+E*E;1>=r&&h.candidates.push({type:"edge",objectId:c.getObjectId(v),distance:Math.sqrt(r),target:b(F,J),start:b(y,t),end:b(A,B)})}}}}if(a.types&
2)for(p=n?q.length-d:q.length,u=0;u<p;u+=d)x=q[u],z=q[u+1],y=(e-x)/m,t=(f-z)/l,y=y*y+t*t,1>=y&&h.candidates.push({type:"vertex",objectId:c.getObjectId(v),distance:Math.sqrt(y),target:b(x,z)})}h.candidates.sort((v,q)=>v.distance-q.distance);return h};g.getPointCreator=function(a,b,c){const d=M.isSome(c)&&!H.equals(b,c)?e=>N.project(e,b,c):e=>e;return null!=a.z&&null!=a.m?(e,f)=>d({x:e,y:f,z:a.z,m:a.m}):null!=a.z?(e,f)=>d({x:e,y:f,z:a.z}):null!=a.m?(e,f)=>d({x:e,y:f,m:a.m}):(e,f)=>d({x:e,y:f})};g.executeAttributesQuery=
function(a){var b=V.getWhereClause(a.where,this.fieldsIndex);if(!b)return Promise.resolve(this);if(b.isStandardized){let c=0;const d=[];for(const e of this.items)b.testFeature(e,this.featureAdapter)&&(d[c++]=e);b=new k(d,this.queryGeometry,this);b.definitionExpression=a.where;return Promise.resolve(b)}return Promise.reject(new TypeError("Where clause is not standardized"))};g.executeAggregateIdsQuery=function(a){if(!a.aggregateIds||!a.aggregateIds.length||M.isNone(this.aggregateAdapter))return Promise.resolve(this);
const b=new Set;for(const d of a.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(d).forEach(e=>b.add(e));const c=this.featureAdapter.getObjectId;return Promise.resolve(new k(this.items.filter(d=>b.has(c(d))),this.queryGeometry,this))};g.executeObjectIdsQuery=function(a){if(!a.objectIds||!a.objectIds.length)return Promise.resolve(this);const b=new Set(a.objectIds),c=this.featureAdapter.getObjectId;return Promise.resolve(new k(this.items.filter(d=>b.has(c(d))),this.queryGeometry,this))};g.executeTimeQuery=
function(a){a=W.getTimeOperator(this.timeInfo,a.timeExtent,this.featureAdapter);if(!M.isSome(a))return Promise.resolve(this);a=this.items.filter(a);return Promise.resolve(new k(a,this.queryGeometry,this))};g.filterLatest=function(){const {trackIdField:a,startTimeField:b,endTimeField:c}=this.timeInfo;var d=c||b;const e=new Map,f=this.featureAdapter.getAttribute;for(const m of this.items){const l=f(m,a),h=f(m,d),n=e.get(l);(!n||h>f(n,d))&&e.set(l,m)}d=Array.from(e.values());return Promise.resolve(new k(d,
this.queryGeometry,this))};g.project=function(){var a=G._asyncToGenerator(function*(b){if(!b||H.equals(this.spatialReference,b))return this;const c=this.featureAdapter,d=(yield N.projectMany(this.items.map(e=>C.getGeometry(this.geometryType,this.hasZ,this.hasM,c.getGeometry(e))),this.spatialReference,b)).map((e,f)=>c.cloneWithGeometry(this.items[f],U.convertFromGeometry(e,this.hasZ,this.hasM)));return new k(d,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,
hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:b,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})});return function(b){return a.apply(this,arguments)}}();g.createSummaryStatisticsResponse=function(){var a=G._asyncToGenerator(function*(b,c){const {field:d,normalizationField:e,normalizationType:f,normalizationTotal:m,minValue:l,maxValue:h}=c;var n=new I(b,this.featureAdapter,this.fieldsIndex);b=this.fieldsIndex.isDateField(d);
c=c.valueExpression?yield this._getAttributeExpressionValues(n,c.valueExpression,c.viewInfoParams):this._getAttributeNormalizedValues(n,{field:d,normalizationField:e,normalizationType:f,normalizationTotal:m});n=D.isNullCountSupported({normalizationType:f,normalizationField:e,minValue:l,maxValue:h});c=Q.isStringField(this.fieldsIndex.get(d))?D.calculateStringStatistics({values:c,supportsNullCount:n}):D.calculateStatistics({values:c,minValue:l,maxValue:h,useSampleStdDev:!f,supportsNullCount:n});return D.processStatsResult(c,
b)});return function(b,c){return a.apply(this,arguments)}}();g._sortFeatures=function(a,b,c){if(1<a.length&&b&&b.length)for(const d of b.reverse()){b=d.split(" ");const e=b[0],f=this.fieldsIndex.get(e),m=b[1]&&"desc"===b[1].toLowerCase();a.sort((l,h)=>{l=c(l,e,f);h=c(h,e,f);return S(l,h,f,m)})}};g._createFeatureQueryResponse=function(a){const b=this.items,{geometryType:c,hasM:d,hasZ:e,objectIdField:f,spatialReference:m}=this,{outFields:l,outSR:h,quantizationParameters:n,resultRecordCount:p,resultOffset:u,
returnZ:x,returnM:z}=a,y=null!=p?b.length>(u||0)+p:!1,t=l&&(-1<l.indexOf("*")?[...this.fieldsIndex.fields]:l.map(r=>this.fieldsIndex.get(r)));return{exceededTransferLimit:y,features:this._createFeatures(a,b),fields:t,geometryType:c,hasM:d&&z,hasZ:e&&x,objectIdFieldName:f,spatialReference:C.cleanFromGeometryEngine(h?h:m),transform:n&&P.toQuantizationTransform(n)||null}};g._createFeatures=function(a,b){const c=new I(a,this.featureAdapter,this.fieldsIndex),{hasM:d,hasZ:e}=this,{orderByFields:f,quantizationParameters:m,
returnGeometry:l,returnCentroid:h,maxAllowableOffset:n,resultOffset:p,resultRecordCount:u,returnZ:x=!1,returnM:z=!1}=a,y=e&&x,t=d&&z;a=[];var r=0;b=[...b];this._sortFeatures(b,f,(w,A,B)=>c.getFieldValue(w,A,B));if(l||h){var v=P.toQuantizationTransform(m);if(l&&!h)for(var q of b)a[r++]={attributes:c.getAttributes(q),geometry:C.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(q),n,v,y,t)};else if(!l&&h)for(const w of b)a[r++]={attributes:c.getAttributes(w),centroid:C.transformCentroid(this,
this.featureAdapter.getCentroid(w,this),v)};else for(const w of b)a[r++]={attributes:c.getAttributes(w),centroid:C.transformCentroid(this,this.featureAdapter.getCentroid(w,this),v),geometry:C.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(w),n,v,y,t)}}else for(v of b)(q=c.getAttributes(v))&&(a[r++]={attributes:q});r=p||0;null!=u&&(a=a.slice(r,Math.min(a.length,r+u)));return a};g._createExceedsLimitQueryResponse=function(a){var b=!1;let c=Number.POSITIVE_INFINITY,
d=Number.POSITIVE_INFINITY;b=Number.POSITIVE_INFINITY;for(const e of a.outStatistics)if("exceedslimit"===e.statisticType){c=null!=e.maxPointCount?e.maxPointCount:Number.POSITIVE_INFINITY;d=null!=e.maxRecordCount?e.maxRecordCount:Number.POSITIVE_INFINITY;b=null!=e.maxVertexCount?e.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)b=this.items.length>c;else if(this.items.length>d)b=!0;else{a=this.hasZ?this.hasM?4:3:this.hasM?3:2;const e=this.featureAdapter;b=this.items.reduce((f,
m)=>{m=e.getGeometry(m);return f+(m&&m.coords.length||0)},0)/a>b}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(b)}}]}};g._createStatisticsQueryResponse=function(a){var b={attributes:{}};const c=[],d=new Map,e=new Map,f=new Map,m=new Map,l=new I(a,this.featureAdapter,this.fieldsIndex);var h=a.outStatistics;const {groupByFieldsForStatistics:n,having:p,orderByFields:u}=
a;a=n&&n.length;const x=!!a,z=x&&n[0],y=x&&!this.fieldsIndex.get(z);for(const w of h){const {outStatisticFieldName:A,statisticType:B}=w;h=w;var t="exceedslimit"!==B?w.onStatisticField:void 0;const F="percentile_disc"===B||"percentile_cont"===B,J=x&&1===a&&(t===z||y)&&"count"===B;if(x){if(!f.has(t)){var r=[];for(const E of n){var v=this._getAttributeValues(l,E,d);r.push(v)}f.set(t,this._calculateUniqueValues(r,l.returnDistinctValues))}r=f.get(t);for(const E in r){const {count:aa,data:T,items:ba,itemPositions:ca}=
r[E];v=T.join(",");if(!p||l.validateItems(ba,p)){const O=m.get(v)||{attributes:{}};var q=null;if(J)q=aa;else{const K=this._getAttributeValues(l,t,d);q=ca.map(L=>K[L]);q=F&&"statisticParameters"in h?this._getPercentileValue(h,q):this._getStatisticValue(h,q)}O.attributes[A]=q;n.forEach((K,L)=>O.attributes[this.fieldsIndex.get(K)?K:`EXPR_${L+1}`]=T[L]);m.set(v,O)}}}else t=this._getAttributeValues(l,t,d),b.attributes[A]=F&&"statisticParameters"in h?this._getPercentileValue(h,t):this._getStatisticValue(h,
t,e);c.push({name:A,alias:A,type:"esriFieldTypeDouble"})}b=x?Array.from(m.values()):[b];this._sortFeatures(b,u,(w,A)=>w.attributes[A]);return{fields:c,features:b}};g._getStatisticValue=function(a,b,c){const {onStatisticField:d,statisticType:e}=a;a=null;a=null!=c&&c.has(d)?c.get(d):Q.isStringField(this.fieldsIndex.get(d))?D.calculateStringStatistics({values:b}):D.calculateStatistics({values:b,minValue:null,maxValue:null,useSampleStdDev:!0});c&&c.set(d,a);return a["var"===e?"variance":e]};g._getPercentileValue=
function(a,b){const {onStatisticField:c,statisticParameters:d,statisticType:e}=a,{value:f,orderBy:m}=d,l="desc"===m,h=this.fieldsIndex.get(c);a=[...b].filter(n=>null!=n).sort((n,p)=>S(n,p,h,l));return this._calculatePercentile(a,f,"percentile_disc"===e)};g._getAttributeValues=function(a,b,c){if(c.has(b))return c.get(b);const d=this.fieldsIndex.get(b),e=this.items.map(f=>a.getFieldValue(f,b,d));c.set(b,e);return e};g._getAttributeNormalizedValues=function(a,b){return this.items.map(c=>a.getNormalizedValue(c,
{field:b.field,fieldInfo:this.fieldsIndex.get(b.field),normalizationField:b.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(b.normalizationField),normalizationType:b.normalizationType,normalizationTotal:b.normalizationTotal}))};g._getAttributeExpressionValues=function(){var a=G._asyncToGenerator(function*(b,c,d){const {arcadeUtils:e}=yield X.loadArcade(),f=e.createFunction(c),m=d&&e.getViewInfo(d);return this.items.map(l=>b.getExpressionValue(l,{compiledFunc:f,viewInfo:m},e))});return function(b,
c,d){return a.apply(this,arguments)}}();g._calculateUniqueValues=function(a,b){const c={},d=this.items,e=d.length;for(let f=0;f<e;f++){const m=d[f],l=[];for(const n of a)l.push(n[f]);const h=l.join(",");b?null==c[h]&&(c[h]={count:1,data:l,items:[m],itemPositions:[f]}):null==c[h]?c[h]={count:1,data:l,items:[m],itemPositions:[f]}:(c[h].count++,c[h].items.push(m),c[h].itemPositions.push(f))}return c};g._calculatePercentile=function(a,b,c){if(0===a.length)return null;if(0>=b)return a[0];if(1<=b)return a[a.length-
1];var d=(a.length-1)*b,e=Math.floor(d);b=e+1;d%=1;e=a[e];const f=a[b];return b>=a.length||c||"string"===typeof e||"string"===typeof f?e:e*(1-d)+f*d};G._createClass(k,[{key:"size",get:function(){return this.items.length}}]);return k}()});