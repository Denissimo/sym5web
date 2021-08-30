// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(h,f,k){var d={};(function(m,n){(function(e,c){"function"===typeof f.commonjsRequire?c(k.moment$1.exports):c(e.moment)})(f.commonjsGlobal,function(e){function c(a,g,l){var b=a+" ";switch(l){case "ss":return 1===a?b+"sekunda":2===a||3===a||4===a?b+"sekunde":b+"sekundi";case "m":return g?"jedna minuta":"jedne minute";case "mm":return 1===a?b+"minuta":2===a||3===a||4===a?b+"minute":b+"minuta";case "h":return g?"jedan sat":"jednog sata";case "hh":return 1===
a?b+"sat":2===a||3===a||4===a?b+"sata":b+"sati";case "dd":return 1===a?b+"dan":b+"dana";case "MM":return 1===a?b+"mjesec":2===a||3===a||4===a?b+"mjeseca":b+"mjeseci";case "yy":return 1===a?b+"godina":2===a||3===a||4===a?b+"godine":b+"godina"}}return e.defineLocale("bs",{months:"januar februar mart april maj juni juli august septembar oktobar novembar decembar".split(" "),monthsShort:"jan. feb. mar. apr. maj. jun. jul. aug. sep. okt. nov. dec.".split(" "),monthsParseExact:!0,weekdays:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
weekdaysShort:"ned. pon. uto. sri. \u010det. pet. sub.".split(" "),weekdaysMin:"ne po ut sr \u010de pe su".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},
lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:c,m:c,mm:c,h:c,hh:c,d:"dan",dd:c,M:"mjesec",MM:c,y:"godinu",yy:c},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})})();d=Object.freeze(Object.assign(Object.create(null),d,{"default":d}));
h.bs=d});