/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../core/lang.js";import{s,m as t}from"./mat3.js";import{c as o}from"./mat3f32.js";import{D as e}from"./DisplayObject.js";import{T as i}from"./TileKey.js";class r extends e{constructor(s,t,e,r=e){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:o(),tileMat3:o()},this.triangleCount=0,this.key=new i(s),this.bounds=t,this.size=e,this.coordRange=r}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s}setTransform(o,e){const i=e/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,a]=o.toScreenNoRotation([0,0],this.coords),h=this.size[0]/this.coordRange[0]*i,d=this.size[1]/this.coordRange[1]*i;s(r,h,0,0,0,d,0,n,a,1),t(this.transforms.dvs,o.displayViewMat3,r)}}export{r as T};
