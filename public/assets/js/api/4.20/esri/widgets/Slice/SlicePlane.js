// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/has ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/persistable ../../views/3d/support/mathUtils ../../geometry/Point".split(" "),function(q,c,b,r,
t,k,d,l,w,x,y,u,m,f,n,v){var g;b=g=function(e){function h(a){a=e.call(this,a)||this;a.type="plane";a.position=null;a.heading=0;a.tilt=0;a.width=10;a.height=10;return a}q._inheritsLoose(h,e);var p=h.prototype;p.clone=function(){return new g({position:t.clone(this.position),heading:this.heading,tilt:this.tilt,width:this.width,height:this.height})};p.equals=function(a){return this.heading===a.heading&&this.tilt===a.tilt&&k.isSome(this.position)&&k.isSome(a.position)&&this.position.equals(a.position)&&
this.width===a.width&&this.height===a.height};return h}(r.JSONSupport);c.__decorate([d.property({readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0);c.__decorate([d.property({type:v}),f.persistable()],b.prototype,"position",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),f.persistable(),l.cast(e=>n.cyclicalDeg.normalize(m.ensureNumber(e),0,!0))],b.prototype,"heading",void 0);c.__decorate([d.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),
f.persistable(),l.cast(e=>n.cyclicalDeg.normalize(m.ensureNumber(e),0,!0))],b.prototype,"tilt",void 0);c.__decorate([d.property({type:Number,nonNullable:!0}),f.persistable()],b.prototype,"width",void 0);c.__decorate([d.property({type:Number,nonNullable:!0}),f.persistable()],b.prototype,"height",void 0);return b=g=c.__decorate([u.subclass("esri.widgets.Slice.SlicePlane")],b)});