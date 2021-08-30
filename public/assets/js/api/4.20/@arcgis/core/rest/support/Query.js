/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as e}from"../../geometry.js";import r from"../../TimeExtent.js";import{J as i}from"../../chunks/jsonMap.js";import{a as o}from"../../chunks/JSONSupport.js";import{clone as s,i as n}from"../../core/lang.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Logger.js";import{e as l}from"../../chunks/enumeration.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{k as c}from"../../chunks/ensureType.js";import{fromJSON as d}from"../../geometry/support/jsonUtils.js";import{D as h}from"../../chunks/DataLayerSource.js";import y from"../../geometry/Extent.js";import j from"./StatisticDefinition.js";import w from"../../geometry/SpatialReference.js";import g from"../../geometry/Point.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/timeUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";var v;const f=new i({upperLeft:"upper-left",lowerLeft:"lower-left"});let S=v=class extends o{constructor(t){super(t),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new v(s({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};t([a({type:y,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],S.prototype,"extent",void 0),t([a({type:["view","edit"],json:{write:!0}})],S.prototype,"mode",void 0),t([a({type:String,json:{read:f.read,write:f.write}})],S.prototype,"originPosition",void 0),t([a({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],S.prototype,"tolerance",void 0),S=v=t([u("esri.rest.support.QuantizationParameters")],S);var R,b=S;const x=new i({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),F=new i({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let P=R=class extends o{constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.units=null,this.where=null}static from(t){return c(R,t)}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i}e.parameterValues=r}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new R(s({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:n(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))}};P.MAX_MAX_RECORD_COUNT_FACTOR=5,t([a({json:{write:!0}})],P.prototype,"aggregateIds",void 0),t([a({type:Boolean,json:{write:!0}})],P.prototype,"cacheHint",void 0),t([a({json:{write:!0}})],P.prototype,"datumTransformation",void 0),t([p("datumTransformation")],P.prototype,"castDatumTransformation",null),t([a({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],P.prototype,"distance",void 0),t([a({type:h,json:{write:!0}})],P.prototype,"dynamicDataSource",void 0),t([a({type:String,json:{write:!0}})],P.prototype,"formatOf3DObjects",void 0),t([a({type:String,json:{write:!0}})],P.prototype,"gdbVersion",void 0),t([a({types:e,json:{read:d,write:!0}})],P.prototype,"geometry",void 0),t([a({type:Number,json:{write:!0}})],P.prototype,"geometryPrecision",void 0),t([a({type:[String],json:{write:!0}})],P.prototype,"groupByFieldsForStatistics",void 0),t([a({type:String,json:{write:!0}})],P.prototype,"having",void 0),t([a({type:Date})],P.prototype,"historicMoment",void 0),t([m("historicMoment")],P.prototype,"writeHistoricMoment",null),t([a({type:Number,json:{write:!0}})],P.prototype,"maxAllowableOffset",void 0),t([a({type:Number,cast:t=>t<1?1:t>R.MAX_MAX_RECORD_COUNT_FACTOR?R.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],P.prototype,"maxRecordCountFactor",void 0),t([a({type:["xyFootprint"],json:{write:!0}})],P.prototype,"multipatchOption",void 0),t([a({type:Number,json:{read:{source:"resultRecordCount"}}})],P.prototype,"num",void 0),t([a({json:{write:!0}})],P.prototype,"objectIds",void 0),t([a({type:[String],json:{write:!0}})],P.prototype,"orderByFields",void 0),t([a({type:[String],json:{write:!0}})],P.prototype,"outFields",void 0),t([a({type:w,json:{name:"outSR",write:!0}})],P.prototype,"outSpatialReference",void 0),t([a({type:[j],json:{write:{enabled:!0,overridePolicy(){return{enabled:n(this.outStatistics)&&this.outStatistics.length>0}}}}})],P.prototype,"outStatistics",void 0),t([a({json:{write:!0}})],P.prototype,"parameterValues",void 0),t([m("parameterValues")],P.prototype,"writeParameterValues",null),t([a({type:g,json:{write:!0}})],P.prototype,"pixelSize",void 0),t([a({type:b,json:{write:!0}})],P.prototype,"quantizationParameters",void 0),t([a({type:[Object],json:{write:!0}})],P.prototype,"rangeValues",void 0),t([a({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],P.prototype,"relationParameter",void 0),t([a({type:String,json:{write:!0}})],P.prototype,"resultType",void 0),t([a({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnCentroid",void 0),t([a({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnDistinctValues",void 0),t([a({type:Boolean,json:{default:!0,write:!0}})],P.prototype,"returnExceededLimitFeatures",void 0),t([a({type:Boolean,json:{write:!0}})],P.prototype,"returnGeometry",void 0),t([a({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnQueryGeometry",void 0),t([a({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnM",void 0),t([a({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],P.prototype,"returnZ",void 0),t([a({type:w,json:{write:!0}})],P.prototype,"sourceSpatialReference",void 0),t([l(x,{ignoreUnknown:!1,name:"spatialRel"})],P.prototype,"spatialRelationship",void 0),t([a({type:Number,json:{read:{source:"resultOffset"}}})],P.prototype,"start",void 0),t([m("start"),m("num")],P.prototype,"writeStart",null),t([a({type:String,json:{write:!0}})],P.prototype,"sqlFormat",void 0),t([a({type:String,json:{write:!0}})],P.prototype,"text",void 0),t([a({type:r,json:{write:!0}})],P.prototype,"timeExtent",void 0),t([l(F,{ignoreUnknown:!1}),a({json:{write:{overridePolicy(t){return{enabled:t&&this.distance>0}}}}})],P.prototype,"units",void 0),t([a({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||this.start>0}}}}})],P.prototype,"where",void 0),t([m("where")],P.prototype,"writeWhere",null),P=R=t([u("esri.rest.support.Query")],P);var k=P;export default k;export{b as Q};
