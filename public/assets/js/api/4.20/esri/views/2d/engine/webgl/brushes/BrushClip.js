// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec4f32 ../Utils ./WGLBrush ../shaders/BackgroundPrograms ../../../../webgl/programUtils".split(" "),function(h,k,l,m,n,p,q){return function(f){function d(){var a=f.apply(this,arguments)||this;a._color=l.fromValues(0,1,0,1);return a}h._inheritsLoose(d,f);var e=d.prototype;e.dispose=function(){this._program&&this._program.dispose()};e.prepareState=function({context:a}){a.setStencilTestEnabled(!0);
a.setBlendingEnabled(!1);a.setFaceCullingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255);a.setStencilFunction(519,0,255)};e.draw=function(a,c){const {context:b,state:g}=a;a=m.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:5122}]});c=c.getVAO(b,g,a.attributes,a.bufferLayouts);k.isNone(c.indexBuffer)||(this._program||(this._program=q.createProgram(b,p.background)),b.useProgram(this._program),this._program.setUniform2fv("u_coord_range",
[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",g.displayMat3),b.bindVAO(c),b.drawElements(4,c.indexBuffer.size,5125,0),b.bindVAO())};return d}(n)});