// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../../../webgl/RenderingContext"],function(b,d,e){b.HeaderComment=function(c,a){a=d.glsl`
  /*
  *  ${a.name}
  *  ${0===a.output?"RenderOutput: Color":1===a.output?"RenderOutput: Depth":3===a.output?"RenderOutput: Shadow":2===a.output?"RenderOutput: Normal":4===a.output?"RenderOutput: Highlight":""}
  */
  `;e.webglValidateShadersEnabled()&&(c.fragment.code.add(a),c.vertex.code.add(a))};Object.defineProperty(b,"__esModule",{value:!0})});