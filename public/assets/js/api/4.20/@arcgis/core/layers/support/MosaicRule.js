/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{s as t}from"../../chunks/jsonMap.js";import{a as o}from"../../chunks/JSONSupport.js";import{clone as r}from"../../core/lang.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import{cast as s}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Logger.js";import{r as n}from"../../chunks/reader.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{I as c}from"../../chunks/ensureType.js";import p from"../../geometry/Point.js";import l from"./DimensionalDefinition.js";import m from"./RasterFunction.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/enumeration.js";var d;const u=t()({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),h=t()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});let j=d=class extends o{constructor(e){super(e),this.ascending=!0,this.itemRenderingRule=null,this.lockRasterIds=null,this.method=null,this.multidimensionalDefinition=null,this.objectIds=null,this.operation=null,this.sortField=null,this.sortValue=null,this.viewpoint=null,this.where=null}readAscending(e,t){return null!=t.ascending?t.ascending:null==t.sortAscending||t.sortAscending}readMethod(e,t){return function(e){let t;switch(e?e.toLowerCase().replace("esrimosaic",""):""){case"byattribute":case"attribute":t="esriMosaicAttribute";break;case"lockraster":t="esriMosaicLockRaster";break;case"center":t="esriMosaicCenter";break;case"northwest":t="esriMosaicNorthwest";break;case"nadir":t="esriMosaicNadir";break;case"viewpoint":t="esriMosaicViewpoint";break;case"seamline":t="esriMosaicSeamline";break;case"none":default:t="esriMosaicNone"}return h.fromJSON(t)}(t.mosaicMethod||t.defaultMosaicMethod)}readOperation(e,t){const o=t.mosaicOperation,r=t.mosaicOperator&&t.mosaicOperator.toLowerCase(),i=o||(r?u.toJSON(r):null);return u.fromJSON(i)||"first"}castSortValue(e){return null==e||"string"==typeof e||"number"==typeof e?e:`${e}`}clone(){return new d({ascending:this.ascending,itemRenderingRule:r(this.itemRenderingRule),lockRasterIds:r(this.lockRasterIds),method:this.method,multidimensionalDefinition:r(this.multidimensionalDefinition),objectIds:r(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:r(this.viewpoint),where:this.where})}};e([i({type:Boolean,json:{write:!0}})],j.prototype,"ascending",void 0),e([n("ascending",["ascending","sortAscending"])],j.prototype,"readAscending",null),e([i({type:m,json:{write:!0}})],j.prototype,"itemRenderingRule",void 0),e([i({type:[c],json:{write:{overridePolicy(){return{enabled:"lock-raster"===this.method}}}}})],j.prototype,"lockRasterIds",void 0),e([i({type:String,json:{type:h.jsonValues,write:{target:"mosaicMethod",writer:h.write}}})],j.prototype,"method",void 0),e([n("method",["mosaicMethod","defaultMosaicMethod"])],j.prototype,"readMethod",null),e([i({type:[l],json:{write:!0}})],j.prototype,"multidimensionalDefinition",void 0),e([i({type:[c],json:{name:"fids",write:!0}})],j.prototype,"objectIds",void 0),e([i({json:{type:u.jsonValues,read:{reader:u.read},write:{target:"mosaicOperation",writer:u.write}}})],j.prototype,"operation",void 0),e([n("operation",["mosaicOperation","mosaicOperator"])],j.prototype,"readOperation",null),e([i({type:String,json:{write:{overridePolicy(){return{enabled:"attribute"===this.method}}}}})],j.prototype,"sortField",void 0),e([i({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:"attribute"===this.method,allowNull:!0}}}}})],j.prototype,"sortValue",void 0),e([s("sortValue")],j.prototype,"castSortValue",null),e([i({type:p,json:{write:!0}})],j.prototype,"viewpoint",void 0),e([i({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=d=e([a("esri.layers.support.MosaicRule")],j);var y=j;export default y;
