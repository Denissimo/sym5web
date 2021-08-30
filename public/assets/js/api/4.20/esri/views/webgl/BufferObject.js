// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Logger","../../core/typedArrayUtil","./checkWebGLError","./enums"],function(r,t,h,m,q){const f=t.getLogger("esri.views.webgl.BufferObject");return function(){function e(a,b,c,d,g){this._context=a;this.bufferType=b;this.usage=c;this._glName=null;this._size=-1;this._indexType=void 0;a.instanceCounter.increment(q.ResourceType.Buffer,this);this._glName=this._context.gl.createBuffer();m.checkWebGLError(this._context.gl);d&&this.setData(d,g)}
e.createIndex=function(a,b,c,d){return new e(a,34963,b,c,d)};e.createVertex=function(a,b,c){return new e(a,34962,b,c)};var n=e.prototype;n.dispose=function(){var a;null!=(a=this._context)&&a.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(q.ResourceType.Buffer,this),this._context=null):this._glName&&f.warn("Leaked WebGL buffer object")};n.setData=function(a,b){if(a){if("number"===typeof a){if(0>a&&f.error("Buffer size cannot be negative!"),
34963===this.bufferType&&b)switch(this._indexType=b,this._size=a,b){case 5123:a*=2;break;case 5125:a*=4}}else b=a.byteLength,h.isUint16Array(a)&&(b/=2,this._indexType=5123),h.isUint32Array(a)&&(b/=4,this._indexType=5125),this._size=b;b=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);var c=this._context.gl;c.bufferData(this.bufferType,a,this.usage);m.checkWebGLError(c);this._context.bindVAO(b)}};n.setSubData=function(a,b=0,c=0,d=a.byteLength){if(a){(0>b||b>=this._size)&&
f.error("offset is out of range!");var g=b,k=c,l=d,p=a.byteLength;h.isUint16Array(a)&&(p/=2,g*=2,k*=2,l*=2);h.isUint32Array(a)&&(p/=4,g*=4,k*=4,l*=4);void 0===d&&(d=p-1);c>=d&&f.error("end must be bigger than start!");b+c-d>this._size&&f.error("An attempt to write beyond the end of the buffer!");b=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);c=this._context.gl;d=ArrayBuffer.isView(a)?a.buffer:a;a=0===k&&l===a.byteLength?d:d.slice(k,l);c.bufferSubData(this.bufferType,
g,a);m.checkWebGLError(c);this._context.bindVAO(b)}};r._createClass(e,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"indexType",get:function(){return this._indexType}},{key:"byteSize",get:function(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}}]);return e}()});