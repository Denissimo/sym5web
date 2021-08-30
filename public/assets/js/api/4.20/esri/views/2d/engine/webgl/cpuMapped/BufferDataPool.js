// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/CircularArray ../../../../../core/has ../../../../../core/maybe ./BufferData ./DisplayRecordReader".split(" "),function(g,h,q,f,m,n){h=function(){function k(){this._pools=new Map}var e=k.prototype;e.acquire=function(a,c,d=0){var b=n.DisplayRecordReader.from(a.records,d);d=b.size();b.next();const l=b.vertexCount;b=b.indexCount;const p=this._tryAcquire(a.stride,c,l,b);return m.BufferData.createPooled(p,a,c,l,b,d,this)};e.release=function(a){a.isReleased||a.destroy()};
e.destroy=function(){this._pools.forEach(a=>{f.isSome(a)&&a.clear(c=>c.destroy())})};e._tryAcquire=function(a,c,d,b){a=this._pools.get(a<<3|c);if(f.isNone(a))return null;a=a.dequeue();return f.isSome(a)&&a.vertexBufferSize>=d&&a.indexBufferSize>=b?a:null};return k}();g.BufferDataPool=h;Object.defineProperty(g,"__esModule",{value:!0})});