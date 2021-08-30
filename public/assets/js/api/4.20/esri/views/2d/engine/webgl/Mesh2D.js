// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../chunks/earcut ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../layers/graphics/featureConversionUtils ../../../../layers/graphics/OptimizedGeometry ./number ../../../webgl/BufferObject".split(" "),function(x,p,y,q,z,A,r,t,u,g,v){const B=y.getLogger("esri.views.2d.engine.webgl.Mesh2D"),w=({coords:e,lengths:k},b)=>{const a=[];for(let f=0,h=0;f<k.length;h+=
k[f],f+=1){const l=h;for(var d=[];f<k.length-1;f+=1,h+=k[f]){{var c=h+k[f];let n=0;for(let m=1;m<k[f+1];m++)n+=(e[2*(c+m)]-e[2*(c+m-1)])*(e[2*(c+m)+1]+e[2*(c+m-1)+1]);c=b?0<n:0>n}if(!c)break;d.push(h+k[f]-l)}c=e.slice(2*l,2*(h+k[f]));d=z.earcut(c,d,2);for(const n of d)a.push(n+l)}return a};return function(){function e(b,a,d,c=!1){this._cache={};this.vertices=b;this.indices=a;this.primitiveType=d;this.isMapSpace=c}e.fromRect=function({x:b,y:a,width:d,height:c}){return e.fromScreenExtent({xmin:b,ymin:a,
xmax:b+d,ymax:a+c})};e.fromPath=function(b){var a=t.convertFromNestedArray(new u,b.path,!1,!1);b=a.coords;a=new Uint32Array(w(a,!0));const d=new Uint32Array(b.length/2);for(let c=0;c<d.length;c++)d[c]=g.i1616to32(Math.floor(b[2*c]),Math.floor(b[2*c+1]));return new e({geometry:d},a,4)};e.fromGeometry=function(b,a){const d=a.geometry.type;switch(d){case "polygon":return e.fromPolygon(b,a.geometry);case "extent":return e.fromMapExtent(b,a.geometry);default:return B.error(new p("mapview-bad-type",`Unable to create a mesh from type ${d}`,
a)),e.fromRect({x:0,y:0,width:1,height:1})}};e.fromPolygon=function(b,a){var d=t.convertFromPolygon(new u,a,!1,!1);a=d.coords;d=new Uint32Array(w(d,!1));const c=new Uint32Array(a.length/2),f=r.create(),h=r.create();for(let l=0;l<c.length;l++)A.set(f,a[2*l],a[2*l+1]),b.toScreen(h,f),c[l]=g.i1616to32(Math.floor(h[0]),Math.floor(h[1]));return new e({geometry:c},d,4,!0)};e.fromScreenExtent=function({xmin:b,xmax:a,ymin:d,ymax:c}){b={geometry:new Uint32Array([g.i1616to32(b,d),g.i1616to32(a,d),g.i1616to32(b,
c),g.i1616to32(b,c),g.i1616to32(a,d),g.i1616to32(a,c)])};a=new Uint32Array([0,1,2,3,4,5]);return new e(b,a,4)};e.fromMapExtent=function(b,a){const [d,c]=b.toScreen([0,0],[a.xmin,a.ymin]),[f,h]=b.toScreen([0,0],[a.xmax,a.ymax]);b={geometry:new Uint32Array([g.i1616to32(d,c),g.i1616to32(f,c),g.i1616to32(d,h),g.i1616to32(d,h),g.i1616to32(f,c),g.i1616to32(f,h)])};a=new Uint32Array([0,1,2,3,4,5]);return new e(b,a,4)};var k=e.prototype;k.destroy=function(){q.isSome(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();
for(const b in this._cache.vertexBuffers)q.isSome(this._cache.vertexBuffers[b])&&this._cache.vertexBuffers[b].dispose()};k.getIndexBuffer=function(b,a=35044){this._cache.indexBuffer||(this._cache.indexBuffer=v.createIndex(b,a,this.indices));return this._cache.indexBuffer};k.getVertexBuffers=function(b,a=35044){this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((d,c)=>({...d,[c]:v.createVertex(b,a,this.vertices[c])}),{}));return this._cache.vertexBuffers};x._createClass(e,
[{key:"elementType",get:function(){a:switch(this.indices.BYTES_PER_ELEMENT){case 1:var b=5121;break a;case 2:b=5123;break a;case 4:b=5125;break a;default:throw new p("Cannot get DataType of array");}return b}}]);return e}()});