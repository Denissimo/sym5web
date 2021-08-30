// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../statistics/summaryStatisticsForAge","../statistics/support/ageUtils","../support/utils"],function(h,e,f,k,l){function m(a){const b=Math.abs(a.avg);let c=null;k.supportedAgeUnits.some(g=>{b>2*l.unitValueInDays[g]&&(c=g);return!!c});return c}function d(){d=h._asyncToGenerator(function*(a){var b={...a,unit:"days"};const c=yield f(b);if(null==c.avg)throw new e("age-unit:insufficient-info","'avg' statistics is invalid");a=m(c);if("days"===
a)return{unit:a,statistics:c};b.unit=a;b=yield f(b);if(null==b.avg)throw new e("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:a,statistics:b}});return d.apply(this,arguments)}return function(a){return d.apply(this,arguments)}});