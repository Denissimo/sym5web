// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../core/urlUtils"],function(f,m,d){function h(b,a){var e=a&&a.url&&a.url.path;b&&e&&(b=d.makeAbsolute(b,e,{preserveProtocolRelative:!0}),a.portalItem&&a.readResourcePaths&&(e=d.makeRelative(b,a.portalItem.itemUrl),r.test(e)&&a.readResourcePaths.push(a.portalItem.resourceFromPath(e).path)));return k(b,a&&a.portal)}function l(b,a,e=0){if(!b)return b;!d.isAbsolute(b)&&a&&a.blockedRelativeUrls&&a.blockedRelativeUrls.push(b);var c=d.makeAbsolute(b);if(a){var g=a.verifyItemRelativeUrls&&
a.verifyItemRelativeUrls.rootPath||a.url&&a.url.path;g&&(g=k(g,a.portal),c=d.makeRelative(k(c,a.portal),g,g),c!==b&&a.verifyItemRelativeUrls&&a.verifyItemRelativeUrls.writtenUrls.push(c))}b=c;c=(c=a&&a.portal)&&!c.isPortal&&c.urlKey&&c.customBaseUrl?d.changeDomain(b,`${c.urlKey}.${c.customBaseUrl}`,c.portalHostname):b;d.isAbsolute(c)&&(c=d.normalize(c));null!=a&&a.resources&&null!=a&&a.portalItem&&!d.isAbsolute(c)&&!d.isDataProtocol(c)&&0===e&&a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(c)});
return c}function n(b,a,e){return h(b,e)}function p(b,a,e,c){b=l(b,c);void 0!==b&&(a[e]=b)}function q(b){b=m.isSome(b)?b.match(t):null;return m.isSome(b)?b[1]:null}function k(b,a){if(!a||a.isPortal||!a.urlKey||!a.customBaseUrl)return b;const e=`${a.urlKey}.${a.customBaseUrl}`;return d.hasSameOrigin(d.appUrl,`${d.appUrl.scheme}://${e}`)?d.changeDomain(b,a.portalHostname,e):d.changeDomain(b,e,a.portalHostname)}const t=/\/items\/([^\/]+)\/resources\//,r=/^\.\/resources\//;var u=Object.freeze({__proto__:null,
fromJSON:h,toJSON:l,read:n,write:p,itemIdFromResourceUrl:q});f.fromJSON=h;f.itemIdFromResourceUrl=q;f.persistableUrlUtils=u;f.read=n;f.toJSON=l;f.write=p});