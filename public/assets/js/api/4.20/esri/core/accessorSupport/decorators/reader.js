// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../object","./property"],function(g,k,l){g.reader=function(b,c,d){let e,f;void 0===c||Array.isArray(c)?(f=b,d=c,e=[void 0]):(f=c,e=Array.isArray(b)?b:[b]);return(h,m)=>{const n=h.constructor.prototype;e.forEach(a=>{a=l.propertyJSONMeta(h,a,f);a.read&&"object"!==typeof a.read&&(a.read={});k.setDeepValue("read.reader",n[m],a);d&&(a.read.source=(a.read.source||[]).concat(d))})}};Object.defineProperty(g,"__esModule",{value:!0})});