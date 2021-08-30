/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{i as e,b as t}from"../core/lang.js";import{i as r,t as s}from"./mat4.js";import{c as i}from"./mat4f64.js";import{e as o,Z as n,b as a}from"./mathUtils.js";import{e as l,c as h}from"./vec4.js";import{f as p,c as d,a as _}from"./vec4f32.js";import{O as f}from"./Object3DVisualElement.js";import{n as m}from"./lineUtils.js";import{R as u}from"./RibbonLineMaterial.js";class c extends f{constructor(e){super(e),this._renderOccluded=4,this._width=1,this._color=p(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stippleIntegerRepeats=!1,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this.applyProps(e)}setGeometryFromExtent(e){const t=this.view.spatialReference,r=a(),s=a(),i=100,n=[];o(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),o(r,e[2],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),o(r,e[2],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),o(r,e[0],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),o(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),o(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,s),n.push([s[0],s[1],s[2]]),this.geometry=[n]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],r=e.origin,s=e.basis1,i=e.basis2,o=.5,n=a(),l=a(),h=a(),p=a();n[0]=r[0]-s[0]*o-i[0]*o,n[1]=r[1]-s[1]*o-i[1]*o,n[2]=r[2]-s[2]*o-i[2]*o,l[0]=r[0]-s[0]*o+i[0]*o,l[1]=r[1]-s[1]*o+i[1]*o,l[2]=r[2]-s[2]*o+i[2]*o,h[0]=r[0]+s[0]*o+i[0]*o,h[1]=r[1]+s[1]*o+i[1]*o,h[2]=r[2]+s[2]*o+i[2]*o,p[0]=r[0]+s[0]*o-i[0]*o,p[1]=r[1]+s[1]*o-i[1]*o,p[2]=r[2]+s[2]*o-i[2]*o,t.push([n[0],n[1],n[2]]),t.push([l[0],l[1],l[2]]),t.push([h[0],h[1],h[2]]),t.push([p[0],p[1],p[2]]),t.push([n[0],n[1],n[2]]),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;r(g),s(g,g,t),this.transform=g;const{points:i}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[i]}setGeometryFromSegments(e,t=n){r(g),s(g,g,t),this.transform=g,this.geometry=e.map((e=>e.createRenderGeometry(t,this.view.renderCoordsHelper).points))}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){l(e,this._color)||(h(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(r){e(r)?!t(this._innerColor)&&l(r,this._innerColor)||(this._innerColor=h(d(),r),this._updateMaterial()):e(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(t){const r=e(t)!==e(this._stipplePattern);this._stipplePattern=t,r?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(r){(t(r)||t(this._stippleOffColor)||!l(r,this._stippleOffColor))&&(this._stippleOffColor=e(r)?_(r):null,this._updateMaterial())}get stippleIntegerRepeats(){return this._stippleIntegerRepeats}set stippleIntegerRepeats(e){this._stippleIntegerRepeats!==e&&(this._stippleIntegerRepeats=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}createExternalResources(){this._material=new u(this.materialParameters)}destroyExternalResources(){this._material=null}createGeometries(e){const t=this._createLineGeometries();if(0!==t.length)for(let r=0;r<t.length;++r){const s=m(t[r]);e.addGeometry(s,this._material)}}forEachExternalMaterial(e){e(this._material)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,stippleIntegerRepeats:this._stippleIntegerRepeats,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}_updateMaterial(){this.attached&&this._material.setParameterValues(this.materialParameters)}_createLineGeometries(){const e=this.geometry;if(t(e)||0===e.length)return[];const r=[];return e.forEach((e=>{const t=e.length,s=new Float64Array(3*t);e.forEach(((e,t)=>{s[3*t+0]=e[0],s[3*t+1]=e[1],s[3*t+2]=e[2]}));const i={attributeData:{position:s},removeDuplicateStartEnd:0};r.push(i)})),r}}const g=i();export{c as L};
