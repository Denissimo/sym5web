// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["./StyleLayer"],function(m){return function(){function n(a,b){this._style=a;this.backgroundBucketIds=[];this._uidToLayer=new Map;this._layerByName={};this._runningId=0;a.layers||(a.layers=[]);this.version=parseFloat(a.version);this.sprite=b?b.spriteUrl:a.sprite;this.glyphs=b?b.glyphsUrl:a.glyphs;if(this.layers=a.layers.map((c,g,f)=>this._create(c,g,f)))for(b=0;b<this.layers.length;b++)a=this.layers[b],this._layerByName[a.id.toLowerCase()]=a,this._uidToLayer.set(a.uid,a),0===a.type&&this.backgroundBucketIds.push(a.id);
this._identifyRefLayers()}var h=n.prototype;h.isPainterDataDriven=function(a){return(a=this._layerByName[a.toLowerCase()])?a.isPainterDataDriven():!1};h.getStyleLayerId=function(a){return a>=this.layers.length?null:this.layers[a].id};h.getStyleLayerByUID=function(a){a=this._uidToLayer.get(a);return null!=a?a:null};h.getStyleLayerIndex=function(a){return(a=this._layerByName[a.toLowerCase()])?this.layers.indexOf(a):-1};h.setStyleLayer=function(a,b){if(a&&a.id){var c=this._style;null!=b&&b>=this.layers.length&&
(b=this.layers.length-1);var g=!0,f;if(f=this._layerByName[a.id.toLowerCase()]){const e=this.layers.indexOf(f);b||(b=e);b===e?(g=!1,f=n._recreateLayer(a,f),this.layers[b]=f,c.layers[b]=a):(this.layers.splice(e,1),c.layers.splice(e,1),f=this._create(a,b,this.layers),this.layers.splice(b,0,f),c.layers.splice(b,0,a))}else f=this._create(a,b,this.layers),!b||b>=this.layers.length?(this.layers.push(f),c.layers.push(a)):(this.layers.splice(b,0,f),c.layers.splice(b,0,a));this._layerByName[a.id.toLowerCase()]=
f;this._uidToLayer.set(f.uid,f);g&&this._recomputeZValues();this._identifyRefLayers()}};h.getStyleLayer=function(a){return(a=this._layerByName[a.toLowerCase()])?{type:a.typeName,id:a.id,source:a.source,"source-layer":a.sourceLayer,minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:a.layout,paint:a.paint}:null};h.deleteStyleLayer=function(a){const b=this._layerByName[a.toLowerCase()];b&&(delete this._layerByName[a.toLowerCase()],this._uidToLayer.delete(b.uid),a=this.layers.indexOf(b),this.layers.splice(a,
1),this._style.layers.splice(a,1),this._recomputeZValues(),this._identifyRefLayers())};h.getLayerById=function(a){return this._layerByName[a.toLowerCase()]};h.getLayoutProperties=function(a){return(a=this._layerByName[a.toLowerCase()])?a.layout:null};h.getPaintProperties=function(a){return(a=this._layerByName[a.toLowerCase()])?a.paint:null};h.setPaintProperties=function(a,b){if(a=this._layerByName[a.toLowerCase()]){var c=n._recreateLayer({type:a.typeName,id:a.id,source:a.source,"source-layer":a.sourceLayer,
minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:a.layout,paint:b},a),g=this.layers.indexOf(a);this.layers[g]=c;this._style.layers[g].paint=b;this._layerByName[a.id.toLowerCase()]=c;this._uidToLayer.set(a.uid,c)}};h.setLayoutProperties=function(a,b){if(a=this._layerByName[a.toLowerCase()]){var c=n._recreateLayer({type:a.typeName,id:a.id,source:a.source,"source-layer":a.sourceLayer,minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:b,paint:a.paint},a),g=this.layers.indexOf(a);this.layers[g]=
c;this._style.layers[g].layout=b;this._layerByName[a.id.toLowerCase()]=c;this._uidToLayer.set(a.uid,c)}};h.setStyleLayerVisibility=function(a,b){if(a=this._layerByName[a.toLowerCase()]){var c=a.layout||{};c.visibility=b;b=n._recreateLayer({type:a.typeName,id:a.id,source:a.source,"source-layer":a.sourceLayer,minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:c,paint:a.paint},a);var g=this.layers.indexOf(a);this.layers[g]=b;this._style.layers[g].layout=c;this._layerByName[a.id.toLowerCase()]=
b;this._uidToLayer.set(a.uid,b)}};h.getStyleLayerVisibility=function(a){var b;a=this._layerByName[a.toLowerCase()];if(!a)return"none";a=a.layout;return null!=(b=null==a?void 0:a.visibility)?b:"visible"};h._recomputeZValues=function(){const a=this.layers,b=1/(a.length+1);for(let c=0;c<a.length;c++)a[c].z=1-(1+c)*b};h._identifyRefLayers=function(){const a=[],b=[];let c=0;for(const d of this.layers){const k=d.layout;if(1===d.type){var g,f=d,e=d.source+"|"+d.sourceLayer;e+=null!=(g="|"+(null==k?void 0:
k.visibility))?g:"";e+="|"+d.minzoom;e+="|"+d.maxzoom;e+="|"+JSON.stringify(d.filter);if(f.hasDataDrivenFill||f.hasDataDrivenOutline)e+="|"+c;a.push({key:e,layer:d})}else if(2===d.type){var l;f=d;e=d.source+"|"+d.sourceLayer;e+=null!=(l="|"+(null==k?void 0:k.visibility))?l:"";e+="|"+d.minzoom;e+="|"+d.maxzoom;e+="|"+JSON.stringify(d.filter);e+="|"+(void 0!==k?k["line-cap"]:"");e+="|"+(void 0!==k?k["line-join"]:"");f.hasDataDrivenLine&&(e+="|"+c);b.push({key:e,layer:d})}++c}this._assignRefLayers(a);
this._assignRefLayers(b)};h._assignRefLayers=function(a){a.sort((l,d)=>l.key<d.key?-1:l.key>d.key?1:0);let b,c;const g=a.length;for(let l=0;l<g;l++){const d=a[l];if(d.key===b)d.layer.refLayerId=c;else if(b=d.key,c=d.layer.id,1===d.layer.type){if(!d.layer.getPaintProperty("fill-outline-color"))for(var f=l+1;f<g;f++){var e=a[f];if(e.key===b){if(e.layer.getPaintProperty("fill-outline-color")){a[l]=e;a[f]=d;c=e.layer.id;break}}else break}}else if(2===d.layer.type)for(f=d.layer,e=l+1;e<g;e++){const k=
a[e];if(k.key!==b)break;const p=k.layer;if(f.canUseThinTessellation&&!p.canUseThinTessellation||!f.canUseThinTessellation&&(p.getPaintProperty("line-pattern")||p.getPaintProperty("line-dasharray")))f=p,a[l]=k,a[e]=d,c=k.layer.id}}};h._create=function(a,b,c){b=1-1/(c.length+1)*(1+b);c=this._runningId++;switch(a.type){case "background":return new m.BackgroundStyleLayer(0,a,b,c);case "fill":return new m.FillStyleLayer(1,a,b,c);case "line":return new m.LineStyleLayer(2,a,b,c);case "symbol":return new m.SymbolStyleLayer(3,
a,b,c);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":return new m.CircleStyleLayer(4,a,b,c)}throw Error("Unknown vector tile layer");};n._recreateLayer=function(a,b){switch(a.type){case "background":return new m.BackgroundStyleLayer(0,a,b.z,b.uid);case "fill":return new m.FillStyleLayer(1,a,b.z,b.uid);case "line":return new m.LineStyleLayer(2,a,b.z,b.uid);case "symbol":return new m.SymbolStyleLayer(3,a,b.z,b.uid);case "raster":throw Error("Unsupported vector tile raster layer");
case "circle":return new m.CircleStyleLayer(4,a,b.z,b.uid)}};return n}()});