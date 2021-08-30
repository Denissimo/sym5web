/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{J as e}from"../../chunks/jsonMap.js";import{a as i}from"../../chunks/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{w as a}from"../../chunks/writer.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";var c;const n=new e({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let p=c=class extends i{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=s(t))}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:s(this.statisticParameters)})}};t([r({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),t([r({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),t([r({type:String,json:{read:{source:"statisticType",reader:n.read},write:{target:"statisticType",writer:n.write}}})],p.prototype,"statisticType",void 0),t([r({type:Object})],p.prototype,"statisticParameters",void 0),t([a("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=c=t([o("esri.rest.support.StatisticDefinition")],p);var m=p;export default m;
