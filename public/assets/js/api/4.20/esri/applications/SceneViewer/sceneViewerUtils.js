// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Logger"],function(b,e,f){function d(){d=e._asyncToGenerator(function*(a,c,g="awaiting-feature-creation-info"){yield a.startBatchCreateWorkflowAtFeatureCreation(c,g)});return d.apply(this,arguments)}b.batchCreateGetNumPendingFeatures=function(a){a=a.activeWorkflow;return"batch-create"===(null==a?void 0:a.type)?a.numPendingFeatures:0};b.getActiveWorkflowState=function(a){return a.state};b.getActiveWorkflowType=function(a){var c;
return null==(c=a.activeWorkflow)?void 0:c.type};b.getLogger=function(a){return f.getLogger(a)};b.numberOfFeatureTemplates=function(a){return a.numberOfFeatureTemplates};b.startBatchCreateWorkflow=function(a,c){return d.apply(this,arguments)};Object.defineProperty(b,"__esModule",{value:!0})});