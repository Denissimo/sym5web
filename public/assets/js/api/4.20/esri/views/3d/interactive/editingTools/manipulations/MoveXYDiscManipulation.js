// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../Color ../../../../../core/Handles ../../../../../core/maybe ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/vectorStacks ../../../../../support/elevationInfoUtils ../../Manipulator3D ../dragEventPipeline3D ../settings ./config ./Manipulation ./moveUtils ../snapping/SnapToScene ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline".split(" "),
function(v,w,A,B,C,x,D,E,l,y,F,G,H,I,d,q,J,K,L,M,r){q=function(z){function m(a){var b=z.call(this)||this;b._handles=new B;b._snapToScene=new K.SnapToScene;b._discMaterial=b._createMaterial();b._discMaterialTransparent=b._createMaterial(.5);b._scale=1;b._radius=d.DISC_RADIUS;b._view=a.view;b._tool=a.tool;null!=a.snapToScene&&(b.snapToScene=a.snapToScene);null!=a.radius&&(b._radius=a.radius);b._createManipulator();b.forEachManipulator(e=>b._tool.manipulators.add(e));return b}w._inheritsLoose(m,z);var c=
m.prototype;c.destroy=function(){this._handles.destroy();this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()});this._manipulator=this._view=this._tool=null};c.forEachManipulator=function(a){a(this._manipulator,1)};c.createGraphicDragPipeline=function(a,b,e){const f=b.graphic,g=F.getGraphicEffectiveElevationInfo(f),h=C.unwrap(f.geometry).spatialReference;return J.createGraphicMoveDragPipeline(b,e,k=>this.createDragPipeline((n,t,p,u,N)=>k(n,a(n,t,p,u,N),p),g,h,f),this._view.state.viewingMode)};
c.createDragPipeline=function(a,b,e,f){const g=this._view;return r.createManipulatorDragEventPipeline(this._manipulator,(h,k,n,t,p)=>{k=k.next(r.dragAtLocation(g,h.elevationAlignedLocation)).next(H.screenToMapXYAtLocation(g,h.elevationAlignedLocation,b,e,f)).next(this._snapToScene.createDragEventPipelineStep(g,b),this._snapToScene.next).next(u=>({...u,manipulatorType:1})).next(r.addScreenDelta());a(h,k,n,t,p)})};c._updateManipulatorTransform=function(){const a=x.fromScaling(y.sm4d.get(),E.set(y.sv3d.get(),
this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=a};c._createManipulator=function(){this._manipulator=new G.Manipulator3D({view:this._view,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:l.fromValues(0,0,1)},worldOriented:!0});this._updateManipulator()};c._updateManipulator=function(){const a=L.createCylinderGeometry(d.DISC_HEIGHT,1,d.GEOMETRY_SEGMENTS,l.fromValues(0,0,1),l.fromValues(0,0,0)),
b=x.fromScaling(D.create(),l.fromValues(this._radius,this._radius,this._radius));this._manipulator.renderObjects=[{geometry:a,material:this._discMaterial,transform:b,stateMask:2},{geometry:a,material:this._discMaterialTransparent,transform:b,stateMask:1}];this._manipulator.radius=this._radius/d.DISC_RADIUS*d.DISC_COLLISION_RADIUS};c._createMaterial=function(a=1){const b=A.toUnitRGBA(I.colors.main);b[3]*=a;return new M.ColorMaterial({color:b,transparent:1!==a,cullFace:2,renderOccluded:2})};w._createClass(m,
[{key:"displayScale",get:function(){return this._scale},set:function(a){this._scale=a;this._updateManipulatorTransform()}},{key:"snapToScene",get:function(){return this._snapToScene.enabled},set:function(a){this._snapToScene.enabled=a}},{key:"radius",get:function(){return this._radius},set:function(a){a!==this._radius&&(this._radius=a,this._updateManipulator())}},{key:"test",get:function(){return{discManipulator:this._manipulator}}}]);return m}(q.Manipulation);v.MoveXYDiscManipulation=q;Object.defineProperty(v,
"__esModule",{value:!0})});