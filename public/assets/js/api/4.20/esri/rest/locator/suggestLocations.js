// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ../support/SuggestionCandidate ../support/SuggestLocationsParameters".split(" "),function(f,g,h,d,k,l){function e(){e=g._asyncToGenerator(function*(a,b,c){a=d.parseUrl(a);b=l.from(b);b={...b.toJSON(),f:"json"};b=d.encode({...a.query,...b});c=d.asValidOptions(b,c);return h(`${a.path}/suggest`,c).then(m)});return e.apply(this,arguments)}function m(a){({data:a}=a);if(!a)return[];({suggestions:a}=a);return a?a.map(b=>new k(b)):
[]}f.suggestLocations=function(a,b,c){return e.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0})});