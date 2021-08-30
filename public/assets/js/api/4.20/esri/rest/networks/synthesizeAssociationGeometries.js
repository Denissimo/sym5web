// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/AssociationGeometriesResult"],function(f,g,h,d,k){function e(){e=g._asyncToGenerator(function*(a,c,b){a=d.parseUrl(a);c={...c.toJSON(),f:"json"};c=d.encode({...a.query,...c});b?b.method="post":b={method:"post"};b=d.asValidOptions(c,b);return h(`${a.path}/synthesizeAssociationGeometries`,b).then(l)});return e.apply(this,arguments)}function l(a){({data:a}=a);return a?k.fromJSON(a):null}f.synthesizeAssociationGeometries=
function(a,c,b){return e.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0})});