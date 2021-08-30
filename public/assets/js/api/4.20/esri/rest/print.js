// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../config ../kernel ../request ../core/Error ../core/jsonMap ../core/maybe ../core/screenUtils ../core/urlUtils ../geometry/Polygon ../renderers/visualVariables/support/visualVariableUtils ./geoprocessor/execute ./geoprocessor/submitJob ./support/fileFormat ./support/layoutTemplate ./support/printTaskUtils ./support/PrintTemplate ./support/Query ../support/apiKeyUtils".split(" "),function(A,u,ea,C,fa,qa,ha,E,z,B,ra,sa,ta,ua,va,wa,q,xa,ya,za){function K(){K=
u._asyncToGenerator(function*(a,b,d){const c=L(a);let e=D.get(c);return Promise.resolve().then(()=>{if(e)return{data:e.gpMetadata};e={gpServerUrl:c,is11xService:!1,legendLayerNameMap:[],legendLayers:[]};return fa(c,{query:{f:"json"}})}).then(g=>{e.gpMetadata=g.data;e.cimVersion=e.gpMetadata.cimVersion;e.is11xService=!!e.cimVersion;D.set(c,e);return ia(b,e)}).then(g=>{const f=ja(e);let l;const h=m=>"sync"===f?m.results&&m.results[0]&&m.results[0].value:l.fetchResultData("Output_File",null,d).then(n=>
n.value);return"async"===f?ua.submitJob(a,g,null,d).then(m=>{l=m;return m.waitForJobCompletion({interval:b.updateDelay}).then(h)}):ta.execute(a,g,null,d).then(h)})});return K.apply(this,arguments)}function M(){M=u._asyncToGenerator(function*(a){a=L(a);a=D.get(a);return ja(a)});return M.apply(this,arguments)}function ia(a,b){return N.apply(this,arguments)}function N(){N=u._asyncToGenerator(function*(a,b){b=b||{is11xService:!1,legendLayerNameMap:[],legendLayers:[]};var d=a.template||new xa;null==d.showLabels&&
(d.showLabels=!0);var c=d.exportOptions;let e;const g=wa.toJSON(d.layout);c&&(e={dpi:c.dpi},"map_only"===g.toLowerCase()||""===g)&&(e.outputSize=[c.width,c.height]);c=d.layoutOptions;let f;if(c){let h;if("Miles"===c.scalebarUnit||"Kilometers"===c.scalebarUnit){var l="Kilometers";h="Miles"}else if("Meters"===c.scalebarUnit||"Feet"===c.scalebarUnit)l="Meters",h="Feet";f={titleText:c.titleText,authorText:c.authorText,copyrightText:c.copyrightText,customTextElements:c.customTextElements,scaleBarOptions:{metricUnit:ka.toJSON(l),
metricLabel:la[l],nonMetricUnit:ka.toJSON(h),nonMetricLabel:la[h]}}}l=null;c&&c.legendLayers&&(l=c.legendLayers.map(h=>{b.legendLayerNameMap[h.layerId]=h.title;const m={id:h.layerId};h.subLayerIds&&(m.subLayerIds=h.subLayerIds);return m}));c=yield Aa(a,d,b);if(c.operationalLayers){const h=/[\u4E00-\u9FFF\u0E00-\u0E7F\u0900-\u097F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/,m=/[\u0600-\u06FF]/,n=p=>{const w=p.text,k=(p=p.font)&&p.family&&p.family.toLowerCase();w&&p&&("arial"===k||"arial unicode ms"===
k)&&(p.family=h.test(w)?"Arial Unicode MS":"Arial","normal"!==p.style&&m.test(w)&&(p.family="Arial Unicode MS"))},r=()=>{throw new qa("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap");};c.operationalLayers.forEach(p=>{var w,k,x;null!=(w=p.featureCollection)&&w.layers?p.featureCollection.layers.forEach(t=>{var v,ma,na,oa;null!=(v=t.layerDefinition)&&null!=(ma=v.drawingInfo)&&null!=(na=ma.renderer)&&na.symbol&&(v=t.layerDefinition.drawingInfo.renderer,
"esriTS"===v.symbol.type?n(v.symbol):"CIMSymbolReference"!==v.symbol.type||b.is11xService||r());null!=(oa=t.featureSet)&&oa.features&&t.featureSet.features.forEach(F=>{F.symbol&&("esriTS"===F.symbol.type?n(F.symbol):"CIMSymbolReference"!==F.symbol.type||b.is11xService||r())})}):!b.is11xService&&null!=(k=p.layerDefinition)&&null!=(x=k.drawingInfo)&&x.renderer&&JSON.stringify(p.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&r()})}a.outSpatialReference&&(c.mapOptions.spatialReference=
a.outSpatialReference.toJSON());Object.assign(c,{exportOptions:e,layoutOptions:f||{}});Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:b.legendLayers.slice()}});b.legendLayers.length=0;D.set(b.gpServerUrl,b);d={Web_Map_as_JSON:JSON.stringify(c),Format:va.toJSON(d.format),Layout_Template:g};a.extraParameters&&Object.assign(d,a.extraParameters);return d});return N.apply(this,arguments)}function Aa(a,b,d){return O.apply(this,arguments)}function O(){O=u._asyncToGenerator(function*(a,
b,d){var c=a.view;let e=c.spatialReference;const g={operationalLayers:yield Ba(c,b,d)};a=d.ssExtent||a.extent||c.extent;e&&e.isWrappable&&(a=a.clone()._normalize(!0),e=a.spatialReference);g.mapOptions={extent:a&&a.toJSON(),spatialReference:e&&e.toJSON(),showAttribution:b.attributionVisible};d.ssExtent=null;c.background&&(g.background=c.background.toJSON());c.rotation&&(g.mapOptions.rotation=-c.rotation);b.scalePreserved&&(g.mapOptions.scale=b.outScale||c.scale);c.timeExtent&&(b=E.isSome(c.timeExtent.start)?
c.timeExtent.start.getTime():null,c=E.isSome(c.timeExtent.end)?c.timeExtent.end.getTime():null,g.mapOptions.time=[b,c]);return g});return O.apply(this,arguments)}function L(a){const b=a.lastIndexOf("/GPServer/");0<b&&(a=a.slice(0,b+9));return a}function Ba(a,b,d){return P.apply(this,arguments)}function P(){P=u._asyncToGenerator(function*(a,b,d){const c=[],e={layerView:null,printTemplate:b,view:a};let g=0;b.scalePreserved&&(g=b.outScale||a.scale);var f=q.getVisibleLayerViews(a,g);for(const l of f){f=
l.layer;if(!f.loaded||q.isGroupLayer(f))continue;let h;e.layerView=l;if(h=q.isBingMapsLayer(f)?{culture:f.culture,key:f.key,type:`BingMaps${"aerial"===f.style?"Aerial":"hybrid"===f.style?"Hybrid":"Road"}`}:q.isCSVLayer(f)?yield Ca(f,e,d):q.isFeatureLayer(f)?yield Da(f,e,d):q.isGeoJSONLayer(f)?yield Ea(f,e,d):q.isGraphicsLayer(f)?yield Fa(f,e,d):q.isImageryLayer(f)?Ga(f,d):q.isKMLLayer(f)?yield Ha(f,e,d):q.isMapImageLayer(f)?Ia(f,e,d):q.isMapNotesLayer(f)?yield Ja(e,d):q.isOpenStreetMapLayer(f)?{type:"OpenStreetMap"}:
q.isStreamLayer(f)?yield Ka(f,e,d):q.isTileLayer(f)?La(f):q.isVectorTileLayer(f)?yield Ma(f,e,d):q.isWebTileLayer(f)?Na(f):q.isWMSLayer(f)?Oa(f):q.isWMTSLayer(f)?Pa(f):yield Q(f,e,d))Array.isArray(h)?c.push(...h):(h.id=f.id,h.title=d.legendLayerNameMap[f.id]||f.title,h.opacity=f.opacity,h.minScale=f.minScale||0,h.maxScale=f.maxScale||0,c.push(h))}g&&c.forEach(l=>{l.minScale=0;l.maxScale=0});a.graphics&&a.graphics.length&&(a=yield y(null,a.graphics,b,d))&&c.push(a);return c});return P.apply(this,arguments)}
function Ca(a,b,d){return R.apply(this,arguments)}function R(){R=u._asyncToGenerator(function*(a,{layerView:b,printTemplate:d},c){c.legendLayers&&c.legendLayers.push({id:a.id});if(c.is11xService)c={type:"CSV"},a.write(c,{origin:"web-map"}),delete c.popupInfo,delete c.layerType,c.showLabels=d.showLabels&&a.labelsVisible;else return b=yield G(b),y(a,b,d,c);return c});return R.apply(this,arguments)}function y(a,b,d,c){return S.apply(this,arguments)}function S(){S=u._asyncToGenerator(function*(a,b,d,
c){let e;const g=q.createPolygonLayer(),f=q.createPolylineLayer(),l=q.createPointLayer(),h=q.createMultipointLayer(),m=q.createPointLayer();m.layerDefinition.name="textLayer";delete m.layerDefinition.drawingInfo;if(a){"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass?g.layerDefinition.name=f.layerDefinition.name=l.layerDefinition.name=h.layerDefinition.name=c.legendLayerNameMap[a.id]||a.get("arcgisProps.title")||a.title:"esri.layers.GraphicsLayer"===a.declaredClass&&
(b=a.graphics.items);if(a.renderer){var n=a.renderer.toJSON();g.layerDefinition.drawingInfo.renderer=n;f.layerDefinition.drawingInfo.renderer=n;l.layerDefinition.drawingInfo.renderer=n;h.layerDefinition.drawingInfo.renderer=n}if(d.showLabels&&a.labelsVisible&&"function"===typeof a.write){var r,p;if(n=null==(r=a.write({},{origin:"web-map"}).layerDefinition)?void 0:null==(p=r.drawingInfo)?void 0:p.labelingInfo)e=!0,g.layerDefinition.drawingInfo.labelingInfo=n,f.layerDefinition.drawingInfo.labelingInfo=
n,l.layerDefinition.drawingInfo.labelingInfo=n,h.layerDefinition.drawingInfo.labelingInfo=n}}null!=a&&a.renderer||e||(delete g.layerDefinition.drawingInfo,delete f.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo,delete h.layerDefinition.drawingInfo);r=null==a?void 0:a.fieldsIndex;p=null==a?void 0:a.renderer;if(r){if(p&&"function"===typeof p.collectRequiredFields){var w=new Set;yield p.collectRequiredFields(w,r);w=Array.from(w)}r=r.fields.map(t=>t.toJSON());g.layerDefinition.fields=
r;f.layerDefinition.fields=r;l.layerDefinition.fields=r;h.layerDefinition.fields=r}r=b&&b.length;let k;for(p=0;p<r;p++)if(n=b[p]||b.getItemAt(p),!1!==n.visible&&n.geometry&&(k=n.toJSON(),k.hasOwnProperty("popupTemplate")&&delete k.popupTemplate,k.geometry&&k.geometry.z&&delete k.geometry.z,!k.symbol||!k.symbol.outline||"esriCLS"!==k.symbol.outline.type||c.is11xService)){!c.is11xService&&k.symbol&&k.symbol.outline&&k.symbol.outline.color&&k.symbol.outline.color[3]&&(k.symbol.outline.color[3]=255);
var x=a&&a.renderer&&("valueExpression"in a.renderer&&a.renderer.valueExpression||"hasVisualVariables"in a.renderer&&a.renderer.hasVisualVariables());if(!k.symbol&&a&&a.renderer&&x&&!c.is11xService){x=a.renderer;const t=yield x.getSymbolAsync(n);if(!t)continue;k.symbol=t.toJSON();"hasVisualVariables"in x&&x.hasVisualVariables()&&q.applyVisualVariables(k.symbol,{renderer:x,graphic:n,symbol:t})}k.symbol&&(k.symbol.angle||delete k.symbol.angle,H(k.symbol)?k.symbol=yield I(k.symbol,c):k.symbol.text&&
delete k.attributes);if((!d||!d.forceFeatureAttributes)&&w&&w.length){const t={};w.forEach(v=>{k.attributes&&k.attributes.hasOwnProperty(v)&&(t[v]=k.attributes[v])});k.attributes=t}"polygon"===n.geometry.type?g.featureSet.features.push(k):"polyline"===n.geometry.type?f.featureSet.features.push(k):"point"===n.geometry.type?k.symbol&&k.symbol.text?m.featureSet.features.push(k):l.featureSet.features.push(k):"multipoint"===n.geometry.type?h.featureSet.features.push(k):"extent"===n.geometry.type&&(k.geometry=
ra.fromExtent(n.geometry).toJSON(),g.featureSet.features.push(k))}a=[g,f,h,l,m].filter(t=>0<t.featureSet.features.length);for(const t of a)b=t.featureSet.features.every(v=>v.symbol),!b||d&&d.forceFeatureAttributes||t.featureSet.features.forEach(v=>{delete v.attributes}),b&&delete t.layerDefinition.drawingInfo,t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.renderer&&(yield pa(t.layerDefinition.drawingInfo.renderer,c));return a.length?{featureCollection:{layers:a},showLabels:e}:null});
return S.apply(this,arguments)}function Da(a,b,d){return T.apply(this,arguments)}function T(){T=u._asyncToGenerator(function*(a,b,d){var c,e;d.legendLayers&&d.legendLayers.push({id:a.id});var g=a.renderer;if(a.featureReduction||g&&"dot-density"===g.type&&(!d.is11xService||2.6>parseFloat(d.cimVersion)))return Q(a,b,d);const {layerView:f,printTemplate:l,view:h}=b;b=g&&("valueExpression"in g&&g.valueExpression||"hasVisualVariables"in g&&g.hasVisualVariables());const m="feature-layer"!==(null==(c=a.source)?
void 0:c.type)&&"ogc-feature"!==(null==(e=a.source)?void 0:e.type);if(!d.is11xService&&b||a.featureReduction||m||!g||"field"in g&&null!=g.field&&("string"!==typeof g.field||!a.getField(g.field)))g=yield G(f),c=yield y(a,g,l,d);else{var n,r;c=a.write();c={id:c.id,title:c.title,opacity:c.opacity,minScale:c.minScale,maxScale:c.maxScale,url:c.url,layerDefinition:c.layerDefinition};c.showLabels=l.showLabels&&a.labelsVisible;J(c,a);null!=(n=c.layerDefinition)&&null!=(r=n.drawingInfo)&&r.renderer&&(delete c.layerDefinition.minScale,
delete c.layerDefinition.maxScale,yield pa(c.layerDefinition.drawingInfo.renderer,d),"visualVariables"in g&&g.visualVariables&&g.visualVariables[0]&&(a=g.visualVariables[0],"size"===a.type&&a.maxSize&&"number"!==typeof a.maxSize&&a.minSize&&"number"!==typeof a.minSize&&(a=sa.getSizeRangeAtScale(a,h.scale),c.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=a.minSize,c.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=a.maxSize)))}return c});return T.apply(this,arguments)}
function Ea(a,b,d){return U.apply(this,arguments)}function U(){U=u._asyncToGenerator(function*(a,{layerView:b,printTemplate:d},c){c.legendLayers&&c.legendLayers.push({id:a.id});b=yield G(b);return y(a,b,d,c)});return U.apply(this,arguments)}function Fa(a,b,d){return V.apply(this,arguments)}function V(){V=u._asyncToGenerator(function*(a,{printTemplate:b},d){return y(a,null,b,d)});return V.apply(this,arguments)}function Ga(a,b){b.legendLayers&&b.legendLayers.push({id:a.id});const d={bandIds:a.bandIds,
compressionQuality:a.compressionQuality,format:a.format,interpolation:a.interpolation};if(a.mosaicRule||a.definitionExpression)d.mosaicRule=a.exportImageServiceParameters.mosaicRule.toJSON();if(a.renderingRule||a.renderer)if(b.is11xService)a.renderingRule&&(d.renderingRule=a.renderingRule.toJSON()),a.renderer&&(d.layerDefinition=d.layerDefinition||{},d.layerDefinition.drawingInfo=d.layerDefinition.drawingInfo||{},d.layerDefinition.drawingInfo.renderer=a.renderer.toJSON());else if(b=a.exportImageServiceParameters.combineRendererWithRenderingRule())d.renderingRule=
b.toJSON();J(d,a);return d}function Ha(a,b,d){return W.apply(this,arguments)}function W(){W=u._asyncToGenerator(function*(a,b,d){const c=b.printTemplate;if(d.is11xService)return d={type:"kml"},a.write(d,{origin:"web-map"}),delete d.layerType,d.url=B.normalize(a.url),d;{const e=[];b=b.layerView;b.allVisibleMapImages.forEach((g,f)=>{f={id:`${a.id}_image${f}`,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||0,opacity:a.opacity,extent:g.extent};"data:image/png;base64,"===g.href.substr(0,
22)?f.imageData=g.href.substr(22):f.url=g.href;e.push(f)});b=[...b.allVisiblePoints.items,...b.allVisiblePolylines.items,...b.allVisiblePolygons.items];d={id:a.id,...yield y(null,b,c,d)};e.push(d);return e}});return W.apply(this,arguments)}function Ia(a,{view:b},d){let c;const e={id:a.id,subLayerIds:[]};let g=[];const f=b.scale,l=h=>{var m=0===f;const n=0===h.minScale||f<=h.minScale,r=0===h.maxScale||f>=h.maxScale;h.visible&&(m||n&&r)&&(h.sublayers?h.sublayers.forEach(l):(m=h.toExportImageJSON(),
g.unshift({id:h.id,name:h.title,layerDefinition:{drawingInfo:m.drawingInfo,definitionExpression:m.definitionExpression,source:m.source}}),e.subLayerIds.push(h.id)))};a.sublayers&&a.sublayers.forEach(l);g.length&&(g=g.map(({id:h,name:m,layerDefinition:n})=>({id:h,name:m,layerDefinition:n})),c={layers:g,visibleLayers:a.capabilities.exportMap.supportsDynamicLayers?void 0:e.subLayerIds},J(c,a),d.legendLayers.push(e));return c}function Ja(a,b){return X.apply(this,arguments)}function X(){X=u._asyncToGenerator(function*({layerView:a,
printTemplate:b},d){const c=[];a=a.layer;if(E.isSome(a.featureCollections))for(var e of a.featureCollections){var g=yield y(e,e.source,b,d);g&&c.push(...g.featureCollection.layers)}else if(E.isSome(a.sublayers))for(g of a.sublayers)(e=yield y(null,g.graphics,b,d))&&c.push(...e.featureCollection.layers);return{featureCollection:{layers:c}}});return X.apply(this,arguments)}function Q(a,b,d){return Y.apply(this,arguments)}function Y(){Y=u._asyncToGenerator(function*(a,{printTemplate:b,view:d},c){const e=
{type:"image"};a={format:"png",ignoreBackground:!0,layers:[a],rotation:0};const g=c.ssExtent||d.extent.clone();let f=96,l=!0,h=!0;if(b.exportOptions){const m=b.exportOptions;0<m.dpi&&(f=m.dpi);0<m.width&&(l=m.width%2===d.width%2);0<m.height&&(h=m.height%2===d.height%2)}"map-only"!==b.layout||!b.scalePreserved||b.outScale&&b.outScale!==d.scale||96!==f||l&&h||(a.area={x:0,y:0,width:d.width,height:d.height},l||--a.area.width,h||--a.area.height,c.ssExtent||(b=d.toMap(z.createScreenPoint(a.area.width,
a.area.height)),g.ymin=b.y,g.xmax=b.x,c.ssExtent=g));e.extent=g.clone()._normalize(!0).toJSON();d=yield d.takeScreenshot(a);({data:d}=B.dataComponents(d.dataUrl));e.imageData=d;return e});return Y.apply(this,arguments)}function Ka(a,b,d){return Z.apply(this,arguments)}function Z(){Z=u._asyncToGenerator(function*(a,{layerView:b,printTemplate:d},c){c.legendLayers&&c.legendLayers.push({id:a.id});b=yield G(b);return y(a,b,d,c)});return Z.apply(this,arguments)}function La(a){const b={customParameters:a.customParameters};
J(b,a);return b}function Ma(a,b,d){return aa.apply(this,arguments)}function aa(){aa=u._asyncToGenerator(function*(a,b,d){if(d.is11xService&&a.serviceUrl&&a.styleUrl){const c=C.id&&C.id.findCredential(a.styleUrl),e=C.id&&C.id.findCredential(a.serviceUrl);if(!c&&!e||"2.1.0"!==d.cimVersion)return b={type:"VectorTileLayer"},b.styleUrl=B.normalize(a.styleUrl),c&&(b.token=c.token),e&&e.token!==b.token&&(b.additionalTokens=[{url:a.serviceUrl,token:e.token}]),b}return Q(a,b,d)});return aa.apply(this,arguments)}
function Na(a){const b={type:"WebTiledLayer",urlTemplate:a.urlTemplate.replace(/\${/g,"{"),credits:a.copyright};a.subDomains&&0<a.subDomains.length&&(b.subDomains=a.subDomains);return b}function Oa(a){let b;const d=[],c=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(c):e.name&&d.unshift(e.name))};a.sublayers&&a.sublayers.forEach(c);d.length&&(b={type:"wms",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,transparentBackground:a.imageTransparency,visibleLayers:d,url:B.normalize(a.url),
version:a.version});return b}function Pa(a){const b=a.activeLayer;return{type:"wmts",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,format:b.imageFormat,layer:b.id,style:b.styleId,tileMatrixSet:b.tileMatrixSetId,url:B.normalize(a.url)}}function J(a,b){if(b.url)if(a.url=B.normalize(a.url||b.url),"apiKey"in b&&b.apiKey)a.token=b.apiKey;else if(ea.apiKey&&za.supportsApiKey(b.url))a.token=ea.apiKey;else{var d,c;a.token=null==(d=C.id)?void 0:null==(c=d.findCredential(b.url))?
void 0:c.token}}function I(a,b){return ba.apply(this,arguments)}function ba(){ba=u._asyncToGenerator(function*(a,b){b.canvas||(b.canvas=document.createElement("canvas"));b.canvas.width=1024;b.canvas.height=1024;b=b.canvas.getContext("2d");var d;if(a.path){var c=new Path2D(a.path);c.closePath();b.fillStyle=Array.isArray(a.color)?`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`:"rgb(0,0,0)";b.fill(c);var e=q.getContextBoundingBox(b);if(!e)return null;b.clearRect(0,0,1024,1024);const g=
z.pt2px(a.size)/Math.max(e.width,e.height);b.scale(g,g);const f=1024/g;b.translate(f/2-e.width/2-e.x,f/2-e.height/2-e.y);Array.isArray(a.color)&&b.fill(c);null!=(d=a.outline)&&d.width&&Array.isArray(a.outline.color)&&(d=a.outline,b.lineWidth=z.pt2px(d.width)/g,b.lineJoin="round",b.strokeStyle=`rgba(${d.color[0]},${d.color[1]},${d.color[2]},${d.color[3]/255})`,b.stroke(c),e.width+=b.lineWidth,e.height+=b.lineWidth);e.width*=g;e.height*=g;e=b.getImageData(512-e.width/2,512-e.height/2,Math.ceil(e.width),
Math.ceil(e.height));d=e.width;c=e.height;b.canvas.width=d;b.canvas.height=c;b.putImageData(e,0,0)}else e=(yield fa("image/svg+xml"===a.contentType?"data:image/svg+xml;base64,"+a.imageData:a.url,{responseType:"image"})).data,d=z.pt2px(a.width),c=z.pt2px(a.height),b.canvas.width=d,b.canvas.height=c,b.drawImage(e,0,0,b.canvas.width,b.canvas.height);return{type:"esriPMS",imageData:b.canvas.toDataURL("image/png").substr(22),angle:a.angle,contentType:"image/png",height:z.px2pt(c),width:z.px2pt(d),xoffset:a.xoffset,
yoffset:a.yoffset}});return ba.apply(this,arguments)}function pa(a,b){return ca.apply(this,arguments)}function ca(){ca=u._asyncToGenerator(function*(a,b){const d=a.type;if("simple"===d&&H(a.symbol))a.symbol=yield I(a.symbol,b);else if("uniqueValue"===d||"classBreaks"===d)if(H(a.defaultSymbol)&&(a.defaultSymbol=yield I(a.defaultSymbol,b)),a=a["uniqueValue"===d?"uniqueValueInfos":"classBreakInfos"])for(const c of a)H(c.symbol)&&(c.symbol=yield I(c.symbol,b))});return ca.apply(this,arguments)}function G(a){return da.apply(this,
arguments)}function da(){da=u._asyncToGenerator(function*(a){return a.queryFeatures(Qa).then(b=>b.features)});return da.apply(this,arguments)}function ja(a){return a.gpMetadata&&a.gpMetadata.executionType?Ra.fromJSON(a.gpMetadata.executionType):"sync"}function H(a){return a&&(a.path||"image/svg+xml"===a.contentType||a.url&&a.url.endsWith(".svg"))}const la={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},ka=new ha.JSONMap({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),
Ra=new ha.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),Qa=new ya({returnGeometry:!0}),D=new Map;A.execute=function(a,b,d){return K.apply(this,arguments)};A.getGpPrintParams=ia;A.getGpServerUrl=L;A.getMode=function(a){return M.apply(this,arguments)};A.printCacheMap=D;Object.defineProperty(A,"__esModule",{value:!0})});