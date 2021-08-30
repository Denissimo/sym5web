// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/Logger","../../../../../../symbols/cim/cimAnalyzer","./WGLMeshTemplate"],function(m,n,p,q){const k=n.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");return function(l){function g(c){var a=l.call(this)||this;a._ongoingMaterialRequestMap=new Map;a._materialCache=new Map;a._dynamicPropertyMap=new Map;a._cimLayer=c;return a}m._inheritsLoose(g,l);g.prototype.analyze=function(c,a,d,r){a=a.readLegacyFeature();
const h=this._materialCache,e=this._cimLayer.materialHash;if(!e)return k.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null);const b="function"===typeof e?e(a,d,r):e;if(h.has(b))return c=h.get(b),Promise.resolve(c);if(this._ongoingMaterialRequestMap.has(b))return this._ongoingMaterialRequestMap.get(b);d=p.analyzeCIMResource(this._cimLayer.cim,this._cimLayer.materialOverrides);d.mosaicHash=b;c=c.getMosaicItem(d).then(f=>{this._ongoingMaterialRequestMap.delete(b);
h.set(b,f);return f}).catch(f=>{this._ongoingMaterialRequestMap.delete(b);k.error(".analyze()",f.message);return null});this._ongoingMaterialRequestMap.set(b,c);return c};return g}(q)});