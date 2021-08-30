// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../geometry/support/buffer/BufferView ../../support/buffer/InterleavedLayout ../lib/GLMaterial ../lib/Material ../lib/OrderIndependentTransparency ../lib/Util ./internal/bufferWriterUtils ./internal/DefaultBufferWriter ./internal/MaterialUtil ../shaders/PatternTechnique".split(" "),function(y,r,n,A,B,z,C,p,t,D,E,u){let I=function(m){function l(a){a=m.call(this,a,F)||this;a.supportsEdges=!0;a._vertexAttributeLocations=u.patternVertexAttributeLocations;
a.techniqueConfig=new u.PatternTechniqueConfiguration;return a}r._inheritsLoose(l,m);var e=l.prototype;e.getTechniqueConfig=function(a,b){this.techniqueConfig.output=a;this.techniqueConfig.cullFace=this.params.cullFace;this.techniqueConfig.vertexColors=this.params.vertexColors;this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled;this.techniqueConfig.polygonOffset=this.params.polygonOffset;this.techniqueConfig.writeDepth=this.params.writeDepth;this.techniqueConfig.style=this.params.style;
this.techniqueConfig.patternSpacing=this.params.patternSpacing;this.techniqueConfig.lineWidth=this.params.lineWidth;this.techniqueConfig.draped=this.params.draped;this.techniqueConfig.transparencyPassType=b?b.transparencyPassType:3;this.techniqueConfig.enableOffset=b?b.camera.relativeElevation<C.OITPolygonOffsetLimit:!0;this.techniqueConfig.multipassTerrainEnabled=b?b.multipassTerrainEnabled:!1;this.techniqueConfig.cullAboveGround=b?b.cullAboveGround:!1;return this.techniqueConfig};e.getPassParameters=
function(){return this.params};e.intersect=function(a,b,c,k,d,g,f){E.intersectTriangleGeometry(a,b,k,d,g,void 0,f)};e.getGLMaterial=function(a){return 0===a.output||7===a.output||4===a.output||1===a.output&&this.params.writeLinearDepth?new G(a):void 0};e.createBufferWriter=function(){const a=A.newLayout().vec3f("position").vec4u8("color").vec4f("uvMapSpace");this.params.draped||a.mat3f("boundingRect");return new H(a)};return l}(z.Material),G=function(m){function l(a){a=m.call(this,a)||this;a.updateParameters();
return a}r._inheritsLoose(l,m);var e=l.prototype;e.updateParameters=function(a){this._technique=this._techniqueRep.releaseAndAcquire(u.PatternTechnique,this._material.getTechniqueConfig(this._output,a),this._technique)};e.beginSlot=function(a){return 4===this._output?3===a:a===(this._technique.configuration.transparent?this._technique.configuration.writeDepth?5:8:3)};e._updateOccludeeState=function(a){a.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:a.hasOccludees})};
e.ensureParameters=function(a){0!==this._output&&7!==this._output||this._updateOccludeeState(a);this.updateParameters(a)};e.bind=function(a){this._technique.bindPass(this._material.getPassParameters(),a)};e.getPipelineState=function(a,b){return this._technique.getPipelineState(b)};return l}(B),H=function(m){function l(){return m.apply(this,arguments)||this}r._inheritsLoose(l,m);var e=l.prototype;e.write=function(a,b,c,k){for(const g of this.vertexBufferLayout.fieldNames){const f=b.vertexAttributes.get(g),
h=b.indices.get(g);if(f&&h)switch(g){case "position":p.assert(3===f.size);var d=c.getField(g,n.BufferViewVec3f);d&&t.writePosition(h,f.data,a.transformation,d,k);break;case "color":p.assert(3===f.size||4===f.size);(d=c.getField(g,n.BufferViewVec4u8))&&t.writeColor(h,f.data,f.size,d,k);break;case "uvMapSpace":p.assert(4===f.size);(d=c.getField(g,n.BufferViewVec4f))&&t.writeBufferVec4(h,f.data,d,k);break;case "boundingRect":p.assert(9===f.size),(d=c.getField(g,n.BufferViewMat3f))&&this.writeBoundingRect(h,
f.data,a.transformation,d,k)}}};e.writeBoundingRect=function(a,b,c,k,d){const g=k.typedBuffer;k=k.typedBufferStride;const f=a.length;d*=k;for(let v=0;v<f;++v){const q=9*a[v];var h=b[q];const w=b[q+1],x=b[q+2];g[d]=c[0]*h+c[4]*w+c[8]*x+c[12];g[d+1]=c[1]*h+c[5]*w+c[9]*x+c[13];g[d+2]=c[2]*h+c[6]*w+c[10]*x+c[14];for(h=3;9>h;++h)g[d+h]=b[q+h];d+=k}};return l}(D.DefaultBufferWriter);const F={color:[1,1,1,1],writeDepth:!0,writeLinearDepth:!1,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,
sceneHasOcludees:!1,style:2,patternSpacing:10,lineWidth:1,draped:!0,...z.materialParametersDefaults};y.PatternMaterial=I;Object.defineProperty(y,"__esModule",{value:!0})});