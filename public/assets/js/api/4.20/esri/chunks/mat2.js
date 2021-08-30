// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./common"],function(e,l){function p(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a}function q(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a}function r(a,b,c,d,g){a[0]=b;a[1]=c;a[2]=d;a[3]=g;return a}function t(a,b){if(a===b){const c=b[1];a[1]=b[2];a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a}function u(a,b){const c=b[0],d=b[1],g=b[2];b=b[3];let f=c*b-g*d;if(!f)return null;f=1/f;a[0]=b*f;a[1]=-d*f;a[2]=-g*f;a[3]=c*f;return a}function v(a,b){const c=b[0];a[0]=b[3];
a[1]=-b[1];a[2]=-b[2];a[3]=c;return a}function w(a){return a[0]*a[3]-a[2]*a[1]}function m(a,b,c){const d=b[0],g=b[1],f=b[2];b=b[3];const h=c[0],k=c[1],x=c[2];c=c[3];a[0]=d*h+f*k;a[1]=g*h+b*k;a[2]=d*x+f*c;a[3]=g*x+b*c;return a}function y(a,b,c){const d=b[0],g=b[1],f=b[2];b=b[3];const h=Math.sin(c);c=Math.cos(c);a[0]=d*c+f*h;a[1]=g*c+b*h;a[2]=d*-h+f*c;a[3]=g*-h+b*c;return a}function z(a,b,c){const d=b[1],g=b[2],f=b[3],h=c[0];c=c[1];a[0]=b[0]*h;a[1]=d*h;a[2]=g*c;a[3]=f*c;return a}function A(a,b){const c=
Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;return a}function B(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];return a}function C(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}function D(a){return Math.sqrt(a[0]**2+a[1]**2+a[2]**2+a[3]**2)}function E(a,b,c,d){a[2]=d[2]/d[0];c[0]=d[0];c[1]=d[1];c[3]=d[3]-a[2]*c[1];return[a,b,c]}function F(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a}function n(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-
c[3];return a}function G(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]}function H(a,b){const c=a[0],d=a[1],g=a[2];a=a[3];const f=b[0],h=b[1],k=b[2];b=b[3];return Math.abs(c-f)<=l.EPSILON*Math.max(1,Math.abs(c),Math.abs(f))&&Math.abs(d-h)<=l.EPSILON*Math.max(1,Math.abs(d),Math.abs(h))&&Math.abs(g-k)<=l.EPSILON*Math.max(1,Math.abs(g),Math.abs(k))&&Math.abs(a-b)<=l.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))}function I(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a}
function J(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;return a}var K=Object.freeze({__proto__:null,copy:p,identity:q,set:r,transpose:t,invert:u,adjoint:v,determinant:w,multiply:m,rotate:y,scale:z,fromRotation:A,fromScaling:B,str:C,frob:D,LDU:E,add:F,subtract:n,exactEquals:G,equals:H,multiplyScalar:I,multiplyScalarAndAdd:J,mul:m,sub:n});e.LDU=E;e.add=F;e.adjoint=v;e.copy=p;e.determinant=w;e.equals=H;e.exactEquals=G;e.frob=D;e.fromRotation=A;e.fromScaling=B;e.identity=
q;e.invert=u;e.mat2=K;e.mul=m;e.multiply=m;e.multiplyScalar=I;e.multiplyScalarAndAdd=J;e.rotate=y;e.scale=z;e.set=r;e.str=C;e.sub=n;e.subtract=n;e.transpose=t});