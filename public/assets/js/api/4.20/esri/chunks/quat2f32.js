// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(h){function m(){const a=new Float32Array(8);a[3]=1;return a}function n(a){const b=new Float32Array(8);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];return b}function p(a,b,k,l,e,f,g,c){const d=new Float32Array(8);d[0]=a;d[1]=b;d[2]=k;d[3]=l;d[4]=e;d[5]=f;d[6]=g;d[7]=c;return d}function q(a,b,k,l,e,f,g){const c=new Float32Array(8);c[0]=a;c[1]=b;c[2]=k;c[3]=l;e*=.5;f*=.5;g*=.5;c[4]=e*l+f*k-g*b;c[5]=f*l+g*a-e*k;c[6]=g*l+e*b-f*a;c[7]=-e*a-
f*b-g*k;return c}function r(a,b){return new Float32Array(a,b,8)}var t=Object.freeze({__proto__:null,create:m,clone:n,fromValues:p,fromRotationTranslationValues:q,createView:r});h.clone=n;h.create=m;h.createView=r;h.fromRotationTranslationValues=q;h.fromValues=p;h.quat2f32=t});