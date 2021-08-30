// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.isEditableLayer=function(a){var c;return!(a&&a.loaded&&"capabilities"in a&&null!=a&&null!=(c=a.capabilities)&&c.operations&&"supportsEditing"in a.capabilities.operations)||!0!==a.capabilities.operations.supportsEditing||"editingEnabled"in a&&!a.editingEnabled?!1:!0};Object.defineProperty(b,"__esModule",{value:!0})});