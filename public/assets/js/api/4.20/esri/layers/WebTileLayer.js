// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../request ../core/Error ../core/MultiOriginJSONSupport ../core/string ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/ensureType ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/LOD ./support/TileInfo ./support/WMTSLayerInfo ../geometry/SpatialReference ../geometry/Extent ../geometry/Point".split(" "),
function(t,d,c,y,z,A,B,n,f,M,N,O,P,u,C,D,E,F,G,H,I,J,e,v,K,m,w,L){c=function(x){function p(...a){a=x.call(this,...a)||this;a.copyright="";a.fullExtent=new w(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,m.WebMercator);a.legendEnabled=!1;a.isReference=null;a.popupEnabled=!1;a.spatialReference=m.WebMercator;a.subDomains=null;a.tileInfo=new v({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new L({x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:m.WebMercator}),
spatialReference:m.WebMercator,lods:[new e({level:0,scale:5.91657527591555E8,resolution:156543.033928}),new e({level:1,scale:2.95828763795777E8,resolution:78271.5169639999}),new e({level:2,scale:1.47914381897889E8,resolution:39135.7584820001}),new e({level:3,scale:7.3957190948944E7,resolution:19567.8792409999}),new e({level:4,scale:3.6978595474472E7,resolution:9783.93962049996}),new e({level:5,scale:1.8489297737236E7,resolution:4891.96981024998}),new e({level:6,scale:9244648.868618,resolution:2445.98490512499}),
new e({level:7,scale:4622324.434309,resolution:1222.99245256249}),new e({level:8,scale:2311162.217155,resolution:611.49622628138}),new e({level:9,scale:1155581.108577,resolution:305.748113140558}),new e({level:10,scale:577790.554289,resolution:152.874056570411}),new e({level:11,scale:288895.277144,resolution:76.4370282850732}),new e({level:12,scale:144447.638572,resolution:38.2185141425366}),new e({level:13,scale:72223.819286,resolution:19.1092570712683}),new e({level:14,scale:36111.909643,resolution:9.55462853563415}),
new e({level:15,scale:18055.954822,resolution:4.77731426794937}),new e({level:16,scale:9027.977411,resolution:2.38865713397468}),new e({level:17,scale:4513.988705,resolution:1.19432856685505}),new e({level:18,scale:2256.994353,resolution:.597164283559817}),new e({level:19,scale:1128.497176,resolution:.298582141647617})]});a.type="web-tile";a.urlTemplate=null;a.wmtsInfo=null;return a}t._inheritsLoose(p,x);var l=p.prototype;l.normalizeCtorArgs=function(a,b){return"string"===typeof a?{urlTemplate:a,
...b}:a};l.load=function(a){a=this.loadFromPortal({supportedTypes:["WMTS"]},a).then(()=>{let b="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const g=new n.Url(this.urlTemplate);this.subDomains&&0<this.subDomains.length||-1===g.authority.indexOf("{subDomain}")||(b="is missing 'subDomains' property")}else b="spatialReference must match tileInfo.spatialReference";else b="is missing the required 'urlTemplate' property value";if(b)throw new z("web-tile-layer:load",
`WebTileLayer (title: '${this.title}', id: '${this.id}') ${b}`);});this.addResolvingPromise(a);return Promise.resolve(this)};l.readSpatialReference=function(a,b){return a||b.fullExtent&&b.fullExtent.spatialReference&&m.fromJSON(b.fullExtent.spatialReference)};l.readUrlTemplate=function(a,b){return a||b.templateUrl};l.writeUrlTemplate=function(a,b){a&&n.isProtocolRelative(a)&&(a="https:"+a);a&&(a=a.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),a=n.normalize(a));
b.templateUrl=a};l.fetchTile=function(a,b,g,h={}){const {signal:q,timestamp:r}=h;a=this.getTileUrl(a,b,g);b={responseType:"image",signal:q};null!=r&&(b.query={_ts:h.timestamp});return y(a,b).then(k=>k.data)};l.getTileUrl=function(a,b,g){a=this.levelValues[a];return this.tileServers[b%this.tileServers.length]+B.replace(this.urlPath,{level:a,z:a,col:g,x:g,row:b,y:b})};t._createClass(p,[{key:"levelValues",get:function(){const a=[];if(!this.tileInfo)return null;for(const b of this.tileInfo.lods)a[b.level]=
b.levelValue||b.level;return a}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;const a=[],{urlTemplate:b,subDomains:g}=this,h=new n.Url(b),q=h.scheme?h.scheme+"://":"//",r=q+h.authority+"/";if(-1===h.authority.indexOf("{subDomain}"))a.push(r);else if(g&&0<g.length&&1<h.authority.split(".").length)for(const k of g)a.push(q+h.authority.replace(/\{subDomain\}/gi,k)+"/");return a.map(k=>{"/"!==k.charAt(k.length-1)&&(k+="/");return k})}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;
const a=this.urlTemplate,b=new n.Url(a);return a.substring(((b.scheme?b.scheme+"://":"//")+b.authority+"/").length)}}]);return p}(F.BlendLayer(I.RefreshableLayer(J.ScaleRangeLayer(G.OperationalLayer(H.PortalLayer(A.MultiOriginJSONMixin(E)))))));d.__decorate([f.property({type:String,value:"",json:{write:!0}})],c.prototype,"copyright",void 0);d.__decorate([f.property({type:w,json:{write:!0}})],c.prototype,"fullExtent",void 0);d.__decorate([f.property({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,
"legendEnabled",void 0);d.__decorate([f.property({type:["show","hide"]})],c.prototype,"listMode",void 0);d.__decorate([f.property()],c.prototype,"levelValues",null);d.__decorate([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0);d.__decorate([f.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],c.prototype,"operationalLayerType",void 0);d.__decorate([f.property({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,
"popupEnabled",void 0);d.__decorate([f.property({type:m})],c.prototype,"spatialReference",void 0);d.__decorate([u.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],c.prototype,"readSpatialReference",null);d.__decorate([f.property({type:[String],json:{write:!0}})],c.prototype,"subDomains",void 0);d.__decorate([f.property({type:v,json:{write:!0}})],c.prototype,"tileInfo",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"tileServers",null);d.__decorate([f.property({json:{read:!1}})],
c.prototype,"type",void 0);d.__decorate([f.property()],c.prototype,"urlPath",null);d.__decorate([f.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],c.prototype,"urlTemplate",void 0);d.__decorate([u.reader("urlTemplate",["urlTemplate","templateUrl"])],c.prototype,"readUrlTemplate",null);d.__decorate([D.writer("urlTemplate",{templateUrl:{type:String}})],c.prototype,"writeUrlTemplate",null);d.__decorate([f.property({type:K["default"],json:{write:!0}})],c.prototype,"wmtsInfo",
void 0);return c=d.__decorate([C.subclass("esri.layers.WebTileLayer")],c)});