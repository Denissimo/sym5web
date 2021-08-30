// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/HandleOwner ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../LayerList/ListItem".split(" "),function(m,h,g,x,y,k,l,C,D,E,F,z,u){const n=g.ofType(u);g=function(v){function p(a){a=v.call(this,a)||this;a.baseItems=new n;a.baseListItemCreatedFunction=
null;a.referenceListItemCreatedFunction=null;a.referenceItems=new n;a.view=null;a._compileBaseList=a._compileBaseList.bind(m._assertThisInitialized(a));a._compileReferenceList=a._compileReferenceList.bind(m._assertThisInitialized(a));return a}m._inheritsLoose(p,v);var e=p.prototype;e.initialize=function(){this.handles.add(k.init(this,["view.map.basemap","view","view.ready","view.basemapView"],()=>this._watchBasemapLayers()),"view")};e.destroy=function(){this.view=null;this.baseItems.removeAll();this.referenceItems.removeAll()};
e.triggerAction=function(a,b){a&&!a.disabled&&this.emit("trigger-action",{action:a,item:b})};e.transferListItem=function({listItem:a,from:b,to:c,newIndex:d}){const {referenceItems:f,baseItems:q}=this,{layer:w}=a,r=this.get("view.map.basemap.baseLayers"),t=this.get("view.map.basemap.referenceLayers");if(r&&t&&b!==c){var A="reference"===c?f:q,B="reference"===b?t:r;c="reference"===c?t:r;("reference"===b?f:q).remove(a);B.remove(w);A.add(a,d);c.add(w,d)}};e._createItemChangeHandles=function({items:a,key:b,
callback:c}){const {handles:d}=this;d.remove(b);c();a&&d.add(a.on("change",()=>c()),b)};e._watchItemProperties=function({item:a,type:b}){this.handles.add([a.children.on("change",()=>{this._modifyListItemChildren({type:b,childItems:a.children})})],`children-change-${a.uid}`)};e._modifyListItemChildren=function({childItems:a,type:b}){a.forEach(c=>this._modifyListItem({type:b,item:c}))};e._modifyListItem=function({item:a,type:b}){const c={item:a};"base"===b&&"function"===typeof this.baseListItemCreatedFunction&&
this.baseListItemCreatedFunction.call(null,c);"reference"===b&&"function"===typeof this.referenceListItemCreatedFunction&&this.referenceListItemCreatedFunction.call(null,c);this._modifyListItemChildren({type:b,childItems:a.children})};e._createListItem=function({layer:a,type:b}){const {view:c}=this;a=new u({layer:a,view:c});this._watchItemProperties({type:b,item:a});return a};e._watchLayersListMode=function({layers:a,key:b,callback:c}){const {handles:d}=this;d.remove(b);a&&a.forEach(f=>{d.add(k.watch(f,
"listMode",()=>c()),b)})};e._compileListItems=function({layers:a,items:b,key:c,type:d,callback:f}){this._watchLayersListMode({layers:a,key:c,callback:f});this._createNewItems({type:d,items:b,layers:a});this._modifyOrRemoveItems({type:d,items:b,layers:a});this._sortItems(b,a)};e._compileReferenceList=function(){const {referenceItems:a}=this,b=this.get("view.map.basemap.referenceLayers");this._compileListItems({type:"reference",layers:b,items:a,key:"base-layers-list-mode",callback:this._compileReferenceList})};
e._compileBaseList=function(){const {baseItems:a}=this,b=this.get("view.map.basemap.baseLayers");this._compileListItems({type:"base",layers:b,items:a,key:"reference-layers-list-mode",callback:this._compileBaseList})};e._compileLists=function(){this._compileReferenceList();this._compileBaseList()};e._createNewItems=function({items:a,layers:b,type:c}){b&&b.forEach(d=>{a.find(f=>f.layer===d)||a.add(this._createListItem({type:c,layer:d}))})};e._modifyOrRemoveItems=function({items:a,layers:b,type:c}){const {handles:d}=
this;a&&a.forEach(f=>{f&&(b&&b.find(q=>f.layer===q)?this._modifyListItem({type:c,item:f}):(d.remove(`children-change-${f.uid}`),a.remove(f)))})};e._sortItems=function(a,b){a&&a.sort((c,d)=>{c=b.indexOf(c.layer);d=b.indexOf(d.layer);return c>d?-1:c<d?1:0})};e._watchBasemapLayers=function(){const {handles:a,view:b}=this;a.remove(["base-layers","reference-layers","basemap","base-layer-views","reference-layer-views"]);this._compileLists();b&&b.ready&&a.add([k.init(this,"view.map.basemap.baseLayers",c=>
this._createItemChangeHandles({items:c,key:"base-layers",callback:this._compileBaseList})),k.init(this,"view.map.basemap.referenceLayers",c=>this._createItemChangeHandles({items:c,key:"reference-layers",callback:this._compileReferenceList})),k.init(this,"view.basemapView.baseLayerViews",c=>this._createItemChangeHandles({items:c,key:"base-layer-views",callback:this._compileBaseList})),k.init(this,"view.basemapView.referenceLayerViews",c=>this._createItemChangeHandles({items:c,key:"reference-layer-views",
callback:this._compileReferenceList})),k.init(this,"baseListItemCreatedFunction",()=>this._compileBaseList()),k.init(this,"referenceListItemCreatedFunction",()=>this._compileReferenceList())],"basemap")};m._createClass(p,[{key:"basemapTitle",get:function(){return this.get("view.map.basemap.title")||null},set:function(a){void 0===a?this._clearOverride("basemapTitle"):this._override("basemapTitle",a)}},{key:"state",get:function(){return this.get("view.ready")?"ready":this.get("view")?"loading":"disabled"}}]);
return p}(y.HandleOwnerMixin(x.EventedAccessor));h.__decorate([l.property({type:n})],g.prototype,"baseItems",void 0);h.__decorate([l.property()],g.prototype,"basemapTitle",null);h.__decorate([l.property()],g.prototype,"baseListItemCreatedFunction",void 0);h.__decorate([l.property()],g.prototype,"referenceListItemCreatedFunction",void 0);h.__decorate([l.property({type:n})],g.prototype,"referenceItems",void 0);h.__decorate([l.property({readOnly:!0})],g.prototype,"state",null);h.__decorate([l.property()],
g.prototype,"view",void 0);h.__decorate([l.property()],g.prototype,"transferListItem",null);return g=h.__decorate([z.subclass("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],g)});