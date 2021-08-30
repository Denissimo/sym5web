// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../Color ./size ../smartMapping/symbology/support/colors ../smartMapping/symbology/support/symbologyUtils ../smartMapping/symbology/support/utils".split(" "),function(f,d,p,y,k,n){function q(a){return k.getThemesforBasemap(r,a)}function l(a){var b=k.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme,theme:r.get("default")});if(b){var {schemesInfo:c,basemapId:e,basemapTheme:g}=b,h=c.common,t=(b=p.getSchemes({basemap:a.basemap,geometryType:a.geometryType,
worldScale:a.worldScale,view:a.view}))&&b.primaryScheme;return{primaryScheme:u(a,c.primary,h,t),secondarySchemes:c.secondary.map(z=>u(a,z,h,t)).filter(Boolean),basemapId:e,basemapTheme:g}}}function v(a){return k.filterSchemesByName(a.name,l(a))}function w(a){return k.filterSchemesByTag(a.includedTags,a.excludedTags,l(a))}function x(a){if(a)return a={...a},a.colors=a.colors.map(b=>new d(b)),a.noDataColor&&(a.noDataColor=new d(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&
new d(a.outline.color),width:a.outline.width}),"sizeScheme"in a&&a.sizeScheme&&(a.sizeScheme=p.cloneScheme(a.sizeScheme)),a}function u(a,b,c,e){if(b=y[b]){var g=b[a.numColors]||b.stops,h="mesh"!==a.geometryType&&a.worldScale?a.view:null;switch(a.geometryType){case "point":case "multipoint":return A({name:b.name,tags:b.tags,colors:g,noDataColor:c.noDataColor,opacity:1,sizeScheme:e,outline:c.outline,size:c.size},h);case "polyline":return B({name:b.name,tags:b.tags,colors:g,noDataColor:c.noDataColor,
opacity:1,sizeScheme:e,width:c.width},h);case "polygon":return e&&e.marker&&null!=c.markerSize&&(e.marker.size=c.markerSize),C({name:b.name,tags:b.tags,colors:g,noDataColor:c.noDataColor,opacity:c.fillOpacity,outline:c.outline,sizeScheme:e},h);case "mesh":return D({name:b.name,tags:b.tags,colors:g,noDataColor:c.noDataColor,opacity:c.fillOpacity})}}}function A(a,b){return{name:a.name,tags:[...a.tags],colors:a.colors.map(c=>new d(c)),noDataColor:new d(a.noDataColor),outline:{color:new d(a.outline.color),
width:a.outline.width},size:b?n.toWorldScale(a.size,b):a.size,sizeScheme:a.sizeScheme,opacity:a.opacity}}function B(a,b){return{name:a.name,tags:[...a.tags],colors:a.colors.map(c=>new d(c)),noDataColor:new d(a.noDataColor),width:b?n.toWorldScale(a.width,b):a.width,sizeScheme:a.sizeScheme,opacity:a.opacity}}function C(a,b){const {sizeScheme:c}=a;c.marker.size=b?n.toWorldScale(c.marker.size,b):c.marker.size;return{name:a.name,tags:[...a.tags],colors:a.colors.map(e=>new d(e)),noDataColor:new d(a.noDataColor),
outline:{color:new d(a.outline.color),width:a.outline.width},sizeScheme:c,opacity:a.opacity}}function D(a){return{name:a.name,tags:[...a.tags],colors:a.colors.map(b=>new d(b)),noDataColor:new d(a.noDataColor),opacity:a.opacity}}var m={color:[153,153,153,.25],width:"1px"};const r=k.createThemes({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:m,size:"8px"},
primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},
polyline:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},
polygon:{light:{common:{noDataColor:"#aaaaaa",outline:m,fillOpacity:.8,markerSize:"8px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8,markerSize:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}}}}}});
m=Object.freeze({__proto__:null,getThemes:q,getSchemes:l,getSchemeByName:v,getSchemesByTag:w,cloneScheme:x});f.cloneScheme=x;f.getSchemeByName=v;f.getSchemes=l;f.getSchemesByTag=w;f.getThemes=q;f.predominanceSymbology=m});