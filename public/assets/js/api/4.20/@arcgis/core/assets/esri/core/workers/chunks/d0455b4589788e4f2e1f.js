(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[378,7258],{23761:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var i,o=r(29768),s=r(74569),n=r(86748),l=r(96467),a=r(74673),p=r(76506),u=r(42788),y=r(34250),c=(r(91306),r(92143),r(17533)),d=r(32422);r(21801),r(40642),r(71552),r(73796),r(97714),r(60947),r(2906),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(26341),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589);let h=i=class extends a.a{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,u.g)(),configurable:!0})}normalizeCtorArgs(e,t,r,i){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:i}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,p.i)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,p.i)(this.geometry)?this.geometry.toJSON():null,symbol:(0,p.i)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new i(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:(0,p.d9)(this.attributes),geometry:(0,p.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,p.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,r,i){if(!this.layer||!("graphicChanged"in this.layer))return;const o={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(o.attributeName=i),this.layer.graphicChanged(o)}};(0,o._)([(0,y.Cb)({value:null})],h.prototype,"attributes",null),(0,o._)([(0,y.Cb)({value:null,types:s.qM,json:{read:d.im}})],h.prototype,"geometry",null),(0,o._)([(0,y.Cb)({type:Boolean})],h.prototype,"isAggregate",void 0),(0,o._)([(0,y.Cb)()],h.prototype,"layer",void 0),(0,o._)([(0,y.Cb)({type:n.Z})],h.prototype,"popupTemplate",void 0),(0,o._)([(0,y.Cb)()],h.prototype,"sourceLayer",void 0),(0,o._)([(0,y.Cb)({value:null,types:l.LB})],h.prototype,"symbol",null),(0,o._)([(0,y.Cb)({type:Boolean,value:!0})],h.prototype,"visible",null),h=i=(0,o._)([(0,c.j)("esri.Graphic")],h),(h||(h={})).generateUID=u.g;const m=h},54732:(e,t,r)=>{"use strict";r.d(t,{k:()=>i});const i=new(r(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},42788:(e,t,r)=>{"use strict";r.d(t,{g:()=>o});let i=0;function o(){return++i}},81731:(e,t,r)=>{"use strict";r.d(t,{a:()=>o,e:()=>n,p:()=>s});var i=r(32101);function o(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function s(e){return"string"==typeof e?(0,i.mN)(e):e}function n(e,t,r){const i={};for(const o in e){if("declaredClass"===o)continue;const s=e[o];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){i[o]=[];for(let e=0;e<s.length;e++)i[o][e]=n(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[o]);i[o]=t?e:JSON.stringify(e)}else i[o]=t?s:JSON.stringify(s);else i[o]=s}return i}},97546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i,o=r(29768),s=r(57251),n=r(74673),l=r(34250),a=(r(76506),r(91306)),p=(r(92143),r(59465)),u=r(97714),y=r(17533),c=r(9801),d=r(54732);r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341),r(53523),r(42911),r(46826),r(45433);const h=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=i=class extends n.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?h.fromJSON(r.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,l.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,u.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,l.Cb)({types:c.t,json:{read:{reader:c.f},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,l.Cb)({type:a.I,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,p.e)(d.k)],m.prototype,"type",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,u.r)("valueType",["description"])],m.prototype,"readValueType",null),m=i=(0,o._)([(0,y.j)("esri.layers.support.Field")],m);const f=m},87258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var i=r(29768),o=r(74569),s=r(23761),n=r(57251),l=r(74673),a=r(76506),p=r(34250),u=(r(91306),r(92143),r(97714)),y=r(17533),c=r(2906),d=r(60947),h=r(32422),m=r(97546);r(21801),r(40642),r(71552),r(73796),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(26341),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(86748),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(54732);const f=new n.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=class extends l.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=d.Z.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){const o=e[t],n=s.Z.fromJSON(o),l=o.geometry&&o.geometry.spatialReference;(0,a.i)(n.geometry)&&!l&&(n.geometry.spatialReference=r),i.push(n)}return i}writeGeometryType(e,t,r,i){if(e)return void f.write(e,t,r,i);const{features:o}=this;if(o)for(const e of o)if(e&&(0,a.i)(e.geometry))return void f.write(e.geometry.type,t,r,i)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,i=(0,h.im)(e);return!r&&t.spatialReference&&(i.spatialReference=d.Z.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,a.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const i=t.features[r];if(i.geometry){const t=e&&e[r];i.geometry=t&&t.toJSON()||i.geometry}}return t}quantize(e){const{scale:[t,r],translate:[i,o]}=e,s=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((o-e)/r)));for(let e=0,t=s.length;e<t;e++)n((0,a.u)(s[e].geometry))||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[i,o],scale:[s,n]}=r,l=this._getHydrationFunction(e,(e=>e*s+i),(e=>o-e*n));for(const{geometry:e}of t)(0,a.i)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,r){let i,o;const s=[];for(let n=0,l=e.length;n<l;n++){const l=e[n];if(n>0){const e=t(l[0]),n=r(l[1]);e===i&&n===o||(s.push([e-i,n-o]),i=e,o=n)}else i=t(l[0]),o=r(l[1]),s.push([i,o])}return s.length>0?s:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,h.oU)(e)?e.rings:e.paths,o=[];for(let e=0,s=i.length;e<s;e++){const s=i[e],n=this._quantizePoints(s,t,r);n&&o.push(n)}return o.length>0?((0,h.oU)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,r);return i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const i=(0,h.oU)(e)?e.rings:e.paths;let o,s;for(let e=0,n=i.length;e<n;e++){const n=i[e];for(let e=0,i=n.length;e<i;e++){const i=n[e];e>0?(o+=i[0],s+=i[1]):(o=i[0],s=i[1]),i[0]=t(o),i[1]=r(s)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const i=e.points;let o,s;for(let e=0,n=i.length;e<n;e++){const n=i[e];e>0?(o+=n[0],s+=n[1]):(o=n[0],s=n[1]),n[0]=t(o),n[1]=r(s)}}:void 0}};(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,p.Cb)({type:[s.Z],json:{write:!0}})],g.prototype,"features",void 0),(0,i._)([(0,u.r)("features")],g.prototype,"readFeatures",null),(0,i._)([(0,p.Cb)({type:[m.Z],json:{write:!0}})],g.prototype,"fields",void 0),(0,i._)([(0,p.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],g.prototype,"geometryType",void 0),(0,i._)([(0,c.w)("geometryType")],g.prototype,"writeGeometryType",null),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,i._)([(0,p.Cb)({types:o.qM,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,i._)([(0,u.r)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,i._)([(0,p.Cb)({type:d.Z,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,i._)([(0,c.w)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,i._)([(0,p.Cb)({json:{write:!0}})],g.prototype,"transform",void 0),g=(0,i._)([(0,y.j)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0,g||(g={});const b=g},2710:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var i=r(29768),o=r(57251),s=r(74673),n=r(34250),l=(r(76506),r(91306),r(92143),r(17533));r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341);const a=new o.J({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let p=class extends s.a{constructor(e){super(e),this.description=null,this.type=null}};(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,i._)([(0,n.Cb)({type:String,json:{read:a.read,write:a.write}})],p.prototype,"type",void 0),p=(0,i._)([(0,l.j)("esri.rest.support.GPMessage")],p);const u=p},658:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i=r(29768),o=r(21972),s=r(32101),n=r(34250),l=(r(76506),r(91306),r(92143),r(17533));r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(71552),r(31450),r(40642);let a=class extends o.Z{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,s.mN)(e):null}_encode(e,t,r){const i={};for(const o in e){if("declaredClass"===o)continue;const s=e[o];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){i[o]=[];for(let e=0;e<s.length;e++)i[o][e]=this._encode(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[o]);i[o]=t?e:JSON.stringify(e)}else i[o]=t?s:JSON.stringify(s);else i[o]=s}return i}};(0,i._)([(0,n.Cb)({readOnly:!0})],a.prototype,"parsedUrl",null),(0,i._)([(0,n.Cb)()],a.prototype,"requestOptions",void 0),(0,i._)([(0,n.Cb)({type:String})],a.prototype,"url",void 0),a=(0,i._)([(0,l.j)("esri.tasks.Task")],a);const p=a}}]);