// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../symbols ../../core/Error ../Symbol3D ../WebStyleSymbol ./symbolConversion".split(" "),function(e,g,f,h,k,l){function m(a,c,b){if(!a)return null;if(!(!b||"web-scene"!==b.origin||a instanceof h||a instanceof k)){const d="cim"!==a.type?l.to3D(a):{symbol:null,error:new f("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:a})};if(d.symbol)return d.symbol.write(c,b);b.messages&&b.messages.push(new f("symbol:unsupported",`Symbols of type '${a.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,
{symbol:a,context:b,error:d.error}));return null}return b&&"web-map"===b.origin&&"web-style"===a.type?(b.messages&&b.messages.push(new f("symbol:unsupported",`Symbols of type '${a.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:a,context:b})),null):a.write(c,b)}e.fromJSON=function(a,c){return g.readSymbol(a,null,c)};e.write=function(a,c,b,d){(a=m(a,{},d))&&(c[b]=a)};Object.defineProperty(e,"__esModule",{value:!0})});