// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(f,e,g){var c={};(function(h,k){(function(d,a){"function"===typeof e.commonjsRequire?a(g.moment$1.exports):a(d.moment)})(e.commonjsGlobal,function(d){return d.defineLocale("id",{months:"Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),monthsShort:"Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),weekdays:"Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),weekdaysShort:"Min Sen Sel Rab Kam Jum Sab".split(" "),
weekdaysMin:"Mg Sn Sl Rb Km Jm Sb".split(" "),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,b){12===a&&(a=0);if("pagi"===b)return a;if("siang"===b)return 11<=a?a:a+12;if("sore"===b||"malam"===b)return a+12},meridiem:function(a,b,l){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",
nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}})})})();c=Object.freeze(Object.assign(Object.create(null),c,{"default":c}));f.id=c});