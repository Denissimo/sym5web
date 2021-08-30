// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/maybe ../../core/urlUtils".split(" "),function(e,m,z,w,l,h){function p(){p=m._asyncToGenerator(function*(a,b={},d){yield a.load(d);var c=h.join(a.itemUrl,"resources");const {start:k=1,num:f=10,sortOrder:n="asc",sortField:g="created"}=b;b={query:{start:k,num:f,sortOrder:n,sortField:g,token:a.apiKey},signal:l.get(d,"signal")};c=yield a.portal._request(c,b);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map(({created:A,
size:B,resource:C})=>({created:new Date(A),size:B,resource:a.resourceFromPath(C)}))}});return p.apply(this,arguments)}function q(){q=m._asyncToGenerator(function*(a,b,d,c){if(!a.hasPath())throw new w(`portal-item-resource-${b}:invalid-path`,"Resource does not have a valid path");const k=a.portalItem;yield k.load(c);b=h.join(k.userItemUrl,"add"===b?"addResources":"updateResources");const [f,n]=x(a.path);d=yield y(d);const g=new FormData;f&&"."!==f&&g.append("resourcesPrefix",f);g.append("fileName",
n);g.append("file",d,n);g.append("f","json");l.isSome(c)&&c.access&&g.append("access",c.access);yield k.portal._request(b,{method:"post",body:g,signal:l.get(c,"signal")});return a});return q.apply(this,arguments)}function r(){r=m._asyncToGenerator(function*(a,b,d){if(!b.hasPath())throw new w("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield a.load(d);const c=h.join(a.userItemUrl,"removeResources");yield a.portal._request(c,{method:"post",query:{resource:b.path},
signal:l.get(d,"signal")});b.portalItem=null});return r.apply(this,arguments)}function t(){t=m._asyncToGenerator(function*(a,b){yield a.load(b);const d=h.join(a.userItemUrl,"removeResources");return a.portal._request(d,{method:"post",query:{deleteAll:!0},signal:l.get(b,"signal")})});return t.apply(this,arguments)}function x(a){const b=a.lastIndexOf("/");return-1===b?[".",a]:[a.slice(0,b),a.slice(b+1)]}function u(a){{const f=h.getPathExtension(a);a=l.isNone(f)?[a,""]:[a.slice(0,a.length-f.length-1),
`.${f}`]}const [b,d]=a,[c,k]=x(b);return[c,k,d]}function y(a){return v.apply(this,arguments)}function v(){v=m._asyncToGenerator(function*(a){return a instanceof Blob?a:(yield z(a.url,{responseType:"blob"})).data});return v.apply(this,arguments)}e.addOrUpdateResource=function(a,b,d,c){return q.apply(this,arguments)};e.contentToBlob=y;e.fetchResources=function(a){return p.apply(this,arguments)};e.getSiblingOfSameType=function(a,b){if(!a.hasPath())return null;const [d,,c]=u(a.path);return a.portalItem.resourceFromPath(h.join(d,
b+c))};e.getSiblingOfSameTypeI=function(a,b){if(!a.hasPath())return null;const [d,,c]=u(a.path);return a.portalItem.resourceFromPath(h.join(d,b+c))};e.removeAllResources=function(a,b){return t.apply(this,arguments)};e.removeResource=function(a,b,d){return r.apply(this,arguments)};e.splitPrefixFileNameAndExtension=u;Object.defineProperty(e,"__esModule",{value:!0})});