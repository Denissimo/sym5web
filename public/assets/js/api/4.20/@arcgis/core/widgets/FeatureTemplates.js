/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{HandleOwnerMixin as t}from"../core/HandleOwner.js";import{init as s}from"../core/watchUtils.js";import{aliasOf as o}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import{cast as r}from"../core/accessorSupport/decorators/cast.js";import"../chunks/Logger.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import n from"./Widget.js";import m from"./FeatureTemplates/FeatureTemplatesViewModel.js";import{H as p}from"../chunks/Heading.js";import{t as a}from"../chunks/jsxFactory.js";import{c,f as u}from"../chunks/widgetUtils.js";import{m as d}from"../chunks/messageBundle.js";import{v as j}from"../chunks/vmEvent.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"./FeatureTemplates/TemplateItem.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/uid.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils2.js";import"../chunks/asyncUtils.js";import"../chunks/ItemCache.js";import"../chunks/MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils3.js";import"./FeatureTemplates/TemplateItemGroup.js";const h="esri-item-list",y="esri-item-list__list",b="esri-item-list__group",f="esri-item-list__scroller",I="esri-item-list__group-header",g="esri-item-list__list-item",v="esri-item-list__list-item--selected",k="esri-item-list__list-item-container",S="esri-item-list__list-item-label",M="esri-item-list__no-matches-message",_="esri-item-list__filter-container",L="esri-item-list__filter-placeholder",T="esri-item-list__filter-input",C="esri-item-list__filter-placeholder-text",x="esri-icon-search",w="esri-widget",U="esri-input";function F(e){const{id:t,identify:s,filterEnabled:o=!0,headingLevel:r=4,items:i,selectedItem:l,messages:n,filterText:m="",onFilterChange:u,renderIcon:d,onItemMouseLeave:j,onItemMouseEnter:g,onItemSelect:v}=e;return a("div",{class:c(h,w),key:t},o?function(e){const t=`${e.id}-placeholder`;return a("div",{class:_,key:"filter"},a("input",{"aria-labelledby":t,class:c(U,T),oninput:t=>{const s=t.currentTarget;e.onFilterChange&&e.onFilterChange(s.value)},value:e.filterText,type:"search"}),e.filterText?null:a("div",{class:L,id:t,key:"placeholder"},a("span",{class:x,"aria-hidden":"true"}),a("div",{class:C},e.messages.filterPlaceholder)))}({filterText:m,messages:n,onFilterChange:u,id:t}):null,function(e){const{headingLevel:t,identify:s,items:o,renderIcon:r,filterText:i,onItemMouseLeave:l,onItemMouseEnter:n,onItemSelect:m,selectedItem:u}=e;if(0===o.length)return a("div",{class:M,key:"no-matches"},e.messages.noMatches);if(d=o[0],d.items)return a("div",{class:f,key:"item-container"},o.map((e=>function(e){const{group:t,headingLevel:s,identify:o,onItemMouseLeave:r,onItemMouseEnter:i,onItemSelect:l,filterText:n,renderIcon:m,selectedItem:c}=e,u=`${o&&o(t)||t.id}-heading`;return a("section",{"aria-labelledby":u,class:b,key:t.label},a(p,{id:u,class:I,level:s},E({text:t.label,match:n})),a("ul",{class:y},t.items.map((e=>D({item:e,identify:o,grouped:!0,onItemMouseLeave:r,onItemMouseEnter:i,onItemSelect:l,renderIcon:m,filterText:n,selectedItem:c})))))}({filterText:i,group:e,headingLevel:t,identify:s,onItemMouseLeave:l,onItemMouseEnter:n,onItemSelect:m,renderIcon:r,selectedItem:u}))));var d;return a("ul",{class:c(y,f),key:"item-container"},o.map((e=>D({item:e,identify:s,grouped:!0,onItemMouseLeave:l,onItemMouseEnter:n,onItemSelect:m,renderIcon:r,filterText:i,selectedItem:u}))))}({identify:s,items:i,selectedItem:l,messages:n,filterText:m,headingLevel:r,renderIcon:d,onItemMouseLeave:j,onItemMouseEnter:g,onItemSelect:v}))}function D(e){const{identify:t,item:s,selectedItem:o,grouped:r,filterText:i,onItemSelect:l,onItemMouseEnter:n,onItemMouseLeave:m,renderIcon:p}=e,d=`${(null==t?void 0:t(s))||s.id}__${s.label}`,j=o?`${(null==t?void 0:t(o))||o.id}__${o.label}`:"";return a("li",{"aria-level":r?"2":"",class:c(g,d===j&&v),"data-item":s,key:d,onclick:e=>{const t=e.currentTarget["data-item"];l&&l(t)},onmouseenter:e=>{const t=e.currentTarget["data-item"];n&&n(t)},onkeydown:e=>{if(!u(e.key))return;const t=e.currentTarget["data-item"];l&&l(t)},onmouseleave:e=>{const t=e.currentTarget["data-item"];m&&m(t)},tabIndex:0},a("div",{class:k},p&&p({item:s}),E({text:s.label,match:i})))}function E(e){const{match:t,text:s}=e;let o=null;if(t){const e=s.toLowerCase(),r=t.toLowerCase(),i=e.indexOf(r);if(-1===i)o=s;else{const e=s.substring(0,i),r=s.substr(i,t.length),l=s.substring(i+t.length);o=a("span",null,e,a("strong",null,r),l)}}else o=s;return a("span",{class:S},o)}const O="esri-feature-templates",P="esri-feature-templates__loader",R="esri-feature-templates__list-item-icon",V="esri-widget";function $(e){const{label:t}=e;return function(e){return"items"in e}(e)?t:`${t}–${e.layer.id}`}const B={filter:!0};let A=class extends(t(n)){constructor(e,t){super(e,t),this._iconIntersectionObserver=new IntersectionObserver(((e,t)=>{e.forEach((async e=>{if(e.isIntersecting){const s=e.target;if(!s["data-has-icon"]){const e=s["data-item"];s["data-has-icon"]=!0,t.unobserve(s),await e.fetchThumbnail();s["data-item"]===e&&e.thumbnail?s.appendChild(e.thumbnail):(s["data-has-icon"]=!1,t.observe(s))}}}))})),this.filterFunction=null,this.filterText="",this.groupBy=null,this.headingLevel=4,this.label=void 0,this.layers=null,this.messages=null,this.selectedItem=null,this.viewModel=new m,this.visibleElements={...B},this.renderItemIcon=this.renderItemIcon.bind(this),this._afterItemCreateOrUpdate=this._afterItemCreateOrUpdate.bind(this),this._afterItemRemoved=this._afterItemRemoved.bind(this)}initialize(){const e=({label:e})=>!this.filterText||e.toLowerCase().indexOf(this.filterText.toLowerCase())>-1;this.own(s(this,"viewModel",((t,s)=>{t&&!t.filterFunction&&(this.filterFunction=e),s&&s!==t&&s.filterFunction===e&&(s.filterFunction=null)})))}destroy(){this._iconIntersectionObserver&&(this._iconIntersectionObserver.disconnect(),this._iconIntersectionObserver=null)}castVisibleElements(e){return{...B,...e}}select(e){return null}render(){const{filterText:e,headingLevel:t,messages:s,viewModel:{items:o,selectedItem:r,state:i}}=this,l=this.visibleElements.filter;return a("div",{class:this.classes(O,V),"aria-label":s.widgetLabel},"loading"===i?this.renderLoader():"ready"===i?a(F,{id:this.id,identify:$,filterText:e,items:o,headingLevel:t,messages:{filterPlaceholder:s.filterPlaceholder,noItems:s.noItems,noMatches:s.noMatches},filterEnabled:l,onItemSelect:e=>{this.viewModel.select(e)},onFilterChange:e=>{this.filterText=e,this.viewModel.refresh()},renderIcon:this.renderItemIcon,selectedItem:r}):null)}renderItemIcon({item:e}){return a("span",{key:"icon",class:R,afterCreate:this._afterItemCreateOrUpdate,afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":e,"data-has-icon":!1})}renderLoader(){return a("div",{class:P,key:"loader"})}_afterItemCreateOrUpdate(e){this._iconIntersectionObserver.observe(e)}_afterItemRemoved(e){this._iconIntersectionObserver.unobserve(e)}};e([o("viewModel.filterFunction")],A.prototype,"filterFunction",void 0),e([i()],A.prototype,"filterText",void 0),e([o("viewModel.groupBy")],A.prototype,"groupBy",void 0),e([i()],A.prototype,"headingLevel",void 0),e([i({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],A.prototype,"label",void 0),e([o("viewModel.layers")],A.prototype,"layers",void 0),e([i(),d("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],A.prototype,"messages",void 0),e([o("viewModel.selectedItem")],A.prototype,"selectedItem",void 0),e([i(),j("select")],A.prototype,"viewModel",void 0),e([i()],A.prototype,"visibleElements",void 0),e([r("visibleElements")],A.prototype,"castVisibleElements",null),e([o("viewModel.select")],A.prototype,"select",null),A=e([l("esri.widgets.FeatureTemplates")],A);var G=A;export default G;export{F as I};