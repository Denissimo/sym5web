(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1801],{89623:(t,e,i)=>{"use strict";i.d(e,{a:()=>a,e:()=>s,m:()=>r});class n{constructor(t,e,i,n){this.semiMajorAxis=t,this.flattening=e,this.outerAtmosphereRimWidth=i;const s=1-this.flattening;this.semiMinorAxis=this.semiMajorAxis*s,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=n||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const s=new n(6378137,1/298.257223563,3e5,.006694379990137799),r=new n(3396190,1/169.8944472236118,23e4),a=new n(1737400,0,0)},97714:(t,e,i)=>{"use strict";i.d(e,{r:()=>r});var n=i(71552),s=i(34250);function r(t,e,i){let r,a;return void 0===e||Array.isArray(e)?(a=t,i=e,r=[void 0]):(a=e,r=Array.isArray(t)?t:[t]),(t,e)=>{const o=t.constructor.prototype;r.forEach((r=>{const h=(0,s.CJ)(t,r,a);h.read&&"object"!=typeof h.read&&(h.read={}),(0,n.s)("read.reader",o[e],h),i&&(h.read.source=(h.read.source||[]).concat(i))}))}}},21801:(t,e,i)=>{"use strict";i.d(e,{Z:()=>J,b:()=>w,c:()=>y,e:()=>x,g:()=>I,i:()=>G,p:()=>g,s:()=>O});var n=i(29768),s=i(76506),r=i(40642),a=i(34250),o=(i(91306),i(92143),i(17533)),h=i(73796),m=i(91597),l=i(60947),u=i(35132);i(71552),i(86656),i(22723),i(31450),i(81172),i(74673),i(21972),i(23639),i(91055),i(27794),i(6906),i(50406),i(60991),i(26341),i(97714),i(86787),i(2906),i(89623);const c=[0,0];function x(t,e){return d(t,e.x,e.y,e.z)}function y(t,e){if(!e.points||e.points.length)return!1;for(const i of e.points)if(!p(t,i))return!1;return!0}function p(t,e){return d(t,e[0],e[1])}function f(t,e){return d(t,e[0],e[1],e[2])}function d(t,e,i,n){return e>=t.xmin&&e<=t.xmax&&i>=t.ymin&&i<=t.ymax&&(null==n||!t.hasZ||n>=t.zmin&&n<=t.zmax)}function g(t,e){return c[1]=e.y,c[0]=e.x,b(t,c)}function b(t,e){return function(t,e){if(!t)return!1;if(function(t){return!Array.isArray(t[0][0])}(t))return M(!1,t,e);let i=!1;for(let n=0,s=t.length;n<s;n++)i=M(i,t[n],e);return i}(t.rings,e)}function M(t,e,i){const[n,s]=i;let r=t,a=0;for(let t=0,i=e.length;t<i;t++){a++,a===i&&(a=0);const[o,h]=e[t],[m,l]=e[a];(h<s&&l>=s||l<s&&h>=s)&&o+(s-h)/(l-h)*(m-o)<n&&(r=!r)}return r}function z(t,e){return x(t,e)}function w(t,e){const i=t.hasZ&&e.hasZ;let n,s,r;if(t.xmin<=e.xmin){if(n=e.xmin,t.xmax<n)return!1}else if(n=t.xmin,e.xmax<n)return!1;if(t.ymin<=e.ymin){if(s=e.ymin,t.ymax<s)return!1}else if(s=t.ymin,e.ymax<s)return!1;if(i&&e.hasZ)if(t.zmin<=e.zmin){if(r=e.zmin,t.zmax<r)return!1}else if(r=t.zmin,e.zmax<r)return!1;return!0}function _(t,e){const{points:i,hasZ:n}=e,s=n?f:p;for(const e of i)if(s(t,e))return!0;return!1}const R=[0,0],v=[0,0],C=[0,0],Z=[0,0],P=[R,v,C,Z],j=[[C,R],[R,v],[v,Z],[Z,C]];function N(t,e){R[0]=t.xmin,R[1]=t.ymax,v[0]=t.xmax,v[1]=t.ymax,C[0]=t.xmin,C[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;for(const t of P)if(b(e,t))return!0;for(const i of e.rings){if(!i.length)continue;let e=i[0];if(p(t,e))return!0;for(let n=1;n<i.length;n++){const s=i[n];if(p(t,s)||W(e,s,j))return!0;e=s}}return!1}function S(t,e){R[0]=t.xmin,R[1]=t.ymax,v[0]=t.xmax,v[1]=t.ymax,C[0]=t.xmin,C[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;const i=e.paths;for(const e of i){if(!i.length)continue;let n=e[0];if(p(t,n))return!0;for(let i=1;i<e.length;i++){const s=e[i];if(p(t,s)||W(n,s,j))return!0;n=s}}return!1}const A=[0,0];function G(t){for(let e=0;e<t.length;e++){const i=t[e];for(let n=0;n<i.length-1;n++){const s=i[n],r=i[n+1];for(let i=e+1;i<t.length;i++)for(let e=0;e<t[i].length-1;e++){const n=t[i][e],a=t[i][e+1];if(O(s,r,n,a,A)&&!(A[0]===s[0]&&A[1]===s[1]||A[0]===n[0]&&A[1]===n[1]||A[0]===r[0]&&A[1]===r[1]||A[0]===a[0]&&A[1]===a[1]))return!0}}const n=i.length;if(!(n<=4))for(let t=0;t<n-3;t++){let e=n-1;0===t&&(e=n-2);const s=i[t],r=i[t+1];for(let n=t+2;n<e;n++){const t=i[n],e=i[n+1];if(O(s,r,t,e,A)&&!(A[0]===s[0]&&A[1]===s[1]||A[0]===t[0]&&A[1]===t[1]||A[0]===r[0]&&A[1]===r[1]||A[0]===e[0]&&A[1]===e[1]))return!0}}}return!1}function W(t,e,i){for(let n=0;n<i.length;n++)if(O(t,e,i[n][0],i[n][1]))return!0;return!1}function O(t,e,i,n,s){const[r,a]=t,[o,h]=e,[m,l]=i,[u,c]=n,x=u-m,y=r-m,p=o-r,f=c-l,d=a-l,g=h-a,b=f*p-x*g;if(0===b)return!1;const M=(x*d-f*y)/b,z=(p*d-g*y)/b;return M>=0&&M<=1&&z>=0&&z<=1&&(s&&(s[0]=r+M*(o-r),s[1]=a+M*(h-a)),!0)}function I(t){switch(t){case"esriGeometryEnvelope":case"extent":return w;case"esriGeometryMultipoint":case"multipoint":return _;case"esriGeometryPoint":case"point":return z;case"esriGeometryPolygon":case"polygon":return N;case"esriGeometryPolyline":case"polyline":return S}}var k;function X(t,e,i){return null==e?i:null==i?e:t(e,i)}let q=k=class extends h.Z{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,e,i,n,s){return!(r=t)||"esri.geometry.SpatialReference"!==r.declaredClass&&null==r.wkid?"object"==typeof t?(t.spatialReference=null==t.spatialReference?l.Z.WGS84:t.spatialReference,t):{xmin:t,ymin:e,xmax:i,ymax:n,spatialReference:null==s?l.Z.WGS84:s}:{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0};var r}static fromBounds(t,e){return new k({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new m.Z({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const e=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-e.x,t.y-e.y,t.z-e.z):this.offset(t.x-e.x,t.y-e.y)}clone(){const t=new k;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;const e=this.spatialReference,i=t.spatialReference;return e&&i&&!e.equals(i)&&(0,u.Q8)(e,i)&&(t=e.isWebMercator?(0,u.$)(t):(0,u.Sx)(t,!0)),"point"===t.type?x(this,t):"extent"===t.type&&function(t,e){const{xmin:i,ymin:n,zmin:s,xmax:r,ymax:a,zmax:o}=e;return t.hasZ&&e.hasZ?d(t,i,n,s)&&d(t,i,a,s)&&d(t,r,a,s)&&d(t,r,n,s)&&d(t,i,n,o)&&d(t,i,a,o)&&d(t,r,a,o)&&d(t,r,n,o):d(t,i,n)&&d(t,i,a)&&d(t,r,a)&&d(t,r,n)}(this,t)}equals(t){if(!t)return!1;const e=this.spatialReference,i=t.spatialReference;return e&&i&&!e.equals(i)&&(0,u.Q8)(e,i)&&(t=e.isWebMercator?(0,u.$)(t):(0,u.Sx)(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const e=.5*(1-t),i=this.width*e,n=this.height*e;if(this.xmin+=i,this.ymin+=n,this.xmax-=i,this.ymax-=n,this.hasZ){const t=(this.zmax-this.zmin)*e;this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*e;this.mmin+=t,this.mmax-=t}return this}intersects(t){if((0,s.b)(t))return!1;"mesh"===t.type&&(t=t.extent);const e=this.spatialReference,i=t.spatialReference;return e&&i&&!e.equals(i)&&(0,u.Q8)(e,i)&&(t=e.isWebMercator?(0,u.$)(t):(0,u.Sx)(t,!0)),I(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,e,i){return this.xmin+=t,this.ymin+=e,this.xmax+=t,this.ymax+=e,null!=i&&(this.zmin+=i,this.zmax+=i),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=X(Math.min,this.zmin,t.zmin),this.zmax=X(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=X(Math.min,this.mmin,t.mmin),this.mmax=X(Math.max,this.mmax,t.mmax)),this}intersection(t){return this.intersects(t)?(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=X(Math.max,this.zmin,t.zmin),this.zmax=X(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=X(Math.max,this.mmin,t.mmin),this.mmax=X(Math.min,this.mmax,t.mmax)),this):null}toJSON(t){return this.write(null,t)}_shiftCM(t=(0,l.g)(this.spatialReference)){if(!t||!this.spatialReference)return this;const e=this.spatialReference,i=this._getCM(t);if(i){const n=e.isWebMercator?(0,u.Sx)(i):i;this.xmin-=i.x,this.xmax-=i.x,e.isWebMercator||(n.x=this._normalizeX(n.x,t).x),this.spatialReference=new l.Z((0,r.r)(e.isWGS84?t.altTemplate:t.wkTemplate,{Central_Meridian:n.x}))}return this}_getCM(t){let e=null;const[i,n]=t.valid,s=this.xmin,r=this.xmax;return s>=i&&s<=n&&r>=i&&r<=n||(e=this.center),e}_normalize(t,e,i){const n=this.spatialReference;if(!n)return this;if(!(i=i||(0,l.g)(n)))return this;const s=this._getParts(i).map((t=>t.extent));if(s.length<2)return s[0]||this;if(s.length>2)return t?this._shiftCM(i):this.set({xmin:i.valid[0],xmax:i.valid[1]});if(t)return this._shiftCM(i);if(e)return s;let r=!0,a=!0;return s.forEach((t=>{t.hasZ||(r=!1),t.hasM||(a=!1)})),{rings:s.map((t=>{const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r){const i=(t.zmax-t.zmin)/2;for(let t=0;t<e.length;t++)e[t].push(i)}if(a){const i=(t.mmax-t.mmin)/2;for(let t=0;t<e.length;t++)e[t].push(i)}return e})),hasZ:r,hasM:a,spatialReference:n}}_getParts(t){let e=this.cache._parts;if(!e){e=[];const{ymin:i,ymax:n,spatialReference:s}=this,r=this.width,a=this.xmin,o=this.xmax;let h;t=t||(0,l.g)(s);const[m,u]=t.valid;h=this._normalizeX(this.xmin,t);const c=h.x,x=h.frameId;h=this._normalizeX(this.xmax,t);const y=h.x,p=h.frameId,f=c===y&&r>0;if(r>2*u){const t=new k(a<o?c:y,i,u,n,s),r=new k(m,i,a<o?y:c,n,s),h=new k(0,i,u,n,s),l=new k(m,i,0,n,s),f=[],d=[];t.contains(h)&&f.push(x),t.contains(l)&&d.push(x),r.contains(h)&&f.push(p),r.contains(l)&&d.push(p);for(let t=x+1;t<p;t++)f.push(t),d.push(t);e.push({extent:t,frameIds:[x]},{extent:r,frameIds:[p]},{extent:h,frameIds:f},{extent:l,frameIds:d})}else c>y||f?e.push({extent:new k(c,i,u,n,s),frameIds:[x]},{extent:new k(m,i,y,n,s),frameIds:[p]}):e.push({extent:new k(c,i,y,n,s),frameIds:[x]});this.cache._parts=e}const i=this.hasZ,n=this.hasM;if(i||n){const t={};i&&(t.zmin=this.zmin,t.zmax=this.zmax),n&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let i=0;i<e.length;i++)e[i].extent.set(t)}return e}_normalizeX(t,e){const[i,n]=e.valid,s=2*n;let r,a=0;return t>n?(r=Math.ceil(Math.abs(t-n)/s),t-=r*s,a=r):t<i&&(r=Math.ceil(Math.abs(t-i)/s),t+=r*s,a=-r),{x:t,frameId:a}}};(0,n._)([(0,a.Cb)({readOnly:!0})],q.prototype,"cache",null),(0,n._)([(0,a.Cb)({readOnly:!0})],q.prototype,"center",null),(0,n._)([(0,a.Cb)({readOnly:!0})],q.prototype,"extent",null),(0,n._)([(0,a.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasM",null),(0,n._)([(0,a.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasZ",null),(0,n._)([(0,a.Cb)({readOnly:!0})],q.prototype,"height",null),(0,n._)([(0,a.Cb)({readOnly:!0})],q.prototype,"width",null),(0,n._)([(0,a.Cb)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],q.prototype,"xmin",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0}})],q.prototype,"ymin",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmin",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmin",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0}})],q.prototype,"xmax",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0}})],q.prototype,"ymax",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmax",void 0),(0,n._)([(0,a.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmax",void 0),q=k=(0,n._)([(0,o.j)("esri.geometry.Extent")],q),q.prototype.toJSON.isDefaultToJSON=!0;const J=q},73796:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var n=i(29768),s=i(74673),r=i(34250),a=(i(76506),i(91306),i(92143),i(97714)),o=i(17533),h=i(60947);i(21972),i(23639),i(86656),i(22723),i(91055),i(27794),i(6906),i(50406),i(60991),i(81172),i(71552),i(31450),i(40642),i(26341),i(2906);let m=class extends s.a{constructor(...t){super(...t),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=h.Z.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(t,e){if(t instanceof h.Z)return t;if(null!=t){const i=new h.Z;return i.read(t,e),i}return t}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(t){return this.cache[t]}setCacheValue(t,e){this.cache[t]=e}};(0,n._)([(0,r.Cb)()],m.prototype,"type",void 0),(0,n._)([(0,r.Cb)({readOnly:!0})],m.prototype,"cache",null),(0,n._)([(0,r.Cb)({readOnly:!0})],m.prototype,"extent",null),(0,n._)([(0,r.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasM",void 0),(0,n._)([(0,r.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasZ",void 0),(0,n._)([(0,r.Cb)({type:h.Z,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,n._)([(0,a.r)("spatialReference")],m.prototype,"readSpatialReference",null),m=(0,n._)([(0,o.j)("esri.geometry.Geometry")],m);const l=m},91597:(t,e,i)=>{"use strict";i.d(e,{Z:()=>b});var n,s=i(29768),r=i(92143),a=i(34250),o=(i(76506),i(86787)),h=i(97714),m=i(17533),l=i(2906),u=i(91306),c=i(73796),x=i(60947),y=i(35132);i(31450),i(71552),i(40642),i(86656),i(22723),i(81172),i(74673),i(21972),i(23639),i(91055),i(27794),i(6906),i(50406),i(60991),i(26341),i(89623);const p=[0,0];function f(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}const d=r.L.getLogger("esri.geometry.Point");let g=n=class extends c.Z{constructor(...t){super(...t),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}static copy(t,e){e._set("x",t._get("x")),e._set("y",t._get("y")),e._set("z",t._get("z")),e._set("m",t._get("m"));const i=t._get("spatialReference");e._set("spatialReference",Object.isFrozen(i)?i:i.clone())}normalizeCtorArgs(t,e,i,n,s){let r;if(Array.isArray(t))r=t,s=e,t=r[0],e=r[1],i=r[2],n=r[3];else if(t&&"object"==typeof t){if(r=t,t=null!=r.x?r.x:r.longitude,e=null!=r.y?r.y:r.latitude,i=r.z,n=r.m,(s=r.spatialReference)&&"esri.geometry.SpatialReference"!==s.declaredClass&&(s=new x.Z(s)),null!=r.longitude||null!=r.latitude)if(null==r.longitude)d.warn(".longitude=","Latitude was defined without longitude");else if(null==r.latitude)d.warn(".latitude=","Longitude was defined without latitude");else if(!r.declaredClass&&s&&s.isWebMercator){const i=(0,y.hG)(r.longitude,r.latitude,p);t=i[0],e=i[1]}}else f(i)?(s=i,i=null):f(n)&&(s=n,n=null);const a={x:t,y:e};return null==a.x&&null!=a.y?d.warn(".y=","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&d.warn(".x=","X coordinate was defined without a Y coordinate"),null!=s&&(a.spatialReference=s),null!=i&&(a.z=i),null!=n&&(a.m=n),a}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(t){t!==(void 0!==this._get("m"))&&(this._set("m",t?0:void 0),this._set("hasM",t))}get hasZ(){return void 0!==this.z}set hasZ(t){t!==(void 0!==this._get("z"))&&(this._set("z",t?0:void 0),this._set("hasZ",t))}get latitude(){const{spatialReference:t,x:e,y:i}=this;if(t){if(t.isWebMercator)return(0,y.R6)(e,i,p)[1];if(t.isGeographic)return i}return null}set latitude(t){const{spatialReference:e,x:i}=this;e&&(e.isWebMercator?this._set("y",(0,y.hG)(i,t,p)[1]):e.isGeographic&&this._set("y",t),this._set("latitude",t))}get longitude(){const{x:t,y:e,spatialReference:i}=this;if(i){if(i.isWebMercator)return(0,y.R6)(t,e,p)[0];if(i.isGeographic)return t}return NaN}set longitude(t){const{y:e,spatialReference:i}=this;i&&(i.isWebMercator?this._set("x",(0,y.hG)(t,e,p)[0]):i.isGeographic&&this._set("x",t),this._set("longitude",t))}writeX(t,e,i){e[i]=isNaN(t)?"NaN":t}readX(t){return"string"==typeof t?NaN:t}clone(){const t=new n;return t.x=this.x,t.y=this.y,t.z=this.z,t.m=this.m,t.spatialReference=this.spatialReference,t}copy(t){return n.copy(t,this),this}equals(t){if(!t)return!1;const{x:e,y:i,z:n,m:s,spatialReference:r}=this,{z:a,m:o}=t;let{x:h,y:m,spatialReference:l}=t;if(!r.equals(l))if(r.isWebMercator&&l.isWGS84)[h,m]=(0,y.hG)(h,m),l=r;else{if(!r.isWGS84||!l.isWebMercator)return!1;[h,m]=(0,y.R6)(h,m),l=r}return e===h&&i===m&&n===a&&s===o&&r.wkid===l.wkid}offset(t,e,i){return function(t,e,i,n){var s;return t.x=t.x+e,t.y=t.y+i,null!=n&&(t.z=(null!=(s=t.z)?s:0)+n),t}(this,t,e,i)}normalize(){if(!this.spatialReference)return this;const t=(0,x.g)(this.spatialReference);if(!t)return this;let e=this.x;const[i,n]=t.valid,s=2*n;let r;return e>n?(r=Math.ceil(Math.abs(e-n)/s),e-=r*s):e<i&&(r=Math.ceil(Math.abs(e-i)/s),e+=r*s),this._set("x",e),this}distance(t){return function(t,e){const i=t.x-e.x,n=t.y-e.y,s=t.hasZ&&e.hasZ?t.z-e.z:0;return Math.sqrt(i*i+n*n+s*s)}(this,t)}toArray(){const t=this.hasZ,e=this.hasM;return t&&e?[this.x,this.y,this.z,this.m]:t?[this.x,this.y,this.z]:e?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(t){return this.write(null,t)}};(0,s._)([(0,a.Cb)({readOnly:!0})],g.prototype,"cache",null),(0,s._)([(0,a.Cb)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],g.prototype,"hasM",null),(0,s._)([(0,a.Cb)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],g.prototype,"hasZ",null),(0,s._)([(0,a.Cb)({type:Number})],g.prototype,"latitude",null),(0,s._)([(0,a.Cb)({type:Number})],g.prototype,"longitude",null),(0,s._)([(0,a.Cb)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),(0,o.p)((t=>isNaN(t)?t:(0,u.l)(t)))],g.prototype,"x",void 0),(0,s._)([(0,l.w)("x")],g.prototype,"writeX",null),(0,s._)([(0,h.r)("x")],g.prototype,"readX",null),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],g.prototype,"y",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],g.prototype,"z",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],g.prototype,"m",void 0),g=n=(0,s._)([(0,m.j)("esri.geometry.Point")],g),g.prototype.toJSON.isDefaultToJSON=!0;const b=g},35132:(t,e,i)=>{"use strict";i.d(e,{Q8:()=>c,$:()=>f,hG:()=>y,iV:()=>x,Sx:()=>d,R6:()=>p,mZ:()=>h});var n=i(76506),s=i(60947),r=i(89623);function a(t){return 57.29577951308232*t}function o(t){return.017453292519943*t}function h(t){return Math.PI/2-2*Math.atan(Math.exp(-1*t/r.e.radius))}function m(t){return null!=t.wkid||null!=t.wkt}i(74673),i(21972),i(23639),i(92143),i(31450),i(71552),i(40642),i(34250),i(91306),i(86656),i(22723),i(91055),i(17533),i(81172),i(27794),i(6906),i(50406),i(60991),i(26341),i(2906);const l=[0,0];function u(t,e,i,n,s){const r=t,a=s;if(a.spatialReference=i,"x"in r&&"x"in a)[a.x,a.y]=e(r.x,r.y,l,n);else if("xmin"in r&&"xmin"in a)[a.xmin,a.ymin]=e(r.xmin,r.ymin,l,n),[a.xmax,a.ymax]=e(r.xmax,r.ymax,l,n);else if("paths"in r&&"paths"in a||"rings"in r&&"rings"in a){const t="paths"in r?r.paths:r.rings,i=[];let s;for(let r=0;r<t.length;r++){const a=t[r];s=[],i.push(s);for(let t=0;t<a.length;t++)s.push(e(a[t][0],a[t][1],[0,0],n)),a[t].length>2&&s[t].push(a[t][2]),a[t].length>3&&s[t].push(a[t][3])}"paths"in a?a.paths=i:a.rings=i}else if("points"in r&&"points"in a){const t=r.points,i=[];for(let s=0;s<t.length;s++)i[s]=e(t[s][0],t[s][1],[0,0],n),t[s].length>2&&i[s].push(t[s][2]),t[s].length>3&&i[s].push(t[s][3]);a.points=i}return s}function c(t,e){const i=t&&(m(t)?t:t.spatialReference),n=e&&(m(e)?e:e.spatialReference);return!(t&&"type"in t&&"mesh"===t.type||e&&"type"in e&&"mesh"===e.type||!i||!n)&&(!!(0,s.e)(n,i)||(0,s.i)(n)&&(0,s.a)(i)||(0,s.i)(i)&&(0,s.a)(n))}function x(t,e){const i=t&&t.spatialReference,r=e&&(m(e)?e:e.spatialReference);return c(i,r)?(0,s.e)(i,r)?(0,n.d9)(t):(0,s.i)(r)?u(t,y,s.Z.WebMercator,!1,(0,n.d9)(t)):(0,s.a)(r)?u(t,p,s.Z.WGS84,!1,(0,n.d9)(t)):null:null}function y(t,e,i=[0,0]){e>89.99999?e=89.99999:e<-89.99999&&(e=-89.99999);const n=o(e);return i[0]=o(t)*r.e.radius,i[1]=r.e.halfSemiMajorAxis*Math.log((1+Math.sin(n))/(1-Math.sin(n))),i}function p(t,e,i=[0,0],n=!1){const s=a(t/r.e.radius);return i[0]=n?s:s-360*Math.floor((s+180)/360),i[1]=a(Math.PI/2-2*Math.atan(Math.exp(-1*e/r.e.radius))),i}function f(t,e=!1,i=(0,n.d9)(t)){return u(t,y,s.Z.WebMercator,e,i)}function d(t,e=!1,i=(0,n.d9)(t)){return u(t,p,s.Z.WGS84,e,i)}}}]);