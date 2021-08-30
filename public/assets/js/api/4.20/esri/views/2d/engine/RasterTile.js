// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./RasterBitmap","./webgl/TiledDisplayObject"],function(h,k,m,f){f=function(d){function e(a,g,l,n=null){var b=d.call(this,a,g,l)||this;b.bitmap=new m.RasterBitmap(n,null,null);b.bitmap.coordScale=l;b.bitmap.once("isReady",()=>b.ready());return b}k._inheritsLoose(e,d);var c=e.prototype;c.destroy=function(){d.prototype.destroy.call(this);this.bitmap.destroy();this.stage=this.bitmap=null};c.getMemoryUsage=function(){return this.bitmap.getMemoryUsage()};
c.setTransform=function(a,g){d.prototype.setTransform.call(this,a,g);this.bitmap.transforms.dvs=this.transforms.dvs};c.onAttach=function(){this.bitmap.stage=this.stage};c.onDetach=function(){this.bitmap.stage=null};k._createClass(e,[{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(a){this.bitmap.stencilRef=a}}]);return e}(f.TiledDisplayObject);h.RasterTile=f;Object.defineProperty(h,"__esModule",{value:!0})});