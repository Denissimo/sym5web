/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{J as e}from"./jsonMap.js";import{property as n}from"../core/accessorSupport/decorators/property.js";function r(r,o={}){var a;const l=r instanceof e?r:new e(r,o),t={type:null==(a=null==o?void 0:o.ignoreUnknown)||a?l.apiValues:String,readOnly:null==o?void 0:o.readOnly,json:{type:l.jsonValues,read:(null==o||!o.readOnly)&&{reader:l.read},write:{writer:l.write}}};return void 0!==(null==o?void 0:o.default)&&(t.json.default=o.default),void 0!==(null==o?void 0:o.name)&&(t.json.name=o.name),n(t)}export{r as e};
