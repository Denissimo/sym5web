/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import s from"./WebTileLayer.js";import e from"./support/TileInfo.js";import p from"../portal/PortalItem.js";import i from"../geometry/Extent.js";import n from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/write.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"./Layer.js";import"../chunks/Evented.js";import"../chunks/Identifiable.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../chunks/BlendLayer.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties2.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/persistableUrlUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"../chunks/enumeration.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/opacityUtils.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../chunks/assets.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"./support/LOD.js";import"../chunks/aaBoundingRect.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";let m=class extends s{constructor(...t){super(...t),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new i(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};t([r({type:p,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",void 0),t([r({type:Boolean,json:{read:!1,write:!1}})],m.prototype,"isReference",void 0),t([r({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"refreshInterval",null),t([r({type:e,json:{write:!1}})],m.prototype,"tileInfo",void 0),t([r({type:["show","hide"]})],m.prototype,"listMode",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"subDomains",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"fullExtent",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"urlTemplate",void 0),t([r({type:["OpenStreetMap"]})],m.prototype,"operationalLayerType",void 0),t([r({json:{read:!1}})],m.prototype,"type",void 0),t([r({json:{read:!1,write:!1}})],m.prototype,"copyright",void 0),t([r({json:{read:!1,write:!1}})],m.prototype,"wmtsInfo",void 0),m=t([o("esri.layers.OpenStreetMapLayer")],m);var a=m;export default a;
