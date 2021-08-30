// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/rasterEnums ../../geometry/Point ../../geometry/Multipoint".split(" "),
function(l,c,q,r,b,t,d,z,A,B,C,u,v,m,w,h,x,y){var k;b=k=function(n){function f(){var a=n.apply(this,arguments)||this;a.geometry=null;a.interpolation="nearest";a.mosaicRule=null;a.outFields=null;a.pixelSize=null;a.returnFirstValueOnly=!0;a.sampleDistance=null;a.sampleCount=null;a.sliceId=null;a.timeExtent=null;return a}l._inheritsLoose(f,n);var p=f.prototype;p.writeGeometry=function(a,e,g){null!=a&&(e.geometryType=m.getJsonType(a),e[g]=a.toJSON())};p.clone=function(){return new k(t.clone({geometry:this.geometry,
locations:this.locations,interpolation:this.interpolation,mosaicRule:this.mosaicRule,outFields:this.outFields,raster:this.raster,returnFirstValueOnly:this.returnFirstValueOnly,sampleDistance:this.sampleDistance,sampleCount:this.sampleCount,sliceId:this.sliceId,pixelSize:this.pixelSize,timeExtent:this.timeExtent}))};l._createClass(f,[{key:"locations",set:function(a){if(null!=a&&a.length){const e=new y({spatialReference:a[0].spatialReference});e.points=a.map(g=>[g.x,g.y]);this._set("locations",a);this.geometry=
e}}}]);return f}(b.JSONSupport);c.__decorate([d.property({types:q.geometryTypes,json:{read:m.fromJSON}})],b.prototype,"geometry",void 0);c.__decorate([v.writer("geometry")],b.prototype,"writeGeometry",null);c.__decorate([d.property({type:String,json:{type:h.interpolationKebab.jsonValues,read:h.interpolationKebab.read,write:h.interpolationKebab.write}})],b.prototype,"interpolation",void 0);c.__decorate([d.property({type:w,json:{write:!0}})],b.prototype,"mosaicRule",void 0);c.__decorate([d.property({type:[String],
json:{write:!0}})],b.prototype,"outFields",void 0);c.__decorate([d.property({type:x,json:{write:!0}})],b.prototype,"pixelSize",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"raster",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnFirstValueOnly",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"sampleDistance",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"sampleCount",void 0);
c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"sliceId",void 0);c.__decorate([d.property({type:r,json:{read:{source:"time"},write:{target:"time"}}})],b.prototype,"timeExtent",void 0);return b=k=c.__decorate([u.subclass("esri.rest.support.ImageSampleParameters")],b)});