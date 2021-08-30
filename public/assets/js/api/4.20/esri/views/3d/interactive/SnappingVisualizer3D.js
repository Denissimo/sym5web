// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../core/has ../../../core/handleUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ./visualElements/ExtendedLineVisualElement ./visualElements/ParallelLineVisualElement ./visualElements/PointVisualElement ./visualElements/RightAngleQuadVisualElement ../../interactive/snapping/Settings ../../interactive/snapping/snappingUtils ../../interactive/snapping/SnappingVisualizer".split(" "),function(p,x,k,q,m,y,r,z,A,t,B,c,l,C){q=
function(u){function n(){return u.apply(this,arguments)||this}x._inheritsLoose(n,u);var g=n.prototype;g.visualizeIntersectionPoint=function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(new t.PointVisualElement({view:f,primitive:"circle",geometry:d.createPoint(b.intersectionPoint),elevationInfo:e,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:k.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};g.visualizePoint=function(b,a){const {coordinateHelper:d,elevationInfo:e,
view:f}=a;return m.destroyHandle(new t.PointVisualElement({view:f,primitive:"circle",geometry:d.createPoint(b.point),elevationInfo:e,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:k.toUnitRGBA(c.defaults.orange),pixelSnappingEnabled:!1}))};g.visualizeLine=function(b,a){const {coordinateHelper:d,elevationInfo:e,view:f}=a;return m.destroyHandle(this.createLineSegmentHintFromMap(b.type,b.lineStart,b.lineEnd,d,e,f,b.fadeLeft,b.fadeRight))};g.visualizeParallelSign=function(b,a){const {coordinateHelper:d,
elevationInfo:e,view:f}=a,h=l.anyMapPointToRender(b.lineStart,d,e,a.view);b=l.anyMapPointToRender(b.lineEnd,d,e,a.view);b=y.lerp(b,h,b,.5);a=new A.ParallelLineVisualElement({view:f,attached:!1,offset:c.defaults.parallelLineHintOffset,length:c.defaults.parallelLineHintLength,width:c.defaults.parallelLineHintWidth,color:k.toUnitRGBA(c.defaults.orange),location:b,renderOccluded:16});a.setDirectionFromPoints(h,b);a.attached=!0;return m.destroyHandle(a)};g.visualizeRightAngleQuad=function(b,a){const {coordinateHelper:d,
elevationInfo:e,view:f}=a;return m.destroyHandle(new B.RightAngleQuadVisualElement({view:f,attached:!0,color:k.toUnitRGBA(c.defaults.orange),renderOccluded:2,outlineRenderOccluded:16,outlineColor:k.toUnitRGBA(c.defaults.orange),outlineSize:c.defaults.rightAngleHintOutlineSize,size:c.defaults.rightAngleHintSize,geometry:{previous:l.anyMapPointToRender(b.previousVertex,d,e,f),center:l.anyMapPointToRender(b.centerVertex,d,e,f),next:l.anyMapPointToRender(b.nextVertex,d,e,f)}}))};g.createLineSegmentHintFromMap=
function(b,a,d,e,f,h,D=!0,E=!0){const v=r.create(),w=r.create();l.anyMapPointsToRenderWithEqualZ(a,d,e,f,h,v,w);return this.createLineSegmentHint(b,h,v,w,D,E)};g.createLineSegmentHint=function(b,a,d,e,f=!0,h=!0){a=new z.ExtendedLineVisualElement({view:a,extensionType:3,start:d,end:e,color:k.toUnitRGBA(c.defaults.orange),renderOccluded:16});switch(b){case 0:a.width=c.defaults.lineHintWidthTarget;a.fadedExtensions={start:0,end:c.defaults.lineHintFadedExtensions};break;case 2:a.width=c.defaults.lineHintWidthReference;
a.fadedExtensions={start:0,end:0};break;case 1:a.width=c.defaults.lineHintWidthReference,a.fadedExtensions={start:f?c.defaults.lineHintFadedExtensions:0,end:h?c.defaults.lineHintFadedExtensions:0}}a.attached=!0;return a};return n}(C.SnappingVisualizer);p.SnappingVisualizer3D=q;Object.defineProperty(p,"__esModule",{value:!0})});