/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{symbolTypes as e,symbolTypesRenderer as s,symbolTypesRenderer3D as o}from"../symbols.js";import{write as r}from"../symbols/support/jsonUtils.js";import t from"../symbols/Symbol.js";import p from"../symbols/PolygonSymbol3D.js";const i={types:s,json:{write:{writer:r},origins:{"web-scene":{types:o,write:{writer:r}}}}},l={types:{base:t,key:"type",typeMap:{"simple-fill":e.typeMap["simple-fill"],"picture-fill":e.typeMap["picture-fill"],"polygon-3d":e.typeMap["polygon-3d"]}},json:{write:{writer:r},origins:{"web-scene":{type:p,write:{writer:r}}}}};export{i as a,l as r};
