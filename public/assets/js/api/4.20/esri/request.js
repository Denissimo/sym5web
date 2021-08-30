// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require ./chunks/_rollupPluginBabelHelpers ./config ./kernel ./core/Error ./core/global ./core/has ./core/lang ./core/maybe ./core/promiseUtils ./core/urlUtils ./support/apiKeyUtils ./support/requestUtils".split(" "),function(Q,v,C,n,D,z,A,X,Y,x,h,Z,aa){function q(a,b){return E.apply(this,arguments)}function E(){E=v._asyncToGenerator(function*(a,b){var c=h.isDataProtocol(a);const f=h.isBlobProtocol(a);f||c||(a=h.normalize(a));const d={url:a,requestOptions:{...Y.unwrap(b)}};let e=h.getInterceptor(a);
if(e){a=yield ba(e,d);if(null!=a)return{data:a,getHeader:F,requestOptions:d.requestOptions,url:d.url};e.after||e.error||(e=null)}a=d.url;b=d.requestOptions;if("image"===b.responseType){if(A("host-webworker")||A("host-node"))throw p("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),d);}else if(c)throw p("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+b.responseType),d);if("head"===b.method){if(b.body)throw p("request:invalid-parameters",
Error("body parameter cannot be set when method is 'head'"),d);if(c||f)throw p("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),d);}yield ca();if(B)return B.execute(a,b);const m=x.createAbortController();x.onAbort(b,()=>m.abort());c=yield da({controller:m,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:e,params:d,redoRequest:!1,useIdentity:t.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1});e&&e.after&&e.after(c);return c});
return E.apply(this,arguments)}function ea(a){(a=h.getOrigin(a))&&!q._corsServers.includes(a)&&q._corsServers.push(a)}function R(a){a=h.getOrigin(a);return!a||a.endsWith(".arcgis.com")||q._corsServers.includes(a)||h.isTrustedServer(a)}function p(a,b,c,f){let d="Error";const e={url:c.url,requestOptions:c.requestOptions,getHeader:F,ssl:!1};if(b instanceof D)return b.details?(b.details=X.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=e,b;if(b){c=f&&(g=>f.headers.get(g));
const m=f&&f.status,l=b.message;l&&(d=l);c&&(e.getHeader=c);e.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||m||0;e.subCode=b.subcode;e.messageCode=b.messageCode;e.messages="string"===typeof b.details?[b.details]:b.details;e.raw=G in b?b[G]:b}return x.isAbortError(b)?x.createAbortError():new D(a,d,e)}function ca(){return H.apply(this,arguments)}function H(){H=v._asyncToGenerator(function*(){A("host-webworker")?B||(B=yield new Promise(function(a,b){Q(["./core/workers/request"],a,b)})):q._abortableFetch||
(q._abortableFetch=z.fetch.bind(z))});return H.apply(this,arguments)}function I(){return J.apply(this,arguments)}function J(){J=v._asyncToGenerator(function*(){n.id||(yield new Promise(function(a,b){Q(["./identity/IdentityManager"],function(c){a(Object.freeze({__proto__:null,"default":c}))},b)}))});return J.apply(this,arguments)}function fa(a){return K.apply(this,arguments)}function K(){K=v._asyncToGenerator(function*(a){const b=a.params.url,c=a.params.requestOptions,f=a.controller.signal,d=c.body;
let e=null,m=null,l=null;S&&"HTMLFormElement"in z&&(d instanceof FormData?e=d:d instanceof HTMLFormElement&&(m=d,e=new FormData(m)));"string"===typeof d&&(l=d);a.fetchOptions={cache:c.cacheBust&&!q._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===c.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:f};if(e||l)a.fetchOptions.body=e||l;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&c.query.token||
e&&e.get&&e.get("token")||m&&m.elements.token);!a.hasToken&&C.apiKey&&Z.supportsApiKey(b)&&(c.query||(c.query={}),c.query.token=C.apiKey,a.hasToken=!0);if(a.useIdentity&&!a.hasToken&&!a.credentialToken&&!T(b)&&!x.isAborted(f)){let g;"immediate"===c.authMode?(yield I(),g=yield n.id.getCredential(b,{signal:f}),a.credential=g):"no-prompt"===c.authMode?(yield I(),g=yield n.id.getCredential(b,{prompt:!1,signal:f}).catch(()=>{}),a.credential=g):n.id&&(g=n.id.findCredential(b));g&&(a.credentialToken=g.token,
a.useSSL=!!g.ssl)}});return K.apply(this,arguments)}function T(a){return ha.some(b=>b.test(a))}function ia(a){return L.apply(this,arguments)}function L(){L=v._asyncToGenerator(function*(a){let b=a.params.url;const c=a.params.requestOptions,f=a.fetchOptions,d=h.isBlobProtocol(b)||h.isDataProtocol(b),e=c.responseType||"json",m=d?0:null!=c.timeout?c.timeout:t.timeout;var l=!1;if(!d){a.useSSL&&(b=h.toHTTPS(b));c.cacheBust&&"default"===f.cache&&(b=h.addQueryParameter(b,"request.preventCache",Date.now()));
var g={...c.query};a.credentialToken&&(g.token=a.credentialToken);l=h.objectToQuery(g);A("esri-url-encodes-apostrophe")&&(l=l.replace(/'/g,"%27"));const u=b.length+1+l.length;l="delete"===c.method||"post"===c.method||"put"===c.method||!!c.body||u>t.maxUrlLength;const w=c.useProxy||!!h.getProxyRule(b);if(w){const M=h.getProxyUrl(b);var y=M.path;!l&&y.length+1+u>t.maxUrlLength&&(l=!0);M.query&&(g={...M.query,...g})}if("HEAD"===f.method&&(l||w)){if(l){if(u>t.maxUrlLength)throw p("request:invalid-parameters",
Error("URL exceeds maximum length"),a.params);throw p("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(w)throw p("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),a.params);}l?(f.method="delete"===c.method?"DELETE":"put"===c.method?"PUT":"POST",c.body?b=h.addQueryParameters(b,g):(f.body=h.objectToQuery(g),f.headers["Content-Type"]="application/x-www-form-urlencoded")):b=h.addQueryParameters(b,g);w&&(a.useProxy=!0,b=`${y}?${b}`);
g.token&&S&&f.body instanceof FormData&&(y=f.body,y.set?y.set("token",g.token):y.append("token",g.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:h.hasSameOrigin(b,h.appUrl)||(h.isTrustedServer(b)?a.withCredentials=!0:n.id&&(g=n.id.findServerInfo(b))&&g.webTierAuth&&(a.withCredentials=!0));a.withCredentials&&(f.credentials="include")}g=0;let U=!1;0<m&&(g=setTimeout(()=>{U=!0;a.controller.abort()},m));let r,k;try{if("native-request-init"===c.responseType)k=f,k.url=b;
else if("image"!==c.responseType||"default"!==f.cache||"GET"!==f.method||l||ja(c.headers)||!d&&!a.useProxy&&t.proxyUrl&&!R(b))if(r=yield q._abortableFetch(b,f),a.useProxy||ea(b),"native"===c.responseType)k=r;else{if("HEAD"!==f.method)if(r.ok){switch(e){case "array-buffer":k=yield r.arrayBuffer();break;case "blob":case "image":k=yield r.blob();break;default:k=yield r.text()}g&&(clearTimeout(g),g=0);if("json"===e||"xml"===e||"document"===e)if(k)switch(e){case "json":k=JSON.parse(k);break;case "xml":k=
V(k,"application/xml");break;case "document":k=V(k,"text/html")}else k=null;if(k){if("array-buffer"===e||"blob"===e){const u=r.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(u)&&750>=k["blob"===e?"size":"byteLength"])try{const w=yield(new Response(k)).json();w.error&&(k=w)}catch{}}"image"===e&&k instanceof Blob&&(k=yield W(URL.createObjectURL(k),a,!0))}}else k=yield r.text()}else k=yield W(b,a)}catch(u){if("AbortError"===u.name){if(U)throw Error("Timeout exceeded");throw x.createAbortError("Request canceled");
}if(!r&&u instanceof TypeError&&t.proxyUrl&&!c.body&&"delete"!==c.method&&"head"!==c.method&&"post"!==c.method&&"put"!==c.method&&!a.useProxy&&!R(b))a.redoRequest=!0,h.addProxyRule({proxyUrl:t.proxyUrl,urlPrefix:h.getOrigin(b)});else throw u;}finally{g&&clearTimeout(g)}return[r,k]});return L.apply(this,arguments)}function ba(a,b){return N.apply(this,arguments)}function N(){N=v._asyncToGenerator(function*(a,b){if(null!=a.responseData)return a.responseData;a.headers&&(b.requestOptions.headers={...b.requestOptions.headers,
...a.headers});a.query&&(b.requestOptions.query={...b.requestOptions.query,...a.query});if(a.before){let c,f;try{f=yield a.before(b)}catch(d){c=p("request:interceptor",d,b)}if(f instanceof Error||f instanceof D)c=p("request:interceptor",f,b);if(c)throw a.error&&a.error(c),c;return f}});return N.apply(this,arguments)}function ja(a){if(a)for(const b of Object.getOwnPropertyNames(a))if(a[b])return!0;return!1}function V(a,b){let c;try{c=(new DOMParser).parseFromString(a,b)}catch{}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");
return c}function da(a){return O.apply(this,arguments)}function O(){O=v._asyncToGenerator(function*(a){var b,c;yield fa(a);let f;try{do[f,d]=yield ia(a);while(!(yield ka(a,f,d)))}catch(m){var d=p("request:server",m,a.params,f);d.details.ssl=a.useSSL;a.interceptor&&a.interceptor.error&&a.interceptor.error(d);throw d;}const e=a.params.url;!/\/sharing\/rest\/(accounts|portals)\/self/i.test(e)||a.hasToken||a.credentialToken||null==(b=d)||null==(c=b.user)||!c.username||h.isTrustedServer(e)||(b=h.getOrigin(e,
!0))&&t.trustedServers.push(b);(b=a.credential)&&n.id&&(c=(c=n.id.findServerInfo(b.server))&&c.owningSystemUrl)&&(c=c.replace(/\/?$/,"/sharing"),(b=n.id.findCredential(c,b.userId))&&-1===n.id._getIdenticalSvcIdx(c,b)&&b.resources.unshift(c));return{data:d,getHeader:f?m=>f.headers.get(m):F,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}});return O.apply(this,arguments)}function ka(a,b,c){return P.apply(this,arguments)}function P(){P=v._asyncToGenerator(function*(a,b,c){if(a.redoRequest)return a.redoRequest=
!1;const f=a.params.requestOptions;if(!b||"native"===f.responseType||"native-request-init"===f.responseType)return!0;let d;if(!b.ok)throw d=Error(`Unable to load ${b.url} status: ${b.status}`),d[G]=c,d;null!=c&&c.error&&(d=c.error);let e,m,l;d&&(e=Number(d.code),m=d.hasOwnProperty("subcode")?Number(d.subcode):null,l=(l=d.messageCode)&&l.toUpperCase());b=f.authMode;if(403===e&&(4===m||d.message&&-1<d.message.toLowerCase().indexOf("ssl")&&-1===d.message.toLowerCase().indexOf("permission"))){if(!a.useSSL)return a.useSSL=
!0,!1}else if(!a.hasToken&&a.useIdentity&&("no-prompt"!==b||498===e)&&-1!==la.indexOf(e)&&!T(a.params.url)&&(403!==e||-1===ma.indexOf(l)&&(null==m||2===m&&a.credentialToken))){yield I();try{const g=yield n.id.getCredential(a.params.url,{error:p("request:server",d,a.params),prompt:"no-prompt"!==b,signal:a.controller.signal,token:a.credentialToken});a.credential=g;a.credentialToken=g.token;a.useSSL=a.useSSL||g.ssl;return!1}catch(g){if("no-prompt"===b)return a.credential=null,a.credentialToken=null,
!1;d=g}}if(d)throw d;return!0});return P.apply(this,arguments)}function W(a,b,c=!1){const f=b.controller.signal,d=new Image;d.crossOrigin=b.withCredentials?"use-credentials":"anonymous";d.alt="";d.src=a;return aa.loadImageAsync(d,a,c,f)}let B;const t=C.request,S="FormData"in z,la=[499,498,403,401],ma=["COM_0056","COM_0057","SB_0008"],ha=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F=()=>null,G=Symbol();q._abortableFetch=null;q._corsServers=["https://server.arcgisonline.com",
"https://services.arcgisonline.com"];return q});