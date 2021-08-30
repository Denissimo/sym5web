/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(o){const n=o.layer;if("floorInfo"in n&&n.floorInfo){const r=o.view.floors;if(!r||!r.length)return null;const l=r.filter((o=>""!==o)).map((o=>`'${o}'`));l.push("''");const f=n.floorInfo.floorField;return`${f} IN (${l.join(", ")}) OR ${f} IS NULL`}return null}export{o as g};
