// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../PixelBlock ./ImageCanvasDecoder ./JpgPlus ../../../chunks/TiffDecoder ../../../chunks/LercCodec ../../../chunks/Zlib ./Raw ./utils".split(" "),function(A,F,x,y,K,L,C,M,N,O,G){function P(b,d){if(!G.isPlatformLittleEndian)throw new x("rasterCoded:decode","lerc decoder is not supported on big endian platform");const {width:m,height:l,pixelType:t}=d;var a=H(t);const f=a.pixelTypeCtor;d=null==d.noDataValue?a.noDataValue:d.noDataValue;
a=0;let e,c=0,h;const k=b.byteLength-10;for(;c<k;){var g=M.decode(b,{inputOffset:c,encodedMaskData:e,returnMask:0===a?!0:!1,returnEncodedMask:0===a?!0:!1,returnFileInfo:!0,pixelType:f,noDataValue:d});if(m&&l&&(g.width!==m||g.height!==l))throw new x("rasterCoded:decode","lerc decoded result has width or height different from specified in options");c=g.fileInfo.eofOffset;0===a&&(e=g.encodedMaskData,h=new y({width:g.width,height:g.height,pixels:[],pixelType:t,mask:g.maskData,statistics:[]}));a++;h.addData({pixels:g.pixelData,
statistics:{minValue:g.minValue,maxValue:g.maxValue,noDataValue:g.noDataValue}});10<k-c&&(g=String.fromCharCode.apply(null,new Uint8Array(b,c,10)),c+=-1<g.indexOf("CntZ")?g.indexOf("CntZ"):0)}return h}function I(b,d){if(!G.isPlatformLittleEndian)throw new x("rasterCoded:decode","lerc decoder is not supported on big endian platform");var m=0,l=d.offset||0,t=0;let a;let f;const e=d.eof||b.byteLength-10,c=[],{width:h,height:k}=d;for(d=0;l<e;){var g;var n=C.Lerc2Codec.decode(b,{inputOffset:l,maskData:a,
returnFileInfo:!0});if(h&&k&&(n.width!==h||n.height!==k))throw new x("rasterCoded:decode","lerc2 decoded result has width or height different from what's specified in options");l=n.fileInfo.eofOffset;a=n.maskData;0===m&&(t=n.fileInfo.numValidPixel,f=new y({width:n.width,height:n.height,pixels:[],pixelType:n.fileInfo.pixelType,mask:a,statistics:[]}));n.fileInfo.mask&&0<n.fileInfo.mask.numBytes&&d++;a&&c.push(a);if(1<n.dimCount&&(null==(g=n.pixelData)?void 0:g.length)===n.width*n.height*n.dimCount){var p,
q,r,u;n.pixelData=n.pixelData.slice(-n.width*n.height);const B=null==(p=n.dimStats)?void 0:null==(q=p.minValues)?void 0:q[n.dimCount-1],v=null==(r=n.dimStats)?void 0:null==(u=r.maxValues)?void 0:u[n.dimCount-1];null!=B&&null!=v&&(n.minValue=B,n.maxValue=v)}m++;f.addData({pixels:n.pixelData,statistics:{minValue:n.minValue,maxValue:n.maxValue}});10<e-l&&(n=String.fromCharCode.apply(null,new Uint8Array(b,l,10)),l+=-1<n.indexOf("Lerc")?n.indexOf("Lerc"):0)}l=m=b=0;if(1<d){l=f.width*f.height;a=new Uint8Array(l);
a.set(c[0]);for(b=1;b<c.length;b++)for(t=c[b],m=0;m<l;m++)a[m]&=t[m];for(m=t=0;m<l;m++)t+=a[m];f.mask=a}f.validPixelCount=t;return f}function Q(b,d){b=C.decode(b,d.pyramidLevel||0);b=new y({width:b.width,height:b.height,pixels:b.pixels,pixelType:b.pixelType.toLowerCase(),mask:b.mask,statistics:null});b.updateStatistics();return b}function R(b){b=L.decode(b);b=new y({width:b.width,height:b.height,pixels:b.pixels,pixelType:"U8",mask:b.mask,statistics:null});b.updateStatistics();return b}function S(b,
d){b=new Uint8Array(b);b=new T(b);const {width:m,height:l}=d;d=m*l;b=b.decode();let t=0;var a=0;let f;a=new Uint8Array(d);for(t=0;t<d;t++)a[t]=b[4*t+3];const e=new y({width:m,height:l,pixels:[],pixelType:"U8",mask:a,statistics:[]});for(t=0;3>t;t++){f=new Uint8Array(d);for(a=0;a<d;a++)f[a]=b[4*a+t];e.addData({pixels:f})}e.updateStatistics();return e}function U(b,d,m,l){return D.apply(this,arguments)}function D(){D=F._asyncToGenerator(function*(b,d,m,l){b=yield(new K).decode(b,{applyJpegMask:!1,format:d,
...m},l);b=new y(b);b.updateStatistics();return b});return D.apply(this,arguments)}function J(b){if(null==b)throw new x("rasterCodec:decode","parameter encodeddata is required.");b=new Uint8Array(b,0,10);let d="";255===b[0]&&216===b[1]?d="jpg":137===b[0]&&80===b[1]&&78===b[2]&&71===b[3]?d="png":67===b[0]&&110===b[1]&&116===b[2]&&90===b[3]&&73===b[4]&&109===b[5]&&97===b[6]&&103===b[7]&&101===b[8]&&32===b[9]?d="lerc":76===b[0]&&101===b[1]&&114===b[2]&&99===b[3]&&50===b[4]&&32===b[5]?d="lerc2":73===
b[0]&&73===b[1]&&42===b[2]&&0===b[3]||77===b[0]&&77===b[1]&&0===b[2]&&42===b[3]||73===b[0]&&73===b[1]&&43===b[2]&&0===b[3]||77===b[0]&&77===b[1]&&0===b[2]&&43===b[3]?d="tiff":71===b[0]&&73===b[1]&&70===b[2]?d="gif":66===b[0]&&77===b[1]?d="bmp":-1<String.fromCharCode.apply(null,b).toLowerCase().indexOf("error")&&(d="error");return d}function V(b){let d=null;switch(b){case "lerc":d=P;break;case "lerc2":d=I;break;case "jpg":d=R;break;case "png":d=S;break;case "bsq":case "bip":d=(m,l)=>{{const {pixelTypeCtor:t}=
H(l.pixelType),a=O.decode;m=a(m,{width:l.width,height:l.height,pixelType:t,format:b});l=new y({width:l.width,height:l.height,pixels:m.pixels,pixelType:l.pixelType,mask:m.mask,statistics:null});l.updateStatistics()}return l};break;case "tiff":d=Q;break;case "error":d=()=>{throw new x("rasterCodec:decode","input data contains error");};break;default:d=()=>{throw new x("rasterCodec:decode","unsupported raster format");}}return d}function H(b){let d=null,m=null;switch(b?b.toLowerCase():"f32"){case "u1":case "u2":case "u4":case "u8":m=
255;d=Uint8Array;break;case "u16":m=m||65535;d=Uint16Array;break;case "u32":m=m||2**32-1;d=Uint32Array;break;case "s8":m=m||-128;d=Int8Array;break;case "s16":m=m||-32768;d=Int16Array;break;case "s32":m=m||-(2**31);d=Int32Array;break;default:d=Float32Array}return{pixelTypeCtor:d,noDataValue:m}}function W(b,d=1){if(b){var {pixels:m,width:l,height:t,mask:a}=b;if(m&&0!==m.length){var f=m.length,e=l-1,c=t-1,h=[],k,g,n=y.getPixelArrayConstructor(b.pixelType);if(0===d){for(d=0;d<f;d++){var p=m[d];var q=
new n(e*c);for(k=0;k<c;k++){var r=k*l;for(g=0;g<e;g++)q[k*e+g]=p[r+g]}h.push(q)}if(a){var u=new Uint8Array(e*c);for(k=0;k<c;k++)for(r=k*l,g=0;g<e;g++)u[k*e+g]=a[r+g]}}else{for(d=0;d<f;d++){p=m[d];q=new n(e*c);for(k=0;k<c;k++)for(r=k*l,g=0;g<e;g++)q[k*e+g]=(p[r+g]+p[r+g+1]+p[r+l+g]+p[r+l+g+1])/4;h.push(q)}if(a)for(u=new Uint8Array(e*c),k=0;k<c;k++)for(r=k*l,g=0;g<e;g++)u[k*e+g]=Math.min.apply(null,[a[r+g],a[r+g+1],a[r+l+g],a[r+l+g+1]])}b.width=e;b.height=c;b.mask=u;b.pixels=h}}}function E(){E=F._asyncToGenerator(function*(b,
d={},m){if(null==b)throw new x("rasterCodec:decode","missing encodeddata parameter.");let l=d.format&&d.format.toLowerCase();if(!("bsq"!==l&&"bip"!==l||null!=d.width&&null!=d.height))throw new x("rasterCodec:decode","requires width and height in options parameter.");if("tiff"===l&&d.customOptions)return d=C.decodeTileOrStrip(b,d.customOptions),d=new y({width:d.width,height:d.height,pixels:d.pixels,pixelType:d.pixelType.toLowerCase(),mask:d.mask,statistics:null}),d.updateStatistics(),d;if(!l||"bsq"!==
l&&"bip"!==l)l=J(b);d.useCanvas&&X.has(l)?b=yield U(b,l,d,m):(m=V(l),d.isPoint&&(d={...d},d.width++,d.height++),b=m(b,d),d.isPoint&&W(b));return b});return E.apply(this,arguments)}var T=function(b){function d(a){var f,e;this.data=a;this.pos=8;this.palette=[];this.imgData=[];this.transparency={};this.animation=null;this.text={};for(e=null;;){var c=this.readUInt32();var h=a=void 0;a=[];for(h=0;4>h;++h)a.push(String.fromCharCode(this.data[this.pos++]));a=a.join("");switch(a){case "IHDR":this.width=this.readUInt32();
this.height=this.readUInt32();this.bits=this.data[this.pos++];this.colorType=this.data[this.pos++];this.compressionMethod=this.data[this.pos++];this.filterMethod=this.data[this.pos++];this.interlaceMethod=this.data[this.pos++];break;case "acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||Infinity,frames:[]};break;case "PLTE":this.palette=this.read(c);break;case "fcTL":e&&this.animation.frames.push(e);this.pos+=4;e={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),
yOffset:this.readUInt32()};a=this.readUInt16();c=this.readUInt16()||100;e.delay=1E3*a/c;e.disposeOp=this.data[this.pos++];e.blendOp=this.data[this.pos++];e.data=[];break;case "IDAT":case "fdAT":"fdAT"===a&&(this.pos+=4,c-=4);a=(null!=e?e.data:void 0)||this.imgData;for(h=0;0<=c?h<c:h>c;0<=c?++h:--h)a.push(this.data[this.pos++]);break;case "tRNS":this.transparency={};switch(this.colorType){case 3:this.transparency.indexed=this.read(c);c=255-this.transparency.indexed.length;if(0<c)for(a=0;0<=c?a<c:a>
c;0<=c?++a:--a)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(c)[0];break;case 2:this.transparency.rgb=this.read(c)}break;case "tEXt":h=this.read(c);c=h.indexOf(0);a=String.fromCharCode.apply(String,h.slice(0,c));this.text[a]=String.fromCharCode.apply(String,h.slice(c+1));break;case "IEND":e&&this.animation.frames.push(e);a:{switch(this.colorType){case 0:case 3:case 4:e=1;break a;case 2:case 6:e=3;break a}e=void 0}this.colors=e;this.hasAlphaChannel=4===(f=this.colorType)||
6===f;f=this.colors+(this.hasAlphaChannel?1:0);this.pixelBitlength=this.bits*f;a:{switch(this.colors){case 1:f="DeviceGray";break a;case 3:f="DeviceRGB";break a}f=void 0}this.colorSpace=f;this.imgData=new Uint8Array(this.imgData);return;default:this.pos+=c}this.pos+=4;if(this.pos>this.data.length)throw Error("Incomplete or corrupt PNG file");}}var m;d.load=function(a,f,e){"function"===typeof f&&(e=f);var c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(){var h=
new Uint8Array(c.response||c.mozResponseArrayBuffer);h=new d(h);"function"===typeof(null!=f?f.getContext:void 0)&&h.render(f);return"function"===typeof e?e(h):void 0};return c.send(null)};d.prototype.read=function(a){var f;var e=[];for(f=0;0<=a?f<a:f>a;0<=a?++f:--f)e.push(this.data[this.pos++]);return e};d.prototype.readUInt32=function(){var a=this.data[this.pos++]<<24;var f=this.data[this.pos++]<<16;var e=this.data[this.pos++]<<8;var c=this.data[this.pos++];return a|f|e|c};d.prototype.readUInt16=
function(){var a=this.data[this.pos++]<<8;var f=this.data[this.pos++];return a|f};d.prototype.decodePixels=function(a){var f,e,c,h,k,g,n,p;null==a&&(a=this.imgData);if(0===a.length)return new Uint8Array(0);a=new N.Zlib(a);a=a.getBytes();var q=this.pixelBitlength/8;var r=q*this.width;var u=new Uint8Array(r*this.height);var B=a.length;for(e=h=k=0;h<B;){switch(a[h++]){case 0:for(c=f=0;f<r;c=f+=1)u[e++]=a[h++];break;case 1:for(c=g=0;g<r;c=g+=1){f=a[h++];var v=c<q?0:u[e-q];u[e++]=(f+v)%256}break;case 2:for(c=
v=0;v<r;c=v+=1){f=a[h++];var w=(c-c%q)/q;g=k&&u[(k-1)*r+w*q+c%q];u[e++]=(g+f)%256}break;case 3:for(c=p=0;p<r;c=p+=1)f=a[h++],w=(c-c%q)/q,v=c<q?0:u[e-q],g=k&&u[(k-1)*r+w*q+c%q],u[e++]=(f+Math.floor((v+g)/2))%256;break;case 4:for(c=p=0;p<r;c=p+=1){f=a[h++];w=(c-c%q)/q;v=c<q?0:u[e-q];0===k?g=n=0:(g=u[(k-1)*r+w*q+c%q],n=w&&u[(k-1)*r+(w-1)*q+c%q]);var z=v+g-n;c=Math.abs(z-v);w=Math.abs(z-g);z=Math.abs(z-n);v=c<=w&&c<=z?v:w<=z?g:n;u[e++]=(f+v)%256}break;default:throw Error("Invalid filter algorithm: "+
a[h-1]);}k++}return u};d.prototype.decodePalette=function(){var a,f,e,c;var h=this.palette;var k=this.transparency.indexed||[];var g=new Uint8Array((k.length||0)+h.length);var n=0;h.length;var p=f=a=0;for(e=h.length;f<e;p=f+=3)g[n++]=h[p],g[n++]=h[p+1],g[n++]=h[p+2],g[n++]=null!=(c=k[a++])?c:255;return g};d.prototype.copyToImageData=function(a,f){var e,c;var h=this.colors;var k=null;var g=this.hasAlphaChannel;this.palette.length&&(k=null!=(e=this._decodedPalette)?e:this._decodedPalette=this.decodePalette(),
h=4,g=!0);a=a.data||a;var n=a.length;var p=k||f;e=c=0;if(1===h)for(;e<n;)h=k?4*f[e/4]:c,c=p[h++],a[e++]=c,a[e++]=c,a[e++]=c,a[e++]=g?p[h++]:this.transparency.grayscale&&this.transparency.grayscale===c?0:255,c=h;else for(;e<n;)h=k?4*f[e/4]:c,a[e++]=p[h++],a[e++]=p[h++],a[e++]=p[h++],a[e++]=g?p[h++]:this.transparency.rgb&&this.transparency.rgb[1]===p[h-3]&&this.transparency.rgb[3]===p[h-2]&&this.transparency.rgb[5]===p[h-1]?0:255,c=h};d.prototype.decode=function(){var a=new Uint8Array(this.width*this.height*
4);this.copyToImageData(a,this.decodePixels());return a};var l=(m=b.document&&b.document.createElement("canvas"))&&m.getContext("2d");var t=function(a){l.width=a.width;l.height=a.height;l.clearRect(0,0,a.width,a.height);l.putImageData(a,0,0);a=new Image;a.src=m.toDataURL();return a};d.prototype.decodeFrames=function(a){var f,e;if(this.animation){var c=this.animation.frames;var h=[];var k=f=0;for(e=c.length;f<e;k=++f){k=c[k];var g=a.createImageData(k.width,k.height);var n=this.decodePixels(new Uint8Array(k.data));
this.copyToImageData(g,n);k.imageData=g;h.push(k.image=t(g))}return h}};d.prototype.renderFrame=function(a,f){var e=this.animation.frames;var c=e[f];e=e[f-1];0===f&&a.clearRect(0,0,this.width,this.height);1===(null!=e?e.disposeOp:void 0)?a.clearRect(e.xOffset,e.yOffset,e.width,e.height):2===(null!=e?e.disposeOp:void 0)&&a.putImageData(e.imageData,e.xOffset,e.yOffset);0===c.blendOp&&a.clearRect(c.xOffset,c.yOffset,c.width,c.height);return a.drawImage(c.image,c.xOffset,c.yOffset)};d.prototype.animate=
function(a){var f,e=this;var c=0;var h=this.animation;var k=h.numFrames;var g=h.frames;var n=h.numPlays;return(f=function(){var p=c++%k;var q=g[p];e.renderFrame(a,p);if(1<k&&c/k<n)return e.animation._timeout=setTimeout(f,q.delay)})()};d.prototype.stopAnimation=function(){var a;return clearTimeout(null!=(a=this.animation)?a._timeout:void 0)};d.prototype.render=function(a){a._png&&a._png.stopAnimation();a._png=this;a.width=this.width;a.height=this.height;a=a.getContext("2d");if(this.animation)return this.decodeFrames(a),
this.animate(a);var f=a.createImageData(this.width,this.height);this.copyToImageData(f,this.decodePixels());return a.putImageData(f,0,0)};return d}(self);const X=new Set(["jpg","png","bmp","gif"]);A.decode=function(b){return E.apply(this,arguments)};A.decodeLerc2=I;A.getFormat=function(b){b=J(b);"lerc2"===b?b="lerc":"error"===b&&(b="");return b};Object.defineProperty(A,"__esModule",{value:!0})});