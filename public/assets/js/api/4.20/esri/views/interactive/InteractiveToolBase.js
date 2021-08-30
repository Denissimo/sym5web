// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ./interactiveToolUtils ./ManipulatorCollection".split(" "),function(c,g,d,m,h,e,t,u,v,w,n,p,q){c.InteractiveToolBase=function(k){function f(a){a=k.call(this,a)||this;a.toolState="pending";a.attached=
!1;a.created=!1;a.completed=!1;a.manipulators=new q.ManipulatorCollection;a.updating=!1;a._editableFlags=[];a._creationStartedResolver=h.createResolver();a._creationFinishedResolver=h.createResolver();return a}g._inheritsLoose(f,k);var b=f.prototype;b.attach=function(){if(!this.attached&&this.isSupported){this.manipulators.attach();this.onAttach();if(this.visible)this.onShow();this._set("attached",!0)}};b.detach=function(){this.attached&&(this.onHide(),this.onDetach(),this.manipulators.detach(),this._set("attached",
!1))};b.handleInputEvent=function(a){if(this.attached)this.onInputEvent(a)};b.handleInputEventAfter=function(a){if(this.attached)this.onInputEventAfter(a)};b.destroy=function(){switch(this.toolState){case "creating":case "created":this.manipulators.destroy()}this.toolState="destroyed";this._set("view",null);this._set("created",!1);this._set("completed",!1)};b.setEditableFlag=function(a,r){this._editableFlags[a]=r;this.manipulators.isToolEditable=this._editableFlags.every(l=>null==l||l);this._updateManipulatorAttachment();
0===a&&this.notifyChange("editable");this.onEditableChange()};b.hasEditableFlag=function(a){a=this._editableFlags[a];return null==a?!0:a};b.whenCreationStarted=function(){return this._creationStartedResolver.promise};b.when=function(){return this._creationFinishedResolver.promise};b.rejectCreation=function(a){switch(this.toolState){case "pending":case "creating":this._creationStartedResolver.resolve(this)}this._creationFinishedResolver.reject(a)};b.initialize=function(){};b.onAttach=function(){};
b.onDetach=function(){};b.onShow=function(){};b.onHide=function(){};b.onEditableChange=function(){};b.onInputEvent=function(a){};b.onInputEventAfter=function(a){};b.startToolCreation=function(){switch(this.toolState){case "pending":this._creationStartedResolver.resolve(this);this.toolState="creating";break;default:throw Error(`unexpected tool state ${this.toolState}`);}};b.finishToolCreation=function(){switch(this.toolState){case "pending":this.startToolCreation();case "creating":this.created||(this._set("created",
!0),this._creationFinishedResolver.resolve(this));this.toolState="created";break;case "created":if(!this.created)throw Error(`expected this.created to match toolstate ${this.toolState}`);break;default:throw Error(`unexpected tool state ${this.toolState}`);}};b.complete=function(){this.finishToolCreation();this._set("completed",!0)};b._show=function(){this._updateManipulatorAttachment();this.onShow()};b._hide=function(){this._updateManipulatorAttachment();this.onHide()};b._updateManipulatorAttachment=
function(){this.attached&&this.visible?this.manipulators.attach():this.manipulators.detach()};g._createClass(f,[{key:"active",get:function(){return null!=this.view&&this.view.activeTool===this}},{key:"isSupported",get:function(){return!0}},{key:"visible",set:function(a){this._set("visible",a);a||p.setActive(this,!1);this.attached&&(a?this._show():this._hide())}},{key:"editable",get:function(){return this.hasEditableFlag(0)},set:function(a){this.setEditableFlag(0,a)}},{key:"internallyEditable",get:function(){return this.hasEditableFlag(0)&&
this.hasEditableFlag(1)}}]);return f}(m);d.__decorate([e.property()],c.InteractiveToolBase.prototype,"toolState",void 0);d.__decorate([e.property({constructOnly:!0})],c.InteractiveToolBase.prototype,"view",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"active",null);d.__decorate([e.property({value:!0})],c.InteractiveToolBase.prototype,"visible",null);d.__decorate([e.property({value:!0})],c.InteractiveToolBase.prototype,"editable",null);d.__decorate([e.property({readOnly:!0})],
c.InteractiveToolBase.prototype,"attached",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"created",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"completed",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"manipulators",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"updating",void 0);c.InteractiveToolBase=d.__decorate([n.subclass("esri.views.interactive.InteractiveToolBase")],
c.InteractiveToolBase);Object.defineProperty(c,"__esModule",{value:!0})});