// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/maybe ../../../../core/unitUtils ../../../../chunks/earcut ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec4 ../../../../chunks/common ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./polygonUtils ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/WaterMaterial ../../webgl-engine/materials/internal/waterMaterialUtils".split(" "),
function(x,y,H,k,I,D,J,K,v,E,L,m,z,M,q,N,O,P,r,t,Q,R,S,F){const T=["polyline","polygon","extent"];r=function(A){function l(a,b,c,d){return A.call(this,a,b,c,d)||this}y._inheritsLoose(l,A);var h=l.prototype;h.doLoad=function(){var a=y._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();h.destroy=function(){A.prototype.destroy.call(this);this._context.stage.remove(this._material);this._material=null};h.createGraphics3DGraphic=function(a){a=a.graphic;if(!this._validateGeometry(a.geometry,
T,this.symbolLayer.type))return null;const b=this.setGraphicElevationContext(a,new N.ElevationContext);this.ensureDrapedStatus("on-the-ground"===b.mode);this.ensureMaterial();return this.draped?this._createAsOverlay(a):this._createAs3DShape(a,b,a.uid)};h.ensureMaterial=function(){if(!k.isSome(this._material)){var a={...F.defaultWaterMaterialParameters},b=this.symbolLayer.color;k.isSome(b)&&(a.color=H.toUnitRGBA(b));b=this._getCombinedOpacity(b,{hasIntrinsicColor:!0});a.color=[a.color[0],a.color[1],
a.color[2],b];a.transparent=1>b||this.needsDrivenTransparentPass;a.waveDirection=k.isSome(this.symbolLayer.waveDirection)?l.headingVectorFromAngle(this.symbolLayer.waveDirection):v.fromValues(0,0);b=F.wavePresets[this.symbolLayer.waveStrength+"-"+this.symbolLayer.waterbodySize];a.waveStrength=b.waveStrength;a.waveTextureRepeat=b.textureRepeat;a.waveVelocity=b.waveVelocity;a.flowStrength=b.perturbationStrength;a.slicePlaneEnabled=this._context.slicePlaneEnabled;a.isDraped=this.draped;this._material=
new S.WaterMaterial(a);this._context.stage.add(this._material)}};h.layerOpacityChanged=function(){if(k.isNone(this._material))return!0;const a=this._material.params.color,b=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0});this._material.setParameterValues({color:[a[0],a[1],a[2],b],transparent:1>b||this.needsDrivenTransparentPass});return!0};h.layerElevationInfoChanged=function(a,b,c){const d=this._elevationContext.mode;c=q.elevationModeChangeUpdateType(l.elevationModeChangeTypes,
c,d);if(c!==q.SymbolUpdateType.UPDATE)return c;const e=q.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>e)};h.slicePlaneEnabledChanged=function(){k.isSome(this._material)&&this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};h.physicalBasedRenderingChanged=function(){return!0};h.pixelRatioChanged=function(){return!0};h._createAs3DShape=function(a,b,c){a=t.geometryAsPolygon(a.geometry);if(k.isNone(a))return null;f.renderData=
t.geometryToRenderInfo(a,this._context.elevationProvider,this._context.renderCoordsHelper,b);const d=f.renderData.position.length/3;f.uvCoords=new Float64Array(2*d);f.outNum=0;f.outGeometries=[];f.outTransforms=[];f.outMaterials=[];this._create3DShapeGeometries(f);this._logGeometryCreationWarnings(f.renderData,a.rings,"rings","WaterSymbol3DLayer");if(0===f.outNum)return null;this._createUVCoordsFromVertices(f.uvCoords,f.renderData.mapPosition,d,this._context.elevationProvider.spatialReference);c=
new Q.Object3D({geometries:f.outGeometries,materials:f.outMaterials,transformations:f.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:c}});c=new P.Graphics3DObject3DGraphicLayer(this,c,f.outGeometries,null,null,M.perVertexElevationAligner,b);c.alignedSampledElevation=f.renderData.sampledElevation;c.needsElevationUpdates=q.needsElevationUpdates2D(b.mode);return c};h._createUVCoordsFromVertices=function(a,b,c,d){d=I.getMetersPerUnitForSR(d);z.empty(n);for(var e=0;e<
c;e++)K.set(G,b[3*e],b[3*e+1]),z.expandPointInPlace(n,G);E.scale(n,n,d);e=n[1]%l.unitSizeOfTexture;w[0]=n[0]-n[0]%l.unitSizeOfTexture;w[1]=n[1]-e;for(e=0;e<c;e++)a[2*e]=(b[3*e]*d-w[0])/l.unitSizeOfTexture,a[2*e+1]=(b[3*e+1]*d-w[1])/l.unitSizeOfTexture};h._create3DShapeGeometries=function(a){var b=a.renderData.polygons;const c=a.uvCoords;for(const {count:d,index:e,position:B,mapPosition:u,holeIndices:C}of b){if(k.isSome(this._context.clippingExtent)&&(m.empty(p),m.expandWithBuffer(p,u),!m.intersectsClippingArea(p,
this._context.clippingExtent)))continue;b=D.earcut(u,C,3);if(0===b.length)continue;b=new Uint32Array(b);const U=new Float64Array(c.buffer,2*e*c.BYTES_PER_ELEMENT,2*d);b=t.createWaterGeometry({indices:b,attributeData:{position:B,uv0:U,mapPosition:u}});a.outGeometries.push(b);a.outMaterials.push(k.unwrap(this._material));a.outTransforms.push(J.IDENTITY);a.outNum++}};h._createAsOverlay=function(a){const b=t.geometryAsPolygon(a.geometry);if(k.isNone(b))return null;k.unwrap(this._material).renderPriority=
this._renderPriority;g.renderData=t.geometryToRenderInfoDraped(b,this._context.overlaySR);const c=g.renderData.position.length/3;g.uvCoords=new Float64Array(2*c);g.outNum=0;g.outGeometries=[];g.outBoundingBox=m.empty();g.layerUid=this._context.layer.uid;g.graphicsUid=a.uid;this._createAsOverlayWater(g);this._logGeometryCreationWarnings(g.renderData,b.rings,"rings","WaterSymbol3DLayer");if(0===g.outNum)return null;this._createUVCoordsFromVertices(g.uvCoords,g.renderData.position,c,this._context.overlaySR);
return 0<g.outNum?new O(this,g.outGeometries,g.outBoundingBox):null};h._createAsOverlayWater=function(a){const b=a.uvCoords;var c=a.renderData.polygons;for(const {position:e,holeIndices:B,index:u,count:C}of c)if(m.empty(p),m.expandWithBuffer(p,e),m.intersectsClippingArea(p,this._context.clippingExtent)&&(m.expandWithAABB(a.outBoundingBox,p),c=D.earcut(e,B,3),0!==c.length)){c=new Uint32Array(c);var d=new Float64Array(b.buffer,2*u*b.BYTES_PER_ELEMENT,2*C);c=t.createWaterGeometry({indices:c,attributeData:{position:e,
uv0:d}});c=new R.RenderGeometry(c,k.unwrap(this._material),a.layerUid,a.graphicsUid);d=p;E.set(c.boundingSphere,.5*(d[0]+d[3]),.5*(d[1]+d[4]),0,.5*Math.sqrt((d[3]-d[0])*(d[3]-d[0])+(d[4]-d[1])*(d[4]-d[1])));a.outGeometries.push(c);a.outNum++}};l.headingVectorFromAngle=function(a){const b=v.create();a=L.toRadian(a);b[0]=Math.sin(a);b[1]=Math.cos(a);return b};y._createClass(l,[{key:"test",get:function(){return{create3DShape:a=>this._createAs3DShape(a.graphic,a.elevationContext,a.graphicUid),ensureMaterial:()=>
this.ensureMaterial()}}}]);return l}(r.Graphics3DSymbolLayer);r.unitSizeOfTexture=100;r.elevationModeChangeTypes={definedChanged:q.SymbolUpdateType.RECREATE,staysOnTheGround:q.SymbolUpdateType.NONE,onTheGroundChanged:q.SymbolUpdateType.RECREATE};const w=v.create(),n=z.create(),G=v.create(),p=m.create(),f={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},g={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,
outMaterials:null,outTransforms:null};x.Graphics3DWaterSymbolLayer=r;x.default=r;Object.defineProperty(x,"__esModule",{value:!0})});