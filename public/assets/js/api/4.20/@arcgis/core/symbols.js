/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as o}from"./chunks/ensureType.js";import{d as s}from"./core/accessorSupport/decorators/subclass.js";import e from"./symbols/CIMSymbol.js";export{default as CIMSymbol}from"./symbols/CIMSymbol.js";export{default as ExtrudeSymbol3DLayer}from"./symbols/ExtrudeSymbol3DLayer.js";export{default as BaseFillSymbol}from"./symbols/FillSymbol.js";export{default as FillSymbol3DLayer}from"./symbols/FillSymbol3DLayer.js";export{default as Font}from"./symbols/Font.js";export{default as IconSymbol3DLayer}from"./symbols/IconSymbol3DLayer.js";import r from"./symbols/LabelSymbol3D.js";export{default as LabelSymbol3D}from"./symbols/LabelSymbol3D.js";import t from"./symbols/LineSymbol3D.js";export{default as LineSymbol3D}from"./symbols/LineSymbol3D.js";export{default as LineSymbol3DLayer}from"./symbols/LineSymbol3DLayer.js";export{default as BaseMarkerSymbol}from"./symbols/MarkerSymbol.js";import l from"./symbols/MeshSymbol3D.js";export{default as MeshSymbol3D}from"./symbols/MeshSymbol3D.js";export{default as ObjectSymbol3DLayer}from"./symbols/ObjectSymbol3DLayer.js";export{default as PathSymbol3DLayer}from"./symbols/PathSymbol3DLayer.js";import m from"./symbols/PictureFillSymbol.js";export{default as PictureFillSymbol}from"./symbols/PictureFillSymbol.js";import i from"./symbols/PictureMarkerSymbol.js";export{default as PictureMarkerSymbol}from"./symbols/PictureMarkerSymbol.js";import p from"./symbols/PointSymbol3D.js";export{default as PointSymbol3D}from"./symbols/PointSymbol3D.js";import a from"./symbols/PolygonSymbol3D.js";export{default as PolygonSymbol3D}from"./symbols/PolygonSymbol3D.js";import y from"./symbols/SimpleFillSymbol.js";export{default as SimpleFillSymbol}from"./symbols/SimpleFillSymbol.js";import b from"./symbols/SimpleLineSymbol.js";export{default as SimpleLineSymbol}from"./symbols/SimpleLineSymbol.js";import n from"./symbols/SimpleMarkerSymbol.js";export{default as SimpleMarkerSymbol}from"./symbols/SimpleMarkerSymbol.js";import j from"./symbols/Symbol.js";export{default as BaseSymbol}from"./symbols/Symbol.js";export{default as BaseSymbol3D}from"./symbols/Symbol3D.js";export{default as BaseSymbol3DLayer}from"./symbols/Symbol3DLayer.js";import u from"./symbols/TextSymbol.js";export{default as TextSymbol}from"./symbols/TextSymbol.js";export{default as TextSymbol3DLayer}from"./symbols/TextSymbol3DLayer.js";export{default as WaterSymbol3DLayer}from"./symbols/WaterSymbol3DLayer.js";import c from"./symbols/WebStyleSymbol.js";export{default as WebStyleSymbol}from"./symbols/WebStyleSymbol.js";export{default as LineCallout3D,L as LineCallout3DBorder}from"./symbols/callouts/LineCallout3D.js";export{S as Symbol3DVerticalOffset}from"./chunks/Symbol3DVerticalOffset.js";import"./core/lang.js";import"./chunks/Logger.js";import"./config.js";import"./chunks/object.js";import"./chunks/string.js";import"./chunks/Message.js";import"./chunks/metadata.js";import"./chunks/handleUtils.js";import"./chunks/tslib.es6.js";import"./core/accessorSupport/decorators/property.js";import"./chunks/enumeration.js";import"./chunks/jsonMap.js";import"./chunks/reader.js";import"./chunks/writer.js";import"./layers/support/fieldUtils.js";import"./core/Error.js";import"./chunks/domains.js";import"./layers/support/CodedValueDomain.js";import"./chunks/JSONSupport.js";import"./core/Accessor.js";import"./chunks/deprecate.js";import"./chunks/ArrayPool.js";import"./chunks/arrayUtils.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./chunks/write.js";import"./layers/support/Domain.js";import"./layers/support/InheritedDomain.js";import"./layers/support/RangeDomain.js";import"./chunks/arcadeOnDemand.js";import"./geometry.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/SpatialReference.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/Ellipsoid.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./chunks/utils.js";import"./symbols/edges/Edges3D.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/screenUtils.js";import"./chunks/materialUtils.js";import"./chunks/opacityUtils.js";import"./symbols/edges/SketchEdges3D.js";import"./symbols/edges/SolidEdges3D.js";import"./chunks/Symbol3DMaterial.js";import"./symbols/patterns/StylePattern3D.js";import"./chunks/colors.js";import"./chunks/Symbol3DOutline.js";import"./core/urlUtils.js";import"./chunks/persistableUrlUtils.js";import"./core/Collection.js";import"./chunks/Evented.js";import"./chunks/urlUtils.js";import"./symbols/LineSymbol.js";import"./symbols/LineSymbolMarker.js";import"./chunks/collectionUtils.js";import"./portal/Portal.js";import"./intl.js";import"./chunks/number.js";import"./chunks/locale.js";import"./request.js";import"./kernel.js";import"./chunks/assets.js";import"./chunks/Loadable.js";import"./chunks/Promise.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./chunks/Thumbnail.js";import"./symbols/callouts/Callout3D.js";function f(o){return o instanceof j}function d(o){if(!o)return!1;switch(o.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0;default:return!1}}function k(o){if(!o)return!1;switch(o.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0;default:return!1}}const h={base:j,key:"type",typeMap:{"simple-fill":y,"picture-fill":m,"picture-marker":i,"simple-line":b,"simple-marker":n,text:u,"label-3d":r,"line-3d":t,"mesh-3d":l,"point-3d":p,"polygon-3d":a,"web-style":c,cim:e},errorContext:"symbol"},D={base:j,key:"type",typeMap:{"picture-marker":i,"simple-marker":n,text:u,"web-style":c,cim:e},errorContext:"symbol"},x=s({types:h}),g={base:j,key:"type",typeMap:{"simple-fill":y,"picture-fill":m,"picture-marker":i,"simple-line":b,"simple-marker":n,text:u,"line-3d":t,"mesh-3d":l,"point-3d":p,"polygon-3d":a,"web-style":c,cim:e},errorContext:"symbol"},M={base:j,key:"type",typeMap:{text:u,"label-3d":r},errorContext:"symbol"},P={base:j,key:"type",typeMap:{"label-3d":r,"line-3d":t,"mesh-3d":l,"point-3d":p,"polygon-3d":a,"web-style":c},errorContext:"symbol"},U={base:j,key:"type",typeMap:{"line-3d":t,"mesh-3d":l,"point-3d":p,"polygon-3d":a,"web-style":c},errorContext:"symbol"},C={base:j,key:"type",typeMap:{"label-3d":r},errorContext:"symbol"},F=o(h);export{F as ensureType,f as isSymbol,d as isSymbol2D,k as isSymbol3D,x as readSymbol,h as symbolTypes,P as symbolTypes3D,D as symbolTypesCluster,M as symbolTypesLabel,C as symbolTypesLabel3D,g as symbolTypesRenderer,U as symbolTypesRenderer3D};