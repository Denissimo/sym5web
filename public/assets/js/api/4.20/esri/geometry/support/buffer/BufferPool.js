// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/PooledArray"],function(f,k,l){let h=function(){function d(b,a){this._factoryCallback=b;this._lengthCallback=a;this._pool=new Map}var e=d.prototype;e.acquire=function(b){if(!d.test.disabled){var a=this._pool.get(b);if(a&&0!==a.length)return a.pop()}try{return this._factoryCallback(b)}catch(c){a=window.performance&&window.performance.memory;let g="";a&&(g=`\n  totalJSHeapSize: ${a.totalJSHeapSize}, usedJSHeapSize: ${a.usedJSHeapSize}, jsHeapSizeLimit: ${a.jsHeapSizeLimit}`);
console.log("Array allocation of size "+b+" failed: "+c+g);throw c;}};e.release=function(b){if(!d.test.disabled){var a=this._lengthCallback(b),c=this._pool.get(a);c||(c=new l({shrink:!0}),this._pool.set(a,c));c.push(b)}};e.clear=function(){this._pool.clear()};k._createClass(d,[{key:"test",get:function(){return{size:this._pool.size}}}]);return d}();h.test={disabled:!1};f.BufferPool=h;Object.defineProperty(f,"__esModule",{value:!0})});