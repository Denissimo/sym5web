// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(l){function p(a,c,d,h,e){if(!a)return!1;c=c?d?4:3:d?3:2;const {coords:g,lengths:m}=a;d=!1;a=0;for(const k of m){var b=a;for(let f=a,q=a+k*c;f<q;f+=c){b=f+c;b===q&&(b=a);const r=g[f],n=g[f+1],t=g[b];b=g[b+1];(n<e&&b>=e||b<e&&n>=e)&&r+(e-n)/(b-n)*(t-r)<h&&(d=!d)}a+=k*c}return d}l.polygonContainsCoords=p;l.polygonContainsMultipoint=function(a,c,d,h,e,g){e=e?g?4:3:g?3:2;const {coords:m,lengths:b}=h;if(!b)return!1;for(let k=0,f=0;k<b.length;k++,f+=e)if(!p(a,c,d,m[f],m[f+1]))return!1;
return!0};l.polygonContainsPoint=function(a,c,d,h){return p(a,c,d,h.coords[0],h.coords[1])};Object.defineProperty(l,"__esModule",{value:!0})});