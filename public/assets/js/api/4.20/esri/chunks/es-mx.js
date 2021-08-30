// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(h,f,k){var b={};(function(n,p){(function(c,a){"function"===typeof f.commonjsRequire?a(k.moment$1.exports):a(c.moment)})(f.commonjsGlobal,function(c){var a="ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),l="ene feb mar abr may jun jul ago sep oct nov dic".split(" "),d=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],g=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
return c.defineLocale("es-mx",{months:"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),monthsShort:function(e,m){return e?/-MMM-/.test(m)?l[e.month()]:a[e.month()]:a},monthsRegex:g,monthsShortRegex:g,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:d,longMonthsParse:d,
shortMonthsParse:d,weekdays:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),weekdaysShort:"dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),weekdaysMin:"do lu ma mi ju vi s\u00e1".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\u00f1ana a la"+
(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\u00eda",dd:"%d d\u00edas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",
y:"un a\u00f1o",yy:"%d a\u00f1os"},dayOfMonthOrdinalParse:/\d{1,2}\u00ba/,ordinal:"%d\u00ba",week:{dow:0,doy:4},invalidDate:"Fecha inv\u00e1lida"})})})();b=Object.freeze(Object.assign(Object.create(null),b,{"default":b}));h.esMx=b});