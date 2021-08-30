// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/Logger ../../intl/date ./numberUtils ../visualVariables/support/ColorStop".split(" "),function(k,y,v,q,n,z){function w(a,d,f){let b="";0===d?b=r.lt+" ":d===f&&(b=r.gt+" ");return b+a}function t(a){let d=a.minValue,f=a.maxValue;const b=a.isFirstBreak?"":r.gt+" ";a="percent-of-total"===a.normalizationType?r.pct:"";d=null==d?"":n.format(d);f=null==f?"":n.format(f);return b+d+a+" "+r.ld+" "+f+a}function p(a,d){return"normalizationField"in a&&a.normalizationField?
{type:"normalized-field",field:a.field,normalizationField:a.normalizationField}:"field"in a&&a.field?{type:"field",field:a.field}:"valueExpression"in a&&a.valueExpression?{type:"expression",expression:a.valueExpression,title:a.valueExpressionTitle,returnType:d}:null}const x=v.getLogger("esri.renderers.support.utils"),r={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},A={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},B={millisecond:"long-month-day-year-long-time",
second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};v=q.convertDateFormatToIntlOptions("short-date");k.calculateDateFormatInterval=function(a){a=a.map(c=>new Date(c));const d=a.length;let f=Infinity,b=null;for(let c=0;c<d-1;c++){const g=a[c];let h=Infinity,l=null;for(let m=c+1;m<d;m++){var e=a[m];e=g.getFullYear()!==e.getFullYear()&&"year"||g.getMonth()!==e.getMonth()&&
"month"||g.getDate()!==e.getDate()&&"day"||g.getHours()!==e.getHours()&&"hour"||g.getMinutes()!==e.getMinutes()&&"minute"||g.getSeconds()!==e.getSeconds()&&"second"||"millisecond";const u=A[e];u<h&&(h=u,l=e)}h<f&&(f=h,b=l)}return b};k.createClassBreakLabel=t;k.createColorStops=function(a){const {values:d,colors:f,labelIndexes:b,isDate:e,dateFormatOptions:c}=a;return d.map((g,h)=>{let l=null;if(!b||-1<b.indexOf(h)){let m;(m=e?q.formatDate(g,c):n.format(g))&&(l=w(m,h,d.length-1))}return new z({value:g,
color:f[h],label:l})})};k.createUniqueValueLabel=function(a){const {value:d,domain:f,fieldInfo:b,dateFormatInterval:e}=a;a=String(d);const c=f&&"codedValues"in f&&f.codedValues?f.getName(d):null;c?a=c:"number"===typeof d&&(a=b&&"date"===b.type?q.formatDate(d,e&&q.convertDateFormatToIntlOptions(B[e])):n.format(d));return a};k.getAttribute=p;k.getAttributes=function(a,d){const f=[];if("class-breaks"===a.type||"heatmap"===a.type)f.push(p(a,"number"));else if("unique-value"===a.type){var b=a.authoringInfo;
if(b&&"relationship"===b.type){if(b.field1&&b.field2){var e=b.field2.field;const c=b.field2.normalizationField;f.push(p({field:b.field1.field,normalizationField:b.field1.normalizationField}));f.push(p({field:e,normalizationField:c}))}}else e=a.uniqueValueInfos[0],b=null,e&&e.value&&(e=typeof a.uniqueValueInfos[0].value,"string"===e||"number"===e)&&(b=e),f.push(p(a,b)),[a.field2,a.field3].forEach(c=>c&&f.push({type:"field",field:c}))}else"dot-density"===a.type&&a.attributes.forEach(c=>f.push(p(c,"number")));
(a=d?d(a):"visualVariables"in a?a.visualVariables:null)&&a.forEach(c=>f.push(p(c,"number")));return y.unique(f.filter(Boolean),(c,g)=>"field"===c.type&&"field"===g.type?c.field===g.field:"normalized-field"===c.type&&"normalized-field"===g.type?c.field===g.field&&c.normalizationField===g.normalizationField:"expression"===c.type&&"expression"===g.type?c.expression===g.expression:!1)};k.setLabelsForClassBreaks=function(a){const d=a.classBreakInfos,f=a.normalizationType;let b=[];if(d&&d.length)if("standard-deviation"===
a.classificationMethod)x.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");else if(a.round){b.push(d[0].minValue);for(const e of d)b.push(e.maxValue);b=n.round(b);d.forEach((e,c)=>{e.label=t({minValue:0===c?b[0]:b[c],maxValue:b[c+1],isFirstBreak:0===c,normalizationType:f})})}else d.forEach((e,c)=>{e.label=t({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===c,normalizationType:f})})};k.timelineDateFormatOptions=v;k.updateClassBreak=
function(a){if("standard-deviation"===a.classificationMethod)x.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.");else{var d=a.classBreaks,f=a.change,b=f.index;f=f.value;var e=d.length,c=-1,g=-1;0===b?c=b:b===e?g=b-1:(g=b-1,c=b);a=a.normalizationType;b=null;-1<c&&c<e&&(b=d[c],b.minValue=f,b.label=t({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===c,normalizationType:a}));-1<g&&g<e&&(b=d[g],b.maxValue=f,b.label=t({minValue:b.minValue,
maxValue:b.maxValue,isFirstBreak:0===g,normalizationType:a}))}};k.updateColorStops=function(a){const {stops:d,changes:f,isDate:b,dateFormatOptions:e}=a,c=d.map(h=>h.value);a=[];for(const h of f)a.push(h.index),c[h.index]=h.value;const g=n.round(c,{indexes:a});d.forEach((h,l)=>{h.value=c[l];if(null!=h.label){let m,u=null;(m=b?q.formatDate(g[l],e):n.format(g[l]))&&(u=w(m,l,d.length-1));h.label=u}})};Object.defineProperty(k,"__esModule",{value:!0})});