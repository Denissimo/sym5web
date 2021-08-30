// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/Collection ../core/HandleOwner ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/decorators/cast ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./FeatureTable/FeatureTableViewModel ./FeatureTable/Grid/support/ButtonMenu ./FeatureTable/Grid/support/ButtonMenuItem ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/locale ../intl/substitute ../intl/messages".split(" "),
function(v,d,c,z,A,q,f,K,B,L,M,p,C,D,E,F,r,N,G,m,H,I,J){const w={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0},selectionColumn:!0};c=function(x){function t(a,b){a=x.call(this,a,b)||this;a.attachmentsEnabled=null;a.columns=new z;a.editingEnabled=null;a.fieldConfigs=null;a.filterGeometry=null;a.grid=null;a.highlightOnRowSelectEnabled=!0;a.label=void 0;a.layer=null;a.messages=null;a.menu=null;a.menuConfig=null;a.pageSize=50;a.view=null;a.viewModel=new E;a.visibleElements=
{...w};return a}v._inheritsLoose(t,x);var e=t.prototype;e.initialize=function(){var a=this,b,g,h;const k=function(){var l=v._asyncToGenerator(function*(){return a.messages=yield J.fetchMessageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")});return function(){return l.apply(this,arguments)}}();k();this.handles.add([H.onLocaleChange(k),q.on(this,"grid.selectedItems","change",l=>this._onSelectionChange(l)),q.watch(this,["viewModel.store.querying","viewModel.store.syncing","grid.size"],()=>this.scheduleRender()),
q.on(this,"viewModel.columns","change",()=>this._updateMenuItems()),q.watch(this,"menuConfig",()=>this._syncMenuConfig()),q.watch(this,"messages",()=>{var l;this.menu.label=null==(l=this.messages)?void 0:l.options;this._updateMenuItems()})]);this._set("menu",new F({label:null==(b=this.messages)?void 0:b.options,iconClass:"esri-icon-handle-horizontal",...this.menuConfig}));const {attachmentsEnabled:n,relatedRecordsEnabled:u}=this;null==(g=this.viewModel)?void 0:null==(h=g.store)?void 0:h.set({attachmentsEnabled:n,
relatedRecordsEnabled:u})};e.destroy=function(){var a;this.clearSelection();this.handles.removeAll();null==(a=this.menu)?void 0:a.destroy()};e.castVisibleElements=function(a){var b;a={...w,...a};null==(b=this.grid)?void 0:b.set("visibleElements",{...this.grid.visibleElements,selectionColumn:a.selectionColumn});return a};e.clearHighlights=function(){};e.clearSelection=function(){};e.deselectRows=function(){};e.hideColumn=function(a){var b;null==(b=this.grid)?void 0:b.hideColumn(a);this._updateMenuItems()};
e.refresh=function(){};e.showColumn=function(a){var b;null==(b=this.grid)?void 0:b.showColumn(a);this._updateMenuItems()};e.sortColumn=function(){};e.selectRows=function(){};e.scrollToIndex=function(){};e.render=function(){var a;return m.tsx("div",{bind:this,class:this.classes("esri-feature-table","esri-widget")},this.visibleElements.header?this._renderHeader():null,m.tsx("div",{class:"esri-feature-table__content"},"disabled"!==this.state&&(null==(a=this.grid)?void 0:a.render())))};e._renderHeader=
function(){return m.tsx("div",{key:"header",class:"esri-feature-table__header"},this._renderLoader(),this._renderTitle(),this.visibleElements.menu?this._renderMenu():null)};e._renderTitle=function(){return m.tsx("div",{class:"esri-feature-table__title",key:"title"},this._getTitle())};e._getTitle=function(){const {grid:a,layer:{title:b},messages:g,viewModel:{size:h}}=this;return a?I.substitute(g.header,{title:b,count:h,selected:a.selectedItems.length||0}):""};e._renderLoader=function(){const {state:a,
store:b}=this.viewModel;return m.tsx("div",{class:"esri-feature-table__loader-container"},"loading"===a||b.syncing||b.querying?m.tsx("div",{class:"esri-feature-table__loader",key:"loader"}):null)};e._renderMenu=function(){return m.tsx("div",{class:"esri-feature-table__menu"},this.menu.render())};e._onSelectionChange=function(a){const {added:b,removed:g}=a;this.emit("selection-change",{added:[...b],removed:[...g]})};e._syncMenuConfig=function(){var a;null==(a=this.menu)?void 0:a.set({...this.menuConfig,
items:this._getMenuItems()})};e._updateMenuItems=function(){var a;null==(a=this.menu)?void 0:a.set("items",this._getMenuItems())};e._getMenuItems=function(){var a;const b=null==(a=this.menuConfig)?void 0:a.items;a=this._getDefaultMenuItems();const g=[];(null==a?0:a.length)&&g.push(...a);(null==b?0:b.length)&&g.push(...b);return g};e._getDefaultMenuItems=function(){var a;const {messages:b,viewModel:g,visibleElements:h}=this,{menuItems:k}=h,n=[];(null==k?0:k.clearSelection)&&n.push(new r({selectionEnabled:!1,
label:null==b?void 0:b.clearSelection,clickFunction:()=>this.clearSelection()}));(null==k?0:k.refreshData)&&n.push(new r({selectionEnabled:!1,label:null==b?void 0:b.refreshData,clickFunction:()=>this.refresh()}));(null==k?0:k.toggleColumns)&&n.push(new r({iconClass:"esri-icon-right",label:null==b?void 0:b.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:null==g?void 0:null==(a=g.columns)?void 0:a.items.map(({header:u,hidden:l,path:y})=>new r({label:u||y,selected:!l,selectionEnabled:!0,
iconClass:"esri-icon-check-mark",clickFunction:()=>this._toggleColumnFromMenuItem(y)}))}));return n.length?n:null};e._toggleMenuItemSelectedIcon=function({item:a}){null==a?void 0:a.set("iconClass",null!=a&&a.selected?"esri-icon-down":"esri-icon-right")};e._toggleColumnFromMenuItem=function(a){const {grid:b,viewModel:g}=this,h=g.findColumn(a);null!=h&&h.hidden?b.showColumn(a):b.hideColumn(a)};return t}(A.HandleOwnerMixin(D));d.__decorate([f.aliasOf("viewModel.attachmentsEnabled")],c.prototype,"attachmentsEnabled",
void 0);d.__decorate([f.aliasOf("viewModel.columns")],c.prototype,"columns",void 0);d.__decorate([f.aliasOf("viewModel.editingEnabled")],c.prototype,"editingEnabled",void 0);d.__decorate([f.aliasOf("viewModel.fieldConfigs")],c.prototype,"fieldConfigs",void 0);d.__decorate([f.aliasOf("viewModel.filterGeometry")],c.prototype,"filterGeometry",void 0);d.__decorate([f.aliasOf("viewModel.grid")],c.prototype,"grid",void 0);d.__decorate([f.aliasOf("viewModel.highlightOnRowSelectEnabled")],c.prototype,"highlightOnRowSelectEnabled",
void 0);d.__decorate([p.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([f.aliasOf("viewModel.layer")],c.prototype,"layer",void 0);d.__decorate([p.property(),G.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],c.prototype,"messages",void 0);d.__decorate([p.property({readOnly:!0})],c.prototype,"menu",void 0);d.__decorate([p.property()],c.prototype,"menuConfig",void 0);d.__decorate([f.aliasOf("viewModel.pageSize")],c.prototype,
"pageSize",void 0);d.__decorate([f.aliasOf("viewModel.relatedRecordsEnabled")],c.prototype,"relatedRecordsEnabled",void 0);d.__decorate([f.aliasOf("viewModel.state")],c.prototype,"state",void 0);d.__decorate([f.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([p.property()],c.prototype,"viewModel",void 0);d.__decorate([p.property()],c.prototype,"visibleElements",void 0);d.__decorate([B.cast("visibleElements")],c.prototype,"castVisibleElements",null);d.__decorate([f.aliasOf("viewModel.clearHighlights")],
c.prototype,"clearHighlights",null);d.__decorate([f.aliasOf("viewModel.clearSelection")],c.prototype,"clearSelection",null);d.__decorate([f.aliasOf("viewModel.deselectRows")],c.prototype,"deselectRows",null);d.__decorate([f.aliasOf("viewModel.refresh")],c.prototype,"refresh",null);d.__decorate([f.aliasOf("viewModel.sortColumn")],c.prototype,"sortColumn",null);d.__decorate([f.aliasOf("viewModel.selectRows")],c.prototype,"selectRows",null);d.__decorate([f.aliasOf("viewModel.scrollToIndex")],c.prototype,
"scrollToIndex",null);return c=d.__decorate([C.subclass("esri.widgets.FeatureTable")],c)});