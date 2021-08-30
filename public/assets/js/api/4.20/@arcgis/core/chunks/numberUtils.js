/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../intl.js";import{f as t}from"./number.js";const n=/^-?(\d+)(\.(\d+))?$/i;function e(t,n){return t-n}function r(t,n){let e,r;return e=Number(t.toFixed(n)),e<t?r=e+1/10**n:(r=e,e-=1/10**n),e=Number(e.toFixed(n)),r=Number(r.toFixed(n)),[e,r]}function o(t,n,e,r,o){const i=l(t,n,e,r),s=null==i.previous||i.previous<=o,u=null==i.next||i.next<=o;return s&&u||i.previous+i.next<=2*o}function i(t){const e=String(t),r=e.match(n);if(r&&r[1])return{integer:r[1].split("").length,fractional:r[3]?r[3].split("").length:0};if(e.toLowerCase().indexOf("e")>-1){const t=e.split("e"),n=t[0],r=t[1];if(n&&r){const t=Number(n);let e=Number(r);const o=e>0;o||(e=Math.abs(e));const l=i(t);return o?(l.integer+=e,e>l.fractional?l.fractional=0:l.fractional-=e):(l.fractional+=e,e>l.integer?l.integer=1:l.integer-=e),l}}return{integer:0,fractional:0}}function l(t,n,e,r){const o={previous:null,next:null};if(null!=e){const r=t-e,i=n-e-r;o.previous=Math.floor(Math.abs(100*i/r))}if(null!=r){const e=r-t,i=r-n-e;o.next=Math.floor(Math.abs(100*i/e))}return o}function s(t,n={}){const l=t.slice(0),{tolerance:s=2,strictBounds:u=!1,indexes:a=l.map(((t,n)=>n))}=n;a.sort(e);for(let t=0;t<a.length;t++){const n=a[t],e=l[n],c=0===n?null:l[n-1],f=n===l.length-1?null:l[n+1],m=i(e).fractional;if(m){let i,a=0,p=!1;for(;a<=m&&!p;){const n=r(e,a);i=u&&0===t?n[1]:n[0],p=o(e,i,c,f,s),a++}p&&(l[n]=i)}}return l}const u={maximumFractionDigits:20};function a(n){return t(n,u)}export{a as f,i as n,l as p,s as r};
