// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/Handles ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/coordsUtils ../../../geometry/support/rotate ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover ./layerUtils ./settings ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),
function(N,r,p,D,n,V,O,E,u,na,oa,pa,qa,W,F,P,Q,J,R,X,G,w,Y,Z,aa,y,ba,ca){let da=function(q,m,d,a){this.graphics=q;this.mover=m;this.dx=d;this.dy=a;this.type="move-start"},ea=function(q,m,d,a){this.graphics=q;this.mover=m;this.dx=d;this.dy=a;this.type="move"},fa=function(q,m,d,a){this.graphics=q;this.mover=m;this.dx=d;this.dy=a;this.type="move-stop"},ha=function(q,m,d){this.graphics=q;this.mover=m;this.angle=d;this.type="rotate-start"},ia=function(q,m,d){this.graphics=q;this.mover=m;this.angle=d;this.type=
"rotate"},ja=function(q,m,d){this.graphics=q;this.mover=m;this.angle=d;this.type="rotate-stop"},ka=function(q,m,d,a){this.graphics=q;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale-start"},la=function(q,m,d,a){this.graphics=q;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale"},ma=function(q,m,d,a){this.graphics=q;this.mover=m;this.xScale=d;this.yScale=a;this.type="scale-stop"};p=aa.settings.transformGraphics;const C={centerIndicator:new G({style:"cross",size:p.center.size,color:p.center.color}),
fill:{default:new R({color:p.fill.color,outline:{color:p.fill.outlineColor,join:"round",width:1}}),active:new R({color:p.fill.stagedColor,outline:{color:p.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new G({style:"square",size:p.vertex.size,color:p.vertex.color,outline:{color:p.vertex.outlineColor,width:1}}),hover:new G({style:"square",size:p.vertex.hoverSize,color:p.vertex.hoverColor,outline:{color:p.vertex.hoverOutlineColor,width:1}})},rotator:{default:new G({style:"circle",
size:p.vertex.size,color:p.vertex.color,outline:{color:p.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:p.vertex.hoverSize,color:p.vertex.hoverColor,outline:{color:p.vertex.hoverOutlineColor,width:1}})},rotatorLine:new X({color:p.line.color,width:1})};n=function(q){function m(a){a=q.call(this,a)||this;a._activeHandleGraphic=null;a._graphicAttributes={esriSketchTool:"box"};a._handles=new V;a._mover=null;a._rotateGraphicOffset=20;a._angleOfRotation=0;a._rotateLineGraphic=null;a._startInfo=
null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1;a.type="box";a.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}};a.centerGraphic=null;a.backgroundGraphic=null;a.enableMovement=!0;a.enableRotation=!0;a.enableScaling=!0;a.graphics=[];a.handleGraphics=[];a.layer=null;a.preserveAspectRatio=!1;a.rotateGraphic=null;a.showCenterGraphic=!0;a.view=null;a._getBounds=(()=>{const b=F.create();
return(c,e)=>{c[0]=Number.POSITIVE_INFINITY;c[1]=Number.POSITIVE_INFINITY;c[2]=Number.NEGATIVE_INFINITY;c[3]=Number.NEGATIVE_INFINITY;for(const f of e){if(!f)continue;let h,k,g;"point"===f.type?(e=k=f.x,h=g=f.y):"multipoint"===f.type?(e=Q.geometryToCoordinates(f),[e,h,k,g]=P.getRingsOrPathsBounds(b,[e])):"extent"===f.type?[e,h,k,g]=[f.xmin,f.ymin,f.xmax,f.ymax]:(e=Q.geometryToCoordinates(f),[e,h,k,g]=P.getRingsOrPathsBounds(b,e));c[0]=Math.min(e,c[0]);c[1]=Math.min(h,c[1]);c[2]=Math.max(k,c[2]);c[3]=
Math.max(g,c[3])}return c}})();return a}N._inheritsLoose(m,q);var d=m.prototype;d.initialize=function(){this._setup();this._handles.add([E.whenOnce(this,"view.ready",()=>{const {layer:a,view:b}=this;Z.addUniqueLayer(b,a)}),E.pausable(this,"preserveAspectRatio",()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())}),E.pausable(this,"view.scale",()=>{this._updateRotateGraphic();this._updateRotateLineGraphic()}),E.pausable(this,"graphics",()=>this.refresh()),
E.pausable(this,"layer",(a,b)=>{b&&this._resetGraphics(b);this.refresh()})])};d.destroy=function(){this._reset();this._handles=O.destroyMaybe(this._handles)};d.isUIGraphic=function(a){let b=[];this.handleGraphics.length&&(b=b.concat(this.handleGraphics));this.backgroundGraphic&&b.push(this.backgroundGraphic);this.centerGraphic&&b.push(this.centerGraphic);this.rotateGraphic&&b.push(this.rotateGraphic);this._rotateLineGraphic&&b.push(this._rotateLineGraphic);return b.length&&b.includes(a)};d.move=function(a,
b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const e=w.cloneMove(c.geometry,a,b,this.view);c.geometry=e}this.refresh();this._emitMoveStopEvent(a,b,null)}};d.scale=function(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const e=w.scale(c.geometry,a,b);c.geometry=e}this.refresh();this._emitScaleStopEvent(a,b,null)}};d.rotate=function(a,b){if(this._mover&&this.graphics.length){b||(b=new y(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,
this.view.spatialReference));for(const c of this.graphics){const e=J(c.geometry,a,b);c.geometry=e}this.refresh();this._emitRotateStopEvent(a,null)}};d.refresh=function(){this._reset();this._setup()};d.reset=function(){this.graphics=[]};d._setup=function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())};d._reset=function(){this._resetGraphicStateVars();this._resetGraphics();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};d._resetGraphicStateVars=
function(){this._activeHandleGraphic=this._startInfo=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this._angleOfRotation=0};d._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this.handleGraphics),a.remove(this.backgroundGraphic),a.remove(this.centerGraphic),a.remove(this.rotateGraphic),a.remove(this._rotateLineGraphic);for(const b of this.handleGraphics)b.destroy();this._set("handleGraphics",[]);this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",
null));this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null));this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null));this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)};d._setupMover=function(){let a=[].concat(this.handleGraphics);this.enableMovement&&(a=a.concat(this.graphics,this.backgroundGraphic));this.enableRotation&&a.push(this.rotateGraphic);this.showCenterGraphic&&a.push(this.centerGraphic);this._mover=
new Y({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:a,callbacks:{onGraphicClick:b=>this._onGraphicClickCallback(b),onGraphicMoveStart:b=>this._onGraphicMoveStartCallback(b),onGraphicMove:b=>this._onGraphicMoveCallback(b),onGraphicMoveStop:b=>this._onGraphicMoveStopCallback(b),onGraphicPointerOver:b=>this._onGraphicPointerOverCallback(b),onGraphicPointerOut:b=>this._onGraphicPointerOutCallback(b)}})};d._getStartInfo=function(a){const [b,c,e,f]=this._getBoxBounds(F.create()),
h=Math.abs(e-b),k=Math.abs(f-c),{x:g,y:v}=a.geometry;return{width:h,height:k,centerX:(e+b)/2,centerY:(f+c)/2,startX:g,startY:v,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}};d._getGraphicInfos=function(){return this.graphics.map(a=>this._getGraphicInfo(a))};d._getGraphicInfo=function(a){a=a.geometry;const [b,c,e,f]=this._getBounds(F.create(),[a]);return{width:Math.abs(e-b),height:Math.abs(f-c),centerX:(e+b)/2,centerY:(f+c)/2,geometry:a}};
d._onGraphicClickCallback=function(a){a.viewEvent.stopPropagation();this.emit("graphic-click",a);if(this.callbacks.onGraphicClick)this.callbacks.onGraphicClick(a)};d._onGraphicMoveStartCallback=function(a){const {_angleOfRotation:b,_xScale:c,_yScale:e,backgroundGraphic:f,handleGraphics:h,rotateGraphic:k,symbols:g}=this,v=a.graphic;this._resetGraphicStateVars();this._hideGraphicsBeforeUpdate();f.symbol=g.fill.active;this._startInfo=this._getStartInfo(v);v===k?(this.view.cursor="grabbing",this._emitRotateStartEvent(b,
v)):h.includes(v)?(this._activeHandleGraphic=v,this._emitScaleStartEvent(c,e,v)):this._emitMoveStartEvent(a.dx,a.dy,v)};d._onGraphicMoveCallback=function(a){const b=a.graphic;if(this._startInfo)if(this.handleGraphics.includes(b))this._scaleGraphic(b),this._emitScaleEvent(this._xScale,this._yScale,b);else if(b===this.rotateGraphic)this._rotateGraphic(b),this._emitRotateEvent(this._angleOfRotation,b);else{const c=a.dx;a=a.dy;this._totalDx+=c;this._totalDy+=a;this._moveGraphic(b,c,a);this._emitMoveEvent(c,
a,b)}};d._onGraphicMoveStopCallback=function(a){a=a.graphic;if(this._startInfo){var {_angleOfRotation:b,_totalDx:c,_totalDy:e,_xScale:f,_yScale:h,handleGraphics:k,rotateGraphic:g}=this;this.refresh();a===g?(this.view.cursor="pointer",this._emitRotateStopEvent(b,a)):k.includes(a)?this._emitScaleStopEvent(f,h,a):this._emitMoveStopEvent(c,e,a)}else this.refresh()};d._onGraphicPointerOverCallback=function(a){const {backgroundGraphic:b,handleGraphics:c,graphics:e,rotateGraphic:f,symbols:h,view:k}=this;
var g=a.graphic;if(g===f)f.symbol=h.rotator.hover,k.cursor="pointer";else if(e.includes(g)||g===b)k.cursor="move";else if(c.includes(g)){a.graphic.symbol=h.handles.hover;g=k.rotation;a=a.index;8>a&&(a=0<=g&&45>g?a%8:45<=g&&90>g?(a+1)%8:90<=g&&135>g?(a+2)%8:135<=g&&180>g?(a+3)%8:180<=g&&225>g?(a+4)%8:225<=g&&270>g?(a+5)%8:270<=g&&315>g?(a+6)%8:(a+7)%8);switch(a){case 0:a="nwse-resize";break;case 1:a="ns-resize";break;case 2:a="nesw-resize";break;case 3:a="ew-resize";break;case 4:a="nwse-resize";break;
case 5:a="ns-resize";break;case 6:a="nesw-resize";break;case 7:a="ew-resize";break;default:a="pointer"}k.cursor=a}else k.cursor="pointer"};d._onGraphicPointerOutCallback=function(a){const {handleGraphics:b,rotateGraphic:c,symbols:e,view:f}=this;a.graphic===c?c.symbol=e.rotator.default:b.includes(a.graphic)&&(a.graphic.symbol=e.handles.default);f.cursor="default"};d._scaleGraphic=function(a){const {_startInfo:b,handleGraphics:c,preserveAspectRatio:e,view:f}=this,{centerX:h,centerY:k,startX:g,startY:v}=
b,{resolution:A,transform:l}=f.state;var t=c.indexOf(a);1!==t&&5!==t||this._updateX(a,h);3!==t&&7!==t||this._updateY(a,k);const {x:H,y:M}=a.geometry;var B=l[0]*H+l[2]*M+l[4],x=l[1]*H+l[3]*M+l[5];a=b.graphicInfos.map(K=>K.geometry);if(e){this._xScale=this._yScale=w.getScaleRatio(l[0]*h+l[2]*k+l[4],l[1]*h+l[3]*k+l[5],l[0]*g+l[2]*v+l[4],l[1]*g+l[3]*v+l[5],B,x);for(var z of a){var L=a.indexOf(z);this.graphics[L].geometry=w.scale(z,this._xScale,this._yScale,[h,k])}this._updateBackgroundGraphic()}else{const {width:K,
height:S}=b;let I=H-g;x=v-M;if(1===t||5===t)I=0;else if(3===t||7===t)x=0;if(0!==I||0!==x){z=S+(v<k?x:-1*x);B=h+I/2;x=k+x/2;this._xScale=(K+(g>h?I:-1*I))/K||1;this._yScale=z/S||1;if(1===t||5===t)this._xScale=1;else if(3===t||7===t)this._yScale=1;t=(B-h)/A;z=(x-k)/A;B=w.scale(b.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=w.cloneMove(B,t,z,f,!0);var {centerX:T,centerY:U}=this._getGraphicInfo(this.backgroundGraphic);t=(T-h)/A;z=-1*(U-k)/A;for(L of a)B=a.indexOf(L),x=w.scale(L,this._xScale,
this._yScale,[h,k]),this.graphics[B].geometry=w.cloneMove(x,t,z,f,!0);this.centerGraphic.geometry=new y(T,U,f.spatialReference)}}};d._rotateGraphic=function(a){const {centerX:b,centerY:c,startX:e,startY:f,box:h,rotate:k}=this._startInfo,{x:g,y:v}=a.geometry;a=new y(b,c,this.view.spatialReference);this._angleOfRotation=w.getRotationAngle(b,c,e,f,g,v);const A=this._startInfo.graphicInfos.map(l=>l.geometry);for(const l of A){const t=A.indexOf(l),H=J(l,this._angleOfRotation,a);this.graphics[t].geometry=
H}this.backgroundGraphic.geometry=J(h,this._angleOfRotation,a);this.rotateGraphic.geometry=J(k,this._angleOfRotation,a)};d._moveGraphic=function(a,b,c){if(this.graphics.includes(a)){this.backgroundGraphic.geometry=w.cloneMove(this.backgroundGraphic.geometry,b,c,this.view);for(const e of this.graphics)e!==a&&(e.geometry=w.cloneMove(e.geometry,b,c,this.view))}else a===this.centerGraphic&&(this.backgroundGraphic.geometry=w.cloneMove(this.backgroundGraphic.geometry,b,c,this.view));if(a===this.backgroundGraphic||
a===this.centerGraphic)for(const e of this.graphics)e.geometry=w.cloneMove(e.geometry,b,c,this.view)};d._setupGraphics=function(){const {_graphicAttributes:a,symbols:b}=this;this._set("centerGraphic",new D(null,b.centerIndicator,a));this.showCenterGraphic&&this.layer.add(this.centerGraphic);this._set("backgroundGraphic",new D(null,b.fill.default,a));this.layer.add(this.backgroundGraphic);this._rotateLineGraphic=new D(null,b.rotatorLine,a);this._set("rotateGraphic",new D(null,b.rotator.default,a));
this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let c=0;8>c;c++)this.handleGraphics.push(new D(null,b.handles.default,a));this.enableScaling&&this.layer.addMany(this.handleGraphics)};d._updateGraphics=function(){this._updateBackgroundGraphic();this._updateHandleGraphics();this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()};d._hideGraphicsBeforeUpdate=function(){this.centerGraphic.visible=
!1;this.rotateGraphic.visible=!1;this._rotateLineGraphic.visible=!1;this.handleGraphics.forEach(a=>a.visible=!1)};d._updateHandleGraphics=function(){const a=this._getCoordinates(!0);this.handleGraphics.forEach((b,c)=>{const [e,f]=a[c];this._updateXY(b,e,f)})};d._updateBackgroundGraphic=function(){const a=this._getCoordinates();this.backgroundGraphic.geometry=new ba({rings:a,spatialReference:this.view.spatialReference})};d._updateCenterGraphic=function(){const [a,b,c,e]=this._getBoxBounds(F.create());
this.centerGraphic.geometry=new y((c+a)/2,(e+b)/2,this.view.spatialReference)};d._updateRotateGraphic=function(){if(this.handleGraphics.length){var {x:a,y:b}=this.handleGraphics[1].geometry;this.rotateGraphic.geometry=new y(a,b+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}};d._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var a=this.handleGraphics[1].geometry,b=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=
new ca({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference})}};d._updateXY=function(a,b,c){a.geometry=new y(b,c,this.view.spatialReference)};d._updateX=function(a,b){a.geometry=new y(b,a.geometry.y,this.view.spatialReference)};d._updateY=function(a,b){a.geometry=new y(a.geometry.x,b,this.view.spatialReference)};d._hasExtentGraphic=function(){return this.graphics.some(a=>a&&O.isSome(a.geometry)&&"extent"===a.geometry.type)};d._getBoxBounds=function(a){const b=this.graphics.map(c=>
c.geometry);return this._getBounds(a,b)};d._getCoordinates=function(a){const [b,c,e,f]=this._getBoxBounds(F.create());if(a){a=(b+e)/2;const h=(f+c)/2;return[[b,f],[a,f],[e,f],[e,h],[e,c],[a,c],[b,c],[b,h]]}return[[b,f],[e,f],[e,c],[b,c]]};d._emitMoveStartEvent=function(a,b,c){a=new da(this.graphics,c,a,b);this.emit("move-start",a);if(this.callbacks.onMoveStart)this.callbacks.onMoveStart(a)};d._emitMoveEvent=function(a,b,c){a=new ea(this.graphics,c,a,b);this.emit("move",a);if(this.callbacks.onMove)this.callbacks.onMove(a)};
d._emitMoveStopEvent=function(a,b,c){a=new fa(this.graphics,c,a,b);this.emit("move-stop",a);if(this.callbacks.onMoveStop)this.callbacks.onMoveStop(a)};d._emitRotateStartEvent=function(a,b){a=new ha(this.graphics,b,a);this.emit("rotate-start",a);if(this.callbacks.onRotateStart)this.callbacks.onRotateStart(a)};d._emitRotateEvent=function(a,b){a=new ia(this.graphics,b,a);this.emit("rotate",a);if(this.callbacks.onRotate)this.callbacks.onRotate(a)};d._emitRotateStopEvent=function(a,b){a=new ja(this.graphics,
b,a);this.emit("rotate-stop",a);if(this.callbacks.onRotateStop)this.callbacks.onRotateStop(a)};d._emitScaleStartEvent=function(a,b,c){a=new ka(this.graphics,c,a,b);this.emit("scale-start",a);if(this.callbacks.onScaleStart)this.callbacks.onScaleStart(a)};d._emitScaleEvent=function(a,b,c){a=new la(this.graphics,c,a,b);this.emit("scale",a);if(this.callbacks.onScale)this.callbacks.onScale(a)};d._emitScaleStopEvent=function(a,b,c){a=new ma(this.graphics,c,a,b);this.emit("scale-stop",a);if(this.callbacks.onScaleStop)this.callbacks.onScaleStop(a)};
N._createClass(m,[{key:"state",get:function(){const a=!!this.get("view.ready"),b=!(!this.get("graphics.length")||!this.get("layer"));return a&&b?"active":a?"ready":"disabled"}},{key:"symbols",set:function(a){const {centerIndicator:b=C.centerIndicator,fill:c=C.fill,handles:e=C.handles,rotator:f=C.rotator,rotatorLine:h=C.rotatorLine}=a||{};this._set("symbols",{centerIndicator:b,fill:c,handles:e,rotator:f,rotatorLine:h})}}]);return m}(n.EventedAccessor);r.__decorate([u.property()],n.prototype,"_rotateLineGraphic",
void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"type",void 0);r.__decorate([u.property()],n.prototype,"callbacks",void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"centerGraphic",void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"backgroundGraphic",void 0);r.__decorate([u.property()],n.prototype,"enableMovement",void 0);r.__decorate([u.property()],n.prototype,"enableRotation",void 0);r.__decorate([u.property()],n.prototype,"enableScaling",void 0);r.__decorate([u.property()],
n.prototype,"graphics",void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"handleGraphics",void 0);r.__decorate([u.property()],n.prototype,"layer",void 0);r.__decorate([u.property()],n.prototype,"preserveAspectRatio",void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"rotateGraphic",void 0);r.__decorate([u.property()],n.prototype,"showCenterGraphic",void 0);r.__decorate([u.property({readOnly:!0})],n.prototype,"state",null);r.__decorate([u.property({value:C})],n.prototype,"symbols",
null);r.__decorate([u.property()],n.prototype,"view",void 0);return n=r.__decorate([W.subclass("esri.views.draw.support.Box")],n)});