// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../Color ../core/lang ../smartMapping/symbology/support/colors ../smartMapping/symbology/support/symbologyUtils ../smartMapping/symbology/support/utils".split(" "),function(k,h,I,J,m,u){function C(a){return m.getThemesforBasemap(v,a)}function n(a){const c=m.getRawSchemes({basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme,theme:v.get("default")});if(c){var {schemesInfo:b,basemapId:d,basemapTheme:e}=c,f={...a,basemap:d};return{primaryScheme:D(f,b.primary,b.common),
secondarySchemes:b.secondary.map(g=>D(f,g,b.common)).filter(Boolean),basemapId:d,basemapTheme:e}}}function E(a){return m.filterSchemesByName(a.name,n(a))}function F(a){return m.filterSchemesByTag(a.includedTags,a.excludedTags,n(a))}function w(a){if(a)return a={...a},a.colorsForClassBreaks=a.colorsForClassBreaks.map(c=>({numClasses:c.numClasses,colors:c.colors.map(b=>b.map(d=>new h(d)))})),a.noDataColor&&(a.noDataColor=new h(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&
new h(a.outline.color),width:a.outline.width}),a}function x(a,c){a=I.clone(a);let b=[];c=(c||"HH").split("");const d=c[1];"L"===c[0]&&a.reverse();const e="H"===d;a.forEach(f=>{e&&f.reverse();b=b.concat(f)});return b}function y(a,c,b){let d;a.colorsForClassBreaks.some(e=>{e.numClasses===c&&(d=e.colors);return!!d});return(d=d.map(e=>e.map(f=>new h(f))))?x(d,b):null}function z(a,c){a=c?a:w(a);a.colorsForClassBreaks.forEach(b=>{const d=b.colors.reverse(),e=[];for(let f=0;f<b.numClasses;f++){const g=[];
d.forEach(l=>{g.push(l[f])});e.push(g)}b.colors=e});return a}function G(a){const c=a.theme||"default",b=a.geometryType,d=a.colors,e=a.numClasses;if(a=v.get(c)){var f=[];a.supportedBasemaps.forEach(g=>{if(g=n({theme:c,basemap:g,geometryType:b})){let l=H(g.primaryScheme,d,e);l&&f.push(l);g.secondarySchemes.forEach(p=>{(l=H(p,d,e))&&f.push(l)})}});return f}}function q(a,c,b,d){let e=1;do{{let l=void 0;var f=a;var g=c;const p=y(f,b,d);p&&1===u.hasIdenticalColors(g,p)&&(l=f);f=l}f||(a=z(a),e++)}while(!f&&
4>=e);return f}function H(a,c,b){return q(a,c,b,"HH")||q(a,c,b,"HL")||q(a,c,b,"LH")||q(a,c,b,"LL")}function D(a,c,b){var d="mesh"!==a.geometryType&&a.worldScale?a.view:null;const e=J[c];if(e){c=(a.theme||"default")+"/"+a.basemap+"/"+c;var f=[];for(var g in e)"stops"!==g&&"name"!==g&&"tags"!==g&&f.push({numClasses:+g,colors:e[g]});switch(a.geometryType){case "point":case "multipoint":return a=b.noDataColor,g=b.outline,b=b.size,{id:c,name:e.name,tags:[...e.tags],colorsForClassBreaks:r(f),noDataColor:new h(a),
outline:{color:new h(g.color),width:g.width},size:d?u.toWorldScale(b,d):b,opacity:1};case "polyline":return a=b.noDataColor,b=b.width,{id:c,name:e.name,tags:[...e.tags],colorsForClassBreaks:r(f),noDataColor:new h(a),opacity:1,width:d?u.toWorldScale(b,d):b};case "polygon":return d=b.noDataColor,a=b.fillOpacity,b=b.outline,{id:c,name:e.name,tags:[...e.tags],colorsForClassBreaks:r(f),noDataColor:new h(d),outline:{color:new h(b.color),width:b.width},opacity:a};case "mesh":return d=b.noDataColor,b=b.fillOpacity,
{id:c,name:e.name,tags:[...e.tags],colorsForClassBreaks:r(f),noDataColor:new h(d),opacity:b}}}}function r(a){return a.map(c=>({numClasses:c.numClasses,colors:c.colors.map(b=>b.map(d=>new h(d)))}))}var t={color:[153,153,153,.25],width:"1px"},A="relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine relationship-blue-peach-purple relationship-mint-mustard-green relationship-purple-mustard-darkpurple relationship-blue-orange-purple relationship-pink-periwinkle-violet relationship-blue-tan-green relationship-blue-red-pink relationship-blue-green-brightgreen relationship-blue-orange-lavender relationship-pink-purple-peach relationship-purple-mustard-eggshell relationship-blue-brick-green relationship-orange-purple-lavender relationship-brown-purple-lilac relationship-teal-yellow-lightteal".split(" "),
B="relationship-blue-red-pink relationship-blue-orange-lavender relationship-pink-purple-peach relationship-purple-mustard-eggshell relationship-blue-brick-green relationship-orange-purple-lavender relationship-brown-purple-lilac relationship-teal-yellow-lightteal relationship-blue-orange-brown relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine relationship-blue-peach-purple relationship-mint-mustard-green relationship-purple-mustard-darkpurple relationship-blue-orange-purple relationship-pink-periwinkle-violet relationship-blue-tan-green".split(" ");
const v=m.createThemes({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:t,size:"8px"},primary:"relationship-blue-orange-brown",secondary:A},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"relationship-blue-green-brightgreen",secondary:B}},polyline:{light:{common:{noDataColor:"#aaaaaa",
width:"2px"},primary:"relationship-blue-orange-brown",secondary:A},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"relationship-blue-green-brightgreen",secondary:B}},polygon:{light:{common:{noDataColor:"#aaaaaa",outline:t,fillOpacity:.8},primary:"relationship-blue-orange-brown",secondary:A},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"relationship-blue-green-brightgreen",secondary:B}}}}}});t=Object.freeze({__proto__:null,getThemes:C,
getSchemes:n,getSchemeByName:E,getSchemesByTag:F,cloneScheme:w,flatten2DArray:x,getColors:y,flipColors:z,getMatchingSchemes:G});k.cloneScheme=w;k.flatten2DArray=x;k.flipColors=z;k.getColors=y;k.getMatchingSchemes=G;k.getSchemeByName=E;k.getSchemes=n;k.getSchemesByTag=F;k.getThemes=C;k.relationshipSymbology=t});