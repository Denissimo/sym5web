/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var r,t,o={exports:{}};r=o,void 0!==(t=function(){function r(r,o,n,f,e){t(r,o,n||0,f||r.length-1,e||a)}function t(r,a,n,f,e){for(;f>n;){if(f-n>600){var h=f-n+1,i=a-n+1,u=Math.log(h),M=.5*Math.exp(2*u/3),v=.5*Math.sqrt(u*M*(h-M)/h)*(i-h/2<0?-1:1);t(r,a,Math.max(n,Math.floor(a-i*M/h+v)),Math.min(f,Math.floor(a+(h-i)*M/h+v)),e)}var x=r[a],c=n,p=f;for(o(r,n,a),e(r[f],x)>0&&o(r,n,f);c<p;){for(o(r,c,p),c++,p--;e(r[c],x)<0;)c++;for(;e(r[p],x)>0;)p--}0===e(r[n],x)?o(r,n,p):o(r,++p,f),p<=a&&(n=p+1),a<=p&&(f=p-1)}}function o(r,t,o){var a=r[t];r[t]=r[o],r[o]=a}function a(r,t){return r<t?-1:r>t?1:0}return r}())&&(r.exports=t);var a=o.exports;export{a as q};
