// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./common"],function(d,r){function t(a,b){a[0]=b[0];a[1]=b[1];return a}function u(a,b,c){a[0]=b;a[1]=c;return a}function v(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];return a}function h(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];return a}function k(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];return a}function l(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];return a}function w(a,b){a[0]=Math.ceil(b[0]);a[1]=Math.ceil(b[1]);return a}function x(a,b){a[0]=Math.floor(b[0]);a[1]=Math.floor(b[1]);return a}function y(a,
b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);return a}function z(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);return a}function A(a,b){a[0]=Math.round(b[0]);a[1]=Math.round(b[1]);return a}function B(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;return a}function C(a,b,c,e){a[0]=b[0]+c[0]*e;a[1]=b[1]+c[1]*e;return a}function m(a,b){const c=b[0]-a[0];a=b[1]-a[1];return Math.sqrt(c*c+a*a)}function n(a,b){const c=b[0]-a[0];a=b[1]-a[1];return c*c+a*a}function p(a){const b=a[0];a=a[1];return Math.sqrt(b*
b+a*a)}function q(a){const b=a[0];a=a[1];return b*b+a*a}function D(a,b){a[0]=-b[0];a[1]=-b[1];return a}function E(a,b){a[0]=1/b[0];a[1]=1/b[1];return a}function F(a,b){var c=b[0];const e=b[1];c=c*c+e*e;0<c&&(c=1/Math.sqrt(c),a[0]=b[0]*c,a[1]=b[1]*c);return a}function G(a,b){return a[0]*b[0]+a[1]*b[1]}function H(a,b,c){b=b[0]*c[1]-b[1]*c[0];a[0]=a[1]=0;a[2]=b;return a}function I(a,b,c,e){const f=b[0];b=b[1];a[0]=f+e*(c[0]-f);a[1]=b+e*(c[1]-b);return a}function J(a,b){b=b||1;const c=2*r.RANDOM()*Math.PI;
a[0]=Math.cos(c)*b;a[1]=Math.sin(c)*b;return a}function K(a,b,c){const e=b[0];b=b[1];a[0]=c[0]*e+c[2]*b;a[1]=c[1]*e+c[3]*b;return a}function L(a,b,c){const e=b[0];b=b[1];a[0]=c[0]*e+c[2]*b+c[4];a[1]=c[1]*e+c[3]*b+c[5];return a}function M(a,b,c){const e=b[0];b=b[1];a[0]=c[0]*e+c[3]*b+c[6];a[1]=c[1]*e+c[4]*b+c[7];return a}function N(a,b,c){const e=b[0];b=b[1];a[0]=c[0]*e+c[4]*b+c[12];a[1]=c[1]*e+c[5]*b+c[13];return a}function O(a,b,c,e){const f=b[0]-c[0];b=b[1]-c[1];const g=Math.sin(e);e=Math.cos(e);
a[0]=f*e-b*g+c[0];a[1]=f*g+b*e+c[1];return a}function P(a,b){var c=a[0];a=a[1];const e=b[0];b=b[1];let f=c*c+a*a;0<f&&(f=1/Math.sqrt(f));let g=e*e+b*b;0<g&&(g=1/Math.sqrt(g));c=(c*e+a*b)*f*g;return 1<c?0:-1>c?Math.PI:Math.acos(c)}function Q(a){return"vec2("+a[0]+", "+a[1]+")"}function R(a,b){return a[0]===b[0]&&a[1]===b[1]}function S(a,b){const c=a[0];a=a[1];const e=b[0];b=b[1];return Math.abs(c-e)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(e))&&Math.abs(a-b)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))}
var T=Object.freeze({__proto__:null,copy:t,set:u,add:v,subtract:h,multiply:k,divide:l,ceil:w,floor:x,min:y,max:z,round:A,scale:B,scaleAndAdd:C,distance:m,squaredDistance:n,length:p,squaredLength:q,negate:D,inverse:E,normalize:F,dot:G,cross:H,lerp:I,random:J,transformMat2:K,transformMat2d:L,transformMat3:M,transformMat4:N,rotate:O,angle:P,str:Q,exactEquals:R,equals:S,len:p,sub:h,mul:k,div:l,dist:m,sqrDist:n,sqrLen:q});d.add=v;d.angle=P;d.ceil=w;d.copy=t;d.cross=H;d.dist=m;d.distance=m;d.div=l;d.divide=
l;d.dot=G;d.equals=S;d.exactEquals=R;d.floor=x;d.inverse=E;d.len=p;d.length=p;d.lerp=I;d.max=z;d.min=y;d.mul=k;d.multiply=k;d.negate=D;d.normalize=F;d.random=J;d.rotate=O;d.round=A;d.scale=B;d.scaleAndAdd=C;d.set=u;d.sqrDist=n;d.sqrLen=q;d.squaredDistance=n;d.squaredLength=q;d.str=Q;d.sub=h;d.subtract=h;d.transformMat2=K;d.transformMat2d=L;d.transformMat3=M;d.transformMat4=N;d.vec2=T});