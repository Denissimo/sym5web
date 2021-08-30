// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){let a=function(){};a.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:0}};a.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:0}};a.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:0},"line-cap":{type:"enum",values:["butt","round","square"],default:0},"line-join":{type:"enum",values:["bevel","round","miter"],default:2},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",
default:1.05}};a.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:0},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:0},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:"center left right top bottom top-left top-right bottom-left bottom-right".split(" "),
default:0},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:2},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",
default:!1},"text-anchor":{type:"enum",values:"center left right top bottom top-left top-right bottom-left bottom-right".split(" "),default:0},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:2},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",
default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:2},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase",
"lowercase"],default:0},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[0]}};a.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:0}};a.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}};a.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,
1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:0}};a.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",
minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:0},"line-width":{type:"number",minimum:0,default:1}};a.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",
default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:0},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",
minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:0}};a.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,
default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}};a.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},
"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:0}};b.StyleDefinition=a;Object.defineProperty(b,"__esModule",{value:!0})});