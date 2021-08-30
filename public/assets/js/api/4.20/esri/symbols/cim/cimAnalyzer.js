// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../core/Logger ../../core/screenUtils ../../core/string ../../support/arcadeOnDemand ./CIMSymbolHelper ./SDFHelper ./utils ../../views/2d/arcade/callExpressionWithFeature".split(" "),function(L,ba,ca,da,ea,v,M,y,S,A,T){function N(a){switch(a){case "Butt":return 0;case "Square":return 2;default:return 1}}function O(a){switch(a){case "Bevel":return 0;case "Miter":return 2;default:return 1}}function fa(a){switch(a){default:return"left";
case "Right":return"right";case "Center":return"center";case "Justify":return"justify"}}function ha(a){switch(a){default:return"top";case "Center":return"middle";case "Baseline":return"baseline";case "Bottom":return"bottom"}}function ia(a){let c="normal",d="normal";a&&(a=a.toLowerCase(),-1!==a.indexOf("italic")?c="italic":-1!==a.indexOf("oblique")&&(c="oblique"),-1!==a.indexOf("bold")?d="bold":-1!==a.indexOf("light")&&(d="lighter"));return{style:c,weight:d}}function U(a,c,d,b){let f;a[c]?f=a[c]:(f=
{},a[c]=f);f[d]=b}function V(a){return(a=a.markerPlacement)&&a.angleToLine?1:0}function P(){P=ba._asyncToGenerator(function*(a,c,d,b){d=null!=d?d:[];if(!a)return d;let f;const k={};if("CIMSymbolReference"===a.type){if(f=a.symbol,a=a.primitiveOverrides){const g=[];for(const h of a){var q=h.valueExpressionInfo;q&&c?(q=M.createRendererExpression(q.expression,c.spatialReference,c.fields).then(m=>{m&&U(k,h.primitiveName,h.propertyName,m)}),g.push(q)):null!=h.value&&U(k,h.primitiveName,h.propertyName,h.value)}yield Promise.all(g)}}else return W.error("Expect cim type to be 'CIMSymbolReference'"),
d;switch(f.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":ja(f,a,k,c,d,b)}return d});return P.apply(this,arguments)}function ja(a,c,d,b,f,k){if(a){var q=a.symbolLayers;if(q){var g,h=y.CIMSymbolHelper.getSize(a);"CIMPointSymbol"===a.type&&"Map"===a.angleAlignment&&(g=1);for(var m=q.length;m--;){var e=q[m];if(e&&!1!==e.enable){var n=[];y.OverrideHelper.findApplicableOverrides(e,c,n);switch(e.type){case "CIMSolidFill":ka(e,d,n,b,f);break;case "CIMPictureFill":la(e,d,n,b,f);
break;case "CIMHatchFill":ma(e,d,n,b,f);break;case "CIMGradientFill":{var p=d,r=b,t=f;const [B,I]=C(n,e.primitiveName);var u=v.numericHash(JSON.stringify(e)+I).toString();t.push({type:"fill",templateHash:u,materialHash:B?J(u,p,n,r):u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}break;case "CIMSolidStroke":na(e,d,n,b,f,"CIMPolygonSymbol"===a.type,h);break;case "CIMPictureStroke":oa(e,d,n,b,f,"CIMPolygonSymbol"===
a.type,h);break;case "CIMGradientStroke":{p=d;r=b;t=f;u="CIMPolygonSymbol"===a.type;var z=h,x=e.primitiveName,w=void 0!==e.width?e.width:4,D=N(e.capStyle),G=O(e.joinStyle);const B=e.miterLimit,[I,H]=C(n,x),K=v.numericHash(JSON.stringify(e)+H).toString();t.push({type:"line",templateHash:K,materialHash:I?J(K,p,n,r):K,cim:e,materialOverrides:null,isOutline:u,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:l(x,p,"Width",r,w),cap:l(x,p,"CapStyle",r,D),join:l(x,p,"JoinStyle",
r,G),miterLimit:l(x,p,"MiterLimit",r,B),referenceWidth:z,zOrder:Q(e.name),isDashed:!1})}break;case "CIMCharacterMarker":R(e,d,n,b,f);break;case "CIMPictureMarker":if(R(e,d,n,b,f))break;"CIMLineSymbol"===a.type&&(g=V(e));pa(e,d,n,b,f,g,h);break;case "CIMVectorMarker":if(R(e,d,n,b,f))break;"CIMLineSymbol"===a.type&&(g=V(e));p=d;r=b;t=f;u=g;z=h;x=k;if(D=e.markerGraphics){w=0;e.scaleSymbolsProportionally&&(G=e.frame)&&(w=G.ymax-G.ymin);for(const B of D)if(B&&(D=B.symbol))switch(D.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":qa(e,
B,n,p,r,t,u,z,w,x);break;case "CIMTextSymbol":ra(e,B,p,n,r,t,u,z,w)}}break;default:W.error("Cannot analyze CIM layer",e.type)}}}}}}function ka(a,c,d,b,f){const k=a.primitiveName,q=A.fromCIMColor(a.color),[g,h]=C(d,k),m=v.numericHash(JSON.stringify(a)+h).toString();f.push({type:"fill",templateHash:m,materialHash:g?()=>m:m,cim:a,materialOverrides:null,colorLocked:a.colorLocked,color:l(k,c,"Color",b,q,E),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:a.effects})}function la(a,c,d,b,f){const k=
a.primitiveName,q=a.tintColor?A.fromCIMColor(a.tintColor):{r:255,g:255,b:255,a:1},[g,h]=C(d,k);d=v.numericHash(JSON.stringify(a)+h).toString();const m=v.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString();f.push({type:"fill",templateHash:d,materialHash:g?()=>m:m,cim:a,materialOverrides:null,colorLocked:a.colorLocked,effects:a.effects,color:l(k,c,"TintColor",b,q,E),height:l(k,c,"Height",b,a.height),scaleX:l(k,c,"ScaleX",b,a.scaleX),angle:l(k,c,"Rotation",b,a.rotation),offsetX:l(k,
c,"OffsetX",b,a.offsetX),offsetY:l(k,c,"OffsetY",b,a.offsetY)})}function ma(a,c,d,b,f){const k=["Rotation","OffsetX","OffsetY"],q=d.filter(n=>n.primitiveName!==a.primitiveName&&-1===k.indexOf(n.propertyName)),g=a.primitiveName,[h,m]=C(d,g);d=v.numericHash(JSON.stringify(a)+m).toString();const e=v.numericHash(`${a.separation}${JSON.stringify(a.lineSymbol)}`).toString();f.push({type:"fill",templateHash:d,materialHash:h?J(e,c,q,b):e,cim:a,materialOverrides:q,colorLocked:a.colorLocked,effects:a.effects,
color:{r:255,g:255,b:255,a:1},height:l(g,c,"Separation",b,a.separation),scaleX:1,angle:l(g,c,"Rotation",b,a.rotation),offsetX:l(g,c,"OffsetX",b,a.offsetX),offsetY:l(g,c,"OffsetY",b,a.offsetY)})}function na(a,c,d,b,f,k,q){const g=a.primitiveName,h=A.fromCIMColor(a.color),m=void 0!==a.width?a.width:4,e=N(a.capStyle),n=O(a.joinStyle),p=a.miterLimit,[r,t]=C(d,g),u=v.numericHash(JSON.stringify(a)+t).toString();f.push({type:"line",templateHash:u,materialHash:r?()=>u:u,cim:a,materialOverrides:null,isOutline:k,
colorLocked:a.colorLocked,effects:a.effects,color:l(g,c,"Color",b,h,E),width:l(g,c,"Width",b,m),cap:l(g,c,"CapStyle",b,e),join:l(g,c,"JoinStyle",b,n),miterLimit:l(g,c,"MiterLimit",b,p),referenceWidth:q,zOrder:Q(a.name),isDashed:!1})}function oa(a,c,d,b,f,k,q){const g=v.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString(),h=a.primitiveName,m=A.fromCIMColor(a.tintColor),e=void 0!==a.width?a.width:4,n=N(a.capStyle),p=O(a.joinStyle),r=a.miterLimit,[t,u]=C(d,h);d=v.numericHash(JSON.stringify(a)+
u).toString();f.push({type:"line",templateHash:d,materialHash:t?()=>g:g,cim:a,materialOverrides:null,isOutline:k,colorLocked:a.colorLocked,effects:a.effects,color:l(h,c,"TintColor",b,m,E),width:l(h,c,"Width",b,e),cap:l(h,c,"CapStyle",b,n),join:l(h,c,"JoinStyle",b,p),miterLimit:l(h,c,"MiterLimit",b,r),referenceWidth:q,zOrder:Q(a.name),isDashed:!1})}function R(a,c,d,b,f){const k=a.markerPlacement;if(!k||"CIMMarkerPlacementInsidePolygon"!==k.type)return!1;const q=["Rotation","OffsetX","OffsetY"],g=d.filter(e=>
e.primitiveName!==a.primitiveName&&-1===q.indexOf(e.propertyName)),[h,m]=C(d,k.primitiveName);d=v.numericHash(JSON.stringify(a)+m).toString();f.push({type:"fill",templateHash:d,materialHash:h?J(d,c,g,b):d,cim:a,materialOverrides:g,colorLocked:a.colorLocked,effects:a.effects,color:{r:255,g:255,b:255,a:1},height:l(k.primitiveName,c,"StepY",b,k.stepY),scaleX:1,angle:l(k.primitiveName,c,"GridAngle",b,k.gridAngle),offsetX:l(k.primitiveName,c,"OffsetX",b,k.offsetX),offsetY:l(k.primitiveName,c,"OffsetY",
b,k.offsetY)});return!0}function pa(a,c,d,b,f,k,q){const g=a.primitiveName,h=a.size,m=a.scaleX,e=a.rotation,n=a.offsetX,p=a.offsetY,r=A.fromCIMColor(a.tintColor),t=v.numericHash(`${a.url}${JSON.stringify(a.colorSubstitutions)}`).toString(),[u,z]=C(d,g);d=v.numericHash(JSON.stringify(a)+z).toString();f.push({type:"marker",templateHash:d,materialHash:u?()=>t:t,cim:a,materialOverrides:null,colorLocked:a.colorLocked,effects:a.effects,scaleSymbolsProportionally:!1,alignment:k,size:l(g,c,"Size",b,h),scaleX:l(g,
c,"ScaleX",b,m),rotation:l(g,c,"Rotation",b,e),offsetX:l(g,c,"OffsetX",b,n),offsetY:l(g,c,"OffsetY",b,p),color:l(g,c,"TintColor",b,r,E),anchorPoint:a.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:a.rotateClockwise,referenceSize:q,sizeRatio:1,markerPlacement:a.markerPlacement})}function ra(a,c,d,b,f,k,q,g,h){y.OverrideHelper.findApplicableOverrides(c,b,[]);var m=c.geometry;if("x"in m&&"y"in m){var e=c.symbol;
var n=e.underline?"underline":e.strikethrough?"line-through":"none";var p=ia(e.fontStyleName);e.font={family:e.fontFamilyName,decoration:n,...p};var r=a.frame,t=a.size/h;h=a.primitiveName;n=(e.height||0)*t;p=e.angle||0;var u=((e.offsetX||0)+(m.x-.5*(r.xmin+r.xmax)))*t;m=((e.offsetY||0)+(m.y-.5*(r.ymin+r.ymax)))*t;r=A.fromCIMColor(y.CIMSymbolHelper.getFillColor(e));var z=A.fromCIMColor(y.CIMSymbolHelper.getStrokeColor(e)),x=y.CIMSymbolHelper.getStrokeWidth(e);x||(z=A.fromCIMColor(y.CIMSymbolHelper.getFillColor(e.haloSymbol)),
x=e.haloSize*t);t="";for(const w of b)w.primitiveName===h&&void 0!==w.value&&(t+=`-${w.primitiveName}-${w.propertyName}-${JSON.stringify(w.value)}`);b=JSON.stringify(a.effects)+Number(a.colorLocked)+JSON.stringify(a.anchorPoint)+a.anchorPointUnits+JSON.stringify(a.markerPlacement);b=v.numericHash(JSON.stringify(c)+b+t).toString();k.push({type:"text",templateHash:b,materialHash:()=>v.numericHash(JSON.stringify(e.font)).toString(),cim:e,materialOverrides:null,colorLocked:a.colorLocked,effects:a.effects,
alignment:q,anchorPoint:{x:a.anchorPoint?a.anchorPoint.x:0,y:a.anchorPoint?a.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,fontName:e.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:l(h,d,"Size",f,n),angle:l(h,d,"Rotation",f,p),offsetX:l(h,d,"OffsetX",f,u),offsetY:l(h,d,"OffsetY",f,m),horizontalAlignment:fa(e.horizontalAlignment),verticalAlignment:ha(e.verticalAlignment),text:l(c.primitiveName,d,"TextString",f,c.textString,A._adjustTextCase,e.textCase),
color:r,outlineColor:z,outlineSize:x,referenceSize:g,sizeRatio:1,markerPlacement:a.markerPlacement})}}function qa(a,c,d,b,f,k,q,g,h,m){const e=c.geometry;if(e){var n=c.symbol.symbolLayers;if(n)if(m)X(a,c,b,d,f,k,q,g,h);else for(m=n.length;m--;){var p=n[m];if(p&&!1!==p.enable)switch(p.type){case "CIMSolidFill":case "CIMSolidStroke":{var r=S.getExtent(e);if(!r)continue;const [z,x,w]=S.getSDFMetrics(r,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);var t="CIMSolidFill"===p.type;r={type:"sdf",
geom:e,asFill:t};var u=a.primitiveName;const D=a.size,G=a.rotation||0,B=a.offsetX,I=a.offsetY,H=p.primitiveName,K=t?A.fromCIMColor(y.CIMSymbolHelper.getFillColor(p)):A.fromCIMColor(y.CIMSymbolHelper.getStrokeColor(p)),sa=t?{r:0,g:0,b:0,a:0}:A.fromCIMColor(y.CIMSymbolHelper.getStrokeColor(p)),Y=y.CIMSymbolHelper.getStrokeWidth(p);if(!t&&!Y)break;t=!1;let Z="";for(const F of d)if(F.primitiveName===H||F.primitiveName===u)void 0!==F.value?Z+=`-${F.primitiveName}-${F.propertyName}-${JSON.stringify(F.value)}`:
F.valueExpressionInfo&&(t=!0);u=JSON.stringify({...a,markerGraphics:null});const aa=v.numericHash(JSON.stringify(r)).toString();p={type:"marker",templateHash:v.numericHash(JSON.stringify(c)+JSON.stringify(p)+u+Z).toString(),materialHash:t?()=>aa:aa,cim:r,materialOverrides:null,colorLocked:a.colorLocked,effects:a.effects,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:q,anchorPoint:{x,y:w},isAbsoluteAnchorPoint:!1,size:l(a.primitiveName,b,"Size",f,D),rotation:l(a.primitiveName,b,
"Rotation",f,G),offsetX:l(a.primitiveName,b,"OffsetX",f,B),offsetY:l(a.primitiveName,b,"OffsetY",f,I),scaleX:1,frameHeight:h,rotateClockwise:a.rotateClockwise,referenceSize:g,sizeRatio:z,color:l(H,b,"Color",f,K,E),outlineColor:l(H,b,"Color",f,sa,E),outlineWidth:l(H,b,"Width",f,Y),markerPlacement:a.markerPlacement};k.push(p);break}default:X(a,c,b,d,f,k,q,g,h)}}}}function X(a,c,d,b,f,k,q,g,h){c={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,anchorPoint:a.anchorPoint,
anchorPointUnits:a.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:a.rotateClockwise,rotation:0,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[c],scaleSymbolsProportionally:a.scaleSymbolsProportionally,respectFrame:a.respectFrame,clippingPath:a.clippingPath,effects:a.effects};let m=[];const e=["Rotation","OffsetX","OffsetY"];m=b.filter(w=>w.primitiveName!==a.primitiveName||-1===e.indexOf(w.propertyName));var n="";for(var p of b)void 0!==p.value&&
(n+=`-${p.primitiveName}-${p.propertyName}-${JSON.stringify(p.value)}`);const [r,t,u]=y.CIMSymbolHelper.getTextureAnchor(c);b=a.primitiveName;p=a.rotation||0;const z=a.offsetX||0,x=a.offsetY||0;n=v.numericHash(JSON.stringify(c)+n).toString();d={type:"marker",templateHash:n,materialHash:0===m.length?n:J(n,d,m,f),cim:c,materialOverrides:m,colorLocked:a.colorLocked,effects:a.effects,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:q,anchorPoint:{x:r,y:t},isAbsoluteAnchorPoint:!1,size:a.size,
rotation:l(b,d,"Rotation",f,p),offsetX:l(b,d,"OffsetX",f,z),offsetY:l(b,d,"OffsetY",f,x),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:h,rotateClockwise:a.rotateClockwise,referenceSize:g,sizeRatio:u/ea.pt2px(a.size),markerPlacement:a.markerPlacement};k.push(d)}function Q(a){return a&&0===a.indexOf("Level_")?parseInt(a.substr(6),10):0}function E(a){if(!a||0===a.length)return null;a=(new ca(a)).toRgba();return{r:a[0],g:a[1],b:a[2],a:a[3]}}function l(a,c,
d,b,f,k,q){if(a=c[a]){const g=a[d];if("string"===typeof g||"number"===typeof g||g instanceof Array)return k?k.call(null,g,q):g;if(null!=g&&g instanceof M.ArcadeExpression)return(h,m,e)=>{h=T(g,h,{$view:e},b.geometryType,m);null!==h&&k&&(h=k.call(null,h,q));return null!==h?h:f}}return f}function J(a,c,d,b){for(const f of d)if(f.valueExpressionInfo){const k=c[f.primitiveName]&&c[f.primitiveName][f.propertyName];k instanceof M.ArcadeExpression&&(f.fn=(q,g,h)=>T(k,q,{$view:h},b.geometryType,g))}return(f,
k,q)=>{for(const g of d)g.fn&&(g.value=g.fn(f,k,q));return v.numericHash(a+y.OverrideHelper.buildOverrideKey(d)).toString()}}function C(a,c){let d=!1,b="";for(const f of a)f.primitiveName===c&&(void 0!==f.value?b+=`-${f.primitiveName}-${f.propertyName}-${JSON.stringify(f.value)}`:f.valueExpressionInfo&&(d=!0));return[d,b]}const W=da.getLogger("esri.symbols.cim.cimAnalyzer");L.analyzeCIMResource=function(a,c){if(!c||0===c.length)return a;a=JSON.parse(JSON.stringify(a));y.OverrideHelper.applyOverrides(a,
c);return a};L.analyzeCIMSymbol=function(a,c,d,b){return P.apply(this,arguments)};Object.defineProperty(L,"__esModule",{value:!0})});