/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as e,i as o}from"../core/lang.js";import{d as r}from"./elevationInfoUtils.js";function n(o,n=r(o)){return"on-the-ground"!==n.mode&&!(e(o.geometry)||!o.geometry.hasZ)}function t(e,r){let n=null;const t=e.events.on("grab-changed",(t=>{o(n)&&(n.remove(),n=null),"start"===t.action?(n=e.disableDisplay(),r&&r(t)):r&&r(t)}));return{remove(){o(n)&&n.remove(),t.remove()}}}export{n as c,t as d};
