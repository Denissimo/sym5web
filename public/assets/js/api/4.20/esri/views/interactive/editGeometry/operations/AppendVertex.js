// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../EditGeometry"],function(g,a,e){let k=function(){function h(d,b,c){this.editGeometry=d;this.component=b;this.pos=c;this.right=this.left=this.originalEdge=this.addedVertex=null}var f=h.prototype;f.apply=function(){let d="redo";a.isNone(this.addedVertex)&&(d="apply",this.addedVertex=new e.Vertex(this.component));const b=this.component.getLastVertex();if(a.isNone(b))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=
0;else{let c=null;b.right&&(this.originalEdge=b.right,c=this.originalEdge.right,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1));this.component.vertices.push(this.addedVertex);this.addedVertex.pos=this.pos;a.isNone(this.left)&&(this.left=new e.Edge(this.component,b,this.addedVertex));this.component.edges.push(this.left);b.right=this.left;a.isSome(this.originalEdge)&&a.isSome(c)&&(a.isNone(this.right)&&(this.right=new e.Edge(this.component,this.addedVertex,c)),this.component.edges.push(this.right),
c.left=this.right);this.component.updateVertexIndex(this.addedVertex,b.index+1)}this.editGeometry.emit("change",{addedVertices:[this.addedVertex],operation:d})};f.undo=function(){if(a.isNone(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1);a.isSome(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.left.right=null);a.isSome(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),
1),this.right.right.left=null);a.isSome(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.left.right=this.originalEdge,this.originalEdge.right.left=this.originalEdge);a.isSome(this.left)?this.component.updateVertexIndex(this.left.left,this.left.left.index):this.component.updateVertexIndex(this.addedVertex,0);this.editGeometry.emit("change",{removedVertices:[this.addedVertex],operation:"undo"})};f.accumulate=function(){return!1};return h}();g.AppendVertex=k;Object.defineProperty(g,
"__esModule",{value:!0})});