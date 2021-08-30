/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{E as a}from"./mathUtils.js";function t(a,t){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function s(a,t,s,n,h,M,r,b,u,o,c,i,e,f,m,x,l){return a[0]=t,a[1]=s,a[2]=n,a[3]=h,a[4]=M,a[5]=r,a[6]=b,a[7]=u,a[8]=o,a[9]=c,a[10]=i,a[11]=e,a[12]=f,a[13]=m,a[14]=x,a[15]=l,a}function n(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function h(a,t){if(a===t){const s=t[1],n=t[2],h=t[3],M=t[6],r=t[7],b=t[11];a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=s,a[6]=t[9],a[7]=t[13],a[8]=n,a[9]=M,a[11]=t[14],a[12]=h,a[13]=r,a[14]=b}else a[0]=t[0],a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=t[1],a[5]=t[5],a[6]=t[9],a[7]=t[13],a[8]=t[2],a[9]=t[6],a[10]=t[10],a[11]=t[14],a[12]=t[3],a[13]=t[7],a[14]=t[11],a[15]=t[15];return a}function M(a,t){const s=t[0],n=t[1],h=t[2],M=t[3],r=t[4],b=t[5],u=t[6],o=t[7],c=t[8],i=t[9],e=t[10],f=t[11],m=t[12],x=t[13],l=t[14],q=t[15],p=s*b-n*r,j=s*u-h*r,d=s*o-M*r,g=n*u-h*b,k=n*o-M*b,v=h*o-M*u,w=c*x-i*m,E=c*l-e*m,U=c*q-f*m,y=i*l-e*x,z=i*q-f*x,A=e*q-f*l;let B=p*A-j*z+d*y+g*U-k*E+v*w;return B?(B=1/B,a[0]=(b*A-u*z+o*y)*B,a[1]=(h*z-n*A-M*y)*B,a[2]=(x*v-l*k+q*g)*B,a[3]=(e*k-i*v-f*g)*B,a[4]=(u*U-r*A-o*E)*B,a[5]=(s*A-h*U+M*E)*B,a[6]=(l*d-m*v-q*j)*B,a[7]=(c*v-e*d+f*j)*B,a[8]=(r*z-b*U+o*w)*B,a[9]=(n*U-s*z-M*w)*B,a[10]=(m*k-x*d+q*p)*B,a[11]=(i*d-c*k-f*p)*B,a[12]=(b*E-r*y-u*w)*B,a[13]=(s*y-n*E+h*w)*B,a[14]=(x*j-m*g-l*p)*B,a[15]=(c*g-i*j+e*p)*B,a):null}function r(a,t,s){const n=t[0],h=t[1],M=t[2],r=t[3],b=t[4],u=t[5],o=t[6],c=t[7],i=t[8],e=t[9],f=t[10],m=t[11],x=t[12],l=t[13],q=t[14],p=t[15];let j=s[0],d=s[1],g=s[2],k=s[3];return a[0]=j*n+d*b+g*i+k*x,a[1]=j*h+d*u+g*e+k*l,a[2]=j*M+d*o+g*f+k*q,a[3]=j*r+d*c+g*m+k*p,j=s[4],d=s[5],g=s[6],k=s[7],a[4]=j*n+d*b+g*i+k*x,a[5]=j*h+d*u+g*e+k*l,a[6]=j*M+d*o+g*f+k*q,a[7]=j*r+d*c+g*m+k*p,j=s[8],d=s[9],g=s[10],k=s[11],a[8]=j*n+d*b+g*i+k*x,a[9]=j*h+d*u+g*e+k*l,a[10]=j*M+d*o+g*f+k*q,a[11]=j*r+d*c+g*m+k*p,j=s[12],d=s[13],g=s[14],k=s[15],a[12]=j*n+d*b+g*i+k*x,a[13]=j*h+d*u+g*e+k*l,a[14]=j*M+d*o+g*f+k*q,a[15]=j*r+d*c+g*m+k*p,a}function b(a,t,s){const n=s[0],h=s[1],M=s[2];let r,b,u,o,c,i,e,f,m,x,l,q;return t===a?(a[12]=t[0]*n+t[4]*h+t[8]*M+t[12],a[13]=t[1]*n+t[5]*h+t[9]*M+t[13],a[14]=t[2]*n+t[6]*h+t[10]*M+t[14],a[15]=t[3]*n+t[7]*h+t[11]*M+t[15]):(r=t[0],b=t[1],u=t[2],o=t[3],c=t[4],i=t[5],e=t[6],f=t[7],m=t[8],x=t[9],l=t[10],q=t[11],a[0]=r,a[1]=b,a[2]=u,a[3]=o,a[4]=c,a[5]=i,a[6]=e,a[7]=f,a[8]=m,a[9]=x,a[10]=l,a[11]=q,a[12]=r*n+c*h+m*M+t[12],a[13]=b*n+i*h+x*M+t[13],a[14]=u*n+e*h+l*M+t[14],a[15]=o*n+f*h+q*M+t[15]),a}function u(a,t,s){const n=s[0],h=s[1],M=s[2];return a[0]=t[0]*n,a[1]=t[1]*n,a[2]=t[2]*n,a[3]=t[3]*n,a[4]=t[4]*h,a[5]=t[5]*h,a[6]=t[6]*h,a[7]=t[7]*h,a[8]=t[8]*M,a[9]=t[9]*M,a[10]=t[10]*M,a[11]=t[11]*M,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a}function o(t,s,n,h){let M,r,b,u,o,c,i,e,f,m,x,l,q,p,j,d,g,k,v,w,E,U,y,z,A=h[0],B=h[1],C=h[2],D=Math.sqrt(A*A+B*B+C*C);return D<a?null:(D=1/D,A*=D,B*=D,C*=D,M=Math.sin(n),r=Math.cos(n),b=1-r,u=s[0],o=s[1],c=s[2],i=s[3],e=s[4],f=s[5],m=s[6],x=s[7],l=s[8],q=s[9],p=s[10],j=s[11],d=A*A*b+r,g=B*A*b+C*M,k=C*A*b-B*M,v=A*B*b-C*M,w=B*B*b+r,E=C*B*b+A*M,U=A*C*b+B*M,y=B*C*b-A*M,z=C*C*b+r,t[0]=u*d+e*g+l*k,t[1]=o*d+f*g+q*k,t[2]=c*d+m*g+p*k,t[3]=i*d+x*g+j*k,t[4]=u*v+e*w+l*E,t[5]=o*v+f*w+q*E,t[6]=c*v+m*w+p*E,t[7]=i*v+x*w+j*E,t[8]=u*U+e*y+l*z,t[9]=o*U+f*y+q*z,t[10]=c*U+m*y+p*z,t[11]=i*U+x*y+j*z,s!==t&&(t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t)}function c(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[4],r=t[5],b=t[6],u=t[7],o=t[8],c=t[9],i=t[10],e=t[11];return t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[4]=M*h+o*n,a[5]=r*h+c*n,a[6]=b*h+i*n,a[7]=u*h+e*n,a[8]=o*h-M*n,a[9]=c*h-r*n,a[10]=i*h-b*n,a[11]=e*h-u*n,a}function i(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[0],r=t[1],b=t[2],u=t[3],o=t[8],c=t[9],i=t[10],e=t[11];return t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=M*h-o*n,a[1]=r*h-c*n,a[2]=b*h-i*n,a[3]=u*h-e*n,a[8]=M*n+o*h,a[9]=r*n+c*h,a[10]=b*n+i*h,a[11]=u*n+e*h,a}function e(a,t,s){const n=Math.sin(s),h=Math.cos(s),M=t[0],r=t[1],b=t[2],u=t[3],o=t[4],c=t[5],i=t[6],e=t[7];return t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=M*h+o*n,a[1]=r*h+c*n,a[2]=b*h+i*n,a[3]=u*h+e*n,a[4]=o*h-M*n,a[5]=c*h-r*n,a[6]=i*h-b*n,a[7]=e*h-u*n,a}function f(a,t){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function m(a,t){return a[0]=t[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=t[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=t[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function x(a,t){const s=Math.sin(t),n=Math.cos(t);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=n,a[6]=s,a[7]=0,a[8]=0,a[9]=-s,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function l(a,t){const s=Math.sin(t),n=Math.cos(t);return a[0]=n,a[1]=s,a[2]=0,a[3]=0,a[4]=-s,a[5]=n,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function q(a,t){return a[0]=t[12],a[1]=t[13],a[2]=t[14],a}function p(a,t){const s=t[0],n=t[1],h=t[2],M=t[3],r=s+s,b=n+n,u=h+h,o=s*r,c=n*r,i=n*b,e=h*r,f=h*b,m=h*u,x=M*r,l=M*b,q=M*u;return a[0]=1-i-m,a[1]=c+q,a[2]=e-l,a[3]=0,a[4]=c-q,a[5]=1-o-m,a[6]=f+x,a[7]=0,a[8]=e+l,a[9]=f-x,a[10]=1-o-i,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function j(a,t,s,n,h,M,r){const b=1/(s-t),u=1/(h-n),o=1/(M-r);return a[0]=2*M*b,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*M*u,a[6]=0,a[7]=0,a[8]=(s+t)*b,a[9]=(h+n)*u,a[10]=(r+M)*o,a[11]=-1,a[12]=0,a[13]=0,a[14]=r*M*2*o,a[15]=0,a}function d(a,t,s,n,h,M,r){const b=1/(t-s),u=1/(n-h),o=1/(M-r);return a[0]=-2*b,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*o,a[11]=0,a[12]=(t+s)*b,a[13]=(h+n)*u,a[14]=(r+M)*o,a[15]=1,a}function g(t,s,h,M){let r,b,u,o,c,i,e,f,m,x;const l=s[0],q=s[1],p=s[2],j=M[0],d=M[1],g=M[2],k=h[0],v=h[1],w=h[2];return Math.abs(l-k)<a&&Math.abs(q-v)<a&&Math.abs(p-w)<a?n(t):(e=l-k,f=q-v,m=p-w,x=1/Math.sqrt(e*e+f*f+m*m),e*=x,f*=x,m*=x,r=d*m-g*f,b=g*e-j*m,u=j*f-d*e,x=Math.sqrt(r*r+b*b+u*u),x?(x=1/x,r*=x,b*=x,u*=x):(r=0,b=0,u=0),o=f*u-m*b,c=m*r-e*u,i=e*b-f*r,x=Math.sqrt(o*o+c*c+i*i),x?(x=1/x,o*=x,c*=x,i*=x):(o=0,c=0,i=0),t[0]=r,t[1]=o,t[2]=e,t[3]=0,t[4]=b,t[5]=c,t[6]=f,t[7]=0,t[8]=u,t[9]=i,t[10]=m,t[11]=0,t[12]=-(r*l+b*q+u*p),t[13]=-(o*l+c*q+i*p),t[14]=-(e*l+f*q+m*p),t[15]=1,t)}function k(a,t){return a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]&&a[3]===t[3]&&a[4]===t[4]&&a[5]===t[5]&&a[6]===t[6]&&a[7]===t[7]&&a[8]===t[8]&&a[9]===t[9]&&a[10]===t[10]&&a[11]===t[11]&&a[12]===t[12]&&a[13]===t[13]&&a[14]===t[14]&&a[15]===t[15]}function v(t,s){const n=t[0],h=t[1],M=t[2],r=t[3],b=t[4],u=t[5],o=t[6],c=t[7],i=t[8],e=t[9],f=t[10],m=t[11],x=t[12],l=t[13],q=t[14],p=t[15],j=s[0],d=s[1],g=s[2],k=s[3],v=s[4],w=s[5],E=s[6],U=s[7],y=s[8],z=s[9],A=s[10],B=s[11],C=s[12],D=s[13],F=s[14],G=s[15];return Math.abs(n-j)<=a*Math.max(1,Math.abs(n),Math.abs(j))&&Math.abs(h-d)<=a*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(M-g)<=a*Math.max(1,Math.abs(M),Math.abs(g))&&Math.abs(r-k)<=a*Math.max(1,Math.abs(r),Math.abs(k))&&Math.abs(b-v)<=a*Math.max(1,Math.abs(b),Math.abs(v))&&Math.abs(u-w)<=a*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(o-E)<=a*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(c-U)<=a*Math.max(1,Math.abs(c),Math.abs(U))&&Math.abs(i-y)<=a*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(e-z)<=a*Math.max(1,Math.abs(e),Math.abs(z))&&Math.abs(f-A)<=a*Math.max(1,Math.abs(f),Math.abs(A))&&Math.abs(m-B)<=a*Math.max(1,Math.abs(m),Math.abs(B))&&Math.abs(x-C)<=a*Math.max(1,Math.abs(x),Math.abs(C))&&Math.abs(l-D)<=a*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(q-F)<=a*Math.max(1,Math.abs(q),Math.abs(F))&&Math.abs(p-G)<=a*Math.max(1,Math.abs(p),Math.abs(G))}function w(t){const s=a,n=t[0],h=t[1],M=t[2],r=t[4],b=t[5],u=t[6],o=t[8],c=t[9],i=t[10];return Math.abs(1-(n*n+r*r+o*o))<=s&&Math.abs(1-(h*h+b*b+c*c))<=s&&Math.abs(1-(M*M+u*u+i*i))<=s}export{c as a,o as b,M as c,t as d,h as e,v as f,k as g,s as h,n as i,i as j,f as k,g as l,r as m,x as n,d as o,j as p,w as q,e as r,u as s,b as t,q as u,m as v,p as w,l as x};
