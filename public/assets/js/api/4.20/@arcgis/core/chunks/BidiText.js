/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{f as t,m as e,t as s,r as i,i as n}from"./mat2d.js";import{c as r,t as h}from"./mat2df32.js";import{s as a,t as o}from"./vec2.js";import{f as c,c as l}from"./vec2f32.js";import{i as u}from"./number2.js";import{R as f}from"./Rect.js";import{H as d}from"./mathUtils.js";import{B as g}from"./BidiEngine.js";var m,w;function x(t){switch(t){case"left":return m.Left;case"right":return m.Right;case"center":case"justify":return m.Center}}function _(t){switch(t){case"top":return w.Top;case"middle":return w.Center;case"baseline":return w.Baseline;case"bottom":return w.Bottom}}function p(t){switch(t){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[m.Right,w.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[m.Center,w.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[m.Left,w.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[m.Right,w.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":return[m.Center,w.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[m.Left,w.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[m.Right,w.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[m.Center,w.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[m.Left,w.Top];case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[m.Center,w.Baseline];default:return console.debug(`Found invalid placement type ${t}`),[m.Center,w.Center]}}function y(t){switch(t){case m.Right:return-1;case m.Center:return 0;case m.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function b(t){switch(t){case w.Top:return 1;case w.Center:return 0;case w.Bottom:case w.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${t}`),0}}function T(t){switch(t){case"left":return m.Left;case"right":return m.Right;case"center":case"justify":return m.Center}}!function(t){t[t.Left=-1]="Left",t[t.Center=0]="Center",t[t.Right=1]="Right"}(m||(m={})),function(t){t[t.Top=1]="Top",t[t.Center=0]="Center",t[t.Bottom=-1]="Bottom",t[t.Baseline=2]="Baseline"}(w||(w={}));class v{constructor(t,e,s,i){this.center=c(t,e),this.centerT=l(),this.halfWidth=s/2,this.halfHeight=i/2,this.width=s,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new v(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const s=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),n=(t.halfWidth+this.halfWidth+e)/s,r=(t.halfHeight+this.halfHeight+e)/i,h=Math.min(n,r);return d(h)}extend(t){const e=Math.min(this.xmin,t.xmin),s=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,n=Math.max(this.ymax,t.ymax)-s,r=e+i/2,h=s+n/2;this.width=i,this.height=n,this.halfWidth=i/2,this.halfHeight=n/2,this.x=r,this.y=h}static deserialize(t){const e=t.readF32(),s=t.readF32(),i=t.readInt32(),n=t.readInt32();return new v(e,s,i,n)}}const L=Math.PI/180;class C{constructor(t,e,s,i){this._rotationT=r(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const n=s.rect,h=new Float32Array(8);t*=i,e*=i;const a=s.code?n.width*i:s.metrics.width,o=s.code?n.height*i:s.metrics.height;h[0]=t,h[1]=e,h[2]=t+a,h[3]=e,h[4]=t,h[5]=e+o,h[6]=t+a,h[7]=e+o,this._data=h,this._setTextureCoords(n),this._scale=i,this._mosaic=s,this.x=t,this.y=e,this.maxOffset=Math.max(t+a,e+o)}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(t){this._angle=t,n(this._rotationT),i(this._rotationT,this._rotationT,-t),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:t,width:s}=this._mosaic.metrics,i=s*this._scale,n=Math.abs(t)*this._scale,a=new Float32Array(8);a[0]=this.x,a[1]=this.y,a[2]=this.x+i,a[3]=this.y,a[4]=this.x,a[5]=this.y+n,a[6]=this.x+i,a[7]=this.y+n;const o=e(r(),this._rotationT,this._T);h(a,a,o);let c=1/0,l=1/0,u=0,f=0;for(let t=0;t<4;t++){const e=a[2*t],s=a[2*t+1];c=Math.min(c,e),l=Math.min(l,s),u=Math.max(u,e),f=Math.max(f,s)}const d=u-c,g=f-l,m=c+d/2,w=l+g/2;this._bounds=new v(m,w,d,g)}return this._bounds}setTransform(t){this._T=t,this._offsets=null}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const s=this._offsets,i=new Float32Array(8),n=e(r(),this._rotationT,this._T);h(i,t,n),s.upperLeft=u(8*i[0],8*i[1]),s.upperRight=u(8*i[2],8*i[3]),s.lowerLeft=u(8*i[4],8*i[5]),s.lowerRight=u(8*i[6],8*i[7])}_setTextureCoords({x:t,y:e,width:s,height:i}){this._texcoords={upperLeft:u(t,e),upperRight:u(t+s,e),lowerLeft:u(t,e+i),lowerRight:u(t+s,e+i)}}}const M=(t,e)=>({code:0,page:0,sdf:!0,rect:new f(0,0,11,8),textureBinding:e,metrics:{advance:0,height:4,width:t,left:0,top:0}});class B{constructor(t,e,s){this._rotation=0,this._decorate(t,e,s),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=e.length>1,this._hasRotation=0!==s.angle,this._T=this._createGlyphTransform(this.bounds,s);for(const e of t)e.setTransform(this._T)}setRotation(s){if(0===s&&0===this._rotation)return;this._rotation=s;const i=this._T,n=t(r(),s);e(i,n,i);for(const t of this.glyphs)t.setTransform(this._T)}_decorate(t,e,s){if(!s.decoration||"none"===s.decoration||!t.length)return;const i=s.scale,n="underline"===s.decoration?30:20,r=t[0].textureBinding;for(const s of e){const e=s.startX*i,h=s.startY*i,a=(s.width+s.glyphWidthEnd)*i;t.push(new C(e,h+n*i,M(a,r),1))}}get boundsT(){const t=this.bounds,e=a(l(),t.x,t.y);if(o(e,e,this._T),this._hasRotation){const s=Math.max(t.width,t.height);return new v(e[0],e[1],s,s)}return new v(e[0],e[1],t.width,t.height)}_createBounds(t){let e=1/0,s=1/0,i=0,n=0;for(const r of t)e=Math.min(e,r.xTopLeft),s=Math.min(s,r.yTopLeft),i=Math.max(i,r.xTopLeft+r.width),n=Math.max(n,r.yBottomRight);const r=i-e,h=n-s;return new v(e+r/2,s+h/2,r,h)}_createGlyphTransform(t,e){const n=L*e.angle,h=r(),o=l();return s(h,h,a(o,e.xOffset,-e.yOffset)),e.isCIM?i(h,h,n):(s(h,h,a(o,t.x,t.y)),i(h,h,n),s(h,h,a(o,-t.x,-t.y))),h}}class R{constructor(t,e,s,i,n,r){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(e,s)),this.end=Math.max(0,Math.max(e,s)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=n,this.yMax=r}}const P=t=>10===t,A=t=>32===t;function S(t,e,s){const i=s.scale,n=new Array,r=function(t,e,s){const i=new Array,n=1/s.scale,r=s.maxLineWidth*n,h=e?t.length-1:0,a=e?-1:t.length,o=e?-1:1;let c=h,l=0,u=0,f=c,d=f,g=0,m=1/0,w=0;for(;c!==a;){const{code:e,metrics:s}=t[c],n=Math.abs(s.top);if(P(e)||A(e)||(m=Math.min(m,n),w=Math.max(w,n+s.height)),P(e))c!==h&&(i.push(new R(t,f,c-o,l,m,w)),m=1/0,w=0),l=0,f=c+o,d=c+o,u=0;else if(A(e))d=c+o,u=0,g=s.advance,l+=s.advance;else if(l>r){if(d!==f){const e=d-2*o;l-=g,i.push(new R(t,f,e,l-u,m,w)),m=1/0,w=0,f=d,l=u}else i.push(new R(t,f,c-o,l,m,w)),m=1/0,w=0,f=c,d=c,l=0;l+=s.advance,u+=s.advance}else l+=s.advance,u+=s.advance;c+=o}const x=new R(t,f,c-o,l,m,w);return x.start>=0&&x.end<t.length&&i.push(x),i}(t,e,s),h=function(t,e){let s=0;for(let e=0;e<t.length;e++){const{width:i}=t[e];s=Math.max(i,s)}const i="underline"===e.decoration?4:0,n=t[0].yMin;return{x:0,y:n,height:t[t.length-1].yMax+e.lineHeight*(t.length-1)+i-n,width:s}}(r,s),{vAlign:a,hAlign:o}=s,c=a===w.Baseline?1:0,l=c?0:a-1,u=(1-c)*-h.y+l*(h.height/2)+-26*(c?1:0);for(let e=0;e<r.length;e++){const{start:h,end:a,width:c}=r[e];let l=-1*(o+1)*(c/2)-3;const f=e*s.lineHeight+u-3;r[e].startX=l,r[e].startY=f;for(let e=h;e<=a;e++){const s=t[e];if(P(s.code))continue;const r=new C(l+s.metrics.left,f-s.metrics.top,s,i);l+=s.metrics.advance,n.push(r)}}return new B(n,r,s)}const H=new g;function W(t){if(!H.hasBidiChar(t))return[t,!1];let e;return e="rtl"===H.checkContextual(t)?"IDNNN":"ICNNN",[H.bidiTransform(t,e,"VLYSN"),!0]}export{_ as a,W as b,T as c,p as d,y as e,b as f,x as g,S as s};
