/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{L as e}from"./Logger.js";import{i}from"../core/lang.js";import{a as r}from"./aaBoundingRect.js";import{d as s}from"./extentUtils.js";import{h as o,d as p,g as a}from"./spatialQuerySupport.js";import m from"../rest/support/Query.js";import{f as n}from"./FeatureStore2D.js";import"./Message.js";import"./object.js";import"../config.js";import"./string.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./metadata.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./write.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./projectionSupport.js";import"../geometry/projection.js";import"./mathUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./json.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"../geometry.js";import"./typeUtils.js";import"../TimeExtent.js";import"./timeUtils.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"./CircularArray.js";import"./Evented.js";import"./TileStore.js";import"./FeatureSetReader.js";import"./centroid.js";import"./diffUtils.js";import"../core/Collection.js";import"../layers/support/FieldsIndex.js";import"./definitions.js";import"./Utils12.js";import"./enums.js";import"./Texture.js";import"./visualVariablesUtils.js";import"./screenUtils.js";import"./number2.js";import"./visualVariablesUtils2.js";import"./quickselect.js";import"./TileKey.js";import"./TileInfoView.js";import"./aaBoundingBox.js";import"./arcadeOnDemand.js";const l=e.getLogger("esri.views.2d.layers.features.support.whereUtils"),h={getAttribute:(t,e)=>t.field(e)};const j=e.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");export default class{constructor(t){this._geometryBounds=r(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0)}))}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,1)}setTrue(t){const e=[],i=[],r=new Set(t);return this._idToVisibility.forEach(((t,s)=>{const o=!!(1&this._idToVisibility.get(s)),p=r.has(s);!o&&p?e.push(s):o&&!p&&i.push(s),this._idToVisibility.set(s,p?3:0)})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:r,objectIds:s}=this;return m.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:r,objectIds:s})}async update(t,e){this._hash=JSON.stringify(t);const i=await o(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,i){const r=await import("../core/sql/WhereClause.js");try{const s=r.WhereClause.create(e,i);if(!s.isStandardized){const e=new t("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",s);l.error(e)}return t=>{const e=t.readArcadeFeature();return s.testFeature(e,h)}}catch(t){return l.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),t=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",r=await p(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);s(this._geometryBounds,e),this._spatialQueryOperator=r,this.geometry=e,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=a(this._serviceInfo.timeInfo,e.timeExtent,n);else{const i=new t("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);j.error(i)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!i(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{1&e||(this._idToVisibility.set(i,1),t.push(i))})),t}}
