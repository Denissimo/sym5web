/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{a as i}from"../chunks/deprecate.js";import{e as s}from"../core/promiseUtils.js";import r from"../core/Handles.js";import{h as o}from"../core/lang.js";import{L as l}from"../chunks/Logger.js";import{on as n,init as a}from"../core/watchUtils.js";import{aliasOf as c}from"../core/accessorSupport/decorators/aliasOf.js";import{cast as d}from"../core/accessorSupport/decorators/cast.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import m from"./Widget.js";import p from"./LayerList/LayerListViewModel.js";import g from"./LayerList/ListItem.js";import{f as _,s as y,d as b,e as v}from"../chunks/layerListUtils.js";import{a as f}from"../chunks/accessibleHandler.js";import{m as I}from"../chunks/messageBundle.js";import{v as k}from"../chunks/vmEvent.js";import{t as A}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import{S as w}from"../chunks/sortable.esm.js";import"../chunks/ArrayPool.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";function j(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const S=t.ofType(g),C="esri-layer-list esri-widget esri-widget--panel",L="esri-layer-list--new-ui",E="esri-layer-list__no-items",x="esri-layer-list__list",M="esri-layer-list__list--root",U="esri-layer-list__list--exclusive",T="esri-layer-list__list--inherited",O="esri-layer-list__list--independent",P="esri-layer-list__item",N="esri-layer-list__item--error",$="esri-layer-list__item--invisible",V="esri-layer-list__item--invisible-at-scale",R="esri-layer-list__item--updating",B="esri-layer-list__item--has-children",F="esri-layer-list__item--selectable",D="esri-layer-list__item-container",H="esri-layer-list__item-actions-menu",z="esri-layer-list__item-actions-menu-item",K="esri-layer-list__item-actions-menu-item--active",W="esri-layer-list__item-actions",q="esri-layer-list__item-actions-list",G="esri-layer-list__item-action",J="esri-layer-list__item-action-icon",Q="esri-layer-list__item-action-image",X="esri-layer-list__item-action-title",Y="esri-layer-list__action-toggle",Z="esri-layer-list__action-toggle--on",ee="esri-layer-list__item-label",te="esri-layer-list__item-error-message",ie="esri-layer-list__item-title",se="esri-layer-list__item-toggle",re="esri-layer-list__item-toggle-icon",oe="esri-layer-list__item-toggle-icon",le="esri-layer-list__item-radio-icon",ne="esri-layer-list__child-toggle",ae="esri-layer-list__child-toggle--open",ce="esri-layer-list__child-toggle-icon--opened",de="esri-layer-list__child-toggle-icon--closed",he="esri-layer-list__child-toggle-icon--closed-rtl",ue="esri-layer-list--chosen",me="esri-disabled",pe="esri-disabled-element",ge="esri-hidden",_e="esri-rotating",ye="esri-icon-handle-horizontal",be="esri-icon-visible",ve="esri-icon-non-visible",fe="esri-icon-radio-checked",Ie="esri-icon-radio-unchecked",ke="esri-icon-notice-triangle",Ae="esri-icon-down-arrow",we="esri-icon-right-triangle-arrow",je="esri-icon-left-triangle-arrow",Se="esri-icon-loading-indicator",Ce="esri-icon-default-action",Le="esri-icon-layers",Ee="actions",xe="action-section",Me="items",Ue={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function Te(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>Te(e)))}const Oe=l.getLogger("esri.widgets.LayerList"),Pe={statusIndicators:!0};let Ne=class extends m{constructor(e,t){super(e,t),this._handles=new r,this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=o("esri-layerlist-new-ui"),this.visibleItems=null,this.iconClass=Le,this.label=void 0,this.listItemCreatedFunction=null,this.localeStrings=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.operationalItems=null,this.selectionEnabled=!1,this.selectedItems=new S,this.view=null,this.viewModel=new p,this.visibleElements={...Pe},this._onSortableSort=({to:e,from:t,item:i,newIndex:s})=>{t&&e&&(t===e?this._sortLayers(this._sortableMap.get(t.dataset.group)):this._moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}))},this._sortableCanPut=(e,t,i)=>{var s,r;const o=e.el.dataset.group,l=t.el.dataset.group,n=e.el["data-item"],a=i["data-item"],c=null==a||null==(s=a.layer)?void 0:s.type,d=null==n||null==(r=n.layer)?void 0:r.type;return o&&l&&c&&!("group"===d&&"group"===c)},this._sortableCanPull=(e,t,i)=>{var s;const r=e.el.dataset.group,o=t.el.dataset.group,l=i["data-item"],n=null==l||null==(s=l.layer)?void 0:s.type;return r&&o&&!!n},this._onSortableEnd=({oldIndex:e,from:t,to:i,item:s})=>{t!==i&&t.insertBefore(s,t.children[e])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.own(n(this,"operationalItems","change",(()=>this._itemsChanged(e))),a(this,"selectionEnabled",(()=>this._toggleAllSorting())))}destroy(){this._destroySortables(),this._handles.destroy(),this._handles=null}set statusIndicatorsVisible(e){i(Oe,"statusIndicatorsVisible",{replacement:"visibleElements.statusIndicators",version:"4.15"}),this.visibleElements={...this.visibleElements,statusIndicators:e}}castVisibleElements(e){return{...Pe,...e}}triggerAction(e,t){this.viewModel.triggerAction(e,t)}render(){var e;const{visibleItems:t,_newUI:i}=this,s=null==(e=this.viewModel)?void 0:e.state,r={[L]:i,[ge]:"loading"===s,[me]:"disabled"===s};return A("div",{class:this.classes(C,r)},null!=t&&t.length?this.renderItems():this.renderNoItems())}renderNoItems(){return A("div",{class:E},this.messages.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return A("ul",{"aria-label":i.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":"root",bind:this,class:this.classes(x,M,O)},null==e?void 0:e.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messages:i}=this,s={[K]:e.actionsOpen},r=e.actionsOpen?i.closeActions:i.openActions;return A("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(z,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":r,title:r},A("span",{"aria-hidden":"true",class:ye}))}renderActionsMenu(e,t,i,s){const{panel:r}=e,o=r&&r.visible?this.renderPanelButton(r):null,l=1===i&&this._getSingleActionButton(t),n=l?this.renderAction({item:e,action:l,singleAction:!0}):null,a=!l&&i?this.renderActionsMenuIcon(e,s):null;return a||o||l?A("div",{key:"actions-menu",class:H},o,n,a):null}renderChildList(e,t){var i;const{selectionEnabled:s}=this,{visibilityMode:r,children:o}=e,l=!!e.error,n=!!o.length&&!l,a=!n&&s&&"group"===(null==(i=e.layer)?void 0:i.type),{exclusive:c,inherited:d}=Ue,h={[U]:r===c,[T]:r===d,[O]:r!==d&&r!==c};return n||a?A("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes(x,h),"aria-expanded":e.open?"true":"false",role:s?"listbox":r===c?"radiogroup":"group",hidden:!e.open&&!a||null},null==o?void 0:o.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,{children:s}=e,r=!!e.error,o=!!s.length&&!r,l={[ae]:e.open},n=e.open?i.collapse:i.expand;return o?A("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(ne,l),tabindex:"0",role:"button","aria-controls":t,"aria-label":n,title:n},A("span",{"aria-hidden":"true",class:this.classes(de,we)}),A("span",{"aria-hidden":"true",class:this.classes(ce,Ae)}),A("span",{"aria-hidden":"true",class:this.classes(he,je)})):null}renderError(e){return e.error?A("div",{key:"esri-layer-list__error",class:te,role:"alert"},A("span",null,this.messages.layerError)):null}renderItemContent(e,t,i){const{id:s}=this,r=`${s}_${e.uid}`,o=`${r}_actions`,l=`${r}__list`,{panel:n}=e,a=this._filterActions(e.actionsSections),c=this._countActions(a);return[A("div",{key:"list-item-container",class:D},this.renderChildrenToggle(e,l),this.renderLabel(e,t,i),this.renderActionsMenu(e,a,c,o)),this.renderError(e),c?this.renderActionsSections(e,a,o):null,n&&n.open?n.render():null,this.renderChildList(e,l)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:r,selectedItems:o,visibleElements:l}=this,{children:n}=e,a=`${`${s}_${e.uid}`}__title`,c=!!e.error,d=!!n.length&&!c,h={[B]:d,[N]:!!c,[R]:e.updating&&!t&&l.statusIndicators,[$]:i&&!e.visible,[V]:!e.visibleAtCurrentScale,[F]:r};if(r){var u;const i={"data-layer-uid":null==(u=e.layer)?void 0:u.uid,"data-sort-filter":(!e.sortable).toString()};return A("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(P,h),"aria-labelledby":a,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:"root",tabIndex:0,"aria-selected":_(e,o)?"true":"false",role:"option",...i},this.renderItemContent(e,t,a))}return A("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(P,h),"aria-labelledby":a},this.renderItemContent(e,t,a))}renderItemTitle(e,t){const{messages:i}=this,s=e.title||i.untitledLayer,r=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return A("span",{key:"layer-title-container",id:t,title:r,"aria-label":r,class:ie},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=Ue,r=t&&t.visibilityMode,o={[re]:i,[oe]:i&&r!==s,[le]:i&&r===s,[fe]:r===s&&e.visible,[Ie]:r===s&&!e.visible,[be]:r!==s&&e.visible,[ve]:r!==s&&!e.visible};return A("span",{key:"item-toggle-icon",class:this.classes(o),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s}=this,{exclusive:r}=Ue,o=t&&t.visibilityMode,l=o===r?"radio":"switch";return A("span",s?{key:"item-toggle-selection-enabled",class:se,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":o,tabIndex:0,"aria-checked":e.visible?"true":"false",role:l,"aria-labelledby":i}:{key:"item-toggle",class:se},this.renderItemToggleIcon(e,t))}renderItemError(e){return e.error?A("span",{key:"notice-triangle","aria-hidden":"true",class:ke}):null}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:r}=this,{inherited:o,exclusive:l}=Ue,n=null==t?void 0:t.visibilityMode,a=n===l?"radio":"switch",c=[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i)];r&&c.reverse();const d=A("div",s?{key:`item-label-no-selection-${e.uid}`,class:ee}:{key:`item-label-with-selection-${e.uid}`,class:ee,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":n,tabIndex:0,"aria-checked":e.visible?"true":"false",role:a,"aria-labelledby":i},c);return n===o||e.error?A("div",{key:`item-label-container-${e.uid}`,class:ee},this.renderItemError(e),this.renderItemTitle(e,i)):d}renderPanelButton(e){const{className:t,open:i,title:s,image:r}=e,o=r||t?t:Ce,l=this._getIconImageStyles(e),n={[K]:i},a={[Q]:!!l["background-image"]};return o&&(a[o]=!!o),A("div",{key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(z,n),role:"button",tabindex:"0",title:s,"aria-label":s},A("span",{class:this.classes(a),styles:l}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>A("ul",{key:`${e}-action-section-${i}`,class:q},this.renderActionSection(e,t))));return A("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:W,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),r="button"!==e.type||e.image||i?i:Ce,o={[Q]:!t&&!!s["background-image"],[Se]:t,[_e]:t};return r&&!t&&(o[r]=!0),A("span",{key:"action-icon","aria-hidden":"true",class:this.classes(J,o),styles:s})}renderActionTitle(e,t){return t?null:A("span",{key:"action-title",class:X},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:r,disabled:o,title:l}=i,n={[z]:s&&"button"===i.type,[G]:r||!s&&"toggle"!==i.type,[Y]:!r&&"toggle"===i.type,[Z]:!r&&"toggle"===i.type&&i.value,[pe]:o},a=[this.renderActionIcon(i),this.renderActionTitle(l,s)];return s?A("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:n,tabindex:"0",title:l,"aria-label":l},a):A("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:n,tabindex:"0",role:"button",title:l,"aria-label":l},a)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList({to:e,from:t,item:i,newIndex:s}){const r=i["data-item"],o=e["data-item"],l=t["data-item"];this.viewModel.moveListItem(r,l,o,s)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();var s,r;t?b(t,i):y(null==(s=this.view)||null==(r=s.map)?void 0:r.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,r=i.get(t),o=e["data-item"],l=("root"===t||o.childrenSortable&&v(o))&&s;if(r)r.option("disabled",!l);else if(l){const s=w.create(e,{dataIdAttr:"data-layer-uid",group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:'[data-sort-filter="true"]',fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!l,chosenClass:ue});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=null==e?void 0:e.filter((e=>this.errorsVisible||!e.error))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){var t;const{_focusSortUid:i}=this;if(!e||!i)return;(null==(t=e["data-item"].layer)?void 0:t.uid)===i&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i=xe+t;this._handles.add(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i=Ee+t;"toggle"!==e.type?"slider"!==e.type?this._handles.add([a(e,["className","image","id","title","visible"],(()=>this.scheduleRender()))],i):this._handles.add([a(e,["className","id","title","visible","value","displayValueEnabled","max","min","step"],(()=>this.scheduleRender()))],i):this._handles.add([a(e,["className","image","id","title","visible","value"],(()=>this.scheduleRender()))],i)}_renderOnItemChanges(e){const t=e.uid,i=Me+t;this._handles.add([a(e,["actionsOpen","visible","open","updating","title","visibleAtCurrentScale","error","visibilityMode","panel","panel.title","panel.content","panel.className","sortable","childrenSortable"],(()=>this.scheduleRender())),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=s(e);if(-1===["ArrowDown","ArrowUp"].indexOf(t))return void this._toggleSelection(e);e.stopPropagation();const i=e.currentTarget,r=i["data-item"],{_sortableMap:o,selectedItems:l}=this,n=i.dataset.group,a=o.get(n);if(!a)return;const c=_(r,l),d=a.toArray(),h=e.target,u=d.indexOf(h.dataset.layerUid);if(-1!==u){if("ArrowDown"===t){const e=u+1;if(e>=d.length)return;var m,p;if(c)j(d,u,e),a.sort(d),this._sortLayers(a),this._focusSortUid=null==(m=r.layer)?void 0:m.uid;else this._focusSortUid=null==(p=r.layer)?void 0:p.uid,this.scheduleRender()}if("ArrowUp"===t){const e=u-1;if(e<=-1)return;var g,y;if(c)j(d,u,e),a.sort(d),this._sortLayers(a),this._focusSortUid=null==(g=r.layer)?void 0:g.uid;else this._focusSortUid=null==(y=r.layer)?void 0:y.uid,this.scheduleRender()}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>Te(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];t&&(t.open=!t.open),e.stopPropagation()}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===Ue.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],r=_(s,i),{length:o}=i;if(!t)return o&&!(r&&1===o)?(i.removeAll(),void i.add(s)):void(r?null==i.remove||i.remove(r):i.add(s));r?null==i.remove||i.remove(r):i.add(s)}};e([h()],Ne.prototype,"visibleItems",void 0),e([h()],Ne.prototype,"iconClass",void 0),e([h()],Ne.prototype,"errorsVisible",void 0),e([h({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Ne.prototype,"label",void 0),e([c("viewModel.listItemCreatedFunction")],Ne.prototype,"listItemCreatedFunction",void 0),e([h()],Ne.prototype,"localeStrings",void 0),e([h(),I("esri/widgets/LayerList/t9n/LayerList")],Ne.prototype,"messages",void 0),e([h(),I("esri/t9n/common")],Ne.prototype,"messagesCommon",void 0),e([h()],Ne.prototype,"multipleSelectionEnabled",void 0),e([c("viewModel.operationalItems")],Ne.prototype,"operationalItems",void 0),e([h()],Ne.prototype,"selectionEnabled",void 0),e([h()],Ne.prototype,"selectedItems",void 0),e([h()],Ne.prototype,"statusIndicatorsVisible",null),e([c("viewModel.view")],Ne.prototype,"view",void 0),e([k("trigger-action"),h({type:p})],Ne.prototype,"viewModel",void 0),e([h()],Ne.prototype,"visibleElements",void 0),e([d("visibleElements")],Ne.prototype,"castVisibleElements",null),e([c("viewModel.triggerAction")],Ne.prototype,"triggerAction",null),e([f()],Ne.prototype,"_toggleActionsOpen",null),e([f()],Ne.prototype,"_triggerPanel",null),e([f()],Ne.prototype,"_triggerAction",null),e([f()],Ne.prototype,"_toggleVisibility",null),e([f()],Ne.prototype,"_toggleChildrenClick",null),e([f()],Ne.prototype,"_toggleSelection",null),Ne=e([u("esri.widgets.LayerList")],Ne);var $e=Ne;export default $e;