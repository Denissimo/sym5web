/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{e as t}from"../core/promiseUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import s from"./Widget.js";import"../chunks/widgetUtils.js";import{m as n}from"../chunks/messageBundle.js";import{t as a}from"../chunks/jsxFactory.js";import l from"./Swipe/SwipeViewModel.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/watchUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/compilerUtils.js";import"../layers/Layer.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/Identifiable.js";import"../chunks/Loadable.js";import"../chunks/ClipRect.js";const p="esri-swipe",c="esri-swipe--disabled",d="esri-swipe--vertical",m="esri-swipe--horizontal",h="esri-swipe__container",u="esri-swipe__divider",v="esri-swipe__handle",j="esri-swipe__handle--hidden",w="esri-icon-up-down-arrows",g="esri-swipe__handle-icon",y="esri-icon-drag-horizontal",f="esri-icon-drag-vertical",k="esri-widget",_="esri-disabled",b={handle:!0,divider:!0};let C=class extends s{constructor(e,t){super(e,t),this.direction=null,this.disabled=!1,this.dragLabel=void 0,this.iconClass=w,this.label=void 0,this.leadingLayers=null,this.messages=null,this.position=null,this.trailingLayers=null,this.view=null,this.viewModel=new l,this._pointerOffset=null,this._container=null,this._onContainerPointerDown=this._onContainerPointerDown.bind(this),this._onContainerPointerMove=this._onContainerPointerMove.bind(this),this._onContainerPointerUp=this._onContainerPointerUp.bind(this)}set visibleElements(e){this._set("visibleElements",{...b,...e})}get visibleElements(){return this._get("visibleElements")||b}render(){const{state:e,direction:t}=this.viewModel,i="disabled"===e||this.disabled,r={[_]:i,[c]:i,[d]:"vertical"===t,[m]:"horizontal"===t};return a("div",{class:this.classes(p,k,r)},"disabled"===e?null:this.renderContainer())}renderHandle(){const{direction:e}=this.viewModel,{visibleElements:t}=this,i={[y]:"vertical"===e,[f]:"horizontal"===e},r=this.classes(v,!t.handle&&j);return a("div",{key:"handle",role:"presentation",class:r},a("span",{"aria-hidden":"true",class:this.classes(g,i)}))}renderDivider(){const{visibleElements:e}=this;return e&&e.divider?a("div",{key:"divider",role:"presentation",class:u}):null}renderContent(){return[this.renderDivider(),this.renderHandle()]}renderContainer(){const{disabled:e,dragLabel:t,viewModel:i}=this,{max:r,min:o,direction:s,position:n}=i,l=`${n}%`,p={top:"vertical"===s?l:null,left:"vertical"===s?null:l},c=this.renderContent();return a("div",e?{key:"container",role:"presentation",styles:p,class:h}:{tabIndex:0,key:"container",bind:this,afterCreate:this._afterContainerCreate,onkeydown:this._onContainerKeyDown,"touch-action":"none",role:"slider",title:t,"aria-label":t,"aria-orientation":s,"aria-valuemax":`${r}`,"aria-valuemin":`${o}`,"aria-valuenow":`${n}`,"aria-valuetext":l,styles:p,class:h},c)}_afterContainerCreate(e){this._container=e,e.addEventListener("pointerdown",this._onContainerPointerDown)}_calculatePointerOffset(e){const{direction:t}=this,i=e.target,r=("vertical"===t?i.clientHeight:i.clientWidth)/2,o=i.getBoundingClientRect(),s=e.clientX-o.left,n=e.clientY-o.top;this._pointerOffset="vertical"===t?n-r:s-r}_onContainerPointerDown(e){e.preventDefault(),this._container&&document.activeElement!==this.container&&this._container.focus(),this._calculatePointerOffset(e),document.addEventListener("pointerup",this._onContainerPointerUp),document.addEventListener("pointermove",this._onContainerPointerMove)}_onContainerPointerUp(e){e.preventDefault(),document.removeEventListener("pointerup",this._onContainerPointerUp),document.removeEventListener("pointermove",this._onContainerPointerMove)}_onContainerPointerMove(e){e.preventDefault();const{_pointerOffset:t,container:i,direction:r}=this,{clientX:o,clientY:s}=e,{top:n,left:a,width:l,height:p}=i.getBoundingClientRect(),c=("vertical"===r?s-n-t:o-a-t)/("vertical"===r?p:l)*100;this.position=c}_getKeyPosition(e){const i=t(e),{position:r}=this,{max:o,min:s,step:n,stepMultiplier:a,direction:l}=this.viewModel,p=n*a;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].indexOf(i)>-1&&(e.preventDefault(),e.stopPropagation());if("vertical"===l?"ArrowDown"===i||"ArrowRight"===i:"ArrowUp"===i||"ArrowRight"===i){return r+(e.shiftKey?p:n)}if("vertical"===l?"ArrowUp"===i||"ArrowLeft"===i:"ArrowDown"===i||"ArrowLeft"===i){return r-(e.shiftKey?p:n)}if("Home"===i)return s;if("End"===i)return o;if("vertical"===l?"PageDown"===i:"PageUp"===i)return r+p;return("vertical"===l?"PageUp"===i:"PageDown"===i)?r-p:null}_onContainerKeyDown(e){const t=this._getKeyPosition(e);"number"==typeof t&&(this.position=t)}};e([i("viewModel.direction")],C.prototype,"direction",void 0),e([r()],C.prototype,"disabled",void 0),e([r({aliasOf:{source:"messages.dragLabel",overridable:!0}})],C.prototype,"dragLabel",void 0),e([r()],C.prototype,"iconClass",void 0),e([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],C.prototype,"label",void 0),e([i("viewModel.leadingLayers")],C.prototype,"leadingLayers",void 0),e([r(),n("esri/widgets/Swipe/t9n/Swipe")],C.prototype,"messages",void 0),e([i("viewModel.position")],C.prototype,"position",void 0),e([i("viewModel.trailingLayers")],C.prototype,"trailingLayers",void 0),e([i("viewModel.view")],C.prototype,"view",void 0),e([r({type:l})],C.prototype,"viewModel",void 0),e([r()],C.prototype,"visibleElements",null),C=e([o("esri.widgets.Swipe")],C);var P=C;export default P;
