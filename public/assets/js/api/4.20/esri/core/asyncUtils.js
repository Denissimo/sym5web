// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./maybe","./promiseUtils"],function(c,h,f){c.assertResult=function(a){if(!0===a.ok)return a.value;throw a.error;};c.forEach=function(a,b,g){return f.eachAlways(a.map((d,e)=>b.apply(g,[d,e])))};c.map=function(a,b,g){return f.eachAlways(a.map((d,e)=>b.apply(g,[d,e]))).then(d=>d.map(e=>e.value))};c.result=function(a){return h.isNone(a)?f.resolve():a.then(b=>({ok:!0,value:b})).catch(b=>({ok:!1,error:b}))};c.resultOrAbort=function(a){return a.then(b=>({ok:!0,value:b})).catch(b=>{f.throwIfAbortError(b);
return{ok:!1,error:b}})};Object.defineProperty(c,"__esModule",{value:!0})});