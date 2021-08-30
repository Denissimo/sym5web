/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{getJsonType as s}from"../geometry/support/jsonUtils.js";import{W as i,e as r}from"../geometry/SpatialReference.js";import{b as o,c as n,n as a,o as p,p as l}from"./featureConversionUtils.js";import{F as m}from"./FeatureStore.js";import{p as u,c as d}from"./projectionSupport.js";import{Q as c}from"./QueryEngine.js";import{v as y,i as j,c as f}from"./geojson.js";import{a as g,b as h,d as b}from"./clientSideDefaults.js";import{l as F,m as I,c as _,a as E,s as T}from"./sourceUtils.js";import q from"../layers/support/FieldsIndex.js";import{k as x}from"./fieldType.js";import{getFieldDefaultValue as w}from"../layers/support/fieldUtils.js";import"../config.js";import"../core/lang.js";import"./object.js";import"../kernel.js";import"../core/urlUtils.js";import"./Logger.js";import"./string.js";import"./Message.js";import"../core/promiseUtils.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"./write.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./Evented.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"../geometry/projection.js";import"./mathUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./json.js";import"./MemCache.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"../geometry.js";import"./typeUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"./utils6.js";import"./spatialQuerySupport.js";import"./arcadeOnDemand.js";import"./PromiseQueue.js";import"./utils7.js";import"./basemapUtils.js";import"../Basemap.js";import"../core/Collection.js";import"./collectionUtils.js";import"./Loadable.js";import"./Promise.js";import"./loadAll.js";import"./asyncUtils.js";import"../portal/Portal.js";import"../intl.js";import"./number.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./writeUtils.js";import"./defaultsJSON.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"./enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";const R={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};export default class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(s){const a=[];await this._checkProjection(s.spatialReference);let p=null;if(s.url){p=(await e(s.url,{responseType:"json"})).data,await y(p)}const l=j(p,{geometryType:s.geometryType}),d=s.fields||l.fields||[],F=null!=s.hasZ?s.hasZ:l.hasZ,I=l.geometryType,_=s.objectIdField||("number"===l.objectIdFieldType?l.objectIdFieldName:"OBJECTID")||"OBJECTID",E=s.spatialReference||i;let T=s.timeInfo;if(!I)throw new t("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===l.objectIdFieldType&&a.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),d===l.fields&&l.unknownFields.length>0&&a.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:l.unknownFields}}),_){let e=null;d.some((t=>t.name===_&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):d.unshift({alias:_,name:_,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of d){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new t("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===_&&(e.type="esriFieldTypeOID"),-1===x.jsonValues.indexOf(e.type))throw new t("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const S={};this._requiredFields=[];for(const e of d)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=w(e);e.nullable||void 0!==t?S[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new q(d),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,a.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(a.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:T}}),T=null)}const D={warnings:a,featureErrors:[],layerDefinition:{...R,drawingInfo:g(I),templates:h(S),extent:null,geometryType:I,objectIdField:_,fields:d,hasZ:!!F,timeInfo:T}};this._queryEngine=new c({fields:d,geometryType:I,hasM:!1,hasZ:F,objectIdField:_,spatialReference:E,timeInfo:T,featureStore:new m({geometryType:I,hasM:!1,hasZ:F}),cacheSpatialQueries:!0}),this._createDefaultAttributes=b(S,_),this._nextObjectId=l.maxObjectId+1;const P=f(p,{geometryType:I,hasZ:F,objectIdField:"number"===l.objectIdFieldType?_:null});if(!r(E,i))for(const e of P)e.geometry&&(e.geometry=o(u(n(e.geometry,I,F,!1),i,E)));return this._loadInitialFeatures(D,P),D}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([F(t,s),d(e.adds,t),d(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:s,objectIdField:i}=this._queryEngine,r=[];for(const s of t){const t=this._createDefaultAttributes(),o=I(this._fieldsIndex,t,s.attributes,this._requiredFields,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,s.objectId=t[i],r.push(s))}if(s.addMany(r),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(_(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:r,hasM:o,hasZ:n,objectIdField:p,spatialReference:l,featureStore:m}=this._queryEngine,d=[];for(const o of t){if(o.geometry&&r!==s(o.geometry)){i.push(E("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=I(this._fieldsIndex,t,o.attributes,this._requiredFields);if(n)i.push(n);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[p];e.uidToObjectId[o.uid]=t}o.geometry&&(o.geometry=u(T(o.geometry,l),o.geometry.spatialReference,l)),d.push(o),i.push(_(o.attributes[p]))}}m.addMany(a([],d,r,n,o,p))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:r,hasZ:o,objectIdField:n,spatialReference:a,featureStore:m}=this._queryEngine;for(const d of t){const{attributes:t,geometry:c}=d,y=t&&t[n];if(null==y){e.push(E(`Identifier field ${n} missing`));continue}if(!m.has(y)){e.push(E(`Feature with object id ${y} missing`));continue}const j=p(m.getFeature(y),i,o,r);if(c){if(i!==s(c)){e.push(E("Incorrect geometry type."));continue}j.geometry=u(T(c,a),c.spatialReference,a)}if(t){const s=I(this._fieldsIndex,j.attributes,t,this._requiredFields);if(s){e.push(s);continue}}m.add(l(j,i,o,r,n)),e.push(_(y))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await d(i,e)}catch{throw new t("geojson-layer","Projection not supported")}}}
