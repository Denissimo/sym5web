// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers"],function(f){return function(){function d(a,c,b){this.pixelBlock=a;this.extent=c;this.originalPixelBlock=b}var e=d.prototype;e.render=function(a){var c=this.pixelBlock;if(c){var b=this.filter({pixelBlock:c});c=b.pixelBlock.getAsRGBA();b=a.createImageData(b.pixelBlock.width,b.pixelBlock.height);b.data.set(c);a.putImageData(b,0,0)}};e.getRenderedRasterPixels=function(){const a=this.filter({pixelBlock:this.pixelBlock});return{width:a.pixelBlock.width,
height:a.pixelBlock.height,renderedRasterPixels:new Uint8Array(a.pixelBlock.getAsRGBA().buffer)}};f._createClass(d,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}}]);return d}()});