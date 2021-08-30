/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../core/Collection.js";import{clone as r}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import l from"./Symbol3D.js";import m from"./TextSymbol3DLayer.js";import{h as p,a,b as c,c as n}from"../chunks/Symbol3DVerticalOffset.js";import"../chunks/ArrayPool.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/collectionUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../portal/Portal.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../request.js";import"../kernel.js";import"../chunks/assets.js";import"../chunks/JSONSupport.js";import"../chunks/write.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/persistableUrlUtils.js";import"./ExtrudeSymbol3DLayer.js";import"./Symbol3DLayer.js";import"../chunks/utils.js";import"./edges/Edges3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"./FillSymbol3DLayer.js";import"./patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"./IconSymbol3DLayer.js";import"./LineSymbol3DLayer.js";import"./ObjectSymbol3DLayer.js";import"./PathSymbol3DLayer.js";import"./Symbol.js";import"./WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"./Font.js";import"./callouts/Callout3D.js";import"./callouts/LineCallout3D.js";var j;const u=s.ofType({base:null,key:"type",typeMap:{text:m}});let y=j=class extends l{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new u,this.type="label-3d"}supportsCallout(){return!0}hasVisibleCallout(){return p(this)}hasVisibleVerticalOffset(){return a(this)}clone(){return new j({styleOrigin:r(this.styleOrigin),symbolLayers:r(this.symbolLayers),thumbnail:r(this.thumbnail),callout:r(this.callout),verticalOffset:r(this.verticalOffset)})}static fromTextSymbol(t){return new j({symbolLayers:[m.fromTextSymbol(t)]})}};t([o({type:c,json:{write:!0}})],y.prototype,"verticalOffset",void 0),t([o(n)],y.prototype,"callout",void 0),t([o({json:{read:!1,write:!1}})],y.prototype,"styleOrigin",void 0),t([o({type:u})],y.prototype,"symbolLayers",void 0),t([e({LabelSymbol3D:"label-3d"},{readOnly:!0})],y.prototype,"type",void 0),y=j=t([i("esri.symbols.LabelSymbol3D")],y);var h=y;export default h;
