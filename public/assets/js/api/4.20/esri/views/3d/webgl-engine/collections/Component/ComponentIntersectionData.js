// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../materials/internal/MaterialUtil"],function(F,J,y,K,O){function P(g,h,a){let d=0,f=Infinity;for(let b=0;3>b;++b){var c=g[b];if(h[b]<c){if(1E-6>=a[b])return!1;d=Math.max(d,(c-h[b])/a[b])}else-1E-6>=a[b]&&(f=Math.min(f,(c-h[b])/a[b]));if(d>=f)return!1;c=g[b+3];if(h[b]>c){if(-1E-6<=a[b])return!1;d=Math.max(d,(c-h[b])/a[b])}else 1E-6<=a[b]&&(f=Math.min(f,(c-h[b])/a[b]));
if(d>=f)return!1}return!0}function Q(g,h,a,d,f,c){let b=d;for(;a<b;){var e=g[a];h[6*e+f+3]<=c?++a:(--b,g[a]=g[b],g[b]=e)}e=a;for(b=d;e<b;)d=g[b-1],h[6*d+f]>=c?--b:(g[b-1]=g[e],g[e]=d,++e);return{next:a,mid:e}}function R(g,h,a,d){if(d<=a)return K.fromValues(NaN,NaN,NaN,NaN,NaN,NaN);var f=6*g[a];for(var c=0;3>c;++c)z[c]=h[f+0+c],A[c]=h[f+3+c];for(a+=1;a<d;++a)for(f=6*g[a],c=0;3>c;++c)z[c]=Math.min(z[c],h[f+0+c]),A[c]=Math.max(A[c],h[f+3+c]);return K.fromValues(z[0],z[1],z[2],A[0],A[1],A[2])}function S(g){var h=
g[3]-g[0];const a=g[4]-g[1],d=g[5]-g[2];h=h>a?h>d?0:a>d?1:2:a>d?1:d>h?2:0;return{axis:h,midValue:(g[h]+g[h+3])/2}}function T(g,h,a,d,f){a-=h;const c=new Float32Array(6*a);for(let e=0;e<a;++e){var b=3*(e+h);const l=g[b+0]*f,m=g[b+1]*f;b=g[b+2]*f;for(let k=0;3>k;++k){const q=d[l+k],p=d[m+k],n=d[b+k];c[6*e+k]=Math.min(q,p,n);c[6*e+3+k]=Math.max(q,p,n)}}return c}function U(g,h,a,d){const f=d-a;var c=0;for(var b=a;b<d;++b)for(var e=0;3>e;++e)c=Math.max(h[3*b+e],c);d=65535>=c?new Uint16Array(3*f):new Uint32Array(3*
f);for(c=0;c<f;++c)for(b=3*(g[c]+a),e=0;3>e;++e)d[3*c+e]=h[b+e];return d}let L=function(g,h,a,d,f){this.aabb=g;this.axis=h;this.d=a;this.midStartIndex=d;this.rightStartIndex=f},N=function(){function g(a,d,f,c){this.globalTriangleVertexIndices=a;this.firstTriangleIndex=d;this.positionAttribute=c;this.bspNodeTree=[];this.vertexPositionBuffer=c.data;this.vertexPositionStride=c.stride;const b=f-d,e=65535>=b?new Uint16Array(b):new Uint32Array(b);this.indices=e;for(let l=0;l<b;++l)e[l]=l;{const l=T(a,d,
f,c.data,c.stride),m=(k,q,p)=>{var n=R(e,l,k,q);const u=q-k;if(20>=u)return k=new L(n,void 0,0,k,q),this.bspNodeTree.push(k),k;const {axis:r,midValue:v}=S(n),w=Q(e,l,k,q,r,v),t=(B,C)=>{if(!(15<p)){var D=C-B;if(!(20>D||D>=.8*u))return m(B,C,p+1)}};n=new L(n,r,v,w.next,w.mid);this.bspNodeTree.push(n);n.leftNode=t(k,w.next);n.rightNode=t(w.mid,q);return n};m(0,b,0);this.triangleVertexIndices=U(e,a,d,f)}}var h=g.prototype;h.intersectRayTriangleRange=function(a,d){{if(a>=d)return;const w=this.triangleVertexIndices,
t=this.positionAttribute.data,B=this.positionAttribute.stride;var f=this.rayOrigin;const C=f[0],D=f[1];f=f[2];var c=this.rayDirection;const G=c[0],H=c[1];c=c[2];for(let I=a,E=3*a;I<d;++I){var b=w[E]*B,e=t[b],l=t[b+1],m=t[b+2],k=w[E+1]*B;b=t[k];var q=t[k+1];k=t[k+2];var p=w[E+2]*B,n=t[p],u=t[p+1];p=t[p+2];E+=3;b-=e;q-=l;k-=m;n-=e;u-=l;p-=m;var r=H*p-u*c,v=c*n-p*G;const M=G*u-n*H,x=b*r+q*v+k*M;if(!(Math.abs(x)<=Number.EPSILON)){e=C-e;l=D-l;m=f-m;r=e*r+l*v+m*M;if(0<x){if(0>r||r>x)continue}else if(0<
r||r<x)continue;v=l*k-q*m;m=m*b-k*e;l=e*q-b*l;e=G*v+H*m+c*l;if(0<x){if(0>e||r+e>x)continue}else if(0<e||r+e<x)continue;l=(n*v+u*m+p*l)/x;0<=l&&(m=this.indices[I]+this.firstTriangleIndex,b=O.computeNormal(b,q,k,n,u,p,V),this.callback(l,b,m))}}}g.numFacesTested+=d-a};h.intersectRay=function(a,d){g.numFacesTested=0;var f=y.fromValues(a.r0[0],a.r0[1],a.r0[2]);{a=y.fromValues(a.r1[0],a.r1[1],a.r1[2]);const c=y.create();J.sub(c,a,f);a=c}1E-6>J.squaredLength(a)||(this.rayOrigin=f,this.rayDirection=a,f=this.triangleVertexIndices.length/
3,this.callback=d,this.intersectRayBSP(this.bspNodeTree[0],0,f))};h.intersectRayBSP=function(a,d,f){const c=this.rayOrigin,b=this.rayDirection;if(P(a.aabb,c,b)){var e=a.axis,l=a.d;if(c[e]<l||0>b[e]){const m=a.midStartIndex;if(d<m){const k=a.leftNode;void 0!==k?this.intersectRayBSP(k,d,m):this.intersectRayTriangleRange(d,m)}}this.intersectRayTriangleRange(a.midStartIndex,a.rightStartIndex);if(c[e]>l||0<b[e])d=a.rightStartIndex,d<f&&(a=a.rightNode,void 0!==a?this.intersectRayBSP(a,d,f):this.intersectRayTriangleRange(d,
f))}};return g}();N.numFacesTested=0;const V=y.create(),z=y.fromValues(Infinity,Infinity,Infinity),A=y.fromValues(-Infinity,-Infinity,-Infinity);F.ComponentIntersectionData=N;F.componentMinimalSizeForIntersectionData=40;Object.defineProperty(F,"__esModule",{value:!0})});