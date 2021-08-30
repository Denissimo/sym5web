// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ./CloudRaster ./ImageAuxRaster ./ImageServerRaster ./MRFRaster ./TIFFRaster".split(" "),function(l,p,q,g,r,t,u){const b=new Map;b.set("CRF",{desc:"Cloud Raster Format",constructor:q});b.set("MRF",{desc:"Meta Raster Format",constructor:t});b.set("TIFF",{desc:"GeoTIFF",constructor:u});b.set("RasterTileServer",{desc:"Raster Tile Server",constructor:r});b.set("JPG",{desc:"JPG Raster Format",constructor:g});b.set("PNG",{desc:"PNG Raster Format",
constructor:g});b.set("GIF",{desc:"GIF Raster Format",constructor:g});b.set("BMP",{desc:"BMP Raster Format",constructor:g});return function(){function h(){}h.open=function(){var e=l._asyncToGenerator(function*(d){const {url:c,ioConfig:v,sourceJSON:w}=d;let a=d.datasetFormat;null==a&&c.lastIndexOf(".")&&(a=c.slice(c.lastIndexOf(".")+1).toUpperCase());if("OVR"===a||"TIF"===a)a="TIFF";else if("JPG"===a||"JPEG"===a||"JFIF"===a)a="JPG";-1<c.toLowerCase().indexOf("/imageserver")&&-1===c.toLowerCase().indexOf("/wcsserver")&&
(a="RasterTileServer");const x={bandIds:null,sampling:null},m={url:c,sourceJSON:w,datasetFormat:a,ioConfig:v||x};let k,f;if(this.supportedFormats.has(a))return k=b.get(a).constructor,f=new k(m),yield f.open({signal:d.signal}),f;if(a)throw new p("rasterfactory:open","not a supported format "+a);const y=Array.from(b.keys());let z=0;const n=function(){a=y[z++];if(!a)return null;k=b.get(a).constructor;f=new k(m);return f.open({signal:d.signal}).then(()=>f).catch(()=>n())};return n()});return function(d){return e.apply(this,
arguments)}}();h.register=function(e,d,c){b.has(e.toUpperCase())||b.set(e.toUpperCase(),{desc:d,constructor:c})};l._createClass(h,null,[{key:"supportedFormats",get:function(){const e=new Set;b.forEach((d,c)=>e.add(c));return e}}]);return h}()});