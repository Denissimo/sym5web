// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe"],function(l,m,k){let h=function(){function e(a){if(Array.isArray(a)){this.data=a[0];var b=this;for(let c=1;c<a.length;c++)b.next=new e([a[c]]),b=b.next}else this.data=a}var g=e.prototype;g.find=function(a){var b;return a(this.data)?this:null==(b=this.next)?void 0:b.find(a)};g.max=function(a,b=this){b=a(this.data)>a(b.data)?this:b;return this.next?this.next.max(a,b):b};g.remove=function(a,b=null){return this===
a?b?(b.next=this.next,b):this.next:this.next.remove(a,this)};m._createClass(e,[{key:"last",get:function(){return this.next?this.next.last:this}}]);return e}(),n=function(){function e(a){this._head=null;k.isNone(a)||(this._head=new h(a))}var g=e.prototype;g.maxAvailableSpace=function(){if(k.isNone(this._head))return 0;const a=this._head.max(b=>b.end-b.start);return a.data.end-a.data.start};g.firstFit=function(a){if(k.isNone(this._head))return null;var b=null;let c=this._head;for(;c;){const d=c.data.end-
c.data.start;if(d===a)return b?b.next=c.next:this._head=c.next,c.data.start;if(d>a)return b=c.data.start,c.data.start+=a,b;b=c;c=c.next}return null};g.free=function(a,b){const c=a+b;if(k.isNone(this._head))this._head=new h({start:a,end:c});else if(c<=this._head.data.start)if(c===this._head.data.start)this._head.data.start-=b;else{var d=new h({start:a,end:c});d.next=this._head;this._head=d}else{d=this._head;for(var f=d.next;f;){if(f.data.start>=c){if(d.data.end===a){d.data.end+=b;return}if(f.data.start===
c){f.data.start-=b;return}a=new h({start:a,end:c});a.next=d.next;d.next=a;return}d=f;f=f.next}a===d.data.end?d.data.end+=b:(a=new h({start:a,end:c}),d.next=a)}};m._createClass(e,[{key:"head",get:function(){return this._head}}]);return e}();l.FreeList=n;l.List=h;Object.defineProperty(l,"__esModule",{value:!0})});