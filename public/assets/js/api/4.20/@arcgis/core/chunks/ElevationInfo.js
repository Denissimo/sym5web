/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{s as r,J as t}from"./jsonMap.js";import{a as o}from"./JSONSupport.js";import{i as s}from"../core/lang.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{r as n}from"./reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as u}from"./writer.js";import{collectArcadeFieldNames as a}from"../layers/support/fieldUtils.js";import{s as f}from"./unitConversionUtils.js";var l;let d=l=class extends o{async collectRequiredFields(e,r){return a(e,r,this.expression)}clone(){return new l({expression:this.expression,title:this.title})}};e([i({type:String,json:{write:!0}})],d.prototype,"expression",void 0),e([i({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=l=e([p("esri.layers.support.FeatureExpressionInfo")],d);var m,x=d;const y=r()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),c=new t({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let h=m=class extends o{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,t,o){r[t]=e.write(null,o),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):s(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};e([i({type:x,json:{write:!0}})],h.prototype,"featureExpressionInfo",void 0),e([n("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],h.prototype,"readFeatureExpressionInfo",null),e([u("featureExpressionInfo",{featureExpressionInfo:{type:x},"featureExpression.value":{type:[0]}})],h.prototype,"writeFeatureExpressionInfo",null),e([i({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],h.prototype,"mode",null),e([i({type:Number,json:{write:!0}})],h.prototype,"offset",void 0),e([i({type:f,json:{type:String,read:c.read,write:c.write}})],h.prototype,"unit",null),h=m=e([p("esri.layers.support.ElevationInfo")],h);var E=h;export{E};