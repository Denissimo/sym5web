/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as e,i as o}from"../core/lang.js";import r from"../renderers/PointCloudClassBreaksRenderer.js";import t from"../renderers/PointCloudStretchRenderer.js";import n from"../renderers/PointCloudUniqueValueRenderer.js";import{c as l,a as s,d as i,r as a}from"./I3SBinaryReader.js";function f(e,o,l,s){const{rendererJSON:i,isRGBRenderer:a}=e;let f=null,u=null;if(o&&a)f=o;else if(o&&"pointCloudUniqueValueRenderer"===i.type){u=n.fromJSON(i);const e=u.colorUniqueValueInfos;f=new Uint8Array(3*s);const r=p(u.fieldTransformType);for(let t=0;t<s;t++){const n=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.indexOf(n)>=0){f[3*t]=e[o].color.r,f[3*t+1]=e[o].color.g,f[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===i.type){u=t.fromJSON(i);const e=u.stops;f=new Uint8Array(3*s);const r=p(u.fieldTransformType);for(let t=0;t<s;t++){const n=r?r(o[t]):o[t],l=e.length-1;if(n<e[0].value)f[3*t]=e[0].color.r,f[3*t+1]=e[0].color.g,f[3*t+2]=e[0].color.b;else if(n>=e[l].value)f[3*t]=e[l].color.r,f[3*t+1]=e[l].color.g,f[3*t+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(n<e[o].value){const r=(n-e[o-1].value)/(e[o].value-e[o-1].value);f[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),f[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),f[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===i.type){u=r.fromJSON(i);const e=u.colorClassBreakInfos;f=new Uint8Array(3*s);const t=p(u.fieldTransformType);for(let r=0;r<s;r++){const n=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(n>=e[o].minValue&&n<=e[o].maxValue){f[3*r]=e[o].color.r,f[3*r+1]=e[o].color.g,f[3*r+2]=e[o].color.b;break}}}else{f=new Uint8Array(3*s);for(let e=0;e<f.length;e++)f[e]=255}if(l&&u&&u.colorModulation){const e=u.colorModulation.minValue,o=u.colorModulation.maxValue,r=.3;for(let t=0;t<s;t++){const n=l[t],s=n>=o?1:n<=e?r:r+(1-r)*(n-e)/(o-e);f[3*t]=s*f[3*t],f[3*t+1]=s*f[3*t+1],f[3*t+2]=s*f[3*t+2]}}return f}function u(o,r){if(null==o.encoding||""===o.encoding){const t=l(r,o);if(e(t.vertexAttributes.position))return;const n=s(r,t.vertexAttributes.position),i=t.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],f=[i.scaleX,i.scaleY,i.scaleZ],u=n.length/3,c=new Float64Array(3*u);for(let e=0;e<u;e++)c[3*e]=n[3*e]*f[0]+a[0],c[3*e+1]=n[3*e+1]*f[1]+a[1],c[3*e+2]=n[3*e+2]*f[2]+a[2];return c}if("lepcc-xyz"===o.encoding)return i(r).result}function c(e,r,t){return o(e)&&e.attributeInfo.useElevation?d(r,t):o(e)?a(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function b(e,o,r,t,n){const l=e.length/3;let s=0;for(let i=0;i<l;i++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:o}=t[e],r=n[e].values[i];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;-1!==o.values.indexOf(r)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=g(o.requiredSetBits),t=g(o.requiredClearBits);(r&e)===e&&0==(r&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,n=t>1,s=1===e,i=e===t;let a=!1;for(const e of o.includedReturns)if("last"===e&&i||"firstOfMany"===e&&s&&n||"lastOfMany"===e&&i&&n||"single"===e&&!n){a=!0;break}a||(l=!1);break}}}l&&(r[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],o[3*s]=o[3*i],o[3*s+1]=o[3*i+1],o[3*s+2]=o[3*i+2],s++)}return s}function p(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function g(e){let o=0;for(const r of e||[])o|=1<<r;return o}export{d as a,f as e,b as f,c as g,u as r};
