// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe"],function(f,b){let k=function(){function g(a,c){this._textureRep=a;this._textureId=c;this._textureRef=b.applySome(this._textureId,d=>this._textureRep.acquire(d))}var h=g.prototype;h.dispose=function(){this._textureRef=b.applySome(this._textureId,a=>{this._textureRep.release(a)})};h.bind=function(a,c,d){if(b.isSome(this._textureRef)){const e=this._textureRef.glTexture;a.bindTexture(e,c);a.setUniform2f(d,e.descriptor.width,e.descriptor.height)}};return g}();
f.RenderTexture=k;Object.defineProperty(f,"__esModule",{value:!0})});