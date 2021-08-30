// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){function p(a,b){const c=[];let d,e;if(a[0].length!==b.length)throw"dimensions do not match";const q=a.length,r=a[0].length;let l=0;for(d=0;d<q;d++){for(e=l=0;e<r;e++)l+=a[d][e]*b[e];c.push(l)}return c}function h(a){a=[a.r/255,a.g/255,a.b/255].map(b=>.04045>=b?b/12.92:((b+.055)/1.055)**2.4);a=p(t,a);return{x:100*a[0],y:100*a[1],z:100*a[2]}}function k(a){a=p(u,[a.x/100,a.y/100,a.z/100]).map(b=>Math.min(1,Math.max(.0031308>=b?12.92*b:1.055*b**(1/2.4)-.055,0)));return{r:Math.round(255*
a[0]),g:Math.round(255*a[1]),b:Math.round(255*a[2])}}function m(a){a=[a.x/95.047,a.y/100,a.z/108.883].map(b=>b>(6/29)**3?b**(1/3):1/3*(29/6)**2*b+4/29);return{l:116*a[1]-16,a:500*(a[0]-a[1]),b:200*(a[1]-a[2])}}function n(a){const b=a.l;a=[(b+16)/116+a.a/500,(b+16)/116,(b+16)/116-a.b/200].map(c=>c>6/29?c**3:3*(6/29)**2*(c-4/29));return{x:95.047*a[0],y:100*a[1],z:108.883*a[2]}}function g(a){if("r"in a&&"g"in a&&"b"in a)return a;if("l"in a&&"c"in a&&"h"in a){var b=a.c;var c=a.h;b={l:a.l,a:b*Math.cos(c),
b:b*Math.sin(c)};return k(n(b))}if("l"in a&&"a"in a&&"b"in a)return k(n(a));if("x"in a&&"y"in a&&"z"in a)return k(a);if("h"in a&&"s"in a&&"v"in a){{c=(a.h+360)%360/60;b=a.v/100*255;a=a.s/100*b;const d=a*(1-Math.abs(c%2-1));switch(Math.floor(c)){case 0:c={r:a,g:d,b:0};break;case 1:c={r:d,g:a,b:0};break;case 2:c={r:0,g:a,b:d};break;case 3:c={r:0,g:d,b:a};break;case 4:c={r:d,g:0,b:a};break;case 5:case 6:c={r:a,g:0,b:d};break;default:c={r:0,g:0,b:0}}c.r=Math.round(c.r+b-a);c.g=Math.round(c.g+b-a);c.b=
Math.round(c.b+b-a);b=c}return b}return a}const t=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],u=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];f.darken=function(a,b){a=m(h(a));a.l*=1-b;return k(n(a))};f.toHSV=function(a){if("h"in a&&"s"in a&&"v"in a)return a;var b=g(a);{a=b.r;const c=b.g,d=b.b;b=Math.max(a,c,d);const e=b-Math.min(a,c,d);a=0===e?0:b===a?(c-d)/e%6:b===c?(d-a)/e+2:(a-c)/e+4;0>a&&(a+=6);a={h:60*a,s:100*(0===e?0:e/b),v:100/255*b}}return a};f.toLAB=
function(a){return"l"in a&&"a"in a&&"b"in a?a:m(h(g(a)))};f.toLCH=function(a){if(!("l"in a&&"c"in a&&"h"in a)){{var b=m(h(g(a)));a=b.l;var c=b.a;const d=b.b;b=Math.sqrt(c*c+d*d);c=Math.atan2(d,c);c=0<c?c:c+2*Math.PI;a={l:a,c:b,h:c}}}return a};f.toRGB=g;f.toXYZ=function(a){return"x"in a&&"y"in a&&"z"in a?a:h(g(a))};Object.defineProperty(f,"__esModule",{value:!0})});