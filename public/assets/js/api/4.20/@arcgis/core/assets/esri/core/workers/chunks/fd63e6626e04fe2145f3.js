(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5528],{91171:(e,t,r)=>{"use strict";r.d(t,{a:()=>q,b:()=>O,c:()=>w,d:()=>T,e:()=>N,f:()=>B,g:()=>Z,h:()=>x,i:()=>U,j:()=>A,k:()=>L,l:()=>z,p:()=>I});var s=r(81731),n=r(88762),o=r(82058),i=r(32101),a=r(53426),u=r(49214),c=r(34446),l=r(31292),d=(r(74569),r(21801)),h=r(87258),p=r(48190),f=r(40267),y=r(92847),g=r(46646),m=r(39210),b=r(76506),_=r(32422),S=r(95533),k=r(55823);function F(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function I(e,t){const r={};for(const s of e){const{parentObjectId:e,parentGlobalId:o,attachmentInfos:u}=s;for(const s of u){const{id:u}=s,c=(0,i.qg)((0,n.Dp)(`${t}/${e}/attachments/${u}`)),l=a.Z.fromJSON(s);l.set({url:c,parentObjectId:e,parentGlobalId:o}),r[e]?r[e].push(l):r[e]=[l]}}return r}async function x(e,t,r){const n=(0,s.p)(e);return function(e,t,r){let s={query:(0,u.m)({...e.query,f:"json",...F(t)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),(0,o.default)(e.path+"/queryAttachments",s)}(n,c.Z.from(t),{...r}).then((e=>I(e.data.attachmentGroups,n.path)))}async function O(e,t,r){const n=(0,s.p)(e);return(0,u.e)(n,l.Z.from(t),{...r}).then((e=>e.data.count))}async function w(e,t,r){const n=(0,s.p)(e);return(0,u.a)(n,l.Z.from(t),{...r}).then((e=>({count:e.data.count,extent:d.Z.fromJSON(e.data.extent)})))}async function T(e,t,r){const n=(0,s.p)(e);return(0,u.b)(n,l.Z.from(t),{...r}).then((e=>e.data.objectIds))}async function q(e,t,r){const n=(0,s.p)(e),o={...r},i=l.Z.from(t),{data:a}=await(0,u.c)(n,i,i.sourceSpatialReference,o);return a}function j(e,t){return t}function C(e,t,r,s){switch(r){case 0:return v(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?v(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function R(e,t,r,s){switch(r){case 2:return v(e,t,2);default:return C(e,t,r,s)}}function D(e,t,r,s){switch(r){case 2:return v(e,t,3);default:return C(e,t,r,s)}}function P(e,t,r,s){switch(r){case 3:return v(e,t,3);default:return R(e,t,r,s)}}function v({translate:e,scale:t},r,s){return e[s]+r*t[s]}class G{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=j,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,y.g)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:(0,p.n)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,f.u)(r.clone(),r,!1,!1,this.transform),o=(0,f.c)(n,s,!1,!1);e.queryGeometryType=s,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?P:t?R:r?D:C}}async function N(e,t,r){const n=(0,s.p)(e),o={...r},i=l.Z.from(t),a=!i.quantizationParameters,{data:c}=await(0,u.d)(n,i,new G({sourceSpatialReference:i.sourceSpatialReference,applyTransform:a}),o);return c}function V(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=t&&t.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function E(e,t,r={},s){const n=(0,u.m)({...e.query,f:"json",...s,...V(t,s)});return(0,o.default)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...n}})}async function B(e,t,r){return t=g.Z.from(t),async function(e,t,r){const s=await E(e,t,r),n=s.data,o=n.geometryType,i=n.spatialReference,a={};for(const e of n.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:i,hasZ:!!n.hasZ,hasM:!!n.hasM,features:e.relatedRecords};if(null!=e.objectId)a[e.objectId]=t;else for(const r in e)e.hasOwnProperty(r)&&"relatedRecords"!==r&&(a[e[r]]=t)}return{...s,data:a}}((0,s.p)(e),t,r).then((e=>{const t=e.data,r={};return Object.keys(t).forEach((e=>r[e]=h.default.fromJSON(t[e]))),r}))}async function Z(e,t,r){return t=g.Z.from(t),async function(e,t,r){const s=await E(e,t,r,{returnCountOnly:!0}),n=s.data,o={};for(const e of n.relatedRecordGroups)null!=e.objectId&&(o[e.objectId]=e.count);return{...s,data:o}}((0,s.p)(e),t,{...r}).then((e=>e.data))}function J(e,t){var r,s;const n=e.geometry,o=e.toJSON(),i=o;if((0,b.i)(n)&&(i.geometry=JSON.stringify(n),i.geometryType=(0,_.Ji)(n),i.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),null!=(r=o.topFilter)&&r.groupByFields&&(i.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!=(s=o.topFilter)&&s.orderByFields&&(i.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?-1!==o.outFields.indexOf("*")?i.outFields="*":i.outFields=o.outFields.join(","):delete i.outFields,o.outSR?i.outSR=o.outSR.wkid||JSON.stringify(o.outSR):n&&o.returnGeometry&&(i.outSR=i.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const e=o.timeExtent,{start:t,end:r}=e;null==t&&null==r||(i.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete o.timeExtent}return i}function M(e,t,r,s={},n={}){const a="string"==typeof e?(0,i.mN)(e):e,c=t.geometry?[t.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,S.aX)(c,null,s).then((e=>{const c=e&&e[0];(0,b.i)(c)&&((t=t.clone()).geometry=c);const l=(0,u.m)({...a.query,f:r,...n,...J(t,n)});return(0,o.default)((0,i.v_)(a.path,"queryTopFeatures"),{...s,query:{...l,...s.query}})}))}async function U(e,t,r,n){const o=(0,s.p)(e),i={...n},{data:a}=await async function(e,t,r,s){const n=await M(e,t,"json",s);return(0,k.a)(t,r,n.data),n}(o,m.Z.from(t),r,i);return h.default.fromJSON(a)}async function A(e,t,r){const n=(0,s.p)(e);return(await async function(e,t,r){return(0,b.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):M(e,t,"json",r,{returnIdsOnly:!0})}(n,m.Z.from(t),{...r})).data.objectIds}async function L(e,t,r){const n=(0,s.p)(e),o=await async function(e,t,r){return(0,b.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):M(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}(n,m.Z.from(t),{...r});return{count:o.data.count,extent:d.Z.fromJSON(o.data.extent)}}async function z(e,t,r){const n=(0,s.p)(e);return(await function(e,t,r){return(0,b.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):M(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}(n,m.Z.from(t),{...r})).data.count}},11385:(e,t,r)=>{"use strict";r.d(t,{P:()=>a});var s=r(76506),n=r(91055);const o=(0,s.h)("esri-text-decoder")?new TextDecoder("utf-8"):null,i=(0,s.h)("safari")||(0,s.h)("ios")?6:(0,s.h)("ff")?12:32;class a{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,r,s)}init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}clone(){return new a(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),o=e(n,t,r,s);return n.release(),o}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=a.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){a.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,r=this._pos,s=0;if(this._end-r>=10)do{if(t=e[r++],s|=127&t,0==(128&t))break;if(t=e[r++],s|=(127&t)<<7,0==(128&t))break;if(t=e[r++],s|=(127&t)<<14,0==(128&t))break;if(t=e[r++],s|=(127&t)<<21,0==(128&t))break;if(t=e[r++],s+=268435456*(127&t),0==(128&t))break;if(t=e[r++],s+=34359738368*(127&t),0==(128&t))break;if(t=e[r++],s+=4398046511104*(127&t),0==(128&t))break;if(t=e[r++],s+=562949953421312*(127&t),0==(128&t))break;if(t=e[r++],s+=72057594037927940*(127&t),0==(128&t))break;if(t=e[r++],s+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,s+=(127&t)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,s+=t*n}return this._pos=r,s}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>i&&o){const s=e.subarray(t,r);return o.decode(s)}let s="",n="";for(let o=t;o<r;++o){const t=e[o];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}a.pool=new n.O(a,null,(e=>{e._data=null,e._dataView=null}))},76733:(e,t,r)=>{"use strict";r.d(t,{O:()=>d,a:()=>T,b:()=>y,p:()=>D});var s=r(60991),n=r(76506),o=r(11385),i=r(85674),a=r(53785),u=r(60947),c=r(9006);const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class d{constructor(e){this.options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new c.O}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,u.e)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,a.d)(this.options.sourceSpatialReference)/(0,a.d)(e.spatialReference);if(1!==t)for(const r of e.features){if(!r.geometry||!r.geometry.coords)continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.O}createSpatialReference(){return{wkid:0}}createGeometry(){return new i.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new i.a}}const h=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],p=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],f=["upperLeft","lowerLeft"];function y(e){return e>=h.length?null:h[e]}function g(e){return e>=f.length?null:f[e]}function m(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function b(e,t,r){const s=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addCoordinatePoint(s,e.getSInt64(),o++);break}case 1:case 2:default:e.skip()}return s}function _(e,t,r){const s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addLength(s,e.getUInt32(),o++);break}case 3:{const r=e.getUInt32(),o=e.pos()+r;let i=0;for(t.allocateCoordinates(s);e.pos()<o;)t.addCoordinate(s,e.getSInt64(),i),i++,i===n&&(i=0);break}case 1:default:e.skip()}return s}function S(e){const t=new i.a;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.lengths.push(e.getUInt32());break}case 3:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.coords.push(e.getSInt64());break}case 1:r=l[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function k(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function F(e){const t={type:y(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=y(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=(r=e.getEnum())>=p.length?null:p[r];break;case 5:e.skip();break;case 6:t.defaultValue=e.getString();break;default:e.skip()}var r;return t}function I(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function x(e,t,r,s){const n=t.createFeature(r);let o=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[o++].name;n.attributes[t]=e.processMessage(k);break}case 2:n.geometry=e.processMessageWithArgs(_,t,r);break;case 4:n.centroid=e.processMessageWithArgs(b,t,r);break;default:e.skip()}return n}function O(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function w(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function T(e){const t={originPosition:g(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=g(e.getEnum());break;case 2:t.scale=e.processMessage(O);break;case 3:t.translate=e.processMessage(w);break;default:e.skip()}return t}function q(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function j(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function C(e,t){const r=t.createFeatureResult();r.geometryType=m(t,0);let s=!1;for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(q);break;case 7:r.geometryType=m(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(j,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(T);break;case 9:{const t=e.getBool();r.exceededTransferLimit=t;break}case 13:t.addField(r,e.processMessage(F));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,e.processMessageWithArgs(x,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(I);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function R(e,t){const r={};let s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(S);break;case 1:r.featureResult=e.processMessageWithArgs(C,t);break;case 2:case 3:default:e.skip()}return(0,n.i)(s)&&r.featureResult&&t.addQueryGeometry(r,s),r}function D(e,t){const r=function(e,t){try{const r=2,s=new o.P(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)switch(s.tag()){case r:n.queryResult=s.processMessageWithArgs(R,t);break;default:s.skip()}return n}catch(e){throw new s.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}(e,t),n=r.queryResult.featureResult,i=r.queryResult.queryGeometry,a=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=a),n}},49214:(e,t,r)=>{"use strict";r.r(t),r.d(t,{a:()=>m,b:()=>y,c:()=>h,d:()=>p,e:()=>g,f:()=>f,m:()=>l,q:()=>_,r:()=>b});var s=r(82058),n=r(76506),o=r(32101),i=r(32422),a=r(95533),u=r(76733),c=r(55823);function l(e){const t={};for(const r in e){if("declaredClass"===r)continue;const s=e[r];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){t[r]=[];for(let e=0;e<s.length;e++)t[r][e]=l(s[e])}else"object"==typeof s?s.toJSON&&(t[r]=JSON.stringify(s)):t[r]=s}return t}function d(e,t){const r=e.geometry,s=e.toJSON(),o=s;if((0,n.i)(r)&&(o.geometry=JSON.stringify(r),o.geometryType=(0,i.Ji)(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),s.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=s.groupByFieldsForStatistics.join(",")),s.objectIds&&(o.objectIds=s.objectIds.join(",")),s.orderByFields&&(o.orderByFields=s.orderByFields.join(",")),!s.outFields||!s.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete o.outFields:-1!==s.outFields.indexOf("*")?o.outFields="*":o.outFields=s.outFields.join(","),s.outSR?o.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&(s.returnGeometry||s.returnCentroid)&&(o.outSR=o.inSR),s.returnGeometry&&delete s.returnGeometry,s.outStatistics&&(o.outStatistics=JSON.stringify(s.outStatistics)),s.pixelSize&&(o.pixelSize=JSON.stringify(s.pixelSize)),s.quantizationParameters&&(o.quantizationParameters=JSON.stringify(s.quantizationParameters)),s.parameterValues&&(o.parameterValues=JSON.stringify(s.parameterValues)),s.rangeValues&&(o.rangeValues=JSON.stringify(s.rangeValues)),s.dynamicDataSource&&(o.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s.timeExtent){const e=s.timeExtent,{start:t,end:r}=e;null==t&&null==r||(o.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete s.timeExtent}return o}async function h(e,t,r,s){const o=(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await b(e,t,"json",s);return(0,c.a)(t,r,o.data),o}async function p(e,t,r,s){if((0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:r.createFeatureResult()});const o=await f(e,t,s),i=o;return i.data=(0,u.p)(o.data,r),i}function f(e,t,r){return b(e,t,"pbf",r)}function y(e,t,r){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):b(e,t,"json",r,{returnIdsOnly:!0})}function g(e,t,r){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):b(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function m(e,t,r){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):b(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}function b(e,t,r,i={},u={}){const c="string"==typeof e?(0,o.mN)(e):e,h=t.geometry?[t.geometry]:[];return i.responseType="pbf"===r?"array-buffer":"json",(0,a.aX)(h,null,i).then((e=>{const a=e&&e[0];(0,n.i)(a)&&((t=t.clone()).geometry=a);const h=l({...c.query,f:r,...u,...d(t,u)});return(0,s.default)((0,o.v_)(c.path,"query"),{...i,query:{...h,...i.query}})}))}var _=Object.freeze({__proto__:null,queryToQueryStringParameters:d,executeQuery:h,executeQueryPBF:p,executeQueryPBFBuffer:f,executeQueryForIds:y,executeQueryForCount:g,executeQueryForExtent:m,runQuery:b})},81731:(e,t,r)=>{"use strict";r.d(t,{a:()=>n,e:()=>i,p:()=>o});var s=r(32101);function n(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,s.mN)(e):e}function i(e,t,r){const s={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let e=0;e<o.length;e++)s[n][e]=i(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?o:JSON.stringify(o);else s[n]=o}return s}},53426:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s,n=r(29768),o=r(74673),i=r(34250),a=(r(76506),r(91306)),u=(r(92143),r(17533));r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(71552),r(31450),r(40642),r(26341);const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let l=s=class extends o.a{constructor(e){super(e),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:e}=this,t=function(e){const{exifInfo:t,exifName:r,tagName:s}=e;if(!t||!r||!s)return null;const n=t.find((e=>e.name===r));return n?function(e){const{tagName:t,tags:r}=e;if(!r||!t)return null;const s=r.find((e=>e.name===t));return s&&s.value||null}({tagName:s,tags:n.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return c[t]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,n._)([(0,i.Cb)({type:String})],l.prototype,"contentType",void 0),(0,n._)([(0,i.Cb)()],l.prototype,"exifInfo",void 0),(0,n._)([(0,i.Cb)({readOnly:!0})],l.prototype,"orientationInfo",null),(0,n._)([(0,i.Cb)({type:a.I})],l.prototype,"id",void 0),(0,n._)([(0,i.Cb)({type:String})],l.prototype,"globalId",void 0),(0,n._)([(0,i.Cb)({type:String})],l.prototype,"keywords",void 0),(0,n._)([(0,i.Cb)({type:String})],l.prototype,"name",void 0),(0,n._)([(0,i.Cb)({json:{read:!1}})],l.prototype,"parentGlobalId",void 0),(0,n._)([(0,i.Cb)({json:{read:!1}})],l.prototype,"parentObjectId",void 0),(0,n._)([(0,i.Cb)({type:a.I})],l.prototype,"size",void 0),(0,n._)([(0,i.Cb)({json:{read:!1}})],l.prototype,"url",void 0),l=s=(0,n._)([(0,u.j)("esri.layers.support.AttachmentInfo")],l);const d=l},15528:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(29768),n=r(60991),o=r(76506),i=r(50406),a=r(34250),u=(r(91306),r(92143),r(17533)),c=r(69218),l=r(91171),d=r(87258),h=r(31292),p=r(46646),f=r(658);r(81172),r(71552),r(31450),r(40642),r(86656),r(22723),r(57251),r(74673),r(21972),r(23639),r(91055),r(27794),r(6906),r(26341),r(86787),r(59465),r(97714),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(74569),r(21801),r(73796),r(60947),r(2906),r(91597),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(32422),r(81731),r(32101),r(88762),r(82058),r(53426),r(49214),r(95533),r(94751),r(76733),r(11385),r(53785),r(95587),r(55823),r(92847),r(34446),r(48190),r(40267),r(39210),r(93314),r(35197),r(90549),r(23761),r(86748),r(15324),r(76996),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(27207);let y=class extends f.Z{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then((r=>this.featureSetFromJSON(e,r,t)))}async executeJSON(e,t){var r;const s={...this.requestOptions,...t},n=this._normalizeQuery(e),i=null!=(null==(r=e.outStatistics)?void 0:r[0]),a=(0,o.h)("featurelayer-pbf-statistics"),u=!i||a;let c;if("pbf"===this.format&&u)try{c=await(0,l.e)(this.url,n,s)}catch(e){if("query:parsing-pbf"!==e.name)throw e;this.format="json"}return"json"!==this.format&&u||(c=await(0,l.a)(this.url,n,s)),this._normalizeFields(c.fields),c}async featureSetFromJSON(e,t,s){if(!(this._queryIs3DObjectFormat(e)&&(0,o.i)(this.infoFor3D)&&t.features&&t.features.length))return d.default.fromJSON(t);const{meshFeatureSetFromJSON:n}=await(0,i.Hl)(Promise.all([r.e(2334),r.e(167),r.e(1658),r.e(6087)]).then(r.bind(r,76087)),s);return n(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return(0,l.b)(this.url,s,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return(0,l.c)(this.url,s,r)}executeForIds(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return(0,l.d)(this.url,s,r)}executeRelationshipQuery(e,t){e=p.Z.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),(0,l.f)(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=p.Z.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),(0,l.g)(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return(0,l.h)(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t};return(0,l.i)(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t};return(0,l.j)(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t};return(0,l.k)(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t};return(0,l.l)(this.parsedUrl,e,r)}_normalizeQuery(e){let t=h.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?c.D.from(e.dynamicDataSource):this.dynamicDataSource),(0,o.i)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e.id){t.formatOf3DObjects=e.id;break}"3D_gltf"!==e.id||t.formatOf3DObjects||(t.formatOf3DObjects=e.id)}if(!t.formatOf3DObjects)throw new n.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,o.b)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,o.b)(t.outFields)&&(t.outFields=[]);const{originX:r,originY:s,originZ:n,translationX:i,translationY:a,translationZ:u,scaleX:c,scaleY:l,scaleZ:d,rotationX:h,rotationY:p,rotationZ:f,rotationDeg:y}=this.infoFor3D.transformFieldRoles;t.outFields.push(r,s,n,i,a,u,c,l,d,h,p,f,y)}}return t}_normalizeFields(e){if((0,o.i)(this.fieldsIndex)&&(0,o.i)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return(0,o.i)(this.infoFor3D)&&e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,s._)([(0,a.Cb)({type:c.D})],y.prototype,"dynamicDataSource",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"fieldsIndex",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"format",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"gdbVersion",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"infoFor3D",void 0),(0,s._)([(0,a.Cb)()],y.prototype,"sourceSpatialReference",void 0),y=(0,s._)([(0,u.j)("esri.tasks.QueryTask")],y);const g=y},658:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(29768),n=r(21972),o=r(32101),i=r(34250),a=(r(76506),r(91306),r(92143),r(17533));r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(71552),r(31450),r(40642);let u=class extends n.Z{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,o.mN)(e):null}_encode(e,t,r){const s={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let e=0;e<o.length;e++)s[n][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?o:JSON.stringify(o);else s[n]=o}return s}};(0,s._)([(0,i.Cb)({readOnly:!0})],u.prototype,"parsedUrl",null),(0,s._)([(0,i.Cb)()],u.prototype,"requestOptions",void 0),(0,s._)([(0,i.Cb)({type:String})],u.prototype,"url",void 0),u=(0,s._)([(0,a.j)("esri.tasks.Task")],u);const c=u}}]);