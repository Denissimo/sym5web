// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../DisplayObject ../../tiling/TileKey".split(" "),function(g,h,k,l,m,q,r){k=function(n){function e(a,c,d,f=d){var b=n.call(this)||this;b.triangleCountReportedInDebug=0;b.transforms={dvs:m.create(),tileMat3:m.create()};b.triangleCount=0;b.key=new r(a);b.bounds=c;b.size=d;b.coordRange=f;return b}h._inheritsLoose(e,n);var p=e.prototype;p.destroy=function(){this.texture&&
(this.texture.dispose(),this.texture=null)};p.setTransform=function(a,c){c/=a.resolution*a.pixelRatio;const d=this.transforms.tileMat3,[f,b]=a.toScreenNoRotation([0,0],this.coords);l.set(d,this.size[0]/this.coordRange[0]*c,0,0,0,this.size[1]/this.coordRange[1]*c,0,f,b,1);l.multiply(this.transforms.dvs,a.displayViewMat3,d)};h._createClass(e,[{key:"coords",get:function(){return this._coords}},{key:"bounds",get:function(){return this._bounds},set:function(a){this._coords=[a[0],a[3]];this._bounds=a}}]);
return e}(q.DisplayObject);g.TiledDisplayObject=k;Object.defineProperty(g,"__esModule",{value:!0})});