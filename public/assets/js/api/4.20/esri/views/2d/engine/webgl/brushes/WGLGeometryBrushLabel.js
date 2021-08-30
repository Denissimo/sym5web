// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(t,u,v,w,x){return function(p){function g(){return p.apply(this,arguments)||this}t._inheritsLoose(g,p);var h=g.prototype;h.dispose=function(){};h.getGeometryType=function(){return u.WGLGeometryType.LABEL};h.drawGeometry=function(c,d,k,a){const {context:e,painter:q,state:l,rendererInfo:f}=c,b=x.LabelMaterialKey.load(k.materialKey),m=b.mapAligned?1:0;if(m||!(1<=
Math.abs(d.key.level-Math.round(100*c.displayLevel)/100))){var {bufferLayouts:r,attributes:n}=v.createProgramDescriptor(b.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_glyphData",count:4,
type:5121},{location:7,name:"a_vertexOffset",count:2,type:5122},{location:8,name:"a_texCoords",count:2,type:5123}]});a=q.materialManager.getMaterialProgram(c,b,"materials/label",n,a);c.context.setStencilFunction(514,0,255);e.useProgram(a);this._setSharedUniforms(a,c,d);q.textureManager.bindTextures(e,a,b);var y=1===m?l.displayViewMat3:l.displayMat3;b.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",f.vvSizeMinMaxValue);b.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",f.vvSizeScaleStopsValue);
b.vvSizeFieldStops&&(d=f.getSizeVVFieldStops(d.key.level),a.setUniform1fv("u_vvSizeFieldStopsValues",d.values),a.setUniform1fv("u_vvSizeFieldStopsSizes",d.sizes));b.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",f.vvSizeUnitValueToPixelsRatio);a.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254));a.setUniform1f("u_mapAligned",m);a.setUniformMatrix3fv("u_displayMat3",y);a.setUniform1f("u_opacity",1);a.setUniform2fv("u_screenSize",c.state.size);a.setUniform1f("u_isHalo",
1);k.draw(e,r,n);a.setUniform1f("u_isHalo",0);k.draw(e,r,n);e.setStencilTestEnabled(!0);e.setBlendingEnabled(!0)}};return g}(w)});