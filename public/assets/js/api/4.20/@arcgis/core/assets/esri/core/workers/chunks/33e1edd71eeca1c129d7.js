(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4951,7258],{23761:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n,o=r(29768),i=r(74569),s=r(86748),l=r(96467),a=r(74673),u=r(76506),p=r(42788),c=r(34250),y=(r(91306),r(92143),r(17533)),d=r(32422);r(21801),r(40642),r(71552),r(73796),r(97714),r(60947),r(2906),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(26341),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589);let f=n=class extends a.a{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,p.g)(),configurable:!0})}normalizeCtorArgs(e,t,r,n){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:n}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,u.i)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,u.i)(this.geometry)?this.geometry.toJSON():null,symbol:(0,u.i)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new n(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:(0,u.d9)(this.attributes),geometry:(0,u.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,u.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,r,n){if(!this.layer||!("graphicChanged"in this.layer))return;const o={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(o.attributeName=n),this.layer.graphicChanged(o)}};(0,o._)([(0,c.Cb)({value:null})],f.prototype,"attributes",null),(0,o._)([(0,c.Cb)({value:null,types:i.qM,json:{read:d.im}})],f.prototype,"geometry",null),(0,o._)([(0,c.Cb)({type:Boolean})],f.prototype,"isAggregate",void 0),(0,o._)([(0,c.Cb)()],f.prototype,"layer",void 0),(0,o._)([(0,c.Cb)({type:s.Z})],f.prototype,"popupTemplate",void 0),(0,o._)([(0,c.Cb)()],f.prototype,"sourceLayer",void 0),(0,o._)([(0,c.Cb)({value:null,types:l.LB})],f.prototype,"symbol",null),(0,o._)([(0,c.Cb)({type:Boolean,value:!0})],f.prototype,"visible",null),f=n=(0,o._)([(0,y.j)("esri.Graphic")],f),(f||(f={})).generateUID=p.g;const m=f},78986:(e,t,r)=>{"use strict";function n(){n=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,o){var s=new RegExp(e,n);return t.set(s,o||t.get(e)),i(s,r.prototype)}function s(e,r){var n=t.get(r);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return o(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=s(r,this)),r},r.prototype[Symbol.replace]=function(r,n){if("string"==typeof n){var o=t.get(this);return e[Symbol.replace].call(this,r,n.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof n){var i=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(s(e,i)),n.apply(this,e)}))}return e[Symbol.replace].call(this,r,n)},n.apply(this,arguments)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{_:()=>n})},4571:(e,t,r)=>{"use strict";r.d(t,{a:()=>s,b:()=>a,c:()=>u,d:()=>l});var n=r(76506),o=r(89219),i=r(6941);function s(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.d:"esriGeometryPolyline"===e?i.a:i.b}}}function l(e,t){if((0,n.h)("csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const n=new Function(r);return()=>new n}catch(r){return()=>({[t]:null,...e})}}function a(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function u(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.q,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},6941:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,b:()=>s,c:()=>l,d:()=>o,e:()=>a,f:()=>u,g:()=>p});const n=[252,146,31,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},93939:(e,t,r)=>{"use strict";r.d(t,{a:()=>f,d:()=>m,h:()=>d});var n=r(21972),o=r(15324),i=r(76506),s=r(86656);const l=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function a(e){return e instanceof n.Z}function u(e){return e instanceof o.Z?Object.keys(e.items):a(e)?(0,s.g)(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof o.Z?e.items[t]:e[t]}function c(e){return e?e.declaredClass:null}function y(e,t){const r=e.diff;if(r&&"function"==typeof r)return r(e,t);const n=u(e),o=u(t);if(0===n.length&&0===o.length)return;if(!n.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const s=o.filter((e=>-1===n.indexOf(e))),d=n.filter((e=>-1===o.indexOf(e))),f=n.filter((r=>o.indexOf(r)>-1&&p(e,r)!==p(t,r))).concat(s,d).sort(),m=c(e);if(m&&l.indexOf(m)>-1&&f.length)return{type:"complete",oldValue:e,newValue:t};let g;const h=a(e)&&a(t);for(const n of f){const o=p(e,n),s=p(t,n);let l;(h||"function"!=typeof o&&"function"!=typeof s)&&o!==s&&(null==o&&null==s||(l=r&&r[n]&&"function"==typeof r[n]?r[n](o,s):"object"==typeof o&&"object"==typeof s&&c(o)===c(s)?y(o,s):{type:"complete",oldValue:o,newValue:s},(0,i.i)(l)&&((0,i.i)(g)?g.diff[n]=l:g={type:"partial",diff:{[n]:l}})))}return g}function d(e,t){if((0,i.b)(e))return!1;const r=t.split(".");let n=e;for(const e of r){if("complete"===n.type)return!0;if("partial"!==n.type)return!1;{const t=n.diff[e];if(!t)return!1;n=t}}return!0}function f(e,t){for(const r of t)if(d(e,r))return!0;return!1}function m(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&c(e)!==c(t)?{type:"complete",oldValue:e,newValue:t}:y(e,t)}},54732:(e,t,r)=>{"use strict";r.d(t,{k:()=>n});const n=new(r(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},90995:(e,t,r)=>{"use strict";r.d(t,{c:()=>T,g:()=>s,i:()=>S,v:()=>w});var n=r(60991),o=r(85674);const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function s(e){return i[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*a(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function u(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let r=0;r<e.length;r++){const n=e[r],o=e[(r+1)%e.length];t+=n[0]*o[1]-o[0]*n[1]}return t<=0}function c(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function y(e,t,r){switch(t.type){case"LineString":return function(e,t,r){return m(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const n of t.coordinates)m(e,n,r);return e}(e,t,r);case"MultiPoint":return function(e,t,r){return m(e,t.coordinates,r),e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const n of t.coordinates){d(e,n[0],r);for(let t=1;t<n.length;t++)f(e,n[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return h(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const n=t.coordinates;d(e,n[0],r);for(let t=1;t<n.length;t++)f(e,n[t],r);return e}(e,t,r)}}function d(e,t,r){const n=c(t);p(n)?m(e,n,r):g(e,n,r)}function f(e,t,r){const n=c(t);p(n)?g(e,n,r):m(e,n,r)}function m(e,t,r){for(const n of t)h(e,n,r);e.lengths.push(t.length)}function g(e,t,r){for(let n=t.length-1;n>=0;n--)h(e,t[n],r);e.lengths.push(t.length)}function h(e,t,r){const[n,o,i]=t;e.coords.push(n,o),r.hasZ&&e.coords.push(i||0)}function b(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(e){if(!e)throw new n.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!o.test(r))throw new n.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function S(e,t={}){const r=[],n=new Set,o=new Set;let i,p=!1,c=Number.NEGATIVE_INFINITY,y=null,d=!1,{geometryType:f=null}=t,m=!1;for(const t of l(e)){const{geometry:e,properties:l,id:g}=t;if((!e||(f||(f=s(e.type)),s(e.type)===f))&&(p||(p=u(a(e))),d||(d=null!=g,d&&(i=typeof g,"number"===i&&(y=Object.keys(l).filter((e=>l[e]===g))))),d&&"number"===i&&null!=g&&(c=Math.max(c,g),y.length>1?y=y.filter((e=>l[e]===g)):1===y.length&&(y=l[y[0]]===g?y:[])),!m&&l)){let e=!0;for(const t in l){if(n.has(t))continue;const i=l[t];if(null==i){e=!1,o.add(t);continue}const s=b(i);"unknown"!==s?(o.delete(t),n.add(t),r.push({name:t,alias:t,type:s})):o.add(t)}m=e}}const g=y&&1===y.length&&y[0]||null;if(g)for(const e of r)e.name===g&&(e.type="esriFieldTypeOID");return{fields:r,geometryType:f,hasZ:p,maxObjectId:Math.max(0,c),objectIdFieldName:g,objectIdFieldType:i,unknownFields:Array.from(o)}}function T(e,t){return Array.from(function*(e,t={}){const{geometryType:r,objectIdField:n}=t;for(const l of e){var i;const{geometry:e,properties:a,id:u}=l;if(e&&s(e.type)!==r)continue;const p=a||{};let c=null!=(i=p[n])?i:null;n&&null!=u&&!p[n]&&(p[n]=c=u);const d=new o.O(e?y(new o.a,e,t):null,p,null,c);yield d}}(l(e),t))}},51637:(e,t,r)=>{"use strict";r.d(t,{a:()=>_,b:()=>T,c:()=>S,d:()=>w,e:()=>v,f:()=>b,g:()=>F,h:()=>I,q:()=>j});var n=r(78986),o=(r(74569),r(82058)),i=r(60991),s=r(92143),l=r(76506),a=r(60947),u=r(35132),p=r(40267),c=r(9006),y=r(90995),d=r(4571),f=r(1709),m=r(54732),g=r(87258);const h=s.L.getLogger("esri.layers.graphics.sources.ogcfeature");async function b(e,t,r={},n=5){const{links:s}=e,a=C(s,"items","application/geo+json")||C(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,l.b)(a))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await(0,o.default)(a.href,{signal:r.signal,query:{limit:n,...r.customParameters,token:r.apiKey},headers:{accept:"application/geo+json"}});await(0,y.v)(u);const p=(0,y.i)(u,{geometryType:t.geometryType}),c=t.fields||p.fields||[],g=null!=t.hasZ?t.hasZ:p.hasZ,b=p.geometryType,w=t.objectIdField||p.objectIdFieldName||"OBJECTID";let S=t.timeInfo;const T=c.find((e=>e.name===w));if(T)T.type="esriFieldTypeOID",T.editable=!1,T.nullable=!1;else{if(!p.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");c.unshift({name:w,alias:w,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(w!==p.objectIdFieldName){const e=c.find((e=>e.name===p.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}if(!b)throw new i.Z("ogc-feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");c===p.fields&&p.unknownFields.length>0&&h.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:p.unknownFields}});for(const e of c){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===m.k.jsonValues.indexOf(e.type))throw new i.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(S){const e=new f.Z(c);if(S.startTimeField){const t=e.get(S.startTimeField);t?(S.startTimeField=t.name,t.type="esriFieldTypeDate"):S.startTimeField=null}if(S.endTimeField){const t=e.get(S.endTimeField);t?(S.endTimeField=t.name,t.type="esriFieldTypeDate"):S.endTimeField=null}if(S.trackIdField){const t=e.get(S.trackIdField);t?S.trackIdField=t.name:(S.trackIdField=null,h.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:S}}))}S.startTimeField||S.endTimeField||(h.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:S}}),S=null)}return{drawingInfo:(0,d.a)(b),geometryType:b,fields:c,hasZ:!!g,objectIdField:w,timeInfo:S}}async function w(e,t={}){const{links:r}=e,n=C(r,"data","application/json")||C(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,l.b)(n))throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:a,signal:u}=t,{data:p}=await(0,o.default)(n.href,{signal:u,headers:{accept:"application/json"},query:{...a,token:s}});return p}async function S(e,t={}){const{links:r}=e,n=C(r,"conformance","application/json")||C(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,l.b)(n))throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:a,signal:u}=t,{data:p}=await(0,o.default)(n.href,{signal:u,headers:{accept:"application/json"},query:{...a,token:s}});return p}async function T(e,t={}){const{apiKey:r,customParameters:n,signal:i}=t,{data:s}=await(0,o.default)(e,{signal:i,headers:{accept:"application/json"},query:{...n,token:r}});return s}async function v(e,t={}){const r="application/vnd.oai.openapi+json;version=3.0",n=C(e.links,"service-desc",r);if((0,l.b)(n))return h.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:i,customParameters:s,signal:a}=t,{data:u}=await(0,o.default)(n.href,{signal:a,headers:{accept:r},query:{...s,token:i}});return u}function F(e){const t=(0,n._)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),r=null==t?void 0:t.groups;if(!r)return null;const{authority:o,code:i}=r;switch(o.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return a.Z.GCS_NAD_1927;case"crs83":return new a.Z({wkid:4269});case"crs84":case"crs84h":return a.Z.WGS84;default:return null}case"esri":case"epsg":{const e=Number.parseInt(i,10);return Number.isNaN(e)?null:900913===e?a.Z.WebMercator:new a.Z({wkid:e})}default:return null}}async function j(e,t,r){const n=await _(e,t,r);return g.default.fromJSON(n)}async function _(e,t,r){const n=await I(e,t,r);return(0,p.a)(n)}async function I(e,t,r){const{capabilities:{query:{maxRecordCount:n}},collection:s,layerDefinition:d,queryParameters:{apiKey:f,customParameters:m},spatialReference:g,supportedCrs:h}=e,{links:b}=s,w=C(b,"items","application/geo+json")||C(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,l.b)(w))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:T,start:v,timeExtent:F,where:j}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const _=a.Z.fromJSON(g),I=(0,l.d)(t.outSpatialReference,_),P=I.isWGS84?null:O(I,h),k=function(e,t){if(!function(e){return(0,l.i)(e)&&"extent"===e.type}(e))return null;const{spatialReference:r}=e;if(!r||r.isWGS84)return{bbox:x(e)};const n=O(r,t);return n?{bbox:x(e),"bbox-crs":n}:r.isWebMercator?{bbox:x((0,u.iV)(e,a.Z.WGS84))}:null}(S,h),N=function(e){if((0,l.b)(e))return null;const{start:t,end:r}=e;return`${(0,l.i)(t)?t.toISOString():".."}/${(0,l.i)(r)?r.toISOString():".."}`}(F),Z=function(e){return(0,l.b)(e)||!e||"1=1"===e?null:e}(j),L=null!=T?T:null!=v&&void 0!==v?10:n,{data:G}=await(0,o.default)(w.href,{...r,query:{...m,...k,crs:P,datetime:N,query:Z,limit:L,startindex:v,token:f},headers:{accept:"application/geo+json"}});let M=!1;G.links&&(M=!!G.links.find((e=>"next"===e.rel))),!M&&Number.isInteger(G.numberMatched)&&Number.isInteger(G.numberReturned)&&(M=G.numberReturned<G.numberMatched);const{fields:R,globalIdField:A,hasM:q,hasZ:D,objectIdField:J}=d,V=d.geometryType,$=(0,y.c)(G,{geometryType:V,hasZ:D,objectIdField:J});if(!P&&I.isWebMercator)for(const e of $)if(e.geometry){const t=(0,p.c)(e.geometry,V,D,!1);t.spatialReference=a.Z.WGS84,e.geometry=(0,p.b)((0,u.iV)(t,I))}for(const e of $)e.objectId=e.attributes[J];const B=P||!P&&I.isWebMercator?I.toJSON():a.W,E=new c.O;return E.exceededTransferLimit=M,E.features=$,E.fields=R,E.geometryType=V,E.globalIdFieldName=A,E.hasM=q,E.hasZ=D,E.objectIdFieldName=J,E.spatialReference=B,E}function O(e,t){return t.find((t=>{const r=F(t);return(0,a.e)(r,e)}))}function x(e){const{xmin:t,ymin:r,xmax:n,ymax:o}=e;return`${t},${r},${n},${o}`}function C(e,t,r){return e.find((e=>e.rel===t&&e.type===r))||e.find((e=>e.rel===t&&!e.type))}},42788:(e,t,r)=>{"use strict";r.d(t,{g:()=>o});let n=0;function o(){return++n}},97546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n,o=r(29768),i=r(57251),s=r(74673),l=r(34250),a=(r(76506),r(91306)),u=(r(92143),r(59465)),p=r(97714),c=r(17533),y=r(9801),d=r(54732);r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341),r(53523),r(42911),r(46826),r(45433);const f=new i.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=n=class extends s.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?f.fromJSON(r.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,l.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,p.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,l.Cb)({types:y.t,json:{read:{reader:y.f},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,l.Cb)({type:a.I,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,u.e)(d.k)],m.prototype,"type",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,p.r)("valueType",["description"])],m.prototype,"readValueType",null),m=n=(0,o._)([(0,c.j)("esri.layers.support.Field")],m);const g=m},87258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(29768),o=r(74569),i=r(23761),s=r(57251),l=r(74673),a=r(76506),u=r(34250),p=(r(91306),r(92143),r(97714)),c=r(17533),y=r(2906),d=r(60947),f=r(32422),m=r(97546);r(21801),r(40642),r(71552),r(73796),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(26341),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(86748),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(54732);const g=new s.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let h=class extends l.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=d.Z.fromJSON(t.spatialReference),n=[];for(let t=0;t<e.length;t++){const o=e[t],s=i.Z.fromJSON(o),l=o.geometry&&o.geometry.spatialReference;(0,a.i)(s.geometry)&&!l&&(s.geometry.spatialReference=r),n.push(s)}return n}writeGeometryType(e,t,r,n){if(e)return void g.write(e,t,r,n);const{features:o}=this;if(o)for(const e of o)if(e&&(0,a.i)(e.geometry))return void g.write(e.geometry.type,t,r,n)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,n=(0,f.im)(e);return!r&&t.spatialReference&&(n.spatialReference=d.Z.fromJSON(t.spatialReference)),n}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,a.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const n=t.features[r];if(n.geometry){const t=e&&e[r];n.geometry=t&&t.toJSON()||n.geometry}}return t}quantize(e){const{scale:[t,r],translate:[n,o]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-n)/t)),(e=>Math.round((o-e)/r)));for(let e=0,t=i.length;e<t;e++)s((0,a.u)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[n,o],scale:[i,s]}=r,l=this._getHydrationFunction(e,(e=>e*i+n),(e=>o-e*s));for(const{geometry:e}of t)(0,a.i)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,r){let n,o;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=r(l[1]);e===n&&s===o||(i.push([e-n,s-o]),n=e,o=s)}else n=t(l[0]),o=r(l[1]),i.push([n,o])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const n=(0,f.oU)(e)?e.rings:e.paths,o=[];for(let e=0,i=n.length;e<i;e++){const i=n[e],s=this._quantizePoints(i,t,r);s&&o.push(s)}return o.length>0?((0,f.oU)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const n=this._quantizePoints(e.points,t,r);return n.length>0?(e.points=n,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const n=(0,f.oU)(e)?e.rings:e.paths;let o,i;for(let e=0,s=n.length;e<s;e++){const s=n[e];for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(o+=n[0],i+=n[1]):(o=n[0],i=n[1]),n[0]=t(o),n[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const n=e.points;let o,i;for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(o+=s[0],i+=s[1]):(o=s[0],i=s[1]),s[0]=t(o),s[1]=r(i)}}:void 0}};(0,n._)([(0,u.Cb)({type:String,json:{write:!0}})],h.prototype,"displayFieldName",void 0),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,u.Cb)({type:[i.Z],json:{write:!0}})],h.prototype,"features",void 0),(0,n._)([(0,p.r)("features")],h.prototype,"readFeatures",null),(0,n._)([(0,u.Cb)({type:[m.Z],json:{write:!0}})],h.prototype,"fields",void 0),(0,n._)([(0,u.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],h.prototype,"geometryType",void 0),(0,n._)([(0,y.w)("geometryType")],h.prototype,"writeGeometryType",null),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"hasM",void 0),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"hasZ",void 0),(0,n._)([(0,u.Cb)({types:o.qM,json:{write:!0}})],h.prototype,"queryGeometry",void 0),(0,n._)([(0,p.r)("queryGeometry")],h.prototype,"readQueryGeometry",null),(0,n._)([(0,u.Cb)({type:d.Z,json:{write:!0}})],h.prototype,"spatialReference",void 0),(0,n._)([(0,y.w)("spatialReference")],h.prototype,"writeSpatialReference",null),(0,n._)([(0,u.Cb)({json:{write:!0}})],h.prototype,"transform",void 0),h=(0,n._)([(0,c.j)("esri.rest.support.FeatureSet")],h),h.prototype.toJSON.isDefaultToJSON=!0,h||(h={});const b=h}}]);