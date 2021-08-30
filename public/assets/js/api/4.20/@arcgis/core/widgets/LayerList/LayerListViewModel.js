/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Collection.js";import{E as s}from"../../chunks/Evented.js";import i from"../../core/Handles.js";import{init as r,watch as o}from"../../core/watchUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import c from"./ListItem.js";import{h as l,b as m}from"../../chunks/layerListUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/arrayUtils.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/HandleOwner.js";import"../../chunks/Identifiable.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"./ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../chunks/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";const h="view",d="view-layers",p="map-layers",u="layer-views",j="layer-list-mode",y=t.ofType(c);let v=class extends s.EventedAccessor{constructor(e){super(e),this._handles=new i,this.listItemCreatedFunction=null,this.operationalItems=new y,this.view=null}initialize(){this._handles.add(r(this,["view","view.ready"],(()=>this._viewHandles())),h)}destroy(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,s,i){var r,o;const n=null==e?void 0:e.layer;if(!n)return;const a=null==(r=this.view)||null==(o=r.map)?void 0:o.layers,c=t?l(t):a,m=s?l(s):a;if(!c||!m)return;const{operationalItems:h}=this,d=(null==t?void 0:t.children)||h,p=(null==s?void 0:s.children)||h,u=m.length-i;e.parent=s||null,d.includes(e)&&d.remove(e),c.includes(n)&&c.remove(n),p.includes(e)||p.add(e,u),m.includes(n)||m.add(n,u)}_createLayerViewHandles(e){const{_handles:t}=this;t.remove(u),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),u)}_createMapLayerHandles(e){const{_handles:t}=this;t.remove(p),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),p)}_watchItemProperties(e){this._handles.add([e.children.on("change",(()=>{this._modifyListItemChildren(e.children)}))],`children-change-${e.uid}`)}_modifyListItemChildren(e){e.forEach((e=>this._modifyListItem(e)))}_modifyListItem(e){if("function"==typeof this.listItemCreatedFunction){const t={item:e};this.listItemCreatedFunction.call(null,t)}this._modifyListItemChildren(e.children)}_createListItem(e){const{view:t}=this,s=new c({layer:e,view:t});return this._watchItemProperties(s),s}_removeAllItems(){const{_handles:e,operationalItems:t}=this;t.forEach((t=>{e.remove(`children-change-${t.uid}`)})),t.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==m(e)))}_watchLayersListMode(e){const{_handles:t}=this;t.remove(j),e&&e.forEach((e=>{t.add(o(e,"listMode",(()=>this._compileList())),j)}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const t=this._getViewableLayers(e);t&&t.length?(this._createNewItems(t),this._modifyOrRemoveItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.find((t=>t.layer===e))||t.add(this._createListItem(e))}))}_modifyOrRemoveItems(e){const{_handles:t,operationalItems:s}=this,i=[];s.forEach((s=>{s&&e&&e.find((e=>s.layer===e))?this._modifyListItem(s):(t.remove(`children-change-${s.uid}`),i.push(s))})),s.removeMany(i)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,s)=>{const i=e.indexOf(t.layer),r=e.indexOf(s.layer);return i>r?-1:i<r?1:0}))}_viewHandles(){const{_handles:e,view:t}=this;e.remove([p,u,d]),this._compileList(),t&&t.ready&&e.add([r(this,"view.map.allLayers",(e=>this._createMapLayerHandles(e))),r(this,"view.allLayerViews",(e=>this._createLayerViewHandles(e))),r(this,"listItemCreatedFunction",(()=>this._compileList()))],d)}};e([n()],v.prototype,"listItemCreatedFunction",void 0),e([n({type:y})],v.prototype,"operationalItems",void 0),e([n({readOnly:!0})],v.prototype,"state",null),e([n()],v.prototype,"view",void 0),v=e([a("esri.widgets.LayerList.LayerListViewModel")],v);var _=v;export default _;