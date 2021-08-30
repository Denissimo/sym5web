/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{u as e}from"./arrayUtils.js";import{fetchMessageBundle as n,substitute as t}from"../intl.js";import{numericTypes as i}from"../layers/support/fieldUtils.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import s from"../popup/content/FieldsContent.js";import"../popup/content/MediaContent.js";import a from"../popup/content/TextContent.js";import o from"../popup/ExpressionInfo.js";import r from"../popup/FieldInfo.js";import{g as l}from"./utils9.js";import{viewScaleRE as p}from"./visualVariableUtils.js";let f=0;const m="expression/";function u(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((e=>!p.test(e.valueExpression)&&(!("target"in e)||"outline"!==e.target))):[]}function d(e,n){let t=null;"popupTemplate"in e&&e.popupTemplate&&(t=e.popupTemplate.fieldInfos);const s=e.getField(n);let a=null;if(t&&t.some((e=>!(!e||e.fieldName.toLowerCase()!==s.name.toLowerCase())&&(a=e.clone(),!0))),!a){const e=i.indexOf(s.type)>-1,n="integer"===s.type||"small-integer"===s.type;a=new r({fieldName:s.name,isEditable:s.editable,visible:!0,format:e?{places:n?0:2,digitSeparator:!0}:null})}return a.label||(a.label=s.alias),a}function c(e){const{expression:n,title:t,returnType:i}=e;return new o({name:"expr"+f++,expression:n,title:t,returnType:i})}function x(e){const n="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new r({fieldName:`expression/${e.name}`,visible:!0,format:n})}async function b(i){const s=await n("esri/smartMapping/t9n/smartMapping"),{renderer:a,layer:o,normFieldExpressionTemplate:r}=i,p=[],f=[],m=l(a,u);for(const e of m)if("field"===e.type)p.push(d(o,e.field));else if("normalized-field"===e.type){const n=o.getField(e.field),i=o.getField(e.normalizationField),a=c({type:"expression",expression:`\n      $feature["${n.name}"];\n      $feature["${i.name}"];\n      ${"percentage"===r?`($feature["${n.name}"] / $feature["${i.name}"]) * 100;`:`$feature["${n.name}"] / $feature["${i.name}"];`}\n      `,title:t("percentage"===r?s.normFieldLabelAsPercent:s.normFieldLabel,{expression1:n.alias,expression2:i.alias}),returnType:"number"});p.push(x(a),d(o,e.field),d(o,e.normalizationField)),f.push(a)}else if("expression"===e.type){const n=c(e);p.push(x(n)),f.push(n)}return{fieldInfos:e(p,((e,n)=>e.fieldName===n.fieldName)),expressionInfos:e(f,((e,n)=>e.expression===n.expression))}}async function g(e,i){const{fieldInfos:o,expressionInfos:r}=i,l=await n("esri/smartMapping/t9n/smartMapping");if(o.length>2)return[new s({fieldInfos:o})];const p=[];for(const n of o){const i=n.fieldName;let s=n.label;if(!s){const n=e.getField(i);if(n)s=n.alias||i;else if(r){const e=i.split("expression/")[1],n=r[r.findIndex((n=>n.name===e))];n&&(s=n.title||n.name)}}p.push(new a({text:t(l.fieldInfo,{fieldLabel:s,fieldValue:`{${i}}`})}))}return p}function y(e){return!(!("normalizationField"in e)||!e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((e=>!(!("normalizationField"in e)||!e.normalizationField)))}export{g as a,b,d as c,m as e,u as g,y as h};