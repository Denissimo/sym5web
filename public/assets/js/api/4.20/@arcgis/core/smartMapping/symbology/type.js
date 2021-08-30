/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import o from"../../Color.js";import{c as t}from"../../chunks/colors2.js";import{c as a,g as e,a as r,f as s,b as n}from"../../chunks/symbologyUtils.js";import{t as i}from"../../chunks/utils11.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/utils7.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Message.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/collectionUtils.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../portal/Portal.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../request.js";import"../../kernel.js";import"../../chunks/assets.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/screenUtils.js";const c={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},m=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],l=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],p=a({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:c.light,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(m).concat(l)},dark:{common:{noDataColor:"#aaaaaa",outline:c.darker,size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(m).concat(l)}},polyline:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(m).concat(l)},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(m).concat(l)}},polygon:{light:{common:{noDataColor:"#aaaaaa",outline:c.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(m).concat(l)},dark:{common:{noDataColor:"#aaaaaa",outline:c.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(m).concat(l)}}}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}}});function u(o){return e(p,o)}function h(o){const t=o.theme||"default",a=r({basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme,theme:p.get(t)});if(!a)return;const{schemesInfo:e,basemapId:s,basemapTheme:n}=a,i=e.common;return{primaryScheme:g(o,e.primary,i),secondarySchemes:e.secondary.map((t=>g(o,t,i))).filter(Boolean),basemapId:s,basemapTheme:n}}function d(o){return s(o.name,h(o))}function j(o){return n(o.includedTags,o.excludedTags,h(o))}function y(t){if(!t)return;const a={...t};return a.colors=a.colors.map((t=>new o(t))),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new o(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new o(a.outline.color),width:a.outline.width}),a}function g(a,e,r){const s=a.theme||"default",n=t[e];if(!n)return;const c=n.stops,m="mesh"!==a.geometryType&&a.worldScale?a.view:null;switch(a.geometryType){case"point":case"multipoint":{if("point-cloud-class"===s)return{name:(l={theme:s,name:n.name,tags:n.tags,colors:c}).name,tags:[...l.tags],theme:l.theme,colors:l.colors.map((t=>new o(t)))};const t=r;return function(t,a){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),outline:{color:new o(t.outline.color),width:t.outline.width},size:a?i(t.size,a):t.size,opacity:t.opacity}}({name:n.name,tags:n.tags,theme:s,colors:c,noDataColor:t.noDataColor,opacity:1,outline:t.outline,size:t.size},m)}case"polyline":{const t=r;return function(t,a){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),width:a?i(t.width,a):t.width,opacity:t.opacity}}({name:n.name,tags:n.tags,theme:s,colors:c,noDataColor:t.noDataColor,opacity:1,width:t.width},m)}case"polygon":{const t=r;return function(t,a){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),outline:{color:new o(t.outline.color),width:t.outline.width},opacity:t.opacity,size:a?i(t.size,a):t.size}}({name:n.name,tags:n.tags,theme:s,colors:c,noDataColor:t.noDataColor,opacity:t.fillOpacity||1,outline:t.outline,size:"12px"},m)}case"mesh":{const t=r;return function(t){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),opacity:t.opacity}}({name:n.name,tags:n.tags,theme:s,colors:c,noDataColor:t.noDataColor,opacity:t.fillOpacity||1})}default:return}var l}export{y as cloneScheme,d as getSchemeByName,h as getSchemes,j as getSchemesByTag,u as getThemes};