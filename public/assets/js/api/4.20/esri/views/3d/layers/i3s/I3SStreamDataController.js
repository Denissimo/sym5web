// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils"],function(e,n,f){let m=function(){function g(a,b){this.requester=a;this.apiKey=b;this.activeRequests=new Set}var k=g.prototype;k.request=function(a,b,c){const h=f.createAbortController();c=f.onAbortOrThrow(c,()=>h.abort());a=this.requester.request(a,b,{signal:h.signal,query:{token:this.apiKey}});const d={response:a,abortController:h,abortHandle:c};this.activeRequests.add(d);f.always(a,()=>{var l;d.abortController=
null;null==(l=d.abortHandle)?void 0:l.remove();d.abortHandle=null;this.activeRequests.delete(d)});return a};k.cancelAll=function(){this.activeRequests.forEach(a=>{var b,c;null==(b=a.abortController)?void 0:b.abort();a.abortController=null;null==(c=a.abortHandle)?void 0:c.remove()});this.activeRequests.clear()};n._createClass(g,[{key:"busy",get:function(){return this.requester.busy}}]);return g}();e.I3SStreamDataController=m;e.default=m;Object.defineProperty(e,"__esModule",{value:!0})});