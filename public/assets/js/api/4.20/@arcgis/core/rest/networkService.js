/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import o from"../request.js";import t from"../core/Error.js";import{i as r}from"../core/lang.js";import{g as s}from"../chunks/object.js";import{removeTrailingSlash as e}from"../core/urlUtils.js";import{a as i,p}from"../chunks/utils5.js";import{_ as l}from"../chunks/tslib.es6.js";import{a as n}from"../chunks/JSONSupport.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import u from"./support/TravelMode.js";import c from"../Graphic.js";import{r as d}from"../chunks/reader.js";import j from"./support/FeatureSet.js";import y from"./support/NAMessage.js";import h from"./support/RouteResult.js";import"../config.js";import"../kernel.js";import"../chunks/string.js";import"../chunks/Message.js";import"../core/promiseUtils.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../chunks/write.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../layers/support/fieldUtils.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../intl.js";import"../chunks/assets.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/uid.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"./support/GPMessage.js";import"./support/DirectionsFeatureSet.js";let f=class extends n{constructor(o){super(o),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};l([a()],f.prototype,"currentVersion",void 0),l([a()],f.prototype,"defaultTravelMode",void 0),l([a()],f.prototype,"directionsLanguage",void 0),l([a()],f.prototype,"directionsSupportedLanguages",void 0),l([a()],f.prototype,"directionsTimeAttribute",void 0),l([a()],f.prototype,"hasZ",void 0),l([a()],f.prototype,"impedance",void 0),l([a()],f.prototype,"networkDataset",void 0),l([a({type:[u]})],f.prototype,"supportedTravelModes",void 0),f=l([m("esri.rest.support.NetworkServiceDescription")],f);var b=f;function g(o){return o&&j.fromJSON(o).features.map((o=>o))}let v=class extends n{constructor(o){super(o),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(o,t){return g(t.barriers||t.pointBarriers)}readPolylineBarriers(o){return g(o)}readPolygonBarriers(o){return g(o)}};l([a({aliasOf:"pointBarriers"})],v.prototype,"barriers",void 0),l([a({type:[y]})],v.prototype,"messages",void 0),l([a({type:[c]})],v.prototype,"pointBarriers",void 0),l([d("pointBarriers",["barriers","pointBarriers"])],v.prototype,"readPointBarriers",null),l([a({type:[c]})],v.prototype,"polylineBarriers",void 0),l([d("polylineBarriers")],v.prototype,"readPolylineBarriers",null),l([a({type:[c]})],v.prototype,"polygonBarriers",void 0),l([d("polygonBarriers")],v.prototype,"readPolygonBarriers",null),l([a({type:[h]})],v.prototype,"routeResults",void 0),v=l([m("esri.rest.support.RouteResultsContainer")],v);var k=v;function S(o,t,r,s){s[r]=[t.length,t.length+o.length],o.forEach((o=>{t.push(o.geometry)}))}function M(o,t){for(let r=0;r<t.length;r++){const s=o[t[r]];if(s&&s.length)for(const o of s)o.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function T(o){const t=[],r=[],{directions:s=[],routes:{features:e=[],spatialReference:i=null}={},stops:{features:p=[],spatialReference:l=null}={},barriers:n,polygonBarriers:a,polylineBarriers:m,messages:u}=o.data,c="esri.tasks.RouteTask.NULL_ROUTE_NAME";let d,j,y=!0;const h=e&&i||p&&l||n&&n.spatialReference||a&&a.spatialReference||m&&m.spatialReference;s.forEach((o=>{t.push(d=o.routeName),r[d]={directions:o}})),e.forEach((o=>{-1===t.indexOf(d=o.attributes.Name)&&(t.push(d),r[d]={}),o.geometry&&(o.geometry.spatialReference=h),r[d].route=o})),p.forEach((o=>{j=o.attributes,-1===t.indexOf(d=j.RouteName||c)&&(t.push(d),r[d]={}),d!==c&&(y=!1),o.geometry&&(o.geometry.spatialReference=h),null==r[d].stops&&(r[d].stops=[]),r[d].stops.push(o)})),p.length>0&&!0===y&&(r[t[0]].stops=r[c].stops,delete r[c],t.splice(t.indexOf(c),1));const f=t.map((o=>(r[o].routeName=o===c?null:o,r[o])));return k.fromJSON({routeResults:f,pointBarriers:n,polygonBarriers:a,polylineBarriers:m,messages:u})}function D(o,t){for(let s=0;s<t.length;s++){const e=o[t[s]];if(e&&e.length)for(const o of e)if(r(o)&&o.hasZ)return!0}return!1}async function P(r,l,n){if(!r)throw new t("network-service:missing-url","Url to Network service is missing");const a=i({f:"json",token:l},n),{data:m}=await o(r,a);m.supportedTravelModes||(m.supportedTravelModes=[]);for(let o=0;o<m.supportedTravelModes.length;o++)m.supportedTravelModes[o].id||(m.supportedTravelModes[o].id=m.supportedTravelModes[o].itemId);const u=m.currentVersion>=10.4?async function(r,s,p){try{const t=i({f:"json",token:s},p),l=e(r)+"/retrieveTravelModes",{data:{supportedTravelModes:n,defaultTravelMode:a}}=await o(l,t);return{supportedTravelModes:n,defaultTravelMode:a}}catch(o){throw new t("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:o})}}(r,l,n):async function(t,r){var l,n;const a=i({f:"json"},r),{data:m}=await o(t.replace(/\/rest\/.*$/i,"/info"),a);if(!m||!m.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=m,c=e(u)+"/sharing/rest/portals/self",{data:d}=await o(c,a),j=s("helperServices.routingUtilities.url",d);if(!j)return{supportedTravelModes:[],defaultTravelMode:null};const y=p(u),h=/\/solve$/i.test(y.path)?"Route":/\/solveclosestfacility$/i.test(y.path)?"ClosestFacility":"ServiceAreas",f=i({f:"json",serviceName:h},r),b=e(j)+"/GetTravelModes/execute",g=await o(b,f),v=[];let k=null;if(null!=g&&null!=(l=g.data)&&null!=(n=l.results)&&n.length){const o=g.data.results;for(const t of o){var S;if("supportedTravelModes"===t.paramName){if(null!=(S=t.value)&&S.features)for(const{attributes:o}of t.value.features)if(o){const t=JSON.parse(o.TravelMode);v.push(t)}}else"defaultTravelMode"===t.paramName&&(k=t.value)}}return{supportedTravelModes:v,defaultTravelMode:k}}(r,n),{defaultTravelMode:c,supportedTravelModes:d}=await u;return m.defaultTravelMode=c,m.supportedTravelModes=d,b.fromJSON(m)}export{S as collectGeometries,M as dropZValuesOffInputGeometry,P as fetchServiceDescription,T as handleSolveResponse,D as isInputGeometryZAware};