// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","./PooledArray"],function(m,n,p){let r=function(){function k(a,b,c){this._namespace=a;this._storage=b;this._removeFunc=!1;this._miss=this._hit=0;this._storage.register(this);this._namespace+=":";c&&(this._storage.registerRemoveFunc(this._namespace,c),this._removeFunc=!0)}var d=k.prototype;d.destroy=function(){this._storage.clear(this._namespace);this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace);this._storage.deregister(this);
this._storage=null};d.resetHitRate=function(){this._hit=this._miss=0};d.put=function(a,b,c,f=0){this._storage.put(this._namespace+a,b,c,f)};d.get=function(a){a=this._storage.get(this._namespace+a);void 0===a?++this._miss:++this._hit;return a};d.pop=function(a){a=this._storage.pop(this._namespace+a);void 0===a?++this._miss:++this._hit;return a};d.updateSize=function(a,b,c){this._storage.updateSize(this._namespace+a,b,c)};d.clear=function(){this._storage.clear(this._namespace)};d.clearAll=function(){this._storage.clearAll()};
d.getStats=function(){return this._storage.getStats()};d.resetStats=function(){this._storage.resetStats()};n._createClass(k,[{key:"namespace",get:function(){return this._namespace.slice(0,-1)}},{key:"hitRate",get:function(){return this._hit/(this._hit+this._miss)}},{key:"size",get:function(){return this._storage.size}},{key:"maxSize",get:function(){return this._storage.maxSize}}]);return k}(),t=function(){function k(a=10485760){this._maxSize=a;this._db=new Map;this._miss=this._hit=this._size=0;this._removeFuncs=
new p;this._users=new p}var d=k.prototype;d.destroy=function(){this.clearAll();this._removeFuncs.clear();this._users.clear();this._db=null};d.register=function(a){this._users.push(a)};d.deregister=function(a){this._users.removeUnordered(a)};d.registerRemoveFunc=function(a,b){this._removeFuncs.push([a,b])};d.deregisterRemoveFunc=function(a){this._removeFuncs.filterInPlace(b=>b[0]!==a)};d.put=function(a,b,c,f){const g=this._db.get(a);g&&(this._size-=g.size,this._db.delete(a),g.entry!==b&&this._notifyRemoved(a,
g.entry));c>this._maxSize?this._notifyRemoved(a,b):void 0===b?console.warn("Refusing to cache undefined entry "):!c||0>c?console.warn("Refusing to cache entry with invalid size "+c):(f=1+Math.max(f,-3)- -3,this._db.set(a,{entry:b,size:c,lifetime:f,lives:f}),this._size+=c,this._checkSizeLimit())};d.updateSize=function(a,b,c){const f=this._db.get(a);f&&f.entry===b&&(this._size-=f.size,c>this._maxSize?(this._db.delete(a),this._notifyRemoved(a,b)):(f.size=c,this._size+=c,this._checkSizeLimit()))};d.pop=
function(a){const b=this._db.get(a);if(b)return this._size-=b.size,this._db.delete(a),++this._hit,b.entry;++this._miss};d.get=function(a){const b=this._db.get(a);if(void 0===b)++this._miss;else return this._db.delete(a),b.lives=b.lifetime,this._db.set(a,b),++this._hit,b.entry};d.getStats=function(){const a={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},b={},c=[];this._db.forEach((e,
h)=>{const q=e.lifetime;c[q]=(c[q]||0)+e.size;this._users.forAll(l=>{l=l.namespace;h.startsWith(l)&&(b[l]=(b[l]||0)+e.size)})});const f={};this._users.forAll(e=>{const h=e.namespace;!isNaN(e.hitRate)&&0<e.hitRate?(b[h]=b[h]||0,f[h]=Math.round(100*e.hitRate)+"%"):f[h]="0%"});var g=Object.keys(b);g.forEach(e=>b[e]=b[e]/this._size*100);g.sort((e,h)=>b[h]-b[e]);g.forEach(e=>a[e]=Math.round(b[e])+"% / "+f[e]);for(g=c.length-1;0<=g;--g){const e=c[g];e&&(a["Priority "+(g+-3-1)]=Math.round(e/this.size*100)+
"%")}return a};d.resetStats=function(){this._hit=this._miss=0;this._users.forAll(a=>a.resetHitRate())};d.clear=function(a){this._db.forEach((b,c)=>{c.startsWith(a)&&(this._size-=b.size,this._db.delete(c),this._notifyRemoved(c,b.entry))})};d.clearAll=function(){this._db.forEach((a,b)=>this._notifyRemoved(b,a.entry));this._size=0;this._db.clear()};d._getHitRate=function(){return this._hit/(this._hit+this._miss)};d._notifyRemoved=function(a,b){this._removeFuncs.forAll(c=>{if(a.startsWith(c[0]))c[1](b)})};
d._checkSizeLimit=function(){if(!(this._size<=this._maxSize))for(const [a,b]of this._db)if(this._db.delete(a),1>=b.lives?(this._size-=b.size,this._notifyRemoved(a,b.entry)):(--b.lives,this._db.set(a,b)),this._size<=.9*this.maxSize)break};n._createClass(k,[{key:"size",get:function(){return this._size}},{key:"maxSize",get:function(){return this._maxSize},set:function(a){this._maxSize=Math.max(a,0);this._checkSizeLimit()}}]);return k}();m.MIN_PRIORITY=-3;m.MemCache=r;m.MemCacheStorage=t;Object.defineProperty(m,
"__esModule",{value:!0})});