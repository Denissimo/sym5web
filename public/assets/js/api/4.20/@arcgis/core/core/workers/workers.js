/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../Error.js";import{g as r,h as t}from"../lang.js";import{onAbortOrThrow as s,createAbortController as o,isPromiseLike as n,isAbortError as a,throwIfAborted as i}from"../promiseUtils.js";import c from"./Connection.js";export{default as Connection}from"./Connection.js";import l,{M as d,r as u,n as m,t as h,p as f}from"./RemoteClient.js";export{default as RemoteClient}from"./RemoteClient.js";import{version as g,buildDate as p,revision as b,workerMessages as k}from"../../kernel.js";import{L as w}from"../../chunks/Logger.js";import{g as v}from"../../chunks/assets.js";import E from"../../config.js";import"../../intl.js";import{makeAbsolute as y}from"../urlUtils.js";import{g as j}from"../../chunks/locale.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/handleUtils.js";import"../../request.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";let _=null;_=y(v("esri/core/workers/init.js"));const P={};P.baseUrl=y(v("dojo/")),P.packages=[{name:"esri",location:"../esri"}];class I{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((r=>{this[r]=(...t)=>e[r](...t)}))}}const M=r.MutationObserver||r.WebKitMutationObserver,O=function(){let e;if(r.process&&r.process.nextTick)e=e=>{r.process.nextTick(e)};else if(r.Promise)e=e=>{r.Promise.resolve().then(e)};else if(M){const r=[],t=document.createElement("div");new M((()=>{for(;r.length>0;)r.shift()()})).observe(t,{attributes:!0}),e=e=>{r.push(e),t.setAttribute("queueStatus","1")}}return e}(),N=(()=>{const e=r.MessageEvent;try{new e("message",{data:null})}catch{return(e,r={})=>{const{data:t,bubbles:s=!1,cancelable:o=!1}=r,n=document.createEvent("Event");return n.initEvent(e,s,o),n.data=t,n}}return(r,t)=>new e(r,t)})();class L{constructor(){this._dispatcher=new I,this._workerPostMessage({type:d.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){O((()=>{this._workerMessageHandler(N("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,r,t){this._dispatcher.addEventListener(e,r,t)}removeEventListener(e,r,t){this._dispatcher.removeEventListener(e,r,t)}_workerPostMessage(e){O((()=>{this.dispatchEvent(N("message",{data:e}))}))}async _workerMessageHandler(e){const r=u(e);if(r&&r.type===d.OPEN){const{modulePath:e,jobId:t}=r;let s=await l.loadWorker(e);s||(s=await import(
/* @vite-ignore */
/* webpackIgnore: true */
e));const o=l.connect(s);this._workerPostMessage({type:d.OPENED,jobId:t,data:o})}}}const C=w.getLogger("esri.core.workers"),{HANDSHAKE:S}=d;let R,H;const A="Failed to create Worker. Fallback to execute module in main thread";async function J(){if(!t("esri-workers"))return U(new L);if(!R&&!H)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace('"{CONFIGURATION}"',`'${function(){let e;if(null!=E.default){const r={...E};delete r.default,e=JSON.parse(JSON.stringify(r))}else e=JSON.parse(JSON.stringify(E));e.assetsPath=y(e.assetsPath),e.request.interceptors=[],e.log.interceptors=[],e.locale=j(),e.has={"csp-restrictions":t("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":t("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":t("esri-2d-query-centroid-enabled"),"featurelayer-pbf":t("featurelayer-pbf"),"esri-atomics":t("esri-atomics"),"esri-shared-array-buffer":t("esri-shared-array-buffer"),"esri-tiles-debug":t("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":t("esri-workers-arraybuffer-transfer"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=y(e.workers.loaderUrl):_&&(e.workers.loaderUrl=_);e.workers.workerPath?e.workers.workerPath=y(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient";const r=E.workers.loaderConfig,s=function(e){var r;const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages&&e.packages.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=P.baseUrl),null==(r=P.packages)||r.forEach((e=>{!function(e,r){for(const t of e)if(t.name===r.name)return;e.push(r)}(t.packages,e)})),t}({baseUrl:null==r?void 0:r.baseUrl,locale:j(),has:{"csp-restrictions":t("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==r?void 0:r.has},map:{...null==r?void 0:r.map},paths:{...null==r?void 0:r.paths},packages:(null==r?void 0:r.packages)||[]}),o={version:g,buildDate:p,revision:b};return JSON.stringify({esriConfig:e,loaderConfig:s,kernelInfo:o})}()}'`);R=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){H=e||{}}let e;if(R)try{e=new Worker(R,{name:"esri-worker-"+D++})}catch(r){C.warn(A,H),e=new L}else C.warn(A,H),e=new L;return U(e)}async function U(e){return new Promise((r=>{function t(o){const n=u(o);n&&n.type===S&&(e.removeEventListener("message",t),e.removeEventListener("error",s),r(e))}function s(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",s),C.warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new L).addEventListener("message",t),e.addEventListener("error",s)}e.addEventListener("message",t),e.addEventListener("error",s)}))}let D=0;const W=w.getLogger("esri.core.workers"),{ABORT:x,INVOKE:q,OPEN:$,OPENED:F,RESPONSE:T}=d;class K{constructor(e,r){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=r,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),W.error(e)}))}static async create(e){const r=await J();return new K(r,e)}terminate(){this.worker.terminate()}async open(e,r={}){const{signal:t}=r,o=m();return new Promise(((r,n)=>{const a={resolve:r,reject:n,abortHandle:s(t,(()=>{this._outJobs.delete(o),this._post({type:x,jobId:o})}))};this._outJobs.set(o,a),this._post({type:$,jobId:o,modulePath:e})}))}_onMessage(e){const r=u(e);if(r)switch(r.type){case F:this._onOpenedMessage(r);break;case T:this._onResponseMessage(r);break;case x:this._onAbortMessage(r);break;case q:this._onInvokeMessage(r)}}_onAbortMessage(e){const r=this._inJobs,t=e.jobId,s=r.get(t);s&&(s.controller&&s.controller.abort(),r.delete(t))}_onInvokeMessage(e){const{methodName:r,jobId:t,data:s,abortable:i}=e,c=i?o():null,l=this._inJobs,d=k[r];let u;try{if("function"!=typeof d)throw new TypeError(`${r} is not a function`);u=d.call(null,s,{signal:c?c.signal:null})}catch(e){return void this._post({type:T,jobId:t,error:h(e)})}n(u)?(l.set(t,{controller:c,promise:u}),u.then((e=>{l.has(t)&&(l.delete(t),this._post({type:T,jobId:t},e))}),(e=>{l.has(t)&&(l.delete(t),e||(e={message:"Error encountered at method"+r}),a(e)||this._post({type:T,jobId:t,error:h(e||{message:`Error encountered at method ${r}`})}))}))):this._post({type:T,jobId:t},u)}_onOpenedMessage(e){var r;const{jobId:t,data:s}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),null==(r=o.abortHandle)||r.remove(),o.resolve(s))}_onResponseMessage(r){var t;const{jobId:s,error:o,data:n}=r,a=this._outJobs.get(s);a&&(this._outJobs.delete(s),null==(t=a.abortHandle)||t.remove(),o?a.reject(e.fromJSON(JSON.parse(o))):a.resolve(n))}_post(e,r,t){return f(this.worker,e,r,t)}}let B=t("esri-workers-debug")?1:t("host-browser")?navigator.hardwareConcurrency-1:0;B||(B=t("safari")&&t("mac")||t("trident")?7:2);let G=0;const V=[];function z(){te()}function Q(e,r){return X(e,{client:r})}async function X(e,r){const t=new c;return await t.open(e,r),t}async function Y(r,s={}){if("string"!=typeof r)throw new e("workers:undefined-module","modulePath is missing");let o=s.strategy||"distributed";if(t("host-webworker")&&!t("esri-workers")&&(o="local"),"local"===o){let e=await l.loadWorker(r);e||(e=await import(
/* @vite-ignore */
/* webpackIgnore: true */
r)),i(s.signal);const t=s.client||e;return X([l.connect(e)],{...s,client:t})}if(await te(),i(s.signal),"dedicated"===o){const e=G++%B;return X([await V[e].open(r,s)],s)}if(s.maxNumWorkers&&s.maxNumWorkers>0){const e=Math.min(s.maxNumWorkers,B);if(e<B){const t=new Array(e);for(let o=0;o<e;++o){const e=G++%B;t[o]=V[e].open(r,s)}return X(t,s)}}return X(V.map((e=>e.open(r,s))),s)}function Z(){re&&(ee.abort(),re=null);for(let e=0;e<V.length;e++)V[e]&&V[e].terminate();V.length=0}let ee,re=null;async function te(){if(re)return re;ee=o();const e=[];for(let r=0;r<B;r++){const t=K.create(r).then((e=>(V[r]=e,e)));e.push(t)}return re=Promise.all(e),re}export{z as initialize,Y as open,Q as openWithPorts,Z as terminate};