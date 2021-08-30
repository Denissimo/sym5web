// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./enums"],function(t,k){function n(g,e,a,...d){e<g.length?g.splice(e,a,...d):g.push(...d)}const p=new Map;p.set(k.WGLDrawPhase.MAP,[k.WGLGeometryType.FILL,k.WGLGeometryType.LINE,k.WGLGeometryType.MARKER,k.WGLGeometryType.TEXT]);p.set(k.WGLDrawPhase.LABEL,[k.WGLGeometryType.LABEL]);p.set(k.WGLDrawPhase.LABEL_ALPHA,[k.WGLGeometryType.LABEL]);k=function(){function g(){this.symbolLevels=[]}var e=g.prototype;e.replay=function(a,d,c){for(const h of this.symbolLevels)for(const f of h.zLevels){var b=
f.geometryDPInfo.unified;if(b)for(const l of b){b=a.painter.getGeometryBrush(l.geometryType);const m=d.getGeometry(l.geometryType),x={geometryType:l.geometryType,materialKey:l.materialKey,indexFrom:l.indexFrom,indexCount:l.indexCount,draw:(u,v,w)=>{m.draw(u,v,w,l.indexFrom,l.indexCount)}};b.prepareState(a,d);b.drawGeometry(a,d,x,c)}}};e.clear=function(){this.symbolLevels.length=0};e.addToList=function(a,d){if(Array.isArray(a))for(const c of a)this._addToList(c,d);else this._addToList(a,d)};e.removeFromList=
function(a){Array.isArray(a)||(a=[a]);let d=null;for(const c of a)d=this._removeFromList(c);return d};e.clone=function(){const a=new g;for(const d of this.symbolLevels)a.symbolLevels.push(d.clone());return a};e.splitAfter=function(a){const d=this._getDisplayList(a.symbolLevel,a.zOrder),c=d.length,b=a.indexFrom+a.indexCount;for(let h=0;h<c;++h){const f=d[h];if(f.geometryType===a.geometryType&&b>f.indexFrom&&b<=f.indexFrom+f.indexCount)return b<f.indexFrom+f.indexCount&&(a=new q,a.geometryType=f.geometryType,
a.materialKey=f.materialKey,a.indexFrom=b,a.indexCount=f.indexFrom+f.indexCount-b,d.splice(h+1,0,a),f.indexCount=b-f.indexFrom),h}};e._addToList=function(a,d){const c=this._getDisplayList(a.symbolLevel,a.zOrder);d=null!=d?d:c.length-1;var b=0<=d&&d<c.length?c[d]:null;null!==b&&b.materialKey===a.materialKey&&b.indexFrom+b.indexCount===a.indexFrom&&b.geometryType===a.geometryType?b.indexCount+=a.indexCount:(b=new q,b.indexFrom=a.indexFrom,b.indexCount=a.indexCount,b.materialKey=a.materialKey,b.geometryType=
a.geometryType,n(c,d+1,0,b))};e._removeFromList=function(a){const d=this._getDisplayList(a.symbolLevel,a.zOrder);var c=d.length;let b=void 0;for(var h=0;h<c;++h){var f=d[h];if(a.indexFrom+a.indexCount>f.indexFrom&&a.indexFrom<f.indexFrom+f.indexCount&&f.geometryType===a.geometryType){b=h;break}}if(void 0!==b){c=d[b];if(a.indexFrom===c.indexFrom)return c.indexCount-=a.indexCount,c.indexFrom+=a.indexCount,0===c.indexCount&&n(d,b,1),b-1;if(a.indexFrom+a.indexCount===c.indexFrom+c.indexCount)return c.indexCount-=
a.indexCount,0===c.indexCount?(n(d,b,1),b-1):b;{h=c.indexFrom;f=a.indexFrom-c.indexFrom;const l=a.indexCount;a=c.indexFrom+c.indexCount-(a.indexFrom+a.indexCount);c.indexCount=f;const m=new q;m.geometryType=c.geometryType;m.materialKey=c.materialKey;m.indexFrom=h+f+l;m.indexCount=a;n(d,b+1,0,m);return b}}return null};e._getDisplayList=function(a,d){let c;var b=this.symbolLevels.length;for(let f=0;f<b;f++)if(this.symbolLevels[f].symbolLevel===a){c=this.symbolLevels[f];break}c||(c=new y,c.symbolLevel=
a,this.symbolLevels.push(c));let h;a=c.zLevels.length;for(b=0;b<a;b++)if(c.zLevels[b].zLevel===d){h=c.zLevels[b];break}h||(h=new z,h.geometryDPInfo=new r,h.zLevel=d,c.zLevels.push(h));h.geometryDPInfo.unified||(h.geometryDPInfo.unified=[]);return h.geometryDPInfo.unified};e.getDPInfoType=function(){return"unified"};t._createClass(g,[{key:"empty",get:function(){return!this.symbolLevels||0===this.symbolLevels.length}}]);return g}();let q=function(){function g(){this.materialKey=null;this.indexCount=
this.indexFrom=0}g.prototype.clone=function(){const e=new g;e.geometryType=this.geometryType;e.materialKey=this.materialKey;e.indexFrom=this.indexFrom;e.indexCount=this.indexCount;return e};return g}(),r=function(){function g(){this.unified=this.label=this.text=this.marker=this.line=this.fill=null}g.prototype.clone=function(){const e=new g;e.fill=this.fill&&this.fill.map(a=>a.clone());e.line=this.line&&this.line.map(a=>a.clone());e.marker=this.marker&&this.marker.map(a=>a.clone());e.text=this.text&&
this.text.map(a=>a.clone());e.label=this.label&&this.label.map(a=>a.clone());e.unified=this.unified&&this.unified.map(a=>a.clone());return e};return g}(),z=function(){function g(){this.geometryDPInfo=new r}g.prototype.clone=function(){const e=new g;e.zLevel=this.zLevel;e.geometryDPInfo=this.geometryDPInfo.clone();return e};return g}(),y=function(){function g(){this.zLevels=[]}g.prototype.clone=function(){const e=new g;e.symbolLevel=this.symbolLevel;for(const a of this.zLevels)e.zLevels.push(a.clone());
return e};return g}();return k});