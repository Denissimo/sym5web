// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../has ../extensions ../metadata ../tracking".split(" "),function(l,m,y,t,n,w){function x(e,c){return null==c.get?function(){const b=this.__accessor__.properties.get(e);if(void 0!==b){w.trackAccess(b);var d=this.__accessor__.store;return d.has(e)?d.get(e):b.metadata.value}}:function(){const b=this.__accessor__.properties.get(e);if(void 0!==b)return b.getComputed()}}function u(e){var c=e.prototype,b=c.declaredClass;c=n.getOwnClassMetadata(c).properties;
t.processClassMetadatas(c,b);b={};for(const d of Object.getOwnPropertyNames(c)){const a=c[d];b[d]={enumerable:!0,configurable:!0,get:x(d,a),set(k){const f=this.__accessor__;if(void 0===f)Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:k});else if(!Object.isFrozen(this)){if(f.initialized&&a.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${d}' of ${this.declaredClass}`);if(2===f.lifecycle&&a.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${d}' of ${this.declaredClass}`);
f.set(d,k)}}}}Object.defineProperties(e.prototype,b)}const p=new Set,q=new Set;l.processClass=u;l.subclass=function(e){return c=>{c.prototype.declaredClass=e;t.processPrototypeMetadatas(n.getOwnClassMetadata(c.prototype).properties,e);u(c);const b=[],d=[];for(var a=c.prototype;a;)a.hasOwnProperty("initialize")&&!p.has(a.initialize)&&(p.add(a.initialize),b.push(a.initialize)),a.hasOwnProperty("destroy")&&!q.has(a.destroy)&&(q.add(a.destroy),d.push(a.destroy)),a=Object.getPrototypeOf(a);p.clear();q.clear();
a=function(k){function f(...v){var g=k.call(this,...v)||this;if(g.constructor===f&&"function"===typeof g.postscript){b.length&&Object.defineProperty(m._assertThisInitialized(g),"initialize",{enumerable:!1,configurable:!0,value(){for(let h=b.length-1;0<=h;h--)b[h].call(this)}});if(d.length){let h=!1;Object.defineProperty(m._assertThisInitialized(g),"destroy",{enumerable:!1,configurable:!0,value(){if(!h){h=!0;for(let r=0;r<d.length;r++)d[r].call(this)}}})}g.postscript(...v)}return g}m._inheritsLoose(f,
k);return f}(c);a.__accessorMetadata__=n.getOwnClassMetadata(c.prototype);a.prototype.declaredClass=e;return a}};Object.defineProperty(l,"__esModule",{value:!0})});