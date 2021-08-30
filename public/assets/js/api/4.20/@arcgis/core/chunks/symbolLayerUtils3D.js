/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../core/lang.js";import{p as e}from"./mathUtils.js";import{l as t}from"./aaBoundingBox.js";function n(t,{isPrimitive:n,width:r,depth:o,height:s}){const a=n?10:1;if(null==r&&null==s&&null==o)return[a*t[0],a*t[1],a*t[2]];const c=e(r,o,s);let i;for(let e=0;e<3;e++){const n=c[e];if(null!=n){i=n/t[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=t[e]*i);return c}const r=t(-.5,-.5,-.5,.5,.5,.5),o=t(-.5,-.5,0,.5,.5,1),s=t(-.5,-.5,0,.5,.5,.5);function a(e){switch(e){case"sphere":case"cube":case"diamond":return r;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return s;default:return}}export{n as a,a as o};
