// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../Point".split(" "),function(q,A,h,t,k,p,v){const w=p.create(),x=p.create(),y=p.create(),l=p.create();q.computeOrigin=function(e){return t.isSome(e.transform)?e.transform.getOriginPoint(e.spatialReference):new v({x:e.extent.xmax-e.extent.width/2,y:e.extent.ymax-e.extent.height/2,z:e.extent.zmin,spatialReference:e.extent.spatialReference})};
q.smoothNormalsMesh=function(e){if(e.components){for(const r of e.components)if("smooth"===r.shading&&r.faces){{var a=e,g=r;t.isNone(a.vertexAttributes.normal)&&(a.vertexAttributes.normal=new Float32Array(a.vertexAttributes.position.length));const z=g.faces.length/3;for(let m=0;m<z;++m){const b=g.faces[3*m],c=g.faces[3*m+1],d=g.faces[3*m+2];var f=k.set(w,a.vertexAttributes.position[3*b],a.vertexAttributes.position[3*b+1],a.vertexAttributes.position[3*b+2]),n=k.set(x,a.vertexAttributes.position[3*
c],a.vertexAttributes.position[3*c+1],a.vertexAttributes.position[3*c+2]);const u=k.set(y,a.vertexAttributes.position[3*d],a.vertexAttributes.position[3*d+1],a.vertexAttributes.position[3*d+2]);n=k.subtract(n,n,f);f=k.subtract(u,u,f);f=k.cross(n,n,f);h.isNaN(a.vertexAttributes.normal[3*b])&&(a.vertexAttributes.normal[3*b]=0);h.isNaN(a.vertexAttributes.normal[3*b+1])&&(a.vertexAttributes.normal[3*b+1]=0);h.isNaN(a.vertexAttributes.normal[3*b+2])&&(a.vertexAttributes.normal[3*b+2]=0);h.isNaN(a.vertexAttributes.normal[3*
c])&&(a.vertexAttributes.normal[3*c]=0);h.isNaN(a.vertexAttributes.normal[3*c+1])&&(a.vertexAttributes.normal[3*c+1]=0);h.isNaN(a.vertexAttributes.normal[3*c+2])&&(a.vertexAttributes.normal[3*c+2]=0);h.isNaN(a.vertexAttributes.normal[3*d])&&(a.vertexAttributes.normal[3*d]=0);h.isNaN(a.vertexAttributes.normal[3*d+1])&&(a.vertexAttributes.normal[3*d+1]=0);h.isNaN(a.vertexAttributes.normal[3*d+2])&&(a.vertexAttributes.normal[3*d+2]=0);a.vertexAttributes.normal[3*b]+=f[0];a.vertexAttributes.normal[3*
b+1]+=f[1];a.vertexAttributes.normal[3*b+2]+=f[2];a.vertexAttributes.normal[3*c]+=f[0];a.vertexAttributes.normal[3*c+1]+=f[1];a.vertexAttributes.normal[3*c+2]+=f[2];a.vertexAttributes.normal[3*d]+=f[0];a.vertexAttributes.normal[3*d+1]+=f[1];a.vertexAttributes.normal[3*d+2]+=f[2]}for(g=0;g<a.vertexAttributes.normal.length;g+=3)k.set(l,a.vertexAttributes.normal[g],a.vertexAttributes.normal[g+1],a.vertexAttributes.normal[g+2]),k.normalize(l,l),a.vertexAttributes.normal[g+0]=l[0],a.vertexAttributes.normal[g+
1]=l[1],a.vertexAttributes.normal[g+2]=l[2]}}e.vertexAttributesChanged()}};Object.defineProperty(q,"__esModule",{value:!0})});