// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(l){function m(c,f,a){const g=c.typedBuffer;c=c.typedBufferStride;const h=f.typedBuffer,b=f.typedBufferStride;f=a?a.count:f.count;let d=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*b;for(let e=0;e<f;++e)g[d]=h[a],g[d+1]=h[a+1],g[d+2]=h[a+2],g[d+3]=h[a+3],d+=c,a+=b}function n(c,f,a,g,h,b){var d,e;const k=c.typedBuffer,p=c.typedBufferStride;c=null!=(d=null==b?void 0:b.count)?d:c.count;b=(null!=(e=null==b?void 0:b.dstIndex)?e:0)*p;for(e=0;e<c;++e)k[b]=f,k[b+
1]=a,k[b+2]=g,k[b+3]=h,b+=p}var q=Object.freeze({__proto__:null,copy:m,fill:n});l.copy=m;l.fill=n;l.vec4=q});