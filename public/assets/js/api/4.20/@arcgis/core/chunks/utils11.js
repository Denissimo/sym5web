/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as e,t,c as i}from"./screenUtils.js";import"../geometry.js";import"./basemapUtils.js";function r(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function n(e,t){let i=0;if(e.length===t.length){let n=e.every(((e,i)=>r(e,t[i])));if(n)i=1;else{n=e.slice(0).reverse().every(((e,i)=>r(e,t[i]))),n&&(i=-1)}}return i}function s(r,n){return Math.ceil(function(e){const t=e.width,r=e.height;let n=e.pixelSizeAt(e.toMap(i(.5*t,.5*r),{exclude:[]}));if(n<=0&&(n=e.pixelSizeAt(e.toMap(i(.5*t,.95*r),{exclude:[]})),n<=0)){const t=e.camera.position.clone();t.z=0,n=2*e.pixelSizeAt(t)}return n}(n)*e(t(r)))}export{n as h,s as t};
