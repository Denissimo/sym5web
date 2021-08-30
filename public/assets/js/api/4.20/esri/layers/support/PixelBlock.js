// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Error ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(z,q,p,A,B,C,D,E,t,F,H,G){var u;const v=D.getLogger("esri.layers.support.PixelBlock");p=u=function(y){function w(a){a=y.call(this,a)||this;a.width=null;
a.height=null;a.pixelType="f32";a.validPixelCount=null;a.mask=null;a.maskIsAlpha=!1;a.pixels=null;a.statistics=null;return a}z._inheritsLoose(w,y);w.createEmptyBand=function(a,b){return new (u.getPixelArrayConstructor(a))(b)};w.getPixelArrayConstructor=function(a){let b;switch(a){case "u1":case "u2":case "u4":case "u8":b=Uint8Array;break;case "u16":b=Uint16Array;break;case "u32":b=Uint32Array;break;case "s8":b=Int8Array;break;case "s16":b=Int16Array;break;case "s32":b=Int32Array;break;case "u32":b=
Uint32Array;break;case "f32":b=Float32Array;break;case "f64":b=Float64Array;break;case "c64":case "c128":case "unknown":b=Float32Array}return b};var m=w.prototype;m.castPixelType=function(a){if(!a)return"f32";a=a.toLowerCase();-1<["u1","u2","u4"].indexOf(a)?a="u8":-1==="unknown u8 s8 u16 s16 u32 s32 f32 f64".split(" ").indexOf(a)&&(a="f32");return a};m.getPlaneCount=function(){return this.pixels&&this.pixels.length};m.addData=function(a){if(!a.pixels||a.pixels.length!==this.width*this.height)throw new A("pixelblock:invalid-or-missing-pixels",
"add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]);this.statistics||(this.statistics=[]);this.pixels.push(a.pixels);this.statistics.push(a.statistics||{minValue:null,maxValue:null})};m.getAsRGBA=function(){const a=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case "s8":case "s16":case "u16":case "s32":case "u32":case "f32":case "f64":this._fillFromNon8Bit(a);break;default:this._fillFrom8Bit(a)}return new Uint8ClampedArray(a)};
m.getAsRGBAFloat=function(){const a=new Float32Array(this.width*this.height*4);this._fillFrom32Bit(a);return a};m.updateStatistics=function(){this.statistics=this.pixels.map(g=>this._calculateBandStatistics(g,this.mask));const a=this.mask;let b=0;if(a)for(let g=0;g<a.length;g++)a[g]&&b++;else b=this.width*this.height;this.validPixelCount=b};m.clamp=function(a){if(a&&"f64"!==a&&"f32"!==a){switch(a){case "u8":var b=[0,255];break;case "u16":b=[0,65535];break;case "u32":b=[0,4294967295];break;case "s8":b=
[-128,127];break;case "s16":b=[-32768,32767];break;case "s32":b=[-2147483648,2147483647];break;default:b=[-3.4*1E39,3.4*1E39]}var [g,e]=b;b=this.pixels;var f=this.width*this.height,d=b.length,c=[];for(let r=0;r<d;r++){var k=u.createEmptyBand(a,f);var l=b[r];for(let n=0;n<f;n++){var h=l[n];k[n]=h>e?e:h<g?g:h}c.push(k)}this.pixels=c;this.pixelType=a}};m.extractBands=function(a){if(E.isNone(a)||0===a.length||null==this.pixels||0===this.pixels.length)return this;var b=this.pixels.length;const g=a.some(e=>
e>=this.pixels.length);b=b===a.length&&!a.some((e,f)=>e!==f);return g||b?this:new u({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:a.map(e=>this.pixels[e]),statistics:this.statistics&&a.map(e=>this.statistics[e])})};m.clone=function(){const a=new u({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(a.mask=
this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));let b;const g=u.getPixelArrayConstructor(this.pixelType);if(this.pixels&&0<this.pixels.length){a.pixels=[];const e=this.pixels[0].slice;for(b=0;b<this.pixels.length;b++)a.pixels[b]=e?this.pixels[b].slice(0,this.pixels[b].length):new g(this.pixels[b])}if(this.statistics)for(a.statistics=[],b=0;b<this.statistics.length;b++)a.statistics[b]=C.clone(this.statistics[b]);return a};m._fillFrom8Bit=function(a){const {mask:b,maskIsAlpha:g,
pixels:e}=this;if(a&&e&&e.length){var f,d;var c=f=d=e[0];3<=e.length?(f=e[1],d=e[2]):2===e.length&&(f=e[1]);var k=new Uint32Array(a),l=this.width*this.height;if(c.length!==l)v.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");else if(b&&b.length===l)if(g)for(a=0;a<l;a++)b[a]&&(k[a]=b[a]<<24|d[a]<<16|f[a]<<8|c[a]);else for(a=0;a<l;a++)b[a]&&(k[a]=-16777216|d[a]<<16|f[a]<<8|c[a]);else for(a=0;a<l;a++)k[a]=-16777216|d[a]<<16|f[a]<<8|c[a]}else v.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};
m._fillFromNon8Bit=function(a){const {pixels:b,mask:g,statistics:e}=this;if(a&&b&&b.length){var f=this.pixelType,d=1,c=0;d=1;e&&0<e.length?(c=e.map(n=>n.minValue).reduce((n,x)=>Math.min(n,x)),d=e.map(n=>n.maxValue-n.minValue).reduce((n,x)=>Math.max(n,x)),d=255/d):(d=255,"s8"===f?(c=-128,d=127):"u16"===f?d=65535:"s16"===f?(c=-32768,d=32767):"u32"===f?d=4294967295:"s32"===f?(c=-2147483648,d=2147483647):"f32"===f?(c=-3.4*1E39,d=3.4*1E39):"f64"===f&&(c=-Number.MAX_VALUE,d=Number.MAX_VALUE),d=255/(d-c));
a=new Uint32Array(a);f=this.width*this.height;var k,l,h;var r=k=l=b[0];if(r.length!==f)return v.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(2<=b.length)if(k=b[1],3<=b.length&&(l=b[2]),g&&g.length===f)for(h=0;h<f;h++)g[h]&&(a[h]=-16777216|(l[h]-c)*d<<16|(k[h]-c)*d<<8|(r[h]-c)*d);else for(h=0;h<f;h++)a[h]=-16777216|(l[h]-c)*d<<16|(k[h]-c)*d<<8|(r[h]-c)*d;else if(g&&g.length===f)for(h=0;h<f;h++)k=(r[h]-c)*d,g[h]&&(a[h]=-16777216|k<<16|k<<8|k);else for(h=0;h<f;h++)k=
(r[h]-c)*d,a[h]=-16777216|k<<16|k<<8|k}else v.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};m._fillFrom32Bit=function(a){const {pixels:b,mask:g}=this;if(!a||!b||!b.length)return v.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let e,f,d,c;e=f=d=b[0];3<=b.length?(f=b[1],d=b[2]):2===b.length&&(f=b[1]);const k=this.width*this.height;if(e.length!==k)return v.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");
let l=0;if(g&&g.length===k)for(c=0;c<k;c++)a[l++]=e[c],a[l++]=f[c],a[l++]=d[c],a[l++]=g[c]&1;else for(c=0;c<k;c++)a[l++]=e[c],a[l++]=f[c],a[l++]=d[c],a[l++]=1};m._calculateBandStatistics=function(a,b){let g=Infinity,e=-Infinity;const f=a.length;let d,c=0;if(b)for(d=0;d<f;d++)b[d]&&(c=a[d],g=c<g?c:g,e=c>e?c:e);else for(d=0;d<f;d++)c=a[d],g=c<g?c:g,e=c>e?c:e;return{minValue:g,maxValue:e}};return w}(B.JSONSupport);q.__decorate([t.property({json:{write:!0}})],p.prototype,"width",void 0);q.__decorate([t.property({json:{write:!0}})],
p.prototype,"height",void 0);q.__decorate([t.property({json:{write:!0}})],p.prototype,"pixelType",void 0);q.__decorate([F.cast("pixelType")],p.prototype,"castPixelType",null);q.__decorate([t.property({json:{write:!0}})],p.prototype,"validPixelCount",void 0);q.__decorate([t.property({json:{write:!0}})],p.prototype,"mask",void 0);q.__decorate([t.property({json:{write:!0}})],p.prototype,"maskIsAlpha",void 0);q.__decorate([t.property({json:{write:!0}})],p.prototype,"pixels",void 0);q.__decorate([t.property({json:{write:!0}})],
p.prototype,"statistics",void 0);return p=u=q.__decorate([G.subclass("esri.layers.support.PixelBlock")],p)});