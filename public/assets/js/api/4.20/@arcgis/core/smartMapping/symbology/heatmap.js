/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import r from"../../Color.js";import{c as e}from"../../chunks/colors2.js";import{c as t,g as o,a as s,f as a,b as l}from"../../chunks/symbologyUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/utils7.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Message.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/collectionUtils.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../chunks/assets.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";const i=t({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"neutral-white-blue",secondary:["heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"dark-white-blue",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","heatmap-v4","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}}});function m(r){return o(i,r)}function p(r){const e="default",t=s({basemap:r.basemap,basemapTheme:r.basemapTheme,theme:i.get(e)});if(!t)return;const{schemesInfo:o,basemapId:a,basemapTheme:l}=t,m=`default/${a}/`;return{primaryScheme:j(o.primary,m+o.primary),secondarySchemes:o.secondary.map((r=>j(r,m+r))).filter(Boolean),basemapId:a,basemapTheme:l}}function n(r){return a(r.name,p(r))}function u(r){return l(r.includedTags,r.excludedTags,p(r))}function c(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new r(e))),t}function j(t,o){const s=e[t];var a;if(s)return{id:(a={id:o,name:s.name,tags:s.tags,colors:s.stops,opacity:.7}).id,name:a.name,tags:[...a.tags],colors:a.colors.map((e=>new r(e))),opacity:a.opacity}}export{c as cloneScheme,n as getSchemeByName,p as getSchemes,u as getSchemesByTag,m as getThemes};