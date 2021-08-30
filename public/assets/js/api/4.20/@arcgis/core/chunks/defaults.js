/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as s}from"../core/lang.js";import o from"../symbols/SimpleFillSymbol.js";import r from"../symbols/SimpleLineSymbol.js";import m from"../symbols/SimpleMarkerSymbol.js";import e from"../symbols/TextSymbol.js";import{d as a,a as l,b as t,c as n,e as f,f as i,g as p}from"./defaultsJSON.js";const S=m.fromJSON(a),c=r.fromJSON(l),u=o.fromJSON(t),b=e.fromJSON(n);function y(o){if(s(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return c;case"polygon":case"extent":return u}return null}const J=m.fromJSON(f),N=r.fromJSON(i),O=o.fromJSON(p);export{O as a,J as b,S as c,b as d,N as e,c as f,y as g,u as h};
