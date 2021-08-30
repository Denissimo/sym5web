// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(x,
e,g,y,h,p,E,F,G,z,A,B,f,r,b,t,q,C){var c;const u=g.ofType({base:null,key:"type",typeMap:{icon:f,object:r,text:t}});g=g.ofType({base:null,key:"type",typeMap:{icon:f,object:r}});b=c=function(v){function d(a){a=v.call(this,a)||this;a.verticalOffset=null;a.callout=null;a.symbolLayers=new u;a.type="point-3d";return a}x._inheritsLoose(d,v);var k=d.prototype;k.writeSymbolLayers=function(a,m,D,n){const w=a.filter(l=>"text"!==l.type);n&&n.messages&&w.length<a.length&&(a=a.find(l=>"text"===l.type),n.messages.push(new y("symbol-layer:unsupported",
"Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));m[D]=w.map(l=>l.write({},n)).toArray()};k.supportsCallout=function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(const a of this.symbolLayers.items)switch(a.type){case "icon":case "text":case "object":continue;default:return!1}return!0};k.hasVisibleCallout=function(){return q.hasVisibleCallout(this)};k.hasVisibleVerticalOffset=function(){return q.hasVisibleVerticalOffset(this)};k.clone=function(){return new c({verticalOffset:h.clone(this.verticalOffset),
callout:h.clone(this.callout),styleOrigin:h.clone(this.styleOrigin),symbolLayers:h.clone(this.symbolLayers),thumbnail:h.clone(this.thumbnail)})};d.fromSimpleMarkerSymbol=function(a){return new c({symbolLayers:[f.fromSimpleMarkerSymbol(a)]})};d.fromPictureMarkerSymbol=function(a){return new c({symbolLayers:[f.fromPictureMarkerSymbol(a)]})};d.fromCIMSymbol=function(a){if(a.data&&a.data.symbol){const m=a.data.symbol;if("CIMPointSymbol"===m.type&&m.callout)return new c({symbolLayers:[f.fromCIMSymbol(a)],
callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})}return new c({symbolLayers:[f.fromCIMSymbol(a)]})};d.fromTextSymbol=function(a){return new c({symbolLayers:[t.fromTextSymbol(a)]})};return d}(b);e.__decorate([p.property({type:C["default"],json:{write:!0}})],b.prototype,"verticalOffset",void 0);e.__decorate([p.property(q.calloutProperty)],b.prototype,"callout",void 0);e.__decorate([p.property({type:u,json:{type:g,origins:{"web-scene":{type:g}}}})],b.prototype,"symbolLayers",
void 0);e.__decorate([B.writer("web-scene","symbolLayers")],b.prototype,"writeSymbolLayers",null);e.__decorate([z.enumeration({PointSymbol3D:"point-3d"},{readOnly:!0})],b.prototype,"type",void 0);return b=c=e.__decorate([A.subclass("esri.symbols.PointSymbol3D")],b)});