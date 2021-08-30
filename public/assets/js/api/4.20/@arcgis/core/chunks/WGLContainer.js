/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as e,b as t}from"../core/lang.js";import{b as r}from"./brushes.js";import{C as s}from"./Container.js";import i from"../core/Error.js";import{L as n}from"./Logger.js";import{D as o}from"./DisplayObject.js";import{e as a}from"./earcut.js";import{s as c}from"./vec2.js";import{a as h}from"./vec2f64.js";import{d as f,e as p}from"./featureConversionUtils.js";import{a as m}from"./OptimizedFeature.js";import{i as l}from"./number2.js";import{B as d,V as u}from"./VertexArrayObject.js";import{W as g}from"./enums.js";const y=n.getLogger("esri.views.2d.engine.webgl.Mesh2D"),_=(e,t,r,s)=>{let i=0;for(let s=1;s<r;s++){const r=e[2*(t+s-1)],n=e[2*(t+s-1)+1];i+=(e[2*(t+s)]-r)*(e[2*(t+s)+1]+n)}return s?i>0:i<0},x=({coords:e,lengths:t},r)=>{const s=[];for(let i=0,n=0;i<t.length;n+=t[i],i+=1){const o=n,c=[];for(;i<t.length-1&&_(e,n+t[i],t[i+1],r);i+=1,n+=t[i])c.push(n+t[i]-o);const h=e.slice(2*o,2*(n+t[i])),f=a(h,c,2);for(const e of f)s.push(e+o)}return s};class w{constructor(e,t,r,s=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=r,this.isMapSpace=s}static fromRect({x:e,y:t,width:r,height:s}){const i=e,n=t,o=i+r,a=n+s;return w.fromScreenExtent({xmin:i,ymin:n,xmax:o,ymax:a})}static fromPath(e){const t=f(new m,e.path,!1,!1),r=t.coords,s=new Uint32Array(x(t,!0)),i=new Uint32Array(r.length/2);for(let e=0;e<i.length;e++)i[e]=l(Math.floor(r[2*e]),Math.floor(r[2*e+1]));return new w({geometry:i},s,4)}static fromGeometry(e,t){const r=t.geometry.type;switch(r){case"polygon":return w.fromPolygon(e,t.geometry);case"extent":return w.fromMapExtent(e,t.geometry);default:return y.error(new i("mapview-bad-type",`Unable to create a mesh from type ${r}`,t)),w.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const r=p(new m,t,!1,!1),s=r.coords,i=new Uint32Array(x(r,!1)),n=new Uint32Array(s.length/2),o=h(),a=h();for(let t=0;t<n.length;t++)c(o,s[2*t],s[2*t+1]),e.toScreen(a,o),n[t]=l(Math.floor(a[0]),Math.floor(a[1]));return new w({geometry:n},i,4,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:r,ymax:s}){const i={geometry:new Uint32Array([l(e,r),l(t,r),l(e,s),l(e,s),l(t,r),l(t,s)])},n=new Uint32Array([0,1,2,3,4,5]);return new w(i,n,4)}static fromMapExtent(e,t){const[r,s]=e.toScreen([0,0],[t.xmin,t.ymin]),[i,n]=e.toScreen([0,0],[t.xmax,t.ymax]),o={geometry:new Uint32Array([l(r,s),l(i,s),l(r,n),l(r,n),l(i,s),l(i,n)])},a=new Uint32Array([0,1,2,3,4,5]);return new w(o,a,4)}destroy(){e(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const t in this._cache.vertexBuffers)e(this._cache.vertexBuffers[t])&&this._cache.vertexBuffers[t].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new i("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=d.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((r,s)=>({...r,[s]:d.createVertex(e,t,this.vertices[s])})),{})),this._cache.vertexBuffers}}const v=n.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),B=e=>parseFloat(e)/100;class b extends o{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",(()=>this._invalidate())),this.ready()}static fromClipArea(e,t){return new b(e,t)}_destroyGL(){e(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),e(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,r,s,i){const[n,o]=r.size;if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===o||(this._lastWidth=n,this._lastHeight=o,this._destroyGL()),t(this._cache.vao)){const t=this._createMesh(r,this._clip),n=t.getIndexBuffer(e),o=t.getVertexBuffers(e);this._cache.mesh=t,this._cache.vao=new u(e,s,i,o,n)}return this._cache.vao}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[r,s]=e.size,i="string"==typeof t.left?B(t.left)*r:t.left,n="string"==typeof t.right?B(t.right)*r:t.right,o="string"==typeof t.top?B(t.top)*s:t.top,a="string"==typeof t.bottom?B(t.bottom)*s:t.bottom,c=i,h=o;return{x:c,y:h,width:Math.max(r-n-c,0),height:Math.max(s-a-h,0)}}_createMesh(e,t){switch(t.type){case"rect":return w.fromRect(this._createScreenRect(e,t));case"path":return w.fromPath(t);case"geometry":return w.fromGeometry(e,t);default:return v.error(new i("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),w.fromRect({x:0,y:0,width:1,height:1})}}}class A extends s{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}doRender(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:s,profiler:i,drawPhase:n}=t,o=n===g.LABEL?1:s*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,o),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,o),i.recordContainerEnd()}renderChildren(e){t(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this.children)t.beforeRender(e);for(const t of this._renderPasses)try{t.render(e)}catch(e){}for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[r.clip],target:()=>this._clippingInfos,drawPhase:g.MAP|g.LABEL|g.LABEL_ALPHA|g.DEBUG|g.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(e(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const t=this._clips;e(t)&&t.length&&(this._clippingInfos=t.items.map((e=>b.fromClipArea(this.stage,e)))),this.requestRender()}}export{A as W};
