// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./FeatureSet ../../geometry/SpatialReference ../../geometry/Point ../../geometry/Polyline ../../geometry/Extent".split(" "),function(w,e,c,x,y,k,J,K,L,M,C,D,
E,F,G,H,I){c=function(z){function u(a){a=z.call(this,a)||this;a.extent=null;a.features=null;a.geometryType="polyline";a.routeId=null;a.routeName=null;a.totalDriveTime=null;a.totalLength=null;a.totalTime=null;return a}w._inheritsLoose(u,z);var v=u.prototype;v.readFeatures=function(a,l){(a||[]).forEach(b=>{this._decompressFeatureGeometry(b,l.summary.envelope.spatialReference)});const m=F.fromJSON(l.spatialReference);return a.map(b=>{const f=x.fromJSON(b),h=b.geometry&&b.geometry.spatialReference;f.geometry&&
!h&&(y.unwrap(f.geometry).spatialReference=m);f.strings=b.strings;f.events=(b.events||[]).map(g=>{const r=new x({geometry:new G({x:g.point.x,y:g.point.y,z:g.point.z,hasZ:void 0!==g.point.z,spatialReference:b.geometry&&b.geometry.spatialReference}),attributes:{ETA:g.ETA,arriveTimeUTC:g.arriveTimeUTC}});r.strings=g.strings;return r});return f})};v._decompressFeatureGeometry=function(a,l){a.geometry=this._decompressGeometry(a.compressedGeometry,l)};v._decompressGeometry=function(a,l){let m=0,b=0,f=0,
h=0;const g=[];let r,A,B,d=0,p=0,t=0;(a=a.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(a=[]);if(0===parseInt(a[d],32)){d=2;var n=parseInt(a[d],32);d++;r=parseInt(a[d],32);d++;n&1&&(p=a.indexOf("|")+1,A=parseInt(a[p],32),p++);n&2&&(t=a.indexOf("|",p)+1,B=parseInt(a[t],32),t++)}else r=parseInt(a[d],32),d++;for(;d<a.length&&"|"!==a[d];){n=parseInt(a[d],32)+m;d++;m=n;var q=parseInt(a[d],32)+b;d++;b=q;n=[n/r,q/r];p&&(q=parseInt(a[p],32)+f,p++,f=q,n.push(q/A));t&&(q=parseInt(a[t],32)+h,t++,h=q,n.push(q/B));g.push(n)}return{paths:[g],
hasZ:0<p,hasM:0<t,spatialReference:l}};v._mergePolylinesToSinglePath=function(a,l){let m=[];(a||[]).forEach(h=>{h.paths.forEach(g=>{m=m.concat(g)})});const b=[];let f=[0,0];m.forEach(h=>{if(h[0]!==f[0]||h[1]!==f[1])b.push(h),f=h});return new H({paths:[b]},l)};w._createClass(u,[{key:"mergedGeometry",get:function(){if(!this.features)return null;const a=this.features.map(({geometry:m})=>y.unwrap(m)),l=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(a,l)}},{key:"strings",get:function(){return this.features.map(({strings:a})=>
a)}}]);return u}(E);e.__decorate([k.property({type:I,json:{read:{source:"summary.envelope"}}})],c.prototype,"extent",void 0);e.__decorate([k.property()],c.prototype,"features",void 0);e.__decorate([C.reader("features")],c.prototype,"readFeatures",null);e.__decorate([k.property()],c.prototype,"geometryType",void 0);e.__decorate([k.property({readOnly:!0})],c.prototype,"mergedGeometry",null);e.__decorate([k.property()],c.prototype,"routeId",void 0);e.__decorate([k.property()],c.prototype,"routeName",
void 0);e.__decorate([k.property({value:null,readOnly:!0})],c.prototype,"strings",null);e.__decorate([k.property({json:{read:{source:"summary.totalDriveTime"}}})],c.prototype,"totalDriveTime",void 0);e.__decorate([k.property({json:{read:{source:"summary.totalLength"}}})],c.prototype,"totalLength",void 0);e.__decorate([k.property({json:{read:{source:"summary.totalTime"}}})],c.prototype,"totalTime",void 0);return c=e.__decorate([D.subclass("esri.rest.support.DirectionsFeatureSet")],c)});