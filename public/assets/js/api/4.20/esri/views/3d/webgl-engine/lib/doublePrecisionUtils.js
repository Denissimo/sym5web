// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function h(b,c,f){for(let a=0;a<f;++a)c[2*a]=b[a],c[2*a+1]=b[a]-c[2*a]}const k=new Float64Array(1),d=new Float32Array(2);e.decodeDoubleArray=function(b,c,f){for(let a=0;a<f;++a)c[a]=b[2*a]+b[2*a+1]};e.encodeDouble=function(b,c){d[0]=b;d[1]=b-d[0];c[0]=d[0];c[1]=d[1]};e.encodeDoubleArray=h;e.encodeDoubleArraySplit=function(b,c,f,a){for(let g=0;g<a;++g)k[0]=b[g],h(k,d,1),c[g]=d[0],f[g]=d[1]};Object.defineProperty(e,"__esModule",{value:!0})});