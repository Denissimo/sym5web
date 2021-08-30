// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/handleUtils","../../../../core/maybe","../../webgl-engine/lib/Object3DStateID"],function(e,g,h,k,l){let p=function(){function d(a){this.context=a;this.highlights=new Set}var c=d.prototype;c.destroy=function(){this.highlights=null};c.add=function(a){const b=new m(a);this.highlights.add(b);this.enableSet(b);return h.makeHandle(()=>this.removeSet(b))};c.removeSet=function(a){this.disableSet(a);this.highlights.delete(a)};
c.enableSet=function(a){a.enabled||(a.enabled=!0,this.context.forEachNode(b=>this.enableSetForNode(a,b)))};c.enableSetForNode=function(a,b){if(a.enabled){var f=a.ids.get(b.id);f&&f.forEach(n=>this.context.addHighlight(b,n,a.id))}};c.disableSet=function(a){a.enabled&&(a.enabled=!1,this.context.forEachNode(b=>this.disableSetForNode(a,b)))};c.disableSetForNode=function(a,b){a.enabled||this.context.removeHighlight(b,a.id)};c.nodeAdded=function(a){this.highlights.forEach(b=>this.enableSetForNode(b,a))};
c.nodeRemoved=function(a){this.highlights.forEach(b=>this.disableSetForNode(b,a))};c.removeAll=function(){this.highlights.forEach(a=>this.disableSet(a))};g._createClass(d,[{key:"hasHighlights",get:function(){return 0<this.highlights.size}}]);return d}(),m=function(){function d(c){this.id=new l.Object3DStateID(0);this.ids=new Map;this.enabled=!1;for(const a of c)k.isSome(a)&&this.add(a.nodeId,a.pointId)}d.prototype.add=function(c,a){const b=this.ids.get(c);b?b.add(a):this.ids.set(c,new Set([a]))};
return d}();e.PointHighlights=p;Object.defineProperty(e,"__esModule",{value:!0})});