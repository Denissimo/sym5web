// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/has","../core/maybe","../core/promiseUtils"],function(k,l,m,q){function n(){try{return new DOMException("Aborted","AbortError")}catch{const a=Error();a.name="AbortError";return a}}k.loadImageAsync=function(a,p,r=!1,b){return new Promise((t,e)=>{if(q.isAborted(b))e(n());else{var c=()=>{f();e(Error(`Unable to load ${p}`))},d=()=>{const g=a;f();t(g)},h=()=>{if(a){var g=a;f();g.src="";e(n())}},f=()=>{l("esri-image-decode")||(a.removeEventListener("error",c),a.removeEventListener("load",
d));a=d=c=null;m.isSome(b)&&b.removeEventListener("abort",h);h=null;r&&URL.revokeObjectURL(p)};m.isSome(b)&&b.addEventListener("abort",h);l("esri-image-decode")?a.decode().then(d,c):(a.addEventListener("error",c),a.addEventListener("load",d))}})};Object.defineProperty(k,"__esModule",{value:!0})});