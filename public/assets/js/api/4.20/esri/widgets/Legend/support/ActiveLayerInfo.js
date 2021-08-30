// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../kernel ../../../request ../../../symbols ../../../core/Accessor ../../../core/Collection ../../../core/Handles ../../../core/jsonMap ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/screenUtils ../../../core/urlUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/support/ExportImageParameters ../../../layers/support/fieldUtils ../../../renderers/support/jsonUtils ../../../renderers/support/rendererConversion ../../../renderers/visualVariables/support/SizeVariableLegendOptions ../../../symbols/support/cimSymbolUtils ../../../symbols/support/symbolUtils ../../../symbols/support/utils ./clusterUtils ./colorRampUtils ./heatmapRampUtils ./relationshipRampUtils ./sizeRampUtils ./utils ../../../symbols/SimpleMarkerSymbol ../../../symbols/SimpleFillSymbol".split(" "),
function(T,v,y,U,ea,V,x,fa,ha,ia,ja,ka,J,E,la,ma,F,z,Ka,La,na,oa,pa,qa,ra,sa,ta,D,ua,va,K,wa,W,O,xa,X,ya){function G(q){return"esri.renderers.SimpleRenderer"===q.declaredClass}function H(q){return"esri.renderers.ClassBreaksRenderer"===q.declaredClass}function P(q){return"esri.renderers.UniqueValueRenderer"===q.declaredClass}function Y(q){return"esri.renderers.HeatmapRenderer"===q.declaredClass}function Q(q){return"esri.renderers.PointCloudClassBreaksRenderer"===q.declaredClass}function R(q){return"esri.renderers.PointCloudStretchRenderer"===
q.declaredClass}function S(q){return"esri.renderers.PointCloudUniqueValueRenderer"===q.declaredClass}function Z(q){return"esri.renderers.DotDensityRenderer"===q.declaredClass}function aa(q){return"esri.layers.BuildingSceneLayer"===q.declaredClass}function za(q){q="authoringInfo"in q&&(null==q?void 0:q.authoringInfo);return"univariate-color-size"===(null==q?void 0:q.type)}function Aa(q){q="authoringInfo"in q&&(null==q?void 0:q.authoringInfo);return"univariate-color-size"===(null==q?void 0:q.type)&&
"above-and-below"===(null==q?void 0:q.univariateTheme)}const C=ka.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),L=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,Ba=new ja.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),Ca={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-3.4*1E39,
3.4*1E39],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]},M=new X({size:6,outline:{color:[128,128,128,.5],width:.5}}),Da=new ya({style:"solid"}),Ea=new X({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",size:15,outline:{width:1,color:[85,85,85,1]}});let I={};x=function(q){function N(b){b=q.call(this,b)||this;b._handles=new ia;b._hasColorRamp=!1;b._hasOpacityRamp=!1;b._hasSizeRamp=!1;b._webStyleSymbolCache=new Map;b._dotDensityUrlCache=new Map;b._scaleDrivenSizeVariable=null;b._hasClusterSizeVariable=!1;b.children=
new ha;b.layerView=null;b.layer=null;b.legendElements=[];b.parent=null;b.keepCacheOnDestroy=!1;b.respectLayerVisibility=!0;b.sublayerIds=[];b.title=null;b.view=null;return b}v._inheritsLoose(N,q);var l=N.prototype;l.initialize=function(){const b=()=>this.notifyChange("ready");this._handles.add([F.on(this,"children","change",a=>{const {added:c,removed:d}=a,e=this._handles;c.map(f=>{const g=`activeLayerInfo-ready-watcher-${f.layer.uid}`;e.add(F.init(f,"ready",b),g)});d.forEach(f=>e.remove(f.layer.uid));
b()})]);this.keepCacheOnDestroy||(I={})};l.destroy=function(){this._handles.destroy();this._scaleDrivenSizeVariable=this._dotDensityUrlCache=this._webStyleSymbolCache=this._handles=null;this.keepCacheOnDestroy||(I=null)};l.buildLegendElementsForFeatureCollections=function(){var b=v._asyncToGenerator(function*(a){a=a.map(c=>{if("esri.layers.FeatureLayer"===c.declaredClass)return this._getRendererLegendElements(c.renderer,{title:c.title});if(c.featureSet&&c.featureSet.features.length){var d=c.layerDefinition,
e=d&&d.drawingInfo;e=e&&qa.fromJSON(e.renderer);d=Ba.read(d.geometryType);return e?this._getRendererLegendElements(e,{title:c.name,geometryType:d}):(C.warn("drawingInfo not available!"),null)}return null});try{const c=[];yield E.eachAlways(a).then(d=>{d.forEach(({value:e})=>e&&c.push(...e))});this.legendElements=c;this.notifyChange("ready")}catch(c){C.warn("error while building legend for layer!",c)}});return function(a){return b.apply(this,arguments)}}();l.buildLegendElementsForRenderer=function(){var b=
v._asyncToGenerator(function*(a){try{this.legendElements=yield this._getRendererLegendElements(a),this.notifyChange("ready")}catch(c){C.warn("error while building legend for layer!",c)}});return function(a){return b.apply(this,arguments)}}();l.buildLegendElementsForTools=function(){var b=v._asyncToGenerator(function*(){var a=this;const c=this.layer;if("esri.layers.WMTSLayer"===c.declaredClass)this._constructLegendElementsForWMTSlayer();else if("esri.layers.WMSLayer"===c.declaredClass)yield this._constructLegendElementsForWMSSublayers();
else if(aa(c))yield this._constructLegendElementsForBuildingSceneLayer();else if("esri.layers.MapImageLayer"===c.declaredClass||"esri.layers.TileLayer"===c.declaredClass||aa(c))yield this._constructLegendElementsForSublayers();else{this._handles.remove("imageryLayers-watcher");var d="default";if("esri.layers.ImageryLayer"===c.declaredClass){var e,f;d=(null==c?void 0:null==(e=c.renderingRule)?void 0:e.functionName)||"default";e=null!=(f=c.bandIds)&&f.length?c.bandIds.join(""):"###";d=d+"_"+e}yield this._getLegendLayers(`${c.uid}-${d}`).then(function(){var g=
v._asyncToGenerator(function*(k){a.legendElements=[];a.notifyChange("ready");k=k.map(function(){var m=v._asyncToGenerator(function*(t){if("esri.layers.ImageryLayer"===c.declaredClass||"esri.layers.ImageryTileLayer"===c.declaredClass){const w=c.watch(["renderingRule","bandIds"],()=>E.debounce(v._asyncToGenerator(function*(){I["default"]=null;c.renderer?yield a.buildLegendElementsForRenderer(c.renderer):yield a.buildLegendElementsForTools()}))());a._handles.add(w,"imageryLayers-watcher")}(t=a._generateSymbolTableElementForLegendLayer(t))&&
t.infos.length&&("esri.layers.ImageryLayer"===c.declaredClass&&(t.title=c.title),a.legendElements.push(t));a.notifyChange("ready")});return function(t){return m.apply(this,arguments)}}());yield E.eachAlways(k)});return function(k){return g.apply(this,arguments)}}()).catch(g=>{C.warn("Request to server for legend has failed!",g)})}});return function(){return b.apply(this,arguments)}}();l._getParentLayerOpacity=function(b){let a=1;const c=b.parent;c&&"uid"in c&&(a=this._getParentLayerOpacity(c));return b.opacity*
a};l._isGroupActive=function(){const b=this.children;return b.length?b.some(a=>a.ready):!1};l._isScaleDrivenSizeVariable=function(b){if(b&&"size"!==b.type)return!1;const a=b.minSize,c=b.maxSize;return"object"===typeof a&&a?this._isScaleDrivenSizeVariable(a):"object"===typeof c&&c?this._isScaleDrivenSizeVariable(c):!!b.expression||L.test(b.valueExpression)};l._isLayerScaleDriven=function(b){if("minScale"in b&&0<b.minScale||"maxScale"in b&&0<b.maxScale)return!0;if("sublayers"in b&&b.sublayers)return b.sublayers.some(c=>
this._isLayerScaleDriven(c));const a=b.parent;if(!1===b.loaded&&a&&"esri.layers.MapImageLayer"===a.declaredClass&&"source"in b&&b.source&&"map-layer"===b.source.type)for(const c of a.sourceJSON.layers)if(c.id===b.source.mapLayerId&&(0<c.minScale||0<c.maxScale))return!0;return!1};l._constructLegendElementsForWMTSlayer=function(){this.legendElements=[];this._handles.remove("wmts-activeLayer-watcher");const b=this.layer.activeLayer;this._handles.add(F.watch(this.layer,"activeLayer",()=>this._constructLegendElementsForWMTSlayer()),
"wmts-activeLayer-watcher");if(b.styleId&&b.styles){let a=null;b.styles.some(c=>b.styleId===c.id?(a=c.legendUrl,!0):!1);a&&(this.legendElements=[{type:"symbol-table",title:b.title,infos:[{src:a,opacity:this.opacity}]}])}this.notifyChange("ready")};l._constructLegendElementsForWMSSublayers=function(){var b=v._asyncToGenerator(function*(){this.legendElements=[];this._handles.remove("wms-sublayers-watcher");const a=this.layer;let c=null;if(a.customParameters||a.customLayerParameters)c={...a.customParameters,
...a.customLayerParameters};this._handles.add(F.watch(this.layer,"sublayers",()=>this._constructLegendElementsForWMSSublayers()),"wms-sublayers-watcher");this.legendElements=yield this._generateLegendElementsForWMSSublayers(a.sublayers,c);this.notifyChange("ready")});return function(){return b.apply(this,arguments)}}();l._generateLegendElementsForWMSSublayers=function(){var b=v._asyncToGenerator(function*(a,c){const d=[];this._handles.add(a.on("change",()=>this._constructLegendElementsForWMSSublayers()),
"wms-sublayers-watcher");a=a.toArray();for(const e of a)a=e.watch(["title","visible","legendEnabled"],()=>this._constructLegendElementsForWMSSublayers()),this._handles.add(a,"wms-sublayers-watcher"),(!this.respectLayerVisibility||e.visible&&e.legendEnabled)&&(a=yield this._generateSymbolTableElementForWMSSublayer(e,c))&&a.infos.length&&d.unshift(a);return d});return function(a,c){return b.apply(this,arguments)}}();l._generateSymbolTableElementForWMSSublayer=function(){var b=v._asyncToGenerator(function*(a,
c){return!a.legendUrl&&a.sublayers?(c=(yield this._generateLegendElementsForWMSSublayers(a.sublayers,c)).filter(d=>d),{type:"symbol-table",title:a.title,infos:c}):this._generateSymbolTableElementForLegendUrl(a,c)});return function(a,c){return b.apply(this,arguments)}}();l._generateSymbolTableElementForLegendUrl=function(){var b=v._asyncToGenerator(function*(a,c){var d;let e=a.legendUrl;if(e){var f={type:"symbol-table",title:a.title||a.name||a.id&&a.id+"",infos:[]};c&&(e+="?"+ma.objectToQuery(c));
c=null;a=null==(d=a.layer)?void 0:d.opacity;try{if(c=(yield V(e,{responseType:"image"})).data)c.style.opacity=a}catch{}f.infos.push({src:e,preview:c,opacity:a});return f}});return function(a,c){return b.apply(this,arguments)}}();l._getLegendLayers=function(b,a){const c=I&&I[b];return c?Promise.resolve(c):this._legendRequest(a).then(d=>{d=d.layers;return I[b]=d})};l._legendRequest=function(b){var a=this.layer;b={f:"json",dynamicLayers:b};if("esri.layers.ImageryLayer"===a.declaredClass){var c=a.exportImageServiceParameters.renderingRule;
c&&(b.renderingRule=JSON.stringify(c.toJSON()));a.bandIds&&(b.bandIds=a.bandIds.join());if(a.raster||a.viewId){const {raster:d,viewId:e}=a;b={raster:d,viewId:e,...b}}}c=a.url.replace(/(\/)+$/,"");"version"in a&&10.01<=a.version?(a=c.indexOf("?"),c=-1<a?c.substring(0,a)+"/legend"+c.substring(a):c+"/legend"):(a=c.toLowerCase().indexOf("/rest/"),a=c.substring(0,a)+c.substring(a+5,c.length),c="https://utility.arcgis.com/sharing/tools/legend?soapUrl\x3d"+encodeURI(a)+"\x26returnbytes\x3dtrue");return V(c,
{query:b}).then(d=>d.data)};l._constructLegendElementsForBuildingSceneLayer=function(){var b=v._asyncToGenerator(function*(){this.legendElements=[];this._handles.remove("sublayers-watcher");const a=this.layer;this._handles.add(F.watch(a,"sublayers",()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher");try{this.legendElements=yield this._generateLegendElementsForBuildingSublayers(a.sublayers,this.opacity),this.notifyChange("ready")}catch(c){C.warn("Request to server for legend has failed!",
c)}});return function(){return b.apply(this,arguments)}}();l._generateLegendElementsForBuildingSublayers=function(){var b=v._asyncToGenerator(function*(a,c){let d=[];this._handles.add(a.on("change",()=>this._constructLegendElementsForBuildingSceneLayer()),"sublayers-watcher");a=a.toArray();for(const f of a)if(a=f.watch(["renderer","opacity","title","visible"],()=>this._constructLegendElementsForBuildingSceneLayer()),this._handles.add(a,"sublayers-watcher"),!this.respectLayerVisibility||f.visible){a=
f&&null!=f.opacity?f.opacity:null;var e=null!=a?a*c:c;"building-group"===f.type?(a={type:"symbol-table",title:f.title,infos:[]},e=yield this._generateLegendElementsForBuildingSublayers(f.sublayers,e),a.infos.push(...e),d=[a,...d]):f.renderer&&(d=[...yield this._getRendererLegendElements(f.renderer,{title:f.title,opacity:e,sublayer:f}),...d])}return d.filter(f=>!!f&&("infos"in f?0<f.infos.length:!0))});return function(a,c){return b.apply(this,arguments)}}();l._constructLegendElementsForSublayers=function(){var b=
v._asyncToGenerator(function*(){this.legendElements=[];this._handles.remove("sublayers-watcher");const a=this.layer;this._handles.add(F.watch(a,"sublayers",()=>this._constructLegendElementsForSublayers),"sublayers-watcher");try{this.legendElements=yield this._generateLegendElementsForSublayers(a.sublayers,this.opacity),this.notifyChange("ready")}catch(c){C.warn("Request to server for legend has failed!",c)}});return function(){return b.apply(this,arguments)}}();l._generateLegendElementsForSublayers=
function(){var b=v._asyncToGenerator(function*(a,c,d){const e=this.layer;let f=[];this._handles.add(a.on("change",()=>this._constructLegendElementsForSublayers()),"sublayers-watcher");a=a.toArray();!d&&this.sublayerIds&&this.sublayerIds.length&&(a=this.sublayerIds.map(g=>e.findSublayerById(g)).filter(Boolean));for(const g of a)if(a=g.watch("renderer, opacity, title, visible, legendEnabled",()=>this._constructLegendElementsForSublayers()),this._handles.add(a,"sublayers-watcher"),!this.respectLayerVisibility||
g.visible&&g.legendEnabled&&this._isSublayerInScale(g))a=g&&null!=g.opacity?g.opacity:null,a=null!=a?a*c:c,g.renderer&&!g.sublayers&&2<g.originIdOf("renderer")?(yield g.load(),f=[...yield this._getRendererLegendElements(g.renderer,{title:g.title,opacity:a,sublayer:g}),...f]):(a=yield this._generateSymbolTableElementForSublayer(g,a,d))&&f.unshift(a);return f.filter(g=>!!g&&("infos"in g?0<g.infos.length:!0))});return function(a,c,d){return b.apply(this,arguments)}}();l._generateSymbolTableElementForSublayer=
function(){var b=v._asyncToGenerator(function*(a,c,d){if(!d){d=new Map;var e=new oa.ExportImageParameters({layer:this.layer});const f=e.hasDynamicLayers?e.dynamicLayers:null;e.destroy();(yield this._getLegendLayers(f||`${this.layer.uid}-${a.id}-default`,f)).forEach(g=>d.set(g.layerId,g))}e=d.get(a.id);return!e&&a.sublayers?(c=yield this._generateLegendElementsForSublayers(a.sublayers,c,d),{type:"symbol-table",title:a.title,infos:c}):this._generateSymbolTableElementForLegendLayer(e,a,c)});return function(a,
c,d){return b.apply(this,arguments)}}();l._generateSymbolTableElementForLegendLayer=function(b,a,c){var d;if(!b||!b.legend||this.respectLayerVisibility&&!this._isLegendLayerInScale(b,a))return null;var e=null==a?void 0:a.renderer;let f=(null==a?void 0:a.title)||b.layerName;e&&(!a||2<(null==a?void 0:a.originIdOf("renderer")))&&(e=(null==a?void 0:a.title)||this._getRendererTitle(e,a))&&(f&&"string"!==typeof e&&"title"in e&&(e.title=f),f=e);const g={type:"symbol-table",title:f,legendType:b.legendType?
b.legendType:null,infos:[]},k=a?this._sanitizeLegendForSublayer(b.legend.slice(),a):b.legend;0<(null==(d=b.legendGroups)?void 0:d.length)?b.legendGroups.forEach(m=>{var t;const w={type:"symbol-table",title:m.heading,legendType:b.legendType?b.legendType:null,infos:this._generateSymbolTableElementInfosForLegendLayer(k.filter(h=>h.groupId===m.id),b.layerId,c)};0<(null==(t=w.infos)?void 0:t.length)&&g.infos.push(w)}):g.infos=this._generateSymbolTableElementInfosForLegendLayer(k,b.layerId,c);return 0<
g.infos.length?g:null};l._generateSymbolTableElementInfosForLegendLayer=function(b,a,c){return b.map(d=>{let e=d.url;if(d.imageData&&0<d.imageData.length)e=`data:image/png;base64,${d.imageData}`;else if(0!==e.indexOf("http"))e=ea.addTokenParameter(`${this.layer.url}/${a}/images/${e}`);else return null;return{label:d.label,src:e,opacity:null==c?this.opacity:c,width:d.width,height:d.height}}).filter(d=>!!d)};l._isSublayerInScale=function(b){const a=b.minScale||0;b=b.maxScale||0;return 0<a&&a<this.scale||
b>this.scale?!1:!0};l._isLegendLayerInScale=function(b,a){a=a||this.layer;let c=null,d=null,e=!0;!a.minScale&&0!==a.minScale||!a.maxScale&&0!==a.maxScale?(0===b.minScale&&a.tileInfo&&(c=a.tileInfo.lods[0].scale),0===b.maxScale&&a.tileInfo&&(d=a.tileInfo.lods[a.tileInfo.lods.length-1].scale)):(c=Math.min(a.minScale,b.minScale)||a.minScale||b.minScale,d=Math.max(a.maxScale,b.maxScale));if(0<c&&c<this.scale||d>this.scale)e=!1;return e};l._sanitizeLegendForSublayer=function(b,a){if("version"in this.layer&&
10.1>this.layer.version||0===b.length)return b;a=a.renderer;let c=null,d=null;b.some(e=>e.values)&&b.some((e,f)=>{e.values||(c=f,d=e,d.label||(d.label="others"));return null!=d});a?"unique-value"===a.type?d&&(b.splice(c,1),b.push(d)):"class-breaks"===a.type&&(d&&b.splice(c,1),b.reverse(),d&&b.push(d)):d&&(b.splice(c,1),b.push(d));return b};l._getRendererLegendElements=function(){var b=v._asyncToGenerator(function*(a,c={}){var d=this.view;d=G(a)||H(a)||P(a)||Y(a)||Z(a)?"2d"===d.type||ra.isSupportedRenderer3D(a):
"raster-stretch"===a.type||"raster-colormap"===a.type||"raster-shaded-relief"===a.type||Q(a)||R(a)||S(a)||"vector-field"===a.type;return d?Q(a)||R(a)||S(a)||"esri.renderers.PointCloudRGBRenderer"===a.declaredClass?this._constructPointCloudRendererLegendElements(a,c):Z(a)?this._constructDotDensityRendererLegendElements(a):this._constructRendererLegendElements(a,c):(C.warn(`Renderer of type '${a.type}' not supported!`),[])});return function(a){return b.apply(this,arguments)}}();l._getPointCloudRendererTitle=
function(b){return b.legendOptions&&b.legendOptions.title||b.field};l._constructPointCloudRendererLegendElements=function(b,a={}){a=a.title;const c=[];let d=null;var e=null;if(Q(b))d={type:"symbol-table",title:a||this._getPointCloudRendererTitle(b),infos:[]},b.colorClassBreakInfos.forEach(f=>{d.infos.unshift({label:f.label||f.minValue+" - "+f.maxValue,value:[f.minValue,f.maxValue],symbol:this._getAppliedCloneSymbol(M,f.color)})});else if(R(b)){e=b.stops;let f=null;if(e.length&&(1===e.length&&(f=e[0].color),
!f)){const g=e[0].value,k=e[e.length-1].value;null!=g&&null!=k&&(f=K.getColorFromPointCloudStops(g+(k-g)/2,e))}d={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(M,f||M.color)}]};e=K.getRampStopsForPointCloud(b.stops);e={type:"color-ramp",title:a||this._getPointCloudRendererTitle(b),infos:e,preview:D.renderColorRampPreviewHTML(e.map(g=>g.color))}}else S(b)&&(d={type:"symbol-table",title:a||this._getPointCloudRendererTitle(b),infos:[]},b.colorUniqueValueInfos.forEach(f=>
{d.infos.push({label:f.label||f.values.join(", "),value:f.values.join(", "),symbol:this._getAppliedCloneSymbol(M,f.color)})}));d&&d.infos.length&&c.push(d);e&&e.infos.length&&c.push(e);a=c.reduce((f,g)=>f.concat(g.infos),[]).filter(f=>!!f.symbol).map(f=>this._getSymbolPreview(f,this.opacity,{symbolConfig:{applyColorModulation:!!b.colorModulation}}));return E.eachAlways(a).then(()=>c)};l._getElementInfoForDotDensity=function(b,a){const {backgroundColor:c,outline:d,dotSize:e}=b,f=e+"-"+a+"-"+c+"-"+
(d&&JSON.stringify(d.toJSON())),g=this._dotDensityUrlCache;b=g.has(f)?g.get(f):D.renderDotDensityPreviewHTML(b,a);g.set(f,b);return{opacity:1,src:b.src,preview:b,width:b.width,height:b.height}};l._constructDotDensityRendererLegendElements=function(b){const a=b.calculateDotValue(this.view.scale),c={type:"symbol-table",title:{value:a&&Math.round(a),unit:b.legendOptions&&b.legendOptions.unit||""},infos:[]};b.attributes.forEach(d=>{const e=this._getElementInfoForDotDensity(b,d.color);e.label=d.label||
d.valueExpressionTitle||d.field;c.infos.push(e)});return Promise.resolve([c])};l._constructRendererLegendElements=function(){var b=v._asyncToGenerator(function*(a,c={}){const {title:d,sublayer:e}=c,f=e||this.layer;a=yield this._loadRenderer(a);this._hasSizeRamp=this._hasOpacityRamp=this._hasColorRamp=!1;this._scaleDrivenSizeVariable=null;const g=(yield this._getVisualVariableLegendElements(a,f))||[],k={type:"symbol-table",title:d||this._getRendererTitle(a,f),infos:[]};let m=null,t=!1;const w=new Set;
if(za(a)){var h=d,n=Aa(a)?"univariate-above-and-below-ramp":"univariate-color-size-ramp",u=g.findIndex(p=>"color-ramp"===p.type);u=g.splice(u,1)[0];var r=g.findIndex(p=>"size-ramp"===p.type);r=g.splice(r,1)[0];var B=[];u&&(h=u.title,B.push(u));r&&(h=r.title,B.push(r));0<B.length&&g.push({type:n,title:h,infos:B})}else if(Y(a))h=wa.getHeatmapRampStops(a),g.push({type:"heatmap-ramp",title:d,infos:h,preview:D.renderColorRampPreviewHTML(h.map(p=>p.color))});else if(P(a)){if((n=a&&a.authoringInfo)&&"relationship"===
n.type){const {focus:p,numClasses:A,field1:ba,field2:ca}=n;if(A&&ba&&ca){u=[ba,ca];n=W.getRotationAngleForFocus(p)||0;for(h of u){const {field:Fa,normalizationField:da,label:Ga}=h;u=Ga||{field:this._getFieldAlias(Fa,f),normField:da&&this._getFieldAlias(da,f)};r=Ea.clone();r.angle=n;k.infos.push({label:u,symbol:r});w.add(r);n+=90}h=W.getRelationshipRampElement({focus:p,numClasses:A,infos:a.uniqueValueInfos});g.unshift(h)}}else{const p=a.field;a.uniqueValueInfos.forEach(A=>{A.symbol&&k.infos.push({label:A.label||
this._getDomainName(p,A.value,f)||A.value,value:A.value,symbol:A.symbol})})}a.defaultSymbol&&(k.infos.push({label:a.defaultLabel||"others",symbol:a.defaultSymbol}),t=!0)}else if(H(a))m=this._isUnclassedRenderer(a),m&&this._hasSizeRamp||(a.classBreakInfos.forEach(p=>{p.symbol&&k.infos.unshift({label:p.label||(m?null:p.minValue+" - "+p.maxValue),value:[p.minValue,p.maxValue],symbol:p.symbol})}),m&&(k.title=null),this._updateInfosforClassedSizeRenderer(a,k.infos)),a.defaultSymbol&&!m&&(k.infos.push({label:a.defaultLabel||
"others",symbol:a.defaultSymbol}),t=!0);else if("raster-stretch"===a.type)if("esri.layers.ImageryTileLayer"===this.layer.declaredClass&&"Map"===(null==(r=this.layer)?void 0:null==(B=r.raster)?void 0:B.tileType))this._getServerSideLegend();else if("esri.layers.ImageryTileLayer"===this.layer.declaredClass||"esri.layers.WCSLayer"===this.layer.declaredClass)h=this._constructTileImageryStretchRendererElements(a),"stretch-ramp"===h.type?g.push(h):k.infos=h;else{h=this.layer;a.statistics&&a.statistics.length?
(r=null!=a.statistics[0].min?a.statistics[0].min:a.statistics[0][0],u=null!=a.statistics[0].max?a.statistics[0].max:a.statistics[0][1]):(r=null==(u=a)?void 0:u.outputMin,u=null==(n=a)?void 0:n.outputMax);n=[];n=J.unwrap(h.renderingRule?yield h.generateRasterInfo(h.renderingRule):h.serviceRasterInfo);const p=n.keyProperties.BandProperties;1===n.bandCount?(r=null!=r?r:n.statistics&&n.statistics[0].min,u=null!=u?u:n.statistics&&n.statistics[0].max,r||u?g.push(this._getStretchLegendElements(a,{min:r,
max:u})):this._getServerSideLegend()):h.bandIds&&1===h.bandIds.length?(r=null!=r?r:n.statistics&&n.statistics[h.bandIds[0]].min,u=null!=u?u:n.statistics&&n.statistics[h.bandIds[0]].max,r||u?g.push(this._getStretchLegendElements(a,{min:r,max:u})):this._getServerSideLegend()):3<=n.bandCount?p&&p.length>=n.bandCount?h.bandIds&&3===h.bandIds.length?(n=h.bandIds.map(A=>p[A].BandName),k.infos=this._createSymbolTableElementMultiBand(n)):"lerc"===h.format?(n=[0,1,2].map(A=>p[A].BandName),k.infos=this._createSymbolTableElementMultiBand(n)):
this._getServerSideLegend():"lerc"===h.format?(n=["band1","band2","band3"],k.infos=this._createSymbolTableElementMultiBand(n)):this._getServerSideLegend():this._getServerSideLegend()}else if("raster-colormap"===a.type)a.colormapInfos.forEach(p=>{k.infos.push({label:p.label,value:p.value,symbol:this._getAppliedCloneSymbol(Da,p.color)})});else if(G(a)){h=a.symbol;switch(c.geometryType){case "point":h="pointSymbol"in f&&f.pointSymbol;break;case "polyline":h="lineSymbol"in f&&f.lineSymbol;break;case "polygon":h=
"polygonSymbol"in f&&f.polygonSymbol}a.symbol&&!this._hasSizeRamp&&k.infos.push({label:a.label,symbol:h})}else"vector-field"===a.type?(a.outputUnit&&(this.title="("+a.toJSON().outputUnit+")"),k.title=a.attributeField,h=a.getClassBreakInfos(),null!=h&&h.length?h.forEach(p=>{k.infos.push({label:p.minValue+" - "+p.maxValue,symbol:p.symbol})}):k.infos.push({label:a.attributeField,symbol:a.getDefaultSymbol()})):"raster-shaded-relief"===a.type&&g.push(this._getStretchLegendElements(a,{min:0,max:255}));
h=a.defaultSymbol;!h||t||G(a)||m&&!this._hasColorRamp&&!this._hasSizeRamp&&!this._hasOpacityRamp||g.push({type:"symbol-table",infos:[{label:a.defaultLabel||"others",symbol:h}]});k.infos.length&&g.unshift(k);const Ha=null==c.opacity?this.opacity:c.opacity,Ia=this._isTallSymbol("visualVariables"in a&&a.visualVariables),Ja="esri.layers.ImageryLayer"===this.layer.declaredClass||"esri.layers.ImageryTileLayer"===this.layer.declaredClass;c=g.reduce((p,A)=>p.concat(this._getAllInfos(A)),[]).filter(p=>!(!p||
!p.symbol)).map(p=>this._getSymbolPreview(p,Ha,{applyScaleDrivenSize:!w.has(p.symbol),symbolConfig:{isTall:Ia,isSquareFill:Ja}}));a=null;yield E.eachAlways(c);return g});return function(a){return b.apply(this,arguments)}}();l._getServerSideLegend=function(){setTimeout(()=>this.buildLegendElementsForTools(),0)};l._getAllInfos=function(b){const a=null==b?void 0:b.infos;return a?a.reduce((c,d)=>c.concat(this._getAllInfos(d)),[]):[b]};l._constructTileImageryStretchRendererElements=function(b){function a(t){var w;
const h=(null!=e&&null!=(w=e.bandIds)&&w.length?e.bandIds:Array.from(Array(Math.min(f.bandCount,3)).keys())).map(n=>t&&t[n]&&t[n].BandName||"band"+(n+1));3>h.length?h.push(h[1]):3<h.length&&h.splice(3);return h}var c,d;const e=this.layer,f=e.rasterInfo,g=f.bandCount||b.statistics.length;var k,m=[];m=f.keyProperties&&f.keyProperties.BandProperties;(k=null!=b&&null!=(c=b.statistics)&&c.length?b.statistics:null==f?void 0:f.statistics)?(c=void 0!==k[0].min?k[0].min:k[0][0],k=k[0].max||k[0][1]):(k=Ca[e.rasterInfo.pixelType.toLowerCase()],
c=k[0],k=k[1]);e.hasStandardTime()&&(c=e.getStandardTimeValue(c),k=e.getStandardTimeValue(k));if(1===f.bandCount||1===(null==(d=e.bandIds)?void 0:d.length))return this._getStretchLegendElements(b,{min:c,max:k});m=m&&m.length>=g?a(m):a();return this._createSymbolTableElementMultiBand(m)};l._getStretchLegendElements=function(b,a){b=K.getStrectchRampStops(b.colorRamp,a);return{type:"stretch-ramp",title:"",infos:b,preview:D.renderColorRampPreviewHTML(b.map(c=>c.color))}};l._createSymbolTableElementMultiBand=
function(b){const a=[],c=["red","green","blue"];b.forEach((d,e)=>{a.push({label:{colorName:c[e],bandName:d},src:xa.RGB_IMG_SOURCE[e],opacity:1})});return a};l._updateInfosforClassedSizeRenderer=function(b,a){const c=b.authoringInfo&&"class-breaks-size"===b.authoringInfo.type,d=b.classBreakInfos.some(e=>ua.isVolumetricSymbol(e.symbol));if(c&&d){const e=O.REAL_WORLD_MAX_SIZE;b=b.classBreakInfos.length;const f=(e-O.REAL_WORLD_MIN_SIZE)/(1<b?b-1:b);a.forEach((g,k)=>{g.size=e-f*k})}};l._isTallSymbol=function(b){let a=
!1,c=!1;if(b)for(let d=0;d<b.length&&(!a||!c);d++){const e=b[d];"size"===e.type&&("height"===e.axis&&(a=!0),"width-and-depth"===e.axis&&(c=!0))}return a&&c};l._getSymbolPreview=function(){var b=v._asyncToGenerator(function*(a,c,d){var e=null==a.size&&this._hasSizeRamp?la.px2pt(22):a.size;this._scaleDrivenSizeVariable&&null!=d&&d.applyScaleDrivenSize&&({getSize:e}=yield new Promise(function(f,g){T(["../../../renderers/visualVariables/support/visualVariableUtils"],f,g)}),e=e(this._scaleDrivenSizeVariable,
null,{view:this.view.type,scale:this.scale,shape:"simple-marker"===a.symbol.type?a.symbol.style:null}));return D.renderPreviewHTML(a.symbol,{size:e,opacity:c,scale:!1,symbolConfig:null==d?void 0:d.symbolConfig}).then(f=>{a.preview=f;return a}).catch(()=>{a.preview=null;return a})});return function(a,c,d){return b.apply(this,arguments)}}();l._loadRenderer=function(){var b=v._asyncToGenerator(function*(a){var c,d;const e=[];var f=this.layer;a=a.clone();this._hasClusterSizeVariable=!1;const g="visualVariables"in
a&&(null==(c=a.visualVariables)?void 0:c.some(m=>"size"===m.type&&"outline"!==m.target&&!L.test(m.valueExpression)));if(a&&"visualVariables"in a&&!g&&"featureReduction"in f&&"cluster"===(null==(d=f.featureReduction)?void 0:d.type)&&(c=J.unwrap(va.getClusterSizeVariable(this.layerView._effectiveRenderer,this.view)))){f=f.featureReduction;if("clusterMinSize"in f&&"clusterMaxSize"in f){const {clusterMinSize:m,clusterMaxSize:t}=f;c.legendOptions=new sa({showLegend:m!==t})}a.visualVariables=(a.visualVariables||
[]).concat([c]);this._hasClusterSizeVariable=!0}const k=yield this._getMedianColor(a);if(H(a)||P(a))f=(a.classBreakInfos||a.uniqueValueInfos).map(m=>this._fetchSymbol(m.symbol,k).then(t=>{m.symbol=t}).catch(()=>{m.symbol=null})),Array.prototype.push.apply(e,f);e.push(this._fetchSymbol(a.symbol||a.defaultSymbol,a.defaultSymbol?null:k).then(m=>{this._applySymbolToRenderer(a,m,G(a))}).catch(()=>{this._applySymbolToRenderer(a,null,G(a))}));return E.eachAlways(e).then(()=>a)});return function(a){return b.apply(this,
arguments)}}();l._applySymbolToRenderer=function(b,a,c){c?b.symbol=a:b.defaultSymbol=a};l._getMedianColor=function(){var b=v._asyncToGenerator(function*(a){if(!("visualVariables"in a&&a.visualVariables))return null;a=a.visualVariables.find(e=>"color"===e.type);if(!a)return null;var c=null,d=null;if(a.stops){if(1===a.stops.length)return a.stops[0].color;c=a.stops[0].value;d=a.stops[a.stops.length-1].value}c+=(d-c)/2;({getColor:d}=yield new Promise(function(e,f){T(["../../../renderers/visualVariables/support/visualVariableUtils"],
e,f)}));return d(a,c)});return function(a){return b.apply(this,arguments)}}();l._fetchSymbol=function(b,a){if(!b)return Promise.reject();if("web-style"===b.type){var c=b.portal;c=b.name+"-"+b.styleName+"-"+b.styleUrl+"-"+(c&&c.url)+"-"+(c&&c.user&&c.user.username);const d=this._webStyleSymbolCache;d.has(c)||("2d"===this.view.type?d.set(c,b.fetchCIMSymbol()):d.set(c,b.fetchSymbol()));return d.get(c).then(e=>this._getAppliedCloneSymbol(e,a)).catch(()=>{C.warn("Fetching web-style failed!");return Promise.reject()})}return Promise.resolve(this._getAppliedCloneSymbol(b,
a))};l._getAppliedCloneSymbol=function(b,a){if(!b||!a)return b;b=b.clone();const c=a&&a.toRgba();-1<b.type.indexOf("3d")?this._applyColorTo3dSymbol(b,c):"cim"===b.type?ta.applyCIMSymbolColor(b,a):b.color&&(b.color=new U(c||b.color));return b};l._applyColorTo3dSymbol=function(b,a){a&&b.symbolLayers.forEach(c=>{c&&(c.material||(c.material={}),c.material.color=new U(a))})};l._getVisualVariableLegendElements=function(){var b=v._asyncToGenerator(function*(a,c){var d=this;if(!("visualVariables"in a&&a.visualVariables)||
"vector-field"===a.type)return null;var e=a.visualVariables,f=[];const g=[],k=[];for(const w of e)"color"===w.type?f.push(w):"size"===w.type?g.push(w):"opacity"===w.type&&k.push(w);e=[...f,...g,...k];let m;if(0===f.length&&H(a)&&a.classBreakInfos&&1===a.classBreakInfos.length)var t=(t=a.classBreakInfos[0])&&t.symbol;0===f.length&&G(a)&&(t=a.symbol);t&&(-1<t.type.indexOf("3d")?(f=t.symbolLayers.getItemAt(0),"water"===f.type?J.isSome(f.color)&&(m=f.color):J.isSome(f.material)&&J.isSome(f.material.color)&&
(m=f.material.color)):t.url||(m=t.color));return(yield Promise.all(e.map(function(){var w=v._asyncToGenerator(function*(h){if(!h.legendOptions||!1!==h.legendOptions.showLegend){const u=d._getRampTitle(h,c);let r=null;var n="getField"in c&&c.getField&&c.getField(h.field);n=n&&pa.isDateField(n);"color"===h.type?(h=yield K.getRampStops(h,null,n),r={type:"color-ramp",title:u,infos:h,preview:D.renderColorRampPreviewHTML(h.map(B=>B.color))},d._hasColorRamp||(d._hasColorRamp=!(null==r.infos||!r.infos.length))):
"size"===h.type&&"outline"!==h.target?L.test(h.valueExpression)?d._hasClusterSizeVariable||(d._scaleDrivenSizeVariable=h):(r={type:"size-ramp",title:d._hasClusterSizeVariable?d._getClusterTitle(h):u,infos:yield O.getRampStops(a,h,yield d._getMedianColor(a),d.scale,d.view.type,n)},d._hasSizeRamp||(d._hasSizeRamp=!(null==r.infos||!r.infos.length))):"opacity"===h.type&&(h=yield K.getRampStops(h,m,n),r={type:"opacity-ramp",title:u,infos:h,preview:D.renderColorRampPreviewHTML(h.map(B=>B.color))},d._hasOpacityRamp||
(d._hasOpacityRamp=!(null==r.infos||!r.infos.length)));return r&&r.infos?r:null}});return function(h){return w.apply(this,arguments)}}()))).filter(w=>!!w)});return function(a,c){return b.apply(this,arguments)}}();l._getDomainName=function(b,a,c){return b&&"function"!==typeof b?(c=(b="getField"in c&&c.getField&&c.getField(b))&&"getFieldDomain"in c&&c.getFieldDomain?c.getFieldDomain(b.name):null)&&"coded-value"===c.type?c.getName(a):null:null};l._getClusterTitle=function(b){var a=this.layer;b=b.field;
if("featureReduction"in a&&a.featureReduction&&"cluster"===a.featureReduction.type&&(a=a.featureReduction,a=(a="popupTemplate"in a&&a.popupTemplate)&&a.fieldInfos))for(const c of a)if(c.fieldName===b)return"cluster_count"===b?c.label||{showCount:!0}:c.label;return{showCount:!0}};l._getRampTitle=function(b,a){let c=b.field,d=b.normalizationField,e=!1,f=!1,g=!1;var k=null;c="function"===typeof c?null:c;d="function"===typeof d?null:d;k=b.legendOptions&&b.legendOptions.title;if(null==k)if(b.valueExpressionTitle)k=
b.valueExpressionTitle;else{if("renderer"in a&&a.renderer&&"authoringInfo"in a.renderer&&a.renderer.authoringInfo&&a.renderer.authoringInfo.visualVariables)for(b=a.renderer.authoringInfo.visualVariables,k=0;k<b.length;k++){const m=b[k];if("color"===m.type){if("ratio"===m.style){e=!0;break}if("percent"===m.style){f=!0;break}if("percent-of-total"===m.style){g=!0;break}}}k={field:c&&this._getFieldAlias(c,a),normField:d&&this._getFieldAlias(d,a),ratio:e,ratioPercent:f,ratioPercentTotal:g}}return k};l._getRendererTitle=
function(b,a){if(b.legendOptions&&b.legendOptions.title)return b.legendOptions.title;if(b.valueExpressionTitle)return b.valueExpressionTitle;let c=b.field,d=null,e=null;H(b)&&(d=b.normalizationField,e="percent-of-total"===b.normalizationType);c="function"===typeof c?null:c;d="function"===typeof d?null:d;b=null;if(c||d)b={field:c&&this._getFieldAlias(c,a),normField:d&&this._getFieldAlias(d,a),normByPct:e};return b};l._getFieldAlias=function(b,a){var c="popupTemplate"in a&&a.popupTemplate;c=c&&c.fieldInfos;
let d=null;c&&c.some(f=>b===f.fieldName?(d=f,!0):!1);c=null;"getField"in a&&a.getField?c=a.getField(b):"fieldsIndex"in a&&a.fieldsIndex&&(c=a.fieldsIndex.get(b));a=d||c;let e=null;a&&(e=d&&d.label||c&&c.alias||"name"in a&&a.name||"fieldName"in a&&a.fieldName);return e};l._isUnclassedRenderer=function(b){const a=b.visualVariables;let c=!1;H(b)&&b.classBreakInfos&&1===b.classBreakInfos.length&&a&&(c=b.field?a.some(d=>!(!d||b.field!==d.field||(b.normalizationField||d.normalizationField)&&b.normalizationField!==
d.normalizationField)):!!a.length);return c};v._createClass(N,[{key:"opacity",get:function(){var b;const a=this.layer.opacity,c=null==(b=this.parent)?void 0:b.opacity;b=(b=this.layer.parent)&&"uid"in b?this._getParentLayerOpacity(b):null;return null!=c?c*a:null!=b?b*a:a}},{key:"ready",get:function(){return null===this.layer?!0:0<this.children.length?this._isGroupActive():0<this.legendElements.length}},{key:"scale",get:function(){return this.view&&this.view.scale}},{key:"isScaleDriven",get:function(){var b=
this.layer;if(null===b)return!1;if("featureReduction"in b&&b.featureReduction&&"cluster"===b.featureReduction.type)return!0;if("renderer"in b&&b.renderer){if("dot-density"===b.renderer.type)return!0;const a=b.get("renderer.valueExpression");if(L.test(a))return!0;if(b=b.get("renderer.visualVariables"))return b.some(c=>this._isScaleDrivenSizeVariable(c))}return this._isLayerScaleDriven(this.layer)}},{key:"version",get:function(){return this._get("version")+1}}]);return N}(fa);y.__decorate([z.property()],
x.prototype,"children",void 0);y.__decorate([z.property()],x.prototype,"layerView",void 0);y.__decorate([z.property()],x.prototype,"layer",void 0);y.__decorate([z.property()],x.prototype,"legendElements",void 0);y.__decorate([z.property({readOnly:!0})],x.prototype,"opacity",null);y.__decorate([z.property()],x.prototype,"parent",void 0);y.__decorate([z.property({readOnly:!0,dependsOn:[]})],x.prototype,"ready",null);y.__decorate([z.property()],x.prototype,"keepCacheOnDestroy",void 0);y.__decorate([z.property()],
x.prototype,"respectLayerVisibility",void 0);y.__decorate([z.property({readOnly:!0})],x.prototype,"scale",null);y.__decorate([z.property()],x.prototype,"sublayerIds",void 0);y.__decorate([z.property({readOnly:!0})],x.prototype,"isScaleDriven",null);y.__decorate([z.property()],x.prototype,"title",void 0);y.__decorate([z.property({readOnly:!0,dependsOn:["ready"],value:0})],x.prototype,"version",null);y.__decorate([z.property()],x.prototype,"view",void 0);return x=y.__decorate([na.subclass("esri.widgets.Legend.support.ActiveLayerInfo")],
x)});