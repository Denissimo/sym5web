// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(k){function l(c,e,a){const g=c.typedBuffer;c=c.typedBufferStride;const b=e.typedBuffer,h=e.typedBufferStride;e=a?a.count:e.count;let d=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*h;for(let f=0;f<e;++f)g[d]=b[a],g[d+1]=b[a+1],g[d+2]=b[a+2],d+=c,a+=h}function m(c,e,a,g,b){var h,d;const f=c.typedBuffer,n=c.typedBufferStride;c=null!=(h=null==b?void 0:b.count)?h:c.count;b=(null!=(d=null==b?void 0:b.dstIndex)?d:0)*n;for(d=0;d<c;++d)f[b]=e,f[b+1]=a,f[b+2]=g,
b+=n}var p=Object.freeze({__proto__:null,copy:l,fill:m});k.copy=l;k.fill=m;k.vec3=p});