/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{k as t,A as e,e as i,f as s,g as r,h as a,v as o}from"./definitions.js";import{T as n}from"./TiledDisplayObject.js";import{createResolver as l}from"../core/promiseUtils.js";import{Q as d}from"./Queue.js";import h from"../core/Error.js";import{b as u,F as c,i as p,e as f,h as v,u as m,D as b,m as _,d as g}from"../core/lang.js";import{L as x}from"./Logger.js";import"./VertexArrayObject.js";import{F as y}from"./FramebufferObject.js";import{T as z}from"./Texture.js";import{g as T,m as w,n as S,i as V}from"./Utils12.js";import{c as D,D as A}from"./visualVariablesUtils.js";import{T as F}from"./TileContainer.js";import U from"../Color.js";import{a as E}from"./screenUtils.js";import{a as R}from"./unitUtils.js";import{m as I}from"./lengthUtils.js";import{g as M}from"./capabilities2.js";class j extends n{constructor(e,i){super(e,i,[t,t])}}const O=x.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),C=D(A,O),k=t=>2147483647&t;class B{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,o=T(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new o(m(s))),this._resetRange()}destroy(){f(this._texture,(t=>t.dispose()));for(const t in this._fbos)f(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=k(t),r=m(this.data),a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(u(this.data))return null;const i=k(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return g(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(u(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new y(t,i,s)}return this._fbos[e]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!v("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const s=m(this.data).buffer,r=this.getTexture(t),a=4,o=(e-e%this.size)/this.size,n=(i-i%this.size)/this.size,l=o,d=this.size,u=n,c=o*this.size*a,p=(d+u*this.size)*a-c,f=T(this.pixelType),v=new f(s,c*f.BYTES_PER_ELEMENT,p),b=this.size,_=u-l+1;if(_>this.size)return void O.error(new h("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,l,b,_,v)}catch(t){}e()}}update(t){const{data:e,start:i,end:s}=t;if(p(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=T(this.pixelType);this.destroy(),this.data=new s(m(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new z(t,this._textureDesc,g(this.data,void 0));if(p(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(t),n=w(r),l=new(T(r))(new ArrayBuffer(i*s*n*this.texelSize)),d=t.getBoundFramebufferObject(),{x:h,y:u,width:c,height:p}=t.getViewport();t.bindFramebuffer(o),o.readPixels(0,0,i,s,a,r,l),e.updateData(0,0,0,2*i,s/2,l),t.setViewport(h,u,c,p),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class q{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:i,size:s}=t;if(this.shared=i,this.size=s,C("Initializing AttributeStoreView",t),u(this._data))this._data=c(e,(t=>new B(t,s,i)));else for(let t=0;t<this._data.length;t++){const r=this._data[t],a=e[t];p(a)&&(u(r)?this._data[t]=new B(a,s,i):r.resize(a,s))}this._initialized=!0}destroy(){f(this._data,(t=>c(t,(t=>t.destroy())))),f(this._defaultTexture,(t=>t.dispose()))}isUpdating(){const t=this._data;if(u(t))return!0;const e=p(this._pendingAttributeUpdate),i=e;return v("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${i}\n  -> hasPendingUpdate ${e}`),i}getBlock(t){if(u(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,e,0,0)}getData(t,e,i,s){if(!this._data)return 0;const r=m(this._data)[e];if(u(r))return 0;const a=r.getData(t,i);return p(a)?a:s}setData(t,e,i,s){const r=m(this._data)[e];m(r).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void O.error(new h("mapview-webgl","Tried to update attribute data with a pending update"));const e=l();return C("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&p(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=m(this._data);for(let e=0;e<t.blocks.length;e++){const s=t.blocks[e],r=i[e];f(r,(t=>f(s,(i=>{C(`Updating block ${e}`,i),t.update(i)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t){this.update();const e=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(e,i),t.bindTexture(e,s),t.bindTexture(e,r),void t.bindTexture(e,a);const o=m(this._data);this._locked&&!this._forceNextUpload||(b(o,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(_(o[0],e,(e=>e.getTexture(t))),i),t.bindTexture(_(o[1],e,(e=>e.getTexture(t))),s),t.bindTexture(_(o[2],e,(e=>e.getTexture(t))),r),t.bindTexture(_(o[3],e,(e=>e.getTexture(t))),a)}_getDefaultTexture(t){if(u(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new z(t,e,new Uint8Array(4))}return this._defaultTexture}}function L(t,e){const i=e.length;if(t<e[0].value||1===i)return e[0].size;for(let s=1;s<i;s++)if(t<e[s].value){const i=(t-e[s-1].value)/(e[s].value-e[s-1].value);return e[s-1].size+i*(e[s].size-e[s-1].size)}return e[i-1].size}function P(t,e,i=0){if(u(e))return t[i+0]=0,t[i+1]=0,t[i+2]=0,void(t[i+3]=0);const{r:s,g:r,b:a,a:o}=e;t[i+0]=s*o/255,t[i+1]=r*o/255,t[i+2]=a*o/255,t[i+3]=o}class Q{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return g(e.levels[t],(()=>{let i=1/0,s=0;for(const r in e.levels){const e=parseFloat(r),a=Math.abs(t-e);a<i&&(i=a,s=e)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((t-s)/2),a=m(e.levels[s]),o=new Float32Array(a.values);return o[2]*=r,o[3]*=r,{sizes:m(a.sizes),values:o}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){p(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,i){switch(p(i)&&i.forEach((t=>this._updateEffects(t))),this._vvInfo=e,t.type){case"dot-density":this._updateDotDensityInfo(t)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:M().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(t){p(t)&&t.filter&&t.filter.enabled&&(this.outsideLabelsVisible=t.excludedLabelsVisible)}_updateVisualVariables(t,e){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!t)return;const s=t.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const t=s.minMaxValue;let i,r;if(S(t.minSize)&&S(t.maxSize))if(V(t.minSize)&&V(t.maxSize))i=E(t.minSize),r=E(t.maxSize);else{const s=e.scale;i=E(L(s,t.minSize.stops)),r=E(L(s,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=E(L(e.scale,s.scaleStops.stops))),s.unitValue){const t=R(e.spatialReference)/I[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=t/e.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=t.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=t.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const o=t.rotation;o&&(i.vvRotationEnabled=!0,i.vvRotationType=o.type)}_updateDotDensityInfo(t){const e=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let t=0;t<o;t++){const i=t>=e.length?new U([0,0,0,0]):e[t].color;P(this.ddColors,i,4*t)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;P(this.ddBackgroundColor,t.backgroundColor)}}class N extends F{constructor(t){super(t),this._rendererInfo=new Q,this._materialItemsRequestQueue=new d,this.attributeView=new q((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((t=>t.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,i){this._rendererInfo.setInfo(t,e,i),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null;const i=l();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:i}),this.requestRender(),i.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){return{...super.createRenderParams(t),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=t,o=e.map((t=>r.textureManager.rasterizeItem(t.symbol,a,t.glyphIds,i)));Promise.all(o).then((t=>{if(!this.stage)return void s.reject();const i=t.map(((t,i)=>({id:e[i].id,mosaicItem:t})));s.resolve(i)}),s.reject)}}export{N as F,j as W};
