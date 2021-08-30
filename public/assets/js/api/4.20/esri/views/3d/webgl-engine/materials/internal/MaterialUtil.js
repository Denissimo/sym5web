// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/aaBoundingBox ../../lib/screenSizePerspectiveUtils ../../lib/Util ../renderers/utils".split(" "),function(y,P,I,G,J,L,Y,Z,aa){function Q(a,b,c,e,k,d){if(!I.isNone(a)){var f=R(b,c,ba);L.setMin(K,a.getBBMin());L.setMax(K,a.getBBMax());I.isSome(k)&&k.applyToAabb(K);if(S(K,b,f,e)){const {primitiveIndices:l,indices:u,position:q}=a;f=l?l.length:
u.length/3;if(1E3<f&&(a=a.getChildren(),void 0!==a)){for(f=0;8>f;++f)void 0!==a[f]&&Q(a[f],b,c,e,k,d);return}M(b,c,0,f,u,q,l,k,d)}}}function M(a,b,c,e,k,d,f,l,u){if(f){var q=d.data;d=d.stride||d.size;var x=a[0],D=a[1];a=a[2];var E=b[0]-x,F=b[1]-D;for(b=b[2]-a;c<e;++c){var A=f[c],g=3*A,h=d*k[g++],r=q[h++],n=q[h++],m=q[h];h=d*k[g++];var t=q[h++],w=q[h++],p=q[h];h=d*k[g];g=q[h++];var v=q[h++];h=q[h];I.isSome(l)&&([r,n,m]=l.applyToVertex(r,n,m,c),[t,w,p]=l.applyToVertex(t,w,p,c),[g,v,h]=l.applyToVertex(g,
v,h,c));t-=r;w-=n;p-=m;g-=r;v-=n;h-=m;var B=F*h-v*b,H=b*g-h*E;const C=E*v-g*F;var z=t*B+w*H+p*C;if(!(Math.abs(z)<=Number.EPSILON)){r=x-r;n=D-n;m=a-m;B=r*B+n*H+m*C;if(0<z){if(0>B||B>z)continue}else if(0<B||B<z)continue;H=n*p-w*m;m=m*t-p*r;n=r*w-t*n;r=E*H+F*m+b*n;if(0<z){if(0>r||B+r>z)continue}else if(0<r||B+r<z)continue;m=(g*H+v*m+h*n)/z;0<=m&&(t=N(t,w,p,g,v,h,T),u(m,t,A))}}}else{f=d.data;q=d.stride||d.size;d=a[0];x=a[1];D=a[2];a=b[0]-d;E=b[1]-x;F=b[2]-D;for(let C=c,O=3*c;C<e;++C)if(g=q*k[O++],n=f[g++],
m=f[g++],p=f[g],g=q*k[O++],b=f[g++],c=f[g++],A=f[g],g=q*k[O++],t=f[g++],w=f[g++],g=f[g],I.isSome(l)&&([n,m,p]=l.applyToVertex(n,m,p,C),[b,c,A]=l.applyToVertex(b,c,A,C),[t,w,g]=l.applyToVertex(t,w,g,C)),b-=n,c-=m,A-=p,t-=n,w-=m,g-=p,h=E*g-w*F,r=F*t-g*a,z=a*w-t*E,v=b*h+c*r+A*z,!(Math.abs(v)<=Number.EPSILON)){n=d-n;m=x-m;p=D-p;h=n*h+m*r+p*z;if(0<v){if(0>h||h>v)continue}else if(0<h||h<v)continue;r=m*A-c*p;p=p*b-A*n;m=n*c-b*m;n=a*r+E*p+F*m;if(0<v){if(0>n||h+n>v)continue}else if(0<n||h+n<v)continue;p=(t*
r+w*p+g*m)/v;0<=p&&(b=N(b,c,A,t,w,g,T),u(p,b,C))}}}function N(a,b,c,e,k,d,f){G.set(U,a,b,c);G.set(V,e,k,d);G.cross(f,U,V);G.normalize(f,f);return f}function R(a,b,c){return G.set(c,1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]))}function S(a,b,c,e){return W(a,b,c,e,Infinity)}function W(a,b,c,e,k){var d=(a[0]-e-b[0])*c[0],f=(a[3]+e-b[0])*c[0];let l=Math.min(d,f);d=Math.max(d,f);f=(a[1]-e-b[1])*c[1];const u=(a[4]+e-b[1])*c[1];d=Math.min(d,Math.max(f,u));if(0>d)return!1;l=Math.max(l,Math.min(f,u));if(l>d)return!1;
f=(a[2]-e-b[2])*c[2];a=(a[5]+e-b[2])*c[2];d=Math.min(d,Math.max(f,a));if(0>d)return!1;l=Math.max(l,Math.min(f,a));return l>d?!1:l<k}function X(a,b){b=b?X(b):{};for(const c in a){let e=a[c];e&&e.forEach&&(e=ca(e));null==e&&c in b||(b[c]=e)}return b}function ca(a){const b=[];a.forEach(c=>b.push(c));return b}const K=L.create(),ba=J.create(),T=J.create(),U=J.create(),V=J.create();y.bindScreenSizePerspective=function(a,b,c){if(a){var e=a.parameters;b.setUniform4f(c,e.divisor,e.offset,e.minPixelSize,a.paddingPixelsOverride)}};
y.colorMixModes={multiply:1,ignore:2,replace:3,tint:4};y.computeInvDir=R;y.computeNormal=N;y.copyParameters=X;y.intersectAabbInvDir=S;y.intersectAabbInvDirBefore=W;y.intersectDrapedRenderLineGeometry=function(a,b,c,e,k){if(b.options.selectionMode){b=a.vertexAttributes.get("position").data;var d=a.vertexAttributes.get("size"),f=c[0];c=c[1];a=(((d&&d.data[0])+e)/2+4)*a.screenToWorldRatio;e=Number.MAX_VALUE;for(d=0;d<b.length-5;d+=3){var l=b[d],u=b[d+1],q=f-l,x=c-u;l=b[d+3]-l;u=b[d+4]-u;const D=P.clamp((l*
q+u*x)/(l*l+u*u),0,1);q=l*D-q;x=u*D-x;x=q*q+x*x;x<e&&(e=x)}e<a*a&&k()}};y.intersectTriangleGeometry=function(a,b,c,e,k,d,f){aa.isInstanceHidden(b)||(a.boundingInfo?(Z.assert(0===a.primitiveType),Q(a.boundingInfo,e,k,c.tolerance,d,f)):(b=a.indices.get("position"),a=a.vertexAttributes.get("position"),M(e,k,0,b.length/3,b,a,void 0,d,f)))};y.intersectTriangles=M;y.updateParameters=function(a,b){let c=!1;for(const e in b){const k=b[e];void 0!==k&&(c=!0,Array.isArray(k)?a[e]=k.slice():a[e]=k)}return c};
y.verticalOffsetAtDistance=function(a,b,c,e,k){let d=(c.screenLength||0)*a.pixelRatio;k&&(d=Y.scale(d,e,b,k));return P.clamp(d*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,c.minWorldLength||0,null!=c.maxWorldLength?c.maxWorldLength:Infinity)};Object.defineProperty(y,"__esModule",{value:!0})});