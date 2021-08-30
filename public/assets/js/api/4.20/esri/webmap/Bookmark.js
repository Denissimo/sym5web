// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Viewpoint ../core/deprecate ../core/Error ../core/Identifiable ../core/JSONSupport ../core/lang ../core/Logger ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/has ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ../geometry/Extent ../webdoc/support/Thumbnail".split(" "),
function(t,c,n,v,w,b,x,y,z,p,h,A,G,H,B,C,D,E,F,k){var q;const r=z.getLogger("esri.webmap.Bookmark");b=q=function(e){function l(a){a=e.call(this,a)||this;a.name=null;a.thumbnail=new k;return a}t._inheritsLoose(l,e);var m=l.prototype;m.castThumbnail=function(a){return"string"===typeof a?new k({url:a}):E.ensureType(k,a)};m.readViewpoint=function(a,d){const {extent:f,viewpoint:g}=d;return n.fromJSON(g||{targetGeometry:f})};m.writeViewpoint=function(a,d,f,g){if(a){var {targetGeometry:u}=a;p.isSome(u)&&
"extent"!==u.type?null!=g&&g.messages?g.messages.push(new w("property:unsupported","Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.")):r.error("Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent."):d[f]=a.toJSON()}};m.clone=function(){return new q(y.clone({name:this.name,thumbnail:this.thumbnail,viewpoint:this.viewpoint}))};t._createClass(l,[{key:"extent",set:function(a){v.deprecatedProperty(r,"extent",
{replacement:"viewpoint",version:"4.17"});this._set("viewpoint",new n({targetGeometry:a.clone()}));this._set("extent",a)}},{key:"viewpoint",set:function(a){const {targetGeometry:d,scale:f}=a;p.isSome(d)&&("extent"===d.type?this._set("extent",d.clone()):"point"===d.type&&p.isNone(f)&&r.warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",a));this._set("viewpoint",a)}}]);return l}(b.IdentifiableMixin(x.JSONSupport));c.__decorate([h.property({type:F,nonNullable:!0,json:{read:!1,
write:{isRequired:!0}}})],b.prototype,"extent",null);c.__decorate([h.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"name",void 0);c.__decorate([h.property({type:k,json:{write:{overridePolicy(e){return{enabled:!(!e||!e.url)}}}}})],b.prototype,"thumbnail",void 0);c.__decorate([A.cast("thumbnail")],b.prototype,"castThumbnail",null);c.__decorate([h.property({type:n,nonNullable:!0,json:{write:!0}})],b.prototype,"viewpoint",null);c.__decorate([B.reader("viewpoint",["extent",
"viewpoint"])],b.prototype,"readViewpoint",null);c.__decorate([D.writer("viewpoint")],b.prototype,"writeViewpoint",null);return b=q=c.__decorate([C.subclass("esri.webmap.Bookmark")],b)});