// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../Manipulator3D"],function(c,e,f){let h=function(){function d(){this.grabbingState=0;this.firstSelected=this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=null}d.prototype.update=function(g){this.grabbingState=0;this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=this.firstSelected=null;g.forEachManipulator((a,b)=>{0===b&&(this.zManipulator=a);a instanceof f.Manipulator3D&&(a.selected&&(0===this.numSelected&&(this.firstSelected=a),
this.numSelected++),e.isNone(this.firstGrabbedXY)&&a.grabbing&&1===b&&(this.firstGrabbedXY=a));if(a.grabbing)switch(this.grabbingState|=1,b){case 0:this.grabbingState|=2;break;case 1:this.grabbingState|=4}})};return d}();c.ManipulatorState=h;Object.defineProperty(c,"__esModule",{value:!0})});