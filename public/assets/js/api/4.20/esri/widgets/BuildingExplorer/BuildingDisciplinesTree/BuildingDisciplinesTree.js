// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../Widget ../BuildingDisciplinesViewModel ./BuildingDisciplinesNode ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(m,c,h,e,b,v,w,x,n,p,k,q,y,r){const t={expand:"expand",collapse:"collapse",
hideSublayer:"hideSublayer",showSublayer:"showSublayer"};b=function(l){function g(d){var a=l.call(this,d)||this;a._defaultViewModel=new k;a.viewModel=a._defaultViewModel;a.messages=t;a.toggleSiblingsVisibility=!1;a._childWidgets=[];a._updateChildWidgets=()=>{a._destroyChildWidgets();a.viewModel&&(a._childWidgets=a.viewModel.root.children.toArray().reverse().map(u=>new q({node:u,messages:a.messages,toggleSiblingsVisibility:a.toggleSiblingsVisibility})))};return a}m._inheritsLoose(g,l);var f=g.prototype;
f.initialize=function(){this.own(h.on(this,"viewModel.root.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),h.init(this,["messages","toggleSiblingsVisibility"],this._updateChildWidgets))};f.destroy=function(){this._destroyChildWidgets();this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()};f.render=function(){return r.tsx("div",{role:"tree",class:"esri-building-disciplines-tree"},this._childWidgets.map(d=>d.render()))};f._destroyChildWidgets=
function(){this._childWidgets.forEach(d=>d.destroy());this._childWidgets=[]};return g}(p);c.__decorate([e.property({type:k})],b.prototype,"viewModel",void 0);c.__decorate([e.property()],b.prototype,"messages",void 0);c.__decorate([e.property({nonNullable:!0})],b.prototype,"toggleSiblingsVisibility",void 0);c.__decorate([e.property()],b.prototype,"_childWidgets",void 0);return b=c.__decorate([n.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],b)});