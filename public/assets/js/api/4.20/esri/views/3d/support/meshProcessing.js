// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(x){x.computeNeighbors=function(n,k,t){k/=3;const p=new Uint32Array(t+1),r=new Uint32Array(t+1);var h=(c,b)=>{c<b?p[c+1]++:r[b+1]++};for(var a=0;a<k;a++){var d=n[3*a],l=n[3*a+1],g=n[3*a+2];h(d,l);h(l,g);h(g,d)}a=h=0;for(d=0;d<t;d++)l=p[d+1],g=r[d+1],p[d+1]=h,r[d+1]=a,h+=l,a+=g;const e=new Uint32Array(6*k),q=p[t];h=(c,b,f)=>{c<b?(c=p[c+1]++,e[2*c]=b,e[2*c+1]=f):(b=r[b+1]++,e[2*q+2*b]=c,e[2*q+2*b+1]=f)};for(a=0;a<k;a++)d=n[3*a],l=n[3*a+1],g=n[3*a+2],h(d,l,a),h(l,g,a),h(g,
d,a);h=(c,b)=>{const f=2*c;c=b-c;for(b=1;b<c;b++){const u=e[f+2*b],y=e[f+2*b+1];let m=b-1;for(m;0<=m&&e[f+2*m]>u;m--)e[f+2*m+2]=e[f+2*m],e[f+2*m+3]=e[f+2*m+1];e[f+2*m+2]=u;e[f+2*m+3]=y}};for(a=0;a<t;a++)h(p[a],p[a+1]),h(q+r[a],q+r[a+1]);const v=new Int32Array(3*k),w=(c,b)=>c===n[3*b]?0:c===n[3*b+1]?1:c===n[3*b+2]?2:-1;k=(c,b)=>{c=w(c,b);v[3*b+c]=-1};h=(c,b,f,u)=>{c=w(c,b);v[3*b+c]=u;f=w(f,u);v[3*u+f]=b};for(a=0;a<t;a++){d=p[a];l=p[a+1];g=r[a];const c=r[a+1];for(;d<l&&g<c;){const b=e[2*d],f=e[2*q+
2*g];b===f?(h(a,e[2*d+1],f,e[2*q+2*g+1]),d++,g++):b<f?(k(a,e[2*d+1]),d++):(k(f,e[2*q+2*g+1]),g++)}for(;d<l;)k(a,e[2*d+1]),d++;for(;g<c;)k(e[2*q+2*g],e[2*q+2*g+1]),g++}return v};Object.defineProperty(x,"__esModule",{value:!0})});