// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(h,f,m,n,k,e,x,y,z,p,q,r,t,u){const v={remove(){},pause(){},resume(){}};
e=function(l){function g(){return l.apply(this,arguments)||this}h._inheritsLoose(g,l);var c=g.prototype;c.initialize=function(){this.graphicsView=new t({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new r(this.view.featuresTilingScheme)})};c.attach=function(){this.container.addChild(this.graphicsView.container);this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")};c.detach=function(){this.container.removeAllChildren();
this.graphicsView.destroy();this.handles.remove("graphicslayerview2d")};c.hitTest=function(a,b){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(a,b)};c.fetchPopupFeatures=function(){var a=h._asyncToGenerator(function*(b){if(this.graphicsView)return this.graphicsView.searchFeatures(b).then(d=>d.filter(w=>!!w.popupTemplate))});return function(b){return a.apply(this,arguments)}}();c.update=function(a){this.graphicsView.processUpdate(a)};c.moveStart=function(){};
c.viewChange=function(){this.graphicsView.viewChange()};c.moveEnd=function(){};c.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};c.highlight=function(a){let b;"number"===typeof a?b=[a]:a instanceof m?b=[a.uid]:Array.isArray(a)&&0<a.length?b="number"===typeof a[0]?a:a.map(d=>d&&d.uid):n.isCollection(a)&&(b=a.map(d=>d&&d.uid).toArray());b=b.filter(d=>null!=d);if(!b.length)return v;this.graphicsView.addHighlight(b);return{remove:()=>this.graphicsView.removeHighlight(b)}};
c.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)};return g}(q.LayerView2DMixin(u));f.__decorate([k.property()],e.prototype,"graphicsView",void 0);f.__decorate([k.property()],e.prototype,"updating",void 0);return e=f.__decorate([p.subclass("esri.views.2d.layers.GraphicsLayerView2D")],e)});