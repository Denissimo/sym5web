// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/number","../../../intl/locale","./Format"],function(t,u,w,m){function v(b,c){const g="ar"===w.getLocale(),k={ddm:`Y${"\u00b0\u200e"} A'${b.abbreviatedDirections.north}, X${"\u00b0\u200e"} B'${b.abbreviatedDirections.east}`,dms:`Y${"\u00b0\u200e"} A' B\"${b.abbreviatedDirections.north}, X${"\u00b0\u200e"} C' D\"${b.abbreviatedDirections.east}`,dd:`Y${"\u00b0\u200e"}${b.abbreviatedDirections.north}, X${"\u00b0\u200e"}${b.abbreviatedDirections.east}`},l={ddm:`${b.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A, ${b.abbreviatedDirections.east}${"\u00b0\u200e"}X 'B`,
dms:`${b.abbreviatedDirections.north}${"\u00b0\u200e"}Y 'A \"B, ${b.abbreviatedDirections.east}${"\u00b0\u200e"}X 'C \"D`,dd:`${b.abbreviatedDirections.north}${"\u00b0\u200e"}Y, ${b.abbreviatedDirections.east}${"\u00b0\u200e"}X`};c.forEach(d=>{var {name:h}=d;if("dms"===h||"dd"===h||"ddm"===h){const q=d.defaultPattern===d.currentPattern;h=g?l[h]:k[h];d.defaultPattern=h;q&&(d.currentPattern=h)}})}function e(b){var c=b.match(x);c=c?c[0]:"";const g=0<=b.indexOf(".")?b.split(".")[1].length:0;return c+
u.format(Number(b),{pattern:"###0.###",places:g,round:-1})}function f(b){return u.parse(b)}const n=u.getCustoms().decimal,p={N:"north",S:"south",E:"east",W:"west"},r=new RegExp(`-?\\d+[\\.|\\${n}]?\\d*`),x=/^[\\0]+(?=\d)/;t.generateDefaultFormats=function(b){var c=b.abbreviatedDirections.north;const g=b.abbreviatedDirections.south,k=b.abbreviatedDirections.east,l=b.abbreviatedDirections.west,d={};d[c]="N";d[g]="S";d[k]="E";d[l]="W";const h=new RegExp(`N|S|${c}|${g}`,"i"),q=new RegExp(`E|W|${k}|${l}`,
"i");c=[new m({name:"basemap",coordinateSegments:[{alias:"X",description:"easting",searchPattern:r,substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"Y",description:"northing",searchPattern:r,substitution:{input:a=>f(a),output:a=>e(a)}}],defaultPattern:"X, Y",viewModel:null}),new m({name:"dd",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=\\D*?[N|S|${c}|${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.north,
description:"north/south indicator",searchPattern:h,substitution:{input:a=>d[a],output:a=>b.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}[\\.|\\${n}]?\\d*(?=\\D*?[E|W|${k}|${l}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:q,substitution:{input:a=>d[a],output:a=>b.abbreviatedDirections[p[a]]}}],defaultPattern:`Y${"\u00b0\u200e"}${b.abbreviatedDirections.north}, X${"\u00b0\u200e"}${b.abbreviatedDirections.east}`,
viewModel:null}),new m({name:"ddm",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?\\s+.*?[N|S|${c}|${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp(`\\d{1,2}[\\.\\${n}]?\\d*(?=.*?[N|S|${c}||${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.north,description:"north/south indicator",searchPattern:h,substitution:{input:a=>d[a],output:a=>
b.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}(?=\\D*?\\s+.*?[E|W|${k}|${l}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"B",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\|${n}]?\\d*(?=.*?[E|W|${k}|${l}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:q,substitution:{input:a=>d[a],output:a=>b.abbreviatedDirections[p[a]]}}],
defaultPattern:`Y${"\u00b0\u200e"} A'${b.abbreviatedDirections.north}, X${"\u00b0\u200e"} B'${b.abbreviatedDirections.east}`,viewModel:null}),new m({name:"dms",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?\\s+.*?[N|S|${c}|${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?[N|S|${c}|${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"B",description:"seconds latitude",
searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[N|S|${c}|${g}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.north,description:"north/south indicator",searchPattern:h,substitution:{input:a=>d[a],output:a=>b.abbreviatedDirections[p[a]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}(?=.*?\\s+.*?[E|W|${k}|${l}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"C",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?[E|W|${k}|${l}])`,
"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"D",description:"seconds longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[E|W|${k}|${l}])`,"i"),substitution:{input:a=>f(a),output:a=>e(a)}},{alias:b.abbreviatedDirections.east,description:"east/west indicator",searchPattern:q,substitution:{input:a=>d[a],output:a=>b.abbreviatedDirections[p[a]]}}],defaultPattern:`Y${"\u00b0\u200e"} A' B\"${b.abbreviatedDirections.north}, X${"\u00b0\u200e"} C' D\"${b.abbreviatedDirections.east}`,
viewModel:null}),new m({name:"xy",coordinateSegments:[{alias:"X",description:"longitude",searchPattern:r,substitution:{input:a=>f(a),output:a=>e(a)}},{alias:"Y",description:"latitude",searchPattern:r,substitution:{input:a=>f(a),output:a=>e(a)}}],defaultPattern:"X\u00b0\u200e, Y\u00b0\u200e",viewModel:null}),new m({name:"mgrs",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",
searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new m({name:"usng",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},
{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new m({name:"utm",coordinateSegments:[{alias:"Z",description:"zone number",searchPattern:/\d{1,2}|[abyz]/i},{alias:"B",description:"latitude band",searchPattern:/^\D/},{alias:"X",description:"easting",searchPattern:/\d{1,7}(?=\s*\d{7}$)/},{alias:"Y",description:"northing",searchPattern:/\d{1,7}/}],defaultPattern:"ZB X Y",viewModel:null})];v(b,c);return c};t.setDefaultPatterns=v;Object.defineProperty(t,
"__esModule",{value:!0})});