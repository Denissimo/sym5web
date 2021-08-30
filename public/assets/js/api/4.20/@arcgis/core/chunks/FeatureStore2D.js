/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{C as e}from"./CircularArray.js";import{E as t}from"./Evented.js";import{b as r,h as s,i as a,u as i}from"../core/lang.js";import{r as n}from"./TileStore.js";import{C as d}from"./aaBoundingBox.js";import{d as o,h as u}from"./diffUtils.js";import{a as c}from"./arcadeOnDemand.js";import{L as h}from"./Logger.js";import{F as _}from"./FeatureSetReader.js";const l=import("./labelFormatUtils.js");class g{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const a=o(this._schema,t);if(this._schema=t,!t||r(a)||!u(a,"attributes"))return;s("esri-2d-update-debug")&&console.debug("Applying Update - Store:",a),this._bitsets.computed.clear(),e.targets[t.name]=!0;const i=t.attributes,n=[],d=[];for(const e in i){const t=i[e];switch(t.type){case"field":break;case"expression":n.push(this._createArcadeComputedField(t));break;case"label-expression":n.push(this._createLabelArcadeComputedField(t));break;case"statistic":d.push(t)}}this._computedFields=await Promise.all(n),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=d}setComputedAttributes(e,t,r,s){const a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(r)){a.set(r);for(const a of this._computedFields){const i=this._evaluateField(t,a,s);switch(a.resultType){case"numeric":e.setComputedNumericAtIndex(r,a.fieldIndex,i);break;case"string":e.setComputedStringAtIndex(r,a.fieldIndex,i)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await c(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,{createLabelFunction:s}=await l,a=await s(e.label,r,t);return{...e,builder:a}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:s}=t;return function(e,t,r){e.referencesGeometry();const s=t.readArcadeFeature();try{return e.evaluate({...r,$feature:s})}catch(e){return h.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}(s,e,{$view:{scale:r}})}}}}class I extends _{constructor(e,t){super(_.createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new I(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new I(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,s){const a=this.copy();return a._reader=this._reader.transform(e,t,r,s),a}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}function p(e,t){return e<<16|t}function m(e){return(4294901760&e)>>>16}function y(e){return 65535&e}const x={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class f extends g{constructor(r,s,a){super(r,s),this.featureAdapter=x,this.events=new t,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new e(50),this._index=n(9,(e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))),this._storage=s,this.mode=a}get storage(){return this._storage}get storeStatistics(){return{featureCount:0,vertexCount:0}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if(r(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const s=t.addOrUpdate.getCursor();for(;s.next();)this._insertFeature(s,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find((e=>e.tileId===t));if(a(r))return r.readers;const s=new Map,i=this._searchIndex(e.bounds),n=[];for(const e of i){const t=this._storage.getInstanceId(e),r=m(t),a=y(t);s.has(r)||s.set(r,[]);s.get(r).push(a)}return s.forEach(((e,t)=>{const r=this._featureSetsByInstance.get(t);n.push(I.from(r,e))})),this._indexSearchCache.enqueue({tileId:t,readers:n}),n}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var s;const e=p(t.instance,t.getIndex()),a=t.getObjectId(),i=null!=(s=this._objectIdToDisplayId.get(a))?s:this._storage.createDisplayId();t.setDisplayId(i),r.setInstanceId(i,e),this._objectIdToDisplayId.set(a,i)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),s=y(r),a=m(r),i=this._featureSetsByInstance.get(a);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),i.removeAtIndex(s),i.isEmpty&&this._featureSetsByInstance.delete(a),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),s=this._lookupFeature(r);e(s)}))}forEachUnsafe(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),s=m(r),a=y(r),i=this._getFeatureSet(s);i.setIndex(a),e(i)}))}forEachInBounds(e,t){const r=this._searchIndex(e);for(const e of r){const r=this.lookupFeatureByDisplayId(e,this._storage);t(i(r))}}forEachBounds(e,t,r){this._rebuildIndex();const s=[0,0,0,0];for(const a of e){if(!a.readGeometry())continue;const e=a.getDisplayId();s[0]=this._storage.getXMin(e),s[1]=this._storage.getYMin(e),s[2]=this._storage.getXMax(e),s[3]=this._storage.getYMax(e),t(d(r,s))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((s,a)=>{e.has(s)||(t.releaseDisplayId(s),r&&r.unsetAttributeData(s),this._objectIdToDisplayId.delete(a))})),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)}))}lookupObjectId(e,t){const s=this.lookupFeatureByDisplayId(e,t);return r(s)?null:s.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=m(t),s=y(t),a=this._getFeatureSet(r);return a?(a.setIndex(s),a):null}_insertFeature(e,t){const r=this._storage,s=e.getObjectId(),a=p(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let i=this._objectIdToDisplayId.get(s);i||(i=r.createDisplayId(),this._objectIdToDisplayId.set(s,i),this._spatialIndexInvalid=!0),e.setDisplayId(i),r.setInstanceId(i,a),this.setComputedAttributes(r,e,i,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}})):this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)})),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=m(e),r=y(e),s=this._getFeatureSet(t);if(!s)return null;const a=s.getCursor();return a.setIndex(r),a}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}export{I as F,g as S,f as a,x as f};
