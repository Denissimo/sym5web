// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./Collection ./maybe ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(h,k,e,g,n,p,q){e=function(l){function f(a){a=l.call(this,a)||this;a._groups=new Map;return a}h._inheritsLoose(f,l);var c=f.prototype;c.destroy=function(){this.removeAll()};c.add=function(a,b){if(!this._isHandle(a)&&!Array.isArray(a)&&!g.isCollection(a))return this;const d=this._getOrCreateGroup(b);Array.isArray(a)||
g.isCollection(a)?a.forEach(m=>this._isHandle(m)&&d.push(m)):d.push(a);this.notifyChange("size");return this};c.forEach=function(a,b){if("function"===typeof a)this._groups.forEach(d=>d.forEach(a));else{const d=this._getGroup(a);d&&b&&d.forEach(b)}};c.has=function(a){return this._groups.has(this._ensureGroupKey(a))};c.remove=function(a){if(Array.isArray(a)||g.isCollection(a))return a.forEach(this.remove,this),this;if(!this.has(a))return this;const b=this._getGroup(a);for(let d=0;d<b.length;d++)b[d].remove();
this._deleteGroup(a);this.notifyChange("size");return this};c.removeAll=function(){this._groups.forEach(a=>{for(let b=0;b<a.length;b++)a[b].remove()});this._groups.clear();this.notifyChange("size");return this};c._isHandle=function(a){return a&&!!a.remove};c._getOrCreateGroup=function(a){if(this.has(a))return this._getGroup(a);const b=[];this._groups.set(this._ensureGroupKey(a),b);return b};c._getGroup=function(a){return n.assumeNonNull(this._groups.get(this._ensureGroupKey(a)))};c._deleteGroup=function(a){return this._groups.delete(this._ensureGroupKey(a))};
c._ensureGroupKey=function(a){return a||"_default_"};h._createClass(f,[{key:"size",get:function(){let a=0;this._groups.forEach(b=>{a+=b.length});return a}}]);return f}(e);k.__decorate([p.property({readOnly:!0})],e.prototype,"size",null);return e=k.__decorate([q.subclass("esri.core.Handles")],e)});