//>>built
(function(f,c){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?c(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],c):c(f.moment)})(this,function(f){function c(a,b,e){if("m"===e)return b?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443";if("h"===e)return b?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443";var d=+a;b={ss:b?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":
"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:b?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",hh:b?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d":
"\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",dd:"\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",yy:"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"}[e].split("_");return a+" "+(1===d%10&&11!==d%100?b[0]:2<=d%10&&4>=d%10&&(10>d%100||20<=d%100)?b[1]:
b[2])}return f.defineLocale("be",{months:{format:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f \u043b\u044e\u0442\u0430\u0433\u0430 \u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430 \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430 \u0442\u0440\u0430\u045e\u043d\u044f \u0447\u044d\u0440\u0432\u0435\u043d\u044f \u043b\u0456\u043f\u0435\u043d\u044f \u0436\u043d\u0456\u045e\u043d\u044f \u0432\u0435\u0440\u0430\u0441\u043d\u044f \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430 \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430 \u0441\u043d\u0435\u0436\u043d\u044f".split(" "),
standalone:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c \u043b\u044e\u0442\u044b \u0441\u0430\u043a\u0430\u0432\u0456\u043a \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a \u0442\u0440\u0430\u0432\u0435\u043d\u044c \u0447\u044d\u0440\u0432\u0435\u043d\u044c \u043b\u0456\u043f\u0435\u043d\u044c \u0436\u043d\u0456\u0432\u0435\u043d\u044c \u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434 \u0441\u043d\u0435\u0436\u0430\u043d\u044c".split(" ")},
monthsShort:"\u0441\u0442\u0443\u0434 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430\u0441 \u0442\u0440\u0430\u0432 \u0447\u044d\u0440\u0432 \u043b\u0456\u043f \u0436\u043d\u0456\u0432 \u0432\u0435\u0440 \u043a\u0430\u0441\u0442 \u043b\u0456\u0441\u0442 \u0441\u043d\u0435\u0436".split(" "),weekdays:{format:"\u043d\u044f\u0434\u0437\u0435\u043b\u044e \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0443 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0443 \u0441\u0443\u0431\u043e\u0442\u0443".split(" "),
standalone:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),isFormat:/\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/},weekdaysShort:"\u043d\u0434 \u043f\u043d \u0430\u0442 \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
weekdaysMin:"\u043d\u0434 \u043f\u043d \u0430\u0442 \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0451\u043d\u043d\u044f \u045e] LT",nextDay:"[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",lastDay:"[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",nextWeek:function(){return"[\u0423] dddd [\u045e] LT"},
lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";case 1:case 2:case 4:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u0440\u0430\u0437 %s",past:"%s \u0442\u0430\u043c\u0443",s:"\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",m:c,mm:c,h:c,hh:c,d:"\u0434\u0437\u0435\u043d\u044c",dd:c,M:"\u043c\u0435\u0441\u044f\u0446",
MM:c,y:"\u0433\u043e\u0434",yy:c},meridiemParse:/\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,isPM:function(a){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(a)},meridiem:function(a,b,e){return 4>a?"\u043d\u043e\u0447\u044b":12>a?"\u0440\u0430\u043d\u0456\u0446\u044b":17>a?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0430\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,ordinal:function(a,
b){switch(b){case "M":case "d":case "DDD":case "w":case "W":return 2!==a%10&&3!==a%10||12===a%100||13===a%100?a+"-\u044b":a+"-\u0456";case "D":return a+"-\u0433\u0430";default:return a}},week:{dow:1,doy:7}})});