/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as n}from"../core/lang.js";function e(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function a(e,t,a){return n(e)||e>a&&(0===t||e<t)}function c(n){let{minScale:e,maxScale:t}=n;return e=e||0,t=t||0,{minScale:e,maxScale:t}}export{c as e,e as h,t as o,a as s};
