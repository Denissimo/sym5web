/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../Graphic.js";import t from"../core/Collection.js";import r from"../core/Error.js";import{clone as o,i as s}from"../core/lang.js";import{dataComponents as a}from"../core/urlUtils.js";import{normalizeCentralMeridian as i}from"../geometry/support/normalizeUtils.js";import"./tslib.es6.js";import"../geometry.js";import"./ensureType.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"../geometry/Extent.js";import"../core/accessorSupport/decorators/property.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"./Message.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./Evented.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"../request.js";import"../kernel.js";import"./assets.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./uid.js";import"./normalizeUtilsCommon.js";async function p(e,a,i,p={}){let u,c;const y={edits:i,result:new Promise(((e,t)=>{u=e,c=t}))};e.emit("apply-edits",y);try{var b;const{results:c,edits:y}=await async function(e,o,a,i){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(o))return Promise.reject(new r(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new r(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:p,options:u}=await async function(e,o,a){const i=o&&(o.addFeatures||o.updateFeatures||o.deleteFeatures),p=o&&(o.addAttachments||o.updateAttachments||o.deleteAttachments);if(!o||!i&&!p)throw new r(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new r(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&p)throw new r(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&p)throw new r(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const u={...a};null!=u.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(u.rollbackOnFailureEnabled=!0);if(!1===u.rollbackOnFailureEnabled&&"original-and-current-features"===u.returnServiceEditsOption)throw new r(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&u.returnServiceEditsInSourceSR)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(u.returnServiceEditsInSourceSR&&"original-and-current-features"!==u.returnServiceEditsOption)throw new r(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c={...o};if(c.addFeatures=o&&t.isCollection(o.addFeatures)?o.addFeatures.toArray():c.addFeatures||[],c.updateFeatures=o&&t.isCollection(o.updateFeatures)?o.updateFeatures.toArray():c.updateFeatures||[],c.deleteFeatures=o&&t.isCollection(o.deleteFeatures)?o.deleteFeatures.toArray():c.deleteFeatures||[],c.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new r(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");c.addAttachments=c.addAttachments||[],c.updateAttachments=c.updateAttachments||[],c.deleteAttachments=c.deleteAttachments||[],c.addFeatures=c.addFeatures.map(d),c.updateFeatures=c.updateFeatures.map(d);const y=a&&a.globalIdUsed;c.addFeatures.forEach((t=>function(e,t,r){l(e,t,r)}(t,e,y))),c.updateFeatures.forEach((t=>function(e,t,o){if(l(e,t,o),"geometry"in e&&s(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new r(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,y))),c.deleteFeatures.forEach((t=>function(e,t,r){l(e,t,r)}(t,e,y))),c.addAttachments.forEach((t=>n(t,e))),c.updateAttachments.forEach((t=>n(t,e)));return{edits:await m(c),options:u}}(e,a,i);if(!(p.addFeatures.length||p.updateFeatures.length||p.deleteFeatures.length||p.addAttachments.length||p.updateAttachments.length||p.deleteAttachments.length))return{edits:p,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};return{edits:p,results:await o.applyEdits(p,u)}}(e,a,i,p),j=e=>e.filter((e=>!e.error)).map(o),h={edits:y,addedFeatures:j(c.addFeatureResults),updatedFeatures:j(c.updateFeatureResults),deletedFeatures:j(c.deleteFeatureResults),addedAttachments:j(c.addAttachmentResults),updatedAttachments:j(c.updateAttachmentResults),deletedAttachments:j(c.deleteAttachmentResults)};return null!=(b=c.editedFeatureResults)&&b.length&&(h.editedFeatures=c.editedFeatureResults),(h.addedFeatures.length||h.updatedFeatures.length||h.deletedFeatures.length||h.addedAttachments.length||h.updatedAttachments.length||h.deletedAttachments.length)&&e.emit("edits",h),u(h),c}catch(e){throw c(e),e}}function l(e,t,o){if(o){if("attributes"in e&&!e.attributes[t.globalIdField])throw new r(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&s(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new r(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new r(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function n(e,t){const{feature:o,attachment:s}=e;if(!o||"attributes"in o&&!o.attributes[t.globalIdField])throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in o)&&!o.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new r(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&s.uploadId)throw new r(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=a(s.data);if(e&&!e.isBase64)throw new r(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function m(e){const t=e.addFeatures,r=e.updateFeatures,o=t.concat(r).map((e=>e.geometry)),s=await i(o),a=t.length,p=r.length;return s.slice(0,a).forEach(((t,r)=>e.addFeatures[r].geometry=t)),s.slice(a,a+p).forEach(((t,r)=>e.updateFeatures[r].geometry=t)),e}function d(t){const r=new e;return t.attributes||(t.attributes={}),r.geometry=t.geometry,r.attributes=t.attributes,r}export{p as applyEdits};
