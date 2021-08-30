// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Basemap ../Viewpoint ../core/asyncUtils ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/Logger ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/decorators/cast ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/accessorSupport/ensureType ../chunks/vec3 ../chunks/vec3f64 ../layers/Layer ../layers/mixins/OperationalLayer ../support/basemapUtils ../views/3d/support/mathUtils ../views/3d/support/viewpointUtils ../views/support/Scheduler ../webdoc/support/Thumbnail ./Lighting ./support/Description ./support/SlideEnvironment ./support/SlideGround ./support/SlideVisibleLayer ./support/Title".split(" "),
function(p,h,P,Q,R,G,S,g,T,z,A,n,fa,u,ha,U,D,H,E,V,W,I,X,Y,Z,t,aa,B,J,K,L,v){function M(e){if("building-scene"===e.type||"map-image"===e.type)return e.allSublayers.toArray()}function N(e){if(e=M(e))return e.filter(l=>l.visible).map(l=>l.id)}function ba(e,l){e=l-e;43200<e&&(e-=86400);-43200>e&&(e+=86400);return e}let ca=0;const F=G.ofType(L["default"]),da=T.getLogger("esri.webscene.Slide");g=function(e){function l(a){a=e.call(this,a)||this;a.id=Date.now().toString(16)+"-slide-"+ca++;a.title=new v;
a.description=new B;a.thumbnail=new t;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new J.SlideEnvironment;a.visibleLayers=new F;return a}p._inheritsLoose(l,e);var f=l.prototype;f.destroy=function(){this.visibleLayers.removeAll();this.basemap=null;this.thumbnail&&this.thumbnail.destroy();this.thumbnail=this.title=this.description=null};f.castTitle=function(a){return"string"===typeof a?new v({text:a}):D.ensureType(v,a)};f.castDescription=function(a){return"string"===typeof a?new B({text:a}):
D.ensureType(B,a)};f.castThumbnail=function(a){return"string"===typeof a?new t({url:a}):D.ensureType(t,a)};f.castBasemap=function(a){return I.ensureType(a)};f.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(b=>{if("string"===typeof b)return{id:b};if(b instanceof V){const c=N(b);return{id:b.id,sublayerIds:c}}if(b.id)return{id:b.id,sublayerIds:b.sublayerIds};da.warn('Invalid visible layer, expected { id }, Layer or "id"');return b}):null};f.clone=function(){return new this.constructor({id:this.id,
title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};f._updateVisibleLayersFrom=function(a){const b=[];return A.eachAlways(this._getLayers(a.map).map(c=>a.whenLayerView(c).then(d=>
{if(d.visible){const k=N(c);b.push(new L["default"]({id:d.layer.id,sublayerIds:k}))}})).toArray()).then(()=>{this.visibleLayers.removeAll();this.visibleLayers.addMany(b)})};f.updateFrom=function(a,b){b={screenshot:{format:"png",quality:80,width:120,height:75,disableDecorations:!0,...b&&b.screenshot}};return a.when(()=>{this.viewpoint=a.viewpoint.clone();this.environment.lighting=aa.prototype.clone.apply(a.environment.lighting);this.basemap=a.map.basemap&&a.map.basemap.clone()||null;this.ground=a.map.ground?
K.fromGround(a.map.ground):null;return this._updateVisibleLayersFrom(a)}).then(()=>a.takeScreenshot(b.screenshot)).then(c=>{this.thumbnail=new t({url:c.dataUrl});return this})};f.applyTo=function(){var a=p._asyncToGenerator(function*(b,c){var d=this;z.isSome(this._applyToController)&&this._applyToController.abort();let k=A.createAbortController();this._applyToController=k;const C=A.onAbortOrThrow(c,()=>k.abort()),m=b.resourceController.scheduler.registerTask(Z.TaskPriority.SLIDE);let w=!1;c={animate:!0,
...c,signal:this._applyToController.signal};var q=function(){var x=p._asyncToGenerator(function*(){m.schedule(()=>w=d._setViewpointOfInterest(b,c));yield m.schedule(()=>d._applyBasemap(b,c),c.signal);m.schedule(()=>d._applyLayerVisibility(b),c.signal);m.schedule(()=>d._applyGround(b),c.signal);yield m.schedule(()=>d._applyViewpoint(b,c),c.signal)});return function(){return x.apply(this,arguments)}}();q=yield R.result(b.addUpdatingPromise(q()));w&&(b.contentCamera=null);m.remove();this._applyToController===
k&&(this._applyToController=null);k=null;null==C?void 0:C.remove();if(!1===q.ok)throw q.error;return this});return function(b,c){return a.apply(this,arguments)}}();f._applyBasemap=function(){var a=p._asyncToGenerator(function*(b,c){if(this.basemap){try{yield this.basemap.load(c)}catch(d){if(A.isAbortError(d))throw d;}b.map.basemap=I.clonePreservingTiledLayers(this.basemap,b.map.basemap)}});return function(b,c){return a.apply(this,arguments)}}();f._applyGround=function(a){this.ground&&(a.map.ground=
this.ground.cloneAndApplyTo(a.map.ground))};f._getLayers=function(a){const b=new G;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};f._collectLayers=function(a,b){a.layers.forEach(c=>{W.isOperationalLayer(c)&&(b.add(c),"layers"in c&&this._collectLayers(c,b))})};f._applyLayerVisibility=function(a){this.visibleLayers&&this._getLayers(a.map).forEach(b=>{var c=this.visibleLayers.find(k=>k.id===b.id);b.visible=null!=c;const d=c&&c.sublayerIds;c=M(b);d&&c&&c.forEach(k=>k.visible=0<=d.indexOf(k.id))})};
f._setViewpointOfInterest=function(a,b){if(a.state.fixedContentCamera||!this.viewpoint||b.ignoreViewpoint||!b.useDestinationCamera)return!1;b=Y.toCamera(a,this.viewpoint);a.contentCamera=b;return z.isSome(b)};f._applyViewpoint=function(){var a=p._asyncToGenerator(function*(b,c){if(this.viewpoint&&!c.ignoreViewpoint){z.isSome(this.viewpoint.camera)&&(this.viewpoint.camera.fov=b.camera.fov);if(c.animate&&this.get("environment.lighting.date")){yield this._animateToLighting(b,c);return}c.animate&&(b.environment.applyLighting(this.environment.lighting.clone()),
yield b.goTo(this.viewpoint,c));b.viewpoint=this.viewpoint}b.environment.applyLighting(this.environment.lighting.clone())});return function(b,c){return a.apply(this,arguments)}}();f._animateToLighting=function(){var a=p._asyncToGenerator(function*(b,c){let d=null;"global"===b.viewingMode&&(d=this._animateLightingWithCamera(b));b.environment.lighting.cameraTrackingEnabled=!1;b.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&
(b.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);return b.goTo(this.viewpoint,c).then(()=>{b.environment.applyLighting(this.environment.lighting.clone());d&&d.remove();b.environment.lighting.cameraTrackingEnabled=!0},k=>{d&&d.remove();b.environment.lighting.cameraTrackingEnabled=!0;throw k;})});return function(b,c){return a.apply(this,arguments)}}();f._getTime=function(a){const b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,
a]};f._setTime=function(a,b,c){a.setTime(b);a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%3600%60);return a};f._animateLightingWithCamera=function(a){const [b,c]=this._getTime(new Date(a.environment.lighting.date.toString())),[d,k]=this._getTime(this.environment.lighting.date),C=ba(c,k),m=a.renderCoordsHelper,w=E.create();m.toRenderCoords(a.camera.position,w);const q=E.create(),x=E.create();z.isSome(this.viewpoint.camera)&&m.toRenderCoords(this.viewpoint.camera.position,q);const ea=
new Date;return a.watch("camera",r=>{m.toRenderCoords(r.position,x);var y=H.squaredDistance(w,x);const O=H.squaredDistance(q,x);r=0;0!==y+O&&(r=y/(y+O));y=b+(d-b)*r;r=X.moduloPositive(c+C*r,86400);a.environment.lighting.date=this._setTime(ea,y,r)})};l.createFrom=function(a,b){return(new this).updateFrom(a,b)};p._createClass(l,[{key:"visibleLayers",set:function(a){this._set("visibleLayers",S.referenceSetter(a,this._get("visibleLayers"),F))}}]);return l}(g.JSONSupport);h.__decorate([n.property({type:String,
json:{write:{isRequired:!0}}})],g.prototype,"id",void 0);h.__decorate([n.property({type:v,json:{default:()=>new v({text:""}),write:{isRequired:!0}}})],g.prototype,"title",void 0);h.__decorate([u.cast("title")],g.prototype,"castTitle",null);h.__decorate([n.property({type:B,json:{write:{overridePolicy(e){return{enabled:!(!e||!e.text)}}}}})],g.prototype,"description",void 0);h.__decorate([u.cast("description")],g.prototype,"castDescription",null);h.__decorate([n.property({type:t,json:{default:()=>new t({url:""}),
write:{isRequired:!0}}})],g.prototype,"thumbnail",void 0);h.__decorate([u.cast("thumbnail")],g.prototype,"castThumbnail",null);h.__decorate([n.property({type:Q,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"viewpoint",void 0);h.__decorate([n.property({type:P,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],g.prototype,"basemap",void 0);h.__decorate([u.cast("basemap")],g.prototype,"castBasemap",null);h.__decorate([n.property({type:K,json:{write:!0}})],g.prototype,"ground",void 0);
h.__decorate([n.property({type:F,json:{write:{isRequired:!0}}})],g.prototype,"visibleLayers",null);h.__decorate([u.cast("visibleLayers")],g.prototype,"castVisibleLayers",null);h.__decorate([n.property({type:J.SlideEnvironment,json:{write:!0}})],g.prototype,"environment",void 0);return g=h.__decorate([U.subclass("esri.webscene.Slide")],g)});