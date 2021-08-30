// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("require exports ../chunks/_rollupPluginBabelHelpers ../geometry ../core/maybe ../geometry/SpatialReference".split(" "),function(B,g,t,u,C,D){function z(){return v.apply(this,arguments)}function v(){v=t._asyncToGenerator(function*(){w||(w=t._asyncToGenerator(function*(){const c=yield new Promise(function(b,a){B(["./arcadeUtils"],b,a)});yield c.arcade.load();return{arcade:c.arcade,arcadeUtils:c,Dictionary:c.Dictionary,Feature:c.arcadeFeature}})());return w});return v.apply(this,arguments)}let w;
u=(c,b,a)=>n.create(c,b,a,null,["$feature","$view"]);let n=function(){function c(a,h,e,p,m,f,k,d){this.script=a;this.evaluate=m;this.fields=Array.isArray(k)?k:k.fields;this._syntaxTree=p;this._arcade=h;this._arcadeDictionary=e;this._arcadeFeature=f;this._spatialReference=d;this._referencesGeometry=h.scriptTouchesGeometry(this._syntaxTree);this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}c.create=function(){var a=t._asyncToGenerator(function*(h,e,p,m,f,k){const {arcade:d,
Feature:E,Dictionary:x}=yield z(),y=D.fromJSON(e);e=d.parseScript(h,k);f=f.reduce((l,F)=>({...l,[F]:null}),{});let q=null;C.isSome(m)&&(q=new x(m),q.immutable=!0,f.$config=null);m=d.scriptUsesGeometryEngine(e)&&d.enableGeometrySupport();k=d.scriptUsesFeatureSet(e)&&d.enableFeatureSetSupport();const A=d.scriptIsAsync(e)&&d.enableAsyncSupport();f={vars:f,spatialReference:y,useAsync:!!A};const r=new x;r.immutable=!1;r.setField("scale",0);const G=d.compileScript(e,f);yield Promise.all([m,k,A]);return new c(h,
d,x,e,l=>{"$view"in l&&l.$view&&(r.setField("scale",l.$view.scale),l.$view=r);q&&(l.$config=q);return G({vars:l,spatialReference:y})},new E,p,y)});return function(h,e,p,m,f,k){return a.apply(this,arguments)}}();var b=c.prototype;b.repurposeFeature=function(a){a.geometry&&!a.geometry.spatialReference&&(a.geometry.spatialReference=this._spatialReference);this._arcadeFeature.repurposeFromGraphicLikeObject(a.geometry,a.attributes,{fields:this.fields});return this._arcadeFeature};b.repurposeAdapter=function(a){this._arcadeFeature.repurposeFromAdapter(a,
{fields:this.fields});return this._arcadeFeature};b.createDictionary=function(){return new this._arcadeDictionary};b.referencesMember=function(a){return this._arcade.referencesMember(this._syntaxTree,a)};b.referencesFunction=function(a){return this._arcade.referencesFunction(this._syntaxTree,a)};b.referencesGeometry=function(){return this._referencesGeometry};b.referencesScale=function(){return this._referencesScale};b.extractFieldLiterals=function(a){return this._arcade.extractFieldLiterals(this._syntaxTree,
a)};return c}();g.ArcadeExpression=n;g.createDictionaryExpression=(c,b,a,h)=>n.create(c,b,a,h,["$feature","$view"]);g.createLabelExpression=(c,b,a)=>n.create(c,b,a,null,["$feature"]);g.createRendererExpression=u;g.createVVExpression=u;g.default=n;g.loadArcade=z;Object.defineProperty(g,"__esModule",{value:!0})});