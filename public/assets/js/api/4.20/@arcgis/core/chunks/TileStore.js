/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as t,b as e,h as s,F as i,D as r,e as n,u as a}from"../core/lang.js";import{n as o,m as h,o as u,c as l,w as c,u as d}from"./featureConversionUtils.js";import{F as m,S as f}from"./FeatureSetReader.js";import _ from"../core/Error.js";import{L as p}from"./Logger.js";import{c as g}from"./mathUtils.js";import{createAbortController as x,createResolver as y,isAbortError as b}from"../core/promiseUtils.js";import{d as I}from"./diffUtils.js";import S from"../layers/support/FieldsIndex.js";import{l as M,H as T,A as v,N as w,m as z}from"./definitions.js";import{g as B}from"./Utils12.js";import{c as F,D as A,g as Y}from"./visualVariablesUtils.js";import{E as C}from"./Evented.js";import{q as X}from"./quickselect.js";import{A as k}from"./ArrayPool.js";import D from"../geometry/Extent.js";import{a as E}from"./aaBoundingRect.js";import{Q as j}from"../rest/support/Query.js";import{T as R}from"./TileKey.js";import{a as U}from"./TileInfoView.js";function O(t,e){if(!(this instanceof O))return new O(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}function P(t,e,s){if(!s)return e.indexOf(t);for(var i=0;i<e.length;i++)if(s(t,e[i]))return i;return-1}function L(t,e){N(t,0,t.children.length,e,t)}function N(t,e,s,i,r){r||(r=K(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var n,a=e;a<s;a++)n=t.children[a],G(r,t.leaf?i(n):n);return r}function G(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function H(t,e){return t.minX-e.minX}function V(t,e){return t.minY-e.minY}function Q(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function q(t){return t.maxX-t.minX+(t.maxY-t.minY)}function Z(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function J(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function K(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function $(t,e,s,i,r){for(var n,a=[e,s];a.length;)(s=a.pop())-(e=a.pop())<=i||(n=e+Math.ceil((s-e)/i/2)*i,X(t,n,e,s,r),a.push(e,n,n,s))}O.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,s=[],i=this.toBBox;if(!J(t,e))return s;for(var r,n,a,o,h=[];e;){for(r=0,n=e.children.length;r<n;r++)a=e.children[r],J(t,o=e.leaf?i(a):a)&&(e.leaf?s.push(a):Z(t,o)?this._all(a,s):h.push(a));e=h.pop()}return s},collides:function(t){var e=this.data,s=this.toBBox;if(!J(t,e))return!1;for(var i,r,n,a,o=[];e;){for(i=0,r=e.children.length;i<r;i++)if(n=e.children[i],J(t,a=e.leaf?s(n):n)){if(e.leaf||Z(t,a))return!0;o.push(n)}e=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=K([]),this},remove:function(t,e){if(!t)return this;for(var s,i,r,n,a=this.data,o=this.toBBox(t),h=[],u=[];a||h.length;){if(a||(a=h.pop(),i=h[h.length-1],s=u.pop(),n=!0),a.leaf&&-1!==(r=P(t,a.children,e)))return a.children.splice(r,1),h.push(a),this._condense(h),this;n||a.leaf||!Z(a,o)?i?(s++,a=i.children[s],n=!1):a=null:(h.push(a),u.push(s),s=0,i=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:H,compareMinY:V,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var s=[];t;)t.leaf?e.push.apply(e,t.children):s.push.apply(s,t.children),t=s.pop();return e},_build:function(t,e,s,i){var r,n=s-e+1,a=this._maxEntries;if(n<=a)return L(r=K(t.slice(e,s+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(n)/Math.log(a)),a=Math.ceil(n/Math.pow(a,i-1))),(r=K([])).leaf=!1,r.height=i;var o,h,u,l,c=Math.ceil(n/a),d=c*Math.ceil(Math.sqrt(a));for($(t,e,s,d,this.compareMinX),o=e;o<=s;o+=d)for($(t,o,u=Math.min(o+d-1,s),c,this.compareMinY),h=o;h<=u;h+=c)l=Math.min(h+c-1,u),r.children.push(this._build(t,h,l,i-1));return L(r,this.toBBox),r},_chooseSubtree:function(t,e,s,i){for(var r,n,a,o,h,u,l,c,d,m;i.push(e),!e.leaf&&i.length-1!==s;){for(l=c=1/0,r=0,n=e.children.length;r<n;r++)h=Q(a=e.children[r]),d=t,m=a,(u=(Math.max(m.maxX,d.maxX)-Math.min(m.minX,d.minX))*(Math.max(m.maxY,d.maxY)-Math.min(m.minY,d.minY))-h)<c?(c=u,l=h<l?h:l,o=a):u===c&&h<l&&(l=h,o=a);e=o||e.children[0]}return e},_insert:function(t,e,s){var i=this.toBBox,r=s?t:i(t),n=[],a=this._chooseSubtree(r,this.data,e,n);for(a.children.push(t),G(a,r);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(r,n,e)},_split:function(t,e){var s=t[e],i=s.children.length,r=this._minEntries;this._chooseSplitAxis(s,r,i);var n=this._chooseSplitIndex(s,r,i),a=K(s.children.splice(n,s.children.length-n));a.height=s.height,a.leaf=s.leaf,L(s,this.toBBox),L(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(s,a)},_splitRoot:function(t,e){this.data=K([t,e]),this.data.height=t.height+1,this.data.leaf=!1,L(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,s){var i,r,n,a,o,h,u,l,c,d,m,f,_,p;for(h=u=1/0,i=e;i<=s-e;i++)r=N(t,0,i,this.toBBox),n=N(t,i,s,this.toBBox),c=r,d=n,m=void 0,f=void 0,_=void 0,p=void 0,m=Math.max(c.minX,d.minX),f=Math.max(c.minY,d.minY),_=Math.min(c.maxX,d.maxX),p=Math.min(c.maxY,d.maxY),a=Math.max(0,_-m)*Math.max(0,p-f),o=Q(r)+Q(n),a<h?(h=a,l=i,u=o<u?o:u):a===h&&o<u&&(u=o,l=i);return l},_chooseSplitAxis:function(t,e,s){var i=t.leaf?this.compareMinX:H,r=t.leaf?this.compareMinY:V;this._allDistMargin(t,e,s,i)<this._allDistMargin(t,e,s,r)&&t.children.sort(i)},_allDistMargin:function(t,e,s,i){t.children.sort(i);var r,n,a=this.toBBox,o=N(t,0,e,a),h=N(t,s-e,s,a),u=q(o)+q(h);for(r=e;r<s-e;r++)n=t.children[r],G(o,t.leaf?a(n):n),u+=q(o);for(r=s-e-1;r>=e;r--)n=t.children[r],G(h,t.leaf?a(n):n),u+=q(h);return u},_adjustParentBBoxes:function(t,e,s){for(var i=s;i>=0;i--)G(e[i],t)},_condense:function(t){for(var e,s=t.length-1;s>=0;s--)0===t[s].children.length?s>0?(e=t[s-1].children).splice(e.indexOf(t[s]),1):this.clear():L(t[s],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class W extends m{constructor(t,e,s){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s,this._features=e}static fromFeatures(t,e,s){const i=o([],t,e,!1,!1,s);for(let e=0;e<i.length;e++)i[e].displayId=t[e].displayId;return W.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=h(t,e);return W.fromOptimizedFeatureSet(s)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:s}=t,i=W.fromOptimizedFeatures(e,s);i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform;for(const e of t.fields)"esriFieldTypeDate"===e.type&&i._dateFields.add(e.name);return i}static fromOptimizedFeatures(t,e,s){const i=m.createInstance(),r=new W(i,t,e);return r._transform=s,r}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new W(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return u(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return l(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return t?{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}:null}readGeometryArea(){return c(this._current.geometry,2)}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let s=0;for(const i of e){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}}(e),e}readHydratedGeometry(){const e=this._current.geometry;if(!e)return null;const s=e.clone();return t(this._transform)&&d(s,s,this.hasZ,this.hasM,this._transform),s}getXHydrate(){const t=this._current.geometry.coords[0],s=this.getQuantizationTransform();return e(s)?t:t*s.scale[0]+s.translate[0]}getYHydrate(){const t=this._current.geometry.coords[1],s=this.getQuantizationTransform();return e(s)?t:s.translate[1]-t*s.scale[1]}getX(){return this._current.geometry.coords[0]*this._sx+this._tx}getY(){return this._current.geometry.coords[1]*this._sy+this._ty}readGeometry(){if(!this._current.hasGeometry)return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!this._current.hasGeometry)return null;if(!this._current.centroid){const t=this._computeCentroid();if(!t)return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const i=this.readAttributes(),r=t.toLocaleLowerCase().trim();for(const t in i)if(t.toLocaleLowerCase().trim()===r){const s=this._current.attributes[t];return null!=s&&e&&this._dateFields.has(t)?new Date(s):s}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const tt=p.getLogger("esri.views.layers.2d.features.support.AttributeStore"),et=F(A,tt),st=t=>(2147483648&t)>>>31,it=t=>2147483647&t;function rt(t){return 1===st(t)}const nt={sharedArrayBuffer:s("esri-shared-array-buffer"),atomics:s("esri-atomics")};function at(t,e){return s=>e(t(s))}class ot{constructor(t,e,s,i){this.size=0,this.texelSize=4;const{pixelType:r,layout:n,textureOnly:a}=i;this.textureOnly=a||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(r,s,t,e))}get buffer(){return n(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=a(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=a(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=a(this.data);for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){a(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){a(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=it(t);return a(this.data)[s*this.texelSize+e]}setData(t,e,s){const i=it(t),r=1<<e;0!=(this.layout&r)?(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):tt.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){5121===this.pixelType&&this._shared&&nt.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){5121===this.pixelType&&this._shared&&nt.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=a(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,o=a(this.data);return{start:t,end:e,data:i&&o.slice(t*s,(e+1)*s)||null,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=B(t),a=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let t=0;t<a.length;t+=4)a[t+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class ht{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(M),this._targetType=0,this._abortController=x(),this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?5126:5121;et(`Creating AttributeStore ${nt.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}update(i,r){this.config=r;const n=r.schema.processors[0].storage,a=I(this._schema,n);if((i.targets.feature||i.targets.aggregate)&&(i.storage.data=!0),a&&(s("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",a),i.storage.data=!0,this._schema=n,this._attributeComputeMap.clear(),!e(n))){switch(n.target){case"feature":this._targetType=0;break;case"aggregate":this._targetType=1}if("subtype"===n.type)for(const e in n.mapping){const s=n.mapping[e];if(t(s))for(const t of s.mapping)this._bindAttribute(t)}else for(const t of n.mapping)this._bindAttribute(t)}}onTileData(t,s){if(e(s.addOrUpdate))return;const i=s.addOrUpdate.getCursor();for(;i.next();){const t=i.getDisplayId();this.setAttributeData(t,i)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=x()}async setHighlight(t,e){const s=this._getBlock(0),i=e.map((t=>it(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,i),s.unlock(),this._idsToHighlight.clear();for(const e of t)this._idsToHighlight.add(e);await this.sendUpdates()}async updateFilters(t,e){const{config:i,service:r,spatialReference:n}=e,{filters:a}=i,o=a.map(((t,e)=>this._updateFilter(t,e,r,n)));(await Promise.all(o)).some((t=>t))&&(t.storage.filters=!0,s("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=it(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?T:0}unsetAttributeData(t){const e=it(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=it(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==st(t))return;const i=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2;i.size&&i.forEach(((t,i)=>{const n=i*r%4,a=Math.floor(i*r/4),o=this._getBlock(a+v),h=t(e);if(this.config.supportsTextureFloat)o.setData(s,n,h);else if(h===w)o.setData(s,n,255),o.setData(s,n+1,255);else{const t=g(Math.round(h),-32767,32766)+32768,e=255&t,i=(65280&t)>>8;o.setData(s,n,e),o.setData(s,n+1,i)}}))}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=y(),this._nextUpdate.promise;const e={blocks:this._blocks.map((e=>t(e)?e.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}},s=this._client.update(e,this._signal).then(t).catch(t);return this._client.render(this._signal),s})).catch((t=>b(t)?(this._createResourcesPromise=null,this._createResources()):(tt.error(new _("mapview-attribute-store","Encountered an error during client update",t)),Promise.resolve()))),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&tt.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}if(t.valueRepresentation){e=at(e,(e=>Y(e,t.valueRepresentation)))}this._attributeComputeMap.set(t.binding,at(e,(t=>null===t||isNaN(t)||t===1/0?w:t)))}_createResources(){if(t(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(z),et("Initializing AttributeStore");const s={shared:nt.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:i(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},r=this._client.initialize(s,this._signal).catch((t=>{b(t)?this._createResourcesPromise=null:tt.error(new _("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=r,r.then((()=>e(this._createResourcesPromise)?this._createResources():void 0)),r}_getBlock(e){const s=this._blocks[e];if(t(s))return s;et(`Initializing AttributeBlock at index ${e}`);const i=nt.sharedArrayBuffer,r=this._client.type,n=new ot(i,r,this._size,this._blockDescriptors[e]);return this._blocks[e]=n,this._createResourcesPromise=null,n}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return et("Expanding block size to",t,this._blocks),r(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return tt.error(new _("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(s,i,r,n){const a=this._filters[i],o=t(a)&&a.hash;if(!a&&!s)return!1;if(o===JSON.stringify(s))return!1;if(e(s)){if(!a)return!1;const t=1<<i+1,e=this._getBlock(0);return this._filters[i]=null,e.setComponentAllTexels(0,t),this.sendUpdates(),!0}const h=await this._getFilter(i,r);return await h.update(s,n),!0}async _getFilter(e,s){const i=this._filters[e];if(t(i))return i;const{default:r}=await import("./FeatureFilter.js"),n=new r({geometryType:s.geometryType,hasM:!1,hasZ:!1,timeInfo:s.timeInfo,fieldsIndex:new S(s.fields)});return this._filters[e]=n,n}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let s=0;const i=(r=t.getDisplayId(),1===st(r)?254:255);var r;for(let r=0;r<this._filters.length;r++){const n=!!(i&1<<r),a=this._filters[r];s|=(!n||e(a)||a.check(t)?1:0)<<r}let n=0;if(this._idsToHighlight.size){const e=t.getObjectId();n=this.getHighlightFlag(e)}return s<<1|n}}class ut{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return function(t,e){return((e?2147483648:0)|t)>>>0}(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function lt(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class ct{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new ut,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(f.create(this._allocatedSize,2147483647)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);lt(this._numerics[t],e,0)}_ensureInstanceId(t){lt(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);lt(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),((t,e)=>((e?2147483648:0)|t)>>>0)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(2147483647&t)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(2147483647&t,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(2147483647&t,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(2147483647&t,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(2147483647&t,0,s)}getComputedNumericAtIndex(t,e){const s=2147483647&t;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=2147483647&t;this._ensureNumeric(e,i),this._numerics[e][i]=s}getInstanceId(t){const e=2147483647&t;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=2147483647&t;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=2147483647&t;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=2147483647&t;this._ensureString(e,i),this._strings[e][i]=s}getXMin(t){return this._bounds[4*(2147483647&t)]}getYMin(t){return this._bounds[4*(2147483647&t)+1]}getXMax(t){return this._bounds[4*(2147483647&t)+2]}getYMax(t){return this._bounds[4*(2147483647&t)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let i=1/0,r=1/0,n=-1/0,a=-1/0;s.forEachVertex(((t,e)=>{i=Math.min(i,t),r=Math.min(r,e),n=Math.max(n,t),a=Math.max(a,e)}));const o=2147483647&t;return lt(this._bounds,4*o+4,0),this._bounds[4*o]=i,this._bounds[4*o+1]=r,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}class dt{constructor(t,e){this.key=new R(0,0,0,0),this.bounds=E(),this.objectIds=new Set,this.key.set(e);const s=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level,this.needsClear=!0}get id(){return this.key.id}get extent(){return D.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}get bbox(){const t=this.bounds;return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}clone(){return new dt(this.tileInfoView,this.key)}createChildTiles(){const t=this.key.getChildKeys(),e=k.acquire();for(let s=0;s<t.length;s++)e[s]=new dt(this.tileInfoView,t[s]);return e}getQuantizationParameters(){return j.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}const mt={added:[],removed:[]},ft=new Set,_t=new R(0,0,0,0);class pt extends C{constructor(t){super(),this._tiles=new Map,this._index=O(9,s("csp-restrictions")?t=>({minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=t}destroy(){this.clear()}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear()}has(t){return this._tiles.has(t)}get(t){return this._tiles.get(t)}boundsIntersections(t){return this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})}updateTiles(t){const e={added:[],removed:[]};for(const s of t.added)if(!this.has(s)){const t=new dt(this.tileScheme,s);this._tiles.set(s,t),this._index.insert(t),e.added.push(t)}for(const s of t.removed)if(this.has(s)){const t=this.get(s);this._tiles.delete(s),this._index.remove(t),e.removed.push(t)}this.tiles.length=0,this._tiles.forEach((t=>this.tiles.push(t))),(e.added.length||e.removed.length)&&this.emit("update",e)}setViewState(t){const e=this.tileScheme.getTileCoverage(t,0);if(!e)return;const{spans:s,lodInfo:i}=e,{level:r}=i;if(s.length>0)for(const{row:t,colFrom:e,colTo:n}of s)for(let s=e;s<=n;s++){const e=_t.set(r,t,i.normalizeCol(s),i.getWorldForColumn(s)).id;if(ft.add(e),!this.has(e)){const t=new dt(this.tileScheme,e);this._tiles.set(e,t),this._index.insert(t),this.tiles.push(t),mt.added.push(t)}}for(let t=this.tiles.length-1;t>=0;t--){const e=this.tiles[t];ft.has(e.id)||(this._tiles.delete(e.id),this.tiles.splice(t,1),this._index.remove(e),mt.removed.push(e))}(mt.added.length||mt.removed.length)&&this.emit("update",mt),U.pool.release(e),ft.clear(),mt.added.length=0,mt.removed.length=0}}export{ht as A,ct as C,W as F,pt as T,it as g,rt as i,O as r};