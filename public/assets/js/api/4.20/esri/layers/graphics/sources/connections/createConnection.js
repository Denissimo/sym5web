// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./GeoEventConnection","./WebSocketConnection"],function(b,c,d){b.createConnection=function(a,e,f,g,h,k,l){const m=0===a.path.indexOf("wss://")||0===a.path.indexOf("ws://");a={source:a,sourceSpatialReference:e,spatialReference:f,geometryType:g,filter:h,maxReconnectionAttempts:k,maxReconnectionInterval:l};return m?new d.WebSocketConnection(a):new c(a)};Object.defineProperty(b,"__esModule",{value:!0})});