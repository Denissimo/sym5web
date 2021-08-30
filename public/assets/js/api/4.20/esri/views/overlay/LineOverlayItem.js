// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../libs/maquette/projection ../../libs/maquette/h ../../libs/maquette/projector".split(" "),function(p,d,b,e,w,x,y,z,t,A,k,B){b=function(q){function h(a){a=q.call(this,a)||this;a.startX=0;a.startY=0;a.endX=0;a.endY=0;a.width=
1;a.color=[0,0,0,.5];a.visible=!0;return a}p._inheritsLoose(h,q);var l=h.prototype;l.render=function(){const {height:a,left:c,top:m,width:g,x1:n,x2:f,y1:u,y2:v}=this.calculateCoordinates(r);return k.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:c+"px",top:m+"px",width:g+"px",height:a+"px",visibility:this.visible?"visible":"hidden"}},[k.h("svg",{width:g,height:a},[k.h("line",{x1:n,y1:u,x2:f,y2:v,style:`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`})])])};
l.renderCanvas=function(a){if(this.visible){a.strokeStyle=this.strokeStyle;a.lineWidth=this.width;a.lineCap=this.lineCap;var c=this.calculateCoordinates(r);a.beginPath();a.moveTo(c.left+c.x1,c.top+c.y1);a.lineTo(c.left+c.x2,c.top+c.y2);a.stroke()}};l.calculateCoordinates=function(a){const c=Math.min(this.startX,this.endX),m=Math.max(this.startX,this.endX),g=Math.min(this.startY,this.endY),n=Math.max(this.startY,this.endY),f=this.width;a.left=c-f;a.top=g-f;a.width=m-c+2*f;a.height=Math.max(20,n-g+
2*f);a.x1=this.startX-c+f;a.y1=this.startY-g+f;a.x2=this.endX-c+f;a.y2=this.endY-g+f;return a};p._createClass(h,[{key:"startPosition",get:function(){return[this.startX,this.startY]},set:function(a){this._set("startX",a[0]);this._set("startY",a[1])}},{key:"endPosition",get:function(){return[this.endX,this.endY]},set:function(a){this._set("endX",a[0]);this._set("endY",a[1])}},{key:"strokeStyle",get:function(){const a=this.color;return`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`}},{key:"lineCap",get:function(){return"round"}}]);
return h}(b);d.__decorate([e.property()],b.prototype,"startX",void 0);d.__decorate([e.property()],b.prototype,"startY",void 0);d.__decorate([e.property()],b.prototype,"endX",void 0);d.__decorate([e.property()],b.prototype,"endY",void 0);d.__decorate([e.property()],b.prototype,"startPosition",null);d.__decorate([e.property()],b.prototype,"endPosition",null);d.__decorate([e.property()],b.prototype,"width",void 0);d.__decorate([e.property()],b.prototype,"color",void 0);d.__decorate([e.property()],b.prototype,
"visible",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"strokeStyle",null);b=d.__decorate([t.subclass("esri.views.overlay.LineOverlayItem")],b);const r={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0};return b});