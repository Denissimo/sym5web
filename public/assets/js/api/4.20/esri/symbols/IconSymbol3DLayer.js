// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Logger ../core/maybe ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/colors ./support/IconSymbol3DLayerResource ./support/materialUtils ./support/Symbol3DAnchorPosition2D ./support/Symbol3DMaterial ./support/Symbol3DOutline".split(" "),function(u,e,c,m,
v,f,H,I,n,w,x,l,y,z,p,A,B){function q(b){const d="width"in b?b.width:b.size,a="height"in b?b.height:b.size,g=r(b.xoffset);b=r(b.yoffset);return(g||b)&&d&&a?{x:-g/d,y:b/a}:null}function r(b){return isFinite(b)?b:0}var h;const C=c.getLogger("esri.symbols.IconSymbol3DLayer");c=h=function(b){function d(a){a=b.call(this,a)||this;a.material=null;a.resource=null;a.type="icon";a.size=12;a.anchor="center";a.anchorPosition=void 0;a.outline=void 0;return a}u._inheritsLoose(d,b);d.prototype.clone=function(){return new h({anchor:this.anchor,
anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:m.isSome(this.material)?this.material.clone():null,outline:m.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})};d.fromSimpleMarkerSymbol=function(a){const g=a.color||l.white,k=q(a),D=a.outline&&0<a.outline.width?{size:a.outline.width,color:(a.outline.color||l.white).clone()}:null;var E=h,F=a.size;{a=a.style;const t=G[a];t?a=t:(C.warn(`${a} cannot be mapped to Icon symbol. Fallback to "circle"`),
a="circle")}return new E({size:F,resource:{primitive:a},material:{color:g},outline:D,anchor:k?"relative":void 0,anchorPosition:k})};d.fromPictureMarkerSymbol=function(a){const g=!a.color||l.isBlack(a.color)?l.white:a.color,k=q(a);return new h({size:a.width<=a.height?a.height:a.width,resource:{href:a.url},material:{color:g.clone()},anchor:k?"relative":void 0,anchorPosition:k})};d.fromCIMSymbol=function(a){return new h({resource:{href:v.makeData({mediaType:"application/json",data:JSON.stringify(a.data)})}})};
return d}(x);e.__decorate([f.property({type:A["default"],json:{write:!0}})],c.prototype,"material",void 0);e.__decorate([f.property({type:y["default"],json:{write:!0}})],c.prototype,"resource",void 0);e.__decorate([n.enumeration({Icon:"icon"},{readOnly:!0})],c.prototype,"type",void 0);e.__decorate([f.property(z.screenSizeProperty)],c.prototype,"size",void 0);e.__decorate([n.enumeration({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",
bottomRight:"bottom-right",relative:"relative"}),f.property({json:{default:"center"}})],c.prototype,"anchor",void 0);e.__decorate([f.property({type:p.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:b=>new p.Symbol3DAnchorPosition2D({x:b[0],y:b[1]})},write:{writer:(b,d)=>{d.anchorPosition=[b.x,b.y]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],c.prototype,"anchorPosition",void 0);e.__decorate([f.property({type:B["default"],json:{write:!0}})],c.prototype,"outline",void 0);
c=h=e.__decorate([w.subclass("esri.symbols.IconSymbol3DLayer")],c);const G={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};return c});