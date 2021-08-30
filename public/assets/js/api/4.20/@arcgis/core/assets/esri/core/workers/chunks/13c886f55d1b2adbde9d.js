(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5073,2058],{73173:(e,t,r)=>{"use strict";r.d(t,{g:()=>l});var n=r(31450),o=(r(82058),r(60991)),s=r(92143),a=r(32101);const i=s.L.getLogger("esri.assets");function l(e){if(!n.Z.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(n.Z.assetsPath,e)}},32727:(e,t,r)=>{"use strict";r.r(t),r.d(t,{registerFunctions:()=>c});var n=r(1886),o=r(72256),s=r(50406),a=r(73796),i=r(42870);function l(e){return e instanceof a.Z}function u(e,t,r,u,c){return c(e,t,(function(e,t,c){if(c.length<2)return u(new Error("Missing Parameters"));if(null===(c=(0,n.Q)(c))[0]&&null===c[1])return(0,s.DB)(!1);if((0,n.z)(c[0]))return c[1]instanceof a.Z?(0,s.DB)(new o.S({parentfeatureset:c[0],relation:r,relationGeom:c[1]})):null===c[1]?(0,s.DB)(new o.E({parentfeatureset:c[0]})):u("Spatial Relation cannot accept this parameter type");if(l(c[0])){if(l(c[1])){let e=null;switch(r){case"esriSpatialRelEnvelopeIntersects":e=(0,i.kK)((0,n.ak)(c[0]),(0,n.ak)(c[1]));break;case"esriSpatialRelIntersects":e=(0,i.kK)(c[0],c[1]);break;case"esriSpatialRelContains":e=(0,i.r3)(c[0],c[1]);break;case"esriSpatialRelOverlaps":e=(0,i.Nm)(c[0],c[1]);break;case"esriSpatialRelWithin":e=(0,i.uh)(c[0],c[1]);break;case"esriSpatialRelTouches":e=(0,i.W4)(c[0],c[1]);break;case"esriSpatialRelCrosses":e=(0,i.jU)(c[0],c[1])}return null!==e?e:(0,s.d1)(new Error("Unrecognised Relationship"))}return(0,n.z)(c[1])?(0,s.DB)(new o.S({parentfeatureset:c[1],relation:r,relationGeom:c[0]})):null===c[1]?(0,s.DB)(!1):u("Spatial Relation cannot accept this parameter type")}return null!==c[0]?u("Spatial Relation cannot accept this parameter type"):(0,n.z)(c[1])?(0,s.DB)(new o.E({parentfeatureset:c[1]})):c[1]instanceof a.Z||null===c[1]?(0,s.DB)(!1):void 0}))}function c(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return u(t,r,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return u(t,r,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,r){return u(t,r,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return u(t,r,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,r){return u(t,r,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,r){return u(t,r,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,r){return u(t,r,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,(function(e,t,r){if(r=(0,n.Q)(r),(0,n.p)(r,3,3),l(r[0])&&l(r[1]))return(0,i.LV)(r[0],r[1],(0,n.t)(r[2]));if(r[0]instanceof a.Z&&null===r[1])return!1;if(r[1]instanceof a.Z&&null===r[0])return!1;if((0,n.z)(r[0])&&null===r[1])return new o.E({parentfeatureset:r[0]});if((0,n.z)(r[1])&&null===r[0])return new o.E({parentfeatureset:r[1]});if((0,n.z)(r[0])&&r[1]instanceof a.Z)return r[0].relate(r[1],(0,n.t)(r[2]));if((0,n.z)(r[1])&&r[0]instanceof a.Z)return r[1].relate(r[0],(0,n.t)(r[2]));if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")}))})}r(91597),r(92143),r(31450),r(76506),r(71552),r(40642),r(34250),r(91306),r(86656),r(22723),r(86787),r(97714),r(17533),r(81172),r(2906),r(60947),r(74673),r(21972),r(23639),r(91055),r(27794),r(6906),r(60991),r(26341),r(35132),r(89623),r(21801),r(84069),r(44567),r(98380),r(92896),r(56240),r(3482),r(32422),r(97546),r(57251),r(59465),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(40267),r(88762),r(32101),r(21929),r(74569),r(22781),r(92228),r(72274),r(5777),r(65514),r(46987),r(37453),r(73173),r(82058),r(66284),r(33921)},33921:(e,t,r)=>{"use strict";r.d(t,{a:()=>w,b:()=>T,c:()=>y,f:()=>L});var n=r(57251),o=r(3482),s=r(76506);const a={year:"numeric",month:"numeric",day:"numeric"},i={year:"numeric",month:"long",day:"numeric"},l={year:"numeric",month:"short",day:"numeric"},u={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},d={...c,second:"numeric"},h={"short-date":a,"short-date-short-time":{...a,...c},"short-date-short-time-24":{...a,...c,hour12:!1},"short-date-long-time":{...a,...d},"short-date-long-time-24":{...a,...d,hour12:!1},"short-date-le":a,"short-date-le-short-time":{...a,...c},"short-date-le-short-time-24":{...a,...c,hour12:!1},"short-date-le-long-time":{...a,...d},"short-date-le-long-time-24":{...a,...d,hour12:!1},"long-month-day-year":i,"long-month-day-year-short-time":{...i,...c},"long-month-day-year-short-time-24":{...i,...c,hour12:!1},"long-month-day-year-long-time":{...i,...d},"long-month-day-year-long-time-24":{...i,...d,hour12:!1},"day-short-month-year":l,"day-short-month-year-short-time":{...l,...c},"day-short-month-year-short-time-24":{...l,...c,hour12:!1},"day-short-month-year-long-time":{...l,...d},"day-short-month-year-long-time-24":{...l,...d,hour12:!1},"long-date":u,"long-date-short-time":{...u,...c},"long-date-short-time-24":{...u,...c,hour12:!1},"long-date-long-time":{...u,...d},"long-date-long-time-24":{...u,...d,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":d},m=(0,n.s)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});m.toJSON.bind(m),m.fromJSON.bind(m);const f={ar:"ar-u-nu-latn-ca-gregory"};let p=new WeakMap,g=h["short-date-short-time"];function y(e){return h[e]||null}function w(e,t){return function(e){const t=e||g;if(!p.has(t)){const e=(0,o.g)(),r=f[(0,o.g)()]||e;p.set(t,new Intl.DateTimeFormat(r,t))}return p.get(t)}(t).format(e)}(0,o.b)((()=>{p=new WeakMap,g=h["short-date-short-time"]}));const b={ar:"ar-u-nu-latn"};let S=new WeakMap,k={};function T(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function L(e,t){return function(e){const t=e||k;if(!S.has(t)){const r=(0,o.g)(),n=b[(0,o.g)()]||r;S.set(t,new Intl.NumberFormat(n,e))}return(0,s.a)(S.get(t))}(t).format(e)}(0,o.b)((()=>{S=new WeakMap,k={}}))},66284:(e,t,r)=>{"use strict";r.d(t,{ME:()=>k,ng:()=>f});var n=r(33921),o=r(92143),s=r(71552),a=r(40642),i=r(3482),l=r(60991),u=r(50406),c=r(82058),d=r(76506),h=r(73173);r(57251),r(31450),r(81172),r(88762),r(32101);const m=o.L.getLogger("esri.intl");function f(e,t,r={}){const{format:o={}}=r;return(0,a.r)(e,(e=>function(e,t,r){let o,a;const i=e.indexOf(":");if(-1===i?o=e.trim():(o=e.slice(0,i).trim(),a=e.slice(i+1).trim()),!o)return"";const l=(0,s.g)(o,t);if(null==l)return"";const u=r[a]||r[o];return u?function(e,t){switch(t.type){case"date":return(0,n.a)(e,t.intlOptions);case"number":return(0,n.f)(e,t.intlOptions);default:return m.warn("missing format descriptor for key {key}"),p(e)}}(l,u):a?function(e,t){switch(t.toLowerCase()){case"dateformat":return(0,n.a)(e);case"numberformat":return(0,n.f)(e);default:return m.warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?(0,n.a)(e):/^numberformat/i.test(t)?(0,n.f)(e):p(e)}}(l,a):p(l)}(e,t,o)))}function p(e){switch(typeof e){case"string":return e;case"number":return(0,n.f)(e);case"boolean":return""+e;default:return e instanceof Date?(0,n.a)(e):""}}const g=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,y={ar:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function w(e){var t;return null!=(t=y[e])&&t}const b=[],S=new Map;async function k(e){const t=(0,i.g)();S.has(e)||S.set(e,async function(e,t){const r=[];for(const n of b)if(T(n.pattern,e))try{return await n.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new l.Z("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new l.Z("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t));const r=S.get(e);return await L.add(r),r}function T(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,i.b)((()=>{S.clear()}));const L=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=(0,u.dD)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}};async function v(e){if((0,d.i)(E.fetchBundleAsset))return E.fetchBundleAsset(e);const t=await(0,c.default)(e,{responseType:"text"});return JSON.parse(t.data)}class D{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let n;n="string"==typeof r?e=>new URL(e,new URL(r,d.g.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=n,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,r,n){const o=t.exec(r);if(!o)throw new l.Z("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${t}"`);const s=o[1]?`${o[1]}/`:"",a=o[2],i=function(e){if(!g.test(e))return null;const[,t,r]=g.exec(e),n=t+(r?"-"+r.toUpperCase():"");return w(n)?n:w(t)?t:null}(n),u=`${s}${a}.json`,c=i?`${s}${a}_${i}.json`:u;let d;try{d=await v(e(c))}catch(t){if(c===u)throw new l.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:t});try{d=await v(e(u))}catch(e){throw new l.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:e})}}return d}(this.getAssetUrl,this.matcher,e,t)}}const E={};var O;!function(e){b.includes(e)||(function(e){for(const t of S.keys())T(e.pattern,t)&&S.delete(t)}(e),b.unshift(e))}((O={pattern:"esri/",location:h.g},new D(O)))},1709:(e,t,r)=>{"use strict";function n(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function o(e){return e.toLowerCase().trim()}r.d(t,{Z:()=>s});const s=class{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const r of e){const e=r&&r.name;if(e){const s=o(e);this._fieldsMap.set(e,r),this._fieldsMap.set(s,r),t.push(s),n(r)&&(this.dateFields.push(r),this._dateFieldsSet.add(r))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}},82058:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M,l:()=>d,r:()=>x,s:()=>c});var n=r(31450),o=r(88762),s=r(60991),a=r(76506),i=r(50406),l=r(32101);r(71552),r(92143),r(40642),r(81172);const u=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c(e){const t=(0,l.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!u.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function d(e,t,r=!1,n){return new Promise(((o,s)=>{if((0,i.Hc)(n))return void s(h());let l=()=>{d(),s(new Error(`Unable to load ${t}`))},u=()=>{const t=e;d(),o(t)},c=()=>{if(!e)return;const t=e;d(),t.src="",s(h())};const d=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",u)),l=null,u=null,e=null,(0,a.i)(n)&&n.removeEventListener("abort",c),c=null,r&&URL.revokeObjectURL(t)};(0,a.i)(n)&&n.addEventListener("abort",c),(0,a.h)("esri-image-decode")?e.decode().then(u,l):(e.addEventListener("error",l),e.addEventListener("load",u))}))}function h(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function m(e,t){const u=(0,l.HK)(e),d=(0,l.jc)(e);d||u||(e=(0,l.Fv)(e));const h={url:e,requestOptions:{...(0,a.u)(t)}};let y=(0,l.oh)(e);if(y){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=L("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(y,h);if(null!=e)return{data:e,getHeader:S,requestOptions:h.requestOptions,url:h.url};y.after||y.error||(y=null)}if(e=h.url,"image"===(t=h.requestOptions).responseType){if((0,a.h)("host-webworker")||(0,a.h)("host-node"))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),h)}else if(u)throw L("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),h);if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),h);if(u||d)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),h)}if(await async function(){(0,a.h)("host-webworker")?f||(f=await r.e(9768).then(r.bind(r,89768))):m._abortableFetch||(m._abortableFetch=a.g.fetch.bind(a.g))}(),f)return f.execute(e,t);const w=(0,i.yi)();(0,i.fu)(t,(()=>w.abort()));const b={controller:w,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:y,params:h,redoRequest:!1,useIdentity:p.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},k=await async function(e){var t,r;let s,u;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,l=r.body;let u=null,d=null,h=null;if(g&&"HTMLFormElement"in a.g&&(l instanceof FormData?u=l:l instanceof HTMLFormElement&&(d=l,u=new FormData(d))),"string"==typeof l&&(h=l),e.fetchOptions={cache:r.cacheBust&&!m._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(u||h)&&(e.fetchOptions.body=u||h),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||u&&u.get&&u.get("token")||d&&d.elements.token),!e.hasToken&&n.Z.apiKey&&c(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!D(t)&&!(0,i.Hc)(s)){let n;"immediate"===r.authMode?(await v(),n=await o.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await v(),n=await o.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[s,u]=await E(e)}while(!await q(e,s,u))}catch(t){const r=L("request:server",t,e.params,s);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const d=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(d)&&!e.hasToken&&!e.credentialToken&&null!=(t=u)&&null!=(r=t.user)&&r.username&&!(0,l.kl)(d)){const e=(0,l.P$)(d,!0);e&&p.trustedServers.push(e)}const h=e.credential;if(h&&o.id){const e=o.id.findServerInfo(h.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,h.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:u,getHeader:s?e=>s.headers.get(e):S,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(b);return y&&y.after&&y.after(k),k}let f;const p=n.Z.request,g="FormData"in a.g,y=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],S=()=>null,k=Symbol();function T(e){const t=(0,l.P$)(e);return!t||t.endsWith(".arcgis.com")||m._corsServers.includes(t)||(0,l.kl)(t)}function L(e,t,r,n){let o="Error";const l={url:r.url,requestOptions:r.requestOptions,getHeader:S,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,a.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=l,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(l.getHeader=e),l.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,l.subCode=t.subcode,l.messageCode=t.messageCode,"string"==typeof t.details?l.messages=[t.details]:l.messages=t.details,l.raw=k in t?t[k]:t}return(0,i.D_)(t)?(0,i.zE)():new s.Z(e,o,l)}async function v(){o.id||await Promise.all([r.e(6229),r.e(1503),r.e(4494)]).then(r.bind(r,64494))}function D(e){return b.some((t=>t.test(e)))}async function E(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=(0,l.jc)(t)||(0,l.HK)(t),u=r.responseType||"json",c=s?0:null!=r.timeout?r.timeout:p.timeout;let d=!1;if(!s){e.useSSL&&(t=(0,l.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,l.ZN)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let i=(0,l.B7)(s);(0,a.h)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const u=t.length+1+i.length;let c;d="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||u>p.maxUrlLength;const h=r.useProxy||!!(0,l.ed)(t);if(h){const e=(0,l.b7)(t);c=e.path,!d&&c.length+1+u>p.maxUrlLength&&(d=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(d||h)){if(d){if(u>p.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.fl)(t,s):(n.body=(0,l.B7)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.fl)(t,s),h&&(e.useProxy=!0,t=`${c}?${t}`),s.token&&g&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.D6)(t,l.Gd))if((0,l.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let h,f,y=0,w=!1;c>0&&(y=setTimeout((()=>{w=!0,e.controller.abort()}),c));try{if("native-request-init"===r.responseType)f=n,f.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||d||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&p.proxyUrl&&!T(t)){if(h=await m._abortableFetch(t,n),e.useProxy||function(e){const t=(0,l.P$)(e);t&&!m._corsServers.includes(t)&&m._corsServers.push(t)}(t),"native"===r.responseType)f=h;else if("HEAD"!==n.method)if(h.ok){switch(u){case"array-buffer":f=await h.arrayBuffer();break;case"blob":case"image":f=await h.blob();break;default:f=await h.text()}if(y&&(clearTimeout(y),y=0),"json"===u||"xml"===u||"document"===u)if(f)switch(u){case"json":f=JSON.parse(f);break;case"xml":f=O(f,"application/xml");break;case"document":f=O(f,"text/html")}else f=null;if(f){if("array-buffer"===u||"blob"===u){const e=h.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&f["blob"===u?"size":"byteLength"]<=750)try{const e=await new Response(f).json();e.error&&(f=e)}catch{}}"image"===u&&f instanceof Blob&&(f=await _(URL.createObjectURL(f),e,!0))}}else f=await h.text()}else f=await _(t,e)}catch(n){if("AbortError"===n.name){if(w)throw new Error("Timeout exceeded");throw(0,i.zE)("Request canceled")}if(!(!h&&n instanceof TypeError&&p.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||T(t))throw n;e.redoRequest=!0,(0,l.tD)({proxyUrl:p.proxyUrl,urlPrefix:(0,l.P$)(t)})}finally{y&&clearTimeout(y)}return[h,f]}function O(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function q(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,a,i,l;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[k]=r,s;null!=r&&r.error&&(s=r.error),s&&(a=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase());const u=n.authMode;if(403===a&&(4===i||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==y.indexOf(a)&&!D(e.params.url)&&(403!==a||-1===w.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await v();try{const t=await o.id.getCredential(e.params.url,{error:L("request:server",s,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;s=t}}if(s)throw s;return!0}function _(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,d(o,e,r,n)}m._abortableFetch=null,m._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];var x=Object.freeze({__proto__:null,default:m});const M=m}}]);