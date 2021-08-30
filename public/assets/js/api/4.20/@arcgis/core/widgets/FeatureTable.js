/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{fetchMessageBundle as t,substitute as s}from"../intl.js";import o from"../core/Collection.js";import{HandleOwnerMixin as i}from"../core/HandleOwner.js";import{on as r,watch as l}from"../core/watchUtils.js";import{aliasOf as n}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import{cast as m}from"../core/accessorSupport/decorators/cast.js";import"../chunks/Logger.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import u from"./Widget.js";import c from"./FeatureTable/FeatureTableViewModel.js";import d from"./FeatureTable/Grid/support/ButtonMenu.js";import h from"./FeatureTable/Grid/support/ButtonMenuItem.js";import"../chunks/widgetUtils.js";import{m as j}from"../chunks/messageBundle.js";import{t as y}from"../chunks/jsxFactory.js";import{o as b}from"../chunks/locale.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/Error.js";import"../chunks/Message.js";import"../config.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/ArrayPool.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../core/Handles.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/uid.js";import"../chunks/layerViewUtils.js";import"./FeatureTable/FieldColumn.js";import"./FeatureForm/InputField.js";import"./support/DatePicker.js";import"../chunks/moment.js";import"./support/DatePickerViewModel.js";import"../chunks/MomentElementViewModel.js";import"../chunks/Popover.js";import"../chunks/accessibleHandler.js";import"./support/TimePicker.js";import"./support/TimePickerViewModel.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../rest/support/StatisticDefinition.js";import"./FeatureTable/Grid/support/ButtonMenuViewModel.js";const g={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0},selectionColumn:!0},v="esri-feature-table",k="esri-feature-table__header",M="esri-feature-table__title",f="esri-feature-table__content",w="esri-feature-table__loader",S="esri-feature-table__loader-container",C="esri-feature-table__menu",I="esri-icon-handle-horizontal",_="esri-icon-down",E="esri-icon-right",D="esri-icon-check-mark",F="esri-widget";let T=class extends(i(u)){constructor(e,t){super(e,t),this.attachmentsEnabled=null,this.columns=new o,this.editingEnabled=null,this.fieldConfigs=null,this.filterGeometry=null,this.grid=null,this.highlightOnRowSelectEnabled=!0,this.label=void 0,this.layer=null,this.messages=null,this.menu=null,this.menuConfig=null,this.pageSize=50,this.view=null,this.viewModel=new c,this.visibleElements={...g}}initialize(){var e,s,o;const i=async()=>this.messages=await t("esri/widgets/FeatureTable/t9n/FeatureTable");i(),this.handles.add([b(i),r(this,"grid.selectedItems","change",(e=>this._onSelectionChange(e))),l(this,["viewModel.store.querying","viewModel.store.syncing","grid.size"],(()=>this.scheduleRender())),r(this,"viewModel.columns","change",(()=>this._updateMenuItems())),l(this,"menuConfig",(()=>this._syncMenuConfig())),l(this,"messages",(()=>{var e;this.menu.label=null==(e=this.messages)?void 0:e.options,this._updateMenuItems()}))]),this._set("menu",new d({label:null==(e=this.messages)?void 0:e.options,iconClass:I,...this.menuConfig}));const{attachmentsEnabled:n,relatedRecordsEnabled:m}=this;null==(s=this.viewModel)||null==(o=s.store)||o.set({attachmentsEnabled:n,relatedRecordsEnabled:m})}destroy(){var e;this.clearSelection(),this.handles.removeAll(),null==(e=this.menu)||e.destroy()}castVisibleElements(e){var t;const s={...g,...e};return null==(t=this.grid)||t.set("visibleElements",{...this.grid.visibleElements,selectionColumn:s.selectionColumn}),s}clearHighlights(){}clearSelection(){}deselectRows(){}hideColumn(e){var t;null==(t=this.grid)||t.hideColumn(e),this._updateMenuItems()}refresh(){}showColumn(e){var t;null==(t=this.grid)||t.showColumn(e),this._updateMenuItems()}sortColumn(){}selectRows(){}scrollToIndex(){}render(){var e;return y("div",{bind:this,class:this.classes(v,F)},this.visibleElements.header?this._renderHeader():null,y("div",{class:f},"disabled"!==this.state&&(null==(e=this.grid)?void 0:e.render())))}_renderHeader(){return y("div",{key:"header",class:k},this._renderLoader(),this._renderTitle(),this.visibleElements.menu?this._renderMenu():null)}_renderTitle(){return y("div",{class:M,key:"title"},this._getTitle())}_getTitle(){const{grid:e,layer:{title:t},messages:o,viewModel:{size:i}}=this;return e?s(o.header,{title:t,count:i,selected:e.selectedItems.length||0}):""}_renderLoader(){const{state:e,store:t}=this.viewModel,s="loading"===e||t.syncing||t.querying;return y("div",{class:S},s?y("div",{class:w,key:"loader"}):null)}_renderMenu(){return y("div",{class:C},this.menu.render())}_onSelectionChange(e){const{added:t,removed:s}=e;this.emit("selection-change",{added:[...t],removed:[...s]})}_syncMenuConfig(){var e;null==(e=this.menu)||e.set({...this.menuConfig,items:this._getMenuItems()})}_updateMenuItems(){var e;null==(e=this.menu)||e.set("items",this._getMenuItems())}_getMenuItems(){var e;const t=null==(e=this.menuConfig)?void 0:e.items,s=this._getDefaultMenuItems(),o=[];return(null==s?void 0:s.length)&&o.push(...s),(null==t?void 0:t.length)&&o.push(...t),o}_getDefaultMenuItems(){var e;const{messages:t,viewModel:s,visibleElements:o}=this,{menuItems:i}=o,r=[];return(null==i?void 0:i.clearSelection)&&r.push(new h({selectionEnabled:!1,label:null==t?void 0:t.clearSelection,clickFunction:()=>this.clearSelection()})),(null==i?void 0:i.refreshData)&&r.push(new h({selectionEnabled:!1,label:null==t?void 0:t.refreshData,clickFunction:()=>this.refresh()})),(null==i?void 0:i.toggleColumns)&&r.push(new h({iconClass:E,label:null==t?void 0:t.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:null==s||null==(e=s.columns)?void 0:e.items.map((({header:e,hidden:t,path:s})=>new h({label:e||s,selected:!t,selectionEnabled:!0,iconClass:D,clickFunction:()=>this._toggleColumnFromMenuItem(s)})))})),r.length?r:null}_toggleMenuItemSelectedIcon({item:e}){null==e||e.set("iconClass",null!=e&&e.selected?_:E)}_toggleColumnFromMenuItem(e){const{grid:t,viewModel:s}=this,o=s.findColumn(e);null!=o&&o.hidden?t.showColumn(e):t.hideColumn(e)}};e([n("viewModel.attachmentsEnabled")],T.prototype,"attachmentsEnabled",void 0),e([n("viewModel.columns")],T.prototype,"columns",void 0),e([n("viewModel.editingEnabled")],T.prototype,"editingEnabled",void 0),e([n("viewModel.fieldConfigs")],T.prototype,"fieldConfigs",void 0),e([n("viewModel.filterGeometry")],T.prototype,"filterGeometry",void 0),e([n("viewModel.grid")],T.prototype,"grid",void 0),e([n("viewModel.highlightOnRowSelectEnabled")],T.prototype,"highlightOnRowSelectEnabled",void 0),e([p({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],T.prototype,"label",void 0),e([n("viewModel.layer")],T.prototype,"layer",void 0),e([p(),j("esri/widgets/FeatureTable/t9n/FeatureTable")],T.prototype,"messages",void 0),e([p({readOnly:!0})],T.prototype,"menu",void 0),e([p()],T.prototype,"menuConfig",void 0),e([n("viewModel.pageSize")],T.prototype,"pageSize",void 0),e([n("viewModel.relatedRecordsEnabled")],T.prototype,"relatedRecordsEnabled",void 0),e([n("viewModel.state")],T.prototype,"state",void 0),e([n("viewModel.view")],T.prototype,"view",void 0),e([p()],T.prototype,"viewModel",void 0),e([p()],T.prototype,"visibleElements",void 0),e([m("visibleElements")],T.prototype,"castVisibleElements",null),e([n("viewModel.clearHighlights")],T.prototype,"clearHighlights",null),e([n("viewModel.clearSelection")],T.prototype,"clearSelection",null),e([n("viewModel.deselectRows")],T.prototype,"deselectRows",null),e([n("viewModel.refresh")],T.prototype,"refresh",null),e([n("viewModel.sortColumn")],T.prototype,"sortColumn",null),e([n("viewModel.selectRows")],T.prototype,"selectRows",null),e([n("viewModel.scrollToIndex")],T.prototype,"scrollToIndex",null),T=e([a("esri.widgets.FeatureTable")],T);var U=T;export default U;
