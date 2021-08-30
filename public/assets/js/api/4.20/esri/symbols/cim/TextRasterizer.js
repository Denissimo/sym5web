// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../core/screenUtils"],function(n,t){let r=function(){function k(){}var l=k.prototype;l.rasterizeText=function(d,a){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var c=this._textRasterizationCanvas,b=c.getContext("2d");this.setFontProperties(b,a);this.parameters=a;this.textLines=d.split(/\r?\n/);this.lineHeight=this.computeLineHeight();d=this.computeTextWidth(b,a);var g=this.lineHeight*this.textLines.length;c.width=d;c.height=
g;this.renderedLineHeight=Math.round(this.lineHeight*a.pixelRatio);this.renderedHaloSize=a.halo.size*a.pixelRatio;this.renderedWidth=d*a.pixelRatio;this.renderedHeight=g*a.pixelRatio;c=a.color;this.fillStyle=`rgba(${c.slice(0,3).toString()},${c[3]})`;this.haloStyle=`rgb(${a.halo.color.slice(0,3).toString()})`;c=this.renderedLineHeight;d=this.renderedHaloSize;this.setFontProperties(b,a);g=b.textAlign;var f=this.renderedWidth;g=("center"===g?.5*f:"right"===g?f:0)+d;let h=f=0;0<d&&this.renderHalo(b,
g,d,f,h,a);h+=d;f+=g;for(var e of this.textLines)b.globalCompositeOperation="destination-out",b.fillStyle="rgb(0, 0, 0)",b.fillText(e,f,h),b.globalCompositeOperation="source-over",b.fillStyle=this.fillStyle,b.fillText(e,f,h),h+=c;b=b.getImageData(0,0,this.renderedWidth,this.renderedHeight);b=new Uint8Array(b.data);if(a.premultiplyColors)for(e=0;e<b.length;e+=4)a=b[e+3]/255,b[e]*=a,b[e+1]*=a,b[e+2]*=a;return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,
anchorX:0,anchorY:0}};l.renderHalo=function(d,a,c,b,g,f){const h=this.renderedWidth,e=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas"));this._haloRasterizationCanvas.width=h;this._haloRasterizationCanvas.height=e;const p=this._haloRasterizationCanvas,m=p.getContext("2d");m.clearRect(0,0,h,e);this.setFontProperties(m,f);m.fillStyle=this.haloStyle;m.strokeStyle=this.haloStyle;f=3>this.renderedHaloSize;m.lineJoin=f?"miter":"round";f?this.renderHaloEmulated(m,
a,c):this.renderHaloNative(m,a,c);d.globalAlpha=this.parameters.halo.color[3];d.drawImage(p,0,0,h,e,b,g,h,e);d.globalAlpha=1};l.renderHaloEmulated=function(d,a,c){const b=this.renderedLineHeight,g=this.renderedHaloSize;for(const f of this.textLines){for(const [h,e]of q)d.fillText(f,a+g*h,c+g*e);c+=b}};l.renderHaloNative=function(d,a,c){const b=this.renderedLineHeight,g=this.renderedHaloSize;for(const f of this.textLines){const h=2*g;for(let e=0;5>e;e++)d.lineWidth=(.6+.1*e)*h,d.strokeText(f,a,c);
c+=b}};l.setFontProperties=function(d,a){var c=a.font;c=`${c.style} ${c.weight} ${t.pt2px(a.size*a.pixelRatio)}px ${c.family}, sans-serif`;d.font=c;d.textBaseline="top";switch(a.horizontalAlignment){case "left":a="left";break;case "right":a="right";break;case "center":a="center";break;default:a="left"}d.textAlign=a};l.computeTextWidth=function(d,a){let c=0;for(const b of this.textLines)c=Math.max(c,d.measureText(b).width);a=a.font;if("italic"===a.style||"oblique"===a.style||"string"===typeof a.weight&&
("bold"===a.weight||"bolder"===a.weight)||"number"===typeof a.weight&&600<a.weight)c+=.3*d.measureText("A").width;c+=2*this.parameters.halo.size;return Math.round(c)};l.computeLineHeight=function(){return Math.round(1.275*this.parameters.size+2*this.parameters.halo.size)};return k}();const q=[];for(let k=0;360>k;k+=22.5)q.push([Math.cos(Math.PI*k/180),Math.sin(Math.PI*k/180)]);n.TextRasterizer=r;n.default=r;Object.defineProperty(n,"__esModule",{value:!0})});