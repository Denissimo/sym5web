/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../TimeExtent.js";import r from"../geometry/Extent.js";import i from"../geometry/SpatialReference.js";import{w as n}from"./persistableUrlUtils.js";import{E as t}from"./ElevationInfo.js";import{t as a}from"./opacityUtils.js";const o={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},s={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e}}}},l={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n}}},f={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:t,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const c={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},y={...c,json:{...c.json,origins:{"web-document":{...c.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?a(r.layerDefinition.drawingInfo.transparency):void 0:a(r.drawingInfo.transparency)}}},u={type:e,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const i=null==(r=this.view)?void 0:r.timeExtent,n=this.layer.timeExtent,t=this.layer.useViewTime?i&&n?i.intersection(n):i||n:n;if(!t||t.isEmpty)return t;const a=this.layer.timeOffset,o=a?t.offset(-a.value,a.unit):t,s=this._get("timeExtent");return o.equals(s)?s:o}},w={type:r,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=r.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=i.fromJSON(n.spatialReference)),t}}}},read:!1}},g={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},v={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},j={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};export{y as a,f as b,j as c,o as d,d as e,u as f,g as i,l,v as m,c as o,s as p,m as r,w as s,p as u};