/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function e(){return 16}function t(e){if(!e)return 0;let t=32;for(const r in e)if(e.hasOwnProperty(r)){const a=e[r];switch(typeof a){case"string":t+=n(a);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function r(n,e){return 32+n.length*e}export{r as a,n as b,e as c,t as e};
