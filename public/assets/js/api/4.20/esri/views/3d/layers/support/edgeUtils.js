// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/has ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/vec4f64 ./layerUtils".split(" "),function(b,p,t,e,f,c,g){function h(a,d){if(e.isNone(a))return null;const k=e.isSome(a.color)?c.fromArray(p.toUnitRGBA(a.color)):c.fromValues(0,0,0,0),l=f.pt2px(a.size),m=f.pt2px(a.extensionLength);switch(a.type){case "solid":return n({color:k,size:l,extensionLength:m,...d});case "sketch":return{...q,color:k,size:l,extensionLength:m,...d,type:"sketch"}}}
function n(a){return{...r,...a,type:"solid"}}const r={color:c.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},q={color:c.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2};b.createMaterial=function(a,d){return h(a&&a.enabled&&a.edges||null,d)};b.createMaterialFromEdges=h;b.createSolidEdgeMaterial=n;b.hasEdges=function(a){return a&&a.enabled&&(g.isExtrudeSymbol3DLayer(a)||g.isFillSymbol3DLayer(a))&&e.isSome(a.edges)};Object.defineProperty(b,
"__esModule",{value:!0})});