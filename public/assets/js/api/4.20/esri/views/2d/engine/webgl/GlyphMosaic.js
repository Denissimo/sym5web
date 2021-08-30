// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/promiseUtils ./Rect ./RectangleBinPack ../../../webgl/Texture".split(" "),function(m,r,t,n,p,u){function v(h){const d=new Set;for(const b of h)d.add(Math.floor(b/256));return d}function w(h,d,b){h.has(d)||h.set(d,b().then(()=>{h.delete(d)}).catch(a=>{h.delete(d);t.throwIfNotAbortError(a)}));return h.get(d)}return function(){function h(b,a,c){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=
0;this._glyphCache={};this._textures=[];this._rangePromises=new Map;this.width=b;this.height=a;this._glyphSource=c;this._binPack=new p(b-4,a-4);this._glyphData.push(new Uint8Array(b*a));this._dirties.push(!0);this._textures.push(null);this._initDecorationGlyph()}var d=h.prototype;d.dispose=function(){this._binPack=null;for(const b of this._textures)b&&b.dispose();this._textures.length=0;this._glyphData.length=0};d._initDecorationGlyph=function(){var b=[117,149,181,207,207,181,149,117];const a=[];
for(let c=0;c<b.length;c++){const e=b[c];for(let f=0;11>f;f++)a.push(e)}b={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(a)};this._recordGlyph(b)};d.getGlyphItems=function(){var b=m._asyncToGenerator(function*(a,c,e){const f=this._getGlyphCache(a);yield this._fetchRanges(a,c,e);return c.map(g=>this._getMosaicItem(f,a,g))});return function(a,c,e){return b.apply(this,arguments)}}();d.bind=function(b,a,c,e){const f=this._getTexture(b,c);f.setSamplingMode(a);this._dirties[c]&&
(f.setData(this._glyphData[c]),this._dirties[c]=!1);b.bindTexture(f,e)};d._getGlyphCache=function(b){this._glyphCache[b]||(this._glyphCache[b]={});return this._glyphCache[b]};d._getTexture=function(b,a){this._textures[a]||(this._textures[a]=new u(b,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));return this._textures[a]};d._invalidate=function(){this._dirties[this._currentPage]=!0};d._fetchRanges=function(){var b=m._asyncToGenerator(function*(a,
c,e){const f=[];v(c).forEach(g=>{f.push(this._fetchRange(a,g,e))});yield Promise.all(f)});return function(a,c,e){return b.apply(this,arguments)}}();d._fetchRange=function(){var b=m._asyncToGenerator(function*(a,c,e){return 256<c?null:w(this._rangePromises,a+c,()=>this._glyphSource.getRange(a,c,e))});return function(a,c,e){return b.apply(this,arguments)}}();d._getMosaicItem=function(b,a,c){if(!b[c]){a=this._glyphSource.getGlyph(a,c);if(!a||!a.metrics)return{rect:new n(0,0,0,0),page:0,metrics:{left:0,
width:0,height:0,advance:0,top:0},code:c,sdf:!0};const e=this._recordGlyph(a);b[c]={rect:e,page:this._currentPage,metrics:a.metrics,code:c,sdf:!0};this._invalidate()}return b[c]};d._recordGlyph=function(b){var a=b.metrics;if(0===a.width)a=new n(0,0,0,0);else{const c=a.width+6,e=a.height+6;a=this._binPack.allocate(c,e);a.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),
this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new p(this.width-4,this.height-4),a=this._binPack.allocate(c,e));const f=this._glyphData[this._currentPage];b=b.bitmap;let g,q;if(b)for(let k=0;k<e;k++){g=c*k;q=this.width*(a.y+k)+a.x;for(let l=0;l<c;l++)f[q+l]=b[g+l]}r("esri-glyph-debug")&&this._showDebugPage(f)}return a};d._showDebugPage=function(b){const a=document.createElement("canvas"),c=a.getContext("2d"),e=new ImageData(this.width,this.height),f=e.data;
a.width=this.width;a.height=this.height;a.style.border="1px solid black";for(let g=0;g<b.length;++g)f[4*g]=b[g],f[4*g+1]=0,f[4*g+2]=0,f[4*g+3]=255;c.putImageData(e,0,0);document.body.appendChild(a)};return h}()});