(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3344],{83344:(e,r,t)=>{"use strict";t.r(r),t.d(r,{h:()=>d});var s,a=t(5777),n=t(34385),c={};s=a.c,function(e){var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function t(e,r,t,s){var a=e;switch(t){case"s":return s||r?"néhány másodperc":"néhány másodperce";case"ss":return a+(s||r)?" másodperc":" másodperce";case"m":return"egy"+(s||r?" perc":" perce");case"mm":return a+(s||r?" perc":" perce");case"h":return"egy"+(s||r?" óra":" órája");case"hh":return a+(s||r?" óra":" órája");case"d":return"egy"+(s||r?" nap":" napja");case"dd":return a+(s||r?" nap":" napja");case"M":return"egy"+(s||r?" hónap":" hónapja");case"MM":return a+(s||r?" hónap":" hónapja");case"y":return"egy"+(s||r?" év":" éve");case"yy":return a+(s||r?" év":" éve")}return""}function s(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return s.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return s.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}("function"==typeof a.a?n.a.exports:s.moment);var u=c,d=Object.freeze(Object.assign(Object.create(null),c,{default:u}))}}]);