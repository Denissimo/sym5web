//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("sq",{months:"Janar Shkurt Mars Prill Maj Qershor Korrik Gusht Shtator Tetor N\u00ebntor Dhjetor".split(" "),monthsShort:"Jan Shk Mar Pri Maj Qer Kor Gus Sht Tet N\u00ebn Dhj".split(" "),weekdays:"E Diel;E H\u00ebn\u00eb;E Mart\u00eb;E M\u00ebrkur\u00eb;E Enjte;E Premte;E Shtun\u00eb".split(";"),
weekdaysShort:"Die H\u00ebn Mar M\u00ebr Enj Pre Sht".split(" "),weekdaysMin:"D H Ma M\u00eb E P Sh".split(" "),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(a){return"M"===a.charAt(0)},meridiem:function(a,c,d){return 12>a?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n\u00eb] LT",nextDay:"[Nes\u00ebr n\u00eb] LT",nextWeek:"dddd [n\u00eb] LT",lastDay:"[Dje n\u00eb] LT",
lastWeek:"dddd [e kaluar n\u00eb] LT",sameElse:"L"},relativeTime:{future:"n\u00eb %s",past:"%s m\u00eb par\u00eb",s:"disa sekonda",ss:"%d sekonda",m:"nj\u00eb minut\u00eb",mm:"%d minuta",h:"nj\u00eb or\u00eb",hh:"%d or\u00eb",d:"nj\u00eb dit\u00eb",dd:"%d dit\u00eb",M:"nj\u00eb muaj",MM:"%d muaj",y:"nj\u00eb vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});