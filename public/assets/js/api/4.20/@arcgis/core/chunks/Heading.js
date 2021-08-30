/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{c as s}from"./mathUtils.js";import{c as t}from"./widgetUtils.js";import"../core/lang.js";import"./Logger.js";import{t as e}from"./jsxFactory.js";const o="esri-widget__heading";function r(r,i){const a=`h${s(Math.ceil(r.level),1,6)}`;return delete r.level,e(a,{...r,class:t(o,r.class)},i)}export{r as H};
