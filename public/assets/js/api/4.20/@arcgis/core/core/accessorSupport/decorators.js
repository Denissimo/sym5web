/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
export{aliasOf}from"./decorators/aliasOf.js";import{b as o}from"../../chunks/metadata.js";export{cast}from"./decorators/cast.js";export{declared}from"./decorators/declared.js";export{e as enumeration}from"../../chunks/enumeration.js";export{ensureRange,property,propertyJSONMeta}from"./decorators/property.js";export{r as reader}from"../../chunks/reader.js";export{s as shared}from"../../chunks/shared.js";export{processClass,subclass}from"./decorators/subclass.js";export{w as writer}from"../../chunks/writer.js";import"../../chunks/Logger.js";import"../../config.js";import"../lang.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/handleUtils.js";import"../../chunks/deprecate.js";import"../../chunks/jsonMap.js";import"../../chunks/Message.js";function t(){return function(r,s){return o(r).autoDestroy=!0,r[s]}}export{t as autoDestroy};