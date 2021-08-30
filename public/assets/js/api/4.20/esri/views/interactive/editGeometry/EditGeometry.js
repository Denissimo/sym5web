// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Evented ../../../core/maybe ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper".split(" "),function(p,u,y,v,w,z,A,B){let q=function(){function l(e){this.right=this.left=null;this.type="vertex";this.index=null;this.component=e}u._createClass(l,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e;this.component.unnormalizeVertexPositions()}}]);return l}(),r=function(l,
e,f){this.type="edge";this.component=l;this.left=e;this.right=f;e.right=this;f.left=this},t=function(){function l(f){this.vertices=[];this.edges=[];this.data=f}var e=l.prototype;e.unnormalizeVertexPositions=function(){1>=this.vertices.length||this.data.coordinateHelper.unnormalize(this.vertices)};e.updateVertexIndex=function(f,a){if(0!==this.vertices.length){var b=this.vertices[0],c=null;do c=f,c.index=a++,f=c.right?c.right.right:null;while(null!=f&&f!==b);c.left&&c!==this.vertices[this.vertices.length-
1]&&this.swapVertices(this.vertices.indexOf(c),this.vertices.length-1)}};e.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]};e.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]};e.isClosed=function(){return 2<this.vertices.length&&null!==this.vertices[0].left};e.swapVertices=function(f,a){const b=this.vertices[f];this.vertices[f]=this.vertices[a];this.vertices[a]=b};e.iterateVertices=function(f){if(0!==this.vertices.length){var a=
this.vertices[0],b=a;do f(b,b.index),b=w.isSome(b.right)?b.right.right:null;while(b!==a&&null!=b)}};return l}();v=function(l){function e(a){var b=l.call(this)||this;b.coordinateHelper=a;b.undoStack=[];b.redoStack=[];b.components=[];return b}u._inheritsLoose(e,l);var f=e.prototype;f.apply=function(a,b=1){if(0===b||w.isNone(this.lastOperation)||!this.lastOperation.accumulate(a))a.apply(),this.undoStack.push(a),this.redoStack=[];return a};f.undo=function(){if(0<this.undoStack.length){const a=this.undoStack.pop();
a.undo();this.redoStack.push(a);return a}return null};f.redo=function(){if(0<this.redoStack.length){const a=this.redoStack.pop();a.apply();this.undoStack.push(a);return a}return null};f.toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.createPoint(this.components[0].vertices[0].pos)};f.toPolyline=function(){const a=[],b=this.coordinateHelper.toArray;this.components.forEach((c,g)=>{g=[];const h=c=c.vertices.find(d=>null==d.left);
do g.push(b(c.pos)),c=c.right?c.right.right:null;while(c&&c!==h);a.push(g)});return new A({paths:a,spatialReference:this.coordinateHelper.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};f.toPolygon=function(){const a=[],b=this.coordinateHelper.toArray;this.components.forEach((c,g)=>{g=[];const h=c.vertices[0];let d=h;const k=d;do g.push(b(d.pos)),d=w.isSome(d.right)?d.right.right:null;while(d&&d!==k);c.isClosed()&&g.push(b(h.pos));a.push(g)});return new z({rings:a,
spatialReference:this.coordinateHelper.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})};e.fromGeometry=function(a,b){var c=B.createCoordinateHelper(a.hasZ,a.hasM,a.spatialReference,b);b=new e(c);switch(a.type){case "polygon":var g=a.rings;for(a=0;a<g.length;++a){var h=g[a],d=new t(b),k=2<h.length&&y.equals(h[0],h[h.length-1]),m=k?h.length-1:h.length;for(var n=0;n<m;++n){const C=c.fromArray(h[n]),x=new q(d);d.vertices.push(x);x.pos=C;x.index=n}h=d.vertices.length-
1;for(m=0;m<h;++m)n=new r(d,d.vertices[m],d.vertices[m+1]),d.edges.push(n);k&&(k=new r(d,d.vertices[d.vertices.length-1],d.vertices[0]),d.edges.push(k));b.components.push(d)}break;case "polyline":for(g of a.paths){a=new t(b);d=g.length;for(k=0;k<d;++k)h=c.fromArray(g[k]),m=new q(a),a.vertices.push(m),m.pos=h,m.index=k;d=a.vertices.length-1;for(k=0;k<d;++k)h=new r(a,a.vertices[k],a.vertices[k+1]),a.edges.push(h);b.components.push(a)}break;case "point":c=new t(b),g=new q(c),g.index=0,g.pos=b.coordinateHelper.fromPoint(a),
c.vertices.push(g),b.components.push(c)}return b};u._createClass(e,[{key:"canUndo",get:function(){return 0<this.undoStack.length}},{key:"lastOperation",get:function(){return 0<this.undoStack.length?this.undoStack[this.undoStack.length-1]:null}},{key:"canRedo",get:function(){return 0<this.redoStack.length}}]);return e}(v);p.Component=t;p.Edge=r;p.EditGeometry=v;p.Vertex=q;Object.defineProperty(p,"__esModule",{value:!0})});