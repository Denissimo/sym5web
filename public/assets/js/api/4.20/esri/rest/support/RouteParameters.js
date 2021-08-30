// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./networkEnums ./TravelMode ./commonProperties ../../geometry/SpatialReference".split(" "),
function(n,c,b,p,q,d,y,z,A,e,r,t,u,f,v,w,x){var h;b=h=function(m){function k(a){a=m.call(this,a)||this;a.accumulateAttributes=null;a.apiKey=null;a.attributeParameterValues=null;a.directionsLanguage=null;a.directionsLengthUnits=null;a.directionsOutputType=null;a.directionsStyleName=null;a.directionsTimeAttribute=null;a.doNotLocateOnRestrictedElements=!0;a.findBestSequence=null;a.ignoreInvalidLocations=null;a.impedanceAttribute=null;a.outputGeometryPrecision=null;a.outputGeometryPrecisionUnits=null;
a.outputLines="true-shape";a.outSpatialReference=null;a.pointBarriers=null;a.polygonBarriers=null;a.polylineBarriers=null;a.preserveFirstStop=null;a.preserveLastStop=null;a.restrictionAttributes=null;a.restrictUTurns=null;a.returnBarriers=!1;a.returnDirections=!1;a.returnPolygonBarriers=!1;a.returnPolylineBarriers=!1;a.returnRoutes=!0;a.returnStops=!1;a.returnZ=!0;a.startTime=null;a.startTimeIsUTC=!0;a.stops=null;a.travelMode=null;a.useHierarchy=null;a.useTimeWindows=null;return a}n._inheritsLoose(k,
m);var l=k.prototype;l.readStartTime=function(a,g){return null!=g.startTime?new Date(g.startTime):null};l.writeStartTime=function(a,g){g.startTime=a?a.getTime():null};l.clone=function(){return new h(q.clone({accumulateAttributes:this.accumulateAttributes,apiKey:this.apiKey,attributeParameterValues:this.attributeParameterValues,directionsLanguage:this.directionsLanguage,directionsLengthUnits:this.directionsLengthUnits,directionsOutputType:this.directionsOutputType,directionsStyleName:this.directionsStyleName,
directionsTimeAttribute:this.directionsTimeAttribute,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,findBestSequence:this.findBestSequence,ignoreInvalidLocations:this.ignoreInvalidLocations,impedanceAttribute:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,outputLines:this.outputLines,outSpatialReference:this.outSpatialReference,pointBarriers:this.pointBarriers,polygonBarriers:this.polygonBarriers,
polylineBarriers:this.polylineBarriers,preserveFirstStop:this.preserveFirstStop,preserveLastStop:this.preserveLastStop,restrictionAttributes:this.restrictionAttributes,restrictUTurns:this.restrictUTurns,returnBarriers:this.returnBarriers,returnDirections:this.returnDirections,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,returnRoutes:this.returnRoutes,returnStops:this.returnStops,returnZ:this.returnZ,startTime:this.startTime,startTimeIsUTC:this.startTimeIsUTC,
stops:this.stops,travelMode:this.travelMode,useHierarchy:this.useHierarchy,useTimeWindows:this.useTimeWindows}))};return k}(p.JSONSupport);c.__decorate([d.property({type:[String],json:{write:!0}})],b.prototype,"accumulateAttributes",void 0);c.__decorate([d.property(w.apiKey)],b.prototype,"apiKey",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"attributeParameterValues",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"directionsLanguage",void 0);c.__decorate([e.enumeration(f.directionsLengthUnitJsonMap)],
b.prototype,"directionsLengthUnits",void 0);c.__decorate([e.enumeration(f.directionsOutputTypeJsonMap)],b.prototype,"directionsOutputType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"directionsStyleName",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"directionsTimeAttribute",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"doNotLocateOnRestrictedElements",void 0);c.__decorate([d.property({json:{write:!0}})],
b.prototype,"findBestSequence",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"ignoreInvalidLocations",void 0);c.__decorate([d.property({type:String,json:{read:{source:"impedanceAttributeName"},write:{target:"impedanceAttributeName"}}})],b.prototype,"impedanceAttribute",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"outputGeometryPrecision",void 0);c.__decorate([e.enumeration(f.lengthUnitJsonMap)],b.prototype,"outputGeometryPrecisionUnits",void 0);
c.__decorate([e.enumeration(f.outputLineJsonMap)],b.prototype,"outputLines",void 0);c.__decorate([d.property({type:x,json:{write:!0}})],b.prototype,"outSpatialReference",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"pointBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"polygonBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"polylineBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"preserveFirstStop",
void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"preserveLastStop",void 0);c.__decorate([d.property({type:[String],json:{write:!0}})],b.prototype,"restrictionAttributes",void 0);c.__decorate([e.enumeration(f.restrictUTurnJsonMap)],b.prototype,"restrictUTurns",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnDirections",void 0);c.__decorate([d.property({type:Boolean,
json:{write:!0}})],b.prototype,"returnPolygonBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnPolylineBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnRoutes",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnStops",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnZ",void 0);c.__decorate([d.property({type:Date,json:{type:Number,write:!0}})],
b.prototype,"startTime",void 0);c.__decorate([r.reader("startTime")],b.prototype,"readStartTime",null);c.__decorate([u.writer("startTime")],b.prototype,"writeStartTime",null);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"startTimeIsUTC",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"stops",void 0);c.__decorate([d.property({type:v,json:{write:!0}})],b.prototype,"travelMode",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"useHierarchy",
void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"useTimeWindows",void 0);return b=h=c.__decorate([t.subclass("esri.rest.support.RouteParameters")],b)});