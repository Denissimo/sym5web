// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],function(c,f,g,h,k){function b(){b=f._asyncToGenerator(function*(a,d,e){a=g.parseUrl(a);return h.executeQueryForIds(a,k.from(d),{...e}).then(l=>l.data.objectIds)});return b.apply(this,arguments)}c.executeForIds=function(a,d,e){return b.apply(this,arguments)};Object.defineProperty(c,"__esModule",{value:!0})});