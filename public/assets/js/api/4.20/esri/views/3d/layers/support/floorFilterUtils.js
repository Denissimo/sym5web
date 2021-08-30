// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.getFloorFilterClause=function(a){var b=a.layer;if("floorInfo"in b&&b.floorInfo){a=a.view.floors;if(!a||!a.length)return null;a=a.filter(c=>""!==c).map(c=>`'${c}'`);a.push("''");b=b.floorInfo.floorField;return`${b} IN (${a.join(", ")}) OR ${b} IS NULL`}return null};Object.defineProperty(d,"__esModule",{value:!0})});