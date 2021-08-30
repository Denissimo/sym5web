// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/uuid ../../../layers/support/BuildingFilterBlock ../../../layers/support/BuildingFilterModeSolid ../../../layers/support/BuildingFilterModeXRay".split(" "),function(c,g,l,h,m,n){function f(a){a="string"===typeof a?a:a.id;return!!a&&-1!==a.indexOf("__BUILDING_EXPLORER_FILTER__")}function k(a){return a.filter(b=>!!b).map(b=>`(${b})`).join(" AND ")}c.generateFilterId=function(){return`${l.generateUUID()}${"__BUILDING_EXPLORER_FILTER__"}`};c.getFilterBlockSolid=
function(a){return(a=k(a))?new h({filterExpression:a,filterMode:new m}):null};c.getFilterBlockXRay=function(a){return(a=k(a))?new h({filterExpression:a,filterMode:new n}):null};c.getValueFromFilters=function(a,b){for(const d of a.items)for(const e of d.filters.items)if(f(e)&&(a=b(e),g.isSome(a)))return a;return null};c.isBuildingExplorerFilter=f;c.setFilterOnLayers=function(a,b){g.isNone(b)||a.forEach(d=>{d.filters=d.filters.filter(e=>!f(e)).concat([b]);d.activeFilterId=b.id})};Object.defineProperty(c,
"__esModule",{value:!0})});