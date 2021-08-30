// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLMeshTemplate ../../util/BidiText".split(" "),function(u,f,n,h,q,v,w,p,x,y,r){return function(t){function g(a,e,c,d,k,l,m,z,A,B,C,D,E,F,G,H,I,J=!1,K,L){var b=t.call(this)||this;b._xOffset=f.pt2px(D);b._yOffset=f.pt2px(E);b._decoration=A||"none";b._color=d;b._haloColor=k;b._haloSize=
Math.min(Math.floor(5*f.pt2px(f.toPt(c))),127);b._size=Math.min(Math.round(f.pt2px(e)),127);e=Math.min(Math.round(f.pt2px(e)),127);b._referenceSize=Math.round(Math.sqrt(256*e));b._scale=b._size/24;b._angle=C;b._justify=n.getJustification(l||"center");b._xAlignD=n.getXAnchorDirection(l||"center");b._yAlignD=n.getYAnchorDirection(m||"baseline");b._baseline="baseline"===(m||"baseline");b._bitset=(1===z?1:0)|(B?1:0)<<1;a=w.MaterialKeyBase.load(a);a.sdf=!0;b._materialKey=a.data;b._lineWidth=f.pt2px(F)||
512;b._lineHeight=G||1;b._textPlacement=H;b._effects=I;b._isCIM=J;b._minMaxZoom=v.i1616to32(Math.round(K*q.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(L*q.MIN_MAX_ZOOM_PRECISION_FACTOR));return b}u._inheritsLoose(g,t);g.fromText=function(a,e){const c=new g(a.materialKey,a.font.size,a.haloSize||0,a.color&&h.premultiplyAlphaRGBAArray(a.color)||0,a.haloColor&&h.premultiplyAlphaRGBAArray(a.haloColor)||0,a.horizontalAlignment,a.verticalAlignment,0,a.font.decoration,!1,a.angle||0,a.xoffset,a.yoffset,a.lineWidth,
a.lineHeight,null,null,!1,p.DEFAULT_MIN_ZOOM,p.DEFAULT_MAX_ZOOM),[,d]=r.bidiText(a.text);c.bindTextInfo(e,d);c._vertexBoundsScale=a.maxVVSize?a.maxVVSize/a.font.size:1;return c};g.fromCIMText=function(a,e,c){var d=a.scaleFactor||1;const k=a.size*a.sizeRatio*d,[l,m]=p.getMinMaxZoom(a.scaleInfo,c);c=new g(a.materialKey,k,a.outlineSize*a.sizeRatio,h.premultiplyAlphaRGBA(a.color),h.premultiplyAlphaRGBA(a.outlineColor),a.horizontalAlignment,a.verticalAlignment,a.alignment,a.decoration,a.colorLocked,a.angle,
a.offsetX*a.sizeRatio*d,a.offsetY*a.sizeRatio*d,512,1,a.markerPlacement,a.effects,!0,l,m);[,d]=r.bidiText(a.text);c.bindTextInfo(e,d);c._vertexBoundsScale=a.maxVVSize?a.maxVVSize/k:1;return c};return g}(x(y))});