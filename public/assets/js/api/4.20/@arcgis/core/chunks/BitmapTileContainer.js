/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as e}from"./aaBoundingRect.js";import{B as s}from"./Bitmap.js";import{T as t}from"./TiledDisplayObject.js";import{b as r}from"./brushes.js";import{W as i}from"./enums.js";import{T as a}from"./TileContainer.js";class n extends t{constructor(e,t,r,i=null){super(e,t,r,r),this.bitmap=new s(i,"standard",!1),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,s){super.setTransform(e,s),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class o extends a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(e(),s);return new n(s,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"bitmap (tile)",brushes:[r.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:i.MAP});return[...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===i.MAP&&super.doRender(e)}}export{o as B};
