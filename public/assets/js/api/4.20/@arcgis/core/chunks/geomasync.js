/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{version as n}from"../kernel.js";import{Q as r,p as t,L as e,t as o,u as i,x as s,H as u,S as l,z as a,T as c,U as f,V as m,W as g,X as p,Y as d,C as w,Z as h,_ as A,$ as j}from"./arcadeUtils.js";import y from"../geometry/Extent.js";import E from"../geometry/Geometry.js";import{disjoint as I,intersects as F,touches as b,crosses as R,within as N,contains as S,overlaps as x,equals as U,relate as O,intersect as z,union as M,difference as P,symmetricDifference as k,clip as C,cut as L,planarArea as T,geodesicArea as Z,planarLength as D,geodesicLength as J,distance as V,densify as q,geodesicDensify as v,generalize as G,buffer as H,geodesicBuffer as Q,offset as W,rotate as X,simplify as Y,isSimple as $}from"../geometry/geometryEngineAsync.js";import _ from"../geometry/Multipoint.js";import B from"../geometry/Point.js";import K from"../geometry/Polygon.js";import nn from"../geometry/Polyline.js";import{fromJSON as rn}from"../geometry/support/jsonUtils.js";import"../core/lang.js";import"../core/urlUtils.js";import"../config.js";import"./object.js";import"../core/Error.js";import"./Logger.js";import"./string.js";import"./Message.js";import"../core/promiseUtils.js";import"./number3.js";import"./locale.js";import"../layers/support/Field.js";import"./tslib.es6.js";import"./jsonMap.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"./arrayUtils.js";import"../core/scheduling.js";import"./write.js";import"./enumeration.js";import"./reader.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./FeatureSetReader.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"./zmUtils.js";import"./extentUtils.js";import"./centroid.js";import"./moment.js";import"./sizeVariableUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../request.js";import"../intl.js";import"./number.js";function tn(r){return 0===n.indexOf("4.")?K.fromExtent(r):new K({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function en(n){if(t(n,2,2),n[0]instanceof E&&n[1]instanceof E);else if(n[0]instanceof E&&null===n[1]);else if(n[1]instanceof E&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function on(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null===e[0]||null===e[1]||I(e[0],e[1])}))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&F(e[0],e[1])}))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&b(e[0],e[1])}))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&R(e[0],e[1])}))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&N(e[0],e[1])}))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&S(e[0],e[1])}))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null!==e[1]&&x(e[0],e[1])}))},n.functions.equals=function(r,o){return n.standardFunctionAsync(r,o,(function(n,r,o){return t(o,2,2),o[0]===o[1]||(o[0]instanceof E&&o[1]instanceof E?U(o[0],o[1]):!(!e(o[0])||!e(o[1]))&&o[0].getTime()===o[1].getTime())}))},n.functions.relate=function(e,i){return n.standardFunctionAsync(e,i,(function(n,e,i){if(i=r(i),t(i,3,3),i[0]instanceof E&&i[1]instanceof E)return O(i[0],i[1],o(i[2]));if(i[0]instanceof E&&null===i[1])return!1;if(i[1]instanceof E&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null===e[0]||null===e[1]?null:z(e[0],e[1])}))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){const a=[];if(0===(o=r(o)).length)throw new Error("Function called with wrong number of Parameters");if(1===o.length)if(i(o[0])){const n=r(o[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof E))throw new Error("Illegal Argument");a.push(n[r])}}else{if(!s(o[0])){if(o[0]instanceof E)return u(l(o[0]),t.spatialReference);if(null===o[0])return null;throw new Error("Illegal Argument")}{const n=r(o[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof E))throw new Error("Illegal Argument");a.push(n[r])}}}else for(let n=0;n<o.length;n++)if(null!==o[n]){if(!(o[n]instanceof E))throw new Error("Illegal Argument");a.push(o[n])}return 0===a.length?null:M(a)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null!==e[0]&&null===e[1]?l(e[0]):null===e[0]?null:P(e[0],e[1])}))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return en(e=r(e)),null===e[0]&&null===e[1]?null:null===e[0]?l(e[1]):null===e[1]?l(e[0]):k(e[0],e[1])}))},n.functions.clip=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,2),!(o[1]instanceof y)&&null!==o[1])throw new Error("Illegal Argument");if(null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");return null===o[1]?null:C(o[0],o[1])}))},n.functions.cut=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,2),!(o[1]instanceof nn)&&null!==o[1])throw new Error("Illegal Argument");if(null===o[0])return[];if(!(o[0]instanceof E))throw new Error("Illegal Argument");return null===o[1]?[l(o[0])]:L(o[0],o[1])}))},n.functions.area=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,u){if(t(u,1,2),null===(u=r(u))[0])return 0;if(a(u[0]))return u[0].sumArea(c(f(u[1],-1)),!1,e.abortSignal).then((n=>{if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i(u[0])||s(u[0])){const n=m(u[0],e.spatialReference);return null===n?0:T(n,c(f(u[1],-1)))}if(!(u[0]instanceof E))throw new Error("Illegal Argument");return T(u[0],c(f(u[1],-1)))}))},n.functions.areageodetic=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,u){if(t(u,1,2),null===(u=r(u))[0])return 0;if(a(u[0]))return u[0].sumArea(c(f(u[1],-1)),!0,e.abortSignal).then((n=>{if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i(u[0])||s(u[0])){const n=m(u[0],e.spatialReference);return null===n?0:Z(n,c(f(u[1],-1)))}if(!(u[0]instanceof E))throw new Error("Illegal Argument");return Z(u[0],c(f(u[1],-1)))}))},n.functions.length=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,u){if(t(u,1,2),null===(u=r(u))[0])return 0;if(a(u[0]))return u[0].sumLength(g(f(u[1],-1)),!1,e.abortSignal).then((n=>{if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i(u[0])||s(u[0])){const n=p(u[0],e.spatialReference);return null===n?0:D(n,g(f(u[1],-1)))}if(!(u[0]instanceof E))throw new Error("Illegal Argument");return D(u[0],g(f(u[1],-1)))}))},n.functions.lengthgeodetic=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,u){if(t(u,1,2),null===(u=r(u))[0])return 0;if(a(u[0]))return u[0].sumLength(g(f(u[1],-1)),!0,e.abortSignal).then((n=>{if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(i(u[0])||s(u[0])){const n=p(u[0],e.spatialReference);return null===n?0:J(n,g(f(u[1],-1)))}if(!(u[0]instanceof E))throw new Error("Illegal Argument");return J(u[0],g(f(u[1],-1)))}))},n.functions.distance=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,u){u=r(u),t(u,2,3);let l=u[0];(i(u[0])||s(u[0]))&&(l=d(u[0],e.spatialReference));let a=u[1];if((i(u[1])||s(u[1]))&&(a=d(u[1],e.spatialReference)),!(l instanceof E))throw new Error("Illegal Argument");if(!(a instanceof E))throw new Error("Illegal Argument");return V(l,a,g(f(u[2],-1)))}))},n.functions.distancegeodetic=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){o=r(o),t(o,2,3);const i=o[0],s=o[1];if(!(i instanceof B))throw new Error("Illegal Argument");if(!(s instanceof B))throw new Error("Illegal Argument");const u=new nn({paths:[],spatialReference:i.spatialReference});return u.addPath([i,s]),J(u,g(f(o[2],-1)))}))},n.functions.densify=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,3),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");const i=w(o[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return o[0]instanceof K||o[0]instanceof nn?q(o[0],i,g(f(o[2],-1))):o[0]instanceof y?q(tn(o[0]),i,g(f(o[2],-1))):o[0]}))},n.functions.densifygeodetic=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,3),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");const i=w(o[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return o[0]instanceof K||o[0]instanceof nn?v(o[0],i,g(f(o[2],-1))):o[0]instanceof y?v(tn(o[0]),i,g(f(o[2],-1))):o[0]}))},n.functions.generalize=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,4),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");const i=w(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return G(o[0],i,h(f(o[2],!0)),g(f(o[3],-1)))}))},n.functions.buffer=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,3),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");const i=w(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?l(o[0]):H(o[0],i,g(f(o[2],-1)))}))},n.functions.buffergeodetic=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,2,3),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");const i=w(o[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?l(o[0]):Q(o[0],i,g(f(o[2],-1)))}))},n.functions.offset=function(e,i){return n.standardFunctionAsync(e,i,(function(n,e,i){if(i=r(i),t(i,2,6),null===i[0])return null;if(!(i[0]instanceof K||i[0]instanceof nn))throw new Error("Illegal Argument");const s=w(i[1]);if(isNaN(s))throw new Error("Illegal Argument");const u=w(f(i[4],10));if(isNaN(u))throw new Error("Illegal Argument");const l=w(f(i[5],0));if(isNaN(l))throw new Error("Illegal Argument");return W(i[0],s,g(f(i[2],-1)),o(f(i[3],"round")).toLowerCase(),u,l)}))},n.functions.rotate=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){o=r(o),t(o,2,3);let i=o[0];if(null===i)return null;if(!(i instanceof E))throw new Error("Illegal Argument");i instanceof y&&(i=K.fromExtent(i));const s=w(o[1]);if(isNaN(s))throw new Error("Illegal Argument");const u=f(o[2],null);if(null===u)return X(i,s);if(u instanceof B)return X(i,s,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,a){if(a=r(a),t(a,1,1),null===a[0])return null;let c=a[0];if((i(a[0])||s(a[0]))&&(c=d(a[0],e.spatialReference)),null===c)return null;if(!(c instanceof E))throw new Error("Illegal Argument");return c instanceof B?u(l(a[0]),e.spatialReference):c instanceof K?c.centroid:c instanceof nn?A(c):c instanceof _?j(c):c instanceof y?c.center:null}))},n.functions.multiparttosinglepart=function(e,o){return n.standardFunctionAsync(e,o,(function(n,o,i){i=r(i),t(i,1,1);const s=[];if(null===i[0])return null;if(!(i[0]instanceof E))throw new Error("Illegal Argument");if(i[0]instanceof B)return[u(l(i[0]),e.spatialReference)];if(i[0]instanceof y)return[u(l(i[0]),e.spatialReference)];return Y(i[0]).then((n=>{if(n instanceof K){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=rn({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t)}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof nn){const r=[];for(let t=0;t<n.paths.length;t++){const e=rn({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e)}return r}if(i[0]instanceof _){const n=u(l(i[0]),e.spatialReference);for(let r=0;r<n.points.length;r++)s.push(n.getPoint(r));return s}return null}))}))},n.functions.issimple=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,1,1),null===o[0])return!0;if(!(o[0]instanceof E))throw new Error("Illegal Argument");return $(o[0])}))},n.functions.simplify=function(e,o){return n.standardFunctionAsync(e,o,(function(n,e,o){if(o=r(o),t(o,1,1),null===o[0])return null;if(!(o[0]instanceof E))throw new Error("Illegal Argument");return Y(o[0])}))})}export{on as registerFunctions};
