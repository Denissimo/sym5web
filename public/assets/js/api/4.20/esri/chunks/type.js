// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../Color","../smartMapping/symbology/support/colors","../smartMapping/symbology/support/symbologyUtils","../smartMapping/symbology/support/utils"],function(g,d,z,m,q){function t(a){return m.getThemesforBasemap(u,a)}function n(a){const b=m.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme,theme:u.get(a.theme||"default")});if(b){var {schemesInfo:c,basemapId:e,basemapTheme:f}=b,h=c.common;return{primaryScheme:v(a,c.primary,h),secondarySchemes:c.secondary.map(A=>
v(a,A,h)).filter(Boolean),basemapId:e,basemapTheme:f}}}function w(a){return m.filterSchemesByName(a.name,n(a))}function x(a){return m.filterSchemesByTag(a.includedTags,a.excludedTags,n(a))}function y(a){if(a)return a={...a},a.colors=a.colors.map(b=>new d(b)),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new d(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new d(a.outline.color),width:a.outline.width}),a}function v(a,b,c){const e=a.theme||"default";if(b=z[b]){var f=
b.stops,h="mesh"!==a.geometryType&&a.worldScale?a.view:null;switch(a.geometryType){case "point":case "multipoint":return"point-cloud-class"===e?B({theme:e,name:b.name,tags:b.tags,colors:f}):C({name:b.name,tags:b.tags,theme:e,colors:f,noDataColor:c.noDataColor,opacity:1,outline:c.outline,size:c.size},h);case "polyline":return D({name:b.name,tags:b.tags,theme:e,colors:f,noDataColor:c.noDataColor,opacity:1,width:c.width},h);case "polygon":return E({name:b.name,tags:b.tags,theme:e,colors:f,noDataColor:c.noDataColor,
opacity:c.fillOpacity||1,outline:c.outline,size:"12px"},h);case "mesh":return F({name:b.name,tags:b.tags,theme:e,colors:f,noDataColor:c.noDataColor,opacity:c.fillOpacity||1})}}}function B(a){return{name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(b=>new d(b))}}function C(a,b){return{name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(c=>new d(c)),noDataColor:new d(a.noDataColor),outline:{color:new d(a.outline.color),width:a.outline.width},size:b?q.toWorldScale(a.size,b):a.size,
opacity:a.opacity}}function D(a,b){return{name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(c=>new d(c)),noDataColor:new d(a.noDataColor),width:b?q.toWorldScale(a.width,b):a.width,opacity:a.opacity}}function E(a,b){return{name:a.name,tags:[...a.tags],theme:a.theme,colors:a.colors.map(c=>new d(c)),noDataColor:new d(a.noDataColor),outline:{color:new d(a.outline.color),width:a.outline.width},opacity:a.opacity,size:b?q.toWorldScale(a.size,b):a.size}}function F(a){return{name:a.name,tags:[...a.tags],
theme:a.theme,colors:a.colors.map(b=>new d(b)),noDataColor:new d(a.noDataColor),opacity:a.opacity}}var p={color:[153,153,153,.25],width:"1px"};const k="tropical-bliss desert-blooms under-the-sea vibrant-rainbow ocean-bay prairie-summer pastel-chalk".split(" "),l="predominant-v1 predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ");var r={light:{common:{noDataColor:"#aaaaaa",outline:p,
size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(k).concat(l)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(k).concat(l)}};const G={light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(k).concat(l)},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(k).concat(l)}};p={light:{common:{noDataColor:"#aaaaaa",
outline:p,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(k).concat(l)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(k).concat(l)}};const u=m.createThemes({themeDictionary:{"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:r,polyline:G,polygon:p}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",
description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}}});r=Object.freeze({__proto__:null,getThemes:t,getSchemes:n,getSchemeByName:w,getSchemesByTag:x,cloneScheme:y});g.cloneScheme=y;g.getSchemeByName=w;g.getSchemes=n;g.getSchemesByTag=x;g.getThemes=t;g.typeSymbology=r});