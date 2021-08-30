// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/mat2d ../../../../chunks/mat2df32 ../../../../chunks/vec2 ../../../../chunks/vec2f32 ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/boundsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtils ../../../../geometry/support/normalizeUtilsCommon ../../../../geometry/support/spatialReferenceUtils ../../../../symbols/cim/CIMSymbolHelper ../../engine/webgl/alignmentUtils ../../engine/webgl/mesh/templates/shapingUtils ../../engine/webgl/util/BidiText".split(" "),
function(q,aa,S,m,p,T,f,r,B,U,V,I,W,X,J,K,Y,Z){function L(a,c,b,d,k,e){let g,h;var n=m.pt2px(b.xoffset);const t=m.pt2px(b.yoffset),v=u*b.angle;e*=u;switch(b.type){case "esriSMS":g=h=m.pt2px(b.size);break;case "esriPMS":g=m.pt2px(b.width),h=m.pt2px(b.height)}.04>k&&(d=.04*d/k);b=p.identity(C);p.translate(b,b,f.set(l,a,c));p.rotate(b,b,e-v);p.scale(b,b,f.set(l,d,-d));p.translate(b,b,f.set(l,n,-t));a=[0,0];f.transformMat2d(a,f.set(l,-.5*g,-.5*h),b);c=[0,0];f.transformMat2d(c,f.set(l,-.5*g,.5*h),b);d=
[0,0];f.transformMat2d(d,f.set(l,.5*g,-.5*h),b);n=[0,0];f.transformMat2d(n,f.set(l,.5*g,.5*h),b);return{rings:[[a,d,n,c,a]]}}function M(a,c,b,d,k,e){var g=J.CIMSymbolHelper.getEnvelope(b.data);if(!g)return null;.04>k&&(d=.04*d/k);k=m.pt2px(g.width);var h=m.pt2px(g.height);b=m.pt2px(g.x);g=m.pt2px(g.y);const n=0*u,t=u*e;e=p.identity(C);p.translate(e,e,f.set(l,a,c));p.rotate(e,e,t-n);p.scale(e,e,f.set(l,d,d));a=[0,0];f.transformMat2d(a,f.set(l,b,g+h),e);c=[0,0];f.transformMat2d(c,f.set(l,b,g),e);d=
[0,0];f.transformMat2d(d,f.set(l,b+k,g+h),e);h=[0,0];f.transformMat2d(h,f.set(l,b+k,g),e);return{rings:[[a,d,h,c,a]]}}function N(a,c,b,d,k,e){var g=m.pt2px(b.xoffset),h=m.pt2px(b.yoffset);b=u*b.angle;const n=u*e;e=p.identity(C);p.translate(e,e,f.set(l,a,c));p.rotate(e,e,n);p.scale(e,e,f.set(l,k,-k));a=d[0]+d[2]/2;c=d[1]+d[3]/2;p.translate(e,e,f.set(l,g,-h));p.translate(e,e,f.set(l,a,c));p.rotate(e,e,b);p.translate(e,e,f.set(l,-a,-c));g=[0,0];f.transformMat2d(g,f.set(l,d[0],d[1]),e);h=[0,0];f.transformMat2d(h,
f.set(l,d[0],d[1]+d[3]),e);b=[0,0];f.transformMat2d(b,f.set(l,d[0]+d[2],d[1]),e);a=[0,0];f.transformMat2d(a,f.set(l,d[0]+d[2],d[1]+d[3]),e);return{rings:[[g,b,a,h,g]]}}function O(a){switch(a.symbol.type){case "esriSFS":case "esriPFS":return(a=a.symbol.outline)?a.width:0;case "esriSLS":return m.pt2px(a.symbol.width);case "esriSMS":return m.pt2px(a.symbol.size);case "esriPMS":return m.pt2px(Math.max(a.symbol.width,a.symbol.height));case "esriTS":{const c=[0,0,0,0];D(c,a.symbol,a.mosaicItem);return Math.max(c[2],
c[3])+Math.max(Math.abs(c[0]),Math.abs(c[1]))}case "expanded-cim":a=J.CIMSymbolHelper.getEnvelope(a.symbol.data);if(-Infinity===a.width||-Infinity===a.height)a.width=10,a.height=10,a.x=0,a.y=0;return m.pt2px(Math.sqrt(a.width*a.width+a.height*a.height));case "composite-symbol":return a.symbol.layers.length?O({symbol:a.symbol.layers[a.symbol.layers.length-1],mosaicItem:null}):0;default:return 0}}function D(a,c,b){if(!b||0===b.glyphMosaicItems.length)return a;const d=Z.bidiText(c.text)[1];c=Y.shapeGlyphs(b.glyphMosaicItems,
d,{scale:m.pt2px(c.font.size)/24,angle:c.angle,xOffset:c.xoffset,yOffset:c.yoffset,hAlign:K.getXAnchorDirection(c.horizontalAlignment||"center"),vAlign:K.getYAnchorDirection(c.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(c.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(c.lineHeight||1,4)),decoration:c.font.decoration||"none",isCIM:!1}).bounds;a[0]=m.pt2px(c.x-c.halfWidth);a[1]=m.pt2px(c.y-c.halfHeight);a[2]=m.pt2px(c.width);a[3]=m.pt2px(c.height);return a}const u=Math.PI/
180,C=T.create(),l=r.create(),E=r.create(),P=r.create(),Q=r.create(),z=r.create(),F=r.create(),R=r.create(),G=r.create();q.PIXEL_BUFFER=50;q.TILE_SIZE=512;q.getBounds=function(a,c,b,d,k,e,g){if(!d||!b.symbol)return a[0]=a[1]=a[2]=a[3]=0,c[0]=c[1]=c[2]=c[3]=0,a;if(V.isPoint(d)){var h=d.x;const t=d.y;"esriTS"===b.symbol.type&&0===c[2]&&0===c[3]&&D(c,b.symbol,b.mosaicItem);d=h;h=t;b=b.symbol;switch(b.type){case "esriSMS":case "esriPMS":var n=L(d,h,b,k,e,0);break;case "esriTS":n=N(d,h,b,c,k,0);break;
case "cim":case "CIMSymbolReference":case "expanded-cim":n=M(d,h,b,k,e,0)}c=0;for(k=0;k<n.rings[0].length-1;k++)b=n.rings[0][k],b=(d-b[0])*(d-b[0])+(h-b[1])*(h-b[1]),c=Math.max(c,b);c=Math.sqrt(c);n=I.normalizeMapX(d-c,g);d=I.normalizeMapX(d+c,g);if(n>d&&(g=X.getInfo(g))){const [v,A]=g.valid;n=v;d=A}a[0]=n;a[1]=h-c;a[2]=d;a[3]=h+c}else U.getBoundsXY(a,d),g=c[0],0===g&&(g=O(b),c[0]=g),g=k*g/2,a[0]-=g,a[1]-=g,a[2]+=g,a[3]+=g;return a};q.getCIMMarkerBounds=M;q.getMarkerSymbolBounds=L;q.getTextSymbolBounds=
N;q.getTextSymbolSize=D;q.graphicGeometryToNumber=function(a){switch(S.unwrap(a.geometry).type){case "polyline":return 1;case "polygon":case "extent":return 2}return 0};q.intersectingInternationalDateline=function(a,c){if(!c.isWrappable)return null;const [b,d]=W.getSpatialReferenceMinMaxX(c);return a[2]>d?[B.create([a[0],a[1],d,a[3]]),B.create([b,a[1],b+a[2]-d,a[3]])]:a[0]<b?[B.create([b,a[1],a[2],a[3]]),B.create([d-(b-a[0]),a[1],d,a[3]])]:null};q.isMarkerSymbol=function(a){return"simple-marker"===
a||"picture-marker"===a||"esriSMS"===a||"esriPMS"===a};q.isPointOnPolyline=function(a,c,b,d){f.set(Q,c,b);a=a.paths;let k,e,g,h,n,t,v,A=Infinity;for(let H=0;H<a.length;H++){const w=a[H];if(!(2>w.length))for(let x=1;x<w.length;x++){var y=w[x-1][0];e=w[x-1][1];k=w[x][0];g=w[x][1];h=Math.min(y,k)-d;n=Math.min(e,g)-d;t=Math.max(y,k)+d;v=Math.max(e,g)+d;c<h||c>t||b<n||b>v||(f.set(E,y,e),f.set(P,k,g),f.subtract(z,P,E),f.subtract(F,E,Q),f.scale(R,z,f.dot(z,F)/f.dot(z,z)),f.subtract(G,F,R),y=f.dot(G,G),A>
y&&(A=y))}}return Math.sqrt(A)<=d};q.isTextSymbol=function(a){return"text"===a||"esriTS"===a};Object.defineProperty(q,"__esModule",{value:!0})});