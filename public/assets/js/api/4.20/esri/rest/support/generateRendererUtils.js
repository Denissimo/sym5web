// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(u){function x(a){const {classificationMethod:g,breakCount:h,normalizationType:f,definedInterval:k}=a.definition,e=[];var b=a.values;if(0===b.length)return[];b=b.sort((p,r)=>p-r);var d=b[0],l=b[b.length-1];if("equal-interval"===g)if(b.length>=h){b=(l-d)/h;a=d;for(var c=1;c<h;c++){var m=Number((d+c*b).toFixed(6));e.push({minValue:a,maxValue:m,label:q(a,m,f)});a=m}e.push({minValue:a,maxValue:l,label:q(a,l,f)})}else b.forEach(p=>{e.push({minValue:p,maxValue:p,label:q(p,p,f)})});
else if("natural-breaks"===g){b=v(b);a=y(b.uniqueValues,a.valueFrequency||b.valueFrequency,h);for(c=1;c<h;c++)b.uniqueValues.length>c&&(m=Number(b.uniqueValues[a[c]].toFixed(6)),e.push({minValue:d,maxValue:m,label:q(d,m,f)}),d=m);e.push({minValue:d,maxValue:l,label:q(d,l,f)})}else if("quantile"===g)if(b.length>=h&&d!==l){a=Math.ceil(b.length/h);c=0;for(m=1;m<h;m++){var n=a+c-1;n>b.length&&(n=b.length-1);0>n&&(n=0);e.push({minValue:d,maxValue:b[n],label:q(d,b[n],f)});d=b[n];c+=a;a=Math.ceil((b.length-
c)/(h-m))}e.push({minValue:d,maxValue:l,label:q(d,l,f)})}else for(l=-1,d=0;d<b.length;d++)a=b[d],a!==l&&(l=a,e.push({minValue:l,maxValue:a,label:q(l,a,f)}),l=a);else if("standard-deviation"===g)if(a=z(b),c=A(b,a),0===c)e.push({minValue:b[0],maxValue:b[0],label:q(b[0],b[0],f)});else{b=B(d,l,h,a,c)*c;c=0;for(m=h;1<=m;m--)n=Number((a-(m-.5)*b).toFixed(6)),e.push({minValue:d,maxValue:n,label:q(d,n,f)}),d=n,c++;m=Number((a+.5*b).toFixed(6));e.push({minValue:d,maxValue:m,label:q(d,m,f)});d=m;c++;for(n=
1;n<=h;n++)m=c===2*h?l:Number((a+(n+.5)*b).toFixed(6)),e.push({minValue:d,maxValue:m,label:q(d,m,f)}),d=m,c++}else if("defined-interval"===g){if(!k)return e;l=b[0];b=b[b.length-1];d=Math.ceil((b-l)/k);a=l;for(c=1;c<d;c++)m=Number((l+c*k).toFixed(6)),e.push({minValue:a,maxValue:m,label:q(a,m,f)}),a=m;e.push({minValue:a,maxValue:b,label:q(a,b,f)})}return e}function q(a,g,h){let f=null;return f=a===g?h&&"percent-of-total"===h?a+"%":a.toString():h&&"percent-of-total"===h?a+"% - "+g+"%":a+" - "+g}function v(a){const g=
[],h=[];let f=Number.MIN_VALUE,k=1,e=-1;for(let b=0;b<a.length;b++){const d=a[b];d===f?(k++,h[e]=k):null!==d&&(g.push(d),f=d,k=1,h.push(k),e++)}return{uniqueValues:g,valueFrequency:h}}function y(a,g,h){var f=a.length;const k=[];h>f&&(h=f);for(var e=0;e<h;e++)k.push(Math.round(e*f/h-1));k.push(f-1);e=w(k,a,g,h);{f=e.mean;e=e.sdcm;var b=h,d=0,l=0;let m=0,n=0,p=!0;for(let r=0;2>r&&p;r++){0===r&&(p=!1);for(var c=0;c<b-1;c++)for(;k[c+1]+1!==k[c+2];)if(k[c+1]+=1,d=t(c,k,a,g),m=d.sbMean,d=d.sbSdcm,l=t(c+
1,k,a,g),n=l.sbMean,l=l.sbSdcm,d+l<e[c]+e[c+1])e[c]=d,e[c+1]=l,f[c]=m,f[c+1]=n,p=!0;else{--k[c+1];break}for(c=b-1;0<c;c--)for(;k[c]!==k[c-1]+1;)if(--k[c],d=t(c-1,k,a,g),m=d.sbMean,d=d.sbSdcm,l=t(c,k,a,g),n=l.sbMean,l=l.sbSdcm,d+l<e[c-1]+e[c])e[c-1]=d,e[c]=l,f[c-1]=m,f[c]=n,p=!0;else{k[c]+=1;break}}f=p}f&&(e=w(k,a,g,h));return k}function w(a,g,h,f){let k=[];var e=[],b=[];let d=0;const l=[],c=[];for(var m=0;m<f;m++){var n=t(m,a,g,h);l.push(n.sbMean);c.push(n.sbSdcm);d+=c[m]}n=d;for(m=!0;m||d<n;){m=
!1;k=[];for(e=0;e<f;e++)k.push(a[e]);for(b=0;b<f;b++)for(n=a[b]+1;n<=a[b+1];n++)if(e=g[n],0<b&&n!==a[b+1]&&Math.abs(e-l[b])>Math.abs(e-l[b-1]))a[b]=n;else if(b<f-1&&a[b]!==n-1&&Math.abs(e-l[b])>Math.abs(e-l[b+1])){a[b+1]=n-1;break}n=d;d=0;e=[];b=[];for(let p=0;p<f;p++){e.push(l[p]);b.push(c[p]);const r=t(p,a,g,h);l[p]=r.sbMean;c[p]=r.sbSdcm;d+=c[p]}}if(d>n){for(g=0;g<f;g++)a[g]=k[g],l[g]=e[g],c[g]=b[g];d=n}return{mean:l,sdcm:c}}function B(a,g,h,f,k){a=Math.max(f-a,g-f)/k/h;return 1<=a?1:.5<=a?.5:
.25}function z(a){let g=0;for(let h=0;h<a.length;h++)g+=a[h];return g/=a.length}function A(a,g){let h=0;for(let f=0;f<a.length;f++){const k=a[f];h+=(k-g)*(k-g)}h/=a.length;return Math.sqrt(h)}function t(a,g,h,f){var k=0,e=0;for(var b=g[a]+1;b<=g[a+1];b++){const d=f[b];k+=h[b]*d;e+=d}0>=e&&console.log("Exception in Natural Breaks calculation");k/=e;e=0;for(b=g[a]+1;b<=g[a+1];b++)e+=f[b]*(h[b]-k)**2;return{sbMean:k,sbSdcm:e}}u.createGenerateRendererClassBreaks=function(a){const {normalizationTotal:g}=
a;return{classBreaks:x(a),normalizationTotal:g}};u.createGenerateRendererUniqueValues=function(a){a=v(a);const g=[],h=a.uniqueValues.length;for(let f=0;f<h;f++){const k=a.uniqueValues[f];g.push({value:k,count:a.valueFrequency[f],label:k.toString()})}return{uniqueValues:g}};Object.defineProperty(u,"__esModule",{value:!0})});