(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7258],{87258:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var r=o(29768),n=o(74569),i=o(23761),s=o(57251),l=o(74673),a=o(76506),p=o(34250),y=(o(91306),o(92143),o(97714)),u=o(17533),f=o(2906),c=o(60947),m=o(32422),h=o(97546);o(21801),o(40642),o(71552),o(73796),o(21972),o(23639),o(86656),o(22723),o(91055),o(27794),o(6906),o(50406),o(60991),o(81172),o(31450),o(26341),o(91597),o(86787),o(35132),o(89623),o(84069),o(44567),o(98380),o(92896),o(22781),o(86748),o(15324),o(76996),o(14249),o(9801),o(53523),o(59465),o(42911),o(46826),o(45433),o(60217),o(29107),o(30574),o(2157),o(25977),o(7471),o(54414),o(1648),o(8925),o(33921),o(3482),o(45154),o(16769),o(55531),o(30582),o(593),o(85699),o(63136),o(96055),o(47776),o(18033),o(6331),o(62048),o(4292),o(75626),o(72652),o(29641),o(30493),o(70821),o(82673),o(34229),o(37029),o(96467),o(63571),o(30776),o(48027),o(54174),o(82426),o(63130),o(25696),o(66396),o(42775),o(95834),o(34394),o(57150),o(76726),o(20444),o(76393),o(78548),o(2497),o(49906),o(46527),o(48649),o(9960),o(3101),o(5853),o(39141),o(32101),o(38742),o(48243),o(34635),o(10401),o(49900),o(66284),o(82058),o(88762),o(73173),o(22739),o(20543),o(67477),o(78533),o(74653),o(91091),o(58943),o(70737),o(8487),o(17817),o(90814),o(15459),o(61847),o(16796),o(16955),o(22401),o(77894),o(55187),o(8586),o(44509),o(69814),o(11305),o(62259),o(44790),o(5909),o(60669),o(48208),o(51589),o(54732);const d=new s.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=class extends l.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=c.Z.fromJSON(t.spatialReference),r=[];for(let t=0;t<e.length;t++){const n=e[t],s=i.Z.fromJSON(n),l=n.geometry&&n.geometry.spatialReference;(0,a.i)(s.geometry)&&!l&&(s.geometry.spatialReference=o),r.push(s)}return r}writeGeometryType(e,t,o,r){if(e)return void d.write(e,t,o,r);const{features:n}=this;if(n)for(const e of n)if(e&&(0,a.i)(e.geometry))return void d.write(e.geometry.type,t,o,r)}readQueryGeometry(e,t){if(!e)return null;const o=!!e.spatialReference,r=(0,m.im)(e);return!o&&t.spatialReference&&(r.spatialReference=c.Z.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:o}=this;if(o)for(const e of o)if(e&&(0,a.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let o=0;o<t.features.length;o++){const r=t.features[o];if(r.geometry){const t=e&&e[o];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,o],translate:[r,n]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((n-e)/o)));for(let e=0,t=i.length;e<t;e++)s((0,a.u)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:o}=this;if(!o)return this;const{translate:[r,n],scale:[i,s]}=o,l=this._getHydrationFunction(e,(e=>e*i+r),(e=>n-e*s));for(const{geometry:e}of t)(0,a.i)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,o){let r,n;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=o(l[1]);e===r&&s===n||(i.push([e-r,s-n]),r=e,n=s)}else r=t(l[0]),n=o(l[1]),i.push([r,n])}return i.length>0?i:null}_getQuantizationFunction(e,t,o){return"point"===e?e=>(e.x=t(e.x),e.y=o(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=(0,m.oU)(e)?e.rings:e.paths,n=[];for(let e=0,i=r.length;e<i;e++){const i=r[e],s=this._quantizePoints(i,t,o);s&&n.push(s)}return n.length>0?((0,m.oU)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const r=this._quantizePoints(e.points,t,o);return r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,o){return"point"===e?e=>{e.x=t(e.x),e.y=o(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=(0,m.oU)(e)?e.rings:e.paths;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];for(let e=0,r=s.length;e<r;e++){const r=s[e];e>0?(n+=r[0],i+=r[1]):(n=r[0],i=r[1]),r[0]=t(n),r[1]=o(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=o(e.ymin),e.xmax=t(e.xmax),e.ymax=o(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];e>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=o(i)}}:void 0}};(0,r._)([(0,p.Cb)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,p.Cb)({type:[i.Z],json:{write:!0}})],g.prototype,"features",void 0),(0,r._)([(0,y.r)("features")],g.prototype,"readFeatures",null),(0,r._)([(0,p.Cb)({type:[h.Z],json:{write:!0}})],g.prototype,"fields",void 0),(0,r._)([(0,p.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:d.read}}})],g.prototype,"geometryType",void 0),(0,r._)([(0,f.w)("geometryType")],g.prototype,"writeGeometryType",null),(0,r._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,r._)([(0,p.Cb)({types:n.qM,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,r._)([(0,y.r)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,r._)([(0,p.Cb)({type:c.Z,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,r._)([(0,f.w)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,r._)([(0,p.Cb)({json:{write:!0}})],g.prototype,"transform",void 0),g=(0,r._)([(0,u.j)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0,g||(g={});const _=g}}]);