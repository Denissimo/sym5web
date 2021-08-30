// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../RasterInfo ../RasterStorageInfo ./BaseRaster ./pamParser ../../../chunks/TiffDecoder ../rasterFormats/TiffTags ../rasterFunctions/pixelUtils ../rasterTransforms/PolynomialTransform ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(C,E,z,N,O,J,da,ea,fa,ha,S,T,U,V,P,F,K,W,X,Y,Q,G){const R=function(w,A){return(w=w.get(A))&&w.values},L=function(w,A){return(w=w.get(A))&&w.values[0]};z=function(w){function A(){var g=w.apply(this,arguments)||this;g._files=null;g._headerInfo=null;g._bufferSize=1048576;g.datasetFormat="TIFF";return g}C._inheritsLoose(A,w);var D=A.prototype;D.open=function(){var g=C._asyncToGenerator(function*(d){var b,c,f;yield this.init();var e=d?O.unwrap(d.signal):null,{data:a}=yield this.request(this.url,
{range:{from:0,to:this._bufferSize},responseType:"array-buffer",signal:e});if(!a)throw new N("tiffraster:open","failed to open url "+this.url);this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const {littleEndian:h,firstIFD:l,isBigTiff:k}=F.parseSignature(a),q=[];yield this.readIFDs(q,a,h,l,0,k?8:4,e);e=F.getImageInfo(q);const {width:m,height:n,tileWidth:t,tileHeight:r,planes:x,pixelType:u,compression:p,firstPyramidLevel:M,maximumPyramidLevel:B,pyramidBlockWidth:Z,pyramidBlockHeight:aa,
tileBoundary:ba,affine:v,metadata:H}=e;a=(null==(b=e.extent.spatialReference)?void 0:b.wkt)||(null==(c=e.extent.spatialReference)?void 0:c.wkid);b=P.parseSpatialReference(a);a=!1;null==b&&(a=!0,b=new Y({wkid:3857}));var I=(c=new Q({...e.extent,spatialReference:b}),new G({x:c.xmin,y:c.ymax,spatialReference:b}));I=new U({blockWidth:t,blockHeight:r,pyramidBlockWidth:Z,pyramidBlockHeight:aa,compression:p,origin:I,firstPyramidLevel:M,maximumPyramidLevel:B,blockBoundary:ba});const ca=new G({x:(c.xmax-c.xmin)/
m,y:(c.ymax-c.ymin)/n,spatialReference:b});a=new T({width:m,height:n,bandCount:x,pixelType:u,compression:p,pixelSize:ca,storageInfo:I,spatialReference:b,isPseudoSpatialReference:a,keyProperties:H?{BandProperties:H.bandProperties,DataType:H.dataType}:{},extent:c,statistics:H?H.statistics:null});null!=v&&v.length&&(a.nativeExtent=new Q({xmin:-.5,ymin:.5-n,xmax:m-.5,ymax:.5,spatialReference:b}),a.transform=new X({polynomialOrder:1,forwardCoefficients:[v[2]+v[0]/2,v[5]-v[3]/2,v[0],v[3],-v[1],-v[4]]}),
a.extent=a.transform.forwardTransform(a.nativeExtent),a.pixelSize=new G({x:(c.xmax-c.xmin)/m,y:(c.ymax-c.ymin)/n,spatialReference:b}),I.origin.x=-.5,I.origin.y=.5);if(null==(f=this.ioConfig.skipExtensions)||!f.includes("aux.xml"))if(d=yield this._fetchAuxiliaryData(d),null!=d){var y;a.statistics=null!=(y=d.statistics)?y:a.statistics;(a.histograms=d.histograms)&&!O.isSome(a.statistics)&&(a.statistics=W.estimateStatisticsFromHistograms(d.histograms));d.transform&&!v&&(a.transform=d.transform,a.nativeExtent=
a.extent,y=a.transform.forwardTransform(a.nativeExtent),a.pixelSize=new G({x:(y.xmax-y.xmin)/m,y:(y.ymax-y.ymin)/n,spatialReference:b}),a.extent=y);a.spatialReference||(a.spatialReference=d.spatialReference)}this._set("rasterInfo",a);this._headerInfo={littleEndian:h,isBigTiff:k,ifds:q,...e};if(!this._headerInfo.isSupported)throw new N("tiffraster:open","this tiff is not supported: "+this._headerInfo.message);this.updateTileInfo()});return function(d){return g.apply(this,arguments)}}();D.fetchRawTile=
function(){var g=C._asyncToGenerator(function*(d,b,c,f={}){var e;if(null==(e=this._headerInfo)||!e.isSupported||this.isBlockOutside(d,b,c))return null;b=this.getTileLocation(d,b,c);if(!b)return null;const {ranges:a,actualTileWidth:h,actualTileHeight:l,ifd:k}=b;b=a.map(t=>this.request(this.url,{range:t,responseType:"array-buffer",signal:f.signal}));b=yield Promise.all(b);c=b.map(t=>t.data.byteLength).reduce((t,r)=>t+r);c=1===b.length?b[0].data:new ArrayBuffer(c);e=[0];var q=[0];if(1<b.length){const t=
new Uint8Array(c);for(let r=0,x=0;r<b.length;r++){const u=b[r].data;t.set(new Uint8Array(u),x);e[r]=x;x+=u.byteLength;q[r]=u.byteLength}}const {blockWidth:m,blockHeight:n}=this.getBlockWidthHeight(d);d=yield this.decodePixelBlock(c,{format:"tiff",customOptions:{headerInfo:this._headerInfo,ifd:k,offsets:e,sizes:q},width:m,height:n,planes:null,pixelType:null});if(h!==m||l!==n)if(q=d.mask)for(b=0;b<n;b++)for(e=b*m,c=b<l?h:0;c<m;c++)q[e+c]=0;else for(q=new Uint8Array(m*n),d.mask=q,b=0;b<l;b++)for(e=b*
m,c=0;c<h;c++)q[e+c]=1;return d});return function(d,b,c){return g.apply(this,arguments)}}();D.readIFDs=function(){var g=C._asyncToGenerator(function*(d,b,c,f,e,a=4,h){if(!f)return null;if(f>=b.byteLength||0>f)b=(yield this.request(this.url,{range:{from:f+e,to:f+e+this._bufferSize},responseType:"array-buffer",signal:h})).data,e=f+e,f=0;f=yield this.readIFD(b,c,f,e,K.TIFF_TAGS,a,h);d.push(f.ifd);if(!f.nextIFD)return null;yield this.readIFDs(d,b,c,f.nextIFD-e,e,a,h)});return function(d,b,c,f,e){return g.apply(this,
arguments)}}();D.readIFD=function(){var g=C._asyncToGenerator(function*(d,b,c,f,e=K.TIFF_TAGS,a=4,h){if(!d)return null;c=F.parseIFD(d,b,c,f,e,a);if(c.success){const l=[];c.ifd.forEach(k=>{k.values||l.push(k)});0<l.length&&(a=l.map(k=>k.offlineOffsetSize),e=Math.min.apply(null,a.map(k=>k[0])),Math.min.apply(null,a.map(k=>k[0]+k[1]))-e<=this._bufferSize&&({data:a}=yield this.request(this.url,{range:{from:e,to:e+this._bufferSize},responseType:"array-buffer",signal:h}),d=a,f=e,l.forEach(k=>F.parseFieldValues(d,
b,k,f))));c.ifd.has("GEOKEYDIRECTORY")&&(e=c.ifd.get("GEOKEYDIRECTORY"),(a=e.values)&&4<a.length&&(a=a[0]+"."+a[1]+"."+a[2],h=yield this.readIFD(d,b,e.valueOffset+6-f,f,K.GEO_KEYS,2,h),e.data=h.ifd,e.data&&e.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,values:[a]})));return c}if(c.requiredBufferSize&&c.requiredBufferSize!==d.byteLength)return d=(yield this.request(this.url,{range:{from:f,to:f+c.requiredBufferSize+4},responseType:"array-buffer",signal:h})).data,d.byteLength<
c.requiredBufferSize?null:this.readIFD(d,b,0,f,K.TIFF_TAGS,4,h)});return function(d,b,c,f){return g.apply(this,arguments)}}();D.getTileLocation=function(g,d,b){const {firstPyramidLevel:c,blockBoundary:f}=this.rasterInfo.storageInfo;var e=0===g?0:g-(c-1);g=this._headerInfo.ifds[e];if(!g)return null;var a=F.isBSQConfig(g,this._headerInfo);const h=R(g,"TILEOFFSETS");if(void 0===h)return null;var l=R(g,"TILEBYTECOUNTS");const {minRow:k,minCol:q,maxRow:m,maxCol:n}=f[e];if(d>m||b>n||d<k||b<q)return null;
e=L(g,"IMAGEWIDTH");const t=L(g,"IMAGELENGTH"),r=L(g,"TILEWIDTH"),x=L(g,"TILELENGTH"),u=a?this.rasterInfo.bandCount:1,p=u*d*(n+1)+b,M=[{from:h[p],to:h[p+u-1]+l[p+u-1]-1}];if(a){a=!0;for(let B=0;B<u;B++)if(h[p+B]+l[p+B]!==h[p+B+1]){a=!1;break}if(!a)for(a=0;a<u;a++)M[a]={from:h[p+a],to:h[p+a]+l[p+a]-1}}l=l[p];return null==h[p]||null==l?null:{ranges:M,ifd:g,actualTileWidth:b===n?e%r:r,actualTileHeight:d===m?t%x:x}};D._fetchAuxiliaryData=function(){var g=C._asyncToGenerator(function*(d){try{const {data:b}=
yield this.request(this.url+".aux.xml",{responseType:"xml",signal:null==d?void 0:d.signal});return P.parsePAMInfo(b)}catch{return null}});return function(d){return g.apply(this,arguments)}}();return A}(V);E.__decorate([J.property()],z.prototype,"_files",void 0);E.__decorate([J.property()],z.prototype,"_headerInfo",void 0);E.__decorate([J.property()],z.prototype,"_bufferSize",void 0);E.__decorate([J.property({type:String,json:{write:!0}})],z.prototype,"datasetFormat",void 0);return z=E.__decorate([S.subclass("esri.layers.support.rasterDatasets.TIFFRaster")],
z)});