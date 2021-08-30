/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{h as n}from"../core/lang.js";const e=new Set;function o(e,o,i={}){n("esri-deprecation-warnings")&&t(e,`Module: ${o}`,i)}function i(e,o,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;t(e,`Function: ${(n?n+"::":"")+o+"()"}`,i)}}function r(e,o,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;t(e,`Property: ${(n?n+"::":"")+o}`,i)}}function t(o,i,r={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:t,see:a,warnOnce:s}=r;let c=i;n&&(c+=`\n\t🛠️ Replacement: ${n}`),t&&(c+=`\n\t⚙️ Version: ${t}`),a&&(c+=`\n\t🔗 See ${a} for more details.`),function(n,o,i=!1){i&&e.has(o)||(i&&e.add(o),n.warn(`🛑 DEPRECATED - ${o}`))}(o,c,s)}}export{r as a,t as b,o as c,i as d};
