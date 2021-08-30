// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ./widgetUtils ../../core/has ../../core/Logger ./jsxFactory".split(" "),function(b,d,e,k,l,f){const c={heading:"esri-widget__heading"};b.CSS=c;b.Heading=function(a,g){const h=`h${d.clamp(Math.ceil(a.level),1,6)}`;delete a.level;return f.tsx(h,{...a,class:e.classes(c.heading,a.class)},g)};Object.defineProperty(b,"__esModule",{value:!0})});