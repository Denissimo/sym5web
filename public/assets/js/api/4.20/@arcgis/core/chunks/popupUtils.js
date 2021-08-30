/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as e}from"../core/lang.js";import{getFeatureEditFields as l,fixFields as p}from"../layers/support/fieldUtils.js";async function t(t,d=t.popupTemplate){if(!e(d))return[];const a=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:i}=d,{objectIdField:s,typeIdField:n,globalIdField:o,relationships:u}=t;if(a.includes("*"))return["*"];const f=i?await l(t):[],r=p(t.fieldsIndex,[...a,...f]);return n&&r.push(n),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:l}=e;r&&l&&t.fieldsIndex.has(l)&&-1===r.indexOf(l)&&r.push(l)})),r}function d(l,p){return l.popupTemplate?l.popupTemplate:e(p)&&p.defaultPopupTemplateEnabled&&e(l.defaultPopupTemplate)?l.defaultPopupTemplate:null}export{t as a,d as g};
