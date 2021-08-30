/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{isSymbol3D as o}from"../symbols.js";import m from"../core/Error.js";import r from"../symbols/WebStyleSymbol.js";import e from"../symbols/PointSymbol3D.js";import s from"../symbols/SimpleLineSymbol.js";import l from"../symbols/LineSymbol3D.js";import i from"../symbols/SimpleMarkerSymbol.js";import y from"../symbols/PictureMarkerSymbol.js";import t from"../symbols/SimpleFillSymbol.js";import b from"../symbols/PolygonSymbol3D.js";import f from"../symbols/TextSymbol.js";import n from"../symbols/LabelSymbol3D.js";function p(p,S=!1,a=!1,c=!0){if(!p)return{symbol:null};let j;if(o(p)||p instanceof r)j=p.clone();else if("cim"===p.type)j=e.fromCIMSymbol(p);else if(p instanceof s)j=l.fromSimpleLineSymbol(p);else if(p instanceof i)j=e.fromSimpleMarkerSymbol(p);else if(p instanceof y)j=e.fromPictureMarkerSymbol(p);else if(p instanceof t)j=b.fromSimpleFillSymbol(p);else{if(!(p instanceof f))return{error:new m("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${p.type||p.declaredClass}' is unsupported in 3D`,{symbol:p})};j=c?n.fromTextSymbol(p):e.fromTextSymbol(p)}if(S&&(j.id=p.id),a&&o(j))for(let o=0;o<j.symbolLayers.length;++o)j.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return{symbol:j}}export{p as t};
