// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../LayerList/support/layerListUtils ./ListItem".split(" "),function(m,g,e,r,t,h,k,w,x,y,z,u,v,n){const p=e.ofType(n);e=function(q){function l(a){a=q.call(this,a)||this;
a._handles=new t;a.listItemCreatedFunction=null;a.tableItems=new p;a.map=null;return a}m._inheritsLoose(l,q);var d=l.prototype;d.initialize=function(){this._handles.add([h.init(this,["map","map.loaded"],()=>this._mapHandles())],"map")};d.destroy=function(){this._handles.destroy();this.map=this._handles=null;this.tableItems.removeAll()};d.triggerAction=function(a,b){a&&!a.disabled&&this.emit("trigger-action",{action:a,item:b})};d._mapHandles=function(){const {_handles:a,map:b}=this;a.remove("tables");
this._compileList();b&&a.add([h.on(this,"map.allTables","change",()=>this._compileList()),h.init(this,"map.allTables",()=>this._compileList()),h.init(this,"listItemCreatedFunction",()=>this._compileList())],"tables")};d._modifyListItem=function(a){"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:a})};d._removeAllItems=function(){this.tableItems.removeAll()};d._getViewableTables=function(a){if(a)return a.filter(b=>"hide"!==v.findLayerListMode(b))};d._watchTablesListMode=
function(a){const {_handles:b}=this;b.remove("layer-list-mode");a&&a.forEach(c=>{b.add(h.watch(c,"listMode",()=>this._compileList()),"layer-list-mode")})};d._compileList=function(){var a;const b=null==(a=this.map)?void 0:a.tables;this._watchTablesListMode(b);(a=this._getViewableTables(b))&&a.length?(this._createNewItems(a),this._modifyOrRemoveItems(a),this._sortItems(a)):this._removeAllItems()};d._createNewItems=function(a){const {tableItems:b}=this;a.forEach(c=>{b.find(f=>f.layer===c)||b.add(new n({layer:c}))})};
d._modifyOrRemoveItems=function(a){const {tableItems:b}=this;b.forEach(c=>{c&&(a&&a.find(f=>c.layer===f)?this._modifyListItem(c):b.remove(c))})};d._sortItems=function(a){const {tableItems:b}=this;b.sort((c,f)=>{c=a.indexOf(c.layer);f=a.indexOf(f.layer);return c>f?-1:c<f?1:0})};m._createClass(l,[{key:"state",get:function(){var a;const b=null==(a=this.map)?void 0:a.loadStatus;return"string"===typeof b?"loaded"===b?"ready":"loading"===b?"loading":"disabled":"ready"}}]);return l}(r.EventedAccessor);g.__decorate([k.property()],
e.prototype,"listItemCreatedFunction",void 0);g.__decorate([k.property({type:p})],e.prototype,"tableItems",void 0);g.__decorate([k.property()],e.prototype,"map",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"state",null);return e=g.__decorate([u.subclass("esri.widgets.TableList.TableListViewModel")],e)});