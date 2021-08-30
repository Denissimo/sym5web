// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(ca){function T(n){V[0]=n;return V[0]}const V=new Float32Array(1),N=T(3.4028234663852886E38);var da=T(Math.max(-N,Math.min(-Infinity,N)));ca.decode=function(n,l){l=l||{};var f=l.inputOffset||0;var k=l.encodedMaskData||null===l.encodedMaskData;var w=new Uint8Array(n,f,10);w=String.fromCharCode.apply(null,w);if("CntZImage"!=w.trim())throw"Unexpected file identifier string: "+w;f+=10;var a=new DataView(n,f,24);var L=a.getInt32(0,!0);var M=a.getInt32(4,!0);var z=a.getUint32(8,
!0);var t=a.getUint32(12,!0);var W=a.getFloat64(16,!0);f+=24;if(!k){a=new DataView(n,f,16);var c={};c.numBlocksY=a.getUint32(0,!0);c.numBlocksX=a.getUint32(4,!0);c.numBytes=a.getUint32(8,!0);c.maxValue=a.getFloat32(12,!0);f+=16;if(0<c.numBytes){k=new Uint8Array(Math.ceil(t*z/8));a=new DataView(n,f,c.numBytes);var p=a.getInt16(0,!0);var u=2;var D=0;do{if(0<p)for(;p--;)k[D++]=a.getUint8(u++);else{var G=a.getUint8(u++);for(p=-p;p--;)k[D++]=G}p=a.getInt16(u,!0);u+=2}while(u<c.numBytes);if(-32768!==p||
D<k.length)throw"Unexpected end of mask RLE encoding";c.bitset=k;f+=c.numBytes}else 0===(c.numBytes|c.numBlocksY|c.maxValue)&&(k=new Uint8Array(Math.ceil(t*z/8)),c.bitset=k)}a=new DataView(n,f,16);var C=k=G=D=u=p=void 0;p=a.getUint32(0,!0);u=a.getUint32(4,!0);D=a.getUint32(8,!0);G=a.getFloat32(12,!0);f+=16;C=u;k=p;C+=0<t%C?1:0;var A=k+(0<z%k?1:0);k=Array(C*A);for(var x=1E9,H=0,E=0;E<A;E++)for(var I=0;I<C;I++){var e=0;a=new DataView(n,f,Math.min(10,n.byteLength-f));var d={};k[H++]=d;var b=a.getUint8(0);
e++;d.encoding=b&63;if(3<d.encoding)throw"Invalid block encoding ("+d.encoding+")";if(2===d.encoding)f++,x=Math.min(x,0);else{if(0!==b&&2!==b){b>>=6;d.offsetType=b;if(2===b)d.offset=a.getInt8(1),e++;else if(1===b)d.offset=a.getInt16(1,!0),e+=2;else if(0===b)d.offset=a.getFloat32(1,!0),e+=4;else throw"Invalid block offset type";x=Math.min(d.offset,x);if(1===d.encoding)if(b=a.getUint8(e),e++,d.bitsPerPixel=b&63,b>>=6,d.numValidPixelsType=b,2===b)d.numValidPixels=a.getUint8(e),e++;else if(1===b)d.numValidPixels=
a.getUint16(e,!0),e+=2;else if(0===b)d.numValidPixels=a.getUint32(e,!0),e+=4;else throw"Invalid valid pixel count type";}f+=e;if(3!=d.encoding)if(0===d.encoding){a=(D-1)/4;if(a!==Math.floor(a))throw"uncompressed block has invalid length";e=new ArrayBuffer(4*a);b=new Uint8Array(e);b.set(new Uint8Array(n,f,4*a));e=new Float32Array(e);for(b=0;b<e.length;b++)x=Math.min(x,e[b]);d.rawData=e;f+=4*a}else 1===d.encoding&&(a=Math.ceil(d.numValidPixels*d.bitsPerPixel/8),e=new ArrayBuffer(4*Math.ceil(a/4)),b=
new Uint8Array(e),b.set(new Uint8Array(n,f,a)),d.stuffedData=new Uint32Array(e),f+=a)}}C=x;n=f;f=null!=l.noDataValue?T(Math.max(-N,Math.min(l.noDataValue,N))):da;A=l.encodedMaskData;b=l.returnMask;x=0;H=u;E=p;I=Math.floor(t/H);d=Math.floor(z/E);e=2*W;A=A||(c?c.bitset:null);var r;a=new (l.pixelType||Float32Array)(t*z);b&&A&&(r=new Uint8Array(t*z));b=new Float32Array(I*d);for(var m,g,O=0;O<=E;O++){var P=O!==E?d:z%E;if(0!==P)for(var Q=0;Q<=H;Q++){var F=Q!==H?I:t%H;if(0!==F){var h=O*t*d+Q*I,R=t-F,q=k[x],
y;if(2>q.encoding){if(0===q.encoding)var B=q.rawData;else{m=y=B=void 0;g=q.stuffedData;var J=q.bitsPerPixel,X=q.numValidPixels,Y=q.offset,Z=e,ea=b,aa=G,U=(1<<J)-1,ba=0,v=0,fa=Math.ceil((aa-Y)/Z);g[g.length-1]<<=8*(4*g.length-Math.ceil(J*X/8));for(m=0;m<X;m++)0===v&&(B=g[ba++],v=32),v>=J?(y=B>>>v-J&U,v-=J):(v=J-v,y=(B&U)<<v&U,B=g[ba++],v=32-v,y+=B>>>v),ea[m]=y<fa?Y+y*Z:aa;B=b}y=0}else var K=2===q.encoding?0:q.offset;if(A)for(g=0;g<P;g++){if(h&7){var S=A[h>>3];S<<=h&7}for(m=0;m<F;m++)h&7||(S=A[h>>3]),
S&128?(r&&(r[h]=1),a[h++]=2>q.encoding?B[y++]:K):(r&&(r[h]=0),a[h++]=f),S<<=1;h+=R}else if(2>q.encoding)for(g=0;g<P;g++){for(m=0;m<F;m++)a[h++]=B[y++];h+=R}else for(g=0;g<P;g++)if(a.fill)a.fill(K,h,h+F),h+=F+R;else{for(m=0;m<F;m++)a[h++]=K;h+=R}if(1===q.encoding&&y!==q.numValidPixels)throw"Block and Mask do not match";x++}}}K=r;r={width:t,height:z,pixelData:a,minValue:C,maxValue:G,noDataValue:f};K&&(r.maskData=K);l.returnEncodedMask&&c&&(r.encodedMaskData=c.bitset?c.bitset:null);if(l.returnFileInfo&&
(r.fileInfo={fileIdentifierString:w,fileVersion:L,imageType:M,height:z,width:t,maxZError:W,eofOffset:n,mask:c?{numBlocksX:c.numBlocksX,numBlocksY:c.numBlocksY,numBytes:c.numBytes,maxValue:c.maxValue}:null,pixels:{numBlocksX:u,numBlocksY:p,numBytes:D,maxValue:G,minValue:C,noDataValue:f}},l.computeUsedBitDepths)){l=r.fileInfo;c=u*p;w={};for(L=0;L<c;L++)M=k[L],0===M.encoding?w.float32=!0:1===M.encoding?w[M.bitsPerPixel]=!0:w[0]=!0;c=Object.keys(w);l.bitDepths=c}return r}});