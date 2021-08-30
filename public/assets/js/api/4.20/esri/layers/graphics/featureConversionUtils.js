// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/Logger ../../geometry/support/jsonUtils ./OptimizedFeature ./OptimizedFeatureSet ./OptimizedGeometry".split(" "),function(p,A,pa,F,B,qa,y){function u(a,b){return a?b?4:3:b?3:2}function G(a,b,d,c){if(a){if(d)return b&&c?ha:H;if(b&&c)return ra}else if(b&&c)return H;return ia}function I({scale:a,translate:b},d){return Math.round((d-b[0])/a[0])}function J({scale:a,translate:b},d){return Math.round((b[1]-d)/a[1])}function L({scale:a,translate:b},d){return d*
a[0]+b[0]}function M({scale:a,translate:b},d){return b[1]-d*a[1]}function K(a){a=a.coords;return{x:a[0],y:a[1]}}function ja(a,b){a.coords[0]=b.x;a.coords[1]=b.y;return a}function N(a){a=a.coords;return{x:a[0],y:a[1],z:a[2]}}function sa(a,b){a.coords[0]=b.x;a.coords[1]=b.y;a.coords[2]=b.z;return a}function O(a){a=a.coords;return{x:a[0],y:a[1],m:a[2]}}function ta(a,b){a.coords[0]=b.x;a.coords[1]=b.y;a.coords[2]=b.m;return a}function P(a){a=a.coords;return{x:a[0],y:a[1],z:a[2],m:a[3]}}function ua(a,
b){a.coords[0]=b.x;a.coords[1]=b.y;a.coords[2]=b.z;a.coords[3]=b.m;return a}function Q(a,b){return a&&b?ua:a?sa:b?ta:ja}function R(a,b,d,c,f){d=Q(d,c);for(const e of b){const {geometry:h,attributes:g}=e;let k;h&&(k=d(new y,h));a.push(new B(k,g,null,g[f]))}return a}function ka(a,b,d,c){for(const f of b){const {geometry:e,attributes:h}=f;let g;e&&(g=S(e,d,c));a.push({attributes:h,geometry:g})}return a}function S(a,b,d){if(!a)return null;const c=u(b,d),f=[];for(let e=0;e<a.coords.length;e+=c){const h=
[];for(let g=0;g<c;g++)h.push(a.coords[e+g]);f.push(h)}return b?d?{points:f,hasZ:b,hasM:d}:{points:f,hasZ:b}:d?{points:f,hasM:d}:{points:f}}function T(a,b,d,c,f){d=u(d,c);for(const e of b){b=e.geometry;c=e.attributes;let h;b&&(h=U(new y,b,d));a.push(new B(h,c,null,c[f]))}return a}function U(a,b,d=u(b.hasZ,b.hasM)){a.lengths[0]=b.points.length;const c=a.coords;let f=0;for(const e of b.points)for(b=0;b<d;b++)c[f++]=e[b];return a}function V(a,b,d){if(!a)return null;const c=u(b,d),{coords:f,lengths:e}=
a;a=[];let h=0;for(const g of e){const k=[];for(let l=0;l<g;l++){const m=[];for(let n=0;n<c;n++)m.push(f[h++]);k.push(m)}a.push(k)}return b?d?{paths:a,hasZ:b,hasM:d}:{paths:a,hasZ:b}:d?{paths:a,hasM:d}:{paths:a}}function W(a,b,d,c,f){d=u(d,c);for(const e of b){b=e.geometry;c=e.attributes;let h;b&&(h=X(new y,b,d));a.push(new B(h,c,null,c[f]))}return a}function X(a,b,d=u(b.hasZ,b.hasM)){const {lengths:c,coords:f}=a;let e=0;for(const h of b.paths){for(const g of h)for(b=0;b<d;b++)f[e++]=g[b];c.push(h.length)}return a}
function Y(a,b,d){if(!a)return null;const c=u(b,d),{coords:f,lengths:e}=a;a=[];let h=0;for(const g of e){const k=[];for(let l=0;l<g;l++){const m=[];for(let n=0;n<c;n++)m.push(f[h++]);k.push(m)}a.push(k)}return b?d?{rings:a,hasZ:b,hasM:d}:{rings:a,hasZ:b}:d?{rings:a,hasM:d}:{rings:a}}function la(a,b,d,c,f){for(const e of b){b=e.geometry;const h=e.centroid,g=e.attributes;let k;b&&(k=Z(new y,b,d,c));h?a.push(new B(k,g,ja(new y,h),g[f])):a.push(new B(k,g,null,g[f]))}return a}function Z(a,b,d=b.hasZ,c=
b.hasM){ma(a,b.rings,d,c);return a}function ma(a,b,d,c){d=u(d,c);const {lengths:f,coords:e}=a;c=0;f.length=e.length=0;for(const h of b){for(const g of h)for(b=0;b<d;b++)e[c++]=g[b];f.push(h.length)}return a}function aa(a,b,d,c,f,e){a.length=0;if(!d){for(const h of b)a.push(new B(null,h.attributes,null,h.attributes[e]));return a}switch(d){case "esriGeometryPoint":return R(a,b,c,f,e);case "esriGeometryMultipoint":return T(a,b,c,f,e);case "esriGeometryPolyline":return W(a,b,c,f,e);case "esriGeometryPolygon":return la(a,
b,c,f,e);default:C.error("convertToFeatureSet:unknown-geometry",new A(`Unable to parse unknown geometry type '${d}'`)),a.length=0}return a}function na(a,b,d,c){a=a&&("coords"in a?a:a.geometry);if(!a)return null;switch(b){case "esriGeometryPoint":return b=K,d&&c?b=P:d?b=N:c&&(b=O),b(a);case "esriGeometryMultipoint":return S(a,d,c);case "esriGeometryPolyline":return V(a,d,c);case "esriGeometryPolygon":return Y(a,d,c);default:C.error("convertToGeometry:unknown-geometry",new A(`Unable to parse unknown geometry type '${b}'`))}}
function ba(a,b,d,c,f){a.length=0;switch(d){case "esriGeometryPoint":var e=K;c&&f?e=P:c?e=N:f&&(e=O);for(var h of b){const {geometry:g,attributes:k}=h;c=g?e(g):null;a.push({attributes:k,geometry:c})}break;case "esriGeometryMultipoint":return ka(a,b,c,f);case "esriGeometryPolyline":for(const g of b){const {geometry:k,attributes:l}=g;let m;k&&(m=V(k,c,f));a.push({attributes:l,geometry:m})}break;case "esriGeometryPolygon":for(e of b){const {geometry:g,attributes:k,centroid:l}=e;let m;g&&(m=Y(g,c,f));
l?(h=K(l),a.push({attributes:k,centroid:h,geometry:m})):a.push({attributes:k,geometry:m})}break;default:C.error("convertToFeatureSet:unknown-geometry",new A(`Unable to parse unknown geometry type '${d}'`))}return a}function ca(a,b,d,c,f,e,h=d,g=c){a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);if(!b||!b.coords.length)return null;f=da[f];const {coords:k,lengths:l}=b;b=u(d,c);const m=u(d&&h,c&&g);d=G(d,c,h,g);if(!l.length)return d(a.coords,k,0,0,I(e,k[0]),J(e,k[1])),a.lengths.length&&
(a.lengths.length=0),a.coords.length=b,a;let n,r=0,q,t=0;for(const x of l){if(x<f)continue;let w=0;q=t;g=c=I(e,k[r]);n=h=J(e,k[r+1]);d(a.coords,k,q,r,g,n);w++;r+=b;q+=m;for(let v=1;v<x;v++,r+=b)if(g=I(e,k[r]),n=J(e,k[r+1]),g!==c||n!==h)d(a.coords,k,q,r,g-c,n-h),q+=m,w++,c=g,h=n;w>=f&&(a.lengths.push(w),t=q)}a.coords.length=t;return a.coords.length?a:null}function ea(a,b,d,c,f,e,h){let g=c,k=0;for(let m=e+d;m<h;m+=d){{var l=b[m];const n=b[m+1],r=b[h],q=b[h+1];let t=b[e],x=b[e+1],w=r-t,v=q-x;if(0!==
w||0!==v){const z=((l-t)*w+(n-x)*v)/(w*w+v*v);1<z?(t=r,x=q):0<z&&(t+=w*z,x+=v*z)}w=l-t;v=n-x;l=w*w+v*v}l>g&&(k=m,g=l)}g>c&&(k-e>d&&ea(a,b,d,c,f,e,k),f(a,b,a.length,k,b[k],b[k+1]),h-k>d&&ea(a,b,d,c,f,k,h))}function fa(a,b,d,c,f){const {coords:e,lengths:h}=b,g=d?c?ha:H:c?H:ia;d=u(d,c);if(!e.length)return a!==b&&(a.lengths.length=0,a.coords.length=0),a;if(!h.length)return g(a.coords,e,0,0,L(f,e[0]),M(f,e[1])),a!==b&&(a.lengths.length=0,a.coords.length=d),a;const [k,l]=f.scale;c=0;for(let m=0;m<h.length;m++){const n=
h[m];a.lengths[m]=n;let r=L(f,e[c]),q=M(f,e[c+1]);g(a.coords,e,c,c,r,q);c+=d;for(let t=1;t<n;t++,c+=d)r+=e[c]*k,q-=e[c+1]*l,g(a.coords,e,c,c,r,q)}a!==b&&(a.lengths.length=h.length,a.coords.length=e.length);return a}function oa(a,b,d,c){let f=0,e=a[c*b],h=a[c*(b+1)];for(let g=1;g<d;g++){const k=e+a[c*(b+g)],l=h+a[c*(b+g)+1],m=(k-e)*(l+h);e=k;h=l;f+=m}return.5*f}const C=pa.getLogger("esri.tasks.support.optimizedFeatureSet"),da={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},
ia=(a,b,d,c,f,e)=>{a[d]=f;a[d+1]=e},H=(a,b,d,c,f,e)=>{a[d]=f;a[d+1]=e;a[d+2]=b[c+2]},ra=(a,b,d,c,f,e)=>{a[d]=f;a[d+1]=e;a[d+2]=b[c+3]},ha=(a,b,d,c,f,e)=>{a[d]=f;a[d+1]=e;a[d+2]=b[c+2];a[d+3]=b[c+3]},D=[],E=[];p.convertFromFeature=function(a,b,d,c,f){D[0]=a;[a]=aa(E,D,b,d,c,f);D.length=E.length=0;return a};p.convertFromFeatureSet=function(a,b){const d=new qa,{hasM:c,hasZ:f,features:e,objectIdFieldName:h,spatialReference:g,geometryType:k,exceededTransferLimit:l,transform:m,fields:n}=a;n&&(d.fields=
n);d.geometryType=k;d.objectIdFieldName=h||b;d.spatialReference=g;if(!d.objectIdFieldName)return C.error(new A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),d;e&&aa(d.features,e,k,f,c,d.objectIdFieldName);l&&(d.exceededTransferLimit=l);c&&(d.hasM=c);f&&(d.hasZ=f);m&&(d.transform=m);return d};p.convertFromFeatures=aa;p.convertFromGeometry=function(a,b,d){if(!a)return null;const c=new y;"hasZ"in a&&null==b&&(b=a.hasZ);"hasM"in a&&null==d&&(d=a.hasM);if(F.isPoint(a))return Q(null!=
b?b:null!=a.z,null!=d?d:null!=a.m)(c,a);if(F.isPolygon(a))return Z(c,a,b,d);if(F.isPolyline(a))return X(c,a,u(b,d));if(F.isMultipoint(a))return U(c,a,u(b,d));C.error("convertFromGeometry:unknown-geometry",new A(`Unable to parse unknown geometry type '${a}'`))};p.convertFromGraphics=function(a,b,d,c,f,e){const h=a.length;switch(d){case "esriGeometryPoint":R(a,b,c,f,e);break;case "esriGeometryMultipoint":T(a,b,c,f,e);break;case "esriGeometryPolyline":W(a,b,c,f,e);break;case "esriGeometryPolygon":la(a,
b,c,f,e);break;default:C.error("convertToFeatureSet:unknown-geometry",new A(`Unable to parse unknown geometry type '${d}'`))}for(c=0;c<b.length;c++)a[c+h].geometryType=d,a[c+h].insertAfter=b[c].insertAfter,a[c+h].groupId=b[c].groupId;return a};p.convertFromMultipoint=U;p.convertFromMultipointFeatures=T;p.convertFromNestedArray=ma;p.convertFromPoint=function(a,b,d=Q(null!=b.z,null!=b.m)){return d(a,b)};p.convertFromPointFeatures=R;p.convertFromPolygon=Z;p.convertFromPolyline=X;p.convertFromPolylineFeatures=
W;p.convertToFeature=function(a,b,d,c){E[0]=a;ba(D,E,b,d,c);a=D[0];D.length=E.length=0;return a};p.convertToFeatureSet=function(a){const {objectIdFieldName:b,spatialReference:d,transform:c,fields:f,hasM:e,hasZ:h,features:g,geometryType:k,exceededTransferLimit:l,uniqueIdField:m,queryGeometry:n,queryGeometryType:r}=a;a=ba([],g,k,h,e);const q=na(n,r,!1,!1);a={features:a,fields:f,geometryType:k,objectIdFieldName:b,spatialReference:d,uniqueIdField:m,queryGeometry:q};c&&(a.transform=c);l&&(a.exceededTransferLimit=
l);e&&(a.hasM=e);h&&(a.hasZ=h);return a};p.convertToFeatures=ba;p.convertToGeometry=na;p.convertToMultipoint=S;p.convertToMultipointFeatures=ka;p.convertToPoint=function(a,b,d){return a?b?d?P(a):N(a):d?O(a):K(a):null};p.convertToPolygon=Y;p.convertToPolyline=V;p.deltaDecodeGeometry=function(a,b){const d=a.clone(),c=a.coords;a=a.lengths;let f=0;for(let g=0;g<a.length;g++){const k=a[g];var e=c[b*f],h=c[b*f+1];for(let l=1;l<k;l++)e+=c[b*(f+l)],h+=c[b*(f+l)+1],d.coords[b*(f+l)]=e,d.coords[b*(f+l)+1]=
h;f+=k}return d};p.deltaEncodeGeometry=function(a,b){const d=a.clone(),c=a.coords;a=a.lengths;let f=0;for(let h=0;h<a.length;h++){const g=a[h];let k=c[b*f];var e=c[b*f+1];for(let l=1;l<g;l++){const m=c[b*(f+l)],n=c[b*(f+l)+1];e=n-e;d.coords[b*(f+l)]=m-k;d.coords[b*(f+l)+1]=e;k=m;e=n}f+=g}return d};p.generalizeOptimizedGeometry=function(a,b,d,c,f,e,h=d,g=c){a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);if(!b||!b.coords.length)return null;f=da[f];const {coords:k,lengths:l}=
b;b=u(d,c);const m=u(d&&h,c&&g);d=G(d,c,h,g);if(!l.length)return d(a.coords,k,0,0,k[0],k[1]),a.lengths.length&&(a.lengths.length=0),a.coords.length=b,a;c=0;e*=e;for(const n of l){if(n<f){c+=n*b;continue}h=a.coords.length/m;g=c;const r=c+(n-1)*b;d(a.coords,k,a.coords.length,g,k[g],k[g+1]);ea(a.coords,k,b,e,d,g,r);d(a.coords,k,a.coords.length,r,k[r],k[r+1]);g=a.coords.length/m-h;g>=f?a.lengths.push(g):a.coords.length=h*m;c+=n*b}return a.coords.length?a:null};p.getBoundsOptimizedGeometry=function(a,
b,d,c){if(!b||!b.coords||!b.coords.length)return null;d=u(d,c);let f=c=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;if(b&&b.coords){b=b.coords;for(let g=0;g<b.length;g+=d){const k=b[g],l=b[g+1];c=Math.min(c,k);e=Math.max(e,k);f=Math.min(f,l);h=Math.max(h,l)}}a[0]=c;a[1]=f;a[2]=e;a[3]=h;return a};p.getQuantizedArea=function(a,b){const {coords:d,lengths:c}=a;let f=a=0;for(let e=0;e<c.length;e++)f+=oa(d,a,c[e],b),a+=e;return Math.abs(f)};p.getQuantizedBoundsOptimizedGeometry=
function(a,b,d,c){d=u(d,c);const {lengths:f,coords:e}=b;c=b=Number.POSITIVE_INFINITY;let h=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY,k=0;for(const l of f){let m=e[k],n=e[k+1];b=Math.min(m,b);c=Math.min(n,c);h=Math.max(m,h);g=Math.max(n,g);k+=d;for(let r=1;r<l;r++,k+=d){const q=e[k],t=e[k+1];m+=q;n+=t;0>q&&(b=Math.min(b,m));0<q&&(h=Math.max(h,m));0>t?c=Math.min(c,n):0<t&&(g=Math.max(g,n))}}a[0]=b;a[1]=c;a[2]=h;a[3]=g;return a};p.getSignedQuantizedRingArea=oa;p.quantizeOptimizedFeatureSet=
function(a,b){const {geometryType:d,features:c,hasM:f,hasZ:e}=b;if(!a)return b;for(let h=0;h<c.length;h++){const g=c[h],k=g.weakClone();k.geometry=new y;ca(k.geometry,g.geometry,f,e,d,a);g.centroid&&(k.centroid=new y,ca(k.centroid,g.centroid,f,e,"esriGeometryPoint",a));c[h]=k}b.transform=a;return b};p.quantizeOptimizedGeometry=ca;p.quantizeX=I;p.quantizeY=J;p.removeCollinearVectices=function(a,b,d,c,f){if(!b||!b.coords||!b.coords.length)return null;d=da[d];const {coords:e,lengths:h}=b;b=G(c,f,c,f);
c=u(c,f);let g=f=0,k=0,l=0;for(const r of h){g=l;b(a.coords,e,g,f,e[f],e[f+1]);f+=c;var m=e[f];let q=e[f+1],t=m,x=q;var n=q/m;g+=c;b(a.coords,e,g,f,t,x);f+=c;for(let w=2;w<r;w++){m=e[f];q=e[f+1];const v=q/m,z=n===v||!isFinite(n)&&!isFinite(v);n=z&&isFinite(v)?0<=n&&0<=v||0>=n&&0>=v:0<=x&&0<=q||0>=x&&0>=q;z&&n?(t+=m,x+=q):(t=m,x=q,g+=c);b(a.coords,e,g,f,t,x);f+=c;n=v}g+=c;m=(g-l)/c;m>=d&&(a.lengths[k]=m,l=g,k++)}a.coords.length>l&&(a.coords.length=l);a.lengths.length>k&&(a.lengths.length=k);return a.coords.length&&
a.lengths.length?a:null};p.removeZMValues=function(a,b,d,c,f,e){const h=u(d,c);d=G(d,c,f,e);c=b.coords;a.coords.length=0;a.lengths.length=0;a.lengths.push(...b.lengths);for(b=0;b<c.length;b+=h)d(a.coords,c,a.coords.length,b,c[b],c[b+1]);return a};p.unquantizeOptimizedFeatureSet=function(a){const {transform:b,features:d,hasM:c,hasZ:f}=a;if(!b)return a;for(const e of d)e.geometry&&fa(e.geometry,e.geometry,c,f,b),e.centroid&&fa(e.centroid,e.centroid,c,f,b);a.transform=null;return a};p.unquantizeOptimizedGeometry=
fa;p.unquantizeX=L;p.unquantizeY=M;Object.defineProperty(p,"__esModule",{value:!0})});