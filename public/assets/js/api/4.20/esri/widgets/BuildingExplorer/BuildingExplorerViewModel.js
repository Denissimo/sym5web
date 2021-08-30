// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../layers/BuildingSceneLayer ../../layers/support/BuildingFilter ./BuildingDisciplinesViewModel ./BuildingLevel ./BuildingPhase ./support/buildingLayerUtils ./support/filterUtils ./support/layerUtils".split(" "),
function(l,c,b,n,w,x,y,p,z,g,d,G,H,I,A,B,C,q,r,t,D,h,E){const F=y.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");b=function(u){function k(a){a=u.call(this,a)||this;a.view=null;a.state="disabled";a.level=new r;a.phase=new t;a.disciplines=new q;a._handles=new x;a._loadLayers=E.createLoadLayersFunction();a.layers=new n;return a}l._inheritsLoose(k,u);var m=k.prototype;m.initialize=function(){this._handles.add([this.layers.on("change",()=>this._onLayersChange()),g.init(this,"_filter",
()=>h.setFilterOnLayers(this.layers,this._filter))]);this._onLayersChange()};m.destroy=function(){this._handles.destroy();this.level.destroyed||this.level.destroy();this.phase.destroyed||this.phase.destroy();this.disciplines.destroyed||this.disciplines.destroy()};m._onLayersChange=function(){var a=l._asyncToGenerator(function*(){this.level.layers=this.layers;this.phase.layers=this.layers;this.disciplines.layers=this.layers;if(0===this.layers.length)this._set("state","disabled");else{this._set("state",
"loading");try{yield this._loadLayers(this.layers),yield Promise.all([g.whenEqualOnce(this.level,"state","ready"),g.whenEqualOnce(this.phase,"state","ready"),g.whenEqualOnce(this.disciplines,"state","ready")]),this.layers.forEach(D.showFullModel),this._set("state","ready")}catch(e){z.isAbortError(e)||this._set("state","failed")}}});return function(){return a.apply(this,arguments)}}();l._createClass(k,[{key:"isSupported",get:function(){var a;return"3d"===(null==(a=this.view)?void 0:a.type)}},{key:"layers",
set:function(a){const e=a.filter(f=>f instanceof B);e.length!==a.length&&F.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget.");this._set("layers",w.referenceSetter(e,this._get("layers")))}},{key:"_filter",get:function(){var a=this.level.filterExpressions;const e=this.phase.filterExpressions,f=[],v=h.getFilterBlockSolid([a.solid,e.solid]);p.isSome(v)&&f.push(v);a=h.getFilterBlockXRay([a.xRay,e.xRay]);p.isSome(a)&&f.push(a);return 0===f.length?
null:new C({id:h.generateFilterId(),name:"Building Explorer Filter",filterBlocks:f})}}]);return k}(b);c.__decorate([d.property({value:null})],b.prototype,"view",void 0);c.__decorate([d.property()],b.prototype,"isSupported",null);c.__decorate([d.property({type:n,nonNullable:!0})],b.prototype,"layers",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",void 0);c.__decorate([d.property({readOnly:!0,type:r})],b.prototype,"level",void 0);c.__decorate([d.property({readOnly:!0,type:t})],b.prototype,
"phase",void 0);c.__decorate([d.property({readOnly:!0,type:q})],b.prototype,"disciplines",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"_filter",null);return b=c.__decorate([A.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],b)});