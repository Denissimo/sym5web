// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver"],function(b,a){a={shaders:{vertexShader:a.resolveIncludes("fx/integrate.vert"),fragmentShader:a.resolveIncludes("fx/integrate.frag")},attributes:new Map([["a_position",0]])};b.integrateProgram=a;Object.defineProperty(b,"__esModule",{value:!0})});