// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/Symbol3DMaterial".split(" "),function(h,c,m,d,b,u,v,n,p,q,r,t){var f;b=f=function(k){function e(a){a=k.call(this,a)||this;a.material=null;a.castShadows=!0;a.type=
"path";a.profile="circle";a.join="miter";a.cap="butt";a.width=void 0;a.height=void 0;a.anchor="center";a.profileRotation="all";return a}h._inheritsLoose(e,k);var l=e.prototype;l.readSize=function(a,g){return g.height||g.width?a:g.size};l.clone=function(){return new f({enabled:this.enabled,material:m.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,
anchor:this.anchor})};h._createClass(e,[{key:"size",get:function(){if(this.width&&this.height){if(this.width===this.height)return this.width}else{if(this.width)return this.width;if(this.height)return this.height}},set:function(a){this.height=this.width=a}}]);return e}(r);c.__decorate([d.property({type:t["default"],json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0);c.__decorate([n.enumeration({Path:"path"},
{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:Number})],b.prototype,"size",null);c.__decorate([p.reader("size")],b.prototype,"readSize",null);c.__decorate([d.property({type:["circle","quad"],json:{write:!0,default:"circle"}})],b.prototype,"profile",void 0);c.__decorate([d.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],b.prototype,"join",void 0);c.__decorate([d.property({type:["none","butt","square","round"],json:{write:!0,default:"butt"}})],
b.prototype,"cap",void 0);c.__decorate([d.property({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],b.prototype,"width",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"height",void 0);c.__decorate([d.property({type:["center","bottom","top"],json:{write:!0,default:"center"}})],b.prototype,"anchor",void 0);c.__decorate([d.property({type:["heading","all"],json:{write:!0,default:"all"}})],b.prototype,"profileRotation",void 0);return b=
f=c.__decorate([q.subclass("esri.symbols.PathSymbol3DLayer")],b)});