(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2058],{82058:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U,l:()=>d,r:()=>P,s:()=>u});var n=r(31450),s=r(88762),o=r(60991),a=r(76506),i=r(50406),l=r(32101);r(71552),r(92143),r(40642),r(81172);const c=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function u(e){const t=(0,l.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!c.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function d(e,t,r=!1,n){return new Promise(((s,o)=>{if((0,i.Hc)(n))return void o(h());let l=()=>{d(),o(new Error(`Unable to load ${t}`))},c=()=>{const t=e;d(),s(t)},u=()=>{if(!e)return;const t=e;d(),t.src="",o(h())};const d=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",c)),l=null,c=null,e=null,(0,a.i)(n)&&n.removeEventListener("abort",u),u=null,r&&URL.revokeObjectURL(t)};(0,a.i)(n)&&n.addEventListener("abort",u),(0,a.h)("esri-image-decode")?e.decode().then(c,l):(e.addEventListener("error",l),e.addEventListener("load",c))}))}function h(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function p(e,t){const c=(0,l.HK)(e),d=(0,l.jc)(e);d||c||(e=(0,l.Fv)(e));const h={url:e,requestOptions:{...(0,a.u)(t)}};let y=(0,l.oh)(e);if(y){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=v("request:interceptor",e,t)}if((n instanceof Error||n instanceof o.Z)&&(r=v("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(y,h);if(null!=e)return{data:e,getHeader:k,requestOptions:h.requestOptions,url:h.url};y.after||y.error||(y=null)}if(e=h.url,"image"===(t=h.requestOptions).responseType){if((0,a.h)("host-webworker")||(0,a.h)("host-node"))throw v("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),h)}else if(c)throw v("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),h);if("head"===t.method){if(t.body)throw v("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),h);if(c||d)throw v("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),h)}if(await async function(){(0,a.h)("host-webworker")?f||(f=await r.e(9768).then(r.bind(r,89768))):p._abortableFetch||(p._abortableFetch=a.g.fetch.bind(a.g))}(),f)return f.execute(e,t);const g=(0,i.yi)();(0,i.fu)(t,(()=>g.abort()));const b={controller:g,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:y,params:h,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},q=await async function(e){var t,r;let o,c;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,l=r.body;let c=null,d=null,h=null;if(w&&"HTMLFormElement"in a.g&&(l instanceof FormData?c=l:l instanceof HTMLFormElement&&(d=l,c=new FormData(d))),"string"==typeof l&&(h=l),e.fetchOptions={cache:r.cacheBust&&!p._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:o},(c||h)&&(e.fetchOptions.body=c||h),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||c&&c.get&&c.get("token")||d&&d.elements.token),!e.hasToken&&n.Z.apiKey&&u(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!E(t)&&!(0,i.Hc)(o)){let n;"immediate"===r.authMode?(await O(),n=await s.id.getCredential(t,{signal:o}),e.credential=n):"no-prompt"===r.authMode?(await O(),n=await s.id.getCredential(t,{prompt:!1,signal:o}).catch((()=>{})),e.credential=n):s.id&&(n=s.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[o,c]=await S(e)}while(!await L(e,o,c))}catch(t){const r=v("request:server",t,e.params,o);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const d=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(d)&&!e.hasToken&&!e.credentialToken&&null!=(t=c)&&null!=(r=t.user)&&r.username&&!(0,l.kl)(d)){const e=(0,l.P$)(d,!0);e&&m.trustedServers.push(e)}const h=e.credential;if(h&&s.id){const e=s.id.findServerInfo(h.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=s.id.findCredential(t,h.userId);e&&-1===s.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:c,getHeader:o?e=>o.headers.get(e):k,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(b);return y&&y.after&&y.after(q),q}let f;const m=n.Z.request,w="FormData"in a.g,y=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],k=()=>null,q=Symbol();function T(e){const t=(0,l.P$)(e);return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||(0,l.kl)(t)}function v(e,t,r,n){let s="Error";const l={url:r.url,requestOptions:r.requestOptions,getHeader:k,ssl:!1};if(t instanceof o.Z)return t.details?(t.details=(0,a.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=l,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,o=t.message;o&&(s=o),e&&(l.getHeader=e),l.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,l.subCode=t.subcode,l.messageCode=t.messageCode,"string"==typeof t.details?l.messages=[t.details]:l.messages=t.details,l.raw=q in t?t[q]:t}return(0,i.D_)(t)?(0,i.zE)():new o.Z(e,s,l)}async function O(){s.id||await Promise.all([r.e(6229),r.e(1503),r.e(4494)]).then(r.bind(r,64494))}function E(e){return b.some((t=>t.test(e)))}async function S(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,o=(0,l.jc)(t)||(0,l.HK)(t),c=r.responseType||"json",u=o?0:null!=r.timeout?r.timeout:m.timeout;let d=!1;if(!o){e.useSSL&&(t=(0,l.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,l.ZN)(t,"request.preventCache",Date.now()));let o={...r.query};e.credentialToken&&(o.token=e.credentialToken);let i=(0,l.B7)(o);(0,a.h)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const c=t.length+1+i.length;let u;d="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>m.maxUrlLength;const h=r.useProxy||!!(0,l.ed)(t);if(h){const e=(0,l.b7)(t);u=e.path,!d&&u.length+1+c>m.maxUrlLength&&(d=!0),e.query&&(o={...e.query,...o})}if("HEAD"===n.method&&(d||h)){if(d){if(c>m.maxUrlLength)throw v("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw v("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw v("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.fl)(t,o):(n.body=(0,l.B7)(o),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.fl)(t,o),h&&(e.useProxy=!0,t=`${u}?${t}`),o.token&&w&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",o.token):e.append("token",o.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.D6)(t,l.Gd))if((0,l.kl)(t))e.withCredentials=!0;else if(s.id){const r=s.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let h,f,y=0,g=!1;u>0&&(y=setTimeout((()=>{g=!0,e.controller.abort()}),u));try{if("native-request-init"===r.responseType)f=n,f.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||d||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!o&&!e.useProxy&&m.proxyUrl&&!T(t)){if(h=await p._abortableFetch(t,n),e.useProxy||function(e){const t=(0,l.P$)(e);t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(t),"native"===r.responseType)f=h;else if("HEAD"!==n.method)if(h.ok){switch(c){case"array-buffer":f=await h.arrayBuffer();break;case"blob":case"image":f=await h.blob();break;default:f=await h.text()}if(y&&(clearTimeout(y),y=0),"json"===c||"xml"===c||"document"===c)if(f)switch(c){case"json":f=JSON.parse(f);break;case"xml":f=x(f,"application/xml");break;case"document":f=x(f,"text/html")}else f=null;if(f){if("array-buffer"===c||"blob"===c){const e=h.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===c?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e)}catch{}}"image"===c&&f instanceof Blob&&(f=await C(URL.createObjectURL(f),e,!0))}}else f=await h.text()}else f=await C(t,e)}catch(n){if("AbortError"===n.name){if(g)throw new Error("Timeout exceeded");throw(0,i.zE)("Request canceled")}if(!(!h&&n instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||T(t))throw n;e.redoRequest=!0,(0,l.tD)({proxyUrl:m.proxyUrl,urlPrefix:(0,l.P$)(t)})}finally{y&&clearTimeout(y)}return[h,f]}function x(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function L(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let o,a,i,l;if(!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[q]=r,o;null!=r&&r.error&&(o=r.error),o&&(a=Number(o.code),i=o.hasOwnProperty("subcode")?Number(o.subcode):null,l=o.messageCode,l=l&&l.toUpperCase());const c=n.authMode;if(403===a&&(4===i||o.message&&o.message.toLowerCase().indexOf("ssl")>-1&&-1===o.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&-1!==y.indexOf(a)&&!E(e.params.url)&&(403!==a||-1===g.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await O();try{const t=await s.id.getCredential(e.params.url,{error:v("request:server",o,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1;o=t}}if(o)throw o;return!0}function C(e,t,r=!1){const n=t.controller.signal,s=new Image;return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.src=e,d(s,e,r,n)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];var P=Object.freeze({__proto__:null,default:p});const U=p}}]);