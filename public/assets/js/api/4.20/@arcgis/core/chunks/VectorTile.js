/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as t,u as e,b as s}from"../core/lang.js";import{b as r,c as i,r as n,e as a}from"./mat3.js";import{c as o}from"./mat3f32.js";import{B as h,V as l}from"./VertexArrayObject.js";import"./FramebufferObject.js";import"./Texture.js";import{F as c}from"./config.js";import{T as f}from"./TiledDisplayObject.js";class u{constructor(t){this.xTile=0,this.yTile=0,this.hash=0,this.priority=1,this.colliders=[],this.textVertexRanges=[],this.iconVertexRanges=[],this.tile=t}}class y{constructor(){this.tileSymbols=[],this.parts=[{startTime:0,startOpacity:0,targetOpacity:0,show:!1},{startTime:0,startOpacity:0,targetOpacity:0,show:!1}],this.show=!1}}function d(t,e,s,r,i,n){const a=s-i;if(a>=0)return(e>>a)+(r-(n<<a))*(t>>a);const o=-a;return e-(n-(r<<o))*(t>>o)<<o}class x{constructor(t,e,s){this._rows=Math.ceil(e/s),this._columns=Math.ceil(t/s),this._cellSize=s,this.cells=new Array(this._rows);for(let t=0;t<this._rows;t++){this.cells[t]=new Array(this._columns);for(let e=0;e<this._columns;e++)this.cells[t][e]=[]}}getCell(t,e){const s=Math.min(Math.max(Math.floor(e/this._cellSize),0),this._rows-1),r=Math.min(Math.max(Math.floor(t/this._cellSize),0),this._columns-1);return this.cells[s]&&this.cells[s][r]||null}getCellSpan(t,e,s,r){return[Math.min(Math.max(Math.floor(t/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(e/this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(s/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(r/this._cellSize),0),this.rows-1)]}get cellSize(){return this._cellSize}get columns(){return this._columns}get rows(){return this._rows}}function p(t,e,s){for(const[r,i]of t.symbols)m(t,e,s,i,r)}function m(t,e,s,r,i){const n=t.layerData.get(i);if(3===n.type){for(const e of r){const r=e.unique;let i;if(e.selectedForRendering){const e=r.parts[0],n=e.startOpacity,a=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===a;const o=s?Math.floor(127*n)|a<<7:a?255:0;i=o<<24|o<<16|o<<8|o}else i=0;for(const[t,s]of e.iconVertexRanges)for(let e=t;e<t+s;e+=4)n.iconOpacity[e/4]=i;if(e.selectedForRendering){const e=r.parts[1],n=e.startOpacity,a=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===a;const o=s?Math.floor(127*n)|a<<7:a?255:0;i=o<<24|o<<16|o<<8|o}else i=0;for(const[t,s]of e.textVertexRanges)for(let e=t;e<t+s;e+=4)n.textOpacity[e/4]=i}n.lastOpacityUpdate=e,n.opacityChanged=!0}}class g{constructor(t,e){this.layerUIDs=[],this.isDestroyed=!1,this.data=t,this.memoryUsed=t.byteLength;let s=1;const r=new Uint32Array(t);this.layerUIDs=[];const i=r[s++];for(let t=0;t<i;t++)this.layerUIDs[t]=r[s++];this.bufferDataOffset=s,e&&(this.layer=e.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return s(this.data)}get offset(){return this.bufferDataOffset}destroy(){this.isDestroyed||(this.doDestroy(),this.isDestroyed=!0)}prepareForRendering(t){s(this.data)||(this.doPrepareForRendering(t,this.data,this.bufferDataOffset),this.data=null)}}class b extends g{constructor(t,e){super(t,e),this.type=2,this.lineIndexStart=0,this.lineIndexCount=0;const s=new Uint32Array(t);let r=this.bufferDataOffset;this.lineIndexStart=s[r++],this.lineIndexCount=s[r++];const i=s[r++];if(i>0){const t=new Map;for(let e=0;e<i;e++){const e=s[r++],i=s[r++],n=s[r++];t.set(e,[i,n])}this.patternMap=t}this.bufferDataOffset=r}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){t(this.lineVertexArrayObject)&&this.lineVertexArrayObject.dispose(),t(this.lineVertexBuffer)&&this.lineVertexBuffer.dispose(),t(this.lineIndexBuffer)&&this.lineIndexBuffer.dispose(),this.lineVertexArrayObject=null,this.lineVertexBuffer=null,this.lineIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(t,e,s){const r=new Uint32Array(e),i=new Int32Array(r.buffer),n=r[s++];this.lineVertexBuffer=h.createVertex(t,35044,new Int32Array(i.buffer,4*s,n)),s+=n;const a=r[s++];this.lineIndexBuffer=h.createIndex(t,35044,new Uint32Array(r.buffer,4*s,a)),s+=a;const o=this.layer.lineMaterial;this.lineVertexArrayObject=new l(t,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:this.lineVertexBuffer},this.lineIndexBuffer)}}class B extends g{constructor(t,e){super(t,e),this.type=1,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const s=new Uint32Array(t);let r=this.bufferDataOffset;this.fillIndexStart=s[r++],this.fillIndexCount=s[r++],this.outlineIndexStart=s[r++],this.outlineIndexCount=s[r++];const i=s[r++];if(i>0){const t=new Map;for(let e=0;e<i;e++){const e=s[r++],i=s[r++],n=s[r++];t.set(e,[i,n])}this.patternMap=t}this.bufferDataOffset=r}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return(this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){t(this.fillVertexArrayObject)&&this.fillVertexArrayObject.dispose(),t(this.fillVertexBuffer)&&this.fillVertexBuffer.dispose(),t(this.fillIndexBuffer)&&this.fillIndexBuffer.dispose(),this.fillVertexArrayObject=null,this.fillVertexBuffer=null,this.fillIndexBuffer=null,t(this.outlineVertexArrayObject)&&this.outlineVertexArrayObject.dispose(),t(this.outlineVertexBuffer)&&this.outlineVertexBuffer.dispose(),t(this.outlineIndexBuffer)&&this.outlineIndexBuffer.dispose(),this.outlineVertexArrayObject=null,this.outlineVertexBuffer=null,this.outlineIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(t,e,s){const r=new Uint32Array(e),i=new Int32Array(r.buffer),n=r[s++];this.fillVertexBuffer=h.createVertex(t,35044,new Int32Array(i.buffer,4*s,n)),s+=n;const a=r[s++];this.fillIndexBuffer=h.createIndex(t,35044,new Uint32Array(r.buffer,4*s,a)),s+=a;const o=r[s++];this.outlineVertexBuffer=h.createVertex(t,35044,new Int32Array(i.buffer,4*s,o)),s+=o;const c=r[s++];this.outlineIndexBuffer=h.createIndex(t,35044,new Uint32Array(r.buffer,4*s,c)),s+=c;const f=this.layer,u=f.fillMaterial,y=f.outlineMaterial;this.fillVertexArrayObject=new l(t,u.getAttributeLocations(),u.getLayoutInfo(),{geometry:this.fillVertexBuffer},this.fillIndexBuffer),this.outlineVertexArrayObject=new l(t,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.outlineVertexBuffer},this.outlineIndexBuffer)}}class I extends g{constructor(t,e,s){super(t,e),this.type=3,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const r=new Uint32Array(t),i=new Int32Array(t),n=new Float32Array(t);let a=this.bufferDataOffset;this.isIconSDF=!!r[a++];const o=r[a++];for(let t=0;t<o;t++){const t=r[a++],e=r[a++],s=r[a++];this.iconPerPageElementsMap.set(t,[e,s])}const h=r[a++];for(let t=0;t<h;t++){const t=r[a++],e=r[a++],s=r[a++];this.glyphPerPageElementsMap.set(t,[e,s])}const l=r[a++],c=r[a++];this.iconOpacity=new Int32Array(l),this.textOpacity=new Int32Array(c),a=function(t,e,s,r,i,n){const a=e[r++];for(let o=0;o<a;o++){const a=new u(n);a.xTile=e[r++],a.yTile=e[r++],a.hash=e[r++],a.priority=e[r++];const o=e[r++];for(let t=0;t<o;t++){const t=e[r++],i=e[r++],n=e[r++],o=e[r++],h=!!e[r++],l=e[r++],c=s[r++],f=s[r++],u=e[r++],y=e[r++];a.colliders.push({xTile:t,yTile:i,dxPixels:n,dyPixels:o,hard:h,partIndex:l,width:u,height:y,minLod:c,maxLod:f})}const h=t[r++];for(let e=0;e<h;e++)a.textVertexRanges.push([t[r++],t[r++]]);const l=t[r++];for(let e=0;e<l;e++)a.iconVertexRanges.push([t[r++],t[r++]]);i.push(a)}return r}(r,i,n,a,this.symbols,s),this.bufferDataOffset=a}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let t=0;for(const[e,s]of this.iconPerPageElementsMap)t+=s[1];for(const[e,s]of this.glyphPerPageElementsMap)t+=s[1];return t/3}doDestroy(){t(this.iconVertexArrayObject)&&this.iconVertexArrayObject.dispose(),t(this.iconVertexBuffer)&&this.iconVertexBuffer.dispose(),t(this.iconOpacityBuffer)&&this.iconOpacityBuffer.dispose(),t(this.iconIndexBuffer)&&this.iconIndexBuffer.dispose(),this.iconVertexArrayObject=null,this.iconVertexBuffer=null,this.iconOpacityBuffer=null,this.iconIndexBuffer=null,t(this.textVertexArrayObject)&&this.textVertexArrayObject.dispose(),t(this.textVertexBuffer)&&this.textVertexBuffer.dispose(),t(this.textOpacityBuffer)&&this.textOpacityBuffer.dispose(),t(this.textIndexBuffer)&&this.textIndexBuffer.dispose(),this.textVertexArrayObject=null,this.textVertexBuffer=null,this.textOpacityBuffer=null,this.textIndexBuffer=null,this.memoryUsed=0}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const t=e(this.iconOpacity),s=e(this.iconOpacityBuffer);t.length>0&&t.byteLength===s.size&&s.setSubData(t);const r=e(this.textOpacity),i=e(this.textOpacityBuffer);r.length>0&&r.byteLength===i.size&&i.setSubData(r)}doPrepareForRendering(t,s,r){const i=new Uint32Array(s),n=new Int32Array(i.buffer),a=i[r++];this.iconVertexBuffer=h.createVertex(t,35044,new Int32Array(n.buffer,4*r,a)),r+=a;const o=i[r++];this.iconIndexBuffer=h.createIndex(t,35044,new Uint32Array(i.buffer,4*r,o)),r+=o;const c=i[r++];this.textVertexBuffer=h.createVertex(t,35044,new Int32Array(n.buffer,4*r,c)),r+=c;const f=i[r++];this.textIndexBuffer=h.createIndex(t,35044,new Uint32Array(i.buffer,4*r,f)),r+=f,this.iconOpacityBuffer=h.createVertex(t,35044,e(this.iconOpacity).buffer),this.textOpacityBuffer=h.createVertex(t,35044,e(this.textOpacity).buffer);const u=this.layer,y=u.iconMaterial,d=u.textMaterial;this.iconVertexArrayObject=new l(t,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.iconVertexBuffer,opacity:this.iconOpacityBuffer},this.iconIndexBuffer),this.textVertexArrayObject=new l(t,d.getAttributeLocations(),d.getLayoutInfo(),{geometry:this.textVertexBuffer,opacity:this.textOpacityBuffer},this.textIndexBuffer)}}class O extends g{constructor(t,e){super(t,e),this.type=4,this.circleIndexStart=0,this.circleIndexCount=0;const s=new Uint32Array(t);let r=this.bufferDataOffset;this.circleIndexStart=s[r++],this.circleIndexCount=s[r++],this.bufferDataOffset=r}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){t(this.circleVertexArrayObject)&&this.circleVertexArrayObject.dispose(),t(this.circleVertexBuffer)&&this.circleVertexBuffer.dispose(),t(this.circleIndexBuffer)&&this.circleIndexBuffer.dispose(),this.circleVertexArrayObject=null,this.circleVertexBuffer=null,this.circleIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(t,e,s){const r=new Uint32Array(e),i=new Int32Array(r.buffer),n=r[s++];this.circleVertexBuffer=h.createVertex(t,35044,new Int32Array(i.buffer,4*s,n)),s+=n;const a=r[s++];this.circleIndexBuffer=h.createIndex(t,35044,new Uint32Array(r.buffer,4*s,a)),s+=a;const o=this.layer.circleMaterial;this.circleVertexArrayObject=new l(t,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:this.circleVertexBuffer},this.circleIndexBuffer)}}class w extends f{constructor(t,e,s,r,i=null){super(t,s,r,[4096,4096]),this._memCache=i,this._referenced=0,this._hasSymbolBuckets=!1,this._memoryUsedByLayerData=0,this.layerData=new Map,this.layerCount=0,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.invalidating=!1,this.parentTile=null,this.childrenTiles=new Set,this._processed=!1,this._referenced=1,this.styleRepository=e,this.id=t.id,this.transforms.tileUnitsToPixels=o()}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<c}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<c)}get wasRequested(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(t){this.changeDataImpl(t),this.requestRender(),this.ready(),this.invalidating=!1,this._processed=!0}deleteLayerData(e){let s=!1;for(const t of e)if(this.layerData.has(t)){const e=this.layerData.get(t);this._memoryUsedByLayerData-=e.memoryUsed,3===e.type&&this.symbols.has(t)&&(this.symbols.delete(t),s=!0),e.destroy(),this.layerData.delete(t),this.layerCount--}t(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData),s&&this.emit("symbols-changed"),this.requestRender()}processed(){return this._processed}hasData(){return this.layerCount>0}dispose(){"unloaded"!==this.status&&(V.delete(this),w._destroyRenderBuckets(this.layerData),this.layerData=null,this.layerCount=0,this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded")}release(){return 0==--this._referenced&&(this.dispose(),this.stage=null,!0)}retain(){++this._referenced}get referenced(){return this._referenced}get memoryUsage(){return(this._memoryUsedByLayerData+256)/(this._referenced||1)}changeDataImpl(e){let s=!1;if(e){const r=this._createRenderBuckets(e);for(const[t,e]of r){if(this.layerData.has(t)){const s=this.layerData.get(t);this._memoryUsedByLayerData-=e.memoryUsed,s.destroy(),this.layerData.delete(t),this.layerCount--}3===e.type&&(this.symbols.set(t,e.symbols),s=!0),this._memoryUsedByLayerData+=e.memoryUsed,this.layerData.set(t,e),this.layerCount++}t(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData)}this._hasSymbolBuckets=!1;for(const[t,e]of this.layerData)3===e.type&&(this._hasSymbolBuckets=!0);s&&this.emit("symbols-changed")}attachWithContext(t){this.stage={context:t,trashDisplayObject(t){t.processDetach()},untrashDisplayObject:()=>!1}}setTransform(t,e){super.setTransform(t,e);const s=e/(t.resolution*t.pixelRatio),o=this.size[0]/this.coordRange[0]*s,h=this.size[1]/this.coordRange[1]*s,l=[0,0];t.toScreen(l,this.coords);const c=this.transforms.tileUnitsToPixels;r(c),i(c,c,l),n(c,c,Math.PI*t.rotation/180),a(c,c,[o,h,1])}static _destroyRenderBuckets(t){if(!t)return;const e=new Set;t.forEach((t=>{e.has(t)||(t.destroy(),e.add(t))})),t.clear()}_createRenderBuckets(t){const e=new Map,s=new Map;for(const r of t){const t=this._deserializeBucket(r,s);for(const s of t.layerUIDs)e.set(s,t)}return e}_deserializeBucket(t,e){let s=e.get(t);if(s)return s;switch(new Uint32Array(t)[0]){case 1:s=new B(t,this.styleRepository);break;case 2:s=new b(t,this.styleRepository);break;case 3:s=new I(t,this.styleRepository,this);break;case 4:s=new O(t,this.styleRepository)}return e.set(t,s),s}}const V=new Map;function A(){V.forEach(((t,e)=>{console.log(`\n${e.key}:`),t[0].forEach((t=>console.log(t))),console.log("========"),t[1].forEach((t=>console.log(t)))}))}export{x as G,w as V,y as a,A as p,d as t,p as w};
