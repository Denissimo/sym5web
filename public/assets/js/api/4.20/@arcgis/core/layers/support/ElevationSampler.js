/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../../geometry.js";import{d as e}from"../../core/lang.js";import{L as t}from"../../chunks/Logger.js";import{a as s}from"../../chunks/unitUtils.js";import{t as o,a as r}from"../../chunks/aaBoundingRect.js";import{e as i}from"../../geometry/Extent.js";import{canProject as n,project as a}from"../../geometry/support/webMercatorUtils.js";import l from"../../geometry/Point.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../chunks/tslib.es6.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Message.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/projectionEllipsoid.js";const p=t.getLogger("esri.layers.support.ElevationSampler");class c{queryElevation(e){return h(e.clone(),this)}on(){return d}projectIfRequired(e,t){return f(e,t)}}class m extends c{constructor(e,t,r){super(),this.tile=e,this.noDataValue=r,this.extent=o(e.tile.extent,t.spatialReference);const i=s(t.spatialReference),n=t.lodAt(e.tile.level).resolution*i;this.demResolution={min:n,max:n}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return i(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,s=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;p.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${s})`)}return this.tile.sample(t.x,t.y)}}class u extends c{constructor(e,t,s){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=s),this.samplers=i?e.map((e=>new m(e,i,this.noDataValue))):e;const n=this.samplers[0];if(n){this.extent=n.extent.clone();const{min:e,max:t}=n.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=o(r(),i.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return p.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null}}function h(t,s){const o=f(t,s.spatialReference);if(!o)return null;switch(t.type){case"point":!function(t,s,o){t.z=e(o.elevationAt(s),0)}(t,o,s);break;case"polyline":!function(t,s,o){j.spatialReference=s.spatialReference;const r=t.hasM&&!t.hasZ;for(let i=0;i<t.paths.length;i++){const n=t.paths[i],a=s.paths[i];for(let t=0;t<n.length;t++){const s=n[t],i=a[t];j.x=i[0],j.y=i[1],r&&(s[3]=s[2]),s[2]=e(o.elevationAt(j),0)}}t.hasZ=!0}(t,o,s);break;case"multipoint":!function(t,s,o){j.spatialReference=s.spatialReference;const r=t.hasM&&!t.hasZ;for(let i=0;i<t.points.length;i++){const n=t.points[i],a=s.points[i];j.x=a[0],j.y=a[1],r&&(n[3]=n[2]),n[2]=e(o.elevationAt(j),0)}t.hasZ=!0}(t,o,s)}return t}function f(e,t){const s=e.spatialReference;return s.equals(t)?e:n(s,t)?a(e,t):(p.error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const j=new l,d={remove(){}};export{c as ElevationSamplerBase,u as MultiTileElevationSampler,m as TileElevationSampler,h as updateGeometryElevation};
