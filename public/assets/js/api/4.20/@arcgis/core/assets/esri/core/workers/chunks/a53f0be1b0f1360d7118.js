(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1292],{93314:(t,e,r)=>{"use strict";r.d(e,{Z:()=>h});var i,o=r(29768),s=r(74673),n=r(76506),a=r(35197),l=r(34250),u=(r(91306),r(92143),r(97714)),p=r(17533),d=r(2906);r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(71552),r(31450),r(40642),r(26341);let c=i=class extends s.a{constructor(t){super(t),this.end=null,this.start=null}static get allTime(){return y}static get empty(){return m}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null}clone(){return new i({end:this.end,start:this.start})}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=(0,n.e)(this.start,(e=>(0,a.t)(e,t))),r=(0,n.e)(this.end,(e=>(0,a.o)((0,a.t)(e,t),1,t)));return new i({start:e,end:r})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return i.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=(0,n.m)(this.start,-1/0,(t=>t.getTime())),r=(0,n.m)(this.end,1/0,(t=>t.getTime())),o=(0,n.m)(t.start,-1/0,(t=>t.getTime())),s=(0,n.m)(t.end,1/0,(t=>t.getTime()));let a,l;if(o>=e&&o<=r?a=o:e>=o&&e<=s&&(a=e),r>=o&&r<=s?l=r:s>=e&&s<=r&&(l=s),!isNaN(a)&&!isNaN(l)){const t=new i;return t.start=a===-1/0?null:new Date(a),t.end=l===1/0?null:new Date(l),t}return i.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const r=new i,{start:o,end:s}=this;return(0,n.i)(o)&&(r.start=(0,a.o)(o,t,e)),(0,n.i)(s)&&(r.end=(0,a.o)(s,t,e)),r}equals(t){if(!t)return!1;const e=(0,n.i)(this.start)?this.start.getTime():this.start,r=(0,n.i)(this.end)?this.end.getTime():this.end,i=(0,n.i)(t.start)?t.start.getTime():t.start,o=(0,n.i)(t.end)?t.end.getTime():t.end;return e===i&&r===o}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return y.clone();const e=(0,n.i)(this.start)&&(0,n.i)(t.start)?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=(0,n.i)(this.end)&&(0,n.i)(t.end)?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new i({start:e,end:r})}};(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,o._)([(0,u.r)("end")],c.prototype,"readEnd",null),(0,o._)([(0,d.w)("end")],c.prototype,"writeEnd",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,o._)([(0,u.r)("start")],c.prototype,"readStart",null),(0,o._)([(0,d.w)("start")],c.prototype,"writeStart",null),c=i=(0,o._)([(0,p.j)("esri.TimeExtent")],c);const y=new c,m=new c({start:void 0,end:void 0}),h=c},69218:(t,e,r)=>{"use strict";r.d(e,{D:()=>N,M:()=>g});var i,o=r(29768),s=r(57251),n=r(74673),a=r(34250),l=(r(76506),r(86787)),u=(r(92143),r(59465)),p=r(97714),d=r(17533),c=r(91306),y=r(97546),m=(r(74569),r(60947)),h=r(22781);let g=i=class extends n.a{constructor(t){super(t),this.type="map-layer"}clone(){const{mapLayerId:t,gdbVersion:e}=this;return new i({mapLayerId:t,gdbVersion:e})}};var w;(0,o._)([(0,u.e)({mapLayer:"map-layer"})],g.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:c.I,json:{write:!0}})],g.prototype,"mapLayerId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],g.prototype,"gdbVersion",void 0),g=i=(0,o._)([(0,d.j)("esri.layers.support.source.MapLayerSource")],g);let b=w=class extends n.a{constructor(t){super(t),this.type="query-table"}clone(){var t;const{workspaceId:e,query:r,oidFields:i,spatialReference:o,geometryType:s}=this,n={workspaceId:e,query:r,oidFields:i,spatialReference:null!=(t=null==o?void 0:o.clone())?t:void 0,geometryType:s};return new w(n)}};var v;(0,o._)([(0,u.e)({queryTable:"query-table"})],b.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"query",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"oidFields",void 0),(0,o._)([(0,a.Cb)({type:m.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,o._)([(0,u.e)(h.f)],b.prototype,"geometryType",void 0),b=w=(0,o._)([(0,d.j)("esri.layers.support.source.QueryTableDataSource")],b);let _=v=class extends n.a{constructor(t){super(t),this.type="raster"}clone(){const{workspaceId:t,dataSourceName:e}=this;return new v({workspaceId:t,dataSourceName:e})}};var S;(0,o._)([(0,u.e)({raster:"raster"})],_.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"dataSourceName",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],_.prototype,"workspaceId",void 0),_=v=(0,o._)([(0,d.j)("esri.layers.support.source.RasterDataSource")],_);let C=S=class extends n.a{constructor(t){super(t),this.type="table"}clone(){const{workspaceId:t,gdbVersion:e,dataSourceName:r}=this;return new S({workspaceId:t,gdbVersion:e,dataSourceName:r})}};var j,f;(0,o._)([(0,u.e)({table:"table"})],C.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"gdbVersion",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"dataSourceName",void 0),C=S=(0,o._)([(0,d.j)("esri.layers.support.source.TableDataSource")],C);const T=(0,s.s)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let x=j=class extends n.a{constructor(t){super(t),this.type="join-table"}readLeftTableSource(t,e,r){return R()(t,e,r)}castLeftTableSource(t){return(0,c.a)(M(),t)}readRightTableSource(t,e,r){return R()(t,e,r)}castRightTableSource(t){return(0,c.a)(M(),t)}clone(){var t,e;const{leftTableKey:r,rightTableKey:i,leftTableSource:o,rightTableSource:s,joinType:n}=this,a={leftTableKey:r,rightTableKey:i,leftTableSource:null!=(t=null==o?void 0:o.clone())?t:void 0,rightTableSource:null!=(e=null==s?void 0:s.clone())?e:void 0,joinType:n};return new j(a)}};(0,o._)([(0,u.e)({joinTable:"join-table"})],x.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"leftTableKey",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"rightTableKey",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"leftTableSource",void 0),(0,o._)([(0,p.r)("leftTableSource")],x.prototype,"readLeftTableSource",null),(0,o._)([(0,l.p)("leftTableSource")],x.prototype,"castLeftTableSource",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],x.prototype,"rightTableSource",void 0),(0,o._)([(0,p.r)("rightTableSource")],x.prototype,"readRightTableSource",null),(0,o._)([(0,l.p)("rightTableSource")],x.prototype,"castRightTableSource",null),(0,o._)([(0,u.e)(T)],x.prototype,"joinType",void 0),x=j=(0,o._)([(0,d.j)("esri.layers.support.source.JoinTableDataSource")],x);let F=null;function R(){return F||(F=(0,d.d)({types:M()})),F}let D=null;function M(){return D||(D={key:"type",base:null,typeMap:{"data-layer":N,"map-layer":g}}),D}const P={key:"type",base:null,typeMap:{"join-table":x,"query-table":b,raster:_,table:C}};let N=f=class extends n.a{constructor(t){super(t),this.type="data-layer"}clone(){const{fields:t,dataSource:e}=this;return new f({fields:t,dataSource:e})}};(0,o._)([(0,u.e)({dataLayer:"data-layer"})],N.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[y.Z],json:{write:!0}})],N.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({types:P,json:{write:!0}})],N.prototype,"dataSource",void 0),N=f=(0,o._)([(0,d.j)("esri.layers.support.source.DataLayerSource")],N),N.from=(0,c.e)(N)},35197:(t,e,r)=>{"use strict";r.d(e,{c:()=>a,o:()=>s,t:()=>n}),r(76506);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},o={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(t,e,r){const i=new Date(t.getTime());if(e&&r){const t=o[r],{getter:s,setter:n,multiplier:a}=t;i[n](i[s]()+e*a)}return i}function n(t,e){switch(e){case"milliseconds":return new Date(t.getTime());case"seconds":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());case"minutes":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes());case"hours":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours());case"days":return new Date(t.getFullYear(),t.getMonth(),t.getDate());case"weeks":return new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());case"months":return new Date(t.getFullYear(),t.getMonth(),1);case"years":return new Date(t.getFullYear(),0,1);case"decades":return new Date(t.getFullYear()-t.getFullYear()%10,0,1);case"centuries":return new Date(t.getFullYear()-t.getFullYear()%100,0,1);default:return new Date}}function a(t,e,r){return 0===t?0:t*i[e]/i[r]}},31292:(t,e,r)=>{"use strict";r.d(e,{Z:()=>D,Q:()=>T});var i,o=r(29768),s=r(74569),n=r(93314),a=r(57251),l=r(74673),u=r(76506),p=r(34250),d=r(86787),c=(r(92143),r(59465)),y=r(17533),m=r(2906),h=r(91306),g=r(32422),w=r(69218),b=r(21801),v=r(27207),_=r(60947),S=r(91597);r(73796),r(97714),r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341),r(84069),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(35197),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732);const C=new a.J({upperLeft:"upper-left",lowerLeft:"lower-left"});let j=i=class extends l.a{constructor(t){super(t),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new i((0,u.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,o._)([(0,p.Cb)({type:b.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],j.prototype,"extent",void 0),(0,o._)([(0,p.Cb)({type:["view","edit"],json:{write:!0}})],j.prototype,"mode",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:C.read,write:C.write}})],j.prototype,"originPosition",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],j.prototype,"tolerance",void 0),j=i=(0,o._)([(0,y.j)("esri.rest.support.QuantizationParameters")],j);var f,T=j;const x=new a.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),F=new a.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=f=class extends l.a{constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.units=null,this.where=null}static from(t){return(0,h.k)(f,t)}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i}e.parameterValues=r}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new f((0,u.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:(0,u.i)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,o._)([(0,p.Cb)({json:{write:!0}})],R.prototype,"aggregateIds",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,o._)([(0,p.Cb)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,o._)([(0,d.p)("datumTransformation")],R.prototype,"castDatumTransformation",null),(0,o._)([(0,p.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,o._)([(0,p.Cb)({type:w.D,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),(0,o._)([(0,p.Cb)({types:s.qM,json:{read:g.im,write:!0}})],R.prototype,"geometry",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,o._)([(0,p.Cb)({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"having",void 0),(0,o._)([(0,p.Cb)({type:Date})],R.prototype,"historicMoment",void 0),(0,o._)([(0,m.w)("historicMoment")],R.prototype,"writeHistoricMoment",null),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,p.Cb)({type:Number,cast:t=>t<1?1:t>f.MAX_MAX_RECORD_COUNT_FACTOR?f.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),(0,o._)([(0,p.Cb)({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,o._)([(0,p.Cb)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,o._)([(0,p.Cb)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,o._)([(0,p.Cb)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,o._)([(0,p.Cb)({type:_.Z,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,o._)([(0,p.Cb)({type:[v.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,u.i)(this.outStatistics)&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,o._)([(0,p.Cb)({json:{write:!0}})],R.prototype,"parameterValues",void 0),(0,o._)([(0,m.w)("parameterValues")],R.prototype,"writeParameterValues",null),(0,o._)([(0,p.Cb)({type:S.Z,json:{write:!0}})],R.prototype,"pixelSize",void 0),(0,o._)([(0,p.Cb)({type:T,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),(0,o._)([(0,p.Cb)({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,o._)([(0,p.Cb)({type:_.Z,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),(0,o._)([(0,c.e)(x,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,o._)([(0,m.w)("start"),(0,m.w)("num")],R.prototype,"writeStart",null),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],R.prototype,"text",void 0),(0,o._)([(0,p.Cb)({type:n.Z,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,o._)([(0,c.e)(F,{ignoreUnknown:!1}),(0,p.Cb)({json:{write:{overridePolicy(t){return{enabled:t&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||this.start>0}}}}})],R.prototype,"where",void 0),(0,o._)([(0,m.w)("where")],R.prototype,"writeWhere",null),R=f=(0,o._)([(0,y.j)("esri.rest.support.Query")],R);const D=R},27207:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var i,o=r(29768),s=r(57251),n=r(74673),a=r(76506),l=r(34250),u=(r(91306),r(92143),r(17533)),p=r(2906);r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341);const d=new s.J({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let c=i=class extends n.a{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=(0,a.d9)(t))}clone(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxPointCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxRecordCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxVertexCount",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"outStatisticFieldName",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],c.prototype,"statisticType",void 0),(0,o._)([(0,l.Cb)({type:Object})],c.prototype,"statisticParameters",void 0),(0,o._)([(0,p.w)("statisticParameters")],c.prototype,"writeStatisticParameters",null),c=i=(0,o._)([(0,u.j)("esri.rest.support.StatisticDefinition")],c);const y=c}}]);