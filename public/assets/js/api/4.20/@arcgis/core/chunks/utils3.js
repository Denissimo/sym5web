/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,e,r,n){return function(t){return"function"==typeof t}(t)?t(e,r,n):t}function e(t){return[t.r,t.g,t.b,t.a]}function r(t,e,r){const a=t=>{let e=t.length;for(;e--;)if(-1===" /-,\n".indexOf(t.charAt(e)))return!1;return!0},i=[];let l=0,o=-1;do{if(o=e.indexOf("[",l),o>=l){if(o>l){const t=e.substr(l,o-l);i.push([t,null,a(t)])}if(l=o+1,o=e.indexOf("]",l),o>=l){if(o>l){const r=t[e.substr(l,o-l)];r&&i.push([null,r,!1])}l=o+1}}}while(-1!==o);if(l<e.length-1){const t=e.substr(l);i.push([t,null,a(t)])}return t=>{let e="",a=null;for(const r of i){const[n,i,l]=r;if(n)l?a=n:(a&&(e+=a,a=null),e+=n);else{const r=t.attributes[i];r&&(a&&(e+=a,a=null),e+=r)}}return n(e,r)}}function n(t,e){switch("string"!=typeof t&&(t=String(t)),e){case"LowerCase":return t.toLowerCase();case"Allcaps":return t.toUpperCase();default:return t}}function a(t,e,r,n,a,i,l=!0){const o=e/a,s=r/i,c=Math.ceil(o/2),u=Math.ceil(s/2);for(let r=0;r<i;r++)for(let M=0;M<a;M++){const f=4*(M+(l?i-r-1:r)*a);let p=0,C=0,y=0,I=0,h=0,k=0,d=0;const P=(r+.5)*s;for(let n=Math.floor(r*s);n<(r+1)*s;n++){const r=Math.abs(P-(n+.5))/u,a=(M+.5)*o,i=r*r;for(let r=Math.floor(M*o);r<(M+1)*o;r++){let l=Math.abs(a-(r+.5))/c;const o=Math.sqrt(i+l*l);o>=-1&&o<=1&&(p=2*o*o*o-3*o*o+1,p>0&&(l=4*(r+n*e),d+=p*t[l+3],y+=p,t[l+3]<255&&(p=p*t[l+3]/250),I+=p*t[l],h+=p*t[l+1],k+=p*t[l+2],C+=p))}}n[f]=I/C,n[f+1]=h/C,n[f+2]=k/C,n[f+3]=d/y}}function i(t){return t?{r:t[0],g:t[1],b:t[2],a:t[3]/255}:{r:0,g:0,b:0,a:0}}function l(t){var e;return null==(e=t.data)?void 0:e.symbol}function o(t){return"CIMVectorMarker"===t.type||"CIMPictureMarker"===t.type||"CIMBarChartMarker"===t.type||"CIMCharacterMarker"===t.type||"CIMPieChartMarker"===t.type||"CIMStackedBarChartMarker"===t.type}function s(t){return"CIMGradientStroke"===t.type||"CIMPictureStroke"===t.type||"CIMSolidStroke"===t.type}function c(t){return"CIMGradientFill"===t.type||"CIMHatchFill"===t.type||"CIMPictureFill"===t.type||"CIMSolidFill"===t.type||"CIMWaterFill"===t.type}function u(t){return"CIMMarkerPlacementAlongLineRandomSize"===t.type||"CIMMarkerPlacementAlongLineSameSize"===t.type||"CIMMarkerPlacementAlongLineVariableSize"===t.type||"CIMMarkerPlacementAtExtremities"===t.type||"CIMMarkerPlacementAtMeasuredUnits"===t.type||"CIMMarkerPlacementAtRatioPositions"===t.type||"CIMMarkerPlacementOnLine"===t.type||"CIMMarkerPlacementOnVertices"===t.type}export{n as _,s as a,c as b,u as c,r as d,t as e,i as f,e as g,o as i,a as r,l as t};
