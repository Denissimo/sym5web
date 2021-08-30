// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/asyncUtils","../../../../core/promiseUtils","./Graphics3DCalloutSymbolLayerFactory","./Graphics3DSymbol"],function(g,m,h,n,p){return function(d){function f(a,b,c){a=d.call(this,a,b,c)||this;a.calloutSymbolLayer=null;a.symbol.hasVisibleCallout()&&(a.calloutSymbolLayer=n.make(a.symbol,b));return a}g._inheritsLoose(f,d);var e=f.prototype;e.doLoad=function(){var a=g._asyncToGenerator(function*(b){const c=this.calloutSymbolLayer?
m.result(this.calloutSymbolLayer.load()):null;try{yield d.prototype.doLoad.call(this,b)}catch(q){var k;null==(k=this.calloutSymbolLayer)?void 0:k.abortLoad();throw q;}if(h.isAborted(b)){var l;null==(l=this.calloutSymbolLayer)?void 0:l.abortLoad();throw h.createAbortError();}c&&(yield c)});return function(b){return a.apply(this,arguments)}}();e.destroy=function(){d.prototype.destroy.call(this);this.calloutSymbolLayer&&this.calloutSymbolLayer.destroy()};e.createGraphics3DGraphic=function(a,b){b=d.prototype.createGraphics3DGraphic.call(this,
a,b);this.calloutSymbolLayer&&(a=this.createCalloutGraphic(a))&&b.addAuxiliaryGraphic(a);return b};e.globalPropertyChanged=function(a,b){return d.prototype.globalPropertyChanged.call(this,a,b)?this.calloutSymbolLayer?this.calloutSymbolLayer.globalPropertyChanged(a,b,c=>this._getCalloutGraphicLayer(c)):!0:!1};e.updateGeometry=function(a,b){const c=d.prototype.updateGeometry.call(this,a,b);return c&&this.calloutSymbolLayer&&(a=this._getCalloutGraphicLayer(a))?this.calloutSymbolLayer.updateGeometry(a,
b):c};e.createCalloutGraphic=function(a){const b=a.renderingInfo;a.renderingInfo={renderer:b.renderer,symbol:b.symbol,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null};return this.calloutSymbolLayer.createGraphics3DGraphic(a)};e._getCalloutGraphicLayer=function(a){for(const b of a._auxiliaryGraphics)if(b.graphics3DSymbolLayer===this.calloutSymbolLayer)return b};return f}(p)});