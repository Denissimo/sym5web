// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/screenUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(u,p,q,m,n,v,e,w,x,y){return function(r){function l(a,f,k){var b=r.call(this,a)||this;b._minMaxZoom=n.i1616to32(Math.round(f*m.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(k*m.MIN_MAX_ZOOM_PRECISION_FACTOR));b._cimLineLayer=a;let c=0;e.isFunction(a.width)||
(c=.5*p.pt2px(a.width));b._dynamicPropertyMap.set("_halfWidth",(d,g,h)=>e.isFunction(a.width)?.5*p.pt2px(a.width(d,g,h)):c);e.isFunction(a.cap)?b._dynamicPropertyMap.set("_capType",a.cap):b._capType=a.cap;e.isFunction(a.join)?b._dynamicPropertyMap.set("_joinType",a.join):b._joinType=a.join;e.isFunction(a.color)?b._dynamicPropertyMap.set("_fillColor",(d,g,h)=>(d=a.color(d,g,h))&&q.premultiplyAlphaRGBA(d)||0):(f=a.color,b._fillColor=f&&q.premultiplyAlphaRGBA(f)||0);e.isFunction(a.miterLimit)?b._dynamicPropertyMap.set("_miterLimitCosine",
(d,g,h)=>e.getLimitCosine(a.miterLimit(d,g,h))):b._miterLimitCosine=e.getLimitCosine(a.miterLimit);b._scaleFactor=a.scaleFactor||1;b._isDashed=a.isDashed;b._effects=a.effects;b.tessellationProperties._bitset=a.colorLocked?1:0;b._materialKey=a.materialKey;b._initializeTessellator(!0);return b}u._inheritsLoose(l,r);l.fromCIMLine=function(a,f){const [k,b]=e.getMinMaxZoom(a.scaleInfo,f);return new l(a,k,b)};l.prototype.bindFeature=function(a,f,k){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((d,
g)=>{this[g]=d(b,f,k)});this._halfWidth*=this._scaleFactor;a=this._materialCache;var c=this._cimLineLayer.materialHash;c=c(b,f,k);c=a.get(c);a=null;c&&y.ok(c.spriteMosaicItem)&&(a=c.spriteMosaicItem);if(a){this._hasPattern=!0;const {rect:d,width:g,height:h}=a;c=d.x+m.SPRITE_PADDING;const t=d.y+m.SPRITE_PADDING,z=c+g,A=t+h;this.tessellationProperties._tl=n.i1616to32(c,t);this.tessellationProperties._br=n.i1616to32(z,A)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=
0;this.tessellationProperties._fillColor=this._fillColor;this.tessellationProperties._halfWidth=this._halfWidth;this.tessellationProperties.offset=0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;c=v.LineMaterialKey.load(this._materialKey);a&&(c.sdf=a.sdf,c.pattern=!0,c.textureBinding=a.textureBinding);this._materialKey=c.data};return l}(w(x))});