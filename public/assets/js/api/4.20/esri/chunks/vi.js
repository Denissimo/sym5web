// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(f,d,g){var b={};(function(h,k){(function(c,a){"function"===typeof d.commonjsRequire?a(g.moment$1.exports):a(c.moment)})(d.commonjsGlobal,function(c){return c.defineLocale("vi",{months:"th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),monthsShort:"Thg 01;Thg 02;Thg 03;Thg 04;Thg 05;Thg 06;Thg 07;Thg 08;Thg 09;Thg 10;Thg 11;Thg 12".split(";"),
monthsParseExact:!0,weekdays:"ch\u1ee7 nh\u1eadt;th\u1ee9 hai;th\u1ee9 ba;th\u1ee9 t\u01b0;th\u1ee9 n\u0103m;th\u1ee9 s\u00e1u;th\u1ee9 b\u1ea3y".split(";"),weekdaysShort:"CN T2 T3 T4 T5 T6 T7".split(" "),weekdaysMin:"CN T2 T3 T4 T5 T6 T7".split(" "),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(a){return/^ch$/i.test(a)},meridiem:function(a,l,e){return 12>a?e?"sa":"SA":e?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",
LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\u00f4m nay l\u00fac] LT",nextDay:"[Ng\u00e0y mai l\u00fac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\u00fac] LT",lastDay:"[H\u00f4m qua l\u00fac] LT",lastWeek:"dddd [tu\u1ea7n tr\u01b0\u1edbc l\u00fac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\u00e0i gi\u00e2y",ss:"%d gi\u00e2y",m:"m\u1ed9t ph\u00fat",mm:"%d ph\u00fat",
h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\u00e0y",dd:"%d ng\u00e0y",w:"m\u1ed9t tu\u1ea7n",ww:"%d tu\u1ea7n",M:"m\u1ed9t th\u00e1ng",MM:"%d th\u00e1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})})})();b=Object.freeze(Object.assign(Object.create(null),b,{"default":b}));f.vi=b});