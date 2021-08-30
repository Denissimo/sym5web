/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{h as s}from"../../chunks/handleUtils.js";import{b as r,f as o,d as i,i as n}from"../../core/lang.js";import{h as c,m as p}from"../../chunks/ElevationProfileLine.js";import{u as l}from"../../core/Accessor.js";import{d as a}from"../../chunks/unitUtils.js";import{on as u}from"../../core/watchUtils.js";import{property as m}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{e as j}from"../../chunks/mathUtils.js";import{a as d}from"../../chunks/vec4f64.js";import{g as y}from"../../chunks/projectionEllipsoid.js";import{c as v,b as f}from"../../chunks/ray.js";import{GeometryDescriptor as k}from"../../chunks/ElevationQuery2.js";import{I as g}from"../../chunks/Intersector.js";import{t as _}from"../../chunks/intersectorUtilsConversions.js";import"../../chunks/colorUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/arrayUtils.js";import"../../chunks/Evented.js";import"../../chunks/uuid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/metadata.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../chunks/write.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../geometry/SpatialReference.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/jsonMap.js";import"../../chunks/vectorStacks.js";import"../../chunks/quatf64.js";import"../../chunks/mat4f64.js";import"../../chunks/vec2f64.js";import"../../chunks/asyncUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../geometry/projection.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../layers/support/ElevationSampler.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/vec4.js";import"../../chunks/boundedPlane.js";import"../../chunks/lineSegment.js";import"../../chunks/plane.js";import"../../chunks/sphere.js";import"../../chunks/Object3D.js";import"../../chunks/mathUtils2.js";import"../../chunks/utils4.js";import"../../chunks/uid.js";import"../../chunks/Util.js";import"../../chunks/vec2.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/mat3.js";import"../../chunks/quat.js";import"../../chunks/vec3f32.js";let w=class extends c{constructor(e){super(e),this.type="view",this.color=new t("#cf4ccf"),this.viewVisualizationEnabled=!0,this.include=null,this.exclude=null,this.numSamplesForPreview=50,this.numSamplesPerChunk=25,this._getQueryElevationDependencies=p(((e,t,s,r,o,i,c)=>({inputGraphicUid:n(e)?x(e):null,visibleLayers:t,maxIntersectionDistance:s,intersectOptions:r,view:o,stationary:i,spatialReference:c}))),this._vecA=d(),this._vecB=d(),this._ray=v()}get minDemResolution(){var e,t,s;const o=null==(e=this._viewModel)?void 0:e.view;if(r(o)||"3d"!==o.type)return null;const i=null==(t=o.pointsOfInterest)||null==(s=t.focus)?void 0:s.renderLocation;if(!i)return null;return o.state.camera.computeRenderPixelSizeAt(i)*a(o.spatialReference)}get queryElevationDependencies(){return o(this._view,(e=>this._getQueryElevationDependencies(this._viewModel.input,this._visibleLayers,this._maxIntersectionDistance,this._intersectOptions,e,e.stationary,e.spatialReference)))}get _visibleLayers(){const e=this._view,t=o(e,(e=>{var t,s;return null==(t=e.map)||null==(s=t.allLayers)?void 0:s.filter((e=>e.visible)).toArray()}));return i(t,[])}get _intersectOptions(){const e=this._view;if(r(e))return{};const t=e.externalToInternalIntersectOptions({include:this.include,exclude:this.exclude}),s=e.externalToInternalIntersectOptions({exclude:this._pointCloudLayers});return t.exclude=l(t.exclude,s.exclude),t}get _pointCloudLayers(){const e=this._view;return r(e)?[]:e.allLayerViews.toArray().filter((e=>{var t;return"point-cloud"===(null==(t=e.layer)?void 0:t.type)})).map((e=>e.layer))}get _view(){const e=this._viewModel.view;return n(e)&&"3d"===e.type?e:null}get _maxIntersectionDistance(){const e=this._view;return r(e)||!e.renderCoordsHelper?Number.POSITIVE_INFINITY:y(e.spatialReference).radius/e.renderCoordsHelper.unitInMeters}get _intersector(){const e=this._view;if(r(e))return null;const t=new g(e.state.viewingMode),s=t.options;return s.hud=!1,s.invisibleTerrain=!1,s.backfacesTerrain=!1,s.selectionMode=!1,s.store=2,t}async queryElevation(e,{noDataValue:t,signal:s}){const o=this.queryElevationDependencies;if(r(o))throw new Error("ElevationProfileLineInput: no dependencies");const{intersectOptions:i,view:n,spatialReference:c}=o,p=n.renderCoordsHelper,l=n.sceneIntersectionHelper,a=this._intersector,u=this._vecA,m=this._vecA,h=this._vecB,d=this._ray,y=await k.fromGeometry(e).project(c,s),v=y.coordinates,g=v.length;for(let e=0;e<g;++e){var _;const s=v[e];j(h,s.x,s.y,null!=(_=s.z)?_:0),p.toRenderCoords(h,c,h),p.setAltitude(u,2e5,h);const r=f(u,h,d);l.computeIntersection(r,a,i);const n=I(o,a.results.all);n?(n.getIntersectionPoint(m),p.fromRenderCoords(m,m,c),s.z=m[2]):s.z=t}return{geometry:y.export(),noDataValue:t}}attach(e){const t=()=>this._onChange();return s([super.attach(e),this.watch("queryElevationDependencies",t),u(this,"include","change",t,t,t),u(this,"exclude","change",t,t,t),u(e,"view.elevationProvider","elevation-change",t)])}};function I({view:e,inputGraphicUid:t,maxIntersectionDistance:s},o){for(let i=0;i<o.length;i++){const n=o[i];if(n.distanceInRenderSpace>s)continue;const c=_(n,e);if(r(c)||x(c)!==t)return n}return null}function x(e){if(e.layer&&"objectIdField"in e.layer){const t=e.attributes[e.layer.objectIdField];if(t)return`o-${e.layer.id}-${t}`}return`u-${e.uid}`}e([m({type:t,nonNullable:!0})],w.prototype,"color",void 0),e([m()],w.prototype,"viewVisualizationEnabled",void 0),e([m()],w.prototype,"include",void 0),e([m()],w.prototype,"exclude",void 0),e([m({readOnly:!0})],w.prototype,"minDemResolution",null),e([m()],w.prototype,"queryElevationDependencies",null),e([m()],w.prototype,"_visibleLayers",null),e([m()],w.prototype,"_intersectOptions",null),e([m()],w.prototype,"_pointCloudLayers",null),e([m()],w.prototype,"_view",null),e([m()],w.prototype,"_maxIntersectionDistance",null),e([m()],w.prototype,"_intersector",null),w=e([h("esri.widgets.ElevationProfile.ElevationProfileLineView")],w);var b=w;export default b;