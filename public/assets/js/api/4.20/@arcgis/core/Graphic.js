/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"./chunks/tslib.es6.js";import{geometryTypes as o}from"./geometry.js";import s from"./PopupTemplate.js";import{symbolTypes as e}from"./symbols.js";import{a as r}from"./chunks/JSONSupport.js";import{i,clone as p}from"./core/lang.js";import{g as m}from"./chunks/uid.js";import{property as l}from"./core/accessorSupport/decorators/property.js";import"./chunks/ensureType.js";import"./chunks/Logger.js";import{subclass as n}from"./core/accessorSupport/decorators/subclass.js";import{fromJSON as a}from"./geometry/support/jsonUtils.js";import"./geometry/Extent.js";import"./chunks/string.js";import"./chunks/object.js";import"./geometry/Geometry.js";import"./chunks/reader.js";import"./geometry/SpatialReference.js";import"./chunks/writer.js";import"./core/Accessor.js";import"./chunks/deprecate.js";import"./chunks/metadata.js";import"./chunks/handleUtils.js";import"./chunks/ArrayPool.js";import"./chunks/arrayUtils.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./core/Error.js";import"./chunks/Message.js";import"./config.js";import"./chunks/write.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/Ellipsoid.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./chunks/jsonMap.js";import"./core/Collection.js";import"./chunks/Evented.js";import"./layers/support/fieldUtils.js";import"./chunks/domains.js";import"./layers/support/CodedValueDomain.js";import"./chunks/enumeration.js";import"./layers/support/Domain.js";import"./layers/support/InheritedDomain.js";import"./layers/support/RangeDomain.js";import"./chunks/arcadeOnDemand.js";import"./popup/content.js";import"./popup/content/AttachmentsContent.js";import"./popup/content/Content.js";import"./popup/content/CustomContent.js";import"./popup/content/FieldsContent.js";import"./popup/FieldInfo.js";import"./popup/support/FieldInfoFormat.js";import"./chunks/date.js";import"./chunks/number.js";import"./chunks/locale.js";import"./popup/content/MediaContent.js";import"./popup/content/BarChartMediaInfo.js";import"./chunks/chartMediaInfoUtils.js";import"./chunks/MediaInfo.js";import"./popup/content/support/ChartMediaInfoValue.js";import"./popup/content/support/ChartMediaInfoValueSeries.js";import"./core/accessorSupport/decorators/aliasOf.js";import"./popup/content/ColumnChartMediaInfo.js";import"./popup/content/ImageMediaInfo.js";import"./popup/content/support/ImageMediaInfoValue.js";import"./popup/content/LineChartMediaInfo.js";import"./popup/content/PieChartMediaInfo.js";import"./popup/content/TextContent.js";import"./popup/ExpressionInfo.js";import"./popup/LayerOptions.js";import"./popup/RelatedRecordsInfo.js";import"./popup/support/RelatedRecordsInfoFieldOrder.js";import"./support/actions/ActionBase.js";import"./chunks/Identifiable.js";import"./support/actions/ActionButton.js";import"./support/actions/ActionToggle.js";import"./symbols/CIMSymbol.js";import"./symbols/Symbol.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./symbols/ExtrudeSymbol3DLayer.js";import"./symbols/Symbol3DLayer.js";import"./chunks/utils.js";import"./symbols/edges/Edges3D.js";import"./chunks/screenUtils.js";import"./chunks/materialUtils.js";import"./chunks/opacityUtils.js";import"./symbols/edges/SketchEdges3D.js";import"./symbols/edges/SolidEdges3D.js";import"./chunks/Symbol3DMaterial.js";import"./symbols/FillSymbol.js";import"./symbols/SimpleLineSymbol.js";import"./symbols/LineSymbol.js";import"./symbols/LineSymbolMarker.js";import"./symbols/FillSymbol3DLayer.js";import"./symbols/patterns/StylePattern3D.js";import"./chunks/colors.js";import"./chunks/Symbol3DOutline.js";import"./symbols/Font.js";import"./symbols/IconSymbol3DLayer.js";import"./core/urlUtils.js";import"./chunks/persistableUrlUtils.js";import"./symbols/LabelSymbol3D.js";import"./symbols/Symbol3D.js";import"./chunks/collectionUtils.js";import"./portal/Portal.js";import"./intl.js";import"./request.js";import"./kernel.js";import"./chunks/assets.js";import"./chunks/Loadable.js";import"./chunks/Promise.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./symbols/LineSymbol3DLayer.js";import"./symbols/ObjectSymbol3DLayer.js";import"./symbols/PathSymbol3DLayer.js";import"./symbols/TextSymbol3DLayer.js";import"./symbols/WaterSymbol3DLayer.js";import"./chunks/Thumbnail.js";import"./chunks/Symbol3DVerticalOffset.js";import"./symbols/callouts/Callout3D.js";import"./symbols/callouts/LineCallout3D.js";import"./symbols/LineSymbol3D.js";import"./symbols/MarkerSymbol.js";import"./symbols/MeshSymbol3D.js";import"./symbols/PictureFillSymbol.js";import"./chunks/urlUtils.js";import"./symbols/PictureMarkerSymbol.js";import"./symbols/PointSymbol3D.js";import"./symbols/PolygonSymbol3D.js";import"./symbols/SimpleFillSymbol.js";import"./symbols/SimpleMarkerSymbol.js";import"./symbols/TextSymbol.js";import"./symbols/WebStyleSymbol.js";var u;let y=u=class extends r{constructor(...t){super(...t),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:m(),configurable:!0})}normalizeCtorArgs(t,o,s,e){return t&&!t.declaredClass?t:{geometry:t,symbol:o,attributes:s,popupTemplate:e}}set attributes(t){const o=this._get("attributes");o!==t&&(this._set("attributes",t),this._notifyLayer("attributes",o,t))}set geometry(t){const o=this._get("geometry");o!==t&&(this._set("geometry",t),this._notifyLayer("geometry",o,t))}set symbol(t){const o=this._get("symbol");o!==t&&(this._set("symbol",t),this._notifyLayer("symbol",o,t))}set visible(t){const o=this._get("visible");o!==t&&(this._set("visible",t),this._notifyLayer("visible",o,t))}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate;for(const o of[this.sourceLayer,this.layer])if(o){if("popupTemplate"in o&&o.popupTemplate)return o.popupTemplate;if(t&&"defaultPopupTemplate"in o&&i(o.defaultPopupTemplate))return o.defaultPopupTemplate}return null}getAttribute(t){return this.attributes&&this.attributes[t]}setAttribute(t,o){if(this.attributes){const s=this.getAttribute(t);this.attributes[t]=o,this._notifyLayer("attributes",s,o,t)}else this.attributes={[t]:o},this._notifyLayer("attributes",void 0,o,t)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:i(this.geometry)?this.geometry.toJSON():null,symbol:i(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new u(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:p(this.attributes),geometry:p(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:p(this.symbol),visible:this.visible}}_notifyLayer(t,o,s,e){if(!this.layer||!("graphicChanged"in this.layer))return;const r={graphic:this,property:t,oldValue:o,newValue:s};"attributes"===t&&(r.attributeName=e),this.layer.graphicChanged(r)}};t([l({value:null})],y.prototype,"attributes",null),t([l({value:null,types:o,json:{read:a}})],y.prototype,"geometry",null),t([l({type:Boolean})],y.prototype,"isAggregate",void 0),t([l()],y.prototype,"layer",void 0),t([l({type:s})],y.prototype,"popupTemplate",void 0),t([l()],y.prototype,"sourceLayer",void 0),t([l({value:null,types:e})],y.prototype,"symbol",null),t([l({type:Boolean,value:!0})],y.prototype,"visible",null),y=u=t([n("esri.Graphic")],y),function(t){t.generateUID=m}(y||(y={}));var c=y;export default c;
