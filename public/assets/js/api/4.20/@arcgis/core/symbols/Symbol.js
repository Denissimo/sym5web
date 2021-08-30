/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../Color.js";import{J as o}from"../chunks/jsonMap.js";import{a as e}from"../chunks/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as i}from"../chunks/reader.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/write.js";const p=new o({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let c=0,m=class extends e{constructor(r){super(r),this.id="sym"+c++,this.type=null}set color(r){this._set("color",r)}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}async collectRequiredFields(r,s){}hash(){return JSON.stringify(this.toJSON())}clone(){}};r([t({type:p.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p.write}}})],m.prototype,"type",void 0),r([t({type:s,value:new s([0,0,0,1]),json:{write:{allowNull:!0}}})],m.prototype,"color",null),r([i("color")],m.prototype,"readColor",null),m=r([l("esri.symbols.Symbol")],m);var n=m;export default n;