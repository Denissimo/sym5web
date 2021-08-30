// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./events","./lang","./promiseUtils"],function(f,v,w,u){function p(a,c,d,b,e){e=a.watch(c,(k,q,l,m)=>{if(!d||d(k))null==b?void 0:b.call(a,k,q,l,m)},e);if(Array.isArray(c))for(var g of c){const k=a.get(g);d&&d(k)&&(null==b?void 0:b.call(a,k,k,c,a))}else g=a.get(c),d&&d(g)&&(null==b?void 0:b.call(a,g,g,c,a));return e}function n(a,c,d,b,e){function g(){m&&(m.remove(),m=null)}const k="function"===typeof b?b:null,q="object"===typeof b?b:null;"boolean"===typeof b&&(e=b);let l=!1,m;const h=
u.createDeferred();u.onAbort(q,()=>{g();h.reject(u.createAbortError())});b={then:h.promise.then.bind(h.promise),catch:h.promise.catch.bind(h.promise),remove:g};Object.freeze(b);m=p(a,c,d,(r,t,x,y)=>{l=!0;g();k&&k.call(a,r,t,x,y);h.resolve({value:r,oldValue:t,propertyName:x,target:y})},e);l&&g();return b}function z(a){return!!a}function A(a){return!a}function B(a){return!0===a}function C(a){return!1===a}function D(a){return void 0!==a}function E(a){return void 0===a}function F(a,c,d,b){var e=Array.isArray(c)?
c:-1<c.indexOf(",")?c.split(","):[c];c=a.watch(c,d,b);for(const g of e)e=g.trim().replace(G,"$1"),b=a.get(e),d.call(a,b,b,e,a);return c}const G=/\?(\.|$)/g;f.init=F;f.on=function(a,c,d,b,e,g,k){function q(h){const r=l[h];r&&(g&&g(r.target,h,a,d),r.handle.remove(),delete l[h])}const l={},m=F(a,c,(h,r,t)=>{q(t);v.isEventTarget(h)&&(l[t]={handle:v.on(h,d,b),target:h},e&&e(h,t,a,d))},k);return{remove(){m.remove();for(const h in l)q(h)}}};f.once=function(a,c,d,b){return n(a,c,null,d,b)};f.pausable=function(a,
c,d,b){let e=!1;const g=a.watch(c,(k,q,l,m)=>{e||d.call(a,k,q,l,m)},b);return{remove(){g.remove()},pause(){e=!0},resume(){e=!1}}};f.watch=function(a,c,d,b){return a.watch(c,d,b)};f.when=function(a,c,d,b){return p(a,c,z,d,b)};f.whenDefined=function(a,c,d,b){return p(a,c,D,d,b)};f.whenDefinedOnce=function(a,c,d,b){return n(a,c,D,d,b)};f.whenEqual=function(a,c,d,b,e){return p(a,c,g=>w.equals(d,g),b,e)};f.whenEqualOnce=function(a,c,d,b,e){return n(a,c,g=>w.equals(d,g),b,e)};f.whenFalse=function(a,c,d,
b){return p(a,c,C,d,b)};f.whenFalseOnce=function(a,c,d,b){return n(a,c,C,d,b)};f.whenNot=function(a,c,d,b){return p(a,c,A,d,b)};f.whenNotOnce=function(a,c,d,b){return n(a,c,A,d,b)};f.whenOnce=function(a,c,d,b){return n(a,c,z,d,b)};f.whenTrue=function(a,c,d,b){return p(a,c,B,d,b)};f.whenTrueOnce=function(a,c,d,b){return n(a,c,B,d,b)};f.whenUndefined=function(a,c,d,b){return p(a,c,E,d,b)};f.whenUndefinedOnce=function(a,c,d,b){return n(a,c,E,d,b)};f.whenValidOnce=n;Object.defineProperty(f,"__esModule",
{value:!0})});