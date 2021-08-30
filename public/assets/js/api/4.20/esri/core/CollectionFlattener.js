// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Collection ./HandleOwner ./maybe ./accessorSupport/decorators/property ./has ./accessorSupport/ensureType ./Logger ./jsonMap ./accessorSupport/decorators/subclass ./accessorSupport/trackingUtils".split(" "),function(p,f,m,d,h,k,u,v,w,x,q,r){d=function(n){function l(a){a=n.call(this,a)||this;a.getCollections=null;return a}p._inheritsLoose(l,n);var e=l.prototype;e.initialize=function(){this.handles.add(r.autorun(()=>this.refresh()))};
e.destroy=function(){this.getCollections=null};e.refresh=function(){const a=h.isSome(this.getCollections)?this.getCollections():null;if(h.isNone(a))this.removeAll();else{var b=0;for(const g of a)h.isSome(g)&&(b=this._processCollection(b,g));this.splice(b,this.length)}};e._createNewInstance=function(a){return new m(a)};e._processCollection=function(a,b){if(!b)return a;const g=this.itemFilterFunction?this.itemFilterFunction:c=>!!c;for(const c of b)if(c&&(g(c)&&(b=this.indexOf(c,a),0<=b?b!==a&&this.reorder(c,
a):this.add(c,a),++a),this.getChildrenFunction))if(b=this.getChildrenFunction(c),Array.isArray(b))for(const t of b)a=this._processCollection(a,t);else a=this._processCollection(a,b);return a};return l}(d.HandleOwnerMixin(m));f.__decorate([k.property()],d.prototype,"getCollections",void 0);f.__decorate([k.property()],d.prototype,"getChildrenFunction",void 0);f.__decorate([k.property()],d.prototype,"itemFilterFunction",void 0);return d=f.__decorate([q.subclass("esri.core.CollectionFlattener")],d)});