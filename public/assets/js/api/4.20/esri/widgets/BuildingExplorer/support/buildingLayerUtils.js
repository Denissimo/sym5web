// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(e,h){function k(a,b){for(const c of a.allSublayers.items)if((a="building-component"===c.type?c.getFieldDomain(b):null)&&"coded-value"===a.type)return a;return null}function l(a,b){var c,f,g;a=null!=(c=null==(f=a.summaryStatistics)?void 0:f.fields)?c:[];const d=b.toLowerCase();return null!=(g=a.find(r=>{var m;return(null==(m=r.modelName)?void 0:m.toLowerCase())===d}))?g:null}const n=a=>b=>{var c;const f=a.toLowerCase();return null!=(c=b.sublayers.find(g=>
{var d;return(null==(d=g.modelName)?void 0:d.toLowerCase())===f}))?c:null},p=n("fullmodel"),q=n("overview");e.findFieldCodedValueDomain=k;e.findFieldInfoByModelName=function(a,b){b=l(a,b);if(h.isNone(b))return null;const c=b.fieldName;if(h.isNone(c)||!c)return null;a=k(a,c);const f=new Map;for(const d of null!=(g=b.mostFrequentValues)?g:[]){var g;"number"===typeof d&&f.set(d,h.isSome(a)?a.getName(d):String(d))}return{fieldName:c,fieldValueMap:f}};e.findFieldStatisticsByModelName=l;e.findFullModelSublayer=
p;e.findOverviewSublayer=q;e.showFullModel=function(a){const b=p(a);h.isSome(b)&&(b.visible=!0);a=q(a);h.isSome(a)&&(a.visible=!1)};Object.defineProperty(e,"__esModule",{value:!0})});