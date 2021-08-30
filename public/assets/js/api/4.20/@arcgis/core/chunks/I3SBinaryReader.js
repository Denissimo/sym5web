/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{clone as t}from"../core/lang.js";import{L as n}from"./Logger.js";const r=0,o=10,i=10,c=12,a=16;function u(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+r,o)),version:t.getUint16(n+i,true),checksum:t.getUint32(n+c,true)}}const s=0,l=4,f=8,d=16,g=24,w=32,y=40,b=48,p=56,h=64,U=72,m=80,v=84,C=88;function A(t){const n=new DataView(t,0);let r=0;const{identifier:o,version:i}=u(t,n,r);if(r+=a,"LEPCC     "!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const c=function(e,t){return{sizeLo:e.getUint32(t+s,!0),sizeHi:e.getUint32(t+l,!0),minX:e.getFloat64(t+f,!0),minY:e.getFloat64(t+d,!0),minZ:e.getFloat64(t+g,!0),maxX:e.getFloat64(t+w,!0),maxY:e.getFloat64(t+y,!0),maxZ:e.getFloat64(t+b,!0),errorX:e.getFloat64(t+p,!0),errorY:e.getFloat64(t+h,!0),errorZ:e.getFloat64(t+U,!0),count:e.getUint32(t+m,!0),reserved:e.getUint32(t+v,!0)}}(n,r);r+=C;if(c.sizeHi*2**32+c.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const A=new Float64Array(3*c.count),B=[],L=[],F=[],M=[];if(r=I(t,r,B),r=I(t,r,L),r=I(t,r,F),r=I(t,r,M),r!==t.byteLength)throw new e("lepcc-decode-error","Bad length");let T=0,x=0;for(let e=0;e<B.length;e++){x+=B[e];let t=0;for(let n=0;n<L[e];n++){t+=F[T];const e=M[T];A[3*T]=Math.min(c.maxX,c.minX+2*c.errorX*t),A[3*T+1]=Math.min(c.maxY,c.minY+2*c.errorY*x),A[3*T+2]=Math.min(c.maxZ,c.minZ+2*c.errorZ*e),T++}}return{errorX:c.errorX,errorY:c.errorY,errorZ:c.errorZ,result:A}}function I(e,t,n){const r=[];t=B(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=B(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function B(t,n,r){const o=new DataView(t,n),i=o.getUint8(0),c=31&i,a=!!(32&i),u=(192&i)>>6;let s=0;if(0===u)s=o.getUint32(1,true),n+=5;else if(1===u)s=o.getUint16(1,true),n+=3;else{if(2!==u)throw new e("lepcc-decode-error","Bad count type");s=o.getUint8(1),n+=2}if(a)throw new e("lepcc-decode-error","LUT not implemented");const l=Math.ceil(s*c/8),f=new Uint8Array(t,n,l);let d=0,g=0,w=0;const y=-1>>>32-c;for(let e=0;e<s;e++){for(;g<c;)d|=f[w]<<g,g+=8,w+=1;r[e]=d&y,d>>>=c,g-=c,g+c>32&&(d|=f[w-1]>>8-g)}return n+w}const L=0,F=4,M=8,T=12,x=14,O=15,k=16;function z(t){const n=new DataView(t,0);let r=0;const{identifier:o,version:i}=u(t,n,r);if(r+=a,"ClusterRGB"!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const c=function(e,t){return{sizeLo:e.getUint32(t+L,!0),sizeHi:e.getUint32(t+F,!0),count:e.getUint32(t+M,!0),colorMapCount:e.getUint16(t+T,!0),lookupMethod:e.getUint8(t+x),compressionMethod:e.getUint8(t+O)}}(n,r);r+=k;if(c.sizeHi*2**32+c.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+r!==t.byteLength||c.colorMapCount>256)throw new e("lepcc-decode-error","Bad count");const n=new Uint8Array(t,r,3*c.colorMapCount),o=new Uint8Array(t,r+3*c.colorMapCount,c.count),i=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++){const t=o[e];i[3*e]=n[3*t],i[3*e+1]=n[3*t+1],i[3*e+2]=n[3*t+2]}return i}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+r!==t.byteLength||0!==c.colorMapCount)throw new e("lepcc-decode-error","Bad count");return new Uint8Array(t,r).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(r+3!==t.byteLength||1!==c.colorMapCount)throw new e("lepcc-decode-error","Bad count");const o=n.getUint8(r),i=n.getUint8(r+1),a=n.getUint8(r+2),u=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++)u[3*e]=o,u[3*e+1]=i,u[3*e+2]=a;return u}throw new e("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}const D=0,E=4,P=8,S=12,V=14,R=15,j=16;function Y(t){const n=new DataView(t,0);let r=0;const{identifier:o,version:i}=u(t,n,r);if(r+=a,"Intensity "!==o)throw new e("lepcc-decode-error","Bad identifier");if(i>1)throw new e("lepcc-decode-error","Unknown version");const c=function(e,t){return{sizeLo:e.getUint32(t+D,!0),sizeHi:e.getUint32(t+E,!0),count:e.getUint32(t+P,!0),scaleFactor:e.getUint16(t+S,!0),bitsPerPoint:e.getUint8(t+V),reserved:e.getUint8(t+R)}}(n,r);r+=j;if(c.sizeHi*2**32+c.sizeLo!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const s=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+r!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const n=new Uint8Array(t,r,c.count);for(let e=0;e<c.count;e++)s[e]=n[e]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+r!==t.byteLength)throw new e("lepcc-decode-error","Bad size");const n=new Uint16Array(t,r,c.count);for(let e=0;e<c.count;e++)s[e]=n[e]*c.scaleFactor}else{const n=[];if(B(t,r,n)!==t.byteLength)throw new e("lepcc-decode-error","Bad size");for(let e=0;e<c.count;e++)s[e]=n[e]*c.scaleFactor}return s}const X=n.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function Z(t,n,r){let o="",i=0;for(;i<r;){const c=t[n+i];if(c<128)o+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=r)throw new e("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&c)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2}else if(c>=224&&c<240){if(i+2>=r)throw new e("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&c)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(c>=240&&c<248))throw new e("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new e("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&c)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function H(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],c=i.valueType||i.type,a=K[c];n.fields[i.property]=a(e,r),r+=J[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function _(e,t){return new(0,J[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function $(t,n,r){if(n!==t&&X.error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new e("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function N(e,t){const n=H(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:c},i=q[e]?q[e]:"_"+e;o.vertexAttributes[i]=n,r+=ee(n.valueType)*n.valuesPerElement*c}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=ee(n.valueType)*n.valuesPerElement*a}}const u=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&u){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:u};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:ee(n.valueType))*n.valuesPerElement*u}}return $(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function W(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?function(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?{isDraco:!1,isLegacy:!1,color:null!=(n=e).color,normal:null!=n.normal,uv0:null!=n.uv0,uvRegion:null!=n.uvRegion,featureIndex:null!=n.faceRange&&null!=n.featureId}:function(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0);return t}(t);var n}const q={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function G(n,r,o){if("lepcc-rgb"===n.encoding)return z(r);if("lepcc-intensity"===n.encoding)return Y(r);if(null!=n.encoding&&""!==n.encoding)throw new e("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");n["attributeByteCounts "]&&!n.attributeByteCounts&&(X.warn("Warning: Trailing space in 'attributeByteCounts '."),n.attributeByteCounts=n["attributeByteCounts "]),"ObjectIds"===n.ordering[0]&&n.hasOwnProperty("objectIds")&&(X.warn("Warning: Case error in objectIds"),n.ordering[0]="objectIds");const i=function(n,r,o){const i=null!=r.header?H(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let n=0;n<r.ordering.length;n++){const o=r.ordering[n],u=t(r[o]);if(u.count=i.fields.count,"String"===u.valueType){if(u.byteOffset=a,u.byteCount=i.fields[o+"ByteCount"],"UTF-8"!==u.encoding)throw new e("unsupported-encoding","Unsupported String encoding.",{encoding:u.encoding})}else{if(!Q(u.valueType))throw new e("unsupported-value-type","Unsupported binary valueType",{valueType:u.valueType});{const e=ee(u.valueType);a+=a%e!=0?e-a%e:0,u.byteOffset=a,u.byteCount=e*u.valuesPerElement*u.count}}a+=u.byteCount,c.entries[o]=u}return c.byteCount=a-c.byteOffset,c}(r,n,o);$(i.byteOffset+i.byteCount,r.byteLength,"attribute");const c=i.entries.attributeValues||i.entries.objectIds;if(c){if("String"===c.valueType){const t=i.entries.attributeByteCounts,n=_(r,t),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(r,c);return function(t,n,r){const o=[];let i,c,a=0;for(c=0;c<t;c+=1){if(i=n[c],i>0){if(o.push(Z(r,a,i-1)),0!==r[a+i-1])throw new e("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=i}return o}(t.count,n,o)}return _(r,c)}throw new e("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const J={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},K={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function Q(e){return J.hasOwnProperty(e)}function ee(e){return Q(e)?J[e].BYTES_PER_ELEMENT:0}export{_ as a,W as b,N as c,A as d,G as r};
