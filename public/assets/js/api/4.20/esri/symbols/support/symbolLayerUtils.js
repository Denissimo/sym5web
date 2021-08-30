// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/ItemCache ../../core/maybe ../../geometry/support/aaBoundingBox ./symbolLayerUtils3D".split(" "),function(v,d,e,w,f,q,r,t,u){function g(){g=e._asyncToGenerator(function*(a,b){if("icon"===a.type)return x(a,b);if("object"===a.type)return y(a,b);throw new f("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");});return g.apply(this,arguments)}
function h(a,b){return k.apply(this,arguments)}function k(){k=e._asyncToGenerator(function*(a,b){if(a.resource.href)return z(a.resource.href).then(c=>[c.width,c.height]);if(a.resource.primitive)return r.isSome(b)?[b,b]:[256,256];throw new f("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");});return k.apply(this,arguments)}function x(a,b){return h(a,b).then(c=>{if(null==a.size)return c;c=c[0]/c[1];return 1<c?[a.size,a.size/c]:[a.size*c,
a.size]})}function z(a){return w(a,{responseType:"image"}).then(b=>b.data)}function l(a,b){return A(a,b).then(c=>t.size(c))}function y(a,b){return m.apply(this,arguments)}function m(){m=e._asyncToGenerator(function*(a,b){b=yield l(a,b);return u.objectSymbolLayerSizeWithResourceSize(b,a)});return m.apply(this,arguments)}function A(a,b){return n.apply(this,arguments)}function n(){n=e._asyncToGenerator(function*(a,b){if(!a.isPrimitive){b=a.resource.href;var c=p.get(b);if(void 0!==c)return Promise.resolve(c);
c=yield(yield new Promise(function(B,C){v(["../../views/3d/layers/graphics/objectResourceUtils"],B,C)})).fetch(b,{disableTextures:!0});p.put(b,c.referenceBoundingBox);return c.referenceBoundingBox}c=null;if(a.resource&&a.resource.primitive&&(c=t.create(u.objectSymbolLayerPrimitiveBoundingBox(a.resource.primitive)),r.isSome(b)))for(a=0;a<c.length;a++)c[a]*=b;return c?Promise.resolve(c):Promise.reject(new f("symbol:invalid-resource","The symbol does not have a valid resource"))});return n.apply(this,
arguments)}let p=new q(50);d.clearBoundingBoxCache=function(){p=new q(50)};d.computeIconLayerResourceSize=h;d.computeLayerResourceSize=function(a,b){if("icon"===a.type)return h(a,b);if("object"===a.type)return l(a,b);throw new f("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");};d.computeLayerSize=function(a,b){return g.apply(this,arguments)};d.computeObjectLayerResourceSize=l;Object.defineProperty(d,"__esModule",{value:!0})});