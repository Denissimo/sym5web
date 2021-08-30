/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as e}from"../core/lang.js";import r from"../geometry/SpatialReference.js";let t;async function a(){return t||(t=(async()=>{const e=await import("./arcadeUtils.js").then((function(e){return e.aq}));return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),t}const s=(e,r,t)=>n.create(e,r,t,null,["$feature"]),i=(e,r,t)=>n.create(e,r,t,null,["$feature","$view"]),c=(e,r,t,a)=>n.create(e,r,t,a,["$feature","$view"]);class n{constructor(e,r,t,a,s,i,c,n){this.script=e,this.evaluate=s;const o=Array.isArray(c)?c:c.fields;this.fields=o,this._syntaxTree=a,this._arcade=r,this._arcadeDictionary=t,this._arcadeFeature=i,this._spatialReference=n,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(t,s,i,c,o,l){const{arcade:u,Feature:p,Dictionary:f}=await a(),d=r.fromJSON(s),h=u.parseScript(t,l),y=o.reduce(((e,r)=>({...e,[r]:null})),{});let m=null;e(c)&&(m=new f(c),m.immutable=!0,y.$config=null);const _=u.scriptUsesGeometryEngine(h)&&u.enableGeometrySupport(),F=u.scriptUsesFeatureSet(h)&&u.enableFeatureSetSupport(),w=u.scriptIsAsync(h)&&u.enableAsyncSupport(),S={vars:y,spatialReference:d,useAsync:!!w},b=new f;b.immutable=!1,b.setField("scale",0);const $=u.compileScript(h,S);return await Promise.all([_,F,w]),new n(t,u,f,h,(e=>("$view"in e&&e.$view&&(b.setField("scale",e.$view.scale),e.$view=b),m&&(e.$config=m),$({vars:e,spatialReference:d}))),new p,i,d)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}export{n as A,i as a,s as b,c,a as l};
