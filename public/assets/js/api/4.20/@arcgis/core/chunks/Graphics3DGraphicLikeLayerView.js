/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Graphic.js";import i from"../core/Accessor.js";import s from"../core/Collection.js";import r from"../core/Handles.js";import{i as a,j as n,b as o}from"../core/lang.js";import{isAbortError as h}from"../core/promiseUtils.js";import{init as l}from"../core/watchUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./Logger.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{d}from"./diffUtils.js";import u from"../layers/Layer.js";import{h as g,l as m}from"./ColorMaterial.js";import y from"../rest/support/Query.js";import{t as b}from"./lineUtils.js";import{G as f,a as w}from"./Graphics3DScaleVisibility.js";import{G as j,a as C}from"./Graphics3DObjectStates.js";import{W as S}from"../core/HandleOwner.js";let v=class extends i{constructor(t){super(t),this.graphicsCore=null,this.elevationAlignment=new j,this.watchUpdatingTracking=new S,this.handles=new r,this.suspendResumeExtent=null}normalizeCtorArgs(t){let e=null;t.scaleVisibilityEnabled&&(delete(t={...t}).scaleVisibilityEnabled,e=new f);const i=new w({owner:t.owner,layer:t.layer,preferredUpdatePolicy:1,graphicSymbolSupported:!0});return{...t,graphicsCore:i,scaleVisibility:e}}initialize(){const t=this.scaleVisibility;a(t)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(()=>t.layerMinMaxScaleChangeHandler())),"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",((t,e)=>{d(t,e)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())}))}async setup(){const t=(t,e,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i);if(this.elevationAlignment.setup(this.owner,t,this.graphicsCore,this.view.elevationProvider),a(this.scaleVisibility)&&"minScale"in this.layer){const e=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this.owner,this.layer,t,this.graphicsCore,e)}this._set("objectStates",new C(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(h(t))return;throw t}this.destroyed||(this.handles.add(this.view.watch("clippingArea",(()=>this.updateClippingExtent()),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles=n(this.handles),this.watchUpdatingTracking.destroy(),this._set("elevationAlignment",n(this.elevationAlignment)),this._set("scaleVisibility",n(this.scaleVisibility)),this._set("objectStates",n(this.objectStates)),this._set("graphicsCore",n(this.graphicsCore))}get suspended(){return!(!a(this.scaleVisibility)||!this.scaleVisibility.suspended)}get updating(){var t,e;return!!(null!=(t=this.graphicsCore)&&t.updating||a(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(e=this.watchUpdatingTracking)&&e.updating)}getGraphicFromGraphicUid(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof u?this.layer:null;return g(e,t)}}}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof y)return x;if("number"==typeof t)return this.highlight([t]);if(t instanceof e)return this.highlight([t]);if(t instanceof s&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof e){const e=t.map((t=>t.uid)),{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(i,e),s}if("number"==typeof t[0]){const e=t,{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setObjectIds(i,e),s}}return x}updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}updateSuspendResumeExtent(){o(this.scaleVisibility)||(this.suspendResumeExtent=m(this.graphicsCore.computedExtent,this.suspendResumeExtent,b,this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))}setupSuspendResumeExtent(){o(this.scaleVisibility)||(l(this.graphicsCore,"computedExtent",(t=>this.updateSuspendResumeExtent()),!0),this.graphicsCore.watch("extentPadding",(t=>this.updateSuspendResumeExtent())))}};t([c({constructOnly:!0})],v.prototype,"owner",void 0),t([c({constructOnly:!0})],v.prototype,"layer",void 0),t([c({readOnly:!0,aliasOf:"owner.view"})],v.prototype,"view",void 0),t([c({constructOnly:!0})],v.prototype,"graphicsCore",void 0),t([c({constructOnly:!0})],v.prototype,"scaleVisibility",void 0),t([c({readOnly:!0})],v.prototype,"elevationAlignment",void 0),t([c({readOnly:!0})],v.prototype,"objectStates",void 0),t([c({readOnly:!0})],v.prototype,"watchUpdatingTracking",void 0),t([c({readOnly:!0})],v.prototype,"suspended",null),t([c({readOnly:!0})],v.prototype,"updating",null),v=t([p("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],v);const x={remove(){},pause(){},resume(){}};var V=v;export{V as G};
