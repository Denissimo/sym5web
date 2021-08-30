/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import r from"../Color.js";import{t}from"./screenUtils.js";import{I as e}from"./ensureType.js";import{t as s,o as a}from"./opacityUtils.js";const o={type:r,json:{type:[e],default:null,read:{source:["color","transparency"],reader:function(t,e){const a=null!=e.transparency?s(e.transparency):1,o=e.color;return o&&Array.isArray(o)?new r([o[0]||0,o[1]||0,o[2]||0,a]):null}},write:{target:{color:{type:[e]},transparency:{type:e}},writer:function(r,t){t.color=r.toJSON().slice(0,3);const e=a(r.a);0!==e&&(t.transparency=e)}}}},n={type:Number,cast:t,json:{write:!0}},c={type:[Number],cast:r=>null!=r?r:Array.isArray(r)?r.map(t):null,json:{read:!1,write:!1}};export{c as a,o as c,n as s};
