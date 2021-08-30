/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import o from"../Color.js";import{clone as t}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{I as s}from"../chunks/ensureType.js";import"../chunks/Logger.js";import{e as i}from"../chunks/enumeration.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import a from"./Symbol3DLayer.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/jsonMap.js";import"../chunks/Message.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/write.js";import"../chunks/writer.js";var c;let m=c=class extends a{constructor(r){super(r),this.color=n.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate"}clone(){return new c({color:t(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}};r([e({type:o,nonNullable:!0,json:{type:[s],write:(r,o,t)=>o[t]=r.toArray(1),default:()=>n.clone(),defaultEquals:r=>r.toCss(!0)===n.toCss(!0)}})],m.prototype,"color",void 0),r([i({Water:"water"},{readOnly:!0})],m.prototype,"type",void 0),r([e({type:["small","medium","large"],json:{write:!0,default:"medium"}})],m.prototype,"waterbodySize",void 0),r([e({type:Number,json:{write:!0,default:null}})],m.prototype,"waveDirection",void 0),r([e({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],m.prototype,"waveStrength",void 0),m=c=r([p("esri.symbols.WaterSymbol3DLayer")],m);const n=new o([0,119,190]);var l=m;export default l;