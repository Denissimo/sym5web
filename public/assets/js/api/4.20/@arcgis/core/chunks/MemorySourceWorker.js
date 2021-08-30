/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{getJsonType as t,isPoint as i}from"../geometry/support/jsonUtils.js";import{W as s}from"../geometry/SpatialReference.js";import{n as r,o,p as a}from"./featureConversionUtils.js";import{i as n,f as l}from"./objectIdUtils.js";import{F as p}from"./FeatureStore.js";import{c as u,p as m}from"./projectionSupport.js";import{Q as d}from"./QueryEngine.js";import{d as c,a as y,b as f}from"./clientSideDefaults.js";import{l as j,a as g,m as h,c as b,s as I}from"./sourceUtils.js";import F from"../layers/support/FieldsIndex.js";import{k as _}from"./fieldType.js";import{getFieldDefaultValue as E}from"../layers/support/fieldUtils.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./Message.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./write.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./Evented.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"../geometry/projection.js";import"./mathUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./json.js";import"./MemCache.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"../geometry.js";import"./typeUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"./utils6.js";import"./spatialQuerySupport.js";import"./arcadeOnDemand.js";import"./PromiseQueue.js";import"./utils7.js";import"./basemapUtils.js";import"../Basemap.js";import"../core/Collection.js";import"./collectionUtils.js";import"./Loadable.js";import"./Promise.js";import"./loadAll.js";import"./asyncUtils.js";import"../portal/Portal.js";import"../intl.js";import"./number.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./writeUtils.js";import"./defaultsJSON.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";const x=s,T={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s},q={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function R(e){return i(e)?null!=e.z:!!e.hasZ}function S(e){return i(e)?null!=e.m:!!e.hasM}export default class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const i=[],{features:s}=t,r=this._inferLayerProperties(s,t.fields),o=t.fields||[],a=null!=t.hasM?t.hasM:r.hasM,m=null!=t.hasZ?t.hasZ:r.hasZ,j=!t.spatialReference&&!r.spatialReference,g=j?x:t.spatialReference||r.spatialReference,h=j?T:null,b=t.geometryType||r.geometryType,I=!b;let R=t.objectIdField||r.objectIdField,S=t.timeInfo;if(!I&&(j&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!R)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&R!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${R}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),R=r.objectIdField),R&&!r.objectIdField){let e=null;o.some((t=>t.name===R&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:R,name:R,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of o){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:t});if(t.name===R&&(t.type="esriFieldTypeOID"),-1===_.jsonValues.indexOf(t.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const D={};this._requiredFields=[];for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=E(e);e.nullable||void 0!==t?D[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new F(o),this._createDefaultAttributes=c(D,R),S){if(S.startTimeField){const e=this._fieldsIndex.get(S.startTimeField);e?(S.startTimeField=e.name,e.type="esriFieldTypeDate"):S.startTimeField=null}if(S.endTimeField){const e=this._fieldsIndex.get(S.endTimeField);e?(S.endTimeField=e.name,e.type="esriFieldTypeDate"):S.endTimeField=null}if(S.trackIdField){const e=this._fieldsIndex.get(S.trackIdField);e?S.trackIdField=e.name:(S.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:S}}))}S.startTimeField||S.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:S}}),S=null)}const O={warnings:i,featureErrors:[],layerDefinition:{...q,drawingInfo:y(b),templates:f(D),extent:h,geometryType:b,objectIdField:R,fields:o,hasZ:!!m,hasM:!!a,timeInfo:S},assignedObjectIds:{}};if(this._queryEngine=new d({fields:o,geometryType:b,hasM:a,hasZ:m,objectIdField:R,spatialReference:g,featureStore:new p({geometryType:b,hasM:a,hasZ:m}),timeInfo:S,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=n,O;const U=l(R,s);return this._nextObjectId=U+1,await u(s,g),this._loadInitialFeatures(O,s)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([j(t,i),u(e.adds,t),u(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,r,o=null,a=null,n=null;for(const i of e){const e=i.geometry;if(e&&(o||(o=t(e)),a||(a=e.spatialReference),null==s&&(s=R(e)),null==r&&(r=S(e)),o&&a&&null!=s&&null!=r))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(n=e.name)}return{geometryType:o,spatialReference:a,objectIdField:n,hasM:r,hasZ:s}}_loadInitialFeatures(e,i){const{geometryType:s,hasM:o,hasZ:a,objectIdField:n,spatialReference:l,featureStore:p}=this._queryEngine,u=[];for(const r of i){if(null!=r.uid&&(e.assignedObjectIds[r.uid]=-1),r.geometry&&s!==t(r.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),o=h(this._fieldsIndex,i,r.attributes,this._requiredFields,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(i,r.attributes,!0),r.attributes=i,null!=r.uid&&(e.assignedObjectIds[r.uid]=r.attributes[n]),r.geometry&&(r.geometry=m(r.geometry,r.geometry.spatialReference,l)),u.push(r))}if(p.addMany(r([],u,s,a,o,n)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(b(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,i){const{addResults:s}=e,{geometryType:o,hasM:a,hasZ:n,objectIdField:l,spatialReference:p,featureStore:u}=this._queryEngine,d=[];for(const r of i){if(r.geometry&&o!==t(r.geometry)){s.push(g("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),a=h(this._fieldsIndex,i,r.attributes,this._requiredFields);if(a)s.push(a);else{if(this._assignObjectId(i,r.attributes),r.attributes=i,null!=r.uid){const t=r.attributes[l];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=m(I(r.geometry,p),r.geometry.spatialReference,p)),d.push(r),s.push(b(r.attributes[l]))}}u.addMany(r([],d,o,n,a,l))}_applyUpdateEdits({updateResults:e},i){const{geometryType:s,hasM:r,hasZ:n,objectIdField:l,spatialReference:p,featureStore:u}=this._queryEngine;for(const d of i){const{attributes:i,geometry:c}=d,y=i&&i[l];if(null==y){e.push(g(`Identifier field ${l} missing`));continue}if(!u.has(y)){e.push(g(`Feature with object id ${y} missing`));continue}const f=o(u.getFeature(y),s,n,r);if(c){if(s!==t(c)){e.push(g("Incorrect geometry type."));continue}f.geometry=m(I(c,p),c.spatialReference,p)}if(i){const t=h(this._fieldsIndex,f.attributes,i,this._requiredFields);if(t){e.push(t);continue}}u.add(a(f,s,n,r,l)),e.push(b(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}
