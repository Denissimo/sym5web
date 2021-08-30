// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Collection","../../core/maybe","../DOMContainer"],function(d,g,e,h){function f(a,b){const c=a.view;c&&(b&&c.ready&&c.activeTool!==a?(c.activeTool=a,h.isDOMContainer(c)&&c.focus()):b||c.activeTool!==a||(c.activeTool=null))}d.areToolManipulatorsEditable=function(a){return!1!==a.visible&&!1!==a.editable&&(null==a.hasEditableFlag||a.hasEditableFlag(1))};d.evaluateToolConstructorArguments=function(a){return e.isNone(a)?{}:"function"===typeof a?a():a};d.newToolCollection=function(){const a=
new g;a.on("after-add",b=>{b=b.item;b.view&&b.view.ready&&b.attach()});a.on("after-remove",b=>{b=b.item;f(b,!1);b.destroyed||b.detach()});return a};d.setActive=f;d.swap=function(a,b,c){a=a.activeTool;b!==a&&(e.isSome(a)&&a.deactivate&&a.deactivate(),c(b),e.isSome(b)&&b.activate&&b.activate())};Object.defineProperty(d,"__esModule",{value:!0})});