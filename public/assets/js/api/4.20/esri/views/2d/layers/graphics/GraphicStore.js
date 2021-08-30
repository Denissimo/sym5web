// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../core/has ../../../../core/screenUtils ../../../../core/unitUtils ../../../../chunks/rbush ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/contains ../../../../geometry/support/extentUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtils ../../../../geometry/support/normalizeUtilsCommon ../../../../geometry/support/spatialReferenceUtils ../../../../symbols/cim/utils ./GraphicStoreItem ./graphicsUtils".split(" "),function(z,
A,B,C,r,x,D,E,F,G,H,I,y,q){function v(w,n,b,d,c){u.minX=n;u.minY=b;u.maxX=d;u.maxY=c;return w.search(u)}const u={minX:0,minY:0,maxX:0,maxY:0},t=r.create();return function(){function w(b,d,c,e,k,h){this._graphics=e;this._onAdd=k;this._onRemove=h;this._index=C.rbush(9,z("csp-restrictions")?a=>({minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);this._itemByGraphic=new Map;this._currentLevel=-Infinity;this._tileInfoView=b;this._uidFieldName=
c;if(d=b.getClosestInfoForScale(d))this._currentLevel=d.level,this._resolution=this._tileInfoView.getTileResolution(d.level);this._metersPerUnit=H.isValid(b.spatialReference)?B.getMetersPerUnit(b.spatialReference):1}var n=w.prototype;n.hitTest=function(b,d,c,e,k){b=F.normalizeMapX(b,this._tileInfoView.spatialReference);var h=.5*e*c;t[0]=b-h;t[1]=d-h;t[2]=b+h;t[3]=d+h;c=.5*e*(c+q.PIXEL_BUFFER);var a=v(this._index,b-c,d-c,b+c,d+c);if(!a||0===a.length)return[];c={x:b,y:d};h=[];for(const f of a)if(f.graphic.visible)switch(E.getJsonType(f.geometry)){case "esriGeometryPoint":{a=
f.symbol;if(!a)continue;const {x:l,y:g}=f.geometry;var m=e*this._metersPerUnit;let p;switch(a.type){case "esriTS":p=q.getTextSymbolBounds(l,g,a,f.size,e,k);break;case "expanded-cim":p=q.getCIMMarkerBounds(l,g,a,e,m,k);break;case "esriSMS":case "esriPMS":p=q.getMarkerSymbolBounds(l,g,a,e,m,k)}x.polygonContainsPoint(p,c)&&h.push(f)}break;case "esriGeometryPolyline":a=f.symbol;m=0;if("expanded-cim"===a.type){a=a.layers;if(!a||0===a.length)continue;m=a.findIndex(l=>"line"===l.type);if(-1===m)continue;
m=I.evaluateValueOrFunction(a[m].width,null,null)}else{a=a.layers;if(!a||0===a.length)continue;m=a[0].width}a=1.5*e*window.devicePixelRatio*A.pt2px(m);q.isPointOnPolyline(f.geometry,b,d,a)&&h.push(f);break;case "esriGeometryEnvelope":a=f.geometry;a=r.fromValues(a.xmin,a.ymin,a.xmax,a.ymax);r.intersects(a,t)&&h.push(f);break;case "esriGeometryPolygon":if(x.polygonContainsPoint(f.geometry,c)){h.push(f);break}a=D.getPolygonExtent(f.geometry);if(Math.abs(a.ymax-a.ymin)<5*e||Math.abs(a.xmax-a.xmin)<5*
e)a=r.fromValues(a.xmin,a.ymin,a.xmax,a.ymax),r.intersects(a,t)&&h.push(f);break;case "esriGeometryMultipoint":{a=f.symbol;if(!a)continue;m=f.geometry.points;let l;for(let g=0;g<m.length;g++)if(l="esriTS"===a.type?q.getTextSymbolBounds(m[g][0],m[g][1],a,f.size,e,k):q.getMarkerSymbolBounds(m[g][0],m[g][1],a,e,e*this._metersPerUnit,k),x.polygonContainsPoint(l,c)){h.push(f);break}}}h.sort((f,l)=>{const g=q.graphicGeometryToNumber(f.graphic),p=q.graphicGeometryToNumber(l.graphic);return g===p?l.zorder-
f.zorder:g-p});return h.map(f=>f.graphic)};n.getGraphicsData=function(b,d,c){const e=this._searchForItems(d);if(0===e.length||0===c.length)return[];e.sort((l,g)=>l.zorder-g.zorder);e[0].insertAfter=-1;for(var k=1;k<e.length;k++)e[k].insertAfter=e[k-1].graphic.uid;e.sort((l,g)=>l.graphic.uid-g.graphic.uid);c.sort((l,g)=>l.uid-g.uid);let h=k=0,a;const m=[],f={originPosition:"upperLeft",scale:[d.resolution,d.resolution],translate:[d.bounds[0],d.bounds[3]]};for(const l of c){for(h=-2;k<e.length;)if(a=
e[k],k++,l.uid===a.graphic.uid){h=a.insertAfter;break}if(!a.geometry||-2===h)continue;c=a.getGeometryQuantized(f,d.bounds);const g={...a.graphic.attributes};g[this._uidFieldName]=l.uid;null==a.groupId&&(a.groupId=b.createTemplateGroup(a.symbol,null));m.push({centroid:y.getCentroidQuantized(a,f),geometry:c,attributes:g,symbol:a.symbol,groupId:a.groupId,insertAfter:h,zorder:a.zorder})}m.sort((l,g)=>l.zorder-g.zorder);return m};n.queryTileData=function(b,d){const {bounds:c,resolution:e}=d,k=this._searchForItems(d),
h=[];if(0===k.length)return h;this._createTileGraphics(h,b,k,{originPosition:"upperLeft",scale:[e,e],translate:[c[0],c[3]]},d.bounds);return h};n.has=function(b){return this._itemByGraphic.has(b)};n.getBounds=function(b){return this._itemByGraphic.has(b)?this._itemByGraphic.get(b).bounds:null};n.addOrModify=function(b,d,c){if(b)return this.has(b)&&this.remove(b),this._onAdd(b),d=y.acquire(b,d,c,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),this._itemByGraphic.set(b,
d),c&&this._index.insert(d),d.bounds};n.remove=function(b){if(this._itemByGraphic.has(b)){this._onRemove(b);var d=this._itemByGraphic.get(b);this._index.remove(d);this._itemByGraphic.delete(b)}};n.updateZ=function(){const b=this._graphics.items;for(let c=0;c<b.length;c++){var d=b[c];if(d=this._itemByGraphic.get(d))d.zorder=c}};n.update=function(b,d,c){const e=this._itemByGraphic.get(b);e.groupId=null;const k=r.clone(e.bounds);e.size[0]=e.size[1]=0;this._index.remove(e);e.set(b,d,c,this._resolution,
this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);c&&this._index.insert(e);return{oldBounds:k,newBounds:e.bounds}};n.updateLevel=function(b){if(this._currentLevel!==b){this._currentLevel=b;var d=this._tileInfoView;this._resolution=d.getTileResolution(b);this._index.clear();b=this._itemByGraphic;var c=[];for(const [,e]of b)e.updateBounds(this._resolution,this._resolution*this._metersPerUnit,d.spatialReference),e.geometry&&c.push(e);this._index.load(c)}};n.clear=function(){this._itemByGraphic.clear();
this._index.clear()};n._createTileGraphics=function(b,d,c,e,k){const h=this._uidFieldName;c.sort((g,p)=>g.zorder-p.zorder);let a,m,f,l;for(let g=0;g<c.length;g++){f=c[g];a=f.graphic;m=f.getGeometryQuantized(e,k);l=0===g?-1:c[g-1].graphic.uid;const p={...f.graphic.attributes};p[h]=a.uid;null==f.groupId&&(f.groupId=d.createTemplateGroup(f.symbol,null));b.push({centroid:y.getCentroidQuantized(f,e),geometry:m,attributes:p,symbol:f.symbol,groupId:f.groupId,insertAfter:l,zorder:f.zorder})}};n._searchForItems=
function(b){var d=this._tileInfoView.spatialReference,c=b.bounds;if(d.isWrappable){const [e,k]=G.getSpatialReferenceMinMaxX(d);d=1E-5>Math.abs(c[2]-k);const h=1E-5>Math.abs(c[0]-e);if(!(d&&h||!d&&!h))return b=b.resolution,b=d?r.create([e,c[1],e+b*q.PIXEL_BUFFER,c[3]]):r.create([k-b*q.PIXEL_BUFFER,c[1],k,c[3]]),c=v(this._index,c[0],c[1],c[2],c[3]),b=v(this._index,b[0],b[1],b[2],b[3]),[...new Set([...c,...b])]}return v(this._index,c[0],c[1],c[2],c[3])};return w}()});