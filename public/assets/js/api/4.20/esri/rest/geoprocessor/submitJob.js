// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/JobInfo"],function(e,h,k,l,m){function c(){c=h._asyncToGenerator(function*(d,f,a,g){a=k.from(a||{});return l.constructRequest(d,"submitJob",a,f,g).then(b=>{b=m.fromJSON(b.data);b.sourceUrl=d;return b})});return c.apply(this,arguments)}e.submitJob=function(d,f,a,g){return c.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});