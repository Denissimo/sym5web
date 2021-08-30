// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["./Utils"],function(h){return function(){function e(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}var f=e.prototype;f.clone=function(){const c=new e;for(let a=0;a<this.geometries.length;a++){const b=this.geometries[a],d=c.geometries[a];d.indexBuffer=b.indexBuffer.slice();d.vertexBuffer={};for(const g in b.vertexBuffer){const {data:k,
stride:l}=b.vertexBuffer[g];d.vertexBuffer[g]={data:k.slice(),stride:l}}}return c};e.deserialize=function(c){const a=new e;for(let b=0;5>b;++b){a.geometries[b].indexBuffer=new Uint32Array(c.geometries[b].indexBuffer);a.geometries[b].vertexBuffer={};for(const d in c.geometries[b].vertexBuffer)a.geometries[b].vertexBuffer[d]={data:h.allocateTypedArrayBufferwithData(c.geometries[b].vertexBuffer[d].data,c.geometries[b].vertexBuffer[d].stride),stride:c.geometries[b].vertexBuffer[d].stride}}return a};f.serialize=
function(){const c={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]};for(let a=0;5>a;++a)for(const b in this.geometries[a].vertexBuffer)c.geometries[a].vertexBuffer[b]={data:this.geometries[a].vertexBuffer[b].data.buffer,
stride:this.geometries[a].vertexBuffer[b].stride};return c};f.getBuffers=function(){const c=[];for(let a=0;5>a;++a){c.push(this.geometries[a].indexBuffer.buffer);for(const b in this.geometries[a].vertexBuffer)c.push(this.geometries[a].vertexBuffer[b].data.buffer)}return c};return e}()});