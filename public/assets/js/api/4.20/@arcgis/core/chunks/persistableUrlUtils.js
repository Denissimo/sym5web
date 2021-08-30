/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as r}from"../core/lang.js";import{makeAbsolute as e,makeRelative as t,isAbsolute as o,normalize as s,isDataProtocol as l,changeDomain as a,hasSameOrigin as u,appUrl as n}from"../core/urlUtils.js";function c(r,o){const s=o&&o.url&&o.url.path;if(r&&s&&(r=e(r,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const e=t(r,o.portalItem.itemUrl);h.test(e)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(e).path)}return U(r,o&&o.portal)}function i(r,u,n=0){if(!r)return r;!o(r)&&u&&u.blockedRelativeUrls&&u.blockedRelativeUrls.push(r);let c=e(r);if(u){const e=u.verifyItemRelativeUrls&&u.verifyItemRelativeUrls.rootPath||u.url&&u.url.path;if(e){const o=U(e,u.portal);c=t(U(c,u.portal),o,o),c!==r&&u.verifyItemRelativeUrls&&u.verifyItemRelativeUrls.writtenUrls.push(c)}}return c=function(r,e){if(e&&!e.isPortal&&e.urlKey&&e.customBaseUrl)return a(r,`${e.urlKey}.${e.customBaseUrl}`,e.portalHostname);return r}(c,u&&u.portal),o(c)&&(c=s(c)),null!=u&&u.resources&&null!=u&&u.portalItem&&!o(c)&&!l(c)&&0===n&&u.resources.toKeep.push({resource:u.portalItem.resourceFromPath(c)}),c}function m(r,e,t){return c(r,t)}function p(r,e,t,o){const s=i(r,o);void 0!==s&&(e[t]=s)}const f=/\/items\/([^\/]+)\/resources\//,h=/^\.\/resources\//;function v(e){const t=r(e)?e.match(f):null;return r(t)?t[1]:null}function U(r,e){if(!e||e.isPortal||!e.urlKey||!e.customBaseUrl)return r;const t=`${e.urlKey}.${e.customBaseUrl}`;return u(n,`${n.scheme}://${t}`)?a(r,e.portalHostname,t):a(r,t,e.portalHostname)}var I=Object.freeze({__proto__:null,fromJSON:c,toJSON:i,read:m,write:p,itemIdFromResourceUrl:v});export{c as f,v as i,I as p,m as r,i as t,p as w};
