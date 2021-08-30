// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./handlers/DoubleClickZoom ./handlers/DragRotate ./handlers/DragZoom ./handlers/GamepadNavigation ./handlers/KeyboardNavigation ./handlers/MouseWheelZoom ./handlers/PinchAndPanNavigation ./handlers/PointerDownCancelAnimation ./handlers/SingleKeyResetHeading ./handlers/SingleKeyResetTilt ./handlers/TwoFingerTilt ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick ../../input/recognizers/VerticalTwoFingerDrag".split(" "),
function(m,b,c,q,r,d,L,M,N,O,t,u,h,v,w,x,y,n,z,A,B,C,D,k,E,F,G,H,I,J){c=function(p){function f(){var a=p.apply(this,arguments)||this;a._handles=new q;return a}m._inheritsLoose(f,p);var g=f.prototype;g.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this.disconnect()};g.disconnect=function(){this.view.viewEvents.disconnect();this._inputManager&&(this._inputManager.destroy(),this._inputManager=null);this._source&&(this._source.destroy(),this._source=null)};g.connect=
function(){const a=this.view;this._source=new D.BrowserEventSource(this.view.surface,a.input);var e=[new G.ImmediateDoubleClick,new H.PointerClickHoldAndDrag,new I.SingleAndDoubleClick,new F.Drag(this.view.navigation),new J.VerticalTwoFingerDrag];this._inputManager=e=new k.InputManager({eventSource:this._source,recognizers:e});e.installHandlers("prevent-context-menu",[new E.PreventContextMenu],k.ViewEventPriorities.INTERNAL);this._modeDragPan=new n.PinchAndPanNavigation(a,"primary");this._modeDragRotate=
new h.DragRotate(a,"secondary",0);this._modeDragZoom=new v.DragZoom(a,"tertiary");e.installHandlers("navigation",[new z.PointerDownCancelAnimation(a),new u.DoubleClickZoom(a),new w.GamepadNavigation(a),new x.KeyboardNavigation(a,{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j",headingLeft:"a",headingRight:"d",tiltUp:"w",tiltDown:"s",zoomIn:"+",zoomOut:"-"}),new y.MouseWheelZoom(a),new B.SingleKeyResetTilt(a,"p"),new A.SingleKeyResetHeading(a,"n"),new h.DragRotate(a,
"primary",1,["b"]),new h.DragRotate(a,"secondary",0,["b"]),new n.PinchAndPanNavigation(a,"tertiary",["b"]),this._modeDragRotate,this._modeDragZoom,this._modeDragPan,new C.TwoFingerTilt(a)],k.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(e);this._updateMode();r.init(this.view.navigation,"browserTouchPanEnabled",K=>{this._source.browserTouchPanningEnabled=!K})};g._updateMode=function(){var a=this.primaryDragAction;a=l.get(this.mode).get(a);this._modeDragPan&&(this._modeDragPan.pointerAction=
a.pan);this._modeDragRotate&&(this._modeDragRotate.pointerAction=a.rotate);this._modeDragZoom&&(this._modeDragZoom.pointerAction=a.zoom)};m._createClass(f,[{key:"primaryDragAction",get:function(){return this._get("primaryDragAction")},set:function(a){"pan"!==a&&"rotate"!==a||a===this._get("primaryDragAction")||(this._set("primaryDragAction",a),this._updateMode())}},{key:"mode",get:function(){return this._get("mode")},set:function(a){"default"!==a&&"pro"!==a||a===this._get("mode")||(this._set("mode",
a),this._updateMode())}},{key:"test",get:function(){return{inputManager:this._inputManager,modeDragPan:this._modeDragPan,modeDragRotate:this._modeDragRotate,modeDragZoom:this._modeDragZoom}}}]);return f}(c);b.__decorate([d.property()],c.prototype,"view",void 0);b.__decorate([d.property({value:"pan"})],c.prototype,"primaryDragAction",null);b.__decorate([d.property({value:"default"})],c.prototype,"mode",null);b.__decorate([d.property({readOnly:!0,aliasOf:"_inputManager.hasPendingInputs"})],c.prototype,
"hasPendingInputs",void 0);b.__decorate([d.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],c.prototype,"latestPointerType",void 0);b.__decorate([d.property()],c.prototype,"_inputManager",void 0);c=b.__decorate([t.subclass("esri.views.3d.input.SceneInputManager")],c);const l=new Map;b=new Map;d=new Map;b.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"});b.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"});d.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"});
d.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"});l.set("default",b);l.set("pro",d);return c});