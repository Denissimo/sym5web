// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../core/lang ../../../../../core/urlUtils ../../../../../geometry/Extent ../../../../../layers/support/serviceTileInfoProperty ../../../../../layers/support/TilemapCache ../TileIndex".split(" "),function(n,f,p,q,r,t){return function(){function m(a,b,c){this.tileMapURL="";this.fullExtent=this.tileIndex=this.capabilities=this.tileInfo=this.parsedUrl=this.tilemapCache=null;this.name=a;if(this.sourceUrl=b)this.parsedUrl=f.urlToObject(this.sourceUrl);const d=this.parsedUrl.path,h=this.parsedUrl.query?
"?"+f.objectToQuery(this.parsedUrl.query):"";a=n.clone(c);const e=a.tiles;b&&e.forEach((k,u)=>{f.isAbsolute(k)||(e[u]=f.join(d,k)+h)});this.tileServers=e;c.tileMap&&(this.tileMapURL=f.join(b,c.tileMap));var g=c.capabilities&&c.capabilities.split(",").map(k=>k.toLowerCase().trim());b=!!c.exportTilesAllowed;g=!!g&&-1!==g.indexOf("tilemap");const v=b&&c.hasOwnProperty("maxExportTilesCount")?c.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:b,supportsTileMap:g},exportTiles:b?
{maxExportTilesCount:+v}:null};this.tileInfo=q.readServiceTileInfo(a.tileInfo,a,null,{ignoreMinMaxLOD:!0});g&&(this.type="vector-tile",this.tilemapCache=new r.TilemapCache({layer:this}),this.tileIndex=new t(this.tilemapCache));this.fullExtent=p.fromJSON(c.fullExtent)}var l=m.prototype;l.getRefKey=function(a,b){return this.tileIndex?this.tileIndex.dataKey(a,b):Promise.resolve(a)};l.getSourceTileUrl=function(a,b,c){let d=this.tileServers[b%this.tileServers.length];return d=d.replace(/\{z\}/gi,a.toString()).replace(/\{y\}/gi,
b.toString()).replace(/\{x\}/gi,c.toString())};l.isCompatibleWith=function(a){var b=this.tileInfo;a=a.tileInfo;if(!b.spatialReference.equals(a.spatialReference)||!b.origin.equals(a.origin)||Math.round(b.dpi)!==Math.round(a.dpi))return!1;b=b.lods;a=a.lods;const c=Math.min(b.length,a.length);for(let d=0;d<c;d++){const h=b[d],e=a[d];if(h.level!==e.level||Math.round(h.scale)!==Math.round(e.scale))return!1}return!0};return m}()});