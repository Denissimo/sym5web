/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{clone as e}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{I as o}from"../chunks/ensureType.js";import"../chunks/Logger.js";import{e as t}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"./PointCloudRenderer.js";import{L as l}from"../chunks/LegendOptions.js";import p from"../Color.js";import{a}from"../chunks/JSONSupport.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/Message.js";import"../chunks/PointSizeSplatAlgorithm.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/write.js";var c;let u=c=class extends a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new c({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:e(this.color)})}};s([r({type:String,json:{write:!0}})],u.prototype,"description",void 0),s([r({type:String,json:{write:!0}})],u.prototype,"label",void 0),s([r({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),s([r({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),s([r({type:p,json:{type:[o],write:!0}})],u.prototype,"color",void 0),u=c=s([i("esri.renderers.support.pointCloud.ColorClassBreakInfo")],u);var m,d=u;let h=m=class extends n{constructor(s){super(s),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new m({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:e(this.colorClassBreakInfos),legendOptions:e(this.legendOptions)})}};s([t({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],h.prototype,"type",void 0),s([r({json:{write:!0},type:String})],h.prototype,"field",void 0),s([r({type:l,json:{write:!0}})],h.prototype,"legendOptions",void 0),s([r({type:n.fieldTransformTypeKebabDict.apiValues,json:{type:n.fieldTransformTypeKebabDict.jsonValues,read:n.fieldTransformTypeKebabDict.read,write:n.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),s([r({type:[d],json:{write:!0}})],h.prototype,"colorClassBreakInfos",void 0),h=m=s([i("esri.renderers.PointCloudClassBreaksRenderer")],h);var j=h;export default j;