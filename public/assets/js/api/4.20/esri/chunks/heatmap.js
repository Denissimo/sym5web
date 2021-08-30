// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../Color","../smartMapping/symbology/support/colors","../smartMapping/symbology/support/symbologyUtils"],function(c,f,t,d){function g(a){return d.getThemesforBasemap(h,a)}function e(a){if(a=d.getRawSchemes({basemap:a.basemap,basemapTheme:a.basemapTheme,theme:h.get("default")})){var {schemesInfo:b,basemapId:k,basemapTheme:u}=a,l=`${"default"}/${k}/`;return{primaryScheme:m(b.primary,l+b.primary),secondarySchemes:b.secondary.map(n=>m(n,l+n)).filter(Boolean),basemapId:k,basemapTheme:u}}}
function p(a){return d.filterSchemesByName(a.name,e(a))}function q(a){return d.filterSchemesByTag(a.includedTags,a.excludedTags,e(a))}function r(a){if(a)return a={...a},a.colors=a.colors.map(b=>new f(b)),a}function m(a,b){if(a=t[a])return v({id:b,name:a.name,tags:a.tags,colors:a.stops,opacity:.7})}function v(a){return{id:a.id,name:a.name,tags:[...a.tags],colors:a.colors.map(b=>new f(b)),opacity:a.opacity}}const h=d.createThemes({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",
schemes:{default:{light:{primary:"neutral-white-blue",secondary:"heatmap-v1 heatmap-v2 heatmap-v3 neutral-yellow-orange neutral-yellow-green neutral-yellow-purple neutral-yellow-magenta neutral-white-blue-metal neutral-white-gold neutral-yellow-bronze heatmap-v4 dark-yellow-orange dark-yellow-green dark-yellow-purple dark-yellow-magenta dark-white-blue dark-white-blue-metal dark-white-gold dark-yellow-bronze".split(" ")},dark:{primary:"dark-white-blue",secondary:"dark-yellow-orange dark-yellow-green dark-yellow-purple dark-yellow-magenta dark-white-blue-metal dark-white-gold dark-yellow-bronze heatmap-v1 heatmap-v2 heatmap-v3 heatmap-v4 neutral-yellow-orange neutral-yellow-green neutral-yellow-purple neutral-yellow-magenta neutral-white-blue neutral-white-blue-metal neutral-white-gold neutral-yellow-bronze".split(" ")}}}}}});
var w=Object.freeze({__proto__:null,getThemes:g,getSchemes:e,getSchemeByName:p,getSchemesByTag:q,cloneScheme:r});c.cloneScheme=r;c.getSchemeByName=p;c.getSchemes=e;c.getSchemesByTag=q;c.getThemes=g;c.heatmapSymbology=w});