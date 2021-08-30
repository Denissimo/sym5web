/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../core/lang.js";const e={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},t={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,s,r){const n=new Date(e.getTime());if(s&&r){const e=t[r],{getter:l,setter:u,multiplier:i}=e;n[u](n[l]()+s*i)}return n}function r(e,t,s="milliseconds"){const r=e.getTime(),n=o(t,s,"milliseconds");return new Date(r+n)}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function l(e,t,s="milliseconds"){const r=new Date(o(t,s,"milliseconds"));return r.setUTCFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),r}function u(e,t="milliseconds"){const s=o(e.getUTCHours(),"hours","milliseconds"),r=o(e.getUTCMinutes(),"minutes","milliseconds"),n=o(e.getUTCSeconds(),"seconds","milliseconds");return o(s+r+n+e.getUTCMilliseconds(),"milliseconds",t)}function i(e,t){const s=new Date(e.getTime());return s.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),s}function a(e){const t=new Date(0);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t}function o(t,s,r){if(0===t)return 0;return t*e[s]/e[r]}export{u as a,a as b,o as c,r as d,l as m,s as o,i as r,n as t};
