/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{d as e}from"../core/lang.js";function r(e){return"point"===e.type}class a{constructor(e,r=null,a=0){this.array=e,this.spatialReference=r,this.offset=a}}function t(e){return"array"in e}function n(a,n,i="ground"){if(r(n))return a.getElevation(n.x,n.y,n.z||0,n.spatialReference,i);if(t(n)){let r=n.offset;return a.getElevation(n.array[r++],n.array[r++],n.array[r]||0,e(n.spatialReference,a.spatialReference),i)}return a.getElevation(n[0],n[1],n[2]||0,a.spatialReference,i)}export{a as S,t as a,n as g,r as i};
