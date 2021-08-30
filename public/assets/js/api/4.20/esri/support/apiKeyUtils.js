// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/urlUtils"],function(b,d){const e=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];b.isApiKey=function(a){return a&&4<a.length&&a.startsWith("AAPK")};b.supportsApiKey=function(a){const c=d.getOrigin(a,!0);return c&&c.endsWith(".arcgis.com")&&!e.includes(c)&&!a.endsWith("/sharing/rest/generateToken")};Object.defineProperty(b,"__esModule",{value:!0})});