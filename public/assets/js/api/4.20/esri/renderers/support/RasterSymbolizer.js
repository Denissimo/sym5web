// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/colorUtils ../../core/JSONSupport ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../layers/support/RasterInfo ../../layers/support/rasterFunctions/pixelUtils ../../layers/support/rasterFunctions/surfaceUtils ./colorRampUtils".split(" "),function(H,z,I,u,J,v,B,O,P,
Q,K,L,n,C,D){function M(x,w){const {attributeTable:m,bandCount:b}=x;return!v.isSome(m)||1<b||w&&null==m.fields.find(a=>a.name.toLowerCase()===w.toLowerCase())?!1:!0}function N(x){const {bandCount:w,colormap:m}=x;return v.isSome(m)&&m.length&&1===w}const E=J.getLogger("esri.renderers.support.RasterSymbolizer"),F={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-3.4*1E39,3.4*1E39],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]};
u=function(x){function w(b){return x.call(this,b)||this}H._inheritsLoose(w,x);var m=w.prototype;m.bind=function(){const {rendererJSON:b}=this;if(!b)return!1;this.lookup={rendererJSON:{}};let a;switch(b.type){case "uniqueValue":a=this._updateUVRenderer(b);break;case "rasterColormap":a=this._updateColormapRenderer(b);break;case "rasterStretch":a=this._updateStretchRenderer(b);break;case "classBreaks":a=this._updateClassBreaksRenderer(b);break;case "rasterShadedRelief":a=this._updateShadedReliefRenderer(b)}return a};
m.symbolize=function(b){let a=b&&b.pixelBlock;if(!this.isValidPixelBlock(a))return a;if(b.simpleStretchParams&&"rasterStretch"===this.rendererJSON.type)return this.simpleStretch(a,b.simpleStretchParams);try{3<a.pixels.length&&(a=n.extractBands(a,[0,1,2]));let d;switch(this.rendererJSON.type){case "uniqueValue":case "rasterColormap":d=this._symbolize_colormap(a);break;case "classBreaks":d=this._symbolize_classBreaks(a);break;case "rasterStretch":d=this._symbolize_stretch(a,b.bandIds);break;case "rasterShadedRelief":({extent:b}=
b),d=this._symbolize_shadedRelief(a,{isGCS:b.spatialReference.isGeographic,resolution:{x:(b.xmax-b.xmin)/a.width,y:(b.ymax-b.ymin)/a.height}})}return d}catch(d){return E.error("symbolize",d.message),a}};m.simpleStretch=function(b,a){if(!this.isValidPixelBlock(b))return b;try{return 3<b.pixels.length&&(b=n.extractBands(b,[0,1,2])),n.stretch(b,a)}catch(d){return E.error("symbolize",d.message),b}};m.generateWebGLParameters=function(b){if(-1<["uniqueValue","rasterColormap","classBreaks"].indexOf(this.rendererJSON.type)){var a;
const {indexedColormap:e,offset:h}=(null==(a=this.lookup)?void 0:a.colormapLut)||{};return{colormap:e,colormapOffset:h,type:"lut"}}const {pixelBlock:d,isGCS:k,resolution:c,bandIds:g}=b;({rendererJSON:b}=this);return"rasterStretch"===b.type?this.generateStretchWebGLParams(d,b,g):"rasterShadedRelief"===b.type?this.generateShadedReliefWebGLParams(b,k,c):null};m._isLUTChanged=function(b){if(!this.lookup||!this.lookup.rendererJSON)return!0;if("colorRamp"in this.rendererJSON){const a=this.rendererJSON.colorRamp;
if(b)return JSON.stringify(a)!==JSON.stringify(this.lookup.rendererJSON.colorRamp);({...this.rendererJSON});({...this.lookup.rendererJSON})}return JSON.stringify(this.rendererJSON)!==JSON.stringify(this.lookup.rendererJSON)};m._symbolize_colormap=function(b){return this._isLUTChanged()&&!this.bind()?b:n.colorize(b,this.lookup.colormapLut)};m._symbolize_classBreaks=function(b){const a=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType);return this._isLUTChanged()&&!this.bind()?b:a?n.colorize(b,
this.lookup.colormapLut):n.remapColor(b,this.lookup.remapLut)};m._symbolize_stretch=function(b,a){const {pixelType:d,bandCount:k}=this.rasterInfo,c=this.rendererJSON,g=-1<["u8","u16","s8","s16"].indexOf(d);let e;var {dra:h}=c;var f=c.useGamma?c.gamma:null;if("histogramEqualization"===c.stretchType){var l=h?null:this.lookup.histogramLut;a=this.getStretchCutoff(c,b,a,!l);f=n.stretch(b,{...a,gamma:f});f=n.lookupPixels(f,{lut:h?a.histogramLut:l,offset:0})}else if(g){if(h)h=this.getStretchCutoff(c,b,a),
e=n.createStretchLUT({pixelType:d,...h,gamma:f});else{if(this._isLUTChanged()&&!this.bind())return b;e=this.lookup?this.lookup.stretchLut:null}if(!e)return b;1<k&&(null==a?void 0:a.length)===b.pixels.length&&(null==(l=e)?void 0:l.lut.length)===k&&(e={lut:a.map(q=>e.lut[q]),offset:e.offset});f=n.lookupPixels(b,e)}else h=this.getStretchCutoff(c,b,a),f=n.stretch(b,{...h,gamma:f});if(c.colorRamp){if(this._isLUTChanged(!0)&&!this.bind())return b;f=n.colorize(f,this.lookup.colormapLut)}return f};m._symbolize_shadedRelief=
function(b,a){var d,k,c=this.rendererJSON;a=C.hillshade(b,{...c,...a});if(!c.colorRamp||this._isLUTChanged(!0)&&!this.bind())return a;c=this.lookup?this.lookup.hsvMap:null;if(!c)return a;const g=null!=(d=null==(k=v.unwrap(this.rasterInfo.statistics))?void 0:k[0])?d:{min:0,max:8E3};C.tintHillshade(a,b,c,g);return a};m._updateUVRenderer=function(b){const {bandCount:a,attributeTable:d,pixelType:k}=this.rasterInfo,c=b.field1;if(!c)return!1;var g=1===a&&["u8","s8"].includes(k);if(!M(this.rasterInfo,c)&&
!g)return!1;const e=[];if(d){const h=d.fields.filter(f=>"value"===f.name.toLowerCase())[0];if(!h)return!1;d.features.forEach(f=>{var l,q=b.uniqueValueInfos.filter(r=>String(r.value)===String(f.attributes[c]))[0];(q=null==q?void 0:null==(l=q.symbol)?void 0:l.color)&&e.push([f.attributes[h.name]].concat(q))})}else{if("value"!==c.toLowerCase())return!1;b.uniqueValueInfos.forEach(h=>{var f;const l=null==h?void 0:null==(f=h.symbol)?void 0:f.color;l&&e.push([parseInt(""+h.value,10)].concat(l))})}if(0===
e.length)return!1;g=n.createColormapLUT({colormap:e});this.lookup={rendererJSON:b,colormapLut:g};return this.canRenderInWebGL=!0};m._updateColormapRenderer=function(b){if(!N(this.rasterInfo))return!1;var a=b.colormapInfos.map(d=>[d.value].concat(d.color)).sort((d,k)=>d[0]-k[0]);if(!a||0===a.length)return!1;a=n.createColormapLUT({colormap:a});this.lookup={rendererJSON:b,colormapLut:a};return this.canRenderInWebGL=!0};m._updateShadedReliefRenderer=function(b){if("elevation"!==this.rasterInfo.dataType)return!1;
if(b.colorRamp){var a=D.convertColorRampToColormap(b.colorRamp,256,!0);a=n.createColormapLUT({colormap:a});const d=[],k=a.indexedColormap;for(let c=0;c<k.length;c+=4){const g=I.toHSV({r:k[c],g:k[c+1],b:k[c+2]});d.push([g.h/60,g.s/100,255*g.v/100])}this.lookup={rendererJSON:b,colormapLut:a,hsvMap:d}}else this.lookup=null;return this.canRenderInWebGL=!0};m._updateClassBreaksRenderer=function(b){var a=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType),d=b.classBreakInfos;if(null==d||!d.length)return!1;
d=d.sort((h,f)=>h.classMaxValue-f.classMaxValue);const k=d[d.length-1];var c=b.minValue;if(!a){a=[];for(var g=0;g<d.length;g++){var e;a.push({value:null!=(e=d[g].classMinValue)?e:c,mappedColor:d[g].symbol.color});c=d[g].classMaxValue}a.push({value:k.classMaxValue,mappedColor:k.symbol.color});this.lookup={rendererJSON:b,remapLut:a};this.canRenderInWebGL=!1;return!0}e=[];c=Math.floor(b.minValue);for(a=0;a<d.length;a++){for(g=d[a];c<g.classMaxValue;c++)e.push([c].concat(g.symbol.color));c=Math.ceil(g.classMaxValue)}k.classMaxValue===
c&&e.push([k.classMaxValue].concat(k.symbol.color));d=n.createColormapLUT({colormap:e,fillUnspecified:!1});this.lookup={rendererJSON:b,colormapLut:d};return this.canRenderInWebGL=!0};m._isHistogramRequired=function(b){return"percentClip"===b||"histogramEqualization"===b};m._isValidRasterStatistics=function(b){return v.isSome(b)&&0<b.length&&null!=b[0].min&&null!=b[0].max};m._updateStretchRenderer=function(b){var a;let {stretchType:d,dra:k}=b;if(!("none"===d||null!=(a=b.statistics)&&a.length||this._isValidRasterStatistics(this.rasterInfo.statistics)||
k))return!1;var c=v.unwrap(b.histograms||this.rasterInfo.histograms);!this._isHistogramRequired(b.stretchType)||null!=c&&c.length||k||(d="minMax");const {gamma:g,useGamma:e,colorRamp:h}=b;a=this.rasterInfo.pixelType;const f=!k&&-1<["u8","u16","s8","s16"].indexOf(a);"histogramEqualization"===d?(a=c.map(l=>n.createHistogramEqualizationLUT(l)),this.lookup={rendererJSON:b,histogramLut:a}):f&&(c=this.getStretchCutoff(b),a=n.createStretchLUT({pixelType:a,...c,gamma:e?g:null}),this.lookup={rendererJSON:b,
stretchLut:a});h&&(a=D.convertColorRampToColormap(h,256,!0),this.lookup||(this.lookup={rendererJSON:b}),this.lookup.colormapLut=n.createColormapLUT({colormap:a}),this.lookup.rendererJSON=b);return this.canRenderInWebGL=!0};m.getStretchCutoff=function(b,a,d,k){var c,g,e,h=b.stretchType;if(b.dra)if("minMax"===h&&a.statistics)a=a.statistics.map(t=>[t.minValue,t.maxValue,0,0]);else{var f=n.estimateStatisticsHistograms(a);a=f.statistics;f=f.histograms}else{var l;a=0<(null==(l=b.statistics)?void 0:l.length)?
b.statistics:v.unwrap(this.rasterInfo.statistics);f=b.histograms||v.unwrap(this.rasterInfo.histograms)}!this._isHistogramRequired(h)||null!=(c=f)&&c.length||(h="minMax");l=(null==(g=a)?void 0:g.length)||(null==(e=f)?void 0:e.length)||this.rasterInfo.bandCount;g=[];e=[];let q;let r,y,p;a&&!Array.isArray(a[0])&&(a=a.map(t=>[t.min,t.max,t.avg,t.stddev]));switch(h){case "none":a=F[this.rasterInfo.pixelType]||F.f32;for(c=0;c<l;c++)g[c]=a[0],e[c]=a[1];break;case "minMax":for(c=0;c<l;c++)g[c]=a[c][0],e[c]=
a[c][1];break;case "standardDeviation":for(c=0;c<l;c++)g[c]=a[c][2]-b.numberOfStandardDeviations*a[c][3],e[c]=a[c][2]+b.numberOfStandardDeviations*a[c][3],g[c]<a[c][0]&&(g[c]=a[c][0]),e[c]>a[c][1]&&(e[c]=a[c][1]);break;case "histogramEqualization":for(c=0;c<l;c++)g[c]=f[c].min,e[c]=f[c].max;break;case "percentClip":for(c=0;c<f.length;c++){a=f[c];r=new Uint32Array(a.size);var A=a.counts;q=0;l=(a.max-a.min)/a.size;y=-.5===a.min&&1===l?.5:0;for(p=0;p<a.size;p++)q+=A[p],r[p]=q;A=b.minPercent*q/100;for(p=
0;p<a.size;p++)if(r[p]>A){g[c]=a.min+l*(p+y);break}A=(1-b.maxPercent/100)*q;for(p=a.size-2;0<=p;p--)if(r[p]<A){e[c]=a.min+l*(p+2-y);break}}break;default:for(c=0;c<l;c++)g[c]=a[c][0],e[c]=a[c][1]}let G;"histogramEqualization"===h?(h=f[0].size||256,b=0,k&&(G=f.map(t=>n.createHistogramEqualizationLUT(t)))):(h=b.max||255,b=b.min||0);return this.getSelectedBandCutoffs({minCutOff:g,maxCutOff:e,outMax:h,outMin:b,histogramLut:G},d)};m.getSelectedBandCutoffs=function(b,a){if(null==a||0===a.length)return b;
const d=Math.max.apply(null,a),{minCutOff:k,maxCutOff:c,outMin:g,outMax:e,histogramLut:h}=b;return k.length===a.length||k.length<=d?b:{minCutOff:a.map(f=>k[f]),maxCutOff:a.map(f=>c[f]),histogramLut:h?a.map(f=>h[f]):null,outMin:g,outMax:e}};m.generateStretchWebGLParams=function(b,a,d){var k;let c=null,g=null;var e=this.lookup&&this.lookup.colormapLut;a.colorRamp&&e&&(c=e.indexedColormap,g=e.offset);"histogramEqualization"===a.stretchType&&(a={...a,stretchType:"minMax"});({gamma:e}=a);const h=!!(a.useGamma&&
e&&e.some(p=>1!==p)),{minCutOff:f,maxCutOff:l,outMin:q,outMax:r}=this.getStretchCutoff(a,b,d);a=null==(k=b)?void 0:k.getPlaneCount();2===a&&(b=b.clone(),b.statistics=[b.statistics[0]],b.pixels=[b.pixels[0]]);b=Math.min(3,(null==d?void 0:d.length)||a||this.rasterInfo.bandCount);d=new Float32Array(b);k=c||h?1:255;for(a=0;a<b;a++)d[a]=(r-q)/(l[a]-f[a])/k;const y=new Float32Array(b);if(h)for(a=0;a<b;a++)y[a]=1<e[a]?2<e[a]?6.5+(e[a]-2)**2.5:6.5+100*(2-e[a])**4:1;return{bandCount:b,outMin:q/k,outMax:r/
k,minCutOff:f,maxCutOff:l,factor:d,useGamma:h,gamma:h?e:[1,1,1],gammaCorrection:h?y:[1,1,1],colormap:c,colormapOffset:g,type:"stretch"}};m.generateShadedReliefWebGLParams=function(b,a,d){var k,c,g;let e=null,h=null;const f=this.lookup&&this.lookup.colormapLut;b.colorRamp&&f&&(e=f.indexedColormap,h=f.offset);a=C.calculateHillshadeParams({...b,isGCS:a,resolution:d});d=null==(k=v.unwrap(this.rasterInfo.statistics))?void 0:k[0];return{...a,minValue:null!=(c=null==d?void 0:d.min)?c:0,maxValue:null!=(g=
null==d?void 0:d.max)?g:8E3,hillshadeType:"traditional"===b.hillshadeType?0:1,type:"hillshade",colormap:e,colormapOffset:h}};m.isValidPixelBlock=function(b){return!!(b&&b.pixels&&0<b.pixels.length&&0!==b.validPixelCount)};return w}(u.JSONSupport);z.__decorate([B.property({json:{write:!0}})],u.prototype,"rendererJSON",void 0);z.__decorate([B.property({type:L,json:{write:!0}})],u.prototype,"rasterInfo",void 0);z.__decorate([B.property({json:{write:!0}})],u.prototype,"lookup",void 0);z.__decorate([B.property()],
u.prototype,"canRenderInWebGL",void 0);return u=z.__decorate([K.subclass("esri.renderers.support.RasterSymbolizer")],u)});