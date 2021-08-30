// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/Logger ../../core/watchUtils ../../core/accessorSupport/decorators/aliasOf ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../layers/GraphicsLayer ../../views/interactive/snapping/SnappingOptions ../Attachments/AttachmentsViewModel ./BatchCreateWorkflow ./CreateWorkflow ./UpdateWorkflow ../FeatureForm/FeatureFormViewModel ../FeatureTemplates/FeatureTemplatesViewModel ../Sketch/SketchViewModel ../Spinner/SpinnerViewModel".split(" "),
function(l,g,z,A,e,B,C,q,D,S,T,U,h,E,F,G,H,I,J,K,L,M,N,O){function m(p,n,d){P.error(new A(p,n,d))}function Q(p,n){return p&&p.find(d=>d.layer===n)}const P=C.getLogger("esri.widgets.Editor.EditorViewModel"),w=["create","update"];e=function(p){function n(a){a=p.call(this,a)||this;a._sketchGraphicsLayer=new F({listMode:"hide",internal:!0});a.activeWorkflow=null;a.activityQueue=[];a.failures=[];a.attachmentsViewModel=new H({abilities:{editing:!0}});a.featureFormViewModel=new L;a.featureTemplatesViewModel=
new M;a.layerInfos=null;a.sketchViewModel=new N({layer:a._sketchGraphicsLayer});a.snappingOptions=new G;a.spinnerViewModel=new O;return a}l._inheritsLoose(n,p);var d=n.prototype;d.initialize=function(){this.handles.add([q.on(this,"activeWorkflow","cancel",()=>this.emit("workflow-cancel")),q.on(this,"activeWorkflow","commit",()=>this.emit("workflow-commit")),q.init(this,"view.map",a=>{a&&a.add(this._sketchGraphicsLayer)}),q.watch(this,"editableItems",()=>{const {activeWorkflow:a}=this;this.refreshCreationTemplates();
if(a){var {stepId:b}=a;"create"===a.type?"awaiting-feature-creation-info"!==b||this.canCreate||this._cancelWorkflow():"update"===a.type&&("awaiting-feature-to-update"===b&&!this.canUpdate||"awaiting-update-feature-candidate"===b&&!a.data.candidates.some(c=>{const k=this.editableItems.find(r=>r.layer===c.layer);return k&&-1<k.supports.indexOf("update")}))&&this._cancelWorkflow()}})])};d.destroy=function(){this._cancelWorkflow().then(()=>{var a;null!=(a=this.view)&&a.map&&this.view.map.remove(this._sketchGraphicsLayer);
this.view=null})};d.startCreateWorkflowAtFeatureTypeSelection=function(){var a=l._asyncToGenerator(function*(){if(this.canCreate){yield this._cancelWorkflow();var b=this._createCreateWorkflow();yield b.start();this._set("activeWorkflow",b)}else m("editing:unsupported-workflow","Create workflow is unsupported or disabled.")});return function(){return a.apply(this,arguments)}}();d.startCreateWorkflowAtFeatureCreation=function(){var a=l._asyncToGenerator(function*(b){if(this.canCreate){yield this._cancelWorkflow();
var c=this._createCreateWorkflow("awaiting-feature-to-create");c.data.creationInfo=b;yield c.start();this._set("activeWorkflow",c)}else m("editing:unsupported-workflow","Create workflow is unsupported or disabled.")});return function(b){return a.apply(this,arguments)}}();d.startBatchCreateWorkflowAtFeatureCreation=function(){var a=l._asyncToGenerator(function*(b,c="awaiting-feature-creation-info"){this.canCreate?(yield this._cancelWorkflow(),c=this._createBatchCreateWorkflow(c),c.data.creationInfo=
b,yield c.start(),this._set("activeWorkflow",c)):m("editing:unsupported-workflow","Batch create workflow is unsupported or disabled.")});return function(b){return a.apply(this,arguments)}}();d.startCreateWorkflowAtFeatureEdit=function(){var a=l._asyncToGenerator(function*(b){if(this.canCreate){yield this._cancelWorkflow();var c=this._createCreateWorkflow("editing-new-feature");c.data.edits.feature=b;yield c.start();this._set("activeWorkflow",c)}else m("editing:unsupported-workflow","Create workflow is unsupported or disabled.")});
return function(b){return a.apply(this,arguments)}}();d.startUpdateWorkflowAtFeatureSelection=function(){var a=l._asyncToGenerator(function*(){if(this.canUpdate){yield this._cancelWorkflow();var b=this._createUpdateWorkflow();yield b.start();this._set("activeWorkflow",b)}else m("editing:unsupported-workflow","Update workflow is unsupported or disabled.")});return function(){return a.apply(this,arguments)}}();d.startUpdateWorkflowAtMultipleFeatureSelection=function(){var a=l._asyncToGenerator(function*(b){if(this.canUpdate){yield this._cancelWorkflow();
var c=this._createUpdateWorkflow("awaiting-update-feature-candidate");c.data.candidates=b;yield c.start();this._set("activeWorkflow",c)}else m("editing:unsupported-workflow","Update workflow is unsupported or disabled.")});return function(b){return a.apply(this,arguments)}}();d.startUpdateWorkflowAtFeatureEdit=function(){var a=l._asyncToGenerator(function*(b){if(this.canUpdate){yield this._cancelWorkflow();var c=this._createUpdateWorkflow("editing-existing-feature");c.data.edits.feature=b;yield c.start();
this._set("activeWorkflow",c)}else m("editing:unsupported-workflow","Update workflow is unsupported or disabled.")});return function(b){return a.apply(this,arguments)}}();d.deleteFeatureFromWorkflow=function(){var a=l._asyncToGenerator(function*(){const {activeWorkflow:b}=this;b&&"update"===b.type?(yield this._delete(b.data.edits.feature),yield b.reset()):m("editing:unsupported-workflow","Deleting requires an active update workflow.")});return function(){return a.apply(this,arguments)}}();d.cancelWorkflow=
function(){var a=l._asyncToGenerator(function*(b){return this._cancelWorkflow({warn:!0,...b})});return function(b){return a.apply(this,arguments)}}();d.refreshCreationTemplates=function(){const a=[];for(const {layer:b,supports:c}of this.editableItems)"templates"in b&&c.includes("create")&&a.push(b);this.featureTemplatesViewModel.layers=a};d._cancelWorkflow=function(){var a=l._asyncToGenerator(function*(b){const c=this.activeWorkflow;c?b&&!1===b.force?(yield c.cancel(b),this._set("activeWorkflow",
null)):(this.emit("workflow-cancel"),this._set("activeWorkflow",null),yield c.cancel(b)):b&&b.warn&&m("editing:no-active-workflow","There is no active workflow to cancel.")});return function(b){return a.apply(this,arguments)}}();d._createBatchCreateWorkflow=function(a){return I.create(this,a,(b,c)=>this._applyEdits(b,c))};d._createCreateWorkflow=function(a){return J.create(this,a,(b,c)=>this._applyEdits(b,c))};d._createUpdateWorkflow=function(a){return K.create(this,a,(b,c)=>this._applyEdits(b,c))};
d._delete=function(){var a=l._asyncToGenerator(function*(b){const c=b.sourceLayer;"applyEdits"in c&&(yield this._applyEdits(c,{deleteFeatures:[b]}))});return function(b){return a.apply(this,arguments)}}();d._applyEdits=function(){var a=l._asyncToGenerator(function*(b,c){yield this._queueOperation(()=>b.applyEdits(c));const k=yield this.view.whenLayerView(b);yield q.whenFalseOnce(k,"updating")});return function(b,c){return a.apply(this,arguments)}}();d._queueOperation=function(a){this.activityQueue.push(a);
this.notifyChange("syncing");const b=(c,k)=>{c=k.indexOf(c);-1<c&&k.splice(c,1)};return a().then(({addFeatureResults:c,deleteFeatureResults:k,updateFeatureResults:r})=>{if(c=c.find(f=>!!f.error)||r.find(f=>!!f.error)||k.find(f=>!!f.error))throw c.error;}).catch(c=>{m("editing:operation-error","An error occurred.",{error:c});const k={error:c,retry:()=>{b(k,this.failures);return this._queueOperation(a)},cancel:()=>{b(k,this.failures)}};this._set("failures",[...this.failures,k])}).then(()=>{b(a,this.activityQueue);
this.notifyChange("syncing")})};l._createClass(n,[{key:"allowedWorkflows",get:function(){return this._get("allowedWorkflows")},set:function(a){a&&0!==a.length||(a=[...w]);this._set("allowedWorkflows",a)}},{key:"canCreate",get:function(){return this.editableItems.some(a=>a.supports.includes("create"))}},{key:"canUpdate",get:function(){return this.editableItems.some(a=>a.supports.includes("update"))}},{key:"editableItems",get:function(){var a,b,c;const k=null==(a=this.view)?void 0:a.allLayerViews;if(!k)return new z;
const r=new Set(null==(b=this.view)?void 0:null==(c=b.map)?void 0:c.editableLayers);return k.filter(f=>r.has(f.layer)).map(f=>{const {layer:t,suspended:R}=f,{data:x,operations:v}=t.capabilities;f=Q(this.layerInfos,t);const y="supportsAttachment"in x&&x.supportsAttachment&&(!f||!1!==f.allowAttachments);if(R)return{hasAttachments:y,layer:t,supports:[]};const u=[];v.supportsAdd&&this.allowedWorkflows.includes("create")&&(!f||!1!==f.enabled&&!1!==f.addEnabled)&&u.push("create");v.supportsUpdate&&this.allowedWorkflows.includes("update")&&
(!f||!1!==f.enabled&&!1!==f.updateEnabled)&&u.push("update");!1!==(f&&f.deleteEnabled)&&v.supportsDelete&&u.push("delete");return{hasAttachments:y,layer:t,supports:u}}).reverse()}},{key:"state",get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";var a=this.attachmentsViewModel.mode;if("add"===a)return"adding-attachment";if("edit"===a)return"editing-attachment";({activeWorkflow:a}=this);return a?a.stepId:"ready"}},{key:"syncing",get:function(){return 0<this.activityQueue.length}},
{key:"view",set:function(a){this.sketchViewModel.view=a;this.spinnerViewModel.view=a;this._set("view",a)}}]);return n}(B.HandleOwnerMixin(e.EventedAccessor));g.__decorate([h.property({readOnly:!0})],e.prototype,"activeWorkflow",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"activityQueue",void 0);g.__decorate([h.property({value:[...w]})],e.prototype,"allowedWorkflows",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"canCreate",null);g.__decorate([h.property({readOnly:!0})],
e.prototype,"canUpdate",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"editableItems",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"failures",void 0);g.__decorate([h.property()],e.prototype,"attachmentsViewModel",void 0);g.__decorate([h.property()],e.prototype,"featureFormViewModel",void 0);g.__decorate([h.property()],e.prototype,"featureTemplatesViewModel",void 0);g.__decorate([h.property()],e.prototype,"layerInfos",void 0);g.__decorate([h.property()],e.prototype,"sketchViewModel",
void 0);g.__decorate([D.aliasOf("sketchViewModel.snappingOptions")],e.prototype,"snappingOptions",void 0);g.__decorate([h.property()],e.prototype,"spinnerViewModel",void 0);g.__decorate([h.property()],e.prototype,"state",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"syncing",null);g.__decorate([h.property()],e.prototype,"view",null);return e=g.__decorate([E.subclass("esri.widgets.Editor.EditorViewModel")],e)});