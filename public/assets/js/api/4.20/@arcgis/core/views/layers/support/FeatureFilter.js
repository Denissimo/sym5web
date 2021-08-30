/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{geometryTypes as t}from"../../../geometry.js";import s from"../../../TimeExtent.js";import{J as r}from"../../../chunks/jsonMap.js";import{a as i}from"../../../chunks/JSONSupport.js";import{clone as o}from"../../../core/lang.js";import{property as n}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/Logger.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";import{w as a}from"../../../chunks/writer.js";import{fromJSON as l}from"../../../geometry/support/jsonUtils.js";import m from"../../../rest/support/Query.js";import"../../../geometry/Extent.js";import"../../../chunks/string.js";import"../../../chunks/object.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/arrayUtils.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Message.js";import"../../../config.js";import"../../../chunks/write.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/timeUtils.js";import"../../../chunks/enumeration.js";import"../../../chunks/DataLayerSource.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../rest/support/StatisticDefinition.js";var c;const u=new r({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),d=new r({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=c=class extends i{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1}writeWhere(e,t){t.where=e||"1=1"}enable(){this._set("enabled",!0)}createQuery(e={}){const{where:t,geometry:s,spatialRelationship:r,timeExtent:i,objectIds:n,units:p,distance:a}=this;return new m({geometry:o(s),objectIds:o(n),spatialRelationship:r,timeExtent:o(i),where:t,units:p,distance:a,...e})}clone(){const{where:e,geometry:t,spatialRelationship:s,hiddenIds:r,timeExtent:i,objectIds:n,units:p,distance:a}=this,l=new Set;return r.forEach((e=>l.add(e))),new c({geometry:o(t),hiddenIds:l,objectIds:o(n),spatialRelationship:s,timeExtent:o(i),where:e,units:p,distance:a})}};e([n({type:String})],j.prototype,"where",void 0),e([a("where")],j.prototype,"writeWhere",null),e([n({types:t,json:{read:l,write:!0}})],j.prototype,"geometry",void 0),e([n({type:String,json:{read:{source:"spatialRel",reader:u.read},write:{target:"spatialRel",writer:u.write}}})],j.prototype,"spatialRelationship",void 0),e([n({json:{write:(e,t,s)=>t[s]=Array.from(e),read:e=>new Set(e)}})],j.prototype,"hiddenIds",void 0),e([n({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),e([n({type:[Number],json:{write:!0}})],j.prototype,"objectIds",void 0),e([n({type:String,json:{read:d.read,write:{writer:d.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],j.prototype,"units",void 0),e([n({type:s,json:{write:!0}})],j.prototype,"timeExtent",void 0),e([n({readOnly:!0})],j.prototype,"enabled",void 0),j=c=e([p("esri.views.layers.support.FeatureFilter")],j);var h=j;export default h;
