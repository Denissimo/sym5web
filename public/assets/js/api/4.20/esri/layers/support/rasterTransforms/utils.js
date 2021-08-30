// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./IdentityTransform","./PolynomialTransform"],function(c,e,f){const d={PolynomialXform:f,IdentityXform:e},g=Object.keys(d);c.isTransformSupported=function(a){const b=null==a?void 0:a.type;return!a||g.includes(b)};c.readTransform=function(a){if(null==a||!a.type)return null;var b=d[null==a?void 0:a.type];return b?(b=new b,b.read(a),b):null};Object.defineProperty(c,"__esModule",{value:!0})});