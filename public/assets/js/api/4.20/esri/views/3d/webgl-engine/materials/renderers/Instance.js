// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/mat4","../../../../../chunks/mat4f64"],function(d,g,h){d.Instance=function(c,a,b,e,k,f){this.from=c;this.to=a;this.isVisible=b;this.hasHighlights=e;this.hasOccludees=k;this.transformation=f;null!=f&&(this.transformationNormal=h.clone(f),g.invert(this.transformationNormal,this.transformationNormal),g.transpose(this.transformationNormal,this.transformationNormal))};d.addOrMerge=function(c,a){if(0===c.length)c.push({first:a.from,count:a.to-a.from});else{var b=
c[c.length-1];var e=b.first+b.count>=a.from?!0:!1;e?b.count=a.from-b.first+a.to-a.from:c.push({first:a.from,count:a.to-a.from})}};d.sortInstancesAccordingToRange=function(c){return c.sort((a,b)=>a.from===b.from?a.to>b.to?1:a.to<b.to?-1:0:a.from>b.from?1:a.from<b.from?-1:0)};Object.defineProperty(d,"__esModule",{value:!0})});