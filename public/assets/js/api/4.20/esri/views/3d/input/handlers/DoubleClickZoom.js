// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/screenUtils ../../state/controllers/global/ZoomStepController ../../state/controllers/local/ZoomStepController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(f,h,k,l,m,d,n){d=function(g){function e(c,b){var a=g.call(this,!0)||this;a.view=c;a.registerIncoming("double-click",b,p=>a.handleDoubleClick(p));return a}h._inheritsLoose(e,g);e.prototype.handleDoubleClick=function(c){const b=c.data;
if(n.eventMatchesPointerAction(b,"primary")){const a=this.view.state.isGlobal?new l.ZoomStepController({view:this.view,mode:"animation"}):new m.ZoomStepController({view:this.view,mode:"animation"});this.view.state.switchCameraController(a);a.zoomStep(Math.log(.5)/Math.log(.6),k.createScreenPointArray(b.x,b.y));c.stopPropagation()}};return e}(d.InputHandler);f.DoubleClickZoom=d;Object.defineProperty(f,"__esModule",{value:!0})});