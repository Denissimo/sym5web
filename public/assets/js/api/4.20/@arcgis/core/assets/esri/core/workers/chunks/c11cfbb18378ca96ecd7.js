(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3754],{3754:(e,t,r)=>{"use strict";r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>c,getSiblingOfSameType:()=>m,getSiblingOfSameTypeI:()=>f,removeAllResources:()=>i,removeResource:()=>u,splitPrefixFileNameAndExtension:()=>d});var a=r(82058),s=r(60991),o=r(76506),n=r(32101);async function c(e,t={},r){await e.load(r);const a=(0,n.v_)(e.itemUrl,"resources"),{start:s=1,num:c=10,sortOrder:l="asc",sortField:u="created"}=t,i={query:{start:s,num:c,sortOrder:l,sortField:u,token:e.apiKey},signal:(0,o.c)(r,"signal")},p=await e.portal._request(a,i);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function l(e,t,r,a){if(!e.hasPath())throw new s.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const c=e.portalItem;await c.load(a);const l=(0,n.v_)(c.userItemUrl,"add"===t?"addResources":"updateResources"),[u,i]=p(e.path),d=await h(r),m=new FormData;return u&&"."!==u&&m.append("resourcesPrefix",u),m.append("fileName",i),m.append("file",d,i),m.append("f","json"),(0,o.i)(a)&&a.access&&m.append("access",a.access),await c.portal._request(l,{method:"post",body:m,signal:(0,o.c)(a,"signal")}),e}async function u(e,t,r){if(!t.hasPath())throw new s.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal._request(a,{method:"post",query:{resource:t.path},signal:(0,o.c)(r,"signal")}),t.portalItem=null}async function i(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,o.c)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return(0,o.b)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,s]=p(t);return[a,s,r]}async function h(e){return e instanceof Blob?e:(await(0,a.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+a))}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+a))}r(31450),r(71552),r(88762),r(92143),r(40642),r(81172),r(50406)}}]);