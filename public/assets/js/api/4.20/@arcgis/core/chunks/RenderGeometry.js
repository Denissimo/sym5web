/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as t,i,d as r}from"../core/lang.js";import{g as s}from"./uid.js";import{d as a}from"./mat4.js";import{c as n,I as o}from"./mat4f64.js";import{t as e}from"./mathUtils.js";import{a as h}from"./vec4f64.js";import{b as m}from"./mathUtils2.js";import{a as f}from"./geometryDataUtils.js";import{a as d}from"./Object3D.js";import{a as u,r as g}from"./utils4.js";class l{constructor(t,i,r=null,a=null,o=s(),e=null,m=null,f=!1){this.data=t,this.material=i,this.layerUid=r,this.graphicUid=a,this.id=o,this.boundingInfo=e,this.calculateShaderTransformation=m,this.castShadow=f,this.boundingSphere=h(),this.instanceParameters={highlights:null,occludees:null,visible:!0},this._transformation=n(),this._shaderTransformationDirty=!0}get transformation(){return this._transformation}updateTransformation(t){t(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(i,r,s=m(i)){t(this.boundingInfo)||(e(r,this.boundingInfo.getCenter(),i),r[3]=this.boundingInfo.getBSRadius()*s)}get hasShaderTransformation(){return i(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return t(this.calculateShaderTransformation)?r(this.transformation,o):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=n()),a(this._shaderTransformation,this.calculateShaderTransformation(r(this.transformation,o))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(i(this._transformation)&&e(t,t,this._transformation),!0);const r=this.indices.get("position"),s=this.vertexAttributes.get("position");return!!f(s,r,t)&&(i(this._transformation)&&e(t,t,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const t=new d(0),i=this.instanceParameters;return i.highlights=u(i.highlights,t),t}removeHighlight(t){const i=this.instanceParameters;i.highlights=g(i.highlights,t)}}export{l as R};