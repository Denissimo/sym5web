// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/screenUtils ../../state/controllers/RotateController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(g,k,l,m,e,n){e=function(h){function f(c,a,d,p){var b=h.call(this,!0)||this;b.view=c;b.pointerAction=a;b.pivot=d;b.registerIncoming("drag",p,q=>b.handleDrag(q));return b}k._inheritsLoose(f,h);f.prototype.handleDrag=function(c){const a=c.data;if(!(1<a.pointers.size)&&n.eventMatchesMousePointerAction(c.data,
this.pointerAction)){var d=l.createScreenPointArray(a.center.x,a.center.y);switch(a.action){case "start":this.cameraController&&(this.cameraController.end(),this.cameraController=null);this.cameraController=new m.RotateController({view:this.view,pivot:this.pivot});this.view.state.switchCameraController(this.cameraController);this.cameraController.begin(d);break;case "update":this.cameraController&&this.cameraController.update(d);break;case "end":this.cameraController&&(this.cameraController.end(),
this.cameraController=null)}c.stopPropagation()}};return f}(e.InputHandler);g.DragRotate=e;Object.defineProperty(g,"__esModule",{value:!0})});