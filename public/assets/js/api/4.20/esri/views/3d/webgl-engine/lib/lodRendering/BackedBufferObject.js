// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../webgl/BufferObject"],function(f,g){return function(){function e(a,b,c){this._elementSize=b;this._buffer=g.createVertex(a,35044);this.resize(c)}var d=e.prototype;d.destroy=function(){this._buffer.dispose()};d.copyRange=function(a,b,c,h=0){a=new Uint8Array(this.array,a*this.elementSize,(b-a)*this.elementSize);(new Uint8Array(c.array,h*this.elementSize)).set(a)};d.transferAll=function(){this._buffer.setData(this._array)};d.transferRange=
function(a,b){a*=this._elementSize;this._buffer.setSubData(this._array,a,a,b*this._elementSize)};d.resize=function(a){const b=a*this._elementSize,c=new ArrayBuffer(b);this._array&&(a>=this._capacity?(new Uint8Array(c)).set(new Uint8Array(this._array)):(new Uint8Array(c)).set((new Uint8Array(this._array)).subarray(0,a*this._elementSize)));this._array=c;this._buffer.setData(b);this._capacity=a};f._createClass(e,[{key:"elementSize",get:function(){return this._elementSize}},{key:"capacity",get:function(){return this._capacity}},
{key:"array",get:function(){return this._array}},{key:"buffer",get:function(){return this._buffer}},{key:"memoryUsage",get:function(){return{cpu:this._capacity*this._elementSize,gpu:this._capacity*this._elementSize}}}]);return e}()});